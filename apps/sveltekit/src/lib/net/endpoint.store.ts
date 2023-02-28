import { writable, derived } from 'svelte/store';
import { LOCALHOST_COMPONENTS } from './localhost.const';
import type { AddressComponents } from './endpoint.model';

export const buildAddress = (comps: AddressComponents) =>
  `${comps.protocol}://${comps.baseUrl}${comps.port ? ':' + comps.port : ''}`;

export const serverAddressComponents = writable(LOCALHOST_COMPONENTS);
export const serverAddress = derived(serverAddressComponents, buildAddress);
