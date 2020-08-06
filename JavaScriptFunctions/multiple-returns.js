// in this example we have created a function named isFieldEmpty.
// in this function we are checking if const field has any value
// const field is collecting value using querySelector and selecting #info 
// #info is a input element in our HTML file.
// next we ran a if statement,
// our if statement is checking if the value inside const field is a 
// empty string, to do this we had to use a comparison operator 
// to check the value inside the const field
// then we put in the first code block that if the value of 
// the field is empty to return true
// if it is not empty return false 
// then we created another variable to hold the valuse of isFieldEmpty
// this variable is named fieldTest
// we created another if statement to check if isFieldEmpty returns true
// to show a alert box with the words "please provide info inside". 
// when a return statement activates it cause the code to stop running
// a return statement should be the last line of code you want to run
// NOTE: for some reason the alert box wont pop up if the empty quotes
// inside the string value dont touch.
// if they are empty with space inside the lert box wont pop up eventhough
// if the quotes have no space inside the alert will pop.



/*function isFieldEmpty() {
    const field = document.querySelector('#info');
    if (field.value === ""){
        return true;
    } else {
        return false;
    }
}

const fieldTest = isFieldEmpty();

if( fieldTest === true ) {
    alert("please provide your info");
} else {
    
}*/


/*-----------------------------------------------------------------------*/



// in this eercise we take the example from before but condence it a little
// we change the coditional inside the if statement to check
// if the const field DOES NOT have value
// the second change we did was in the second if conditionals
// we just placed the name of our variable since it will automatically
// check if its true or flase.

function isFieldEmpty() {
    const field = document.querySelector('#info');
/*  if (field.value === "") old  */
    if (!field.value){
        return true;
    } else {
        return false;
    }
}

const fieldTest = isFieldEmpty();

if(fieldTest) {
    alert("please provide your info");
} else {
    
}