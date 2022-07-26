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
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagens/homem-criança.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/homem-jovem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/homem-adulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/homem-idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagens/mulher-criança.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/mulher-jovem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/mulher-adulta.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/mulher-idosa.png')
            }
        }
        res.innerHTML = (`Detectamos ${genero} com ${idade} anos`)
        res.appendChild(img)
    }
}