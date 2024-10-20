function calculadora(n1,n2,op){
    switch (op) {
    case '+':
        return n1 + n2
        break
    case '-':
        return n1 - n2
        break
    case '/':
        if(n2 == 0){
            return '[ERRO!] Impossivel dividir um valor por 0'
        }else{
            return n1 / n2
        }
        break
    case '*':
        return n1 * n2
        break
    default:
        return '[ERRO!] Digite um operador valido!'
    }
}

let val1 = 30
let val2 = 0
let oper = '/'

console.log(calculadora(val1,val2,oper))