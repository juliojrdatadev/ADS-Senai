//Ordenar Array: Escreva uma função que receba um array de números e retorne um novo array ordenado em ordem crescente.

let campoTexto = document.getElementById('resultado');
let listaNumeros = [];
let listaOrdenada1 = [];
let listaOrdenada2 = [];

for (let i = 0; i < 5; i++) {
    let valor = Number(prompt('Informe um número: '));
    listaNumeros.push(valor);
}

console.log('Lista numeros ' +listaNumeros);
let menor = 0;
for (let i = 0; i < listaNumeros.length;i++){
    if(menor == 0){
        menor = listaNumeros[i];
        
    }else if(listaNumeros[i] < menor){
        menor = listaNumeros[i];
        for(let j = 0;j < listaNumeros.length; j++)
            listaOrdenada1.push()
    }
}