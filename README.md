# guipetav.github.io — Portfólio Pessoal

Portfólio pessoal de **Guilherme Petav**, hospedado no GitHub Pages.

## Processo de trabalho: Figma → Código

Este projeto segue um fluxo **design-first**:

1. O design nasce no **Figma** — protótipos, tokens de cor, tipografia e espaçamentos.
2. Após aprovação, os valores do Figma são extraídos e registrados em `css/variables.css`.
3. Só então o código HTML/CSS/JS é escrito, usando os tokens como fonte da verdade.
4. Nunca o contrário: código não define design aqui.

## Estrutura de pastas

```
guipetav.github.io/
├── archive/              # Versão anterior do site (preservada, não editar)
├── assets/
│   ├── fonts/            # Fontes locais (se houver)
│   ├── icons/            # Ícones SVG
│   └── images/           # Imagens do portfólio
├── css/
│   ├── reset.css         # Reset moderno e leve
│   ├── variables.css     # Tokens de design (cores, tipografia, espaçamentos)
│   ├── base.css          # Estilos base globais
│   ├── layout.css        # Classes de layout (container, grid, seções)
│   ├── components.css    # Componentes reutilizáveis (botão, card, nav)
│   └── utilities.css     # Utilitários (sr-only, espaçamentos)
├── js/
│   └── main.js           # JavaScript vanilla, carregado com defer
├── projetos/             # Páginas individuais de projetos (futuro)
├── .gitignore
├── index.html            # Página principal
└── README.md
```

## Como rodar localmente

Não há dependências. Basta abrir o arquivo diretamente:

```bash
# Opção 1 — abrir direto no navegador
open index.html

# Opção 2 — servidor local simples com Python
python3 -m http.server 3000
# acesse http://localhost:3000

# Opção 3 — Live Server (extensão do VS Code)
# Instale a extensão "Live Server" e clique em "Go Live"
```

## Checklist de acessibilidade

- [ ] Contraste mínimo de 4.5:1 para texto normal
- [ ] Alt text em todas as imagens informativas
- [ ] Foco visível em todos os elementos interativos
- [ ] Landmarks semânticos (`header`, `main`, `nav`, `footer`)
- [ ] Headings em ordem hierárquica (h1 → h2 → h3)
- [ ] Labels em todos os campos de formulário
- [ ] Testar com leitor de tela (VoiceOver / NVDA)

## Checklist de performance

- [ ] Imagens no formato WebP / AVIF
- [ ] Fontes externas com `preconnect` e `display=swap`
- [ ] CSS crítico inline (quando necessário)
- [ ] JS carregado com `defer`
- [ ] Lighthouse score ≥ 90 em todas as categorias

## Tecnologias

- **HTML5** semântico
- **CSS3** com variáveis nativas e layout moderno
- **JavaScript** vanilla, sem frameworks
- **GitHub Pages** para hospedagem estática
