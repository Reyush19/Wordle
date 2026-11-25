# Wordle

A responsive five-letter word game built with React, Vite, and plain CSS. Find the hidden word in six guesses. Letter feedback follows Wordle rules, including duplicate-letter counts, and the on-screen keyboard keeps the strongest color earned by each letter.

## Run locally

```sh
npm install
npm run dev
```

## Checks

```sh
npm test
npm run lint
npm run build
```

## Deploy to GitHub Pages

The GitHub Actions workflow in `.github/workflows/deploy.yml` deploys the site when changes are pushed to `main`. In the repository's **Settings → Pages**, choose **GitHub Actions** as the build and deployment source. The published URL will appear in the workflow run's deployment environment.

## Project structure

- `src/data/words.js` — answer words and the accepted guess list
- `src/utils/` — framework-independent guess scoring and keyboard status
- `src/hooks/useWordle.js` — game state, input, and round reset
- `src/components/` — reusable board, row, tile, keyboard, and result modal
- `tests/` — focused tests for duplicate scoring and keyboard color priority

The component and game-state structure is informed by the teacher's reference article: [How Wordle Works: Building the Game with React](https://medium.com/@aaditya.dulal/how-wordle-works-building-the-game-with-react-13520be7eeaa).
