let numPar = [], total
for (let index = 1; index <= 100; index++) {
    if (index % 2 === 0) {
        numPar.push(index)
        total = numPar.reduce((a, b) => a + b)
    }
}
document.write(`${numPar}<br>`)
document.write(total)