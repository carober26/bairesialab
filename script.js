// Manejo de scroll y efectos visuales
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const floatingLogo = document.querySelector('.floating-logo');
    
    // Cambiar fondo del header
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    // Mostrar logo flotante
    if (window.scrollY > 300) {
        floatingLogo.classList.add('visible');
    } else {
        floatingLogo.classList.remove('visible');
    }

    animateOnScroll();
});

// Función para animar elementos al entrar en pantalla
function animateOnScroll() {
    const elements = document.querySelectorAll('.feature, .service, .info-card, .company-type');
    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        if (position < window.innerHeight * 0.85) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });
}

// Scroll suave para links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
});