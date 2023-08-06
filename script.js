let display = document.getElementById('display');
let nums = document.getElementsByClassName('num');
let operators = document.getElementsByClassName('operator');
let clear = document.getElementById('clear');
let equals = document.getElementById('equals');
let operator = '';
let value = '';

for(let num of nums) {
    num.addEventListener('click', function(e) {
        display.value += e.target.value;
    });
}

for(let op of operators) {
    op.addEventListener('click', function(e) {
        value = display.value;
        operator = e.target.value;
        display.value = '';
    });
}

clear.addEventListener('click', function() {
    display.value = '';
    value = '';
    operator = '';
});

equals.addEventListener('click', function() {
    switch(operator) {
        case '+':
            display.value = parseFloat(value) + parseFloat(display.value);
            break;
        case '-':
            display.value = parseFloat(value) - parseFloat(display.value);
            break;
        case '*':
            display.value = parseFloat(value) * parseFloat(display.value);
            break;
        case '/':
            display.value = parseFloat(value) / parseFloat(display.value);
            break;
    }
});