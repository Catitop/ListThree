let crescentOrder = function(num1,num2) {
    if (num1 == num2) {
        return `Os numeros são iguais entre si: ${num1}`
    } else if (num1 > num2) {
        return `A ordem decrescente dos números indicados fica: ${num1}-${num2}`} else {
            return `A ordem decrescente dos números indicados fica: ${num2}-${num1}`
        }
    
}

console.log(crescentOrder(9,9))