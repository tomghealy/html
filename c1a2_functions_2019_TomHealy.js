/*
	Assignment C1A2 - question 1
	
	Javacript for functions used in all qusttions.  This allows for code reuse
*/

/*
	Function to output messages and results
	Parameters:
		The ID to display the result at
		The value to be displayed
	Returns
		No return
*/
function displayResult(idName, msg) {
	document.getElementById(idName).innerHTML = msg;
}