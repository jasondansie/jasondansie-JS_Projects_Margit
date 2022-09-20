const circles = document.querySelectorAll(".circle");
const startButton = document.querySelector("#startGame");
const stopButton = document.querySelector("#stopGame");


startGame = () => {
    console.log("started");
}

stopGame = () => {
    console.log("stoped");
}

startButton.addEventListener("click", startGame);
stopButton.addEventListener("click", stopGame);

