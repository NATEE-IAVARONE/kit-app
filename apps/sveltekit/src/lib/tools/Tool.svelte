<script lang="ts">
  import { find, last } from 'lodash';
  import { derived } from 'svelte/store';
	import AnimateCanvas from '$lib/AnimateCanvas.svelte';
  import { tools as toolsStore } from '$lib/store/tools';
  import FormRenderer from './FormRenderer.svelte';
	import { afterUpdate, createEventDispatcher } from 'svelte';

  const EMPTY = 'empty';

  export let id = EMPTY;

  let span = 2;
  
  const emptyTool = {
    id: EMPTY,
    title: '----',
    cardSizes: [2]
  };

  const defToolProps = {
    cardSizes: [2, 4],
    onResize: (from: number, to: number) => {
      canvasSettings.visible = to === 2;
      formSettings.visible = to !== 2;

      if (!formSettings.isCreated && formSettings.visible) {
        formSettings.isCreated = true;
      }
    }
  }

  const tool = derived(toolsStore, $tools => {
    const t = find($tools, {id}) ?? emptyTool;

    span = t.cardSizes[0];
    
    return {
      ...defToolProps,
      ...t,
    };
  });

  interface Tool {
    id: string;
    title: string;
    cardSizes: number[];
    onResize?: (from: number, to: number) => void;
  }

  let canvasSettings = {
    visible: true,
  };

  let formSettings = {
    visible: true,
    isCreated: false,
  };

  function toggleSpan() {
    const cs = $tool.cardSizes;
    const from = cs.indexOf(span);
    const to = span === last(cs) ? 0 : from + 1;
    $tool.onResize?.(cs[from], span = cs[to]);
  }

  function onRightClick(e: Event) {
    toggleSpan();
    e.preventDefault();
  }

  const dispatch = createEventDispatcher();
  afterUpdate(() => dispatch('afterUpdate'));
</script>

<section on:contextmenu={onRightClick} class="grid-stack-item-content">
  <AnimateCanvas id="{id}" visible={canvasSettings.visible}/>
  {#if formSettings.isCreated}
    <FormRenderer id="{id}" visible={formSettings.visible}/>
  {/if}
  <h3 class="mdc-typography--headline6">
    {$tool.title}
  </h3>
</section>

<!-- <Cell span={span}>
  <Card on:contextmenu={onRightClick}>
    <Media class="card-media-16x9" aspectRatio="16x9">
      <MediaContent>
        <AnimateCanvas id="{id}" visible={canvasSettings.visible}/>
        {#if formSettings.isCreated}
          <FormRenderer id="{id}" visible={formSettings.visible}/>
        {/if}
      </MediaContent>
      <h3 class="mdc-typography--headline6">
        {$tool.title}
      </h3>
    </Media>
  </Card>
</Cell> -->

<style lang="scss">
	.mdc-typography--headline6 {
		margin: 0;
	}
  .grid-stack-item-content {
		cursor: pointer;
		background-color: #242424;
		border-radius: 4px;
		overflow: hidden;
	}
</style>
