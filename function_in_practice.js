/**
 * Created by joebals on 8/3/2017.
 */
//function that sums a number using function declaration
function sum(n1,n2){
    return n1+n2;
}
console.log(sum(2, 3));

//using function expression
var sum = function(num1, num2){
    return num1 + num2;
};
console.log(sum(3,3));

//function expression assigned to another function

var sum1 = function(x,y){
    return x+y;
};
var newFunction = sum1(4,3);
console.log(newFunction);
