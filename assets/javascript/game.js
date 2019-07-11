var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var winCount = 0;
var lossCount = 0;
var remainingGuess = 10;
var theChosenLetter = "";
var guessedLetter = [];

function() {

    theChosenLetter =  letters[Math.floor(Math.random() * letters.length)];
    winCount = 0;
    lossCount = 0;
    
}

var userText = document.getElementById("user-text");

document.onkeyup = function(event) {
    userText.textContent = event.key;
};

console.log(theChosenLetter);