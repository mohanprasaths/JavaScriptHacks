var myObj = {
	x : 10
}

/* funtion return x which is in scope */
function showMyX(){
	console.log(this.x);
}
/* Will return undefined because since there is no variable 'x' in scope */
showMyX(); //return undefined

/* The bind function binds the obj passed through the bind function and keeps it in scope */
showMyX = showMyX.bind(myObj)

showMyX(); //return 10
