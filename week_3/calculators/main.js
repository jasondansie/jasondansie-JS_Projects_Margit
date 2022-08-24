function calculateGasPrice() {
  const price = document.getElementById("priceInput").value;
  const money = document.querySelector("#moneyInput").value;

  const answer = document.querySelector("#gasPriceResults");
  const answerDiv = document.querySelector("#gasPriceDiv");

  let liters = Math.floor(money / price);

  if (liters < 10) {
    answer.textContent = `You could get about ${liters} litters, Ups, you have to stay here.`;
    answerDiv.style.backgroundColor = "red";
  } else {
    answer.textContent = `You could get about ${liters} litters, good, you can escape now.`;
    answerDiv.style.backgroundColor = "green";
  }
}
