<script lang="ts">
	import { afterUpdate } from 'svelte';

	export let setWidthFn: Function;

	let svelteCont: Element | null;
	let width: string;
	let ready = false;
	
	function setWidth(newWidth: string) {
		width = newWidth;
	};
	
	afterUpdate(() => {
		svelteCont ??= document.querySelector('#svelte');
		if (!svelteCont) return;
		
		ready = true;
		const resize_ob = new ResizeObserver(entries => {
			setWidthFn(entries[0].contentRect.width, setWidth);
		});

		resize_ob.observe(svelteCont);
		setWidthFn(svelteCont.clientWidth, setWidth, true);
	})
</script>






<main class="scrollable" style:width>
	{#if ready}
		<slot />
	{/if}
</main>






<style lang="scss">
	main {
		display: inline-block;
		height: 100%;
		text-align: center;
		margin: 0;
		overflow-y: scroll;

		&::-webkit-scrollbar{
    	display: none;
  	}
	}
</style>