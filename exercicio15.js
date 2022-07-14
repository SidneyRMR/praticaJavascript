//criar função que receba um array e retorne outro array composto somente dos num pares com ind pares

array = [2,4,5,6,8,9,11,14,16,17,20,25]

//Solução 1
function numParesEIndPares(arr){
    let result = []
    for (let i in arr){
        if ((arr[i]%2 === 0) && (i%2 === 0)){
            result = result.concat(arr[i])
        }
    }
    console.log(result)
}

numParesEIndPares(array)

//Solução 2
function numParesEIndPares2(arr){
    return arr.filter((num, ind) => {
        const numPar = num%2 === 0
        const indPar = ind%2 === 0

        return console.log(numPar && indPar)
    })
}

numParesEIndPares2(array)