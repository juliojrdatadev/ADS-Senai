let topo = document.getElementById('topo')
let login = document.getElementById('login')
let retorno = document.getElementById('retorno')
let conta = document.getElementById('conta')
let senha = document.getElementById('senha')
let corpo = document.getElementById('corpo')
let campoSaldo = document.getElementById('saldo')
let campoMov = document.getElementById('movimento')
let cadastro = document.getElementById('cadastro')
cadastro.style.display = 'none'

var saldo = 0
campoSaldo.innerHTML = `SALDO R$ ${saldo.toFixed(2).replace('.', ',')}`

function atualizarSaldo(){    
    campoSaldo.innerHTML = `SALDO R$ ${saldo.toFixed(2).replace('.', ',')}`
    campoMov.value = ''
    campoMov.focus()
}

function sair(){    
        corpo.style.display = 'none'        
        topo.style.display = 'block'
        cadastro.style.display = 'none'
        conta.value = ''
        senha.value = ''

}

function novaconta(){
    topo.style.display = 'none'  
    cadastro.style.display = 'block'
    corpo.style.display = 'none'
}


function cadastrar(){           
    topo.style.display = 'none'
    let cadconta = Number(document.getElementById('cadconta').value)
    let cadsenha = Number(document.getElementById('cadsenha').value)
    let confsenha = Number(document.getElementById('confsenha').value)
    let cadnome = String(document.getElementById('cadnome').value)
    let cadcpf = Number(document.getElementById('cadcpf').value)

    // Validação de conta: deve ser numérica e ter entre 4 e 6 dígitos
    if (!(/^\d{6}$/.test(cadconta))) {
        window.alert("Erro: A conta deve conter apenas números e ter 6 dígitos.");
        return null;
    }
    
    // Validação de senha: deve ser numérica e ter entre 4 e 6 dígitos
    if (!(/^\d{4,6}$/.test(cadsenha))) {
        alert("Erro: A senha deve conter apenas números e ter entre 4 e 6 dígitos.");
        return null;
    }

    // Validação de senha: deve ser numérica e ter entre 4 e 6 dígitos    
    if(cadsenha != confsenha){
        alert("Erro: A confirmação de senha deve ser igual a senha.");
        return null;
    }else if (!(/^\d{4,6}$/.test(confsenha))) {
        alert("Erro: A confirmação de senha deve conter apenas números e ter entre 4 e 6 dígitos.");
        return null;
    }
    
    // Validação de nome: deve ser uma string não vazia
    if (cadnome.trim() === "") {
        alert("Erro: Preencha o campo nome.");
        return null;
    } else if (!(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(cadnome))) { 
        // Validação do nome: deve conter apenas letras e espaços
        alert("Erro: O nome deve conter apenas letras e espaços, sem números ou caracteres especiais.");
        return null;
    }
    
    // Validação de CPF: deve ser numérico e ter entre 6 e 11 dígitos
    if (!(/^\d{6,11}$/.test(cadcpf))) {
        alert("Erro: O CPF deve conter apenas números e ter entre 6 e 11 dígitos.");
        return null;
    }
    
    // Criação do objeto de usuário
    const usuario = {
        conta: cadconta,
        senha: cadsenha,
        confsenha: confsenha,
        nome: cadnome,
        cpf: cadcpf,
        saldo: 0, // Saldo inicial
        extrato: []   // Array para registrar as movimentações financeiras
    };
    
    console.log("Usuário criado com sucesso:", usuario);
    return usuario;
               
    topo.style.display = 'none'
    cadconta.value = ''
    cadsenha.innerHTML = ''
    confsenha.innerHTML = ''
    cadnome.innerHTML = ''
    cadcpf.innerHTML = ''
}
    
    // Função para registrar uma movimentação no extrato
    /* function registrarMovimentacao(usuario, descricao) {
    if (usuario && descricao) {
        usuario.extrato.push(descricao);
        console.log("Movimentação registrada:", descricao);
    } else {
        alert("Erro: Usuário ou descrição inválidos.");
    }
    }
    
    // Exemplo de uso
    let usuario1 = criarUsuario("1234", "4321", "João Silva", "12345678901", 1000.50);
    
    if (usuario1) {
    // Registrar movimentações
    registrarMovimentacao(usuario1, "Depósito de R$500,00");
    registrarMovimentacao(usuario1, "Saque de R$200,00");
    
    console.log("Extrato de movimentações:", usuario1.extrato);
    }
    */


function acessar(){
    if(conta.value === usuario.conta.value && senha.value === usuario.senha.value){
        window.alert('Bem vindo a sua conta')
        topo.style.display = 'none'  
        cadastro.style.display = 'none'
        corpo.style.display = 'block'

        movimentacao()
    }else if(conta.value != 1234){
        window.alert('[ERRO!] Conta inexistente! Informe uma conta váluda')
    }else if(senha.value != 1234){
        window.alert('[ERRO!] Senha inválida! Tente novamente.')
    }else {
        window.alert('[ERRO!] Conta e Senha inválidos.')
    }
}

function movimentar(){ 
    const movimento = document.getElementById('movimento').value

    const qualMovimento = document.querySelector('input[name="movimento"]:checked')

    if (qualMovimento && movimento) {
        
        const opcao = qualMovimento.value
        const quantiaMovimento = parseFloat(movimento)

        if (opcao == 'depositar') {
            if(quantiaMovimento <= 0){
                window.alert(`[ERRO!] IMPOSSVEL DEPOSITAR R$ ${quantiaMovimento.toFixed(2)}.`)
                atualizarSaldo()
            }else{
                saldo = saldo + quantiaMovimento;           
                window.alert(`[OK!] DEPOSITO REALIZADO COM SUCESSO!`)
                atualizarSaldo()
            }
        } else if (opcao == 'sacar') {
            if (quantiaMovimento > saldo) {
                window.alert(`[ERRO!] SAQUE MAIOR QUE SALDO EM CONTA! TENTE OUTRO VALOR.`)
                atualizarSaldo()
            } else if (quantiaMovimento <= saldo) {
                saldo = saldo - quantiaMovimento
                window.alert(`[OK!] SAQUE EFETUADO COM SUCESSO!`)
                atualizarSaldo()
            } else {
                window.alert(`[ATENÇÃO!] CONTATE O SUPORTE 24H`)
                atualizarSaldo()
            }
        }
    } else {
        // Se NÃO for selecionado um TIPO DE MOVIMENTAÇÃO ou NÃO INFORMAR UM VALOR DE MOVIMENTAÇÃO
        alert("[ERRO!] INFORME UM VALOR PARA A MOVIMENTAÇÃO!")
        
        atualizarSaldo()
    }
    
    atualizarSaldo();
}


