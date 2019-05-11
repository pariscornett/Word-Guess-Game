//creates a word bank
var words = ["rose", "fern", "orchid", "carnation", "lavender",];

//randomizes word
var word = words[Math.floor(Math.random() * words.length)];

//gives us a way to replace the letters of the random word with underscores so that the user cannot see the word (and thus defeat the purpose of the game)
var answerArray = [];
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }

//gives us a way to tell javascript when to stop looping and alert the player that they guessed the word
var remainingLetters = word.length;

//the actual game
while (remainingLetters > 0) {
    //show player their progress
    alert(answerArray.join(" "));   //makes one united string

    //now we get the player to guess
    var guess = prompt ("Guess a letter, or click Cancel to stop playing.");
    if (guess === null) {
        break;
    } else if (guess.length !==1) {
        alert("Please enter a single letter.");
    } else {
        //update the game with valid guess
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters --;
            }
        }
    }
//end of actual game loop
}

//update the player of their success
alert(answerArray.join(" "));
alert("Good job! The answer was " + word);