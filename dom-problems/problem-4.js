/*
Create an HTML page with a dropdown list with three items in it, then write a JavaScript function 
that displays the number of items and displays the item in the list.

Step 1: Create an HTML page and add a dropdown list using "select" element with three items in it.
Step 2: Add a button element that will run the function when clicked.
Step 3: Write a JS function that displays the number of items and the items in the dropdown list.
Step 4: Define a variable called dropList to get the "select" element by its Id.
Step 5: Define a variable called numItems with the length of the dropdown list.
Step 6: Define a variable called alertMessage with an empty string that we eill use to compose the 
message to be alerted.
Step 7: Run a for loop through the options in the dropdown list. Each individual item's text will be
selected and then appended to the empty string of the alertMessage. We also add a " " to the 
alertMessage so that each item will be separated by a space when displayed on the browser. 
Step 8: Add an alert-box with the alert method that displays the number of items and the items 
in the dropdown list.
Step 9: Write the function name inside of the onclick event of the button element 
on the HTML.
*/
const displayItems = function () {
	const dropList = document.getElementById("select1"); 
	const numItems = document.getElementById("select1").options.length;
	let alertMessage = ""; 
	for (let i = 0; i < dropList.length; i++) {
		alertMessage+= " " + dropList.options[i].text
	} 
	alert("Number of Teams: " + numItems + " Teams:" + alertMessage);
};


