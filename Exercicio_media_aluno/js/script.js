let quantAlunos, aluno = 1, nomeAluno, notas = [], quantNotas = 0, notaInicial = 1, media = 0

quantAlunos = parseInt(prompt('Quantos alunos? '))
quantNotas = parseInt(prompt('Quantas notas? '))

while (aluno <= quantAlunos) {
    nomeAluno = prompt(`Qual o nome do ${aluno}° aluno`)
    notaInicial = 1
    notas = []
    while (notaInicial <= quantNotas) {
        notas.push(parseFloat(prompt(`Informe a ${notaInicial}° nota`)))
        notaInicial++
    }
    notas = notas.reduce((a, b) => a + b)
    aluno ++
    media = notas / quantNotas
    if (media >= 7) {
        console.log(`O aluno(a) ${nomeAluno} tem uma média de ${media.toFixed(1)} ele está APROVADO!`)
    } else if (media >= 5) {
        console.log(`O aluno(a) ${nomeAluno} tem uma média de ${media.toFixed(1)} ele está em RECUPERAÇÃO!`)
    }else {
        console.log(`O aluno(a) ${nomeAluno} tem uma média de ${media.toFixed(1)} ele está REPROVADO!`)
    }
}