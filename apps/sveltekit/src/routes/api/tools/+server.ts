import { readdirSync } from 'node:fs';
import { createRequire } from 'module';
import { omit } from 'lodash-es';

const require = createRequire(import.meta.url);

const getDirectories = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

export async function GET(req) {

	const appHeaderIndexJsPath = require.resolve('@kit-tools/app-header');
	const toolsBasePath = appHeaderIndexJsPath.substring(0, appHeaderIndexJsPath.indexOf('app-header'));
	const modNames: string[] = getDirectories(toolsBasePath);

	// var { stdout: locStdout } = spawnSync('npm', ['ls', '--depth=0', '-j'], { encoding : 'utf8' });
	// var { stdout: gloStdout } = spawnSync('npm', ['ls', '--depth=0', '-j', '-g'], { encoding : 'utf8' });

	// console.log({ locStdout });
	// console.log({ gloStdout });
	
	// const { dependencies: locDeps } = JSON.parse(locStdout);
	// const { dependencies: gloDeps } = JSON.parse(gloStdout);
	// const localMods = Object.keys(locDeps);
	// const globalMods = Object.keys(gloDeps);
	// const modNames = [...localMods, ...globalMods].filter(m => m.startsWith('@kit-tools/'));

	const propsToOmit = ['license', 'scripts', 'main'];
	const modules = modNames
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

	const res = { modules };
	const response = new Response(JSON.stringify(res));

	return response;
}
