let listaNumeros = [], numero, pares = [], impares = []
for (let index = 1; index <= 6; index++) {
    numero = parseInt(prompt(`Informe o ${index}° número: `))
    numero % 2 === 0 ? pares.push(numero) : impares.push(numero)
    
}
console.log(`Quantidade de números pares ${pares.length} | Valores: ${pares.join(', ')}`)
console.log(`Quantidade de números ímpares ${impares.length} | Valores: ${impares.join(', ')}`)