import { loggers } from 'winston';
import { createRequire } from 'module';
import fs from 'node:fs';
const require = createRequire(import.meta.url);
let logger = loggers.get('server.tool.form');


export async function GET(req) {	
	const { params } = req;
	const { tool_id } = params;

	logger = logger.child({
		...logger.defaultMeta,
		domain: `server.tool_${tool_id}.form`,
	});
	
	const packageName = `@kit-tools/${tool_id}/form`;
	let form_schema_path: string;

	let response: Response;

	try {
		form_schema_path = require.resolve(packageName);
	} catch(err) {
		logger.error('resolve', { err, packageName });

		return new Response('export const schema = {"components":[]}');
	}

	logger.info('createReadStream', { form_schema_path });

	response = new Response(fs.createReadStream(form_schema_path));
	response.headers.set('Content-Type', 'application/javascript');

	return response;
}
