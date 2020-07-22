// 1) Store correct answers
// - When quiz begins no answers are correct

// 2) Store the rank of a player

// 3) Select the <main> HTML element

// 4) Ask at least 5 questions
// - Store each answer in a variable
// - Keep track of the number of correct answers

// 5) Rank player based on number of correct answer
// - 5 correct = Gold
// - 3-4 correct = Silver
// - 1-2 correct = Bronze
// - 0 correct = no crown

// 6) Output results to the <main> element

// this is my solution for the quiz, it is completed 4/5
let correctAnswer = 0;

let playerRank = " ";


let questionOne = prompt("What is short for Hyper Text Markup Language?");

    if( questionOne.toUpperCase() === "HTML" ) {
        correctAnswer += 1;
    }

let questionTwo = prompt("What is short for Cascading Styel Sheets?");

    if( questionTwo.toUpperCase() === "CSS" ) {
        correctAnswer += 1;
    }

let questionThree = prompt("What is Bootstrap?");

    if( questionThree.toUpperCase() === "A FRAMEWORK" ) {
        correctAnswer += 1;
    }

let questionFour = prompt("Are Java and JavaScript the same?");

    if( questionFour.toUpperCase() === "NO" ){
        correctAnswer += 1;
    }

let questionFive = prompt("Who created JavaScript?");

    if( questionFive.toUpperCase() === "BRENDAN EICH" ) {
        correctAnswer += 1;
    }



let currentScore = `<h2>Number of correct answer ${correctAnswer}</h2>`;

document.querySelector("main").innerHTML = currentScore;