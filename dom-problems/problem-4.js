/*
Step 1: Create an HTML page and add a dropdown list using "select" element with three items in it.
Step 2: Add a button element that will run the function when clicked.
Step 3: Write a JS function that displays the number of items and the items in the dropdown list.
Step 4: Define a variable called dropList to get the "select" element by its Id.
Step 5: Define a variable called numItems with the length of the dropdown list.
Step 6: Run a for loop through the options in the dropdown list.
Step 7: Inside the loop, add an alert-box with the alert method that displays 
the number of items and the items in the dropdown list.
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


