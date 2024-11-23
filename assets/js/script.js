function pintar(ele, color = "green") {
  ele.style.backgroundColor = color;
}

const ele = document.getElementById("ele1");
ele.addEventListener("click", function () {
  pintar(ele, "yellow");
});

pintar(ele); // Opcional: pinta el elemento de verde por defecto
