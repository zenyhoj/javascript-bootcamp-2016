/**
 * Created by joebals on 8/3/2017.
 */
//if
//var something = false;
//if(something){
//    console.log("True");
//} else {
//    console.log("False");
//}
////0 = false
////1 or any other including string is interpreted as true;
////null and empty is false
//var some1 = undefined;
////some1 must be true to be executed
//if(some1){
//    console.log("Executed");
//}else{
//    console.log("not executed");
//}
//
////using switch statement instead of if
////syntax:
////var declaration = varValue; //could be any
////switch(declartion){
////case 'something':
//    //console.log("some text");
//    //break;
////case varValue:
//    //console.log("some text");
//    //break;
////default: //same as else in if statement
//    //console.log("some text");
//    //break;
//}

var valueIs = 2;
switch (valueIs){
    case 1:
        console.log("value is 1");
        break;

    case 2:
        console.log("value is 2");
        break;

    default:
        console.log("default");
        break;
}


