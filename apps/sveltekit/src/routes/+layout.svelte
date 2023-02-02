<script lang="ts">
	import { onMount } from 'svelte';

	let ready = false;
	onMount(() => (ready = true));
</script>

{#if ready}
	<slot />
{/if}

<style lang="scss">
	$margin: 4px;
	$card-size: 160px;
	$main-width: calc(4 * $margin + 2 * $card-size);

	:global(html) {
		height: 100%;
		min-width: $main-width;
		min-height: 600px;
	}
	:global(body) {
		min-height: 100%;
		margin: 0;
		overflow: hidden;
	}
	:global(main) {
		width: $main-width;
		overflow: hidden;
	}
</style>
