import { spawnSync } from 'node:child_process';
import { createRequire } from 'module';
import { omit } from 'lodash';

const require = createRequire(import.meta.url);

export async function GET(req) {
	var { stdout: locStdout } = spawnSync('npm', ['ls', '--depth=0', '-j'], { encoding : 'utf8' });
	var { stdout: gloStdout } = spawnSync('npm', ['ls', '--depth=0', '-j', '-g'], { encoding : 'utf8' });

	// console.log({ locStdout });
	// console.log({ gloStdout });
	
	const { dependencies: locDeps } = JSON.parse(locStdout);
	const { dependencies: gloDeps } = JSON.parse(gloStdout);
	const localMods = Object.keys(locDeps);
	const globalMods = Object.keys(gloDeps);
	const modNames = [...localMods, ...globalMods].filter(m => m.startsWith('@kit-tools/'));

	const propsToOmit = ['license', 'scripts', 'main'];
	const modules = modNames.map(modName => omit(require(`${modName}/package.json`), propsToOmit));

	const res = { modules };

	return new Response(JSON.stringify(res));
}
