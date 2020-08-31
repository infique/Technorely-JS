/*  -------------------- ЗАДАНИЕ 1 ---------------------------
Using var, declare a global variable named myGlobal outside of any function.
Initialize it with a value of 10.
Inside function fun1, assign 5 to oopsGlobal without using the var keyword.
Условия выполнения:
    myGlobal should be defined
    myGlobal should have a value of 10
    myGlobal should be declared using the var keyword
    oopsGlobal should be a global variable and have a value of 5
*/
 // Declare the myGlobal variable below this line
var myGlobal = 10;
function fun1 () {
    // Assign 5 to oopsGlobal Here
    oopsGlobal = 5;
}
fun1();
fun2();
//Only change code above this line
function fun2(){
    var output = '';
    if (typeof myGlobal && oopsGlobal != 'undefined'){
         output += `myGlobal: ${myGlobal}, oopsGlobal: ${oopsGlobal}`
    }
    console.log(output)
}

/* -------------------- ЗАДАНИЕ 2 ---------------------------
The editor has two console.logs to help you see what is happening. 
Check the console as you code to see how it changes. 
Declare a local variable myVar inside myLocalScope and run the tests.
Note: The console will still have 'ReferenceError: myVar is not defined', but this will not cause the tests to fail.
Условия выполнения:
    The code should not contain a global myVarvariable.
    You should add a local myVar variable.
*/
function myLocalScope() {
    'use strict';
    var myVar;
    // Only change code below this line
    console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and chek the console
// myVar is not defined outside of myLocalScope;
console.log('outside myLocalScope', myVar);
