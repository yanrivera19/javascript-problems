/*Write a JavaScript function that accepts a string as a parameter and 
returns the number of vowels in that string.*/

/*
Step 1: Define a JavaScript function that accepts a string as a parameter.
Step 2: Split the string passed in, turn it into an array of each individual letter,
Store it in a variable called arrayOfLetters.
Step 3: Define a variable called lowerCaseString and lowercase the string passed in.
Step 4: Define a variable called numberOfVowels and set the initial value to be equal to 0.
Step 5: Define a variable called vowels that defines what a vowel. Create an array of vowels.
Step 6: Start looping through our array of letters.
Step 7: Check if the current letter in our loop is a vowel.
Step 8: Increase the numberOfVowels by one for every letter that's a vowel.
Step 9: Return the numberOfVowels
*/

function vowelsInString (str) { 
  const arrayOfLetters = str.split('');
  let lowerCaseString = str.toLowerCase();
  const vowels = ['a', 'e', 'i', 'o', 'u']; 
  let numberOfVowels = 0;
  for (let i = 0; i < arrayOfLetters.length; i++) {
    if (vowels.includes(lowerCaseString[i])) {
      numberOfVowels++;
    }
  }
  return numberOfVowels;
}
  
let sentence = 'my name is yan';

vowelsInString (sentence);