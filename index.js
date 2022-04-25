// not defind, undefined, null
// not defind - Any variable which we try to  access but not declared will throw us a reference error: varible not define
//console.log(myAge); 

// undefined - If a variable is declared but not assigned any value yet, but if we try to access that variable then we will get an error as undefined.
//let myHobbies;
//console.log(myHobbies);
//myHobbies = "Skating";
//console.log(myHobbies);

//null - Its a default value assigned by a user to the variable as long as the variable has not been assigned its original/updated value 

/*let amIadult = null;
console.log(amIadult)
amIadult = true;
console.log(amIadult)

//global scope and local / block scope
// global scope 
/*let fname = "Nikhil";
const lname = "Bajaj"
var age = 29;

console.log(fname, lname, age); {
    console.log(fname, lname, age);
}
console.log(fname, lname, age);*/

//local scope
{
    let fname = "Nikhil";
    const lname = "Bajaj"
    var age = 29;
    console.log(fname, lname, age);
}
// in global scope generally we are not able to access block socpe variable as long as there's Let/const keyword so it will give us a refrenceError : variable not defined. but for var we can access them  even on global scope.

//console.log(fname);
//console.log(lname);
//console.log(age);

//-----------------------------------------------------------------

//Hoisting - its ony supported with that var keyword and with the functions. Let and const keywords donot support hoisting.
// Let keyword variable cannot be accessed before declaration/initialization 
/*console.log(game); //ReferenceError: Cannot access 'game' before initialization
let game = "cricket";*/

//var keyword variable are hoisting
/*console.log(game2); //undefined
var game2;
game2 = "Badminton";
console.log(game2); //badmiton*/

// Note - for var keyword variables, if we try to access them before assigning values to the will give us undefined but the moment we declare a value to it it will give us the assigned value.

// Hoisting in functions
//function are hoisted because of which we con call teh function before declaring the function.
add(3, 4); //arguments

function add(a, b) {
    let result = a + b;
    console.log(result);
    //console.log("hello add function");
}