function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value); // Use eval carefully
    } catch {
        display.value = 'Error';
    }
}
