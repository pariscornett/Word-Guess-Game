//creates word bank and randomizes array
var wordBank = ["fern", "rose", "lavender"];

var word = (Math.floor(Math.random() * wordBank.lengths));

//make randomized word appear as underscores in the DOM
var userDisplay = [];
for (var i = 0; i < word.length; i++) {
    userDisplay[i] = "_";
}

//variable to hold number of remaining letters (not sure I need this)
var remainingLetters = word.length;

//---------------------main game loop----------------------//

//while there are letters left to be guessed
while(remainingLetters > 0) {
    //show the player their progress
    alert(userDisplay.join(" "));
    //get a guess from the player
    var guess = prompt("guess a letter");
    //if the guess is blank
    if (guess == null) {
        //exit the game loop
        break;
    //if the guess is more than one letter or no letters
    }else if (guess.length !== 1){
        //alert them to guess a single letter only
        alert("Only guess one letter");
    //valid guess

    }else{
        //update the game state with the guess
        for (var j = 0; j < word.length; j++){
            //if the letter they guessed is in the word
            //at that point or index
            if (word[j] === guess){
                //update the answer array with the letter they guessed at that point or index
                userDisplay[j] = guess;
                //subtract one from remaining letters
                remainingLetters--;
            }
        }
    }
    //----------------END OF GAME LOOP--------------------

    }
    //let player know the word 
    alert(userDisplay.join (" "));
    //congratulate the player
    alert("Good job! The answer was " + word);



//this is randomly guessing the index 
/*for (var i = 0; i < randomWord; i++) {
var targetDiv = document.getElementById("randomWord");
var randomWordDiv = document.createElement("div");
randomWordDiv.textContent = randomWord[i];
targetDiv.append("#randomWord"); */

//WE MIGHT NEED TO DELETE THIS?^^ 

//code to make the guessed word appear as underscores so the user can know how many letters are in the word.


//***********************************The Main Game********************** */
//while there are letters left to be guessed
/*while(remainingLetters > 0) {
    //show the player their progress
    while (lettersLeftToGuess > 0){
        alert(answer.join(" ");)
    }
}

//code to discover which letters are in the randomly selected wordToGuess



//code to set the position of each discovered letter in the randomly selected wordToGuess


//MAKE PART ONE OCCUR FOR EVERY wordToGuess--------------------------------------





//PART TWO-----------------------------------------------------------------------
//code to recognize when a key is pressed (include code here to determine which turn player is on?)


//code to determine which key was pressed


//code to show which key was pressed
    //--before showing the character associated with the key that was pressed--//
    //code determining whether this key has been pressed this turn or not(think about how to set turns)


    //code determining whether the character associated with the key that was pressed is one of the letters that makes up the randomly selected wordToGuess


//code for if they key HAS NOT been pressed before AND IS a key with an associated character included in the randomly selected wordToGuess


//code for if they key HAS been pressed before AND IS a key with an associated characer included in the randomly selected wordToGuess


//code for if they key HAS NOT been pressed before AND IS NOT a key with an assoiciated character included in the randomly selected wordToGuess


//code for if the key HAS been pressed before AND IS NOT a key with an associated character included in the randomly selected wordToGuess



//MAKE PART TWO LOOP UNTIL wordToGuess IS GUESSED||PLAYER LOSES TRIES------------




//PART THREE---------------------------------------------------------------------
//code to generate a new randomly selected wordToGuess if player DOES GUESS previous randomly selected wordToGuess



//code to repeat PART TWO code


//MAKE THIS REPEAT EVERY TIME PLAYER GUESSES wordToGuess-------------------------





//PART FOUR----------------------------------------------------------------------
//code to reveal randomly selected wordToGuess when player DOES NOT GUESS correctly


//code to reveal a button allowing player to restart the whole game



//MAKE THIS STOP THE WHOLE GAME--------------------------------------------------





//PART FIVE----------------------------------------------------------------------
//code to determine when all randomly selected wordsToGuess have been selected


//code to stop the game when all randomly selected wordsToGuess have been selected


//code to reveal a button allowing player to restart the whole game


//MAKE THIS STOP THE WHOLE GAME--------------------------------------------------
        */