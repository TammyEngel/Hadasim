// //Sec 1
// let a = "Hello";
// let b = "World";
// a = a + b;
// b = a.slice(0, a.length -b.length);
// a = a.slice(b.length);


// console.log(a); // World
// console.log(b); // Hello

// //Sec 2
// let grid = [
//     ["X", "O", "x", "O", "X"],
//     ["O", "X", "O", "x", "O"],
//     ["x", "O", "X", "O", "X"],
//     ["X", "x", "O", "O", "O"],
//     ["O", "X", "O", "X", "x"]
// ];
// let count = 0;

// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < 5; j++) {
//         if (grid[i][j] === "X") {
//             count++;
//         }
//     }
// }

// console.log(count);

// //Sec 3
// let family = { parents: {}, children: [ {name: "Ali"}, {name: "Lea"}, {name: "Mona"} ] };
// console.log(family.children[2].name); 
// let names = "";

// for (let i = 0; i < family.children.length; i++) {
//     // כאן נוסיף את השם למחרוזת
//     names += family.children[i].name + " ";
// }
// console.log(names);

// //Sec 4
// let arr = [10, 20, 30, 40, 50];
// let reversed = [];

// for (let i = arr.length - 1; i >= 0; i--) {
//     reversed.push(arr[i]);
// }
// console.log(reversed);

//Sec 5
// let arr = [
//     10, "Hello", true, null,
//     25, "World", false, {},
//     50, [1, 2], null, "JavaScript"
// ];

// let counts = {
//     number: 0,
//     string: 0,
//     object: 0,
//     boolean: 0,
//     null: 0
// };

// for (let i = 0; i < arr.length; i++) {
//     let type = typeof arr[i];
//     if (arr[i] === null) {
//         counts.null++;
//     } else if (type === "number") {
//         counts.number++;
//     } else if (type === "string") {
//         counts.string++;
//     } else if (type === "boolean") {
//         counts.boolean++;
//     } else if (type === "object") {
//         counts.object++;
//     }
// }

// console.log(counts);

//Sec 6
// let arr = [45, 120, 78, 200, 99, 150, 30, 300];

// let result = [];
// let comparisons = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 100) {
//         result.push(arr[i]);
//     }
//     comparisons++;
// }

// console.log("Numbers greater than 100:", result);
// console.log("Total comparisons made:", comparisons);

//Sec 7
// let numbers = {even: [], odd: []};
// let count = 0;

// for (let i = 1; i <= 50; i++) {
//     if (i % 2 === 0) {
//         numbers.even.push(i);
//     } else {
//         numbers.odd.push(i);
//     }
//     if(i%2 === 0 && i%3 === 0){
//         count++;
//     }
// }

// console.log("Even numbers:", numbers.even);
// console.log("Odd numbers:", numbers.odd);
// console.log("Count of numbers divisible by both 2 and 3:", count);

//Sec 8
// let grid = [
//     [0, 0, 0],
//     [0, 0, 0],
//     [0, 0, 0]
// ];
// for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid[i].length; j++) {
//         if (i === j) {
//             grid[i][j] = '#';
//         }
//         if(i + j === 2){
//             grid[i][j] = '#';
//         }
//     }
// }
// for (let i = 0; i < grid.length; i++) {
//     console.log(grid[i].join(' '));
// }

//Sec 9
// let str = "Hello, World! Hello JavaScript.";
// let counts = {};
// str = str.toLowerCase();
// for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (char < "a" || char > "z") {
//         continue;
//     }
//     if (counts[char]) {
//         counts[char]++;
//     } else {
//         counts[char] = 1;
//     }
// }
// console.log(counts);


