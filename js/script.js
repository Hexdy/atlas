// Elementos
const central = document.getElementById("central");
const lista = document.querySelector(".lista");
const logo = document.querySelector(".logo");
const botones = document.querySelectorAll(".item");

// Obtener componente
function obtenerComponente(nombre) {
  switch (nombre) {
    case "resistor":
      return htmlResistor;
    case "capacitor":
      return htmlCapacitor;
    case "inductor":
      return htmlInductor;
    case "diodo":
      return htmlDiodo;
    case "led":
      return htmlLed;
    case "bjt":
      return htmlBjt;
    case "mosfet":
      return htmlMosfet;
    case "chip":
      return htmlChip;
    default:
      return "";
  }
}

// Mostrar componente
function mostrarComponente(nombre) {
  central.innerHTML = obtenerComponente(nombre);
}

// Marcar boton activo
function marcarActivo(botonElegido) {
  botones.forEach(function (boton) {
    boton.classList.remove("activo");
  });
  botonElegido.classList.add("activo");
}

// Elegir componente
function elegirComponente(event) {
  const boton = event.target;
  const nombre = boton.getAttribute("data-componente");

  mostrarComponente(nombre);
  marcarActivo(boton);

  if (window.innerWidth <= 769) {
    lista.classList.add("cerrada");
  }
}

// Abrir y cerrar lista
function alternarLista() {
  lista.classList.toggle("cerrada");
}

// Eventos
botones.forEach(function (boton) {
  boton.addEventListener("click", elegirComponente);
});

logo.addEventListener("click", alternarLista);

// Inicio
mostrarComponente("resistor");
