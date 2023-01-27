<script lang="ts">
	import { find } from 'lodash';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
  import { tools as toolsStore } from '$lib/store/tools';

  export let id: string;
  export let visible = true;
  
  const g: GlobalAnimateVars = {};

  interface GlobalAnimateVars {
    anim_container?: HTMLDivElement;
    canvas?: HTMLCanvasElement;
    dom_overlay_container?: HTMLElement;
  }

  const port = 5173;
  const baseUrl = `http://localhost:${port}`;

  async function launchChrome() {
    const response = await fetch(`${baseUrl}/api/tools/chrome`, {
      method: 'GET',
      headers: { 'content-type': 'application/json' }
    });

    const res = await response.json();

    console.log({res});
  }

  async function switchLang() {
    const response = await fetch(`${baseUrl}/api/switchLang`, {
      method: 'GET',
      headers: { 'content-type': 'application/json' }
    });

    const res = await response.json();

    console.log({res});
  }

  function doNothing() {
    console.log('No action');
  }

  let onClick = doNothing;

  async function getCanvas(id: string) {
    const response = await fetch(`${baseUrl}/api/tools/${id}/canvas`, {
      method: 'GET',
      headers: { 'content-type': 'text/plain' }
    });

    const js = await response.text();
    return await import('data:text/javascript;charset=utf-8,' + encodeURIComponent(js));
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

<div bind:this={g.anim_container} on:click={onClick} class:visible={visible}>
  <canvas bind:this={g.canvas} class="{id}" width="160" height="90"></canvas>
  <section bind:this={g.dom_overlay_container}></section>
</div>

<style>
  div {
    width: 160px;
    height: 90px;
    position: absolute;
    opacity: 0;
    transition: 0.2s;
  }
  .visible {
    position: relative;
    opacity: 1; 
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
