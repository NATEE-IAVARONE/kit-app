import { loggers } from 'winston';
import { createRequire } from 'module';
import fs from 'node:fs';

const require = createRequire(import.meta.url);

const canvasLogger = loggers.get('server.tools.canvas');

export async function GET(req) {	
	const { params } = req;
	const { tool_id } = params;

	const requiringFilePath = `@kit-tools/${tool_id}/canvas`;
	let resolvedPath: string;

	canvasLogger.info('GET', { params, requiringFilePath });	

	let response: Response;

	try {
		resolvedPath = require.resolve(requiringFilePath);
		response = new Response(fs.createReadStream(resolvedPath));
	} catch(err) {
		canvasLogger.error('cannot resolve the file path', {});
		response = new Response(JSON.stringify({
			message: `'${tool_id}' is not installed`
		}));
	}

	return response;
}
