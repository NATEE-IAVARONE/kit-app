import { loggers } from 'winston';
import { createRequire } from 'module';
import fs from 'node:fs';
const require = createRequire(import.meta.url);
const logger = loggers.get('server.tools.form');


export async function GET(req) {	
	const { params } = req;
	const { tool_id } = params;
	
	const packageName = `@kit-tools/${tool_id}/form`;
	let pathToModule: string;

	try {
		pathToModule = require.resolve(packageName);
	} catch(err) {
		logger.error('resolve', { err, packageName });

		return new Response('export const schema = {"components":[]}');
	}

	logger.info('createReadStream', { pathToModule });

	return new Response(fs.createReadStream(pathToModule));
}
