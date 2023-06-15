let datesDistance = function(dia,mes,ano) {
    // let date = String(ano) + "-" + String(mes) + "-" + String(dia) // esse modo também funciona.

    let date2 = String(ano + "-" + mes + "-" +  dia)

    let startDate = "1960-01-01"

    const diffInMs = new Date(startDate) - new Date(date2)
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24)

    let diffInDaysNumber = Number(diffInDays)

    if(diffInDaysNumber < 0) {
        diffInDaysNumber = diffInDaysNumber * -1
    }
     
    return `A diferença de dias entre 1960-01-01 e ${dia}-${mes}-${ano} é de ${Number(diffInDaysNumber).toFixed(0)}`
}

console.log(datesDistance(01,10,2022))