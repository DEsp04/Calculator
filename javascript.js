function input(button) {
  document.calc.display.value += button.value;
}

function clearDisplay() {
  //clears the screen
  document.calc.display.value = "";
}

function enter() {
  //Evaluates the string  on the screen as a mathematic equation then
  //displays the answer back on the screen
  document.calc.display.value = eval(document.calc.display.value);
}

function average() {
  //variable to keep track of the sum starting at 0
  let sum = 0;

  //create a list of numbers from the values passed in
  // the calculator seperated by commas

  listOfNums = document.calc.display.value.split(","); //*****
  console.log(listOfNums);

  //For loop designed to iterate through every element in the list in order to
  //add them to the sum variable so we can have an actual sum
  for (let i = 0; i < listOfNums.length; i++) {
    //the sum variables is being updated each time the loop starts over
    sum += parseInt(listOfNums[i]);
  }
  //Declaring a variable called average that is assigned the value of the sum
  //divided by the length of the list, which represents the amount
  //of numbers being used
  let average = sum / listOfNums.length;

  //display the value on the calculator display
  document.calc.display.value = average;
}
