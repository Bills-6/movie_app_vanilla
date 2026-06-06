const form_input = document.getElementById("form-search");

form_input.addEventListener("submit", (e) => {
	e.preventDefault();
	const query = document.getElementById("input-search").value;
	SearchVideo(query);
	console.log(query)
});

const trendingPage = document.getElementById("trending-page");
const recommendedPage = document.getElementById("recommended-movie");
const loading_state_UI = document.getElementById("loading-state");

async function SearchVideo(query) {
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
		
	} catch (error) {
		console.log();
	} finally {
		loading_state_UI.dataset.state = "false";
		
		trendingPage.classList.remove("hidden");
		recommendedPage.classList.remove("hidden");

		loading_state_UI.classList.add("hidden");
		
	}
}


async function loadingState() {

	if (loading_state_UI.dataset.state === "false") {
		loading_state_UI.dataset.state = "true";

		trendingPage.classList.add("hidden");
		recommendedPage.classList.add("hidden");

		loading_state_UI.classList.remove("hidden");
	}
}