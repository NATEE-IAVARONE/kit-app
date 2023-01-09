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
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Arrow_Head = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E5E5E5").s().p("AgSAdIgBgCIAAgFQAAgCAEgCIAZgSIgZgRQgEgCAAgDIAAgEIABgBIACgBIABABIAgAWIACABIABADIAAADIgBACIgCACIggAXIgBAAIgCAAg");
	this.shape.setTransform(1.975,2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Arrow_Head, new cjs.Rectangle(0,0,4,5.8), null);


// stage content:
(lib.testID_location_association = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		/* Mouse Over Event
		Mousing over the symbol instance executes a function in which you can add your own custom code.
		
		Instructions:
		1. Add your custom code on a new line after the line that says "// Start your custom code" below.
		The code will execute when the symbol instance is moused over.
		frequency is the number of the times event should be triggered.
		*/
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.parent.canvas.addEventListener("mouseover", fl_MouseOverHandler.bind(this));
		
		function fl_MouseOverHandler() {
		  this.gotoAndPlay(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24));

	// Arrow_Head_01
	this.instance = new lib.Arrow_Head();
	this.instance.setTransform(65.45,15.2,1,1,0,0,0,1.9,2.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:115.3,y:15.4},23).wait(1));

	// Arrow_Head_02
	this.instance_1 = new lib.Arrow_Head();
	this.instance_1.setTransform(65.45,44.55,1,1,0,0,0,1.9,2.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({guide:{path:[65.5,44.6,73.8,44.8,80.2,49.5,84,52.4,90.2,60,96.4,67.6,100.4,70.6,106.9,75.3,115.4,75.5], orient:'fixed'}},23).wait(1));

	// Arrow_Head_03
	this.instance_2 = new lib.Arrow_Head();
	this.instance_2.setTransform(65.15,75,1,1,0,0,0,1.9,2.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({guide:{path:[65.2,75,73.4,75.2,79.8,70.5,83.7,67.7,89.9,60,96.2,52.5,100.1,49.6,106.7,44.9,115.2,45], orient:'fixed'}},23).wait(1));

	// Bodies_Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Ai/GPIAAq5IIMAAIAAK5g");
	var mask_graphics_1 = new cjs.Graphics().p("Ai0GPIAAq5IIMAAIAAK5g");
	var mask_graphics_2 = new cjs.Graphics().p("AipGPIAAq5IIMAAIAAK5g");
	var mask_graphics_3 = new cjs.Graphics().p("AifGPIAAq5IIMAAIAAK5g");
	var mask_graphics_4 = new cjs.Graphics().p("AiUGPIAAq5IIMAAIAAK5g");
	var mask_graphics_5 = new cjs.Graphics().p("AiJGPIAAq5IIMAAIAAK5g");
	var mask_graphics_6 = new cjs.Graphics().p("Ah+GPIAAq5IIMAAIAAK5g");
	var mask_graphics_7 = new cjs.Graphics().p("AhzGPIAAq5IIMAAIAAK5g");
	var mask_graphics_8 = new cjs.Graphics().p("AhoGPIAAq5IIMAAIAAK5g");
	var mask_graphics_9 = new cjs.Graphics().p("AheGPIAAq5IIMAAIAAK5g");
	var mask_graphics_10 = new cjs.Graphics().p("AhTGPIAAq5IIMAAIAAK5g");
	var mask_graphics_11 = new cjs.Graphics().p("AhIGPIAAq5IIMAAIAAK5g");
	var mask_graphics_12 = new cjs.Graphics().p("Ag9GPIAAq5IIMAAIAAK5g");
	var mask_graphics_13 = new cjs.Graphics().p("AgyGPIAAq5IIMAAIAAK5g");
	var mask_graphics_14 = new cjs.Graphics().p("AgnGPIAAq5IIMAAIAAK5g");
	var mask_graphics_15 = new cjs.Graphics().p("AgdGPIAAq5IIMAAIAAK5g");
	var mask_graphics_16 = new cjs.Graphics().p("AgSGPIAAq5IIMAAIAAK5g");
	var mask_graphics_17 = new cjs.Graphics().p("AgHGPIAAq5IIMAAIAAK5g");
	var mask_graphics_18 = new cjs.Graphics().p("AADGPIAAq5IINAAIAAK5g");
	var mask_graphics_19 = new cjs.Graphics().p("AAOGPIAAq5IINAAIAAK5g");
	var mask_graphics_20 = new cjs.Graphics().p("AAZGPIAAq5IINAAIAAK5g");
	var mask_graphics_21 = new cjs.Graphics().p("AAjGPIAAq5IINAAIAAK5g");
	var mask_graphics_22 = new cjs.Graphics().p("AAuGPIAAq5IINAAIAAK5g");
	var mask_graphics_23 = new cjs.Graphics().p("AA5GPIAAq5IINAAIAAK5g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:33.3,y:39.925}).wait(1).to({graphics:mask_graphics_1,x:34.3826,y:39.925}).wait(1).to({graphics:mask_graphics_2,x:35.4652,y:39.925}).wait(1).to({graphics:mask_graphics_3,x:36.5478,y:39.925}).wait(1).to({graphics:mask_graphics_4,x:37.6304,y:39.925}).wait(1).to({graphics:mask_graphics_5,x:38.713,y:39.925}).wait(1).to({graphics:mask_graphics_6,x:39.7957,y:39.925}).wait(1).to({graphics:mask_graphics_7,x:40.8783,y:39.925}).wait(1).to({graphics:mask_graphics_8,x:41.9609,y:39.925}).wait(1).to({graphics:mask_graphics_9,x:43.0435,y:39.925}).wait(1).to({graphics:mask_graphics_10,x:44.1261,y:39.925}).wait(1).to({graphics:mask_graphics_11,x:45.2087,y:39.925}).wait(1).to({graphics:mask_graphics_12,x:46.2913,y:39.925}).wait(1).to({graphics:mask_graphics_13,x:47.3739,y:39.925}).wait(1).to({graphics:mask_graphics_14,x:48.4565,y:39.925}).wait(1).to({graphics:mask_graphics_15,x:49.5391,y:39.925}).wait(1).to({graphics:mask_graphics_16,x:50.6217,y:39.925}).wait(1).to({graphics:mask_graphics_17,x:51.7043,y:39.925}).wait(1).to({graphics:mask_graphics_18,x:52.787,y:39.925}).wait(1).to({graphics:mask_graphics_19,x:53.8696,y:39.925}).wait(1).to({graphics:mask_graphics_20,x:54.9522,y:39.925}).wait(1).to({graphics:mask_graphics_21,x:56.0348,y:39.925}).wait(1).to({graphics:mask_graphics_22,x:57.1174,y:39.925}).wait(1).to({graphics:mask_graphics_23,x:58.2,y:39.925}).wait(1));

	// Arrow_Body_03
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1,3,true).p("Aj3CVQBSACBAgvQAmgcA+hMQA8hKAngcQBCgvBUAB");
	this.shape.setTransform(90.175,60.1263);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(24));

	// Arrow_Body_02
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(1,1,1,3,true).p("Aj4iZQBSABBAAwQAmAdA/BLQA8BMAoAdQBCAwBUAB");
	this.shape_1.setTransform(90.425,59.975);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(24));

	// Arrow_Body_01
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CCCCCC").ss(1,1,1,3,true).p("Aj3AAQCAABB2gBQCAAAB5AB");
	this.shape_2.setTransform(91.225,15.3);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(24));

	// ID_and_Locations
	this.text = new cjs.Text("59352", "bold 10px 'Roboto'", "#E5E5E5");
	this.text.lineHeight = 14;
	this.text.lineWidth = 36;
	this.text.parent = this;
	this.text.setTransform(121.75,69.05);

	this.text_1 = new cjs.Text("59342", "bold 10px 'Roboto'", "#E5E5E5");
	this.text_1.lineHeight = 14;
	this.text_1.lineWidth = 36;
	this.text_1.parent = this;
	this.text_1.setTransform(121.75,9.25);

	this.text_2 = new cjs.Text("59262", "bold 10px 'Roboto'", "#E5E5E5");
	this.text_2.lineHeight = 14;
	this.text_2.lineWidth = 36;
	this.text_2.parent = this;
	this.text_2.setTransform(121.75,39.15);

	this.text_3 = new cjs.Text("SUROCKFO", "bold 10px 'Roboto'", "#E5E5E5");
	this.text_3.textAlign = "right";
	this.text_3.lineHeight = 14;
	this.text_3.lineWidth = 56;
	this.text_3.parent = this;
	this.text_3.setTransform(58,69.05);

	this.text_4 = new cjs.Text("STDOUGLA", "bold 10px 'Roboto'", "#E5E5E5");
	this.text_4.textAlign = "right";
	this.text_4.lineHeight = 14;
	this.text_4.lineWidth = 56;
	this.text_4.parent = this;
	this.text_4.setTransform(58,9.25);

	this.text_5 = new cjs.Text("JMMARKS", "bold 10px 'Roboto'", "#E5E5E5");
	this.text_5.textAlign = "right";
	this.text_5.lineHeight = 14;
	this.text_5.lineWidth = 56;
	this.text_5.parent = this;
	this.text_5.setTransform(58,39.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(24));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(80,52.3,79.80000000000001,33.2);
// library properties:
lib.properties = {
	id: '82D64AE21E87C442B698A0280CCCADEA',
	width: 160,
	height: 90,
	fps: 24,
	color: "#282828",
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
an.compositions['82D64AE21E87C442B698A0280CCCADEA'] = {
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