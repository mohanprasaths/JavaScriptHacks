/* Monkey Patching allows you to redefine a existing functions 
So that a set of custom operations can be performed before 
that function */

// Sample funtion to add two numbers and return a value
function add(a,b){
	return a+b;
}

add(2,3) //return 5;

/* Now I need the function to log the values before they return the value */

let next = add;

add = function monkeyPatchAddWithLog(a,b){
	console.log("a value is "+a);
	console.log("b value is "+b);
	var result = next(a,b);
	return result;
}

//For the best refer http://redux.js.org/docs/advanced/Middleware.html