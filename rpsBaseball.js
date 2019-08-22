
function master () {
	let game = createGame();
	
	let userInput = prompt('[home] or [away]?');
	determineUserControlledTeam(game, userInput);

	let numberOfInnings = prompt('how many innings would you like to play?');

	while (game.inning <= numberOfInnings) {
		playBallForHalfAnInning(game);
	}

	game.printScorecard();
	

}

function playBallForHalfAnInning (game) {

	 // while (game.numberOfOuts < 3) {


		while (game.numberOfOuts < 3) {
		
				let pTeam = game.checkPitchingTeam ();
				let batterType = getBatterType ();
				let hittingTeam = game.checkScoringTeam ();
				let pitchType = getPitchType ();
				let pitchSpeed = getPitchSpeed ();
				game.displayPitch (pitchType, pitchSpeed, pTeam);
				let contact = getHitOutcome ();
				let outOrSafe = determineOutOrSafe ();

				if (contact === true && outOrSafe === true) {
					game.resetStrikeCount ();
					getBasehit (hittingTeam);
				}
				else if (contact === true && outOrSafe === false) {
					game.resetStrikeCount ();
					game.incrementOut ();
				}
				else if (contact === false) {
					game.incrementStrike ();
				}
				game.printScorecard ();
			}
		if (game.numberOfOuts === 3) {
			game.switchSides();
		}
	}

	// }
	
// 	}
// }

function rollDie (numberOfSides) {
	let dieRoll = Math.floor(Math.random() * numberOfSides) + 1;
	return dieRoll;
}

function getBasehit (team) {
	let numberOfSides = 20;
	let dieRoll = rollDie (numberOfSides);

	if (dieRoll >= 1 && dieRoll <= 5) {
		team.activateFirstbase();
	}
	else if (dieRoll >= 6 && dieRoll <= 10) {
		team.activateSecondbase();
	}
	else if (dieRoll >= 11 && dieRoll <= 15) {
		team.activateThirdbase();
	}
	else if (dieRoll >= 16 && dieRoll <= 20) {
		team.incrementScore();
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

function determineUserControlledTeam (game, input) {
	if (input === 'home') {
		game.homeTeam.determineUserControl();
	}
	else if (input === 'away') {
		game.awayTeam.determineUserControl();
	}
	else if (input === 'banana') {
		console.log('Get outta here Nevin!');
	}
	else {
		return;
	}
}

function createGame () {
	return {
		inning: 1,
		numberOfOuts: 0,
		isTopInning: true,
		strikeCount: 0,

		homeTeam: {
			name: 'Home Team',
			firstBase: false,
			secondBase: false,
			thirdBase: false,
			score: 0,
			isPitching: true,
			isUserControlled: false,
			incrementScore: function() {
				this.score++;
				console.log('The home team scored a run!');
			},
			activateFirstbase: function() {
				this.firstBase = !this.firstBase;
				console.log('The home team hit a single!');
			},
			activateSecondbase: function() {
				this.secondBase = !this.secondBase;
				console.log('The home team hit a double!');
			},
			activateThirdbase: function() {
				this.thirdBase = !this.thirdBase;
				console.log('The home team hit a triple!');
			},
			switchSide: function() {
				this.isPitching = !this.isPitching;
				this.firstBase = false;
				this.secondBase = false;
				this.thirdBase = false;
			},
			determineUserControl: function() {
				this.isUserControlled = !this.isUserControlled;
			}
		},
		awayTeam: {
			name: 'Away Team',
			firstBase: false,
			secondBase: false,
			thirdBase: false,
			score: 0,
			isPitching: false,
			isUserControlled: false,
			incrementScore: function() {
				this.score++;
				console.log('The away team scored a run!');
			},
			activateFirstbase: function() {
				this.firstBase = !this.firstBase;
				console.log('The away team hit a single!');
			},
			activateSecondbase: function() {
				this.secondBase = !this.secondBase;
				console.log('The away team hit a double!');
			},
			activateThirdbase: function() {
				this.thirdBase = !this.thirdBase;
				console.log('The away team hit a triple!');
			},
			switchSide: function() {
				this.isPitching = !this.isPitching;
				this.firstBase = false;
				this.secondBase = false;
				this.thirdBase = false;
			},
			determineUserControl: function() {
				this.isUserControlled = !this.isUserControlled;
			}
		},
		switchSides: function() {
			this.homeTeam.switchSide();
			this.awayTeam.switchSide();
			this.resetStrikeCount();
			this.resetNumberOfOuts();
			this.checkScoringTeam();
			this.checkPitchingTeam();
			this.incrementInning();
			console.log('Inning: ' + this.inning);
		},
		incrementInning: function() {
			this.inning++;
		},
		incrementOut: function() {
			this.numberOfOuts++;
			console.log('urrrrrroooouuuuttttt!!');
		},
		incrementStrike: function() {
			this.strikeCount++;
		},
		resetStrikeCount: function() {
			this.strikeCount = 0;
		},
		resetNumberOfOuts: function() {
			this.numberOfOuts = 0;
		},
		checkScoringTeam: function() {
			if(this.homeTeam.isPitching === false) {
				return this.homeTeam;
			}
			else if(this.awayTeam.isPitching === false) {
				return this.awayTeam;
			}
		},
		checkPitchingTeam: function() {
			if(this.homeTeam.isPitching === true) {
				return this.homeTeam;
			}
			else if(this.awayTeam.isPitching === true) {
				return this.awayTeam;
			}
		},
		displayPitch: function(type, speed, team) {
			console.log('The ' + team.name + ' threw a ' + speed + ' mph ' + type + '.');
		},
		printScorecard: function() {
			console.log('----------------------------------');
			console.log('|           SCORECARD            |');
			console.log('| Home Team : ' + this.homeTeam.score + ' | Away Team : ' + this.awayTeam.score + '  |');
			console.log('| Inning: ' + this.inning + '     | Outs: ' + this.numberOfOuts + '        |');
			console.log('----------------------------------');
		}
	}
}


master();