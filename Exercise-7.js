let setTheOrder = function(num1,num2,num3) {
    if (num1 < num2 && num2 < num3) {
        return `A ordem crescente ficou: ${num1}, ${num2}, ${num3}`
    } else if (num2 < num1 && num1 < num3) {
        return `A ordem crescente ficou: ${num2}, ${num1}, ${num3}`
    } else if (num3 < num2 && num2 < num1) {
        return `A ordem crescente ficou: ${num3}, ${num2}, ${num1}`
    } else if (num1 < num3 && num3 < num2) {
        return `A ordem crescente ficou: ${num1}, ${num3}, ${num2}`
    } else if (num2 < num3 && num3 < num1) {
        return `A ordem crescente ficou: ${num2}, ${num3}, ${num1}`
    } else if (num3 < num1 && num1 < num2) {
        return `A ordem crescente ficou: ${num3}, ${num1}, ${num2}`
    } else if (num1 == num2 && num2 == num3) {
        return `Os três números são iguais: ${num1}`
    }
}

console.log(setTheOrder(3,3,3))