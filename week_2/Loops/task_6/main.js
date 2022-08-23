function getAvarage()
{
    let numberAvarage = 0;
    let digitSum = 0;
    
    for (let i = 0; i < 5; i++) {
        let singleDigit = parseFloat(prompt(`Enter a digit #${i + 1}: .`));
        digitSum += singleDigit;      
    }

    numberAvarage = digitSum / 5;
    console.log(`There are 5 numbers, their total is ${digitSum} and their avarage is ${numberAvarage}.`)
}

getAvarage();