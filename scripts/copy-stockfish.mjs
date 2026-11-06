import { copyFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const packageRoot = join(projectRoot, 'node_modules', 'stockfish');
const source = join(packageRoot, 'bin');
const destination = join(projectRoot, 'public', 'engine');
const files = ['stockfish-19-lite-single.js', 'stockfish-19-lite-single.wasm'];

await mkdir(destination, { recursive: true });
await Promise.all(files.map((file) => copyFile(join(source, file), join(destination, file))));
await copyFile(join(packageRoot, 'Copying.txt'), join(destination, 'COPYING.txt'));
console.log('Prepared the Stockfish browser engine.');
