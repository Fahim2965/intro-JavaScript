let milliseconds = 0
let seconds = 0
let minutes = 0

let digits = document.getElementById('digits')
let startButton = document.getElementById('st')
let loopButton = document.getElementById('lp')

let interval;

function start () {

startButton.disabled = true
loopButton.disabled = false

    interval = setInterval(function () {
        milliseconds = milliseconds + 10

        if (milliseconds >= 1000) {
            seconds = seconds + 1
            milliseconds = 0
        }
        
        if (seconds >= 60) {
            minutes += 1
            seconds = 0
        }

        digits.innerHTML = String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0') + ':' + milliseconds/10

    }, 10)
}

function stop () {
    clearInterval(interval)
    startButton.disabled = false
}

function reset () {
    stop()
    milliseconds = 0
    seconds = 0
    digits.innerHTML = '00:00:00'
    laps.innerHTML = ""
}

function loop () {
    
}





