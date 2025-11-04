# 🔐 Tela de Login Moderna

Uma interface de login moderna, responsiva e acessível, construída com HTML, CSS e JavaScript puros. O projeto implementa boas práticas de UX/UI e acessibilidade.

![Preview da tela de login](https://via.placeholder.com/600x400/051126/e6f6f9?text=Login+Preview)

## ✨ Características

- 🎨 Design moderno com gradientes e efeitos de vidro (glassmorphism)
- 📱 Layout totalmente responsivo
- ♿ Acessibilidade incorporada (ARIA, suporte a teclado)
- 🔒 Toggle de visibilidade da senha
- ✅ Validação de formulário com feedback visual
- 🌈 Temas com variáveis CSS
- 🚀 Performance otimizada (sem dependências)

## 🏗️ Estrutura do Projeto

```
login/
├── index.html          # Estrutura principal
├── css/
│   └── style.css      # Estilos e temas
└── js/
    └── script.js      # Lógica e interatividade
```

## 💻 Tecnologias Utilizadas

- **HTML5**
  - Formulários semânticos
  - Atributos ARIA para acessibilidade
  - Validação nativa de campos
  
- **CSS3**
  - Variáveis CSS (custom properties)
  - Flexbox para layout
  - Glassmorphism com backdrop-filter
  - Gradientes e sombras modernas
  - Transições e animações suaves
  
- **JavaScript**
  - Validação de formulário
  - Gestão de estado do toggle de senha
  - Feedback interativo
  - Suporte a navegação por teclado

## 🎨 Customização

### Variáveis CSS

O tema pode ser facilmente customizado através das variáveis CSS no `:root`:

```css
:root {
    --max-width: 420px;
    --radius: 14px;
    --text: #e6f6f9;
    --muted: #b6c7cc;
    --accent: #00d4ff;
    --danger: #ff7b7b;
    --bg-gradient-1: #051126;
    --bg-gradient-2: #08253a;
}
```

## 🔧 Componentes Principais

### Input de Senha com Toggle

```html
<div style="position:relative">
    <label for="password">Senha</label>
    <div class="input">
        <input id="password" name="password" type="password"
            placeholder="••••••••" required minlength="6"
            autocomplete="current-password">
        <button type="button" class="show-pass"
            aria-pressed="false"
            id="togglePass">Mostrar</button>
    </div>
</div>
```

### Sistema de Feedback

O sistema de feedback é construído dinamicamente via JavaScript e estilizado para mostrar estados de erro/sucesso:

```css
.form-feedback {
    margin-top: 10px;
    font-size: 13px;
    padding: 10px 12px;
    border-radius: 8px;
}

.form-feedback.error { 
    color: var(--danger); 
    background: rgba(255, 123, 123, 0.06); 
}

.form-feedback.success { 
    color: #072; 
    background: rgba(0, 212, 255, 0.06); 
}
```

## 📱 Responsividade

O layout se adapta automaticamente a diferentes tamanhos de tela:

```css
@media (max-width:420px) {
    body { padding: 18px }
    .container { padding: 18px }
    .logo { 
        width: 48px;
        height: 48px 
    }
}
```

## 🚀 Como Usar

1. Clone este repositório
2. Abra o arquivo `index.html` em um navegador moderno
3. Para desenvolvimento:
   - Edite `style.css` para customizar aparência
   - Modifique `script.js` para alterar comportamentos
   - Ajuste `index.html` para estrutura

## ⚙️ Funcionalidades JavaScript

### Toggle de Senha

```javascript
function togglePassword() {
    if (!pass || !toggle) return;
    const isPassword = pass.type === 'password';
    pass.type = isPassword ? 'text' : 'password';
    toggle.setAttribute('aria-pressed', String(!isPassword));
    toggle.textContent = isPassword ? 'Ocultar' : 'Mostrar';
}
```

### Validação e Feedback

O formulário implementa:
- Validação nativa HTML5
- Feedback visual e textual
- Prevenção de submissão inválida
- Simulação de requisição

## 🔍 Boas Práticas Implementadas

1. **Acessibilidade**
   - Labels semânticos
   - ARIA attributes
   - Feedback por teclado
   - Mensagens de erro claras

2. **Segurança**
   - Validação client-side
   - Autocomplete apropriado
   - Sanitização de inputs

3. **UX/UI**
   - Feedback visual imediato
   - Estados hover/focus claros
   - Animações suaves
   - Mensagens amigáveis

---
