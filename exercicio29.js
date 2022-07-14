//Criar uma função que recebe uma string como parametro e retorne essa string somente com as 
//consoantes, ou seja, sem as vogais

let palavra = 'vou ser full stack'

//Solução 1 - usando for
function removeVogais(string){
    string = string.replace(/ /g, '')
    let recebeVogais = ''
    let recebeConsoantes = ''

    for (letra in string){
        if ((string[letra] === 'a') || (string[letra] === 'e') || (string[letra] === 'i') || (string[letra] === 'o') || (string[letra] === 'u')) {
            recebeVogais += string[letra]
        } else {
            recebeConsoantes += string[letra]
        }
    }
    return recebeConsoantes
}
console.log(removeVogais(palavra))


//Solução 2 - usando filter