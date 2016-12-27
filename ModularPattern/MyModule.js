var MyModule = (function(){
	var addFunction = function(a,b){ return a+b; }
	var subFunction = function(a,b){ return a-b; }
	return {
		addFunction,
		subFunction
	}
})();