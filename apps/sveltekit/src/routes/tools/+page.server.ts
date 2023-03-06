import { NodeModulesManager } from '$lib/modules/nodeModules.server';
import type { PageServerLoad } from './$types';

const moduleManager = new NodeModulesManager();

export const load = (async ({ params }) => {
  const manifests = await moduleManager.getManifests();

  return {
    manifests,
  };
}) satisfies PageServerLoad;
