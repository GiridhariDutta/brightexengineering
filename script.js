document.addEventListener('DOMContentLoaded', () => {
    
    // --- Custom Cursor ---
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorGlow = document.querySelector('.cursor-glow');
    
    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;
        
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
        
        // Slightly delay the glow for smooth follow effect
        cursorGlow.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    // Add hover states for cursor
    const interactiveElements = document.querySelectorAll('a, button, .gallery-item');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
    });

    // --- Dynamic Gallery Generation ---
    // The images are named 1.webp to 15.webp
    // Let's create titles dynamically to look professional
    const galleryContainer = document.getElementById('gallery-container');
    const titles = [
        "Precision Long Bar Grinding",
        "Centerless Machining Process",
        "High-Tolerance Steel Components",
        "Industrial Shaft Manufacturing",
        "Advanced Grinding Equipment",
        "Surface Finishing Station",
        "Automated Bar Processing",
        "Heavy Machinery Setup",
        "Quality Control Instruments",
        "Micro-Precision Tooling",
        "Raw Material Stockpile",
        "Engineered Metal Parts",
        "Polishing & Finishing",
        "CNC Integration",
        "Finished Component Batch"
    ];

    if (galleryContainer) {
        for (let i = 1; i <= 15; i++) {
            const title = titles[i-1] || `Machinery Showcase ${i}`;
            const itemHtml = `
                <div class="gallery-item reveal">
                    <img src="assets/images/${i}.webp" alt="${title}" loading="lazy">
                    <div class="gallery-overlay">
                        <h3 class="gallery-title">${title}</h3>
                    </div>
                </div>
            `;
            galleryContainer.insertAdjacentHTML('beforeend', itemHtml);
        }
    }

    // --- Scroll Reveal Animations ---
    const reveals = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;
        
        reveals.forEach(reveal => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger instantly on load

    // --- Navbar Background on Scroll ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- On Load Entrance Animations ---
    setTimeout(() => {
        document.querySelectorAll('.hidden-onload').forEach(el => {
            el.classList.add('load-reveal');
        });
    }, 100);
});
