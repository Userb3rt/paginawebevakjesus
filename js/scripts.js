/* Hamburguesa del MENÚ
Aqui se muestra la hamburguesa a la derecha para dispositivos moviles o
para cuando se quiere hacer la ventana más pequeña
*/

const menu = document.querySelector(".menu");

function toggleMenu() {
  if (menu) {
    menu.classList.toggle("menu-open");
  }
}

/* FORMULARIO USER
Script utilizado para abrir el formulario del usuario. La variable 'menu'
ya está definida en el Menu de arriba, así que aquí ya no hace falta.
*/

const modal = document.getElementById("loginModal");
const zugangLink = document.querySelector("a[id='zunganglogin']");
const closeModalBtn = document.getElementsByClassName("close")[0];

if (zugangLink) {
  zugangLink.onclick = function (event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
    if (modal) {
      modal.style.display = "flex";
    }
    if (menu) {
      menu.classList.toggle("menu-open");
    }
  };
}

// Cerrar el modal cuando se hace clic en la 'x'
if (closeModalBtn) {
  closeModalBtn.onclick = function () {
    if (modal) {
      modal.style.display = "none";
    }
  };
}

// Cerrar el modal cuando se hace clic fuera de él
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
