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

function clearAll() {
	currentNumber = '';
	currentOperator = '';
}

function clearDisplay() {
	clearAll();
	populateDisplay(0);
	total = 0;
}

const clear = document.querySelector('#clear');

clear.addEventListener('click', () => {
	clearDisplay();
})


const display = document.querySelector('.display > p');

let currentNumber = '';
let currentOperator = '';
let total = '';

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
			case '=':
				total = result(currentOperator, total, currentNumber);
				populateDisplay(total);
				clearAll();
				break;
		}
	})
})


// Operator

function result(mathFunc, a, b) {
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