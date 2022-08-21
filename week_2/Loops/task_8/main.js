function smallestNumber() 
{

    let  numberCount = parseInt(prompt("How many numbers do you want to enter: "));
    let smallestNum = 0;

    for (let i = 0; i < numberCount; i++) 
    {
        singleDigit = parseFloat(prompt(`Enter a digit #${numberCount}`));
        if (smallestNum == 0) {
            smallestNum = singleDigit;
        } else {
            if (singleDigit < smallestNum) {
                smallestNum = singleDigit;
            }
        }
    } 

    console.log(`The smallest number is ${smallestNum}`)
}

smallestNumber();