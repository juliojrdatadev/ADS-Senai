let res = document.getElementById('resultado')

let paisA = 80000
let paisB = 200000
let cont = 1

res.innerHTML = `Inicindo a contagem de habitantes do ${cont}º ano com : Pais A = ${paisA} x Pais B = ${paisB}<br><br>`

while(paisB >= paisA){
    cont++
    paisA = paisA + (paisA * 0.03)
    paisB = paisB + (paisB * 0.015)

    res.innerHTML += `${cont}º Ano: Pais A = ${paisA} x Pais B = ${paisB}<br>`
}

res.innerHTML += `<br>O Pais A atingiu o e ultrapassou numero de habitantes do Pais B em ${cont} anos.<br>`
res.innerHTML += `Pais A = ${paisA} x Pais B = ${paisB}`


