let vogais = ['a', 'e', 'i', 'o', 'u']
let letras = prompt('Digite uma letra: ').toLowerCase()[0]

if (!isNaN(letras)) {
    console.log('Não é uma letra')
} else {
    let vogalOuConsoante = vogais.find((letra) => letra === letras)
    vogalOuConsoante = (vogalOuConsoante !== undefined) ? 'A letra é uma vogal' : 'Não é vogal'
    console.log(vogalOuConsoante)   
}
