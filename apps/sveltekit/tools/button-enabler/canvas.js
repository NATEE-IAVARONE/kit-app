export const setDeps = (deps) => {
    createjs = deps.createjs;
    ({ canvas, anim_container, dom_overlay_container } = deps.g);
  };

export const main = (createjs, g) =>
(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



// stage content:
(lib.stageContent = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mask_ (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_45 = new cjs.Graphics().p("AgTD6IAAnzIAmAAIAAHzg");
	var mask_graphics_46 = new cjs.Graphics().p("AgkD6IgOAAIAAnzIAOAAIBXAAIAAHzg");
	var mask_graphics_47 = new cjs.Graphics().p("AgGD6IhKAAIAAnzIChAAIAAHzg");
	var mask_graphics_48 = new cjs.Graphics().p("ABuD6IiBAAIhjAAIAAnzIDtAAIAAHzg");
	var mask_graphics_49 = new cjs.Graphics().p("AiWD6IAAnzIEtAAIAAHzg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(45).to({graphics:mask_graphics_45,x:112.3,y:49.475}).wait(1).to({graphics:mask_graphics_46,x:108.775,y:49.475}).wait(1).to({graphics:mask_graphics_47,x:105.775,y:49.475}).wait(1).to({graphics:mask_graphics_48,x:102.875,y:49.475}).wait(1).to({graphics:mask_graphics_49,x:99.5,y:49.475}).wait(40));

	// Lines_page2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(0.3,1,1).p("Ah9gxID7AAAh9iVID5AAAh9jHID7AAAh9hjID7AAAh9AAID5AAAh9CWID7AAAh9BkID5AAAh9DIID5AAAh9AyID7AA");
	this.shape.setTransform(97.575,49.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#999999").ss(0.3,1,1).p("Ah9gxID7AAAh9iVID5AAAh9jHID7AAAh9hjID7AAAh9AyID7AAAh9AAID5AAAh9DIID5AAAh9BkID5AAAh9CWID7AA");
	this.shape_1.setTransform(97.575,49.975);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},45).to({state:[{t:this.shape_1}]},3).wait(41));

	// lines
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#999999").ss(0.3,1,1).p("Ah9hjID7AAAh9jHID7AAAh9iVID5AAAh9gxID7AAAh9CWID7AAAh9BkID5AAAh9AAID5AAAh9AyID7AAAh9DIID5AA");
	this.shape_2.setTransform(97.575,49.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#999999").ss(0.3,1,1).p("Ah9gxID7AAAh9iVID5AAAh9jHID7AAAh9hjID7AAAh9DIID5AAAh9AyID7AAAh9AAID5AAAh9BkID5AAAh9CWID7AA");
	this.shape_3.setTransform(97.575,49.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#999999").ss(0.3,1,1).p("AhmhkIDKgQAhmjLIDJgZAhmiYIDIgUAhmgxIDKgKAhmCgIDNALAhmBqIDLAHAhmA2IDLABAhmDUIDMARAhmACIDKgE");
	this.shape_4.setTransform(95.2,50.0125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#999999").ss(0.3,1,1).p("AhKjKICSgTAhJgyICSgGAhKiYICRgOAhKhlICSgLAhJAAICRgBAhJDNICTARAhJAzICSADAhJBmICSAIAhJCZICTAN");
	this.shape_5.setTransform(92.4,50.5125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#999999").ss(0.3,1,1).p("AgxhhIBjgNAg0jOIBlgYAgziZIBkgQAgwgsIBigFAgrCeIBgATAgsBtIBgANAguA7IBiAGAgqDQIBfAYAgvAHIBhAB");
	this.shape_6.setTransform(89.225,51.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#999999").ss(0.3,1,1).p("AgZhDIAxgEAgYikIAvgIAgYjRIAugKAgZh0IAwgHAgZgRIAxgBAgaAjIAzACAgbDOIA3AOAgaBZIA0AHAgaCRIA1AL");
	this.shape_7.setTransform(85.725,52.0375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#999999").ss(0.3,1,1).p("AgHgYIAOgDAgHh/IANgNAgIjeIAOgQAgHiyIANgMAgHhNIAOgIAgIBaIAQAGAgICYIARAOAgIDbIARAUAgIAgIAQAA");
	this.shape_8.setTransform(82.325,51.5375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2}]},23).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},19).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[]},1).wait(39));

	// linea
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#CCCCCC").ss(1,1,1,3,true).p("AAAjwIAAHg");
	this.shape_9.setTransform(80.3,50.0843,1,1.0314);
	this.shape_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(44).to({_off:false},0).wait(45));

	// Mask_page1 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_12 = new cjs.Graphics().p("AgWEEIAAoHIAtAAIAAIHg");
	var mask_1_graphics_15 = new cjs.Graphics().p("AhIEEIAAoHICRAAIAAIHg");
	var mask_1_graphics_18 = new cjs.Graphics().p("AhxEEIAAoHIDjAAIAAIHg");
	var mask_1_graphics_21 = new cjs.Graphics().p("AiSEEIAAoHIElAAIAAIHg");
	var mask_1_graphics_24 = new cjs.Graphics().p("AiYEEIAAoHIExAAIAAIHg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(12).to({graphics:mask_1_graphics_12,x:111.906,y:50.2501}).wait(3).to({graphics:mask_1_graphics_15,x:107.4344,y:50.2501}).wait(3).to({graphics:mask_1_graphics_18,x:103.2089,y:50.2501}).wait(3).to({graphics:mask_1_graphics_21,x:99.959,y:50.2501}).wait(3).to({graphics:mask_1_graphics_24,x:99.4441,y:50.2501}).wait(20).to({graphics:null,x:0,y:0}).wait(45));

	// lines_page1
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#999999").ss(0.3,1,1).p("Ah9iVID5AAAh9jHID7AAAh9gxID7AAAh9hjID7AAAh9AyID7AAAh9CWID7AAAh9DIID5AAAh9BkID5AAAh9AAID5AA");
	this.shape_10.setTransform(97.575,49.975);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("rgba(255,0,0,0)").ss(1,1,1).p("Aiuj5IFYAAIAFAAIAAHzIgFAAIlYAA");
	this.shape_11.setTransform(98.225,50);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AipD6IgFAAIAAnzIAFAAIFYAAIAAHzg");
	this.shape_12.setTransform(97.725,50);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("rgba(255,0,0,0)").ss(1,1,1).p("AiTj6IEngrIAAJKIkngrg");
	this.shape_13.setTransform(95.525,50);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AiTD7IAAn1IEngrIAAJLg");
	this.shape_14.setTransform(95.525,50);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("rgba(255,0,0,0)").ss(1,1,1).p("Ah0j6IDpgrIAAJKIjpgrg");
	this.shape_15.setTransform(92.425,50);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ah0D7IAAn1IDpgrIAAJLg");
	this.shape_16.setTransform(92.425,50);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("rgba(255,0,0,0)").ss(1,1,1).p("AhUj6ICpgrIAAJKIipgrg");
	this.shape_17.setTransform(89.175,50);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhUD7IAAn1ICpgrIAAJLg");
	this.shape_18.setTransform(89.175,50);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("rgba(255,0,0,0)").ss(1,1,1).p("Agyj6IBmgrIAAJKIhmgrg");
	this.shape_19.setTransform(85.85,50);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgyD7IAAn1IBlgrIAAJLg");
	this.shape_20.setTransform(85.85,50);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("rgba(255,0,0,0)").ss(1,1,1).p("AgSj6IAkgrIAAJKIgkgrg");
	this.shape_21.setTransform(82.55,50);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgRD7IAAn1IAkgrIAAJLg");
	this.shape_22.setTransform(82.55,50);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("rgba(255,0,0,0)").ss(1,1,1).p("AABkiIgCgDIAAJKIACgC");
	this.shape_23.setTransform(75.65,50);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgVEiIAApDIAAgEIArArIAAH1IgrArg");
	this.shape_24.setTransform(78.025,50);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("rgba(255,0,0,0)").ss(1,1,1).p("AADkiIgFgDIAAJKIAFgC");
	this.shape_25.setTransform(71.525,50);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgpEiIAApDIAAgEIBTArIAAH1IhTArg");
	this.shape_26.setTransform(76.05,50);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("rgba(255,0,0,0)").ss(1,1,1).p("AAGkiIgLgDIAAJKIALgC");
	this.shape_27.setTransform(61.825,50);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhYEiIAApDIAAgEICxArIAAH1IixArg");
	this.shape_28.setTransform(71.325,50);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("rgba(255,0,0,0)").ss(1,1,1).p("AAJkiIgRgDIAAJKIARgC");
	this.shape_29.setTransform(50.875,50);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AiNEiIAApDIAAgEIEbArIAAH1IkbArg");
	this.shape_30.setTransform(66.05,50);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("rgba(255,0,0,0)").ss(1,1,1).p("AgBj5IADAAAACD6IgDAA");
	this.shape_31.setTransform(44.975,50);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AiuD6IAAnzIFdAAIAAHzg");
	this.shape_32.setTransform(62.725,50);

	var maskedShapeInstanceList = [this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_10}]},12).to({state:[{t:this.shape_12},{t:this.shape_11}]},32).to({state:[{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_20},{t:this.shape_19}]},1).to({state:[{t:this.shape_22},{t:this.shape_21}]},1).to({state:[{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_30},{t:this.shape_29}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).wait(35));

	// cover_move
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("rgba(255,0,0,0)").ss(1,1,1).p("AjHkrIGPAAIAAJXImPAAg");
	this.shape_33.setTransform(100.2,50);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#666666").s().p("AjHEsIAApXIGPAAIAAJXg");
	this.shape_34.setTransform(100.2,50);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("rgba(255,0,0,0)").ss(1,1,1).p("AjEksIGJgrIgDKvImGgrg");
	this.shape_35.setTransform(99.85,50);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#666666").s().p("AjEEsIAApXIGJgsIgDKvg");
	this.shape_36.setTransform(99.85,50);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("rgba(255,0,0,0)").ss(1,1,1).p("AiTksIEngrIgCKvIklgrg");
	this.shape_37.setTransform(95,50);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#666666").s().p("AiTEsIAApXIEngsIgCKvg");
	this.shape_38.setTransform(95,50);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("rgba(255,0,0,0)").ss(1,1,1).p("AhjksIDHgrIgBKvIjGgrg");
	this.shape_39.setTransform(90.225,50);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#666666").s().p("AhjEsIAApXIDHgsIgBKvg");
	this.shape_40.setTransform(90.225,50);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("rgba(255,0,0,0)").ss(1,1,1).p("Ag5ksIBzgrIgBKvIhygrg");
	this.shape_41.setTransform(86.0112,50,1.008,1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#666666").s().p("Ag5EsIAApXIBzgsIgBKvg");
	this.shape_42.setTransform(86.0112,50,1.008,1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("rgba(255,0,0,0)").ss(1,1,1).p("AgYksIAxgrIAAKvIgxgrg");
	this.shape_43.setTransform(82.7,50);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#666666").s().p("AgYEsIAApXIAxgsIgBKvg");
	this.shape_44.setTransform(82.7,50);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("rgba(255,0,0,0)").ss(1,1,1).p("AA6ksIhzgrIABKvIBygrg");
	this.shape_45.setTransform(74.375,50);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#666666").s().p("Ag5lXIBzAsIAAJXIhyAsg");
	this.shape_46.setTransform(74.375,50);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("rgba(255,0,0,0)").ss(1,1,1).p("ACUksIkngrIACKvIElgrg");
	this.shape_47.setTransform(65.35,50);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#666666").s().p("AiTlXIEnAsIAAJXIklAsg");
	this.shape_48.setTransform(65.35,50);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("rgba(255,0,0,0)").ss(1,1,1).p("ADIkrImPAAIAAJXIGPAAg");
	this.shape_49.setTransform(60.15,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34,p:{x:100.2}},{t:this.shape_33}]}).to({state:[{t:this.shape_36},{t:this.shape_35}]},9).to({state:[{t:this.shape_38},{t:this.shape_37}]},3).to({state:[{t:this.shape_40,p:{skewY:0,x:90.225}},{t:this.shape_39,p:{skewY:0,x:90.225}}]},3).to({state:[{t:this.shape_42},{t:this.shape_41}]},3).to({state:[{t:this.shape_44},{t:this.shape_43}]},3).to({state:[{t:this.shape_46},{t:this.shape_45}]},3).to({state:[{t:this.shape_40,p:{skewY:180,x:70.15}},{t:this.shape_39,p:{skewY:180,x:70.15}}]},3).to({state:[{t:this.shape_48},{t:this.shape_47}]},3).to({state:[{t:this.shape_34,p:{x:60.15}},{t:this.shape_49}]},3).to({state:[{t:this.shape_34,p:{x:60.15}},{t:this.shape_49}]},49).wait(7));

	// white_paper
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("rgba(255,0,0,0)").ss(1,1,1).p("Aiuj5IFdAAIAAHzIldAAg");
	this.shape_50.setTransform(97.725,50);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AiuD6IAAnzIFdAAIAAHzg");
	this.shape_51.setTransform(97.725,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_51},{t:this.shape_50}]}).to({state:[{t:this.shape_51},{t:this.shape_50}]},9).wait(80));

	// back
	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("rgba(255,0,0,0)").ss(1,1,1).p("AjHkrIGPAAIAAJXImPAAg");
	this.shape_52.setTransform(100.2,50);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#333300").s().p("AjHEsIAApXIGPAAIAAJXg");
	this.shape_53.setTransform(100.2,50);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#666666").s().p("AjHEsIAApXIGPAAIAAJXg");
	this.shape_54.setTransform(100.2,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53},{t:this.shape_52}]}).to({state:[{t:this.shape_54},{t:this.shape_52}]},9).wait(80));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(119.2,59.6,2,25.800000000000004);
// library properties:
lib.properties = {
	id: 'DB6C0DD0FA646843AC253D094BCFB5F2',
	width: 160,
	height: 90,
	fps: 24,
	color: "#333333",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['DB6C0DD0FA646843AC253D094BCFB5F2'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;


/************* HTML *************/

var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
export const init = (createjs) => {



	var comp=AdobeAn.getComposition("DB6C0DD0FA646843AC253D094BCFB5F2");
	var lib=comp.getLibrary();
	handleComplete({},comp);
}
function handleComplete(evt,comp) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var lib=comp.getLibrary();
	var ss=comp.getSpriteSheet();
  exportRoot = new lib.stageContent();
	stage = new lib.Stage(canvas);	
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		stage.addChild(exportRoot);
		createjs.Ticker.framerate = lib.properties.fps;
		createjs.Ticker.addEventListener("tick", stage);
	}	    
	//Code to support hidpi screens and responsive scaling.
	AdobeAn.makeResponsive(false,'both',false,1,[canvas,anim_container,dom_overlay_container]);	
	AdobeAn.compositionLoaded(lib.properties.id);
	fnStartAnimation();
}
