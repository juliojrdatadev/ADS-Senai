/*
Com o aumento das preocupações sobre a sustentabilidade e a eficiência energética, é essencial
que as pessoas tomem decisões informadas sobre o consumo de energia em suas casas. 
Um algoritmo pode ajudar a classificar o consumo de energia em três categorias: 
baixo, médio e alto, com base em um valor fornecido pelo usuário.

Crie um programa que:

Solicite ao usuário a quantidade de energia consumida (em kWh).

Utilize uma estrutura if/else para classificar o consumo:
"Baixo" se for menor que 100 kWh.
"Médio" se estiver entre 100 e 300 kWh.
"Alto" se for maior que 300 kWh.
Exiba uma mensagem correspondente à classificação do consumo.
*/

let consumo = Number(window.prompt('Informe a quantidade de energia consumida (kWh) no mês: '))

if(consumo < 100){
    window.alert(`Seu consumo foi de ${consumo} e é considerado Baixo.`)
}else if(consumo >= 100 && consumo <= 300){    
    window.alert(`Seu consumo foi de ${consumo} e é considerado Médio.`)
}else{    
    window.alert(`Seu consumo foi de ${consumo} e é considerado Alto`)
}
