document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Gracias por contactarme, te responderé pronto.");
});

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Gracias por contactarme, te responderé pronto.");
});

document.addEventListener("DOMContentLoaded", function () {
  const texto = "¡Hola! Soy Henry";
  const elemento = document.getElementById("maquina-escribir");
  let i = 0;

  function escribir() {
    if (i < texto.length) {
      elemento.textContent += texto.charAt(i);
      i++;
      setTimeout(escribir, 90); // puedes ajustar la velocidad
    }
  }

  escribir();
});
