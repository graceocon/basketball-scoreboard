
let homeScore = document.getElementById("home-score")
let score = 0

function homePlusOne() {
    score += 1
    homeScore.textContent = score
}

function homePlusTwo() {
    score += 2
    homeScore.textContent = score
}

function homePlusThree() {
    score += 3
    homeScore.textContent = score
}

let guestScore = document.getElementById("guest-score")
let score2 = 0

function guestPlusOne() {
    score2 += 1
    guestScore.textContent = score2
}

function guestPlusTwo() {
    score2 += 2
    guestScore.textContent = score2
}

function guestPlusThree() {
    score2 += 3
    guestScore.textContent = score2
}