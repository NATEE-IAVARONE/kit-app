export const setDeps = (deps) => {
    createjs = deps.createjs;
    ({ canvas, anim_container, dom_overlay_container } = deps.g);
  };

export const main = (createjs, g) =>
(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"appHeader_atlas_1", frames: [[258,258,116,32],[376,258,116,32],[0,0,245,188],[172,190,48,48],[494,258,48,48],[544,258,48,48],[594,258,48,48],[644,258,48,48],[694,258,48,48],[744,258,48,48],[794,258,48,48],[844,258,48,48],[894,258,48,48],[944,258,48,48],[0,276,48,48],[50,276,48,48],[100,276,48,48],[258,292,48,48],[308,292,48,48],[358,292,48,48],[408,292,48,48],[458,308,48,48],[508,308,48,48],[558,308,48,48],[608,308,48,48],[658,308,48,48],[708,308,48,48],[758,308,48,48],[808,308,48,48],[50,326,34,34],[858,308,48,48],[908,308,48,48],[958,308,48,48],[0,326,48,48],[247,0,84,84],[333,0,84,84],[419,0,84,84],[505,0,84,84],[591,0,84,84],[677,0,84,84],[763,0,84,84],[849,0,84,84],[935,0,84,84],[247,86,84,84],[333,86,84,84],[419,86,84,84],[505,86,84,84],[591,86,84,84],[677,86,84,84],[763,86,84,84],[849,86,84,84],[935,86,84,84],[247,172,84,84],[333,172,84,84],[419,172,84,84],[505,172,84,84],[591,172,84,84],[677,172,84,84],[763,172,84,84],[849,172,84,84],[935,172,84,84],[0,190,84,84],[86,190,84,84],[172,258,84,84]]}
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
	this.initialize(ss["appHeader_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["appHeader_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["appHeader_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap10 = function() {
	this.initialize(ss["appHeader_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap11 = function() {
	this.initialize(ss["appHeader_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap12 = function() {
	this.initialize(ss["appHeader_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap13 = function() {
	this.initialize(ss["appHeader_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap14 = function() {
	this.initialize(ss["appHeader_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap15 = function() {
	this.initialize(ss["appHeader_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap16 = function() {
	this.initialize(ss["appHeader_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap17 = function() {
	this.initialize(ss["appHeader_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap18 = function() {
	this.initialize(ss["appHeader_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap19 = function() {
	this.initialize(ss["appHeader_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap20 = function() {
	this.initialize(ss["appHeader_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap21 = function() {
	this.initialize(ss["appHeader_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap22 = function() {
	this.initialize(ss["appHeader_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap23 = function() {
	this.initialize(ss["appHeader_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap24 = function() {
	this.initialize(ss["appHeader_atlas_1"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap25 = function() {
	this.initialize(ss["appHeader_atlas_1"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap26 = function() {
	this.initialize(ss["appHeader_atlas_1"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap27 = function() {
	this.initialize(ss["appHeader_atlas_1"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap28 = function() {
	this.initialize(ss["appHeader_atlas_1"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap29 = function() {
	this.initialize(ss["appHeader_atlas_1"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap30 = function() {
	this.initialize(ss["appHeader_atlas_1"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap31 = function() {
	this.initialize(ss["appHeader_atlas_1"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap32 = function() {
	this.initialize(ss["appHeader_atlas_1"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap33 = function() {
	this.initialize(ss["appHeader_atlas_1"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap34 = function() {
	this.initialize(ss["appHeader_atlas_1"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap35 = function() {
	this.initialize(ss["appHeader_atlas_1"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap36 = function() {
	this.initialize(ss["appHeader_atlas_1"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.initialize(ss["appHeader_atlas_1"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.initialize(ss["appHeader_atlas_1"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap8 = function() {
	this.initialize(ss["appHeader_atlas_1"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap9 = function() {
	this.initialize(ss["appHeader_atlas_1"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.fire_heart0001 = function() {
	this.initialize(ss["appHeader_atlas_1"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.fire_heart0002 = function() {
	this.initialize(ss["appHeader_atlas_1"]);
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.fire_heart0003 = function() {
	this.initialize(ss["appHeader_atlas_1"]);
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.fire_heart0004 = function() {
	this.initialize(ss["appHeader_atlas_1"]);
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.fire_heart0005 = function() {
	this.initialize(ss["appHeader_atlas_1"]);
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.fire_heart0006 = function() {
	this.initialize(ss["appHeader_atlas_1"]);
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.fire_heart0007 = function() {
	this.initialize(ss["appHeader_atlas_1"]);
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.fire_heart0008 = function() {
	this.initialize(ss["appHeader_atlas_1"]);
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.fire_heart0009 = function() {
	this.initialize(ss["appHeader_atlas_1"]);
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.fire_heart0010 = function() {
	this.initialize(ss["appHeader_atlas_1"]);
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.fire_heart0011 = function() {
	this.initialize(ss["appHeader_atlas_1"]);
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.fire_heart0012 = function() {
	this.initialize(ss["appHeader_atlas_1"]);
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.fire_heart0013 = function() {
	this.initialize(ss["appHeader_atlas_1"]);
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.fire_heart0014 = function() {
	this.initialize(ss["appHeader_atlas_1"]);
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.fire_heart0015 = function() {
	this.initialize(ss["appHeader_atlas_1"]);
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.fire_heart0016 = function() {
	this.initialize(ss["appHeader_atlas_1"]);
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.fire_heart0017 = function() {
	this.initialize(ss["appHeader_atlas_1"]);
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.fire_heart0018 = function() {
	this.initialize(ss["appHeader_atlas_1"]);
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.fire_heart0019 = function() {
	this.initialize(ss["appHeader_atlas_1"]);
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.fire_heart0020 = function() {
	this.initialize(ss["appHeader_atlas_1"]);
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.fire_heart0021 = function() {
	this.initialize(ss["appHeader_atlas_1"]);
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.fire_heart0022 = function() {
	this.initialize(ss["appHeader_atlas_1"]);
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.fire_heart0023 = function() {
	this.initialize(ss["appHeader_atlas_1"]);
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.fire_heart0024 = function() {
	this.initialize(ss["appHeader_atlas_1"]);
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.fire_heart0025 = function() {
	this.initialize(ss["appHeader_atlas_1"]);
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.fire_heart0026 = function() {
	this.initialize(ss["appHeader_atlas_1"]);
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.fire_heart0027 = function() {
	this.initialize(ss["appHeader_atlas_1"]);
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.fire_heart0028 = function() {
	this.initialize(ss["appHeader_atlas_1"]);
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.fire_heart0029 = function() {
	this.initialize(ss["appHeader_atlas_1"]);
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.fire_heart0030 = function() {
	this.initialize(ss["appHeader_atlas_1"]);
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();
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


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Bitmap36();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,17,17), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Fire_Heart
	this.instance = new lib.Bitmap35();

	this.instance_1 = new lib.Bitmap34();

	this.instance_2 = new lib.Bitmap33();

	this.instance_3 = new lib.Bitmap32();

	this.instance_4 = new lib.Bitmap31();

	this.instance_5 = new lib.Bitmap30();

	this.instance_6 = new lib.Bitmap29();

	this.instance_7 = new lib.Bitmap28();

	this.instance_8 = new lib.Bitmap27();

	this.instance_9 = new lib.Bitmap26();

	this.instance_10 = new lib.Bitmap25();

	this.instance_11 = new lib.Bitmap24();

	this.instance_12 = new lib.Bitmap23();

	this.instance_13 = new lib.Bitmap22();

	this.instance_14 = new lib.Bitmap21();

	this.instance_15 = new lib.Bitmap20();

	this.instance_16 = new lib.Bitmap19();

	this.instance_17 = new lib.Bitmap18();

	this.instance_18 = new lib.Bitmap17();

	this.instance_19 = new lib.Bitmap16();

	this.instance_20 = new lib.Bitmap15();

	this.instance_21 = new lib.Bitmap14();

	this.instance_22 = new lib.Bitmap13();

	this.instance_23 = new lib.Bitmap12();

	this.instance_24 = new lib.Bitmap11();

	this.instance_25 = new lib.Bitmap10();

	this.instance_26 = new lib.Bitmap9();

	this.instance_27 = new lib.Bitmap8();

	this.instance_28 = new lib.Bitmap7();

	this.instance_29 = new lib.Bitmap6();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48,48);


(lib.sihouette = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(54,54,54,0.455)").s().p("AAAAKIAAgBIAAgSIABAAIAAASIAAABIgBAAg");
	this.shape.setTransform(32.025,81.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(43,43,43,0.318)").s().p("AAAAGIAAgCIAAgJQACAFgCAGg");
	this.shape_1.setTransform(32.2694,74.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(55,55,55,0.671)").s().p("AAAAVIAAgqIAAAAIAAABQABAWgBAVIAAgCg");
	this.shape_2.setTransform(32.1667,78);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(38,38,38,0.714)").s().p("AAAAHIAAgCIAAgLQABAEAAAHIAAACIgBAAg");
	this.shape_3.setTransform(6.43,81.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(40,40,40,0.714)").s().p("AAAAMIAAgYQACAKgBANIAAACIgBgBg");
	this.shape_4.setTransform(6.1393,76.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(31,31,31,0.741)").s().p("AAAAIQAAgEgBgBIAAgCIAAgHIABgCIABAAIAAAPIAAABg");
	this.shape_5.setTransform(0.15,69.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(43,43,43,0.718)").s().p("AAAAFIAAAAQACgIgDgBIAAgCQAHAFgGAIg");
	this.shape_6.setTransform(5.7286,67.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(5,5,5,0.071)").s().p("AACAFIAAgBQgFgBABgFIACgCIAAAAQAFABgDAIg");
	this.shape_7.setTransform(5.4796,67.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(229,229,229,0.988)").s().p("AgUAFIAAgBIAAgDIABAAIAAgBIACAAQAFgJAQAEIABABQAKADAGAIIAAAAQgUgKgVAIg");
	this.shape_8.setTransform(3.6,64.626);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(43,43,43,0.267)").s().p("AAAAHIAAgBIAAgMQACAFgCAIg");
	this.shape_9.setTransform(32.2694,72.775);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(41,41,41,0.341)").s().p("AAAASIAAgjIABAAIAAAiIAAABg");
	this.shape_10.setTransform(32.025,69.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(244,244,244,0.996)").s().p("AAFARQgGgIgIgFQgJgEgGgHQAHgFAEgKIAAgBQAXASAOAYIABADQgDACgDAAQgHAAgHgHg");
	this.shape_11.setTransform(29.475,62.1195);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(60,60,60,0.51)").s().p("AAAAGIAAgMQACAEgCAHIAAABg");
	this.shape_12.setTransform(33.7,46.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(61,61,61,0.596)").s().p("AAAAWIAAgaIAAgRIABAAIAAARIAAAYIAAACg");
	this.shape_13.setTransform(31.425,48.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(150,150,150,0.969)").s().p("AgGAAIAFAAIABAAQABABAFgBIABAAIAAAAIgHABQgDAAgDgBg");
	this.shape_14.setTransform(22.175,31.5194);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(234,234,234,0.992)").s().p("AgaAHQAagIAbgHIAAACQAAAHgOAEQgNADgSAAIgBABIgCAAQgDAAgCgCg");
	this.shape_15.setTransform(24.7258,30.655);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(51,51,51,0.698)").s().p("AAAAHIAAgOQABAGgBAJIAAABIAAgCg");
	this.shape_16.setTransform(40.2071,33.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(44,44,44,0.714)").s().p("AAAAGIAAgLIABAAIAAAJIAAACg");
	this.shape_17.setTransform(6.675,37.85);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(22,22,22,0.29)").s().p("AAAAGIAAgBIAAgKIABAAIAAAKIAAABIgBAAg");
	this.shape_18.setTransform(6.675,36.65);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(41,41,41,0.816)").s().p("AAAAHIAAgPIAAAAIAAACQACAIgCAHIAAgCg");
	this.shape_19.setTransform(7.25,32.35);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(33,33,33,0.561)").s().p("AAAAFIAAgKIABAAIAAABQABAHgCADIAAgBg");
	this.shape_20.setTransform(7.4,29.875);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(124,124,124,0.973)").s().p("AAAAMIAAgXIABAAIAAAWIAAABg");
	this.shape_21.setTransform(13.075,32.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(114,114,114,0.969)").s().p("AAAAUIAAgCIAAglQACASgCAVg");
	this.shape_22.setTransform(14.89,23.725);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(49,49,49,0.596)").s().p("AgDABQACgBAEgBIABAAIAAABIgHACIAAgBg");
	this.shape_23.setTransform(11.85,23.25);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(47,47,47,0.475)").s().p("AAAAKIAAgTIABAAIAAASIAAABg");
	this.shape_24.setTransform(12.475,6.15);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(64,64,64,0.561)").s().p("AAEABIgJAAIAAgBIAJAAIACAAIAAABIgCAAg");
	this.shape_25.setTransform(19.075,0.075);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(51,51,51,0.569)").s().p("AAAAEIAAgJIABAAIAAACQABAFgCAEIAAgCg");
	this.shape_26.setTransform(24.9393,13.275);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(251,251,251,0.996)").s().p("Ag2CCQgCgmgHgjIAAgBIAAgXIAAgBIAAgCQAMgWAFgbIAAgBIABAAQACgWgDgRIAAgBIgBgBIAAgCIAAgNQAGgNAMgHIABgCIAOAtIABgBQAHgJADgNIAAgCQAhgSAXgdQAAAAABAAQAAgBAAAAQAAgBAAgBQAAAAgBgBQAIACACAIIAAAAIAAAHIAAABIgpBBQgvBNgcBjg");
	this.shape_27.setTransform(19.5,27.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(88,88,88,0.839)").s().p("AgBACIAAgFIADACIAAABIgBAAIgCAEIAAgCg");
	this.shape_28.setTransform(26.05,16.25);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(55,55,55,0.537)").s().p("AAAAFIAAgBIAAgIQACADgCAGIAAAAg");
	this.shape_29.setTransform(26.6281,8.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(50,50,50,0.522)").s().p("AgFAAIALAAIAAAAIgCABIgCAAQgEAAgDgBg");
	this.shape_30.setTransform(20.2,0.23);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(1,1,1,0.992)").s().p("AgdBCQAAgHgDgDQgJgJgDgMQgEgMgIgFQgBgNgGgHQgHgMAHgIIAAgBQgEgHgCgKIAAgCIAAgTIAAgCIAAgCQAHgkAlgHIAAgBQAIABAGgCIACAAIAJAAIABAAQADABAHAAIABAAIAeAKIACAAQANANAGAWIAAABIABALIAAAAIABACQAAAJgCAEQACAEAFAEIAAABIAAAJIAAABIAAACQgDASgMALIAAABIgCAAIAAAKIAAACIAAAIIAAABQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAAAQgYAdghASIAAACQgDANgHAJIgBABIgOgtg");
	this.shape_31.setTransform(19.55,11.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(54,54,54,0.537)").s().p("AAAAFIAAgKQACADgBAGIgBABg");
	this.shape_32.setTransform(25.9393,5.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(54,54,54,0.651)").s().p("AAAAKIAAgBIAAgTIABAAIAAATIAAABIgBAAg");
	this.shape_33.setTransform(42.325,46.15);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(57,57,57,0.549)").s().p("AAAgIQACAHgBAIIgBABIAAgQg");
	this.shape_34.setTransform(41.4893,41.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(0,0,0,0.996)").s().p("ABpFMIh0AAIAAgCQgCgRgEgPIgBAAQgGAPgEAPIAAACIAAACIgCAAIh1AAIAAgCQABgIgCgEIAAgBQgCgQAAgSIAAgBQABgOgCgKIAAgCQABgTgCgRIgCAAQgSATgfgBIgBgBQgGgLABgTIAAgBIAAgQIAAgBIAAgCQAHgMAFgOIABgCQAVgJAUALIAAAAQgFgKgLgDIAAgBQgRgDgGAJIgBAAIAAgBQgCgFABgIQAEgcALgXIAAgBQAFg1AMgsIACgFQAKgpAHgqIABgJIAAgCIAAgKIAAgBIAAgMIAAgBIAAgIQAEgHAAgKIAAgBQADgHgCgJIAAgCIAAAAIAAgJQADgEgBgHIAAgCIAAgCIAAgGQACgeARgNIABgBQALgBAHgFIACAAIAIgDIAAgBIAAgCQANgFAKgHIABAAIABAAIAAABIAAAmIAAACIAAABQgFAbgLAWIAAACIAAACIgCAAIABAXIABAAQAGAkADAlIAAAAQAchiAvhOIAqhBIADgFIABAAQAeAkA3AKQASAEAMAIQALAKgCAWQALAiAEAnIAAACIAAAQIAAABQAJAPACAYIAAACIABAMIAAAAIAAAFIAAABIABARIAAABQAGANACAQIAAABIAAAUIAAABIAAACIgBADQgDAGgFAFQAAASgIAKQgXAggLAqQgIAGgEAHQgMAagQAUIgBAAQgJgLAHASIAAACQgCAJgGAFIAAACIgBAAIAAAkIABAAQACADAAAGIgBABIAAANIAAACIAAAFIAAABIAAAKIAAACIAAACIAAACIgBAAIAAArIAAACIAAABIgBAAIAAATIAAACIgCAAgAidC2IgBAAIgCABQgBAHAGABIAAABIAAABQAGgJgIgEIAAACgABEBpQgEAKgHAGQAGAHAJAFQAIAFAHAIQALAKAJgGIgBgDQgOgYgYgSIAAAAgABlgPIABAaIAAAAQABANAEgGQAJgQAHgRIACgFIAAgBQABgIgDgEIAAAAQgKgKgCgTIgBAAQgDAOgFANIAAABIAAABIgBAAIAAASgAACixQAFADAJgCIAAgBQASAAANgDQAPgEgBgIIAAgCQgaAHgbAKIgBAAIgFAAg");
	this.shape_35.setTransform(21.2679,49.25);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(56,56,56,0.639)").s().p("AAAAGIAAgLQACAEgBAGIAAABg");
	this.shape_36.setTransform(41.3393,39.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sihouette, new cjs.Rectangle(0,0,42.4,82.4), null);


(lib.heartOnFire = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// heartOnFire
	this.instance = new lib.fire_heart0001();

	this.instance_1 = new lib.fire_heart0002();

	this.instance_2 = new lib.fire_heart0003();

	this.instance_3 = new lib.fire_heart0004();

	this.instance_4 = new lib.fire_heart0005();

	this.instance_5 = new lib.fire_heart0006();

	this.instance_6 = new lib.fire_heart0007();

	this.instance_7 = new lib.fire_heart0008();

	this.instance_8 = new lib.fire_heart0009();

	this.instance_9 = new lib.fire_heart0010();

	this.instance_10 = new lib.fire_heart0011();

	this.instance_11 = new lib.fire_heart0012();

	this.instance_12 = new lib.fire_heart0013();

	this.instance_13 = new lib.fire_heart0014();

	this.instance_14 = new lib.fire_heart0015();

	this.instance_15 = new lib.fire_heart0016();

	this.instance_16 = new lib.fire_heart0017();

	this.instance_17 = new lib.fire_heart0018();

	this.instance_18 = new lib.fire_heart0019();

	this.instance_19 = new lib.fire_heart0020();

	this.instance_20 = new lib.fire_heart0021();

	this.instance_21 = new lib.fire_heart0022();

	this.instance_22 = new lib.fire_heart0023();

	this.instance_23 = new lib.fire_heart0024();

	this.instance_24 = new lib.fire_heart0025();

	this.instance_25 = new lib.fire_heart0026();

	this.instance_26 = new lib.fire_heart0027();

	this.instance_27 = new lib.fire_heart0028();

	this.instance_28 = new lib.fire_heart0029();

	this.instance_29 = new lib.fire_heart0030();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,84,84);


(lib.ClickArea = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(51,51,51,0.008)").s().p("Ah3B4IAAjvIDvAAIAADvg");
	this.shape.setTransform(12,12);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClickArea, new cjs.Rectangle(0,0,24,24), null);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(10).call(this.frame_19).wait(1));

	// Masked_fire_heart (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ai9j0IF+A1QgVAagaArQgzBYgWBaQgiCRAAAkIjnAIg");
	mask.setTransform(19.3,40.525);

	// heartOnFire
	this.heartOnFire = new lib.heartOnFire();
	this.heartOnFire.name = "heartOnFire";
	this.heartOnFire.setTransform(41.35,55.75,0.5,0.5,0,0,0,42,42);

	var maskedShapeInstanceList = [this.heartOnFire];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.heartOnFire).to({x:24.8,y:41.55},9).to({x:41.35,y:55.75},10).wait(1));

	// avatar
	this.avatar = new lib.sihouette();
	this.avatar.name = "avatar";
	this.avatar.setTransform(33.6,46.2,1,1,0,0,0,21.2,41.2);
	this.avatar.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,4);

	this.timeline.addTween(cjs.Tween.get(this.avatar).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.8,0,59.6,96);


(lib.LitOnHoverHeart = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		if (this.alreadySet) return;
		this.alreadySet = true;
		
		this.stop();
		
		this.clickArea.on('rollover', () => {
		  stage.isMouseOver || this.play();
		  stage.isMouseOver = true;
		});
		
		this.clickArea.on('rollout', () => {
		  this.currentFrame && this.play();
		  stage.isMouseOver = false;
		});
	}
	this.frame_9 = function() {
		stage.isMouseOver && this.stop();
	}
	this.frame_19 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(10).call(this.frame_19).wait(1));

	// ClickArea
	this.clickArea = new lib.ClickArea();
	this.clickArea.name = "clickArea";
	this.clickArea.setTransform(12,12,1,1,0,0,0,12,12);

	this.timeline.addTween(cjs.Tween.get(this.clickArea).wait(20));

	// Animated
	this.animatedHeart = new lib.Symbol2();
	this.animatedHeart.name = "animatedHeart";
	this.animatedHeart.setTransform(12,12,0.5,0.5,0,0,0,24,24);
	this.animatedHeart.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.animatedHeart).to({alpha:1},9).to({alpha:0.0117},10).wait(1));

	// Disabled
	this.disabledHeart = new lib.Symbol3();
	this.disabledHeart.name = "disabledHeart";
	this.disabledHeart.setTransform(12.5,15.5,1,1,0,0,0,8.5,8.5);
	this.disabledHeart.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, -100, 0))];
	this.disabledHeart.cache(-2,-2,21,21);

	this.timeline.addTween(cjs.Tween.get(this.disabledHeart).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25,28);


(lib.Subtitle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Lit_on_hover_Heart
	this.litOnHoverHeart = new lib.LitOnHoverHeart();
	this.litOnHoverHeart.name = "litOnHoverHeart";
	this.litOnHoverHeart.setTransform(66.45,90.2,1,1,0,0,0,12.5,14);

	this.timeline.addTween(cjs.Tween.get(this.litOnHoverHeart).wait(1));

	// Made_with_heart_by_Natee
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(0.8,82.7,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_2();
	this.instance_1.setTransform(70.8,82.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Subtitle, new cjs.Rectangle(0.8,76.2,128,28), null);


(lib.Logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// KIT
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Subtitle
	this.subtitle = new lib.Subtitle();
	this.subtitle.name = "subtitle";
	this.subtitle.setTransform(64.4,52.1,1,1,0,0,0,64.4,52.1);

	this.timeline.addTween(cjs.Tween.get(this.subtitle).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Logo, new cjs.Rectangle(0,0,128.8,104.2), null);


// stage content:
(lib.stageContent = function(mode,startPosition,loop,reversed) {
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
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		const frequency = 3;
		stage.enableMouseOver(frequency);
		
		const that = this;
		
		const UserMode = {
			NORMAL: 'NORMAL',
			DEV: 'DEV',
		};
		
		let userMode = UserMode.NORMAL;
		
		this.logo.subtitle.litOnHoverHeart.clickArea.on('click', () => {
			that.man.alpha = 0;
		  that.logo.alpha = 1;
		
		  that.logo.subtitle.litOnHoverHeart.gotoAndPlay(11);
		  that.man.gotoAndPlay(0);
		
		  that.on('tick', fade);
		});
		
		that.man.on('click', () => {
			that.man.alpha = 1;
		  that.logo.alpha = 0;
		
		  that.logo.subtitle.litOnHoverHeart.gotoAndPlay(0);
		  that.man.gotoAndPlay(10);
		
			that.on('tick', fadeBack);
		});
		
		function fade() {
		  that.man.alpha += 0.2;
		  that.logo.alpha -= 0.2;
		  that.logo.alpha <= 0 && that.removeAllEventListeners('tick');
		}
		function fadeBack() {
		  that.man.alpha -= 0.2;
		  that.logo.alpha += 0.2;
		  that.logo.alpha >= 1 && that.removeAllEventListeners('tick');
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Logo
	this.logo = new lib.Logo();
	this.logo.name = "logo";
	this.logo.setTransform(65.45,40.9,1,1,0,0,0,64.4,52.1);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// Man
	this.man = new lib.Symbol4();
	this.man.name = "man";
	this.man.setTransform(301.4,51.1,1,1,0,0,0,31.7,48.5);
	this.man.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.man).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(165.1,33.8,168.00000000000003,65.8);
// library properties:
lib.properties = {
	id: '82D64AE21E87C442B698A0280CCCADEA',
	width: 328,
	height: 90,
	fps: 24,
	color: "#0F0F0F",
	opacity: 1.00,
	manifest: [
		{src:"canvasImages/app-header/appHeader_atlas_1.png?1673731028197", id:"appHeader_atlas_1"}
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


/************* HTML *************/

var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
export const init = (createjs) => {



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
	var ssMetadata = lib.ssMetadata;
	for(var i=0; i<ssMetadata.length; i++) {
		ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
	}
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