
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGFhNWY5OTU5ZWMxYWEzY2FmZDRmYmZhMGY3Y2ExYSIsIm5iZiI6MTc4MDQ1NTQ4NC4wODYwMDAyLCJzdWIiOiI2YTFmOTgzYzZmNTkyYTVjZWI2NzVjNzgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.9CVUfMwfv_lEmD9IuLkCePgLDhwjHPF9deeKYlxcYY0'
  }
};

const cards_container = document.getElementById("cards-container");

async function getTv() {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/trending/all/week", options
    )

    const responseObject = await response.json();
    const videos = responseObject.results;
    console.log(videos);
    cards_container.innerHTML = null;

    Array.from(videos).forEach(video => {

      const poster_path = `https://image.tmdb.org/t/p/w500${video.poster_path }`;

      cards_container.innerHTML += `
      <article class="video w-full">
						<img class="video-poster block rounded-xl h-[200px] w-[350px] mb-2" src="${poster_path}" alt="movie-poster">

						<div class="movie-info">
							<div class="detail-container flex items-center gap-2">
								<span class="video-date text-zinc-500 text-sm">${video.media_type === "movie" ? video.release_date : video.first_air_date}</span>
								<span class="text-zinc-500 font-bold">•</span>
								<span class="video-category-container flex items-center gap-1">
									<i class="bi bi-film text-zinc-300 text-xs"></i>
									<p class="category-text text-zinc-500 text-sm">${video.media_type}</p>
								</span>
							</div>

							<h3 class="video-title text-white text-2xl font-bold font-mono">
                ${video.media_type === "movie" ? video.title : video.name}
              </h3>
						</div>
					</article>
      `;
    });
  } catch (error) {
  }
}
getTv();