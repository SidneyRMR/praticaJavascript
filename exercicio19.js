//Função que retorna a media de um array de tamanho indeterminado

oscilacaoDiariaAcao = [10.99, 11.52, 12.01, 11.85, 11.64, 13.16]


//Solução 1
function precoMedioAcao(precosAcao){
    let acumulador = 0
    let media = 0
    for (i in precosAcao){
        acumulador += precosAcao[i]
    }
    media = acumulador / precosAcao.length
    return media
}

console.log(precoMedioAcao(oscilacaoDiariaAcao))

//solução 2 - usando reduce
function precoMedioAcao2(precoAcao){
    let media = 0
    let somatoria = 0
    const soma = (total, valor) => total + valor
    somatoria = precoAcao.reduce(soma)
    media = somatoria / precoAcao.length
    return media

}
console.log(`R$ ${precoMedioAcao2(oscilacaoDiariaAcao).toFixed(2)} é o valor médio da ação`)

//Solução 2 - escrevendo de outra forma
function precoMedioAcao3(precoAcao){

    return (((precoAcao.reduce((total, valor) => total + valor )) / precoAcao.length).toFixed(2))

}
console.log(precoMedioAcao3(oscilacaoDiariaAcao))