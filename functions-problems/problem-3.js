/*Write a JavaScript function that accepts two arguments, a string and a letter and 
the function will count the number of occurrences of the specified letter within the string.*/ 

/*
Step 1: Define a function that accepts two arguments: a string (str) and a letter (ltr).
Step 2: Split the string passed in (str), and turn it into an array of each individual letter. Name
it arrayOfLetters.
Step 3: Lowercase the letter (ltr) passed in.
Step 4: Define a variable called numberOfOccurences and set its initial value to 0.
Step 5: Set a loop through the arrayOfLetters.
Step 6: Check if the current letter of our loop is the letter passed in (ltr).
Step 7: Increase the numberOfOccurrences by one for every letter in our loop that's the letter passed in (ltr).
Step 8: Return the numberOfOccurrences.
*/

const findOccurrences = function(str, ltr) {
	let arrayOfLetters = str.split("");
    ltr = ltr.toLowerCase();
    let numberOfOccurrences = 0;
	for(i = 0; i < arrayOfLetters.length; i++) {
		if(str[i].includes(ltr)) {
			numberOfOccurrences ++
		}
 	}
 	return console.log(numberOfOccurrences);
}

findOccurrences("JavaScript is fun", "A");
