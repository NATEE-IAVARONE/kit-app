import { NodeModulesManager } from '$lib/modules/nodeModules.server';

const moduleManager = new NodeModulesManager();

export async function GET(req) {
	const res = { toolManifests: await moduleManager.getManifests() };
	const response = new Response(JSON.stringify(res));

	return response;
}
