var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var winCount = 0;
var lossCount = 0;
var remainingGuess = 10;
var theChosenLetter = "";
var guessedLetter = [];

var startIntro = document.getElementById("startIntro");
var winNumber = document.getElementById("winCount");
var lossNumber = document.getElementById("lossCount");
var guessRemaining = document.getElementById("remainingGuess");
var letterTyped = document.getElementById('Your Guessed Letters' + "guessedLetter");


document.onkeyup = function (event) {
    var userGuess = event.key;

    theChosenLetter = letters[Math.floor(Math.random() * letters.length)];

    if (userGuess === theChosenLetter) {
        win++;
    } else if (remainingGuess - 1 === 0) {
        lose++;
    } 
    
    // else {
        // retry(guess);
    // }


letterTyped.textContent = letterTyped + ",";
winNumber.textContent = win;
lossNumber.textContent = lose;


};


function resetGame() {
    guessRemaining = 10;
    guessedLetter = [];
   
};