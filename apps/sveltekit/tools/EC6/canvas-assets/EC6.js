(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"EC6_atlas_1", frames: [[163,0,75,126],[0,0,83,126],[85,0,76,126]]}
];


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



(lib.CachedBmp_3 = function() {
	this.initialize(ss["EC6_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["EC6_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["EC6_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Tween23 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(-14.1,-21.3,0.3564,0.3564);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.1,-21.3,26.799999999999997,44.900000000000006);


(lib.Tween21 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(-14.85,-21.3,0.3564,0.3564);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.8,-21.3,29.6,44.900000000000006);


(lib.Tween19 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(-12.4,-21.3,0.3564,0.3564);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.4,-21.3,27.1,44.900000000000006);


// stage content:
(lib.EC6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Mask_ (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjOE5IAAl2IMsAAIAAF2g");
	mask.setTransform(60.6,31.3);

	// Text
	this.instance = new lib.Tween23("synched",0);
	this.instance.setTransform(56.25,75.85,1.4028,1.4028);

	this.instance_1 = new lib.Tween21("synched",0);
	this.instance_1.setTransform(82.55,76.15,1.4028,1.4028);

	this.instance_2 = new lib.Tween19("synched",0);
	this.instance_2.setTransform(106.6,76.15,1.4028,1.4028);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{x:82.55,y:76.15}}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{x:82.5,y:71.95}}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{x:82.5,y:70.25}}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{x:82.5,y:68.5}}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{x:82.5,y:66.75}}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{x:82.5,y:65}},{t:this.instance_2,p:{x:106.6,y:76.15}}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{x:82.5,y:63.3}},{t:this.instance_2,p:{x:106.55,y:72.2}}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{x:82.5,y:61.55}},{t:this.instance_2,p:{x:106.55,y:70.5}}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{x:82.5,y:59.8}},{t:this.instance_2,p:{x:106.55,y:68.75}}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{x:82.5,y:58.05}},{t:this.instance_2,p:{x:106.55,y:67}}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{x:82.5,y:56.35}},{t:this.instance_2,p:{x:106.55,y:65.25}}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{x:82.5,y:54.6}},{t:this.instance_2,p:{x:106.55,y:63.55}}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{x:82.5,y:52.85}},{t:this.instance_2,p:{x:106.55,y:61.8}}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{x:82.5,y:51.1}},{t:this.instance_2,p:{x:106.55,y:60.05}}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{x:82.5,y:49.4}},{t:this.instance_2,p:{x:106.55,y:58.3}}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{x:82.5,y:47.65}},{t:this.instance_2,p:{x:106.55,y:56.6}}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{x:82.5,y:45.9}},{t:this.instance_2,p:{x:106.55,y:54.85}}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{x:82.5,y:44.15}},{t:this.instance_2,p:{x:106.55,y:53.1}}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{x:82.5,y:42.45}},{t:this.instance_2,p:{x:106.55,y:51.35}}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{x:82.55,y:40.75}},{t:this.instance_2,p:{x:106.55,y:49.65}}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{x:82.5,y:40.95}},{t:this.instance_2,p:{x:106.55,y:47.9}}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{x:82.5,y:41.15}},{t:this.instance_2,p:{x:106.55,y:46.15}}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{x:82.5,y:41.4}},{t:this.instance_2,p:{x:106.55,y:44.4}}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{x:82.5,y:41.6}},{t:this.instance_2,p:{x:106.55,y:42.7}}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{x:82.5,y:41.8}},{t:this.instance_2,p:{x:106.6,y:40.95}}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{x:82.5,y:42}},{t:this.instance_2,p:{x:106.55,y:41.1}}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{x:82.5,y:42.2}},{t:this.instance_2,p:{x:106.55,y:41.3}}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{x:82.5,y:42.45}},{t:this.instance_2,p:{x:106.55,y:41.55}}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{x:82.5,y:42.65}},{t:this.instance_2,p:{x:106.55,y:41.75}}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{x:82.5,y:42.85}},{t:this.instance_2,p:{x:106.55,y:41.95}}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{x:82.5,y:43.05}},{t:this.instance_2,p:{x:106.55,y:42.15}}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{x:82.5,y:43.25}},{t:this.instance_2,p:{x:106.55,y:42.35}}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{x:82.5,y:43.5}},{t:this.instance_2,p:{x:106.55,y:42.6}}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{x:82.5,y:43.7}},{t:this.instance_2,p:{x:106.55,y:42.8}}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{x:82.5,y:43.9}},{t:this.instance_2,p:{x:106.55,y:43}}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{x:82.5,y:44.1}},{t:this.instance_2,p:{x:106.55,y:43.2}}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{x:82.5,y:44.3}},{t:this.instance_2,p:{x:106.55,y:43.4}}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{x:82.5,y:44.55}},{t:this.instance_2,p:{x:106.55,y:43.65}}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{x:82.5,y:44.75}},{t:this.instance_2,p:{x:106.55,y:43.85}}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{x:82.55,y:44.95}},{t:this.instance_2,p:{x:106.55,y:44.05}}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{x:82.55,y:44.95}},{t:this.instance_2,p:{x:106.55,y:44.25}}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{x:82.55,y:44.95}},{t:this.instance_2,p:{x:106.55,y:44.45}}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{x:82.55,y:44.95}},{t:this.instance_2,p:{x:106.55,y:44.7}}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{x:82.55,y:44.95}},{t:this.instance_2,p:{x:106.55,y:44.9}}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{x:82.55,y:44.95}},{t:this.instance_2,p:{x:106.6,y:45.15}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:56.2,y:72.65},0).wait(1).to({y:70.95},0).wait(1).to({y:69.2},0).wait(1).to({y:67.45},0).wait(1).to({y:65.7},0).wait(1).to({y:64},0).wait(1).to({y:62.25},0).wait(1).to({y:60.5},0).wait(1).to({y:58.75},0).wait(1).to({y:57.05},0).wait(1).to({y:55.3},0).wait(1).to({y:53.55},0).wait(1).to({y:51.8},0).wait(1).to({y:50.1},0).wait(1).to({y:48.35},0).wait(1).to({y:46.6},0).wait(1).to({y:44.85},0).wait(1).to({y:43.15},0).wait(1).to({x:56.25,y:41.45},0).wait(1).to({x:56.2,y:41.65},0).wait(1).to({y:41.85},0).wait(1).to({y:42.1},0).wait(1).to({y:42.3},0).wait(1).to({y:42.5},0).wait(1).to({y:42.7},0).wait(1).to({y:42.9},0).wait(1).to({y:43.15},0).wait(1).to({y:43.35},0).wait(1).to({y:43.55},0).wait(1).to({y:43.75},0).wait(1).to({y:43.95},0).wait(1).to({y:44.2},0).wait(1).to({y:44.4},0).wait(1).to({y:44.6},0).wait(1).to({y:44.8},0).wait(1).to({y:45},0).wait(1).to({y:45.25},0).wait(1).to({y:45.45},0).wait(1).to({x:56.25,y:45.65},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(119.9,70.2,1.2999999999999972,-7.600000000000001);
// library properties:
lib.properties = {
	id: '551B298CE2CC3D4F9A190EA5B4F23BE7',
	width: 160,
	height: 90,
	fps: 24,
	color: "#282828",
	opacity: 1.00,
	manifest: [
		{src:"images/EC6_atlas_1.png?1682110825608", id:"EC6_atlas_1"}
	],
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
an.compositions['551B298CE2CC3D4F9A190EA5B4F23BE7'] = {
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