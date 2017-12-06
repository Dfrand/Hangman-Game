// VARIABLES
//====================================================

// // Starts wins at 0. 
var wins = 0;
var pic = [];
var updateWins = 0;
// array of words
var words = ["elephant", "rhino", "dog"];



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
    },

    // // Function that updates wins?????.
    // updateWins: function() {
    //     for (var i = 0; i < words.length; i++);
    //     updateWins += 'Wins: ' + wins;
    // updateWins = document.getElementById("wins");

    // document.onkeyup = function(event) {
    // 	updateWins.textContent = event.key;
    // };


    // var el = document.getElementById('wins');
    // el.innerHTML = updateWins;


    // if (this.$wins.innerHTML.indexOf('_') < 0) {
    //        return("updateWins");
    //        this.complete = true;
    //    }
    // console.log(updateWins);
    // },



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
        // Images to render.
        if (words.indexOf()) {
            var el = document.getElementById('pic');
            el.innerHTML = pic;
            game.winPic();
        }

    },
    // function for Rhino image.
    winPic: function() {
        var x = document.getElementById("pic");
        x.setAttribute("src", "assets/images/rhino.jpg");
        x.setAttribute("width", "180");
        x.setAttribute("height", "150");
        x.setAttribute("alt", "Rhino");
        document.body.appendChild(x);
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
//for wins function
// game.updateWins();
// Initialize Game 
game.renderWord();
document.onkeyup = function(event) {
    var letter = String.fromCharCode(event.keyCode).toLowerCase();
    game.guess(letter);
};