const min = 1
const max = 100
const valorRand = Math.floor(Math.random() * (max - min + 1)) + min

console.log(Number(valorRand))

window.alert('Você tem 10 tentativas para acertar o valor gerado automáico pelo programa.')

let tent
let venceu = ''
for(tent = 1; tent <= 10; tent++){
    let val = window.prompt(`Qua seu palpite?\nTentativa ${tent}: `)

        if(val === null || val.trim() === "" || isNaN(val)){
            window.alert('[ERRO!] Informe um valor.')
            tent = tent - 1
        }
        else if(val < valorRand){
            window.alert('Seu palpite ficou á baixo do valor correto...')
            venceu = 'n'
        }else if(val > valorRand){
            window.alert('Seu palpite ficou á cima do valor correto...')
            venceu = 'n'
        }else{
            venceu = 's'
            break
        }
    }


if(venceu === 's'){
    window.alert(`PARABÉNS! Você ACERTOU o numero é ${valorRand}!\nVocê finalizou o jogo com ${tent} tentativas.`)
}else{
    window.alert(`Infelizmente você esgotou suas tentativas e não acertou o numero, você PERDEU!\nO número correto era ${valorRand}`)
}