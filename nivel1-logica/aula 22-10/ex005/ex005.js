//Contar Ocorrências: Dado um array com números, conte quantas vezes um número específico aparece no array.

let campoTexto = document.getElementById('resultado');
let listaNumeros = [4,5,8,12,10,23,31,31,6,7,8,9,10,12,30,41,8,10,23,31];
let valor = 8;
let cont = 0;

for(let i = 0; i < listaNumeros.length; i++){
    console.log(listaNumeros[i]);

    if(listaNumeros[i] == valor){
        cont++
    }
}

campoTexto.innerHTML += `<h1>Números existentes na lista: ${listaNumeros}</h1>`;
campoTexto.innerHTML += `<h1>Menor para conferência: ${valor}</h1>`;
campoTexto.innerHTML += `<h1>Quantidade de vezes que o número ${valor} aparece na lista: ${cont}</h1>`;