let dias = Number(prompt('Quantos dias de temperatura você quer armazenar?'))
let tempList = []
let soma = 0

for(let i = 0; i < dias; i++){
    let temp = Number(prompt('Informe a temparatura:'))
    tempList.push(temp)
    soma += temp
}

let menor = 0
let maior = 0
for(let i = 0; i < tempList.length; i++){    

    if(menor <= 0 && maior <= 0){
        menor = tempList[i]
        maior = tempList[i]
    }else{
        if(tempList[i] < menor){
            menor = tempList[i]
        }
        if(tempList[i] > maior){
            maior = tempList[i]
        }
    } 
}

media = soma / tempList.length

alert(`Você informou ${tempList.length} temperaturas.\n A temperatura média foi de ${media}*C.\n A temperatura mínima informada foi de ${menor}*C e a máxima de ${maior}*C.`)