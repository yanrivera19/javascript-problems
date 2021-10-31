/*
Create a P element with a link inside. Then, write a JavaScript function to get the HREF attribute 
of the link.

Step 1: Create a basic HTML page.
Step 2: Connect the HTML page to the JavaScript file through the src attribute
in the "script" tag.
Step 3: Add a "p" element with an id of "p1" and add an anchor element inside of it.
Step 4: Add an id, href attribute, and text to the anchor element.
Step 5: Create a JavaScript function called getAttr that gets the HREF attribute of the anchor element. 
Step 6: Create a variable called "link" to get the href attribute of the anchor element , by using
the getAttribute property.
Step 7: Assign the value of the "link "variable to the parent element "p" using the innerHTML property. 
*/

const getAttr = function() {
	let link = document.getElementById("w3Link").getAttribute("href");
	document.getElementById("p1").innerHTML = link;
	
};

