cliente = {
    id: 12,
    nome: 'Ronaldo',
    produto: 'cano 3/4',
    quantidade: 10
    
}

///// solução 1
function objParaArray(objeto){
    const result = []
    for (let chave in objeto){
        result.push([chave, objeto[chave]])
    }
    return result
}

console.log(objParaArray(cliente))

/////solução 2
function objParaArray2(objeto){
    const chaves = Object.keys(objeto)
    const result = chaves.map(chave => [chave, objeto[chave]])

    return result
}
console.log(objParaArray2(cliente))

/////Solução 3
function objParaArray3(objeto){
    return Object.entries(objeto)
}
console.log(objParaArray3(cliente))