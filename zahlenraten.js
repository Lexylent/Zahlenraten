'use strict';
document.addEventListener('DOMContentLoaded', function () {
	
	document.querySelector('#submitguess').addEventListener('click', checkInput);	

	let input = document.getElementById('guessField'),
		output =  document.querySelector('output'),
	    randomNumberMin = 1,
	    randomNumberMax = 100,
		randomNumber = rand(randomNumberMin,randomNumberMax),
		guess = 1; 

	function rand (min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	
	
	function checkInput() { 	
	console.log('Zufallszahl: ' + randomNumber + '   input: ' + input.value + '  Versuche(guess): ' + guess);
		if (input.value == randomNumber) {     
       		output.innerText = 'Glückwunsch! Sie haben es in  ' + guess + ' Versuch(en) erraten!'; 
   		} 
   		else if(input.value > randomNumber) {
   		  output.innerText = 'Schade! Versuchen Sie eine kleinere Zahl.'; 
   		  guess++; 
   		} 
	   	else { 
       		output.innerText = 'Schade! Versuchen Sie eine größere Zahl.'; 
    	   	guess++; 
   		} 
		input.value = '';
		return false;
	} 

});
// Zahlenraten mit Lexylent ;)
