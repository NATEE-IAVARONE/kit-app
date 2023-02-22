<script lang="ts">
	import { writable } from 'svelte/store';
	import ToolsGrid from '$lib/grid/ToolsGrid.svelte';
	import type { ToolManifest } from '$lib/grid/tools/tools.model';
	import { partition } from 'lodash-es';

	export let data: { toolManifests: ToolManifest[] };
	const [ spacialTools, normalTools ] = partition(data.toolManifests, { id: 'app-header' });
	const headerToolManifests = writable<ToolManifest[]>([spacialTools.find(t => t.id === 'app-header')]);
	const lovedToolManifests = writable<ToolManifest[]>(normalTools.filter(t => ['chrome', 'loc-assoc'].includes(t.id)));
	const toolManifests = writable<ToolManifest[]>(normalTools);

  let collections = [
    { toolManifests: headerToolManifests },
    { title: 'LOVED', toolManifests: lovedToolManifests },
    { title: 'ALL', toolManifests },
  ];

	const addCollectionTitle = (collectionTitle: string) => (data) => console.log({collectionTitle, ...data.detail});
</script>

<main>
	{#each collections as collection}
		<section>
			{#if collection.title}
				<h2>{ collection.title }</h2>
			{/if}
			<ToolsGrid manifests={collection.toolManifests} on:gridEvent={addCollectionTitle(collection.title)}></ToolsGrid>
		</section>
	{/each}
</main>

<style lang="scss">
	section {
		margin-bottom: 4px;
	}
	h2 {
		font-size: 11px;
		text-align: right;
		margin: 0 4px;
	}
	main {
		height: 100vh;
		position: absolute;
		left: 50%;
		transform: translate(-50%, 0);
		text-align: center;
		margin: 0;
	}
</style>