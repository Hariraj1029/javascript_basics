Basics of Javascript
Open console in the web page and use these functions

clear(); // clears the console
var age=10;
console.log(); //used to output to the console
console.log(age);// printing variable value
console.log("Hello"+age);//prints Hello10
alert(); //opens popup as alert in the page
var age; //variable
prompt("enter something")// input function
var age= prompt("enter your age") //entering data into age variable
alert("Hello I am an  alert");//semicolon is not compulsory

Accessing the letters in a string
var string="beast";
console.log(string[0]);//prints 'b'

connecting javascript with html file

1. using <script src="xyz.js"></script> in the <head> tag so that the page will execute the javascript file and after that html file
2. using <script src="xyz.js"></script> in the <body> tag first html and then javascript

comparision operator gives out the boolean value for the expression as output
eg.
1 <= 0; --> false
2>=2; -->true
1<=3; -->true
1==1; -->true
1!=0; -->true

In javascript (string)"2"==2(integer) gives true as it stores every variable in string
so to differ that we use "2"===2 then it gives false [it will also checks the type of the value]

true==1; -->true
true===1; -->false
false==0; -->true
false===0; -->false
null==undefined -->true
null===undefined -->false
NaN==NaN; -->false

loops,break and conditional statements are as C++

for (var i = 0; i < array.length; i++) { //for loop
  array[i]
}
                  OR
for (var variable in object) { //for in loop used through js objects
  if (object.hasOwnProperty(variable)) {

  }
}
  OR
for (var variable of iterable) { //for of loop used for arrays

}

FUNCTIONS
function functionName() {
  console.log("I am a function");
}
//To execute a function in console or in .js file
functionName()

//only calling function but not executing it in console
functionName
//outputs : function functionName() {
//  console.log("I am a function");
//}

function functionName(name="hari") { //Single default parameter when the user don't give any input parameter
  console.log("Hello "+name);
}
functionName() //Hello hari
functionName("beast")//Hello beast

//Using return
function functionName(name) {
  return "Hello "+name;
}

//arrays
var arr= [1,2,3,4]
console.log(arr[0]);//1
console.log(arr[3]);//4

//Mixed data types
var mixed=[true,20,"string"]
mixed.length //gives size of mixed array
//adding and removing elements
var a=arr.pop()
console.log(a);//4
arr.push(5);
arr // [1,2,3,4,5]
arr[arr.lenth -1] //5
var matrix =[[1,2,3],[4,5,6]]
matrix.length //2

//array iteration
for (var i = 0; i < array.length; i++) {
  console.log(array[i]);
}

for (var i of arr) {
  console.log(i); //1 2 3 4 5
}

function prints(name) {
  console.log(name);
}

arr.forEach(prints);//1 2 3 4 5
