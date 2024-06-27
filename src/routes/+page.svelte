<script>
  import { onMount } from "svelte";
  import MoviesComponent from "./movies/+page.svelte";
  import { whoami } from "../utils/whoami";
  onMount(() => {
    whoami();
  });
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Flix movies" />
</svelte:head>

<section>
  <MoviesComponent />
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 0.6;
  }
</style>
