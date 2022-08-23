function calculateGasPrice()
{
    const price = document.getElementById("priceInput").value;
    const money = document.getElementById("moneyInput").value;
    
    let liters = money/price;
    if (liters < 10) {
        document.getElementById("gasPriceResults").textContent = `You could get about ${liters} litters, Ups, you have to stay here.`;
    }
    else
    {
        document.getElementById("gasPriceResults").textContent = `You could get about ${liters} litters, good, you can escape now.`;
    }
}