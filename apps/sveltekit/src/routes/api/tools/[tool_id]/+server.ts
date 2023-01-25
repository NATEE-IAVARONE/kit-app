import { createRequire } from 'module';
const require = createRequire(import.meta.url);

export async function GET(req) {	
	const { params } = req;
	const { tool_id } = params;
	
	const packageName = `@kit-tools/${tool_id}`;

	try {
		require.resolve(packageName);
	} catch(err) {
		return new Response(JSON.stringify({
			message: `'${tool_id}' is not installed`
		}));
	}

	const tool = require(packageName);
	const toolNodeScript = require(`${packageName}/node.js`);

	console.log({ tool_id, tool, toolNodeScript });
	
	const { GET: nodeGET } = toolNodeScript;
	const res = nodeGET(req);

	return res;
}
