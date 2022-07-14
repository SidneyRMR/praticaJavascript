//Função que receba a base e altura de um triangulo e retorne a area desse triangulo. com precisao de 
//duas casas decimais, arredondando se necessario.

function areaTriangulo(base, altura){
    return ((base * altura) / 2).toFixed(2)
}

console.log(`A área do triângulo é ${areaTriangulo(10.3, 5.1)} metros quadrados`)