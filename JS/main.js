
var keep_playing = '';

do {

	var num1 = Math.ceil(Math.random() * 3);
	console.log(num1);
	var num2 = Math.ceil(Math.random() * 3);
	console.log(num2);
	var num3 = Math.ceil(Math.random() * 3);
	console.log(num3);
	
	if (num1 === num2 && num1 === num3) {
		console.log("YOU WIN!");
		alert("You won with all "+num1+"'s");
	}
	else if (num1 === 1 && num2 === 2 && num3 ===3) {
		console.log("YOU WIN!");
		alert("You won with "+num1+" "+num2+" and "+num3);
	}
	else if (num1 === 3 && num2 === 2 && num3 ===1) {
		console.log("YOU WIN!");
		alert("You won with "+num1+" "+num2+" and "+num3);
	}
	else {
	 	console.log("YOU LOSE!");
	 	alert("You lost with "+num1+" "+num2+" and "+num3);
	}

	keep_playing = prompt("Do you wish to keep playing this amazing game?","Enter 'Yes' or just 'Y'");

} while (keep_playing === "Yes" || keep_playing === "Y" || keep_playing === "yes" || keep_playing === "y");

