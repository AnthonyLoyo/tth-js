// Example Function
// a set of instructions you would like to run over and over again.
// First you must declare a function, this is done by stating the funtion
// keyword
// Next you must name your funtion, following the name there musst be a 
// set of paranthesis
// after the paranthesis comes a set of curly braces just like in a
// conditional statement
// the code you place inside the curly braces code block runs when 
// ever the program activates the function.
// to activate the function, you must call it, this is done by placing the 
// functions name outsied its code block.


// EXAMPLE FUNCTION:


/*function coffee() {
    alert("Go get coffee, please!")
}
coffee();*/


/*---------------------------------------------------------------*/

function alertRandom() {
    const randomNumber = Math.floor( Math.random() * 6 ) + 1;    
    alert(randomNumber)
}
alertRandom();
