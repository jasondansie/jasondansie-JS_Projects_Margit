const form = document.querySelector("form");
const customer = document.querySelector("#customerName");
const size = document.querySelectorAll("[name='pizzaSize']");
const toppings = document.querySelectorAll (`input[type="checkbox"]`);
const delivery = document.querySelector("#pizzadelivery");

const takeOrder = (e) =>{
    e.preventDefault();

    let customerName = customer.value;
    let sizeResult = "";
    let toppingResult = [];
    let deliveryResult = delivery.options[delivery.selectedIndex].value;

    size.forEach((item) => {
        if (item.checked) {
            sizeResult = item.value;
        }
    })

    toppings.forEach((item) => {
        if (item.checked) {
            toppingResult.push(item.value);
        }
    })

    console.log("button was pressed.");
    console.log(customerName);
    console.log(sizeResult);
    console.log(toppingResult);
    console.log(deliveryResult);
}

form.addEventListener("submit", takeOrder);

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
