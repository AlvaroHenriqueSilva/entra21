let sim = 0
let nao = 0
let total = 0
let situacao = null;

let telefone = prompt('Telefonou para a vítima? (S/N)').toUpperCase()
telefone === 'S' ? sim++ : nao++
let local = prompt('Esteve no local do crime? (S/N)').toUpperCase()
local === 'S' ? sim++ : nao++
let moraPerto = prompt('Mora perto da vítima? (S/N)').toUpperCase()
moraPerto === 'S' ? sim++ : nao++
let divida = prompt('Devia para a vítima? (S/N)').toUpperCase()
divida === 'S' ? sim++ : nao++
let trabalho = prompt('Já trabalhou com a vítima? (S/N)').toUpperCase()
trabalho === 'S' ? sim++ : nao++

if (sim == 2) {
    situacao = 'Suspeito'
} else if (sim == 3 || sim == 4) {
    situacao = 'Cúmplice'
} else if (sim == 5) {
    situacao = 'Assasino'
} else {
    situacao = 'Inocente'
}

console.log(`Você é ${situacao}`)