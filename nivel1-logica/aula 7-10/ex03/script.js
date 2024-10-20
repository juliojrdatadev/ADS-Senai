let compra = 0
let jogos = []
let valorJogos = []
let valor = 0

alert("Bem vindo à loja de jogos!")


while (compra <= 200) {
    let jogo = String(prompt('Informe o nome do jogo que você deseja comprar:'))
    valor = Number(prompt('Informe o valor do jogo:'))
    compra = compra + valor

    if (compra <= 200) {
        jogos.push(jogo)
        valorJogos.push(valor)
    } else {
        alert("Você ultrapassou o limite de R$200!")
    } 
}

let final = Number(compra - valor)

//console.log(jogos)

let res = document.getElementById('resultado')
res.innerHTML += `Você comprou: <br><br>`

let i = 0

while (i < jogos.length) {
    res.innerHTML += `${i + 1} # ${jogos[i]} = R$ ${valorJogos[i].toFixed(2)}<br>`
    i++;
}

res.innerHTML += `<br>Sua compra ficou no valor total de R$ ${final.toFixed(2)}`