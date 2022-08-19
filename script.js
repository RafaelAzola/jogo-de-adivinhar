let nick = document.querySelector('#nick')
let numeroEscolhido = document.querySelector('#numero')
let intervalo = document.querySelector('#intervalo')
let botaoComecar = document.querySelector('#comecar')
let botaoJogar = document.querySelector('#jogar')
let loteria = document.querySelector('#loteria')
let contagem = document.querySelector('#contagem')
let numeroSorteado = 0, tentativas = 2

const comecarJogo = () => {
    let dificuldade = intervalo.value
    let min = 1, max = 0;

    const randomizer = (min, max) => {
        return Math.random() * (max - min) + min;
    }

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

    numeroSorteado = randomizer(min,max).toFixed()
}

const validacao = (numero,sorteado) => {
    if(numero == sorteado){
        loteria.innerHTML = 'Parabéns, você conseguiu adivinhar!'
        contagem.innerHTML = ''
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
            loteria.innerHTML = ''
            contagem.innerHTML = 'Que pena, você não conseguiu adivinhar'
        }
    }
}

botaoComecar.onclick = () => {
    jogador.innerHTML = nick.value;
    comecarJogo()
    console.log('o numero é '+numeroSorteado);
}

botaoJogar.onclick = () => {
    validacao(numeroEscolhido.value,numeroSorteado)
    tentativas -= 1
}
