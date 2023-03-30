function startTimer(duration, display) {
    let time = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(time / 60, 10);
        seconds = parseInt(time % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--time < 0) {
            time = duration;
            this.endGame()
        }
    }, 1000);

}
let fiveMinutes = 60 * 5,
    display = document.getElementById("time");
startTimer(fiveMinutes, display);