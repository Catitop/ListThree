let classifyTriangles = function(side1,side2,side3) {
    if (side1 == side2 && side1 == side3) {
        return `Todos os lados possuem o mesmo valor: ${side1}, ou seja, é um triângulo equilátero`
    } else if (side1 == side2 || side1 == side3 || side3 == side2) { if (side1 == side2) {
        return `Somente dois lados possuem o mesmo valor: ${side1} e ${side2}, ou seja, é um triângulo isósceles.`
    } else if (side1 == side3) {
        return `Somente dois lados possuem o mesmo valor: ${side1} e ${side3}, ou seja, é um triângulo isósceles.`
    } else if (side2 == side3) {
        return `Somente dois lados possuem o mesmo valor: ${side2} e ${side3}, ou seja, é um triângulo isósceles.`
    }
        
    } else {
        return `Todos os lados são diferentes, ${side1}, ${side2}, ${side3}, ou seja, é um triângulo escaleno.`
    }
}

console.log(classifyTriangles(1,7,3))

console.log(classifyTriangles(3,5,5))

console.log(classifyTriangles(6,6,6))