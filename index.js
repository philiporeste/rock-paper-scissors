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


//Math.round(Math.random() * (20-10) + 10) => 10
//10 - 20

// 0 -> 1 0.6


// 4. Compare the responses and see who is the winner
// 5. Declare win or draw
