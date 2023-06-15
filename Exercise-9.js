let setTheDateOrder = function(day1,month1,year1,day2,month2,year2) {
    if (year1 > year2) {
        return console.log(`A ordem das datas é de: ${day2}/${month2}/${year2} --- ${day1}/${month1}/${year1}`)
    } else if (year2 > year1) {
        return console.log(`A ordem das datas é de: ${day1}/${month1}/${year1} --- ${day2}/${month2}/${year2}`)
    } else if (year1 == year2) {
        if (month1 > month2) {
            return console.log(`A ordem das datas é de: ${day2}/${month2}/${year2} --- ${day1}/${month1}/${year1}`)
        } else if (month2 > month1) {
            return console.log(`A ordem das datas é de: ${day1}/${month1}/${year1} --- ${day2}/${month2}/${year2}`)
        } else if (month1 == month2) {
            if (day1 > day2) {
                return console.log(`A ordem das datas é de: ${day2}/${month2}/${year2} --- ${day1}/${month1}/${year1}`)
            } else if (day2 > day1) {
                return console.log(`A ordem das datas é de: ${day1}/${month1}/${year1} --- ${day2}/${month2}/${year2}`)
            } else if (day1 == day2) {
                return console.log("As datas são idênticas.")
            }
        }
    }
}

console.log(setTheDateOrder(14,01,2000,22,02,2000))