# FDSS +

Biblioteca interna da equipe: prompts, skills, modelos, links e referências, organizados por função.

O site fica na pasta `biblioteca/` e é HTML, CSS e JavaScript puros, sem build. Para abrir no computador, dê dois cliques em `biblioteca/index.html`.

## Adicionar um item

1. No site, clique em **Adicionar**, preencha e copie o bloco gerado.
2. Abra `biblioteca/dados.js` e cole o bloco na linha logo acima do `];` final.
3. Salve. Se o site estiver publicado, faça commit e push: a Vercel atualiza sozinha.

## Adicionar uma função

Acrescente uma linha `{ id: "...", nome: "..." }` em `window.FUNCOES`, no topo de `biblioteca/dados.js`.

## Aviso

O site publicado não tem login: qualquer pessoa com o link lê tudo. Nada de senhas, chaves ou dados de clientes aqui.
