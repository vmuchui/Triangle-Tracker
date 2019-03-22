var sideA = parseFloat(prompt("Enter first value!"));
var sideB = parseFloat(prompt("Enter second value!"));
var sideC = parseFloat(prompt("Enter third value!"));
var track = function(a,b,c){
return a + b > c && a + c > b && b + c > a
}
