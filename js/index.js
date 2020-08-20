'use strict';
const input = document.getElementById("input");
const number = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");
const result = document.getElementById('result');
const clear = document.getElementById('clear');
const oArray = ['+', '-', '/', '*'];

const inputArray = [];

const numbersArray = [];
number.forEach(number => {
    number.addEventListener('click', (e) => {
        e.preventDefault();
        numbersArray.push(Number(number.innerHTML));
        inputArray.push(number.innerHTML);
        console.log(inputArray)
        input.innerHTML = inputArray.join(' ');
    })
})

const operatorArray = [];
operator.forEach(operator => {
    operator.addEventListener('click', (e) => {
        e.preventDefault();
        if (numbersArray.length > 0 &&
            inputArray[inputArray.length - 1] !== "+" &&
            inputArray[inputArray.length - 1] !== "-" &&
            inputArray[inputArray.length - 1] !== "*" &&
            inputArray[inputArray.length - 1] !== "/"
        ) {
            operatorArray.push(operator.innerHTML);
            inputArray.push(operator.innerHTML);
            console.log(operatorArray);
            console.log(inputArray);
            input.innerHTML = inputArray.join(' ');
        }
    })
});

result.addEventListener('click', (e) => {
    const numArray = []
    e.preventDefault();
    numbersArray.forEach(string => {
        numArray.push(parseInt(string))
    })
    console.log(numArray);

    let addition = operatorArray.indexOf('+');
    let subtraction = operatorArray.indexOf('-');
    let multiply = operatorArray.indexOf('*');
    let divide = operatorArray.indexOf('/');


    while (multiply !== -1) {
        numArray.splice(multiply, 2, numArray[0] * numArray[1]);

        multiply = operatorArray.indexOf('*');
    }

    while (divide !== -1) {
        numArray.splice(divide, 2, numArray[divide] / numArray[divide + 1]);
        divide = operatorArray.indexOf('/');
    }

    while (addition !== -1) {
        numArray.splice(addition, 2, numArray[addition] + numArray[addition + 1]);
        addition = operatorArray.indexOf('+');
    }

    while (subtraction !== -1) {
        numArray.splice(subtraction, 2, numArray[subtraction] - numArray[subtraction - 1]);
        subtraction = operatorArray.indexOf('-');
    }





    input.innerHTML = numArray;
    clearArrays(numbersArray);
    clearArrays(operatorArray);
    clearArrays(inputArray);
})




// Clear Button
clear.addEventListener('click', (e) => {
    input.innerHTML = '';
    clearArrays(numbersArray);
    clearArrays(operatorArray);
    clearArrays(inputArray);
})


function clearArrays(arr) {
    while (arr.length > 0) {
        arr.shift();
    }
}