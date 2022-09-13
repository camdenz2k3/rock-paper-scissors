// define array for choices [r, p, s]
// define var for computerChoice
// define var for playerChoice
// define var for wins
// define var for Losses
// define var for ties


var choices = ["R", "P", "S"];
var wins = 0;
var losses = 0;
var ties = 0;

var keepPlaying = true
while(keepPlaying) {
// prompt playerChoice

var humanChoice = window.prompt("Choose R, P, or S:");

// randomly choose computerChoice
var random = Math.floor(Math.random() * choices.length);
var computerChoice = choices[random];
console.log(random)

window.alert("Computer Choice is" + computerChoice);

// compare choices

if (humanChoice === computerChoice) {
    window.alert("It is a tie");
    ties++
}

else if ((humanChoice === "R" && computerChoice === "S") ||
 (humanChoice === "S" && computerChoice === "P") ||
 (humanChoice === "P" && computerChoice === "R")
)
{
    window.alert ("Winner");
    wins++
}

else {
    window.alert ("You are loser");
    losses++
}
// display (alert) results (won, tied, Lost round)

// show stats (number of wins, Losses, ties)

window.alert("Stats:\nWins: " + wins + "\nlosses: " + losses + "\nties: " + ties);


// play again?
  // restart game
// else
  // end game
keepPlaying = confirm("want to continue playing?")
}