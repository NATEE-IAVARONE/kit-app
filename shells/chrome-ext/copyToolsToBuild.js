import { readdirSync, promises, mkdirSync, existsSync } from 'node:fs';
import Path from 'node:path';

const getDirectories = source =>
  readdirSync(source, { withFileTypes: true })
    .map(dirent => dirent.name);

const modToolsPath = './node_modules/@kit-tools';
const fileToCopy = ['canvas.js'];
const dirToCopy = ['canvas/images/'];
const toolPath = 'build/api/tools';

// for (let tool of getDirectories(modToolsPath)) {
//   const toolPath = `${modToolsPath}/${tool}/`;

//   Promise.all(
//     fileToCopy.map(file => promises.cp(`${toolPath}/${file}`))
//   )
// }

await Promise.all(
  getDirectories(modToolsPath).flatMap(tool => [
    ...fileToCopy.map(file => {
      const from = Path.resolve(`${modToolsPath}/${tool}/${file}`);
      const to = Path.resolve(`${toolPath}/${tool}/${file}`);
      const dir = Path.dirname(to);

      console.log({ dir, from, to });
      mkdirSync(dir, { recursive: true });

      return promises.cp(from, to);
    }),
    ...dirToCopy.map(dir => {
      const from = Path.resolve(`${modToolsPath}/${tool}/${dir}`);
      const to = Path.resolve(`${toolPath}/${tool}/${dir}`);
      
      if (!existsSync(from)) return;

      console.log({ from, to });

      return promises.cp(from, to, { recursive: true });
    })
  ])
);
