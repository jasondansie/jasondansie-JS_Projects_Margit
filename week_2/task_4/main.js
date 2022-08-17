function getRandomNumbers()
{
    let num1, num2, num3;

    num1 = promptForNumber("first");
    num2 = promptForNumber("Second");
    num3 = promptForNumber("Third");

    num1 = parseInt(num1);
    num2 = parseInt(num2);
    num3 = parseInt(num3);

    if (num1 < 0 && num2 < 0 && num3 < 0) {
        console.log("Only Negatives");
    }
    else if(num1 > 0 && num2 > 0 && num3 > 0)
    {
        const sum = num1 + num2 + num3;
        console.log("The sum of your numbers are: " + sum);
        const multiplyNum = num1 * num2 * num3;
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
