var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var winCount = 0;
var lossCount = 0;
var remainingGuess = 10;
var theChosenLetter = "";
var guessedLetter = [];

resetGame();
display();

document.onkeyup = function (event) {
    var guess = event.key;
    if (guess === theChosenLetter) {
        win();
    } else if (remainingGuess - 1 === 0) {
        lose();
    } else {
        fail(guess);
    }

    display();
}

function display() {
    var winNumber = document.getElementById("win");
    var lossNumber = document.getElementById("loss");
    var guessRemaining = document.getElementById("remaining");
    var letterTyped = document.getElementById("guessed")
    winNumber.innerHTML = win;
    lossNumber.innerHTML = loss;
    guessRemaining.innerHTML = remainingGuess;
    letterTyped.innerHTML = guessedLetter.join(',');
}


function win() {
    win++;
    resetGame();
}

function lose() {
    loss++;
    resetGame();
}

function fail(letter) {
    remainingGuess--;
    guessedLetter.push(letter);
}

function resetGame() {
    guessRemaining = 10;
    guessedLetter = [];
    theChosenLetter =  letters[Math.floor(Math.random() * letters.length)];

    console.log(" Random letter" + theChosenLetter);
    
}


