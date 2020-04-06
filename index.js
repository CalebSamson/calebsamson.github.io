
var clicks = 0;

function clickCounter() {
	clicks++;
	var numClicksSpan = document.getElementById('numClicks');
	if (clicks == 1)
		numClicksSpan.innerHTML = 'once';
	else
		numClicksSpan.innerHTML = clicks + ' times';
}

var button = document.getElementById('clickHere');
button.addEventListener('click', clickCounter);

//hover over


function makeBold() {
	var divs = document.getElementsByClassName('highlightText');
	for (var i = 0; i < divs.length; i++) {
		divs[i].style.color = 'green';
		divs[i].style.fontWeight = 'bold';
	}
}

function restore() {
	var divs = document.getElementsByClassName('highlightText');
	for (var i = 0; i<divs.length; i++) {
		divs[i].style.color = 'black';
		divs[i].style.fontWeight = 'normal';
	}
}

var mouseOverMeDiv = document.getElementById('mouseOverMe');
mouseOverMeDiv.addEventListener('mouseover', makeBold);
mouseOverMeDiv.addEventListener('mouseout', restore);

//input into box


function nameHandler(e) {
	if (e.keyCode == 13) {
		var nameInput = document.getElementById('nameInput');
		var nameField = document.getElementById('nameField');
		nameField.innerHTML = nameInput.value;
		nameField.style.backgroundColor = 'pink';
		nameField.style.textTransform = 'capitalize';

	}
}

document.addEventListener('keyup', nameHandler);

//favorite Animal lister

    let faveAnimals = [];

    function keyPressHandler(u) {
      if (u.keyCode == 13) {
        $('#list').append('<li>'  +  $('#itemField').val() + '</li>');
        $('#itemField').val('');

      }
    }


  $('#itemField').keyup(keyPressHandler);



//Magic 8 ball question asker

function questionDisplayer(a) {
	if (a.keyCode == 13) {
		var questionInput = document.getElementById('questionInput');
		var questionField = document.getElementById('questionField');
		questionField.innerHTML = questionInput.value;
		questionField.style.backgroundColor = 'yellow'
		
	}
}

document.addEventListener('keyup', questionDisplayer);

//magic 8 ball continue button

function eightBall() {

	let yourFate = '';
	randomNumber = Math.floor(Math.random() * 8)
	let eightBall = ''

		if (randomNumber == 0) {yourFate = 'Absolutely!'}
		if (randomNumber == 1) {yourFate = 'Sure, why not?'}
		if (randomNumber == 2) {yourFate = 'Heck Yeah!'}
		if (randomNumber == 3) {yourFate = 'I feel like that is more of a presonal problem...'}
		if (randomNumber == 4) {yourFate = 'Absolutely not, but good try!'}
		if (randomNumber == 5) {yourFate = 'Nope!'}
		if (randomNumber == 6) {yourFate = 'I would not count it out!'}
		if (randomNumber == 7) {yourFate = 'Do you want me to be honest?'}



  document.getElementById("answer").innerHTML = yourFate;
}




//Rock, Paper, Scissors Game:
var botChoice = '';
var userChoice = '';
var userName = '';
var userScore = 0;
var botScore = 0;
var whoWon = '';

function RPS(b) {
if (b.keyCode == 13){
	var userChoice = document.getElementById('userChoiceInput').value;
	randomNumber = Math.floor(Math.random() * 3)
		if (randomNumber == 0) {botChoice = 'Rock'}
		if (randomNumber == 1) {botChoice = 'Paper'}
		if (randomNumber == 2) {botChoice = 'Scissors'}

		if (botChoice === 'Rock' && userChoice === 'Scissors') {
			whoWon = 'That is one for me!' ; botScore++};
		if (botChoice === 'Paper' && userChoice === 'Rock') {
			whoWon = 'I win and you lose!' ; botScore++};
		if (botChoice === 'Scissors' && userChoice === 'Paper') {
			whoWon = 'Score a point for me!' ; botScore++};
		if (botChoice === 'Scissors' && userChoice === 'Rock') {
			whoWon = 'So that is a point for you!' ; userScore++};
		if (botChoice === 'Rock' && userChoice === 'Paper') {
			whoWon = 'You win and I lose that one!' ; userScore++};
		if (botChoice === 'Paper' && userChoice === 'Scissors') {
			whoWon = 'Damn! You got me!' ; userScore++};
		if (botChoice === userChoice) {whoWon = "It's a tie! Let's play again!"};

		console.log(userChoice);
		console.log(botChoice);



//let whoWon = ''
//if (userScore > botScore){whoWon = 'you'}
//if (botScore > userScore){whoWon = 'I'}
//if (botScore === userScore) {whoWon = 'we both'}
document.getElementById("whoWonSpan").innerHTML = whoWon;
document.getElementById("botChoiceSpan").innerHTML = botChoice;
document.getElementById("botScoreSpan").innerHTML = botScore;
document.getElementById("userScoreSpan").innerHTML = userScore;

}
};





document.addEventListener('keyup', RPS);






//use data from csv to output population and gdp/cap



/*

const parse = require('csv-parse/lib/sync');
const assert = require('assert');
const fs = require('fs');


const input = fs.readFileSync('country_pop.csv');

const records = parse(input, {
  columns: true,
  skip_empty_lines: true
})


let popAnswer = 0

function gdpFinder(countryInput, u) {
	if (u.keyCode == 13) {
	for (let i = 0; i < records.length; i++) {
	if (records[i].country == countryInput) {
		gdpAnswer = records[i].gdpPerCapita
		popAnswer = records[i].pop
	}
	}
}};

document.getElementById("popField").innerHTML = popAnswer;
document.getElementById("gdpField").innerHTML = gdpAnswer;

document.addEventListener('keyup', gdpFinder);

*/

