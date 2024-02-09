const cDisplay = document.getElementById("cDisplay");

const numbersButtons = document.getElementsByClassName("numbers");
const operatorButtons = document.getElementsByClassName("operator");

let calculation = "";

let calculated = false;

for (let i = 0; i < operatorButtons.length; i++) {
  //EventListener for operatior buttons
  operatorButtons[i].addEventListener("click", function () {
    //Checks if there are less than 9 characters on display
    if (calculation.length < 9 || calculation.length == undefined) {
      //Checks if the last character isn't an operator
      if (
        calculation[calculation.length - 1] != "+" &&
        calculation[calculation.length - 1] != "-" &&
        calculation[calculation.length - 1] != "/" &&
        calculation[calculation.length - 1] != "*"
      ) {
        calculation += operatorButtons[i].value; //Adds operator to calculation
        cDisplay.innerHTML += operatorButtons[i].value; //Writes operator to display
        console.log(calculation); //Console calculation
        calculated = true;
      }
    }
  });
}

for (let i = 0; i < numbersButtons.length; i++) {
  //EventListener for number buttons
  numbersButtons[i].addEventListener("click", function () {
    //Checks if there are less than 9 characters on display
    if (calculation.length < 9) {
      //Checks if the pushed button is not = or AC
      if (numbersButtons[i].value !== "=" && numbersButtons[i].value !== "AC") {
        calculation += numbersButtons[i].value;
        console.log(calculation);
        cDisplay.innerHTML += numbersButtons[i].value;
      }
      if (calculated) {
        //Calculates the equation automatically
        calculation = eval(calculation);
        cDisplay.innerHTML = calculation;
        calculated = false;
      }
    }

    //Clears calculation variable and display
    if (numbersButtons[i].value === "AC") {
      calculation = "";
      cDisplay.innerHTML = "";
    } else if (
      //Checks that the equal sign has been pushed and calculation is not empty and that the last digit is not an operator
      numbersButtons[i].value === "=" &&
      calculation !== "" &&
      calculation[calculation.length - 1] != "+" &&
      calculation[calculation.length - 1] != "-" &&
      calculation[calculation.length - 1] != "/" &&
      calculation[calculation.length - 1] != "*"
    ) {
      calculation = eval(calculation); //Calculates the equation
      cDisplay.innerHTML = calculation;
      console.log(calculation);
    } else if (calculation.length > 9) cDisplay.innerHTML = "Error"; //Checks if the calculated number is not bigger than 9 character
  });
}
