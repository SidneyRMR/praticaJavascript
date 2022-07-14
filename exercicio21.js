//Criar função que receba um array e retorne o menor número deste

arr = [50, 10, 20, 30, 55, 11, 80, 15, 34]

//Solução 1
function retorneMenor(array){
    return Math.min(...array)
}

console.log(retorneMenor(arr))

//Solução 2 - professor
function menornumero(numbers){
    return numbers.reduce((anterior, atual) => anterior < atual ? anterior : atual)
}
console.log(menornumero(arr))

