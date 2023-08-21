let emergencia = 0, prontoAtendimento = 0, poucoUrgente = 0, naoUrgente = 0, pessoas = 1, atendimento;

let quantidade = parseInt(prompt('Quantos atendimentos? '))
while (pessoas <= quantidade) {
    atendimento = parseInt(prompt(`Qual tipo de atendimento? ${pessoas}°
                                       1 - Emergencia
                                       2 - Pronto Socorro
                                       3 - Pouco urgente
                                       4 - Não urgente`))
        if (atendimento <= 0 || atendimento > 4) continue;
        if (atendimento === 1) emergencia++; 
        if (atendimento === 2) prontoAtendimento++;
        if (atendimento === 3) poucoUrgente++;
        if (atendimento === 4) naoUrgente++;
   pessoas++
}
document.write(`<h1>Quantidade de atendimentos</h1>`)
document.write(`Emergencia: ${emergencia} <br>`)
document.write(`Pronto atendimento: ${prontoAtendimento} <br>`)
document.write(`Pouco urgente: ${poucoUrgente} <br>`)
document.write(`Não urgente: ${naoUrgente}`)