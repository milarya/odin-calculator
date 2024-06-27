let num1 = '';
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
	switch (operator) {
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
const btnNumber = document.querySelectorAll('.number, .decimal');
btnNumber.forEach((button) => {
	button.addEventListener('click', (event) => {
		if (operator === '') {
			num1 += event.target.innerText;
			setDecimalButton(num1);
			updateDisplayValue(num1);
		} else {
			num2 += event.target.innerText;
			setDecimalButton(num2);
			updateDisplayValue(num2);
		}
		populateDisplay();
	});
});

const btnOperator = document.querySelectorAll('.operation');
btnOperator.forEach((button) => {
	button.addEventListener('click', (event) => {
		// calculate what was queued
		calculate();
		// prepare operator for next calculation
		clearActiveButtons();
		event.target.classList.add('active');
		operator = event.target.innerText;
		setDecimalButton('enabled');
		populateDisplay();
	});
});

const btnInvert = document.querySelector('.invert');
btnInvert.addEventListener('click', () => {
	if (operator === '') {
		num1 = invertNumber(num1);
		updateDisplayValue(num1);
	} else {
		num2 = invertNumber(num2);
		updateDisplayValue(num2);
	}
	populateDisplay();
});

const btnDecimal = document.querySelector('.decimal');
function setDecimalButton(number) {
	// disable or enable the decimal button based on
	// if number already has a decimal point
	if (number.toString().includes('.') || number === 'disabled') {
		// disable decimal button
		btnDecimal.disabled = true;
	} else if (!number.toString().includes('.') || number === 'enabled') {
		// enable deicmal button
		btnDecimal.disabled = false;
	}
}

// add event listener to clear button
const btnClear = document.querySelector('.clear');
btnClear.addEventListener('click', () => {
	num1 = '';
	num2 = '';
	operator = '';
	updateDisplayValue('---');
	result = '';
	setDecimalButton('enabled');
	populateDisplay();
});

// add event listener to calculate button
const btnCalculate = document.querySelector('.calculate');
btnCalculate.addEventListener('click', () => {
	calculate();
});

function calculate() {
	// only calculate a result if all 3 variables are filled
	if (num1 !== '' && operator !== '' && num2 !== '') {
		let calcResult = operate(num1, operator, num2);
		// write result to num1 for the next calculation and
		// dis/enable decimal button accordingly
		num1 = calcResult;
		setDecimalButton(num1);
		operator = '';
		num2 = '';
		result = calcResult;
		updateDisplayValue(calcResult);
		populateDisplay();
		// clear current active buttons
		clearActiveButtons();
	}
}

const displayContainer = document.querySelector('.calc-display');
function populateDisplay() {
	// console.log(num1, operator, num2);
	displayContainer.innerText = displayValue;
}

function clearActiveButtons() {
	btnOperator.forEach((button) => {
		button.classList.remove('active');
	});
}

function updateDisplayValue(value) {
	displayValue = value.toString().slice(0, 15);
}

function invertNumber(number) {
	// handle empty numbers
	if (number === '') {
		return '-';
	} else if (number === '-') {
		return '';
		// handle non-empty numbers
	} else if (number.toString()[0] === '-') {
		// remove the leading '-'
		return number.toString().slice(1);
	} else {
		// add a leading '-'
		return '-' + number;
	}
}
