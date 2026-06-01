function sum(num) {
  // Check if value is a number
  if (typeof num !== "number" || num % 1 !== 0) {
    return "The value passed is not a number";
  }

  let total = 0;

  for (let i = 0; i <= num; i++) {
    total += i;
  }

  return total;
}

// Tests
console.log(sum(5)); // 15
console.log(sum(10)); // 55
console.log(sum("5")); // The value passed is not a number

function factorial(num) {
  let result = 1;

  for (let i = num; i >= 1; i--) {
    result *= i;
  }

  return result;
}

// Tests
console.log(factorial(4)); // 24
console.log(factorial(5)); // 120

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

// Tests
console.log(funkyMath(8, 2)); // 6
console.log(funkyMath(1, 2, 3)); // 6
console.log(funkyMath(8, 2, 3, 5)); // 1.25

let numbers = [1, 2, 33, 45, 6, 44];

let oddNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    oddNumbers.push(numbers[i]);
  }
}

// Arrange from smallest to biggest
oddNumbers.sort(function (a, b) {
  return a - b;
});

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
