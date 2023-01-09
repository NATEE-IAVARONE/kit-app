<script lang="ts">
	import { onMount } from 'svelte';

	let ready = false;
	onMount(() => (ready = true));
</script>

{#if ready}
	<slot />
{/if}

<style>
	:global(html) {
		height: 100%;
		min-width: 360px;
		min-height: 600px;
	}
	:global(body) {
		min-height: 100%;
		margin: 0;
		overflow: hidden;
	}
	:global(main) {
		width: 360px;
		overflow: hidden;
	}
</style>
