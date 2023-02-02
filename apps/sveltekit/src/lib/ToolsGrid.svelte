<script lang="ts">
	import { onMount } from 'svelte';
	import { GridStack } from 'gridstack';
	import AnimateCanvas from '$lib/AnimateCanvas.svelte';
  import Tool from '$lib/tools/Tool.svelte';

	import type { ToolManifest } from './store/tools';
	import type { Writable } from 'svelte/store';
	import { debounce } from 'lodash';

  export let tools: Writable<ToolManifest[]>;

  const column = 2;
  const margin = 4;
	const cellHeight = 106 + margin * 2;
	let grid: GridStack;
  let gridEl: HTMLElement;
	
	function initGrid() {
		grid = GridStack.init({
			disableOneColumnMode: true,
			column,
			cellHeight,
			margin,
		}, gridEl);

		console.log('grid initiated');
	}

	const afterToolUpdate = debounce(initGrid, 100);
</script>


<main bind:this={gridEl}>
	<div class="grid-stack-item" gs-w="2" gs-locked="true" gs-no-resize="true" gs-no-move="true">
		<section class="grid-stack-item-content">
			<AnimateCanvas id="app-header"/>
		</section>
	</div>
  {#each $tools as tool}
    {#if tool.id !== 'app-header'}
      <div class="grid-stack-item">
        <Tool id={tool.id} on:afterUpdate={afterToolUpdate}></Tool>
      </div>
    {/if}
  {/each}
  {#each Array(1) as _unused, _i}
    <div class="grid-stack-item">
      <Tool></Tool>
    </div>
  {/each}
</main>

<style lang="scss">
	main {
		position: absolute;
		left: 50%;
		transform: translate(-50%, 0);
		height: 100vh;
		text-align: center;
		margin: 0;
		
		&.fade {
			animation: fade 1s;
			animation-fill-mode: forwards;
		}
	}
	@keyframes fade {
		from { opacity: 0; }
		  to { opacity: 1; }
	}
</style>