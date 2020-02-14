/*
	Assignment C1A2 - question 4
	
	Propmt the user to select a film genre from a list of four.  
	Display three films from the selected genre along with details of each film
*/

//Create a variable for the selected genre and default to the first value
var selectedGenre = "Action";

//Create an array for all films
var filmArray = [];

//Create a separate array for the selected genre
var genreArray = [];

/*
	Function to get the user input and filter the film list by the selected genre
	Calls:
		No calls
	Parameters:
		No parameters
	Returns:
		No return
*/
function getGenre() {
	selectedGenre = document.getElementById("genre").value;
	
	//Filter the array by the genre
	genreArray = filmArray.filter(function (fg) {
		return fg.genre == selectedGenre;
	});
}

/*
	Function to generate the table for the selected genre
	Calls:
		displayResult to ouput the recommendations heading and the results
	Parameters:
		No parameters
	Returns:
		No return
*/
function recommendations() {
	displayResult("genreMessage", "IMDb Recommendations for " + selectedGenre + " films");
	
	//Create the table definition - making it dynamic so that any number of films per genre will be catered for
	var tableDef = "<tr><th></th><th></th><th>Title</th><th>Description</th><th>Director</th><th>Staring</th><th>Age</th></tr>";	
	
	for (var i = 0; i < genreArray.length; i++) {
		tableDef += "<tr><td rowspan='2' width='3%' align='center'>";
		tableDef += genreArray[i].starRating;
		tableDef += "</td><td rowspan='2' width='5%'>";
		tableDef += genreArray[i].filmImage;
		tableDef += "</td><td rowspan='2' width='12%' align='center'>";
		tableDef += genreArray[i].title;
		tableDef += "</td><td width='45%'>";
		tableDef += genreArray[i].description;
		tableDef += "</td><td width='10%' align='center'>";
		tableDef += genreArray[i].director;
		tableDef += "</td><td rowspan='2' width='20%'>";
		tableDef += genreArray[i].staring;
		tableDef += "</td><td rowspan='2' width='5%' align='center'>";
		tableDef += genreArray[i].ageRating;
		tableDef += "</td></tr>";
		tableDef += "<tr><td>";				
		tableDef += "<strong>IMDb Review: </strong>" + genreArray[i].review;
		tableDef += "</td><td align='center'>";	
		tableDef += "<strong>Year Recorded: </strong>" + genreArray[i].yearRecorded;	
		tableDef += "</td></tr>";
	}
	displayResult("recommended", tableDef);		
}

