// VARIABLES
//====================================================

// // Starts everything at 0. 
var wins = 0;
// var currentWord = 0;
// var remainingGuesses = 12;
// var guesses = 0;
// var lettersGuessed = [];
// array of words
var words = ["cat", "rat", "dog"];



// FUNCTIONS
//=====================================================



var game = {
    guessed: [],
    left: 12,
    // Function to render words.
    renderWord: function() {
        this.complete = false;
        this.word = words[Math.floor(Math.random() * words.length)];
        this.$correct = document.getElementById('correct');
        this.$wrong = document.getElementById('wrong');
        this.$remaining = document.getElementById('remaining');
        this.$correct.innerHTML = '_'.repeat(this.word.length);
        // console.log(renderWord);
        // console.log(guess);
        // console.log(correct);
        // console.log(wrong);
    },

    // Function that updates wins.
    updateWins: function() {
    	this.$wins = document.getElementById("wins");
    },


    // Function for letters guessed.
    guess: function(letter) {
        if (this.left > 0 && this.complete != true) {
            if (this.word.indexOf(letter) > -1 || this.guessed.indexOf(letter) > -1) {
                this.correct(letter);
            } else {
                this.wrong(letter);
            }

        }
    },

    // Function for the right answer.
    correct: function(letter) {
        for (var i = 0; i < this.word.length; i++) {
            if (this.word[i] == letter) {
                var word = this.$correct.innerHTML.split('');
                word[i] = letter;
                this.$correct.innerHTML = word.join('');
            }
        }
        if (this.$correct.innerHTML.indexOf('_') < 0) {
            alert('you win!');
            this.complete = true;

        }
    },

    //Function for the wrong answer.
    wrong: function(letter) {
        this.guessed.push(letter);
        this.$wrong.innerHTML += ' ' + letter;
        this.left--;
        this.$remaining.innerHTML = this.left;
        if (this.left < 1) {
            alert('you lose! ' + this.word);
            this.complete = true;
        }
    }

};
game.updateWins();
game.renderWord();
document.onkeyup = function(event) {
    var letter = String.fromCharCode(event.keyCode).toLowerCase();
    game.guess(letter);
};