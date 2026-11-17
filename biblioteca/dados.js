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
   TEMAS
   Agrupam os itens dentro de cada função. A ordem desta lista é a ordem na tela.
   Para criar um tema novo: acrescente o nome aqui e use o mesmo nome no campo
   "tema" dos itens. Item sem tema aparece no grupo "Outros".
   -------------------------------------------------------------------------- */
window.TEMAS = [
  "Passo a passo (do zero ao post)",
  "Do zero à venda",
  "Vídeos 3D virais (kit)",
  "Séries animadas virais",
  "Prompts do Claude",
  "Claude Code",
  "Economia de tokens",
  "Sites e apps",
  "Edição de vídeo",
  "Vídeo com IA",
  "Imagem com IA",
  "Áudio e voz",
  "IA local",
  "Pesquisa de mercado",
  "Atendimento e automação",
  "Apresentações e materiais"
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
     tema: "Sites e apps",           // um nome da lista TEMAS acima
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
    tema: "Prompts do Claude",
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
    tema: "Claude Code",
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
    tema: "Claude Code",
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
    tema: "Claude Code",
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
    tema: "Economia de tokens",
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
    tema: "Economia de tokens",
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
    tema: "Economia de tokens",
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
    tema: "Economia de tokens",
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
    tema: "Economia de tokens",
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
    tema: "Áudio e voz",
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
    tema: "Claude Code",
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
    tema: "Claude Code",
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
    tema: "Claude Code",
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
    tema: "Claude Code",
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
    tema: "Sites e apps",
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
    tema: "Sites e apps",
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
    tema: "Sites e apps",
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
    tema: "Sites e apps",
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
    tema: "Sites e apps",
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
    tema: "Sites e apps",
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
    tema: "Edição de vídeo",
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
    tema: "Edição de vídeo",
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
    tema: "Edição de vídeo",
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
    tema: "Áudio e voz",
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
    tema: "Áudio e voz",
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
    tema: "Áudio e voz",
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
    tema: "Vídeo com IA",
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
    tema: "Vídeo com IA",
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
    tema: "Vídeo com IA",
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
    tema: "Vídeo com IA",
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
    tema: "Imagem com IA",
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
    tema: "Imagem com IA",
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
    tema: "Imagem com IA",
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
    tema: "Vídeo com IA",
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
    tema: "Vídeo com IA",
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
    tema: "Vídeo com IA",
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
    tema: "Vídeo com IA",
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
    tema: "Vídeo com IA",
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
    tema: "Vídeo com IA",
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
    tema: "Vídeo com IA",
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
    tema: "Vídeo com IA",
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
    tema: "Vídeo com IA",
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
    tema: "IA local",
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
    tema: "IA local",
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
    tema: "IA local",
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
    tema: "IA local",
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
    tema: "Pesquisa de mercado",
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
    tema: "Pesquisa de mercado",
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
    tema: "Pesquisa de mercado",
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
    tema: "Atendimento e automação",
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
    tema: "Atendimento e automação",
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
    tema: "Atendimento e automação",
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
    tema: "Atendimento e automação",
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
    tema: "Apresentações e materiais",
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
    tema: "Apresentações e materiais",
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
  },

  /* ======================== DO ZERO À VENDA: prompts universais, na ordem do processo ======================== */

  {
    id: "zv-00-contexto-do-produto",
    tema: "Do zero à venda",
    titulo: "00 · Contexto do produto (bloco base)",
    tipo: "Modelo",
    funcoes: ["global"],
    tags: ["contexto", "briefing", "base", "produto", "universal"],
    descricao: "Ficha única do produto. Preencha uma vez e cole no campo de contexto de todos os outros prompts.",
    quando_usar: "Sempre antes de qualquer prompt da série Do zero à venda. Preencha o que souber e escreva \"não sei\" no resto: a IA trabalha melhor com um \"não sei\" do que com um chute. Atualize a ficha a cada etapa (depois da validação, da oferta, da marca).",
    conteudo: `<contexto_do_produto>
Produto ou serviço: (o que é, em uma frase)
Formato e entrega: (curso, e-book, software, serviço, assinatura... e como o cliente recebe)
Para quem é: (quem compra, em que situação está, o que já tentou)
Problema que resolve: (a dor, nas palavras do cliente)
Resultado prometido: (o que muda na vida do cliente e em quanto tempo)
Por que agora: (tendência, evento ou mudança que torna isso oportuno)
Preço e condições: (preço, parcelas, garantia, bônus)
Provas reais: (resultados, depoimentos, números, credenciais; se não houver, escreva "nenhuma ainda")
Concorrentes conhecidos: (nomes ou links)
Diferencial: (por que escolher este e não o concorrente)
Objeções mais comuns: (motivos reais para não comprar)
Canais de venda: (Meta, TikTok, Google, WhatsApp, orgânico...)
País e idioma do público:
Marca: (nome, tom de voz, cores; se ainda não existir, escreva "a definir")
Limites: (o que não pode ser prometido ou dito, restrições legais ou da plataforma)
</contexto_do_produto>`,
    autor: "Claude, para a FDSS +",
    atualizado_em: "2026-11-16",
    origem: ""
  },

  {
    id: "zv-01-radar-de-oportunidades",
    tema: "Do zero à venda",
    titulo: "01 · Radar de oportunidades",
    tipo: "Prompt",
    funcoes: ["minerador"],
    tags: ["mineração", "tendências", "oportunidades", "nicho", "pesquisa"],
    descricao: "Varre o que está em alta agora e devolve oportunidades de produto ranqueadas, com fontes.",
    quando_usar: "Primeira etapa, quando ainda não existe produto. Use numa IA com busca na web ligada (Claude com pesquisa, Perplexity, Gemini). Sem busca, ela responde com dados velhos.",
    conteudo: `<papel>
Você é um analista de oportunidades de mercado para produtos e serviços digitais. Seu trabalho é achar o que está começando a crescer agora, antes de saturar.
</papel>

<contexto>
Área ou interesse: [ÁREA OU INTERESSE, ou "aberto"]
Mercado: [PAÍS E IDIOMA DO PÚBLICO]
Nossos recursos e limites: [VERBA, EQUIPE, PRAZO E O QUE SABEMOS FAZER]
Data de hoje: [DATA DE HOJE]
</contexto>

<tarefa>
1. Pesquise na web sinais recentes (últimos 90 dias): assuntos em alta em buscas e redes, lançamentos, mudanças de lei ou de plataforma, novas ferramentas, produtos que estão vendendo muito em outros países e ainda não chegaram com força neste mercado.
2. Para cada sinal, pense em que produto ou serviço digital ele torna possível ou urgente.
3. Monte uma lista de 10 oportunidades. Descarte as que exigem recursos que não temos.
4. Dê nota de 1 a 5 para cada uma em: demanda visível, concorrência (5 = pouca), facilidade de entregar, margem provável e janela de tempo (5 = precisa entrar já).
5. Escolha as 3 melhores e explique o porquê.
</tarefa>

<regras>
- Toda afirmação sobre tendência precisa de fonte com link e data. Sem fonte, marque como "hipótese".
- Não invente números. Se não achar o dado, escreva "não encontrei".
- Diferencie moda passageira (semanas) de mudança duradoura (anos) e diga qual é qual.
- Inclua pelo menos 2 oportunidades pequenas e rápidas de testar.
</regras>

<formato>
Tabela com: oportunidade, sinal que a sustenta (com link), produto possível, notas e soma.
Depois, as 3 melhores em um parágrafo cada: para quem é, por que agora, como testar em 7 dias e o maior risco.
</formato>`,
    autor: "Claude, para a FDSS +",
    atualizado_em: "2026-11-16",
    origem: ""
  },

  {
    id: "zv-02-validacao-da-oportunidade",
    tema: "Do zero à venda",
    titulo: "02 · Validação: concorrentes, público e veredito",
    tipo: "Prompt",
    funcoes: ["minerador"],
    tags: ["validação", "concorrentes", "persona", "público", "pesquisa"],
    descricao: "Testa uma ideia contra o mercado real: concorrentes, público, dores e um veredito de vale ou não vale.",
    quando_usar: "Depois de escolher uma oportunidade no radar e antes de gastar com marca e site. Use com busca na web ligada. O prompt manda a IA procurar motivos para não fazer, porque por padrão ela tende a concordar com você.",
    conteudo: `<papel>
Você é um analista cético. Seu trabalho é evitar que a gente perca tempo e dinheiro com uma ideia ruim. Não me agrade: procure primeiro os motivos para NÃO fazer.
</papel>

<contexto>
Ideia: [IDEIA DE PRODUTO OU SERVIÇO]
Mercado: [PAÍS E IDIOMA DO PÚBLICO]
O que já sabemos: [O QUE JÁ SABEMOS, ou "nada"]
</contexto>

<tarefa>
Pesquise na web e responda, nesta ordem:
1. Concorrentes: os 5 a 8 principais (diretos e substitutos). Para cada um: o que vende, preço, promessa principal, canal de venda, pontos fortes e as reclamações mais comuns dos clientes.
2. Público: quem compra isso hoje. Descreva 2 perfis de comprador com situação, dor nas palavras deles, o que já tentaram, o que os faz comprar e o que os faz desistir. Baseie-se em avaliações, comentários, fóruns e redes, e cite de onde tirou.
3. Dor: é remédio (resolve algo urgente) ou vitamina (seria bom ter)? Justifique com evidências.
4. Brecha: o que os concorrentes fazem mal ou não fazem, e que nós conseguiríamos fazer.
5. Riscos: saturação, dependência de plataforma, sazonalidade, lei, dificuldade de entrega.
6. Veredito: SEGUIR, AJUSTAR (diga o ajuste) ou DESCARTAR, com os 3 motivos que mais pesaram.
</tarefa>

<regras>
- Cite fonte com link para preços, reclamações e dados de mercado.
- Separe claramente "fato encontrado" de "minha inferência".
- Não invente depoimentos nem números. Se faltar dado, diga o que falta e como eu consigo descobrir.
- Se o veredito for SEGUIR, liste o teste mais barato para confirmar a demanda em até 7 dias.
</regras>

<formato>
Seções numeradas na ordem acima. Concorrentes em tabela. Veredito em destaque no fim, seguido de "O que eu precisaria ver para mudar de opinião".
</formato>`,
    autor: "Claude, para a FDSS +",
    atualizado_em: "2026-11-16",
    origem: ""
  },

  {
    id: "zv-03-viabilidade-e-preco",
    tema: "Do zero à venda",
    titulo: "03 · Viabilidade, preço e metas do teste",
    tipo: "Prompt",
    funcoes: ["minerador", "vendas"],
    tags: ["preço", "margem", "cpa", "viabilidade", "metas"],
    descricao: "Faz a conta do produto: preço, margem, quanto dá para pagar por cliente e as metas que decidem o teste.",
    quando_usar: "Depois da validação e antes de anunciar. As metas saem daqui e são usadas no prompt 13 (plano de teste) e no 14 (diagnóstico). Defina os números antes de ver resultado, para a decisão não depender do humor do dia.",
    conteudo: `<papel>
Você é um analista financeiro de negócios digitais. Seja conservador nas contas.
</papel>

<contexto>
[CONTEXTO DO PRODUTO]

Preço pretendido: [PREÇO PRETENDIDO]
Custos conhecidos: [CUSTOS: PLATAFORMA, TAXAS, ENTREGA, FERRAMENTAS, IMPOSTOS]
Verba para o teste: [VERBA DE TESTE]
</contexto>

<tarefa>
1. Calcule a margem por venda: preço menos taxas de pagamento, impostos, custo de entrega e ferramentas. Mostre a conta linha por linha.
2. Calcule o CPA máximo (quanto posso pagar para conquistar um cliente) em três cenários: empate, margem de 30% e margem de 50%.
3. Avalie o preço: compare com os concorrentes do contexto e sugira até 3 opções (por exemplo: entrada, principal, premium), com o raciocínio de cada uma.
4. Diga quantas vendas a verba de teste precisa gerar para o teste valer, e se a verba é suficiente para uma conclusão confiável.
5. Defina as metas do teste: CPA máximo, taxa de conversão mínima da página, custo por clique aceitável e prazo. Para cada meta, diga o que fazer se ela for batida e se não for.
</tarefa>

<regras>
- Use só os números que eu passei. Quando precisar supor algo (ex.: taxa da plataforma), escreva o valor suposto e marque "suposição".
- Não use médias de mercado sem dizer que são estimativas.
- Se algum custo importante estiver faltando, pergunte antes de calcular.
</regras>

<formato>
Tabela da conta por venda, tabela dos três cenários de CPA e uma lista final "Metas do teste" pronta para copiar.
</formato>`,
    autor: "Claude, para a FDSS +",
    atualizado_em: "2026-11-16",
    origem: ""
  },

  {
    id: "zv-04-oferta-e-posicionamento",
    tema: "Do zero à venda",
    titulo: "04 · Oferta e posicionamento",
    tipo: "Prompt",
    funcoes: ["anuncio", "vendas"],
    tags: ["oferta", "posicionamento", "promessa", "garantia", "bônus"],
    descricao: "Define como vender: promessa, mecanismo, pacote da oferta, garantia e a frase de posicionamento.",
    quando_usar: "Depois de decidir o produto e o preço. O resultado alimenta marca, site, anúncios e scripts. Copie a oferta final para a ficha de contexto (prompt 00).",
    conteudo: `<papel>
Você é um estrategista de ofertas de resposta direta. Você escreve para quem compra, com palavras simples.
</papel>

<contexto>
[CONTEXTO DO PRODUTO]
</contexto>

<tarefa>
1. Liste os 5 resultados que o cliente mais quer e os 5 medos ou obstáculos que o impedem de comprar. Use as palavras do público do contexto.
2. Escreva 3 opções de promessa principal: resultado específico, para quem, em quanto tempo ou com que facilidade.
3. Explique o mecanismo: por que isto funciona quando o que ele já tentou não funcionou, em 2 frases.
4. Monte o pacote da oferta: o que está incluído, bônus que eliminam um obstáculo cada, garantia e motivo real para comprar agora.
5. Escreva a frase de posicionamento: para quem é, o que entrega e por que é diferente dos concorrentes do contexto.
6. Aponte as 3 objeções que ainda sobram e como a oferta responde a cada uma.
</tarefa>

<regras>
- Não prometa resultado que o contexto não sustenta. Sem prova real, escreva a promessa de forma honesta e marque "precisa de prova".
- Nada de urgência falsa nem escassez inventada.
- Não crie bônus que a gente não consiga entregar: marque "a confirmar" se depender de mim.
- Evite jargão e frases genéricas como "transforme sua vida".
</regras>

<formato>
Seções numeradas. No fim, um bloco "Oferta em resumo" com 6 linhas (promessa, para quem, o que recebe, bônus, garantia, preço e condições), pronto para colar na ficha de contexto.
</formato>`,
    autor: "Claude, para a FDSS +",
    atualizado_em: "2026-11-16",
    origem: ""
  },

  {
    id: "zv-05-nome-slogan-tom-de-voz",
    tema: "Do zero à venda",
    titulo: "05 · Marca: nome, slogan e tom de voz",
    tipo: "Prompt",
    funcoes: ["anuncio", "site"],
    tags: ["marca", "nome", "slogan", "tom de voz", "naming"],
    descricao: "Gera opções de nome e slogan e define o tom de voz, com exemplos do que dizer e do que evitar.",
    quando_usar: "Depois da oferta definida. Antes de aprovar um nome, confira você mesmo o domínio, o @ nas redes e o registro de marca no INPI: a IA não consegue garantir disponibilidade.",
    conteudo: `<papel>
Você é um especialista em naming e identidade verbal de marcas.
</papel>

<contexto>
[CONTEXTO DO PRODUTO]

Estilo de nome que queremos: [ESTILO DE NOME: descritivo, inventado, curto, em português, em inglês... ou "aberto"]
Nomes que não queremos ou já descartamos: [NOMES DESCARTADOS, ou "nenhum"]
</contexto>

<tarefa>
1. Crie 15 nomes em 3 caminhos diferentes (5 cada): descritivo (diz o que faz), evocativo (sugere o resultado ou a sensação) e inventado (palavra nova, curta).
2. Para cada nome: como se pronuncia, por que combina com o público e um possível problema (soa parecido com outra marca, difícil de escrever, duplo sentido).
3. Escolha os 3 melhores e escreva 3 slogans para cada um, com no máximo 7 palavras.
4. Defina o tom de voz em 4 traços. Para cada traço: o que significa, uma frase que a marca diria e uma que ela nunca diria.
5. Escreva a descrição da marca em 3 tamanhos: uma frase, um parágrafo e a versão para a bio de rede social.
</tarefa>

<regras>
- Nomes fáceis de falar, escrever e lembrar para o público e o idioma do contexto.
- Não afirme que um nome ou domínio está livre: você não tem como saber. Escreva "verificar disponibilidade".
- Não use nomes parecidos com os concorrentes do contexto nem com marcas famosas.
- Evite clichês do nicho.
</regras>

<formato>
Tabela de nomes por caminho. Depois os 3 finalistas com slogans. Depois o tom de voz e as 3 descrições.
</formato>`,
    autor: "Claude, para a FDSS +",
    atualizado_em: "2026-11-16",
    origem: ""
  },

  {
    id: "zv-06-site-prompt-1-briefing",
    tema: "Do zero à venda",
    titulo: "06 · Site, prompt 1: briefing, identidade visual e prompt de construção",
    tipo: "Prompt",
    funcoes: ["site"],
    tags: ["site", "landing page", "briefing", "identidade visual", "meta prompt"],
    descricao: "Junta o contexto do produto, decide a identidade visual e escreve o prompt 2, que constrói o site inteiro.",
    quando_usar: "Quando oferta e marca estiverem definidas. Rode este prompt, revise a seção de suposições e só então cole o prompt 2 no construtor (Claude Code, Lovable ou outro). Corrigir o briefing é barato; corrigir o site pronto é caro.",
    conteudo: `<papel>
Você é um diretor de criação que une estratégia de conversão, copy e design de interfaces. Você vai preparar tudo o que um construtor de sites com IA precisa para fazer a página certa de primeira.
</papel>

<contexto>
[CONTEXTO DO PRODUTO]

Tipo de site: [TIPO DE SITE: página de vendas, captura, institucional, várias páginas]
Objetivo principal da página: [AÇÃO QUE O VISITANTE DEVE FAZER]
Onde será construído: [FERRAMENTA: Claude Code, Lovable, outra]
Referências visuais ou restrições: [REFERÊNCIAS, CORES OBRIGATÓRIAS OU "nenhuma"]
</contexto>

<tarefa>
Entregue, nesta ordem:

1. Suposições: liste tudo o que você precisou supor porque o contexto não dizia. Seja específico.

2. Briefing: público e nível de consciência, a dor principal, a promessa, as 3 maiores objeções e a prova disponível.

3. Identidade visual:
   - Conceito em uma frase e 3 adjetivos.
   - Paleta: fundo, superfície, texto, texto secundário, cor de ação e cor de apoio, com código hexadecimal e o papel de cada cor. Confirme contraste mínimo de 4,5:1 entre texto e fundo.
   - Tipografia: uma fonte para títulos e uma para texto, do Google Fonts, com pesos e tamanhos.
   - Estilo de formas, cantos, sombras, ícones e imagens.
   - Direção do logo em 2 frases.

4. Arquitetura da página: as seções na ordem, o objetivo de cada uma e o texto real de cada seção (título, subtítulo, corpo, botão). Onde faltar prova real, escreva "INSERIR PROVA REAL" em vez de inventar.

5. PROMPT 2: um prompt único e completo, em bloco de código, pronto para colar na ferramenta indicada. Ele deve conter o objetivo, a identidade visual com os valores exatos, cada seção com seu texto final, o comportamento dos botões, requisitos de celular primeiro, desempenho, acessibilidade e SEO básico, a lista de imagens necessárias com descrição de cada uma e o que NÃO fazer.
</tarefa>

<regras>
- Use apenas fatos do contexto. Não invente depoimentos, números, selos, clientes nem garantias.
- Um objetivo por página: tudo conduz à ação principal.
- Texto para leitura rápida no celular: frases curtas, um benefício por bloco.
- O prompt 2 precisa funcionar sozinho, sem esta conversa.
- Se faltar algo essencial (oferta, preço ou público), pergunte antes de começar.
</regras>`,
    autor: "Claude, para a FDSS +",
    atualizado_em: "2026-11-16",
    origem: ""
  },

  {
    id: "zv-07-logo",
    tema: "Do zero à venda",
    titulo: "07 · Logo: conceitos e prompts de imagem",
    tipo: "Prompt",
    funcoes: ["site", "anuncio"],
    tags: ["logo", "identidade visual", "marca", "imagem"],
    descricao: "Propõe 4 caminhos de logo e escreve o prompt de imagem de cada um, pronto para o gerador.",
    quando_usar: "Depois de definir nome e identidade visual. Gere as imagens, escolha uma e refaça em vetor (ou peça a um designer): logo gerado por IA costuma precisar de acabamento e, em geral, não tem proteção de direito autoral.",
    conteudo: `<papel>
Você é um designer de marcas. Você pensa em logos simples, que funcionam pequenos e em uma cor só.
</papel>

<contexto>
[CONTEXTO DO PRODUTO]

Nome da marca: [NOME DA MARCA]
Cores e estilo já definidos: [PALETA E ESTILO, ou "a definir"]
Gerador de imagem que vou usar: [GERADOR DE IMAGEM]
</contexto>

<tarefa>
1. Proponha 4 caminhos diferentes: só o nome (tipográfico), símbolo abstrato com o nome, inicial ou monograma, e símbolo que representa o benefício.
2. Para cada caminho: a ideia em uma frase, por que combina com o público e onde pode falhar.
3. Escreva o prompt de imagem de cada caminho, em inglês, já adaptado ao gerador indicado. Cada prompt deve pedir: logo vetorial plano, fundo branco liso, poucas formas, no máximo 2 cores, sem degradê, sem sombra, sem mockup, sem texto extra além do nome da marca escrito exatamente como informado.
4. Diga qual caminho você recomenda e por quê.
5. Liste os testes antes de aprovar: legível com 32 pixels de largura, funciona em preto e em branco, não se parece com a marca de um concorrente.
</tarefa>

<regras>
- Nada de clichês do nicho (lâmpada para ideia, foguete para crescimento, globo para tecnologia).
- Não copie nem imite o logo de marcas existentes.
- Um conceito por prompt: não misture ideias.
</regras>

<formato>
Um bloco por caminho: ideia, justificativa, risco e o prompt em bloco de código. Depois a recomendação e a lista de testes.
</formato>`,
    autor: "Claude, para a FDSS +",
    atualizado_em: "2026-11-16",
    origem: ""
  },

  {
    id: "zv-08-paleta-e-tipografia",
    tema: "Do zero à venda",
    titulo: "08 · Paleta de cores e tipografia",
    tipo: "Prompt",
    funcoes: ["site", "anuncio"],
    tags: ["paleta", "cores", "tipografia", "fontes", "identidade visual"],
    descricao: "Entrega 2 opções de paleta com códigos e contraste conferido, mais o par de fontes e a escala de tamanhos.",
    quando_usar: "Quando precisar da identidade visual sem fazer o site inteiro (o prompt 06 já inclui isso). Serve também para padronizar criativos e apresentações.",
    conteudo: `<papel>
Você é um designer de identidade visual com foco em legibilidade e acessibilidade.
</papel>

<contexto>
[CONTEXTO DO PRODUTO]

Sensação que a marca deve passar: [3 ADJETIVOS]
Cores obrigatórias ou proibidas: [CORES OBRIGATÓRIAS OU PROIBIDAS, ou "nenhuma"]
</contexto>

<tarefa>
1. Crie 2 opções de paleta, com conceitos diferentes. Cada uma com: fundo, superfície, texto principal, texto secundário, cor de ação, cor de apoio, sucesso e erro. Dê o código hexadecimal e o uso de cada cor.
2. Para cada paleta, calcule o contraste de texto sobre fundo e de texto sobre a cor de ação. Mínimo de 4,5:1. Se não passar, ajuste a cor e mostre o valor final.
3. Escolha o par de fontes (títulos e texto) entre as gratuitas do Google Fonts. Explique a escolha e dê uma alternativa.
4. Defina a escala: tamanhos e pesos para título principal, título de seção, subtítulo, texto, legenda e botão, para celular e computador.
5. Mostre a regra de uso: proporção aproximada de cada cor na tela e onde a cor de ação pode e não pode aparecer.
6. Entregue as variáveis CSS prontas da opção que você recomenda.
</tarefa>

<regras>
- Só uma cor de ação. Ela aparece em botões e destaques, nunca em blocos grandes de texto.
- Não use fontes pagas nem fontes que não existem no Google Fonts.
- Mostre o cálculo de contraste em vez de só afirmar que passa.
</regras>

<formato>
Tabela por paleta, tabela da escala tipográfica e um bloco de código com as variáveis CSS.
</formato>`,
    autor: "Claude, para a FDSS +",
    atualizado_em: "2026-11-16",
    origem: ""
  },

  {
    id: "zv-09-elementos-visuais",
    tema: "Do zero à venda",
    titulo: "09 · Elementos visuais: ícones, capas e ilustrações",
    tipo: "Prompt",
    funcoes: ["site", "anuncio"],
    tags: ["ícones", "imagens", "capa", "ilustrações", "identidade visual"],
    descricao: "Cria um guia de estilo único e os prompts de imagem para ícones, capas, fundos e ilustrações da marca.",
    quando_usar: "Depois da paleta definida, quando o site ou os criativos precisam de imagens que pareçam da mesma família. O guia de estilo no começo é o que mantém tudo coerente.",
    conteudo: `<papel>
Você é um diretor de arte. Seu objetivo é que todas as imagens da marca pareçam feitas pela mesma mão.
</papel>

<contexto>
[CONTEXTO DO PRODUTO]

Paleta e estilo da marca: [PALETA COM CÓDIGOS E ESTILO VISUAL]
O que eu preciso: [LISTA DE IMAGENS: ex. 6 ícones de benefícios, capa do topo, fundo de seção]
Gerador de imagem que vou usar: [GERADOR DE IMAGEM]
</contexto>

<tarefa>
1. Escreva o guia de estilo em 6 linhas: tipo de imagem (foto, 3D, ilustração plana, traço), luz, composição, texturas, cores permitidas com os códigos e o que nunca aparece.
2. Transforme o guia em um "bloco de estilo" curto, em inglês, para colar no fim de todo prompt de imagem.
3. Para cada item que eu pedi, escreva um prompt de imagem em inglês com: assunto, enquadramento, proporção (ex. 16:9 para capa, 1:1 para ícone), espaço livre para texto quando for capa, e o bloco de estilo no fim.
4. Para ícones: defina o padrão (traço ou preenchido, espessura, cantos, grade) e descreva cada ícone em uma frase, todos no mesmo padrão.
5. Diga quais itens ficam melhores feitos em código (SVG ou CSS) do que gerados por IA, como formas, degradês e padrões.
</tarefa>

<regras>
- Sem texto dentro das imagens: o texto entra depois, no site ou no editor.
- Sem pessoas reais, marcas, personagens ou obras de terceiros.
- Use apenas as cores da paleta informada.
- Um assunto por imagem.
</regras>

<formato>
Guia de estilo, bloco de estilo em código e uma lista numerada com um prompt por imagem, cada um em bloco de código.
</formato>`,
    autor: "Claude, para a FDSS +",
    atualizado_em: "2026-11-16",
    origem: ""
  },

  {
    id: "zv-10-anuncios-angulos-e-copies",
    tema: "Do zero à venda",
    titulo: "10 · Anúncios: ângulos e copies para teste",
    tipo: "Prompt",
    funcoes: ["anuncio"],
    tags: ["anúncios", "copy", "ângulos", "ganchos", "teste a/b", "meta ads"],
    descricao: "Lista motivos de compra realmente diferentes e escreve um anúncio por motivo, para cada teste medir uma ideia.",
    quando_usar: "Na hora de criar os primeiros anúncios ou de renovar os que cansaram. Pedir \"10 variações\" direto gera 10 versões da mesma frase; este prompt força ângulos distintos antes de escrever.",
    conteudo: `<papel>
Você é um copywriter de resposta direta, especialista em anúncios pagos.
</papel>

<contexto>
[CONTEXTO DO PRODUTO]

Plataforma e formato: [PLATAFORMA E FORMATO: ex. Meta feed, Reels, TikTok, Google pesquisa]
O que já está funcionando: [ÂNGULO OU ANÚNCIO QUE JÁ FUNCIONA, ou "nada ainda"]
</contexto>

<tarefa>
Faça nesta ordem:
1. Liste 8 motivos de compra diferentes. Cada um parte de uma dor, um desejo, uma objeção ou um mecanismo distinto. Se dois motivos tocam o mesmo ponto, contam como um: substitua.
2. Para cada motivo, escreva um anúncio com: gancho de até 12 palavras, corpo de 3 a 5 linhas curtas e uma chamada para ação.
3. Varie o tipo de gancho (pergunta, afirmação forte, chamada ao público, contraste, história curta, dado real). Não repita o mesmo tipo mais de 2 vezes.
4. Para os 3 ângulos mais fortes, escreva mais 3 ganchos alternativos cada.
5. Indique os 3 ângulos para testar primeiro e explique o motivo.
</tarefa>

<regras>
- Use somente provas e números do contexto. Não invente depoimento, estatística nem resultado.
- Respeite as políticas da plataforma: sem promessa garantida de ganho, sem antes e depois enganoso, sem apontar característica pessoal do leitor ("você que está acima do peso").
- Escreva como o público fala. Sem jargão e sem palavras como "revolucionário" ou "incrível".
- Respeite o limite de caracteres do formato indicado.
</regras>

<formato>
Lista numerada. Em cada item: ÂNGULO (rótulo curto), GANCHO, CORPO, CTA. No fim: "Testar primeiro" com os 3 escolhidos.
</formato>`,
    autor: "Claude, para a FDSS +",
    atualizado_em: "2026-11-16",
    origem: ""
  },

  {
    id: "zv-11-criativos-estaticos",
    tema: "Do zero à venda",
    titulo: "11 · Criativos estáticos: briefing e prompts de imagem",
    tipo: "Prompt",
    funcoes: ["anuncio"],
    tags: ["criativos", "anúncios", "imagem", "estático", "design"],
    descricao: "Transforma os ângulos de anúncio em criativos estáticos: conceito, texto na arte e prompt de imagem.",
    quando_usar: "Depois do prompt 10, com os ângulos escolhidos. Gere a imagem sem texto e coloque o texto no editor (Canva, Figma): geradores de imagem erram letras com frequência.",
    conteudo: `<papel>
Você é um diretor de arte de performance. Você pensa em imagens que param o dedo no feed e deixam a mensagem clara em 2 segundos.
</papel>

<contexto>
[CONTEXTO DO PRODUTO]

Ângulos e ganchos que vou testar: [ÂNGULOS E GANCHOS ESCOLHIDOS]
Paleta e estilo da marca: [PALETA E ESTILO, ou "a definir"]
Formatos: [FORMATOS: ex. 1:1 e 9:16]
Gerador de imagem que vou usar: [GERADOR DE IMAGEM]
</contexto>

<tarefa>
Para cada ângulo, crie 2 conceitos de criativo de tipos diferentes. Escolha entre: produto em uso, problema visível, comparação lado a lado, print ou prova real, frase forte sobre fundo simples, demonstração do resultado.
Para cada conceito, entregue:
1. A ideia em uma frase e o que a pessoa entende em 2 segundos.
2. O texto que vai na arte: título de até 7 palavras e, se precisar, uma linha de apoio.
3. A composição: o que está em destaque, onde fica o texto, onde fica o logo.
4. O prompt de imagem em inglês, sem texto na imagem, com espaço livre para o título e a proporção certa.
5. O que este criativo testa em relação aos outros.
</tarefa>

<regras>
- Um criativo, uma mensagem.
- Provas só reais: se o conceito pede print ou depoimento, escreva "USAR MATERIAL REAL" em vez de simular.
- Sem pessoas reais, marcas ou personagens de terceiros.
- Texto grande e legível no celular, com contraste alto.
- Dentro das políticas da plataforma de anúncios.
</regras>

<formato>
Um bloco por criativo, com os 5 itens, e o prompt de imagem em bloco de código. No fim, uma tabela resumindo criativo, ângulo e hipótese testada.
</formato>`,
    autor: "Claude, para a FDSS +",
    atualizado_em: "2026-11-16",
    origem: ""
  },

  {
    id: "zv-12-roteiro-video-curto",
    tema: "Do zero à venda",
    titulo: "12 · Roteiro de vídeo curto para anúncio",
    tipo: "Prompt",
    funcoes: ["anuncio"],
    tags: ["vídeo", "roteiro", "reels", "tiktok", "anúncios", "gancho"],
    descricao: "Escreve roteiros de 15 a 40 segundos, cena por cena, com fala, imagem e texto na tela.",
    quando_usar: "Para anúncios em vídeo ou conteúdo orgânico de venda. Os roteiros saem no formato de tabela, prontos para gravar ou para virar prompts de vídeo com IA (veja o modelo de diretor de cinema na biblioteca).",
    conteudo: `<papel>
Você é um roteirista de vídeos curtos de venda. Você sabe que os 3 primeiros segundos decidem se a pessoa fica.
</papel>

<contexto>
[CONTEXTO DO PRODUTO]

Ângulo do vídeo: [ÂNGULO OU MENSAGEM PRINCIPAL]
Duração e plataforma: [DURAÇÃO E PLATAFORMA]
Como será produzido: [PRODUÇÃO: pessoa falando para a câmera, tela gravada, imagens geradas por IA, narração]
</contexto>

<tarefa>
1. Escreva 5 ganchos para os 3 primeiros segundos: fala e o que aparece na tela. Tipos diferentes entre si.
2. Escolha os 2 melhores e escreva o roteiro completo de cada um, cena por cena: tempo, o que se vê, o que se ouve e o texto na tela.
3. Siga a estrutura: gancho, problema ou situação, virada (o produto e por que funciona), prova ou demonstração, chamada para ação.
4. Uma ideia por cena, e uma mudança visual a cada 2 a 4 segundos.
5. Escreva a legenda do post e 3 opções de título para a capa.
</tarefa>

<regras>
- Fala natural, como conversa. Frases de até 12 palavras.
- O vídeo precisa funcionar sem som: o texto na tela carrega a mensagem.
- Só provas e números do contexto. Onde precisar de prova que não temos, escreva "INSERIR PROVA REAL".
- Nada de música, trecho de filme, marca ou personagem de terceiros.
- Respeite a duração pedida: some os tempos das cenas e confira.
</regras>

<formato>
Lista de ganchos. Depois cada roteiro em tabela com as colunas: tempo, imagem, fala, texto na tela. Por último, legenda e títulos.
</formato>`,
    autor: "Claude, para a FDSS +",
    atualizado_em: "2026-11-16",
    origem: ""
  },

  {
    id: "zv-13-plano-de-teste",
    tema: "Do zero à venda",
    titulo: "13 · Plano de teste de anúncios",
    tipo: "Prompt",
    funcoes: ["anuncio", "minerador"],
    tags: ["teste", "tráfego pago", "campanha", "métricas", "orçamento"],
    descricao: "Monta o plano do primeiro teste: estrutura da campanha, verba, o que medir e quando decidir.",
    quando_usar: "Com site, copies e criativos prontos, antes de ligar a campanha. Use as metas que saíram do prompt 03.",
    conteudo: `<papel>
Você é um gestor de tráfego experiente em validar produtos novos com pouca verba.
</papel>

<contexto>
[CONTEXTO DO PRODUTO]

Plataforma de anúncios: [PLATAFORMA DE ANÚNCIOS]
Verba e prazo do teste: [VERBA E PRAZO]
Metas definidas: [METAS: CPA MÁXIMO, CONVERSÃO MÍNIMA, ETC.]
Ângulos e criativos disponíveis: [ÂNGULOS E CRIATIVOS PRONTOS]
</contexto>

<tarefa>
1. Defina o que o teste precisa responder, em uma pergunta só.
2. Proponha a estrutura: campanhas, conjuntos e anúncios, com o objetivo de campanha e o público de cada conjunto. Explique cada escolha em uma linha.
3. Distribua a verba por dia e por conjunto. Diga se a verba é suficiente para uma conclusão confiável e, se não for, qual é o mínimo.
4. Liste o que precisa estar instalado antes de começar: pixel, eventos de conversão, links com identificação da origem, página testada no celular.
5. Monte a rotina de acompanhamento: o que olhar no dia 1, no dia 3 e no fim, e o que NÃO mexer antes da hora.
6. Escreva as regras de decisão: quando pausar um anúncio, quando aumentar a verba, quando encerrar o teste.
</tarefa>

<regras>
- Teste uma variável por vez: primeiro o ângulo, depois o criativo, depois o público.
- Não cite recursos da plataforma sem certeza de que existem hoje. Se não tiver certeza, escreva "confirmar na plataforma".
- Não prometa resultado. Trate qualquer referência de mercado como estimativa.
- Se a verba for baixa demais para concluir algo, diga isso com clareza no começo.
</regras>

<formato>
Tabela da estrutura da campanha, tabela da verba, checklist de instalação e uma lista "Regras de decisão" pronta para copiar.
</formato>`,
    autor: "Claude, para a FDSS +",
    atualizado_em: "2026-11-16",
    origem: ""
  },

  {
    id: "zv-14-diagnostico-do-teste",
    tema: "Do zero à venda",
    titulo: "14 · Diagnóstico do teste: escalar, ajustar ou sair",
    tipo: "Prompt",
    funcoes: ["anuncio", "vendas", "minerador"],
    tags: ["diagnóstico", "métricas", "escala", "funil", "decisão"],
    descricao: "Lê os números do teste, acha onde o funil quebra e recomenda escalar, ajustar ou encerrar.",
    quando_usar: "Depois de rodar o teste pelo prazo combinado. Cole os números como estão no gerenciador de anúncios e na plataforma de vendas. Se vendeu, o mesmo prompt indica como escalar.",
    conteudo: `<papel>
Você é um analista de performance. Você decide com base em números e diz quando os dados não bastam para decidir.
</papel>

<contexto>
[CONTEXTO DO PRODUTO]

Metas definidas antes do teste: [METAS DEFINIDAS]
Números do teste: [NÚMEROS DO TESTE: gasto, impressões, cliques, visitas, inícios de compra, vendas, receita, reembolsos]
O que eu observei: [COMENTÁRIOS, DÚVIDAS E OBJEÇÕES QUE APARECERAM]
</contexto>

<tarefa>
1. Monte o funil com as taxas de cada etapa: impressão, clique, visita, início de compra, venda. Calcule CPA, ROAS e ticket médio.
2. Diga se o volume de dados permite conclusão. Se não permitir, diga quanto falta.
3. Compare com as metas e aponte a etapa mais fraca do funil.
4. Para a etapa fraca, liste as causas prováveis em ordem de probabilidade. Orientação geral: muita impressão e pouco clique aponta para criativo ou ângulo; clique sem compra aponta para página ou oferta; início de compra sem venda aponta para preço, pagamento ou confiança.
5. Dê o veredito: ESCALAR, AJUSTAR ou ENCERRAR.
   - ESCALAR: como aumentar a verba sem perder desempenho e o que vigiar.
   - AJUSTAR: os 3 testes seguintes, um por vez, com a hipótese e o critério de sucesso de cada um.
   - ENCERRAR: o que aprendemos e o que dá para reaproveitar.
</tarefa>

<regras>
- Use só os números que eu passei. Não complete dados que faltam: peça.
- Separe o que os números mostram do que é hipótese sua.
- Não culpe "o algoritmo" sem evidência.
- Se a oferta ou o produto for o problema, diga isso, mesmo que não seja o que eu quero ouvir.
</regras>

<formato>
Tabela do funil com metas ao lado, diagnóstico em até 5 tópicos, veredito em destaque e o plano dos próximos 7 dias.
</formato>`,
    autor: "Claude, para a FDSS +",
    atualizado_em: "2026-11-16",
    origem: ""
  },

  {
    id: "zv-15-scripts-de-venda",
    tema: "Do zero à venda",
    titulo: "15 · Scripts de venda: abordagem, objeções e follow-up",
    tipo: "Prompt",
    funcoes: ["vendas"],
    tags: ["vendas", "script", "objeções", "follow-up", "whatsapp"],
    descricao: "Escreve o roteiro de conversa de venda: primeira mensagem, perguntas, respostas a objeções e retomadas.",
    quando_usar: "Quando a venda passa por conversa (WhatsApp, Direct, ligação). Cole frases reais de clientes no campo de objeções: quanto mais reais, menos robótico fica o resultado.",
    conteudo: `<papel>
Você é um vendedor consultivo experiente. Você conduz a conversa com perguntas e nunca pressiona.
</papel>

<contexto>
[CONTEXTO DO PRODUTO]

Canal da conversa: [CANAL: WhatsApp, Direct, ligação, e-mail]
De onde o lead vem: [ORIGEM DO LEAD: anúncio, indicação, formulário...]
Objeções reais que já ouvimos: [OBJEÇÕES REAIS, COM AS PALAVRAS DO CLIENTE]
Exemplo de como a gente escreve: [EXEMPLO DO NOSSO TOM, ou "informal e direto"]
</contexto>

<tarefa>
1. Primeira mensagem: 3 versões curtas, que citam de onde o lead veio e terminam com uma pergunta fácil de responder.
2. Diagnóstico: 5 perguntas para entender a situação, a dor, o que já tentou, a urgência e quem decide.
3. Apresentação: como ligar o que o lead respondeu à oferta, em até 4 mensagens curtas.
4. Objeções: para cada objeção do contexto, e para preço, "vou pensar", "preciso falar com alguém" e "não tenho tempo", escreva a resposta em 3 passos: reconhecer, esclarecer com uma pergunta, responder e devolver com outra pergunta.
5. Fechamento: 2 formas de pedir a decisão sem pressão e a mensagem com o link de pagamento.
6. Follow-up: 4 mensagens para quem sumiu (1, 3, 7 e 14 dias depois), cada uma com um motivo novo para responder. A última encerra a conversa com educação.
</tarefa>

<regras>
- Mensagens curtas, uma ideia por mensagem, no tom do exemplo.
- Toda resposta a objeção termina com pergunta.
- Sem pressão, sem urgência falsa e sem promessa que o contexto não sustenta.
- Não invente desconto, bônus ou prazo: use só as condições do contexto.
- Quando o lead não tiver o perfil, o script deve dizer isso e encerrar bem.
</regras>

<formato>
Seções numeradas, com cada mensagem pronta para copiar. As objeções em tabela: objeção, o que ela costuma significar, resposta.
</formato>`,
    autor: "Claude, para a FDSS +",
    atualizado_em: "2026-11-16",
    origem: ""
  },

  {
    id: "zv-16-atendimento-e-pos-venda",
    tema: "Do zero à venda",
    titulo: "16 · Atendimento e pós-venda: respostas prontas",
    tipo: "Prompt",
    funcoes: ["vendas"],
    tags: ["atendimento", "pós-venda", "suporte", "faq", "reembolso"],
    descricao: "Cria a base de respostas do atendimento: dúvidas antes da compra, entrega, suporte, reembolso e reclamação.",
    quando_usar: "Antes de começar a vender, para ninguém improvisar. O resultado serve para a equipe e para treinar o agente de IA do WhatsApp Business (veja os itens de atendimento na biblioteca).",
    conteudo: `<papel>
Você é responsável pelo atendimento ao cliente. Você responde rápido, com clareza e com respeito.
</papel>

<contexto>
[CONTEXTO DO PRODUTO]

Como a entrega funciona: [PASSO A PASSO DA ENTREGA E DO ACESSO]
Políticas: [GARANTIA, REEMBOLSO, PRAZOS, HORÁRIO DE ATENDIMENTO]
Problemas que já apareceram: [PROBLEMAS E DÚVIDAS REAIS, ou "nenhum ainda"]
</contexto>

<tarefa>
1. Liste as 20 perguntas mais prováveis, em 4 grupos: antes da compra, pagamento, acesso e uso, problemas.
2. Escreva a resposta de cada uma: direta, em até 4 linhas, com o próximo passo.
3. Escreva as mensagens automáticas: boas-vindas após a compra, instruções de acesso, lembrete para quem não acessou em 3 dias e pedido de avaliação depois do primeiro resultado.
4. Escreva os roteiros delicados: pedido de reembolso, reclamação com raiva, cobrança duplicada e pessoa que não recebeu o acesso. Cada um com o que dizer, o que fazer e quando passar para um humano.
5. Monte a lista "passar para humano imediatamente": situações que a automação não deve resolver sozinha.
</tarefa>

<regras>
- Use só as políticas do contexto. Se a política não cobrir a pergunta, escreva "DEFINIR POLÍTICA" em vez de inventar.
- Não prometa prazo, exceção ou compensação que não esteja no contexto.
- Nos casos delicados, comece reconhecendo o problema antes de explicar.
- Linguagem simples, sem termos técnicos.
- Respeite o direito de arrependimento e as regras de defesa do consumidor do país do contexto. Em caso de dúvida legal, marque "confirmar com responsável".
</regras>

<formato>
Perguntas e respostas agrupadas, no formato "Pergunta → Resposta". Mensagens automáticas e roteiros delicados em blocos separados, prontos para copiar.
</formato>`,
    autor: "Claude, para a FDSS +",
    atualizado_em: "2026-11-16",
    origem: ""
  },

  {
    id: "zv-17-sequencia-de-mensagens",
    tema: "Do zero à venda",
    titulo: "17 · Sequência de e-mails ou mensagens: boas-vindas, venda e recuperação",
    tipo: "Prompt",
    funcoes: ["anuncio", "vendas"],
    tags: ["e-mail", "sequência", "carrinho abandonado", "recuperação", "copy"],
    descricao: "Escreve a sequência completa para quem entrou na lista, para quem não comprou e para quem abandonou a compra.",
    quando_usar: "Quando o site já captura contatos ou inicia compras. Recupera vendas que o anúncio já pagou para trazer.",
    conteudo: `<papel>
Você é um copywriter de e-mail e mensagens. Você escreve como uma pessoa escrevendo para outra.
</papel>

<contexto>
[CONTEXTO DO PRODUTO]

Canal: [CANAL: e-mail, WhatsApp ou os dois]
Sequência que eu preciso: [SEQUÊNCIA: boas-vindas, venda, carrinho abandonado ou pós-compra]
Exemplo de como a gente escreve: [EXEMPLO DO NOSSO TOM, ou "informal e direto"]
</contexto>

<tarefa>
1. Planeje a sequência pedida: quantas mensagens, o intervalo entre elas e o objetivo de cada uma. Cada mensagem tem um único objetivo.
2. Para cada mensagem, escreva: 3 opções de assunto de até 6 palavras (se for e-mail), a primeira linha, o corpo e uma única chamada para ação.
3. Distribua os argumentos: uma mensagem para a dor, uma para o mecanismo, uma para a prova, uma para as objeções e uma para a decisão. Não repita o mesmo argumento.
4. Na sequência de carrinho abandonado, a primeira mensagem ajuda (houve algum problema?), a segunda responde à objeção mais provável e a terceira lembra a condição real da oferta.
5. Diga o que medir em cada mensagem e o que testar primeiro.
</tarefa>

<regras>
- Mensagens curtas, legíveis no celular, com uma ideia por parágrafo.
- Só provas, prazos e condições do contexto. Nada de urgência falsa.
- Assunto sem truque: nada de "RE:" falso nem promessa que o corpo não cumpre.
- Todo e-mail com opção de descadastro; no WhatsApp, só para quem autorizou o contato.
- Onde faltar prova, escreva "INSERIR PROVA REAL".
</regras>

<formato>
Tabela com o plano da sequência. Depois cada mensagem em bloco separado, com dia de envio, assunto, texto e chamada para ação.
</formato>`,
    autor: "Claude, para a FDSS +",
    atualizado_em: "2026-11-16",
    origem: ""
  },

  /* ======================== EDIÇÃO DE VÍDEO: itens da lista que tinham ficado de fora ======================== */

  {
    id: "claude-animation-studio",
    tema: "Edição de vídeo",
    titulo: "Claude Animation Studio: skill de animação por estilo",
    tipo: "Skill",
    funcoes: ["anuncio"],
    tags: ["animação", "skill", "pixel art", "flat vector", "claude.ai", "estilos"],
    descricao: "Skill para o claude.ai que anima um roteiro em vários estilos (pixel art, vetor plano, quadrinhos, 3D e outros).",
    quando_usar: "Para testar rápido um episódio animado a partir de um roteiro. ATENÇÃO: o download é um ZIP de um link do Google Drive que eu não consegui verificar. Antes de instalar, baixe, abra o SKILL.md e os scripts e leia tudo: skill executa código. Os atalhos /dankoe e /zackdfilms imitam o estilo de criadores específicos; evite-os para a sua série não parecer cópia.",
    conteudo: `Download da skill (ZIP): https://drive.google.com/file/d/1LBu519PXLAIwf7N1vC6AjX1utaRjhmFc/view?usp=sharing

Instalação, no claude.ai:
1. Configurações → Capacidades: ative "Code execution and file creation".
2. Personalizar → Skills → + → Create skill → Upload a skill.
3. Envie o arquivo .zip e ative a Animation Studio.

Modelo de uso:
Use /Animation Studio /pixelart
Script: [paste your script here]
Visual directions (optional): [add them here]

Atalhos de estilo: /pixelart, /chalkboard, /glowsketch, /ps2, /comicart, /flatvector, /dankoe, /cgimotion, /legostyle, /zackdfilms`,
    autor: "Claude Animation Studio, Beginner's Guide (PDF)",
    atualizado_em: "",
    origem: "https://drive.google.com/file/d/1LBu519PXLAIwf7N1vC6AjX1utaRjhmFc/view?usp=sharing"
  },

  {
    id: "retro-animacao-fluxo-4-passos",
    tema: "Vídeo com IA",
    titulo: "Animação retrô em 4 passos: primeiro quadro, último quadro e vídeo",
    tipo: "Referência",
    funcoes: ["anuncio"],
    tags: ["animação", "retrô", "primeiro quadro", "último quadro", "seedance", "gpt"],
    descricao: "Fluxo que gera a imagem inicial, a imagem final e o vídeo entre as duas.",
    quando_usar: "Para animações com começo e fim definidos (transformações, revelações). Usar dois quadros-chave dá mais controle do que deixar o gerador de vídeo decidir o final sozinho.",
    conteudo: `1. Peça ao Claude (com uma skill de animação) para gerar 3 prompts: o prompt da imagem do primeiro quadro (Start Frame), o prompt da imagem do último quadro (End Frame) e o prompt de geração do vídeo.
2. Gere o primeiro quadro no GPT 2.0 com o prompt do Start Frame.
3. Suba o primeiro quadro no GPT 2.0 e gere o último quadro com o prompt do End Frame.
4. No Seedance 2.0 ou no Google Omni Flash, suba o primeiro quadro, o último quadro e o prompt de geração do vídeo.`,
    autor: "@theaigeekk",
    atualizado_em: "",
    origem: "Untitled document (8).pdf"
  },

  /* ======================== SÉRIES ANIMADAS VIRAIS ======================== */

  {
    id: "sv-00-mapa-dos-formatos",
    tema: "Séries animadas virais",
    titulo: "00 · Mapa dos formatos: o que os 6 vídeos virais têm em comum",
    tipo: "Referência",
    funcoes: ["anuncio"],
    tags: ["viral", "formatos", "animação", "série", "análise"],
    descricao: "Resumo da análise de 6 vídeos animados verticais: dois formatos, o que repete e o que não copiar.",
    quando_usar: "Antes de escolher o formato da sua série. Baseado só nas imagens e legendas dos vídeos; o áudio não foi analisado.",
    conteudo: `FORMATO A: explicativo animado, um assunto por vídeo (74 a 77 s)
- Exemplos analisados: círculos girando que desenham um mapa, o CPF explicado em cubos 3D e o processo de uma usina de cana em 3D.
- Estrutura: pergunta ou problema logo no começo, 3 a 5 etapas visuais, uma ideia por cena, fecho com pergunta que vira o próximo tema.
- Texto: legenda palavra por palavra no centro, palavra-chave em destaque (amarelo), rótulos em caixa alta para termos técnicos.
- Visual: fundo escuro ou cenário limpo, uma cor de destaque, elementos de interface (contador, termômetro, etiqueta).

FORMATO B: série interativa em que os comentários decidem (54 a 102 s)
- Exemplos analisados: série de "30 dias" com personagem cartoon e painel de jogo (dias, dinheiro, saúde), vila em pixel art que cresce com os seguidores e "um dia por episódio" com escolha A ou B.
- Estrutura: resumo do episódio anterior, conflito, escolha, consequência, final com 2 opções para o público votar nos comentários.
- Mecânica: o próximo episódio mostra o resultado da votação. Isso gera comentários, seguidores e um motivo para voltar.
- Visual: o mesmo personagem sempre, painel fixo no topo, cenários repetidos.

O QUE OS 6 TÊM EM COMUM
- Vertical 9:16, entre 54 e 102 segundos.
- Gancho nos primeiros segundos, sem introdução.
- Um personagem ou objeto central e um visual consistente.
- Final que pede comentário.

O QUE NÃO COPIAR
- Personagens, nomes, marcas, textos e músicas dos canais analisados. Use a estrutura, e crie personagem, nome e mundo seus.

COMO FORAM FEITOS (não sei; é dedução pelas imagens)
- Painéis, contadores e legendas parecem feitos em código ou editor. Personagem e cenários podem ser 3D, ilustração ou IA.`,
    autor: "Claude, para a FDSS +",
    atualizado_em: "2026-11-17",
    origem: ""
  },

  {
    id: "sv-01-conceito-da-serie",
    tema: "Séries animadas virais",
    titulo: "01 · Conceito da série e ficha da série",
    tipo: "Prompt",
    funcoes: ["anuncio"],
    tags: ["série", "conceito", "nicho", "calendário", "instagram", "tiktok"],
    descricao: "Escolhe o formato, propõe 3 conceitos de série, recomenda um e entrega a ficha que alimenta todos os outros prompts.",
    quando_usar: "Primeiro passo, antes de qualquer imagem. Com busca na web ligada, ele checa o que está em alta no nicho. O bloco FICHA DA SÉRIE que ele devolve é o que você cola nos prompts 02 a 06.",
    conteudo: `<papel>
Você é um estrategista de conteúdo para vídeos curtos (Reels, TikTok e Shorts), especializado em séries animadas que crescem e viram negócio.
</papel>

<contexto>
Nicho ou assunto: [NICHO OU ASSUNTO, ou "aberto"]
Público: [PÚBLICO]
Formato: [FORMATO: A explicativo, B série interativa, ou "decida por mim"]
Como vamos produzir: [FERRAMENTAS E ORÇAMENTO]
Objetivo de dinheiro: [OBJETIVO: afiliados, produto próprio, publicidade...]
Horas por semana: [HORAS POR SEMANA]
Data de hoje: [DATA DE HOJE]
</contexto>

<tarefa>
1. Se tiver busca na web, pesquise o que está em alta no nicho nos últimos 60 dias e cite as fontes. Sem busca, diga isso e marque tudo como hipótese.
2. Proponha 3 conceitos de série. Para cada um: nome provisório, personagem ou elemento central, ritmo de um episódio, o motivo para a pessoa voltar, o caminho de dinheiro e o maior risco.
3. Recomende um e explique por quê, considerando o que um criador sozinho consegue produzir toda semana com as ferramentas informadas.
4. Entregue a FICHA DA SÉRIE em bloco de código, para colar nos próximos prompts: conceito, público, formato, duração-alvo, personagem central, estilo visual em uma frase, tom, estrutura fixa do episódio, mecânica de comentário e o que nunca aparece.
5. Liste os 14 primeiros episódios com título e gancho de cada um.
</tarefa>

<regras>
- Tudo original: nada de personagem, nome, marca, música ou estilo reconhecível de terceiros. Os vídeos de referência servem para entender a estrutura, não para copiar.
- Fatos e números do nicho com fonte, ou marcados como "VERIFICAR".
- Sem promessa de ganho nem de viralização.
- Conteúdo de autoria sua e rotulado como gerado por IA onde as plataformas exigirem.
</regras>

<formato>
Seções numeradas. Os 3 conceitos em tabela. A ficha e a lista de episódios em blocos separados.
</formato>`,
    autor: "Claude, para a FDSS +",
    atualizado_em: "2026-11-17",
    origem: ""
  },

  {
    id: "sv-02-personagem-e-mundo",
    tema: "Séries animadas virais",
    titulo: "02 · Personagem e mundo: guia de estilo para ficar igual em todo episódio",
    tipo: "Prompt",
    funcoes: ["anuncio"],
    tags: ["personagem", "consistência", "guia de estilo", "imagem", "cenário"],
    descricao: "Define o personagem e o cenário em detalhes fixos e gera os prompts de imagem da folha de personagem.",
    quando_usar: "Depois da ficha da série. A folha de personagem gerada aqui vai como imagem de referência em todas as cenas seguintes; é isso que mantém o visual consistente.",
    conteudo: `<papel>
Você é um diretor de arte de animação. Seu objetivo é que o personagem e o mundo pareçam idênticos em todos os episódios.
</papel>

<contexto>
[FICHA DA SÉRIE]

Gerador de imagem: [GERADOR DE IMAGEM]
Gerador de vídeo: [GERADOR DE VÍDEO]
</contexto>

<tarefa>
1. Descreva o personagem com detalhes fixos: proporções, formas, cores com código hexadecimal, roupa, um acessório marcante e as expressões base (feliz, surpreso, pensativo, preocupado). Personagem inventado: nada de pessoa real nem de personagem que já exista.
2. Descreva o mundo: de 3 a 5 cenários principais, paleta com hexadecimal, luz, câmera padrão (ângulo e distância) e textura.
3. Escreva o BLOCO DE ESTILO em inglês, de até 80 palavras, para colar no fim de todo prompt de imagem, e o BLOCO NEGATIVO com o que nunca aparece.
4. Escreva os prompts de imagem em inglês para: a folha do personagem (frente, lado, costas e 4 expressões, em fundo liso), cada cenário principal vazio e um quadro de teste com o personagem em um cenário.
5. Explique como manter a consistência: sempre enviar a folha como imagem de referência, mudar uma coisa por vez e usar o último quadro de um clipe como primeiro do próximo quando a cena continuar.
6. Liste os testes antes de aprovar: o personagem é reconhecível em miniatura, as cores não mudam entre 5 imagens e mãos e rosto não deformam.
</tarefa>

<regras>
- Sem texto dentro das imagens: o texto entra depois, no editor ou no código.
- Estilo simples o bastante para o gerador repetir. Detalhe demais gera variação entre as imagens.
- Use só as cores da paleta definida.
</regras>

<formato>
Ficha do personagem, ficha do mundo, bloco de estilo e bloco negativo em blocos de código, e uma lista numerada com um prompt de imagem por item.
</formato>`,
    autor: "Claude, para a FDSS +",
    atualizado_em: "2026-11-17",
    origem: ""
  },

  {
    id: "sv-03-roteiro-explicativo",
    tema: "Séries animadas virais",
    titulo: "03 · Roteiro de episódio explicativo (formato A)",
    tipo: "Prompt",
    funcoes: ["anuncio"],
    tags: ["roteiro", "explicativo", "gancho", "legenda", "retenção"],
    descricao: "Escreve o roteiro cena por cena de um vídeo que explica uma coisa só, com fatos checados e fecho que gera comentário.",
    quando_usar: "Para os vídeos do tipo \"como funciona\": o CPF, o mapa desenhado por círculos, a usina. Use com busca na web ligada, porque o conteúdo é informativo e não pode ter erro.",
    conteudo: `<papel>
Você é um roteirista de vídeos explicativos curtos. Você torna um assunto complicado simples sem errar o fato.
</papel>

<contexto>
[FICHA DA SÉRIE]

Tema do episódio: [TEMA DO EPISÓDIO]
Duração-alvo: [DURAÇÃO EM SEGUNDOS]
</contexto>

<tarefa>
1. Pesquise o tema em fontes confiáveis (órgãos oficiais, universidades, documentação técnica) e liste os fatos que o vídeo vai usar, cada um com a fonte. O que não tiver fonte fica de fora ou vai marcado "VERIFICAR".
2. Escreva 5 ganchos para os 3 primeiros segundos, de tipos diferentes (pergunta, contradição, número surpreendente, desafio, \"você sabia\" apenas se for verdadeiro).
3. Escolha o melhor e escreva o roteiro completo, cena por cena, nesta estrutura: gancho, promessa em uma frase, 3 a 5 etapas (uma ideia por cena), uma curiosidade ou virada e o fecho com uma pergunta que vira o tema do próximo episódio.
4. Para cada cena dê: tempo, o que se vê, a fala, o texto na tela (com a palavra-chave a destacar) e o efeito sonoro. Uma mudança visual a cada 2 a 4 segundos.
5. Some os tempos e confira a duração-alvo.
6. Escreva a legenda do post e 3 opções de título de capa.
</tarefa>

<regras>
- Fala simples, frases de até 12 palavras, sem jargão. Se usar um termo técnico, explique na mesma cena.
- O vídeo precisa fazer sentido sem som: o texto na tela carrega a mensagem.
- Nada de afirmação sem fonte, número inventado ou exagero para gerar clique.
- Assuntos sensíveis (saúde, dinheiro, segurança, dados pessoais): trate com cuidado e não dê conselho que dependa de profissional.
</regras>

<formato>
Lista de fatos com fontes, lista de ganchos, roteiro em tabela (tempo, imagem, fala, texto na tela, som), legenda e títulos.
</formato>`,
    autor: "Claude, para a FDSS +",
    atualizado_em: "2026-11-17",
    origem: ""
  },

  {
    id: "sv-04-episodio-interativo",
    tema: "Séries animadas virais",
    titulo: "04 · Episódio interativo: resultado da votação, roteiro e nova escolha (formato B)",
    tipo: "Prompt",
    funcoes: ["anuncio"],
    tags: ["série", "interativo", "comentários", "roteiro", "continuidade"],
    descricao: "Aplica a escolha que ganhou nos comentários, escreve o episódio e deixa a próxima votação pronta.",
    quando_usar: "A cada episódio da série interativa. Cole o estado da história do episódio anterior e o que o público escolheu. Guarde o estado devolvido: ele alimenta o episódio seguinte.",
    conteudo: `<papel>
Você é o roteirista de uma série interativa animada, em que o público decide o rumo nos comentários. Sua prioridade é a continuidade e escolhas que importam.
</papel>

<contexto>
[FICHA DA SÉRIE]

Estado da história até agora (resumo, painel e regras): [ESTADO DA HISTÓRIA]
Escolha que ganhou nos comentários: [ESCOLHA VENCEDORA]
Duração-alvo: [DURAÇÃO EM SEGUNDOS]
</contexto>

<tarefa>
1. Aplique a escolha vencedora: descreva a consequência de forma coerente com o estado e as regras do painel (dias, dinheiro, saúde ou o que a série usar). Mostre a conta, em uma linha por valor alterado.
2. Escreva o roteiro do episódio, cena por cena: resumo do episódio anterior em uma frase, um conflito, a consequência da escolha e uma virada.
3. Termine com uma nova escolha entre 2 opções que sejam claras, diferentes e sem resposta óbvia. Cada opção tem um ganho e um custo reais.
4. Para cada cena dê: tempo, o que se vê, a fala, o texto na tela e o painel atualizado.
5. Escreva o ESTADO ATUALIZADO em bloco de código, para colar no próximo episódio.
6. Escreva um rascunho de 3 linhas para cada ramificação possível do próximo episódio.
7. Escreva o texto de chamada para o voto e o comentário para fixar.
</tarefa>

<regras>
- Respeite o estado e as regras da série: não mude valores sem explicar e não ressuscite o que a história encerrou.
- Escolhas sem conteúdo sensível, perigoso ou que incentive risco real.
- Peça o voto como parte da história. Não prometa prêmio em troca de curtida, comentário ou compartilhamento: esse tipo de pedido pode reduzir o alcance nas plataformas.
- Se o resultado da votação for empate, diga como a série resolve.
</regras>

<formato>
Conta da consequência, roteiro em tabela, estado atualizado, rascunhos das ramificações e textos de votação.
</formato>`,
    autor: "Claude, para a FDSS +",
    atualizado_em: "2026-11-17",
    origem: ""
  },

  {
    id: "sv-05-cenas-imagem-e-animacao",
    tema: "Séries animadas virais",
    titulo: "05 · Do roteiro às cenas: prompts de imagem, animação e o que fazer em código",
    tipo: "Prompt",
    funcoes: ["anuncio"],
    tags: ["cenas", "prompts de imagem", "animação", "html", "produção"],
    descricao: "Converte o roteiro em lista de produção: prompt de imagem e de animação de cada cena, e o que vai em código.",
    quando_usar: "Com roteiro aprovado e guia de estilo pronto. Painéis, contadores, mapas e legendas costumam ficar melhores em código (HTML, SVG, canvas) do que gerados por IA; o prompt separa os dois e liga ao sistema de edição da biblioteca.",
    conteudo: `<papel>
Você é um diretor de produção de animação. Você transforma um roteiro em uma lista de cenas que um criador sozinho consegue executar.
</papel>

<contexto>
[FICHA DA SÉRIE]

Guia de estilo (bloco de estilo e bloco negativo): [GUIA DE ESTILO]
Roteiro aprovado: [ROTEIRO]
Gerador de imagem: [GERADOR DE IMAGEM]
Gerador de vídeo: [GERADOR DE VÍDEO]
Limite de duração por clipe do gerador de vídeo: [DURAÇÃO MÁXIMA POR CLIPE]
</contexto>

<tarefa>
1. Divida o roteiro em cenas. Cada cena tem uma ação e dura entre 3 e 5 segundos, respeitando o limite do gerador.
2. Classifique cada cena: IA (personagem e cenário gerados), CÓDIGO (painel, contador, mapa, gráfico, texto animado, legenda: HTML, SVG ou canvas) ou MISTA.
3. Para cenas de IA: escreva o prompt de imagem em inglês, terminando com o bloco de estilo, e o prompt de animação em inglês (movimento do personagem, movimento de câmera, duração, o que não muda). Diga qual imagem de referência anexar.
4. Para cenas de CÓDIGO: descreva o elemento, o comportamento (entra, anima, sai) e o tempo em segundos, de modo que dê para montar num projeto HTML.
5. Marque as cenas que continuam em sequência e devem usar o último quadro como primeiro do clipe seguinte.
6. Liste os efeitos sonoros por cena e o texto na tela com a palavra-chave em destaque.
7. Termine com um checklist de consistência para revisar antes de editar.
</tarefa>

<regras>
- Uma ação por clipe. Sem texto gerado dentro de imagem ou vídeo.
- Não invente elementos que o roteiro não pede.
- Todas as cenas na proporção 9:16 e com área livre para a legenda no centro ou na parte de baixo.
- Cada prompt funciona sozinho: copiável sem precisar das outras cenas.
</regras>

<formato>
Tabela de cenas (número, tempo, tipo, resumo) e, abaixo, um bloco por cena com os prompts em blocos de código. Checklist no fim.
</formato>`,
    autor: "Claude, para a FDSS +",
    atualizado_em: "2026-11-17",
    origem: ""
  },

  {
    id: "sv-06-publicacao-e-metricas",
    tema: "Séries animadas virais",
    titulo: "06 · Publicação e métricas: textos do post, checklist e diagnóstico",
    tipo: "Prompt",
    funcoes: ["anuncio", "vendas"],
    tags: ["publicação", "métricas", "retenção", "instagram", "tiktok", "diagnóstico"],
    descricao: "Escreve capa, legenda e comentário fixado, confere o checklist e lê os números dos últimos vídeos.",
    quando_usar: "No dia de postar. Depois de uns 10 vídeos, cole as métricas para ele apontar onde as pessoas saem e quais temas manter. Ele só usa os números que você passar.",
    conteudo: `<papel>
Você é um estrategista de conteúdo e analista de métricas de vídeos curtos.
</papel>

<contexto>
[FICHA DA SÉRIE]

Plataformas: [PLATAFORMAS]
Roteiro final do vídeo de hoje: [ROTEIRO FINAL]
Números dos últimos vídeos (visualizações, retenção em 3 segundos, percentual assistido, compartilhamentos, salvamentos, seguidores ganhos): [MÉTRICAS DOS ÚLTIMOS VÍDEOS, ou "ainda não tenho"]
</contexto>

<tarefa>
1. Escreva 3 opções de título para a capa (até 6 palavras, legíveis em tela pequena), a legenda do post com um gancho e uma pergunta, 5 hashtags e o texto do comentário para fixar.
2. Escreva as respostas para os 10 comentários mais prováveis, no tom da série.
3. Confira o checklist de publicação e diga o que falta: rótulo de conteúdo gerado por IA ligado, sem marca d'água de outro app, música da biblioteca da própria plataforma ou licenciada, capa legível e legenda correta.
4. Horário: se houver métricas, use-as; se não, proponha testar 2 horários por semana e comparar. Não afirme um horário universal.
5. Se houver métricas: aponte em que ponto os vídeos perdem as pessoas, quais temas seguraram mais, o que fazer a mais e o que cortar. Diga se há dados suficientes para concluir.
6. Defina a meta dos próximos 10 vídeos e a regra para decidir manter, mudar ou encerrar o tema.
</tarefa>

<regras>
- Use somente os números que eu passei. Sem inventar benchmarks.
- Separe o que os números mostram do que é hipótese sua.
- Sem promessa de alcance, de seguidores ou de ganho.
- Peça comentário como parte da série, sem prêmio por curtida ou compartilhamento.
</regras>

<formato>
Textos do post em blocos copiáveis, respostas em lista, checklist com marcação, diagnóstico em tópicos curtos e a meta em uma linha.
</formato>`,
    autor: "Claude, para a FDSS +",
    atualizado_em: "2026-11-17",
    origem: ""
  },

  {
    id: "sv-07-plano-de-30-dias",
    tema: "Séries animadas virais",
    titulo: "07 · Plano de 30 dias e regras de monetização",
    tipo: "Referência",
    funcoes: ["anuncio"],
    tags: ["plano", "30 dias", "monetização", "instagram", "tiktok", "rotina"],
    descricao: "Rotina, formatos, métricas e o que as plataformas pedem para pagar, com aviso de conferir no app.",
    quando_usar: "Quando for começar o canal. Os requisitos de monetização vêm de guias de terceiros (nov/2026) e mudam: confirme no aplicativo antes de planejar em cima deles.",
    conteudo: `ROTINA
- Semana 1: escolher o nicho e o formato (prompt 01), criar o personagem e o mundo (prompt 02) e escrever 7 roteiros.
- Semanas 2 a 4: 1 vídeo por dia no começo, ou o que for sustentável com a sua produção. Consistência vale mais do que volume que você não aguenta manter.
- Toda semana: olhar as métricas (prompt 06) e ajustar o tema.

FORMATOS
- Vídeo principal entre 60 e 120 segundos: é o tamanho que a recompensa por vídeos mais longos costuma exigir.
- Corte de 20 a 35 segundos do melhor trecho, para alcance.
- No Instagram, suba o arquivo original, sem a marca d'água de outro app.
- Fixe um comentário com a pergunta do próximo episódio e responda aos melhores.

O QUE MEDIR
- Retenção nos 3 primeiros segundos, percentual assistido, salvamentos, compartilhamentos e seguidores ganhos por vídeo.
- Depois de 10 a 15 vídeos, dobre a aposta nos 2 temas que seguraram mais e corte o resto.

MONETIZAÇÃO (fontes de terceiros, nov/2026: confirmar no app)
- TikTok, programa de recompensas: guias citam 10 mil seguidores, 100 mil visualizações em 30 dias e vídeos originais acima de 1 minuto.
- Instagram: presentes nos Reels a partir de 500 seguidores, assinaturas a partir de 10 mil e bônus só por convite.
- O pagamento por visualização costuma ser baixo. Afiliados, publicidade e um produto próprio rendem mais: use a série "Do zero à venda" para esse caminho.

REGRAS PARA NÃO PERDER ALCANCE
- Conteúdo original e de autoria sua. TikTok e Instagram reduzem o alcance de conteúdo copiado, repostado ou produzido em massa sem autoria.
- Marque o conteúdo gerado por IA com o rótulo da plataforma.
- Música licenciada ou da biblioteca da plataforma. Sem personagens ou marcas de terceiros.`,
    autor: "Claude, para a FDSS +",
    atualizado_em: "2026-11-17",
    origem: ""
  },

  /* ======================== VÍDEOS 3D VIRAIS COM O KIT: fluxo enxuto ======================== */

  {
    id: "v3d-00-guia-do-caminho-curto",
    tema: "Vídeos 3D virais (kit)",
    titulo: "00 · Guia: o caminho mais curto para vídeos 3D virais com o kit",
    tipo: "Referência",
    funcoes: ["anuncio"],
    tags: ["vídeo 3d", "kit", "fluxo", "viral", "instagram", "tiktok", "three.js"],
    descricao: "O que é o kit de vídeos 3D, o que a revisão achou, o fluxo em 3 etapas e o risco de todo mundo usar o mesmo visual.",
    quando_usar: "Leia antes de começar. Resume o kit do Willian IA (pasta com motor 3D, personagens, cenário, voz e regras para o agente), os dois vídeos analisados e os comentários. A segurança foi uma revisão rápida, não uma auditoria completa.",
    conteudo: `O QUE É O KIT
- Uma pasta com um motor 3D em JavaScript (Three.js), 11 personagens low-poly, 20 animações, 57 itens de cenário, voz grátis (Kokoro + Whisper) ou paga (ElevenLabs), legendas, capa e texto de postagem.
- Você dá a ideia e a duração. O agente (Claude Code ou outro que leia arquivos e rode comandos) pesquisa, escreve o roteiro, gera a voz, monta o storyboard, valida, renderiza o MP4 1080x1920 e entrega a capa e o postagem.md.
- Não usa gerador de vídeo por IA: o 3D é código. Por isso o custo por vídeo é baixo. No teste do autor, um vídeo de 1 minuto gastou cerca de 6% do limite diário do Claude Pro (varia por vídeo e por plano).
- Exige: Node.js 18+, ffmpeg e Chrome, Edge ou Brave. Para a voz grátis: Python 3.9 a 3.12 e uns 2 a 3 GB livres.

REVISÃO DE SEGURANÇA (rápida)
- Li a documentação e procurei no código chamadas de rede, execução de comandos e leitura de chaves. Só achei o esperado: baixar o modelo de voz (GitHub e pacotes Python), chamar a API do ElevenLabs com a SUA chave do arquivo .env, e rodar ffmpeg e o navegador para renderizar. Não vi envio de dados para terceiros.
- Mesmo assim: rode numa pasta sua, deixe o agente pedir permissão antes de instalar e nunca cole a chave no chat.
- Não achei arquivo de licença na pasta. Antes de monetizar, confirme com o autor que o uso comercial dos personagens e do cenário é permitido.

O CAMINHO MAIS CURTO: 3 ETAPAS
1. Uma vez só: prompt 01 (canal). Gera o config/canal.json e define o que torna o seu canal diferente.
2. Uma vez por semana: prompt 02 (radar de temas) e prompt 03 (lote semanal). Saída: 7 pedidos prontos.
3. Para cada vídeo: prompt 05, dentro da pasta do kit. Saída: video.mp4, capa.png e postagem.md. Se quiser aprovar o roteiro antes, rode o 04 primeiro.
Depois de postar: prompt 06 da série "Publicação e métricas" (sv-06) e o 06 daqui para a ponte até o produto.

POR QUE ESSE FORMATO PRENDE (dos dois vídeos e do kit)
- Roteiro de problema e solução: cada etapa resolve um problema e cria o próximo.
- Cena nova a cada 3 a 5 segundos, sempre com algo se movendo e alguém fazendo.
- Legenda de uma palavra por vez, título na tela no segundo 0 e uma pergunta final fácil de responder.
- Vídeos acima de 1 minuto: o autor cita que o TikTok paga mais por eles. Confirme no app.

O QUE OS CRIADORES RELATAM (não são medições)
- Um deles diz fazer de 3 a 5 vídeos por dia no plano Pro do Claude.
- Na comparação do outro, o resultado foi misto: o Claude fez melhor o processo de animação no asfalto, e o ChatGPT ficou mais animado no prédio, mas gastou mais do limite diário (11% contra 6%).

O RISCO REAL: TODO MUNDO USA O MESMO KIT
- O vídeo do kit tem mais de 250 mil visualizações. Muita gente vai postar o mesmo visual, e TikTok e Instagram reduzem o alcance de conteúdo repetitivo e sem autoria.
- Diferencie: nicho próprio, ângulo próprio, elenco e cores trocados, voz própria, formato de série e uma pergunta de fechamento sua. O prompt 01 força essa definição.

LIMITES DO KIT
- Cenário e personagens simples de propósito. Não existem elevador, metrô, estádio nem interior de casa: o agente compõe com o que há e avisa.
- A voz grátis em português deve ser avaliada de ouvido; a paga é mais natural.
- Em computador fraco o render é lento.
- Os fatos precisam da sua revisão: o agente pode errar.`,
    autor: "Claude, para a FDSS +, a partir do kit e de 2 vídeos do YouTube",
    atualizado_em: "2026-11-17",
    origem: "https://www.youtube.com/watch?v=3UbOzkPHcT4"
  },

  {
    id: "v3d-01-canal-diferente",
    tema: "Vídeos 3D virais (kit)",
    titulo: "01 · Canal: identidade, elenco e config/canal.json (uma vez só)",
    tipo: "Prompt",
    funcoes: ["anuncio"],
    tags: ["canal", "identidade", "elenco", "bio", "diferenciação", "kit"],
    descricao: "Define o que torna o seu canal único, o nome, a bio, o elenco e entrega o config/canal.json pronto para o kit.",
    quando_usar: "Antes do primeiro vídeo. Ele é a defesa contra o canal parecer cópia: o kit é o mesmo para todo mundo, então o ângulo, o elenco e as cores precisam ser seus. Salve o resultado em config/canal.json dentro da pasta do kit.",
    conteudo: `<papel>
Você é um estrategista de marca para canais de vídeos curtos animados. Seu trabalho é fazer o canal parecer único, mesmo usando um kit que outras pessoas também usam.
</papel>

<contexto>
Nicho ou assunto: [NICHO OU ASSUNTO]
Público: [PÚBLICO]
Objetivo de dinheiro no futuro: [OBJETIVO: afiliados, produto, serviço, publicidade...]
Plataformas: [PLATAFORMAS: Instagram, TikTok ou os dois]
Voz da narração: [VOZ: a minha, local e grátis, ou ElevenLabs]
Personagens do kit: construtor, engenheiro, engenheira, servente, homem, mulher, velhinho, velhinha, crianca, menina, motorista. Podem ter cor de roupa, cabelo, chapéu e acessório trocados.
</contexto>

<tarefa>
1. Defina o que torna o canal diferente: um ângulo, um mecanismo único (o que o espectador vê ou faz em todo vídeo), um elenco com papéis fixos e uma assinatura visual (cores de roupa, chapéu, acessório). Dê 3 opções e recomende uma.
2. Crie 10 opções de nome e de @, curtas e fáceis de falar, sem marca conhecida, e recomende 3. Eu confiro a disponibilidade do @ e do domínio.
3. Escreva a bio do Instagram e do TikTok (até 150 caracteres cada) e a frase de posicionamento.
4. Defina a abertura e o fechamento padrão, com um exemplo de cada.
5. Entregue o config/canal.json no formato do kit, em bloco de código, com os campos: nomeCanal, idioma, nicho, tom, estiloNarracao, elenco, estiloVisual, mecanismoUnico, abertura, fechamento, capa, postagem (hashtagsFixas, videoRelacionado, linkFixo) e duracaoPadraoSegundos. Descreva em estiloVisual as cores e acessórios de cada personagem.
6. Liste o que NÃO fazer para não parecer cópia dos outros canais que usam o mesmo kit.
</tarefa>

<regras>
- Nenhum nome, bordão, personagem ou visual copiado de outro canal.
- O mesmo personagem no mesmo papel em todos os vídeos.
- Sem promessa de ganho nem de resultado.
- Se faltar informação importante, pergunte antes de escrever.
</regras>

<formato>
Seções numeradas. O item 5 em bloco de código. Termine com o que eu preciso conferir sozinho (disponibilidade de @ e domínio, registro de marca).
</formato>`,
    autor: "Claude, para a FDSS +",
    atualizado_em: "2026-11-17",
    origem: ""
  },

  {
    id: "v3d-02-radar-de-temas",
    tema: "Vídeos 3D virais (kit)",
    titulo: "02 · Radar de temas virais para vídeos 3D explicativos",
    tipo: "Prompt",
    funcoes: ["anuncio", "minerador"],
    tags: ["temas", "radar", "pesquisa", "gancho", "nicho", "viral"],
    descricao: "Acha assuntos que as pessoas querem entender e que o kit consegue mostrar, ranqueados, com gancho e fontes.",
    quando_usar: "Uma vez por semana, antes do lote semanal. Use com busca na web ligada. Ele descarta o que o kit não mostra bem e o que depende de fato sem fonte.",
    conteudo: `<papel>
Você é um caçador de temas para vídeos 3D explicativos curtos (Reels, TikTok e Shorts). Você acha assuntos que as pessoas já querem entender e que dá para mostrar com bonecos e cenário simples.
</papel>

<contexto>
Nicho ou área: [NICHO OU ÁREA, ou "aberto"]
País e idioma: [PAÍS E IDIOMA]
Ficha do canal (se já existir): [FICHA DO CANAL, ou "ainda não"]
Vídeos que já postei, para não repetir: [VÍDEOS JÁ POSTADOS, ou "nenhum"]
Data de hoje: [DATA DE HOJE]
O que o kit consegue mostrar: casas, prédios, ruas, obras, máquinas, fábricas, veículos, campo, cidade, litoral, deserto, indústria e salas, com bonecos low-poly. Não tem elevador, metrô, estádio nem interior de casa.
</contexto>

<tarefa>
1. Se tiver busca na web, pesquise (a) o que está em alta agora em vídeos explicativos curtos do nicho, (b) perguntas que as pessoas fazem e não acham resposta curta (buscas, comentários, fóruns) e (c) obras, invenções, lugares e fenômenos em notícia nos últimos 60 dias. Cite as fontes. Sem busca, avise e marque tudo como hipótese.
2. Liste 15 temas. Para cada um: título provisório, o gancho em uma frase, a cadeia em 3 a 5 passos de problema e solução, o dado surpreendente com fonte e "o kit mostra?" (sim, parcial ou não, e o que faltaria).
3. Dê nota de 1 a 5 para: curiosidade imediata (o gancho funciona sem contexto), processo visível (dá para ver coisa se movendo), dado surpreendente verificado, risco de erro factual (5 = baixo) e originalidade frente ao que já circula.
4. Descarte os que o kit não mostra bem e os que dependem de afirmação sem fonte.
5. Escolha os 5 melhores, ordene e explique por quê.
6. Para cada um dos 5, escreva a pergunta final de comentar, com 2 opções.
</tarefa>

<regras>
- Nada que exija conselho médico, financeiro ou legal, nem tragédia real com vítimas, política, ou pessoa e marca de terceiros em tom negativo.
- Todo fato com fonte; o que for incerto fica "VERIFICAR".
- Prefira temas do dia a dia (rua, casa, comida, energia, água, internet) com etapas claras.
- Evite os temas mais óbvios do nicho. Procure o ângulo que ninguém está usando.
</regras>

<formato>
Tabela dos 15 (título, gancho, processo visível, kit mostra, notas). Depois os 5 escolhidos, cada um com gancho, cadeia, dado surpreendente com fonte e pergunta final.
</formato>`,
    autor: "Claude, para a FDSS +",
    atualizado_em: "2026-11-17",
    origem: ""
  },

  {
    id: "v3d-03-lote-semanal",
    tema: "Vídeos 3D virais (kit)",
    titulo: "03 · Lote semanal: 7 pedidos prontos para o kit",
    tipo: "Prompt",
    funcoes: ["anuncio"],
    tags: ["lote", "semana", "calendário", "pauta", "série", "ganchos"],
    descricao: "Planeja a semana inteira de uma vez e entrega um pedido pronto por vídeo, com gancho, cadeia e pergunta final.",
    quando_usar: "Depois do radar. Reduz o trabalho: em vez de pensar em cada vídeo, você cola um pedido por dia no prompt 05. Inclui 2 vídeos para testar ganchos diferentes do mesmo tema.",
    conteudo: `<papel>
Você é o editor-chefe de uma série de vídeos 3D explicativos. Você planeja a semana inteira de uma vez, com continuidade e com testes.
</papel>

<contexto>
Ficha do canal (config/canal.json): [FICHA DO CANAL]
Temas escolhidos ou resultado do radar: [TEMAS ESCOLHIDOS, ou "use o radar"]
Quantos vídeos nesta semana: [QUANTIDADE DE VÍDEOS]
Duração padrão em segundos: [DURAÇÃO PADRÃO]
Vídeos já postados, para não repetir: [VÍDEOS JÁ POSTADOS, ou "nenhum"]
</contexto>

<tarefa>
1. Monte a semana com mistura planejada: a maioria de temas atemporais, 1 assunto em alta e, se houver, 1 parte 2 de um vídeo que já foi bem. Coloque os 2 mais fortes primeiro, para ter dados mais cedo.
2. Para cada vídeo, escreva um PEDIDO PRONTO para colar no prompt 05, com: ideia, duração, a frase exata do gancho, a cadeia de problema e solução em 3 a 6 passos, o dado surpreendente com fonte, a pergunta final com 2 opções, o cenário e os personagens sugeridos do kit e o que verificar antes de postar.
3. Cuide da continuidade: os mesmos papéis e personagens, e a abertura e o fechamento padrão do canal.
4. Indique 2 vídeos que usam o mesmo tema com ganchos diferentes (teste A e B) e como comparar: retenção nos 3 primeiros segundos, percentual assistido e compartilhamentos.
5. Liste o que preparar uma vez só (voz, pasta do kit, lista de fontes).
</tarefa>

<regras>
- Um tema por vídeo e uma ideia por frase.
- Todo fato com fonte; o que for incerto fica "VERIFICAR".
- Só o que o kit consegue mostrar. Se faltar um objeto, diga como compor com o que existe.
- Nada copiado de outros canais.
</regras>

<formato>
Tabela da semana (dia, tema, gancho, tipo: atemporal, em alta, parte 2 ou teste). Depois os pedidos, cada um em bloco de código, prontos para copiar.
</formato>`,
    autor: "Claude, para a FDSS +",
    atualizado_em: "2026-11-17",
    origem: ""
  },

  {
    id: "v3d-04-roteiro-viral-para-aprovar",
    tema: "Vídeos 3D virais (kit)",
    titulo: "04 · Roteiro viral para aprovar antes de produzir",
    tipo: "Prompt",
    funcoes: ["anuncio"],
    tags: ["roteiro", "gancho", "problema e solução", "narração", "retenção"],
    descricao: "Escreve 5 ganchos, a cadeia de problema e solução e a narração pronta para voz, com checklist e fontes.",
    quando_usar: "Opcional. Use nos primeiros vídeos ou quando quiser aprovar o roteiro antes de gastar tempo e limite renderizando. O texto sai no formato do narracao.txt do kit (só o que é falado).",
    conteudo: `<papel>
Você é um roteirista de vídeos explicativos curtos que prendem até o fim. Você escreve para ser falado, em português do Brasil.
</papel>

<contexto>
Ficha do canal: [FICHA DO CANAL, ou "ainda não"]
Tema: [TEMA DO VÍDEO]
Duração em segundos: [DURAÇÃO EM SEGUNDOS]
Pedido do lote (gancho, cadeia, pergunta), se existir: [PEDIDO DO LOTE, ou "decida"]
</contexto>

<tarefa>
1. Pesquise o tema em fontes confiáveis (órgãos oficiais, universidades, documentação técnica) e liste os fatos que vai usar, cada um com a fonte. O que não tiver fonte fica de fora ou vai marcado "VERIFICAR".
2. Escreva 5 ganchos de até 15 palavras, de tipos diferentes: crença errada, pergunta com tensão, "você vai..." (você como protagonista), número surpreendente e polêmica honesta com dois lados. Escolha o melhor e explique em uma linha.
3. Escreva a narração completa:
   - Gancho nas primeiras 15 palavras e a aposta (o que a pessoa vai descobrir) até 8 segundos.
   - Uma cadeia de capítulos em que cada um resolve o problema do anterior e cria o próximo, falando com "você". Use conectores como "Mas aí vem o problema" e "Só que".
   - Um gancho interno a cada 8 a 12 segundos (pergunta, número, "e o mais estranho é").
   - O dado mais surpreendente depois da metade.
   - Fechamento que paga o gancho em uma frase, faz UMA pergunta fácil de responder (de preferência com duas opções) e convida a comentar.
4. Escreva só o que será falado: frases de até 15 palavras, números por extenso, sem símbolos, parênteses, emojis nem marcações de cena. O número de palavras deve ser a duração multiplicada por 2,6.
5. Faça o checklist e mostre cada item como OK ou AJUSTAR: gancho verdadeiro e respondido, cada capítulo nasce de um problema, pelo menos 2 ganchos internos, fato mais surpreendente depois da metade, final com uma pergunta, tamanho certo.
</tarefa>

<regras>
- Sem "oi pessoal", sem nome do canal e sem "neste vídeo vamos ver".
- Polêmica só com ângulo real e verdadeiro. Nada de clickbait que o vídeo não entrega.
- Sem conselho médico, financeiro ou legal apresentado como certeza.
- Texto 100% original, sem trechos de livros, músicas ou falas protegidas.
</regras>

<formato>
Fatos com fontes, ganchos, narração em um bloco de código (pronto para salvar como narracao.txt), contagem de palavras e o checklist.
</formato>`,
    autor: "Claude, para a FDSS +, a partir de docs/roteiro-viral.md do kit",
    atualizado_em: "2026-11-17",
    origem: ""
  },

  {
    id: "v3d-05-pedido-de-producao-ao-kit",
    tema: "Vídeos 3D virais (kit)",
    titulo: "05 · Pedido de produção ao kit: um vídeo completo numa mensagem",
    tipo: "Prompt",
    funcoes: ["anuncio"],
    tags: ["kit", "produção", "agente", "claude code", "vídeo 3d", "pedido"],
    descricao: "Substitui o prompt inicial do kit: leva o briefing completo e as regras de qualidade, e entrega vídeo, capa e postagem.",
    quando_usar: "Abra o Claude Code dentro da pasta do kit e cole. O AGENTE.md do kit continua mandando; este pedido só acrescenta o briefing e os critérios. Nos 5 primeiros vídeos, use o modo com aprovação da sinopse; depois, o automático.",
    conteudo: `Você será o meu Criador de Vídeos 3D.

Primeiro leia o arquivo AGENTE.md da pasta [PASTA DO KIT] e siga-o à risca. O que está abaixo complementa o AGENTE.md; se houver conflito, vale o AGENTE.md.

PEDIDO
Ideia do vídeo: [IDEIA DO VÍDEO]
Duração: [DURAÇÃO EM SEGUNDOS] segundos
Voz: [VOZ: local e grátis, ou paga (ElevenLabs)]
Modo: [MODO: automático, ou com aprovação da sinopse]
Plataforma principal: [PLATAFORMA: Instagram Reels ou TikTok]

BRIEFING (o que eu deixar em branco, decida você e me diga o que escolheu)
Gancho desejado: [GANCHO: a frase exata, ou "decida"]
Cadeia de problema e solução: [CADEIA: os passos, ou "decida"]
Dado surpreendente depois da metade: [DADO SURPREENDENTE, ou "pesquise"]
Pergunta final com 2 opções: [PERGUNTA FINAL, ou "crie"]
Fatos que eu já conferi: [FATOS CONFERIDOS, ou "nenhum"]
Roteiro aprovado (prompt 04), se houver: [ROTEIRO APROVADO, ou "escreva você"]

REGRAS EXTRAS
1. Use o config/canal.json se existir. Se não existir, crie com padrões coerentes com o tema e me avise.
2. Antes de escrever, pesquise e anote fatos e fontes em ideia.md e fontes.md. Fato sem fonte fica de fora ou vai marcado "VERIFICAR", e você me avisa no final.
3. Escreva 3 ganchos diferentes e escolha o melhor, dizendo por quê em uma linha.
4. Roteiro: se eu colei um roteiro aprovado acima, use exatamente esse texto como narracao.txt (só ajuste a pontuação para a voz) e pule a escrita. Se não, escreva: cadeia de problema e solução falando com "você", frases de até 15 palavras, um gancho interno a cada 8 a 12 segundos, o dado mais surpreendente depois da metade e um final que paga o gancho e termina em UMA pergunta fácil de responder. Palavras da narração = duração x 2,6.
5. Mostre cada passo do processo acontecendo na tela, com cenário real e personagens fazendo. Nenhuma cena parada. Siga o docs/processos.md e escreva o plano de animação antes do storyboard.
6. Título na tela já no segundo 0, no máximo 2 destaques e a pergunta final na última cena. Nada sobre o rosto nem sobre a legenda.
7. Rode a validação e confira os quadros cena por cena. Corrija em até 3 rodadas antes do render final.
8. Peça permissão antes de instalar qualquer coisa ou gastar créditos. Nunca mostre nem grave chaves.
9. Se o kit não tiver algo que o tema pede, componha com o que existe e diga a limitação.
10. Sem músicas ou textos protegidos por direitos autorais.

ENTREGA (em até 5 linhas no chat)
O caminho do video.mp4, da capa.png e do postagem.md; a lista de fatos marcados "VERIFICAR"; o que ficou limitado pelo kit; e uma sugestão de tema para o próximo vídeo da série.`,
    autor: "Claude, para a FDSS +, a partir de PROMPT.md e AGENTE.md do kit",
    atualizado_em: "2026-11-17",
    origem: ""
  },

  {
    id: "v3d-06-ponte-para-produto",
    tema: "Vídeos 3D virais (kit)",
    titulo: "06 · Ponte do perfil para produto ou serviço (monetizar sem quebrar a retenção)",
    tipo: "Prompt",
    funcoes: ["anuncio", "vendas"],
    tags: ["monetização", "funil", "oferta", "bio", "direct", "afiliados"],
    descricao: "Define o que fazer em cada fase do perfil, as ofertas que combinam e como levar a audiência até elas.",
    quando_usar: "Depois dos primeiros vídeos no ar, ou antes, se já souber o que quer vender. Se ainda não tiver oferta, ele propõe testes baratos para descobrir. Combina com os itens de ManyChat e de scripts de venda da biblioteca.",
    conteudo: `<papel>
Você é um estrategista de monetização de perfis de vídeo curto. Você conecta audiência a ofertas sem enganar ninguém e sem estragar a retenção dos vídeos.
</papel>

<contexto>
Ficha do canal: [FICHA DO CANAL]
Público: [PÚBLICO]
O que posso vender ou divulgar: [OFERTAS POSSÍVEIS: afiliado, serviço, produto digital, nada ainda]
Estágio do perfil: [ESTÁGIO: seguidores e visualizações médias, ou "começando"]
Plataformas: [PLATAFORMAS]
País: [PAÍS]
</contexto>

<tarefa>
1. Diga o que priorizar em cada fase do perfil: começando (até 1 mil seguidores), com tração (1 mil a 10 mil) e com audiência (acima de 10 mil). Para cada fase: foco, o que ainda não vale fazer e a meta.
2. Liste 8 ofertas que combinam com este público e este conteúdo (afiliado, serviço local, produto digital, consultoria, patrocínio...). Ordene por esforço contra retorno e dê o primeiro teste barato de cada uma.
3. Monte a ponte do vídeo até a oferta: bio e link, comentário fixado, palavra-chave nos comentários para receber o material no Direct, e 1 vídeo de oferta a cada 5 vídeos de conteúdo.
4. Escreva: 2 versões da bio, 3 comentários fixados, a mensagem de Direct para quem comentar a palavra-chave e o roteiro de um vídeo de oferta de 30 a 45 segundos, no estilo da série.
5. Liste os riscos e as regras a respeitar.
</tarefa>

<regras>
- Sem promessa de ganho, de cura ou de resultado garantido, e sem urgência ou escassez falsas.
- Afiliado, patrocínio e parceria com aviso claro de publicidade, usando o recurso de parceria paga da plataforma e as regras de publicidade do país.
- Automação de Direct só para quem comentou; confira os limites vigentes da Meta.
- Os requisitos de monetização das plataformas mudam: peça para eu confirmar no aplicativo.
- Não dependa de uma só plataforma: leve a audiência para um canal seu (lista de contatos).
</regras>

<formato>
Tabela por fase do perfil, tabela das 8 ofertas, depois os textos prontos em blocos separados e a lista de riscos.
</formato>`,
    autor: "Claude, para a FDSS +",
    atualizado_em: "2026-11-17",
    origem: ""
  },

  /* ======================== SÉRIES ANIMADAS VIRAIS: formatos dos 5 vídeos analisados ======================== */

  {
    id: "sv-08-serie-voce-decide-n-dias",
    tema: "Séries animadas virais",
    titulo: "08 · Série \"você decide\" de N dias: transformação com painel e votação",
    tipo: "Prompt",
    funcoes: ["anuncio"],
    tags: ["série", "transformação", "você decide", "dias", "votação", "painel"],
    descricao: "Escreve cada episódio de uma transformação em 7 ou 30 dias, com painel de prazo, evolução em % e tela dividida para o voto.",
    quando_usar: "Para séries no molde \"Dia 1 de 30\": um personagem, um prazo, um evento final e o público escolhendo um ajuste por dia. No Dia 1 ele cria o painel e as regras; do Dia 2 em diante, aplica a escolha vencedora e guarda o estado. Combine com o prompt 02 (personagem) e o 05 (cenas).",
    conteudo: `<papel>
Você é o roteirista-chefe de uma série animada em que o público decide a transformação de um personagem, um dia por vez, até um evento final. Você escreve cada episódio curto e claro, com continuidade rígida.
</papel>

<contexto>
Ficha da série: [FICHA DA SÉRIE, ou "ainda não"]
Personagem e situação inicial: [PERSONAGEM E PROBLEMA]
Prazo e evento final: [PRAZO E EVENTO: ex. 30 dias até um encontro, 7 dias até a formatura]
Episódio de hoje: [DIA DE HOJE: "Dia 1" ou o número do dia]
Estado atual do painel (vazio no Dia 1): [ESTADO ATUAL, ou "dia 1"]
Escolha que ganhou nos comentários (vazia no Dia 1): [ESCOLHA VENCEDORA, ou "dia 1"]
Duração-alvo em segundos: [DURAÇÃO EM SEGUNDOS]
</contexto>

<tarefa>
1. Se for o Dia 1: defina o painel fixo no topo, com 2 medidores (dias restantes e evolução em %), as regras de pontos (quanto cada ajuste vale e o que custa em tempo, dinheiro ou esforço) e a lista de 8 a 12 ajustes possíveis, cada um com 2 opções (um ganho e um custo). Ordene para a evolução crescer até o dia final e para o último ajuste ser o mais visível.
2. Se for do Dia 2 em diante: aplique a escolha vencedora. Atualize os medidores mostrando a conta, uma linha por valor. O ajuste é permanente: ele aparece de novo nos episódios seguintes.
3. Escreva o roteiro do episódio, cena por cena:
   - 0 a 3 s: o prazo e a situação na tela (gancho), com o painel visível.
   - 3 a 12 s: o resumo do que mudou. No Dia 1, o problema, mostrado com humor leve.
   - Cenas de 3 a 4 s com o ajuste do dia acontecendo e o efeito no painel.
   - Uma reviravolta: algo que atrapalha ou surpreende, para dar vontade de ver o próximo.
   - Últimos 8 a 10 s: tela dividida com as 2 opções de UMA palavra, o ganho e o custo de cada uma e a frase "Comenta UMA palavra: A ou B. A mais votada vira o dia seguinte."
4. Para cada cena dê: tempo, o que se vê, a fala ou o texto, o painel atualizado e o efeito sonoro. Legenda grande, palavra por palavra, no centro.
5. Escreva o ESTADO ATUALIZADO em bloco de código (dia, medidores, ajustes feitos e pendentes) para colar no próximo episódio.
6. Escreva um rascunho de 3 linhas para cada uma das 2 ramificações do próximo dia.
7. Escreva a descrição do post: primeira linha com o prazo e um emoji, a regra do voto, "Segue pra não perder" e 5 hashtags, uma delas da série.
</tarefa>

<regras>
- O personagem é inventado. Sem pessoa real, celebridade ou marca.
- O humor é com a situação, nunca com o corpo, a aparência, a idade, a saúde ou a origem de alguém. A transformação é feita de escolhas e hábitos, não de vergonha.
- Nenhum conselho médico ou de saúde apresentado como certeza.
- Cada opção tem um ganho e um custo reais. Nada de opção obviamente melhor.
- Respeite o estado: não mude valores sem mostrar a conta e não desfaça um ajuste já feito.
- Peça o voto como parte da história. Não prometa prêmio por curtida, comentário ou compartilhamento.
- Em caso de empate, diga como a série resolve.
</regras>

<formato>
Painel e regras (só no Dia 1), conta do dia, roteiro em tabela (tempo, imagem, fala ou texto, painel, som), estado atualizado em bloco de código, rascunhos das ramificações e a descrição do post.
</formato>`,
    autor: "Claude, para a FDSS +, a partir da análise de 2 vídeos de transformação",
    atualizado_em: "2026-11-17",
    origem: ""
  },

  {
    id: "sv-09-simulacao-de-orcamento",
    tema: "Séries animadas virais",
    titulo: "09 · Simulação de orçamento: \"se você ganhasse R$ X\" com saldo na tela",
    tipo: "Prompt",
    funcoes: ["anuncio"],
    tags: ["orçamento", "simulação", "custos", "saldo", "parte 2", "explicativo"],
    descricao: "Pesquisa os custos reais, faz a conta fechar e escreve o vídeo com saldo caindo a cada compra e convite para a parte 2.",
    quando_usar: "Para vídeos do tipo \"você ganhou R$ 10 milhões e vai montar uma fazenda\": cada compra com o preço na tela e uma pergunta de estimativa no começo. Use com busca na web ligada, porque os preços precisam de fonte. No kit 3D, repita o texto do saldo em todas as cenas (o kit monta cada cena do zero).",
    conteudo: `<papel>
Você é um roteirista de vídeos de simulação de orçamento: "se você ganhasse R$ X e quisesse montar Y". Você mostra o preço de cada passo e deixa a conta fechar de verdade.
</papel>

<contexto>
Ficha da série: [FICHA DA SÉRIE, ou "ainda não"]
Tema: [TEMA: ex. montar uma fazenda de soja, abrir uma padaria, construir uma casa]
Valor inicial: [VALOR INICIAL]
País e região: [PAÍS E REGIÃO]
Duração-alvo em segundos: [DURAÇÃO EM SEGUNDOS]
Marca parceira, se houver: [MARCA PARCEIRA, ou "nenhuma"]
Data de hoje: [DATA DE HOJE]
</contexto>

<tarefa>
1. Pesquise na web os custos reais do tema na região (fontes oficiais, tabelas de mercado, notícias recentes). Monte a lista de itens na ordem lógica de compra, cada um com o preço arredondado, a faixa de variação e a fonte com a data. Sem busca, avise e marque tudo como estimativa.
2. Faça a conta: saldo inicial, cada compra, saldo depois de cada compra e saldo final. Confira que a soma fecha. Se o saldo ficar negativo, diga isso: a conta honesta vale mais do que o final bonito.
3. Escreva o roteiro cena por cena:
   - Gancho (0 a 3 s): "Você ganhou R$ X" e a pergunta de estimativa: "Quanto você acha que sobra no fim?" Saldo visível no topo.
   - Cada compra em uma cena de 3 a 5 s: o que é, o problema que ela resolve (por que não dá para pular), o preço na tela e o saldo atualizado.
   - Um gancho interno a cada 8 a 12 s ("só que ainda falta...", "e aqui o dinheiro acaba mais rápido").
   - Reviravolta depois da metade: o gasto que ninguém lembra ou que custa mais do que parece.
   - Final: o saldo e o convite para a parte 2, como "Vai dar lucro? Descubra na parte 2."
4. Para cada cena dê: tempo, o que se vê, a fala, o texto na tela (item, preço e saldo) e o efeito sonoro.
5. Entregue a tabela da conta em bloco de código, com os mesmos valores do roteiro.
6. Esboce a parte 2: simulação de safras, meses ou anos, com receita, custos recorrentes e o resultado, usando o mesmo painel.
7. Escreva a descrição do post: a pergunta de estimativa, a lista do que será comprado, o aviso "Valores ilustrativos, para fins de explicação" e a chamada para a parte 2.
</tarefa>

<regras>
- Valores arredondados e marcados como ilustrativos. Cada preço com fonte e data, ou marcado "VERIFICAR".
- Sem conselho financeiro e sem promessa de lucro.
- Se houver marca parceira, o vídeo e a descrição indicam publicidade (use o recurso de parceria paga da plataforma). Não use a logomarca de nenhuma marca sem autorização.
- Nada de afirmação sem fonte nem de número inventado.
</regras>

<formato>
Lista de itens e fontes, tabela da conta, roteiro em tabela (tempo, imagem, fala, texto na tela, som), esboço da parte 2 e a descrição do post.
</formato>`,
    autor: "Claude, para a FDSS +, a partir da análise de um vídeo de orçamento",
    atualizado_em: "2026-11-17",
    origem: ""
  },

  {
    id: "sv-10-descricao-e-voto-nos-comentarios",
    tema: "Séries animadas virais",
    titulo: "10 · Descrição, voto nos comentários e comentário fixado",
    tipo: "Prompt",
    funcoes: ["anuncio"],
    tags: ["legenda", "comentários", "votação", "cta", "instagram", "tiktok", "hashtags"],
    descricao: "Escolhe o melhor tipo de voto para o vídeo e escreve legenda, comentário fixado, respostas e o texto do próximo episódio.",
    quando_usar: "No dia de postar qualquer vídeo de série. Cobre os 4 tipos de voto vistos nos vídeos analisados: palavra A ou B, identidade (sabia ou não sabia), estimativa e previsão. Completa o prompt 06 (publicação e métricas).",
    conteudo: `<papel>
Você é um estrategista de conteúdo que escreve os textos de publicação de séries animadas em que o público participa. Seu objetivo é comentário de qualidade, seguidores e continuidade entre episódios.
</papel>

<contexto>
Ficha da série: [FICHA DA SÉRIE]
Formato: [FORMATO: transformação, simulação de orçamento ou explicativo]
Roteiro final do episódio: [ROTEIRO FINAL]
Plataformas: [PLATAFORMAS]
Dia ou parte: [DIA OU PARTE: ex. Dia 1 de 30, Parte 1]
</contexto>

<tarefa>
1. Escolha o melhor tipo de voto para este vídeo, entre os 4, e explique por quê:
   a) Palavra A ou B, para decidir a história: "Comenta UMA palavra: A ou B."
   b) Identidade, para explicativos: "Se você sabia, comenta X. Se não sabia, comenta Y."
   c) Estimativa, para orçamento: "Quanto você acha que sobra no fim?"
   d) Previsão: "Vai dar certo? Comenta SIM ou NÃO."
2. Escreva 3 versões da legenda. Primeira linha com o gancho (número, prazo ou pergunta) e, se couber, um emoji. Depois a regra do voto, a promessa do próximo episódio e "Segue pra não perder".
3. Adapte para cada plataforma: Instagram (5 a 6 hashtags específicas do assunto, uma delas da série) e TikTok (uma frase que as pessoas buscam e 3 a 5 hashtags).
4. Escreva o comentário fixado com a regra do voto e a regra de desempate.
5. Escreva as respostas para os 10 comentários mais prováveis, no tom da série.
6. Escreva a abertura do próximo episódio que anuncia o resultado ("Ontem, X ganhou com N votos"), sem mostrar nome de usuário.
7. Liste os avisos que valem para este vídeo (valores ilustrativos, conteúdo gerado por IA, parceria paga) e onde colocar cada um.
</tarefa>

<regras>
- Sem prêmio por curtida, comentário ou compartilhamento e sem "marque 3 amigos": esse tipo de pedido pode reduzir o alcance.
- Não mostre nome ou foto de quem comentou sem permissão.
- Palavras de voto curtas, fáceis de digitar e bem diferentes entre si, para a contagem ser simples.
- Sem promessa de ganho nem de resultado.
- Respeite o limite de caracteres de cada plataforma.
- Hashtags específicas do assunto. Nada de lista genérica de 30.
</regras>

<formato>
Tipo de voto escolhido com a justificativa, as 3 legendas, as adaptações por plataforma, o comentário fixado, as 10 respostas, a abertura do próximo episódio e a lista de avisos, cada um em bloco copiável.
</formato>`,
    autor: "Claude, para a FDSS +, a partir das descrições de 4 vídeos analisados",
    atualizado_em: "2026-11-17",
    origem: ""
  },

  /* ======================== PASSO A PASSO: DO ZERO AO POST ======================== */

  {
    id: "pp-00-comece-aqui",
    tema: "Passo a passo (do zero ao post)",
    titulo: "00 · Comece aqui: qual trilha seguir e o que você precisa",
    tipo: "Referência",
    funcoes: ["global"],
    tags: ["passo a passo", "começar", "trilha", "ferramentas", "plano"],
    descricao: "Escolha entre a Trilha A (vídeo 3D com o kit) e a Trilha B (série \"você decide\" em 2D) e veja o que preparar.",
    quando_usar: "Antes de tudo. Os outros itens deste tema são os passos de cada trilha, na ordem de uso. Os tempos são relatos dos criadores e estimativas minhas, não garantias.",
    conteudo: `ESCOLHA A TRILHA (uma conta, um formato)

TRILHA A: vídeo 3D explicativo ou de orçamento (kit)
- Exemplos: como é feito o asfalto, como um telhado funciona, "se você ganhasse R$ 10 milhões e montasse uma fazenda".
- Ferramenta: o kit de vídeo 3D, que já está pronto. Você dá a ideia e a duração, e ele entrega vídeo, capa e texto do post.
- Esforço: o menor. Dá para postar o primeiro vídeo logo no começo.
- Limite: o visual é o mesmo de outros canais que usam o kit. Diferencie pelo nicho, pelo elenco e pelo ângulo.

TRILHA B: série "você decide" em 2D (transformação em N dias)
- Exemplos: "Dia 1 de 30", um personagem que o público ajuda a mudar com um voto por dia.
- Ferramenta: você monta uma vez um motor 2D no Claude Code (prompt 03 deste tema). Depois, cada episódio é um roteiro e um storyboard.
- Esforço: maior no começo (motor e personagem), menor depois.
- Força: o voto nos comentários e o "Dia 2" dão motivo para voltar e seguir.

RECOMENDAÇÃO
1. Comece pela Trilha A para aprender o processo inteiro (ideia, roteiro, vídeo, post e métricas) com a ferramenta que já existe.
2. Monte a Trilha B em paralelo, nos dias de folga, e lance quando o personagem e o motor estiverem testados.
3. No começo, não misture os dois formatos na mesma conta. Um formato por conta ajuda a plataforma a entender para quem mostrar. É uma recomendação minha, não uma regra das plataformas.

O QUE VOCÊ PRECISA
- Claude com o Claude Code (os criadores dos vídeos usam os planos Pro ou Max), Node.js 18+, ffmpeg e Chrome, Edge ou Brave.
- Voz: a sua, a grátis no computador (Kokoro) ou ElevenLabs (paga). Na Trilha B você pode usar só a legenda palavra por palavra.
- Trilha B: um gerador de imagem para o personagem e os cenários.
- Som: efeitos com licença livre (Openverse e Real SFX, na biblioteca).

QUANTO TEMPO LEVA
- Preparar: de 1 a 2 horas na Trilha A; um dia ou mais na B.
- Cada vídeo na Trilha A: os criadores falam em 30 a 60 minutos, mais a sua revisão.
- Cada episódio na Trilha B, com o motor pronto: um roteiro, um storyboard e um render.

REGRAS DE CONTA
- Conteúdo original e de autoria sua, com o rótulo de conteúdo gerado por IA onde a plataforma exigir.
- Pedir voto é permitido. Prometer prêmio por curtida ou compartilhamento pode reduzir o alcance.
- Os requisitos de monetização mudam: confirme no aplicativo.`,
    autor: "Claude, para a FDSS +",
    atualizado_em: "2026-11-17",
    origem: ""
  },

  {
    id: "pp-01-trilha-a-video-3d-com-o-kit",
    tema: "Passo a passo (do zero ao post)",
    titulo: "01 · Trilha A: vídeo 3D com o kit, do zero ao post (11 passos)",
    tipo: "Referência",
    funcoes: ["global"],
    tags: ["passo a passo", "trilha a", "kit", "vídeo 3d", "postagem"],
    descricao: "Cada passo diz o prompt a usar, o que sai dele e o que conferir, da preparação até as métricas.",
    quando_usar: "Para fazer o primeiro vídeo 3D e depois repetir toda semana. Os passos 0 e 1 são feitos uma vez; os 2 e 3, uma vez por semana; os 5 a 9, a cada vídeo.",
    conteudo: `PASSO 0 · PREPARAR (uma vez, de 1 a 2 horas)
- Baixe o kit pelo link do vídeo do Willian IA, descompacte numa pasta sua e abra o Claude Code dentro dela.
- Leia o guia "Vídeos 3D virais, 00".
- Escolha a voz: a sua, grátis no computador ou ElevenLabs. O agente confere o computador e pede permissão antes de instalar qualquer coisa.
- Confira Node.js 18+, ffmpeg e Chrome, Edge ou Brave.
- Confirme com o autor do kit se o uso comercial é permitido: não achei arquivo de licença.

PASSO 1 · CANAL (uma vez)
- Prompt: Vídeos 3D virais, 01 (Canal).
- Saída: config/canal.json. Salve na pasta config do kit.
- Confira: o canal tem ângulo, elenco e cores só seus.

PASSO 2 · TEMAS (toda semana)
- Prompt: Vídeos 3D virais, 02 (Radar de temas). Rode numa IA com busca na web.
- Saída: 5 temas ordenados, com gancho e fontes.
- Confira: os links das fontes abrem e dizem o que o radar afirma.

PASSO 3 · PEDIDOS DA SEMANA
- Prompt: Vídeos 3D virais, 03 (Lote semanal).
- Saída: 7 pedidos prontos, um por vídeo.
- Confira: o gancho é verdadeiro e o vídeo vai respondê-lo.

PASSO 4 · ROTEIRO (nos 5 primeiros vídeos; depois pode pular)
- Prompt: Vídeos 3D virais, 04 (Roteiro para aprovar).
- Saída: a narração pronta para voz e os fatos com fontes.
- Aprove ou peça mudanças. Cole o roteiro aprovado no campo "Roteiro aprovado" do passo 5.

PASSO 5 · PRODUÇÃO
- Prompt: Vídeos 3D virais, 05 (Pedido de produção). Cole no Claude Code aberto na pasta do kit.
- Modo: "com aprovação da sinopse" nos 5 primeiros; depois, "automático".
- Saída: video.mp4, capa.png e postagem.md.

PASSO 6 · REVISÃO
- Peça ao agente os quadros do vídeo (o kit tem uma opção que gera 2 imagens por cena) e use o prompt "Passo a passo, 04 (Revisão final)".
- Confira você mesmo os fatos marcados "VERIFICAR", nas fontes.
- Ouça a voz inteira uma vez.

PASSO 7 · AJUSTES
- Mande correções curtas, uma cena por vez. Exemplos: "Na cena 6, o personagem está de costas: vire para a câmera." e "Troque o destaque da cena 3 por: ...".
- Rode de novo a prévia e depois o render final.

PASSO 8 · TEXTOS DO POST
- Prompt: Séries animadas virais, 10 (Descrição e voto). Use também o postagem.md do kit como base.
- Saída: legenda, comentário fixado, respostas e o tipo de voto.

PASSO 9 · POSTAR
- Use o checklist "Passo a passo, 05".
- Suba o arquivo original no Instagram e no TikTok, sem marca d'água de outro aplicativo.

PASSO 10 · DEPOIS DE POSTAR
- Primeira hora: responda os primeiros comentários.
- 24 horas: veja a retenção nos 3 primeiros segundos e o percentual assistido.
- Toda semana: prompt Séries animadas virais, 06 (Publicação e métricas).
- Com cerca de 10 vídeos no ar: prompt Vídeos 3D virais, 06 (Ponte para produto).`,
    autor: "Claude, para a FDSS +",
    atualizado_em: "2026-11-17",
    origem: ""
  },

  {
    id: "pp-02-trilha-b-serie-voce-decide-2d",
    tema: "Passo a passo (do zero ao post)",
    titulo: "02 · Trilha B: série \"você decide\" em 2D, do zero ao post (12 passos)",
    tipo: "Referência",
    funcoes: ["global"],
    tags: ["passo a passo", "trilha b", "série", "2d", "você decide", "personagem"],
    descricao: "Do conceito ao Dia 2: personagem, motor 2D feito uma vez e um ciclo curto por episódio.",
    quando_usar: "Para a série no molde \"Dia 1 de 30\". O trabalho pesado (personagem e motor) é feito uma vez; depois, cada episódio é roteiro, storyboard, render e post. Esta trilha usa o prompt do motor, que ainda não foi testado: teste com o episódio de teste antes de confiar.",
    conteudo: `PASSO 0 · PREPARAR (uma vez)
- Claude Code, Node.js 18+, ffmpeg, um navegador (Chrome, Edge ou Brave) e uma pasta nova só para a série.
- Escolha o gerador de imagem e, se for narrar, a voz.

PASSO 1 · CONCEITO E FICHA
- Prompt: Séries animadas virais, 01. Escolha o formato B.
- Saída: ficha da série (personagem, prazo, evento final, painel e regra do voto) e os 14 primeiros episódios.
- Confira: personagem inventado, prazo e evento claros, e nada que humilhe alguém.

PASSO 2 · PERSONAGEM E CENÁRIOS
- Prompt: Séries animadas virais, 02.
- Gere a folha do personagem, as expressões (neutro, feliz, surpreso, triste, pensativo e irritado) e de 4 a 6 cenários.
- No personagem, peça fundo liso de uma cor e depois recorte para PNG com fundo transparente.
- Confira: 5 imagens seguidas com as mesmas cores e traços, e mãos e rosto sem deformar.

PASSO 3 · MONTAR O MOTOR 2D (uma vez)
- Prompt: Passo a passo, 03 (Motor 2D). Cole no Claude Code, numa pasta nova.
- Coloque os PNG nas pastas que o agente pedir.
- Saída: motor, validador, comandos de prévia e render, AGENTE.md e um episódio de teste.
- Confira: o episódio de teste foi renderizado e você viu os quadros. Se o agente não testou, peça.

PASSO 4 · ROTEIRO DO DIA 1
- Prompt: Séries animadas virais, 08, com "Dia 1".
- Saída: painel e regras, roteiro cena por cena, estado atualizado e rascunho das 2 ramificações.

PASSO 5 · STORYBOARD
- No Claude Code, na pasta do motor: "Leia o AGENTE.md e crie o storyboard deste episódio com o roteiro abaixo: ..."
- Saída: storyboard.json validado.
- Confira: cenas de 2 a 6 segundos, painel coerente e texto dentro das zonas seguras.

PASSO 6 · VOZ, LEGENDA E SOM
- Voz: sua, local grátis ou ElevenLabs. Sem voz, a legenda palavra por palavra carrega o episódio.
- Efeitos sonoros com licença livre: Openverse e Real SFX (na biblioteca).

PASSO 7 · RENDER E REVISÃO
- Prévia, depois os quadros, depois a revisão com o prompt "Passo a passo, 04", depois o render final e a capa.

PASSO 8 · TEXTOS DO POST
- Prompt: Séries animadas virais, 10, com o voto de palavra A ou B.
- Saída: legenda, comentário fixado com a regra do voto e de desempate.

PASSO 9 · POSTAR
- Use o checklist "Passo a passo, 05".
- Mesmo dia e horário para toda a série: o público espera o próximo dia.

PASSO 10 · CONTAR O VOTO E FAZER O DIA 2
- Conte os comentários da janela combinada (por exemplo, as primeiras 24 horas) e aplique a regra de desempate.
- Prompt: Séries animadas virais, 08, com ESTADO ATUAL e ESCOLHA VENCEDORA preenchidos.
- Repita os passos 5 a 9. Do Dia 2 em diante, cada episódio é um roteiro, um storyboard e um render.

PASSO 11 · AO FIM DA SÉRIE
- O Dia N entrega o evento final e abre a próxima série.
- Use as métricas (Séries animadas virais, 06) para escolher a próxima e a ponte para o produto (Vídeos 3D virais, 06).

ALTERNATIVA MAIS RÁPIDA E MENOS CONTROLADA
- Gerar cada cena com ferramentas de imagem e de vídeo por IA (veja Séries animadas virais, 05) e editar no CapCut. Serve para testar a ideia, mas custa mais por episódio e o personagem tende a mudar entre cenas.
- A skill Animation Studio (na biblioteca) é outra opção. Eu não a verifiquei: leia antes de instalar.`,
    autor: "Claude, para a FDSS +",
    atualizado_em: "2026-11-17",
    origem: ""
  },

  {
    id: "pp-03-motor-2d-da-serie",
    tema: "Passo a passo (do zero ao post)",
    titulo: "03 · Motor 2D da série: construir uma vez no Claude Code",
    tipo: "Prompt",
    funcoes: ["global"],
    tags: ["motor", "2d", "claude code", "storyboard", "render", "série", "ffmpeg"],
    descricao: "Manda o Claude Code montar um motor que lê um storyboard e renderiza episódios 2D em MP4, com painel, legenda e tela dividida.",
    quando_usar: "Passo 3 da Trilha B. Cole numa pasta nova e vazia. É um prompt de construção que eu escrevi e que ainda não foi testado: o agente precisa renderizar o episódio de teste e mostrar os quadros antes de você confiar nele.",
    conteudo: `Você vai construir, do zero, um motor para produzir episódios curtos de séries animadas 2D, nesta pasta. Trabalhe em português do Brasil e mostre o progresso por etapa.

<objetivo>
Um episódio é descrito por um arquivo storyboard.json e renderizado em MP4 vertical 1080x1920, a 30 quadros por segundo, sem gerador de vídeo por IA. O personagem e os cenários são imagens PNG, criadas uma vez e reaproveitadas em todos os episódios.
</objetivo>

<ambiente>
- Verifique node (18 ou mais), ffmpeg e um navegador (Chrome, Edge ou Brave). Se algo faltar, diga como instalar e só instale com a minha permissão.
- Use HTML, CSS, JavaScript e Canvas. O render abre o navegador sem janela, avança o tempo quadro a quadro, salva os quadros e junta com o áudio pelo ffmpeg.
- Sem serviços pagos e sem enviar meus arquivos para fora do computador.
</ambiente>

<assets>
- assets/personagem/ : PNG com fundo transparente, uma pose neutra e as expressões neutro, feliz, surpreso, triste, pensativo e irritado.
- assets/cenarios/ : PNG 1080x1920.
- assets/props/ : objetos soltos em PNG.
- Se ainda não houver assets, crie um conjunto de TESTE desenhado em código, marcado como teste, só para validar o motor.
</assets>

<storyboard>
O formato do storyboard.json deve ter: série, episódio, duração, áudio (opcional), palavras com tempo (opcional), painel (medidores fixos com rótulo, valor e animação de mudança) e a lista de cenas. Cada cena tem: início, fim, cenário, personagem (expressão, posição, escala, entrada e saída, balanço leve), textos (título e destaque), tela dividida (2 opções com palavra de voto, ganho e custo), efeitos (zoom, tremor, flash, preto e branco) e transição (corte, flash ou deslizar).
</storyboard>

<recursos_obrigatorios>
1. Painel fixo no topo com 2 medidores que mudam com animação suave entre cenas.
2. Legenda grande, de uma a três palavras por vez, no centro ou no terço inferior, branca com contorno preto, com a palavra falada em destaque (amarelo). Se não houver áudio, estime o tempo de cada palavra pelo tamanho do texto e avise.
3. Personagem com troca de expressão, respiração (balanço leve) e movimento de entrada.
4. Tela dividida com 2 versões do personagem, 2 palavras de voto e a chamada final ("Dia 2" ou "Parte 2").
5. Zonas seguras: nada importante nos 8% de cima e nos 20% de baixo da tela.
6. Transições e efeitos curtos, de 150 a 300 ms.
7. Tudo é função do tempo: o mesmo storyboard gera sempre o mesmo vídeo.
8. Modo prévia (540x960, rápido) e modo quadros (2 imagens por cena, para revisão).
9. Validador do storyboard: cenas cobrindo o episódio inteiro sem buracos, cena de 2 a 6 segundos, assets que existem, painel coerente e texto dentro das zonas seguras.
10. Voz opcional: um arquivo de áudio meu, com tempos de palavra de um transcritor local (só se eu aceitar a instalação), ou ElevenLabs com a chave no arquivo .env. Nunca mostre nem grave a chave em outro lugar.
</recursos_obrigatorios>

<entregas>
- Pastas organizadas e um README curto em português.
- Comandos: novo episódio, validar, quadros, prévia, render e capa.
- Um arquivo AGENTE.md com as regras para uma IA criar episódios: formato da série, como escrever o storyboard a partir de um roteiro e o checklist de qualidade.
- Modelos de storyboard.
- Um episódio de teste renderizado com os assets de teste, para provar que o motor funciona.
- No fim, uma lista do que foi testado e do que não foi.
</entregas>

<regras>
- Teste cada recurso antes de seguir para o próximo.
- Não declare pronto sem rodar o episódio de teste e me mostrar os quadros.
- Se algo não funcionar, diga o que foi e o que você tentou, sem esconder.
- Peça permissão antes de instalar ou baixar qualquer coisa.
- Não use música nem imagens de terceiros.
</regras>`,
    autor: "Claude, para a FDSS +, a partir do formato do kit de vídeo 3D e dos vídeos de série analisados",
    atualizado_em: "2026-11-17",
    origem: ""
  },

  {
    id: "pp-04-revisao-final-qa",
    tema: "Passo a passo (do zero ao post)",
    titulo: "04 · Revisão final com os quadros: pode postar?",
    tipo: "Prompt",
    funcoes: ["global"],
    tags: ["revisão", "qa", "qualidade", "checklist", "quadros", "antes de postar"],
    descricao: "Confere o vídeo quadro a quadro: gancho, legibilidade, consistência, fatos, regras e texto do post, com veredito.",
    quando_usar: "Antes de postar, com os quadros do vídeo anexados (2 imagens por cena, ou uma folha de contato). Ele só julga o que aparece nas imagens e avisa o que precisa conferir fora delas, como áudio e música.",
    conteudo: `<papel>
Você é um revisor de qualidade de vídeos curtos animados. Você só julga o que consegue ver nos quadros enviados e diz o que não consegue avaliar.
</papel>

<contexto>
Formato: [FORMATO: explicativo 3D, orçamento ou série "você decide"]
Roteiro final: [ROTEIRO FINAL]
Texto do post: [TEXTO DO POST]
Quadros anexados (tempos ou números das cenas): [QUADROS ANEXADOS]
Plataformas: [PLATAFORMAS]
</contexto>

<tarefa>
1. Para cada item abaixo, responda OK, AJUSTAR ou NÃO DÁ PARA AVALIAR, com a evidência (qual quadro) e, se for AJUSTAR, a correção:
   - Gancho: o prazo ou a pergunta está na tela nos 3 primeiros segundos?
   - Retenção: cada cena muda algo (ângulo, plano, cenário ou personagem)? Alguma parece uma foto parada?
   - Legibilidade: a legenda é grande, com contraste e fora das zonas seguras (8% de cima e 20% de baixo)? Algo cobre o rosto?
   - Consistência: personagem, cores, painel e fonte são iguais em todos os quadros? Mãos e rostos estão sem deformação?
   - Mensagem: o que está na tela mostra o que a fala diz? O texto repete a legenda sem acrescentar nada?
   - Fatos e números: quais afirmações, valores e números aparecem, e quais precisam de fonte?
   - Regras: algo que envergonhe pessoas pela aparência, dê conselho de saúde ou de dinheiro como certeza, use marca ou logo de terceiros ou pareça publicidade sem aviso?
   - Final: a pergunta ou o voto está claro, com opções diferentes e fáceis de digitar, e é igual ao do texto do post?
   - Texto do post: gancho na primeira linha, regra do voto, avisos obrigatórios e hashtags específicas?
2. Liste o que precisa de conferência fora dos quadros: áudio (volume, voz e ritmo), sincronia da legenda e música.
3. Resuma em até 5 correções, da mais importante para a menos, escritas como comandos curtos para o agente que gerou o vídeo. Exemplo: "Na cena 6, vire o personagem para a câmera."
4. Dê o veredito: PODE POSTAR, POSTAR APÓS AJUSTES ou NÃO POSTAR, com o motivo.
</tarefa>

<regras>
- Nunca invente o que não está nos quadros. Se um quadro não mostra, diga "NÃO DÁ PARA AVALIAR".
- Seja específico: número do quadro e o que mudar. Nada de elogio genérico.
- Não sugira recursos que o formato não tem.
</regras>

<formato>
Tabela com os itens, depois as conferências fora dos quadros, as 5 correções e o veredito.
</formato>`,
    autor: "Claude, para a FDSS +",
    atualizado_em: "2026-11-17",
    origem: ""
  },

  {
    id: "pp-05-checklist-de-postagem-e-rotina",
    tema: "Passo a passo (do zero ao post)",
    titulo: "05 · Checklist de postagem e rotina semanal",
    tipo: "Modelo",
    funcoes: ["global"],
    tags: ["checklist", "postagem", "rotina", "instagram", "tiktok", "métricas"],
    descricao: "O que conferir antes de postar, o que fazer na primeira hora, em 24 horas e na semana, e uma rotina sugerida.",
    quando_usar: "Em todo vídeo, no passo de postar. Copie, marque os itens e adapte a rotina ao seu tempo.",
    conteudo: `ANTES DE POSTAR (todos precisam estar OK)
[ ] Os 3 primeiros segundos mostram o gancho e o prazo ou a pergunta na tela.
[ ] O vídeo funciona sem som: a legenda carrega a mensagem.
[ ] A legenda é legível no celular e fica nas zonas seguras (nada nos 8% de cima nem nos 20% de baixo).
[ ] Todo fato tem fonte ou foi cortado. Os itens "VERIFICAR" foram resolvidos.
[ ] Valores ilustrativos avisados, parceria paga marcada e rótulo de conteúdo gerado por IA ligado.
[ ] Sem marca d'água de outro aplicativo e sem logo de terceiros.
[ ] Música licenciada ou da biblioteca da plataforma.
[ ] A pergunta ou o voto do final é igual ao do comentário fixado.
[ ] Capa legível, com até 6 palavras.
[ ] O texto do post tem o gancho na primeira linha, a regra do voto e a chamada para seguir.
[ ] Personagem, painel e cores iguais aos dos episódios anteriores.

NA HORA DE POSTAR
- Instagram: Reel com o arquivo original, capa escolhida e de 5 a 6 hashtags específicas do assunto.
- TikTok: o mesmo arquivo, uma frase que as pessoas buscam na legenda e de 3 a 5 hashtags.
- Fixe o comentário assim que publicar.
- Séries: mesmo dia e mesmo horário. Nos outros formatos, teste 2 horários por semana e compare.

PRIMEIRA HORA
- Responda os comentários e curta os melhores. Não discuta.

24 HORAS
- Veja a retenção nos 3 primeiros segundos, o percentual assistido, compartilhamentos, salvamentos e seguidores ganhos.
- Se for série de voto: conte os votos, aplique a regra de desempate e anuncie o resultado no início do próximo episódio, sem mostrar nome de usuário.

SEMANA
- Prompt Séries animadas virais, 06 (métricas).
- Mantenha os 2 temas que mais seguraram e corte o resto.

ROTINA SEMANAL SUGERIDA (ajuste ao seu tempo)
- Domingo: radar e lote (Trilha A) ou ramificações do próximo dia (Trilha B).
- Dias de produção: de 1 a 2 vídeos por sessão.
- Todo dia: postar no mesmo horário.
- Sexta: métricas e decisão da semana seguinte.`,
    autor: "Claude, para a FDSS +",
    atualizado_em: "2026-11-17",
    origem: ""
  }

];
