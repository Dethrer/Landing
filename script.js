const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const dropdown = document.getElementById('dropdown');
const dropdownToggle = document.getElementById('dropdownToggle');

menuToggle.addEventListener('click', function () {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    dropdown.classList.remove('active');
});

dropdownToggle.addEventListener('click', function (e) {
    e.stopPropagation();
    dropdown.classList.toggle('active');
});

navLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }

        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        dropdown.classList.remove('active');
    });
});

document.addEventListener('click', function (e) {
    if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }
    if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('active');
    }
});
