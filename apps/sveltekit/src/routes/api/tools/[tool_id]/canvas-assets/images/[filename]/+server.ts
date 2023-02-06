import { loggers } from 'winston';
import { createRequire } from 'module';
import fs from 'node:fs';

const require = createRequire(import.meta.url);

const lg = loggers.get('server.tools.canvas');

export async function GET(req) {	
	const { params } = req;
	const { tool_id, filename } = params;

	const requiringFilePath = `@kit-tools/${tool_id}/canvas-assets/images/${filename}`;
	let resolvedPath: string;

	lg.info('GET', { params, requiringFilePath });	

	let response: Response;

	try {
		resolvedPath = require.resolve(requiringFilePath);
		response = new Response(fs.createReadStream(resolvedPath));
	} catch(err) {
		lg.error('cannot resolve the file path', {});
		response = new Response(JSON.stringify({
			message: `'${tool_id}' is not installed`
		}));
	}

	return response;
}
