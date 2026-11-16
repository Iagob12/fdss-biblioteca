/* ==========================================================================
   FDSS +  ·  dados da biblioteca
   Este é o único arquivo que você edita para acrescentar funções e itens.
   Depois de salvar, recarregue a página (F5).
   ========================================================================== */

/* --------------------------------------------------------------------------
   FUNÇÕES
   Para criar uma função nova, acrescente uma linha { id, nome }.
   - id: curto, sem espaços nem acentos. É o que vai no campo "funcoes" dos itens.
   - nome: o texto que aparece no botão.
   - sempre: true  ->  os itens dessa função aparecem junto com qualquer
     função escolhida (é o caso da Global).
   -------------------------------------------------------------------------- */
window.FUNCOES = [
  { id: "site", nome: "Criador de site" },
  { id: "anuncio", nome: "Criador de anúncio e copy" },
  { id: "minerador", nome: "Minerador de ofertas e oportunidades" },
  { id: "vendas", nome: "Gestor de vendas" },
  { id: "global", nome: "Global", sempre: true }
];

/* --------------------------------------------------------------------------
   BIBLIOTECA
   Um bloco { ... } por item, separados por vírgula.
   O jeito mais fácil: botão "Adicionar" no site, que gera o bloco pronto.
   Cole cada bloco novo na linha logo acima do "];" no fim deste arquivo.

   Formato de um item (modelo, não é um item de verdade):

   {
     id: "identificador-unico",
     titulo: "Nome do item",
     tipo: "Prompt",                 // Prompt, Skill, Modelo, Link ou Referência
     funcoes: ["site", "global"],    // ids da lista FUNCOES acima
     tags: ["tag1", "tag2"],
     descricao: "Uma linha dizendo o que é.",
     quando_usar: "Em que situação usar.",
     conteudo: `Texto que será copiado.
   Trechos entre colchetes, como [NOME] ou [sua cidade], viram campos.`,
     autor: "Quem escreveu ou de onde veio",
     atualizado_em: "2026-01-31",    // ano-mês-dia (ou só ano-mês)
     origem: "link ou caminho (opcional)"
   },

   Observação: nos itens abaixo, "autor" é a fonte creditada no material
   original (guia, PDF ou perfil). Quando a fonte não dizia, ficou em branco.
   -------------------------------------------------------------------------- */
