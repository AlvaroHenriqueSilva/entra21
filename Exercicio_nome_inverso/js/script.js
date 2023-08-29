let nome, listaNomes = [];

for (let index = 0; index < 5; index++) {
    nome = prompt(`Digite o ${index + 1}° nome: `)
    listaNomes.push(nome)
}

document.write(`<h1>Lista de nomes</h1> <br>`)
listaNomes.forEach((nome) => document.write(`${nome} <br>`))
listaNomes.reverse()
document.write(`<h2>Lista invertida</h2>`)
listaNomes.forEach((nome) => document.write(`${nome} <br>`))