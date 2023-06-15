//Feito no dia 26/11/2022

let confirmTheDate = function(day,month,year) {
    if (month > 12 || day > 31 ) {
        return console.log("Data Inválida")
    }

    let leapYear = String( year / 4 )
    if (leapYear.includes(".")) {
        if (month == 2) {
            if (day > 29) {
                return console.log("Data Inválida")
            }
        }
    }

    if (month == 4 || month == 6 || month == 9 || month == 11 ) {
        if (day > 30) {
            return console.log("Dia Inválido")
        }
    } else if (month == 2) {
        if (day > 29) {
            return console.log("Dia Inválido")
        }
    }

    return console.log("Data Válida")
    
}

console.log(confirmTheDate(29,13,2024))