let carSpeed = function(meters,sec1,sec2) {
    let carSpeed1 = (meters / 1000) / (sec1 / 3600)
    let carSpeed2 = (meters / 1000) / (sec2 / 3600)

    if (carSpeed1 > carSpeed2) {
        return `A velocidade do Carro 1 é maior que a do Carro 2, sendo suas velocidades, respectivamente ${carSpeed1.toFixed(2)}Km/h e ${carSpeed2.toFixed(2)}Km/h.`
    } else {
        return `A velocidade do Carro 2 é maior que a do Carro 1, sendo suas velocidades, respectivamente ${carSpeed2.toFixed(2)}Km/h e ${carSpeed1.toFixed(2)}Km/h.`
    }
}

console.log(carSpeed(400,500,700))