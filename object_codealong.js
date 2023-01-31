let person = {
    firstName: 'Billy',
    lastName: 'Bob',
    age: 29
}
//ways of accessing ojbect information
console.log(person);
console.log(person.firstName);
console.log(person['lastName']);

console.log('========================================================');

//destructuring demo
let meal = {
    appetizer: {food: 'dumplings', size: 'medium'},
    entree: 'carnitas burrito',
    dessert: 'carrot cake',
    drink: 'PBR'
}

let {entree} = meal;

console.log(entree);
console.log(meal.entree);
console.log(meal.appetizer.food);

//destructuring all of the properties into their own variables
//the properties can be renamed inside the destructuring
let {appetizer, dessert, drink: bestDrinkEver} = meal;
//renamed "drink" is assigned to vairable "bestDrinkEver now"
console.log(appetizer, dessert, bestDrinkEver);

console.log('===========================================================');

for (let key in meal) {
    console.log(meal[key]);
}

console.log('=========================================================');

person.job = 'toe-tickler';
person.alive = true;
delete person.age;

console.log(person);

console.log('===============================================================');

class Dog {
    constructor(name, breed, age) {
        this.name = name;
        this.breed = breed;
        this.age = age;
    }
    //setting a method
    speak(){
        console.log(`hello my name is ${this.name}`)
    }
    //methods can have parameters and more complex functions inside
    shout(times) {
        for(let i = 0; i < times; i++) {
            console.log(`HELLO MY NAME IS ${this.name}`);
        }
    }
}

let champ = new Dog('Champ', 'Labrador', 2);

console.log(champ);
champ.speak();
champ.shout(3);

console.log('================================================================');

//Creating a subclass w/ extends and super
class Puppy extends Dog {
    constructor(name, breed, age, trainingLevel, cuteness) {
        super(name, breed, age);
        this.trainingLevel = trainingLevel;
        this.cuteness = cuteness;
    }
    levelUp(num) {
        this.trainingLevel += num;
    }
    killByCuteness() {
        console.log(`Puppy roles over and give you puppy eyes`);
    }
}

let buddy = new Puppy('buddy','pitbull',0.5,0,10000)

console.log(buddy);
buddy.levelUp(10);
delete buddy.age;
buddy['color'] = "yellow";
buddy.killByCuteness();
buddy.breed = 'golden reteiver';
console.log(buddy);

//using a loop to create multiple objects at once
//good way of making fake data for site
let dogNames = ['guy','toby','joe','spark','shadow'];
let dogBreeds = ['lab','bordercollie','pug','poodle','pitbull'];

let dogs = [];

let makeDogs = () => {
    for (let i = 0; i < 5; i++) {
        let newDog = new Dog(dogNames[i],dogBreeds[i],3)
        dogs.push(newDog)
    }
}
makeDogs();
console.log(dogs);

console.log('==============================================================');

//you can store classes, objects, functions, and all sorts of stuff in an array
//lots of options

//looping through the dogs array and calling speak and shout on each
for (let i = 0; i < dogs.length; i++) {
    dogs[i].speak();
    dogs[i].shout(3);
}

//The essense of coding is manipulating Data