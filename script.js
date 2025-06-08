// Script para manejar navegación y funcionalidad del sitio moderno

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
                top: targetElement.offsetTop - 80, // Ajuste para el header fijo
                behavior: 'smooth'
            });
            
            // Si estamos en móvil, cerrar el menú después de hacer clic
            if (window.innerWidth <= 768) {
                document.querySelector('.nav-links').classList.remove('nav-active');
            }
        }
    });
});

// Funcionalidad para menú móvil
const setupMobileMenu = () => {
    // Solo crear el botón si no existe
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
    
    // Animación de elementos al cargar la página
    animateOnScroll();
});

window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        setupMobileMenu();
    } else {
        // Asegurarse de que el menú esté visible en escritorio
        document.querySelector('.nav-links').classList.remove('nav-active');
    }
});

// Manejo del formulario de contacto
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        // El formulario se maneja directamente por FormSubmit
        // Agregamos solo la validación del lado del cliente
        contactForm.addEventListener('submit', function(e) {
            // Validación básica de formulario
            let isValid = true;
            const requiredFields = contactForm.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });
            
            // Validación específica para email
            const emailField = contactForm.querySelector('#email');
            if (emailField && emailField.value) {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(emailField.value)) {
                    isValid = false;
                    emailField.classList.add('error');
                }
            }
            
            if (!isValid) {
                // Solo prevenimos el envío si hay errores
                e.preventDefault();
                alert('Por favor, completa todos los campos requeridos correctamente.');
            }
        });
    }
});

// Añadir efecto de resaltado en la navegación según la sección visible
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
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
    
    // Llamar a la función para animar elementos al hacer scroll
    animateOnScroll();
});

// Función para animar elementos al entrar en el viewport
function animateOnScroll() {
    const elementsToAnimate = document.querySelectorAll('.feature, .service, .info-card, .company-type, .contact-form');
    
    elementsToAnimate.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight * 0.85; // 85% del alto de la pantalla
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Establecer opacidad inicial para animaciones
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.feature, .service, .info-card, .company-type, .contact-form');
    
    elementsToAnimate.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Iniciar animaciones después de un breve retraso
    setTimeout(() => {
        animateOnScroll();
    }, 300);
});