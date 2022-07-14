//Criar função que receba como parametro um numero de 1 a 10. Inernamente ela deverá gerar um
//número aleatorio de 1 a 10. a função devera retornar se o parametro de entrada foi igual ao
//numero sorteado internamente. Se for igual retone 'Parabens, senao 'Que pena! o número sorteado 
//foi ${...}

function funcaoDaSorte(num){
    let aleatorio = Math.floor(10 * Math.random());
    if (num === aleatorio){
        console.log(`Parabens! o número sorteado foi ${aleatorio}`)
    } else {
        console.log(`Que pena! o número sorteado foi ${aleatorio}`)
    }
}
funcaoDaSorte(5)