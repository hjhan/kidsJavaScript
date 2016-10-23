/**
 剪刀石头布游戏：英文名：rock-paper-scissors
 考虑使用二维数组改写
 */
var compare = function (choice1, choice2) {
    if (choice1 == choice2)
        return "The result is a tie!";

    if (choice1 == "rock") {
        if (choice2 == "scissors")
            return "rock wins";
        else
            return "paper wins";
    }
    else if (choice1 == "scissors") {
        if (choice2 == "paper")
            return "scissors wins";
        else
            return "rock wins";
    }
    else if (choice1 == "paper") {
        if (choice2 == "rock")
            return "paper wins";
        else
            return "scissors wins";
    }
    else
        return "user input incorrect, computer wins"
}
//----------------------------------------------

// Main ----------------------------------------

// Collect user choice
var userChoice = prompt("Do you choose rock, paper, or scissors?");

// Create random number for computer choice and assign a throw
var computerChoice = Math.random();

if (computerChoice >= 0 && computerChoice <= 0.33)
    computerChoice = "rock";
else if (computerChoice >= 0.34 && computerChoice <= 0.66)
    computerChoice = "paper";
else
    computerChoice = "scissors";

// Display user and computer throws, followed by results
console.log("Player throws " + userChoice);
console.log("Computer throws " + computerChoice);
compare(userChoice, computerChoice);
