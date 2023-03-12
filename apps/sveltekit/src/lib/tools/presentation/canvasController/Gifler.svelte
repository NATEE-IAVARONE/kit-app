<script lang="ts">
	import { onMount } from 'svelte';
  import type { GlobalAnimateVars } from '../AnimateCanvas.model';



  export let src: string;

  const refs:GlobalAnimateVars = {};
  let animator: any;
  
  onMount(async () => {
    window.gifler || await import('$lib/gfx/gifler');
    refs.canvas = refs.anim_container!.getElementsByTagName('canvas')[0];

    gifler(src)
      .animate(refs.canvas)
      .then(a => {
        animator = a;
        animator._loopCount = 1;
        animator._loops = 1;
      });
  });

  function restartAnimation() {
    if (animator.running()) return;

    animator.reset();
    animator._loops = 1;
    animator.start();
  }
</script>






<div bind:this={refs.anim_container} on:mouseenter={restartAnimation}>
  <slot></slot>
</div>






<style>
  div {
    height: var(--grid-cell-height);
  }
</style>