window.BIBLIOTECA = [

  /* ======================== GLOBAL: Claude no dia a dia ======================== */

  {
    id: "formula-xml-prompts-claude",
    titulo: "Fórmula XML para prompts do Claude",
    tipo: "Modelo",
    funcoes: ["global"],
    tags: ["claude", "estrutura", "xml", "prompt"],
    descricao: "Esqueleto de prompt em 5 blocos: papel, contexto, tarefa, formato e exemplo.",
    quando_usar: "Sempre que for pedir algo importante ao Claude e quiser uma resposta no ponto: preencha cada bloco antes de enviar.",
    conteudo: `<papel>(quem o Claude deve assumir)</papel>
<contexto>(contexto do seu caso)</contexto>
<tarefa>(pedido claro, o que fazer)</tarefa>
<formato>(forma, estilo e tamanho da resposta)</formato>
<exemplo>(um modelo de resposta boa)</exemplo>`,
    autor: "Guia dos 100 Prompts do Claude",
    atualizado_em: "",
    origem: "guia.pdf"
  },

  {
    id: "claude-code-setup",
    titulo: "Claude Code Setup (plugin oficial)",
    tipo: "Skill",
    funcoes: ["global"],
    tags: ["claude code", "plugin", "oficial", "configuração", "mcp", "hooks"],
    descricao: "Lê o projeto e recomenda MCPs, skills, hooks, subagentes e comandos, sem alterar nada sozinho.",
    quando_usar: "Ao abrir um projeto novo no Claude Code e querer saber quais ferramentas valem a pena ligar nele.",
    conteudo: `/plugin install claude-code-setup@claude-plugins-official
/reload-plugins

Se der "Marketplace not found", rode antes:
/plugin marketplace add anthropics/claude-plugins-official

Uso: "Set up Claude Code for this project" (ou "Configure o Claude Code para este projeto").`,
    autor: "@sitaria.digital (Guia 5 Plugins)",
    atualizado_em: "2026-11-12",
    origem: "https://github.com/anthropics/claude-plugins-official"
  },

  {
    id: "plugin-i-have-adhd",
    titulo: "I Have ADHD: respostas diretas no Claude Code",
    tipo: "Skill",
    funcoes: ["global"],
    tags: ["claude code", "plugin", "respostas", "objetividade"],
    descricao: "Faz o Claude começar pela próxima ação, numerar passos e fazer listas de no máximo 5 itens.",
    quando_usar: "Quando as respostas do Claude estiverem longas demais e você quiser a ação logo no começo. Licença MIT.",
    conteudo: `No terminal:
claude plugin marketplace add ayghri/i-have-adhd
claude plugin install i-have-adhd@i-have-adhd

Uso (dentro do Claude Code): /i-have-adhd`,
    autor: "Alice Allgayer (lista Plugins Parte 2)",
    atualizado_em: "2026-10-09",
    origem: "https://github.com/ayghri/i-have-adhd"
  },

  {
    id: "plugin-claude-mem",
    titulo: "Claude Mem: memória entre sessões",
    tipo: "Skill",
    funcoes: ["global"],
    tags: ["claude code", "plugin", "memória", "contexto"],
    descricao: "Resume o que o Claude fez e devolve esse contexto nas próximas sessões, guardado só no seu computador.",
    quando_usar: "Em projetos longos, quando você cansa de reexplicar o projeto a cada sessão nova. Precisa de Node.js 20+.",
    conteudo: `/plugin marketplace add thedotmack/claude-mem
/plugin install claude-mem

Depois de instalar, reinicie o Claude Code ou rode /reload-plugins.`,
    autor: "@sitaria.digital (Guia 5 Plugins)",
    atualizado_em: "2026-11-12",
    origem: "https://github.com/thedotmack/claude-mem"
  },

  {
    id: "comandos-economia-tokens",
    titulo: "Comandos nativos para economizar tokens",
    tipo: "Referência",
    funcoes: ["global"],
    tags: ["claude code", "tokens", "limite", "contexto", "comandos"],
    descricao: "Os 6 comandos do Claude Code para ver o uso, limpar e enxugar o contexto.",
    quando_usar: "Quando o limite do plano estiver acabando rápido ou a sessão ficar lenta e confusa.",
    conteudo: `/usage — Mostra quanto você já usou e a barra do limite nos planos Pro/Max.
/context — Mostra o que está ocupando o contexto (ideal para identificar MCPs pesados).
/clear — Começa do zero ao mudar de tarefa.
/rename + /resume — Dá nome à sessão antes do /clear para voltar depois.
/compact — Resume a conversa e libera espaço (ex.: /compact foque no código e nos testes).
/model — Alterna para um modelo mais leve em tarefas simples.`,
    autor: "@sitaria.digital (Guia de Tokens)",
    atualizado_em: "2026-11-12",
    origem: "Guia-Tokens-.pdf"
  },

  {
    id: "claude-md-compact-instructions",
    titulo: "Resumo automático focado (trecho para o CLAUDE.md)",
    tipo: "Modelo",
    funcoes: ["global"],
    tags: ["claude code", "claude.md", "compact", "tokens"],
    descricao: "Trecho que faz o /compact guardar o que importa: saída de testes e mudanças de código.",
    quando_usar: "Cole no CLAUDE.md do projeto para que os resumos automáticos não percam o essencial.",
    conteudo: `# Compact instructions
When you are using compact, please focus on test output and code changes`,
    autor: "@sitaria.digital (Guia de Tokens)",
    atualizado_em: "2026-11-12",
    origem: "Guia-Tokens-.pdf"
  },

  {
    id: "rtk-rust-token-killer",
    titulo: "RTK (Rust Token Killer): saída de terminal enxuta",
    tipo: "Skill",
    funcoes: ["global"],
    tags: ["claude code", "tokens", "terminal", "compressão", "grátis"],
    descricao: "Corta de 60% a 90% dos tokens na saída de comandos de terminal (git status, read, grep, find).",
    quando_usar: "Em projetos em que o Claude roda muitos comandos de terminal. Não instale junto com o Headroom, que já traz o RTK.",
    conteudo: `# macOS / Linux:
brew install rtk
# Windows:
winget install rtk-ai.rtk
# Script oficial alternativo:
curl -fsSL https://raw.githubusercontent.com/rtk-ai/rtk/refs/heads/master/install.sh | sh
# Verificar e ativar no Claude Code:
rtk --version
rtk gain
rtk init -g`,
    autor: "@sitaria.digital (Guia de Tokens)",
    atualizado_em: "2026-11-12",
    origem: "https://github.com/rtk-ai/rtk"
  },

  {
    id: "context-mode",
    titulo: "Context Mode: saídas gigantes de MCP sem lotar o contexto",
    tipo: "Skill",
    funcoes: ["global"],
    tags: ["claude code", "tokens", "mcp", "compressão", "plugin"],
    descricao: "Guarda saídas enormes de ferramentas numa sandbox local e entrega só o trecho relevante.",
    quando_usar: "Quando você usa MCPs que devolvem muito texto (Playwright, issues do GitHub). Requer claude --version 1.0.33+. Licença Elastic 2.0.",
    conteudo: `/plugin marketplace add mksglu/context-mode
/plugin install context-mode@context-mode
/reload-plugins
/context-mode:ctx-doctor
/context-mode:ctx-stats`,
    autor: "@sitaria.digital (Guia de Tokens)",
    atualizado_em: "2026-11-12",
    origem: "https://github.com/mksglu/context-mode"
  },

  {
    id: "headroom",
    titulo: "Headroom: proxy local que comprime o contexto",
    tipo: "Skill",
    funcoes: ["global"],
    tags: ["claude code", "tokens", "compressão", "proxy", "python"],
    descricao: "Comprime logs, arquivos, histórico e saídas de ferramentas antes de chegarem ao modelo.",
    quando_usar: "Quando quiser compressão em tudo, não só no terminal. Já inclui o RTK: não instale os dois. O wrap limita o contexto a 200k tokens em planos de 1M.",
    conteudo: `pip install "headroom-ai[all]"
headroom wrap claude
headroom perf
# Opcional (ferramentas MCP headroom_compress, headroom_retrieve, headroom_stats):
headroom mcp install`,
    autor: "@sitaria.digital (Guia de Tokens)",
    atualizado_em: "2026-11-12",
    origem: "https://github.com/chopratejas/headroom"
  },

  {
    id: "handy-ditado-offline",
    titulo: "Handy: ditado por voz offline",
    tipo: "Link",
    funcoes: ["global"],
    tags: ["voz", "ditado", "transcrição", "offline", "grátis"],
    descricao: "Fala e vira texto no computador, sem internet (Whisper, Parakeet e Silero). Windows, macOS e Linux.",
    quando_usar: "Para ditar prompts e textos longos mais rápido do que digitando. Licença MIT.",
    conteudo: `https://github.com/cjpais/Handy`,
    autor: "Pixel AI Hub",
    atualizado_em: "",
    origem: "https://github.com/cjpais/Handy"
  },

  /* ======================== CRIADOR DE SITE ======================== */

  {
    id: "plugin-superpowers",
    titulo: "Superpowers: planejar antes de codar",
    tipo: "Skill",
    funcoes: ["site"],
    tags: ["claude code", "plugin", "oficial", "planejamento", "testes", "subagentes"],
    descricao: "O Claude pergunta, mostra a ideia em partes, faz um plano e escreve o teste antes do código.",
    quando_usar: "Em sites e sistemas maiores, quando você quer que o Claude trabalhe por horas sem fugir do plano. Licença MIT.",
    conteudo: `/plugin install superpowers@claude-plugins-official`,
    autor: "Alice Allgayer (lista Plugins Parte 2)",
    atualizado_em: "2026-10-09",
    origem: "https://github.com/obra/superpowers"
  },

  {
    id: "karpathy-skills",
    titulo: "Karpathy Skills: código simples e cirúrgico",
    tipo: "Skill",
    funcoes: ["site"],
    tags: ["claude code", "plugin", "claude.md", "simplicidade", "código"],
    descricao: "Um CLAUDE.md com 4 regras: pensar antes, fazer simples, mexer só no pedido e provar que funciona.",
    quando_usar: "Quando o Claude escreve código demais ou mexe no que não pediu. Sem licença declarada no GitHub.",
    conteudo: `/plugin marketplace add forrestchang/andrej-karpathy-skills
/plugin install andrej-karpathy-skills@karpathy-skills`,
    autor: "Alice Allgayer (lista Plugins Parte 2)",
    atualizado_em: "2026-10-09",
    origem: "https://github.com/multica-ai/andrej-karpathy-skills"
  },

  {
    id: "elephant-goldfish",
    titulo: "Elephant-Goldfish: documento de design revisado por subagentes",
    tipo: "Skill",
    funcoes: ["site"],
    tags: ["claude code", "plugin", "planejamento", "design", "revisão", "google"],
    descricao: "Um agente escreve o documento de design e 5 a 6 subagentes o revisam por ângulos diferentes.",
    quando_usar: "Antes de construir algo grande (Brainstorm, Rascunho, Revisão, Resolver). Não use em correções pequenas: gasta mais tokens. Licença Apache 2.0.",
    conteudo: `claude plugin marketplace add google/elephant-goldfish-model
claude plugin install egm@egm

Abra uma nova sessão; os comandos começam com /gm.`,
    autor: "@sitaria.digital (Guia 5 Plugins)",
    atualizado_em: "2026-11-12",
    origem: "https://github.com/google/elephant-goldfish-model"
  },

  {
    id: "claude-octopus",
    titulo: "Claude Octopus: segunda opinião de outros modelos",
    tipo: "Skill",
    funcoes: ["site"],
    tags: ["claude code", "plugin", "revisão", "multi-modelo", "consenso"],
    descricao: "Manda a mesma tarefa para até 12 outros modelos e mostra onde eles discordam antes de publicar.",
    quando_usar: "Antes de publicar algo crítico, para revisar com outros modelos. Começa só com o Claude; alguns modelos pedem assinatura ou chave própria. Licença MIT.",
    conteudo: `No terminal:
claude plugin marketplace add https://github.com/nyldn/plugins.git
claude plugin install octo@nyldn-plugins

Configuração (dentro do Claude Code): /octo:setup`,
    autor: "Alice Allgayer (lista Plugins Parte 2)",
    atualizado_em: "2026-10-09",
    origem: "https://github.com/nyldn/claude-octopus"
  },

  {
    id: "21st-mcp",
    titulo: "21st MCP: componentes React prontos no Claude Code",
    tipo: "Skill",
    funcoes: ["site"],
    tags: ["claude code", "mcp", "react", "componentes", "interface"],
    descricao: "Liga o Claude Code ao catálogo da 21st.dev com mais de 12 mil componentes de interface.",
    quando_usar: "Ao montar telas em React e querer partir de componentes prontos. search e search_logo são grátis; get_component e generate são pagos (a partir do plano Builder, US$ 6/mês).",
    conteudo: `Crie sua chave de API em 21st.dev/mcp e rode no terminal:
npx @21st-dev/cli@latest init --client claude --write

Troque o texto de exemplo da chave pela sua chave e reinicie o Claude Code.`,
    autor: "@sitaria.digital (Guia 5 Plugins)",
    atualizado_em: "2026-11-12",
    origem: "https://21st.dev/mcp"
  },

  {
    id: "lovable-site-uma-pagina",
    titulo: "Site de uma página para negócio local (Lovable)",
    tipo: "Prompt",
    funcoes: ["site"],
    tags: ["lovable", "landing page", "negócio local", "whatsapp", "grátis"],
    descricao: "Prompt completo com 7 seções e botão de WhatsApp, pronto para o Lovable.",
    quando_usar: "Para tirar do zero um site de negócio local. Plano grátis do lovable.dev: 5 créditos por dia (até 30 por mês) e publicação em seunome.lovable.app.",
    conteudo: `Crie um site de uma página para [TIPO DE NEGÓCIO] chamado [NOME], em [CIDADE].
Estilo: moderno, limpo, cores [COR 1] e [COR 2], fonte grande e fácil de ler, pensado primeiro para celular.

Seções, nesta ordem:
1. Topo com o nome, uma frase forte sobre o negócio e um botão "Chamar no WhatsApp" que abre https://wa.me/55[DDD][NÚMERO].
2. Serviços: [SERVIÇO 1 — PREÇO], [SERVIÇO 2 — PREÇO], [SERVIÇO 3 — PREÇO], em cards.
3. Por que escolher a gente: 3 diferenciais curtos ([DIFERENCIAL 1], [2], [3]).
4. Galeria com 6 espaços para fotos.
5. Depoimentos: 3 cards com espaço para nome e texto.
6. Endereço [ENDEREÇO] com mapa, horário [HORÁRIO] e link do Instagram [@].
7. Botão flutuante do WhatsApp em todas as telas.

Textos em português do Brasil, persuasivos e curtos.`,
    autor: "@sitaria.digital (Guia Site com IA)",
    atualizado_em: "2026-11",
    origem: "Guia-Site-com-IA.pdf"
  },

  {
    id: "lovable-ajustes",
    titulo: "Ajustes prontos para o site no Lovable",
    tipo: "Prompt",
    funcoes: ["site"],
    tags: ["lovable", "ajustes", "faq", "preços"],
    descricao: "Três pedidos de ajuste: visual mais elegante, perguntas frequentes e página de preços.",
    quando_usar: "Depois que o Lovable gerar a primeira versão do site. Mande um pedido por vez.",
    conteudo: `Deixe o site mais elegante, com mais espaço entre as seções e cantos arredondados.

Adicione uma seção de perguntas frequentes com 5 perguntas sobre [NEGÓCIO].

Crie uma página separada /precos com a tabela completa de serviços.`,
    autor: "@sitaria.digital (Guia Site com IA)",
    atualizado_em: "2026-11",
    origem: "Guia-Site-com-IA.pdf"
  },

  {
    id: "gemini-canvas-rabisco-app",
    titulo: "Rabisco no papel vira app (Gemini Canvas)",
    tipo: "Prompt",
    funcoes: ["site"],
    tags: ["gemini", "canvas", "app", "protótipo", "grátis"],
    descricao: "Transforma a foto de um desenho de tela em um app funcionando, com link para compartilhar.",
    quando_usar: "Para prototipar rápido. Desenhe a tela com rótulos, tire a foto de cima e bem iluminada, anexe em gemini.google.com (conta pessoal; contas Workspace não compartilham links), ative Canvas em Ferramentas e envie. Ideias: controle de hábitos, cardápio com botão \"Pedir no WhatsApp\", jogo da velha com placar.",
    conteudo: `Transforme este desenho em um app que funcione de verdade.
Siga o layout do desenho: mesma ordem dos elementos e mesmos botões.
O app é um [TIPO DE APP: controle de hábitos / cardápio / jogo / lista].
Todos os textos em português do Brasil.
Visual moderno, cantos arredondados, cores [COR 1] e [COR 2], pensado primeiro para celular.
Os botões precisam funcionar e os dados devem ficar salvos no navegador.`,
    autor: "@sitaria.digital (Guia Rabisco vira App)",
    atualizado_em: "2026-11",
    origem: "Guia-Rabisco-vira-App.pdf"
  },

  {
    id: "gemini-canvas-ajustes",
    titulo: "Ajustes prontos para o app no Gemini Canvas",
    tipo: "Prompt",
    funcoes: ["site"],
    tags: ["gemini", "canvas", "ajustes", "modo escuro"],
    descricao: "Cinco pedidos de ajuste e o comando para voltar à versão anterior.",
    quando_usar: "Depois da primeira versão do app no Canvas. Mande um pedido por vez; se algo quebrar, peça a última linha.",
    conteudo: `Mude a cor principal para roxo e deixe o fundo mais claro.

Aumente o botão de adicionar e coloque uma animação quando eu clicar.

Coloque todos os textos em português do Brasil.

Adicione um modo escuro com um botão para alternar.

Quando eu marcar todos os itens do dia, mostre uma mensagem de parabéns.

volte para a versão anterior`,
    autor: "@sitaria.digital (Guia Rabisco vira App)",
    atualizado_em: "2026-11",
    origem: "Guia-Rabisco-vira-App.pdf"
  },

  {
    id: "casa-que-se-constroi-no-scroll",
    titulo: "Casa que se constrói no scroll (Three.js + Nano Banana Pro + Kling)",
    tipo: "Referência",
    funcoes: ["site"],
    tags: ["three.js", "scroll", "animação", "canvas", "kling", "nano banana"],
    descricao: "Fluxo para um site em que uma casa é construída enquanto a pessoa rola a página.",
    quando_usar: "Para páginas de impacto com animação controlada por scroll. O material original só trazia trechos dos prompts de imagem; o prompt de código está completo. Demo: omnyalab.com/demo/hold-to-build.",
    conteudo: `Step 01 — Imagem da casa pronta (Nano Banana Pro, 16:9). O guia só mostra o começo deste prompt; o completo está no blueprint.

Step 02 — Code Prompt (Claude Code + Three.js):
Copy the house in this photo in three.js, in real metres: a
two-storey American colonial with white horizontal lap
siding, a steep dark shingle roof with the central gable and
two dormers, the brick chimney on the left, the white porch
with columns, the garage wing on the right, in a clearing of
tall oaks and pines.

Step 03 — Fases com câmera travada (Nano Banana Pro): envie apenas o print 3D como Image 1. O guia só mostra o começo deste prompt; o completo está no blueprint.

Step 04 e 05 — Gerar 9 clipes curtos no Kling usando cada foto como end frame de um clipe e start frame do próximo, converter em frames comprimidos e renderizar em <canvas> HTML controlado por scroll/toque.`,
    autor: "Omnya Lab",
    atualizado_em: "",
    origem: "https://omnyalab.com/the-build-blueprint"
  },

  /* ======================== CRIADOR DE ANÚNCIO E COPY: vídeo com Claude ======================== */

  {
    id: "editar-video-claude-prompt-1-dna",
    titulo: "Editar vídeo com Claude Code, parte 1: extrair o DNA de edição",
    tipo: "Prompt",
    funcoes: ["anuncio"],
    tags: ["vídeo", "edição", "claude code", "referência", "estilo", "ffmpeg"],
    descricao: "Analisa vídeos de referência quadro a quadro e gera um pacote com o estilo de edição deles.",
    quando_usar: "Quando você tem vídeos com um estilo de edição que quer copiar nos seus anúncios. Abra o Claude Code com os vídeos de referência na pasta e cole. Depois use a parte 2.",
    conteudo: `Use: Open Claude Code with the best suitable available Claude model, provide one or more reference
videos in the workspace, and paste this prompt. It extracts a portable Editing DNA package for Prompt
2. It does not require or edit a new raw video. Environment and accuracy rules: Work with the tools
actually available on this computer. Verify media using ffprobe/FFmpeg or equivalent; extract playable
clips and timestamped frames for close inspection as necessary. Do not claim to have watched frames
or listened to audio that you have not actually processed. Disclose uncertainty and ask only genuinely
blocking questions. Avoid Remotion. For any visual prototypes, prefer HTML/CSS/SVG/JavaScript. The
eventual reusable editing workflow must also be HTML-based, not Remotion-based. Style selection:
Never assume that Reference 1, the first uploaded file, or any particular reference is primary. Respect
an explicit user selection if supplied. Otherwise, identify candidate profiles and propose a style mapping
for approval. Keep distinct styles separate rather than averaging them. Apply these instructions in
addition to every phase below, never as replacements. The same complete DNA extraction, editing
psychology, reference timestamps, visual comparisons, font research, deliverables, and approval gates
are mandatory. Optimize unnecessary model work and duplicated computation, not the thoroughness or
quality of the analysis. Preprocess locally before reasoning repeatedly. Use deterministic tools
(FFprobe/FFmpeg, image scripts, waveform utilities, permitted local transcription) for media metadata,
comprehensive per-frame change detection, cut candidates, frame timestamps, contact sheets,
candidate text regions, audio statistics and transcription. Scan the full reference timeline as requested;
use computationally cheap passes before close visual examination. Inspect animation transitions and
uncertain cases at high temporal resolution and full visual detail when needed. Never infer the
appearance of uninspected frames. Extract once; reuse exact results. Keep a local analysis manifest
with file identity (e.g., size and SHA-256), frame rate, timestamps, transcription, scene/event map,
source frame paths, asset paths and processing status. For an unchanged reference, reuse previously
verified artifacts instead of reprocessing and retranscribing them; refresh only invalidated or incomplete
portions. Clearly record what was reused versus newly checked. Send curated visual evidence to the
model. Use indexed contact sheets and representative frames to navigate, then zoom into
original-resolution crops and short neighboring frame sequences for typography, motion, easings and
ambiguous events. Avoid passing thousands of redundant near-identical frames into context. This does
not authorize skipping unique events or reducing the precision of observed timing. Use one structured
source of truth. Produce the verified timecoded evidence/event dataset and style_dna.json first, then
generate STYLE_DNA.md, the psychology guide, annotated HTML report and other package files from
those records. Do not independently reinvent measurements or repeat entire investigations per output
document. All requested files remain required. Reuse approved tests, not guesses. Reuse verified
fonts, effect measurements, animation prototypes and downloaded licensed assets when their
checksums, source versions and reference styles match. Create new comparisons or animation tests
wherever an important element is new, uncertain, changed or fails fidelity checks. Keep tool output and
context focused. Save full raw logs and scripts to local files; report concise command outcomes, paths,
timestamps, measurements, confidence and exceptions in chat. Avoid pasting lengthy logs, duplicating
full source files or repeatedly restating the complete rulebook. Read only the relevant file sections when
continuing a known phase; preserve the full deliverable on disk. Avoid unnecessary extra model
sessions. Use the current selected Claude model for creative analysis, editing-psychology judgments
and approval decisions. Use local scripts for mechanical operations. Do not launch multiple model
agents or switch models unless there is a specific demonstrated benefit and I authorize it. Honor the
existing checkpoints. Save progress at each stage so revisions affect only the approved/changed
components. Never skip required verification, user approvals or the complete final ZIP for the sake of
cost. Priority order: reference fidelity and correctness → approval requirements → complete required
deliverables → token/rendering efficiency. If a cost-saving method risks the first three, do not use it. I
am providing one or more video references of whatever style, length, genre, orientation, and content
type I choose. Your task is to reverse-engineer their editing styles at an extremely detailed level and
extract their complete editing DNA. The end goal is to build an Al-assisted editing system that can
apply the measured style and decision-making patterns to new user footage, regardless of genre,
speaking presence, orientation, or duration. Aim for the closest technically achievable fidelity, not a
fabricated guarantee of 1:1 replication. Your job is not simply to describe what these videos look like.
You must discover the exact rules, measurements, techniques, assets, and psychological decisions that
produced these edits, and explain how to reproduce them. Think like a senior motion designer
reconstructing someone else's editing timeline, combined with a researcher investigating why every
creative decision was made. This prompt must work with any number (one or more) of supplied
reference videos and with many kinds of footage: talking-head videos, product demos, screen
recordings, podcasts, advertisements, tutorials, trailers, cinematic edits, documentaries, vlogs, gaming,
kinetic typography, animation, music-driven montages, silent videos, hybrids and any other legitimate
video-editing genre. References may be vertical, horizontal or square, long or short, narrated or
nonverbal, and may use static or moving cameras. Derive every style property from the actual files, not
the examples in this prompt. No default aesthetic. Never assume any caption color, font, editing rhythm,
platform, aspect ratio, reference priority, genre, voiceover, presenter, graphics, SFX, scene count, or
brand identity. User-provided explicit specifications take precedence over examples; flag material
conflicts rather than overwriting evidence. Conditional feature extraction. Captions, typefaces,
voiceover, music, B-roll, talking-head framing, diagrams, 3D elements, and sound effects are optional
observations, not mandatory outputs. Mark categories absent from a reference as
not_present/not_applicable rather than fabricating traits. Where no speech exists, analyze music cues,
action, narrative transitions and visual rhythm as triggers. Mixed reference sets. If supplied videos
conflict, produce independently usable profiles and an evidence-backed proposed mapping; ask for
approval before finalizing a blend. A single reference needs no invented hierarchy. Multiple references
do not imply the first is primary. Any new source format later. The Stage 2 handoff must accept a new
raw clip, multiple clips, screen captures, silent material, separate audio, images or user-supplied
supporting assets, as applicable. It must not require a talking head, words to transcribe, a predefined
file name, or a specific kind of footage. Evidence and generality. Exact values only when measured or
independently verified; specify confidence and realistic tolerances. If a reference uses a visual
technique that HTML/CSS/SVG/JS cannot faithfully produce alone, document a conditional local
alternative and its tradeoffs while maintaining HTML as the default composition/orchestration approach.
Do not force animations, captions or effects that the source style lacks. Keep extraction distinct from
application. Stage 1 may run without a raw new video. Stage 2 may build and validate reusable
components and a Claude skill with no raw video; it should only render a user video once appropriate
footage and user approvals are available. Respect existing project state. Existing files, style names and
choices come from disk, not from this prompt or a prior chat. Validate any discovered path before
referencing it. Never mention a named style file as required unless it actually exists or is generated by
this stage. Before beginning: Inspect all uploaded reference videos and identify their duration,
resolution, frame rate, aspect ratio, audio properties and general content. Confirm the files are readable
and can be analyzed. Identify any missing materials that would significantly affect accuracy, such as
higher-resolution videos, source footage, audio stems, font files, graphic assets, or specific reference
timestamps. Do not ask for raw footage intended for a later edit. Ask me focused questions if those
materials or decisions would materially improve the analysis. Do not overwhelm me with unnecessary
questions. Group important questions together and explain why each matters. If the supplied
references represent noticeably different editing styles, identify those distinctions rather than averaging
everything into a generic style. Ask me which style should dominate if that decision cannot be inferred.
Checkpoint 0: Resolve critical missing inputs before doing detailed extraction. Otherwise, proceed
without unnecessary interruptions. Analyze the videos at the highest practical level of detail. Use actual
video-analysis tools, frame extraction, audio inspection, speech transcription, and visual comparisons
where necessary. Do not rely on general impressions or a handful of screenshots. Analyze every frame
programmatically where feasible, and examine representative sequences visually, including individual
frames around transitions, animation starts, animation peaks, and animation endings. For every
meaningful editing event, document: Exact video timestamp and frame number. What is happening at
that moment: dialogue (if present), actions, visual narrative, music, rhythm, and other relevant events.
The visual state before the edit. What changes and its precise timing. How the elements enter, move,
hold, and exit. How long the effect lasts. Its relationship to speech (if present), music, visual storytelling,
emphasis, or on-screen action. Its likely editorial purpose. The implementation needed to recreate it.
Build a timecoded editing event map for every reference video. This should reconstruct the edit
chronologically, not just describe isolated effects. Where typography exists, determine everything about
that system. When text is absent, mark this category not applicable and do not invent captions: Identify
every distinct caption type: primary, secondary, keyword emphasis, labels, titles, numbers, subtitles,
annotations and callouts. Exact text appearing in the reference. Font family, font weight, width, style,
capitalization and character spacing. Font sizes relative to the reference resolution. Font color, strokes,
shadows, backgrounds, gradients and highlights. Text box dimensions, line-height, alignment,
wrapping, maximum characters per line and line breaks. X/Y coordinates, anchor points, margins,
padding and safe areas. Whether captions remain fixed, follow the subject, or move with the camera.
When text appears relative to speech (if present), music beats, cuts, movement, or other visual/audio
cues. Whether words appear individually, by phrase, or all at once. How long titles/captions remain after
the corresponding dialogue, beat, or visual cue (where applicable). How keywords are selected and
emphasized. Differences between normal captions and high-impact statements. When fonts are
present, identification must involve research, not guessing. When legible typography exists, use
high-quality frame crops, inspect distinctive glyph shapes, compare likely fonts, and investigate
available font-identification resources. Search for the original fonts or closest verified matches where
possible, including sources such as Google Fonts, official type foundries, Adobe Fonts, and
font-identification tools. For every font, provide: Most likely font name. Evidence supporting the match.
Confidence level. Official download or licensing source. Closest alternatives if it cannot be confirmed.
Relevant CSS/font settings. Do not claim that a font is exact when the evidence only supports an
approximation. Where present, identify and measure every text animation. If a reference has no text
animations, record that explicitly. Examples include scale pops, word reveals, masked wipes, bounce
entrances, overshoots, tracking changes, opacity fades, motion blur, kinetic typography,
character-by-character reveals and sliding text. For each animation, extract: Initial, intermediate and
final visual states. Duration in milliseconds and frames. Delay after the relevant spoken word, music
beat, visual event, or edit cue. Scale values, coordinates, rotation and opacity. Velocity and acceleration
behavior. Easing curve, cubic-bezier approximation, spring parameters, or keyframes. Whether multiple
properties animate simultaneously. How the animation exits. Whether the motion is synchronized to a
vocal emphasis, cut, music beat or sound effect. Where possible, reconstruct a small
HTML/CSS/JavaScript animation prototype and compare it visually with the reference. Avoid calling
something a "smooth pop" or "fast bounce" without providing a measurable implementation. Identify
recurring graphical elements if they exist; do not require graphics in minimalist references: Cards,
labels, badges, interface components, diagrams, arrows, lines and connectors. Floating screenshots,
photographs and cutouts. 2D and 3D-looking objects. Shapes, outlines, strokes, shadows and glows.
Icons, illustrations, charts, counters and progress indicators. Background treatments and overlays.
Camera-attached graphics and motion-tracked elements. For each graphic, determine its visual design,
precise placement, proportions, stroke width, corner radius, color, opacity, spacing, layer order,
entrance timing, exit timing and animation behavior. Investigate how the graphics were likely created.
Classify each element as: Reproducible using HTML/CSS. Better constructed using SVG. Requiring
JavaScript-driven animation. Requiring an existing image or vector asset. Requiring a separately
generated visual asset. Requiring 3D, compositing or an alternative technique. Identify suitable
implementation methods and locate legal, reliable asset sources. For each important visual component,
explain how a beginner could recreate it, down to the necessary elements, settings and sequence of
operations. Reverse-engineer: Jump-cut frequency and precise cut locations. Dead-air removal and
pacing. Digital punch-ins and punch-outs. Zoom levels, animation curves and duration. Camera
reframing and subject tracking. Subject placement during captions and graphics. Crop changes,
background treatments, masks and overlays. Transitions between primary footage, B-roll, graphics,
animation, archival material, screens, and other source types, where present. Use of freeze frames,
speed changes or pauses. Visual density and composition changes over time. Measure how frequently
visual changes occur, but do not assume that the references follow a rigid interval. Identify when the
editor intentionally avoids introducing new elements. When there is audio, analyze it as seriously as the
visuals; when silent, record silence as an intentional or incidental reference characteristic rather than
assuming voice or music. Examine: Music style, energy, instrumentation and role. Approximate
tempo/BPM where determinable. Music changes and beat synchronization. Whooshes, pops, clicks,
risers, hits and other SFX. Sound effects used for typography versus graphics versus transitions. Sound
effect timing relative to visual animation. Relative audio levels and dynamics. Voice clarity,
compression, EQ and background music ducking. Use of silence, pauses and audio-driven transitions.
Create a sound-design event map with timestamps. Identify the sound categories and their editing
purpose. Find comparable licensed SFX sources or appropriate reusable alternatives, clearly
distinguishing verified matches from substitutes. Do not assume that reference audio, third-party
footage, a face, logo, font or any other protected asset may be redistributed or reused without
permission. This is the most important phase. Give it more attention than a conventional editing-style
breakdown. Understand why the editor made each decision, not simply what was added, including
nonverbal and music-driven choices. Study the relationship between dialogue when available and
visual events, action, music, rhythm, storytelling structure, and every editing choice. For silent or
nonverbal footage, rely on observable audiovisual evidence rather than inventing dialogue. For each
significant effect, investigate: Trigger: Which speech, music cue, action, visual event, storytelling beat,
or structural change made the edit appropriate? Purpose: Was the intention to create curiosity, clarify
information, increase emphasis, build anticipation, deliver a payoff, establish credibility, or reset
attention? Choice: Why was this particular effect suitable instead of a different one? Timing: Why was it
placed at this precise moment? Intensity: Why was the effect subtle or aggressive? Restraint: Why
were other moments deliberately left clean? Study these situations in particular: When speech makes a
surprising claim (if there is speech), or the visuals reveal unexpected information. When an important
number is mentioned or visually shown (if applicable). When an explanation, on-screen process, or
complicated concept needs simplification (if applicable). When a comparison or before/after relationship
appears. When a speaker, scene, action, or story establishes a problem. When a solution or reveal
arrives. When dialogue or visuals introduce a product, person, company or feature. When speech,
music, action, or visual storytelling becomes emotional or energetic. When a sentence or scene beat is
ordinary and should receive minimal treatment. When multiple editing opportunities appear
simultaneously. Find patterns across the references and establish rules. For each rule, provide: Trigger
condition. Recommended editing response. Timing relative to the spoken, visual, or musical trigger.
Reference example with timestamp and frame. Psychological reasoning. When the rule should NOT
apply. Exceptions and competing rules. Confidence based on the observed evidence. Make a clear
distinction between directly observed editing behavior and your psychological interpretation of that
behavior. Analyze how the editor(s) balance stimulation with clarity; mark text-specific questions not
applicable where appropriate. Investigate: How often they introduce a visual change. How long viewers
are allowed to read text. How they direct attention to specific words. When graphics replace captions
and when they complement them. How they avoid overwhelming the viewer. How they build visual
hierarchy. How they create contrast between calm and high-impact moments. How they use
anticipation, payoff and surprise. How shot changes help maintain narrative momentum. How visuals
increase understanding rather than merely adding decoration. Create a practical Visual Attention
Budget system. It should explain how many elements can reasonably compete for attention in any
given moment, based on patterns in the references. Also identify the key principles that keep the style
polished rather than cluttered. Build a structured matrix that Claude can later use to select edits. For
example: Example speech event (only if applicable): Speaker says, "This reduced our cost by 80%."
Semantic priority: High-impact numeric claim. Recommended treatment: Emphasize "80%" using the
reference's numeric typography style. Timing: Align the entrance with the spoken number. Optional
supporting visual: Comparison or counter, but only if the reference style supports it. Avoid: Unrelated
B-roll or excessive simultaneous movement. Evidence: Specific reference timestamps. Create many
rules based on the actual footage, never generic social-media advice. Include nonverbal rules
grounded in music, motion, cuts, and onscreen events when appropriate. Define a priority system for
moments where several rules conflict. Compare all analyzed videos when there is more than one. With
a single reference, document that individual style without inventing cross-reference consistency.
Identify: Rules consistently shared by the references. Variations that still belong to the same style.
Distinct editing styles that require separate profiles. Effects that appear only occasionally. Unique
exceptions that should not become universal rules. Build a common style blueprint, plus individual style
profiles if required. Determine the visual grammar of the editing system; mark inapplicable categories
as absent: Typography hierarchy. Color palette with exact sampled values. Positioning and alignment
rules. Caption behavior. Graphic construction rules. Animation presets and timing. Transition
vocabulary. Cut and pacing logic. Camera movement vocabulary. Audio and SFX rules. Semantic
trigger rules. Visual density limitations. Exceptions and prohibited behaviors. Do not average distinctive
creative decisions into a bland result. For every important pattern, specify how many references
support it and provide timestamped evidence. Create an Editing DNA Fidelity Hierarchy, distinguishing:
Non-negotiable style characteristics. Important but context-dependent characteristics. Optional creative
elements. Behaviors that would break the reference style. Translate all confirmed discoveries into
instructions that another Al or junior editor could execute without improvising the basic design. Use
both reference-resolution pixel measurements and normalized coordinates so the results can scale.
For every reusable component, document: Name and purpose. Reference screenshots. Measurements and
visual properties. Default parameter values. Allowed variations. Animation state sequence. Timing
rules. Trigger rules for speech, visual actions, narrative beats, music, and other applicable cues. Audio
associations. Construction method. Required assets. CSS/JavaScript implementation guidance.
Examples of correct and incorrect usage. Use actual numeric values where measurement is possible.
For uncertain properties, provide ranges and confidence levels rather than invented precision. Verify
visual components by comparing reconstructed examples with the original reference frames. Explain
the exact difference between any approximation and the reference. I do not want a style guide that
describes graphics without explaining how to obtain or create them. Create a complete asset
acquisition and reproduction plan. For every important asset: Determine whether it already exists in the
references or local files. Identify whether it needs to be recreated. Investigate the source or suitable
alternatives. Provide official source URLs when available. Record licensing considerations. Explain
whether to use HTML, CSS, SVG, JavaScript, image assets or another technique. Define the
parameters needed for accurate reproduction. Include exact instructions for recreating distinctive
elements from scratch when assets cannot be located. Prefer reusable components rather than
manually constructing the same graphic repeatedly. Identify any assets or fonts I must supply for
maximum accuracy. Produce real files, not just a chat response. The package must contain these
reports and structured outputs (mark absent evidence-based categories as not applicable rather than
filling them with guesses): A polished, navigable HTML report with: Annotated screenshots from the
actual references. Before/during/after animation frames. Side-by-side comparisons. Timestamped
evidence. Measurements and positioning guides. Caption and graphic examples. Explanations of
editing psychology. Links to relevant assets and sources. A beginner-friendly reproduction guide. The
report must let me visually understand the exact editing style. Create style_dna.json containing the
editing system in structured form: Style profiles. Typography tokens. Color and layout tokens. Animation
definitions. Motion-graphics specifications. Timing parameters. Audio rules. Semantic triggers. Editing
decision priorities. Exceptions and constraints. Asset references. Evidence timestamps. Confidence
levels. This file must be structured for use by a future automated editing system. Create
STYLE_DNA.md, explaining how to apply the style consistently. Include explicit "if this happens, do
this" rules with reference examples and exceptions. Organize extracted frames, graphic crops, font
information, verified assets, audio references and any reusable demonstrations. Create a dedicated file
explaining the relationship between narrative beats (speech or visual), attention, emotion, graphics,
typography, pacing and sound. It should help an Al make intelligent editing decisions on unseen videos.
Clearly document: What has been verified. What is inferred. What remains uncertain. What has been
approximated. Which missing fonts or assets would most improve accuracy. What I could provide to
resolve those gaps. Before declaring the extraction complete: Display a visual contact sheet showing
the most important extracted design characteristics. Present the dominant style profile and any
alternatives. Show reconstructed examples of major captions and animations alongside their reference
frames. Explain the most important psychological editing rules discovered. Identify any unresolved
high-impact questions. Show the locations of the resulting files. Stop here and request my approval.
Allow me to correct the font choice, colors, animation behavior, pacing, caption placement, style
interpretation or any other detail. Update the documentation and structured specifications after my
feedback. Do not mark the Editing DNA as approved until I explicitly approve it. Another advanced Al
system must be able to read this package and understand both: Exactly how to recreate the reference
editing style. Exactly when and why to apply each part of that style to new footage. Do not produce a
generic guide. Do not substitute aesthetic guesses for measurable evidence. Do not claim unverified
details are exact. The deliverable is a thoroughly researched, evidence-backed, visually demonstrated,
machine-readable reconstruction of the references' actual editing DNA. Your deliverable is a usable
collection of real files, not an impressive-looking answer in chat. After the Phase 7 approval checkpoint
and any requested revisions, package the complete, validated project as a downloadable ZIP archive.
Also provide the individual key files. At minimum, deliver this organized structure (adjust folder names
only if needed, and ensure every referenced path resolves): EDITING_DNA_PACKAGE/
README_START_HERE.md visual_report.html style_dna.json STYLE_DNA.md
EDITING_PSYCHOLOGY.md ASSET_LIBRARY.md ACCURACY_AND_GAPS.md
CLAUDE_CODE_IMPLEMENTATION_PROMPT.md reference_frames/annotated_comparisons/
animations_and_components/audio_analysis/ assets/ The visual report must be usable when opened
locally, including all required images, styles and relative links. Embed assets when it improves
portability, but do not silently omit large assets. Include a clearly labeled manifest listing original
reference footage supplied by the user separately from included extracts, prototypes, and third-party
assets. Never assume third-party files can be redistributed; document rights and provide links where
inclusion is not permitted. Make the package easy for another user or Al to understand without relying
on this conversation. README_START_HERE.md must explain what to open first, what each file does,
required dependencies, how to choose a style profile, where to place a new raw video, where to launch
the application stage, and where approval is required. Each style profile must have unique identifiers,
not just descriptive prose. All source timestamps, frame numbers, IDs and citations must be traceable
to the supplied reference files. For each external font, soundtrack, SFX, icon, stock asset or software
dependency, supply the official source URL where it was actually verified, licensing terms where
determinable, and whether it is included, separately downloadable, or only a proposed substitute.
Never insert fictitious URLs, fabricated file paths, imaginary measurements, or placeholder screenshots
presented as finished work. Verify every requested document and directory actually exists. Verify the
ZIP opens and contains the same expected files. Parse style_dna.json and check the schema, unique
IDs, references, timestamps and file paths for consistency. Verify HTML can open locally and that its
internal images, scripts, styles and links resolve. Confirm comparison images come from the correct
reference timestamps; label synthetic reconstructions unmistakably. Open and verify representative
animation demos. Include instructions when a demo needs a local server or dependencies. Check that
annotated screenshots, examples, psychology rules, and machine-readable triggers correspond to
genuine observations. Check licensed-asset and font restrictions; do not package restricted content
without permission. Record any incomplete deliverable in ACCURACY_AND_GAPS.md, with the actual
reason and recommended remedy. Do not claim complete validation if any check was not run.
Checkpoint 8: Present the ZIP and key individual files only after the user's requested Phase 7 feedback
has been incorporated. The user may approve the extracted system while still requiring approval of
every subsequent video edit. This prompt is Stage 1: extraction and reconstruction of the editing DNA.
It is not permission to edit a new video automatically. Also generate a complete, standalone file named
CLAUDE_CODE_IMPLEMENTATION_PROMPT.md for Stage 2, so a different Claude Code session
can apply the extracted style package to any new user footage without repeating the reference
analysis. The Stage 2 prompt must instruct Claude to: Load and validate the package. Read
README_START_HERE.md, style_dna.json, STYLE_DNA.md, EDITING_PSYCHOLOGY.md,
ASSET_LIBRARY.md and ACCURACY_AND_GAPS.md. Identify which style profile is approved,
mandatory elements, allowed variations, and unverified assets. Never silently promote guesses to
confirmed facts. Inspect new raw footage. Verify video/audio formats, transcribe speech if present (with
timing/alignment where tools permit), identify visual/narrative beats, changes in emotion, emphasis,
semantic priority, shot framing, and musical structure, and flag unusable or missing footage. Apply
editorial psychology, not random decoration. Map applicable triggers and competing priorities to the
style's evidence-based decision matrix. Explain why, when and where captions (if present in the style),
emphasis, cuts, reframing, sound design, B-roll and motion graphics should appear. Use reference
evidence and respect the Visual Attention Budget, restraint rules and exceptions. Choose a style profile
deliberately. When multiple references differ, preserve separate profiles instead of blending blindly. Ask
which style dominates, which secondary elements can be borrowed, and which characteristics must
never change if the user's preference is not already explicit. Support a
primary-reference-plus-secondary-explainer strategy when the user chooses one. Build a timecoded
edit decision list (EDL). For every significant visual moment show dialogue if available or the
visual/audio narrative cue, start/end time, relevant source frames, intended component or effect, key
animation parameters, placement, sound treatment, rule/evidence ID, confidence, and asset
requirement. Distinguish necessary from optional creative decisions. Produce storyboard and
representative visual frames. Before implementing the full edit, show a connected storyboard covering
all major moments at meaningful time intervals; render actual representative frames for major captions,
zoom levels, graphic scenes and transitions, including before/peak/after states where important. Where
feasible, show source-versus-planned-look comparisons. Make these easy for a non-editor to review.
Request explicit approval. Stop after presenting the plan, storyboard, representative frames and
unresolved high-impact questions. Ask the user for approval of overall style hierarchy, typography and
colors, major motion graphics, pacing and animation feel, and any costly/new assets. Incorporate
requested revisions and repeat previews until approved. Do not render the finished MP4 before explicit
approval. Do not interpret approval of the style DNA as approval of a specific new video's storyboard or
final execution. Implement primarily with HTML/CSS/SVG/JavaScript. Design reusable, editable
components and animations that match the validated style specifications. Do not use Remotion unless
the user separately and explicitly requests it. Select a workable capture/compositing/export route
supported by the actual local environment, using appropriate tools such as a browser renderer and
FFmpeg where installed. Check environment capabilities rather than assuming the renderer exists;
explain any unavoidable limitation. Output must be a playable, correctly synchronized MP4. Respect
source rights and technical constraints. Use legally sourced or user-supplied assets. Preserve voice
intelligibility, avoid clipping and inappropriate SFX, check safe areas and readability for the actual
destination, screen sizes, and orientation, and ensure effects do not mask important information.
Perform fidelity and export QA. Validate temporal alignment, wording, positioning, legibility, no blank
frames, smooth motion, soundtrack/SFX sync, codec, frame rate and resolution. Compare
representative final frames with the approved storyboard and reference traits. Document where the
result diverges from the references and why. Deliver only after QA. Provide the completed MP4, a
concise change log, the reusable component/asset directory, and a brief fidelity/limitations report. Do
not claim near-1:1 accuracy without visual evidence, and disclose genuine technical limits. A.
Raw-footage and style-profile confirmation (only ask when important information is genuinely missing).
B. Timecoded storyboard and representative-frame approval - mandatory. C. Approval of major new
assets/visual design departures - mandatory when applicable. D. Final execution and MP4 export
permitted only after B and applicable C are explicitly approved. The handoff must be copy-paste-ready.
It must contain the exact instructions, expected inputs and outputs, the approval gates,
error/uncertainty handling and the instruction to defer design decisions to the existing DNA package
wherever possible. It may reference relative package paths, but it must not depend on chat history or
unspecified external documents. Do the analysis and make the files. Visualize the claims with frames,
crops, comparisons and runnable examples rather than replacing requested evidence with prose. Use
measured values where observable; disclose approximations where not. Prioritize replicating the
reference's distinctive editing decisions and psychology, not merely adding flashy effects. If a tool or
source is unavailable, tell me what could not be verified and produce the strongest transparent partial
result you can. Never invent evidence or claim success for a file, asset download, prototype, or export
that was not actually created and checked. The Stage 2 implementation prompt should require the
ability to turn the approved editing system into a reusable Claude Code skill only after the edit DNA and
preview treatments are approved. The resulting SKILL.md should reference the structured style files
and reusable HTML/CSS/SVG/JS components, distinguish required from optional input files, include
approval checkpoints, and show how to reuse the system on a future raw video without repeating
forensic reference analysis. Do not pretend a finished SKILL.md or working render exists unless it has
been created and checked. Do not use Remotion.`,
    autor: "AI Geek (Edit Your Videos with Claude Code)",
    atualizado_em: "",
    origem: "Edit videos with Cladue .pdf"
  },

  {
    id: "editar-video-claude-prompt-2-engine",
    titulo: "Editar vídeo com Claude Code, parte 2: engine reutilizável e skill",
    tipo: "Prompt",
    funcoes: ["anuncio"],
    tags: ["vídeo", "edição", "claude code", "skill", "mp4", "ffmpeg"],
    descricao: "Transforma o DNA de edição da parte 1 num sistema que edita vídeos novos e exporta o MP4.",
    quando_usar: "Depois de aprovar o pacote da parte 1. Pode rodar mesmo sem vídeo bruto: ele já monta a engine e a skill; o MP4 só sai depois das suas aprovações.",
    conteudo: `You are my video-editing director, motion designer, technical implementer, and quality-control lead. Turn
the actual Editing DNA package from Prompt 1 into a reusable editing system that can adapt to new
raw footage. Then, when raw footage is available and I approve the creative plan, use the system to
deliver a finished MP4. This is a universal prompt. There is no assumed editing style, genre, narrator,
color, caption system, asset type, platform, duration, reference count, or preapproved style hierarchy.
Every decision must come from the specific project's approved DNA, the actual input media, and my
explicit choices. Examples given below describe possible activities, not effects that must appear in the
edit. Do not begin the final edit until the mandatory approval gates have been completed. You may build
and validate reusable infrastructure before I provide any raw video. Inspect the real current project
folder. Find the source references and the DNA package (likely, but not necessarily, style_dna.json,
STYLE_DNA.md, EDITING_PSYCHOLOGY.md, ASSET_LIBRARY.md, ACCURACY_AND_GAPS.md,
and visual reports). Discover real filenames; do not assume any file is present. Read the extracted style
profiles, verified media attributes, event maps, font candidates, audio decisions, reusable components,
approval status, gaps, source/asset licenses, and evidence timestamps. Honor the source manifest and
any user-approved overrides. Validate and report any missing, corrupt, mutually contradictory,
unverified, or outdated files. Do not invent a file such as HYBRID_STYLE_POLICY.md; locate its actual
equivalent if one exists. Create missing implementation files where appropriate, but do not fabricate
missing reference evidence. Identify whether there is one style profile, multiple compatible references,
or several different/conflicting styles. Never infer that the first reference is primary just because it was
uploaded first. If the DNA package exists and passes enough validation to proceed, reuse it. Do not
automatically rerun the expensive reference extraction, transcription, font research, or frame analysis.
Reopen targeted source frames only to resolve consequential gaps or contradictions, and record when
that occurs. Identify the actual user input state: DNA package present, no raw footage: build the editing
engine and portable skill now; no MP4 production yet. Do not treat missing raw footage as an error.
DNA package and raw footage present: prepare the engine as needed, analyze footage, and proceed
through approval gates. Raw footage present, no DNA package: locate the supplied references and
either run Prompt 1 with my authorization or ask for its existing package. Do not invent style
specifications. No reference and no DNA package: clearly state the essential missing style input. You
may build a generic technical scaffold, but cannot assert reference fidelity. Incomplete media or
unsupported file format: propose a specific conversion, replacement, or workaround; preserve originals
and avoid silent quality degradation. Check which Claude Code capabilities, browsers, FFmpeg/ffprobe,
image/audio tools, fonts, installed binaries, and permitted network access are actually available. Never
claim a renderer, skill, asset download, or working export exists until tested. Save a concise
PROJECT_STATUS.md with verified paths, style profile IDs, current approval state, dependencies,
known limits, cached resources, and the next allowed stage. This must let a new Claude session
resume without relying on chat history. Use the exact styles extracted in the DNA package. A style may
include or exclude captions, bold typography, illustrations, sound design, fast cuts, tracking, animated
UI, still images, film grain, 3D, kinetic motion, color treatments, subtle edits, or anything else the
evidence supports. One reference/profile: use that profile; never invent a secondary style. Several
references forming one coherent style: extract and honor their verified shared rules and documented
variations. Distinct styles: keep separate profiles. If I have previously approved a hierarchy, preserve it.
Otherwise show 1-3 evidence-based application approaches (single primary style, context-dependent
switch, or limited blend) and stop for my approval before making one the creative default. Conflicting
preferences: ask a narrowly targeted question only when the conflict would materially change the result.
Do not substitute old session preferences or examples from other projects. No captions, voice, music,
B-roll, or motion graphics in a source style: do not add them as compulsory features. not_applicable is
a valid specification. Write STYLE_SELECTION.md recording the chosen style profile ID(s), which rules
are immutable, permitted variations, secondary-style triggers if any, evidence links, and approval status.
If style selection remains pending, build style-neutral infrastructure but do not lock in artistic
components that depend on an unapproved choice. Construct a real project on disk, not a plan-only
answer. Use HTML/CSS/SVG/JavaScript as the default graphics, compositing, animation, and preview
approach, combined with locally supported browser capture, FFmpeg and other necessary tools for
frame-accurate output, audio, and video processing. Do not use Remotion. When a specific effect
cannot realistically be achieved at adequate fidelity with browser graphics alone (e.g., advanced
tracking, 3D, roto, optical effects), propose or integrate a suitable local technique, document its
dependencies, and preserve a coherent workflow rather than pretending CSS reproduces it exactly.
The engine must be style-driven and content-driven, not prewired to the examples in this prompt:
Universal input resolver recognize one or more user-supplied video clips, screen captures, images,
external audio, voice tracks, logos or other relevant media. Preserve originals; record resolution, frame
rate, duration, aspect ratio, audio streams, orientation and codecs. Support silent footage, multilingual
speech, voiceover, multi-speaker scenes, screen recordings, animation, product videos, music videos,
educational content, documentaries, ads and other formats as applicable. Never make speech
transcription mandatory for media with no speech. Structured DNA loader - parse approved tokens,
profile IDs, confidence, typography, component/asset manifests, exact animation definitions, scene
logic, allowed variants, sound-treatment rules, negative rules and source evidence. Validate structure
and reference paths before applying a profile. Editorial intelligence - select edits from what is actually
happening: spoken meaning where present; otherwise music, actions, visual events, beats, exposition,
story arcs, movement, product demonstrations, screen actions, scene changes and other relevant
cues. Use reference-derived trigger rules and an attention/cognitive-load budget. Aesthetic restraint is
as important as flashy treatment. Timecoded timeline / EDL
deterministic representation of source
trims, clip order, audio, layers, timing, effect parameters, keyframes, animation states and asset use.
Tie each nontrivial decision to a DNA rule or explicitly approved creative adaptation. Support edits and
partial rerenders. Component library - implement and reuse only the typography, animations,
transitions, graphics, masks, compositions, camera transforms, color treatments, title cards, diagrams,
sound treatments and other reusable elements actually found in the chosen DNA. Preserve layout
scaling for original/export orientation. New components must be evidence-backed or separately
approved. Asset pipeline
use user-supplied or properly licensed material, with manifest,
attribution/source, format, rights/redistribution status, and replacement strategy. Do not download or
embed protected third-party content by assumption. Preview system - locally viewable
storyboard/contact sheets, representative frames with actual proportions, and short animation previews
that show temporal behavior, safe zones, text wrapping, layers and transitions. Include a local HTML
report; no external service should be required merely to review it. Rendering and QA
deterministic
export path to a standard playable MP4 when inputs and approvals are present, with audio sync,
readable layout, correct crops, validated output settings, and checks for missing/black frames,
accidental freezes, clipped text, broken links/assets, pop/click errors, and other defects. Use modular
files and document entrypoints; do not make a giant single-use script. Favor reproducible builds, stable
component APIs and clear errors. Create sample/demo content only as an explicitly labeled synthetic
technical test, never claim it is a completed user video or actual reference evidence. Create and save a
working Claude Code skill in a valid location. Prefer a project skill at
.claude/skills/<project-appropriate-name>/SKILL.md, or a personal skill only if I explicitly choose that
scope. Use current Claude Code's supported skill format, including YAML frontmatter with a clear
description, followed by concise actionable instructions; verify that the folder is discoverable and the
invocation method works in the installed version. Skill behavior must be universal within the chosen
DNA package: Load this project's DNA, style selection, asset library, editing-psychology rules,
provenance and limitations from disk rather than chat memory. Accept new raw footage of the formats
the installed pipeline actually supports; if a format is unsupported, propose a concrete conversion.
Analyze narrative, dialogue when present, actions, audio, beats, visual hierarchy and source footage as
appropriate for the media. Propose a timecoded edit map and create representative visual/motion
previews. Stop for edit-map and storyboard approval for each new video, even if the overall style is
already approved. Use approved components and licensed assets; never hallucinate missing fonts,
animated elements, or source evidence. Wait for final execution authorization, then produce/QA the
MP4 and retain reusable project files. Apply cost-efficient caching, partial rebuilds, approved asset
reuse, and compact progress/context summaries. Keep the required skill instructions concise, moving
large DNA/reference documentation to supporting files loaded only when necessary. Document the
exact invocation command, supported inputs, output locations, installation, dependencies, and how to
resume or change the style profile. Do not postpone creation of the skill until after a user's first finished
video. Build the initial skill and validate its file format and component smoke tests without raw footage;
after the first approved real edit, improve the skill based on actual rendering/QA findings. Label any
full-video capabilities not yet exercised as untested, not successful. Inspect the actual inputs and
produce a scene/beat-level analysis. Use conditional logic: Speech/narration present → transcribe with
relevant language and timecodes; obtain word alignment where technically available; capture meaning,
emphasis, names and questionable words. No speech → use audiovisual events, music beats,
movement, visual narrative and changes of scene; do not make up a script. Music present → map
tempo/beat and synchronization only if it materially explains the reference's style and is determinable.
Multiple clips → infer proposed sequence from filenames, content and user instructions; flag material
ambiguity rather than silently choosing an incorrect order. Screen/UI content → protect legibility,
important cursor/action timing and interface authenticity. Mixed orientations → propose justified
reframing and safe-zone strategy before cropping away meaningful content. Existing edit or complex
composition → preserve important source timing and audiovisual continuity; be explicit about
transformations that cannot be reversed from a flattened input. Save extracted metadata, transcripts if
any, scene detection, beat maps, candidate cuts and editorial annotations to reusable files. Apply the
actual DNA style rules to the actual content, not fixed interval effects or invented footage. Prepare an
edit decision list covering the entire planned output. For each meaningful event include: Source
input(s), output in/out time and source in/out time, applicable dialogue or nonverbal cue, editorial intent,
the exact chosen DNA rule/evidence ID, shot selection, design assets, visual treatments, motion
parameters, and audio treatment. Priority and psychological rationale: clarity, tension, emphasis, payoff,
storytelling, restraint, rhythm, or whatever applies. How one scene connects to the next, including
motion and audio continuity. Assumptions, low-confidence decisions, unverified font/asset matches,
rights constraints, and proposed alternatives. Use no fixed caption frequency, zoom schedule, color
palette, title font, story structure, or effects quota. Leave clean sections clean when the DNA supports
that. STOP and explicitly request approval of the edit map and any proposed creative/style mapping
that has not already been approved. Do not treat a previous style selection or silence as approval of the
specific edit. After edit-map approval, generate a locally viewable HTML storyboard with connected,
correctly proportioned representative frames at major moments, not a loose gallery of attractive
mockups. Include opening, narrative changes, typography where present, graphics, masks/crops, main
camera/framing changes, major transitions, and endings. Show before/peak/after states and short
actual animation tests when motion behavior matters. Include source-vs-planned comparisons where
feasible and identify inferred approximations. The storyboard should be understandable to a non-editor.
Show actual planned text, graphics and timings whenever known. Flag placeholders and pending
assets prominently. Preview style-specific work, not generic stock panels. Honor the intended final
aspect ratio and distribution target rather than assuming mobile portrait format. STOP and obtain
explicit approval. Incorporate revisions and update only affected assets/frames/timeline ranges. If a
major new visual treatment, font, color, asset or style change is needed after approval, show the
specific revised treatment for renewed approval. Only after all relevant approvals: Finish required
assets and tests; check their provenance and applicable rights. Build and capture/render the
HTML/CSS/SVG/JS edit and composited video using the verified local toolchain. Apply source-specific
processing such as cropping, tracking or color correction only as needed. Synchronize captions when
relevant, on-screen motion, source clips and effects to actual frames/words/beats/events. Preserve final
approved resolution, fps, aspect ratio, audio format, and output container to the extent technically
feasible. Do not silently downscale or degrade quality for cost savings. Generate short review clips
where helpful, then request any final execution authorization reserved by this project; never render a
full final MP4 without the user approval required by earlier gates. Export the complete MP4. Run
metadata validation and targeted visual/audio quality checks, especially at cuts, animation boundaries,
transitions, text extremes, opening and ending; fix discovered defects. Compare actual representative
output frames with the storyboard and the reference-DNA traits. Distinguish verified matches,
approximations and unresolved gaps. Do not claim a near-perfect match without evidence. Deliver final
MP4, editable/rebuildable project files, concise change log, reusable asset/component paths, QA
results and any limitations. Avoid rerunning Prompt 1 on unchanged references. Keep file fingerprints
and reuse validated transcripts, sampled frames, event maps, tokens, animation presets and licensing
records. Use FFmpeg/ffprobe, scripts and other local deterministic tools for video metadata, cut
candidates, contact sheets, repetitive frame operations, hashes, syncing and straightforward
verification. First scan the entire timeline cheaply; then inspect each meaningful or ambiguous change
at high resolution and temporal precision. Do not confuse targeted examination with skipping relevant
evidence. Preserve structured project state on disk. Load the relevant subset of a large DNA package
rather than dumping all of it into every new Claude turn. Reuse tested components. On revisions,
rebuild only changed ranges and their dependent transitions; perform a complete final QA pass
afterward. For approvals use stills, contact sheets and short motion tests before an expensive
full-quality export; deliver only the approved final-quality version. Do not launch redundant extra agents,
reperform completed tasks, silently change the user's selected model, or sacrifice critical reasoning,
fidelity, motion smoothness, export quality or approval checkpoints to save tokens. State real
dependencies and realistic limitations. Do not promise fixed savings or universal zero-setup
compatibility. At a minimum, maintain this logical structure (use actual paths in reports; do not claim
absent items exist): VIDEO_EDITING_SYSTEM/README_START_HERE.md PROJECT_STATUS.md
STYLE_SELECTION.md dna/ # extracted/approved Prompt 1 package engine/ # renderer, timeline,
components, audio and media utilities assets/ # rights-aware manifests and reusable materials
previews/ # HTML storyboard and motion tests, per project/video exports/ # finished MP4s, when
approved input exists tests/ # smoke checks and validation .claude/skills/<name>/SKILL.md The user
should be able to reopen the project, run the skill, provide new footage, approve the planned edit, and
export a new video without reanalyzing the same references. Before you say "ready, actually verify:
key files exist; the DNA is parseable; components load; previews open or a verified launch method
exists; dependencies are documented; the skill has valid frontmatter and is in a discoverable directory;
local technical smoke tests run; and the user-facing instructions contain real commands/paths. Find
and validate the existing DNA package and project files. Report the actual extracted style profile(s) and
approval state in a short summary, with no assumptions about aesthetics. Begin building the reusable
engine and Claude skill even if no raw footage has been supplied; do not block on that alone. Where
style choice genuinely matters and is not approved, present grounded choices for approval while
continuing style-independent implementation. If raw footage exists, perform its analysis and stop at the
mandatory edit-map/storyboard approvals before the final render. At each completion checkpoint, report
what was truly created/tested, what remains unverified, and the exact next action for the user.
Non-negotiable priority: fidelity to the actual evidence, editorial judgment, user creative approvals,
functioning reusable implementation, transparent rights and technical verification, and cost efficiency
in that order. No predetermined visual style, no compulsory dialogue/captions, no dependency on a
previous conversation, no Remotion, and no fabricated assets, source analysis, test results or exports.`,
    autor: "AI Geek (Edit Your Videos with Claude Code)",
    atualizado_em: "",
    origem: "Edit videos with Cladue .pdf"
  },

  {
    id: "rea-video-engenharia-reversa",
    titulo: "rea-video: desmontar um vídeo viral cena por cena",
    tipo: "Skill",
    funcoes: ["anuncio", "minerador"],
    tags: ["vídeo", "viral", "engenharia reversa", "claude code", "remotion", "análise"],
    descricao: "Gera um relatório com enquadramento, câmera, luz, cortes, legendas, SFX e prompts de cada cena.",
    quando_usar: "Para estudar por que um vídeo ou anúncio concorrente funciona e refazer a estrutura com o seu produto. Requer Python 3.10+ e ffmpeg. Licença Apache 2.0.",
    conteudo: `Instalar e analisar diretamente:
Instale https://github.com/JuneYaooo/rea-video e depois analise este vídeo: ~/Downloads/viral.mp4

Ou adicionar via marketplace:
/plugin marketplace add JuneYaooo/rea-video

Pedir análise: "analisa esse vídeo com o rea-video"

Refazer no seu estilo:
Usa o report.html para criar um vídeo com a mesma estrutura, os mesmos cortes e o mesmo estilo de legenda, mas falando sobre o meu produto. Faz as cenas de código em Remotion.`,
    autor: "",
    atualizado_em: "",
    origem: "https://github.com/JuneYaooo/rea-video"
  },

  {
    id: "openverse-sfx",
    titulo: "Openverse: efeitos sonoros com licença livre",
    tipo: "Link",
    funcoes: ["anuncio"],
    tags: ["áudio", "sfx", "efeitos sonoros", "cc0", "licença", "api"],
    descricao: "Buscador aberto com mais de 5 milhões de áudios, com API pública sem cadastro nem chave.",
    quando_usar: "Para achar whoosh, impacto e outros sons com licença que permite uso em anúncios. Prefira CC0 ou licença comercial.",
    conteudo: `Prompt: Busque no Openverse um whoosh curto com licença CC0 e baixe para a pasta sfx/.

API CC0:
curl "https://api.openverse.org/v1/audio/?q=whoosh&license=cc0&page_size=5"

API Comercial:
curl "https://api.openverse.org/v1/audio/?q=impact&license_type=commercial"`,
    autor: "",
    atualizado_em: "",
    origem: "https://github.com/WordPress/openverse"
  },

  {
    id: "real-sfx",
    titulo: "Real SFX: sound design no frame exato",
    tipo: "Skill",
    funcoes: ["anuncio"],
    tags: ["áudio", "sfx", "sound design", "vídeo", "skill", "cc0"],
    descricao: "Skill que encaixa 78 sons CC0 inclusos no frame certo do vídeo.",
    quando_usar: "Para dar acabamento sonoro a um vídeo renderizado. Requer Python 3.9+ e FFmpeg. Uso: \"Adicione sound design a este render.\"",
    conteudo: `Mac/Linux:
git clone https://github.com/Clipwing/skills.git clipwing-skills
mkdir -p ~/.claude/skills
cp -R clipwing-skills/skills/real-sfx ~/.claude/skills/

Windows (PowerShell):
git clone https://github.com/Clipwing/skills.git clipwing-skills
New-Item -ItemType Directory -Force "$HOME\\.claude\\skills" | Out-Null
Copy-Item -Recurse "clipwing-skills\\skills\\real-sfx" "$HOME\\.claude\\skills\\"

Uso: Adicione sound design a este render.`,
    autor: "",
    atualizado_em: "",
    origem: "https://github.com/Clipwing/skills"
  },

  {
    id: "earshot",
    titulo: "Earshot: o Claude ouvindo e revisando o áudio",
    tipo: "Skill",
    funcoes: ["anuncio"],
    tags: ["áudio", "sfx", "revisão", "mcp", "vídeo"],
    descricao: "Dá ouvidos ao Claude, localmente: revisa o áudio no tempo e sintetiza 252 sons por código.",
    quando_usar: "Para revisar o som de um vídeo antes de publicar. Roda na CPU com uv e FFmpeg (cerca de 1,1 GB de modelos). Licença MIT. Comandos: earshot critique, timeline, forge, kit.",
    conteudo: `uv tool install "earshot[mcp] @ git+https://github.com/Leonxlnx/earshot"
earshot doctor --fetch
claude mcp add earshot --scope user -e EARSHOT_THREADS=3 earshot mcp

Uso: Use o earshot para revisar o som deste vídeo e me diga o que corrigir.`,
    autor: "",
    atualizado_em: "",
    origem: "https://github.com/Leonxlnx/earshot"
  },

  /* ======================== CRIADOR DE ANÚNCIO E COPY: vídeo e imagem com IA ======================== */

  {
    id: "google-vids-prompt-diretor",
    titulo: "Prompt \"de diretor de cinema\" para vídeo com IA",
    tipo: "Modelo",
    funcoes: ["anuncio"],
    tags: ["vídeo", "google vids", "gemini", "estrutura", "grátis"],
    descricao: "Modelo em 5 partes: quem aparece, o que acontece, onde, luz e câmera.",
    quando_usar: "Para qualquer clipe curto com IA. No Google Vids (vids.new, no computador) são até 3 vídeos de 15 s por mês grátis. Uma ação por clipe, sem texto dentro do vídeo; use foto de referência para manter personagem ou produto entre clipes.",
    conteudo: `QUEM aparece: [personagem ou produto, com detalhes de roupa, cor, idade, material]
O QUE acontece: [uma ação só, simples e clara]
ONDE: [lugar e época]
LUZ: [fim de tarde dourado / luz de estúdio / neon à noite / dia nublado]
CÂMERA: [se aproxima devagar / gira em volta / fixa / de cima], estilo [realista / cinema / animação]`,
    autor: "@sitaria.digital (Guia Google Vids Grátis)",
    atualizado_em: "2026-11",
    origem: "Guia-Google-Vids-Gratis.pdf"
  },

  {
    id: "google-vids-anuncio-loja",
    titulo: "Vídeo de anúncio: produto girando na vitrine",
    tipo: "Prompt",
    funcoes: ["anuncio"],
    tags: ["vídeo", "google vids", "produto", "comercial"],
    descricao: "Close do produto girando sobre mesa de madeira, estilo comercial de TV.",
    quando_usar: "Para um clipe de produto em anúncio de loja. Três clipes de 15 s com a mesma foto de referência viram um anúncio de 45 s.",
    conteudo: `close de um [PRODUTO] girando devagar sobre uma mesa de madeira, vitrine de loja ao fundo, luz de estúdio suave, câmera se aproximando, estilo comercial de TV.`,
    autor: "@sitaria.digital (Guia Google Vids Grátis)",
    atualizado_em: "2026-11",
    origem: "Guia-Google-Vids-Gratis.pdf"
  },

  {
    id: "google-vids-comida",
    titulo: "Vídeo de anúncio: prato sendo servido",
    tipo: "Prompt",
    funcoes: ["anuncio"],
    tags: ["vídeo", "google vids", "comida", "restaurante"],
    descricao: "Prato fumegando servido em restaurante aconchegante, estilo cinema.",
    quando_usar: "Para anúncios de restaurante, lanchonete ou delivery.",
    conteudo: `[PRATO] sendo servido fumegando numa mesa de restaurante aconchegante, luz quente de fim de tarde, câmera em close lento, estilo cinema.`,
    autor: "@sitaria.digital (Guia Google Vids Grátis)",
    atualizado_em: "2026-11",
    origem: "Guia-Google-Vids-Gratis.pdf"
  },

  {
    id: "google-vids-personagem",
    titulo: "Vídeo de anúncio: personagem numa padaria",
    tipo: "Prompt",
    funcoes: ["anuncio"],
    tags: ["vídeo", "google vids", "personagem", "realista"],
    descricao: "Personagem tomando café numa padaria em São Paulo, estilo realista.",
    quando_usar: "Para cenas com personagem em anúncios. Troque a cidade e o lugar conforme o público.",
    conteudo: `um [PERSONAGEM] tomando café numa padaria em São Paulo, luz de fim de tarde, câmera se aproximando devagar, estilo realista.`,
    autor: "@sitaria.digital (Guia Google Vids Grátis)",
    atualizado_em: "2026-11",
    origem: "Guia-Google-Vids-Gratis.pdf"
  },

  {
    id: "nano-banana-foto-produto",
    titulo: "Foto de produto em bancada de mármore (Nano Banana)",
    tipo: "Prompt",
    funcoes: ["anuncio"],
    tags: ["imagem", "nano banana", "gemini", "produto", "catálogo", "grátis"],
    descricao: "Transforma a foto de um produto em foto de catálogo profissional, vertical 4:5.",
    quando_usar: "Anexe a foto do produto em gemini.google.com e envie. Bom para criativos e catálogo.",
    conteudo: `Coloque este produto sobre uma bancada de mármore clara, luz natural suave vindo da esquerda, fundo desfocado, estilo foto de catálogo profissional, formato vertical 4:5.`,
    autor: "@sitaria.digital (Guia 5 IAs de Graça)",
    atualizado_em: "2026-11",
    origem: "Guia-5-IAs-Gratis.pdf"
  },

  {
    id: "nano-banana-arte-post",
    titulo: "Arte de post com texto de promoção (Nano Banana)",
    tipo: "Prompt",
    funcoes: ["anuncio"],
    tags: ["imagem", "nano banana", "gemini", "post", "instagram", "promoção"],
    descricao: "Arte 4:5 para Instagram com \"PROMOÇÃO DE SEXTA\" em letras grandes.",
    quando_usar: "Para artes rápidas de promoção. Troque o texto e as cores pela campanha do momento.",
    conteudo: `Crie uma arte para Instagram, formato 4:5, com o texto "PROMOÇÃO DE SEXTA" em letras grandes, cores laranja e creme, estilo moderno e limpo.`,
    autor: "@sitaria.digital (Guia 5 IAs de Graça)",
    atualizado_em: "2026-11",
    origem: "Guia-5-IAs-Gratis.pdf"
  },

  {
    id: "canva-post-pizzaria",
    titulo: "Post de Instagram no Canva com IA",
    tipo: "Prompt",
    funcoes: ["anuncio"],
    tags: ["canva", "post", "instagram", "design", "grátis"],
    descricao: "Exemplo de pedido para o Canva gerar um post: pizzaria anunciando rodízio às quartas.",
    quando_usar: "Como ponto de partida no Canva (cerca de 20 usos de IA por mês grátis). Troque negócio, oferta e cores.",
    conteudo: `Crie um post para Instagram de uma pizzaria anunciando rodízio às quartas, cores vermelho e amarelo, estilo divertido.`,
    autor: "@sitaria.digital (Guia 5 IAs de Graça)",
    atualizado_em: "2026-11",
    origem: "Guia-5-IAs-Gratis.pdf"
  },

  {
    id: "retro-editorial-imagem",
    titulo: "Pôster retrô editorial: imagem base",
    tipo: "Prompt",
    funcoes: ["anuncio"],
    tags: ["imagem", "retrô", "risograph", "pôster", "motion"],
    descricao: "Gera o quadro-chave de um pôster suíço retrô com textura de impressão e meio-tom.",
    quando_usar: "Primeiro passo do motion retrô: suba algumas referências editoriais retrô junto com o prompt. Depois use a animação.",
    conteudo: `I have uploaded several retro editorial reference images. Create a premium Swiss-inspired retro motion poster illustration of [YOUR IDEA]. Use a risograph/offset-print aesthetic with a matte paper texture, halftone printing, a limited color palette, bold graphic composition, and visible print imperfections. Keep the composition clean, cinematic, and suitable as the keyframe for animation.`,
    autor: "@theaigeekk",
    atualizado_em: "",
    origem: "https://labs.google/fx/tools/flow"
  },

  {
    id: "retro-editorial-animacao",
    titulo: "Pôster retrô editorial: animação",
    tipo: "Prompt",
    funcoes: ["anuncio"],
    tags: ["vídeo", "retrô", "animação", "seedance", "google flow"],
    descricao: "Anima a imagem retrô com movimentos sutis de câmera, meio-tom e textura de papel.",
    quando_usar: "Segundo passo do motion retrô, no Seedance 2.0 ou no Google Flow (gratuito), com a imagem gerada no primeiro passo.",
    conteudo: `Animate the uploaded core image into a premium retro editorial motion poster. Preserve the printed aesthetic while adding subtle camera push-ins, realistic object motion, halftone movement, paper texture animation, and physics-based motion. Keep the movement minimal, elegant, and cinematic.`,
    autor: "@theaigeekk",
    atualizado_em: "",
    origem: "https://labs.google/fx/tools/flow"
  },

  {
    id: "legenda-estilo-imagem",
    titulo: "Recriar estilo de legenda: imagem do primeiro frame",
    tipo: "Prompt",
    funcoes: ["anuncio"],
    tags: ["vídeo", "legenda", "caption", "tipografia", "imagem"],
    descricao: "Aplica a tipografia de uma referência na legenda do primeiro frame do seu vídeo.",
    quando_usar: "Primeiro passo: anexe o print do 1º frame com legenda simples e a referência do estilo de legenda. Depois use a animação.",
    conteudo: `I have uploaded the first frame of my captioned video along with a reference caption style. Replace only the caption text appearance with the exact typography, material, lighting, texture, depth, spacing, and styling from the reference image. Preserve the background, subject, framing, and composition exactly as they are. Generate a clean, high-resolution image suitable for Al video generation.`,
    autor: "@theaigeek",
    atualizado_em: "",
    origem: "https://www.imagine.art"
  },

  {
    id: "legenda-estilo-animacao",
    titulo: "Recriar estilo de legenda: aplicar no vídeo inteiro",
    tipo: "Prompt",
    funcoes: ["anuncio"],
    tags: ["vídeo", "legenda", "caption", "seedance", "tracking"],
    descricao: "Troca as legendas simples do vídeo pelo estilo da imagem gerada, acompanhando quem fala.",
    quando_usar: "Segundo passo, no SeeDance 2.0 ou Google Omni Flash: anexe o vídeo legendado e a imagem gerada no primeiro passo.",
    conteudo: `Replace the basic captions in the uploaded video with the exact caption style shown in the reference image. Match the typography, material, reflections, lighting, textures, outlines, shadows, and overall visual appearance precisely. Ensure the styled captions remain perfectly tracked to the speaker's movement and maintain consistent size, perspective, and placement throughout the entire video. Preserve the original video quality, timing, motion, and background while changing only the appearance of the text. Iterate until the generated result accurately matches the desired caption style with stable tracking and consistent visual quality throughout the clip.`,
    autor: "@theaigeek",
    atualizado_em: "",
    origem: "https://www.imagine.art"
  },

  {
    id: "desenho-antigo-4k-imagem",
    titulo: "Desenho antigo em 4K realista: imagem do primeiro frame",
    tipo: "Prompt",
    funcoes: ["anuncio"],
    tags: ["vídeo", "upscale", "4k", "desenho", "realista", "imagem"],
    descricao: "Transforma um frame de desenho animado em still cinematográfico 4K com personagens reais.",
    quando_usar: "Primeiro passo: envie um frame do desenho original. Use só com material que você tem direito de usar. Depois use a animação.",
    conteudo: `Transform this frame into an ultra-detailed 4K cinematic still. Preserve the exact composition, camera angle, subject placement, timing, and environment. Keep the environment 60-70% faithful to the original cartoon while making the main characters 100% realistic by replacing them with real-world equivalents that match their colors, proportions, and actions. Maintain the exact poses and facial expressions so this image can serve as the first frame for video generation. Replace [YOUR CHARACTER], [YOUR ENVIRONMENT], and [YOUR STYLE] with your own project details.`,
    autor: "@theaigeek",
    atualizado_em: "",
    origem: ""
  },

  {
    id: "desenho-antigo-4k-animacao",
    titulo: "Desenho antigo em 4K realista: animação",
    tipo: "Prompt",
    funcoes: ["anuncio"],
    tags: ["vídeo", "upscale", "4k", "seedance", "motion reference"],
    descricao: "Recria o vídeo original com a aparência da imagem 4K, mantendo o movimento exato.",
    quando_usar: "Segundo passo, no Seedance 2.0: anexe o vídeo original e a imagem 4K gerada e ative 4K e Highest Quality.",
    conteudo: `Treat the original footage as the MASTER MOTION REFERENCE and the generated image as the MASTER APPEARANCE REFERENCE. Recreate every frame by precisely matching the original timing, poses, camera movement, object motion, facial expressions, physics, and choreography while inheriting the appearance, lighting, colors, textures, and character identities from the generated image. Mimic the original motion exactly with no drift, flicker, identity changes, or camera changes. Export the final animation in 4K.`,
    autor: "@theaigeek",
    atualizado_em: "",
    origem: ""
  },

  {
    id: "drone-shot-imagem-estatica",
    titulo: "Tomada de drone a partir de uma imagem parada",
    tipo: "Prompt",
    funcoes: ["anuncio"],
    tags: ["vídeo", "drone", "aéreo", "seedance", "câmera", "imagem para vídeo"],
    descricao: "Faz um voo de drone seguindo uma linha vermelha desenhada na foto, com a câmera apontando pelas setas brancas.",
    quando_usar: "Para planos aéreos de imóvel, cidade ou local. Prepare uma imagem horizontal sem marca d'água, com linha vermelha (trajeto) e setas brancas (direção da câmera); clipe de no mínimo 7 s na maior resolução. Seedance 2.5/2.0 (pago) ou Google Omni Flash (grátis). O prompt cita uma torre de relógio: troque pelo seu ponto de destaque.",
    conteudo: `Use the attached image as the exact first frame of the animation.

The red curves define the drone's flight path only (its position and trajectory). The white arrows define the camera's viewing direction only (where the gimbal should point). These are production guides and must never appear in the final video.

Before any movement begins, seamlessly remove all red and white guide markings, revealing the clean underlying image.

Create a single, continuous aerial drone POV shot with no cuts or interruptions. The drone must precisely follow the red flight path, accurately matching its direction, curvature, altitude changes, and endpoint. Treat the red path as a series of exact waypoints, not as a general guideline.

Simultaneously, orient the camera according to the white arrows throughout the entire flight. Smoothly rotate the gimbal so the camera continuously faces the indicated direction while naturally keeping the clock tower prominently framed. The drone's movement and the camera's orientation are independent systems and must both be followed with equal precision at all times.

Use realistic cinematic drone physics, including subtle inertia, smooth banking, gentle acceleration and deceleration, stabilized gimbal motion, and fluid, natural transitions. Avoid abrupt rotations, jerky movement, overshooting, teleporting, cuts, or unnatural speed changes. The motion should feel like footage captured by a professional cinematic FPV drone.

Preserve the environment exactly as shown. Do not modify the architecture, lighting, weather, clouds, time of day, colors, textures, scale, perspective, or overall composition, except for the natural parallax created by the drone's movement. Do not add, remove, or alter any objects or introduce visual effects or environmental changes.

The final result must resemble a real, high-end drone shot captured in a single take, with clean, photorealistic imagery and absolutely no visible guide markings, arrows, red paths, annotations, overlays, graphics, text, or watermarks in any frame.`,
    autor: "@theaigeekk",
    atualizado_em: "",
    origem: "Guide_ Creating a Drone Shot from a Still Image Using AI.pdf"
  },

  {
    id: "golpe-astral-imagem",
    titulo: "Golpe astral (alma saindo do corpo): imagem base",
    tipo: "Prompt",
    funcoes: ["anuncio"],
    tags: ["imagem", "cinematográfico", "samurai", "épico", "vfx"],
    descricao: "Cena épica realista de um mestre japonês diante de um samurai, antes do duelo.",
    quando_usar: "Primeiro passo do efeito de golpe astral, no GPT Image 2.0. Depois use a animação com os vídeos de referência.",
    conteudo: `A cinematic standoff on an ancient Japanese battlefield. A wise elderly Japanese master with weathered skin, a long white beard, and silver hair tied into a traditional topknot stands calmly in simple dark robes, facing an enormous heavily armored samurai warrior. The samurai wears intimidating black lamellar armor and a large kabuto helmet, towering over the old master with his back partially toward the camera. Hundreds of soldiers stand silently in formation behind them, holding long spears with battle flags fluttering in the wind. The atmosphere is tense and silent, moments before a duel. Soft overcast daylight, muted earthy tones, realistic dust in the air, subtle wind moving clothing and banners, shallow depth of field, ultra-photorealistic, cinematic composition, ARRI Alexa 65, 50mm anamorphic lens, natural film grain, high dynamic range, dramatic historical epic, 8K.`,
    autor: "How to Recreate Doctor Strange Astral Punch (PDF)",
    atualizado_em: "",
    origem: "https://drive.google.com/file/d/1Z71WG0Zw9-zxoZjCII8ErL-EaaB1ao-I/view?usp=sharing"
  },

  {
    id: "golpe-astral-animacao",
    titulo: "Golpe astral (alma saindo do corpo): animação",
    tipo: "Prompt",
    funcoes: ["anuncio"],
    tags: ["vídeo", "vfx", "câmera lenta", "seedance", "google flow"],
    descricao: "Um golpe leve faz a alma do personagem sair em câmera lenta e voltar ao corpo.",
    quando_usar: "Segundo passo, no Seedance 2.0 Fast ou Google Flow: @Image 1 é a imagem base, @Video 1 dá o movimento de câmera e @Video 2 o golpe (vídeo de referência no link de origem).",
    conteudo: `The scene begins exactly as shown in the reference frame @Image 1, preserving the original environment, characters, framing, lighting, and camera position. Match the camera movement, timing, and pacing from @Video 1.

One character delivers a subtle, controlled strike that closely matches the body mechanics and timing shown in @Video 2. The movement should feel effortless, precise, and grounded, requiring very little visible force. At the exact instant the strike makes contact, time begins to slow dramatically.

Inspired by the effect in @Video 2, create a realistic spiritual separation. A translucent spirit emerges naturally from inside the struck character's body while preserving their exact facial features, body proportions, hairstyle, age, clothing silhouette, and overall appearance. The spirit should be an ethereal version of the same person, not a different character. It travels backward in extreme slow motion with subtle volumetric light, delicate shimmering particles, realistic light refraction, and flowing energy trails. The physical body remains nearly frozen while the spirit continues moving backward. Keep the effect elegant, cinematic, and physically believable, avoiding exaggerated fantasy, comic-book, or anime-style VFX.

The spirit reaches its furthest point before being gently pulled back toward the physical body as though connected by an invisible force. It smoothly merges back into the body using subtle energy distortion, realistic refraction, and atmospheric ripples. As the spirit reconnects, normal time gradually resumes.

The struck character naturally reacts with shock and disorientation, as if they briefly experienced their soul leaving their body, while the striking character remains calm and composed. Continue the camera movement from @Video 1, maintaining the same pacing and framing throughout. Preserve the original scene, environment, wardrobe, lighting, and composition from @Image 1. Ultra-photorealistic live action, grounded performances, realistic physics, seamless spiritual VFX integrated into the footage, subtle motion blur, and one continuous unbroken take.`,
    autor: "How to Recreate Doctor Strange Astral Punch (PDF)",
    atualizado_em: "",
    origem: "https://drive.google.com/file/d/1Z71WG0Zw9-zxoZjCII8ErL-EaaB1ao-I/view?usp=sharing"
  },

  /* ======================== CRIADOR DE ANÚNCIO E COPY: IA local ======================== */

  {
    id: "comfyui",
    titulo: "ComfyUI: imagem, vídeo e áudio com IA no seu PC",
    tipo: "Link",
    funcoes: ["anuncio"],
    tags: ["ia local", "imagem", "vídeo", "flux", "sdxl", "nós"],
    descricao: "Motor visual em nós para imagem (Flux, SDXL, SD), vídeo (LTX-Video, Mochi), áudio e 3D.",
    quando_usar: "Para gerar criativos localmente, sem pagar por crédito, quando há uma boa placa de vídeo. Licença GPL-3.0.",
    conteudo: `https://github.com/Comfy-Org/ComfyUI`,
    autor: "Pixel AI Hub",
    atualizado_em: "",
    origem: "https://github.com/Comfy-Org/ComfyUI"
  },

  {
    id: "wan-2-1",
    titulo: "Wan 2.1: gerar vídeo com IA localmente",
    tipo: "Link",
    funcoes: ["anuncio"],
    tags: ["ia local", "vídeo", "texto para vídeo", "imagem para vídeo"],
    descricao: "Texto para vídeo, imagem para vídeo, edição VACE e vídeo para áudio.",
    quando_usar: "Para clipes de anúncio sem custo por geração. O modelo 1.3B roda com cerca de 8 GB de VRAM. Licença Apache 2.0.",
    conteudo: `https://github.com/Wan-Video/Wan2.1`,
    autor: "Pixel AI Hub",
    atualizado_em: "",
    origem: "https://github.com/Wan-Video/Wan2.1"
  },

  {
    id: "duix-avatar",
    titulo: "Duix-Avatar: avatar realista offline",
    tipo: "Link",
    funcoes: ["anuncio"],
    tags: ["ia local", "avatar", "clonagem de voz", "lip-sync"],
    descricao: "Humanos digitais 100% offline, com clonagem de voz e aparência e lip-sync em 8 idiomas.",
    quando_usar: "Para vídeos com apresentador digital. Use só o próprio rosto e voz, ou de quem autorizou por escrito. Exige GPU NVIDIA RTX 4070+ e 32 GB de RAM; uso comercial livre até 100 mil usuários ou US$ 10 mi/ano.",
    conteudo: `https://github.com/duixcom/Duix-Avatar`,
    autor: "Pixel AI Hub",
    atualizado_em: "",
    origem: "https://github.com/duixcom/Duix-Avatar"
  },

  {
    id: "omnivoice-studio",
    titulo: "OmniVoice Studio: estúdio de voz local",
    tipo: "Link",
    funcoes: ["anuncio"],
    tags: ["ia local", "voz", "tts", "dublagem", "transcrição"],
    descricao: "Ditado em tempo real, clonagem de voz, dublagem, audiobooks e isolamento vocal.",
    quando_usar: "Para narração e dublagem de anúncios. Clone só vozes com autorização. Roda em CUDA, Apple Silicon, ROCm ou CPU. Licença AGPL-3.0.",
    conteudo: `https://github.com/debpalash/OmniVoice-Studio`,
    autor: "Pixel AI Hub",
    atualizado_em: "",
    origem: "https://github.com/debpalash/OmniVoice-Studio"
  },

  /* ======================== MINERADOR DE OFERTAS E OPORTUNIDADES ======================== */

  {
    id: "perplexity-tendencias-nicho",
    titulo: "Tendências do nicho no Brasil, com fontes",
    tipo: "Prompt",
    funcoes: ["minerador"],
    tags: ["perplexity", "pesquisa", "tendências", "nicho", "mercado"],
    descricao: "Pede ao Perplexity as 5 maiores tendências de um nicho no Brasil, citando as fontes.",
    quando_usar: "No começo da mineração de um nicho, para achar onde está o movimento. Perplexity: buscas rápidas ilimitadas e cerca de 5 Pro Search por dia grátis.",
    conteudo: `Quais são as 5 maiores tendências de [seu nicho] no Brasil em 2026? Cite as fontes.`,
    autor: "@sitaria.digital (Guia 5 IAs de Graça)",
    atualizado_em: "2026-11",
    origem: "https://perplexity.ai"
  },

  {
    id: "perplexity-comparar-precos",
    titulo: "Tabela de preços da concorrência na cidade",
    tipo: "Prompt",
    funcoes: ["minerador", "vendas"],
    tags: ["perplexity", "pesquisa", "preços", "concorrência"],
    descricao: "Compara os preços de um serviço numa cidade e devolve em tabela.",
    quando_usar: "Para avaliar uma oferta ou definir preço frente à concorrência local.",
    conteudo: `Compare os preços de [serviço] em [sua cidade] e monte uma tabela.`,
    autor: "@sitaria.digital (Guia 5 IAs de Graça)",
    atualizado_em: "2026-11",
    origem: "https://perplexity.ai"
  },

  {
    id: "perplexity-duvidas-produto",
    titulo: "As 10 dúvidas mais comuns sobre um produto",
    tipo: "Prompt",
    funcoes: ["minerador", "anuncio"],
    tags: ["perplexity", "pesquisa", "objeções", "público", "dúvidas"],
    descricao: "Lista as dúvidas que as pessoas mais têm sobre um produto.",
    quando_usar: "Para descobrir objeções e ângulos de anúncio antes de escrever a copy.",
    conteudo: `Quais dúvidas as pessoas mais têm sobre [seu produto]? Liste 10.`,
    autor: "@sitaria.digital (Guia 5 IAs de Graça)",
    atualizado_em: "2026-11",
    origem: "https://perplexity.ai"
  },

  /* ======================== GESTOR DE VENDAS ======================== */

  {
    id: "whatsapp-business-agente-ia",
    titulo: "Agente de IA do WhatsApp Business: como ativar",
    tipo: "Referência",
    funcoes: ["vendas"],
    tags: ["whatsapp", "atendimento", "automação", "agente de ia"],
    descricao: "Passo a passo para ligar o agente de IA nativo do WhatsApp Business e os 3 níveis de automação.",
    quando_usar: "Para atender clientes fora do horário ou acelerar respostas. Antes, deixe o catálogo (com descrição e preço) e os dados da empresa completos.",
    conteudo: `Requisitos: App WhatsApp Business atualizado em português do Brasil, catálogo cadastrado (com descrição e preço) e dados da empresa preenchidos (horário, endereço, pagamento).

Ativação: Configurações → Ferramentas comerciais → Agente de IA (ou Business AI / IA do WhatsApp) → revisar informações, ajustar tom de voz e horário (24h ou fora do comercial) → gerenciar pelo chat interno "Seu agente de IA".

3 Níveis de Automação:
- Manual: você responde tudo.
- Sugestão: a IA escreve e você aprova antes de enviar.
- Automático: a IA responde sozinha; você pode assumir a conversa a qualquer momento.`,
    autor: "@sitaria.digital (Guia IA WhatsApp Business)",
    atualizado_em: "2026-11",
    origem: "Guia-IA-WhatsApp-Business.pdf"
  },

  {
    id: "whatsapp-faq-treinar-ia",
    titulo: "Perguntas frequentes para treinar a IA do WhatsApp",
    tipo: "Modelo",
    funcoes: ["vendas"],
    tags: ["whatsapp", "faq", "atendimento", "agente de ia"],
    descricao: "Modelo de perguntas e respostas: horário, entrega, pagamento, agendamento, troca e endereço.",
    quando_usar: "Preencha com os dados reais do negócio e cadastre no agente de IA do WhatsApp Business.",
    conteudo: `Qual o horário? → Segunda a sábado, das 9h às 18h.
Vocês entregam? → Sim, no bairro X e região, taxa de R$ __.
Formas de pagamento? → Pix, cartão e dinheiro.
Precisa agendar? → Sim, pelo próprio WhatsApp, com 1 dia de antecedência.
Tem garantia/troca? → Troca em até 7 dias com a nota.
Onde fica? → Rua ________, nº __, bairro ________.`,
    autor: "@sitaria.digital (Guia IA WhatsApp Business)",
    atualizado_em: "2026-11",
    origem: "Guia-IA-WhatsApp-Business.pdf"
  },

  {
    id: "manychat-comentario-direct",
    titulo: "ManyChat: comentário no post vira Direct com link",
    tipo: "Referência",
    funcoes: ["vendas", "anuncio"],
    tags: ["manychat", "instagram", "automação", "direct", "palavra-chave", "lead"],
    descricao: "Montagem da automação que responde quem comenta uma palavra-chave e manda o link no Direct.",
    quando_usar: "Para capturar leads de posts e Reels (\"comente X que eu te mando\"). Plano Free: até 25 contatos ativos por mês e 4 automações ativas. A Meta permite 1 mensagem privada por comentário.",
    conteudo: `Requisitos e conexão: conta profissional do Instagram (Criador ou Empresa) → criar conta em manychat.com (1 Instagram por conta) → conectar via Meta (recomendado, Portfólio Empresarial), Instagram ou Meta Business Suite (ligado a Página do Facebook) → autorizar permissões de comentários e mensagens.

Montagem: Automations → New Automation → Gatilho: Instagram Post/Reel Comment → escolher post específico ou todos → cadastrar palavra-chave e variações (ex.: SITARIA, sitaria, Sitaria) → ativar resposta pública ao comentário com 3 textos diferentes → configurar mensagem de Direct com botão e link aberto ("Qualquer pessoa com o link") → ativar e testar com outra conta.

Regras da Meta: 1 mensagem privada por comentário (janela de 24h para respostas automáticas após resposta do usuário; até 7 dias para resposta humana).`,
    autor: "@sitaria.digital (Guia ManyChat)",
    atualizado_em: "2026-11-12",
    origem: "https://manychat.com"
  },

  {
    id: "manychat-mensagem-direct",
    titulo: "Mensagem de Direct para entregar material",
    tipo: "Modelo",
    funcoes: ["vendas", "anuncio"],
    tags: ["manychat", "instagram", "direct", "copy", "lead"],
    descricao: "Texto curto de Direct com botão para baixar o material e convite para seguir.",
    quando_usar: "Na automação do ManyChat, como mensagem enviada a quem comentou a palavra-chave.",
    conteudo: `Fala! Aqui está o guia que você pediu.
[botão: Baixar o PDF]
Gostou? Me segue que toda semana tem conteúdo novo`,
    autor: "@sitaria.digital (Guia ManyChat)",
    atualizado_em: "2026-11-12",
    origem: "Guia-ManyChat.pdf"
  },

  {
    id: "gamma-apresentacao-comercial",
    titulo: "Apresentação comercial de 8 slides (Gamma)",
    tipo: "Prompt",
    funcoes: ["vendas"],
    tags: ["gamma", "apresentação", "slides", "proposta", "cliente"],
    descricao: "Gera uma apresentação da empresa para cliente novo: problema, solução, diferenciais, preço e próximo passo.",
    quando_usar: "Antes de uma reunião de venda. Gamma: 400 créditos únicos no cadastro, até 10 slides por geração, com marca d'água no plano grátis.",
    conteudo: `Apresentação de 8 slides apresentando minha empresa [nome], que faz [serviço], para um cliente novo: problema, solução, como funciona, diferenciais, depoimento, preços e próximo passo.`,
    autor: "@sitaria.digital (Guia 5 IAs de Graça)",
    atualizado_em: "2026-11",
    origem: "https://gamma.app"
  },

  {
    id: "notebooklm-resumo-audio-produtos",
    titulo: "Resumo em áudio dos produtos para cliente novo (NotebookLM)",
    tipo: "Prompt",
    funcoes: ["vendas"],
    tags: ["notebooklm", "gemini", "áudio", "podcast", "produtos", "onboarding"],
    descricao: "Gera um áudio de 5 minutos explicando os produtos, a partir dos materiais da empresa.",
    quando_usar: "Suba catálogos e materiais como fontes em notebooklm.google.com e peça o resumo. Serve para cliente novo e para treinar vendedor.",
    conteudo: `Crie um resumo em áudio de 5 minutos explicando nossos produtos para um cliente novo.`,
    autor: "@sitaria.digital (Guia 5 IAs de Graça)",
    atualizado_em: "2026-11",
    origem: "https://notebooklm.google.com"
  }

];
