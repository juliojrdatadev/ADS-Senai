//Filtrar Números: Crie uma função que receba um array de números e retorne um novo array apenas com os números pares.

let campoTexto = document.getElementById('resultado');
let listaNumeros = [4,8,10,23,31];
let listaPares = [];

for(let i = 0; i < listaNumeros.length; i++){
    console.log(listaNumeros[i]);

    if(listaNumeros[i] % 2 == 0){
        listaPares.push(listaNumeros[i]);
    }

    console.log(listaPares[i]);
}

campoTexto.innerHTML += `<br>Lista de numeros: ${listaNumeros}`;
campoTexto.innerHTML += `<br>Lista de numero pares: ${listaPares}`;