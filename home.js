const api = "api_key=197a1d1e98fb06094efd0577594e2ee2";
const base_url = "https://api.themoviedb.org/3";

const banner_url = "https://image.tmdb.org/t/p/original";
const img_url = "https://image.tmdb.org/t/p/w300";

const requests = {
  fetchTrending: `${base_url}/trending/all/week?${api}&language=en-US`,
  fetchNetflixOrignals: `${base_url}/discover/tv?${api}&with_networks=213`,
  fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
  fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
  fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
  fetchRomanceMovies: `${base_url}/discover/movie?${api}&with_genres=10749`,
  fetchDocumentaries: `${base_url}/discover/movie?${api}&with_genres=99`,
  // fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
};

function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}


fetch(requests.fetchNetflixOrignals)
  .then((res) => res.json())

  .then((data) => {
    console.log(data.results);
    const setMovie = data.results[Math.floor(Math.random() * data.results.length - 1)];

    var banner = document.getElementById("banner");
    var banner_title = document.getElementById("banner__title");
    var banner__desc = document.getElementById("banner__description");
      
    banner.style.backgroundImage = "url(" + banner_url + setMovie.backdrop_path + ")";
    banner__desc.innerText = truncate(setMovie.overview, 150);
    banner_title.innerText = setMovie.name;
      
  });

//movies rows
fetch(requests.fetchNetflixOrignals)
  .then((res) => res.json())
  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");

    row.className = "row";
    row.classList.add("netflixrow");

    headrow.appendChild(row);
    const title = document.createElement("h2");

    title.className = "row__title";
    title.innerText = "NETFLIX ORIGNALS";

    row.appendChild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);

    data.results.forEach((movie) => {
      const poster = document.createElement("img");
      poster.className = "row__posterLarge";
      var s = movie.name.replace(/\s+/g, "");
      poster.id = s;
      poster.src = img_url + movie.poster_path;
      row_posters.appendChild(poster);
    });
  });

    