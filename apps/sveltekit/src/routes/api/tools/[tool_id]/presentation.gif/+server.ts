import { loggers } from 'winston';
import { createRequire } from 'module';
import fs from 'node:fs';

const require = createRequire(import.meta.url);

const lg = loggers.get('server.tool.canvas');

export async function GET(req) {
	const { params } = req;
	const { tool_id } = params;

	const requiringFilePath = `@kit-tools/${tool_id}/presentation.gif`;
	let resolvedPath: string;

	lg.info('GET', { params, requiringFilePath });

	let response: Response;

	try {
		resolvedPath = require.resolve(requiringFilePath);
		response = new Response(fs.createReadStream(resolvedPath));
		response.headers.set('Content-Type', 'image/gif');
	} catch(error) {
		lg.error('cannot resolve the file path', {error});
		response = new Response(JSON.stringify({
			message: `'${tool_id}' is not installed`
		}));
	}

	return response;
}
