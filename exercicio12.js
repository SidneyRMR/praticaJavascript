const obj1 = {
    nome: 'Sidney',
    idade: 31,
    profissao: 'Desenvolvedor Full Stack',
    empregado: false
}

function deletaPropriedade(obj, nomePropriedade){
    const copia = {...obj}
    delete copia[nomePropriedade]
    
    return copia
}

newObj = deletaPropriedade(obj1, 'idade')

console.log(newObj)