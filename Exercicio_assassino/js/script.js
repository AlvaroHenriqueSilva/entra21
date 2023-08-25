let resposta, situcao, sim = 0, nao = 0, assassinoOuNao = null;
let perguntas = ["Telefonou para a vítima? (S/N)",
    "Esteve no local do crime? (S/N)",
    "Mora perto da vítima? (S/N)",
    "Devia para a vítima? (S/N)",
    "Já trabalhou com a vítima? (S/N)"
]

for (let pergunta of perguntas) {
    resposta = prompt(pergunta).toUpperCase()
    situcao = resposta === 'S' ? sim++ : nao++
}

if (sim == 5) {
    assassinoOuNao = 'Assassino'
}else if (sim == 3 || sim == 4) {
    assassinoOuNao = 'Cúmplice'
}else if (sim == 2) {
    assassinoOuNao = 'Suspeito'
}else {
    assassinoOuNao = 'Inocente'
}

console.log(`Você é ${assassinoOuNao}`)