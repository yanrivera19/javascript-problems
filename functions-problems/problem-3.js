/*Write a JavaScript function that accepts two arguments, a string and a letter and 
the function will count the number of occurrences of the specified letter within the string.*/ 

/*
Step 1: Define a function that accepts two arguments: a string (str) and a letter (ltr).
Step 2: Split the string passed in (str), and turn it into an array of each individual letter. Name
it arrayOfLetters.
Step 3: Define a variable called lowerCaseString and lowercase the string (str) passed in.
Step 4: Define a variable called lowerCaseLetter and lowercase the lletter (ltr) passed in.
Step 5: Define a variable called numberOfOccurences and set its initial value to 0.
Step 6: Set a loop through the arrayOfLetters.
Step 7: Check if the current letter of our loop is the letter passed in.
Step 8: Increase the numberOfOccurrences by one for every letter in our loop that's the letter passed in.
Step 9: Return the numberOfOccurrences.
*/

const findOccurrences = function (str, ltr) {
  const arrayOfLetters = str.split('');
  const lowerCaseString = str.toLowerCase();
  const lowerCaseLetter = ltr.toLowerCase();
  let numberOfOccurrences = 0;
  for (i = 0; i < lowerCaseString.length; i++) {
    if (lowerCaseString[i].includes(lowerCaseLetter)) {
	numberOfOccurrences ++ 
    }
  }
  return numberOfOccurrences;
};

findOccurrences ('JavaScript is fun', 'A');
