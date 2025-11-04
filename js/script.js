const toggle = document.getElementById('togglePass');
const pass = document.getElementById('password');
const form = document.getElementById('loginForm');
const feedback = document.createElement('div');
feedback.id = 'feedback';
feedback.setAttribute('aria-live', 'polite');
feedback.className = 'form-feedback';

if (form) {
    form.appendChild(feedback);
}

function togglePassword() {
    if (!pass || !toggle) return;
    const isPassword = pass.type === 'password';
    pass.type = isPassword ? 'text' : 'password';
    const pressed = toggle.getAttribute('aria-pressed') === 'true';
    toggle.setAttribute('aria-pressed', String(!pressed));
    toggle.textContent = isPassword ? 'Ocultar' : 'Mostrar';
}

if (toggle) {
    toggle.addEventListener('click', togglePassword);
    toggle.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            togglePassword();
        }
    });
}

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!form.checkValidity()) {
            form.reportValidity();
            const firstInvalid = form.querySelector(':invalid');
            if (firstInvalid) firstInvalid.focus();
            feedback.textContent = 'Por favor, corrija os campos destacados.';
            feedback.classList.remove('success');
            feedback.classList.add('error');
            return;
        }

        const dados = {
            email: form.email.value,
            senha: form.password.value
        };
        console.log('Login (exemplo):', dados);

        feedback.textContent = 'Formulário válido — simulando login...';
        feedback.classList.remove('error');
        feedback.classList.add('success');

        setTimeout(() => {
            feedback.textContent = 'Login simulado com sucesso — redirecionando...';
        }, 900);
    });
}