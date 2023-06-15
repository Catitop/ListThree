let daysBetweenDates = function(d1,d2) {
    const diffInMs = new Date(d2) - new Date(d1)

    const diffInDays = diffInMs / (1000 * 60 * 60 * 24)

    return `A diferença entre ${d1} e ${d2} é de ${diffInDays * -1} dias.`
}

console.log(daysBetweenDates("2022-10-14","2003-10-14"))