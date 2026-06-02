function sum(x) {
  if (typeof x !== "number" || x % 1 !== 0) {
    return "The value passed is not a number";
  }

  let total = 0;

  for (let i = 0; i <= x; i++) {
    total += i;
  }

  return total;
}

console.log(sum(5)); 


function factorial(num) {
  let result = 1;

  for (let i = num; i >= 1; i--) {
    result *= i;
  }

  return result;
}
console.log(factorial(4)); 
console.log(factorial(5))

function funkyMath(a, b, c, d) {
  if (arguments.length === 2) {
    return a - b;
  }

  if (arguments.length === 3) {
    return a + b + c;
  }

  if (arguments.length === 4) {
    return (a + b) / (c + d);
  }

  return "Invalid number of arguments";
}


console.log(funkyMath(8, 2)); 

let numbers = [1, 2, 33, 45, 6, 44];

let oddNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    oddNumbers.push(numbers[i]);
  }
}
console.log("Odd Numbers:", oddNumbers);

let me = {
  firstName: "Ahlumile",
  lastName: "Totose",
  age: 18,
  favouriteColour: "Blue",
  dreamCar: "Mercedes-Benz C63 AMG",
};

console.log(me);

me.favouriteFood = "Pizza";

console.log(me);

delete me.age;

console.log(me);
