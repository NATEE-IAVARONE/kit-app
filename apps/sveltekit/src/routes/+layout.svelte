<link rel="stylesheet" href="/smui-dark.css" />
<!-- Material Icons -->
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
<!-- Roboto -->
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700"/>
<!-- Roboto Mono -->
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Mono" />

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
</style>
