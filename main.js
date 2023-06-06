import info from "./info.json" assert { type: "json" };

document.getElementById("info-img").style.height = "300px";

for (let e of info) {
  let table = document.getElementById("p-table");
  let element = document.createElement("div");
  element.textContent = e.titulo;
  element.className = "element";

  element.addEventListener("click", () => {
    document.getElementById("info-title").textContent = e.titulo;
    document.getElementById("info-description").textContent =
      e.descripcion.toLowerCase();
    document.getElementById("info-box").style.display = "block";
    document.getElementById("info-img").src = e.img;
  });
  table.appendChild(element);
}

document.getElementById("cerrar").addEventListener("click", () => {
  document.getElementById("info-box").style.display = "none";
});
