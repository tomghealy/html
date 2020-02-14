/*
	Assignment C1A2 - question 1
	
	Javacript for declarations, assign values, conditions and loops
	Question 1 has 6 parts.  The html page will call a function c1A2Q1 when the page loads.
	Function c1A2Q1 will call a function to handle each part separately.
	
	Note: all output is handled in one function - displayResult.
*/

function c1A2Q1() {
	partA();
	partB();
	partC();
	partD();
	partE();
	partF();
}

//Part (a) - declare a variable
function partA() {
	var a=0;
	displayResult("partA", a);
}

//Part (b) - Condition 1
function partB() {
	var a=0;
	if (a >= 0 && a < 5) {
		displayResult("partB", "Within range");
	}
}

//Part (c) - Condition 2 - declare b and initialize to true
function partC() {
	var a=0;
	var b = true;
	if (a < 5 || a > 2) {
		B = false;
	}
	displayResult("partC", b); //result is true because a is less than 5
}

//Part (d) - Condition 3, Boolean
function partD() {
	var x = true;
	var y = false;
	var z = false;
	if (!Boolean(x) && !Boolean(y)) {
		z=true;
	}
	displayResult("partD", z);
}

//Part (e) - for loop
function partE() {
	var c; //declaring c outside the loop so that we can show the value after the loop
	for (c = 4; c > 0; c--) {
		
	}
	displayResult("partE", c);
}

//Part (f) - for loop
function partF() {
	var d;
	for (d = 0; d <= 9; d++) {

	}
	displayResult("partF", d);
}

