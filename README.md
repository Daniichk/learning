# Math Study and Opening Lab

The homepage offers a short arithmetic exercise. Choose **Open the learning studio** to visit the opening lessons and guided strategy practice.

An English-language chess opening trainer with full games against Stockfish.

## Run locally

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. `npm install` prepares the single-threaded Stockfish WebAssembly engine in `public/engine`.

## Features

- Drill 18 opening lines as White or Black.
- Browse and select openings from the dedicated Openings tab; Train keeps the selected line on the board without the catalog taking over the home view.
- Play complete games against Stockfish, with a selectable 400–2400 Elo target and either color.
- Get a Stockfish move suggestion before each turn and review player moves after the game with Brilliant, Perfect, Best, Excellent, Good, Inaccuracy, Mistake, and Blunder labels.
- Earn trophies and unlock illustrated achievements for milestones and stronger opponents.
- Start at 400 Elo; rating changes after every win, draw, or loss based on opponent strength. The first 30 placement games use K=100 (a win over an equal-rated 400 Elo bot moves you to 450), then K=32.
- Open the standalone `profile.html` page to set a display name, upload a profile photo, choose a theme, and review rating, trophies, and achievements. Profile settings are saved in local storage.
- Build a production version with `npm run build`.

The displayed rating is a target strength. Stockfish's native Elo limit starts at 1320; lower targets combine that limit with a reduced engine skill level.

Chess pieces are locally served SVGs. Attribution and the source license are included in `public/pieces/ATTRIBUTION.txt` when prepared by the install script.

## Publish on GitHub Pages

The GitHub Actions workflow deploys the site whenever changes are pushed to `main`. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**. After pushing the workflow and site to `main`, the site will be available at <https://daniichk.github.io/learning/>.