<script lang="ts">
	import { debounce } from 'lodash-es';
	import { defLayout } from '$lib/store/layout';
	import { ricalculateBorderRadius } from '../common/highlight';
	import { initGrid } from '../common/gridLibrary';
	import type { GridStack } from 'gridstack';

  let grid: GridStack | undefined;
  let gridEl: HTMLElement;

  export let onChange = debounce(() => {
		onChange = () => ricalculateBorderRadius(grid!);
		grid = initGrid(
			gridEl, {
				defLayout: {...defLayout, columns: 1},
				onChange,
			}
		);
		onChange();
	}, 100);
</script>

<main bind:this={gridEl}>
  <slot></slot>
</main>

<style lang="scss">
	:root {
		--queue-page-width: calc(1 * var(--width-per-column));
	}
	main {
		width: var(--queue-page-width);
	}
</style>