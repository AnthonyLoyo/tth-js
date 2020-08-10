// Functions with Parameterthat

// Sometimes functions need specific information to perform a task
// in such cases, when you decalre a function you give it parameters.
// inside the functions pranthesis, the parameters are placed and
// act like variables.
//  Inside the functions code block you pass the same parameter names, 
// think of em almost like a place holder,
// you pass value to these parameters by calling the function and placing
// the value/arguments inside the functions paranthesis

// Example:

           /*fn.name( param1, param2)*/
    function getArea( width, height ){
             /*param1 * param2*/ 
        return width * height;
    }
  /*fn.name(pv1, pv2) */
    getArea(3, 5);


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

function getRandomNumber(upper) {
    const randomNumber = Math.floor( Math.random() * upper ) + 1;
    return randomNumber;
};

console.log( getRandomNumber(6) );
console.log( getRandomNumber(20) );
console.log( getRandomNumber(50) );