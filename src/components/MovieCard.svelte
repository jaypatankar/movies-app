<script>
    import { watchlist } from "../stores/watchlist";
    import { createEventDispatcher } from "svelte";
    import MovieModal from "./MovieModal.svelte";
  
    export let movie;
    export let action = "add"; // Can be "add" or "remove"
    
    let showModal = false;
    const dispatch = createEventDispatcher();
  
    const handleWatchlistAction = () => {
      if (action === "add") {
        watchlist.update((list) => [...list, movie]);
        movie.added = true;
      } else if (action === "remove") {
        watchlist.update((list) => list.filter((m) => m.imdbID !== movie.imdbID));
      }
      dispatch("update", { movie });
    };
  
    const toggleModal = () => {
      showModal = !showModal;
    };
  </script>
  
  <div class="shadow-md rounded-md overflow-hidden mb-3">
    <div class="relative">
      <img
        src={movie.Poster}
        alt={movie.Title}
        class="w-full h-48 object-cover"
      />
      <div
        class="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 bg-black bg-opacity-50 hover:opacity-100"
      >
        <button
          on:click={handleWatchlistAction}
          class="px-4 py-2 bg-red-500 text-white rounded-md transition duration-300 ease-in-out hover:bg-opacity-80"
        >
          {#if action === "add"}
            {#if movie.added}
              Added
            {:else}
              Add to Watchlist
            {/if}
          {:else if action === "remove"}
            Remove
          {/if}
        </button>
      </div>
    </div>
    <div class="movie-link p-0 cursor-pointer" on:click={toggleModal}>
      <div class="p-4 rounded-b-md movie-info">
        <h2 class="text-lg font-semibold truncate">{movie.Title}</h2>
        <p class="text-gray-500">{movie.Year}</p>
      </div>
    </div>
  </div>
  
  {#if showModal}
    <MovieModal {movie} on:close={toggleModal} />
  {/if}
  
  <style>
    .movie-info {
      background-color: var(--color-bg-3);
    }
  
    .movie-link {
      color: var(--color-text);
      text-decoration: none;
    }
  </style>
  