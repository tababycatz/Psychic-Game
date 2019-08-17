var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var winCount = 0;
var lossCount = 0;
var guessLeft = 10;
var theChosenLetter = "";
var guessedLetter = [];
var started = false;


var guessDiv = document.getElementById("guessedLetter");
var lossNumber = document.getElementById("lossCount");
var guessRemaining = document.getElementById("remainingGuess");
var letterTyped;
var winNumber;

function resetGame() {
    started = true;
    letterTyped = document.getElementById("guessedLetter");
    winNumber = document.getElementById("winCount");
    
    guessLeft = 10;
    guessedLetter = [];
    theChosenLetter = letters[Math.floor(Math.random() * letters.length)];
    
};

document.onkeyup = function (event) {
    if(!started){
        resetGame();
    }
    winCount;
    lossCount;
    remainingGuess;
    var userGuess = event.key;
    console.log("UserGuess : ", userGuess)

    
    console.log("Chosen Letter:", theChosenLetter);

    

    if (userGuess === theChosenLetter) {
        winCount++;
        winNumber.textContent = "Wins: " + winCount;
        resetGame();
        console.log(winNumber)
    } 


    if( userGuess != theChosenLetter ){
        guessDiv.innerHTML = guessedLetter.join(" ");
    }
    
    
    if (userGuess != theChosenLetter && guessLeft > 0) {
        guessLeft--;
        guessedLetter.push(userGuess);
        
    }
    
    
    else if(guessLeft === 0){
        lossCount++;
        
        resetGame();
    }
    
    function updateText(){
        lossNumber.textContent = ("Losses: " + lossCount);
        remainingGuess.textContent = ("Guesses Left: " + guessLeft);
    
        
    }

        updateText();
};


resetGame()