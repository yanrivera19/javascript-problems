/*
Write a JavaScript program to remove duplicate items from an array (consider case sensitivity).

Step 1: Create an array of numbers and store it in a variable called arrayOfNumbers.
Step 2: Create a function called noDuplicate that takes in an array as a parameter
and returns a new array without duplicated numbers.
Step 3: Create an empty array and store it in a variable called newArray. This empty 
array will acquire the numbers in the array that are not repeated.
Step 4: Loop through the array passed in using the forEach method.
Step 5: Check if the newArray doesn't include the curent number being looped.
If it doesn't, then that current number will be added to the array through the use of the push method. 
Step 6: Return the newArray.
*/

const arrayOfNumbers = [1,2,2,4,5,4,7,8,7,3,6];

const noDuplicate = array => {
let newArray = [];  
array.forEach(number => {  
   if(!newArray.includes(number)){  
      newArray.push(number);  
   }  
});
  return newArray;
};

noDuplicate(arrayOfNumbers); 