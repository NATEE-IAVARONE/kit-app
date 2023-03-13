<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import PresentationCanvas from '$lib/ui/presentation/PresentationCanvas.svelte';
  import FormRenderer from '$lib/tools/extra/FormRenderer.svelte';
	import ExtraFooter from '$lib/tools/extra/ExtraFooter.svelte';
	import type { ToolManifest } from '$lib/tools/tools.model';

  export let data: ToolManifest;
  export let h = 1;

  let extraFooter: ExtraFooter;

  let formSettings = {
    visible: true,
    isCreated: false,
  };

  let extra = {
    visible: true,
  };

  $: extra.visible = h > 1;
  $: formSettings.isCreated ||= extra.visible;
  
  async function runTool() {
    const port = 5173;
    const baseUrl = `http://localhost:${port}`;

    const response = await fetch(`${baseUrl}/api/tools/${data.id}`, {
      method: 'GET',
      headers: { 'content-type': 'application/json' }
    });

    const res = await response.json();

    console.log({res});
  }

  const dispatch = createEventDispatcher();

  const canvasConfig = {
    width: 160,
    height: 90,
  };

  const assetsBaseURL = `http://localhost:5173/api/tools/${data.id}`;
</script>






<!-- svelte-ignore a11y-click-events-have-key-events -->
<main
  on:dblclick={() => extra.visible || runTool()}
  on:contextmenu|preventDefault={() => dispatch('rightClick')}
>
  <PresentationCanvas
    type={data.presentation?.type}
    {assetsBaseURL}
    {canvasConfig}
  />
  <h3 class="mdc-typography--headline6">
    {data.title}
  </h3>
  <section id="extra" class:visible={extra.visible}>
    {#if formSettings.isCreated}
      <FormRenderer toolManifest={data} visible={extra.visible} footer={extraFooter}/>
    {/if}
    <ExtraFooter bind:this={extraFooter}></ExtraFooter>
  </section>
</main>






<style lang="scss">
  main {
    display: flex;
    flex-direction: column;
		cursor: pointer;
		background-color: var(--surface);
		border-radius: 4px;
		overflow: hidden;

    & > :not(#extra) {
      flex-shrink: 0;
    }
	}
  #extra {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    background-color: var(--subsurface);

    &:not(.visible) {
      display: none;
    }
  }
	.mdc-typography--headline6 {
		margin: 0;
	}
</style>
