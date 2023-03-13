<script lang="ts">
	import { setContext } from 'svelte';
	import { tools } from '$lib/tools/tools.store';
	import Collection from '$lib/ui/collection/Collection.svelte';
  import Tool from '$lib/tools/Tool.svelte';
	import type { ToolManifest } from '$lib/tools/tools.model';

	export let data: { manifests: ToolManifest[] };

	tools.set(data.manifests);

	const lovedToolManifests = data.manifests
		.filter(t => ['loc-assoc', 'checklist', 'chrome'].includes(t.id))
		.map(data => ({ data }));

	interface Collection {
		title: string;
    components: {data: ToolManifest}[];
	}

  let collections: Collection[] = [
    { title: 'LOVED',	components: lovedToolManifests },
    { title: 'ALL', 	components: data.manifests.map(data => ({ data })) },
  ];

	const context = {
		update: () => (collections = collections)
	};

	setContext('collections', context);

</script>






<main class="scrollable">
	{#each collections as {title, components}}
		<Collection {title} {components} let:data>
			<Tool slot="item" {data}></Tool>
		</Collection>
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