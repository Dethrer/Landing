// Menú hamburguesa (móvil)
const ham = document.getElementById('ham');
const nav = document.querySelector('nav');

ham.addEventListener('click', function () {
  nav.classList.toggle('abierto');
});

// Cerrar menú al hacer clic en un enlace
nav.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    nav.classList.remove('abierto');
  });
});
