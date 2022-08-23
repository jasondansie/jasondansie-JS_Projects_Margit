function getAvarage()
{
    let numberAvarage = 0;
    let numberCount = 0;
    let digitSum = 0;
    let doContinue = "";
    

    do {
        const singleDigit = parseFloat(prompt(`Enter a digit: `));
        doContinue = askToContinue();
    
        if (doContinue == "y" || doContinue == "n") {
        digitSum += singleDigit;
        numberCount += 1;         
        }
        else
        {
            console.log("You did not enter y or n. Try again!")
            doContinue = askToContinue();
        }    
    } while (doContinue == "y" );

    numberAvarage = digitSum / numberCount;
    console.log(`There are ${numberCount} numbers, their total is ${digitSum} and their avarage is ${numberAvarage}.`)
}

function askToContinue()
{
    return prompt(`Do you want to continue y/n?`);;
}

getAvarage();