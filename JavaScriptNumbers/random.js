
// collect input from a user 

// convert the input to a number 

// Use Math.random() and the users number to generate a random number

// create a message dispalying the random number 

// Loyos Example
let userNumber = prompt("Please provide a number!");

userNumber = +userNumber;

let randomNumber = Math.floor(Math.random() * userNumber + 1);

document.querySelector("main").innerHTML = 
`<h1>${randomNumber} is a random number between 1 and ${userNumber}</h1>`
;


