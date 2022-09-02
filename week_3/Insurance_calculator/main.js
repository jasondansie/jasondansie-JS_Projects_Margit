const form = document.querySelector("form");
const preCondition = document.querySelectorAll("[name='preCondition']");
const goodHabits = document.querySelectorAll (`[name="goodHabit"]`);
const badHabits = document.querySelectorAll (`[name="badHabit"]`);
const customerAge = document.querySelector("#customerAge");
const customer = document.querySelector("#customerName");

const results = document.querySelector("#answer");

let riskScore = 500;
let age = "";
let name = "";

const calculate = (e) => {
    e.preventDefault();

    age = customerAge.value;
    customerName = customer.value;

    if (age >= 18 && age <= 25) {
        riskScore = (riskScore * .10) + riskScore;
        console.log("18-25 score: ", riskScore);
    }
    else if (age >= 26 && age <= 35) {
        riskScore = (riskScore * .30) + riskScore;
        console.log("26-35 score: ", riskScore);
    }
    else if (age >= 36 && age <= 45) {
        riskScore = (riskScore * .60) + riskScore;
        console.log("36-45 score: ", riskScore);
    }
    else if (age >= 46 && age <= 55) {
        riskScore = (riskScore * 1.00) + riskScore;
        console.log("46-55 score: ", riskScore);
    }
    else if (age >= 56 && age <= 65) {
        riskScore = (riskScore * 1.50) + riskScore;
        console.log("56-65 score: ", riskScore);
    }
    else if (age >= 65){
        riskScore = (riskScore * 2.10) + riskScore;
        console.log("<65 score: ", riskScore);
    }

    preCondition.forEach((item) => {
        if (item.checked) {
            riskScore = (riskScore * 0.01) + riskScore;
        }
    })
    goodHabits.forEach((item) => {
        if (item.checked) {           
            riskScore = riskScore -(riskScore * 0.05);            
        }
    })
    badHabits.forEach((item) => {
        if (item.checked) {
            riskScore = (riskScore * 0.05) + riskScore;
        }
    })
    
    form.reset();
    results.textContent = `Hello ${customerName} your risk score is ${riskScore}`
}

form.addEventListener("submit", calculate);
