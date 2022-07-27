
var lista = document.getElementById('ilista')
var res = document.getElementById('res')
var numeros = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        false
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function armazenar(){
     var valor = document.getElementById('ivalor').value
    if(isNumero(valor) && !inLista(valor, numeros)){
        numeros.push(Number(valor))
        let item = document.createElement('option')
        item.text = `Valor ${valor} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('valor invalido ou ja encontrado na lista')    
    }
    valor.value = ''
}

function finalizar() {
    if(numeros.length == 0){
        alert('Adicione valores antes de finalizar')
    } else {
        let total = numeros.length
        let maior = numeros[0]
        let menor = numeros[0]
        let soma = 0
        for (let pos in numeros) {
            soma += numeros[pos]
            if(numeros[pos] > maior) {
                maior = numeros[pos]
            }
            if(numeros[pos] < menor) {
                menor = numeros[pos]
            }
        }
        let media = soma / total

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${total} números cadastrados</p>`
        res.innerHTML += `<p>O maior números iformado foi ${maior}</p>`
        res.innerHTML += `<p>O menor números iformado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores temmos ${soma}</p>`
        res.innerHTML += `<p>A média calculada foi ${media}</p>`
    }
}
