import { writable, derived, get } from 'svelte/store';
import { without } from 'lodash-es';
import { filter } from 'lodash/fp';
import { fetchJSON } from '../net/fetch';
import type { ToolManifest } from './tools.model';

export const tools = writable<ToolManifest[]>([]);
export const headerToolManifests = derived(tools, filter<ToolManifest>({id: 'app-header'}));
export const lovedToolManifests = derived(tools, filter<ToolManifest>({id: 'loc-assoc'}));
export const otherToolManifests = derived(
  [tools, headerToolManifests, lovedToolManifests],
  ([_tools, _header, _loved]) => without(_tools, ..._header, ..._loved)
);

export async function getTools() {
  const res = await fetchJSON('api/tools');

  tools.set(res.modules);
}