// a Boolean is another type of data. a Boolean value can be only 
// either be true or false.


// Exercise
// In this exercise we created a variable called guessaNumber, this variable takes the user guess via prompt and stores it.
// next we created another variable called usertGuess this holds a boolean value of false.
// last we creat a variable called correctNumber this stores the correct number to be guessed, in this case 7 is the correct number to guess.
// next we created a if statement, in the condition of if statement we added a '+' to our guessNumber variable. Reason for this is because when the user enters their guess it will comback as a string, using the '+' converts the user answer from a string to a number. Once that string is converted to a number it is strictly compared to the variable correctNumber. If the data stored inside guessaNumber is strictly the same as the data stored inside correctNumber then the boolean inside userGuess reassigns itself from false to true.  if the data stored inside guessaNumber is not strictly equal to the data inside correctNumber then the userGuess remains false.
// in the last if statements condition we stritcly compare to userGuess to true to see if they guessed the number correctly. if userGUess is strictly eqaul to true the the first code block of the if statement runs. if userGuess does not strictly equal to true then the second code block runs. 


// Example: 
/*const guessaNumber = prompt("Guess a number between 1 - 10")

let userGuess = false;

const correctNumber = 7;



if( +guessaNumber === correctNumber) {
    userGuess = true;
}

if( userGuess === true ) {
    console.log("You guessed the number correctly")
} else {
    console.log(`Sorry the number was ${correctNumber}!`)
}*/

