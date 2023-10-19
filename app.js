// let titulo = document.querySelector("h1");

// titulo.innerHTML = "Jogo do numero secreto";

// let paragrafo = document.querySelector("p");

// paragrafo.innerHTML = "Escolha um número entre 1 e 10";

let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroAleatorio = geraNumeroAleatorio();

let tentativas = 1;

console.log(numeroAleatorio);

function verificarChute() {
  let chute = document.querySelector("input").value;

  if (chute == numeroAleatorio) {
    exibirTextoNaTela("h1", "Acertou!");
    exibirTextoNaTela("p", "Você descobriu o número secreto!");

    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;

    alert(mensagemTentativas);

    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (chute > numeroAleatorio) {
      exibirTextoNaTela("h1", "Errou!");
      exibirTextoNaTela("p", `O número é menor que ${chute}`);
    } else {
      exibirTextoNaTela("h1", "Errou!");
      exibirTextoNaTela("p", `O número é maior que ${chute}`);
    }

    tentativas++;
    limparCampo();
  }
}

// Evitar repetição de codigo usando funções:

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

exibirTextoNaTela("h1", "Jogo do numero secreto");
exibirTextoNaTela("p", "Escolha um número entre 1 e 10");

function geraNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

  if (quantidadeDeElementosNaLista == numeroLimite) {
    listaDeNumerosSorteados = [];
  }

  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return geraNumeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
  }
}

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}

// Criando uma função para reduzir a repetição no código.
function exibirMensagemInicial() {
  exibirTextoNaTela("h1", "Jogo do numero secreto");
  exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}

exibirMensagemInicial();

// Função para reiniciar o game.

function newGame() {
  numeroAleatorio = geraNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById("reiniciar").setAttribute("disabled", true);
  console.log(numeroAleatorio);
}
