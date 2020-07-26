// Exercise:
// convert the user response from a string to a number.

// My Example:

/*const HTMLBadges = prompt("How mant HTML Badges do you have?");
const CSSBadges = prompt("How many CSS badges do you have?");

const totalBadges = +HTMLBadges + +CSSBadges;

console.log(totalBadges);*/


// Example 1)
// parseInt()
// we take the user response stored in the HTMLBadges and CSSBadges var
// and convert it to a interger(no decimal) using parseInt().
// we do this by placing the name of the varibale inside the pareseInt()
// paranthesis

/*const HTMLBadges = prompt("How mant HTML Badges do you have?");
const CSSBadges = prompt("How many CSS badges do you have?");

const totalBadges = parseInt(HTMLBadges) + parseInt(CSSBadges);

console.log(totalBadges);*/


// Example 2)
// parseFloat()
// parseFloat() is for numbers that have decimal points.
// it takes string value and returns it as a number and with a 
// decimal if it was entered
 

/*const pi = '3.2';
console.log(parseFloat(pi));*/


// if we pass a sentence through parseFloat() that has a decimal with
// a point in the beggining. It will only return the decimal.
/*let num = parseFloat("1.89 light years away");
console.log(num);*/

// however if the sentence has number at the end it will return NaN
// (Not a Number) it can only scan for numbers in the beggining of
// the string. Doesnt matter if you use parseFloat() or parseInt()
/*let number = parseInt("the pie cost 9.99");
console.log(number);*/ 

// Example 4)
// urinary operator +
// with the urinart operator convert a string to a number
// works with both whole intergers and floting point numbers
/*let toby = "3";
console.log(+toby);*/


// Example 6)
// we can use the methof 'typeOf' to check what type of primitive data
// our vllue is. String,Number,Boolan ... etc

/*let benito = "I am a puppy";
console.log(typeof benito);*/
