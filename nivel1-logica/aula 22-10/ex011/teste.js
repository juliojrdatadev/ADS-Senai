let listaNumeros = [];
let listaOrdenada = [];

for (let i = 0; i < 5; i++) {
    let numero = parseInt(prompt("Informe um número inteiro: "));
    listaNumeros.push(numero);
}

for (let i = 0; i < listaNumeros.length; i++) {
    for (let j = 0; j < listaNumeros.length - 1; j++) {
        if (listaNumeros[j] > listaNumeros[j + 1]) {

            //troca os valores de posição fazendo o bubble sort
            let temp = listaNumeros[j];

            console.log(`let temp <- recebe <- listaNumeros[j${j}] ${listaNumeros[j]}`);

            listaNumeros[j] = listaNumeros[j + 1];  

            console.log(`listaNumeros[j${j}] ${listaNumeros[j]} <- recebe <- listaNumeros[j + 1${j+1}] ${listaNumeros[j + 1]}`);

            listaNumeros[j + 1] = temp;

            console.log(`listaNumeros[j + 1(${j+1})] <- recebe <- temp(${temp})`);
        }
    }
}

// passa os numeros "ordenados" para o novo array ordenado
for (let i = 0; i < listaNumeros.length; i++) {
    listaOrdenada.push(listaNumeros[i]);
    console.log(listaNumeros[i]);
}

console.log("Array original: ", listaNumeros);
console.log("Array ordenado: ", listaOrdenada);
