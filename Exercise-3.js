let fullNumbers = function(option,num1,num2,num3) {
    if (option !== 1 && option !== 2 && option !== 3) {
        return "Número inválido"
    } else if (option == 1) {
        num1 = num1 + option * 2
    } else if (option == 2) {
        num2 = num2 + option * 3
    } else if (option == 3) {
        num3 = num3 + option * 4
    }

    return `A Opção escolhida foi de ${option} e os valores de Num1, Num2 e Num3 ficaram respectivamente ${num1}, ${num2}, ${num3}.`
}

console.log(fullNumbers(2,3,5,4))