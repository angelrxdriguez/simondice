const puntuacion = localStorage.getItem("puntuacionFinal");
document.querySelector(".puntosperdido").textContent = puntuacion;


function redirigir() {
  window.location.href = "index.html";
}

document.addEventListener("click", redirigir);
document.addEventListener("keydown", redirigir);