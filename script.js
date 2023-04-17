const billInput = document.getElementById("bill-amount");
const warningMsg = document.getElementById("warning-message");

const tipInputButtons = document.getElementsByClassName("perc");
const buttonsArray = Array.from(tipInputButtons);

const tipCustomButton = document.getElementById("custom-perc");
const warningMsgCustom = document.getElementById("warning-message-custom-tip");
let tip = 0;

const peopleInput = document.getElementById("people-count");
const warningMsgPeople = document.getElementById("warning-message-people");

const tipAmountNumber = document.getElementById("tip-person");
const totalAmountNumber = document.getElementById("total-person");

const billForm = document.getElementById("bill-form");
const resetButton = document.getElementById("reset-button");



billInput.addEventListener("input", warningMsgBillFun);
  
function warningMsgBillFun() {
    
    const billAmount = parseFloat(billInput.value);
    const isNumeric = /^\d+$/.test(billAmount);

    warningMsg.classList.add("hidden"); // Reset the warning message to hidden state
    billInput.style.outline = "none"; // Reset the outline to none state

    if (billAmount < 0) {
        warningMsg.classList.remove("hidden"); // Remove hidden class from warning message for display
        billInput.style.outline = "2px solid red"; // Outline the input box with red outline
    } 
   else if (isNumeric == false) {
        warningMsg.classList.remove("hidden"); // Remove hidden class from warning message for display
        billInput.style.outline = "2px solid red"; // Outline the input box with red outline
    } 
}



// Loop through each button and change background according to hover event
 buttonsArray.forEach(button => {
    button.addEventListener('mouseover', addHoverBgClr);
    function addHoverBgClr() {
        button.classList.add('hover'); // Add hover class to button elements
    };
    button.addEventListener('mouseout', rmHoverBgClr);
    function rmHoverBgClr() {
        button.classList.remove('hover'); // Remove hover class from the button elements
    }
});

// Loop through each button and change background and text color according to click events
for (let i = 0; i < buttonsArray.length; i++) {
    
    buttonsArray[i].addEventListener("click", function() {
    
    for (let j = 0; j < buttonsArray.length; j++) {
      buttonsArray[j].style.backgroundColor = ""; // Reset background color to initial state
      buttonsArray[j].style.color = ""; // Reset text color to initial state
      buttonsArray[j].style.outline = "none";
    }

    this.style.backgroundColor = "hsl(172, 67%, 45%)"; // Change background color for clicked button
    this.style.color = " hsl(183, 100%, 15%)"; // Change text color for clicked button
    tip = parseFloat(this.value);
  });

}

tipCustomButton.addEventListener("input", warningMsgCustomFun);

function warningMsgCustomFun() {
    const tipCustomValue = tipCustomButton.value;
    const isNumeric = /^\d+$/.test(tipCustomValue);

    warningMsgCustom.classList.add("hidden"); // Reset the warning message to hidden state

    if (tipCustomValue < 0) {
        warningMsgCustom.classList.remove("hidden"); // Remove hidden class from warning message for display
        tipCustomButton.style.outline = "2px solid red"; // Outline the input box with red outline
    } 
   else if (isNumeric == false) {
        warningMsgCustom.classList.remove("hidden"); // Remove hidden class from warning message for display
        tipCustomButton.style.outline = "2px solid red"; // Outline the input box with red outline
    } 
    else {
        tip = tipCustomValue;
    }
}


peopleInput.addEventListener("input", warningMsgPeopleFun);
  
function warningMsgPeopleFun() {
    
    let isNumeric = /^[0-9]+$/.test(peopleInput.value);

    warningMsgPeople.classList.add("hidden"); // Reset the warning message to hidden state
    peopleInput.style.outline = "none"; // Reset the outline to none state

    if (peopleInput.value <= 0) {
        warningMsgPeople.classList.remove("hidden"); // Remove hidden class from warning message for display
        peopleInput.style.outline = "2px solid red"; // Outline the input box with red outline
    } 
   else if (isNumeric == false) {
        warningMsgPeople.classList.remove("hidden"); // Remove hidden class from warning message for display
        peopleInput.style.outline = "2px solid red"; // Outline the input box with red outline
        
    } 
}


let totalPerPerson = 0;

function calculateTotalPerPerson() {
    let billValue = parseFloat(billInput.value);

    let peopleValue = parseFloat(peopleInput.value);

    let tipValue = tip;


    let totalSum = billValue + billValue * tip / 100;

    totalPerPerson = totalSum / peopleValue; 

    totalAmountNumber.innerHTML = parseFloat(totalPerPerson.toFixed(3));

}

function calculateTipPerPerson() {
    let billValue = parseFloat(billInput.value);

    let peopleValue = parseFloat(peopleInput.value);

    let tipValue = tip;

    let tipPerPerson = billValue * tipValue / 100 / peopleValue;

    tipAmountNumber.innerHTML = parseFloat(tipPerPerson.toFixed(3));

}

billInput.addEventListener("input", calculateTotalPerPerson);
billInput.addEventListener("input", calculateTipPerPerson);

peopleInput.addEventListener("input", calculateTotalPerPerson);
peopleInput.addEventListener("input", calculateTipPerPerson);

buttonsArray.forEach(button => {
    button.addEventListener('click', calculateTotalPerPerson);
});
buttonsArray.forEach(button => {
    button.addEventListener('click', calculateTipPerPerson);
});

tipCustomButton.addEventListener("input", calculateTotalPerPerson);
tipCustomButton.addEventListener("input", calculateTipPerPerson);


// reset everything

resetButton.addEventListener("click", resetFun);
function resetFun(event) {
    event.preventDefault();
    console.log("reset button is clicked");    
    billInput.value = "";
    peopleInput.value = "";
    warningMsgPeople.classList.add("hidden"); 
    peopleInput.style.outline = "none";
    warningMsgCustom.classList.add("hidden"); // Reset the warning message to hidden state
    tipCustomButton.value = "";
    tipAmountNumber.innerHTML = "0";
    totalAmountNumber.innerHTML = "0";

    warningMsg.classList.add("hidden"); // Reset the warning message to hidden state
    billInput.style.outline = "none"; // Reset the outline to none state
    for (let j = 0; j < buttonsArray.length; j++) {
        buttonsArray[j].style.backgroundColor = ""; // Reset background color to initial state
        buttonsArray[j].style.color = ""; // Reset text color to initial state
        buttonsArray[j].style.outline = "none";
    }
}
