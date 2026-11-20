# AGL Engenharia — site institucional

Site institucional estático de página única.

## Tecnologias

- HTML5 sem framework ou CMS.
- CSS puro em `assets/styles.css`, com Grid, variáveis, breakpoints e suporte a `prefers-reduced-motion`.
- JavaScript vanilla em `assets/main.js`, sem dependências de build.
- Fontes Manrope e JetBrains Mono pelo Google Fonts, com alternativas locais.
- Schema.org em JSON-LD e metadados Open Graph/Twitter no HTML.

## Estrutura

```text
.
├── index.html
├── README.md
└── assets/
    ├── main.js
    ├── styles.css
    └── img/
        ├── logo-agl-header.png  # logo usada no cabeçalho
        ├── logo-agl.png         # símbolo original, fonte dos favicons
        ├── favicon*.png / .ico  # ícones transparentes em vários tamanhos
        ├── obra-*.jpg / .webp   # fotografias da seção Obras e versões responsivas
        ├── projeto-3d*.jpg / .webp
        ├── skyfit-academia*.jpg / .webp
        └── 01-... a 05-...      # imagens-fonte recebidas para o portfólio
```

As imagens de Obras usam WebP com fallback JPEG e variantes menores para telas compactas. Os arquivos numerados são cópias-fonte recebidas para o portfólio; os arquivos `obra-*`, `skyfit-*` e `projeto-3d*` são as versões otimizadas utilizadas pela página.

## Seções

Hero · posicionamento · serviços · gestão · relatórios (temporariamente ocultos) · processo · obras · referências (temporariamente ocultas) · A AGL · contato.

As seções de relatórios e referências permanecem no HTML com o atributo `hidden` até a decisão de reativá-las.

## Formulário

O formulário abre a conversa com os dados preenchidos no WhatsApp da AGL; não há backend nem envio por e-mail. Com JavaScript indisponível, o botão de envio permanece desativado e o visitante recebe um link direto para o WhatsApp, sem submeter os campos nem expor valores na URL.

## Verificação local

Sirva a pasta pela raiz do projeto com um servidor HTTP local, por exemplo:

```bash
python3 -m http.server 3000
```

Depois acesse `http://localhost:3000`.

## Configuração antes da publicação

- **Domínio:** canonical e `og:url` permanecem em `https://aglengenharia.com.br/` até a definição do domínio oficial. A referência do `og:image` também deve ser validada para o host final.
- **Fontes:** Manrope e JetBrains Mono são carregadas do Google Fonts; há fontes de sistema como fallback.
- **Favicon:** versões PNG transparentes em 16, 32, 48, 180 e 512 px, além de ICO multi-tamanho, derivadas do símbolo original `logo-agl.png`.

## Dados publicados

AGL Engenharia · WhatsApp 65 99220-9399 · kleberluizsm@gmail.com · Rua Treze, Quadra 11, nº 25 — Parque das Nações, Cuiabá/MT · CNPJ 51.758.687/0001-60.
