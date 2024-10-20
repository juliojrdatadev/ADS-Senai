/*
9- Em uma eleição presidencial, existem 3 candidatos. 
Os votos foram registrados em fichas. 
Cada ficha contém um dos códigos relacionados abaixo: 1, 2, 3: Voto para os respectivos candidatos:
4: Voto nulo
5: Voto em branco

Construa um algoritmo que:
A. Leia as fichas (a última ficha contém o valor 0 (zero) que indica o fim doprocessamento);
B. Calcule o total de votos de cada candidato;
C. Calcule o total de votos nulos e o total de votos em branco;
D. Determine o candidato vencedor;
*/

let voto = null
let cand1 = 0
let cand2 = 0
let cand3 = 0
let nulo = 0
let branco = 0

while(voto !== 0) {
    voto = Number(prompt('Informe seu voto:\n[1] Boulos\n[2] Datena\n[3] Marçal\n[4] Nulo\n[5] Branco\n[0] Encerrar Votação'))

    switch(voto) {
        case 0:
            alert('[!] Você encerrou a votação!')
            break
        case 1:
            cand1++
            break
        case 2:
            cand2++
            break
        case 3:
            cand3++
            break
        case 4:
            nulo++
            break
        case 5:
            branco++
            break
        default:
            alert('[!] Opção inválida, vote novamente!')
        }
}

alert(`Resultados da votação:
Boulos: ${cand1} votos
Datena: ${cand2} votos
Marçal: ${cand3} votos
Nulo: ${nulo} votos
Branco: ${branco} votos`)

if (cand1 > cand2 && cand1 > cand3) {
    alert(`Boulos foi eleito com  ${cand1} votos.`)
} else if (cand2 > cand1 && cand2 > cand3) {
    alert(`Datena foi eleito com ${cand2} votos.`)
} else if (cand3 > cand1 && cand3 > cand2) {
    alert(`Marçal foi eleito com ${cand3} votos.`)
} else {
    if(cand1 == 0 && cand2 == 0 && cand3 == 0){
        alert('Você encerrou a votação sem informar nenhum voto.')
    }else{
        alert(`Houve um empate entre os candidatos.\nHaverá segundo turno.`)
    }    
}
