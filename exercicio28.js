//Criar função que receba dois parametros, o primeiro é um array
//e o segundo e´um numero que esoecifica uma quantidade de digitos.
//Essa função deverá retornar somente aqueles números do array que tem a quantidade de digitos
//indicada no segundo parãmetro.

casas = 3
arrayNumeros = [100, 293, 239, 435, 24, 9, 1023, 906, 85]



//Solução 1 - usando for
function filtraQuantidadeDigitos(array, digitos){
    let newArray = []
    for (let i in array){
        if (array[i].toString().length === digitos){
            newArray += array[i] + ', '
        }
    }
    console.log(newArray)
}
filtraQuantidadeDigitos(arrayNumeros, casas)


//Solução 2 - praticando o uso do filter
function filtraQuantidadeDigitos2(array, digitos){
    const comparadorDigitos = num => num.toString().length === digitos
    return (array.filter(comparadorDigitos))
}

console.log(filtraQuantidadeDigitos2(arrayNumeros, casas))