<script lang="ts">
	import { writable, type Writable } from 'svelte/store';
	import { GridStack, type GridItemHTMLElement } from 'gridstack';
	import { debounce, set } from 'lodash-es';
	import AnimateCanvas from '$lib/grid/tools/presentation/AnimateCanvas.svelte';
  import Tool from '$lib/grid/tools/Tool.svelte';
	import { defLayout, layout } from '$lib/store/layout';
	import type { ToolManifest } from '$lib/grid/tools/tools.model';

  export let manifests: Writable<ToolManifest[]>;

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
  {#each $manifests as manifest}
    {#if manifest.id === 'app-header'}
			<div class="grid-stack-item" gs-w="2" gs-min-w="2" gs-locked="true" gs-no-resize="true" gs-no-move="true">
				<section class="grid-stack-item-content">
					<AnimateCanvas toolManifest={manifest}/>
				</section>
			</div>
		{:else}
      <div bind:this={toolElems[manifest.id]} class="grid-stack-item" gs-w="1">
        <Tool
				  manifest={manifest}
					h={$viewToolsInfo[manifest.id]?.h || 1}
					on:afterUpdate={afterToolUpdate}
					on:rightClick={toggleToolSize(manifest)}
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
	}
</style>