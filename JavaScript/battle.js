var health = 100;

function firstBattle(){
	var robotHealth = 28;
	document.getElementById("healthBox").innerHTML=health;
	document.getElementById("enemyHealthBox").innerHTML=robotHealth;
	var takingDamage = setInterval(takeDamage(2),5000);
	var dealingDamage = setInterval(attack(4, robotHealth), 4000);

	while (health>0){
		if (robotHealth<=0){
			clearInterval(takingDamage);
			clearInterval(dealingDamage);
			health=100;
			document.write("You win");
		}
	}
}
function takeDamage(damage){
	health = health-damage;
}
function attack(damage, enemy) {
	if (confirm("Attack!")){
		enemy = enemy-damage;
	}
}