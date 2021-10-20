/*Write a JavaScript function that accepts a string as a parameter and 
returns the number of vowels in that string.*/

/*
step 1: define a JavaScript function that accepts a string as a parameter.
step 2: lowercase string passed in.
step 3: split the string passed in, turn it into an array of each individual letter,
store it in a variable called arrayOfLetters.
step 4: define a variable called numberOfVowels and set the initial value to be equal to 0.
step 5: define a variable that defines what a vowel is. an array of vowels.
step 6: start looping through our array of letters.
step 7: check if the current letter in our loop is a vowel.
step 8: increase the numberOfVowels by one for every letter that's a vowel.
step 9: return the numberOfVowels
*/

function vowelsInString(str) { 
  str = str.toLowerCase();
  var arrayOfLetters = str.split("");
  var vowels = ["a", "e", "i", "o", "u"]; 
  var numberOfVowels = 0;
  for(var i = 0; i < arrayOfLetters.length; i++) {
    if(vowels.includes(str[i])) {
      numberOfVowels++;
    }
  }
  return console.log(numberOfVowels);
}
  
var sentence = "my name is yan"

vowelsInString(sentence);