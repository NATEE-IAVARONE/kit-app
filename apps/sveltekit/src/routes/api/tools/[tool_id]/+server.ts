import { createRequire } from 'module';
import { loggers } from 'winston';

const require = createRequire(import.meta.url);

const logger = loggers.get('server.tools');

export async function GET(req) {	
	const { params } = req;
	const { tool_id } = params;
	
	const packageName = `@kit-tools/${tool_id}`;

	try {
		require.resolve(packageName);
	} catch(err) {
		const message = `'${tool_id}' is not installed`;

		logger.error(message, err);

		return new Response(JSON.stringify({ message }));
	}

	const requiredPath = `${packageName}/node.js`;
	const toolNodeScript = require(requiredPath);
	
	logger.info('require', { requiredPath });

	const { GET: nodeGET } = toolNodeScript;
	const res = nodeGET(req, { logger });

	return res;
}
