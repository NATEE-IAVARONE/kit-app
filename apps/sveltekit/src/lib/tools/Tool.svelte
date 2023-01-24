<script lang="ts">
  import { find, last } from 'lodash';
	import Card, { Media, MediaContent } from '@smui/card';
	import { Cell } from '@smui/layout-grid';
	import AnimateCanvas from '$lib/AnimateCanvas.svelte';

  const EMPTY = 'empty';

  export let id = EMPTY;

  const tools: Partial<Tool>[] = [
    {
      id: EMPTY,
      title: '----',
      cardSizes: [2]
    },
    {
      id: 'langSwitch',
      title: 'ENG ↔ ITA',
    },
    {
      id: 'locAssoc',
      title: 'TestIDs → Locations',
      cardSizes: [2, 4, 6],
    },
    {
      id: 'chrome',
      title: 'Chrome',
    }
  ];

  const defToolProps = {
    cardSizes: [2, 4],
    onResize: (from: number, to: number) => {
      canvasSettings.visible = to === 2;
    }
  }

  interface Tool {
    id: string;
    title: string;
    cardSizes: number[];
    onResize: (from: number, to: number) => void;
  }

  const tool = {
    ...defToolProps,
    ...find(tools, {id}),
  } as Tool;
  let span: number;
  let canvasSettings = {
    visible: true,
  };

  toggleSpan();

  function toggleSpan() {
    const cs = tool.cardSizes;
    const from = cs.indexOf(span);
    const to = span === last(cs) ? 0 : from + 1;
    tool.onResize?.(cs[from], span = cs[to]);
  }

  function onRightClick(e: Event) {
    toggleSpan();
    e.preventDefault();
  }
</script>

<Cell span={span}>
  <Card on:contextmenu={onRightClick}>
    <Media class="card-media-16x9" aspectRatio="16x9">
      <MediaContent>
        {#if canvasSettings.visible}
          <AnimateCanvas id="{id}"/>
        {/if}
      </MediaContent>
      <h3 class="mdc-typography--headline6">
        {tool.title}
      </h3>
    </Media>
  </Card>
</Cell>

<style lang="scss">
	.mdc-typography--headline6 {
		margin: 0;
	}
	.mdc-card {
		cursor: pointer;
	}
</style>
