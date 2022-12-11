// DevMode increases the verbosity
const dev = true;

const args = process.argv.splice(2);

/* ---- Configurations ---- */

const { mergeAppDefaults, resolvePlaceholders, removeHelperProperties } = require('./src/conf');

const combinationPath = './combinations.json';
const Path = require('node:path');
const fs = require('node:fs');

let conf = require(combinationPath);
mergeAppDefaults(conf);
conf = resolvePlaceholders(conf, Path.dirname(Path.resolve(combinationPath)));
conf = removeHelperProperties(conf);
dev && console.log(JSON.stringify(conf, null, 2));

/* ---- App IDs ---- */

const allAppIDs = () => Object.keys(conf.apps || {});

const appIDs = args.includes('all')
  ? allAppIDs()
  : args;

dev && console.log({ appIDs });

/* ---- Apps ---- */

const pick = require('lodash/pick');
const apps = Object.values(pick(conf.apps, appIDs));
dev && console.log({apps});

/* ---- Resources ---- */

const mergedDirs = apps.flatMap(app =>
  Object.values(app.shells)
  .map(({output: {dirname, name}}) => Path.join(dirname, name))
);
dev && console.log({mergedDirs});

const mkdirp = require('mkdirp');
mergedDirs.map(dir => Path.join(dir, 'resources'))
.forEach(mkdirp.sync);

const { copyAppResources } = require('./src/resource');

apps.forEach(copyAppResources);
