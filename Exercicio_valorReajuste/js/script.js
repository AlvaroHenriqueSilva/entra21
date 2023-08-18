let saldo, reajuste, valorReajuste

saldo = parseFloat(prompt(`Qual o valor do saldo? `))
reajuste = parseFloat(prompt('Qual o valor do reajuste? (em %)'))
valorReajuste = (saldo * reajuste) / 100

console.log(`O valor do reajuste é ${valorReajuste.toFixed(2)}`)