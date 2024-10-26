let campoTexto = document.getElementById('resultado');
let listaNumeros = [4,8,10,23,31];
let soma = 0;

for(let i = 0; i < listaNumeros.length; i++){
    console.log(listaNumeros[i]);
    campoTexto.innerHTML += `<h1>${i + 1}º número: ${listaNumeros[i]}</h1>`;;
    campoTexto.innerHTML += `<h1>Soma = ${soma += listaNumeros[i]}</h1>`;
}