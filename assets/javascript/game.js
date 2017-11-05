
var wordBank = ["dog", "cat", "bird", "horse"]
var randWord = wordBank [ Math.floor(Math.random() * wordBank.length) ];
var userGuess;
var misses = [];
var hits = [];

//math.floor-rounds to whole number 
// math.random- random number but its a decimal 
// wordBank.length (makes sure the random number will be one thats in the array)
var randWordArray = randWord.split("");
//console.log(randWordArray);


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
	userGuess = e.key;
	console.log(userGuess);

	if (alphabet.indexOf(userGuess) === -1) {
		alert("Not a Valid Guess");
	}
	else {
		//alert("yay");
		if(randWordArray.indexOf(userGuess) === -1) {
			alert("bad guess");
			misses.push(userGuess);
			console.log(misses);
		}
		else {
			alert('good guess');
			hits.push(userGuess);
			console.log(hits);
		}

	}
}

// e abbreviation for event 
// key is a method 

//const regexletter (checks for only letters)

var alphabet = 
['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//console.log(alphabet.indexOf("2"));
// -1 means its not in there 
// we don't want to allow those guesses 

