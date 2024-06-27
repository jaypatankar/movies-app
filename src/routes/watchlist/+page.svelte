<script>
  import { watchlist } from "../../stores/watchlist";
  import MovieCard from "../../components/MovieCard.svelte";
  import { onMount } from "svelte";
  import { whoami } from "../../utils/whoami";
  
  onMount(() => {
    whoami("/watchlist");
  });
</script>

<h1 class="mb-5">Your Watchlist</h1>
<ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {#each $watchlist as movie}
    <MovieCard {movie} action="remove" on:update={() => {}} />
  {/each}
</ul>

<style>
  ul {
    list-style-type: none;
    padding: 0;
  }
</style>
