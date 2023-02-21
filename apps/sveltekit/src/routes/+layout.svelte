<script lang="ts">
	import { onMount } from 'svelte';
	import { layout, minWidthPerColumns } from '$lib/store/layout';
	import { set } from 'lodash-es';

	export let data: { magic: number };

	let ready = false;
	
	enum ColumnBy {
		AvailableSpace,
		Static,
	}
	let columnsBy: ColumnBy = ColumnBy.AvailableSpace;
	let columns = 1;
	let cssRoot: any;
	let svelteCont: Element | null;

	onMount(() => {
		console.log({ data });
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

		cssRoot.style.setProperty('--columns', col);

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
