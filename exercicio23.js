// Criar uma função que receba uma string e conte quantas palavras tem nela

str = 'Olá, recrutador! Me ajude a conquistar minha primeira vaga!'

function contaPalavras(string){
    return string.split(' ')
     
}
console.log(`Esta frase possui ${contaPalavras(str).length} palavras`)