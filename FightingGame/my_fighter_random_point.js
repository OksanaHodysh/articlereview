class Fighter {

	constructor(name = 'Incognito', power = 100, health = 1000) {
		this.name = name;
		this.power = power;
		this.health = health;
		console.log(`I'm ${this.name}. My power is ${this.power}. My health state is ${this.health}.`);
	}

	setDamage(damage) {
		this.health -= damage;
		if(this.health < 0) this.health = 0;
		console.log(`${this.name}'s Health: ${this.health}.`)
	}

	hit(enemy, point) {
		let damage = point * this.power;
		console.log(`${this.name} caused damage of ${damage} to ${enemy.name}.`);
		enemy.setDamage(damage);
	}
}

class ImprovedFighter extends Fighter {
	
	doubleHit(enemy, point) {
		let doublePoint = point * 2;
		super.hit(enemy, doublePoint);
	}
}

var fight = (fighter, improvedFighter, ...rest) => {
	console.log(`${fighter.name} against ${improvedFighter.name}. C'mon, let's fight. Winner takes all!`)
    let turn = true;
    while((fighter.health > 0) && (improvedFighter.health > 0)) {
    	let point = rest[Math.floor(Math.random() * rest.length)];
    	console.log(`Random Point: ${point}`);
    	if(turn) {
    		fighter.hit(improvedFighter, point);
    	} else {
    		improvedFighter.doubleHit(fighter, point);
    	}
    	turn = !turn;
    }
	let winner = (!turn) ? fighter.name : improvedFighter.name;
    console.log(`${winner} won the game. Congratulations!`);
};

let fighter = new Fighter('Edward', 30, 1500);
let improvedFighter = new ImprovedFighter('Ben', 20, 1000);

//fight(fighter, improvedFighter, 7, 10, 6, 4, 13, 9, 11);

//let playerA = new Fighter('John');
//let playerB = new ImprovedFighter();

//fight(playerA, playerB, 5, 4, 3, 2, 1);