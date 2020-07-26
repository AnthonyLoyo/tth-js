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


// Loyo's Solution:

/*let correctAnswer = 0;

let playerRank = " ";


let questionOne = prompt("What is short for Hyper Text Markup Language?");

    if( questionOne.toUpperCase() === "HTML" ) {
        correctAnswer += 1;
    } 

let questionTwo = prompt("What is short for Cascading Styel Sheets?");

    if( questionTwo.toUpperCase() === "CSS" ) {
        correctAnswer += 1;
    }

let questionThree = prompt("Bootstrap is a?");

    if( questionThree.toUpperCase() === "FRAMEWORK" ) {
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

if(correctAnswer === 1){
    playerRank += "Bronze";
} else if( correctAnswer === 2){
    playerRank += "Bronze";
} else if( correctAnswer === 3){
    playerRank += "Silver";
} else if( correctAnswer === 4){
    playerRank += "Silver";
} else if( correctAnswer === 5){
    playerRank += "Gold";
} else {
    playerRank += "No Crown";
}

let finalScore = `<h2>Number of correct answer ${correctAnswer}</h2>`;
document.querySelector("h2").innerHTML = finalScore;

let finalRank = `<p> Final rank is ${playerRank}</p>`;
document.querySelector("p").innerHTML = finalRank;*/


// Guils Solution:

/*let correct = 0;

let rank;

const main = document.querySelector('main');

const answer1 = prompt("Name a programming language thats also a gem?");
if(answer1.toUpperCase() === "RUBY"){
    correct += 1;
}

const answer2 = prompt("Name a programming language thats also a snake?");
if(answer2.toUpperCase() === "PYTHON"){
    correct += 1;
}

const answer3 = prompt("What language do you use to style web pages?");
if(answer3.toUpperCase() === "CSS"){
    correct += 1;
}

const answer4 = prompt("What language do you use to build the structure of web pages?");
if(answer4.toUpperCase() === "HTML"){
    correct += 1;
}

const answer5 = prompt("What Language do you use to add interactivity to a web page?");
if(answer5.toUpperCase() === "JavaScript"){
    correct += 1;
}

if(correct === 5){
    rank =  "Gold";
} else if(correct >= 3){
    rank = "Silver";
} else if (correct >= 2){
    Rank = "Bronze";
} else {
    rank = "No Crown";
}

main.innerHTML = `
    <h2> you got ${correct} out of 5 questions correct. </h2>
    <p>Crown earnder: ${rank}</p>
`;*/