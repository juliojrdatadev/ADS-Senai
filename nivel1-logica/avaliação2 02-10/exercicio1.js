/*
A densidade demográfica é uma medida importante para entender a distribuição populacional,
sendo calculada pela fórmula:

Densidade Demográfica = População Total / Área em km
Podemos classificar a densidade demográfica em categorias de acordo com o seu valor:

Densidade Alta: maior que 100 habitantes por km²
Densidade Média: entre 25 e 100 habitantes por km²
Densidade Baixa: menor que 25 habitantes por km²
Sabendo disso, crie um programa que:

Solicite ao usuário a população total da região.
Solicite ao usuário a área da região em metros quadrados.
Calcule a densidade demográfica em habitantes por quilômetro quadrado.
Classifique e exiba, utilizando if/else, uma mensagem correspondente à densidade demográfica
calculada:
"Densidade Alta" se for maior que 100.
"Densidade Média" se estiver entre 25 e 100.
"Densidade Baixa" se for menor que 25.
*/


let populacaoTotal = Number(window.prompt('Informe a população total da região: '))
let areaRegiao = Number(window.prompt('Informe a área total (m²) da região: '))

const densidade = populacaoTotal / areaRegiao

if(densidade >= 25 && densidade <= 100){
    window.alert(`Região de Densidade Média com ${densidade} habitantes por m²`)
}else if(densidade < 25){
    window.alert(`Região de Densidade Baixa com ${densidade} habitantes por m²`)
}else{    
    window.alert(`Região de Densidade Alta com ${densidade} habitantes por m²`)
}

