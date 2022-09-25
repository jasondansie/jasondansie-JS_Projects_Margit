const circles = document.querySelectorAll(".circle");
const startButton = document.querySelector("#startGame");
const stopButton = document.querySelector("#stopGame");
const scoreText = document.querySelector("#score");

let score = 0;
let count = 0;
let currentCircle = 10;
let activeCircle ="";
let interval = 2000;
let timer = 0;

activateCircle = () =>{
    const rndNum = Math.floor(Math.random() * 4);

    if (rndNum == currentCircle) {
        activateCircle();
    }
    else{

        console.log("currtetnCircle: ", currentCircle);
        console.log(rndNum);
    }
}

setTimer = () => {
    timer = setTimeout(activateCircle(), interval);
}
startGame = () => {
    console.log("started");
    setTimer();
}

stopGame = () => {
    console.log("stoped");
    clearTimeout(timer);
}

updateScore = () =>{
    score++;
    scoreText.textContent = score;
}

checkCircle = (circle) => {
    if (circle.classList.contains("active")) 
    {
        console.log("active pressed");
        updateScore();
    }
    else
    {

    }
}

circles.forEach((circle) => {
    circle.addEventListener("click", function(){
        if (circle.click) {
            checkCircle(circle); 
            activeCircle = circle;  
        }
    });

    if (circle.classList.contains("active")) {
        currentCircle = count;
        console.log("count: ", count);
    }

    count++;
} )

startButton.addEventListener("click", startGame);
stopButton.addEventListener("click", stopGame);

