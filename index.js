// Basic math functions

function add(a, b) {
	return a + b;
}

function substract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}

// Helper functions

function populateDisplay(content) {
	display.textContent = content;
}

function clearCurrent() {
	currentNumber = '';
	currentOperator = '';
}

function clearAll() {
	clearCurrent();
	populateDisplay(0);
	total = 0;
}

function roundNumber(number) {
	return Math.round((number + Number.EPSILON) * 100) / 100;
}

// Clear button

const clear = document.querySelector('#clear');

clear.addEventListener('click', () => {
	clearAll();
})

// Delete button

const del = document.querySelector('#delete')

del.addEventListener('click', () => {
	if (currentNumber.length > 1) {
		currentNumber = currentNumber.slice(0, -1);
		populateDisplay(currentNumber);
	} else {
		currentNumber = '';
		populateDisplay(0);
	}
})

// Decimal button

const decimal = document.querySelector('#decimal');

decimal.addEventListener('click', () => {
	if (!currentNumber.includes('.')) {
		currentNumber += '.';
}})


const display = document.querySelector('.display > p');

// Main variables

let currentNumber = '';
let currentOperator = '';
let total = '';

// Numbers listener

const numbers = document.querySelectorAll('.number');

numbers.forEach((number) => {
	number.addEventListener('click', () => {
		if (total) {
			currentNumber += number.textContent;
			populateDisplay(currentNumber);
		}
		else if (currentOperator) {
			total = currentNumber;
			currentNumber = '';
			currentNumber = number.textContent;
			populateDisplay(currentNumber);
		} else {
			currentNumber += number.textContent;
			populateDisplay(currentNumber);
		}
	})
})


// Operator listener and evaluation of the equation

const operators = document.querySelectorAll('.operator');

operators.forEach((operator) => {
	operator.addEventListener('click', () => {
		switch (operator.textContent) {
			case '÷':
				currentOperator = 'divide';
				break;
			case 'x':
				currentOperator = 'multiply';
				break;
			case '-':
				currentOperator = 'substract';
				break;
			case '+':
				currentOperator = 'add';
				break;
		}
	})
})

// Display equation

const equalSign = document.querySelector('#equal');

function displayEquation() {
	if (currentNumber === '0') {
		alert("You can't divide by 0!");
		clearAll();
	}
	else if (total && currentNumber && currentOperator) {
		total = returnResult(currentOperator, total, currentNumber);
		total = roundNumber(total);
		populateDisplay(total);
		clearCurrent();
	} else {
		currentOperator = '';
}}

equalSign.addEventListener('click', () => {
	displayEquation();
})

// Operator of the whole equation

function returnResult(mathFunc, a, b) {
	a = Number(a);
	b = Number(b);
	switch (mathFunc) {
		case 'divide':
			return divide(a, b);
		case 'multiply':
			return multiply(a, b);
		case 'substract':
			return substract(a, b);
		case 'add':
			return add(a, b);
	}
}

// Keyboard support

document.addEventListener('keydown', function(event) {
	if (event.key && event.key != 'Shift') {
		btn = document.querySelector(`[data-key="${event.key}"]`)
		btn.click();
	}
})