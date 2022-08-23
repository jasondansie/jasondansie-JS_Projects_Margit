function askTenNumbers()
{
    let biggestNumer = 0;
    let nextBiggestNuber = 0;
    
    for (let i = 0; i < 10; i++) {
        const singleNumber = parseFloat(prompt(`Enter a digit #${i}`));
        if (singleNumber > biggestNumer) 
        {
            biggestNumer = singleNumber;
        } 
        else if (singleNumber > nextBiggestNuber)
        {
            nextBiggestNuber = singleNumber;
        }       
    }
    console.log(`The biggest numger is ${biggestNumer} and the second biggest number is ${nextBiggestNuber}`)
}

askTenNumbers();