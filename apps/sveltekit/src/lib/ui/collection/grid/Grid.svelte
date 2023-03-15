<script lang="ts">
	import { afterUpdate, createEventDispatcher } from 'svelte';
	import { GridStack } from 'gridstack';
	import { debounce } from 'lodash-es';
	import { deselectAll, ricalculateBorderRadius } from './selection';

	export let columns: number;
	let grid: GridStack | undefined;
	let gridEl: HTMLElement;
	$: columns && gridEl && setColumns();

	function setColumns() {
		grid || initGrid();
		grid?.column(columns);
		grid?.compact();
	}

  const dispatch = createEventDispatcher();

	const onChange = debounce(() => {
		grid && ricalculateBorderRadius(grid.getGridItems());
	}, 100);
	
	afterUpdate(onChange);

	function initGrid() {
		const margin = 4;

		grid = GridStack.init({
			disableOneColumnMode: true,
			column: columns,
			minRow: 1,
			cellHeight: 106 + margin * 2,
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