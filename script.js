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

const display = document.getElementById('calculator-display');
const digitButtons = document.querySelectorAll('.digit');
const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const divideButton = document.getElementById('divide');
const multiplyButton = document.getElementById('multiply');
const clearButton = document.getElementById('clear');
const equalsButton = document.getElementById('equals');
const decimalButton = document.getElementById('decimal');

function updateDisplay(value) {
    display.textContent = value;
}

digitButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (display.textContent === '0') {
            updateDisplay(button.textContent);
        } else {
            updateDisplay(display.textContent + button.textContent);
        }
    });
});

addButton.addEventListener('click', () => {
    firstNumber = parseFloat(display.textContent);
    operator = '+';
    display.textContent = '';
});
subtractButton.addEventListener('click', () => {
    firstNumber = parseFloat(display.textContent);
    operator = '-';
    display.textContent = '';
});
multiplyButton.addEventListener('click', () => {
    firstNumber = parseFloat(display.textContent);
    operator = '*';
    display.textContent = '';
});
divideButton.addEventListener('click', () => {
    firstNumber = parseFloat(display.textContent);
    operator = '/';
    display.textContent = '';
});



clearButton.addEventListener('click', () => {
    updateDisplay('0');
});

let firstNumber = 0;
let secondNumber = 0;
let operator = '+';

function calculate(firstNumber, secondNumber, operator) {
    if (operator === '+') {
        return add(firstNumber, secondNumber);
    }
}





//let result = calculate(6, 3, '+');
//console.log(result);

