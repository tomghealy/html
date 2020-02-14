/*
	Assignment C1A2 - question 2 JavaScript file
	
	Prompt the user to input a 2 digit number.  When the user presses
	submit, the program should use a JavaScript function to validate
	the user input.  If a valid number is received then output all
	even numbers between 0 and the user's input as CSV and all odd
	numbers between 0 and the user's input as CSV
	
	Note: all output is handled in one function - displayResult.
*/


/*
	Function to get the user input and validate
	Calls:
		validateInput to perform validation
		getOddAndEvenNumbers to get the number lists
	Parameters:
		No parameters
	Returns:
		No return
*/
function processInput() {
	
	//  Get the user input
	var inputValue = document.getElementById("userInput").value;
	
	// Validate the user input
	var isValid = validateInput(inputValue);
	
	// Generate the number lisst if the input is valid
	if (Boolean(isValid)) {
		getOddAndEvenNumbers(inputValue);
	}
}


/*
	Function to validate input and report any input errors
	Calls:
		displayresult to output to the page
	Parameters:
		No parameters
	Returns:
		Returns true (valid input) or false (invalid input)
*/
function validateInput(inputValue) {
	var isValid = false;	//Boolean to control input validation
  
	//Clear the error message and the number lists
	displayResult("errorMessage", "");
	displayResult("evenNumbers", "");
	displayResult("oddNumbers", "");

	//Validation: Use try/catch and throw validation errors
	try { 
		//Nothing input
		if (inputValue == "") throw "is empty";

		//RegExp traps decimal points, sign, etc - isNaN allows decimals and signs
		var pattern = /[^0-9]/g;
		result = inputValue.match(pattern);
		if (result != null) throw "contains " + result;
		if (isNaN(inputValue)) throw " is NaN";
		//Validate 2 digits
		if (inputValue.length != 2) throw " is not two digits";

			//No errors thrown - input is good
			isValid = true;
		}
		catch(err) {
		displayResult("errorMessage", "Input " + err);
	}
	
	//Return the result of the validation - true or false
	return isValid;
}


/*
	Function to find all of the odd and even numbers between 0 and the number input by the user
	Calls:
		displayResult to output the number lists
	Parameters:
		The number input by the user
	Returns:
		No return
*/		
function getOddAndEvenNumbers(inputValue) {		
	//Create arrays for the odd and even numbers
	var oddNumberList = [];
	var evenNumberList = [];
	
	//Loop from zero to the number input determining if each number is even or odd
	for (var i = 0; i <= Number(inputValue); i++) {
		if (i % 2 == 0) {
			evenNumberList.push(i);
		} else {
			oddNumberList.push(i);
		}
	}
	
	//Render the number lists on the webpage
	displayResult("evenNumbers", "Even numbers: " + evenNumberList);
	displayResult("oddNumbers", "Odd numbers: " + oddNumberList);
}

