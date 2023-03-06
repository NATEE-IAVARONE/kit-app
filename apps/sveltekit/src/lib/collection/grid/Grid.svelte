<script lang="ts">
	import { debounce } from 'lodash-es';
	import { defLayout, layout } from '$lib/collection/grid/gridLayout.store';
	import { ricalculateBorderRadius } from './selection';
	import { GridStack } from 'gridstack';
	import { getContext, setContext } from 'svelte';

	let {columns} = defLayout;

  let grid: GridStack | undefined;
  let gridEl: HTMLElement;

	const collectionContext = getContext('collection');

  layout.subscribe(async val => {
		if (columns === val.columns) return;
		grid?.column(columns = val.columns);
		grid?.compact();
	});

	const context = {
		onChange: debounce(() => {
			const onChange = context.onChange = () => ricalculateBorderRadius(getGridElements(grid!));
			grid = initGrid(gridEl, { defLayout, onChange });
			onChange();
		}, 100),
		itemsLocalVars: {},
		onItemSelection
	};

	setContext('grid', context);

	function getGridElements(grid: GridStack) {
		return grid.getGridItems()
			.map(elem => elem.gridstackNode!);
	}

	function initGrid(gridEl: HTMLElement, { defLayout, onChange }: any) {
		let {columns, margin, cellHeight} = defLayout;

		const grid = GridStack.init({
			disableOneColumnMode: true,
			column: columns,
			minRow: 1,
			cellHeight,
			margin,
			disableResize: true,
			acceptWidgets: true,
		}, gridEl);

		['added', 'removed', 'change'].forEach(name => grid.on(name, onChange));

		return grid;
	}

	function onItemSelection(manifest: any, {isMultiselect}: any) {
		isMultiselect || Object.entries(context.itemsLocalVars).forEach(([_id, vars]) => (vars.isSelected = _id === manifest.id));

		collectionContext.update();
	}
</script>






<main bind:this={gridEl}>
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