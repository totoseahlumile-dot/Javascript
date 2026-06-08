const name = "Ahlumile";
const age = 18;
const city = "Cape Town";

const multilineString = `My name is ${name}.
I am ${age} years old.
I live in ${city}.`;

console.log(multilineString);

// a function that uses template literals to gemerate html content

function generateUserCard(name, age, city){
    return  `
    <div class="user-card">
        <h2>${name}</h2>
        <p>Age: ${age}</p>
        <p>City: ${city}</p>
    </div>
    `;
}
console.log(generateUserCard("Ahlumile", 18, "Cape Town"));

// converting a function to an arrow function

const greet = (name) => `Hello, ${name}! Welcome to Life Choices Academy.`;
console.log(greet("Ahlumile"));

const add = (a, b) => a + b;
console.log(add(5, 7));

const square = (x) => x * x;
console.log(square(4));

//  arrow functions in array methods

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers);

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);