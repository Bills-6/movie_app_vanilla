const form_input = document.getElementById("form-search");


form_input.addEventListener("submit", (event) => {
	event.preventDefault();

	const query = document.getElementById("input-search").value;
	SearchVideo(query);
});

async function SearchVideo(query) {
	//

	try {
		const options = {
			method: 'GET',
			headers: {
				accept: 'application/json',
				Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGFhNWY5OTU5ZWMxYWEzY2FmZDRmYmZhMGY3Y2ExYSIsIm5iZiI6MTc4MDQ1NTQ4NC4wODYwMDAyLCJzdWIiOiI2YTFmOTgzYzZmNTkyYTVjZWI2NzVjNzgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.9CVUfMwfv_lEmD9IuLkCePgLDhwjHPF9deeKYlxcYY0',
			}
		}
		const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}?&leanguage=null`, options);

		const json = await response.json();
		console.log();
	} catch (error) {
	} finally {}
}


async function loadingState(params) {
	const trendingPage = document.getElementById("trending-page");
	const recommendedPage = document.getElementById("recommended-movie");

	const loading_state_UI = document.getElementById("loading-state");

	if (loading_state_UI.dataset.state === "") {
		trendingPage.classList.add("hidden");
		recommendedPage.classList.add("hidden");

		loading_state_UI.classList.remove("hidden");
	}
}