//Write a JavaScript function that checks whether a passed string is palindrome or not.

/* 
Step 1: Define a function that accepts a string as a parameter.
Step 2: Define a variable called regex with the regular expression, using a literal notation, 
to remove all non-alphanumeric characters from the string passed in.
Step 3: Lowercase the string passed in and remove all non-alphanumeric characters.
Step 4: Define a variable called len that defines the length of the string passed in.
Step 5: Create a for loop and run it through the characters of the string passed in. Because we 
are checking if the string passed in is a palindrome or not, in the loop the len gets divided into two parts.
Step 6: Check if all the characters from both parts match. If they don't match, return false. 
Step 7: Return true.
*/


const checkPalindrome = str => {
 let regex = /[^A-Za-z0-9]/g;
 str = str.toLowerCase().replace(regex, "");
 let len = str.length;
 for (let i = 0; i < len/2; i++) {
   if (str[i] !== str[len - 1 - i]) {
       console.log("The string is NOT a palindrome");
       return false;
   }
 }
  console.log("The string is a palindrome");
  return true;
}

console.log(checkPalindrome("A man, a plan, a canal. Panama"));