//// javascript for most-viewed slideshow /////
//////////////////////////////////////////////
let scrollContainer = document.querySelector('.gallery')
let angle_droite = document.getElementById('angle-droite')
let angle_gauche = document.getElementById('angle-gauche')

scrollContainer.addEventListener('wheel', (event) =>{
	event.preventDefault()

		scrollContainer.scrollLeft += event.deltay
	})

	angle_droite.addEventListener('click', () =>{
		scrollContainer.style.scrollBehavior = 'smooth'
		scrollContainer.scrollLeft =+ 600
	})

	angle_gauche.addEventListener('click', () =>{
		scrollContainer.style.scrollBehavior = 'smooth'
		scrollContainer.scrollLeft -= 800
	})
//////////////////////////////////////////////	
////// javascript for search bar /////////////
//////////////////////////////////////////////
/* This script is used to filter house listings based on user input in the search bar.
   It listens for keyup events, filters the houseList array, and displays matching results. */
const houseList = [
	"Ocean View",
	"Mountain View",
	"Best Selling",
	"New on the List",
	"Fancy",
	"Best View",
	"Cape Town",
	"Affordable Houses",
	"Sea Breeze",
	"Durban View",
	"Luxury Living",
	"City Lights",
	"Cozy Cottage",
	"Best"
];

const resultBox = document.querySelector(
	".results"
	);
const inputBox = document.querySelector(
	".search-bar"
	);

const displayResults = function (result) {
	const resultHTML = result.map(
		function (house) {
		return `<li onclick=selectInput(this)> ${house} </li>`;
	});

	resultBox.innerHTML = '<ul>' + resultHTML.join("") + '</ul>';
}

inputBox.onkeyup = function (e) {
	let result = [];
	const input = inputBox.value.toLowerCase();
	if (input.length === 0) {
		resultBox.innerHTML = "";
	}

	if (input.length) {
		result = houseList.filter(
			(house) =>{
			return house.toLowerCase().includes(input);
		});
		
		displayResults(result);
	}
};

function selectInput(house) {
	inputBox.value = house.innerHTML;
	resultBox.innerHTML = "";
};