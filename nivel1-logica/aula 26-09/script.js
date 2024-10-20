let section = document.getElementById('sect')
let valor = document.getElementById('compra')
let res = document.getElementById('retorno')
let frete = Number(12.50)
let valorTotal = 0

function novoCalculo(){
    res.innerHTML = ''
    valor.focus()
    valor.value = ''
}

function finalizar(){
    let assinatura = document.querySelector('input[name="assinatura"]:checked')

    if(valor.value <= 0){
        window.alert('[ERRO!] Informe o valor da compra.')
        valor.focus()
    }else{
        let compraFinal = Number(valor.value)

        if(!assinatura){            
            window.alert('[ERRO!] Selecione qual seu nível de assinatura.')
        }else {
            assinatura = assinatura.value

            if(assinatura == 'premium'){
                compraFinal = compraFinal - (compraFinal * 0.20)
            }else if(assinatura == 'gold'){             
                compraFinal = compraFinal - (compraFinal * 0.20) + frete
            }else if(assinatura == 'silver'){     
                compraFinal = compraFinal - (compraFinal * 0.10) + frete
            }else if(assinatura == 'nass'){
                compraFinal = compraFinal + frete 
            }
            
            res.innerHTML = `Valor final da compra: R$ ${compraFinal.toFixed(2)}`
        }
    }
}