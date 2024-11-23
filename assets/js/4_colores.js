const divAzul = document.querySelector("#azul");
const divRojo = document.querySelector("#rojo");
const divVerde = document.querySelector("#verde");
const divAmarillo = document.querySelector("#amarillo");

function cambiarColor(event) {
  event.target.style.backgroundColor = "black";
}
divAzul.addEventListener("click", cambiarColor);
divRojo.addEventListener("click", cambiarColor);
divVerde.addEventListener("click", cambiarColor);
divAmarillo.addEventListener("click", cambiarColor);
