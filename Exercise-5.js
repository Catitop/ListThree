let setTheOrder = function(num1,num2,num3) {
    if (num1 < num2 && num1 < num3) {
        return `O menor número é ${num1}`
    } else if (num2 < num1 && num2 < num3) {
        return `O menor número é ${num2}`
    } else if (num3 < num1 && num3 < num2) {
        return `O menor número é ${num3}`
    } else {
        return `Os números são iguais a ${num1}`
    }
}

console.log(setTheOrder(17,9,3))