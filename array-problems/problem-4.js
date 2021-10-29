/*
Step 1: Create an array of numbers and store it in a variable called arrayOfNumbers.
Step 2: Create an empty array and store it in a variable called noDuplicate. This empty 
array will acquire the numbers in the array that are not repeated.
Step 3: Loop through the arrayOfNumbers using the forEach method.
Step 4: Check if the noDuplicate array doesn't include the curent number being looped.
If it doesn't, then that current number will be added to the array by using the push method. 
Step 6: Log into the console the noDuplicate array.
*/

const arrayOfNumbers = [1,2,2,4,5,4,7,8,7,3,6];
let noDuplicate = [];  
arrayOfNumbers.forEach((number) => {  
   if(!noDuplicate.includes(number)){  
      noDuplicate.push(number);  
   }  
});  

console.log(noDuplicate);  
