//criar função que inverte a posiçao da chave valor de um objeto

objeto = {
    'valA': 10,
    'valB': 20,
    'valC': 30
}


// let objeto2 = new Object
// Object.entries(objeto).forEach(([chave,valor])=>{
//     objeto2 += `{${valor}: ${chave}}`
// })

// console.log(objeto2)

//Verificar solução do professor
function inverter(objeto){
    const objetoInvertido = {}

    Object.entries(objeto).forEach(parChaveValor => {
        const chave = 0,
            valor = 1

        objetoInvertido[parChaveValor[valor]] = parChaveValor[chave]
    })
    return objetoInvertido
}


console.log(inverter(objeto))