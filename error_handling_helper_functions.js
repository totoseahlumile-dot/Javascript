function validateUserInput(name, age) {
    try {
        if (name == "" || name === undefined) {
            throw new Error("Name cannot be empty");
        }

        if (isNaN(age)) {
            throw new Error("Haibo! Age must be a number");
        }

        if (age < 0) {
            throw new Error("Come on dude! Age cannot be negative");
        }

        console.log("Input is valid");
    } catch (error) {
        console.error("Validation Error:", error.message);
    }
}
validateUserInput("Sizwelakhe", "ten");
validateUserInput("", 20);
validateUserInput("Azande", -99);

// Demontrating multiple error types

function demontrateErrors(value){
    try {
        if (typeof value !== "number"){
            throw new TypeError("Value must be a number");
        }
        if (value < 0){
            throw new RangeError("Value cannot be negative");
        }
        console.log("Value accepted:", value);
    }catch (error){
        console.error(error.name , error.message);
    }
}
demontrateErrors("Ugh man!");
demontrateErrors(10);

// Helper functions, String manipulation

function reverseString(str){
    return str.split("").reverse().join("");
}
function countCharacters(str){
    return str.length;
}
function capitalizeString(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
} 
console.log(reverseString("Ekitike"));
console.log(countCharacters("Ahlumile"));
console.log(capitalizeString("azande Mbaweni!"));

// Helper functions, Array manipulation

function getSmallestNumber(arr){
    return Math.min(...arr);
}
function getLargestNumber(arr){
    return Math.max(...arr);
}
console.log(getSmallestNumber([5, 2, 9, 1, 5]));
console.log(getLargestNumber([5, 2, 9, 1, 5]));

