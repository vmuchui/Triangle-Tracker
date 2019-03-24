function reload(){
var value1 = document.getElementById('sideA').value
var value2 = document.getElementById('sideB').value
var value3 = document.getElementById('sideC').value

var sideA = parseFloat(value1);
var sideB = parseFloat(value2);
var sideC = parseFloat(value3);
var track = function(a,b,c){
return a + b > c && a + c > b && b + c > a
}
if(track(sideA,sideB,sideC)&& sideA===sideB && sideB===sideC && sideA===sideC){
alert("Your triangle is equilateral!");
}
else if(track(sideA,sideB,sideC)&& sideA===sideB && sideA!==sideC || sideB===sideC && sideB!==sideA || sideA===sideC && sideC!==sideB){
alert("Your triangle is Isosceles!")
}
else if(track(sideA,sideB,sideC)&& sideA!==sideB && sideB!==sideC && sideA!==sideC){
alert("Your triangle is Scalene!")
}
else {
alert("Your values do not create a triangle!")
}};
