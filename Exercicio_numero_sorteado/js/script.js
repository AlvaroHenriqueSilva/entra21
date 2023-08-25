
let tentativas = 1
let numeroSorteado = Math.floor(Math.random() * (100 - 0) + 0)
let numeroUsuario = parseInt(prompt('Digite um número: '))

while (numeroSorteado !== numeroUsuario) {
    if (numeroSorteado < numeroUsuario) {
        numeroUsuario = parseInt(prompt('Digite um número menor:'))
        tentativas++
    }else {
        numeroUsuario = parseInt(prompt('Digite um número maior: '))
        tentativas++
    }
}
console.log(`Número sorteado: ${numeroSorteado}, Tentativas: ${tentativas}`)
