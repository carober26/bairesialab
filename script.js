// Script para manejar navegación y funcionalidad del sitio

// Efecto de scroll para la navegación
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const floatingLogo = document.querySelector('.floating-logo');
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    // Mostrar/ocultar logo flotante según scroll
    if (scrollPosition > 300) {
        floatingLogo.classList.add('visible');
    } else {
        floatingLogo.classList.remove('visible');
    }
});

// Efecto de scroll suave para navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            if (window.innerWidth <= 768) {
                document.querySelector('.nav-links').classList.remove('nav-active');
            }
        }
    });
});

// Funcionalidad para menú móvil
const setupMobileMenu = () => {
    if (!document.querySelector('.menu-toggle')) {
        const nav = document.querySelector('nav');
        const menuToggle = document.createElement('button');
        menuToggle.className = 'menu-toggle';
        menuToggle.innerHTML = '☰';
        nav.appendChild(menuToggle);
        
        menuToggle.addEventListener('click', () => {
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.toggle('nav-active');
        });
    }
};

// Configurar menú móvil en carga y en cambio de tamaño
window.addEventListener('load', () => {
    if (window.innerWidth <= 768) {
        setupMobileMenu();
    }
    animateOnScroll();
});

window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        setupMobileMenu();
    } else {
        document.querySelector('.nav-links').classList.remove('nav-active');
    }
});

// Resaltado de sección activa en navegación
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        
        if (window.pageYOffset >= (sectionTop - 150)) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
    
    animateOnScroll();
});

// Función para animar elementos al entrar en el viewport
function animateOnScroll() {
    const elementsToAnimate = document.querySelectorAll('.feature, .service, .info-card, .company-type, .contact-cta');
    
    elementsToAnimate.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight * 0.85;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Establecer opacidad inicial para animaciones
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.feature, .service, .info-card, .company-type, .contact-cta');
    
    elementsToAnimate.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    setTimeout(() => {
        animateOnScroll();
    }, 300);
});