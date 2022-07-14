//Crair função que receba um array de numeros e retorne a soma de todos os numeros deste array

let numbers = [12, 5, 6, 18, 1, 10, 5, 9]

//Solução 1
function soma(arr){
    let result = 0
    for (i in arr){
        result += arr[i]
    }
    console.log(result)
}
soma(numbers)

//Solução 2
function soma2(arr){
    var result = arr.reduce(function(soma, i){
        return soma + i
    })
    console.log(result)
}
soma2(numbers)


