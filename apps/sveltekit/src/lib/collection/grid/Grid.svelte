<script lang="ts">
	import { debounce } from 'lodash-es';
	import { defLayout, layout } from '$lib/collection/grid/gridLayout.store';
	import { onItemSelection, ricalculateBorderRadius } from './selection';
	import { GridStack } from 'gridstack';
	import { getContext, setContext } from 'svelte';

	let {columns} = defLayout;

  let grid: GridStack | undefined;
  let gridEl: HTMLElement;

  layout.subscribe(async val => {
		if (columns === val.columns) return;
		grid?.column(columns = val.columns);
		grid?.compact();
	});

	const onChangeFnByStage = {
		initial: debounce(() => {
			onChange = context.onChange = onChangeFnByStage.subsequent;
			initGrid();
			onChange();
		}, 100),
		subsequent: () => {
			ricalculateBorderRadius(context.itemsLocalVars);
		}
	};

	let onChange = onChangeFnByStage.initial;

	const context = {
		onChange,
		itemsLocalVars: {},
		onItemSelection
	};

	const collectionContext = getContext('collection');
	setContext('grid', context);

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

		assignGridNodesToLocalVars();
		handleGridItemsClick();
		handleGridEvents();
	}

	function assignGridNodesToLocalVars() {
		const varss = Object.values(context.itemsLocalVars);

		grid.getGridItems().forEach(gridEl => {
			const el = gridEl.gridstackNode!.el!;
			const vars = varss.find(v => v.el === el);
			vars.gridNode = gridEl.gridstackNode;
		});
	}

	function handleGridItemsClick() {
		const varss = Object.values(context.itemsLocalVars);

		varss.forEach(vars => vars.el.addEventListener('click', onItemSelection(vars, varss)));
	}

	function handleGridEvents() {
		['change'].forEach(name => grid!.on(name, onChange));
		['added', 'removed'].forEach(name => grid!.on(name, collectionContext.update));
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