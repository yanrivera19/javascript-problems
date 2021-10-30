/*
Write a JavaScript function that takes in two parameters, an array and a number (n), and return the first n elements of that array.

Step 1: Write a JavaScript function called firstElements that takes in two parameters, an array and a number (n), and
returns first n elements of that array.
Step 2: Define a variable called slicedArray and add the slice method to the array that will be passed in to select
the first n elements of the array.
Step 3: Return slicedArray; 
*/

const firstElements = (array, n) => {
  const slicedArray = array.slice(0, n);
  return slicedArray;  
};