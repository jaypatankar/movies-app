<script>
    import { createEventDispatcher } from "svelte";
    import { watchlist } from "../stores/watchlist";
  
    export let movie;
    const dispatch = createEventDispatcher();
  
    const addToWatchlist = () => {
      watchlist.update((list) => [...list, movie]);
      movie.added = true;
    };
  
    const closeModal = () => {
      dispatch("close");
    };
  </script>
  
  <div class="overlay fixed inset-0 flex items-center justify-center z-[99999]" on:click={closeModal}>
    <div class="modal p-5 rounded-md w-full" on:click|stopPropagation>
      <img src={movie.Poster} alt={movie.Title} class="modal-poster object-cover w-full h-[400px] mb-5" />
      <h2 class="text-2xl mb-3">{movie.Title} ({movie.Year})</h2>
      <p class="px-2 py-1 bg-[#FFFFFF4E] text-sm w-fit rounded-md uppercase mb-3">{movie.Type}</p>
      <div class="w-full flex justify-end">
        <button
          on:click={addToWatchlist}
          disabled={movie.added}
          class="px-4 py-2 bg-red-500 text-white rounded-md transition duration-300 ease-in-out hover:bg-opacity-80 self-end"
        >
          {#if movie.added}
            Added
          {:else}
            Add to Watchlist
          {/if}
        </button>
      </div>
    </div>
  </div>
  
  <style>
    .overlay {
      background: rgba(0, 0, 0, 0.7);
    }
  
    .modal {
      padding: 20px;
      max-width: 500px;
      background-color: var(--color-bg-3);
    }
  </style>
  