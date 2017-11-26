var A = (function(){
var private = 0;
return {
 getPrivateVariableIncremented : function(){
  return private++;
}
}
})()

A.getPrivateVariableIncremented()