/*
	Function to create an array of all films and filter the list by the selected genre
	Note: the selected genre is a value set when the selectedGenre varaible is initialised
	Calls:
		No calls
	Parameters:
		No parameters
	Returns:
		No return
*/
function createFilmList() {
	var filmObj;
	
	//Comedy Films
	filmObj = {
		genre:"Comedy", 
		title:"City Lights", 
		yearRecorded:1931, 
		director:"Charles Chaplin", 
		staring:"Charles Chaplin, Virginia Cherrill, Harry Myers, Virginia Cherrill", 
		description:"A homeless tramp befriends a lovely blind flower seller and convinces her he is a millionaire while he secretly labors to pay for the restoration of her sight. One of Charlie Chaplin's masterpieces",
		review:"One of the best underdog romance movies ever, with an ending that will light up any heart.",
		starRating:5,
		filmImage:"<img src='Images/CityLights.jpg' alt='City Lights'>",
		ageRating:"G"
	};
	filmArray.push(filmObj);
	
	filmObj = {
		genre:"Comedy",
		title:"Airplane!",
		yearRecorded:1980,
		director:"David Zucker, Jerry Zucker, Jim Abrahams",
		staring:"Robert Hays, Julie Hagerty, Lloyd Bridges, Leslie Nielsen",
		description:"This spoof of the Airport series of disaster movies relies on ridiculous sight gags, groan-inducing dialogue, and deadpan acting - a comedy style that would be imitated for the next 20 years",
		review:"Though unabashedly juvenile and silly, Airplane! is nevertheless an uproarious spoof comedy full of quotable lines and slapstick gags that endure to this day.",
		starRating:4,
		filmImage:"<img src='Images/Airplane!.jpg' alt='Airplane'>",
		ageRating:"PG"
	};
	filmArray.push(filmObj);			
	
	filmObj = {
		genre:"Comedy",
		title:"Monty Python and the Holy Grail",
		yearRecorded:1975,
		director:"Terry Gilliam, Terry Jones",
		staring:"Graham Chapman, John Cleese, Eric Idle, Terry Jones",
		description:"From its opening multi-language titles to the closing arrest of the entire Dark Ages cast by modern-day bobbies, Monty Python and the Holy Grail helped to define irreverence",
		review:"A cult classic as gut-bustingly hilarious as it is blithely ridiculous, Monty Python and the Holy Grail has lost none of its exceedingly silly charm.",
		starRating:3,
		filmImage:"<img src='Images/MontyPython.jpg' alt='Monty Python'>",
		ageRating:"PG"
	};
	filmArray.push(filmObj);				
	
	//History Films
	filmObj = {
		genre:"History",
		title:"Schindler's List",
		yearRecorded:1993,
		director:"Steven Spielberg",
		staring:"Liam Neeson, Ralph Fiennes, Ben Kingsley, Caroline Goodall",
		description:"In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
		review:"Moving performances and excellent production",
		starRating:5,
		filmImage:"<img src='Images/SchindlersList.jpg' alt='Schindlers List'>",
		ageRating:"15"
	};		
	filmArray.push(filmObj);			

	filmObj = {
		genre:"History",
		title:"Downfall",
		yearRecorded:2004,
		director:"Oliver Hirschbiegel",
		staring:"Bruno Ganz, Alexandra Maria Lara, Ulrich Matthes, Juliane Kohler",
		description:"Traudl Junge, the final secretary for Adolf Hitler, tells of the Nazi dictator's final days in his Berlin bunker at the end of WWII.",
		review:"Excellent portrail of extreme pressure",
		starRating:4,
		filmImage:"<img src='Images/Downfall.jpg' alt='Downfall'>",
		ageRating:"15"
	};
	filmArray.push(filmObj);			

	filmObj = {
		genre:"History",
		title:"Braveheart",
		yearRecorded:1995,
		director:"Mel Gibson",
		staring:"Mel Gibson, Sophie Marceau, Patrick McGoohan, Angus Macfadyen",
		description:"When his secret bride is executed for assaulting an English soldier who tried to rape her, William Wallace begins a revolt against King Edward I of England.",
		review:"Who does history remember? Those who beg for mercy? Or those who bleed for freedom?",
		starRating:3,
		filmImage:"<img src='Images/Braveheart.jpg' alt='Braveheart'>",
		ageRating:"15"
	};
	filmArray.push(filmObj);		

	//Action Films
	filmObj = {
		genre:"Action",
		title:"1917",
		yearRecorded:2019,
		director:"Sam Mendes",
		staring:"Fionn Whitehead, Barry Keoghan, Mark Rylance, Tom Hardy",
		description:"Two young British soldiers during the First World War are given an impossible mission: deliver a message deep in enemy territory that will stop 1,600 men from walking straight into a deadly trap",
		review:"the next Academy Award winner for the Best Picture.",
		starRating:5,
		filmImage:"<img src='Images/1917.jpg' alt='1917'>",
		ageRating:"13"
	};		
	filmArray.push(filmObj);	

	filmObj = {
		genre:"Action",
		title:"Inception",
		yearRecorded:2010,
		director:"Christopher Nolan",
		staring:"Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Ken Watanabe",
		description:"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO",
		review:"Insanely Brilliant ! Nolan has outdone himself !!",
		starRating:4,
		filmImage:"<img src='Images/Inception.jpg' alt='Inception'>",
		ageRating:"13"
	};
	filmArray.push(filmObj);		

	filmObj = {
		genre:"Action",
		title:"The Dark Knight",
		yearRecorded:2008,
		director:"Christopher Nolan",
		staring:"Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
		description:"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
		review:"One of the Best Superhero movies EVER",
		starRating:3,
		filmImage:"<img src='Images/DarkKnight.jpg' alt='Dark Knight'>",
		ageRating:"13"
	};
	filmArray.push(filmObj);		

	//Drama Films
	filmObj = {
		genre:"Drama",
		title:"The Shawshank Redemption",
		yearRecorded:1994,
		director:"Frank Darabont",
		staring:"Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
		description:"Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
		review:"A classic piece of unforgettable film-making.",
		starRating:5,
		filmImage:"<img src='Images/ShawshankRedemption.jpg' alt='Shawshank Redemption'>",
		ageRating:"R"
	};		
	filmArray.push(filmObj);		

	filmObj = {
		genre:"Drama",
		title:"The Godfather",
		yearRecorded:1972,
		director:"Francis Ford Coppola",
		staring:"Marlon Brando, Al Pacino, James Caan, Diane Keaton",
		description:"The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
		review:"Outstanding film",
		filmImage:"<img src='Images/Godfather.jpg' alt='Godfather'>",
		ageRating:"13"
	};
	filmArray.push(filmObj);	
	
	filmObj = {
		genre:"Drama",
		title:"The Godfather: Part II",
		yearRecorded:1974,
		director:"Francis Ford Coppola",
		staring:"Al Pacino, Robert De Niro, Robert Duvall, Diane Keaton",
		description:"The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
		review:"A great follow-up to the original",
		starRating:3,
		filmImage:"<img src='Images/GodfatherII.jpg' alt='Godfather Part 2'>",
		ageRating:"13"
	};
	filmArray.push(filmObj);
	
	//Filter the array by the genre
	genreArray = filmArray.filter(function (fg) {
		return fg.genre == selectedGenre;
	});
}
