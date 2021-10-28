/*
Step 1: Define a variable called myArray with an array of numbers.
Step 2: Define a variable called sortNumbers and sort the elements in myArray 
using the sort method. Because we want to sort numbers properly in ascending order,
we will use a compare function.
Step 3: Log into the console the sortNumbers variable.
*/


const myArray = [-3,8,7,6,5,-4,3,2,1];
const sortNumbers = myArray.sort(function(a, b){return a-b});
console.log(sortNumbers);