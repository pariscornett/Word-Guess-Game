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

//***********************************The Main Game********************** */
//while there are letters left to be guessed
/*while(remainingLetters > 0) {
    //show the player their progress
    while (lettersLeftToGuess > 0){
        alert(answer.join(" ");)
    }
}


//make randomized word appear as underscores in the DOM
var userDisplay = [];
for (var i = 0; i < word.length; i++) {
    userDisplay[i] = "_";
}










    //this is randomly guessing the index 
/*for (var i = 0; i < randomWord; i++) {
var targetDiv = document.getElementById("randomWord");
var randomWordDiv = document.createElement("div");
randomWordDiv.textContent = randomWord[i];
targetDiv.append("#randomWord"); */

//WE MIGHT NEED TO DELETE THIS?^^ 






var wordBank = ["fern", "rose", "lavender"];

var word = (Math.floor(Math.random() * wordBank.length));

//setting up loop targeting the randomized word
for (i =0; i < word.length; i++) {
    //console out the word
    console.log(word[i]);
    
    if (word[i].charAt(0) === "f" || word[i].charAt(0) === "r") {
        alert("One of these plants starts with f or o!")
    };
}
