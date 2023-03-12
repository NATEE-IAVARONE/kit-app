<script lang="ts">
	import { onMount } from 'svelte';
  import type { GlobalAnimateVars } from '../AnimateCanvas.model';



  export let src: string;

  const refs: GlobalAnimateVars = {};
  
  onMount(async () => {
    const { createjs } = await import('$lib/createjs');
    const { setDeps, main, init } = await import(/* @vite-ignore */src);

    refs.canvas = refs.anim_container!.getElementsByTagName('canvas')[0];

    setDeps({ createjs, g: refs });
    main(createjs, refs);
    init(createjs);
  });

  function mouseenter() {
    console.log('mouseenter');
  }
</script>






<div bind:this={refs.anim_container} on:mouseenter>
  <slot></slot>
  <section bind:this={refs.dom_overlay_container}></section>
</div>






<style>
  div {
    height: var(--grid-cell-height);
  }
  section {
    pointer-events: none;
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 0;
    display: block;
  }
</style>