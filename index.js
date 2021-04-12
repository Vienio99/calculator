// Basic math functions

function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}

// Operator

function operator(mathFunc, a, b) {
    return mathFunc(a, b);
}

// Helper functions

function populateDisplay(content) {
	display.textContent = content;
}



const display = document.querySelector('.display > p');
let currentNumber = '';
let secondNumber = '';
let currentOperator = '';

const numbers = document.querySelectorAll('.number');

numbers.forEach((number) => {
	number.addEventListener('click', () => {
		currentNumber += number.textContent;
		populateDisplay(currentNumber);
	})
})

const clear = document.querySelector('#clear');

clear.addEventListener('click', () => {
	currentNumber = '';
	populateDisplay(currentNumber);
})

const operators = document.querySelectorAll('.operator');

operators.forEach((operator) => {
	operator.addEventListener('click', () => {
		if (operator.textContent === '÷') {
			currentOperator = 'divide';
		} else if (operator.textContent === 'x') {
			currentOperator = 'multiply';
		} else if (operator.textContent === '-') {
			currentOperator = 'substract';
		} else if (operator.textContent ==='+') {
			currentOperator = 'add';
		}
		console.log(currentOperator)
	})
})


