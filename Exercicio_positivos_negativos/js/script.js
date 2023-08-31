let numero = 0.0, positivos = [], negativos = []
let somaPositivos = 0
for (let index = 1; index <= 10; index++) {
    numero = parseFloat(prompt(`Informe o ${index}° número:`))
    numero >= 0 ? positivos.push(numero) : negativos.push(numero)
}
somaPositivos = positivos.reduce((a, b) => a + b)
console.log(`Quantidade de negativos ${negativos.length}`)
console.log(`A soma dos números positivos ${somaPositivos}`)