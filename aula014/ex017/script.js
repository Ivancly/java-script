function gerar() {
    var numero = document.getElementById('inumero').value
    numero = Number(numero)
    var res = document.getElementById('res')
    var inicio = 1

    res.innerHTML = ('')
    for(inicio; inicio <= 10; inicio++) {
        res.innerHTML += (`${numero} x ${inicio} = ${numero*inicio} <br>`)
    }
}