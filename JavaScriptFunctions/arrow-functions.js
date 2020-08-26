// so far we have learned how to write two types of different functions
// in this lesson we will learn to write a third type of function

/* ------------------------------------------------------------------ */

// function decalration
// defines a function using the function keyword followed by the 
// name of the function

// Example:
/*function square(x) {
    return x * x;
} 
console.log( square(8) );*/

// function expression / annonymous function
// is a function thats assigned to a variable 

// Example:
/*const circle = function(x) {
    return x * x;
}
console.log( circle(6) );*/

// arrow function expression

/*const triangle = (x) => {
    return x * x;
}
console.log( triangle(5) );*/

/* ------------------------------------------------------------------- */

// Converting functions to arrow functions

/*function getRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 6 ) + 1;
    return randomNumber;
}
console.log( getRandomNumber() );*/


/*const getRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 6 ) + 1;
    return randomNumber;
}
console.log(getRandomNumber() );*/

/* --------------------------------------------------------------- */

// Converting functions with parameters to arrow functions with paramaters

/*function getArea( width, length, unit){
    const area = width * length;
    return `${area} ${unit}`;
}
console.log( getArea(8,8, sq unit) )*/


/*const getArea = (width, length, unit) => {
    const area = width * length;
    return `${area} ${unit}`;
};
    
console.log( getArea( 5, 5, 'sq unit') );*/

/* -------------------------------------------------------------- */

// When you pass a function with a paramater but fail to assign a
// value in the function call you will get a undefined message.
// to prevent that from happeneing you can assign a default 
// paramater value inside the function defintion.
// the way this is done is by assiging a value directly to your 
// paramater inside the paranthesis. this is called assiging a
// default value. if you call your funtion
// and give the function call a value, then the the function call
// value over writes the default paramater value.


// EXAMPLE with no value given to parameter but using default value
/*function sayGreeting( name = 'student') {
    return `Good Morning ${name}!`;
}
console.log( sayGreeting() );*/

// EXAMPLE of default value being overwritten by function call value 
/*function sayGreeting( name = 'student') {
    return `Good Morning ${name}!`;
}
console.log( sayGreeting('Maria') );*/

/* -------------------------------------------------------------- */

// you can pass multiple parameters with a default value.
// all you have to do is separate them with a comma.
// you may run iinto a issue when assiging the paramaters value in 
// the function call. since you are using two paramters, when you
// assign a value via the function call you automatically assign
// value in order first to first and second to second.
// if you needed to leave the first paramater value as is and only 
// assign value to the second paramater via the function call
// you can pass the first value in the function call ass 
// unassigned, this will leave the first value as is and will let you
// skipt to the second paramter and assign it its value via 
// the function call

/*function sayGreeting( greeting = 'Good Morning' ,name = `Student` ) {
    return `${greeting} ${name}!`;
}
console.log( sayGreeting( undefined , 'Guil') );*/

/* ------------------------------------------------------------------ */


/**
 * Returns a random number between two numbers
 * 
 * @param {number} lower - the lowest number value
 * @param {number} upper - the highest number value
 * @return {number} - the random number value 
 * 
 */

function getRandomNumber(lower, upper = 100) {
    if( isNaN(lower) || isNaN(upper) ) {
        throw Error('Both arguments must be numbers.');
    }
    return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}
console.log(getRandomNumber(1, 5));
console.log(getRandomNumber(10, 30));
console.log(getRandomNumber(5, "twenty five"));


// call the function and pass it different values