<script lang="ts">
	import { createEventDispatcher } from 'svelte';



  const dispatch = createEventDispatcher();

  export let width = '160px';
  export let height = '106px';
  export let title = '---';
</script>






<!-- svelte-ignore a11y-click-events-have-key-events -->
<main
  on:dblclick={() => dispatch('dblclick')}
  on:contextmenu|preventDefault={() => dispatch('rightClick')}
  style:width
  style:height
>
  <slot></slot>
  <h3 class="mdc-typography--headline6">
    {title}
  </h3>
</main>






<style lang="scss">
  main {
    display: flex;
    flex-direction: column;
		cursor: pointer;
		background-color: var(--surface);
		border-radius: 4px;
		overflow: hidden;
	}
	.mdc-typography--headline6 {
		margin: 0;
	}
</style>