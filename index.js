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

// Operator

function result(mathFunc, a, b) {
	if (mathFunc === 'divide') {
		populateDisplay(divide(a, b));
	} else if (mathFunc === 'multiply') {
		populateDisplay(multiply(a, b));
	} else if (mathFunc === 'substract') {
		populateDisplay(substract(a, b));
	} else if (mathFunc === 'add') {
		populateDisplay(add(a, b));
	}
}

// Helper functions

function populateDisplay(content) {
	display.textContent = content;
}



const display = document.querySelector('.display > p');
let firstNumber = '';
let secondNumber = '';
let currentOperator = '';

const numbers = document.querySelectorAll('.number');

numbers.forEach((number) => {
	number.addEventListener('click', () => {
		if (firstNumber) {
			secondNumber += number.textContent;
			populateDisplay(secondNumber);
		} else {
			firstNumber += number.textContent;
			populateDisplay(firstNumber);
		}
	})
})

const clear = document.querySelector('#clear');

clear.addEventListener('click', () => {
	firstNumber = '';
	secondNumber = '';
	currentOperator = '';
	populateDisplay(firstNumber);
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
		} else if (operator.textContent === '=') {
			outcome = result(currentOperator, firstNumber, secondNumber);

		}
	})
})


