let numero, totalNum = [], media = 0

while (numero !== -1) {
    numero = parseInt(prompt('Digite um número inteiro: (-1 pra parar)'))
    if (numero === -1) continue
    totalNum.push(numero)
    media = (totalNum.reduce((a, b) => a + b)) / totalNum.length
}
console.log(`Média da soma de todos os números ${media.toFixed(1)}`)