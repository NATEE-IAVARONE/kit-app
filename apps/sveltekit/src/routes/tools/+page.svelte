<script lang="ts">
	import { setContext } from 'svelte';
	import { clamp } from 'lodash';
	import Collection from '$lib/ui/cardCollection/CardCollection.svelte';
  import Page from '$lib/ui/appPage/AppPage.svelte';
  import Tool from '$lib/tools/Tool.svelte';
	import type { ToolManifest } from '$lib/tools/tools.model';

	export let data: { manifests: ToolManifest[] };

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

	
	const widthPerColumn = 168;
	const minColumn = 1;
	const maxColumn = 3;
	let columns: number;
	let previousColumns: number;

	function setWidthFn(clientWidth: number, cb: Function, force = false) {
		const newColumns = clamp(Math.floor(clientWidth / widthPerColumn), minColumn, maxColumn);
		if (!force && newColumns === previousColumns) return;

		columns = previousColumns = newColumns;
		cb(`${columns * widthPerColumn}px`);
	};
</script>






<Page {setWidthFn}>
	{#each collections as {title, components}}
	<Collection {title} {components} {columns} let:data>
		<Tool slot="item" {data}></Tool>
	</Collection>
	{/each}
</Page>