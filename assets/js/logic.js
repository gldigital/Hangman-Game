/* GLOBAL VARIABLES 
==================== 
*/

// Arrays and Variables 
var wordOptions = ["broncos", "raiders", "49ers", "patriots"];
var selectedWord = "";
var lettersInWord = [];
var numberBlanks = 0;
var letterLine = [];
var wrongLetters = [];

// Game counters 
var winCount = 0;
var lossCount = 0;
var guessLeft = 4;

/* FUNCTIONS 
====================
*/

function startGame () {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    lettersInWord = selectedWord.split("");
    numBlanks = lettersInWord.length;

    // Reset //
    guessLeft = 4;
    wrongLetters = [];
    letterLine = [];

    // Populate Letter Line with right number of blanks
    for (var i = 0; i < numBlanks; i++) {
        letterLine.push("_");
    }
    // Adding JS to document 
    document.getElementById("wordToGuess").innerHTML = letterLine.join("  ");
    document.getElementById("numGuesses").innerHTML = guessLeft;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;

    // Test //
    console.log(selectedWord);
    console.log(lettersInWord);
    console.log(numBlanks);
    console.log(letterLine);

}

    function checkLetters(letter) {
        // Check if letter exists in Code
        var isLetterInWord = false;

        for (var i = 0; i < numBlanks; i++) {
            if(selectedWord[i] == letter) {
                isLetterInWord = true;
                
            }
        }

        // Check where in word letter exists and then populate out blankAndSuccesses array
        if (isLetterInWord) {
            for (var i = 0; i < numBlanks; i++) {
                if (selectedWord[i] == letter) {
                    letterLine[i] = letter;
                }
            }
        } // if didn't find letter
         else {
             wrongLetters.push(letter);
             guessLeft--;
         }
        // testing 
        console.log(letterLine);    
    }

    function roundComplete() {
        console.log("WIn Count: " + winCount + "| Loss Count: " + lossCount + "Guesses Left: " + guessLeft);

        // Update the HTML to reflect stats
        document.getElementById("numGuesses").innerHTML = guessLeft;
        document.getElementById("wordToGuess").innerHTML = letterLine.join(" ");
        document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");      
        // Check if user won
        if (lettersInWord.toString() == letterLine.toString()) {
            winCount++;
            alert("You Won!!");

            // Update the win counter in HTMl
            document.getElementById("winCounter").innerHTML = winCount;

            startGame();
        }

        // Check if user lost
        else if (guessLeft == 0) {
            lossCount++;
            alert("You Lost!");

            // Update in HTML
            document.getElementById("lossCounter").innerHTML = lossCount;

            startGame();
        }
    }



/* MAIN PROCESS
====================
*/

startGame();

// Register Key clicks
document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();
}