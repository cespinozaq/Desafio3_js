//Variable Global
let color = "";
//Llamo al elemento desde DOM
divKey = document.getElementById("key");
// Asocio el evento KEYDOWN a todo el documentos
document.addEventListener("keydown", presionarTecla);
//
function presionarTecla(event) {
  const key = event.key;
  if (key === "a") {
    color = "rosado";
    document.getElementById("key").style.backgroundColor = "pink";
  } else if (key === "s") {
    color = "naranjo";
    document.getElementById("key").style.backgroundColor = "orange";
  } else if (key === "d") {
    color = "celeste";
    document.getElementById("key").style.backgroundColor = "lightblue";
  } else if (key === "q") {
    color = "purple";
    crearDiv(color);
  } else if (key === "w") {
    color = "gray";
    crearDiv(color);
  } else if (key === "e") {
    color = "brown";
    crearDiv(color);
  }
}

function crearDiv(color) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("div");
  newDiv.style.backgroundColor = color;
  document.body.appendChild(newDiv);
}
