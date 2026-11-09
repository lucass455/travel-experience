const botaoCriar = document.getElementById("botaoCriar");

const retorno = document.getElementById("retorno");

botaoCriar.addEventListener("click", () => {
    retorno.textContent = "Hoje é um ótimo dia para aprender JS";
});

botatoApagar.addEventListener("click", () => {
    retorno.textContent = "";
});