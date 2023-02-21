<script lang="ts">
	import { onMount } from 'svelte';
	import { set } from 'lodash-es';
	import { layout, minWidthPerColumns } from '$lib/store/layout';
	import { ColumnBy } from './tools.model';

	let ready = false;
	
	let columnsBy = ColumnBy.AvailableSpace;
	let columns = 1;
	let cssRoot: HTMLElement | null;
	let svelteCont: Element | null;

	onMount(() => {
		ready = true;

		columnsBy === ColumnBy.Static && setColumns(columns);
		columnsBy === ColumnBy.AvailableSpace && observeToAdaptColumnsToWidth();
	});

	function observeToAdaptColumnsToWidth() {
		svelteCont ??= document.querySelector('#svelte');
		if (!svelteCont) return;

		const resize_ob = new ResizeObserver(entries => {
			adaptColumnsToWidth(entries[0].contentRect.width);
		});

		resize_ob.observe(svelteCont);
		adaptColumnsToWidth(svelteCont.clientWidth);
	}

	function adaptColumnsToWidth(width: number) {
		const newColumns = width >= minWidthPerColumns.two ? 2 : 1;

		newColumns === columns || setColumns(newColumns);
	}

	function setColumns(col: number) {
		columns = col;
		cssRoot ??= document.querySelector(':root');

		cssRoot?.style.setProperty('--columns', col.toString());

		const newLayout = set($layout, 'columns', col);
		layout.set(newLayout);
	}
</script>

{#if ready}
	<slot />
{/if}

<style lang="scss">
	:global(html) {
		height: 100%;
		min-height: 600px;
	}
	:global(body) {
		min-height: 100%;
		margin: 0;
		overflow: hidden;
	}
	:global(main) {
		width: var(--width);
		overflow: hidden;
	}
</style>
