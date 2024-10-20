for(let cont = 1; cont <= 10; cont++){
    let numero = Number(window.prompt('Informe um numero inteiro: '))

    let intervalo = []

    let i = 2

    while(i > 1 && i < numero){
        intervalo.push(i)
        i++
    }

    console.log(intervalo)

    let primo = []

    let c = 0
    while(c <= intervalo.length){

        if(numero % intervalo[c] == 0){
            if(!primo.includes(numero)){
                primo.push(numero)
            }        
        }
        c++
    }

    console.log(primo)

    if(primo.length === 0){
        alert(`O Numero ${numero} é Primo`)
        console.log(`O Numero ${numero} é Primo`)
    }else{
        alert(`O Numero ${numero} NÃO é Primo`)
        console.log(`O Numero ${numero} NÃO é Primo`)
    }
}