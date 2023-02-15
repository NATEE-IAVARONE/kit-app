(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"spreadsheet_atlas_1", frames: [[0,0,64,32],[66,0,64,32],[132,0,64,32],[0,34,64,32],[66,34,64,32],[198,0,32,32],[132,34,32,32],[166,34,31,32]]}
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



(lib.CachedBmp_14 = function() {
	this.initialize(ss["spreadsheet_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["spreadsheet_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["spreadsheet_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["spreadsheet_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["spreadsheet_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["spreadsheet_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["spreadsheet_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["spreadsheet_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



// stage content:
(lib.spreadsheet = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,39];
	// timeline functions:
	this.frame_0 = function() {
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		this.parent.canvas.addEventListener("mouseover", fl_MouseOverHandler.bind(this));
		
		function fl_MouseOverHandler() {
		  this.gotoAndPlay(0);
		}
	}
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(39).call(this.frame_39).wait(1));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AAAAAA").s().p("AgxAyIBjhjIgBBjg");
	this.shape.setTransform(16,18.6);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(11).to({_off:false},0).wait(29));

	// Grid
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#AAAAAA").ss(1,1,1).p("AGQlnIFAAAIAAC0IAACzIAAC0ABQAAIFAAAIAAC0IFAAAABQizIFAAAIAACzIFAAAAGQlnIAAC0IFAAAABQlnIAAC0IAACzIAAC0IAAC0IFAAAAGQlnIlAAAIk/AAIAAC0IAACzIE/AAABQC0IFAAAIAAC0IFAAAIAAi0ArPAAICgAAIAAC0IAAC0IFAAAIE/AAAjvlnIlAAAIAAC0IAACzIFAAAIAAC0IAAC0ArPAAIAAizICgAAIFAAAIE/AAArPC0ICgAAIFAAAIE/AAArPC0IAAC0ICgAAArPC0IAAi0");
	this.shape_1.setTransform(80,45);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(40));

	// TRE
	this.instance = new lib.CachedBmp_8();
	this.instance.setTransform(8.4,64.2,0.5,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).wait(1));

	// DUE
	this.instance_1 = new lib.CachedBmp_9();
	this.instance_1.setTransform(8.15,45.95,0.5,0.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30).to({_off:false},0).wait(10));

	// UNO_
	this.instance_2 = new lib.CachedBmp_10();
	this.instance_2.setTransform(8.15,28.3,0.5,0.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20).to({_off:false},0).wait(20));

	// D
	this.instance_3 = new lib.CachedBmp_11();
	this.instance_3.setTransform(120.25,10.05,0.5,0.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(39).to({_off:false},0).wait(1));

	// C
	this.instance_4 = new lib.CachedBmp_12();
	this.instance_4.setTransform(88.25,10.05,0.5,0.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(30).to({_off:false},0).wait(10));

	// B
	this.instance_5 = new lib.CachedBmp_13();
	this.instance_5.setTransform(56.15,10.25,0.5,0.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(20).to({_off:false},0).wait(20));

	// A
	this.instance_6 = new lib.CachedBmp_7();
	this.instance_6.setTransform(24.1,9.9,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_14();
	this.instance_7.setTransform(24.1,9.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_7}]},11).wait(29));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(87,53,66,29);
// library properties:
lib.properties = {
	id: 'CA6F77F804DA8F42966D8387654DB031',
	width: 160,
	height: 90,
	fps: 24,
	color: "#282828",
	opacity: 1.00,
	manifest: [
		{src:"images/spreadsheet_atlas_1.png?1676492322739", id:"spreadsheet_atlas_1"}
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
an.compositions['CA6F77F804DA8F42966D8387654DB031'] = {
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