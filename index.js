// Steps for rock paper scissors
// 1. Ask user for their name and store it
var userName = prompt("What is your name?");
var choices = ["rock", "paper", "scissors"]

// 2. Ask user do they want rock, paper, or scissors and store response
//Keep user in a loop until the user gives us a solid response

var userResponse = null
                                        
while (!choices.includes(userResponse)) {
    userResponse =  prompt("Rock, Paper, or Scissors?").toLowerCase().trim()
     // true or false
}

// 3. Have computer pick either rock,paper,or scissors and store response
console.log("USER CHOICE", userResponse)
// Rock, Paper, or Scissors 
// Randomize the choices
// establish an array
// arr[0] => "Rock"
var computerResponse = Math.round(Math.random() * (2-0) + 0); // 0-2
console.log ("COMPUTER CHOICE", choices[computerResponse])

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
    rock: {
        strongTo: "scissors",
        weakTo: "paper",
    },
    scissors: {
        strongTo: "paper",
        weakTo: "rock",
    },
    paper: {
        strongTo: "rock",
        weakTo: "scissors",
    },
   
}
console.log("USER RESPONSE",comparator[userResponse]) // {strongTo:"", weakTo:""}
console.log("COMPUTER RESPONSE", comparator[choices[computerResponse]]) // {strongTo:"", weakTo:""}

// figure out who is the winner
// see if the two objects are the same -> Draw
// see if the user is weak to Computer -> computer wins
// see if the computer is weak to user -> user wins
var userObject = comparator[userResponse]
var computerObject = comparator[choices[computerResponse]]

if(userObject["strongTo"] == computerObject["strongTo"]){
    if (userObject["weakTo"] == computerObject["weakTo"]){
        console.log("IT'S A DRAW")
    }
} 

if(userObject["weakTo"] == choices[computerResponse]){
    console.log("COMPUTER WON")
}

if(userObject["strongTo"] == choices[computerResponse]){
   console.log("USER WON")
}


// 5. Declare win or draw
