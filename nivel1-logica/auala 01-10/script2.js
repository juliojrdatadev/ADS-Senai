let n1 = Number(prompt('Digite o número que quer multiplicar: '))
let n2 = Number(prompt('Digite quantas vezes deseja multiplicar: '))
tabuada(n1, n2);

function tabuada(num1, num2) {
    for (let i = 1; i <= num2; i++) {
        let resultado = num1 * i;  // Não é necessário usar Number() aqui
        if(parimp(resultado) == 'PAR!'){
            alert(`Número ${num1} x ${i} = ${resultado}`)
        }
    }
}

function parimp(res){
    if(res % 2 == 0){
        return 'PAR!'
    }
    else{
        return 'IMPAR!'
    }
}