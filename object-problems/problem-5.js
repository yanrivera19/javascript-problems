/*
Write a JavaScript function to sort the following array of objects by title value.

Step 1: Create an array of objects called movies.
Step 2: Use a compare function to sort the array of objects lexographically by the title value. The function will be called sortArray, and 
it will compare the title values of the object, two values at a time. If the first value compared is greater than the second value, the first 
value will be sorted before the second. If the second is greater than the first, the second will be sorted before the first. If both are exactly 
the same, then no sorting happens. 
Step 3: Define two variables called titleA and titleB, where the values being compared will have the toUpperCase method applied to them, because
JavaScript sorts uppercase letters before lowercase letters.
Step 4: Use the sort method on the movies array and have the sortArray function as the callback function.
*/

const movies = [ 

   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},

   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},

   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}

   ];

const sortArray = function(a, b) {
  const titleA = a.title.toUpperCase(); 
  const titleB = b.title.toUpperCase(); 
  if (titleA < titleB) {
    return -1;
  }
  if (titleA > titleB) {
    return 1;
   }
   return 0;
  };

movies.sort(sortArray);

