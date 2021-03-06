// Functions with Parameterthat

// Sometimes functions need specific information to perform a task
// in such cases, when you decalre a function you give it parameters.
// inside the functions pranthesis, the parameters are placed and
// act like variables.
// Inside the functions code block you pass the same parameter names, 
// think of em almost like a place holder,
// you pass value to these parameters by calling the function and placing
// the value/arguments inside the functions paranthesis

// Example:

//          /*fn.name( param1, param2)*/
//   function getArea( width, height ){
//            /*param1 * param2*/ 
//       return width * height;
//   }
// /*fn.name(pv1, pv2) */
//   getArea(3, 5);


/* ----------------------------------------------------------------*/

// in this example we create a function named getRandomNumber
// with a parameter named upper
// inside the functions code block we crated a varibale named 
// randomNumber this varibale creates a random number from
// 1 to uppper, upper in this case is like a placeholder variable
// waiting for us to pass it a value/argument
// we also have a return statement set to return the value of
// randomNumber
// now in order for the math in the variable randomNumber to 
// equate to something we must pass it value for the parameter
// upper
// to pass value to upper we must call our function
// by placing value inside our functions paranthesis in turn
// we pass the same value/argument to upper.
// NOTE: this is really dope because the code can perform
// without knowing the exact details in advance.

/*function getRandomNumber(upper) {
    const randomNumber = Math.floor( Math.random() * upper ) + 1;
    return randomNumber;
};

console.log( getRandomNumber(6) );
console.log( getRandomNumber(20) );
console.log( getRandomNumber(50) );*/


/* --------------------------------------------------------------------- */

// Function wityh multiple parameters
// function can recieve multiple parameters by seperating them with
// a cama when you decalre them in a functions paranthesis
// and you can pass them their value when you call the function
// and pass it two values seperated by caamas

// Example: 

/*function goToCoffeeShop(drink, pastry){
  alert(`Your ${drink} and ${pastry} on the way`);
}
goToCoffeeShop(`Espresso`, `Crouissant`);*/


/* ------------------------------------------------------------------ */


// running a function with three parameters
/*function getArea(width, length, unit) {
  const area = width * length;
  return `${area} ${unit}`;
}
console.log(getArea(10, 20, 'sq ft') );*/


/* ------------------------------------------------------------------- */


// A function has its own scope, kinda like its own little universe.
// in the example below the var person holds a value of Meg, we tried to 
// rewrite its value by creating the same variable outside the function but
// with the value of Lee. 
// since the var with the value of Lss is outside the functions scope
// the function sees it but doesnt take its value for its own.
// hense returning in the alert Hi, Meg.

/*let person = "Lee";

function greeting() {
  let person = 'Meg';
  alert(`Hi, ${person}!`);
}

function greeting2() {
  let person = 'Robert';
  alert(`Good Morning, ${person}!`);
}


greeting();

alert(`Hi, ${person}`)

greeting2();*/


/* --------------------------------------------------------------------- */

// there is one way for the function to change the value of the
// global variable from within its function scope
// this is done by remving any variable name from it.
// it is not recomended you do this because it can really confuse the
// program

let person = "Lee";

function greeting() {
  person = 'Meg';
  alert(`Hi, ${person}!`);
}



greeting();

alert(`Hi, ${person}`)


/* ------------------------------------------------------------------- */ 

// there is one more way to write a function this is called a 
// function expression
// a function expression in a way is storing a function in var
// a function with no function name after the function key word 
// is called a anonymous function




const getRandomNumber = function(upper) {
    const randomNumber = Math.floor( Math.random() * upper ) + 1;
    return randomNumber;
};

getRandomNumber(10);