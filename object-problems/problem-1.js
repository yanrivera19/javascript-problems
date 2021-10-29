/*
Step 1: Create a sample object.
Step 2: Create a function that deletes a property of an object that is passed to it.
Step 3: The function must take in two parameters, the object and the property to be deleted.
Step 4: Delete the property passed in with the use of the delete operator. We use a square bracket
for the property instead of the dot because this is not the literal name of the property
to be deleted; it is a reference to it.
Step 5: Return the object passed in that now doesn't have the property that was deleted.
Step 6: Call the function with the arguments to be passed in.
*/

let movies = {
	name: "Dune",
	director: "Denis Villeneuve",
	cinematography: "Greig Fraser",
	music: "Hans Zimmer"
};

const dProp = (obj, prop) => {
	delete obj[prop];
	return obj;
};


dProp(movies, "name");
