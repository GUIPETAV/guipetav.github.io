# Portfolio Guilherme Peterlini

Este é o site portfolio pessoal e hub de atividades educacionais de Guilherme Peterlini, hospedado no GitHub Pages.

## 🌐 Como Visualizar o Site

O site está publicado em: **https://guilhermepeterlini.com.br**

Você também pode acessá-lo através de: **https://guipetav.github.io**

## 📋 O Que é Este Projeto?

Este é um site portfolio que serve dois propósitos principais:

1. **Portfolio Profissional**: Apresenta informações sobre Guilherme Peterlini como desenvolvedor e educador
2. **Hub de Atividades**: Centraliza links para atividades do GitHub Classroom de diversas turmas técnicas

## 📁 Estrutura do Projeto

```
guipetav.github.io/
├── index.html              # Página principal do portfolio
├── project-links.html      # Página com links para turmas e disciplinas
├── github-activities.html  # Página com atividades do GitHub Classroom
├── style.css              # Estilos CSS do site
├── script.js              # Scripts JavaScript para interatividade
├── CNAME                  # Configuração de domínio customizado
└── README.md              # Este arquivo
```

## 🚀 Como Usar Este Site Localmente

### Visualização Simples

1. Clone o repositório:
```bash
git clone https://github.com/GUIPETAV/guipetav.github.io.git
cd guipetav.github.io
```

2. Abra o arquivo `index.html` no seu navegador web preferido:
   - **Windows**: Clique duas vezes no arquivo `index.html`
   - **Mac/Linux**: Execute `open index.html` ou `xdg-open index.html`

### Usando um Servidor Local (Recomendado)

Para melhor experiência e evitar problemas com CORS, use um servidor local:

**Opção 1 - Python**:
```bash
# Python 3
python -m http.server 8000

# Acesse http://localhost:8000
```

**Opção 2 - Node.js**:
```bash
# Instale o http-server globalmente
npm install -g http-server

# Execute
http-server

# Acesse http://localhost:8080
```

**Opção 3 - PHP**:
```bash
php -S localhost:8000

# Acesse http://localhost:8000
```

## ✏️ Como Modificar o Conteúdo

### Alterando Informações Pessoais

1. **Nome e Título**: Edite o arquivo `index.html`
   - Linha 16: Nome na navegação
   - Linha 37: Nome no título principal
   - Linha 38: Descrição/subtítulo

2. **Sobre Mim**: Edite o conteúdo da seção `#about` no `index.html` (linhas 50-58)

3. **Projetos**: Modifique os cards de projetos na seção `#projects` (linhas 61-95)

4. **Contato**: Atualize as informações de contato na seção `#contact` (linhas 98-106)

### Adicionando Links de Salas de Aula

Edite o arquivo `project-links.html` para adicionar ou modificar turmas e disciplinas:

```html
<div class="link-card">
    <h3>Nome da Turma</h3>
    <p>Descrição da disciplina</p>
    <a href="URL_AQUI" target="_blank">Acessar Atividades</a>
</div>
```

### Adicionando Atividades do GitHub Classroom

Edite o arquivo `github-activities.html` para adicionar novas atividades:

```html
<div class="activity-card">
    <div class="status-tag status-active">Ativa</div>
    <h3>Nome da Atividade</h3>
    <div class="activity-meta">
        <span><i data-feather="calendar"></i> Prazo: DD/MM/AAAA</span>
        <span><i data-feather="clock"></i> Duração: Xh</span>
    </div>
    <p>Descrição da atividade</p>
    <a href="URL_DO_CLASSROOM" target="_blank" class="activity-link">
        Acessar Atividade
    </a>
</div>
```

### Modificando Estilos

Edite o arquivo `style.css` para alterar:
- Cores do tema
- Fontes e tipografia
- Layout e espaçamento
- Animações

### Atualizando Links de Redes Sociais

No arquivo `script.js` (linhas 46-56), atualize as URLs:
```javascript
document.querySelector('[data-feather="github"]').parentElement.addEventListener('click', () => {
    window.open('https://github.com/SEU_USUARIO', '_blank');
});
```

## 🌍 Como Publicar Alterações

Este site é hospedado no GitHub Pages. Para publicar suas alterações:

1. Faça commit das suas mudanças:
```bash
git add .
git commit -m "Descrição das alterações"
```

2. Envie para o GitHub:
```bash
git push origin main
```

3. As alterações serão publicadas automaticamente em alguns minutos no endereço:
   - https://guilhermepeterlini.com.br
   - https://guipetav.github.io

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura das páginas
- **CSS3**: Estilização e layout responsivo
- **JavaScript**: Interatividade e funcionalidades
- **Feather Icons**: Ícones SVG (https://feathericons.com/)
- **Animate.css**: Animações CSS (https://animate.style/)
- **GitHub Pages**: Hospedagem gratuita

## 📱 Funcionalidades

- ✅ Design responsivo (funciona em desktop, tablet e mobile)
- ✅ Menu mobile
- ✅ Animações suaves
- ✅ Navegação por âncoras
- ✅ Hub centralizado para atividades de múltiplas turmas
- ✅ Sistema de cards para organizar conteúdo
- ✅ Domínio customizado

## 🎓 Para Estudantes

Se você é estudante e chegou aqui procurando por atividades:

1. Acesse a página inicial: https://guilhermepeterlini.com.br
2. Clique em "Salas de aula" na seção de Projetos
3. Encontre sua turma na lista
4. Clique em "Acessar Atividades" para ver as tarefas do GitHub Classroom

## 📞 Suporte

Para dúvidas sobre:
- **Atividades e disciplinas**: Entre em contato através das informações na seção de Contato do site
- **Problemas técnicos com o site**: Abra uma issue neste repositório

## 📄 Licença

© 2025 Guilherme Peterlini. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para educação em tecnologia**
