const alerta = document.getElementById("alertaLogin");
const botoes = document.querySelectorAll(".btn-alerta");

botoes.forEach(botao => {
botao.addEventListener("click", () => {
    alerta.style.display = "block";

    setTimeout(() => {
    alerta.style.display = "none";
    }, 3000); 
});
});

// login alerta
  const alertaConstrucao = document.getElementById("alertaConstrucao");
  const botoesEmConstrucao = document.querySelectorAll(".btn-em-construcao");

  botoesEmConstrucao.forEach(botao => {
    botao.addEventListener("click", () => {
      alertaConstrucao.style.display = "block";

      setTimeout(() => {
        alertaConstrucao.style.display = "none";
      }, 2000);
    });
  })
