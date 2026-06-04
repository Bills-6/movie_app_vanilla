const fetchData = fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=88aa5f9959ec1aa3cafd4fbfa0f7ca1a")
	.then((response) => response.json())
	.then ((data) => {

		// trending movies
		const trending_movies = data.results;
		console.log(trending_movies);
		
		//
	})
	.catch ((err) => {
		console.log(err);
	});



