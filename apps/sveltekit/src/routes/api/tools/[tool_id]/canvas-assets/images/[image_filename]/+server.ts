import { loggers } from 'winston';
import { createRequire } from 'module';
import fs from 'node:fs';

const require = createRequire(import.meta.url);

let logger = loggers.get('server.tool.canvas.image');

export async function GET(req) {	
	const { params } = req;
	const { tool_id, image_filename } = params;

	logger = logger.child({
		...logger.defaultMeta,
		domain: `server.tool_${tool_id}.canvas.image_${image_filename.replaceAll('.', '').replaceAll('_', '')}`,
	});

	const image_path = `@kit-tools/${tool_id}/canvas-assets/images/${image_filename}`;
	let resolvedPath: string;

	logger.info('GET', { params, image_path });	

	let response: Response;

	try {
		resolvedPath = require.resolve(image_path);
		response = new Response(fs.createReadStream(resolvedPath));
	} catch(err) {
		logger.error('cannot resolve the file path', {});
		response = new Response(JSON.stringify({
			message: `'${tool_id}' is not installed`
		}));
	}

	return response;
}