//Sec 10
// let arr = [
//     [1, -2, 3],
//     [-4, 5, 6],
//     [7, -8, 9]
// ];
// let result = [];
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         if (arr[i][j] > 0) {
//             result.push(arr[i][j]);
//         }
//     }
// }
// console.log(result);

//Sec 11
// let person = {
//     name: "David",
//     age: 25,
//     city: "London",
//     country: "England"
// };

// let result = {};
// let keys = Object.keys(person).sort();

// for (let i = 0; i < keys.length; i++) {
//     let key = keys[i];
//     result[key.toUpperCase()] = person[key];
// }
// console.log(result);

//Sec 12
// let symbol = '*';
// let size =3;
// for (let i = 1; i <= size; i++) {
//     let line = '';      
//     line += symbol.repeat(i);
//     console.log(line);
// }

//Sec 13
// let arr = [1, 2, 3, 4, 5, 100];
// let arr2 = [1,1,1,2,3,4,5,6,7,8,9,0,10,11,23,45,67,89,90,100];
// let count = 0;
// let obj = {};

// for (let i = 0; i < arr.length; i++) {
//     obj[arr[i]] = true;
// }

// for (let i = 0; i < arr2.length; i++) {
//     if(obj[arr2[i]] ===  true){
//         count++;
//         obj[arr2[i]] = false;
//     }
// }

// console.log(count);

//Sec 14
// let obj = {
//     name: "David",
//     age: 25,
//     city: "London",
//     active: true,
//     score: 95,
//     hobbies: ["music", "sports"],
//     country: "Israel"
// };

// let reversed = {};

// for (let key in obj) {
//     if (typeof obj[key] === "string" || typeof obj[key] === "number") {
//         let value = obj[key];
//         reversed[value] = key;
//     }
// }

// console.log(reversed);

//Sec 15
// let arr = [];
// for (let i = 0; i < 5; i++) {
//     arr[i] = [];
//     for (let j = 0; j < 5; j++) {
//         if (i === j) {
//             arr[i].push(1);
//         }
//         else{
//             arr[i].push(0);
//         }
//         if(i==2){
//             arr[i][j] = 9;
//         }
//     }
// }
// console.log(arr);

//Sec 16
// let users = [
//     { name: "David", age: 25, status: "active" },
//     { name: "Sarah", age: 16, status: "inactive" },
//     { name: "John", age: 20, status: "active" },
//     { name: "Emma", age: 17, status: "active" },
//     { name: "Michael", age: 15, status: "inactive" },
//     { name: "Daniel", age: 30, status: "inactive" },
//     { name: "Alex", age: 19, status: "active" },
//     { name: "Tom", age: 14, status: "inactive" },
//     { name: "James", age: 18, status: "active" },
//     { name: "Oliver", age: 22, status: "active" }
// ];

// let count = 0;

// for (let i = 0; i < users.length; i++) {
//     if (users[i].age >= 18 && users[i].status === "active") {
//         console.log(users[i].name);
//     }
//     if(users[i].age < 18 && users[i].status === "inactive"){
//         count++;
//     }
// }

// console.log("Count of inactive users under 18:", count);

//Sec 17
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let max = arr[0];

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
// }
// console.log(max);

//Sec 18
// let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < 3; i++) {
//     let first = arr.shift();
//     arr.push(first);
// }

// console.log(arr);

//Sec 19
// let person = {
//     name: "Ali",
//     age: 25,
//     city: "London"
// };

// let result = "{";
// let count = 0;

// for (let key in person) {
//     if (count > 0) {
//         result += ", ";
//     }

//     result += '"' + key + '": ';

//     if (typeof person[key] === "string") {
//         result += '"' + person[key] + '"';
//     } else {
//         result += person[key];
//     }

//     count++;
// }
// result += "}";
// console.log(result);


//Sec 20
let board = [
    ["X", "O", "X", "O"],
    ["O", "X", "O", "X"],
    ["X", "O", "O", "O"],
    ["O", "X", "X", "O"]
];

let valid = true;

// בדיקת שורות
for (let i = 0; i < board.length; i++) {
    let countrow = 0;

    for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] === "O") {
            countrow++;
        }
    }

    if (countrow > 2) {
        console.log("Row", i, "is invalid");
        valid = false;
    }
}

// בדיקת עמודות
for (let j = 0; j < board[0].length; j++) {
    let countcol = 0;

    for (let i = 0; i < board.length; i++) {
        if (board[i][j] === "O") {
            countcol++;
        }
    }

    if (countcol > 2) {
        console.log("Column", j, "is invalid");
        valid = false;
    }
}

// תוצאה סופית
if (valid) {
    console.log("Board is valid");
} else {
    console.log("Board is invalid");
}
