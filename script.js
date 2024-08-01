let currentInput = '';
let previousInput = '';
let operator = '';
let shouldResetDisplay = false;

function appendNumber(number) {
    if (number === '.' && currentInput.includes('.')) return;
    if (shouldResetDisplay) {
        currentInput = number;
        shouldResetDisplay = false;
    } else {
        currentInput += number;
    }
    updateDisplay(currentInput);
}

function setOperation(op) {
    if (currentInput === '' && op !== '-') return;
    if (previousInput !== '') {
        calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
    shouldResetDisplay = true;
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = '';
    previousInput = '';
    shouldResetDisplay = true;
    updateDisplay(currentInput);
}

function updateDisplay(value) {
    document.getElementById('display').textContent = value;
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    shouldResetDisplay = false;
    updateDisplay('0');
}
