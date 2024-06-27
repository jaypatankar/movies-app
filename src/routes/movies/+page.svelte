<script>
  import { getMovies } from "../../apis/moviesApi";
  import { watchlist } from "../../stores/watchlist";
  import { onMount } from "svelte";
  import MovieCard from "../../components/MovieCard.svelte";
  import { whoami } from "../../utils/whoami";

  let movies = [];
  let query = "";
  let type = "";
  let watchlistArray = [];

  watchlist.subscribe((value) => {
    watchlistArray = value;
  });

  const searchMovies = async () => {
    let filteredMovies = await getMovies(`${query}`);
    if (type) {
      filteredMovies = filteredMovies.filter((movie) => movie.Type === type);
    }
    movies = filteredMovies.map((movie) => ({
      ...movie,
      added: watchlistArray.some((item) => item.imdbID === movie.imdbID),
    }));
  };

  const fetchLatestMovies = async () => {
    movies = await getMovies('Marvel');  // Marvel as default movie search
  };

  onMount(() => {
    whoami();
    fetchLatestMovies();
  });


</script>

<h1>What would you like to watch today</h1>
<form
  class="search-form flex items-center mb-[20px]"
  on:submit|preventDefault={searchMovies}
>
  <div class="search-container flex items-center relative">
    <input
      type="text"
      bind:value={query}
      placeholder="Search for movies"
      class="search-input w-[300px] py-[10px] px-[15px] text-base rounded-l-md outline-0 text-white bg-[#333]"
      on:keydown={(event) => {
        if (event.key === "Enter") {
          searchMovies();
        }
      }}
    />
    <button
      type="submit"
      class="search-button border-0 p-[10px] rounded-r-md cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="#fff"
      >
        <path fill="none" d="M0 0h24v24H0V0z"></path>
        <path
          d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
        ></path>
      </svg>
    </button>
  </div>

  <select
    bind:value={type}
    class="search-select ml-3 px-1 py-3 font-base border border-[#555] rounded-md outline-0 text-white bg-[#333]"
  >
    <option value="">All Types</option>
    <option value="movie">Movie</option>
    <option value="series">Series</option>
  </select>
</form>

<ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 list-none p-0">
  {#each movies as movie}
    <MovieCard {movie} on:update={searchMovies} />
  {/each}
</ul>

<style>
  .search-button {
    background-color: var(--color-theme-1);
  }
</style>
