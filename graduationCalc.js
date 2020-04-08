

let gradRateStart = 0.85;
let gradRateEnd = 1;


var inputRace = 'White';
var inputGender = 'male';
var inputELL= 'nELL';
var inputEcon = 'lIncome';


function genderChooser() {
	var genderChoice = document.getElementsByName('gender')
	if (genderChoice[0].checked) {
	inputGender = document.getElementById('male').value
	}
	if (genderChoice[1].checked) {
	inputGender = document.getElementById('female').value
	}
console.log(inputGender);

};



function raceChooser() {
	var raceChoice = document.getElementsByName('ethnicity')
	if (raceChoice[0].checked) {
		inputRace = document.getElementById('White').value
	}
	if (raceChoice[1].checked) {
		inputRace = document.getElementById('Black').value
	}
	if (raceChoice[2].checked) {
		inputRace = document.getElementById('Hispanic').value
	}
	if (raceChoice[3].checked) {
		inputRace = document.getElementById('Asian').value
	}
	if (raceChoice[4].checked) {
		inputRace = document.getElementById('Native American').value
	}

	console.log(inputRace);
	
};

	

function ELLChooser() {
	var ellChoice = document.getElementsByName('ELL')
	if (ellChoice[0].checked) {
		inputELL = document.getElementById('yELL').value
	}
	if (ellChoice[1].checked) {
		inputELL = document.getElementById('nELL').value
	}

	console.log(inputELL);
};


function EconChooser() {
	var econChoice = document.getElementsByName('income')
	if (econChoice[0].checked) {
		inputEcon = document.getElementById('lIncome').value
	}
	if (econChoice[1].checked) {
		inputEcon = document.getElementById('hIncome').value
	}

	console.log(inputEcon);
};


const rateCalculator = () => {
	//Race
	if (inputRace=='White'){
		gradRateEnd = (gradRateStart * 1.047);
	}
	if (inputRace=='Black') {
		gradRateEnd = (gradRateStart * 0.917);
	}
	if (inputRace=='Hispanic') {
		gradRateEnd = (gradRateStart * 0.94);
	}
	if (inputRace=='Asian'){
		gradRateEnd = (gradRateStart * 1.07);
	}
	if (inputRace=='Native American'){
		gradRateEnd = (gradRateStart * 0.847);
	}

	//Gender

	
	if (inputGender=='male'){
		gradRateEnd = (gradRateEnd * 0.9944);
	}
	if (inputGender=='female') {
		gradRateEnd = (gradRateEnd * 1.0055);
	}

	//ELL

	if (inputELL=='yELL'){
		gradRateEnd = (gradRateEnd * 0.776);
	}
	if (inputELL=='nELL') {
		gradRateEnd = (gradRateEnd * 1.03);
	}

	//Income Level

	if (inputEcon=='lIncome'){
		gradRateEnd = (gradRateEnd * 0.9176);
	}
	if (inputEcon=='hIncome') {
		gradRateEnd = (gradRateEnd * 1.06);
	}

console.log(gradRateEnd);

document.getElementById("gradSpan").innerHTML = (gradRateEnd * 100).toFixed(2);

};

//console.log(gradRateEnd);




