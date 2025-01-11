//Question 1

const input = [1, 2, 3];

function arrayFor(inputArray) {
    let resultArray = [];
    for (let i = 0; i < inputArray.length; i++) {
        resultArray.push(Math.pow(2, inputArray[i]));
    }
    return resultArray;
}


function arrayForEach(inputArray) {
    let resultArray = [];
    inputArray.forEach((element) => {
        resultArray.push(Math.pow(2, element));
    });
    return resultArray;
}


function arrayMap(inputArray) {
    return inputArray.map((elemnt) => Math.pow(2, elemnt));
}
console.log("Using for loop: ", arrayFor(input));
console.log("Using forEach: ", arrayForEach(input));
console.log("Using Map: ", arrayMap(input));

/////////////////////////////////Question 2
const oddeven = [1, 2, 3, "Rawan"];

function evenOrOdd(inputArray) {
    return inputArray.map((elemnt) => {
        if (typeof elemnt !== "number") {
            return "N/A";
        }
        return elemnt % 2 === 0 ? "even" : "odd";
    });
}
console.log(evenOrOdd(oddeven));

////////////////////////////////// Question 3
const backNames = [
    "ahmad",
    "mohammad",
    "faisal",
    "ramzi",
    "bilal",
    "najjar",
];
function returnNames(inputArray) {
    let names = [];
    inputArray.forEach((name) => {
        names.push(name);
    });
    return names;
}

console.log(returnNames(backNames));

//Question 4

const fizzAndBuzz = [1, 3, 5, 9, 10, 15, 27, 40, 30, 50, 22, 12];

function fizzBuzz(inputArray) {
    return inputArray.map((element) => {
        if (element % 3 === 0 && element % 5 === 0) {
            return "Fizz Buzz";
        } else if (element % 3 === 0) {
            return "Fizz";
        } else if (element % 5 === 0) {
            return "Buzz";
        } else {
            return element;
        }
    });
}
console.log(fizzBuzz(fizzAndBuzz));
