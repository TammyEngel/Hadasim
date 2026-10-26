
console.log("********************* Qastion 1 *********************");

function doubleValues(arr) {
    let newArray = arr.map(function (num) {
        return num * 2;
    });

    return newArray;
}

let array = [1, 2, 3, 4, 5];
let doubledArray = doubleValues(array);
console.log(doubledArray);


console.log("********************* Qastion 2 *********************");

function onlyEvenValues(arr) {
    let newArray = [];
    arr.forEach(function (num) {
        if (num % 2 === 0) {
            newArray.push(num);
        }
    });
    return newArray;
}

let evenArray = onlyEvenValues(array);
console.log(evenArray);

console.log("********************* Qastion 3 *********************");

function showFirstAndLast(arr) {
    let newArray = [];
    arr.forEach(function (str, index) {
        if ((index === 0 || index === arr.length - 1) && typeof str === "string") {
            newArray.push(str);
        }
    });
    return newArray;
}

let stringArray = ["hello", "world", "javascript", "is", "fun"];
let firstAndLastArray = showFirstAndLast(stringArray);

console.log(firstAndLastArray);

console.log("********************* Qastion 4 *********************");

function vowelCount(str) {
    let vowels = "aeiouAEIOU";
    let vowelCounts = {};

    str.split("").forEach(function (char) {
        if (vowels.includes(char)) {
            let lowerChar = char.toLowerCase();
            vowelCounts[lowerChar] = (vowelCounts[lowerChar] || 0) + 1;
        }
    });

    return vowelCounts;
}

let inputString = "Hello World";
let vowelCounts = vowelCount(inputString);
console.log(vowelCounts);

console.log("********************* Qastion 5 *********************");

function capitalizeWords(string) {
    let newArray = string.split(" ").map(function (word) {
        return word.toUpperCase();
    });
    return newArray.join(" ");
}

let inputString2 = "hello world";
let capitalizedString = capitalizeWords(inputString2);
console.log(capitalizedString);

console.log("********************* Qastion 6 *********************");

function shiftLetters(string) {
    let newString = string.split("").map(function (char) {
        if(char === 'z'){
            return 'a';
        }
        if(char === 'Z'){
            return 'A';
        }
        if (char.match(/[a-yA-Y]/)) {
            let code = char.charCodeAt(0);
            return String.fromCharCode(code + 1);
        }
        return char;
    });

    return newString.join("");
}

let inputString3 = "abc xyz";
let shiftedString = shiftLetters(inputString3);
console.log(shiftedString);

console.log("********************* Qastion 7 *********************");

function swapCase(string) {
    let newString = string.split(" ").map(function(word, index){
        if(index % 2 !== 0){
            return word.toUpperCase();
        }
        return word;
    });
    
    return newString.join(" ");
}       

let inputString4 = "hello world javascript is fun";
let swappedCaseString = swapCase(inputString4);
console.log(swappedCaseString);