<script lang="ts">
	import { derived, writable, type Writable } from 'svelte/store';
	import { GridStack, type GridItemHTMLElement } from 'gridstack';
	import { debounce, set } from 'lodash-es';
	import AnimateCanvas from '$lib/AnimateCanvas.svelte';
  import Tool from '$lib/tools/Tool.svelte';
	
	import type { ToolManifest } from '$lib/store/tools';
	import { defLayout, layout } from '$lib/store/layout';

  export let tools: Writable<ToolManifest[]>;

	interface ExtraInfo {
		h?: number;
	}

	const viewToolsInfo = writable<Record<string, ExtraInfo>>({});

	let {columns, margin, cellHeight} = defLayout;

	let grid: GridStack;
  let gridEl: HTMLElement;

	const toolElems: Record<string, GridItemHTMLElement> = {};

	layout.subscribe(async val => {
		if (columns === val.columns) return;
		grid?.column(columns = val.columns);
		grid?.compact();
	});

	function initGrid() {
		grid = GridStack.init({
			disableOneColumnMode: true,
			column: columns,
			cellHeight,
			margin,
			disableResize: true,
		}, gridEl);
	}
	const afterToolUpdate = debounce(initGrid, 100);

	function toggleToolSize(tool: ToolManifest) {
		return () => {
			const el = toolElems[tool.id];
			const sizes = tool.cardSizes ?? [1];

			let { h = sizes[0] } = el.gridstackNode!;

			h = sizes[sizes.indexOf(h) + 1] ?? sizes[0];
			viewToolsInfo.set(set($viewToolsInfo, `${tool.id}.h`, h));

			grid.update(el, { h });
		};
	}

</script>


<main bind:this={gridEl}>
	<div class="grid-stack-item" gs-w="2" gs-min-w="2" gs-locked="true" gs-no-resize="true" gs-no-move="true">
		<section class="grid-stack-item-content">
			<AnimateCanvas id="app-header"/>
		</section>
	</div>
  {#each $tools as tool}
    {#if tool.id !== 'app-header'}
      <div bind:this={toolElems[tool.id]} class="grid-stack-item" gs-w="1">
        <Tool
					id={tool.id}
					h={$viewToolsInfo[tool.id]?.h || 1}
					on:afterUpdate={afterToolUpdate}
					on:rightClick={toggleToolSize(tool)}
				></Tool>
      </div>
    {/if}
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