import { writable } from 'svelte/store';

export interface ToolManifest {
  id: string;
  name: string;
  title: string;
  version: string;
  author: string;
  cardSizes?: number[];
}

export const tools = writable<ToolManifest[]>([]);

const port = 5173;
const baseUrl = `http://localhost:${port}`;

getTools();

async function getTools() {
  const response = await fetch(`${baseUrl}/api/tools`, {
    method: 'GET',
    headers: { 'content-type': 'application/json' }
  });

  const res = await response.json();

  tools.set(res.modules);
}