import fs from 'node:fs';
import path from 'node:path';

import glob from 'glob';

const canvasAnimDir = '../canvasAnims';
const srcPattern = path.join(canvasAnimDir, '*/*.js');

const distRelToSrc = '../../../apps/sveltekit/src/lib/canvas';



const srcFiles = glob.sync(srcPattern, {});
  
console.log({srcFiles});

const firstLine = `export const main = (createjs, AdobeAn, g) =>`;

for (const srcFile of srcFiles) {

  const dirname = path.dirname(srcFile);
  const canvasName = path.basename(dirname);
  const filename = path.basename(srcFile);
  const distDir = path.join(dirname, distRelToSrc);
  const distFile = path.join(distDir, filename);

  
  const fileData = fs.readFileSync(srcFile, {encoding:'utf8', flag:'r'});

  let newFileData = '';
  
  const nl = '\n';
  const fileLines = fileData.split(nl);

  let nthLine = -1;
  const nthLinesToDelete = [];

  if (fileLines[0] !== firstLine) newFileData += firstLine + nl;

  for (let fileLine of fileLines) {
    nthLine++;

    if (nthLinesToDelete.includes(nthLine)) continue;

    fileLine = fileLine.replace('src:"images/', `src:"canvasImages/${canvasName}/`);
    fileLine = fileLine.replaceAll('stage.', 'g.stage.');

    newFileData += fileLine;
    if (fileLine.includes('// stage content:')) {
      nthLinesToDelete.push(nthLine + 1);
      newFileData += nl + '(lib.stageContent = function(mode,startPosition,loop,reversed) {';
    }

    newFileData += nl;
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
