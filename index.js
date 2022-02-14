const linkPopular ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=d985fa51cf87c5fb7f671d560cdcdc90&page=1";
const noPic = "https://image.tmdb.org/t/p/w1280";
const searchApi = "https://api.themoviedb.org/3/search/movie?&api_key=d985fa51cf87c5fb7f671d560cdcdc90&query=";
const main = document.querySelector(".main");
const form = document.querySelector(".form");
const search = document.querySelector(".search");
/*  -----------------------*/
async function getData(url) {
    const res = await fetch(url);
    const data = await res.json();
    showMovies(data.results);
  }
  getData(linkPopular);
/* ------------------------*/
function showMovies (movies) {
  main.innerHTML = "";
  movies.forEach((movie) => {
    const { poster_path, title, overview } = movie;
    const movieSection = document.createElement("section");
    movieSection.classList.add("movie");
    movieSection.innerHTML = `
      <img
        src="${noPic + poster_path}"
        alt="${title}"
      />
      <div class="movie-info">
        <h3>${title}</h3> 
      </div>
      <div class="overview">
        <h3>Overview:</h3>
        ${overview}
      <div>`;
    main.appendChild(movieSection);
  });
};
/* -------------------------------------*/
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = search.value;
  if (searchTerm) {
    getData(searchApi + searchTerm);
  }
});
