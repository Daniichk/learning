# Opening Lab

An English-language chess opening trainer with full games against Stockfish.

## Run locally

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. `npm install` prepares the single-threaded Stockfish WebAssembly engine in `public/engine`.

## Features

- Drill 18 opening lines as White or Black.
- Play complete games against Stockfish, with a selectable 400–2400 Elo target and either color.
- Earn a trophy for each win. Game results and the trophy cabinet are saved in the browser's local storage.
- Build a production version with `npm run build`.

The displayed rating is a target strength. Stockfish's native Elo limit starts at 1320; lower targets combine that limit with a reduced engine skill level.