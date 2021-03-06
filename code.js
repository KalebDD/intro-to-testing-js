// helloWorld function 
const helloWorld = function () {
    return "Hello, World!";
}

function sayHello(input) {
    if (input === undefined || input === Boolean) {
        return "Hello, World!";
    } else {
        return "Hello, " + input + "!";
    }
}

function isFive(input) {
    return parseFloat(input) === 5;
}

function isEven(input) {
    return input % 2 === 0;
}

function isVowel(input) {
    return ['a','e','i','o','u','A','E','I','O','U'].indexOf(input) !== -1;
}

function add(num1, num2) {
    return parseFloat(num1) + parseFloat(num2);
}