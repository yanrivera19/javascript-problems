/*
Write a JavaScript function to calculate the factorial of a number.

Step 1: We write a function called factorial in which we pass a number (x) as a parameter.
Step 2: The factorial of a number is calculated by multiplying a number by each consecutive
number minus one. For example, the factorial of 5 is: 5*4*3*2*1 = 120. In order to
calculate this in our function, we first need to make sure that if the number being passed in
our parameter is 0, we return 1 because if we use 0 in our multiplication, the result of the whole computation
will be 0. This is our stopping condition and it's also called the base case.
Step 3: As long as the stopping condition is not met, then it will return the multiplication of the number passed in (x) by
the parent function (factorial()) with the number passed in minus one (x-1) as its parameter. 
What this does is that the number that we pass in (not being 0) will appear in our return statement and with
the subtracion that occurs inside of our recursive function, this function will get called with the number passed in minus
one as its parameter. This recursive function will keep calling itself with new values acquired from the substractions until the 
stopping condition is met. Then all the numbers in our return statement that were passed in thanks to the recursion will be 
multiplied from left to right.
*/

function factorial(x) { 
  if (x === 0) {
  	return 1;
  } else {
  	return x * factorial(x-1);
  }
};

console.log(factorial(5));