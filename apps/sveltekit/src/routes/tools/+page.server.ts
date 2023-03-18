import { kitServer } from '$lib/kitServer';
import type { PageServerLoad } from './$types';


export const load = (async ({ params }) => {
  const manifests = await kitServer.modules.getManifests();

  return {
    manifests,
  };
}) satisfies PageServerLoad;
