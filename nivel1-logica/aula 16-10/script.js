/*
8- Faça um programa que solicite ao usuário para digitar valores numéricos inteiros positivos. Encerre a entrada de dados quando for digitado um número negativo ou zero. Calcule a média dos números positivos digitados.
*/
let num = 0;
let soma = 0;

let media = 0;
let cont = 0;

while(num >= 0){
    let num = parseInt(Number(prompt('Informe um numero INTEIRO e POSITIVO: ')))
    
    if(num <= 0){
        if(soma == 0){
            media = Number(0);
        }else{
            media = soma /cont;
        }   
        break;     
    }else{
        soma = soma + num;
    }
    cont++
}
alert(`A soma total dos numero informados é de ${soma} e a média dos valores é ${media}`) 


