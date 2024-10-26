//Encontrar Elemento: Crie uma função que receba um array e um valor e retorne a posição do valor no array, ou -1 se não for encontrado.

let campoTexto = document.getElementById('resultado');
let listaNumeros = [];


for (let i = 0; i < 5; i++) {
    let valor = Number(prompt('Informe um número: '));
    listaNumeros.push(valor);
}

window.alert(`Estes são os valores da lista: ${listaNumeros.sort()}`);

console.log(listaNumeros);

let valorBusca = Number(prompt('Qual dos números você quer saber a posição na lista?'));

let posicao;

for(let i = 0; i < listaNumeros.length; i++){
    if(listaNumeros[i] == valorBusca){
        posicao = i;
    }
}

if (posicao !== -1) {
    campoTexto.innerHTML += `<br>O número que você pediu está na posição: ${posicao + 1} da lista.`;
} else {
    campoTexto.innerHTML += `<br>O número não foi encontrado na lista.`;
}

