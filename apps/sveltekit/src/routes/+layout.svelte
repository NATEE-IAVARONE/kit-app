<script lang="ts">
	import Loader from '$lib/Loader.svelte';

	let loaderEl: Loader;
  
  function onLoaded() {
    setTimeout(loaderEl.$destroy, 2000);
  }
</script>

<slot />

<Loader bind:this={loaderEl} on:loaded={onLoaded}/>
