function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('iano').value
    var res = document.querySelector('div#res')
    if ( fano.length == 0 || fano > ano) {
        alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(fano)
        var genero = ''
        if (fsex[0].checked) {
            genero = 'Homem'
        } else if (fsex[1].checked) {
            genero = 'Mulher'
        }
        res.innerHTML = (`Datectamos ${genero} com ${idade} anos`)
    }
}