<script lang="ts">
	import { getContext, afterUpdate } from 'svelte';

	export let component;
	export let manifest;

	let el: HTMLDivElement;
	const gridContext = getContext('grid');
	
	afterUpdate(() => {
		let localVars = gridContext.itemsLocalVars.find(vars => vars.el === el);
		localVars || gridContext.itemsLocalVars.push(localVars = { el });
		gridContext.onChange();
	});
</script>






<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="grid-stack-item" bind:this={el}>
	<svelte:component this={component} {manifest}></svelte:component>
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