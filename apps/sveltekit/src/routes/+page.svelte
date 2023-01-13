<script lang="ts">
	import Card, { Media, MediaContent } from '@smui/card';
	import LayoutGrid, { Cell } from '@smui/layout-grid';
	import Loader from '$lib/Loader.svelte';
	import AnimateCanvas from '$lib/AnimateCanvas.svelte';

	let desktop: string;

	// if (window.electron && browser) {
	// 	window.electron.receive('from-main', (data: any) => {
	// 		desktop = `Received Message "${data}" from Electron`;
	// 		console.log(desktop);
	// 	});
	// }

	//const agent = window.electron ? 'Electron' : 'Browser';

	let isLoaded = false;
	
	function onLoaded() {
		isLoaded = true;
	}

</script>

<Loader on:loaded={onLoaded}/>

<main class="{isLoaded ? 'fade' : ''}">
	<LayoutGrid>
		<Cell span={4}>
			<AnimateCanvas name="appHeader"/>
		</Cell>
		{#each Array(1) as _unused, _i}
		<Cell span={2}>
			<Card>
				<Media class="card-media-16x9" aspectRatio="16x9">
					<MediaContent>
						<AnimateCanvas name="langSwitch"/>
					</MediaContent>
					<h3 class="mdc-typography--headline6">
						ENG ↔ ITA
					</h3>
				</Media>
			</Card>
		</Cell>
		{/each}
		{#each Array(1) as _unused, _i}
		<Cell span={2}>
			<Card>
				<Media class="card-media-16x9" aspectRatio="16x9">
					<MediaContent>
						<AnimateCanvas name="association"/>
					</MediaContent>
					<h3 class="mdc-typography--headline6">
						TestIDs → Locations
					</h3>
				</Media>
			</Card>
		</Cell>
		{/each}
		{#each Array(1) as _unused, _i}
		<Cell span={2}>
			<Card>
				<Media class="card-media-16x9" aspectRatio="16x9">
					<MediaContent>
						<AnimateCanvas name="chrome"/>
					</MediaContent>
					<h3 class="mdc-typography--headline6">
						Chrome
					</h3>
				</Media>
			</Card>
		</Cell>
		{/each}
		{#each Array(5) as _unused, _i}
			<Cell span={2}>
				<Card>
					<Media class="card-media-16x9" aspectRatio="16x9">
						<!-- <img src="/store.png" alt="store" style="position: absolute; top: 0; left: 0; width: 100%"> -->
						<h3 class="mdc-typography--headline6">
							....
						</h3>
					</Media>
				</Card>
			</Cell>
		{/each}
	</LayoutGrid>

	{#if desktop}
		<br />
		<br />
		{desktop}
	{/if}
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
	}
	main.fade {
		animation: fade 1s;
		animation-fill-mode:forwards;
	}
	@keyframes fade {
		from { opacity: 0; }
		  to { opacity: 1; }
	}

	.mdc-typography--headline6 {
		margin: 0;
	}
</style>
