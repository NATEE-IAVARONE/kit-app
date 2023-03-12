
import AdobeAnimate from './canvasController/AdobeAnimate.svelte';
import Gifler from './canvasController/Gifler.svelte';



export const ComponentsByType = {
  adobeAnimate: {
    component: AdobeAnimate,
    fileName: 'canvas.js',
  },
  gif: {
    component: Gifler,
    fileName: 'presentation.gif',
  },
};