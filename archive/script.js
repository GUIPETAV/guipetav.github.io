// Initialize Feather Icons
feather.replace();

// Mobile menu toggle
const menuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
const mobileLinks = document.querySelectorAll('.mobile-menu a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission
const form = document.querySelector('.contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const formObject = Object.fromEntries(formData);
    
    // You can add your form submission logic here
    console.log('Form submitted:', formObject);
    
    // Simple success message
    alert('Message sent successfully!');
    form.reset();
});

// Add social media links functionality
document.querySelector('[data-feather="github"]').parentElement.addEventListener('click', () => {
    window.open('https://github.com/yourusername', '_blank');
});

document.querySelector('[data-feather="linkedin"]').parentElement.addEventListener('click', () => {
    window.open('https://linkedin.com/in/yourusername', '_blank');
});

document.querySelector('[data-feather="mail"]').parentElement.addEventListener('click', () => {
    window.location.href = 'mailto:your.email@example.com';
});