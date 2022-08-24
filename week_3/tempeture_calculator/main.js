const convertTemp = (id, val) => {
  console.log(id, val);
  const cel = document.querySelector("#celcius");
  const fahr = document.querySelector("#fahrenheit");
  const kel = document.querySelector("#kelvin");

  if (id == "celcius") {
    fahr.value = (val * 1.8 + 32).toFixed(2);
    kel.value = (val + 273.15).toFixed(2);
  } else if (id == "fahrenheit") {
    kel.value = ((val - 32) / 1.8 + 273.15).toFixed(2);
    cel.value = ((val - 32) / 1.8).toFixed(2);
  } else if (id == "kelvin") {
    fahr.value = ((val - 273.15) * 1.8 + 32).toFixed(2);
    cel.value = ((val - 273.15) / 1.8).toFixed(2);
  }
};
