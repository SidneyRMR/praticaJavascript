//criar função que retorne somente valores numericos de um array misto

array = [ 10, 'ola', 150, 200, 'alo']

function filtrarNumeros(arr){ //solução 1
    if (typeof arr === 'number'){
        return arr 
    }
}

const filtrarNumeros2 = arr2 => (typeof arr2 === 'number') // solução 2

let num = array.filter(filtrarNumeros)
let num2 = array.filter(filtrarNumeros2)

console.log(num) 
console.log(num2)

//solução professor
function filtrarNumeros3(arr){
    return arr.filter(item => typeof item === 'number')
}

num3 = filtrarNumeros3(array)
console.log(num3)