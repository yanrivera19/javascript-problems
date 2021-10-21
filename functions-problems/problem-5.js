/*
Write a JavaScript program that iterates the integers from 1 to 100. 
But for multiples of three print "Fizz" instead of the number and 
for the multiples of five print "Buzz". For numbers 
that are multiples of both three and five print "FizzBuzz". 
*/

/* 
Step 1: Create a for loop that itirates the integers from 1 to 100.
Step 2: Create an if statement that prints "FizzBuzz" if the current integer in the loop 
is a multiple of both 3 and 5.
Step 3: Create an else if statement that prints "Fizz" if the current integer in the loop 
is only a multiple of 3.
Step 4: Create an else if statement that prints "Buzz" if the current integer in the loop 
is only a multiple of 5.
Step 5: Create an else statement that prints the integers that don't satisfy any of the previous
conditions.
*/


for (let i = 1; i < 101; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fiz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else { 
    console.log(i);
  }
}