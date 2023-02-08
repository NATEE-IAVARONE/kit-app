<script lang="ts">
	import { find } from 'lodash-es';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
  import { tools as toolsStore } from '$lib/store/tools';

  export let id: string;
  
  const g: GlobalAnimateVars = {};

  interface GlobalAnimateVars {
    anim_container?: HTMLDivElement;
    canvas?: HTMLCanvasElement;
    dom_overlay_container?: HTMLElement;
  }

  const port = 5173;
  const baseUrl = `http://localhost:${port}`;

  // async function launchChrome() {
  //   const response = await fetch(`${baseUrl}/api/tools/chrome`, {
  //     method: 'GET',
  //     headers: { 'content-type': 'application/json' }
  //   });

  //   const res = await response.json();

  //   console.log({res});
  // }

  // async function switchLang() {
  //   const response = await fetch(`${baseUrl}/api/switchLang`, {
  //     method: 'GET',
  //     headers: { 'content-type': 'application/json' }
  //   });

  //   const res = await response.json();

  //   console.log({res});
  // }

  async function getCanvas(id: string) {
    return await import(/* @vite-ignore */`/api/tools/${id}/canvas.js`);
  }

  onMount(async () => {
		if (!browser) return;
		
		const {createjs} = await import('$lib/createjs');

    toolsStore.subscribe(async tools => {
      const tool = find(tools, {id});
      
      if (!tool) return;

      const { setDeps, main, init } = await getCanvas(id);

      setDeps({ createjs, g });
      main(createjs, g);
		  init(createjs);
    });

	});
</script>

<div bind:this={g.anim_container}>
  <canvas bind:this={g.canvas} class="{id}" width="160" height="90"></canvas>
  <section bind:this={g.dom_overlay_container}></section>
</div>

<style>
  div {
    width: 160px;
    height: 90px;
    transition: 0.2s;
    flex-shrink: 0;
  }
  canvas:not(.app-header) {
    position: absolute;
    display: block;
    background-color: #282828;
  }
  section {
    pointer-events: none;
    overflow: hidden;
    width: 160px;
    height: 90px;
    position: absolute;
    left: 0;
    top: 0;
    display: block;
  }
</style>
