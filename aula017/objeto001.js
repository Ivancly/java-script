let amigo = {
    nome: 'José',
    peso: 85.4,
    engordar(p){
        console.log('Engordou')
        this.peso += p
    }
}

amigo.engordar(4)
console.log(`${amigo.nome} para ${amigo.peso}Kg`)