import info from "./info.json" assert { type: "json" };

document.getElementById("info-img").style.height = "300px";
let contador = 1;
for (let e of info) {
  let table = document.getElementById("p-table");

  let general = document.createElement("div");
  general.className = "element";

  let title = document.createElement("div");
  title.style.fontSize = "0.6rem"
  title.style.textAlign= "left"
  title.textContent = contador + "";

  let element = document.createElement("div");

  element.textContent =e.titulo.charAt(0).toUpperCase() + e.titulo.slice(1).toLowerCase(); 

  general.addEventListener("click", () => {
    document.getElementById("info-title").textContent = e.titulo.charAt(0).toUpperCase() + e.titulo.slice(1).toLowerCase();
    document.getElementById("info-description").textContent =
      e.descripcion;
    document.getElementById("info-box").style.display = "block";
    document.getElementById("info-img").src = e.img;
  });

  general.appendChild(title);
  general.appendChild(element);
  table.appendChild(general);
  contador += 1;
}

document.getElementById("cerrar").addEventListener("click", () => {
  document.getElementById("info-box").style.display = "none";
});
