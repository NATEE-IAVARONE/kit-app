import { NodeModulesManager } from '$lib/modules/nodeModules.server';
import type { PageServerLoad } from './$types';

const moduleManager = new NodeModulesManager();

export const load = (async ({ params }) => {
  const toolManifests = await moduleManager.getManifests();

  return {
    toolManifests,
  };
}) satisfies PageServerLoad;
