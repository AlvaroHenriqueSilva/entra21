let primeiraMedia, segundaMedia, somaDuasMedias, mediaDasMedias

primeiraMedia = (8 + 9 + 7) / 3
console.log(`A media de 8, 9 e 7 ${primeiraMedia.toFixed(2)}`) 

segundaMedia = (4 + 5 + 6) / 3
console.log(`A media de 4, 5 e 6 é ${segundaMedia.toFixed(2)}`)

somaDuasMedias =  primeiraMedia + segundaMedia
console.log(`A soma das duas primeiras médias é ${somaDuasMedias.toFixed(2)}`)

mediaDasMedias = (primeiraMedia + segundaMedia) / 2
console.log(`A média das médias é ${mediaDasMedias.toFixed(2)}`)