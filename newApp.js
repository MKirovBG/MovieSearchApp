let API_URL = 'http://www.omdbapi.com/?apikey=29697d12&type=movie&s=';

// Create a function to take the inpput and add to the API request

const form = document.querySelector('form');
const input = document.querySelector('#searchTerm');
const resultsSection = document.querySelector('#results');

form.addEventListener('submit', formSubmitted);

function formSubmitted(event) {
	event.preventDefault();
	const searchText = input.value;
	getResults(searchText);
}

function getResults(searchText) {
	const currentSearch = `${API_URL}${searchText}`;

	fetch(currentSearch)
		.then((response) => response.json())
		.then((data) => showResults(data));
}

// update the section with the results from the search

function showResults(results) {
	resultsSection.innerHTML = '';
	let html = '';
	let movies = results.Search;
	console.log(movies);
	movies.forEach((movie) => {
		html += `
            <div class="card col-4">
                <img class="card-imp-top" src=${movie.Poster}  alt=${movie.Poster}>
                    <div class="card-body">
                        <h5 class="card-title">${movie.Title}</h5>
                            <p class="card-text">${movie.Year}</p>
                <a href="#" class="btn btn-primary">Watch Later</a>
            </div>
        </div>`;
	});
	resultsSection.innerHTML = html;
}

/*
 */
