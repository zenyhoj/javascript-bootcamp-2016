
"use strict"
//hoisting example: allows variable definition after initialization. but must be before the output
/*
x = 5;
console.log(x);
if(x==undefined){
    console.log("pataka ra mn gud ka ug declare");
}else{
    console.log(x);
}
var x;//ends here
*/

//functions
//types of creating function
//1. by function declaration
function calc(){
    //logic in here...
    //console.log(typeof calc);
}
calc(); //calling the function
//2. variable expression
var calc = function(x,y){
    return x + y;
    //logic in here...
    //console.log("inside function");
};//put semicolon after the bracket
//calc(); //calling the function

var anotherFn = calc(); //function calc ("without the ()") assigned to anotherFn
//if calc will be added with  (), which means returns a value, and will issue an error a NaN it has no value inside in the ().
console.log(anotherFn); //value of function calc() will be passed to anotherFn();


var prod = function(x,y){
    return x*y;
};
//var returnedProd = prod(2,5);
console.log(prod(200.50,200.10).toFixed(2));



