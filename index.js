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

function operator(operator, a, b) {
    return operator(a, b);
}

const numbers = document.querySelectorAll('.number');
const display = document.querySelector('.display > p')
const clear = document.querySelector('#clear')
let currentNumber = '';


numbers.forEach((number) => {
	number.addEventListener('click', () => {
		currentNumber += number.textContent;
		display.textContent = currentNumber;
	})
})

clear.addEventListener('click', () => {
	currentNumber = '';
})



