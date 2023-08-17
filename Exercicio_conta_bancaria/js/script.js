let saldo = 0

let deposito = Number.parseFloat(prompt('Quanto você quer depositar'))
saldo += deposito

let debito = Number.parseFloat(prompt(`Seu saldo atual é R$${saldo},
                                       Quanto você quer retirar?`))
while(debito > saldo) {
    debito = Number.parseFloat(prompt(`Você não pode sacar um valor acima de ${saldo},
                                     Quanto você quer sacar? `))
}
saldo -= debito
document.write(`Seu saldo atual é R$ ${saldo}`)