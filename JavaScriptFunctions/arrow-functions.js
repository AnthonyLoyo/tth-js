// so far we have learned how to write two types of different functions
// in this lesson we will learn to write a third type of function

/* ------------------------------------------------------------------ */

// Example 1: funtion declaration
// a fucntion declaration defines a function using the function keyword
// followed by the name of the function

function square(x){
    return x * x;
}
console.log( square(5) );

/* ------------------------------------------------------------------ */ 

// Example 2: funtion expression
// is also known as annonymos function, a function without a name
// and is normally contained within a varibale  

const triangle = function(x){
    return x * x;
};
console.log( triangle(6) );

/* ------------------------------------------------------------------- */ 

// Example 3: arrow function expression
// the basic syntax for a arrow function has you ommit the function name 
// and place a arrow after the parathesis,
// NOTE: arrow functions mostly behave like function expression
// arrow function expressions are not houister or lifted to the top of 
// their scope by the JS Engine, htey load only when JS Engine reaches
// the line of code they are on, so if you try  to call a JS Expression
// before its defined youll get a error

const circle = (x) => {
    return x * x;
}
console.log( circle(7) );

/* ------------------------------------------------------------------- */ 

// converting function decloration to a arrow funtion



// function decloration

/*function getRandomNumber() {
    const randomNumber = Math.floor( Math.random() * 6) + 1;
    return randomNumber;
}
console.log( getRandomNumber() );*/


// arrow function

/*const getRandomNumber = (upper) => {
    const randomNumber = Math.floor( Math.random() * upper ) + 1;
    return randomNumber; 
};
console.log( getRandomNumber(8) );*/



// funtion declaration

/*function getArea(width, length, unit) {
    const area = width * length;
    return `${area} ${unit}`
}
console.log(getArea(9, 9, 'sq ft'));*/

// arrow functopn

/*const getArea = (width, length, unit) => {
    const area = width * length;
    return `${area} ${unit}`;
}
console.log( getArea(9, 9, 'sq ft') );*/