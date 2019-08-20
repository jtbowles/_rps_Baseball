

function playBall (testGame) {
	
	let game = testGame;

	while (game.numberOfOuts < 3) {

		let pitchType = getPitchType ();
		let pitchSpeed = getPitchSpeed ();
		let batterType = getBatterType ();
		let contact = getHitOutcome ();
		let madeContact;
		let baseHit;
		let outOrSafe;

		if (contact == true) {
			madeContact = 'made contact with the ball';
			outOrSafe = determineOutOrSafe ();
			if (outOrSafe == true) {
				getHit = getBaseHitType (game);
				baseHit = ('You hit a ' + getHit + '!');
			}
			else {
				game.numberOfOuts++;
				game.strikeCount = 0;
				baseHit = ('You hit a pop fly, you are out!');
			}
		}
		else {
			madeContact = 'swung on and missed the pitch';
			game.strikeCount++;
			if (game.strikeCount === 3) {
				game.numberOfOuts++;
			}
		}

		console.log('You threw a ' + pitchSpeed + ' mph ' + pitchType + '.');
		console.log('Your ' + batterType + ' ' + madeContact + '!');
		let check = outOrSafe === true ? console.log(baseHit) : console.log('You hit a pop fly, you are out!');
		console.log('Strike Count: ' + game.strikeCount);
		console.log('Outs: ' + game.numberOfOuts);
		console.log('----------------------------');
	}	
}


function rollDie (numberOfSides) {
	let dieRoll = Math.floor(Math.random() * numberOfSides) + 1;
	return dieRoll;
}

function getPitchType () {
	let numberOfSides = 4;
	let dieRoll = rollDie (numberOfSides);

	switch (dieRoll) {
		case 1:
			return 'Fastball';

		case 2:
			return 'Curveball';

		case 3:
			return 'Slider';

		case 4:
			return 'Changeup';

		default:
			return 'Knuckleball';
	}
}

function getPitchSpeed () {
	let numberOfSides = 8;
	let dieRoll = rollDie (numberOfSides);

	switch (dieRoll) {
		case 1:
			return 60;

		case 2:
			return 65;

		case 3:
			return 70;

		case 4:
			return 75;

		case 5:
			return 80;

		case 6:
			return 85;

		case 7:
			return 90;

		case 8:
			return 95;

		default:
			return 100;
	}
}

function getBatterType () {
	let numberOfSides = 6;
	let dieRoll = rollDie (numberOfSides);

	switch (dieRoll) {
		case 1:
			return 'Slugger';

		case 2:
			return 'Single Hitter';

		case 3:
			return 'Pitcher';

		case 4:
			return 'Rookie';

		case 5:
			return 'Pinch Hitter';

		case 6:
			return 'AA Call Up';

		default:
			return 'Ernie Banks';
	}
}

function getHitOutcome () {
	let numberOfSides = 10;
	let dieRoll = rollDie (numberOfSides);

	if (dieRoll % 2 === 0) {
		return true;
	}
	else {
		return false; 
	}
}

function getBaseHitType (game) {
	let numberOfSides = 20;
	let dieRoll = rollDie (numberOfSides);

	if (dieRoll >= 1 && dieRoll <= 5) {
		game.firstBase = true;
		return 'single';
	}
	else if (dieRoll >= 6 && dieRoll <= 10) {
		game.secondBase = true;
		return 'double';
	}
	else if (dieRoll >= 11 && dieRoll <= 15) {
		game.thirdBase = true;
		return 'triple';
	}
	else if (dieRoll >= 16 && dieRoll <= 20) {
		game.score.homeTeamScore++;
		return 'homerun';
	}
	else {
		return 'grandslam';
	}
}

function determineOutOrSafe () {
	let numberOfSides = 12;
	let dieRoll = rollDie (numberOfSides);

	if (dieRoll >= 1 && dieRoll <= 3) {
		return false;
	}
	else if (dieRoll >= 4 && dieRoll <= 6) {
		return true;
	}
	else if (dieRoll >= 7 && dieRoll <= 9) {
		return false;
	}
	else if (dieRoll >= 10 && dieRoll <= 12) {
		return true;
	}
	else {
		return true;
	}
}

// playBall();


function createGame() {
	return {
		inning: 1,
		numberOfOuts: 0,
		topOrBottomOfInning: true,
		strikeCount: 0,
		firstBase: false,
		secondBase: false,
		thirdBase: false,
		score: {
			homeTeamScore: 0,
			awayTeamScore: 0
		}
	}
}



let userInput = prompt('Shall we play a game?');
if (userInput === 'yes') {
	let testGame = createGame();
	let game1 = playBall(testGame);
	console.log(game1.numberOfOuts);
	console.log(game1.firstBase);
	console.log(game1.secondBase);
	console.log(game1.thirdBase);

}










// function master () {
// 	let damage = determineDamage ();
// 	let damageMulitplier = determineDamageMultiplier ();

// 	let totalDamage = damage * damageMulitplier;
// }

// function rollDie (numberOfSides) {
// 	let dieRoll = Math.floor(Math.random() * numberOfSides) + 1;
// 	return dieRoll;
// }

// function determineDamage () {
// 	let sidesOfDie = 20;
// 	let result = rollDie (sidesOfDie);
// 	return result;
// }

// function determineDamageMultiplier () {
// 	let sidesOfDie = 4;
// 	let result = rollDie (sidesOfDie);
// 	return result;
// }

// master();





////////// OBJECT TESTING

// function createNewGame () {

// 	const game = {
// 		inning: 1,
// 		numberOfOuts: 0,
// 		topOrBottomOfInning: true,
// 		score: {
// 			homeTeamScore: 0,
// 			awayTeamScore: 0
// 		}
// 	},

// 	addInning:
// }



// console.log(game.inning);

/////// FACTORY FUNCTION







