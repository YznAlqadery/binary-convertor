const fromOption = document.getElementById("from-option");
const toOption = document.getElementById("to-option");
const convertButton = document.querySelector(".convert");
const numberInput = document.getElementById("number-input");
const resultElement = document.querySelector(".result");
const resetButton = document.querySelector(".reset");
function decimalToBinary(value) {
  let firstResult = "";
  let finalResult = "";
  //We don't increment the index(i) so that it doesn't get bigger than the value through looping
  for (let i = 0; i < value; ) {
    value /= 2;
    if (Number.isInteger(value)) {
      firstResult += "0";
    } else {
      firstResult += "1";
      value -= 0.5;
    }
  }
  //Reversing the string and adding the finalResult to the resultElement
  for (let j = firstResult.length - 1; j >= 0; j--) {
    finalResult += firstResult[j];
  }
  resultElement.textContent = `Result: ${finalResult}`;
}

function binaryToDecimal(value) {
  let finalResult = "";
  let stringValue = String(value);
  let multiplication = 1;
  let num = 0;
  let counter = 0;
  //Checking if it's applicable to convert
  for (let i = 0; i < stringValue.length; i++) {
    if (stringValue[i] === "1" || stringValue[i] === "0") counter++;
  }
  for (let i = stringValue.length - 1; i >= 0; i--) {
    if (counter !== stringValue.length) {
      resultElement.textContent = "Enter a number between 0 and 1!";
    } else {
      num += stringValue[i] * multiplication;
      multiplication *= 2;
      resultElement.textContent = `Result: ${num} `;
    }
  }
}

function renderApp() {
  let fromValue = fromOption.value;
  let toValue = toOption.value;
  let numberValue = Number(numberInput.value);

  let result = "";

  if (fromValue != "" && toValue.value != "" && numberValue != "") {
    if (fromValue === "Decimal" && toValue === "Binary") {
      decimalToBinary(numberValue);
    } else if (fromValue === "Binary" && toValue === "Decimal") {
      binaryToDecimal(numberValue);
    } else {
      resultElement.textContent = "Can't convert!";
    }
  } else {
    resultElement.textContent = "Please enter the following fields!";
  }
}

function resetAll() {
  fromOption.value = "";
  toOption.value = "";
  numberInput.value = "";
  resultElement.textContent = "";
}

convertButton.addEventListener("click", renderApp);

resetButton.addEventListener("click", resetAll);
