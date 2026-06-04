import {slider} from "./slider_system.js";

const fetchData = fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=88aa5f9959ec1aa3cafd4fbfa0f7ca1a")
	.then((response) => response.json())
	.then ((data) => {

		// trending movies
		const trending_movies = Array.from(data.results);
		console.log(trending_movies);

		slider.innerHTML = null;
		trending_movies.forEach(movie => {

			// create image
			const pathPoster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

			console.log(pathPoster);


			slider.innerHTML += `
			<article class="movie-card w-[500px] h-[300px] shrink-0 rounded-2xl relative shadow-md shadow-gray-700 cursor-pointer hover:scale-[1.02] transition-all duration-200]">
							<img class="movie-image w-full h-full bg-blue-100 rounded-2xl brightness-50" src="${pathPoster}" alt="movie">

							<div class="movie-info absolute flex items-center gap-3 px-6 z-4 bottom-11 w-full">
								<span class="movie-date text-gray-400 text-sm">2022</span>

								<div class="movie-category flex items-center gap-2 rounded-md">
									<div class="icon w-4 h-4 bg-gray-400 rounded-sm flex items-center justify-center">
										<i class="bi bi-film text-[8px] text-gray-600"></i>
									</div>
									<span class="category-title text-gray-400 text-sm">Movie</span>
								</div>
							</div>

							<h3 class="movie-title absolute bottom-3 px-6 text-2xl font-bold text-white font-mono">Title</h3>
						</article>
			`;
		});
		//
	})
	.catch ((err) => {
		console.log("Ada kesalahan",err);
	});



