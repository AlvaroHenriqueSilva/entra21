let sexo, idade;

do {
    sexo = prompt(`Informe seu sexo: (M/F)`).toUpperCase().trim()
    if (sexo === '') continue
    idade = +prompt('Qual é sua idade? ')
    
    

    if (sexo === 'M' && idade < 18) {
        console.log('Você é do sexo masculino e menor de idade')
       
    } else if (sexo === 'F' && idade < 18) {
        console.log('Você é do sexo feminino e menor de idade')
        
    } else if (sexo === 'M') {
        console.log('Você é do sexo masculino e maior de idade')
        
    } else {
        console.log('Você é do sexo feminino e maior de idade')
    }


} while (!sexo);

