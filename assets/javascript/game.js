
$(document).ready(function() {

	var $totalScore = $("#total-score");
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
	$totalScore.html(totalScore);

	//function to reset values of variables when player wins or loses
	function reset() {
		totalScore = 0;
		$totalScore.html(totalScore);
		randomNumber = Math.floor(Math.random() * (120 - 19)) + 19;
		$("#random-number-section").html(randomNumber);
		firstCrystal = Math.floor(Math.random() * 12 + 1);
		secondCrystal = Math.floor(Math.random() * 12 + 1);
		thirdCrystal = Math.floor(Math.random() * 12 + 1);
		fourthCrystal = Math.floor(Math.random() * 12 + 1);
	}


	//capture the clicks on each crystal picture and adds the value to totalScore.  Run the scoreboard function  to run the if/else statement
	$("#first-crystal").on("click", function() {
		totalScore += firstCrystal;
		$totalScore.html(totalScore);
		scoreboard();
		
	});

	$("#second-crystal").on("click", function() {
		totalScore += secondCrystal;
		$totalScore.html(totalScore);
		scoreboard();
	});

	$("#third-crystal").on("click", function() {
		totalScore += thirdCrystal;
		$totalScore.html(totalScore);
		scoreboard();
	});

	$("#fourth-crystal").on("click", function() {
		totalScore += fourthCrystal;
		$totalScore.html(totalScore);
		scoreboard();
	});

    function scoreboard () {
		if (totalScore === randomNumber) {
			reset();
			wins++;
			$("#wins").html("Wins: " + wins);
			
		}else if (totalScore >= randomNumber) {
			reset();
			losses++;
			$("#losses").html("Losses: " + losses);
			
		}
	}

});