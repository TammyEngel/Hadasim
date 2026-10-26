const readline = require("readline-sync");
console.log("*********** Quastion 1 ***********");

function Phone(brand, model) {
    this.brand = brand;
    this.model = model;

    this.details = function () {
        console.log(`Phone: ${this.brand} ${this.model}`);
    };
}

let phone1 = new Phone("Samsung", "S22");
phone1.details();

console.log("*********** Question 2 ***********");

function Rectangle(width, height) {
    this.width = width;
    this.height = height;

    this.area = function () {
        return width * height;
    }
}

let rec1 = new Rectangle(5, 7);
console.log(rec1.area());

console.log("*********** Question 3 ***********");

function BankAccount(owner, balance) {
    this.owner = owner;
    this.balance = balance;

    this.deposit = function (amount) {
        this.balance += amount;
    }

    this.withdraw = function (amount) {
        if (amount <= balance) {
            this.balance -= amount;
        }
        else {
            console.log("You don;t have enough money!")
        }
    }


    this.checkBalance = function () {
        console.log("Your current balance is: " + balance);
    }
}

let account1 = new BankAccount("Tammy", 1000);

console.log("Initial balance:");
account1.checkBalance(); // 1000

console.log("After deposit of 500:");
account1.deposit(500);
account1.checkBalance(); // 1500

console.log("After withdrawal of 200:");
account1.withdraw(200);
account1.checkBalance(); // 1300

console.log("Attempt to withdraw 2000:");
account1.withdraw(2000);
account1.checkBalance(); // 1300

console.log("After another deposit of 100:");
account1.deposit(100);
account1.checkBalance(); // 1400


console.log("*********** Question 4 ***********");

// Parent Constructor
function Animal(name) {
    this.name = name;
}

// Parent Method
Animal.prototype.speak = function () {
    console.log(`${this.name} makes a sound`);
};

// Child Constructor
function Dog(name) {
    Animal.call(this, name);
}

// Inheritance
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Child Method
Dog.prototype.bark = function () {
    console.log(`${this.name} barks`);
};

// Testing
let dog1 = new Dog("Rocky");

dog1.speak(); // Rocky makes a sound
dog1.bark();  // Rocky barks


console.log("*********** Question 5 ***********");

function Vehicle(type) {
    this.type = type;
}

Vehicle.prototype.describe = function () {
    console.log(`This is a ${this.type}`);
};

function Car(brand) {
    Vehicle.call(this, "car");
    this.brand = brand;
}

let car1 = new Car("BMW");

console.log(car1.type);  // car
console.log(car1.brand); // BMW

console.log("*********** Question 6 ***********");

function Shape() { }

Shape.prototype.area = function () {
    return 0;
}

