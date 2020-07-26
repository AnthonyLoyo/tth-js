// using consditionals, in this example we began using the if else statement
// esentually its like having the option to go through 1 of 2 doors, never both
// 1 door being true and 1 door being false what door you open depends on 
// the condiotion. the condition is placed inside the paranthesis.
// if the consition is TRUE then it goes through door 1, in the correct terms,
// if the condition is true then it runs code block 1
// if the condition is FALSE then it goes through door 2, in correct terms,
// if the condition is FALSE, code block 2, the ELSE statement runs  

// EXAMPLE: 

if(/* CONDITION */) {
    /*CODE BLOCK 1 */
} else {
    /* CODE BLOCK 2 */
};

//---------------------------------------------------------------------------

// Exercise 1: 
// We created a if else statement that asked our user a question via prompt.
// When the user submits their answer we compare it to ours to see if its true.
// we do this by placing our variables named 'answer' in our statements paranthesis. 
// here we can evaluate the answer and determine if it true or false.
// if the Answer is true to 'Mercury' it will run code block 1
// if the Answer is not true to 'Mercury' it will run the else statement
// also known as code block 2.

// Example:
/*const answer = prompt("which planet is closest to the sun?");

if( answer === 'Mercury') {
    console.log("thats correct!");
} else {
    console.log("Try Again")
}*/

// Exercise 2:
// When we enter 'mercury' it comes back as false eventhpugh it is true 
// the reason for this is because it is not 'true true' which means that 
// user answer must fully match our chosen Answer. in order for it to be 
// 'true true' it must match the Answer given in this case our answer has
// a capital 'M' while the user answer has a lower case 'm'. 
// we fix this by adding the 'toUpperCase()' method.
// in doing so when the user enters their answer its automatically converted
// to all upper case vis the 'toUpperCase()' method.
// we also changed our chosen answer to a full uppercase answer so that 
// our answer and the users answer match completely in doing so
// the user answer becomes 'true true' to our answer

// Example:
/*const answer = prompt("Which planet is closest to the sun?");

if(answer.toUpperCase() === "MERCURY") {
    console.log("Good Job")
} else {
    console.log("try again!")
};*/