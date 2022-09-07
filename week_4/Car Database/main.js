const carTableBody = document.querySelector("#carTableBody");
const license = document.querySelector("#license");
const make = document.querySelector("#make");
const model = document.querySelector("#model");
const owner = document.querySelector("#owner");
const carPrice = document.querySelector("#car_price");
const carColor = document.querySelector("#car_color");
const addCar = document.querySelector("#add");
const resetCarsArray = document.querySelector("#reset");
const form = document.querySelector("form");

const CarsArray = [];

buildTable = () => {
    
    let count = 0;
    let carsTable = document.createElement('table');
    
    for (let row of CarsArray) 
    {
        carTableBody.insertRow();
        
        for (let cell of row) 
        {
            let newCell = carTableBody.rows[carTableBody.rows.length - 1].insertCell();
    
            newCell.textContent = cell;

            if (count % 2 == 0)
            {
                console.log("count: ", count);
                newCell.style.backgroundColor = "gray";
                newCell.style.color = "black";   
            }
            else
            {
                console.log("count: ", count);
                newCell.style.backgroundColor = "white";
                newCell.style.color = "black"; 
            }  
        }
        count++;
    }

    carTableBody.appendChild(carsTable);
}

addRow = () => {   
    if (license.value != "") {
        CarsArray.push([`${license.value}`, `${make.value}`, `${model.value}`, `${owner.value}`, `${carPrice.value}`, `${carColor.value}`]);
    }
    
    carTableBody.innerHTML = "";
    buildTable();
}

addCar.addEventListener("click", addRow);

resetCars = () =>{
    CarsArray.length = 0;
    while (CarsArray.length > 0) {
        CarsArray.pop();
      }
    while (carTableBody.childNodes.length) {
        carTableBody.removeChild(carTableBody.childNodes[0]);
      }
}

resetCarsArray.addEventListener("click", resetCars);

addRow();