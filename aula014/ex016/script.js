function contar() {
    var inicio = document.getElementById('iinicio').value
    var fim = document.getElementById('ifim').value
    var passo = document.getElementById('ipasso').value
    var res = document.getElementById('res')
    inicio = Number(inicio)
    fim - Number(fim)
    passo = Number(passo)
    
    if (inicio < 0 || fim < 0 || passo < 1){
        alert('Valores invalidos')
    } else {
        res.innerHTML = ('')
        for(inicio; inicio <= fim; inicio += passo) {
            res.innerHTML+=(inicio + ' &#x1F449 ')
        }
        res.innerHTML+=(' &#x1F3C1')    
    }

    
}
