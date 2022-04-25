console.log("Working")

//Arithmetic Operators
//-,+,/,*,%

// Modulus - It gives us the remainder 
console.log(2 + 3); //5
console.log(2 - 3); //-1
console.log(2 * 3); //6
console.log(2 / 3); //0.6666666666
console.log(2 % 3); //2

//Comparision Operators
//==/!=only check the values and not the data type but ===/!== check both the value and the datatype
//<,>,<=,>=,==, ===;
console.log(2 < 3); //ture( boolean values an ans)
console.log(2 > 3);
console.log(2 >= 3);
console.log(2 <= 3);

console.log(2 != 3);
console.log(2 != 2);
console.log(2 !== 2);
console.log(2 == 2);
console.log(2 === 2);
console.log(2 == "2");
console.log(2 === "2");

// Logical Operators
// ||,&&, !

console.log(2 || 3);
console.log(0 || 3);
console.log(0 || 0);

console.log(2 && 3);
console.log(0 && 3);
console.log(2 && 0);

console.log(!0); //
console.log(!1);
console.log(!2);


// Increment decrement Operators
//post increment operator(++)

let a = 1;
a++; // a =a+1;
console.log(a); //2
a--; //a=a-1
console.log(a); //1
//a=1;
//console.log(a++); //1// i will first print the value of a, and then increment its value with 1 which will be reflected/shown in next line not on the some line
console.log(a--); //1// i will first print the value of a, and then increment its value with 1 which will be reflected/shown in next line not on the some line    
console.log(a) //0
let b = 2;
b *= 3;
b /= 3;
b += 2;
b -= 4;