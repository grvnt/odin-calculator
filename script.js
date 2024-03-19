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
    if(b === 0) {
        return
    }
    return a / b;
}

let firstNumber = 0;
let secondNumber = 0;
let operator = '+';

function calculate(firstNumber, secondNumber, operator) {
    if (operator === '+') {
        return add(firstNumber, secondNumber);
    }
}

let result = calculate(6, 3, '+');
console.log(result);

