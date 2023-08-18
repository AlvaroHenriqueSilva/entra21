let valorProduto, porcentagemDesconto, valorDesconto

valorProduto = parseFloat(prompt('Qual o valor do produto? '))
porcentagemDesconto = parseFloat(prompt('Qual o valor da porcentagem de desconto (%)'))
valorDesconto = valorProduto * (porcentagemDesconto / 100)
document.write(`O desconto do produto é de R$${valorDesconto.toFixed(2).replace('.', ',')}`)