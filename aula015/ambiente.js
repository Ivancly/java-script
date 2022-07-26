let num = [1, 7, 5, 3]
console.log(num)

// para colocar um elemento
num[4] = 11
console.log(num)

num.push(9)
console.log(num)

// tamanho do vetor
console.log(num.length)
 
// organizar em ordem crescente
console.log(num.sort())

// encontar um elemento no vetor
console.log(num.indexOf(11))
// retorna -1 se não encontrar. ex
console.log(num.indexOf(10))