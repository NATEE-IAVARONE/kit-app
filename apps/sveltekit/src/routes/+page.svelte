<script lang="ts">
	import Card, { Media, MediaContent } from '@smui/card';
	import LayoutGrid, { Cell } from '@smui/layout-grid';
	import Loader from '$lib/Loader.svelte';
	import AnimateCanvas from '$lib/AnimateCanvas.svelte';
	import Tool from '$lib/tools/Tool.svelte';

	let desktop: string;

	// if (window.electron && browser) {
	// 	window.electron.receive('from-main', (data: any) => {
	// 		desktop = `Received Message "${data}" from Electron`;
	// 		console.log(desktop);
	// 	});
	// }

	//const agent = window.electron ? 'Electron' : 'Browser';

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
			<AnimateCanvas name="appHeader"/>
		</Cell>
		<Tool></Tool>
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
