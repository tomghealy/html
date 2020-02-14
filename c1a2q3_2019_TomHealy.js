
/*
	Assignment C1A2 - question 3 JavaScript File
	
	Generate a matrix of a chosen size, each cell will be rendered as a circle
	Cells on even row numbers and even columns will be rendered in yellow.  The
	centre cell will be rendered in red, all other cells will be green
*/


//Variable for the matrix size - default to the first value (3)
var chosenSize = 3;

/*
	Function to get the user input
	Calls:
		No calls
	Parameters:
		No parameters
	Returns:
		No return
*/
function getMatrixSize() {
	chosenSize = document.getElementById("matrixSize").value;
}

/*
	Function to generte the matrix based on the user input
	The matrix is generated using a table which is generated in the code
	Calls:
		No calls
	Parameters:
		No parameters
	Returns:
		No return
*/
function generateMatrix() {
	var tableDef = "";
	
	//Calculate the centre row and cell - (number Rows + 1) / 2
	var centreCell = (Number(chosenSize) + 1) / 2;
	var cellColor = "";
	
	//Outer loop for the Rows in the table
	for (rowCounter = 1; rowCounter <= chosenSize; rowCounter++)
	{
		//Cells in even row numbers and even column numbers will be yellow
		var isEvenRow = false;
		if (rowCounter % 2 == 0) {
			isEvenRow = true;
		}
		
		//Create a new table row for each loop
		tableDef += "<tr>";
		
		//Inner loop for the columns in each row
		for (columnCounter = 1; columnCounter <= chosenSize; columnCounter++)
		{
			var isEvenColumn = false;
			if (columnCounter % 2 == 0) {
				isEvenColumn = true;
			}
			
			//Set the color
			if (rowCounter == centreCell && columnCounter == centreCell) {
				cellColor = "Red";
			} else if(Boolean(isEvenRow) && Boolean(isEvenColumn)) {
				cellColor = "Yellow";
			} else {
				cellColor = "Green";
			}
			
			//Create each cell in the table
			tableDef += "<td><span class='circle" + cellColor + "'></span>";
		}
	
		//End the table row
		tableDef += "</tr>";

	}
	
	//Output the matrix
	document.getElementById("matrix").innerHTML = tableDef;
}
