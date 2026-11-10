const ingresantes = [
  {
    nombre: "Andrea Lucia Lazaro Ventura",
    carrera: "Medicina Humana",
    ciclo: "UNCP 2026-II",
    foto: "images/Lazaro_Ventura_Andrea_Lucia.webp",
  },
  {
    nombre: "Deyvid Andree Barra Oscco",
    carrera: "Ingeniería Civil",
    ciclo: "UNCP 2026-II",
    foto: "images/Barra_Oscco_Deyvid_Andree.webp",
  },
  {
    nombre: "Pamela Lucia Chipana Rojas",
    carrera: "Ing. Química Ambiental",
    ciclo: "UNCP 2026-II",
    foto: "images/Chipana_Rojas_Pamela_Lucia.webp",
  },
  {
    nombre: "Alejandro Miguel Cosme Aguilar",
    carrera: "Ing. Química Industrial",
    ciclo: "UNCP 2026-II",
    foto: "images/Cosme_Aguilar_Alejandro_Miguel.webp",
  },
  {
    nombre: "David Garay Poma",
    carrera: "Antropología",
    ciclo: "UNCP 2026-II",
    foto: "images/Garay_Poma_David.webp",
  },
  {
    nombre: "Juan David Lopez Romero",
    carrera: "Ingeniería Ambiental",
    ciclo: "UNCP 2026-II",
    foto: "images/Lopez_Romero_Juan_David.webp",
  },
];

const contenedor = document.getElementById("contenedorTarjetas");
const buscador = document.getElementById("buscador");

function mostrar(lista) {
  contenedor.innerHTML = "";
  lista.forEach((item) => {
    contenedor.innerHTML += `
      <article class="tarjeta">
        <img src="${item.foto}" alt="${item.nombre}" class="imagen-tarjeta">
        <h3 class="nombre-ingresante">${item.nombre}</h3>
        <p class="carrera">${item.carrera}</p>
        <p class="ciclo">${item.ciclo}</p>
      </article>
    `;
  });
}

buscador.addEventListener("input", () => {
  const texto = buscador.value.toLowerCase();
  const filtrados = ingresantes.filter(
    (item) =>
      item.nombre.toLowerCase().includes(texto) ||
      item.carrera.toLowerCase().includes(texto),
  );
  mostrar(filtrados);
});

mostrar(ingresantes);
