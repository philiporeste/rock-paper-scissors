// Steps for rock paper scissors
// 1. Ask user for their name and store it
var userName = prompt("What is your name?");
// 2. Ask user do they want rock, paper, or scissors and store response
var userResponse =  prompt("Rock, Paper, or Scissors?")
// 3. Have computer pick either rock,paper,or scissors and store response

// Rock, Paper, or Scissors 
// Randomize the choices
// establish an array
// arr[0] => "Rock"
var computerResponse = Math.round(Math.random() * (2-0) + 0); // 0-2
var choices = ["Rock", "Paper", "Scissors"]
console.log (choices[computerResponse])

// 4. Compare the responses and see who is the winner
//Rock => stronger than scissors and weaker than paper
//Scissors => stronger than paper and weaker than rock
//Paper  => stronger than rock and weaker than scissors
// User picked rock
// Computer picked paper
// What is rock weak to? Paper
// What is paper weak to? Scissors
// Is Rock weak to Computer? Yes
// Is Paper weak to User? No
// comparator[choices[computerResponse]] //comparator["Rock"] => {strongTo:"Scissors", weakTo:"Rock"}

var comparator = {
    Rock: {
        strongTo: "scissors",
        weakTo: "paper",
    },
    Scissors: {
        strongTo: "paper",
        weakTo: "rock",
    },
    Paper: {
        strongTo: "rock",
        weakTo: "scissors",
    }
}
console.log(comparator[userResponse]) // {strongTo:"", weakTo:""}
console.log(comparator[choices[computerResponse]]) //



// 5. Declare win or draw
