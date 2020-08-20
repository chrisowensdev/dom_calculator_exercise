//CODE ALONG EXAMPLE
'use strict';

const input = document.getElementById('input'),
    numbers = document.querySelectorAll('.number'),
    operators = document.querySelectorAll('.operator'),
    result = document.getElementById('result'),
    clear = document.getElementById('clear');

let resultDisplayed = false;

let numberOperatorsArray = [];

numbers.forEach(function (number) {
    number.addEventListener('click', function () {
        input.innerHTML += this.innerHTML;
        numberOperatorsArray = [...numberOperatorsArray, this.innerHTML];
    });
});

operators.forEach(function (operator) {
    operator.addEventListener('click', function () {
        input.innerHTML += this.innerHTML;
        numberOperatorsArray = [...numberOperatorsArray, this.innerHTML];
    });
});

result.addEventListener('click', function () {
    console.log("The numbers operators array is currently ", numberOperatorsArray);
    let numbersStringHolder = '';
    let equalFunctionArray = [];
    for (let char of numberOperatorsArray) {
        console.log('the char is:', char)
        let numReg = /\d/;
        if (numReg.test(char) || char === '.') {
            numbersStringHolder += char;
        } else {
            equalFunctionArray = [...equalFunctionArray, Number(numbersStringHolder), char];
            numbersStringHolder = '';
        }
    }
    equalFunctionArray = [...equalFunctionArray, Number(numbersStringHolder)];
    console.log('The array that is inside of the euqals function', equalFunctionArray);
})

clear.addEventListener('click', function () {
    input.innerHTML = '';
})