console.log('Starting Javascript');

let num1;
let num2;
let operator;

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