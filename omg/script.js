// Rolagem suave ao clicar no menu
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute("href"));
    destino.scrollIntoView({ behavior: "smooth" });
  });
});

// Alerta no envio do formulário
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Mensagem enviada com sucesso! Obrigada 💖");
  this.reset();
});
