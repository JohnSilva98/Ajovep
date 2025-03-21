var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 3) {
    counter = 1;
  }
}, 2500);

function buyProduct(id) {
  event.preventDefault(); // Impede que a ação padrão afete outros links
  window.location.href = `/frontend/pages/product.html?produto=${id}`;
}
// Código para carregar a página de compra
document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const produtoId = params.get("produto");

  const produtos = {
    1: {
      nome: "Camisa 1",
      imagem: "https://encurtador.com.br/KGdGD",
      descricao: "Descrição do Produto 1",
    },
    2: {
      nome: "Camisa 2",
      imagem: "https://encurtador.com.br/vjAP8",
      descricao: "Descrição do Produto 2",
    },
    3: {
      nome: "Camisa 3",
      imagem: "https://encurtador.com.br/YWinX",
      descricao: "Descrição do Produto 3",
    },
  };

  if (produtoId && produtos[produtoId]) {
    document.getElementById("titulo-produto").textContent =
      produtos[produtoId].nome;
    document.getElementById("imagem-produto").src = produtos[produtoId].imagem;
    document.getElementById("descricao-produto").textContent =
      produtos[produtoId].descricao;
  } else {
    document.getElementById("titulo-produto").textContent =
      "Produto não encontrado!";
  }
});
