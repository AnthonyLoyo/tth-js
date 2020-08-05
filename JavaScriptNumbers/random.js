// collect input from a user 

// convert the input to a number 

// Use Math.random() and the users number to generate a random number

// create a message dispalying the random number 

// Loyos Example
// In my example i use prompt() to collect a number from the user 
// then i convert that number from a string to a true number 
// by using the urinary operator.
// after I create another variable to store the mathamatical order
// inside Mth.floor(), I multiplay Math.random() against the 
// number we recieved from the user the i add 1 to it.
// then i push it to the document usking query selector.

/*let userNumber = prompt("Please provide a number!");

userNumber = +userNumber;

let randomNumber = Math.floor(Math.random() * userNumber) + 1;

document.querySelector("main").innerHTML = 
`<h1>${randomNumber} is a random number between 1 and ${userNumber}</h1>`
;*/


// Guils Example
// Guils example is the same to my except that he uses parseInt()
// to convert the user response from a strig to a number.

/*const inputHigh = prompt("Please provide a number");

const highNumber = parseInt(inputHigh);

const randomNumber = Math.floor(Math.random() * highNumber) + 1;

console.log(`${randomNumber} is a random number between 1 and ${highNumber}.`);*/




// Guils Example using Conditional Statements
// Guils creates a varible with the prompt() method to get s number from
// the user.
// then he coverts the user number from a string to a number by creating
// a variable and using the parseInt() method and placing the inputHigh
// variable inside the paranthesis. the parsInt() mehtod converts 
// the user input from a string to a number.
// Guil then uses a if() statement and places highNumber inside its 
// paranthesis, the if() statement evaluates if the variable inside 
// its paranthesis is true. since highNumber evaluates to true, the 
// first code block runs. if the variable inside the paranthesis comes 
// out to false the else code block will run.
// if the user enters 0, it will equal false since 0 evaluates to false
// if the user does not enter a number then it will return NaN
// NaN evaluates to false which in return will run the else code block.

/*const inputHigh = prompt("Please provide a number");

const highNumber = parseInt(inputHigh);

if ( highNumber ) {
    const randomNumber = Math.floor(Math.random() * highNumber) + 1;

    console.log(`${randomNumber} is a random number between 1 and ${highNumber}.`);

} else {
    console.log("You need provide a number, try again!")
}*/



/*-------------------------------------------------------------------------*/


// TASK
// In this exercise we must collect user input again but this time.
// our random nu ber must be between their selected number and their 
// second selected number. also gonna run a conditional statement because
// guil did it in his last example.


// Loyo Solution: incomplete - it can generate only between 1 - 9
// it can not generate a random number between 10 and beyond..

/*let firstNumber = prompt("Please select your first number!");

let secondNumber = prompt("Please select your second number!");

firstNumber = +firstNumber;

secondNumber = +secondNumber;

if( firstNumber && secondNumber) {
    let randomNumber = Math.floor(Math.random(firstNumber) * secondNumber) + 1;
    console.log(`${randomNumber} is a number between ${firstNumber} and ${secondNumber}!`)
} else {
    console.log("try again")
}*/


// Guils Example:

/*const inputLow = prompt('Please provide your lowest number')

const inputHigh = prompt('Please provide your highest number');

const lowNumber = parseInt(inputLow);

const highNumber = parseInt(inputHigh);

if(highNumber && lowNumber) {
    const randomNumber = Math.floor( Math.random() * (highNumber - lowNumber + 1) ) + lowNumber;

    console.log(`${randomNumber} is a random number between ${lowNumber} and ${highNumber}.`);
} else {
    console.log("You need to provide two number, try again.")
}*/