console.log("************** Question 1 **************");

function extractNumbers(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("Input must be an array");
    }

    return arr.filter(item =>
        typeof item === "number" && !Number.isNaN(item)
    );
}

// const inputArray = [1, "two", 3, null, 4, undefined, 5, NaN, "six"];
// const numbersArray = extractNumbers(inputArray);
// console.log(numbersArray); 

console.log("************** Question 2 **************");

function sumNumbersSafe(arr) {
    try {
        const numbers = extractNumbers(arr);

        return numbers.reduce((acc, curr) => acc + curr, 0);
    } catch (error) {
        console.warn(error.message);
        return 0;
    }
}

const inputArray = [2, "hello", 4, NaN, 6];
const sum = sumNumbersSafe(inputArray);
console.log(sum); // 12

console.log("************** Question 3 **************");

function filterLargeSums(arrList, minTotal) {

    return arrList.filter(item => {

        if (!Array.isArray(item)) {
            console.warn("Item is not an array:", item);
            return false;
        }

        const sum = sumNumbersSafe(item);
        return sum >= minTotal;
    });
}

console.log(filterLargeSums([
    [2, 3, 5],
    [10, "hello"],
    [1, 2],
    [7, 8]
], 10));


console.log("************** Question 4 **************");

function summaryStats(arrList) {
    const filtered = filterLargeSums(arrList, 10);

    return filtered.map(item => {

        const sum = sumNumbersSafe(item);
        const numbers = extractNumbers(item);
        const average = sum / numbers.length;
        return {
            sum: sum,
            average: average
        };

    });
}

console.log(summaryStats([
    [1, 2, 3],
    [5, 5, 5],
    [100],
    [10, "hello", 20],
    "bad"
]));

console.log("************** Question 5 **************");

function safeCalculator(a, b, operation) {

    // בדיקת טיפוסים
    if (typeof a !== typeof b) {
        throw new Error("a and b must be the same type");
    }
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("Both values must be numbers");
    }
    if (Number.isNaN(a) || Number.isNaN(b)) {
    throw new Error("Invalid number");
}
    switch (operation) {
        case "add":
            return a + b;

        case "subtract":
            return a - b;
        case "multiply":
            return a * b;
        case "divide":
            if (b === 0) {
                throw new Error("Cannot divide by zero");
            }
            return a / b;
        default:
            throw new Error("Invalid operation");
    }
}




