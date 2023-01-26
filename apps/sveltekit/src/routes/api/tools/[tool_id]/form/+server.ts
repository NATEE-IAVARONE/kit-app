import { createRequire } from 'module';
import fs from 'node:fs';
const require = createRequire(import.meta.url);

export async function GET(req) {	
	const { params } = req;
	const { tool_id } = params;
	
	const packageName = `@kit-tools/${tool_id}/form`;
	let pathToModule: string;

	try {
		pathToModule = require.resolve(packageName);
	} catch(err) {
		return new Response('export const schema = {"components":[]}');
	}

	return new Response(fs.createReadStream(pathToModule));
}
