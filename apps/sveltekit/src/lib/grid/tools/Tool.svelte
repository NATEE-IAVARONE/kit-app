<script lang="ts">
	import { afterUpdate, createEventDispatcher } from 'svelte';
	import AnimateCanvas from '$lib/grid/tools/presentation/AnimateCanvas.svelte';
  import FormRenderer from '$lib/grid/tools/extra/FormRenderer.svelte';
	import ExtraFooter from '$lib/grid/tools/extra/ExtraFooter.svelte';
	import type { ToolManifest } from '$lib/grid/tools/tools.model';

  export let manifest: ToolManifest;
  export let h = 1;

  let extraFooter: ExtraFooter;

  $: extra.visible = h > 1;
  $: formSettings.isCreated ||= extra.visible;

  const defToolProps = {
    cardSizes: [1, 3],
  }

  let formSettings = {
    visible: true,
    isCreated: false,
  };

  let extra = {
    visible: true,
  };

  
  async function runTool() {
    const port = 5173;
    const baseUrl = `http://localhost:${port}`;

    const response = await fetch(`${baseUrl}/api/tools/${manifest.id}`, {
      method: 'GET',
      headers: { 'content-type': 'application/json' }
    });

    const res = await response.json();

    console.log({res});
  }

  function onRightClick(e: Event) {
    e.preventDefault();
    dispatch('rightClick');
  }

  const dispatch = createEventDispatcher();
  afterUpdate(() => dispatch('afterUpdate'));
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<section
  class="grid-stack-item-content"
  on:click={() => extra.visible || runTool()}
  on:contextmenu={onRightClick}
>
  <AnimateCanvas toolManifest={manifest}/>
  <h3 class="mdc-typography--headline6">
    {manifest.title}
  </h3>
  <section id="extra" class:visible={extra.visible}>
    {#if formSettings.isCreated}
      <FormRenderer toolManifest={manifest} visible={extra.visible} footer={extraFooter}/>
    {/if}
    <ExtraFooter bind:this={extraFooter}></ExtraFooter>
  </section>
</section>

<style lang="scss">
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
  .grid-stack-item-content {
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
</style>
