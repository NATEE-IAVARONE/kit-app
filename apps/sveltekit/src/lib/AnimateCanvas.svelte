<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	import { association } from '$lib/private/association';
	import { langSwitch } from '$lib/private/lang';

  export let name: 'association' | 'langSwitch';

  
  var stage, exportRoot, fnStartAnimation;
  const g: GlobalAnimateVars = {
    stage, exportRoot, fnStartAnimation
  }

  interface GlobalAnimateVars {
    anim_container?: HTMLDivElement;
    canvas?: HTMLCanvasElement;
    dom_overlay_container?: HTMLElement;
  }

  onMount(async () => {
		if (!browser) return;
		
		const {createjs} = await import('$lib/createjs');
		const AdobeAn = {};

    const [anim, initFn] = {
      association: [association, initAssociation] as const,
      langSwitch: [langSwitch, initLangSwitch] as const,
    }[name];

  console.log({name, anim});


		anim(createjs, AdobeAn, g);
		initFn();

		/* ASSOCIATION */
		function initAssociation() {
			var comp=AdobeAn.getComposition('82D64AE21E87C442B698A0280CCCADEA');
			var lib=comp.getLibrary();
			createjs.MotionGuidePlugin.install();
			associationHandleComplete({},comp);
		}
    function initLangSwitch() {
      var comp=AdobeAn.getComposition("82D64AE21E87C442B698A0280CCCADEA");
      var lib=comp.getLibrary();
      var loader = new createjs.LoadQueue(false);
      loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
      loader.addEventListener("complete", function(evt){langSwitchHandleComplete(evt,comp)});
      var lib=comp.getLibrary();
      loader.loadManifest(lib.properties.manifest);
    }
    function handleFileLoad(evt, comp) {
      var images=comp.getImages();	
      if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }	
    }

		function associationHandleComplete(evt,comp) {
			//This function is always called, irrespective of the content. You can use the variable 'stage' after it is created in token create_stage.
			var lib=comp.getLibrary();
			var ss=comp.getSpriteSheet();
			g.exportRoot = new lib.testID_location_association();
			g.stage = new lib.Stage(g.canvas);	
			//Registers the 'tick' event listener.
			g.fnStartAnimation = function() {
				g.stage.addChild(g.exportRoot);
				createjs.Ticker.framerate = lib.properties.fps;
				createjs.Ticker.addEventListener('tick', g.stage);
			}	    
			//Code to support hidpi screens and responsive scaling.
			AdobeAn.makeResponsive(false,'both',false,1,[g.canvas,g.anim_container,g.dom_overlay_container]);	
			AdobeAn.compositionLoaded(lib.properties.id);
			g.fnStartAnimation();
		}
    function langSwitchHandleComplete(evt,comp) {
      //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
      var lib=comp.getLibrary();
      var ss=comp.getSpriteSheet();
      var queue = evt.target;
      var ssMetadata = lib.ssMetadata;
      for(let i=0; i<ssMetadata.length; i++) {
        ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
      }
      g.exportRoot = new lib.lang_switch();
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

<div bind:this={g.anim_container}>
  <canvas bind:this={g.canvas} width="160" height="90"></canvas>
  <section bind:this={g.dom_overlay_container}>
  </section>
</div>

<style>
  div {
    width:160px;
    height:90px;
  }
  canvas {
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
