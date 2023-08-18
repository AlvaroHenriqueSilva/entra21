let valorHora, salarioMensal, horasTrabalhadas

salarioMensal = parseFloat(prompt('Qual o seu salário R$: '))
horasTrabalhadas = parseFloat(prompt('Quantas horas você trabalhou? '))
valorHora = salarioMensal / horasTrabalhadas 

console.log(`O valor hora do funcionário é de R$${valorHora.toFixed(2).replace('.',',')}`)