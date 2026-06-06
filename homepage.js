// MENU MOBILE
const menuBtn = document.getElementById('menu-btn');
const navMenu = document.querySelector('.nav-menu');

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        if (section) section.scrollIntoView({ behavior: 'smooth' });
        navMenu.classList.remove('open');
    });
});

// FORMULÁRIO DE CONTATO – CLAUDIA PERSONAL TRAINER
document.getElementById("form-contato").addEventListener("submit", function(e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    const texto = 
        `Olá, meu nome é ${nome}.\n` +
        `Email: ${email}\n` +
        `Mensagem: ${mensagem}`;

    const telefoneCarla = "5591986047531"; // coloque o WhatsApp da Carla aqui
    const url = `https://wa.me/${telefoneCarla}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
});


const toggle = document.getElementById("toggle-theme");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    localStorage.setItem("theme",
        document.body.classList.contains("dark-mode") ? "dark" : "light"
    );
});

// manter tema salvo
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, {
    threshold: 0.15
});

reveals.forEach(el => observer.observe(el));





