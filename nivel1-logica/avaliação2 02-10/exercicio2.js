/*
Numa competição de arremesso de peteca, o competidor tem direito a 3 arremessos para que a
peteca caia em um alvo com áreas e pontuações de 0 a 5, sendo 5 no centro e 0 fora do alvo.

Crie um programa, utilizando a estrutura condicional switch/case, que pergunte a pontuação de
cada arremesso e ao final mostre o resultado (soma dos pontos) e a classificação:
Deus da peteca - 15 pontos
Petequeiro profissa - 10 a 14 pontos
Petequeiro de final de semana - 5 a 9 pontos
Pseudo-petequeiro - 1 a 4 pontos
*/

let soma = 0

for(var arremeco = 1; arremeco <= 3; arremeco++){
    let pontuacao = Number(window.prompt(`Informe a pontuação do ${arremeco}º arremeço: `))
    soma = soma + pontuacao
}

switch (soma) {
    case 1:
    case 2:
    case 3:
    case 4:
        window.alert(`Você atingiu ${soma} pontos e é considerado um "Pseudo-Petequeiro"`)
        break
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:        
        window.alert(`Você atingiu ${soma} pontos e é considerado um "Petequeiro de Final de Semana"`)
        break
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:        
        window.alert(`Você atingiu ${soma} pontos e é considerado um "Petequeiro Profissa"`)
        break
    case 15:        
        window.alert(`Você atingiu ${soma} pontos e é considerado um "Deus da Peteca"`)
        break
    default:
        window.alert('[ERRO!] Soma invalida, informe novamente sua pontuação.')
}
