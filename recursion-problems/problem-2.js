/*
Write a JavaScript program to compute the sum of an array of integers.

Step 1: We create an array of numbers (integers) called arrayOfInt.
Step 2: We write a function called sumOfInt that takes in an array as its parameter.
Step 3: We return the following expression: We use the reduce method on our array passed in. 
This reduce method has a callback function inside of its parameter that will be executed on 
each element of the array. This will compute the sum of the integers of the array passed in and 
will have as a result a single value.
*/

let arrayOfInt = [1,2,3,4,5,6,7];

const sumOfInt = array => {
  return array.reduce((prevValue, currValue) => prevValue + currValue);
}

console.log(sumOfInt(arrayOfInt))