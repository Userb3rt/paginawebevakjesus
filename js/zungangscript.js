// Obtener los elementos del DOM
const modal = document.getElementById("loginModal");
const menu = document.querySelector(".menu");
const zugangLink = document.querySelector("a[id='zunganglogin']");
const closeModalBtn = document.getElementsByClassName("close")[0];

// Abrir el modal cuando se hace clic en "Zugang"
zugangLink.onclick = function (event) {
  event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
  modal.style.display = "block";
  menu.classList.toggle("menu-open");
};

// Cerrar el modal cuando se hace clic en la 'x'
closeModalBtn.onclick = function () {
  modal.style.display = "none";
};

// Cerrar el modal cuando se hace clic fuera de él
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
function toggleMenu() {
  menu.classList.toggle("menu-open");
}
