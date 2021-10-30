/*
Create an array of people objects with first name, last name, and age, then write a JavaScript program to 
display the first and last names of all the people.

Step 1: Create an array of objects called people, and each object should contain the properties "firstName",
"lastName", and "age".
Step 2: Run a for loop through the array.
Step 3: Log into the console each object's firstName and lastName property values. 
*/


let people = [
  {
    firstName: "John",
    lastName: "Reeves",
    age: 32,
  },
  {
    firstName: "Clara",
    lastName: "Rivera",
    age: 23,
  },
  {
    firstName: "Bill",
    lastName: "Greene",
    age: 65,
  }
];

for(let i =0; i < people.length; i++) {
  console.log(people[i].firstName + " " + people[i].lastName);
}