
// let userName = prompt("What is your name?");
// let choices = ["rock", "paper", "scissors"]
// let userResponse = null         

// while (!choices.includes(userResponse)) {
//     userResponse =  prompt("Rock, Paper, or Scissors?").toLowerCase().trim()
//      // true or false
// }

// let computerResponse = Math.round(Math.random() * (2-0) + 0); // 0-2

// compareChoices(userName, userResponse, computerResponse) 

// For 

/////
function compareChoices(userName, userResponse, computerResponse){
    const comparator = {
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
    


    
    
    // figure out who is the winner
    // see if the two objects are the same -> Draw
    // see if the user is weak to Computer -> computer wins
    // see if the computer is weak to user -> user wins
    let userObject = comparator[userResponse]
    let computerObject = comparator[choices[computerResponse]]
    
    if(userObject["strongTo"] == computerObject["strongTo"]){
        if (userObject["weakTo"] == computerObject["weakTo"]){
            console.log("IT'S A DRAW")
        }
    } 
    
    if(userObject["weakTo"] == choices[computerResponse]){
        console.log("COMPUTER WON")
    }
    
    if(userObject["strongTo"] == choices[computerResponse]){
       console.log(userName + " WON")
    }
}




// 5. Declare win or draw
