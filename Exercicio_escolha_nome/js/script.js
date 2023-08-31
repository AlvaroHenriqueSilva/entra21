let nome, listaNomes = [], opcao = -1
let quantidadePessoas = 0, nomeEncontrado = false, resultado;
while (opcao !== 0) {
    opcao = parseInt(prompt(`======== MENU =======
1) Cadastrar Nome
2) Pesquisar Nome
3) Listar todos os nomes
0) Sair do programa
---------------------
Digite sua escolha:_`))

    if (opcao === 1) {
        quantidadePessoas = parseInt(prompt('Quantas pessoas você quer cadastrar? '))
        for (let index = 1; index <= quantidadePessoas; index++) {
            nome = prompt(`Qual o nome da ${index}° pessoa? `)
            listaNomes.push(nome)
        }
    }

    if (opcao === 2) {
        nome = prompt('Qual o nome da pessoa? ')
        nomeEncontrado = listaNomes.find((element) => element === nome)
        resultado = nomeEncontrado !== undefined ? 'Esse nome tem na lista' : 'Não existe esse nome na lista'
        alert(resultado)
    }
    
    if (opcao === 3) {
        alert(`Listagem: ${listaNomes.map((nome) => ` ${nome}`)}`)
    }
}
