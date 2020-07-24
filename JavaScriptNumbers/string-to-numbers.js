// Exercise:
// convert the user response from a string to a number.
// typeof - put this next to a variables name when you call it and it 
// will tell you, wether, its a string, number, boolean..etc

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
// parseFloat() - takes a string value and returns a floating point value
 

/*const pie = '3.14';
console.log(parseFloat(pie));*/