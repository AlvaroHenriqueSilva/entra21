let precoKg = parseFloat(prompt('Informe o preço por Kg'))
let pesoRegistrado = parseFloat(prompt('Informe o peso registrado (em gramas)'))

let valorPagar = (precoKg * (pesoRegistrado / 1000))
precoKg = precoKg.toFixed(2).replace('.', ',')
valorPagar = valorPagar.toFixed(2).replace('.', ',')

document.writeln(`<p>Preço por Kg.: R$ ${precoKg}</p>`)
document.writeln(`Valor a Pagar: R$ ${valorPagar}`)
