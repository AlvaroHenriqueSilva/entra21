let quantidadeMin, quantidadeMax, estoqueMedio

quantidadeMin = parseInt(prompt('Qual o valor mínimo de estoque: '))
quantidadeMax = parseInt(prompt('Digite a valor máximo de estoque: '))
estoqueMedio = (quantidadeMax + quantidadeMin) / 2

document.write(`O valor médio do estoque é de ${estoqueMedio.toFixed()}`)