
var wordBank = ["dog", "cat", "bird", "horse"]
var randWord = wordBank [ Math.floor(Math.random() * wordBank.length) ];
var userGuess;
var misses = [];
var hits = [];
var wrongGuess = 6;
var alphabet = 
['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//math.floor-rounds to whole number 
// math.random- random number but its a decimal 
// wordBank.length (makes sure the random number will be one thats in the array)
var randWordArray = randWord.split("");
console.log(randWordArray);


// //var numbers = [1, 5, 10, 15];
// var doubles = numbers.map(function(x) {
//    return x * 2;
// });

var dashesArray = randWordArray.map(function(ltr) {
	return " _ "
} );

//console.log(dashesArray);
//a.join(' '); // 'Wind Rain Fire'

var dashesHTML = document.getElementById('word');
dashesHTML.innerHTML = dashesArray;

document.onkeyup = function(e) {
	userGuess = e.key.toLowerCase();
	console.log(userGuess);

	if (alphabet.indexOf(userGuess) === -1) {
		alert("Not a Valid Guess");
	}
	else {
		//alert("yay");
		if(randWordArray.indexOf(userGuess) === -1) {
			alert("bad guess");
			misses.push(userGuess);
			console.log("this is a miss" + misses);
			badGuess();
		}
		else {
			alert('good guess');
			hits.push(userGuess);
			randWordArray.forEach(function(ltr, idx) {
				if(userGuess === ltr) {
					dashesArray[idx] = ltr;
					dashesHTML.innerHTML = dashesArray;
				}
			checkWin();		
			})
		}

	}
}


function badGuess() {
	for(let i = 0; i < misses.length; i++) {
		var letter = document.getElementById('guessedLetters');
		letter.innerHTML = misses[i];
		console.log("misses" + misses[i]);
	}
		var number = document.getElementById('guessesLeft');
		wrongGuess -=1;
		number.innerHTML = wrongGuess;	
		var body = document.getElementById('bodyImg1');	
		checkLoss();
	}


function checkWin() {
	if(dashesArray.indexOf(' _ ') === -1) {
		alert('YOU WIN!!!');
		reset();
	} else {
		return;
	}
}
function checkLoss() {
	if(wrongGuess ==0){
		alert("YOU LOSE");
		setTimeout(()=>{
       console.log("wheeeee ");
      }, 2500);
		reset();
	} else {
		return;
	}
}

function reset() {
	hits = [];
	misses = [];
	wrongGuess = 6;
	word.innerHTML = "";
	console.log(hits);
	console.log(misses);
}

// 	userGuess.sort();
// 	guessedLetters.html.(userGuess.join(', '))
// //how do I put guessed letters in html 

// }
// function correctGuess() {

// }

// function wrongGuess() {


// }

// function resetGame() {
// 	userGuess = '';
// 	randWord = '';
// }
// e abbreviation for event 
// key is a method 

//const regexletter (checks for only letters)



//console.log(alphabet.indexOf("2"));
// -1 means its not in there 
// we don't want to allow those guesses 

//still left to do 
//say you win when correct word is guessed
//number of guesses remaining - give them 6 guesses
//if  misses = 6 say game over 
//list of letters alrady guessed 


