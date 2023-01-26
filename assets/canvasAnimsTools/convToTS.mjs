import fs from 'node:fs';
import path from 'node:path';

import glob from 'glob';
import { exit } from 'node:process';

const canvasAnimDir = '../../apps/sveltekit/tools';
const srcPattern = path.join(canvasAnimDir, '*/canvas/*.js');
const srcFiles = glob.sync(srcPattern, {});
  
console.log({srcFiles});

const firstLine = `export const main = (createjs, g) =>`;

for (const srcFile of srcFiles) {

  const dirname = path.dirname(path.dirname(srcFile));
  const canvasName = path.basename(dirname);
  const distFile = path.join(dirname, 'canvas.js');

  console.log({dirname, canvasName, distFile});

  const fileData = fs.readFileSync(srcFile, {encoding:'utf8', flag:'r'});

  let newFileData = `export const setDeps = (deps) => {
    createjs = deps.createjs;
    ({ canvas, anim_container, dom_overlay_container } = deps.g);
  };\n\n`;
  
  const nl = '\n';
  const fileLines = fileData.split(nl);

  let nthLine = -1;
  const nthLinesToDelete = [];

  if (fileLines[0] !== firstLine) newFileData += firstLine + nl;

  // JS
  for (let fileLine of fileLines) {
    nthLine++;

    if (nthLinesToDelete.includes(nthLine)) continue;

    fileLine = fileLine.replace('src:"images/', `src:"canvasImages/${canvasName}/`);
    // fileLine = fileLine.replaceAll('stage.', 'g.stage.');

    newFileData += fileLine;
    if (fileLine.includes('// stage content:')) {
      nthLinesToDelete.push(nthLine + 1);
      newFileData += nl + '(lib.stageContent = function(mode,startPosition,loop,reversed) {';
    }

    newFileData += nl;
  }

  newFileData += '\n\n/************* HTML *************/\n\n';

  // HTML
  const htmlPath = `${dirname}/canvas/${canvasName}.html`;
  console.log({ htmlPath });
  const htmlFileData = fs.readFileSync(htmlPath, {encoding:'utf8', flag:'r'});
  const htmlFileLines = htmlFileData.split(nl);
  let inScriptTag = false;

  for (let fileLine of htmlFileLines) {
    if (inScriptTag) {
      if (fileLine.startsWith('</script>')) {
        inScriptTag = false;
        break;
      } else if (fileLine.startsWith('function init() {')) {
        newFileData += 'export const init = (createjs) => {' + nl;
      } else if (fileLine.includes('exportRoot = new lib.')) {
        newFileData += '  exportRoot = new lib.stageContent();' + nl;
      } else if (fileLine.includes('document.getElementById(')) {
        newFileData += nl;
      } else {
        fileLine = fileLine.replaceAll('for(i=0;', 'for(var i=0;');
        newFileData += fileLine + nl;
      }
    } else if (fileLine.startsWith('<script>')) inScriptTag = true;
  }


  console.log({distFile});

  fs.writeFileSync(distFile, newFileData);
  
  const srcImagesDir = path.join(dirname, './images');
  const destImagesDir = path.join(dirname, `../../../apps/sveltekit/static/canvasImages/${canvasName}`);
  
  console.log({destImagesDir});
  if (fs.existsSync(srcImagesDir)) {
    fs.mkdirSync(destImagesDir, { recursive: true } );
    fs.cpSync(srcImagesDir, destImagesDir, { recursive: true });
  }
}
