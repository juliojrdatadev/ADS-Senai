let menor = 0 
let maior = 0
let nota = 0
let notas = []

for(let juiz = 1; juiz <= 5; juiz++){
    let nota = prompt(`Informe a ${juiz} nota do atleta [0/10]:`)
    if(nota === null || nota.trim() === "" || isNaN(nota)){
        window.alert('[ERRO!] Informe uma nota.')
        juiz--
    }else{
        nota = Number(nota)
        if(menor == 0 && maior == 0){
            menor = nota
            maior = nota
        }else{
            if(nota <= menor){
                menor = nota
            }
            if(nota >= maior){
                maior = nota
            }
        }
        notas.push(nota)
    }
}
for(let i = 0; i < notas.length; i++) {
    nota += notas[i]
}
alert(`A nota final do atleta é ${nota-menor-maior}`)