console.log('Starting Javascript');

let num1;
let num2;
let operator;

let displayValue = '';
let equalText = '';
let result = '';

// calculator functions

function addNumbers(num1, num2) {
    return num1 + num2;
}

function subtractNumbers(num1, num2) {
    return num1 - num2;
}

function multiplyNumbers(num1, num2) {
    return num1 * num2;
}

function divideNumbers(num1, num2) {
    return num1 / num2;
}

function operate(num1, operator, num2) {
    num1 = +num1;
    num2 = +num2;
    switch(operator) {
        case '+': 
            return addNumbers(num1, num2); 
        case '-': 
            return subtractNumbers(num1, num2); 
        case '*': 
            return multiplyNumbers(num1, num2); 
        case '/': 
            return divideNumbers(num1, num2); 
        default:
            console.log('no valid operator found');
    }
}

/* @todo implement on/off funcionality later!
const btnOn = document.querySelector('.on');
const btnOff = document.querySelector('.off');

btnOn.addEventListener('click', () => {
    toggleCalculatorState(true);
});

btnOff.addEventListener('click', () => {
    toggleCalculatorState(false);
});

function toggleCalculatorState(bool) {
    if (bool === true) {
        clearResult();
        addResult('0,0');
    } else {
        // empty results
        clearResult();
        // make all buttons except 'on' disabled
    }
}
*/

// add event listeners to number + operation buttons
const btnNumber = document.querySelectorAll('.number');
btnNumber.forEach((button) => {
    button.addEventListener('click', (event) => {
        // only show equality sign 
        // if there is enough content in display value
        if (displayValue != '') {
            equalText = '=';
        }
        displayValue += event.target.innerText;
        populateDisplay();
    })
})
const btnOperator = document.querySelectorAll('.operation');
btnOperator.forEach((button) => {
    button.addEventListener('click', (event) => {
        displayValue += ' ' + event.target.innerText + ' ';
        populateDisplay();
    })
})

const displayContainer = document.querySelector('.calc-display');
const operationContainer = document.querySelector('.calc-operation');
const equalContainer = document.querySelector('.calc-equal');
const resultContainer = document.querySelector('.calc-result');

function populateDisplay() {
    operationContainer.innerText = displayValue;
    equalContainer.innerText = equalText;
    resultContainer.innerText = result; 
}

// add event listener to clear button
const btnClear = document.querySelector('.clear');
btnClear.addEventListener('click', () => {
    displayValue = '';
    equalText = '';
    result = '---';
    populateDisplay();
});

// add event listener to calculate button
const btnCalculate = document.querySelector('.calculate');
btnCalculate.addEventListener('click', () => {
    calculate();
})

function calculate() {
    let calculationArray = displayValue.split(' ');
    console.log(calculationArray);
    // @todo loop through whole array
    while (calculationArray.length > 1) {
        // operate
        let semiResult = operate(calculationArray[0], calculationArray[1], calculationArray[2]);
        calculationArray.splice(0, 3, semiResult);
        console.log(calculationArray);
    }
    result = calculationArray[0];
    console.log('result: ' + result);
    populateDisplay();
}