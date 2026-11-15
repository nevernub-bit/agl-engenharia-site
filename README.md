# AGL Engenharia — site institucional

Site estático de página única (one-page) da AGL Engenharia, pronto para ser aberto,
editado e publicado a partir de qualquer ambiente, inclusive o modo Code.

## Stack

- **HTML5 estático** — sem framework, sem CMS, sem gerador de site.
- **CSS puro** (`assets/styles.css`) — variáveis CSS, grid, animações e `prefers-reduced-motion`.
- **JavaScript vanilla** (`assets/main.js`) — IIFE, sem bibliotecas. Usa `IntersectionObserver`,
  `requestAnimationFrame` e manipulação simples de DOM.
- **Zero dependências de build.** Não há `node_modules`, bundler, transpilador ou etapa de compilação.
- **Fontes via CDN** do Google Fonts: Manrope (textos/interface) e JetBrains Mono (rótulos técnicos).
  Há fallback para fontes do sistema caso o CDN não carregue.
- **SEO/estrutura** — título, meta description, Open Graph, `lang="pt-BR"`, headings semânticos,
  JSON-LD `GeneralContractor` com os dados reais da empresa.

## Estrutura de arquivos

```
.
├── index.html          # página completa (todas as seções, inline SVG, JSON-LD)
├── assets/
│   ├── styles.css      # sistema visual completo
│   └── main.js         # interações
├── README.md
└── .gitignore
```

Não existem arquivos de imagem: toda a linguagem visual (malha técnica, planta estrutural,
painel de obra, molduras de obras) é feita com CSS e SVG inline. Quando as fotos reais
chegarem, crie `assets/img/` e substitua os blocos `<div class="work__frame">`.

### Seções (âncoras)

`#topo` hero · `#servicos` · `#gestao` (Mais Controle + acesso individual ao histórico) ·
`#processo` · `#obras` (molduras reservadas) · `#referencias` (reservado) · `#agl` ·
`#contato` · rodapé.

## Como rodar localmente

O site não precisa de build. Basta servir a pasta por HTTP (abrir o arquivo direto também
funciona, exceto o carregamento de fontes em alguns navegadores):

```bash
# opção 1 — Python (já instalado na maioria dos sistemas)
python3 -m http.server 3000

# opção 2 — Node
npx --yes serve . -l 3000
```

Depois abra `http://localhost:3000`.

## Migração para o modo Code

1. Descompacte o `.zip` (ou arraste a pasta `site`) para dentro do projeto no modo Code.
2. Rode um dos comandos acima — não há `npm install`.
3. Opcional: `git init && git add . && git commit -m "site AGL Engenharia"` e conecte o
   GitHub pelo painel do projeto para versionar e publicar.

## Pontos a confirmar antes de publicar

- **Domínio:** `index.html` usa `https://aglengenharia.com.br/` em `canonical` e `og:url`
  como domínio provisório. Troque pelo domínio real.
- **Imagens:** obras e depoimentos estão com molduras vazias, marcadas como conteúdo a fornecer.
- **Painel de obra:** é uma representação ilustrativa em HTML/CSS. O comentário
  `<!-- Componente preparado para receber screenshots reais do Mais Controle... -->`
  indica o ponto de substituição por uma imagem real.
- **Formulário:** monta a mensagem e abre o WhatsApp (`wa.me/5565992209399`). Não há backend
  nem envio de e-mail.
- **Tipografia:** a BabaPro é licenciada; quando os arquivos existirem, adicione `@font-face`
  em `assets/styles.css` e ajuste `--f-sans`.

## Dados oficiais usados no site

AGL Engenharia · WhatsApp 65 99220-9399 · kleberluizsm@gmail.com ·
Rua Treze, Quadra 11, nº 25 — Parque das Nações, Cuiabá/MT · CNPJ 51.758.687/0001-60.
