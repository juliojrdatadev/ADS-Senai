document.addEventListener('DOMContentLoaded', function() {
    let continuar = 's'
    let lista = []
    let duracao = []
    let tempoTotal = 0

    let res = document.getElementById('resultado')
    let durac = document.getElementById('duracao')

    window.alert('Bem vindo a sua PlayList!\nVamos começar a cadastrar suas músicas preferidas...')

    let ind = 1
    while(continuar === 's'){
        let musica = String(prompt(`Informe o nome da ${ind}ª Música:`))
        let tempo = Number(prompt('Informe o tempo de duração da Música: [EX: 3.10]'))

        lista.push(musica)
        duracao.push(tempo)
        tempoTotal = tempoTotal + tempo

        continuar = String(prompt('Adicionar mais Músicas a playlist? [S/N]')).toLowerCase()
        ind++
    }

    for(let i = 0; i < lista.length; i++){
        
        res.innerHTML += `${i+1}ª Música: <strong>${lista[i]}</strong> - Duração: ${minSeg(duracao[i])}<br>`
    }

    durac.innerHTML += `<br> Duração total da playlist: ${horaMin(tempoTotal)}`

    function horaMin(duracaoTotal) {
        const horas = Math.floor(duracaoTotal / 60)

        const minutos = Math.round(duracaoTotal % 60)

        return `${horas} hora(s) e ${minutos} minutos(s).`
    }


    function minSeg(dura) {
        let minutos = Math.floor(dura)
        let segundos = Math.round((dura - minutos) * 60)

        segundos = Math.round((dura - minutos) * 100)

        if (segundos === 60) {
            segundos = 0
            minutos += 1
        }

        return `${minutos}:${segundos} `
    }
})