//Write a JavaScript function that accepts a string as a parameter and 
//find the longest word within the string.

/* 
Step 1: Define a JavaScript function that accepts a string as a parameter.
Step 2: Split the string passed in and turn it into an array of each individual word.
Name it arrayOfWords.
Step 3: Define a variable called longestWord and set the individual value to "0". The "0"
has quotation marks because in order to determine the longest word in the loop when we, 
we have to assign the value of the current word in the loop from the arrayOfWords to the 
variable longestWord. 
Step 4: Run a 'for loop' through the arrayOfWords.
Step 5: Check if the current word in the loop is the longest word.
Step 6: Return the longestWord
*/

function findLongestWord(str) {
  var arrayOfWords = str.split(" ");
  var longestWord = "0";
  for(var i = 0; i < arrayOfWords.length; i++) {
    if(arrayOfWords[i].length > longestWord.length) {
      longestWord = arrayOfWords[i]; 
    }
  }
  return console.log(longestWord);
}

var sentence = "I love to go the beach"
findLongestWord(sentence);