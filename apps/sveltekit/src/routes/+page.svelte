<script lang="ts">
	import { browser } from '$app/environment';
	import Button from '@smui/button';
	import Loader from '$lib/Loader.svelte';

	let desktop: string;

	if (window.electron && browser) {
		window.electron.receive('from-main', (data: any) => {
			desktop = `Received Message "${data}" from Electron`;
			console.log(desktop);
		});
	}

	const agent = window.electron ? 'Electron' : 'Browser';

	let isLoaded = false;
	
	function onLoaded() {
		isLoaded = true;
	}
</script>

<Loader on:loaded={onLoaded}/>

<main class="{isLoaded ? 'fade' : ''}">
	<Button>KIT</Button>

	{#if desktop}
		<br />
		<br />
		{desktop}
	{/if}
</main>


<style>
	main {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
		margin: 0;
		opacity: 0;
	}
	main.fade {
		animation: fade 1s;
		animation-fill-mode:forwards;
	}
	@keyframes fade {
		from { opacity: 0; }
		  to { opacity: 1; }
	}
</style>
