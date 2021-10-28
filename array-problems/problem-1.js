/*
Step 1: Write a JavaScript function called firstElements that takes in two parameters, an array and a number (n), and
returns first n elements of that array.
Step 2: Define a variable called slicedArray and add the slice method to the array that will be passed in to select
the first n elements of the array.
Step 3: Run a for loop through the array.
Step 4: return slicedArray; 
*/

const firstElements = (array, n) => {
  const slicedArray = array.slice(0, n);
  for (let i = 0; i < array.length; i++) {
    return slicedArray;
  }
};