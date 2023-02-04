<script lang="ts">
	import { onMount } from 'svelte';

  export const ssr = false;

  export let id: string;
  export let visible = false;

  let container: HTMLDivElement;

  const port = 5173;
  const baseUrl = `http://localhost:${port}`;

  async function getForm(id: string) {
    const response = await fetch(`${baseUrl}/api/tools/${id}/form`, {
      method: 'GET',
      headers: { 'content-type': 'text/plain' }
    });

    const js = await response.text();
    
    return await import(/* @vite-ignore */'data:text/javascript;charset=utf-8,' + encodeURIComponent(js));
  }

  onMount(async () => {
    const { Formio } = await import(/* @vite-ignore */'formiojs');
    const { schema } = await getForm(id);

    Formio.createForm(container, schema());
  });

</script>


<div
  bind:this={container}
  class:visible={visible}
></div>


<style>
  div {
    /* position: absolute; */
    opacity: 0;
    transition: 0.2s;
  }
  .visible {
    /* position: relative; */
    opacity: 1; 
  }
</style>
