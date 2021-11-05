/*
Write a JavaScript program to compute the sum of an array of integers.

Step 1: We create an array of integers (numbers) called arrayOfInt.
Step 2: We write a function called sumOfInt that takes in an array as its parameter.
Step 3: We establish our stopping condition, which in this case is to return 0 when
the array passed in is empty. 
Step 4: As long as the stopping condition is not met, we will add the first element of the
array to the the function sumOfInt which will have as its parameter the rest of the array.
We select the rest of the array applying the slice method to the array passed in and with a 
parameter of 1, meaning that a copy of the array will be made starting from the second element
of the array (index of 1) onward. This recursive function will keep calling itself, and the copies
of the array will keep reducing in length, it will be returning the first element of each copy.
That will result in the sum of each individual element (integers) of the array.
*/

let arrayOfInt = [1,2,3,4,5,6,7];

function sumOfInt(array) {
  if(array.length === 0) {
    return 0;
    } else {
    return array[0] + sumOfInt(array.slice(1));
  }
};

console.log(sumOfInt(arrayOfInt));