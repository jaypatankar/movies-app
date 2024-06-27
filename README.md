# Movie Listing App

This is a SvelteKit-based web application for listing, searching, and managing a watchlist of movies using the OMDB API.

## Features
- Search for movies
- View movie details
- Add and remove movies to/from watchlist
- User login and signup
- Filter movies by type

## Setup
1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `.env` file with your OMDB API key: `VITE_OMDB_API_KEY=YOUR_API_KEY` AND OMDB API URL: `VITE_OMDB_API_URL=YOUR_API_URL`
4. Run the development server: `npm run dev`

## Usage
- Visit the home page to search and filter movies.
- Click on a movie to view its details.
- Use the watchlist page to manage your watchlist.
- Use the login/signup forms to create and access your account.

## Dependencies
- SvelteKit
- Axios

## License
MIT


## PROJECT TREE

```
movies-app
├─ README.md
├─ package-lock.json
├─ package.json
├─ postcss.config.cjs
├─ src
│  ├─ apis
│  │  └─ moviesApi.ts
│  ├─ app.d.ts
│  ├─ app.html
│  ├─ components
│  │  ├─ AuthLayout.svelte
│  │  ├─ Input.svelte
│  │  ├─ MovieCard.svelte
│  │  ├─ MovieModal.svelte
│  │  └─ WatchlistButton.svelte
│  ├─ lib
│  │  └─ images
│  │     ├─ github.svg
│  │     ├─ svelte-logo.svg
│  │     ├─ svelte-welcome.png
│  │     └─ svelte-welcome.webp
│  ├─ routes
│  │  ├─ +layout.svelte
│  │  ├─ +page.svelte
│  │  ├─ +page.ts
│  │  ├─ Header.svelte
│  │  ├─ auth
│  │  │  ├─ login
│  │  │  │  └─ +page.svelte
│  │  │  └─ signup
│  │  │     └─ +page.svelte
│  │  ├─ movies
│  │  │  └─ +page.svelte
│  │  ├─ styles.css
│  │  └─ watchlist
│  │     └─ +page.svelte
│  ├─ stores
│  │  ├─ auth.ts
│  │  ├─ user.ts
│  │  └─ watchlist.ts
│  └─ utils
│     ├─ constants.ts
│     ├─ db.ts
│     ├─ hashPassword.ts
│     └─ whoami.ts
├─ static
│  ├─ favicon.png
│  └─ robots.txt
├─ svelte.config.ts
├─ tailwind.config.js
├─ tsconfig.json
└─ vite.config.ts

```