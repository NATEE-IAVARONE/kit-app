<script lang="ts">
	import Grid from './grid/Grid.svelte';
	import GridItem from './grid/GridItem.svelte';

	export let title: string;
	export let components;
	export let columns: number;

	function update() { components = components }
</script>






<section>
	<h2>{ title }</h2>
	<Grid {columns} on:update={update}>
		{#each components as { data }}
			<GridItem>
				<slot name="item" {data}></slot>
			</GridItem>
		{/each}
	</Grid>
</section>






<style lang="scss">
	section {
		margin-bottom: var(--grid-margin);
	}
	h2 {
		font-size: var(--font-size);
		text-align: right;
		margin: 0 var(--grid-margin);
	}
</style>