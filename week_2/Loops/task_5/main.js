function getAvarage()
{
    let numberAvarage = 0;
    let numberCount = 0;
    let digitSum = 0;
    let singleDigit;

    do {
        singleDigit = parseFloat(prompt(`Enter a digit. Enter 0 to end.`));
        digitSum += singleDigit;
        numberCount++;      
    } while (singleDigit != 0 );

    numberAvarage = digitSum / (numberCount - 1);
    console.log(`There are ${numberCount} numbers, their total is ${digitSum} and their avarage is ${numberAvarage}.`)
}

getAvarage();