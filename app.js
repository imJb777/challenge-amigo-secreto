//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
  let campoNome = document.getElementById("amigo");
  let nome = campoNome.value;

  if (nome === "") {
    alert("Por favor, digite um nome antes de adicionar !");
    return;
  }
  amigos.push(nome);

  campoNome.value = "";
  mostrarListaAmigos();
}

function atualizarAmigo() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    addAmigo = document.createElement("li");
    addAmigo.textContent = amigos[i];
    lista.appendChild("addAmigo");
  }
}
function mostrarListaAmigos() {
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";

  amigos.forEach((amigo) => {
    let li = document.createElement("li");
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  });
}

function sortearAmigo() {
  let resultado = document.getElementById("resultado");
  let sorteador = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[sorteador];

  resultado.innerHTML = `<li class="sorteado"> Parabéns você tirou ${amigoSorteado}`;
}
