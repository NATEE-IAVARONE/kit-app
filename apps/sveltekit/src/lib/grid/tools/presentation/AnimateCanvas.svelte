<script lang="ts">
	import { browser } from '$app/environment';
	import type { ToolManifest } from '$lib/grid/tools/tools.model';
  import type { GlobalAnimateVars } from './AnimateCanvas.model';

  export let toolManifest: ToolManifest;
  
  const g: GlobalAnimateVars = {};

  browser && loadCanvas();
  
  async function loadCanvas() {
    const { createjs } = await import('$lib/createjs');

    const { setDeps, main, init } = await import(/* @vite-ignore */`/api/tools/${toolManifest.id}/canvas.js`);

    setDeps({ createjs, g });
    main(createjs, g);
    init(createjs);
  }
</script>

<div bind:this={g.anim_container}>
  <canvas bind:this={g.canvas} class="{toolManifest.id}" width="160" height="90"></canvas>
  <section bind:this={g.dom_overlay_container}></section>
</div>

<style>
  div {
    flex-shrink: 0;
  }
  canvas:not(.app-header) {
    position: absolute;
    display: block;
    background-color: var(--surface);
  }
  section {
    pointer-events: none;
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 0;
    display: block;
  }
</style>
