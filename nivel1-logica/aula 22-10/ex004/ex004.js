//Maior e Menor Número: Escreva uma função que receba um array e retorne o maior e o menor número.

let campoTexto = document.getElementById('resultado');
let listaNumeros = [4,8,10,23,31];
let menor = 0;
let maior = 0;

for(let i = 0; i < listaNumeros.length; i++){
    console.log(listaNumeros[i]);

    if(menor == 0 & maior == 0){
        menor = listaNumeros[i];
        maior = listaNumeros[i];
        console.log(`Menor e Maior = ${listaNumeros[i]}`)
    }else if(listaNumeros[i] < menor){
        menor = listaNumeros[i];
        console.log(`Menor = ${listaNumeros[i]}`)
    }else{
        maior = listaNumeros[i];        
        console.log(`Maior = ${listaNumeros[i]}`)
    }
}

campoTexto.innerHTML += `<h1>Números existentes na lista: ${listaNumeros}</h1>`;
campoTexto.innerHTML += `<h1>Menor valor = ${menor}</h1>`;
campoTexto.innerHTML += `<h1>Maior valor = ${maior}</h1>`;