const circles = document.querySelectorAll(".circle");
const startButton = document.querySelector("#startGame");
const stopButton = document.querySelector("#stopGame");
const scoreText = document.querySelector("#score");
const missesText = document.querySelector("#misses");

//modal section
const overlay = document.querySelector("#overlay");
const modal = document.querySelector("#modal");
const closeButton = document.querySelector("#btnClose");
const modalText = document.querySelector("#modalText");

//audio files
const mooSound = document.querySelector("#moo_audio");
const springSound = document.querySelector("#spring_audio");
const twangSound = document.querySelector("#twang_audio");
const hillbillySound = document.querySelector("#hillbilly_audio");

let score = 0;
let count = 1;
let currentCircle;
let interval = 2000;
let timer = 0;
let isRunning = false;
let misses = 3;

activateCircle = () =>{

    if (currentCircle != null) {
        circles[currentCircle].textContent = currentCircle + 1;
    }
    
    //creates a random whole value between 0 and 3
    const rndNum = Math.floor(Math.random() * 4);

    //checks if the ramdom number is the same as last and if so recalls the function to get a new number
    if (rndNum == currentCircle) {
        activateCircle();
    }
    else{
        //checks the size of the circle array so we dont get a null value 
        if (currentCircle < circles.length) {
            circles[currentCircle].classList.remove("active");
        }

        // trackes the current circle so we can clear it next round
        currentCircle = rndNum;

        //highlights the newly picked circle
        circles[rndNum].classList.add("active");
       
        //decreases the interval to speed up the circles
        if (interval <= 0) {
            stopGame();
        } 
        else{
            interval -= 20;
            setTimer();
        }    
        
        //resets count for button press
        count = 1;
        
        //removes the number from the circle so it does not show over the cow icon
        circles[rndNum].textContent = " ";
        
    }
}

setTimer = () => {
    timer = setTimeout(activateCircle, interval)     
}
startGame = () => {

    springSound.play();
    hillbillySound.play();
    //resets the score text, and clears the active circle when the game starts
    if (currentCircle != null) {
        circles[currentCircle].textContent = currentCircle + 1;
    }
    isRunning = true;
    scoreText.textContent = 0;
    score = 0;
    setTimer();
    startButton.style.display = "none";
    stopButton.style.display = "initial";
}

stopGame = () => {
    twangSound.play();
    hillbillySound.pause();
    //sets the number in the circle back to what it was
    if (currentCircle != null) {
        circles[currentCircle].textContent = currentCircle + 1;
    }

    circles[currentCircle].classList.remove("active");
    clearTimeout(timer);
    startButton.style.display = "initial";
    stopButton.style.display = "none";
    isRunning = false;
    openModal();
}

checkCircle = (circle) => {
    if (circle.classList.contains("active")) 
    {
         //count is to make sure you cant get more then one point for pressing the active circle
        if (count == 1) {
            score++;
            scoreText.textContent = score;
            mooSound.play();
        } 
       
        count++;
    }
    else
    {
        misses--;
        missesText.textContent = misses;
    }
}

circles.forEach((circle) => {
    circle.addEventListener("click", function(){
        if (circle.click && isRunning == true) {
            if (misses > 0) {
                checkCircle(circle);
            }
            else{
               stopGame();
            }        
        }
    });
} )

function openModal() {

    if (score == 0) {
        setModaltext("Try again.");
    }
    else if(score < 6){
        setModaltext("Good job.");
    }
    else if(score < 11){
        setModaltext("Wow your doing awesome.");
    }
    else if(score < 16){
        setModaltext("Your going to make the top score.");
    }
    else if(score < 21){
        setModaltext("Wow amazing skills.");
    } 
    else{
        setModaltext("You are out of this world.");
    }
    
    overlay.classList.toggle("visible");
}

function closeModal() {
    overlay.classList.toggle("visible");
    //startGame();
}

setModaltext = (string) => {  
    modalText.textContent = `You scored ${score}, ${string}`;
}

startButton.addEventListener("click", startGame);
stopButton.addEventListener("click", stopGame);
closeButton.addEventListener("click", closeModal);

