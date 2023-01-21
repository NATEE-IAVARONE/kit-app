<script lang="ts">
	import Card, { Media, MediaContent } from '@smui/card';
	import { Cell } from '@smui/layout-grid';
	import AnimateCanvas from '$lib/AnimateCanvas.svelte';

  const guiData = {
    title: 'ENG ↔ ITA'
  };

  const defSpan = 2;
  const extSpan = 4;
  let span = defSpan;
  let isDefSpan = span === defSpan;

  function onCardClick() {
    toggleSpan();
  }

  function toggleSpan(to?: number) {
    span = to ?? isDefSpan ? extSpan : defSpan;
    isDefSpan = span === defSpan;
  }

  function onRightClick(e: Event) {
    toggleSpan();
    e.preventDefault();
  }
</script>

<Cell span={span}>
  <Card on:click={onCardClick} on:contextmenu={onRightClick}>
    <Media class="card-media-16x9" aspectRatio="16x9">
      <MediaContent>
        {#if isDefSpan}
          <AnimateCanvas name="langSwitch"/>
        {/if}
      </MediaContent>
      <h3 class="mdc-typography--headline6">
        {guiData.title}
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
