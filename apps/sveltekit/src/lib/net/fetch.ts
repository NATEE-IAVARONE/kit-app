import { writable, derived, get } from 'svelte/store';
import { serverAddress } from '../net/endpoint.store';

export async function fetchJSON<T = any>(endpoint: string): Promise<T> {
  const response = await fetch(`${get(serverAddress)}/${endpoint}`, {
    method: 'GET',
    headers: { 'content-type': 'application/json' }
  });

  const res = await response.json();

  return res;
}