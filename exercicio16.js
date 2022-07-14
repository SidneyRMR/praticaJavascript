function ehBisesto(ano){
    if( (ano%4 === 0) && !(ano%100 === 0) && !(ano%400 === 0)){
        console.log('É bissexto')
    } else {
        console.log('Não é bissexto')
    }
}


ehBisesto(1604)
ehBisesto(2004)
ehBisesto(2016)
ehBisesto(1863)
ehBisesto(1400)