//create an array with words to use in game
var word = ["chevy", "toyota", "honda", "mercedes"];

//computer choose word randomly
var randomNumber = Math.floor(Math.random() * word.length);
var randomWord = word[randomNumber];
var underScore = [];

//display underscores to show length of word to guess
function getUnderscores () {
	return underScore;
for(var i = 0; i < randomWord.length; i++){
	underScore.push('_');
	getUnderscores(randomWord.length);
	}

}

console.log(getUnderscores());
//get user guess
//check if guess is correct
//if correct push to array storing correct 
//if wrong push to array storing wrong