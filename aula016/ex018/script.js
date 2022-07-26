var valor = document.getElementById('ivalor').value
var lista = document.getElementById('ilista')
var res = document.getElementById('res')
var numeros = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 200){
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
    if(isNumero(valor) && !inLista(valor, numeros)){
        alert('Tudo OK!')
    } else {
        alert('valor invalido ou ja encontrado na lista')    
    }
}
