const boton=document.getElementById("toggleCV");
const detalles=document.getElementById("cvDetalles");

boton.addEventListener("click",()=>{
detalles.classList.toggle("oculto");
boton.textContent=detalles.classList.contains("oculto")?"Equip Loadout":"Unequip Loadout"
});

const crosshair=document.getElementById("crosshair");

document.addEventListener("mousemove",e=>{
crosshair.style.left=e.clientX+"px";
crosshair.style.top=e.clientY+"px"
});

const muzzle=document.getElementById("muzzle-flash");

document.addEventListener("click",e=>{
muzzle.style.left=e.clientX+"px";
muzzle.style.top=e.clientY+"px";
muzzle.style.opacity="1";
muzzle.style.transform="translate(-50%, -50%) scale(1.4) rotate("+(Math.random()*30-15)+"deg)";
setTimeout(()=>{
muzzle.style.opacity="0";
muzzle.style.transform="translate(-50%, -50%) scale(0)"
},70)
});