<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { writable, type Writable } from 'svelte/store';
	import { GridStack, type GridItemHTMLElement, type GridStackNode } from 'gridstack';
	import { debounce, set, pick, findKey } from 'lodash-es';
	import AnimateCanvas from '$lib/ui/presentation/PresentationCanvas.svelte';
  import Tool from '$lib/tools/Tool.svelte';
	import { defLayout, layout } from '$lib/groupLayout/layout.store';
	import type { ToolManifest } from '$lib/tools/tools.model';

  export let manifests: Writable<ToolManifest[]>;

	const dispatch = createEventDispatcher();

	interface ExtraInfo {
		h?: number;
	}

	const viewToolsInfo = writable<Record<string, ExtraInfo>>({});
	const gridEventsToDispatch = {
		eventNames: ['added', 'removed', 'change'],
		eventAttrs: ['toolID', 'type', 'x', 'y', 'w', 'h'],
	};

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
			minRow: 1,
			cellHeight,
			margin,
			disableResize: true,
			acceptWidgets: true,
		}, gridEl);

		setupGridEventDispatching();
	}

	function setupGridEventDispatching() {
		gridEventsToDispatch.eventNames.forEach(name => grid.on(name, dispatchGridEvent));
	}

	function dispatchGridEvent(event: Event, items: GridStackNode[]) {
		const detail = event.detail
			.map(d => ({...d, toolID: findKey(toolElems, d.el)}))
			.map(d => pick(d, gridEventsToDispatch.eventAttrs));

		dispatch('gridEvent', {
			// event,
			type: event.type,
			detail,
		});
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
				  data={manifest}
					h={$viewToolsInfo[manifest.id]?.h || 1}
					on:afterUpdate={afterToolUpdate}
					on:rightClick={toggleToolSize(manifest)}
				></Tool>
      </div>
    {/if}
  {/each}
	{ $manifests.length }
	{#if $manifests.length === 0}
		<div>EMPTY</div>
	{/if}
</main>

<style lang="scss">
	main {
		text-align: center;
		margin: 0;
	}
</style>