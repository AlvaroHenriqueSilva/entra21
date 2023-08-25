let vogais = ['a', 'e', 'i', 'o', 'u']
let frase = prompt('Digite uma frase: ').toLowerCase()
let resultado;
frase = [...frase]
resultado = frase.filter(letra => letra === vogais.find(vogal => vogal === letra ))

console.log(`Vogais da frase: ${resultado}`)