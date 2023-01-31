// Write your code below this line.
/*
 Given a number, n, return an array containing n unique random 
numbers between 1-10, inclusive. (That is, do not repeat any numbers 
    in the returned list.)
 You can trust that this function will never be called with
 n < 0 or n > 10.
 */

const randomNumber = () => Math.ceil(Math.random() * 10);

const randomArray = (num) => {
    let count = 0;
    let array = [];
    while (count < num) {
        let newNum = randomNumber();
        if (!array.includes(newNum)) {
            array.push(newNum);
            count++;
        }
    }
return array;
}
console.log(randomArray(randomNumber()));


const recursionArray = (num) => {
    let array = [];
    let newNum = randomNumber();
    if (num <= 0) {
        return "finished";
    } else {
        if(!array.includes(newNum)) {
            array.push(newNum);
            recursionArray(num - 1);
        }
    }
}
console.log(recursionArray(4));