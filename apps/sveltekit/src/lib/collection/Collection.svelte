<script lang="ts">
	import Grid from '$lib/collection/grid/Grid.svelte';
	import GridItem from '$lib/collection/grid/GridItem.svelte';
  import Tool from '$lib/tools/Tool.svelte';
	import { setContext } from 'svelte';

	export let collection;

	const context = {
		update: () => {
			collection = collection;
		}
	};

	setContext('collection', context);
</script>






<section>
	<h2>{ collection.title }</h2>
	<Grid>
		{#each collection.manifests as manifest}
			<GridItem component={Tool} {manifest}></GridItem>
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