const form_input = document.getElementById("form-search");

form_input.addEventListener("submit", (e) => {
	e.preventDefault();
	const query = document.getElementById("input-search").value;
	SearchVideo(query);
	console.log(query)
});

const trendingPage = document.getElementById("trending-page");
const recommendedPage = document.getElementById("recommended-movie");

// result UI && notFound UI
const resultUI = document.getElementById("result-seaarch-UI");
const notFoundUI = document.getElementById("not-found-search-UI");

async function SearchVideo(query) {
	form_input.dataset.search = "true";

	pagePrimary();
	loadingState();

	try {
		const options = {
			method: 'GET',
			headers: {
				accept: 'application/json',
				Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGFhNWY5OTU5ZWMxYWEzY2FmZDRmYmZhMGY3Y2ExYSIsIm5iZiI6MTc4MDQ1NTQ4NC4wODYwMDAyLCJzdWIiOiI2YTFmOTgzYzZmNTkyYTVjZWI2NzVjNzgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.9CVUfMwfv_lEmD9IuLkCePgLDhwjHPF9deeKYlxcYY0',
			}
		}

		const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&leanguage=en-US`, options);

		const json = await response.json();
		const data_search = json.results;

		if (data_search.length === 0) {
			throw new Error();
		}
		notFoundUI.classList.add("hidden");
		resultUI.classList.remove("hidden");

		// parent result
		const resultContainer = document.getElementById("results-search-container");

		resultContainer.innerHTML = "";

		console.log(data_search);
		// loop data
		Array.from(data_search).forEach(data => {
			// image path
			const path_poster = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
			
			resultContainer.innerHTML += `
			<article class="search-result-card md:flex items-center">
						<img class="w-full h-[200px] mb-5 md:mb-0 bg-pink-500 rounded-md md:w-[250px] lg:w-1/3 lg:h-[300px]" src="${path_poster}" alt="image-">
						<div class="result-info bg-gray-400 h-10 md:grow"></div>
			</article>
			`;
		});
	} catch {
		resultUI.classList.add("hidden");
		notFoundUI.classList.remove("hidden");
	} finally {
		loadingState();
	}
}

function pagePrimary() {
	if (form_input.dataset.search === "true") {
		recommendedPage.classList.add("hidden");
		trendingPage.classList.add("hidden");
	}
}

function loadingState() {
	const loadingUI = document.getElementById("loading-state");
	loadingUI.classList.toggle("hidden");
}