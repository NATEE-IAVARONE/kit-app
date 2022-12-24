const Path = require('node:path');
const fs = require('node:fs');

function copyAppResources(app) {
  for (const shellID in app.shells) {
    const shell = app.shells[shellID];
    const {output} = shell;
    const resFullPath = Path.join(output.dirname, output.name, 'resources');

    for (const resID in shell.resources) {
      const {dirname, name, resourceID} = shell.resources[resID];
      const srcFullPath = Path.join(dirname, name);
      const destFullPath = Path.join(resFullPath, resourceID);
      console.log({ srcFullPath, destFullPath });
      fs.cpSync(srcFullPath, destFullPath, { recursive: true });
    }
  }
}

module.exports = {
  copyAppResources
};
