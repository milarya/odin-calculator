console.log('Starting Javascript');

let num1 ='';
let num2 = '';
let operator = '';

let displayValue = '';
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
        case '/': {
            if (num2 !== 0) {
                return divideNumbers(num1, num2);
            } else {
                return 'nope.';
            }
        }
        default:
            return 'no valid operator';
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
        if (operator === '') {
            num1 += event.target.innerText;
            updateDisplayValue(num1);
        } else {
            num2 += event.target.innerText;
            updateDisplayValue(num2);
        }
        populateDisplay();
    })
})

const btnOperator = document.querySelectorAll('.operation');
btnOperator.forEach((button) => {
    button.addEventListener('click', (event) => {
        // calculate what was queued
        calculate();
        // prepare operator for next calculation
        clearActiveButtons();
        event.target.classList.add('active');
        operator = event.target.innerText;
        populateDisplay();
    })
})

const displayContainer = document.querySelector('.calc-display');

function populateDisplay() {
    console.log(num1, operator, num2);
    displayContainer.innerText = displayValue;
}

// add event listener to clear button
const btnClear = document.querySelector('.clear');
btnClear.addEventListener('click', () => {
    num1 ='';
    num2 = '';
    operator = '';
    updateDisplayValue('---');
    result = '';
    populateDisplay();
});

// add event listener to calculate button
const btnCalculate = document.querySelector('.calculate');
btnCalculate.addEventListener('click', () => {
    calculate();
})

function calculate() {
    // only calculate a result if all 3 variables are filled

    if (num1 !== '' && operator !== '' && num2 !== '') {
        console.log('Calculating');
        let calcResult = operate(num1, operator, num2);
        // write result to num1 for the next calculation
        num1 = calcResult;
        operator = '';
        num2 = '';
        result = calcResult;
        updateDisplayValue(calcResult);
        populateDisplay();
        // clear current active buttons
        clearActiveButtons();
    }
}

function clearActiveButtons() {
    btnOperator.forEach((button) => {
        button.classList.remove('active');
    });
}

function updateDisplayValue(value) {
    console.log('value: ' + value);
    displayValue = value.toString().slice(0,13);
    console.log('displayValue: ' + displayValue);
}