function getAvarage()
{
    let numberAvarage = 0;
    let digitSum = 0;
    let singleDigit;

    for (let i = 0; i < 25; i++) {
        singleDigit = parseFloat(prompt(`Enter a digit #${i + 1}: .`));

        digitSum += singleDigit;      
    }

    numberAvarage = digitSum / 25;

    console.log(`There are 25 numbers, their total is ${digitSum} and their avarage is ${numberAvarage}.`)
}

getAvarage();