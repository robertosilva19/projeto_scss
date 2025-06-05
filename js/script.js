document.addEventListener('DOMContentLoaded', () => {

    // 1. Inicialização do AOS (Animate On Scroll)
    AOS.init({
        duration: 800, // Duração da animação em ms
        once: true,    // Animação acontece apenas uma vez
        offset: 50,    // Offset (em px) em relação ao ponto original de gatilho
    });

    // 2. Smooth Scrolling para links da navegação e botão "Quero Relaxar"
    const smoothScrollLinks = document.querySelectorAll('a.smooth-scroll');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            const targetElement = document.querySelector(href);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    const smoothScrollButton = document.querySelector('.smooth-scroll-btn');
    if (smoothScrollButton) {
        smoothScrollButton.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSelector = this.getAttribute('data-target');
            const targetElement = document.querySelector(targetSelector);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }


    // 3. Simulação de Backend para Formulário de Desconto
    const formDesconto = document.getElementById('formDesconto');
    if (formDesconto) {
        formDesconto.addEventListener('submit', function (e) {
            e.preventDefault(); // Impede o envio padrão do formulário
            const emailInput = document.getElementById('emailDesconto');
            const email = emailInput.value;

            if (email) {
                // Simulação de envio para o backend
                console.log('Email para desconto:', email);
                alert(`Obrigado por se inscrever, ${email}! Descontos e novidades serão enviados em breve.`);
                emailInput.value = ''; // Limpa o campo
            } else {
                alert('Por favor, insira um email válido.');
            }
        });
    }

    // 4. Simulação de Backend para Formulário de Contato
    const formContato = document.getElementById('formContato');
    if (formContato) {
        formContato.addEventListener('submit', function (e) {
            e.preventDefault(); // Impede o envio padrão do formulário

            const nome = document.getElementById('nomeContato').value;
            const email = document.getElementById('emailContato').value;
            const telefone = document.getElementById('telefoneContato').value;
            const mensagem = document.getElementById('mensagemContato').value;

            if (nome && email && mensagem) {
                // Simulação de envio para o backend
                console.log('Dados do formulário de contato:', { nome, email, telefone, mensagem });
                alert(`Olá ${nome}, sua mensagem foi recebida! Entraremos em contato em breve pelo email ${email}.`);
                formContato.reset(); // Limpa o formulário
            } else {
                alert('Por favor, preencha todos os campos obrigatórios (Nome, Email, Mensagem).');
            }
        });
    }

    // Outras interações ou animações podem ser adicionadas aqui
    // Exemplo: animação sutil no hover dos cards de serviço
    const cards = document.querySelectorAll('#servico .card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 12px 24px rgba(0,0,0,0.15)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 6px 12px rgba(0,0,0,0.1)'; // Ou o valor original do seu CSS
        });
    });

});