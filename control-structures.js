/**
 * Created by joebals on 8/3/2017.
 */
//if
var something = false;
if(something){
    console.log("True");
} else {
    console.log("False");
}
//0 = false
//1 or any other including string is interpreted as true;
//null and empty is false
var some1 = undefined;
//some1 must be true to be executed
if(some1){
    console.log("Executed");
}else{
    console.log("not executed");
}