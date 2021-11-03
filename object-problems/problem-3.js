/*
Create an object with three items in it, then write a JavaScript function that accepts
an object and tells you the length (tells you how many items are in it) of the object.

Step 1: Create an object called people with three items in it.
Step 2: Create a function called lengthObj that takes in an object
as a parameter.
Step 3: Use the Object.keys method to return the names of the object's properties
in an array.
Step 4: Add to the method the length property to measure the length of the array
to be returned.
Step 5: Log it into the console.
*/

const people = {
    firstName: "John",
    lastName: "Reeves",
    age: 32,
  };

function lengthObj(obj) {
  console.log(Object.keys(obj).length);  
}

lengthObj(people);
