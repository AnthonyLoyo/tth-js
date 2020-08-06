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
// if you do not cxall the function it is esentually on stand by 


// EXAMPLE FUNCTION:


/*function coffee() {
    alert("Go get coffee, please!")
}
coffee();*/


/*---------------------------------------------------------------*/


// In this function, we create a funcction and name it alertRandom(),
// inside alertRandom()'s code block we create a variable and name 
// it randomNumber,
// randomNumber generates a random number from 1 - 6,
// in turn we create a alert function holding randomnumber
// that will display a random number from 1 - 6 in a alert box,
// now this function is ready to run BUT it will only run 
// once we call it,
// in order to run it, the functionmust be called by its name OUTSIDE 
// its code block,
// if it is not called it will not run it will stay on standby

// Example:
/*function alertRandom() {
    const randomNumber = Math.floor( Math.random() * 6 ) + 1;    
    alert(randomNumber)
}
alertRandom();*/


/*----------------------------------------------------------------*/



// Returning Value
// using the return keyword, returns the value of that function.
// function will always return a value even if it doesnt have a 
// return statement
// if you dont specify a return value the function will return 
// undefined 

/*function goToCoffeeShop() {
    return "Your coffee is on its way!";
}
alert( goToCoffeeShop() );*/

/*function getRandomNumber() {
    const randomNumber = Math.floor( Math.random() * 6 ) + 1;    
    return randomNumber;
}
alert( getRandomNumber() );
console.log( getRandomNumber() );
const dieRoll = getRandomNumber();*/


/*------------------------------------------------------------------------*/


