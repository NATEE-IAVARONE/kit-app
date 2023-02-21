<script lang="ts">
	import { writable } from 'svelte/store';
	import ToolsGrid from '$lib/grid/ToolsGrid.svelte';
	import type { ToolManifest } from '$lib/grid/tools/tools.model';

	export let data: { toolManifests: ToolManifest[] };
	const toolManifests = writable<ToolManifest[]>(data.toolManifests);
</script>

<ToolsGrid manifests={toolManifests}></ToolsGrid>
