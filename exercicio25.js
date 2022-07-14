// Cria mecaniso de busca que identifica palavras semelhantes
//Escreva uma função qeu recebe como primeirop parametro uma palavra e como segundo um array
//a função deve filtrar as palavras do array que ocntem nelas a string do primeiro parametro

arrayPalavras = [ 'programação', 'mobile', 'profissional' ]

//Solução 1 - professor
function buncaPalavrasSemelhantes(argumento, array){
    return array.filter(array => array.includes(argumento))
}

console.log((buncaPalavrasSemelhantes('pro', arrayPalavras)))


//Solução 2 - professor
function buncaPalavrasSemelhantes2(inicio, palavras){
    const result = []
    for (let palavra of palavras){
        if (palavra.includes(inicio))
            result.push(palavra)
    }
    return result
}

console.log(buncaPalavrasSemelhantes2('pro', arrayPalavras))