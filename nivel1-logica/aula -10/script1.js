let nota = 0
let soma = 0
let qtd = 1

while(nota !== -1){       
    nota = Number(prompt(`Digite o valor da ${qtd}ª nota: `))
    if(nota !== -1){
        qtd++ 
        soma = soma + nota
    }
}

qtd = qtd -1
let media = soma / qtd
window.alert(`Foram incluidas ${qtd} notas, totalizando ${soma} e nota média ${media}`)