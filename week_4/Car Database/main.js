const carTableBody = document.querySelector("#carTableBody");
const license = document.querySelector("#license");
const make = document.querySelector("#make");
const model = document.querySelector("#model");
const owner = document.querySelector("#owner");
const carPrice = document.querySelector("#car_price");
const carColor = document.querySelector("#car_color");
const addCar = document.querySelector("#add");
const resetCarsArray = document.querySelector("#reset");
const carSearchButton = document.querySelector("#carSearch");
const searchBox = document.querySelector("#searchBox");
const searchResults = document.querySelector("#searchResults");
const form = document.querySelector("form");

const CarsArray = [];

class Car{
    constructor(license, make, model, name, price, color)
    {
        this.license = license;
        this.make = make;
        this.model = model;
        this.name = name;
        this.price= price;
        this.color = color;
    }
}

buildTable = () => {
    
    let count = 0;
    let carsTable = document.createElement('table');
    
    for (let row of CarsArray) 
    {
        carTableBody.insertRow();
        
        for (let value in row) 
        {
            let newCell = carTableBody.rows[carTableBody.rows.length - 1].insertCell();
            newCell.textContent = row[value];
        }
        count++;
    }

    carTableBody.appendChild(carsTable);
}

addRow = (e) => { 
    e.preventDefault();
    newCar = new Car(`${license.value}`, `${make.value}`, `${model.value}`, `${owner.value}`, `${carPrice.value}`, `${carColor.value}`);
    console.log(newCar);
    if (license.value != "") {
        CarsArray.push(newCar);
    }
    
    carTableBody.innerHTML = "";
    buildTable();
}

addCar.addEventListener("click", addRow);

resetCars = () => {
    CarsArray.length = 0;
    while (CarsArray.length > 0) {
        CarsArray.pop();
      }
    while (carTableBody.childNodes.length) {
        carTableBody.removeChild(carTableBody.childNodes[0]);
      }
      
      document.querySelector("#searchForm").reset(); 
      document.querySelector("#carForm").reset(); 
}

resetCarsArray.addEventListener("click", resetCars);

searchForCar = (e) => {
    e.preventDefault();
   
    let foundCar = [];

    CarsArray.forEach(car => {
        console.log("car",car);
        if (car.license == searchBox.value) {
            foundCar = car;
        }
        else
        {
            foundCar == "";
        }
    });

    if (foundCar != "") 
    {
        searchResults.textContent = `license number ${foundCar.license} is a ${foundCar.make} ${foundCar.model} and it belongs to ${foundCar.name} and it is ${foundCar.color}.`;
    }
    else
    {
        searchResults.textContent = "No car found with that license number"
    }
}

carSearch.addEventListener("click", searchForCar);

addRow();