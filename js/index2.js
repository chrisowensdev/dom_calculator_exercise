//CODE ALONG EXAMPLE
'use strict';

const input = document.getElementById('input'),
    numbers = document.querySelectorAll('.number'),
    operators = document.querySelectorAll('.operator'),
    result = document.getElementById('result'),
    clear = document.getElementById('clear');

let resultDisplayed = false;

numbers.forEach(function (number) {
    number.addEventListener('click', function () {
        input.innerHTML += this.innerHTML;
    });
});

operators.forEach(function (operator) {
    operator.addEventListener('click', function () {
        input.innerHTML += this.innerHTML;
    });
});

result.addEventListener('click', function () {
    alert("DO THE MATHS!!");
})

clear.addEventListener('click', function () {
    input.innerHTML = '';
})