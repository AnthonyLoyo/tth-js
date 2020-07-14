// In this random project we are to take user input using prompt 
// and return the value as a concatnated string on to the page.

// my solution:

// const stringToShoout = prompt("What is something you want to shout?");
// let needsToShout = "I want to shout " + stringToShoout.toUpperCase() + " at the top of my lungs";
// document.write(needsToShout);

// Guils Solution:

// const stringToBeShouted = prompt("What do you want to scream?"); //
// in this variable we take the user input we recived from
// 'stringstobeshouted' and added the method 'toUpperCase()' to manipulate
// its format and stored in the variable shout
// const shout = stringToBeShouted.toUpperCase(); //
// in ths variable we use templae literals to avoid doing concatnation
// instead we create anpther variable and use template literals instead
// to insert directly what we would like our string to say 
// we also use the method '${ }' to insert the information we manipulated
// in rhe variable shout
// const shouting = `<h2>I want to scream ${shout} at the top of my lungs</h2>`; //
// here we use the method 'document.querySelector().innerHTML' to select 
// a tag from our HTML to push the information we have stored in the  
// shouting variable on to.
  
// document.querySelector("main").innerHTML = shouting; //


// In this pop quiz we had to make a sentence appear on the page 
// in order to create this sentence we had to recieve 3 
// different type of user information using the prompt method
// then we took the info we recieved took the info we recieved
// and injected it into the sentence being held in the variable
// story then we used template literals to place the oformation we recieved 
// from the user in the sentence. then we displayed it on the page using 
// a query selector


// Examaple:
// const color = prompt(" What is your favorite color?");
// const pet = prompt(" What would be your ideal pet ?")
// const name = prompt("What would you name your pet?")

// const story = `<p> Before you walked your pet ${pet} name ${name} to the back yard
//  you put on his favorite ${color} jacket. </p>`;

// document.querySelector("main").innerHTML = story;

