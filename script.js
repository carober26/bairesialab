// Manejo de Scroll para Header y Logo Flotante
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const floatingLogo = document.querySelector('.floating-logo');
    
    if (window.scrollY > 50) {
        header.style.backgroundColor = "rgba(10, 10, 42, 0.95)";
    } else {
        header.style.backgroundColor = "rgba(10, 10, 42, 0.8)";
    }
    
    if (window.scrollY > 300) {
        floatingLogo.classList.add('visible');
    } else {
        floatingLogo.classList.remove('visible');
    }
});

// Scroll Suave para los links de navegación
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