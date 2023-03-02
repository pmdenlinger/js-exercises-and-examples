var name = "Josh Morrison";
// From ES6 (ES 2015) variables are declared like this
const firstName = "Josh";
let lastName = "Morrison";

// uncaught TypeError
const personAge = 33;
let personAge = 34;

// overwrite the values for let and var
var dob = "29.09.1992";
dob = "30.09.1992";

let dogName = "Bing";
dogName = "Bingo";

let a, b, c;
a = 5;
b = 7;
c = a + b;

a = 10;
b = 6;
c = a + b;

/**************Data types****************/
/**************Primitives****************/

// 1) String
let myText = "Text";
let myText1 = "Text";

//  2 )Number
let firstNum = 1;
let secondNum = 2;

// 3) Boolean
let isTrue = true;
let isFalse = false;

// 4) undefined
let noValue;

// 5) null
let n = null;

// typeof operator
console.log(typeof myText);
console.log(typeof firstNum);
console.log(typeof isTrue);
console.log(typeof noValue);
console.log(typeof null);
