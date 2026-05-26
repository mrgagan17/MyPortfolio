document.addEventListener("DOMContentLoaded", function() {
    AOS.init({
        duration: 1000,
        once: true
    });

    // Typewriter effect
    const text = "AI & Automation Enthusiast";
    const textElement = document.getElementById("typewriter-text");
    const cursorElement = document.getElementById("typewriter-cursor");
    let i = 0;

    function type() {
        if (i < text.length) {
            textElement.textContent += text.charAt(i);
            i++;
            setTimeout(type, 70); // ~70ms per character
        } else {
            // Typing done → hide cursor
            setTimeout(() => {
                if (cursorElement) cursorElement.style.display = "none";
            }, 300);
        }
    }

    // Start typing after a short delay (e.g., after hero appears)
    setTimeout(type, 800);

    // Smooth scroll for navbar links
    // Smooth scroll for navbar links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        let target;

        if (href === '#') {
            target = document.body; // Scroll to top
        } else {
            target = document.querySelector(href);
        }

        if (target) {
            window.scrollTo({
                top: target === document.body ? 0 : target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            navbar.style.backgroundColor = `rgba(15, 12, 41, ${Math.min(0.9, 0.8 + window.scrollY / 500)})`;
        }
    });
});

// Auto-align arrow: slightly more right & lower
document.addEventListener("DOMContentLoaded", () => {
    const cta = document.querySelector('.cta-button');
    const arrow = document.querySelector('.svg-arrow-left');
    if (!cta || !arrow) return;

    const align = () => {
        const btn = cta.getBoundingClientRect();
        const parent = cta.parentElement.getBoundingClientRect();

        arrow.style.position = 'absolute';
        arrow.style.left = `${btn.right - parent.left + 24}px`;  // +24px right
        arrow.style.top  = `${btn.bottom - parent.top + 14}px`;  // +14px down
    };

    setTimeout(align, 300);
    window.addEventListener('resize', align);
});
