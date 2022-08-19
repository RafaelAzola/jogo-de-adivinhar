let nick = document.querySelector('#nick')
let numeroEscolhido = document.querySelector('#numero')
let intervalo = document.querySelector('#intervalo')
let botaoComecar = document.querySelector('#comecar')
let botaoJogar = document.querySelector('#jogar')
let loteria = document.querySelector('#loteria')
let contagem = document.querySelector('#contagem')
let numeroSorteado = 0, tentativas = 2

// Desabilita o botão "começar" caso não tenha nada escrito
const habilitarBotaoComcar = () => {
    if (nick.value.length == 0) {
      botaoComecar.disabled = true;
      botaoComecar.style.backgroundColor = "#7c7f82";
    }
    else {
      botaoComecar.disabled = false;
      botaoComecar.style.backgroundColor = "#1180E6";
    }
};

// Função para gerar um numero aleatorio baseado em sua escolha de intervalo
const comecarJogo = () => {
    let dificuldade = intervalo.value
    let min = 1, max = 0;

    // Gera um numero aleatorio entre o valor minimo e maximo, excluindo o numero de valor mais alto
    const randomizer = (min, max) => {
        return Math.random() * (max - min) + min;
    }

    // define o valor maximo para o numero gerado com base na opção escolhida
    switch(dificuldade){
        case 'opcao1':
            max = 11
        break;

        case 'opcao2':
            max = 101
        break;

        case 'opcao3':
            max = 201
        break;
    }

    // Habilita o botão "jogar" apenas depois de começar o jogo
    const habilitarBotaoJogar = () => {
        if (nick.value.length == 0) {
          botaoJogar.disabled = true;
          botaoJogar.style.backgroundColor = "#7c7f82";
        }
        else {
          botaoJogar.disabled = false;
          botaoJogar.style.backgroundColor = "#F2890D";
        }
    };

    // chama a função e aplica com o numero maximo definido
    numeroSorteado = randomizer(min,max).toFixed()
    habilitarBotaoJogar()
}

// Compara o numero escolhido pelo usuario com o numero gerado de forma aleatoria
const validacao = (numero,sorteado) => {
    if(numero == sorteado){
        loteria.innerHTML = 'Parabéns, você conseguiu adivinhar!'
        contagem.innerHTML = ''
        numeroEscolhido.value = ''
        numeroEscolhido.disabled = true;
        botaoJogar.disabled = true;
        botaoJogar.style.backgroundColor = "#7c7f82";

    }else{
        if(numero > sorteado){
            loteria.innerHTML = 'Tente um número menor...'
        }
        if(numero < sorteado){
            loteria.innerHTML = 'Tente um número maior...'
        }
        if(tentativas > 0){
            contagem.innerHTML = `Você ainda tem ${tentativas} tentativas`
        }
        if(tentativas == 0){
            loteria.innerHTML = 'Que pena, você não conseguiu adivinhar'
            contagem.innerHTML = `O numero era ${numeroSorteado}`
            numeroEscolhido.value = ''
            numeroEscolhido.disabled = true;
            botaoJogar.disabled = true;
            botaoJogar.style.backgroundColor = "#7c7f82";
        }
    }
}

// Chama a função habilitar botao ao digitar qualquer coisa em "nick"
nick.addEventListener('input', habilitarBotaoComcar)

// Ao clicar em começar, altera o nome "jogador" para o nome escolhido pelo usuario, ao mesmo tempo que chama a função para começar o jogo e desabilita o botão "começar"
botaoComecar.onclick = () => {
    jogador.innerHTML = nick.value;
    comecarJogo()
    console.log('o numero é '+numeroSorteado);
    nick.value = '';
    nick.disabled = true;
    botaoComecar.disabled = true;
    botaoComecar.style.backgroundColor = "#7c7f82";
    intervalo.disabled = true;
}

// Chama a função para comparar o numero escolhido com o numero gerado, ao mesmo tempo desconta tentativas para cada uso
botaoJogar.onclick = () => {
    validacao(numeroEscolhido.value,numeroSorteado)
    tentativas -= 1
}