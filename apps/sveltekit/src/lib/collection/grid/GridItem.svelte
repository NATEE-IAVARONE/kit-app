<script lang="ts">
	import { getContext } from 'svelte';

	export let component;
	export let manifest;

	const gridContext = getContext('grid');
	gridContext.itemsLocalVars[manifest.id] ??= {};

	let localVars;

	$: localVars = gridContext.itemsLocalVars[manifest.id];


  function selectTool(event: any) {
    localVars.isSelected = !localVars.isSelected;
    let isMultiselect = event.ctrlKey;

		gridContext.onItemSelection(manifest, { isMultiselect });
	}

</script>






<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  class="grid-stack-item"
  class:selected={localVars.isSelected}
  on:click={ selectTool }
  gs-w="1"
>
	<svelte:component
		this={component}
		{manifest}
		on:afterUpdate={gridContext.onChange}
	>
	</svelte:component>
</div>







<style lang="scss">
	.grid-stack-item {
		&.selected {
			background-color: var(--secondary);
			border-radius: 6px;
	
			&:global(.no-top-left) { border-top-left-radius: 0; }
			&:global(.no-top-right) { border-top-right-radius: 0; }
			&:global(.no-bottom-left) { border-bottom-left-radius: 0; }
			&:global(.no-bottom-right) { border-bottom-right-radius: 0; }
		}
	}
</style>