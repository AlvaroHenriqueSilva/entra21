let cotacaoDolar, dolares, real

cotacaoDolar = parseFloat(prompt('Digite a cotação do dólar: '))
dolares = parseFloat(prompt('Digite um valor em dólares: '))
real = dolares / cotacaoDolar

document.write(`O valor de U$$${dolares} em R$${real}`)