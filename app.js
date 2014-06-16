$(document).ready(function() {

	var progress = 2;
	var qCount = 0;
	var score = 0;
	var correctChoice = "a";

	$('#questionBox').hide();

	$('#getStarted').click(function() {
		$('#titlePanel').hide();
		$('#questionBox').show();
	});

	var newQuestion = function newQuestion(question, a, b, c, d, choicey, response) {
		this.question = question;
		this.a = a;
		this.b = b;
		this.c = c;
		this.d = d;
		this.response = response;

		this.swapped = function() {
			document.getElementById('question').innerHTML = question;
			document.getElementById('choice1').innerHTML = a;
			document.getElementById('choice2').innerHTML = b;
			document.getElementById('choice3').innerHTML = c;
			document.getElementById('choice4').innerHTML = d;
			document.getElementById('correctContent').innerHTML = response;
			document.getElementById('numby').innerHTML = (progress++)
			document.getElementById('cScore').innerHTML = score;
			correctChoice = choicey;
		}
	}

	var q1 = new newQuestion("What is the name of the FBI agent played by Keanu Reeves?", "Jim", "Johnny", "Jared", "Quintus", "b", "\"My name's Johnny Utah!\"");
	var q2 = new newQuestion("Who\'s parachute does Utah end up with after switching a few times?", "Grommet\'s", "Bodhi\'s", "Pappas\'s", "His own", "d", "After they pass around parachutes, switching numerous times, Johnny ends up with his own chute again. \"This one\'s set for a neckbreaker!\"");
	var q3 = new newQuestion("What are the bank robbers called?", "The Dead Presidents", "The Ex-Presidents", "The Presidents", "The Ringaling Brothers", "b", "They are the Ex-Presidents, and as Bodhi/Reagan says \"We\'ve been screwing you for years, a few more seconds shouldn\'t matter!\"");
	var q4 = new newQuestion("During the intro scene, what score does Agent Utah receive on his shooting test?", "75%", "90%", "10%", "100%", "d", "100% Utah!");
	var q5 = new newQuestion("Who punches Johnny in the face while he\'s surfing at Latigo Beach?", "Warchild", "Bunker", "Bodhi", "Babbit", "b", "Bunker decks him, but Johnny gets him back later on the beach. \"Okay. I get it. This is where you tell me that locals rule, and that Yuppie insects like me shouldn\'t be surfing the break, right?\"");
	var q6 = new newQuestion("What famed football player does Pappas mistake Johnny for when they meet?", "John Elway", "Johnny Manziel", "Johnny Unitas", "John Madden", "c", "Angelo Pappas is less than thrilled to be \"saddled with some quarterback punk, Johnny Unitas or something\".");
	var q7 = new newQuestion("Where does Agent Utah find Rosie\'s body while on the hunt for Bodhi?", "Baja", "Sumatra", "Los Angeles", "Miami", "a", "Rosie turns up dead in Baja.");
	var q8 = new newQuestion("After being chewed out for not delivering any new leads to their boss, what interesting news does Utah have for Babbit?", "He bought a new surfboard", "He caught his first tube", "He found a sand dollar", "He was nominated for an academy award", "b", "\"I caught my first tube today. Sir.\"");
	var q9 = new newQuestion("Where does Agent Utah finally track down Bodhi in the final scene?", "Bell\'s Beach, Australia", "Desert Point, Lombok", "Black\'s Beach, San Diego", "Uluwatu, Bali", "a", "Bodhi is at Bell\'s Beach for the 50 year storm, and asks to catch just one wave before Johnny takes him in.")

	$('#a').click(function() {
		document.getElementById('light').style.display='block';
		document.getElementById('fade').style.display='block';

		if (correctChoice == "a") {
			$('#correct').show();
			$('#incorrect').hide();
			score+=10;
		}

		else {
			$('#correct').hide();
			$('#incorrect').show();
		}
	});
	
	$('#b').click(function() {
		document.getElementById('light').style.display='block';
		document.getElementById('fade').style.display='block';

		if (correctChoice == "b") {
			$('#correct').show();
			$('#incorrect').hide();
			score+=10;
		}

		else {
			$('#correct').hide();
			$('#incorrect').show();
		}
	});

	$('#c').click(function() {
		document.getElementById('light').style.display='block';
		document.getElementById('fade').style.display='block';

		if (correctChoice == "c") {
			$('#correct').show();
			$('#incorrect').hide();
			score+=10;
		}

		else {
			$('#correct').hide();
			$('#incorrect').show();
		}
	});

	$('#d').click(function() {
		document.getElementById('light').style.display='block';
		document.getElementById('fade').style.display='block';

		if (correctChoice == "d") {
			$('#correct').show();
			$('#incorrect').hide();
			score+=10;
		}

		else {
			$('#correct').hide();
			$('#incorrect').show();
		}
	});

	$('#next').click(function(){
		if (qCount == 0) {
			q1.swapped();
			qCount++;
		}
		else if (qCount == 1) {
			q2.swapped();
			qCount++;
		}

		else if (qCount == 2) {
			q3.swapped();
			qCount++;
		}
		else if (qCount == 3) {
			q4.swapped();
			qCount++;
		}
		else if (qCount == 4) {
			q5.swapped();
			qCount++;
		}
		else if (qCount == 5) {
			q6.swapped();
			qCount++;
		}
		else if (qCount == 6) {
			q7.swapped();
			qCount++;
		}
		else if (qCount == 7) {
			q8.swapped();
			qCount++;
		}

		else if (qCount == 8) {
			q9.swapped();
			qCount++;
			$('#next').hide();
			$('#results').show();
		}
	});	

	$('#results').click(function(){
			$('#correct').hide();
			$('#incorrect').hide();
			$('#finished').show();
			document.getElementById('correctContent').innerHTML = "You scored " +score+ " points!";
			$('#next').hide();
			$('#results').hide();
			$('#playAgain').show();
	});
})