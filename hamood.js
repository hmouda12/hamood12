console.log('Hello');
//alert('hello mohammad');

//variables define
var b='hamood';
console.log(b);
//var someNumber=45;
//console.log(someNumber);

// document.getElementById('id1').innerHTML='Hey there';

//var age=prompt('what is your age?');
//document.getElementById('id2').innerHTML= age;

//Number in JavaScript
var num1=10;
num1++;
console.log(num1);
num1--;
console.log(num1);

//Functions

function fun(){
    console.log('This is my function')
}
fun();

//function that take a name 
//and return the hello + name on the console
function greeting(){
    var name=prompt('what is your name?')
    var result='hello '+name;
    console.log(result);
}
//greeting();

//How to arguments work in function?
//Add to numbers in functions
function sumNumbers(num1, num2){
    var result = num1 + num2;
    console.log(result);
}
sumNumbers(10,15);
