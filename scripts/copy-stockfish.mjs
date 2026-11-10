import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const packageRoot = join(projectRoot, 'node_modules', 'stockfish');
const source = join(packageRoot, 'bin');
const destination = join(projectRoot, 'public', 'engine');
const files = ['stockfish-19-lite-single.js', 'stockfish-19-lite-single.wasm'];
const pieceSource = join(projectRoot, 'node_modules', 'react-chess-pieces', 'dist');
const pieceDestination = join(projectRoot, 'public', 'pieces');
const pieceFiles = ['K-white.svg', 'Q-white.svg', 'R-white.svg', 'B-white.svg', 'N-white.svg', 'P-white.svg', 'k-black.svg', 'q-black.svg', 'r-black.svg', 'b-black.svg', 'n-black.svg', 'p-black.svg'];

await Promise.all([mkdir(destination, { recursive: true }), mkdir(pieceDestination, { recursive: true })]);
await Promise.all([
	...files.map((file) => copyFile(join(source, file), join(destination, file))),
	...pieceFiles.map(async (file) => {
		const svg = await readFile(join(pieceSource, file), 'utf8');
		const rootTag = svg.match(/<svg\b[^>]*>/)?.[0];
		if (!rootTag) throw new Error(`Invalid SVG chess piece: ${file}`);
		const standaloneSvg = /\bxmlns=/.test(rootTag) ? svg : svg.replace(rootTag, rootTag.replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"'));
		await writeFile(join(pieceDestination, file), standaloneSvg);
	})
]);
await copyFile(join(packageRoot, 'Copying.txt'), join(destination, 'COPYING.txt'));
await writeFile(join(pieceDestination, 'ATTRIBUTION.txt'), 'Chess piece SVGs are lightly adapted from Chess Pieces Sprite by Cburnett, via react-chess-pieces. The original sprite is licensed under CC BY-SA 3.0: https://creativecommons.org/licenses/by-sa/3.0/\n');
console.log('Prepared the Stockfish browser engine and chess piece SVGs.');
