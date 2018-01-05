/*//Scope Chain
//concept: the function looks for the outer environment(global variable declarations) for variable values if it did not find any inside the function()
//in this example, function b() will look for myVar values in the global environment so it will output as 1

function b(){
   console.log(myVar);
}
function a(){
   console.log(myVar);
   b();
}
var myVar = 2;
console.log(myVar);
var myVar = 3;//this will be ignored
var myVar = 1;

a();/*
//Outputs:
//2
//1
//1
//note: 2 is not get because it is being used in the console.log(myVar) global scope.
//it will look for the inner variable value and not the top 1, which in this case is 1;

/* Asynchronous callbacks
//concept: even if the function loaded long, browser event (click event) that is triggered is still has to wait for the whole execute stack to finished
//3 seconds delay function
function waitThreeSeconds(){
    var ms = 3000 + new Date().getTime(); //this will be converted into decimal
    while(new Date() < ms){}
    console.log('finished execution');
}


function clickHandler(){
    console.log('click event triggered');
}

//listen for the click event; after clicking, will call for the clickHandler function
document.addEventListener('click', clickHandler ); //event queu/loop; to be processed after all the execution stack has been processed

waitThreeSeconds();
console.log('this is global execution');*/


function greetName(){
  return function name(){
    console.log('hey' + name);
  }
  name();
}
greetName();
