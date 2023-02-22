function calculateBMI() {
  // Get input values
  let weight1 = document.getElementById("weight1").value;
  let height1 = document.getElementById("height1").value;
  let weight2 = document.getElementById("weight2").value;
  let height2 = document.getElementById("height2").value;

  // Calculate BMI for each person
  let bmi1 = weight1 / (height1 * height1);
  let bmi2 = weight2 / (height2 * height2);

  // Display BMI results
  document.getElementById("bmi-result-1").innerHTML = "BMI: " + bmi1.toFixed(2);
  document.getElementById("bmi-result-2").innerHTML = "BMI: " + bmi2.toFixed(2);

  document.getElementById("comparison-result").innerHTML =
    "The BMI of Pete is " +
    bmi1.toFixed(2) +
    " and the BMI of Lucas is " +
    bmi2.toFixed(2) +
    ". Pete's BMI is higher than Lucas's BMI that is " +
    (bmi1 > bmi2).toString() +
    ".";

  // Part A
  console.log("BMI Part A - BMI of Pete and Lucas");
  console.log(
    "The BMI of Pete is " +
      bmi1.toFixed(2) +
      " and the BMI of Lucas is " +
      bmi2.toFixed(2) +
      ". Pete's BMI is higher than Lucas's BMI that is " +
      (bmi1 > bmi2).toString() +
      "."
  );

  // Part C
  // Update BMI results log
  console.log("BMI Part C - Higher BMI of Pete and Lucas");
  if (bmi1 > bmi2) {
    console.log(
      "Peter's BMI (" +
        bmi1.toFixed(1) +
        ") is higher than Lucas' BMI (" +
        bmi2.toFixed(1) +
        ")"
    );
  } else if (bmi2 > bmi1) {
    console.log(
      "Lucas' BMI (" +
        bmi2.toFixed(1) +
        ") is higher than Peter's BMI (" +
        bmi1.toFixed(1) +
        ")"
    );
  } else {
    document.getElementById("comparison-result").innerHTML =
      "Peter and Lucas have the same BMI(" + bmi1.toFixed(1) + ")";
  }
}

// Part B - Temperature Conversion
function TemperaturePart2() {
  const temperatureResult1 = document.getElementById("temperatureResult1");
  const temperatureResult2 = document.getElementById("temperatureResult2");
  let celsius = 100;
  let fahrenheit = celsius * (9 / 5) + 32;
  console.log("Temperature Conversion Part B - Celsius to Fahrenheit");
  console.log(celsius + "\u00B0C is " + fahrenheit + "\u00B0F.");

  let fahrenheit2 = 32;
  let celsius2 = (fahrenheit2 - 32) * (5 / 9);
  console.log("Temperature Conversion Part B - Fahrenheit to Celsius");
  console.log(fahrenheit2 + "\u00B0F is " + celsius2 + "\u00B0C");

  temperatureResult1.innerText = celsius + "\xB0C is " + fahrenheit + "\xB0F.";
  temperatureResult2.innerText =
    fahrenheit2 + "\xB0F is " + celsius2 + "\xB0C.";
}

function CovertCelsiusToFahrenheit() {
  const celsiusInput = document.getElementById("celsius");
  const fahrenheitResult = document.getElementById("fahrenheitResult");

  // Part D - Temperature Conversion
  console.log("Temperature Conversion Part D - Celsius to Fahrenheit");
  // Convert Celsius to Fahrenheit
  if (celsiusInput.value !== "") {
    const celsius = parseFloat(celsiusInput.value);
    const fahrenheit = celsius * (9 / 5) + 32;
    fahrenheitResult.innerText =
      celsius.toFixed(2) + "\xB0C is " + fahrenheit.toFixed(2) + "\xB0F.";
    fahrenheitResult.style.display = "block";
    console.log(celsius + "\u00B0C is " + fahrenheit + "\u00B0F.");
  } else {
    fahrenheitResult.style.display = "none";
    console.log("No temperature to convert.");
  }
}

function CovertFahrenheitToCelsius() {
  const fahrenheitInput = document.getElementById("fahrenheit");
  const celsiusResult = document.getElementById("celsiusResult");

  // Convert Fahrenheit to Celsius
  console.log("Temperature Conversion Part D - Fahrenheit to Celsius");
  if (fahrenheitInput.value !== "") {
    const fahrenheit = parseFloat(fahrenheitInput.value);
    const celsius = (fahrenheit - 32) * (5 / 9);
    celsiusResult.innerText =
      fahrenheit.toFixed(2) + "\xB0F is " + celsius.toFixed(2) + "\xB0C.";
    celsiusResult.style.display = "block";
    console.log(fahrenheit + "\u00B0F is " + celsius.toFixed(1) + "\u00B0C");
  } else {
    celsiusResult.style.display = "none";
    console.log("No temperature to convert.");
  }
}
