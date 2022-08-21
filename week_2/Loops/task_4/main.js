function getTwentyDigits()
{
    let evenDigitCount = 0;

    for (let i = 0; i < 20; i++) {

        const singleDigit = parseFloat(prompt(`Enter digit  #${i + 1}: `));
        
        if (singleDigit % 2 == 0) {
            evenDigitCount += 1;
        }
    }

    console.log(`There are ${evenDigitCount} even numbers.`)
}

getTwentyDigits();