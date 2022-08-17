function getRandomNumbers()
{
    let num1, num2, num3;

    num1 = parseInt(promptForNumber("first"));
    num2 = parseInt(promptForNumber("Second"));
    num3 = parseInt(promptForNumber("Third"));

    

    if (num1 < 0 && num2 < 0 && num3 < 0) {
        console.log("Only Negatives");
    }
    else if(num1 > 0 && num2 > 0 && num3 > 0)
    {   
        const sum = num1 + num2 + num3;
        const multiplyNum = num1 * num2 * num3;    
        console.log("The sum of your numbers are: " + sum);
        console.log("The multiplication of your numbers is: " + multiplyNum);
    }
    else
    {
        const sum = num1+num2+num3;
        console.log("The sum of your numbers are: " + sum);
    }
}

function promptForNumber(phrase)
{
    const num = window.prompt("Enter " + phrase + " number");
    return num;
}

getRandomNumbers();
