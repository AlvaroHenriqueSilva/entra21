
let nomeFuncionario = prompt('Qual o nome do funcionário? ')
let salarioFuncionario = parseFloat(prompt(`Digite o salário de ${nomeFuncionario} R$: `))

let reajusteSalario = (salarioFuncionario * 15) / 100
let novoSalario = salarioFuncionario + reajusteSalario
novoSalario = novoSalario.toFixed(2).replace('.',',')
console.log(`O novo salário de ${nomeFuncionario} é R$${novoSalario}`)
