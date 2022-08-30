const results = document.querySelector("#Results");

let toppingPrice = 0;
let sizePrice = 0;
let pizzaSize = "";
let deliveryPrice = 0;
let deliverType = "";
let toppingCount = 0;

const getTopping = (name) => {
    const count = document.querySelectorAll (`input[type="checkbox"]:checked`).length; 
    const isChecked = document.getElementById("checkbox").checked;
    
    toppingCount = count;



    switch (count) {
        case 5:
            toppingPrice = 0.5;
            break;
        case 6:
            toppingPrice = 1;
            break;
        case 7:
            toppingPrice = 1.5;
            break;
        case 8:
            toppingPrice = 2;
            break;
        case 9:
            toppingPrice = 2.5;
        break;
        case 10:
            toppingPrice = 3;
            break;
        default:
            break;
     }

    setResults();
}

const getSizePrice = (id, price) => {   
    sizePrice = parseFloat(price);
    pizzaSize = id;

    setResults();
}

const getDeliveryPrice = () => {
     
    let deliveryElement = document.getElementById("pizzaShipping"); 
    
    deliveryPrice = parseFloat(deliveryElement.value);
    deliverType = deliveryElement.options[deliveryElement.selectedIndex].text;

    setResults();
}

setResults = () => {
    results.textContent = `You chose pizza ${pizzaSize} for $${sizePrice}, with ${toppingCount} toppings for $${toppingPrice} and ${deliverType} for $${deliveryPrice} This pirce of the pizza is +${sizePrice + toppingPrice + deliveryPrice} `;
}
