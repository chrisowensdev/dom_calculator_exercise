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
    let numbersStringHolder = '';
    let resultArray = [];
    for (let char of numberOperatorsArray) {
        let numReg = /\d/;
        if (numReg.test(char) || char === '.') {
            numbersStringHolder += char;
        } else {
            resultArray = [...resultArray, Number(numbersStringHolder), char];
            numbersStringHolder = '';
        }
    }
    resultArray = [...resultArray, Number(numbersStringHolder)];


    let multiply = resultArray.indexOf("*");
    while (multiply !== -1) {
        resultArray.splice(multiply - 1, 3, resultArray[multiply - 1] * resultArray[multiply + 1]);
        multiply = resultArray.indexOf('*');
    }

    let divide = resultArray.indexOf("/");
    while (divide !== -1) {
        resultArray.splice(divide - 1, 3, resultArray[divide - 1] / resultArray[divide + 1]);
        divide = resultArray.indexOf('/');
    }

    let add = resultArray.indexOf("+");
    while (add !== -1) {
        resultArray.splice(add - 1, 3, resultArray[add - 1] + resultArray[add + 1]);
        add = resultArray.indexOf('+');
    }

    let subtract = resultArray.indexOf("-");
    while (subtract !== -1) {
        resultArray.splice(subtract - 1, 3, resultArray[subtract - 1] - resultArray[subtract + 1]);
        subtract = resultArray.indexOf('-');
    }


    console.log(resultArray[0])
    numberOperatorsArray = [...resultArray];
    input.innerHTML = resultArray[0];

})

clear.addEventListener('click', function () {
    input.innerHTML = '';
    numberOperatorsArray = [];
})