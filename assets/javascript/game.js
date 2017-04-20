
$(document).ready(function() {

	//variable for the random number that must be matched by the player, will have a random value between 19 and 120
	var randomNumber = Math.floor(Math.random() * (120 - 19)) + 19;
	//console.log(randomNumber);
	$("#random-number-section").html(randomNumber);

	// variables for the four crystals that will be displayed, must have random values between 1 and 12
	var firstCrystal = Math.floor(Math.random() * 12 + 1); 
	//console.log(firstCrystal);

	var secondCrystal = Math.floor(Math.random() * 12 + 1);
	//console.log(secondCrystal);

	var thirdCrystal = Math.floor(Math.random() * 12 + 1);
	//console.log(thirdCrystal);

	var fourthCrystal = Math.floor(Math.random() * 12 + 1);
	//console.log(fourthCrystal);

	//variables to store total wins and losses for game
	var wins  = 0;
	var losses = 0;

	//stores the summed up values from selected crystals and used to compare to the randomNumber that the user must match
	var totalScore = 0;
	$("#total-score").html(totalScore);

	//function to reset values of variables when player wins or loses
	function reset() {
		var totalScore = 0;
		$("#total-score").html(totalScore);
		var randomNumber = Math.floor(Math.random() * (120 - 19)) + 19;
		$("#random-number-section").html(randomNumber);
		var firstCrystal = Math.floor(Math.random() * 12 + 1);
		var secondCrystal = Math.floor(Math.random() * 12 + 1);
		var thirdCrystal = Math.floor(Math.random() * 12 + 1);
		var fourthCrystal = Math.floor(Math.random() * 12 + 1);
	}


	//capture the clicks on each crystal picture and add the value to totalScore.  Run the scoreboard function  to run the if/else statement
	$("#first-crystal").on("click", function() {
		totalScore += firstCrystal;
		$("#total-score").html(totalScore);
		scoreboard();
	});

	$("#second-crystal").on("click", function() {
		totalScore += secondCrystal;
		$("#total-score").html(totalScore);
		scoreboard();
	});

	$("#third-crystal").on("click", function() {
		totalScore += thirdCrystal;
		$("#total-score").html(totalScore);
		scoreboard();
	});

	$("#fourth-crystal").on("click", function() {
		totalScore += fourthCrystal;
		$("#total-score").html(totalScore);
		scoreboard();
	});

    function scoreboard () {
		if (totalScore === randomNumber) {
			wins++;
			$("#wins").html("Wins: " + wins);
			reset();
		}else if (totalScore >= randomNumber) {
			losses++;
			$("#losses").html("Losses: " + losses);
			reset();
		}
	}

});