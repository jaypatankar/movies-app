<script>
  import Header from "./Header.svelte";
  import "./styles.css";
  import { whoami } from "../utils/whoami";
  import { auth } from "../stores/auth";

  let isAuthenticated;
  
  auth.subscribe((data) => {
    isAuthenticated = data.isAuthenticated;
  })
</script>

<div class="app">
  {#if isAuthenticated}
    <div class="app-content">
      <Header />
      <main>
        <slot />
      </main>
      <footer>
        <p>
          Please share your reviews at <a
            href="mailto:jaypatankar2510@gmail.com">jaypatankar2510@gmail.com</a
          >
        </p>
      </footer>
    </div>
  {:else}
    <div class="overlay" />
    <slot />
    <footer>
      <p>
        Please share your reviews at <a href="mailto:jaypatankar2510@gmail.com"
          >jaypatankar2510@gmail.com</a
        >
      </p>
    </footer>
  {/if}
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  .app-content {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    max-width: 64rem;
    margin: 0 auto;
    box-sizing: border-box;
  }

  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px;
    z-index: 10;
  }

  @media (min-width: 480px) {
    footer {
      padding: 12px 0;
    }
  }
</style>
