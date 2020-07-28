// Practice
// create a Alert box letting the use know that you would like to do math.
// use two prompt boxes to recieve the number the user would like to do math with.
// after receiving the users numbers convert them from strings to numbers.
// once converted to numbers, create variables to do mathamatical equations with.
// the equations should be Addition, Subtraction, Multiplication and Division. 
// take the user numbers and display them in a h2
// after display each mathamatical equation with the user numbers in p tags

alert("Choose two numbers to do some math with!");

let number1 = prompt(" Choose your first number! ");

let number2 = prompt(" Choose your second number! ");

number1 = +number1;

number2 = +number2;


let addition = number1 + number2;

let subtraction = number1 - number2;

let multiplication = number1 * number2;

let division = number1 / number2;



const main = document.querySelector('main').innerHTML = 
`
    <h2> Math with the numbers ${number1} and ${number2} </h2>
    <p>${number1} + ${number2} = ${addition}</p>
    <p>${number1} - ${number2} = ${subtraction}</p>
    <p>${number1} * ${number2} = ${multiplication}</p>
    <p>${number1} / ${number2} = ${division}</p>
`;
