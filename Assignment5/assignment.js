function calculateBMI() {
  const weight1 = document.getElementById("weight1").value;
  const height1 = document.getElementById("height1").value;
  const bmi1 = (weight1 / (height1 * height1)) * 703;

  const weight2 = document.getElementById("weight2").value;
  const height2 = document.getElementById("height2").value;
  const bmi2 = (weight2 / (height2 * height2)) * 703;

  const bmiResult1 = document.getElementById("bmi-result-1");
  bmiResult1.textContent = `Person 1's BMI is ${bmi1.toFixed(1)}`;

  const bmiResult2 = document.getElementById("bmi-result-2");
  bmiResult2.textContent = `Person 2's BMI is ${bmi2.toFixed(1)}`;

  const comparisonResult = document.getElementById("comparison-result");

  if (bmi1 < bmi2) {
    comparisonResult.textContent = "Person 2 has a higher BMI than Person 1.";
    comparisonResult.style.color = "#C70039";
  } else if (bmi1 > bmi2) {
    comparisonResult.textContent = "Person 1 has a higher BMI than Person 2.";
    comparisonResult.style.color = "#4CAF50";
  } else {
    comparisonResult.textContent = "Person 1 and Person 2 have the same BMI.";
    comparisonResult.style.color = "#FFC300";
  }
}

function convertTemperature() {
  const celsius = document.getElementById("celsius").value;
  const fahrenheit = (celsius * 9) / 5 + 32;
  const fahrenheitResult = document.getElementById("fahrenheit-result");
  fahrenheitResult.textContent = `${celsius} °C is equal to ${fahrenheit.toFixed(
    1
  )} °F`;
}
