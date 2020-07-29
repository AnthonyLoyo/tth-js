
// Example of Math.round()
// Math.round() takes the numbers placed inside its paranthesis and 
// rounds them to the nearest intergers.

// Example:
/*console.log(Math.round(44.2));*/

// Example of Math.random()
// Math.random() reurns a random floating point number between 0-1
// inclsive of 0, but never 1

// Example:
console.log(Math.random());


// using just Math.raandom is very limited because it'll only return a 
// floating point number between 0-1 but of we multiply by lets say 6
// that will expand the numbers we can get

// Example:
console.log(Math.random() * 6);


// Example of Math.floor()
// Math.foor() converts floating point numbers to whole intergers by
// rounding the number down. If the number is alreaady a whole interger 
// it will return that value

// Example:
console.log(Math.floor(3.8));


// Example of Math.ceil()
// Math.ceil() converts floating point numbers to whole intergers by
// rounding the number up. If the number is already a whole interger
// it will return that value

// Example:
console.log(Math.ceil(3.2));


// Example of creating whole random numbers
// We take Math.floor() and put Math.random() inside its paranthesis.
// inside the paranthesis of Math.floor() we multiply Math.random() 
// by 6. This in turn works rom inside out, esentually we recieve
// a floating point number from Math.radom(), we multiply that number 
// by 6, then we round that number down to get a whole interger.

// Example: 
console.log( Math.floor(Math.random() *6) );




