<script lang="ts">
	import Card, { Media, MediaContent } from '@smui/card';
	import LayoutGrid, { Cell } from '@smui/layout-grid';
	import Loader from '$lib/Loader.svelte';
	import AnimateCanvas from '$lib/AnimateCanvas.svelte';
	import Tool from '$lib/tools/Tool.svelte';

	let isLoaded = true;
	
	function onLoaded() {
		isLoaded = true;
	}

</script>

{#if !isLoaded}
 <Loader on:loaded={onLoaded}/>
{/if}

<main class="{isLoaded ? 'fade' : ''}">
	<LayoutGrid>
		<Cell span={4}>
			<AnimateCanvas id="appHeader"/>
		</Cell>
		<Tool id="langSwitch"></Tool>
		<Tool id="locAssoc"></Tool>
		<Tool id="chrome"></Tool>
		{#each Array(5) as _unused, _i}
			<Tool></Tool>
		{/each}
	</LayoutGrid>
</main>


<style lang="scss">
	main {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
		margin: 0;
		opacity: 0;
		
		&.fade {
			animation: fade 1s;
			animation-fill-mode: forwards;
		}
	}
	@keyframes fade {
		from { opacity: 0; }
		  to { opacity: 1; }
	}
	.mdc-typography--headline6 {
		margin: 0;
	}
	.mdc-card {
		cursor: pointer;
	}
</style>
