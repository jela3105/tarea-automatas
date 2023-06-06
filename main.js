import info from "./info.json" assert { type: "json" };

document.getElementById("info-img").style.height = "300px";
let contador = 1;
for (let e of info) {
  let table = document.getElementById("p-table");
  let element = document.createElement("div");

  element.textContent =e.titulo.charAt(0).toUpperCase() + e.titulo.slice(1).toLowerCase(); 
  element.className = "element";

  element.addEventListener("click", () => {
    document.getElementById("info-title").textContent = e.titulo.charAt(0).toUpperCase() + e.titulo.slice(1).toLowerCase();
    document.getElementById("info-description").textContent =
      e.descripcion;
    document.getElementById("info-box").style.display = "block";
    document.getElementById("info-img").src = e.img;
  });
  table.appendChild(element);
  contador += 1;
}

document.getElementById("cerrar").addEventListener("click", () => {
  document.getElementById("info-box").style.display = "none";
});
