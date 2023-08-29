let numero, numerosArray = [], soma = 0

for (let index = 0; index < 5; index++) {
    numero = parseFloat(prompt(`Digite o ${index + 1}° número `))
    numerosArray.push(numero)
}
soma = numerosArray.reduce((a, b) => a + b)

console.log(`A soma dos números é ${soma}`)