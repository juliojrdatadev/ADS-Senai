let campoTexto = document.getElementById('resultado');
let listaNumeros = [4,8,10,23,31];

for(let i = 0; i < listaNumeros.length; i++){
    console.log(listaNumeros[i]);
    campoTexto.innerHTML += `<h1>${listaNumeros[i]}</h1>`;
}