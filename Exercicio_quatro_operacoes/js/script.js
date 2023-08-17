let n1 = Number.parseFloat(prompt('Qual o 1° valor? '))
let n2 = Number.parseFloat(prompt('Qual o 2° valor? '))


function operacoesBasicas(n1, n2) {
    document.write(`A soma é igual a ${n1 + n2} <br>`)
    document.write(`A subtração é ${n1 - n2} <br>`)
    document.write(`A divisão é ${n1 / n2} <br>`)
    document.write(`A multplicação é ${n1 * n2} <br>`)
}

operacoesBasicas(n1, n2)