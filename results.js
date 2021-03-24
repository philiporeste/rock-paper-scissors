// Extract the choice out of the URL
let choices = ["rock", "paper", "scissors"]


const url = new URL(window.location.href);
console.log(url)
const urlQueryString = new URLSearchParams(url.search);
const userResponse = urlQueryString.get('choice')

// let userName = prompt("What is your name?");

let computerResponse = Math.round(Math.random() * (2-0) + 0); // 0-2

var gameImage = document.getElementById("choiceimage")
var gameResults = document.getElementById("gameresults")



compareChoices(window.localStorage.getItem("name"), userResponse, computerResponse) 

// Get the element


// Change the element

// Maybe add new element back into window


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
            gameImage["src"] = url.origin + "/" + "assets/images/" + userResponse + ".png"
            gameResults["innerText"] = "IT'S A DRAW";
        }
    } 
    
    if(userObject["weakTo"] == choices[computerResponse]){
      gameImage["src"] = url.origin + "/" + "assets/images/" + choices[computerResponse] + ".png"
        gameResults["innerText"] = "COMPUTER WON";
    }
    
    if(userObject["strongTo"] == choices[computerResponse]){
      gameImage["src"] = url.origin + "/" + "assets/images/" + userResponse + ".png"
        gameResults["innerText"] = userName + 
        " WON";
    }
}
