// VARIABLES
//====================================================

// Starts everything at 0. 
var wins = 0;
var currentWord = 0;
var remainingGuesses = 12;
var guesses = 0;
var lettersGuessed = 0;

// array of words
var words = ["cat", "rat", "dog"
};



// FUNCTIONS
//=====================================================

// Function to render words.
function renderWord() {
    this.complete = false;
    this.word = words[Math.floor(Math.random() * words.length)];
    this.$correct = document.getElementById('correct');
    this.$wrong = document.getElementById('wrong');
    this.$remaining = document.getElementById('remaining');
    this.$right.innerHTML = '_'.repeat(this.word.length);
}
// Function that updates the wins.
function updateWins() {
    document.getElementById("wins") = "wins: " + wins;

}