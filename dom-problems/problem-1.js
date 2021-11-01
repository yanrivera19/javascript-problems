/*
Create a basic HTML page with a P element on it. Then, write a JavaScript program 
to set the background color of that paragraph.

Step 1: Create a basic HTML page.
Step 2: Connect the HTML file with the JavaScript file with a "script" 
element linking the JavaScript file.
Step 3: Add a "p" element and give it the id "p1".
Step 4: On the JavaScript file, create a variable called bgColor.
Step 5: In the variable we will first make reference to the HTML document we're working
with by using the document object. We then select the element we want to manipulate (p) 
by its Id name ("p1") using the getElementById method. 
Step 6: We then use the style property in order to set the CSS style that we want to set 
to our element. We then use the CSS property backgroundColor and assign it to "blue".
*/

let bgColor = document.getElementById("p1").style.backgroundColor = "blue";

