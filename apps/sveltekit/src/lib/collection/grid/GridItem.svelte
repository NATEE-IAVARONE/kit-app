<script lang="ts">
	import { getContext } from 'svelte';

	export let component;
	export let manifest;
	
	const gridContext = getContext('grid');
	let localVars = (gridContext.itemsLocalVars[manifest.id] ??= {});
</script>






<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  class="grid-stack-item"
	bind:this={localVars.el}
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
		&:global(.selected) {
			background-color: var(--secondary);
			border-radius: 6px;
	
			&:global(.no-top-left) { border-top-left-radius: 0; }
			&:global(.no-top-right) { border-top-right-radius: 0; }
			&:global(.no-bottom-left) { border-bottom-left-radius: 0; }
			&:global(.no-bottom-right) { border-bottom-right-radius: 0; }
		}
	}
</style>