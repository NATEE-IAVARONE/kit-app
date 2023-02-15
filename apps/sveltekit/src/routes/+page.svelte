<script lang="ts">
	import Loader from '$lib/Loader.svelte';
	import ToolsGrid from '$lib/grid/ToolsGrid.svelte';
  import { tools } from '$lib/store/tools';

	let loaderEl: Loader;
</script>



<ToolsGrid tools={tools}></ToolsGrid>

<Loader bind:this={loaderEl} on:loaded={loaderEl.$destroy}/>
