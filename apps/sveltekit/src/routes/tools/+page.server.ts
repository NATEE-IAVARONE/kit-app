import { readdirSync } from 'node:fs';
import { createRequire } from 'module';
import { omit } from 'lodash-es';
import type { PageServerLoad } from './$types';

const getDirectories = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
    
const require = createRequire(import.meta.url);

export const load = (async ({ params }) => {
  const appHeaderIndexJsPath = require.resolve('@kit-tools/app-header');
	const toolsBasePath = appHeaderIndexJsPath.substring(0, appHeaderIndexJsPath.indexOf('app-header'));
	const modNames: string[] = getDirectories(toolsBasePath);

	const propsToOmit = ['license', 'scripts', 'main'];
	const toolManifests = modNames
		.map(modName => {
			let result: object | null = null;

			try {
				result = omit(require(`@kit-tools/${modName}/package.json`), propsToOmit);
			} catch(err) {
				console.error(err);
			}
			
			return result;
		})
		.filter(Boolean);

  return {
    toolManifests,
  };
}) satisfies PageServerLoad;