function Circle(radius) {
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.area = function () {
    return Math.PI * this.radius ** 2;
};

function Square(side) {
    this.side = side;
}

Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

Square.prototype.area = function () {
    return this.side * this.side;
}

// Testing
let shape1 = new Shape();
let circle1 = new Circle(3);
let square1 = new Square(4);

console.log(shape1.area());  // 0
console.log(circle1.area()); // 28.274333882308138
console.log(square1.area()); // 16

// Check Inheritance
console.log(circle1 instanceof Shape); // true
console.log(square1 instanceof Shape); // true
console.log(circle1 instanceof Circle); // true
console.log(square1 instanceof Square); // true

console.log("*********** Question 7 ***********");

class Book {
    constructor(title, author){
        this.title = title;
        this.author = author;
    }

    info(){
        return `${this.title} by ${this.author}`;
    }
}

let book1 = new Book("The habbit", "Tolkien");
console.log(book1.info());

console.log("*********** Question 8 ***********");

class Person{
    constructor(name){
        this.name = name;
    }

    greet(){
        console.log("Hello i'm " + this.name)
    }
}

class Student extends Person{
    constructor(name, school){
        super(name);
        this.school = school;
    }

    study(){
        console.log(this.name + " is studying at " + this.school); 
    }
}


let student1 = new Student("Alice", "Oxford");
student1.greet();
student1.study();

console.log("*********** Question 9 ***********");

class Employee{
    #salary;
    constructor(salary){
        this.#salary = salary;
    }

    getSalary(){
        return this.#salary;
    }

    work(){
        console.log("Employee is working")
    }
}

class Manager extends Employee{
    constructor(salary){
        super(salary)
    }

    work(){
        console.log("Manager is managing");
    }
}

let manager1 = new Manager(5000);
console.log(manager1.getSalary());
manager1.work();


console.log("*********** OOP Challenges ***********");
console.log("*********** Question 1 ***********");


class MediaItem {
    constructor(title, year, genre) {
        this.title = title;
        this.year = year;
        this.genre = genre;
    }

    getSummary() {
        return `${this.title} was puclished in ${this.year} and the genre is ${this.genre}`;
    }
}

class Book extends MediaItem {
    constructor(title, author, year, genre, pageCount) {
        super(title, year, genre);
        this.author = author;
        this.pageCount = pageCount;
    }
    getSummary() {
        return `Book: ${this.title} by ${this.author}, ${this.pageCount} pages`;
    }
}

class Movie extends MediaItem {
    constructor(title, director, year, genre, durationMinutes) {
        super(title, year, genre);
        this.director = director;
        this.durationMinutes = durationMinutes;
    }

    getSummary() {
        return `Movie: ${this.title} directed by ${this.director}, ${this.durationMinutes} min`
    }
}

class Library {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    search(term) {
        return this.items.filter(item => item.title.toLowerCase().includes(term.toLowerCase()));
    }

    listByGenre(genre) {
        return this.items.filter(item => item.genre.toLowerCase() === genre.toLowerCase());
    }
}


const lib = new Library();

lib.addItem(new Book(
    "Dune", "Frank Herbert", 1965, "Sci-Fi", 412
));

lib.addItem(new Movie(
    "Dune", "Denis Villeneuve", 2021, "Sci-Fi", 155
));

lib.addItem(new Book(
    "Harry Potter", "J.K. Rowling", 1997, "Fantasy", 223
));

console.log("****** All Items ******");

lib.items.forEach(item => {
    console.log(item.getSummary());
});

console.log("****** Search Dune ******");

lib.search("dune").forEach(item => {
    console.log(item.getSummary());
});

console.log("****** Sci-Fi Items ******");

lib.listByGenre("Sci-Fi").forEach(item => {
    console.log(item.getSummary());
});



console.log("*********** Question 2 ***********");

class BankAccount {
    #balance;

    constructor(owner, balance) {
        if (typeof owner !== "string" || !owner.trim()) {
            throw new Error("Owner name cannot be empty");
        }

        if (!Number.isFinite(balance) || balance < 0) {
            throw new Error("Invalid initial balance");
        }

        this.owner = owner.trim();
        this.#balance = balance;
    }

    deposit(amount) {
        if (!Number.isFinite(amount) || amount <= 0) {
            throw new Error("The amount must be a positive number");
        }

        if (!Number.isFinite(this.#balance + amount)) {
            throw new Error("Invalid resulting balance");
        }

        this.#balance += amount;
    }

    withdraw(amount) {
        if (!Number.isFinite(amount) || amount <= 0) {
            throw new Error("The amount must be a positive number");
        }

        if (amount > this.#balance) {
            throw new Error("Not enough money");
        }

        this.#balance -= amount;
    }

    getBalance() {
        return this.#balance;
    }
}

class Bank {
    #accounts = [];

    addAccount(account) {
        if (!(account instanceof BankAccount)) {
            throw new Error("Invalid bank account");
        }

        if (this.#accounts.some(acc => acc.owner === account.owner)) {
            throw new Error("Account already exists");
        }

        this.#accounts.push(account);
    }

    findAccount(owner) {
        return this.#accounts.find(account => account.owner === owner);
    }

    transfer(fromName, toName, amount) {
        let fromAccount = this.findAccount(fromName);
        let toAccount = this.findAccount(toName);

        if (!fromAccount) {
            throw new Error("Sender account not found");
        }

        if (!toAccount) {
            throw new Error("Receiver account not found");
        }

        if (fromAccount === toAccount) {
            throw new Error("Cannot transfer to the same account");
        }

        if (!Number.isFinite(amount) || amount <= 0) {
            throw new Error("The amount must be a positive number");
        }

        if (amount > fromAccount.getBalance()) {
            throw new Error("Not enough money");
        }

        if (!Number.isFinite(toAccount.getBalance() + amount)) {
            throw new Error("Invalid resulting balance");
        }

        fromAccount.withdraw(amount);
        toAccount.deposit(amount);
    }

    showBalances() {
        if (this.#accounts.length === 0) {
            console.log("No accounts found");
            return;
        }

        this.#accounts.forEach(account => {
            console.log(`${account.owner}: ${account.getBalance()}`);
        });
    }
}

