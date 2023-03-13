<script lang="ts">
	import { afterUpdate, createEventDispatcher } from 'svelte';
	import { GridStack } from 'gridstack';
	import { debounce } from 'lodash-es';
	import { defLayout, layout } from '$lib/ui/collection/grid/gridLayout.store';
	import { deselectAll, ricalculateBorderRadius } from './selection';



  const dispatch = createEventDispatcher();
	let {columns} = defLayout;

  let grid: GridStack | undefined;
  let gridEl: HTMLElement;

  layout.subscribe(async val => {
		if (columns === val.columns) return;
		grid?.column(columns = val.columns);
		grid?.compact();
	});

	const onChange = debounce(() => {
		grid || initGrid();
		ricalculateBorderRadius(grid.getGridItems());
	}, 100);
	
	afterUpdate(onChange);

	function initGrid() {
		let {columns, margin, cellHeight} = defLayout;

		grid = GridStack.init({
			disableOneColumnMode: true,
			column: columns,
			minRow: 1,
			cellHeight,
			margin,
			disableResize: true,
			acceptWidgets: true,
		}, gridEl);

		handleGridEvents();
	}

	function handleGridEvents() {
		['change'].forEach(name => grid!.on(name, onChange));
		['added', 'removed'].forEach(name => grid!.on(name, () => dispatch('update')));
	}

	function click(event: PointerEvent) {
		const isMultiselect = event.ctrlKey;
		if (!isMultiselect) return deselectAll();

		const target = event.target as HTMLDivElement;
		const item = target.closest('.grid-stack-item');

		item.classList.toggle('selected');
    
    ricalculateBorderRadius(grid.getGridItems());
	}
</script>






<!-- svelte-ignore a11y-click-events-have-key-events -->
<main bind:this={gridEl} on:click={click}>
  <slot></slot>
</main>






<style lang="scss">
	:root {
		--grid-page-width: calc(var(--grid-columns) * var(--width-per-column));
	}
	main {
		width: var(--grid-page-width);
	}
</style>