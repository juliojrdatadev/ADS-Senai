//Inverter um Array: Escreva uma função que inverta um array sem usar o método reverse.

let campoTexto = document.getElementById('resultado');
let listaNumeros = [4,8,10,23,31];

for(let i = 0; i < listaNumeros.length; i++){
    console.log(listaNumeros[i]);
    campoTexto.innerHTML += `<br>${i + 1}º numero: ${listaNumeros[i]}`;
}

campoTexto.innerHTML += `<h1>___________________________ </h1>`;

for(let i = listaNumeros.length-1; i >= 0 ; i--){
    console.log(listaNumeros[i]);
    campoTexto.innerHTML += `<br>${i+1}º numero: ${listaNumeros[i]}`;
}