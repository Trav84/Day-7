
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

} while (confirm("Keep playing?"));


$( document ).ready(function() {

	var control = Math.ceil(Math.random() * 10);
 
	$('#play-button').click(function(event) {

			// $('#img1').slideUp( 900 );

			do {
				$('.img1').hide().delay(800);
				$('.img2').show().delay(800);
				$('.img2').hide().delay(800);
				$('.img3').show().delay(800);
				control++;
			} while (control < 20);

	}); 
});
