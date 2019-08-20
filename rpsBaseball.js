

function playBall (testGame) {
	
	let game = testGame;
	let homeTeam = game.homeTeam;
	let awayTeam = game.awayTeam;


	while (game.numberOfOuts < 3) {

		let pitchType = getPitchType ();
		let pitchSpeed = getPitchSpeed ();
		console.log('You threw a ' + pitchSpeed + ' mph ' + pitchType + '.');


		let batterType = getBatterType ();
		let contact = getHitOutcome ();
		let madeContact;
		let baseHit;
		let outOrSafe;

		if (contact == true) {
			madeContact = 'made contact with the ball';
			outOrSafe = determineOutOrSafe ();
			if (outOrSafe == true) {
				game.strikeCount = 0;
				getHit = getBaseHitType (game);
				baseHit = ('You hit a ' + getHit + '!');
				// if ()
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
				game.strikeCount = 0;
				game.numberOfOuts++;
			}
		}

		console.log('Your ' + batterType + ' ' + madeContact + '!');
		// let check = outOrSafe === true ? console.log(baseHit);
		console.log('Strike Count: ' + game.strikeCount);
		console.log('Outs: ' + game.numberOfOuts);
		console.log('          SCOREBOARD');
		console.log('Home Team : ' + game.score.homeTeamScore + ' | Away Team : ' + game.score.awayTeamScore);
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
		game.strikeCount = 0;
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

function changeSides (game) {
	let sideChange;

	if (game.isTopInning === true) {
		game.isTopInning = false;
		game.numberOfOuts = 0;
		game.strikeCount = 0;
		game.homeTeam.isPitching = false;
		game.awayTeam.isPitching = true;
		sideChange = console.log('Changing sides. Welcome to the bottom of the ' + game.inning + ' inning.');
	}
	else if (game.isTopInning === false) {
		game.isTopInning = true;
		game.numberOfOuts = 0;
		game.strikeCount = 0;
		game.inning++;
		game.homeTeam.isPitching = true;
		game.awayTeam.isPitching = false;
		sideChange = console.log('Changing sides. Welcome to the top of the ' + game.inning + ' inning.');
	}
}

function 

function createGame() {
	return {
		inning: 1,
		numberOfOuts: 0,
		isTopInning: true,
		strikeCount: 0,

		homeTeam: {
			firstBase: false,
			secondBase: false,
			thirdBase: false,
			score: 0,
			isPitching: true,
			isUserControlled: false,
		},
		awayTeam: {
			firstBase: false,
			secondBase: false,
			thirdBase: false,
			score: 0,
			isPitching: false,
			isUserControlled: false,
		}
	}
}



function masterInitilizer () {
	let userInput = prompt('Shall we play a game? [yes] or [no]');
	let homeOrAway = prompt('Would you like to be the [home] or [away] team?');

	if (userInput === 'yes') {
		let testGame = createGame();

		if (homeOrAway === 'home') {
			testGame.homeTeam.isUserControlled = true;
		}
		else if (homeOrAway === 'away') {
			testGame.awayTeam.isUserControlled = true;
		}
		else {
			console.log('Please try again.');
			masterInitilizer();
		}

		let game1 = playBall(testGame);

	}


}



masterInitilizer ();









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







