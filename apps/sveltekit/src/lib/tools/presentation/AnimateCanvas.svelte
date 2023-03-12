<script lang="ts">
	import type { ToolManifest } from '$lib/tools/tools.model';
  import AbobeAnimate from './canvasController/AbobeAnimate.svelte';
  import Gifler from './canvasController/Gifler.svelte';

  export let toolManifest: ToolManifest;

  const isDynamic = !!toolManifest.presentation?.animation?.dynamic;

  const getSrc = () => `http://localhost:5173/api/tools/${toolManifest.id}/${isDynamic ? 'canvas.js' : 'presentation.gif'}`;
  let src = getSrc();

  function restartAnimation() {
    src = '';
    setTimeout(() => src = getSrc());
  }
</script>






{#if isDynamic}
  <AbobeAnimate {src}>
    <canvas
      width="160"
      height="90"
    ></canvas>
  </AbobeAnimate>
{:else}
  <Gifler {src}>
    <canvas
      width="160"
      height="90"
    ></canvas>
  </Gifler>
  <!-- <div on:mouseenter={restartAnimation}>
    <img {src} alt="presentation">
  </div> -->
{/if}






<style>
  div {
    height: var(--grid-cell-height);
  }
  img {
    pointer-events: none;
  }
</style>