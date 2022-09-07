const tableDiv = document.querySelector("#tableDiv");
const license = document.querySelector("#license");
const make = document.querySelector("#make");
const model = document.querySelector("#model");
const owner = document.querySelector("#tabownerleDiv");
const carPrice = document.querySelector("#car_pirce");
const carColor = document.querySelector("#car_color");
const addCar = document.querySelector("#add");
const resetArray = document.querySelector("#reset");

let carsTable = document.createElement('table');

const CarsArray = [];

buildTable = () => {
    let count = 0;
    for (let row of CarsArray) 
    {
        carsTable.insertRow();
        
        for (let cell of row) 
        {
            let newCell = carsTable.rows[carsTable.rows.length - 1].insertCell();
    
            newCell.textContent = cell;
            if (count == 0) {
                console.log("count: ", count);
                newCell.style.backgroundColor = "rgb(99, 148, 237)";
                newCell.style.color = "white";
            } 
            else if (count % 2 == 0)
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

  tableDiv.appendChild(carsTable);
}

  addRow = () => {
    
    
    if (!license) {
        CarsArray.push(["003-456", "Ford", "Mustang", "110000", "Red"]);
        CarsArray.push([`${license}`, make, model, carPrice, carColor]);
    }
    else{
        CarsArray.push(["License", "Make", "Model", "Price", "Color"]);
    }
    
    buildTable();
  }

  addCar.addEventListener("click", addRow);


  console.log("table: ", carsTable);
  