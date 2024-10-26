//Unir Dois Arrays: Escreva uma função que receba dois arrays e retorne um único array que contenha todos os elementos de ambos, sem duplicatas.

let campoTexto = document.getElementById('resultado');
let listaUm = [];
let listaDois = [];
let listaTres = [];
let c = 1;
let d = 1;

while(c > 0){
    c = prompt('Digite um numero para salvar na primeira lista...\n Se quiser parar digite 0:'); 
    if(c != 0){  
        listaUm.push(c);
    }
}

while(d > 0){
    d = prompt('Digite um numero para salvar na segunda lista...\n Se quiser parar digite 0:');
    if(d != 0){    
        listaDois.push(d);
    }
}

for(let i = 0; i < listaUm.length; i++){
    listaTres.push(listaUm[i]);
}

for(let i = 0; i < listaDois.length; i++){
    listaTres.push(listaDois[i]);
}

campoTexto.innerHTML += `Primeira lista = ${listaUm}`;
campoTexto.innerHTML += `<br>Segunda lista = ${listaDois}`;
campoTexto.innerHTML += `<br>Terceira lista com os valores das 2  anteriores: ${listaTres}`;