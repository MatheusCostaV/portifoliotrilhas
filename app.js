document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const headerLinks = document.getElementById('cabeçalho-link');
    const sobreMimBtn = document.getElementById('sobre-mim-btn');
    const sobreMimSection = document.getElementById('sobre-mim');

    menuToggle.addEventListener('click', function () {
        headerLinks.classList.toggle('active');
    });

    sobreMimBtn.addEventListener('click', function () {
        sobreMimSection.scroll
        sobreMimSection.scrollIntoView({ behavior: 'smooth' });
    });
});

var typed = new Typed(".text span", {
    strings: ["Matheus Costa.", "Web Developer.", "Estudante."],
    typeSpeed: 70,
    backSpeed: 60,
    loop: true
});
