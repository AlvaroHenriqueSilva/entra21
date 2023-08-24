let aumento, novoSalario
let salarioCobrador = parseFloat(prompt('Digite o salário do cobrador: R$'))

if (salarioCobrador <= 280) {
    aumento = 0.2
    novoSalario = (salarioCobrador * aumento) + salarioCobrador
} else if (salarioCobrador < 700) {
    aumento = 0.15
    novoSalario = (salarioCobrador * aumento) + salarioCobrador
} else if (salarioCobrador < 1500) {
    aumento = 0.10
    novoSalario = (salarioCobrador * aumento) + salarioCobrador
} else {
    aumento = 0.05
    novoSalario = (salarioCobrador * aumento) + salarioCobrador
}

console.log(`Salário antigo: R$${String(salarioCobrador).replace('.', ',')}`)
console.log(`Percentual de aumento: ${aumento * 100}%`)
console.log(`Valor do aumento: R$${(novoSalario - salarioCobrador).toFixed(2)}`)
console.log(`Novo salário: R$${String(novoSalario).replace('.', ',')}`)