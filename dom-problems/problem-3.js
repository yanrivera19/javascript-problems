/*
Create a basic HTML page with a table and two rows in it.
Then, write a JavaScript function to add rows to a table.

Step 1: Create a basic HTML Page.
Step 2: Add a table with two rows in it.
Step 3: Write a JavaScript function on the js file to add rows to the table.
Step 4: Define a variable called table and find the table element with the id "table1".
Step 5: Define a variable called row, create a row using the insertRow method, 
and add it to the 1st position of the table.
Step 6: Create two variables called cell1 and cell2 and add two cells at the first and
second position to the created row.
Step 7: Add text to the cells using innerHTML property.
*/

const addRows = function () {
	const table = document.getElementById("table1");
	let row = table.insertRow(0);
	let row2 = table.insertRow(1);
	let cell1 = row.insertCell(0);
	let cell2 = row.insertCell(1);
	let cell3 = row2.insertCell(0);
	let cell4 = row2.insertCell(1);
	cell1.innerHTML = 30;
	cell2.innerHTML = 9;
	cell3.innerHTML = 11;
	cell4.innerHTML = 61;
};
