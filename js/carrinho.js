function pegaProd(card) {
  var productCertificar = card.closest(".certificar");
  var productContainer = card.closest(".product");
  var nomeProduto = productContainer.querySelector(".nomeProd").innerText;
  var precoProdutoTexto =
    productContainer.querySelector(".precoProd").innerText;
  var precoProdutoNumerico = parseFloat(
    precoProdutoTexto.replace("R$", "").replace(",", ".")
  );
  var imagemProduto = productContainer
    .querySelector(".imgProdutos")
    .getAttribute("src");

  // criar um card
  const novoProd = document.createElement("div");
  novoProd.setAttribute("id", "novoProd");
  novoProd.setAttribute("class", "cardProd card mb-3");
  novoProd.setAttribute("style", "max-width: 540px;");
  novoProd.setAttribute("data-preco", precoProdutoNumerico.toFixed(2));

  let imgdesativado = ''
  let inputval = 1;
  let inputmin = 1;
  let inputmax = 999;
  let btnlicenca = '';

  if (productCertificar) {//desativa o produto no carrinho
    novoProd.classList.add('cardProd-desativado');
    imgdesativado = 'imgProd-desativado';
    const quantidadezero = document.querySelector('input[name="qtdProd"]');
    inputval = 0;
    inputmin = 0;
    inputmax = 0;

    btnlicenca = `
  <button type="button" class="btn btn-danger btn-certifica" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    Enviar licença
    </button>`;
  }

// mudar a quantidade ao adicionar um produto q ja ta no carrinho

let naoCertificado = document.getElementsByClassName("cardProd-desativado")

const nomeProdCarr = document.getElementsByClassName("nomeProdnovo");
for (var i = 0; i < nomeProdCarr.length; i++) {
  if (nomeProdCarr[i].innerText === nomeProduto) {
    nomeProdCarr[i].parentElement.parentElement.getElementsByClassName("qtdSelecao")[0].value++;
    calcularEExibirValorTotal();
    if (productCertificar) {
      nomeProdCarr[i].parentElement.parentElement.getElementsByClassName("qtdSelecao")[0].value = 0;
    }
    return
  }
  
  console.log(nomeProduto, "ueppa: ", nomeProdCarr[i].innerText,"i: ", i)
}

// const productsCartNames = document.getElementsByClassName("cart-product-title")
// for (var i = 0; i < productsCartNames.length; i++) {
//   if (productsCartNames[i].innerText === productName) {
//     productsCartNames[i].parentElement.parentElement.getElementsByClassName("product-qtd-input")[0].value++
//     updateTotal()
//     return
//   }
// }

  novoProd.innerHTML = `
    <div class="row g-0 carrinhoItem">
      <div class="col-md-3 col-sm-12">
        <img src="${imagemProduto}" class="imgProd img-fluid rounded-start ${imgdesativado}">
      </div>
      <div class="col-md-6 col-sm-8 col-ssm-6 corpoCard">
        <p class="mb-2 nomeProdnovo">${nomeProduto}</p>
        <h6 class="precoProduto">R$ <span>${precoProdutoTexto}</span></h6>
      </div>
      <div class="col-md-3 col-sm-4 col-ssm-6 qtdProd text-end">
        <button id="removeProd" class="deleteIcon material-symbols-outlined mb-1" onclick="removeProd(this)">
          delete
        </button>
        <p class="qtdNome m-0 pb-1">Quantidade:</p>
        <input type="number" name="qtdProd" class="qtdSelecao" value="${inputval}" min="${inputmin}" max="${inputmax}">
      </div>
    </div>
${btnlicenca}
  `;

  // adicionando ao carrinho
  const prodCorpo = document.getElementById("prodCorpo");
  prodCorpo.appendChild(novoProd);

  // Adicionar evento input para calcular o valor total quando a quantidade é alterada
  const inputQuantidade = novoProd.querySelector(".qtdSelecao");
  inputQuantidade.addEventListener("input", () => {
    calcularEExibirValorTotal();
  });

  calcularEExibirValorTotal();
  
  const ativarProd = document.getElementById('remover');

  ativarProd.addEventListener('click', () => {
  const elements = document.querySelectorAll('*');

  // enviar e ativar o produto
  elements.forEach((element) => {
    element.classList.remove('imgProd-desativado', 'cardProd-desativado');
    if (inputval === 0) {
      nomeProdCarr[i].parentElement.parentElement.getElementsByClassName("qtdSelecao")[0].value = 1;
    }
    
    element.min = 1;
    element.max = 999;
    // excluir o botao

    var excluirao = document.querySelector('.btn-certifica');
    var pai = excluirao ? excluirao.parentNode : null;

    if (pai) {
        pai.removeChild(excluirao);
    }
    calcularEExibirValorTotal();
  });
});
 



}

function calcularEExibirValorTotal() {
  const linhas = document.querySelectorAll(".cardProd");
  let valorTotal = 0;

  linhas.forEach((linha) => {
    const precoProduto = parseFloat(linha.getAttribute("data-preco"));
    const quantidade = parseInt(linha.querySelector(".qtdSelecao").value, 10);
    const valorProduto = precoProduto * quantidade;
    valorTotal += valorProduto;
  });

  const valorTotalElement = document.getElementById("valorTotal");
  valorTotalElement.textContent = "R$ " + valorTotal.toFixed(2);
}

function removeProd(button) {
  var excluir = button.closest(".cardProd");
  excluir.parentNode.removeChild(excluir);
  calcularEExibirValorTotal(); // Recalcular o valor total após remover um produto

}

//recarrega a página ao confirmar a compra
function recarregar() {
  location.reload()
}


