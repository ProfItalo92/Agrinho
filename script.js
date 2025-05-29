document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('form-message');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o envio padrão do formulário

            // Basic validation
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensagem = document.getElementById('mensagem').value.trim();

            if (nome === '' || email === '' || mensagem === '') {
                displayMessage('Por favor, preencha todos os campos obrigatórios.', 'error');
                return;
            }

            // Simple email format validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                displayMessage('Por favor, insira um e-mail válido.', 'error');
                return;
            }

            // Simulate form submission (in a real scenario, you'd send this to a backend)
            // For a real website, you would use fetch() or XMLHttpRequest to send data to a server
            // Example:
            /*
            fetch('/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nome, email, telefone, assunto, mensagem }),
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    displayMessage('Sua mensagem foi enviada com sucesso! Em breve entraremos em contato.', 'success');
                    contactForm.reset(); // Clear the form
                } else {
                    displayMessage('Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.', 'error');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                displayMessage('Ocorreu um erro de rede. Verifique sua conexão e tente novamente.', 'error');
            });
            */

            // For demonstration purposes:
            displayMessage('Sua mensagem foi enviada com sucesso! Em breve entraremos em contato.', 'success');
            contactForm.reset(); // Limpa o formulário

            console.log('Formulário enviado:', { nome, email, mensagem });
        });
    }

    function displayMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`; // Add success or error class
        formMessage.style.display = 'block'; // Make it visible

        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - (document.querySelector('header').offsetHeight || 0), // Adjust for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
});