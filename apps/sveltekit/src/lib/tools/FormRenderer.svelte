<script lang="ts">
	import { onMount } from 'svelte';

  export const ssr = false;

  export let id: string;
  export let visible = false;

  let container: HTMLDivElement;

  const port = 5173;
  const baseUrl = `http://localhost:${port}`;

  onMount(async () => {
    const { Formio } = await import(/* @vite-ignore */'formiojs');
    const { schema } = await import(/* @vite-ignore */`${baseUrl}/api/tools/${id}/form.js`);

    Formio.createForm(container, schema());
  });

</script>


<div
  id="container"
  bind:this={container}
  class:visible={visible}
></div>


<style lang="scss">
  #container {
    flex-grow: 1;
    opacity: 0;
    transition: 0.2s;

    &.visible {
      opacity: 1; 
    }

    :global(.formio-component-form) {
      margin: 8px;
    }
  }
</style>
