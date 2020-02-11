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