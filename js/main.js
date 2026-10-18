document.getElementById("anio").textContent = new Date().getFullYear();

document.getElementById("btnMensaje").addEventListener("click", function () {
  document.getElementById("mensaje").textContent =
    "¡JavaScript funciona correctamente! Mi entorno está listo.";
});
