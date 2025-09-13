// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar todas las funcionalidades
    initFormValidation();
    initAnimationsOnScroll();
    initHeaderEffects();
    initFormSubmission();
    initSmoothScrolling();
});

// Validación del formulario en tiempo real
function initFormValidation() {
    const form = document.getElementById('contactForm');
    const inputs = form.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
        // Validación al perder el foco
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        // Limpiar errores al escribir
        input.addEventListener('input', function() {
            clearFieldError(this);
        });
    });
}

// Validar un campo específico
function validateField(field) {
    const formGroup = field.parentElement;
    const fieldName = field.name;
    const fieldValue = field.value.trim();
    
    // Limpiar estados previos
    clearFieldError(field);
    
    // Validaciones específicas
    let isValid = true;
    let errorMessage = '';
    
    switch(fieldName) {
        case 'nombre':
            if (fieldValue.length < 2) {
                isValid = false;
                errorMessage = 'El nombre debe tener al menos 2 caracteres';
            } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(fieldValue)) {
                isValid = false;
                errorMessage = 'El nombre solo puede contener letras y espacios';
            }
            break;
            
        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(fieldValue)) {
                isValid = false;
                errorMessage = 'Por favor ingresa un email válido';
            }
            break;
            
        case 'mensaje':
            if (fieldValue.length < 10) {
                isValid = false;
                errorMessage = 'El mensaje debe tener al menos 10 caracteres';
            }
            break;
    }
    
    // Aplicar estado visual
    if (!isValid) {
        showFieldError(field, errorMessage);
    } else {
        showFieldSuccess(field);
    }
    
    return isValid;
}

// Mostrar error en un campo
function showFieldError(field, message) {
    const formGroup = field.parentElement;
    formGroup.classList.add('error');
    formGroup.classList.remove('success');
    
    // Crear o actualizar mensaje de error
    let errorElement = formGroup.querySelector('.error-message');
    if (!errorElement) {
        errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        formGroup.appendChild(errorElement);
    }
    
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

// Mostrar éxito en un campo
function showFieldSuccess(field) {
    const formGroup = field.parentElement;
    formGroup.classList.add('success');
    formGroup.classList.remove('error');
    
    const errorElement = formGroup.querySelector('.error-message');
    if (errorElement) {
        errorElement.style.display = 'none';
    }
}

// Limpiar error de un campo
function clearFieldError(field) {
    const formGroup = field.parentElement;
    formGroup.classList.remove('error', 'success');
    
    const errorElement = formGroup.querySelector('.error-message');
    if (errorElement) {
        errorElement.style.display = 'none';
    }
}

// Manejo del envío del formulario
function initFormSubmission() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validar todos los campos
        const inputs = form.querySelectorAll('input, textarea');
        let isFormValid = true;
        
        inputs.forEach(input => {
            if (!validateField(input)) {
                isFormValid = false;
            }
        });
        
        if (isFormValid) {
            submitForm(form);
        } else {
            // Hacer scroll al primer error
            const firstError = form.querySelector('.error');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    });
}

// Simular envío del formulario
function submitForm(form) {
    const submitBtn = form.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    
    // Cambiar texto del botón
    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;
    
    // Simular envío (aquí conectarías con tu backend)
    setTimeout(() => {
        showSuccessMessage();
        form.reset();
        
        // Limpiar todos los estados de validación
        const formGroups = form.querySelectorAll('.form-group');
        formGroups.forEach(group => {
            group.classList.remove('error', 'success');
        });
        
        // Restaurar botón
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
}

// Mostrar mensaje de éxito
function showSuccessMessage() {
    const form = document.getElementById('contactForm');
    
    // Crear mensaje de éxito si no existe
    let successElement = form.querySelector('.success-message');
    if (!successElement) {
        successElement = document.createElement('div');
        successElement.className = 'success-message';
        form.insertBefore(successElement, form.firstChild);
    }
    
    successElement.textContent = '¡Mensaje enviado con éxito! Te contactaremos pronto.';
    successElement.style.display = 'block';
    
    // Hacer scroll al mensaje
    successElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Ocultar mensaje después de 5 segundos
    setTimeout(() => {
        successElement.style.display = 'none';
    }, 5000);
}

// Animaciones al hacer scroll
function initAnimationsOnScroll() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Agregar animaciones a elementos
    const animateElements = document.querySelectorAll(
        '.contact-form, .contact-info-card, .map-container, .footer-contact-item'
    );
    
    animateElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// Efectos del header
function initHeaderEffects() {
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(45, 74, 62, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = '#2d4a3e';
            header.style.backdropFilter = 'none';
        }
    });
}

// Navegación suave
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Efectos adicionales para la página de contacto
function initContactPageEffects() {
    // Efecto hover en items de contacto
    const contactItems = document.querySelectorAll('.contact-item, .footer-contact-item');
    
    contactItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
    
    // Efecto de escritura en el título del hero
    const heroTitle = document.querySelector('.hero-content h1');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typeWriter = setInterval(() => {
            heroTitle.textContent += text.charAt(i);
            i++;
            if (i >= text.length) {
                clearInterval(typeWriter);
            }
        }, 100);
    }
}

// Funciones de utilidad
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function sanitizeInput(input) {
    return input.trim().replace(/<[^>]*>/g, '');
}

// Función para copiar información de contacto al clipboard
function copyToClipboard(text, element) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            showCopyFeedback(element);
        });
    } else {
        // Fallback para navegadores antiguos
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showCopyFeedback(element);
    }
}

// Mostrar feedback cuando se copia texto
function showCopyFeedback(element) {
    const originalText = element.textContent;
    element.textContent = '¡Copiado!';
    element.style.color = '#27ae60';
    
    setTimeout(() => {
        element.textContent = originalText;
        element.style.color = '';
    }, 2000);
}

// Inicializar efectos adicionales cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    initContactPageEffects();
    
    // Hacer que los elementos de contacto sean clicables para copiar
    const contactTexts = document.querySelectorAll('.contact-text, .footer-contact-item div:last-child');
    contactTexts.forEach(text => {
        if (