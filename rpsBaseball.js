

function playBall () {
	let pitchType = getPitchType ();
	let pitchSpeed = getPitchSpeed ();
	let batterType = getBatterType ();
	let contact = getHitOutcome ();
	let madeContact;

	console.log('You threw a ' + pitchSpeed + ' mph ' + pitchType + '.');

	if (contact == true) {
		madeContact = 'made contact with the ball';
	}
	else {
		madeContact = 'swung on and missed the pitch';
	}

	console.log('Your ' + batterType + ' ' + madeContact + '!');
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



playBall();













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