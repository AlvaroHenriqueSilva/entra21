let operacao, n1, n2, resultado

operacao = prompt('Informe a operação')
n1 = +prompt('Digite o 1° número: ')
n2 = +prompt('Digite o 2° número: ')

if (operacao === '+') resultado = n1 + n2, operacao = 'soma'
if (operacao === '-') resultado = n1 - n2, operacao = 'subtração'
if (operacao === '*') resultado = n1 * n2, operacao = 'multiplicação'
if (operacao === '/') resultado = n1 / n2, operacao = 'divisão'

document.write(`O resultado da ${operacao} é: ${resultado}`)