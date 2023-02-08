<script lang="ts">
	import { afterUpdate, createEventDispatcher } from 'svelte';
  import { derived } from 'svelte/store';
  import { find } from 'lodash-es';
	import AnimateCanvas from '$lib/AnimateCanvas.svelte';
  import { tools as toolsStore } from '$lib/store/tools';
  import FormRenderer from './FormRenderer.svelte';

  export let id: string;
  export let h = 1;

  $: extra.visible = h > 1;
  $: formSettings.isCreated ||= extra.visible;

  const defToolProps = {
    cardSizes: [1, 3],
  }

  const tool = derived(
    toolsStore,
    ts => ({
      ...defToolProps,
      ...find(ts, {id}),
    })
  );

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

    const response = await fetch(`${baseUrl}/api/tools/${id}`, {
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

<section
  class="grid-stack-item-content"
  on:click={runTool}
  on:contextmenu={onRightClick}
>
  <AnimateCanvas id="{id}"/>
  <h3 class="mdc-typography--headline6">
    {$tool.title}
  </h3>
  <section id="extra" class:visible={extra.visible}>
    {#if formSettings.isCreated}
      <FormRenderer id="{id}" visible={extra.visible}/>
    {/if}
  </section>
</section>

<style lang="scss">
  #extra {
    flex-grow: 1;
    background-color: #1f1f1f;

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
		background-color: #242424;
		border-radius: 4px;
		overflow: hidden;

    & > :not(#extra) {
      flex-shrink: 0;
    }
	}
</style>
