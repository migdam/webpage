document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a nav link
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Scroll animations
    const scrollElements = document.querySelectorAll('.skill-level');
    
    const elementInView = (el, percentageScroll = 100) => {
        const elementTop = el.getBoundingClientRect().top;
        const elementHeight = el.getBoundingClientRect().height;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100)
        );
    };
    
    const displayScrollElement = element => {
        element.style.width = element.parentElement.getAttribute('data-width') || element.style.width;
    };
    
    const hideScrollElement = element => {
        element.style.width = '0';
    };
    
    const handleScrollAnimation = () => {
        scrollElements.forEach(el => {
            if (elementInView(el, 90)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        });
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScrollAnimation);
    
    // Initialize animation on page load
    handleScrollAnimation();

    // Form submission (placeholder - would need backend integration)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! This is a demo site, so the form is not actually submitting data.');
            contactForm.reset();
        });
    }
});