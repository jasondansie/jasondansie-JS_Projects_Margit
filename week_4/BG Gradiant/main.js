const radioButton = document.querySelectorAll(`input[name="direction"]`);
const colorButton1 = document.querySelector("#color1");
const colorButton2 = document.querySelector("#color2");
const gradientArea = document.querySelector("section").style.backgroundImage;

let direction = " to bottom";
let color1 = "red";
let color2 = "orange";

const cssText = document.querySelector("#cssText").textContent;
 
changeColor = () => {
    if (color1 != "undefined") {
        color1 = colorButton1.value;
    }
    if (color2 != "undefined"){
        color2 = colorButton2.value;
    }  
    gradientArea= `linear-gradient(${direction}, ${color2}, ${color1})`;
    cssText = `CSS: linear-gradient(${direction}, ${color2}, ${color1})`;
}

radioButton.forEach((button) => {
    button.addEventListener("change", function() {
        if (button.id != "middle") {
            direction = `to ${button.id}`;
            gradientArea= `linear-gradient(${direction}, ${color2}, ${color1})`;
            cssText = `CSS: linear-gradient(${direction}, ${color2}, ${color1})`;
        }     
      });
});

colorButton1.addEventListener("change", changeColor);
colorButton2.addEventListener("change", changeColor);