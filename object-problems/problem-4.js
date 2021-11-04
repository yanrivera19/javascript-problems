/*
Create an object, then write a JavaScript function that checks whether an object contains the specified key.

Step 1: Create an object called cars.
Step 2: Create a function called isIncluded that takes in an object and
a key as parameters.
Step 3: Check if the key that's passed in is included in the object that's passed in. We use 
the Objects.key method to return the object's properties in an array, and use the includes property
to check if the key passed in is included in the object passed in. 
Step 4: Return this whole statement.
*/


const cars = {
    model: "Corvette",
    year: "1986",
    color: "white",
  };

function isIncluded (obj, key) {
  return Object.keys(obj).includes(key);
};

console.log(isIncluded(cars, "year"));