console.log('Starting Javascript');

let num1;
let num2;
let operator;

let displayValue ='';

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

function operate(operator, num1, num2) {
    switch(operator) {
        case 'add': 
            return addNumbers(num1, num2); 
        case 'subtract': 
            return subtractNumbers(num1, num2); 
        case 'multiply': 
            return multiplyNumbers(num1, num2); 
        case 'divide': 
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

// add event listeners number buttons
const btnNumber = document.querySelectorAll('.number');

btnNumber.forEach((button) => {
    button.addEventListener('click', (event) => {
        populateDisplay(event.target.innerText);
    })
})

const displayContainer = document.querySelector('.calc-display');
const operationContainer = document.querySelector('.calc-operation');
const resultContainer = document.querySelector('.calc-result');

function populateDisplay(string) {
    displayValue += string;
    operationContainer.innerText = displayValue;    
}