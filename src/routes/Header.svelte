<script>
  import { page } from "$app/stores";
  import logo from "$lib/images/svelte-logo.svg";
  import { logout } from "../stores/auth";

  const handleLogout = () => {
    logout();
  };
</script>

<header>
  <div class="github">
    <a href="https://kit.svelte.dev">
      <img src={logo} alt="SvelteKit" />
    </a>
  </div>

  <nav>
    <ul>
      <li
        aria-current={$page.url.pathname === "/" ? "page" : undefined}
        class={$page.url.pathname === "/"
          ? "text-[var(--color-theme-1)] font-black"
          : "text-[#FAFBFC]"}
      >
        <a href="/">Home</a>
      </li>
      <li
        aria-current={$page.url.pathname === "/watchlist" ? "page" : undefined}
        class={$page.url.pathname === "/watchlist"
          ? "text-[var(--color-theme-1)] font-black"
          : "text-[#FAFBFC]"}
      >
        <a href="/watchlist">WatchList</a>
      </li>
    </ul>
  </nav>

  <div class="head-right flex flex-row items-center gap-3">
    <div class="github">
      <a target="_blank" href="https://github.com/jaypatankar/movies-app">
        <img
          class="github-logo"
          src={`https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png`}
          alt="GitHub"
        />
      </a>
    </div>
    <p class="cursor-pointer hover:text-" on:click={handleLogout}>Logout</p>
  </div>
</header>

<style>
  header {
    display: flex;
    padding: 20px;
    justify-content: space-between;
    border-bottom: 1px solid var(--color-theme-1);
  }

  .head-right p:hover {
    color: var(--color-theme-1);
  }

  .github {
    width: 3em;
    height: 3em;
  }

  .github a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .github img {
    width: 2em;
    height: 2em;
    object-fit: contain;
  }

  nav {
    display: flex;
    justify-content: center;
    overflow: hidden;
  }

  ul {
    position: relative;
    padding: 0;
    margin: 0;
    height: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    background: var(--background);
    background-size: contain;
  }

  li {
    position: relative;
    height: 100%;
  }

  nav a {
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0 0.5rem;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    text-decoration: none;
    transition: color 0.2s linear;
    color: inherit;
  }

  a:hover {
    color: var(--color-theme-1);
  }

  .github-logo {
    border-radius: 50%;
  }

  .github-logo:hover {
    border: 2px solid var(--color-theme-1);
  }
</style>
