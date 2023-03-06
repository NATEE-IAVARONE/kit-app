<script lang="ts">
	import { tools } from '$lib/tools/tools.store';
	import type { ToolManifest } from '$lib/tools/tools.model';
	import Collection from '$lib/collection/Collection.svelte';
	import { setContext } from 'svelte';

	export let data: { manifests: ToolManifest[] };

	tools.set(data.manifests);

	const lovedToolManifests = data.manifests.filter(t => ['loc-assoc', 'checklist', 'chrome'].includes(t.id));

	interface Collection {
		title: string;
    manifests: ToolManifest[];
	}

  let collections: Collection[] = [
    { title: 'LOVED',	manifests: lovedToolManifests },
    { title: 'ALL', 	manifests: data.manifests },
  ];

	const context = {
		update: () => (collections = collections)
	};

	setContext('collections', context);

</script>






<main class="scrollable">
	{#each collections as collection}
		<Collection {collection}></Collection>
	{/each}
</main>






<style lang="scss">
	main {
		display: inline-block;
		height: 100%;
		text-align: center;
		margin: 0;
		overflow-y: scroll;

		&::-webkit-scrollbar{
    	display: none;
  	}
	}
</style>