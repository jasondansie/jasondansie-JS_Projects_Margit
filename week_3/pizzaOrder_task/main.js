const form = document.querySelector("form");
const customer = document.querySelector("#customerName");
const size = document.querySelectorAll("[name='pizzaSize']");
const toppings = document.querySelectorAll (`input[type="checkbox"]`);
const delivery = document.querySelector("#pizzadelivery");

const toppingResults = document.querySelector("#toppingResults");
const priceResults = document.querySelector("#priceResults");

let customerName = "";
let sizePrice = 0;
let sizeText = "";
let toppingResult = [];
let toppingPrice = 0;
let deliveryText = delivery.options[delivery.selectedIndex].value;
let deliveryPrice = 0;
let totalPrice = 0;

const takeOrder = (e) => {
    e.preventDefault();

    size.forEach((item) => {
        if (item.checked) {
            sizePrice = item.value;
        }
    })

    toppings.forEach((item) => {
        if (item.checked) {
            toppingResult.push(item.value);
        }
    })

    getTopping(toppingResult.length);

    if (deliveryText == 'home delivery') { 
        deliveryPrice += 5;
    }

    totalPrice = parseFloat(sizePrice) + parseFloat(toppingPrice) + parseFloat(deliveryPrice);
    customerName = customer.value;

    setResults();
    form.reset();
}

form.addEventListener("submit", takeOrder);

const getTopping = (toppingResult) => {

    switch (toppingResult) {
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
            toppingPrice = 0;
            break;a
     }
}

setResults = () => {
    toppingResults.textContent = `Hello ${customerName}, your toppings are: ${toppingResult.join()}`;
    priceResults.textContent = `You chose a pizza for $${sizePrice}, with ${toppingResult.length} toppings for $${toppingPrice} and ${deliveryText} for $${deliveryPrice} The pirce of the pizza is +${totalPrice} `;
}
