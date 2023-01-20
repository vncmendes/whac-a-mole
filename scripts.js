const squares = document.querySelectorAll(".square")
const scoreDisplay = document.getElementById("score")
const timeLeftDisplay = document.getElementById("timeLeft")

let result = 0
let hitPosition = null
let currentTime
let randomSquare = null
let timeLeft = 5
let shakeMole

function randomMole() {
  squares.forEach(square => (
    square.classList.remove("mole")
  ))

  randomSquare = squares[Math.floor(Math.random() * 9)]
  randomSquare.classList.add("mole")
}

function moveMole() {
  shakeMole = setInterval(randomMole, 500)
}

function countDown() {
  timeLeft--
  timeLeftDisplay.textContent = timeLeft

  if (timeLeft == 0) {
    clearInterval(currentTime)
    clearInterval(shakeMole)
    alert('Your time is over. You final score is: ' + result)
  }
}

squares.forEach(square => {
  square.addEventListener("mousedown", () => {
    if (square.id == randomSquare.id) {
      result++
      scoreDisplay.innerHTML = result
      randomSquare = null
    }
  })
})

currentTime = setInterval(countDown, 1000)

moveMole()
countDown()