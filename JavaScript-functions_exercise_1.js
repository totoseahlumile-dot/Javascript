let x = 3
let y = 9
let z = 5
function multiply(a,b,c){
    //console.log(a*b*c)
    return a*b*c
}
console.log(multiply(x,y,z))

const convertToSeconds = function(minutes){
    return minutes * 60;

}
console.log(convertToSeconds(20))

function fahrenheitToCelsius(fahrenheit){
    return (fahrenheit - 32) * (5/9)
}
console.log(fahrenheitToCelsius(99))

function reverseString(str){
    return str.split("").reverse().join("") // assited by AI
} 
console.log(reverseString("Ahlumile"))

function countVowels(str){
    return 
}
console.log(countVowels("Ahlumile"))

function isPrime(num) {

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) return false;
  }
  return true;
}
console.log(isPrime(2))