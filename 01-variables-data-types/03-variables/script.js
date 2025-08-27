// Ways to declare a variable
// var, let, const

let firstName = 'John';
let lastName = 'Doe';

console.log(firstName, lastName);

let age = 30;

console.log(age);

// Naming conventions
// - Only letters, numbers, underscores and dollar sign
// - Can't start with a number

// Multi-Word Formatting
// firstName - camelCase
// first_name - underscore
// FirstName - PascalCase
// firstname - lowercase 

// Reassigning variables
age = 31;

console.log(age);

// declaring a variable before assigning a value
let score;

score = 1;

console.log(score);

if (true) {
    score = score + 1;
}

console.log(score);

// const cannot be reassigned
const x = 100;

// x = 200;

// const cannot be declared without a value
// const score1;

// in arrays we can change the values of the elements using methods
const arr = [1, 2, 3, 4];
arr.push(5);

console.log(arr);

// in objects we can change the values of the properties using methods
const person = {
    name: 'John',
    age: 30,
}

person.name = 'Jane';
person.email = 'jane@example.com';

console.log(person);


// Declare multiple variables at once
let a, b, c;

const d = 10, e = 20, f = 30;

console.log(d, e, f);

// Assign multiple values to multiple variables
