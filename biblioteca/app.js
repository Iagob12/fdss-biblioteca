/* ==========================================================================
   FDSS +  ·  comportamento
   Os dados vêm de dados.js (window.FUNCOES e window.BIBLIOTECA).
   Nenhum texto dos dados passa por innerHTML: tudo entra como textContent.
   ========================================================================== */
(function () {
  "use strict";

  /* ---------- dados ---------- */

  const TIPOS_PADRAO = ["Prompt", "Skill", "Modelo", "Link", "Referência"];
  const CHAVE = { funcao: "fdss.funcao", favoritos: "fdss.favoritos", recentes: "fdss.recentes", vista: "fdss.vista" };
  const MAX_RECENTES = 8;

  const texto = (v) => (v == null ? "" : String(v));
  const lista = (v) =>
    (Array.isArray(v) ? v : v == null || v === "" ? [] : [v]).map((x) => texto(x).trim()).filter(Boolean);

  const FUNCOES = (Array.isArray(window.FUNCOES) ? window.FUNCOES : [])
    .filter((f) => f && f.id && f.nome)
    .map((f) => ({ id: texto(f.id), nome: texto(f.nome), sempre: !!f.sempre }));
  const FUNCAO = Object.create(null);
  FUNCOES.forEach((f) => { FUNCAO[f.id] = f; });

  const ITENS = [];
  const POR_ID = Object.create(null);
  (Array.isArray(window.BIBLIOTECA) ? window.BIBLIOTECA : []).forEach((b, n) => {
    if (!b || typeof b !== "object" || !texto(b.titulo).trim()) return;
    let id = texto(b.id).trim() || "item-" + (n + 1);
    while (POR_ID[id]) id += "-b";
    const item = {
      id,
      titulo: texto(b.titulo).trim(),
      tipo: texto(b.tipo).trim() || "Prompt",
      tema: texto(b.tema).trim(),
      funcoes: lista(b.funcoes),
      tags: lista(b.tags),
      descricao: texto(b.descricao).trim(),
      quando_usar: texto(b.quando_usar).trim(),
      conteudo: texto(b.conteudo),
      autor: texto(b.autor).trim(),
      atualizado_em: texto(b.atualizado_em).trim(),
      origem: texto(b.origem).trim()
    };
    POR_ID[id] = item;
    ITENS.push(item);
  });

  const TIPOS = TIPOS_PADRAO.slice();
  ITENS.forEach((i) => { if (TIPOS.indexOf(i.tipo) === -1) TIPOS.push(i.tipo); });

  /* ---------- texto: normalizar, comparar, destacar ---------- */

  // Sem acento e em minúsculas, mantendo o mesmo comprimento do original
  // (assim as posições encontradas valem para o texto original).
  const cacheLetra = Object.create(null);
  function norm(s) {
    s = texto(s);
    let r = "";
    for (let i = 0; i < s.length; i++) {
      const c = s[i];
      let n = cacheLetra[c];
      if (n === undefined) {
        n = c.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
        n = n.length === 1 ? n : n.charAt(0) || " ";
        cacheLetra[c] = n;
      }
      r += n;
    }
    return r;
  }

  // Distância de edição (com troca de letras vizinhas contando 1).
  function distancia(a, b) {
    const la = a.length, lb = b.length;
    if (Math.abs(la - lb) > 1) return 2;
    let ant2 = null;
    let ant = new Array(lb + 1);
    for (let j = 0; j <= lb; j++) ant[j] = j;
    for (let i = 1; i <= la; i++) {
      const atual = [i];
      for (let j = 1; j <= lb; j++) {
        const custo = a[i - 1] === b[j - 1] ? 0 : 1;
        let v = Math.min(ant[j] + 1, atual[j - 1] + 1, ant[j - 1] + custo);
        if (ant2 && i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
          v = Math.min(v, ant2[j - 2] + 1);
        }
        atual[j] = v;
      }
      ant2 = ant;
      ant = atual;
    }
    return ant[lb];
  }

  // A palavra começa com algo a um erro de digitação do termo?
  // Devolve o tamanho do começo que casou (0 se não casou).
  function comecoParecido(termo, palavra) {
    const L = termo.length;
    if (L < 4 || palavra.length < L - 1) return 0;
    if (!(termo[0] === palavra[0] || termo[1] === palavra[1] || termo[0] === palavra[1] || termo[1] === palavra[0])) return 0;
    const tamanhos = [L, L + 1, L - 1];
    for (let k = 0; k < 3; k++) {
      const t = tamanhos[k];
      if (t <= palavra.length && distancia(termo, palavra.slice(0, t)) <= 1) return t;
    }
    return 0;
  }

  const palavrasDe = (n) => Array.from(new Set(n.match(/[a-z0-9]+/g) || []));
  const termosDe = (q) => norm(q).split(/[^a-z0-9]+/).filter(Boolean);

  // Posições [início, fim] onde os termos aparecem no texto.
  function faixas(original, termos) {
    const n = norm(original);
    const fs = [];
    termos.forEach((t) => {
      let i = n.indexOf(t);
      let achou = false;
      while (i !== -1) {
        fs.push([i, i + t.length]);
        achou = true;
        i = n.indexOf(t, i + t.length);
      }
      if (!achou && t.length >= 4) {
        const re = /[a-z0-9]+/g;
        let m;
        while ((m = re.exec(n))) {
          const c = comecoParecido(t, m[0]);
          if (c) fs.push([m.index, m.index + c]);
        }
      }
    });
    fs.sort((a, b) => a[0] - b[0]);
    const juntas = [];
    fs.forEach((f) => {
      const u = juntas[juntas.length - 1];
      if (u && f[0] <= u[1]) u[1] = Math.max(u[1], f[1]);
      else juntas.push([f[0], f[1]]);
    });
    return juntas;
  }

  // Fragmento com os termos encontrados dentro de <mark>.
  function destacar(original, termos) {
    const frag = document.createDocumentFragment();
    const fs = termos && termos.length ? faixas(original, termos) : [];
    let pos = 0;
    fs.forEach((f) => {
      if (f[0] > pos) frag.appendChild(document.createTextNode(original.slice(pos, f[0])));
      const m = document.createElement("mark");
      m.textContent = original.slice(f[0], f[1]);
      frag.appendChild(m);
      pos = f[1];
    });
    if (pos < original.length) frag.appendChild(document.createTextNode(original.slice(pos)));
    return frag;
  }

  function trecho(original, termos) {
    if (!original) return "";
    const fs = faixas(original, termos);
    if (!fs.length) return "";
    const ini = Math.max(0, fs[0][0] - 45);
    const fim = Math.min(original.length, fs[0][1] + 110);
    let meio = original.slice(ini, fim);
    if (ini > 0) meio = meio.replace(/^\S*\s+/, "");     // não começa no meio de uma palavra
    if (fim < original.length) meio = meio.replace(/\s+\S*$/, "");
    meio = meio.replace(/\s+/g, " ").trim();
    return (ini > 0 ? "… " : "") + meio + (fim < original.length ? " …" : "");
  }

  /* ---------- índice de busca ---------- */

  const CAMPOS = [
    { chave: "titulo", nivel: 4, pontos: 1000 },
    { chave: "tags", nivel: 3, pontos: 500 },
    { chave: "descricao", nivel: 2, pontos: 200 },
    { chave: "conteudo", nivel: 1, pontos: 100 }
  ];

  const INDICE = ITENS.map((item) => {
    const r = { item };
    const bruto = {
      titulo: item.titulo,
      tags: item.tags.join(" "),
      descricao: item.descricao,
      conteudo: item.quando_usar + "\n" + item.conteudo
    };
    CAMPOS.forEach((c) => {
      const n = norm(bruto[c.chave]);
      r[c.chave] = { texto: n, palavras: palavrasDe(n) };
    });
    return r;
  });

  function melhorCampo(r, termo) {
    for (let i = 0; i < CAMPOS.length; i++) {
      const c = CAMPOS[i];
      if (r[c.chave].texto.indexOf(termo) !== -1) return { nivel: c.nivel, pontos: c.pontos };
    }
    if (termo.length < 4) return null;
    for (let i = 0; i < CAMPOS.length; i++) {
      const c = CAMPOS[i];
      const ps = r[c.chave].palavras;
      for (let j = 0; j < ps.length; j++) {
        if (comecoParecido(termo, ps[j])) return { nivel: c.nivel, pontos: c.pontos * 0.6 };
      }
    }
    return null;
  }

  /* ---------- temas ---------- */

  // A ordem vem de window.TEMAS (dados.js); temas usados só nos itens entram no fim.
  const SEM_TEMA = "Outros";
  const TEMAS = lista(window.TEMAS);
  ITENS.forEach((i) => {
    if (!i.tema) return;
    const igual = TEMAS.find((t) => norm(t) === norm(i.tema));
    if (igual) i.tema = igual; else TEMAS.push(i.tema);
  });
  const TEM_TEMAS = ITENS.some((i) => i.tema);
  if (TEM_TEMAS && ITENS.some((i) => !i.tema)) TEMAS.push(SEM_TEMA);
  const temaDe = (i) => i.tema || SEM_TEMA;

  /* ---------- memória do navegador ---------- */

  function ler(chave, padrao) {
    try {
      const v = localStorage.getItem(chave);
      return v == null ? padrao : JSON.parse(v);
    } catch (e) { return padrao; }
  }
  function gravar(chave, valor) {
    try { localStorage.setItem(chave, JSON.stringify(valor)); } catch (e) { /* sem armazenamento: segue sem lembrar */ }
  }

  let favoritos = lista(ler(CHAVE.favoritos, []));
  let recentes = lista(ler(CHAVE.recentes, []));
  const ehFavorito = (id) => favoritos.indexOf(id) !== -1;

  /* ---------- estado e URL ---------- */

  const estado = {
    funcao: "", tipo: "", tema: "", tag: "", q: "", item: "",
    vista: ler(CHAVE.vista, "lista") === "cartoes" ? "cartoes" : "lista"
  };

  (function lerURL() {
    const p = new URLSearchParams(location.search);
    const f = p.get("funcao");
    if (f != null) estado.funcao = FUNCAO[f] ? f : "";
    else {
      const lembrada = ler(CHAVE.funcao, "");
      estado.funcao = FUNCAO[lembrada] ? lembrada : "";
    }
    const t = p.get("tipo");
    if (t) estado.tipo = TIPOS.find((x) => norm(x) === norm(t)) || "";
    const tm = p.get("tema");
    if (tm) estado.tema = TEMAS.find((x) => norm(x) === norm(tm)) || "";
    estado.tag = (p.get("tag") || "").trim();
    estado.q = p.get("q") || "";
    estado.item = p.get("item") || "";
  })();

  function gravarURL() {
    const p = new URLSearchParams();
    p.set("funcao", estado.funcao || "todas");
    if (estado.tipo) p.set("tipo", estado.tipo);
    if (estado.tema) p.set("tema", estado.tema);
    if (estado.tag) p.set("tag", estado.tag);
    if (estado.q.trim()) p.set("q", estado.q.trim());
    if (estado.item) p.set("item", estado.item);
    try { history.replaceState(null, "", "?" + p.toString()); } catch (e) { /* alguns navegadores bloqueiam em arquivo local */ }
  }

  /* ---------- pequenos ajudantes de DOM ---------- */

  const $ = (id) => document.getElementById(id);

  function el(tag, attrs, filhos) {
    const n = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach((k) => {
        const v = attrs[k];
        if (v == null || v === false) return;
        if (k === "class") n.className = v;
        else if (k === "text") n.textContent = v;
        else if (k.slice(0, 2) === "on") n.addEventListener(k.slice(2), v);
        else n.setAttribute(k, v === true ? "" : v);
      });
    }
    (filhos || []).forEach((f) => {
      if (f == null || f === false) return;
      n.appendChild(typeof f === "string" ? document.createTextNode(f) : f);
    });
    return n;
  }

  const DESENHOS = {
    estrela: "M12 3.6l2.6 5.3 5.8.8-4.2 4.1 1 5.8L12 16.9l-5.2 2.700 1-5.800-4.200-4.100 5.800-.800z",
    fechar: "M6 6l12 12M18 6L6 18",
    copiar: "M9 9h10v10H9zM5 15V5h10",
    ok: "M5 12.5l4.5 4.5L19 7.5",
    link: "M14 5h5v5M19 5l-8 8M11 7H6v11h11v-5",
    mais: "M12 5v14M5 12h14"
  };
  function icone(nome, classe) {
    const NS = "http://www.w3.org/2000/svg";
    const s = document.createElementNS(NS, "svg");
    s.setAttribute("viewBox", "0 0 24 24");
    s.setAttribute("class", "ic" + (classe ? " " + classe : ""));
    s.setAttribute("aria-hidden", "true");
    s.setAttribute("focusable", "false");
    const p = document.createElementNS(NS, "path");
    p.setAttribute("d", DESENHOS[nome]);
    s.appendChild(p);
    return s;
  }

  function limpar(no) { while (no.firstChild) no.removeChild(no.firstChild); }

  const nomeFuncao = (id) => (FUNCAO[id] ? FUNCAO[id].nome : id);

  function dataLegivel(s) {
    const m = /^(\d{4})-(\d{2})(?:-(\d{2}))?$/.exec(s);
    if (!m) return s;
    return (m[3] ? m[3] + "/" : "") + m[2] + "/" + m[1];
  }

  const ehLink = (s) => /^https?:\/\/\S+$/i.test(s.trim());

  /* ---------- elementos fixos ---------- */

  const busca = $("busca");
  const elFuncoes = $("funcoes");
  const elTipos = $("tipos");
  const elTemas = $("temas");
  const elAtalhos = $("atalhos");
  const elResumo = $("resumo");
  const elFiltros = $("filtros-ativos");
  const grade = $("grade");
  const vazio = $("vazio");
  const dlgDetalhe = $("detalhe");
  const dlgAdicionar = $("adicionar");
  const aviso = $("aviso");

  /* ---------- copiar ---------- */

  function copiaAntiga(t) {
    const pai = dlgDetalhe.open ? dlgDetalhe : dlgAdicionar.open ? dlgAdicionar : document.body;
    const foco = document.activeElement;
    const ta = el("textarea", { readonly: true, "aria-hidden": "true", tabindex: "-1" });
    ta.value = t;
    ta.style.cssText = "position:fixed;top:0;left:0;width:1px;height:1px;opacity:0;";
    pai.appendChild(ta);
    ta.select();
    let ok = false;
    try { ok = document.execCommand("copy"); } catch (e) { ok = false; }
    pai.removeChild(ta);
    if (foco && foco.focus) foco.focus();
    return ok;
  }

  function copiarTexto(t) {
    const cair = () => (copiaAntiga(t) ? Promise.resolve() : Promise.reject(new Error("copia")));
    if (navigator.clipboard && navigator.clipboard.writeText && window.isSecureContext) {
      return navigator.clipboard.writeText(t).catch(cair);
    }
    return cair();
  }

  let relogioAviso = 0;
  function avisar(msg) {
    const pai = dlgDetalhe.open ? dlgDetalhe : dlgAdicionar.open ? dlgAdicionar : document.body;
    if (aviso.parentNode !== pai) pai.appendChild(aviso);
    aviso.textContent = msg;
    aviso.classList.add("visivel");
    clearTimeout(relogioAviso);
    relogioAviso = setTimeout(() => aviso.classList.remove("visivel"), 2200);
  }

  function confirmarBotao(botao) {
    if (!botao) return;
    const rotulo = botao.querySelector(".btn-texto");
    if (rotulo && !botao.dataset.rotulo) botao.dataset.rotulo = rotulo.textContent;
    botao.classList.add("copiado");
    if (rotulo) rotulo.textContent = "Copiado";
    clearTimeout(botao._relogio);
    botao._relogio = setTimeout(() => {
      botao.classList.remove("copiado");
      if (rotulo) rotulo.textContent = botao.dataset.rotulo;
    }, 1700);
  }

  function botaoCopiar(rotulo, classe) {
    return el("button", { class: "btn btn-acao " + (classe || ""), type: "button" }, [
      icone("copiar", "ic-copiar"), icone("ok", "ic-ok"), el("span", { class: "btn-texto", text: rotulo })
    ]);
  }

  // Trechos entre colchetes com palavras viram campos: [NOME], [seu nicho],
  // [SERVIÇO 1 — PREÇO], [TIPO DE APP: lista / jogo].
  // Links em markdown [texto](url) e marcadores sem palavras, como [2] e [@], ficam como estão.
  const RE_VAR = /\[([^\[\]\n]{2,120})\](?!\()/g;
  function ehVariavel(s, antes) {
    if (!/[A-Za-zÀ-ÿ]{2,}/.test(s)) return false;
    // pacote[extra] em comandos de instalação (headroom-ai[all], earshot[mcp]) não é campo
    if (/[A-Za-zÀ-ÿ]/.test(antes || "") && s === s.toLowerCase()) return false;
    return true;
  }

  function partesDe(conteudo) {
    const partes = [];
    let pos = 0;
    let m;
    RE_VAR.lastIndex = 0;
    while ((m = RE_VAR.exec(conteudo))) {
      if (!ehVariavel(m[1], conteudo.charAt(m.index - 1))) continue;
      if (m.index > pos) partes.push({ texto: conteudo.slice(pos, m.index) });
      partes.push({ variavel: m[1], texto: m[0] });
      pos = m.index + m[0].length;
    }
    if (pos < conteudo.length) partes.push({ texto: conteudo.slice(pos) });
    return partes;
  }

  function textoParaCopiar(item, valores) {
    const base = item.conteudo.trim() ? item.conteudo : item.origem || item.titulo;
    if (!valores || !item.conteudo.trim()) return base;
    return partesDe(item.conteudo)
      .map((p) => (p.variavel && texto(valores[p.variavel]).trim() ? valores[p.variavel] : p.texto))
      .join("");
  }

  function copiarItem(item, botao, valores) {
    return copiarTexto(textoParaCopiar(item, valores)).then(() => {
      confirmarBotao(botao);
      avisar("Copiado: " + item.titulo);
      recentes = [item.id].concat(recentes.filter((id) => id !== item.id)).slice(0, MAX_RECENTES);
      gravar(CHAVE.recentes, recentes);
      desenharAtalhos();
    }, () => {
      avisar("Não deu para copiar. Abra o item e selecione o texto.");
    });
  }

  /* ---------- favoritos ---------- */

  function alternarFavorito(id) {
    favoritos = ehFavorito(id) ? favoritos.filter((x) => x !== id) : [id].concat(favoritos);
    gravar(CHAVE.favoritos, favoritos);
    const era = document.activeElement && document.activeElement.closest ? document.activeElement.closest(".cartao") : null;
    const idFoco = era ? era.dataset.id : "";
    desenhar();
    if (idFoco) {
      const b = grade.querySelector('.cartao[data-id="' + cssEscape(idFoco) + '"] .fav');
      if (b) b.focus();
    }
    avisar(ehFavorito(id) ? "Adicionado aos favoritos" : "Removido dos favoritos");
  }

  function cssEscape(s) {
    return window.CSS && CSS.escape ? CSS.escape(s) : s.replace(/["\\]/g, "\\$&");
  }

  function botaoFavorito(item) {
    const ativo = ehFavorito(item.id);
    return el("button", {
      class: "btn-icone fav", type: "button", "aria-pressed": ativo ? "true" : "false",
      "aria-label": (ativo ? "Tirar dos favoritos: " : "Favoritar: ") + item.titulo,
      title: ativo ? "Tirar dos favoritos" : "Favoritar"
    }, [icone("estrela")]);
  }

  /* ---------- consulta ---------- */

  function passa(item, f) {
    if (f.funcao && item.funcoes.indexOf(f.funcao) === -1 && !item.funcoes.some((id) => FUNCAO[id] && FUNCAO[id].sempre)) return false;
    if (f.tipo && item.tipo !== f.tipo) return false;
    if (f.tema && temaDe(item) !== f.tema) return false;
    if (f.tag && !item.tags.some((t) => norm(t) === norm(f.tag))) return false;
    return true;
  }

  function consultar() {
    const termos = termosDe(estado.q);
    const achados = [];
    INDICE.forEach((r) => {
      let nivel = 0, pontos = 0;
      for (let i = 0; i < termos.length; i++) {
        const m = melhorCampo(r, termos[i]);
        if (!m) return;
        nivel = Math.max(nivel, m.nivel);
        pontos += m.pontos;
      }
      achados.push({ item: r.item, nivel, pontos });
    });
    const fav = (a) => (ehFavorito(a.item.id) ? 1 : 0);
    const alfa = (a, b) => a.item.titulo.localeCompare(b.item.titulo, "pt-BR");
    achados.sort(termos.length
      ? (a, b) => b.nivel - a.nivel || fav(b) - fav(a) || b.pontos - a.pontos || alfa(a, b)
      : (a, b) => fav(b) - fav(a) || alfa(a, b));
    return { termos, achados };
  }

  /* ---------- desenhar ---------- */

  let visiveis = [];
  let ativo = -1;

  function desenhar() {
    const c = consultar();
    const conta = (f) => c.achados.filter((a) => passa(a.item, f)).length;
    visiveis = c.achados.filter((a) => passa(a.item, estado));

    // funções
    limpar(elFuncoes);
    [{ id: "", nome: "Todas" }].concat(FUNCOES).forEach((f) => {
      const n = conta({ funcao: f.id, tipo: estado.tipo, tema: estado.tema, tag: estado.tag });
      elFuncoes.appendChild(el("button", {
        class: "funcao", type: "button", "aria-pressed": estado.funcao === f.id ? "true" : "false",
        "aria-label": f.nome + ", " + n + (n === 1 ? " item" : " itens"),
        onclick: () => escolherFuncao(f.id)
      }, [el("span", { text: f.nome }), el("span", { class: "contagem", text: String(n) })]));
    });

    // tipos
    limpar(elTipos);
    elTipos.appendChild(el("span", { class: "rotulo", text: "Tipo" }));
    [""].concat(TIPOS).forEach((t) => {
      const n = conta({ funcao: estado.funcao, tipo: t, tema: estado.tema, tag: estado.tag });
      elTipos.appendChild(el("button", {
        class: "tipo", type: "button", "aria-pressed": estado.tipo === t ? "true" : "false",
        "aria-label": (t || "Todos os tipos") + ", " + n + (n === 1 ? " item" : " itens"),
        onclick: () => { estado.tipo = t; aplicar(); }
      }, [el("span", { text: t || "Todos os tipos" }), el("small", { text: String(n) })]));
    });

    // temas (somem os que ficariam com zero itens)
    limpar(elTemas);
    elTemas.hidden = !TEM_TEMAS;
    if (TEM_TEMAS) {
      elTemas.appendChild(el("span", { class: "rotulo", text: "Tema" }));
      [""].concat(TEMAS).forEach((t) => {
        const n = conta({ funcao: estado.funcao, tipo: estado.tipo, tema: t, tag: estado.tag });
        if (t && !n && estado.tema !== t) return;
        elTemas.appendChild(el("button", {
          class: "tema", type: "button", "aria-pressed": estado.tema === t ? "true" : "false",
          "aria-label": (t || "Todos os temas") + ", " + n + (n === 1 ? " item" : " itens"),
          onclick: () => { estado.tema = t; aplicar(); }
        }, [el("span", { text: t || "Todos os temas" }), el("small", { text: String(n) })]));
      });
    }

    document.querySelectorAll(".vista button").forEach((b) => {
      b.setAttribute("aria-pressed", b.dataset.vista === estado.vista ? "true" : "false");
    });

    desenharAtalhos();
    desenharResumo(c);
    desenharGrade(c);
  }

  function desenharResumo(c) {
    limpar(elResumo);
    limpar(elFiltros);
    if (!ITENS.length) return;
    const n = visiveis.length;
    elResumo.appendChild(el("strong", { text: String(n) }));
    let frase = c.termos.length ? (n === 1 ? " resultado" : " resultados") : (n === 1 ? " item" : " itens");
    if (estado.q.trim()) frase += " para “" + estado.q.trim() + "”";
    if (estado.funcao) frase += " em " + nomeFuncao(estado.funcao);
    elResumo.appendChild(document.createTextNode(frase));

    if (estado.tag) {
      elFiltros.appendChild(el("button", {
        class: "filtro-ativo", type: "button", "aria-label": "Remover filtro da tag " + estado.tag,
        onclick: () => { estado.tag = ""; aplicar(); }
      }, [el("span", { text: "#" + estado.tag }), icone("fechar")]));
    }
    if (estado.tag || estado.tipo || estado.tema || estado.q.trim()) {
      elFiltros.appendChild(el("button", { class: "link-botao", type: "button", text: "Limpar filtros", onclick: () => limparFiltros(false) }));
    }
  }

  function desenharGrade(c) {
    limpar(grade);
    limpar(vazio);

    if (!visiveis.length) {
      grade.hidden = true;
      vazio.hidden = false;
      ativo = -1;
      desenharVazio(c);
      return;
    }
    grade.hidden = false;
    vazio.hidden = true;

    const novaLista = () => el("ul", { class: "grade" + (estado.vista === "lista" ? " lista" : "") });
    const doItem = (a) => el("li", null, [cartao(a.item, c.termos)]);

    if (TEM_TEMAS && !c.termos.length) {
      // sem busca: agrupa por tema, na ordem de window.TEMAS (a ordem interna é mantida)
      const posicao = (a) => TEMAS.indexOf(temaDe(a.item));
      visiveis = visiveis.map((a, i) => ({ a, i })).sort((x, y) => posicao(x.a) - posicao(y.a) || x.i - y.i).map((x) => x.a);
      TEMAS.forEach((tema, n) => {
        const itens = visiveis.filter((a) => temaDe(a.item) === tema);
        if (!itens.length) return;
        const ul = novaLista();
        itens.forEach((a) => ul.appendChild(doItem(a)));
        grade.appendChild(el("section", { class: "grupo", "aria-labelledby": "grupo-" + n }, [
          el("h2", { class: "grupo-titulo", id: "grupo-" + n }, [
            el("span", { text: tema }), el("span", { class: "contagem", text: String(itens.length) })
          ]),
          ul
        ]));
      });
    } else {
      // com busca: lista única, do mais ao menos relevante
      const ul = novaLista();
      visiveis.forEach((a) => ul.appendChild(doItem(a)));
      grade.appendChild(ul);
    }

    ativo = c.termos.length ? 0 : -1;
    marcarAtivo();
  }

  function cartao(item, termos) {
    const titulo = el("button", { class: "cartao-titulo", type: "button", onclick: () => abrirDetalhe(item.id) });
    titulo.appendChild(destacar(item.titulo, termos));

    const fav = botaoFavorito(item);
    fav.addEventListener("click", () => alternarFavorito(item.id));

    const copiar = botaoCopiar("Copiar", "btn-pequeno copiar");
    copiar.setAttribute("aria-label", "Copiar: " + item.titulo);
    copiar.addEventListener("click", () => copiarItem(item, copiar));

    const filhos = [
      el("div", { class: "cartao-topo" }, [el("span", { class: "selo", text: item.tipo }), fav]),
      el("h3", null, [titulo])
    ];

    if (item.descricao) {
      const d = el("p", { class: "cartao-desc", title: item.descricao });
      d.appendChild(destacar(item.descricao, termos));
      filhos.push(d);
    }

    // Termo que só aparece no conteúdo: mostra o trecho onde foi encontrado.
    if (termos.length) {
      const visivel = [item.titulo, item.descricao, item.tags.join(" ")].join("\n");
      const fora = termos.filter((t) => !faixas(visivel, [t]).length);
      if (fora.length) {
        const t = trecho(item.quando_usar, fora) || trecho(item.conteudo, fora);
        if (t) {
          const p = el("p", { class: "cartao-trecho" });
          p.appendChild(destacar(t, termos));
          filhos.push(p);
        }
      }
    }

    if (item.funcoes.length) {
      filhos.push(el("p", { class: "cartao-funcoes", text: item.funcoes.map(nomeFuncao).join(" · ") }));
    }

    if (item.tags.length) {
      filhos.push(el("ul", { class: "tags", "aria-label": "Tags" }, item.tags.map((t) => {
        const b = el("button", {
          class: "tag", type: "button", "aria-pressed": norm(t) === norm(estado.tag) ? "true" : "false",
          "aria-label": "Filtrar pela tag " + t,
          onclick: () => { estado.tag = norm(t) === norm(estado.tag) ? "" : t; aplicar(); }
        });
        b.appendChild(document.createTextNode("#"));
        b.appendChild(destacar(t, termos));
        return el("li", null, [b]);
      })));
    }

    filhos.push(el("div", { class: "cartao-acoes" }, [copiar]));
    return el("article", { class: "cartao", "data-id": item.id }, filhos);
  }

  function simboloVazio() {
    const NS = "http://www.w3.org/2000/svg";
    const s = document.createElementNS(NS, "svg");
    s.setAttribute("viewBox", "0 0 32 32");
    s.setAttribute("class", "vazio-simbolo");
    s.setAttribute("aria-hidden", "true");
    const c = document.createElementNS(NS, "circle");
    c.setAttribute("cx", "16"); c.setAttribute("cy", "16"); c.setAttribute("r", "14.500");
    c.setAttribute("fill", "none"); c.setAttribute("stroke", "#40515a"); c.setAttribute("stroke-width", "1.500");
    const p = document.createElementNS(NS, "path");
    p.setAttribute("d", "M9.5 19.5c3.200 2.600 6 .600 6.500-3.500s3.300-6.100 6.500-3.500");
    p.setAttribute("fill", "none"); p.setAttribute("stroke", "#22c9a8"); p.setAttribute("stroke-width", "2.400"); p.setAttribute("stroke-linecap", "round");
    s.appendChild(c); s.appendChild(p);
    return s;
  }

  function desenharVazio(c) {
    vazio.appendChild(simboloVazio());

    if (!ITENS.length) {
      vazio.appendChild(el("h2", { text: "A biblioteca ainda está vazia" }));
      vazio.appendChild(el("p", { text: "Use “Adicionar” para montar o primeiro item. O site gera o bloco pronto para colar no arquivo dados.js." }));
      vazio.appendChild(el("div", { class: "vazio-acoes" }, [
        el("button", { class: "btn btn-acao", type: "button", onclick: abrirAdicionar }, [icone("mais"), el("span", { text: "Adicionar o primeiro item" })])
      ]));
      return;
    }

    const q = estado.q.trim();
    vazio.appendChild(el("h2", { text: q ? "Nenhum resultado para “" + q + "”" : "Nenhum item com esses filtros" }));

    const ativos = [];
    if (estado.funcao) ativos.push("função " + nomeFuncao(estado.funcao));
    if (estado.tipo) ativos.push("tipo " + estado.tipo);
    if (estado.tema) ativos.push("tema " + estado.tema);
    if (estado.tag) ativos.push("tag #" + estado.tag);
    vazio.appendChild(el("p", {
      text: (ativos.length ? "Filtros ligados: " + ativos.join(", ") + ". " : "") +
        (q ? "Confira a escrita ou tente uma palavra mais curta." : "Tire um filtro para ver mais itens.")
    }));

    const acoes = el("div", { class: "vazio-acoes" });
    const emTodas = c.achados.length;
    if (q && emTodas && (estado.funcao || estado.tipo || estado.tema || estado.tag)) {
      acoes.appendChild(el("button", {
        class: "btn btn-acao", type: "button",
        text: "Ver " + emTodas + (emTodas === 1 ? " resultado" : " resultados") + " sem filtros",
        onclick: () => { estado.funcao = ""; estado.tipo = ""; estado.tema = ""; estado.tag = ""; gravar(CHAVE.funcao, ""); aplicar(); }
      }));
    }
    acoes.appendChild(el("button", {
      class: "btn " + (acoes.firstChild ? "btn-fantasma" : "btn-acao"), type: "button", text: "Limpar filtros",
      onclick: () => limparFiltros(true)
    }));
    vazio.appendChild(acoes);
  }

  function desenharAtalhos() {
    limpar(elAtalhos);
    const grupos = [
      { titulo: "Favoritos", ids: favoritos },
      { titulo: "Usados recentemente", ids: recentes }
    ];
    let tem = false;
    grupos.forEach((g, n) => {
      const itens = g.ids.map((id) => POR_ID[id]).filter(Boolean);
      if (!itens.length) return;
      tem = true;
      const idTitulo = "atalho-titulo-" + n;
      const ul = el("ul", { class: "atalho-lista", "aria-labelledby": idTitulo }, itens.map((item) => {
        const copiar = el("button", { class: "btn-icone", type: "button", "aria-label": "Copiar: " + item.titulo, title: "Copiar" },
          [icone("copiar", "ic-copiar"), icone("ok", "ic-ok")]);
        copiar.addEventListener("click", () => {
          copiarTexto(textoParaCopiar(item)).then(() => { confirmarBotao(copiar); avisar("Copiado: " + item.titulo); },
            () => avisar("Não deu para copiar. Abra o item e selecione o texto."));
        });
        return el("li", { class: "atalho" }, [
          el("button", { class: "atalho-abrir", type: "button", text: item.titulo, title: item.titulo, onclick: () => abrirDetalhe(item.id) }),
          copiar
        ]);
      }));
      elAtalhos.appendChild(el("div", { class: "atalho-linha" }, [el("h2", { class: "atalho-titulo", id: idTitulo, text: g.titulo }), ul]));
    });
    elAtalhos.hidden = !tem;
  }

  /* ---------- ações de filtro ---------- */

  function aplicar() {
    gravarURL();
    desenhar();
  }

  function escolherFuncao(id) {
    estado.funcao = id;
    gravar(CHAVE.funcao, id);
    aplicar();
    const b = elFuncoes.querySelector('[aria-pressed="true"]');
    if (b) { b.focus({ preventScroll: true }); b.scrollIntoView({ block: "nearest", inline: "center" }); }
  }

  function limparFiltros(tudo) {
    estado.tipo = "";
    estado.tema = "";
    estado.tag = "";
    estado.q = "";
    busca.value = "";
    if (tudo) { estado.funcao = ""; gravar(CHAVE.funcao, ""); }
    aplicar();
    busca.focus();
  }

  /* ---------- navegação pelo teclado ---------- */

  function marcarAtivo() {
    const cs = grade.querySelectorAll(".cartao");
    for (let i = 0; i < cs.length; i++) cs[i].classList.toggle("ativo", i === ativo);
    return cs;
  }

  function definirAtivo(i, focar) {
    if (!visiveis.length) { ativo = -1; return; }
    ativo = Math.max(0, Math.min(visiveis.length - 1, i));
    const c = marcarAtivo()[ativo];
    if (!c) return;
    c.scrollIntoView({ block: "nearest" });
    if (focar) c.querySelector(".cartao-titulo").focus({ preventScroll: true });
  }

  // Cartão logo acima ou abaixo (na linha mais próxima, o mais alinhado na horizontal).
  // Funciona com grupos de tamanhos diferentes e nos dois modos de exibição.
  function vizinhoVertical(i, sinal) {
    const cs = grade.querySelectorAll(".cartao");
    if (!cs[i]) return -1;
    const r = cs[i].getBoundingClientRect();
    const cx = r.left + r.width / 2;
    let melhor = -1, dy = Infinity, dx = Infinity;
    for (let j = 0; j < cs.length; j++) {
      if (j === i) continue;
      const b = cs[j].getBoundingClientRect();
      const d = sinal > 0 ? b.top - r.bottom + 4 : r.top - b.bottom + 4;
      if (d < 0) continue;
      const x = Math.abs(b.left + b.width / 2 - cx);
      if (d < dy - 4 || (Math.abs(d - dy) <= 4 && x < dx)) { melhor = j; dy = d; dx = x; }
    }
    return melhor;
  }

  grade.addEventListener("focusin", (e) => {
    const c = e.target.closest(".cartao");
    if (!c) return;
    const i = Array.prototype.indexOf.call(grade.querySelectorAll(".cartao"), c);
    if (i !== -1) { ativo = i; marcarAtivo(); }
  });

  function temSelecao(alvo) {
    if (alvo && (alvo.tagName === "INPUT" || alvo.tagName === "TEXTAREA")) {
      try { if (alvo.selectionStart !== alvo.selectionEnd) return true; } catch (e) { /* tipos sem seleção */ }
    }
    const s = window.getSelection ? String(window.getSelection()) : "";
    return s.length > 0;
  }

  document.addEventListener("keydown", (e) => {
    const alvo = e.target;
    const digitando = alvo && (/^(INPUT|TEXTAREA|SELECT)$/.test(alvo.tagName) || alvo.isContentEditable);
    const naBusca = alvo === busca;
    const dialogo = dlgDetalhe.open || dlgAdicionar.open;
    const comando = e.ctrlKey || e.metaKey;

    // Ctrl+C copia o item aberto ou o item em destaque (se não houver texto selecionado)
    if (comando && !e.shiftKey && !e.altKey && e.key.toLowerCase() === "c") {
      if (dlgAdicionar.open || temSelecao(alvo)) return;
      if (dlgDetalhe.open && itemAberto) {
        e.preventDefault();
        copiarItem(itemAberto, dlgDetalhe.querySelector(".copiar-detalhe"), valoresAbertos);
      } else if (!dialogo && ativo >= 0 && visiveis[ativo]) {
        e.preventDefault();
        const c = grade.querySelectorAll(".cartao")[ativo];
        copiarItem(visiveis[ativo].item, c ? c.querySelector(".copiar") : null);
      }
      return;
    }

    if (dialogo || comando || e.altKey) return;

    if (e.key === "/" && !digitando) {
      e.preventDefault();
      busca.focus();
      busca.select();
      return;
    }

    if (e.key === "Escape") {
      if (estado.q) {
        e.preventDefault();
        estado.q = "";
        busca.value = "";
        aplicar();
        busca.focus();
      } else if (naBusca) {
        busca.blur();
      }
      return;
    }

    if (e.key === "Enter" && naBusca) {
      if (ativo >= 0 && visiveis[ativo]) { e.preventDefault(); abrirDetalhe(visiveis[ativo].item.id); }
      return;
    }

    const vertical = e.key === "ArrowDown" || e.key === "ArrowUp";
    const horizontal = e.key === "ArrowRight" || e.key === "ArrowLeft";
    if (!vertical && !horizontal) return;
    if (!visiveis.length) return;
    if (naBusca ? horizontal : digitando) return;
    if (!naBusca && alvo.closest && !alvo.closest(".grupos") && alvo !== document.body) return;

    e.preventDefault();
    const sinal = e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : -1;
    if (naBusca) {
      definirAtivo(ativo < 0 ? 0 : ativo + sinal, false);
      return;
    }
    if (ativo < 0) { definirAtivo(0, true); return; }
    const novo = vertical ? vizinhoVertical(ativo, sinal) : ativo + sinal;
    if (novo < 0) { if (sinal < 0) busca.focus(); return; }
    if (novo > visiveis.length - 1) return;
    definirAtivo(novo, true);
  });

  busca.addEventListener("input", () => {
    estado.q = busca.value;
    aplicar();
  });

  /* ---------- detalhe ---------- */

  let itemAberto = null;
  let valoresAbertos = {};

  function abrirDetalhe(id) {
    const item = POR_ID[id];
    if (!item) return;
    itemAberto = item;
    valoresAbertos = {};
    estado.item = id;
    gravarURL();
    montarDetalhe(item);
    if (!dlgDetalhe.open) dlgDetalhe.showModal();
    const corpo = dlgDetalhe.querySelector(".painel-corpo");
    if (corpo) corpo.scrollTop = 0;
    const primeiro = dlgDetalhe.querySelector(".variavel textarea") || dlgDetalhe.querySelector(".copiar-detalhe");
    if (primeiro) primeiro.focus({ preventScroll: true });
  }

  function montarDetalhe(item) {
    limpar(dlgDetalhe);
    if (aviso.parentNode === dlgDetalhe) document.body.appendChild(aviso);

    const copiar = botaoCopiar(item.conteudo.trim() ? "Copiar" : item.origem ? "Copiar origem" : "Copiar título", "copiar-detalhe");
    copiar.addEventListener("click", () => copiarItem(item, copiar, valoresAbertos));

    const fav = botaoFavorito(item);
    fav.addEventListener("click", () => {
      alternarFavorito(item.id);
      const novo = botaoFavorito(item);
      ["aria-pressed", "aria-label", "title"].forEach((a) => fav.setAttribute(a, novo.getAttribute(a)));
    });

    const topo = el("header", { class: "painel-topo" }, [
      el("div", { class: "painel-cabeca" }, [
        el("span", { class: "selo", text: item.tipo }),
        el("h2", { id: "detalhe-titulo", text: item.titulo })
      ]),
      fav,
      el("button", { class: "btn-icone", type: "button", "aria-label": "Fechar", title: "Fechar (Esc)", onclick: () => dlgDetalhe.close() }, [icone("fechar")])
    ]);

    const corpo = el("div", { class: "painel-corpo" });
    if (item.descricao) corpo.appendChild(el("p", { class: "painel-descricao", text: item.descricao }));
    if (item.quando_usar) {
      corpo.appendChild(el("section", { class: "secao" }, [el("h3", { text: "Quando usar" }), el("p", { text: item.quando_usar })]));
    }

    const partes = partesDe(item.conteudo);
    const nomes = [];
    partes.forEach((p) => { if (p.variavel && nomes.indexOf(p.variavel) === -1) nomes.push(p.variavel); });

    const pre = el("pre", { class: "codigo", tabindex: "0", "aria-label": "Conteúdo" });
    function pintar() {
      limpar(pre);
      partes.forEach((p) => {
        if (!p.variavel) { pre.appendChild(document.createTextNode(p.texto)); return; }
        const v = texto(valoresAbertos[p.variavel]);
        pre.appendChild(el("span", { class: "var" + (v.trim() ? " preenchida" : ""), text: v.trim() ? v : p.texto }));
      });
    }

    if (nomes.length) {
      const campos = el("div", { class: "variaveis" }, nomes.map((nome, n) => {
        const idCampo = "var-" + n;
        // textarea: aceita colar textos de várias linhas (ex.: o contexto do produto)
        const entrada = el("textarea", { id: idCampo, rows: "1", placeholder: "Preencher" });
        entrada.addEventListener("input", () => {
          valoresAbertos[nome] = entrada.value;
          entrada.style.height = "auto";
          entrada.style.height = Math.min(entrada.scrollHeight + 2, 224) + "px";
          pintar();
        });
        entrada.addEventListener("keydown", (e) => {
          if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) { e.preventDefault(); copiarItem(item, copiar, valoresAbertos); }
        });
        return el("div", { class: "variavel" }, [el("label", { for: idCampo, text: "[" + nome + "]" }), entrada]);
      }));
      corpo.appendChild(el("section", { class: "secao" }, [
        el("h3", { text: "Preencha antes de copiar" }), campos,
        el("p", { class: "ajuda", text: "O que ficar em branco é copiado como está, entre colchetes. Ctrl+Enter copia." })
      ]));
    }

    if (item.conteudo.trim()) {
      pintar();
      corpo.appendChild(el("section", { class: "secao" }, [el("h3", { text: "Conteúdo" }), pre]));
    } else {
      corpo.appendChild(el("p", { class: "sem-conteudo", text: "Este item não tem conteúdo para copiar. O botão copia " + (item.origem ? "a origem." : "o título.") }));
    }

    const meta = el("dl", { class: "meta" });
    const linha = (rotulo, valor) => { meta.appendChild(el("dt", { text: rotulo })); meta.appendChild(el("dd", null, [valor])); };
    if (item.funcoes.length) linha("Funções", item.funcoes.map(nomeFuncao).join(" · "));
    if (item.tags.length) {
      linha("Tags", el("ul", { class: "tags" }, item.tags.map((t) => el("li", null, [
        el("button", { class: "tag", type: "button", text: "#" + t, "aria-label": "Filtrar pela tag " + t,
          onclick: () => { estado.tag = t; dlgDetalhe.close(); aplicar(); } })
      ]))));
    }
    if (item.autor) linha("Autor", item.autor);
    if (item.atualizado_em) linha("Atualizado em", dataLegivel(item.atualizado_em));
    if (item.origem) {
      linha("Origem", ehLink(item.origem)
        ? el("a", { href: item.origem.trim(), target: "_blank", rel: "noopener noreferrer", text: item.origem })
        : el("code", { text: item.origem }));
    }
    if (meta.firstChild) corpo.appendChild(el("section", { class: "secao" }, [el("h3", { text: "Sobre o item" }), meta]));

    const rodape = el("footer", { class: "painel-rodape" }, [el("span", { class: "rodape-dica", text: "Ctrl+C copia · Esc fecha" })]);
    const destino = ehLink(item.conteudo) ? item.conteudo.trim() : ehLink(item.origem) ? item.origem.trim() : "";
    if (destino) {
      rodape.appendChild(el("a", { class: "btn btn-fantasma", href: destino, target: "_blank", rel: "noopener noreferrer" },
        [icone("link"), el("span", { text: "Abrir link" })]));
    }
    rodape.appendChild(copiar);

    dlgDetalhe.appendChild(el("div", { class: "painel-interno" }, [topo, corpo, rodape]));
  }

  dlgDetalhe.addEventListener("click", (e) => { if (e.target === dlgDetalhe) dlgDetalhe.close(); });
  dlgDetalhe.addEventListener("close", () => {
    if (dlgDetalhe.open) return;   // já reaberto com outro item
    const id = itemAberto ? itemAberto.id : "";
    itemAberto = null;
    valoresAbertos = {};
    estado.item = "";
    gravarURL();
    if (aviso.parentNode !== document.body) document.body.appendChild(aviso);
    const c = id ? grade.querySelector('.cartao[data-id="' + cssEscape(id) + '"] .cartao-titulo') : null;
    if (c) c.focus({ preventScroll: true }); else busca.focus({ preventScroll: true });
  });

  /* ---------- adicionar ---------- */

  const form = $("form-adicionar");
  const elBloco = $("bloco");
  const elFalta = $("bloco-falta");
  const btnBloco = $("btn-copiar-bloco");
  let blocoAtual = "";

  (function prepararFormulario() {
    const sel = $("f-tipo");
    TIPOS.forEach((t) => sel.appendChild(el("option", { value: t, text: t })));
    const sugestoes = $("lista-temas");
    TEMAS.filter((t) => t !== SEM_TEMA).forEach((t) => sugestoes.appendChild(el("option", { value: t })));
    const caixa = $("f-funcoes");
    FUNCOES.forEach((f) => {
      caixa.appendChild(el("label", { class: "opcao" }, [
        el("input", { type: "checkbox", name: "funcoes", value: f.id }), el("span", { text: f.nome })
      ]));
    });
  })();

  function hoje() {
    const d = new Date();
    const dois = (n) => (n < 10 ? "0" : "") + n;
    return d.getFullYear() + "-" + dois(d.getMonth() + 1) + "-" + dois(d.getDate());
  }

  function idUnico(titulo) {
    const base = norm(titulo).replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "item";
    let id = base;
    let n = 2;
    while (POR_ID[id]) id = base + "-" + n++;
    return id;
  }

  function crase(s) {
    return "`" + s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${") + "`";
  }

  function gerarBloco() {
    const v = (nome) => texto(form.elements[nome].value).trim();
    const titulo = v("titulo");
    const funcoes = Array.prototype.filter.call(form.querySelectorAll('input[name="funcoes"]'), (c) => c.checked).map((c) => c.value);
    const falta = [];
    if (!titulo) falta.push("o título");
    if (!funcoes.length) falta.push("pelo menos uma função");

    if (falta.length) {
      blocoAtual = "";
      elBloco.hidden = true;
      elBloco.textContent = "";
      elFalta.hidden = false;
      elFalta.textContent = "Falta preencher " + falta.join(" e ") + ".";
      btnBloco.disabled = true;
      return;
    }

    const tags = v("tags").split(",").map((t) => t.trim().replace(/^#/, "")).filter(Boolean);
    const conteudo = texto(form.elements.conteudo.value).replace(/\r\n/g, "\n").replace(/\s+$/, "");
    const J = JSON.stringify;
    const linhas = [
      "  {",
      "    id: " + J(idUnico(titulo)) + ",",
      "    titulo: " + J(titulo) + ",",
      "    tipo: " + J(v("tipo")) + ",",
      "    tema: " + J(v("tema")) + ",",
      "    funcoes: " + J(funcoes) + ",",
      "    tags: " + J(tags) + ",",
      "    descricao: " + J(v("descricao")) + ",",
      "    quando_usar: " + J(v("quando_usar")) + ",",
      "    conteudo: " + (conteudo.indexOf("\n") === -1 ? J(conteudo) : crase(conteudo)) + ",",
      "    autor: " + J(v("autor")) + ",",
      "    atualizado_em: " + J(v("atualizado_em")) + ",",
      "    origem: " + J(v("origem")),
      "  },"
    ];
    blocoAtual = linhas.join("\n");
    elBloco.hidden = false;
    elBloco.textContent = blocoAtual;
    const temaNovo = v("tema") && !TEMAS.some((t) => norm(t) === norm(v("tema")));
    elFalta.hidden = !temaNovo;
    elFalta.textContent = temaNovo ? "Tema novo: acrescente também “" + v("tema") + "” na lista window.TEMAS, no topo do dados.js, para escolher a posição dele na tela." : "";
    btnBloco.disabled = false;
  }

  function abrirAdicionar() {
    if (!form.elements.atualizado_em.value) form.elements.atualizado_em.value = hoje();
    if (estado.funcao) {
      const marcadas = form.querySelectorAll('input[name="funcoes"]:checked');
      const c = form.querySelector('input[name="funcoes"][value="' + cssEscape(estado.funcao) + '"]');
      if (!marcadas.length && c) c.checked = true;
    }
    gerarBloco();
    dlgAdicionar.showModal();
    dlgAdicionar.querySelector(".modal-corpo").scrollTop = 0;
    $("f-titulo").focus();
  }

  form.addEventListener("input", gerarBloco);
  form.addEventListener("change", gerarBloco);
  form.addEventListener("submit", (e) => e.preventDefault());

  btnBloco.addEventListener("click", () => {
    if (!blocoAtual) return;
    copiarTexto(blocoAtual).then(() => {
      confirmarBotao(btnBloco);
      avisar("Bloco copiado. Cole no dados.js, acima do ];");
    }, () => avisar("Não deu para copiar. Selecione o bloco e use Ctrl+C."));
  });

  $("btn-adicionar").addEventListener("click", abrirAdicionar);
  dlgAdicionar.addEventListener("click", (e) => {
    if (e.target === dlgAdicionar || (e.target.closest && e.target.closest("[data-fechar]"))) dlgAdicionar.close();
  });
  dlgAdicionar.addEventListener("close", () => {
    if (aviso.parentNode !== document.body) document.body.appendChild(aviso);
    $("btn-adicionar").focus({ preventScroll: true });
  });

  /* ---------- início ---------- */

  document.querySelectorAll(".vista button").forEach((b) => b.addEventListener("click", () => {
    estado.vista = b.dataset.vista === "cartoes" ? "cartoes" : "lista";
    gravar(CHAVE.vista, estado.vista);
    desenhar();
  }));

  busca.value = estado.q;
  desenhar();
  if (estado.item && POR_ID[estado.item]) abrirDetalhe(estado.item);
  else { estado.item = ""; busca.focus({ preventScroll: true }); }
})();
