function askTenNumbers()
{
    let biggestNumer = 0;
    let smallestNumber = 0;
    let numberSum = 0;
    let numberAvarage = 0;
    
    for (let i = 0; i < 10; i++) 
    {
        const singleNumber = parseFloat(prompt(`Enter a digit #${i + 1}`));

        numberSum += singleNumber;

        if (singleNumber > biggestNumer) 
        {
            biggestNumer = singleNumber;
        } 
        
        if (smallestNumber == 0) {
            smallestNumber = singleNumber;
        } else {
            if (singleNumber < smallestNumber) {
                smallestNumber = singleNumber;
            }
        }
    }

    numberAvarage = numberSum / 10;
    console.log(`The biggest numger is ${biggestNumer} and the smallest number is ${smallestNumber}`);
    console.log(`you entered 10 numbers and the avarage of those numbers is  ${numberAvarage}`);
}

askTenNumbers();