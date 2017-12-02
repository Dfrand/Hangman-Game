// VARIABLES
//====================================================

// Starts everything at 0. 
var wins, currentWord, guesses, lettersGuessed = 0;

// The words to guess.
var words = {
    w1: ["cat"],
    w2: ["rat"],
    w3: ["dog"]
};
// Array of words.
var wordArray = [words.w1, words.w2, words.w3];
console.log(wordArray)




var remainingGuesses = 12;


// FUNCTIONS
//=====================================================

// Function to render words.
function renderWord() {
    // If there are still more words render next one.
    if (currentWord <= (wordArray.length - 1)) {
        document.querySelector("#word") = wordArray[currentWord][0];
    }
    // If there aren't, render end game screen.
    else {
        document.querySelector("#word") = "Game Over!"
        document.querySelector("#wins") = "Final Score: " + wins + " out of " + wordArray.length;
        console.log(currentWord)
        console.log(wins)
    }
}

// Function that updates the wins.
function updateWins() {
    document.querySelector("#wins") = "#wins: " + wins;
    console.log(updateWins)
}











