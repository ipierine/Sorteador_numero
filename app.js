function sortear() {
  //Variaveis
  let quantidade = parseInt(document.getElementById("quantidade").value);
  let de = parseInt(document.getElementById("de").value);
  let ate = parseInt(document.getElementById("ate").value);
  //Fim das Variaveis


  //Condição verificando se o numero inicial é maior ou igual ao numero final.
  if (de >= ate) {
    alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
    return;
  }
  // Fim Condição verificando se o numero inicial é maior ou igual ao numero final.

  //Condição verificando se a quantidade de numeros solicitadas é maior que o intervalo.
  if (quantidade > (ate - de + 1)) {
    alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
    return;
  }
  // Fim Condição verificando se a quantidade de numeros solicitadas é maior que o intervalo.

  //Variaveis
  let sorteados = [];
  let numero;
  // fim das variaveis

  //Estrutura de repetição para sortear + de 1 numero
  for (let i = 0; i < quantidade; i++) {
    numero = obterNumeroAleatorio(de, ate);

    //Estrutura de repetição/condição para saber se o numero já foi sorteado
    while (sorteados.includes(numero)) {
      numero = obterNumeroAleatorio(de, ate);
    }
    sorteados.push(numero);
    //Fim - Estrutura de repetição/condição para saber se o numero já foi sorteado
  }
  //Fim - Estrutura de repetição para sortear + de 1 numero

  //Exibir resultado no no texto final
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
  // fim de Exibir resultado no no texto final

  //chamando função de habilitar o botão reiniciar
  alterarStatusBotao();
  //fim - chamando função de habilitar o botão reiniciar
}

//Gerar numero aleatório
function obterNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//Fim de Gerar numero aleatório

//Alterar class no HTML do botão reiniciar
function alterarStatusBotao() {
  let botao = document.getElementById("btn-reiniciar");
  if (botao.classList.contains("container__botao-desabilitado")) {
    botao.classList.remove("container__botao-desabilitado");
    botao.classList.add("container__botao");
  } else {
    botao.classList.remove("container__botao");
    botao.classList.add("container__botao-desabilitado");
  }
}
// Fim Alterar class no HTML do botão reiniciar

//Funçaõ do botão reiniciar
function reiniciar() {
  document.getElementById("quantidade").value = "";
  document.getElementById("de").value = "";
  document.getElementById("ate").value = "";
  document.getElementById(
    "resultado"
  ).innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;
  alterarStatusBotao();
}
//Fim Funçaõ do botão reiniciar
