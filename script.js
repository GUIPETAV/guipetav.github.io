document.addEventListener('DOMContentLoaded', function() {
    // Navigation active state
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Animate skill bars
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const animateSkillBars = () => {
        skillBars.forEach(bar => {
            const progress = bar.getAttribute('data-progress');
            bar.style.width = progress + '%';
        });
    };

    // Animate on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('skill-progress')) {
                    animateSkillBars();
                }
                entry.target.classList.add('animate');
            }
        });
    });

    // Observe elements for animation
    document.querySelectorAll('.timeline-item, .specialty-item, .skill-progress').forEach(el => {
        observer.observe(el);
    });

    // Download CV button
    document.querySelector('.btn.primary').addEventListener('click', () => {
        // Add your CV download logic here
        alert('Download CV functionality will be added here');
    });

    // Contact button
    document.querySelector('.btn.secondary').addEventListener('click', () => {
        const contactSection = document.querySelector('#contact');
        contactSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Initialize skill bars animation
    animateSkillBars();
});