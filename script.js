const boton = document.getElementById("toggleCV");
const detalles = document.getElementById("cvDetalles");

boton.addEventListener("click", () => {
  detalles.classList.toggle("oculto");
  boton.textContent = detalles.classList.contains("oculto")
    ? "Equip Loadout"
    : "Unequip Loadout";
});