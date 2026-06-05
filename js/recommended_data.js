
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGFhNWY5OTU5ZWMxYWEzY2FmZDRmYmZhMGY3Y2ExYSIsIm5iZiI6MTc4MDQ1NTQ4NC4wODYwMDAyLCJzdWIiOiI2YTFmOTgzYzZmNTkyYTVjZWI2NzVjNzgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.9CVUfMwfv_lEmD9IuLkCePgLDhwjHPF9deeKYlxcYY0'
  }
};

fetch('https://api.themoviedb.org/3/trending/tv/day?leanguage=null', options)
  .then(res => res.json())
  .then(res => console.log(res.results))
  .catch(err => console.error(err));

