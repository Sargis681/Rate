function clock(){

    setInterval(() => {
        const day = new Date()

        const hours = day.getHours()
        const minutes = day.getMinutes()
        const seconds = day.getSeconds()

        timeNumb.innerHTML = `
            <p>yerevan</p>
            <p>${hours}:${minutes}:${seconds}</p>
        `
    }, 0)
}
clock()