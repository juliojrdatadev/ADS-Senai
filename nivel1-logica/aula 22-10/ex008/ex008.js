//Duplicar Elementos: Crie uma função que receba um array e retorne um novo array onde cada elemento é duplicado.
let campoTexto = document.getElementById('resultado');
let listaUm = [];
let listaDois = [];
let cont = 1;

while(cont > 0){
    cont = prompt('Digite um numero para salvar...\n Se quiser parar digite 0:');   
    listaUm.push(cont);
}

for(let i = 0;i < listaUm.length; i++){
    listaDois.push(listaUm[i]);
    listaDois.push(listaUm[i]);
}

campoTexto.innerHTML += `Primeira lista = ${listaUm}`;
campoTexto.innerHTML += `<br>Segunda lista com valore duplicados: ${listaDois}`;

