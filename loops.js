let numbers = [1, 2, 3, 4, 5];
  for (let x=0; x<numbers.length; x++){
    console.log(numbers[x])
  }
let count = 5;
  while (count >=1){
    console.log(count);count--;
  }

for (let n=0; n<numbers.length;n++){
    if (n % 2 == 0)
        console.log(n)
}
let sum = 0;
for (let n = 0; n < numbers.length; n++) {
    sum += numbers[n];
}
console.log("The sum of the numbers is:", sum);
