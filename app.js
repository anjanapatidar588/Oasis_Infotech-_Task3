function convertTemp() {
  const input = parseFloat(document.getElementById("inputTemp").value);
  const from = document.getElementById("fromUnit").value;
  const to = document.getElementById("toUnit").value;
  let result;

  if (isNaN(input)) {
    document.getElementById("result").innerText = "Please enter a valid number!";
    return;
  }

  // Convert input to Celsius first
  let celsius;
  if (from === "C") {
    celsius = input;
  } else if (from === "F") {
    celsius = (input - 32) * 5 / 9;
  } else if (from === "K") {
    celsius = input - 273.15;
  }

  // Convert Celsius to target unit
  if (to === "C") {
    result = celsius;
  } else if (to === "F") {
    result = (celsius * 9 / 5) + 32;
  } else if (to === "K") {
    result = celsius + 273.15;
  }

  document.getElementById("result").innerText = 
    `${input}°${from} = ${result.toFixed(2)}°${to}`;
}
