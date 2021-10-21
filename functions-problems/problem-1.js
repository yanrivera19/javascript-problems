//Write a JavaScript function that accepts a string as a parameter and 
//find the longest word within the string.

/* 
Step 1: Define a JavaScript function that accepts a string as a parameter.
Step 2: Split the string passed in and turn it into an array of each individual word.
Name it arrayOfWords.
Step 3: Define a variable called longestWord and set the individual value to ''. 
Step 4: Run a for loop through the arrayOfWords.
Step 5: Check if the current word in the loop is the longest word.
Step 6: Return the longestWord
*/

function findLongestWord (str) {
  const arrayOfWords = str.split(' ');
  let longestWord = '';
  for (let i = 0; i < arrayOfWords.length; i++) {
    if (arrayOfWords[i].length > longestWord.length) {
      longestWord = arrayOfWords[i]; 
    }
  }
  return longestWord;
}

let sentence = 'I love to go the beach'

findLongestWord (sentence);