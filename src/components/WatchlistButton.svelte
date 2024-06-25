<script>
    import { watchlist } from "../stores/watchlist";
  
    export let movie;
  
    const addToWatchlist = () => {
      watchlist.update((list) => [...list, movie]);
      movie.added = true;
    };
  </script>
  
  <button
    on:click={addToWatchlist}
    disabled={movie.added}
    class="px-4 py-2 bg-red-500 text-white rounded-md transition duration-300 ease-in-out hover:bg-opacity-80"
  >
    {#if movie.added}
      Added
    {:else}
      Add to Watchlist
    {/if}
  </button>
  