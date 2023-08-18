let pontosLider, pontosLanterna, vitoriasNecessarias

pontosLider = parseInt(prompt('Quantos pontos o líder tem? '))
pontosLanterna = parseInt(prompt('Quantos pontos o lanterna tem? '))

vitoriasNecessarias = (pontosLider - pontosLanterna) / 3
document.write(`O lanterna precisa vencer ${vitoriasNecessarias.toFixed()} vezes para ultrapassar o líder`)