const bank = new Bank();

function showMenu() {
    console.log("\n===== Welcome to the Bank =====");
    console.log("1. Create account");
    console.log("2. Transfer money");
    console.log("3. Show balances");
    console.log("4. Deposit money");
    console.log("5. Withdraw money");
    console.log("6. Exit");
}

function readAmount(message) {
    const input = readline.question(message).trim();

    if (input === "") {
        throw new Error("Amount cannot be empty");
    }

    const amount = Number(input);

    if (!Number.isFinite(amount)) {
        throw new Error("Invalid amount");
    }

    return amount;
}

let running = true;

while (running) {
    showMenu();

    let choice = readline.question("Choose an option: ");

    try {
        switch (choice) {

            case "1": {
                let owner = readline.question("Enter owner name: ");

                let balance = readAmount("Enter initial balance: ");

                let newAccount = new BankAccount(owner, balance);

                bank.addAccount(newAccount);

                console.log("Account created successfully!");
                break;
            }

            case "2": {
                let fromName = readline.question("From account: ");
                let toName = readline.question("To account: ");

                let amount = readAmount("Enter amount: ");

                bank.transfer(fromName, toName, amount);

                console.log("Transfer completed successfully!");
                break;
            }

            case "3": {
                bank.showBalances();
                break;
            }

            case "4": {
                let owner = readline.question("Account owner: ");

                let account = bank.findAccount(owner);

                if (!account) {
                    throw new Error("Account not found");
                }

                let amount = readAmount("Deposit amount: ");

                account.deposit(amount);

                console.log("Deposit successful!");
                break;
            }

            case "5": {
                let owner = readline.question("Account owner: ");

                let account = bank.findAccount(owner);

                if (!account) {
                    throw new Error("Account not found");
                }

                let amount = readAmount("Withdraw amount: ");

                account.withdraw(amount);

                console.log("Withdrawal successful!");
                break;
            }

            case "6": {
                console.log("Goodbye!");
                running = false;
                break;
            }

            default:
                console.log("Invalid option. Try again.");
        }

    } catch (error) {
        console.log("Error: " + error.message);
    }
}


console.log("*********** Question 3 ***********");

class Animal {

    #lastFedTime = null;
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    feed() {
        this.#lastFedTime = new Date();
    }

    getLastFedTime() {
        return this.#lastFedTime;
    }
}

class Carnivore extends Animal {
    feed() {
        super.feed();
        console.log(`Feeding carnivore ${this.species} - meat served`)
    }
}

class Herbivore extends Animal {
    feed() {
        super.feed();
        console.log(`Feeding herbivore ${this.species} - veggies served`)
    }
}

class Zookeeper{
    #animals =[];

    addAnimal(animal){
        if(!(animal instanceof Animal)){
            throw new Error("Invalid animal");
        }
        this.#animals.push(animal);
    }
    feedAll(){
        this.#animals.forEach(animal =>{
            animal.feed();
        })
    }
    getLastFed(name){
        let animal = this.#animals.find(animal => animal.name === name);
        if(!animal){
            throw new Error("Animal not found");
        }
        return animal.getLastFedTime();
    }

    getBySpecies(species){
        return this.#animals.filter(animal => animal.species === species);
    }
}

const zoo = new Zookeeper();

zoo.addAnimal(new Carnivore("Simba", "Lion"));
zoo.addAnimal(new Herbivore("Longneck", "Giraffe"));
zoo.addAnimal(new Carnivore("Mufasa", "Lion"));

console.log("******** Feeding All Animals ********");
zoo.feedAll();

console.log("******** Last Feeding Time ********");
console.log(zoo.getLastFed("Simba"));

console.log("******** Lions ********");
console.log(zoo.getBySpecies("Lion"));