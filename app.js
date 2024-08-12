'use strict';

function showResult(result) {
	alert(`Result is: ${result}`);
}
function getNumberFromUser() {
	var input = prompt('Add number:', 'only number');
	var number = Number(input);

	if (Number.isNaN(number)) {
		return getNumberFromUser();
	} else {
		return number;
	}
}
function getOperatorFromUser() {
	return prompt('Add operator: +, -, *, /');
}
function getConfirmationFromUser() {
	return confirm('Do you want to continue?');
}
function getConfirmationFromUserAndContinue(result) {
	var confirmation = getConfirmationFromUser();

	if (confirmation) {
		mainLoop(result);
	} else {
		showResult(result);
	}
}

function calculate(operator, x, y) {
	switch (operator) {
		case '+':
			return x + y;
		case '-':
			return x - y;
		case '*':
			return x * y;
		case '/':
			return x / y;
	}
}

function mainLoop(result) {
	var operator = getOperatorFromUser();
	var number = getNumberFromUser();
	var newResult = calculate(operator, result, number);

	getConfirmationFromUserAndContinue(newResult);
}

var result = getNumberFromUser();
getConfirmationFromUserAndContinue(result);
