// Criar função que receba um objeto com estudantes e suas notas. As notas de cada estudante estarão
//num array. Você deverá calcular a media da nota de cada aluno e retornar um objeto com os atributos 
//nome e media, que indica o aluno que teve o melhor desempenho nas notas.

estudantes = {
    Joao: [8, 7.6, 8.9, 6],
    Marina: [9, 6.6, 7.9, 8],
    Carla: [7, 7, 8, 9],
}//retornar o aluno que tiver a maior media


// //console.log(Object.values(estudantes))
// let medias = []
// //let a = ''
// for (estudante in estudantes){
//     medias[estudante] = (estudantes[estudante].reduce(function(acum, nota){
//         return acum + nota
//     }) / estudantes[estudante].length)
// }
// // console.log(medias)
// // console.log((medias['Joao']))
// console.log(Math.max(medias[estudante]))
// for (estudante in medias){
//     console.log(Math.max(medias[estudante]))
// }


//Solução 1
const soma = array => array.reduce((acumulador, atual) => acumulador + atual, 0)
const media = array => soma(array) / array.length

function receberMelhorEstudante(estudantes){
    const estudantesComMedias = Object.entries(estudantes).map(estudante => {
        const chave = 0,
        valor = 1
        return {nome: estudante[chave], media: media(estudante[valor])}
    })

    const estudantesOrdenados = estudantesComMedias.sort((estudanteA, estudanteB) => estudanteB.media - estudanteA.media)
    const melhorEstudante = estudantesOrdenados[0]   
 
    return melhorEstudante
}
console.log(receberMelhorEstudante(estudantes))