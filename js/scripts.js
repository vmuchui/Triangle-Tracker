function reload(){
var sideA = parseFloat(prompt("Enter first value!"));
var sideB = parseFloat(prompt("Enter second value!"));
var sideC = parseFloat(prompt("Enter third value!"));
var track = function(a,b,c){
return a + b > c && a + c > b && b + c > a
};
if(track(sideA,sideB,sideC)&& sideA===sideB && sideB===sideC && sideA===sideC){
alert("Your triangle is equilateral!");
};
else if(track(sideA,sideB,sideC)&& sideA===sideB && sideA!==sideC || sideB===sideC && sideB!==sideA || sideA===sideC && sideC!==sideB){
alert("Your triangle is Isosceles!")
};
else if(track(sideA,sideB,sideC)&& sideA!==sideB && sideB!==sideC && sideA!==sideC){
alert("Your triangle is Scalene!")
};
else {
alert("Your values do not create a triangle!")
};
};
