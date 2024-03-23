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
let lastActionWasEquals = false;

addButton.addEventListener('click', () => handleOperation('+'));
subtractButton.addEventListener('click', () => handleOperation('-'));
multiplyButton.addEventListener('click', () => handleOperation('*'));
divideButton.addEventListener('click', () => handleOperation('/'));

digitButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (isNewNumber) {
            display.textContent = button.textContent;
            isNewNumber = false;
        } else {
            display.textContent += button.textContent;
        }
    }) 
});

equalsButton.addEventListener('click', () => {
    if (!isNewNumber || !lastActionWasEquals) {
        secondNumber = parseFloat(display.textContent); // Only update secondNumber on first press
    }
    let result = calculate(firstNumber, secondNumber, operator);
    updateDisplay(result);
    firstNumber = result;
    isNewNumber = true;
    lastActionWasEquals = true;
});

clearButton.addEventListener('click', () => {
    lastActionWasEquals = false;
    updateDisplay('0');
    firstNumber = 0;
    secondNumber = 0;
    operator = null;
    isNewNumber = true;
});

decimalButton.addEventListener('click', () => {
    if (isNewNumber) {
        display.textContent = '0.';
        isNewNumber = false;
    } else if (!display.textContent.includes('.')) {
        display.textContent += '.';
    }
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
    return b === 0 ? 'Error' : a / b;
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

function handleOperation(selectedOperator) {
    // If an operator was already set and the user has entered a new number, calculate the result.
    if (operator && !isNewNumber) {
        secondNumber = parseFloat(display.textContent); // Prepare the second operand for calculation.
        let result = calculate(firstNumber, secondNumber, operator); // Perform the calculation.
        updateDisplay(result); // Display the result.
        firstNumber = result; // Update firstNumber for potential consecutive operations.
    } else if (!operator || isNewNumber) {
        // If no operation is ongoing, simply use the displayed number as the first operand.
        firstNumber = parseFloat(display.textContent);
    }

    // Setup for the next operation.
    operator = selectedOperator; // Update the operator.
    isNewNumber = true; // Ready to accept a new number.
    lastActionWasEquals = false; // Reset this flag, as a new operation is being set up.
}






