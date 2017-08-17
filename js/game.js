//  Setup Words and Word Bank

var teams = ["Broncos", "Patriots", "Broncos", "49ers", "Broncos"];

var word = teams[Math.floor(Math.random() * teams.length)];
word = word.toLowerCase();
console.log(word);

var wordLength = word.length;
var wordCharacters = word.split();

for (i = 0; i < wordLength; i++) {
    wordCharacters[i] = "_";
}
document.getElementById("word").innerHTML = wordCharacters.join(' ');
//  -------------------------------------------------- //
// Setup Elements
var guesses = [];
var badguess = 5;
var charRemaining = 0;
var goodguess = false;
var won = 0;
document.getElementById("badguess").innerHTML = badguess;
// ---------------------------------------------------- //
// Play Setup //

// Key and Guess Setup

document.onkeyup = function(event) {
  var playerguess = event.key;
  playerguess = playerguess.toLowerCase();
  guesses.push(" " + playerguess);
  document.getElementById("letterguess").innerHTML = guesses;

  for (i = 0; i < wordLength; i++){

    if (word.charAt(i) == playerguess){

      goodguess = true;

      wordCharacters[i] = playerguess;
        }
    }

    if (goodguess == false){
      badguess--;
        document.getElementById("badguess").innerHTML = badguess;
    }

    document.getElementById("word").innerHTML = wordCharacters.join(' ');

    goodguess = false;

    if (badguess === 0){

      document.getElementById("gamestatus").innerHTML = "You Lost. Try Again!";

      // Resets The Game //
      word = teams[Math.floor(Math.random() * teams.length)];
      word = word.toLowerCase();
      console.log(word);
      wordCharacters.length = word.length;
      wordLength = word.length;
      wordCharacters = word.split();
      guesses = [];
      document.getElementById("letterguess").innerHTML = guesses;

      for (i = 0; i < wordLength; i++) {
        wordCharacters[i] = "_";
      }
      document.getElementById("word").innerHTML = wordCharacters.join(' ');

      badguess = 5;
      document.getElementById("badguess").innerHTML = badguess;

      goodguess = false;
      charRemaining = 0;
  };

    //checks to see if there are any missing letters
    for (i = 0; i < wordLength; i++){
      if (word.charAt(i) != wordCharacters[i]){
        charRemaining++;
      }
  };

    //Win Setup
    if (charRemaining === 0) {
      document.getElementById("gamestatus").innerHTML = "You're Right!!";
      won++;
      document.getElementById("won").innerHTML = won;
      winner.push(" " + word);
      document.getElementById("winner").innerHTML = winner;

      //resets the game with new word, all variable reset
      word = teams[Math.floor(Math.random() * teams.length)];
      word = word.toLowerCase();
      console.log(word);
      wordCharacters.length = word.length;
      wordLength = word.length;
      wordCharacters = word.split();
      guesses = [];
      document.getElementById("letterguess").innerHTML = guesses;

      for (i = 0; i < wordLength; i++) {
        wordCharacters[i] = "_";
      }
      document.getElementById("word").innerHTML = wordCharacters.join(' ');

      badguess = 5;
      document.getElementById("badguess").innerHTML = badguess;

      goodguess = false;
      charRemaining = 0;
      gamestatus = null;
    }
    else{
      charRemaining = 0;  //resets the number of charRemaining characters to zero
    }

}
