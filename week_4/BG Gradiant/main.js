const radioButton = document.querySelectorAll(`input[name="direction"]`);
const colorButton1 = document.querySelector("#color1");
const colorButton2 = document.querySelector("#color2");
const gradientArea = document.querySelector("section");

let direction = " to down";
let color1 = "red";
let color2 = "orange";

const cssText = document.querySelector("#cssText");
 
changeColor = () => {
    if (color1 != "undefined") {
        color1 = colorButton1.value;
    }
    if (color2 != "undefined"){
        color2 = colorButton2.value;
    }  
    changeGradient();
}

radioButton.forEach((button) => {
    button.addEventListener("change", function() {
        changeGradient();
      });
});

changeGradient = () => {
    gradientArea.style.backgroundImage = `linear-gradient(${direction}, ${color1}, ${color2})`;
    changeCSSText();
}

changeCSSText = () => {
    cssText.textContent = `CSS: linear-gradient(${direction}, ${colorButton1.value}, ${colorButton2.value})`;
}

colorButton1.addEventListener("change", changeColor);
colorButton2.addEventListener("change", changeColor);








