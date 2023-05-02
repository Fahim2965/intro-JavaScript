let milliseconds = 0
let seconds = 0
let minutes = 0

let digits = document.getElementById('digits')

let interval;

function START () {
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

        digits.innerHTML = String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0') + ':' + milliseconds /

    }, 10)
}

function STOP () {
    alert("You clicked the STOP button")
}

function RESET () {
    alert("You clicked the RESET button")
}