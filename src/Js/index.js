/* 

OBJETIVO 1 - AVANÇAR PARA O PROXIMO CARTÃO AO CLICAR NA SETA DE AVANÇAR
-passo 1- pegar o elemento html da seta avançar
-passo 2 - identificar o clique do usuario na seta avançar
-passo 3 - buscar o cartão selecionado e esconder
-passo 4 - fazer aparecer o proximo cartão da lista 

OBJETIVO 2 - VOLTAR PARA O CARTÃO ANTERIOR AO CLICAR NA SETA DE VOLTAR
- passo 1 - pegar o elemento html da seta voltar
- passo 2 - identificar o clique do usuario na seta voltar
- passo 3 - buscar o cartão selecionado e esconder
- passo 4 - fazer aparecer o cartão anterior da lista
*/

const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");

btnAvancar.addEventListener("click", function () {
  if (cartaoAtual === cartoes.length - 1) return;

  esconderCartaoSelecionado();

  cartaoAtual++;
  mostrarCartoes();
});

btnVoltar.addEventListener("click", function () {
  if (cartaoAtual === 0) return;
  esconderCartaoSelecionado();
  cartaoAtual--;
  mostrarCartoes();
});

function esconderCartaoSelecionado() {
  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");
}

function mostrarCartoes() {
  cartoes[cartaoAtual].classList.add("selecionado");
}

function mostrarCartoes() {
  cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoSelecionado() {
  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");
}
