const data = [ 
{ 
name: "John", 
birthday: "1-1-1995", 
favoriteFoods: { 
meats: ["hamburgers", "sausages"], 
fish: ["salmon", "pike"], 
}, 
}, 
{ 
name: "Mark", 
birthday: "10-5-1980", 
favoriteFoods: { 
meats: ["hamburgers", "steak", "lamb"], 
fish: ["tuna", "salmon", "barracuda"], 
}, 
}, 
{ 
name: "Mary", 
birthday: "1-10-1977", 
favoriteFoods: { 
meats: ["cow", "chicken"], 
fish: ["pike"], 
},
}, 
{ 
name: "Thomas", 
birthday: "1-10-1990", 
favoriteFoods: { 
meats: ["bird", "rooster"], 
fish: ["salmon"], 
}, 
}, 
{ 
name: "Mary", 
birthday: "1-10-1977", 
favoriteFoods: { 
meats: ["hamburgers", "lamb"], 
fish: ["bass", "tuna"], 
}, 
}, 
]; 


console.log("****************** Quastion 1 ******************");
function getNames(data) {
    const names = data.map(person => person.name);
    return names;
    }

console.log(getNames(data));

console.log("****************** Quastion 2 ******************");
function lowBirthday(data) {
    const birthdays = data.filter(person =>
    Number(person.birthday.split("-")[2]) < 1990
);
    return birthdays;
}

console.log(lowBirthday(data));

console.log("****************** Quastion 3 ******************");
function countFoods(data){
    const foodCount = {};
    data.forEach(person => {
         const foods = person.favoriteFoods.meats.concat(
            person.favoriteFoods.fish
        );
        foods.forEach(food => {
            if (foodCount[food]) {
                foodCount[food]++;
            } else {
                foodCount[food] = 1;
            }
});
    });
    return foodCount;
}


console.log(countFoods(data));
