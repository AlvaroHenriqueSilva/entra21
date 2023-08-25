let tabuada = parseInt(prompt(`Digite um número INTEIRO para ver sua tabuada:`))
let valorFinal = parseInt(prompt('Até que numero? '))
for (let index = 1; index <= valorFinal; index++) {
    document.write(`${tabuada} x ${index} = ${tabuada * index}<br>`)
}