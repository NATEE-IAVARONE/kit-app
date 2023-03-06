<script lang="ts">
	import { debounce } from 'lodash-es';
	import { defLayout, layout } from '$lib/groupLayout/layout.store';
	import { ricalculateBorderRadius } from '../common/highlight';
	import { initGrid } from '../common/gridLibrary';
	import type { GridStack } from 'gridstack';

	let {columns} = defLayout;

  let grid: GridStack | undefined;
  let gridEl: HTMLElement;

  layout.subscribe(async val => {
		if (columns === val.columns) return;
		grid?.column(columns = val.columns);
		grid?.compact();
	});

	export let onChange = debounce(() => {
		onChange = () => ricalculateBorderRadius(grid!);
		grid = initGrid(gridEl, { defLayout, onChange });
		onChange();
	}, 100);
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