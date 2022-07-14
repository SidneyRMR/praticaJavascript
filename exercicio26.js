//Função qeu recebe uma string como parametro e retorna somente as consoantesn sem as vogais

let string = 'pindamonhangaba'

//Solução minha 1
function separaVogaisEConsoantes(palavra){
    
    let recebeVogais = ''
    let recebeConsoantes = ''

    for (letra in palavra){
        if ((palavra[letra] === 'a') || (palavra[letra] === 'e') || (palavra[letra] === 'i') || (palavra[letra] === 'o') || (palavra[letra] === 'u')) {
            recebeVogais += palavra[letra]
        } else {
            recebeConsoantes += palavra[letra]
        }
    }

    console.log('Palavra: ', palavra)
    console.log('Vogais: ',recebeVogais)
    console.log('Consoantes: ',recebeConsoantes)
}

separaVogaisEConsoantes(string)

//Não consegui resolver com o filter ainda