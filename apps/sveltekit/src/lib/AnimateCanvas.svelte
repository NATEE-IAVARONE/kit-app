<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	import { main as appHeader } from '$lib/canvas/appHeader';
	import { main as locAssoc } from '$lib/canvas/testIDLocationAssociation';
	import { main as langSwitch } from '$lib/canvas/langSwitch';
	import { main as chrome } from '@kit-tools/chrome/canvas';

  export let id: string;
  
  var stage, exportRoot, fnStartAnimation;
  const g: GlobalAnimateVars = {
    stage, exportRoot, fnStartAnimation
  }

  interface GlobalAnimateVars {
    anim_container?: HTMLDivElement;
    canvas?: HTMLCanvasElement;
    dom_overlay_container?: HTMLElement;
  }

  const port = 5173;
  const baseUrl = `http://localhost:${port}`;

  async function launchChrome() {
    const response = await fetch(`${baseUrl}/api/tools/chrome`, {
      method: 'GET',
      headers: { 'content-type': 'application/json' }
    });

    const res = await response.json();

    console.log({res});
  }

  async function switchLang() {
    const response = await fetch(`${baseUrl}/api/switchLang`, {
      method: 'GET',
      headers: { 'content-type': 'application/json' }
    });

    const res = await response.json();

    console.log({res});
  }

  function doNothing() {
    console.log('No action');
  }

  let onClick = doNothing;

  onMount(async () => {
		if (!browser) return;
		
		const {createjs} = await import('$lib/createjs');
		const AdobeAn = {};

    const [anim, initFn, onClickFn] = {
      appHeader: [appHeader, init, doNothing] as const,
      locAssoc: [locAssoc, initAssociation, doNothing] as const,
      langSwitch: [langSwitch, init, switchLang] as const,
      chrome: [chrome, init, launchChrome] as const,
    }[id];

    onClick = onClickFn;

		anim(createjs, AdobeAn, g);
		initFn();

		/* ASSOCIATION */
		function initAssociation() {
			var comp=AdobeAn.getComposition('82D64AE21E87C442B698A0280CCCADEA');
			var lib=comp.getLibrary();
			createjs.MotionGuidePlugin.install();
			handleComplete({},comp);
		}
    function init() {
      var comp=AdobeAn.getComposition("82D64AE21E87C442B698A0280CCCADEA");
      var lib=comp.getLibrary();
      var loader = new createjs.LoadQueue(false);
      loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
      loader.addEventListener("complete", function(evt){handleComplete(evt,comp)});
      var lib=comp.getLibrary();
      loader.loadManifest(lib.properties.manifest);
    }


    function handleFileLoad(evt, comp) {
      var images=comp.getImages();	
      if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }	
    }
    
    function handleComplete(evt,comp) {
      //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
      var lib=comp.getLibrary();
      var ss=comp.getSpriteSheet();
      var queue = evt.target;
      var ssMetadata = lib.ssMetadata || [];
      for(let i=0; i<ssMetadata.length; i++) {
        ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
      }
      g.exportRoot = new lib.stageContent();
      g.stage = new lib.Stage(g.canvas);	
      //Registers the "tick" event listener.
      g.fnStartAnimation = function() {
        g.stage.addChild(g.exportRoot);
        createjs.Ticker.framerate = lib.properties.fps;
        createjs.Ticker.addEventListener("tick", g.stage);
      }	    
      //Code to support hidpi screens and responsive scaling.
      AdobeAn.makeResponsive(false,'both',false,1,[g.canvas,g.anim_container,g.dom_overlay_container]);	
      AdobeAn.compositionLoaded(lib.properties.id);
      g.fnStartAnimation();
    }

	});
</script>

<div bind:this={g.anim_container} on:click={onClick}>
  <canvas bind:this={g.canvas} class="{id}" width="160" height="90"></canvas>
  <section bind:this={g.dom_overlay_container}></section>
</div>

<style>
  div {
    width: 160px;
    height: 90px;
  }
  canvas:not(.appHeader) {
    position: absolute;
    display: block;
    background-color: #282828;
  }
  section {
    pointer-events: none;
    overflow: hidden;
    width: 160px;
    height: 90px;
    position: absolute;
    left: 0;
    top: 0;
    display: block;
  }
</style>
