//Voce está trabalhando com uma aplicação de controle de despesas. Na tela principal dessa aplicação, é 
//possível adicionar produtos e serviços, informando nome, categoria e preço.Uma funcionalidade que 
//voce esta desenvolvendo no momento é a de somar o total das despesas.
//cirie uma função que receba um array de produtos e retorne o total das despesas.

const pasteis = [
    {nome: 'Carne', quantidadeVendida: 3, preco: 11.50, despesa: 8.00},
    {nome: 'Pizza', quantidadeVendida: 4, preco: 10.50, despesa: 7.00},
    {nome: 'Queijo',quantidadeVendida: 5, preco: 9.50, despesa: 6.50},
    {nome: 'Frango',quantidadeVendida: 2, preco: 11.00, despesa: 7.50}
]


//Somatoria total de despesas
function totalDespesas(produto){
    let totalDespesa = 0
    let somatorioTotalDespesa = 0
    for (i in produto){
        totalDespesa = produto[i].quantidadeVendida * produto[i].despesa
        somatorioTotalDespesa += totalDespesa
    }
    return somatorioTotalDespesa
}
console.log(totalDespesas(pasteis))


const soma = (total, valor) => total.preco + valor.preco
console.log(pasteis.reduce(soma))