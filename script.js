const display = document.getElementById('calculator-display');
const digitButtons = document.querySelectorAll('.digit');
const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const divideButton = document.getElementById('divide');
const multiplyButton = document.getElementById('multiply');
const clearButton = document.getElementById('clear');
const equalsButton = document.getElementById('equals');
const decimalButton = document.getElementById('decimal');

let firstNumber = 0;
let secondNumber = 0;
let operator = null;
let isNewNumber = true;

digitButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (isNewNumber) {
            updateDisplay(button.textContent);
            isNewNumber = false;
        } else {
            updateDisplay(display.textContent += button.textContent);
        }
    });
});

addButton.addEventListener('click', () => {
    if (operator && !isNewNumber) {
        let secondNumber = parseFloat(display.textContent);
        let result = calculate(firstNumber, secondNumber, operator);
        updateDisplay(result);
        firstNumber = result;
    } else {
        firstNumber = parseFloat(display.textContent);
    }

    operator = '+';
    isNewNumber = true;
});

subtractButton.addEventListener('click', () => {
    firstNumber = parseFloat(display.textContent);
    operator = '-';
    isNewNumber = true;
});
multiplyButton.addEventListener('click', () => {
    firstNumber = parseFloat(display.textContent);
    operator = '*';
    isNewNumber = true;
});

divideButton.addEventListener('click', () => {
    firstNumber = parseFloat(display.textContent);
    operator = '/';
    isNewNumber = true;
});

equalsButton.addEventListener('click', () => {
    let secondNumber = parseFloat(display.textContent);
    let result = calculate(firstNumber, secondNumber, operator);
    updateDisplay(result);
    firstNumber = result;
    operator = null;
    isNewNumber = true;
})

clearButton.addEventListener('click', () => {
    updateDisplay('0');
    firstNumber = 0;
    secondNumber = 0;
    operator = null;
    isNewNumber = true;
});

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

function updateDisplay(value) {
    display.textContent = value;
}


function calculate(firstNumber, secondNumber, operator) {
    switch (operator) {
        case '+':
            return add(firstNumber, secondNumber);
        case '-':
            return subtract(firstNumber, secondNumber);
        case '*':
            return multiply(firstNumber, secondNumber);
        case '/':
            if (secondNumber === 0) {
                return 'Error';
            } else {
                return divide(firstNumber, secondNumber);
            }
        default:
            return 0;
    }
}




