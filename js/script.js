/* =================== Toggle Icon Navbar =================== */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('#nav-menu');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* =================== Scroll Sections Active Link =================== */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.addEventListener("scroll", () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => link.classList.remove('active'));

            let activeLink = document.querySelector(`header nav a[href*="${id}"]`);
            if (activeLink) activeLink.classList.add('active');
        }
    });

    /* Sticky Navbar */
    document.querySelector('header').classList.toggle('sticky', top > 100);

    /* Auto-close mobile menu */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
});

/* =================== Scroll Reveal =================== */
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-image, .skills-card, .project-card, .contact_me', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-content img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/* =================== Typed JS =================== */
const typed = new Typed('.multiple-text', {
    strings: ['Full Stack Developer', 'MERN Stack Developer', 'Backend Specialist', 'AI Enthusiast',"Backend Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    backDelay: 1000,
    loop: true
});

/* =================== GitHub Calendar (Safely Loaded) =================== */
if (window.GitHubCalendar) {
    GitHubCalendar(".calendar", "8309h", {
        responsive: true,
        tooltips: true,
        global_stats: true,
        summary_text: "My GitHub Activity",
        cache: 24,
        month_labels: true,
        week_labels: false,
        svg_class: "github-calendar-svg"
    });
} else {
    console.warn("GitHubCalendar script not found.");
}


/* =================== Resume Download Logging =================== */
document.querySelectorAll('#resume-button-1, #resume-button-2, .resume a')
    .forEach(btn => btn.addEventListener('click', () => console.log("Resume clicked")));

/* =================== Section Visibility Observer =================== */
const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.2 });

sections.forEach(sec => revealObserver.observe(sec));

/* ============================
   AI NEURAL NETWORK BACKGROUND
   ============================ */
window.addEventListener("load", () => {
    const canvas = document.getElementById("neural-net-bg");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let width, height, particles = [];

    function resizeCanvas() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        initParticles();
    }

    window.addEventListener("resize", resizeCanvas);

    function initParticles() {
        const count = Math.floor((width + height) / 25);
        particles = [];

        for (let i = 0; i < count; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                radius: Math.random() * 2 + 1
            });
        }
    }

    function updateParticles() {
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0 || p.x > width) p.vx *= -1;
            if (p.y < 0 || p.y > height) p.vy *= -1;
        });
    }

    function drawNetwork() {
        ctx.clearRect(0, 0, width, height);

        // Draw dots
        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(0,255,200,0.8)";
            ctx.shadowBlur = 12;
            ctx.shadowColor = "#00ffc8";
            ctx.fill();
        });

        // Draw connecting lines
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 140) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(0,255,200, ${1 - dist / 140})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }
        }

        updateParticles();
        requestAnimationFrame(drawNetwork);
    }

    resizeCanvas();
    drawNetwork();
});
