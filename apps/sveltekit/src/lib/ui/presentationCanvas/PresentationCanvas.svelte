<script lang="ts">
  import { ComponentsByType } from './PresentationCanvas.const';
	import type { CanvasConfig } from './PresentationCanvas.model';

  export let type: keyof typeof ComponentsByType;
  export let assetsBaseURL: string;
  export let canvasConfig: CanvasConfig;

  const { width, height } = canvasConfig;
  const { component, fileName } = ComponentsByType[type];
  const src = `${assetsBaseURL}/${fileName}`;
</script>






<svelte:component this={component} {src}>
  <canvas {width} {height}></canvas>
</svelte:component>