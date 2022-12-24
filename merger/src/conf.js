function mergeAppDefaults(conf) {
  const {apps} = conf;

  for (const appID in apps) {
    if (!apps.hasOwnProperty(appID)) continue;

    let app = apps[appID];
    const {shells} = app;

    apps[appID] = {
      appID,
      ...conf['__app-defaults'],
      ...app
    };

    for (const shellID in shells) {
      if (!shells.hasOwnProperty(shellID)) continue;

      let shell = shells[shellID];

      shells[shellID] = shell = {
        shellID,
        ...conf['__shell-defaults'],
        ...shell
      };
      
      const {resources} = shell;

      for (const resourceID in resources) {
        if (!resources.hasOwnProperty(resourceID)) continue;

        const res = resources[resourceID];
        res.resourceID = resourceID;
      }
    }
  }
}

function resolvePlaceholders(conf, confDirname) {
  const {apps} = conf;
  const mapValuesDeep = require('map-values-deep');
  const Handlebars = require('handlebars');
  const Path = require('node:path');

  const contextualKeys = ['shellID', 'resourceID'];
  const pathKeysToNormalize = ['dirname'];

  const context = { conf, confDirname };

  for (const appID in apps) {
    if (!apps.hasOwnProperty(appID)) continue;

    context.app = apps[appID];
    context.appID = appID;

    conf.apps[appID] = mapValuesDeep(
      context.app,
      (val, key) => {
        if (contextualKeys.includes(key)) context[key] = val;

        val = typeof val === 'string' && val.includes('{{')
          ? Handlebars.compile(val)(context)
          : val;
        
        if (pathKeysToNormalize.includes(key)) val = Path.normalize(val);

        return val;
      }
    );
  }

  return conf;
}

function removeHelperProperties(conf) {
  const omitBy = require('lodash/omitBy');

  return omitBy(conf, (val, key) => key.startsWith('__'));
}

module.exports = {
  mergeAppDefaults,
  resolvePlaceholders,
  removeHelperProperties
};
