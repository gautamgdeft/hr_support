(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AgxAAIBjAA");
	this.shape.setTransform(0,43.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#86B4D6").s().p("AovAwIjGheQiSg9gTiIQCrChLvAdQLwgdCrihQgTCIiSA9IjGBeQn+C9gmAHIgDAAQg0AAoEjEg");
	this.shape_1.setTransform(0,14.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4D83AC").s().p("AgxGvIn+jyQIVDLAmgHQAmgGH+i+In+DygAuahmIgDgiQgGikAQiCIcnAAQAQCCgGCkIgDAiQirChrwAcQrvgcirihg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.7,-43.1,185.5,87.3);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AFImfQADATgLAmQgIAxgCAaQgMCGBBBtIABAGQABAKABAJQAXDilyFpQljiogfl7QA3hYASh+IAVh+IAUh/QAPhSBPgdQA6gUA3ACQCGABBrAnIAOAFQAMAFALAFADsoCQARAIAOAJQAMAJALAJQAZAYALAfQABAEABAE");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DEB17F").s().p("AlvhRQA3hZASh+IAVh+IACAEIDbFTQAtAeAoABQArAAAngfIDNmBIgSBWIAIgMQgMCGBBBtIABAHIACATQAXDhlyFpQljingfl7g");
	this.shape_1.setTransform(0,10.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C2894C").s().p("AhSEaIjblSIAVh/QAPhRBMgeIBxgSIBWAGIAjAFQBFAJAzAQIAOAFIAXAKIAEACQARAIAOAJIAXASQAZAYALAfIACAIIAAABQAIAfgHAmQgDAigQAdQACgaAIgwQAJgfAAgSIgBgJIABAJQAAASgJAfQgIAwgCAaIgIAMIAShWIjNGAQgnAfgrAAQgogBgtgeg");
	this.shape_2.setTransform(3,-25.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.7,-58.2,75.6,116.5);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4A4A4A").s().p("AorknICGhXIBkg0IA4BhID2FGIC0jzIB+jSIENDUIotLNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.6,-46.5,111.2,93.1);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AChBwQCPiOCHECQAOAaAOAfQAtjdgRiAQgGgfgHgcQghh5hBguQgZgSgfgGQgMgDgHgEQAIA4AUA4QAIgogEgjAigBwQBEBWBgB8QBZh8BEhWQCVjAAbiBAlQjRQAfg4ADg0QgOAAgMADQgjAIgcAWQg7AvgfByQgHAcgGAfQgRCAAtDdQAKgVAJgTQCMkYCTCTQiVjAgbiBQgIgoAEgj");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4A4A4A").s().p("AmGj5QAcgWAjgIIgMAeQgEAjAIAoQAbCBCVDAQiTiTiMEYQg6k9ByjUgAChCTQCWjAAaiBQAJgogEgjIgNgeQAeAGAaASQBABjAOCCQAOCBglCgQiIkDiPCPg");
	this.shape_1.setTransform(-0.1,-3.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2D2D2D").s().p("AG3D2QAliggNiAQgPiChAhjQBBAtAgB5QAIAcAFAgQASB/guDdQgNgegOgbgAntgtQAFggAHgcQAfhyA7gvQhyDUA7E9IgTAoQgujdASh/gAE1kuQAHAEAMADIANAeQAEAigIApQgVg5gHg3gAlUkJIAMgeQAMgDAOgBQgDA0gfA5QgIgpAEgig");
	this.shape_2.setTransform(0,-1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.9,-33.1,101.8,66.4);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ACogqIgRA2QBNALBEAyIAEgWQgkhMhggRgAkoAAQB9gQBdAPIAAhDQiJgUhUBHg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#323232").s().p("ACXAMIARg2QBgARAkBMIgEAWQhEgyhNgLgAkrgRQBUhHCJAUIAABDQhdgPh9AQg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31,-8.3,62,16.6);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AmlAtIg2BQIiCDCIiCExQAAAGAAAFQAEAqAnglICrkFIgvCmIgaDWQAMAlAkgPQAAAAABAAQAFgDAFgDIA8jZIBCh6AmlAtQifAEgmgbQgmgZAcgiQBUgOB4AAQACAAABAAQACAAABAAQBfgCBRAjQAZAKAYAOAGzsuQjlCliREIQiGD2ipB5Ag2ClQAAAAABABQABANgBAPQgLBrixDYQgBAEgBAEQg5CmgKBWQgGAHgGAEIgBABQgaATgTgkIAwkRIg4CAIghCjQgCACgBACQAAAAgBABQglArgUgwIAXixIAmixAmlAtQBMC2CNgzQAAgBAAAAQAGgEAFgEAodFcQAOAMANAKQAkAbAmAWQAPAJAQAIQA2AgA5AQAgtCiQJHlcDGkh");
	this.shape.setTransform(73.6,83.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C2894C").s().p("AgKDAIA7iLIAgAKIgHALIAAAGIg4CAIggCjIgDAEgABWDgQAMhEAVg8IABgBIAAgBIACgHIADgGIAAgCIABgBIAAAAIABgEIAAgBIAAAAIABAAIAEgLQCOh8AlizQAFgVADgVQAJAPAGAPIAAABIABACQAEANACANQgLBrixDXIgCAIQg5ClgKBXQgGAGgGAFQABhNANhEgAiYFmIAhjbIBKiLIAfARIhCB6Ig8DZIgKAFgAlUDYQBghtBiixIAbAVIgHAJIirEFQgSARgLAAQgMAAgCgWgAhFkfIgLgHIA2hQQBLC3CNgzQg+Asg3AAQhNAAhBhZg");
	this.shape_1.setTransform(34.1,125.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DEB180").s().p("AhLGZIAXiyIAmixIgfgRQgmgWgkgaQAkAaAmAWIhKCMIghDaIACAEIgBABQgkAOgMglIAajVIAvimIAHgJIgbgVQhiCwhgBtIAAgKICCkwICCjDIALAHQBvCYCUhsQiNA0hLi3QifAEgmgaQgmgbAcghQBUgOB4gBIADAAIADAAQBegCBRAjQAZALAYAOQB0A9AXBgIAAACIABACQABAMgBAPQgCgMgEgNIgBgCIAAgCQgGgOgJgPQgDAVgFAVQglCziOB7IgEALIgBABIAAAAIAAABIgBADIAAABIgBABIAAABIgDAHIgCAHIAAABIgBAAQgVA9gMBEQgNBDgBBOIgBAAQgaATgTgjIAwkSIAAgFIAHgLIgggLIg7CMIgHC2IgBABQgRAVgOAAQgPAAgLgZgABgBnQg5gRg1ggQA1AgA5ARgAC+jNIAAAAIAAAAIALgJIgLAJgAgtAlIAAAAg");
	this.shape_2.setTransform(34.1,121.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DEB17F").s().p("Ak4HxIAAgCQgXhgh0g9QgYgOgZgLQCph4CHj1QCRkIDkilQBPg0B3BvQC0CbhNB9QjGEfpHFdIgIAFIgBgCg");
	this.shape_3.setTransform(99.4,49.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,150.6,165.7);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AC8nnQjHCQiIDcQgUAfgSAhQgRAfgRAcQh6DKiUBpAkkHoQAAAAABAAQJGldDHkf");
	this.shape.setTransform(54.3,50.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DEB17F").s().p("AnnHOQhLhBBAhOIAYgQQCUhqB6jIQASgdARgfQASghAUggQCGjcDJiQIAAAAQBPg0B3BvQC0CbhNB9IAAAAQjHEgpGFcIgBABQgzAagtAAQg+AAg0gwg");
	this.shape_1.setTransform(52.8,51);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,105.7,102);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AiFhZIAiAeIAACHIgiAnAiFhZIAAhxIELAAIAABxIgkAeIAACHIAkAnIAABYIkLAAIAAhYgACGhZIAADM");
	this.shape.setTransform(28,172.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhVBvIgBAAIgBAAIAAgBIgBAAIgBAAIgCgBIAAAAIgCgBIgBgBIAAgBIAAgBIAAgDIAAAAIAAgCIABAAIAAAAIABgBIABAAIAAgBIACAAIABAAIABAAIABAAIABAAIABAAIABAAICmAAIACAAIAAAAIABABIAAAAIACABIAAAAIAAAAIAAACIABAAIAAADIgBABIAAAAIAAABIAAABIgBAAIgBAAIAAABIgBAAIAAAAIAAAAIgCAAIilABIgBAAIgBABIgBAAgABhA3IAAiHIAkgeIAADNgAiEhuIAhAeIAACHIghAogABFBLIgBAAIiKAAIgBAAIgCAAIgBAAIgCAAIgBAAIAAgBIgBAAIgCgBIAAgBIAAgBIgBgBIAAgCIABgBIAAgBIAAAAIABAAIAAgBIAAgBIABAAIABAAIAAgBIABAAIACAAIAAAAIABAAIACAAIABAAIAAAAIABAAICJAAIABAAIABABIAAAAIACAAIABACIAAAAIAAAAIAAABIABABIAAADIgBABIAAAAIAAABIAAAAIgBAAIAAABIgCAAIAAAAIgBABgAhFAsIgBAAIgBAAIAAAAIgCgBIAAAAIgBAAIgCAAIAAAAIgBgCIgBgBIAAgBIgBgBIAAgCIABAAIAAgCIABAAIAAAAIAAgBIAAAAIABgBIABAAIABgBIABAAIADAAIABAAIAAABIABAAIAAgBIABAAICEAAIABAAIABABIABABIAAAAIABABIAAAAIABAAIAAACIAAAAIAAADIAAABIAAAAIgBABIAAAAIAAAAIgBABIAAABIgBAAIgBAAIAAAAIgBAAIiEAAIgBABIgBAAg");
	this.shape_1.setTransform(28,174.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AgtA8IAAh3IBbAAIAAB3g");
	this.shape_2.setTransform(27.9,167.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiEDLIAAhYIAhgnIAAiHIghgeIAAhxIEJAAIAABxIgkAeIAACHIAkAnIAABYgAheB+IAAAAIAAABIABABIACACIAAAAIACAAIABAAIABAAIAAABIABAAIABAAIABAAIABgBIABAAIClAAIACAAIAAAAIAAgBIABAAIAAAAIABgBIABAAIAAgBIAAAAIAAgBIABAAIAAgDIgBgBIAAgBIAAAAIAAgBIgCgBIAAAAIgBAAIAAgBIgCAAIimAAIgBAAIgBABIgBAAIgBgBIgBAAIgBAAIgCABIAAAAIgBAAIgBABIAAABIgBAAIAAACIAAAAgAhQBXIAAABIgBAAIAAADIABAAIAAACIAAAAIACACIABAAIAAABIABAAIACAAIABAAIACAAIABAAICKAAIABAAIAAAAIABgBIAAAAIACgBIAAAAIABAAIAAgBIAAAAIAAgBIABgBIAAgDIgBAAIAAgBIAAAAIAAgBIgBgBIgCAAIAAgBIgBAAIgBAAIiJAAIgBAAIAAgBIgBAAIgCAAIgBABIAAAAIgCAAIgBAAIAAAAIgBAAIgBABIAAABIAAAAIgBAAIAAABgAhOA3IAAABIgBABIAAACIABABIAAABIABAAIABACIAAAAIACABIABAAIAAAAIACAAIAAAAIABAAIABAAIABAAIABAAICEAAIABAAIAAAAIABgBIABAAIAAAAIABgBIAAAAIAAgBIABAAIAAgBIAAAAIAAgDIAAgBIAAgBIgBAAIAAgBIgBgBIAAAAIgBgBIgBAAIgBAAIiEAAIgBAAIAAAAIgBAAIAAAAIgBAAIgDAAIgBAAIgBAAIgBAAIgBABIAAABIAAAAIAAAAIgBABgAguAPIBbAAIAAh3IhbAAgAhUivIgJAEIgCACIgFAIQAAAAAAAAQABAAAAABQAAAAgBAAQAAAAAAAAIAAACIgBAAIgBAIIABABIACAIIABABIABACIABABIAEADIADADIAHACIAHABQAFgBAFgDIAGgFIAEgHIAAAAIAAgBIAAgBQACgIgCgHIgFgIIgCgBQgFgEgGgCIgFAAIgGABgAgtiXIABABIAAABIAAABIACABIABAAIABABIAAAAIAFAAIABAAIAAAAIABgBIBvAAIABAAIABAAIABAAIABAAIAAgBIABAAIAAAAIAAgBIABgBIAAAAIABgBIAAgDIgBAAIAAgCIgBAAIAAAAIgBgBIAAAAIgBgBIgCAAIgBAAIhvAAIgBAAIgBAAIAAAAIgCAAIgBAAIAAAAIgCAAIAAAAIgBAAIgBABIgBAAIgBABIAAAAIAAAAIAAACIgBAAg");
	this.shape_3.setTransform(28,172.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1F1F1F").s().p("AgINwIgtkIQAHAHALAAQALAAAHgIIAFgGIAgDDIBAnAQABAEADADIABABQAIAHAKAAQALAAAIgIIhKIFgAiGCUIABAAQAHAIALAAQALAAAIgIQAEgEACgEIBJG1QgIgHgKAAQgLAAgIAHIgFAHgACCFKIgEgFIgBAAQgHgHgLAAQgLAAgIAHIAAAAIA/m8IAGgHQAFAFAHACIAGAAQALAAAHgIIAEgDIhDHNIAAgBgAjBjDQAIAIALAAQALAAAHgIQAGgFACgHIA1E/IgBgCQgIgHgLAAQgLAAgIAHIgFAIgADGifIgBgBIgEgEIAAgBQgHgGgJgBIgCAAQgIAAgGAEIAvldQAAAHADAFQABAEADADIABABQAGAFAHABIAFABQAHAAAGgDIABgBIgwFUIgCgFgAjxnbIACgFQAFADAFABIAEABIACAAQAGAAAGgDIAGgFIAFgGIADgGIAAAAIAsEGIgDAAQgHgHgLAAQgLAAgIAHIgFAIgAkwtTIAmgcIBCFsIAAAAIgBgBIgEgFIAAAAQgHgHgJAAIgCAAQgGAAgFACQgEACgEADIgBABIgEAGIAAABIgBABgAEJtnIAoAAIgzFQIgBgBIgBAAQgHgHgJAAIgCAAQgLAAgIAHIAAABIgEAGIgBABIAAAAg");
	this.shape_4.setTransform(25.9,63.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC3300").s().p("AhCLwIgHgDIgDgCIgEgEIgBgBIgBgCIgBAAIgCgJIgBAAIACgIIAAgBIAAgBQABAAAAgBQAAAAAAAAQAAAAAAAAQAAgBgBAAIAGgHIACgCIAIgFQAFgBAHABQAGACAEADIACACIAFAIQACAHgBAHIgBABIABABIgBABIgEAHIgGAFQgFADgEAAgAgSLeIgBAAIgEAAIgBAAIgBAAIgBAAIgCgCIAAgBIAAgBIgBAAIAAgDIABAAIAAgCIAAAAIAAgBIABgBIABAAIABAAIABgBIABAAIABAAIABABIAAAAIACAAIAAAAIABgBIABAAIBwAAIABAAIABABIABAAIAAAAIABABIAAABIABAAIAAABIABABIAAADIgBAAIAAABIgBAAIAAABIAAAAIgBABIAAAAIgBAAIgBABIAAAAIgBAAIhwAAIgBAAgAg6GYIgBgBQgIgIAAgLQAAgGADgFIAAgBIAFgHQAIgHALAAQAKAAAIAHIAAAAIAEAFQAEAGAAAIIAAAHIgDAGIgFAGQgHAIgLAAQgLAAgHgHgABUCcIgBgBQgDgDgBgEQgDgFAAgHQAAgGACgFIABgBIAEgGIAAgBQAIgHALAAQALAAAHAHIABAAIAEAFIAAABQAEAGAAAHIgBAHIgCAGIgFAGQgIAIgLAAQgKAAgIgHgAiKg7IgBAAQgHgIAAgLQAAgGACgFIAAAAIAFgIQAIgHALAAQALAAAIAHIABACIADADQAEAGAAAIIgBAHIgBAEQgCAEgEAEQgIAIgLAAQgLAAgHgIgACklHQgHgCgFgFIgBgBQgDgDgCgDQgDgGAAgGQAAgHADgFIAAgBIAEgGIABAAQACgDADgBQAGgEAIAAIACAAQAJABAHAGIAAABIAEAEIABABIACAFIABAJIAAAGIgDAGIgBADIgEADQgHAIgLAAIgGAAgAjGmTIAAAAQgIgIAAgLQAAgGADgFIAFgIQAIgHALAAQALAAAHAHIAEAFQAEAGAAAIIAAAHQgCAHgGAFQgHAIgLAAQgLAAgIgIgAjmqrIgEgBQgFgBgFgDIgCgCIgCgCIgEgGQgDgFAAgHQAAgGACgEIABgBIAAgBIAEgGIABgBQAEgDAEgCQAFgCAGAAIACAAQAJAAAHAHIAAAAIAEAFIABABIAAAAQADAGAAAHIAAAFIAAACIgDAGIgFAGIgGAFQgGADgGAAIgCAAgADgq7QgHgBgGgFIgBgBQgDgDgBgEQgDgFAAgHIACgKIAAgBIAAAAIABgBIAEgGIAAgBQAIgHALAAIACAAQAJAAAHAHIABAAIABABIADAEIAAABQAEAGAAAHIgBAHIgCAGIgFAGIgFAEIgBABQgGADgHAAIgFgBg");
	this.shape_5.setTransform(26.4,84.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.6,-24.6,61,218.3);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Al9JiQgNAXgMAYQgRAggOAfQgYA2gEA/QgCAiAIAPQAGAMANAAQAegBAhhGQAhhFAXgrQALgTAMgTQACgEACgEQAWggAagfQA5hCBQg8QCih6ghiLQCJiABghIQDdijDDjxQBQhgBEhhQAEh6g7hPQg6hNhcgpQghARghASQhTA0hEBFQgoAqgsA4Qh6CdihD2QgKARgMAQQhhCYhCBcQhFgOg9AjQiPBhgwgIQh/gmglAvQANBSBzASQg9A6gvA9QguA8g2BBQg2BCgbBQQgcBQAgAUQASAMAqgpQAegcApg2QAPgUANgRQAtg5AegdQAWgWANgGQAWgLAfggQAEAEAEAFQAhAhAlAaQAnAdArAVQAIADAGAEQAIADAHADAkbEJQA7AEAtgQQA0gSAgguAqKMFQATgWAWgeQBDhYAngmQAUgSANgHQAVgKAdgeQAKgJALgMArjLNQgCAIgDAIQgbBPAfAUQAYARBChMQgQAxAHAaQAEAOAKAHQAgAUBjiEQA2hGAjgmQAbgdARgKQADgDADgBQAPgHAUgSQALgKAMgMAlxECQhWAHg7gJAn5GMQAGAWAWAXAg7BPQgzgggvgK");
	this.shape.setTransform(7.3,-2.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C2894C").s().p("AgKCtQAEg/AWg2QAOgfARgfIAZgvIAGgEQAQgHATgSQAMgKALgMIAPAHQAHALALAJIAIAHQAPAJAPAEQgQgBgRADQgLABgJADQgbAJgWASQgNALgPARQgUAYgUAkQgpBSgBBNQgIgQADgigAjEBtQATgWAXgeQBDhXAngmQAUgSANgHQATgKAegeQgwggg7AgIgVAKQgwAbgrAgQAtg5AegeQAVgVAOgHQAVgKAgghIAIAJQAgAhAkAbIgUAUIAUgUQAnAcArAVQgLAMgMAKQgMgJgQgBQgSgCgUAFQgZAIgnAhIgDADQhwBhhICEQgIgZAQgyg");
	this.shape_1.setTransform(-38.2,63.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DEB180").s().p("AnLN2QABhMAphSQAUgkAVgYQAOgSAOgLQAVgSAbgJQAKgDAKgBQARgDARABQgQgEgOgJIgJgHQgKgJgIgLIAPAGIgPgGIgOgHQgrgVgngdQglgaghghIgIgJQgWgXgGgWQAGAWAWAXQgfAggWALQgNAGgWAWQgeAdgtA5QArgfAwgbIAVgLQA7gfAxAgQgdAegVAKQgNAHgUASQgnAmhDBYQgWAegTAWQhCBMgYgRQgfgUAbhPIAFgQQAegcApg2IAcglIgcAlQgpA2geAcQgqApgSgMQgggUAchQQAbhQA2hCQA2hBAug8QAvg9A9g6QhzgSgNhSQAlgvB/AmQAwAICPhhQA9gjBFAOQBChcBhiYIAWghQChj2B6idQAsg4AogqQBEhFBTg0QAhgSAhgRQBcApA6BNQA7BPgEB6QhEBhhQBgQjDDxjdCjQhgBIiJCAQAhCLiiB6QhQA8g5BCQgaAfgWAgIgEAIIgXAmQgXArghBFQghBGgeABIgBAAQgMAAgGgMgAkBEKQApAAAhgLIAEgCQA0gSAgguQggAug0ASIgEACQghALgpAAIAAAAIgBAAIgZgBIAZABIABAAIAAAAgAm3EFQAeAAAhgDIADAAIACAAIACAAIgCAAIgCAAIgDAAQghADgeAAIAAAAIAAAAQgoAAgfgFIgBAAIgDAAIADAAIABAAQAfAFAoAAIAAAAIAAAAgAg7BPQgzgggvgKQAvAKAzAggAqFNlQgKgHgEgOQBIiEBwhiIAEgDQAoghAZgIQATgGATADQAQABAMAJQgUASgPAHIgGAEQgRAKgbAdQgjAmg2BGQhWBygjAAQgGAAgEgCgAndG5IAAAAg");
	this.shape_2.setTransform(7.3,-2.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.4,-93.4,165.5,181.6);


(lib.LEFTTHIGH = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Ak5r5QhFA5hDBCICgVoQAMBkgDBOQgBAGAAAFQgCAjgFAfQgMBKA8A/QAWAWAgAWAHCydQgcMVg2KNQgTFFATFjQAzA9gjBE");
	this.shape.setTransform(45,118.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4D83AC").s().p("AhePfQCMCEEogKQhnAahQAAQi+AAg/iUgAFJPyQgfkBAOkiQA1sugSrjIBngwQgcMVg2KNQgTFFATFjQAzA9gjBDQgIhDgvgjgAkhMVIig1oQBDhCBFg5Qh7CACtURQARCZgiBrQADhOgMhkg");
	this.shape_1.setTransform(45,113.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#86B4D6").s().p("AjDRxQgggVgWgXQg9g/ANhKQAFgeACgjIAAgMQAjhqgSiZQis0SB7h/IAJgIQC0iTDIhcIEOh9QATLjg2MuQgOEiAgEAQAvAkAIBDQg7BKhVAmQhjAphrAAQhqAAhygpgAFNQCQkpAKiLiFQBZDTFbhYg");
	this.shape_2.setTransform(45.9,122.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,92,241.4);


(lib.LEFTSHOULDER = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Ahju3QESCYAqINIBTIyQgNAGgNAGAjGFyIA+FvIABAGQAVDmC/gXQDpgEgSjoQAFg/gDg9IgSkBIgCghAjGFyQDrAhDjhiQAFgDAFgCAkrk5IA+KkQATAEAUAD");
	this.shape.setTransform(31.5,98);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C2894C").s().p("AjtiWQDtAhDihiIAMAcQi3BViEgEQiEgDATCsIAQCZg");
	this.shape_1.setTransform(35.3,150.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DEB181").s().p("AjNB1IgBgGIgQiYQgTitCFADQCDAEC3hVIASEBQADA8gFA/QASDojpAEQgRACgQAAQigAAgTjRgADClAIAKgFIACAhg");
	this.shape_2.setTransform(38.5,160.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4A4A4A").s().p("AjGKRIgngHIg+qkIDIp+QESCYAqIMIBTIzIgaAMIgKAFQiqBJiuAAQg7AAg7gIg");
	this.shape_3.setTransform(31.5,69.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.5,1.9,62,192.4);


(lib.LEFTSHOE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AlEhlQAqBVAIBxQAMCCA+BNQBgB3DYgJQBqgGAxgiQCChbg/iuQhUi6h0iRQhvi5hygFQiPgHhDA1QhAA3AOBoQAGA8AVAug");
	this.shape.setTransform(35.5,41.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D8D8D8").s().p("AkICYQgIhygqhUQgVgugGg8QgOhoBAg3QBDg1CPAHQByAFBvC5QB0CRBUC6QhqhEj0BGQiWA6giCHQg+hNgMiCgAizjUIBWDpIDVg3IiFjYQgXgGgXAAQg+AAg6Asg");
	this.shape_1.setTransform(34.5,35.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EDECEC").s().p("AkVD9QAiiHCWg7QD0hFBqBEQA/CuiCBbQgxAihqAFIgeABQjBAAhZhugAkKk+QBQg9BWAXICFDYIjVA4g");
	this.shape_2.setTransform(43.2,46.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,73,84.9);


(lib.LEFTLEG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AEiIpQBZADgZBwQgKAmgTAfIgHD0QgWgmgZgKQjzhOitCrQgLALgKALIAAArIghgSQguidhJhWQgogjgBhAQAkxxgHpoAg9K3QCeiCDBgMAEmxCQAaMsgeM/");
	this.shape.setTransform(36,126);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4D82AC").s().p("Ai1QPQgvidhJhWQgngjgBhAQAjxxgGpoQBBHwgtSuQgEBzBEApQAoAWA8CwIgVAWIAAArgAEhODQAkjdjKgEQCggdA7A6IgHD0QgVgmgZgKgAEzIHQjBAMieCCQCXjXDIBJgAgeuwQB9BRDFAQQg2AMgvAAQiRAAhMhtg");
	this.shape_1.setTransform(34.2,129.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#86B4D6").s().p("AkEOxQhEgqAEhyQAtyuhBnwQAEjhEzgMQEvAMAKCdQAZMsgeM/QBaADgZBwQgKAmgUAeQg7g5igAdQDKADgkDeQjzhOiuCrQg8iwgogWgAhMMsQCeiCDBgMQgygTgwAAQiMAAhxChgAEEq4QjFgQh9hSQBlCRDdgvg");
	this.shape_2.setTransform(37.4,114.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,74,236.1);


(lib.LEFTARMcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ADXrjQAPC3gLCLQgXEBg2HHQgyGbgMBCQiNAOh8gvQANlpgWikQgulhAcovQDLiADgBXg");
	this.shape.setTransform(22.3,85.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DEB180").s().p("Ai5LjQANlpgWikQgulhAcovQDLiADgBXQAPC3gLCLQgXEBg2HHQgyGbgMBCQghADggAAQhpAAhfgkg");
	this.shape_1.setTransform(22.3,85.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},52).to({state:[]},102).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,8.4,46.7,155.7);


(lib.LEFTARM = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ADXrzQAPC3gLCLQgXEBg2HHQgyGbgMBCAjUrKQgcIvAuFhQAWCkgNFp");
	this.shape.setTransform(22.3,87.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DEB180").s().p("Ai5LjQANlpgWikQgulhAcovQDLiADgBXQAPC3gLCLQgXEBg2HHQgyGbgMBCQghADggAAQhpAAhfgkg");
	this.shape_1.setTransform(22.3,85.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("ADXrjQAPC3gLCLQgXEBg2HHQgyGbgMBCQiNAOh8gvQANlpgWikQgulhAcovQDLiADgBXg");
	this.shape_2.setTransform(22.3,85.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(2,1,1).p("ABlLrQiHAQh4gnQABlYgbijQgrkJAFlpQABh+AHiEQBihJBsgJQBjgJBnAnQAHAtAFAsQAMB1gDBkQgDA/gGBLQgRDSgiExQgDAUgCAUQguGHgHBMg");
	this.shape_3.setTransform(21.8,82.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DEB180").s().p("AiaLUQABlYgbijQgrkJAFlpQABh+AHiEQBihJBsgJQBjgJBnAnQAHAtAFAsQAMB1gDBkQgDA/gGBLQgRDSgiExIgFAoQguGHgHBMQgoAFgnAAQhbAAhVgcg");
	this.shape_4.setTransform(21.8,82.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(2,1,1).p("AB5LSQiBASh0gfQgMlHggiiQgzkJAClVQAAh8AHh/QBZhOBogKQBggLBlAmQAJApAJApQATBtABBiQgBA9gEBJQgMDMggEpQgCATgCAUQgqF0gCBVg");
	this.shape_5.setTransform(21.5,79);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DEB180").s().p("Ah8LFQgMlHggiiQgzkJAClVQAAh8AHh/QBZhOBogKQBggLBlAmIASBSQATBtABBiQgBA9gEBJQgMDMggEpIgEAnQgqF0gCBVQgwAHgvAAQhOAAhIgUg");
	this.shape_6.setTransform(21.5,79);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(2,1,1).p("ACNK4Qh8AVhvgXQgYk2gliiQg8kIgBlCQgBh7AIh4QBPhSBkgNQBdgNBiAlQANAlALAmQAaBlAGBhQABA7gCBGQgHDHgeEhQgCATgCATQglFgADBeg");
	this.shape_7.setTransform(21.1,75.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DEB180").s().p("AheK2QgYk2gliiQg8kIgBlCQgBh7AIh4QBPhSBkgNQBdgNBiAlQANAlALAmQAaBlAGBhQABA7gCBGQgHDHgeEhIgEAmQglFgADBeQg8AKg4AAQg9AAg6gMg");
	this.shape_8.setTransform(21.1,75.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(2,1,1).p("ACfKeQh2AXhrgPQgkkkgqiiQhFkIgDkuQgDh5AIhyQBHhYBfgOQBbgPBfAjQAQAiAOAjQAgBdALBfQAEA5gBBEQgBDBgcEZQgCATgBATQgiFMAIBng");
	this.shape_9.setTransform(20.9,72.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#DEB180").s().p("AhCKmQgkkkgqiiQhFkIgDkuQgDh5AIhyQBHhYBfgOQBbgPBfAjQAQAiAOAjQAgBdALBfQAEA5gBBEQgBDBgcEZIgDAmQgiFMAIBnQhJAOhEAAQgqAAgqgGg");
	this.shape_10.setTransform(20.9,72.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(2,1,1).p("ACxKDQhxAZhmgGQgxkUgviiQhNkHgFkZQgFh5AJhrQA9hdBbgPQBYgRBdAhQASAeARAhQAoBUAPBdQAGA3ABBCQAEC8gZEQQgCATgCASQgdE5ANBwg");
	this.shape_11.setTransform(20.8,69);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#DEB180").s().p("AgmKWQgxkUgviiQhNkHgFkZQgFh5AJhrQA9hdBbgPQBYgRBdAhQASAeARAhQAoBUAPBdQAGA3ABBCQAEC8gZEQIgEAlQgdE5ANBwQhbAUhUAAIgogBg");
	this.shape_12.setTransform(20.8,69);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(2,1,1).p("ADCJnQhrAahiADQg9kDg0ihQhWkHgIkFQgFh4AJhlQA0hiBWgQQBWgTBaAgQAVAZAUAfQAuBMAUBbQAJA1ADBAQAJC2gYEJQgBARgCASQgZElASB6g");
	this.shape_13.setTransform(20.7,65.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#DEB17F").s().p("Ah8DgQhWkHgIkFQgFh4AJhlQA0hiBWgQQBWgTBaAgQAVAZAUAfQAuBMAUBbQAJA1ADBAQAJC2gYEJIgDAjQgZElASB6QhrAahiADQg9kDg0ihg");
	this.shape_14.setTransform(20.7,65.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(2,1,1).p("ADSJKQhlAcheALQhJjxg5ihQhfkHgKjxQgHh2AJhfQAshnBRgSQBVgVBWAeQAYAWAXAcQA1BEAYBZQAMAzAEA+QAOCwgVEBQgBARgBASQgWERAXCDg");
	this.shape_15.setTransform(20.7,62.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#DEB17F").s().p("AhzDfQhfkHgKjxQgHh2AJhfQAshnBRgSQBVgVBWAeQAYAWAXAcQA1BEAYBZQAMAzAEA+QAOCwgVEBIgCAjQgWERAXCDQhlAcheALQhJjxg5ihg");
	this.shape_16.setTransform(20.7,62.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(2,1,1).p("ADhIsQheAfhaATQhVjgg/ihQhnkGgMjdQgJh1AKhZQAihrBMgUQBTgXBTAdQAbASAaAZQA8A8AcBYQAPAwAGA7QATCrgSD5QgCARgBARQgSD9AcCMg");
	this.shape_17.setTransform(20.7,59.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#DEB17F").s().p("AhrDdQhnkGgMjdQgJh1AKhZQAihrBMgUQBTgXBTAdQAbASAaAZQA8A8AcBYQAPAwAGA7QATCrgSD5IgDAiQgSD9AcCMQheAfhaATIiUmBg");
	this.shape_18.setTransform(20.7,59.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(2,1,1).p("ADsIPQhYAhhXAcQhhjQhEigQhvkGgPjJQgKh0AKhSQAZhxBIgVQBQgZBRAbQAdAPAeAWQBCAzAhBXQARAuAIA5QAYCmgQDwQgBARgBAQQgODqAhCVg");
	this.shape_19.setTransform(21.3,56.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#DEB17F").s().p("AhoDcQhvkGgPjJQgKh0AKhSQAZhxBIgVQBQgZBRAbQAdAPAeAWQBCAzAhBXQARAuAIA5QAYCmgQDwIgCAhQgODqAhCVQhYAhhXAcQhhjQhEigg");
	this.shape_20.setTransform(21.3,56.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(2,1,1).p("ADbBfQAOjqgdigQgdighvhDQhuhDhvAnQhuAmAcElQAdEhEjH3IClhGQgpiqAOjqg");
	this.shape_21.setTransform(21.9,53.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#DEB17F").s().p("AjvjfQgcklBugmQBvgnBuBDQBvBDAdCgQAdCggODqQgODqApCqIilBGQkjn3gdkhg");
	this.shape_22.setTransform(21.9,53.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(2,1,1).p("ADqIXQhaAghYAZQhejThCigQhukHgOjOQgJh0AJhUQAchvBJgVQBRgZBRAcQAdAQAcAWQBBA2AgBXQAQAuAIA6QAXCngRDzQgBARgBAQQgPDvAgCTg");
	this.shape_23.setTransform(21.1,57.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#DEB17F").s().p("AhoDdQhukHgOjOQgJh0AJhUQAchvBJgVQBRgZBRAcQAdAQAcAWQBBA2AgBXQAQAuAIA6QAXCngRDzIgCAhQgPDvAgCTQhaAghYAZQhejThCigg");
	this.shape_24.setTransform(21.1,57.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(2,1,1).p("ADaI7QhhAehdAPQhPjpg8ihQhikGgMjoQgHh1AJhcQAnhpBOgTQBUgWBVAeQAZAUAZAaQA4BAAaBZQAOAxAFA9QAQCtgTD9QgCARgBASQgUEHAaCHg");
	this.shape_25.setTransform(20.7,61.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#DEB17F").s().p("AhvDeQhikGgMjoQgHh1AJhcQAnhpBOgTQBUgWBVAeQAZAUAZAaQA4BAAaBZQAOAxAFA9QAQCtgTD9IgDAjQgUEHAaCHQhhAehdAPQhPjpg8ihg");
	this.shape_26.setTransform(20.7,61.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(2,1,1).p("ADGJfQhpAchhAEQhAj+g2ihQhYkIgIkAQgGh3AJhjQAyhjBUgSQBWgTBZAgQAWAZAVAdQAwBKAUBbQAKA0AEBAQAKC0gXEHQgBASgCASQgZEfAUB8g");
	this.shape_27.setTransform(20.7,65.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#DEB17F").s().p("Ah6DgQhYkIgIkAQgGh3AJhjQAyhjBUgSQBWgTBZAgQAWAZAVAdQAwBKAUBbQAKA0AEBAQAKC0gXEHIgDAkQgZEfAUB8QhpAchhAEQhAj+g2ihg");
	this.shape_28.setTransform(20.7,65.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(2,1,1).p("ACaKlQh3AWhsgQQghkpgpiiQhDkIgCkzQgCh6AIhzQBJhXBggNQBbgOBgAjQAPAjANAkQAfBeAKBgQADA5gBBFQgDDCgcEbQgCATgCATQgiFRAGBlg");
	this.shape_29.setTransform(21,73.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#DEB180").s().p("AhJKrQghkpgpiiQhDkIgCkzQgCh6AIhzQBJhXBggNQBbgOBgAjIAcBHQAfBeAKBgQADA5gBBFQgDDCgcEbIgEAmQgiFRAGBlQhFAMhBAAQgvAAgugGg");
	this.shape_30.setTransform(21,73.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(2,1,1).p("ACDLFQh/AThxgaQgSk/gjiiQg3kIAAlMQAAh7AHh8QBVhQBlgLQBfgMBjAlQALAnAKAoQAWBpAEBhQABA8gEBIQgJDJgfElQgCATgCAUQgoFqABBZg");
	this.shape_31.setTransform(21.3,77.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#DEB180").s().p("AhtK+QgSk/gjiiQg3kIAAlMQAAh7AHh8QBVhQBlgLQBfgMBjAlIAVBPQAWBpAEBhQABA8gEBIQgJDJgfElIgEAnQgoFqABBZQg2AIgzAAQhFAAhCgPg");
	this.shape_32.setTransform(21.3,77.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(2,1,1).p("ABqLlQiFARh3glQgDlUgcijQgtkJAElkQABh9AHiDQBghKBrgKQBigJBnAnQAHAsAGArQAOBzgCBkQgDA+gFBLQgQDQgiEvQgCATgCAVQgtGCgGBOg");
	this.shape_33.setTransform(21.7,81.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#DEB180").s().p("AiSLRQgDlUgcijQgtkJAElkQABh9AHiDQBghKBrgKQBigJBnAnIANBXQAOBzgCBkQgDA+gFBLQgQDQgiEvIgEAoQgtGCgGBOQgqAFgpAAQhYAAhRgZg");
	this.shape_34.setTransform(21.7,81.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(2,1,1).p("AibLUQB4AoCHgRQAIhKAtmFQAFgsAFgqQAikxAQjOQAEgzACgtQAFh3gRiQQgDgWgDgXQiDgzh5AaQhTAQhMA4QgJCTAACLQgEFaArEAQAaCjgBFXg");
	this.shape_35.setTransform(21.9,82.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#DEB180").s().p("AibLUQABlXgaijQgrkAAElaQAAiLAJiTQBMg4BTgQQB5gaCDAzIAGAtQARCQgFB3QgCAtgEAzQgQDOgiExIgKBWQgtGFgIBKQgoAFgmAAQhcAAhVgcg");
	this.shape_36.setTransform(21.9,82.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(2,1,1).p("Ah9LGQB0AfCBgTQADhSAolvQAFgrAEgpQAhkpALjJQACgyABgrQAAh2gYiFQgFgVgEgVQh/gyh2AaQhQARhGA7QgKCMABCMQgBFHAzECQAgCiALFGg");
	this.shape_37.setTransform(21.6,79);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#DEB180").s().p("Ah9LGQgLlGggiiQgzkCABlHQgBiMAKiMQBGg7BQgRQB2gaB/AyIAJAqQAYCFAAB2IgDBdQgLDJghEpIgJBUQgoFvgDBSQgwAHgvAAQhOAAhIgTg");
	this.shape_38.setTransform(21.6,79);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(2,1,1).p("AhgK3QBvAXB8gVQgChaAklZQAFgqAEgoQAekhAGjEQABgwgBgrQgEh0ggh6QgGgUgGgTQh7gyhzAbQhNAShAA+QgLCFADCMQABE1A9EEQAkChAXE0g");
	this.shape_39.setTransform(21.3,75.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#DEB180").s().p("AhgK3QgXk0gkihQg9kEgBk1QgDiMALiFQBAg/BNgRQBzgbB7AyIAMAnQAgB6AEB0QABArgBAwQgGDEgeEhIgJBSQgkFZACBaQg7AKg4AAQg9AAg7gMg");
	this.shape_40.setTransform(21.3,75.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(2,1,1).p("AhDKnQBrAPB2gXQgHhiAglEQAEgoADgnQAckZABi/QAAgvgCgpQgJhygohwQgHgTgHgRQh3gxhwAcQhKARg6BCQgMB+AECMQAEEkBFEEQAqChAjEig");
	this.shape_41.setTransform(21,72.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#DEB180").s().p("AhDKnQgjkigqihQhFkEgEkkQgEiMAMh+QA6hCBKgRQBwgcB3AxIAOAkQAoBwAJByQACApAAAvQgBC/gcEZIgHBPQggFEAHBiQhJAOhEAAQgqAAgqgGg");
	this.shape_42.setTransform(21,72.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(2,1,1).p("AgnKWQBmAGBxgZQgMhpAckuQADgnADgmQAakRgEi6QgBgtgEgoQgOhxgvhmQgIgRgJgQQhzgwhtAdQhIASgzBFQgNB2AGCNQAGESBOEFQAvCgAvERg");
	this.shape_43.setTransform(20.9,69);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#DEB180").s().p("AgnKWQgvkRgvigQhOkFgGkSQgGiNANh2QAzhFBIgSQBtgdBzAwIARAhQAvBmAOBxQAEAoABAtQAEC6gaERIgGBNQgcEuAMBpQhbAVhVAAIgngCg");
	this.shape_44.setTransform(20.9,69);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(2,1,1).p("AgMKEQBigCBrgbQgRhyAYkXQACgmAEgmQAXkJgJi0QgCgsgGgmQgShwg3hcQgKgPgKgOQhvgvhqAdQhFASgtBJQgOBvAHCNQAJEABYEHQAzCfA7D/g");
	this.shape_45.setTransform(20.8,65.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#DEB17F").s().p("Ah6DmQhYkHgJkAQgHiNAOhvQAthJBFgSQBqgdBvAvIAUAdQA3BcASBwQAGAmACAsQAJC0gXEJIgGBMQgYEXARByQhrAbhiACQg7j/gzifg");
	this.shape_46.setTransform(20.8,65.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(2,1,1).p("AAOJyQBfgLBkgdQgVh6ATkCQACgkADglQAVkBgOivQgDgqgHglQgXhug+hSQgLgOgMgMQhqgvhoAeQhCATgnBMQgPBoAJCOQAKDtBhEIQA5CfBGDug");
	this.shape_47.setTransform(20.7,62.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#DEB17F").s().p("AhxDlQhhkIgKjtQgJiOAPhoQAnhMBCgTQBogeBqAvQAMAMALAOQA+BSAXBuQAHAlADAqQAOCvgVEBIgFBJQgTECAVB6QhkAdhfALQhGjug5ifg");
	this.shape_48.setTransform(20.7,62.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(2,1,1).p("AApJfQBagTBegfQgZiCAOjsQACgjADgkQASj5gTiqQgEgpgJgkQgchshFhHQgNgNgNgKQhmguhlAfQg/ASggBQQgRBhALCOQANDcBqEJQA9CeBTDcg");
	this.shape_49.setTransform(20.7,59.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#DEB17F").s().p("AhnDlQhqkJgNjcQgLiOARhhQAghQA/gSQBlgfBmAuQANAKANANQBFBHAcBsQAJAkAEApQATCqgSD5IgFBHQgODsAZCCQheAfhaATQhTjcg9ieg");
	this.shape_50.setTransform(20.7,59.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(2,1,1).p("AA9JMQBXgbBYghQgeiKAKjWQABgiACgjQARjxgYilQgGgngKgjQgghrhNg8QgOgLgPgJQhiguhiAgQg8ATgaBTQgSBZAMCPQAPDKBzELQBDCcBeDLg");
	this.shape_51.setTransform(21.3,56.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#DEB17F").s().p("AhkDlQhzkLgPjKQgMiPAShZQAahTA8gTQBiggBiAuQAPAJAOALQBNA8AgBrQAKAjAGAnQAYClgRDxIgDBFQgKDWAeCKQhYAhhXAbQhejLhDicg");
	this.shape_52.setTransform(21.3,56.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_2}]},4).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_20},{t:this.shape_19}]},1).to({state:[{t:this.shape_22},{t:this.shape_21}]},1).to({state:[{t:this.shape_22},{t:this.shape_21}]},24).to({state:[{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_30},{t:this.shape_29}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_34},{t:this.shape_33}]},1).to({state:[{t:this.shape_1},{t:this.shape_2}]},1).to({state:[]},8).to({state:[{t:this.shape_1},{t:this.shape_2}]},5).to({state:[{t:this.shape_1},{t:this.shape_2}]},4).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_42},{t:this.shape_41}]},1).to({state:[{t:this.shape_44},{t:this.shape_43}]},1).to({state:[{t:this.shape_46},{t:this.shape_45}]},1).to({state:[{t:this.shape_48},{t:this.shape_47}]},1).to({state:[{t:this.shape_50},{t:this.shape_49}]},1).to({state:[{t:this.shape_52},{t:this.shape_51}]},1).to({state:[{t:this.shape_22},{t:this.shape_21}]},1).to({state:[]},16).wait(81));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,8.4,46.7,155.7);


(lib.HANDcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AgMnQIglArIhaBmQhEA5gRCLQgRCKgOBsQABAKACAIQAIAeATgFQAKgDAPgOQAtguA5jVQARCGgKBXQgLBQgvCrQgQAsAQAUQAYARArg7QAGgJAHgLQAEgGADgGAAtFdQgUAogdAqQgdAngdgGQgegKAThDQAEgQAHgTQAMgVAKgWQAEgKAFgKQAlhcAKhmAAtFdQghBRAgAFQAgABAdgzQAAgBABgCQACgDABgDQAFgIAEgJAEAmwIAAHZQgDCIg/B9QgYAzgcAGQgKADgKgDABvBKQgBCPhBCEADLAvQgLCghKCY");
	this.shape.setTransform(25.6,51.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C2894C").s().p("Ag0FuIAMgjQALgVAKgWIAJgUQAmhcAKhmQAkB0hNCGQgtBRAHAmQgdgKAShDgABCFIQBCiEABiPQAxBahWC6QgZA0gGAhQgfgFAghRgACMFSQBJiYAMigQASBSgPBCQgQBDg1BhIgJABQgFAAgFgBgAjmB4IgEgSIAgj2QARiLBEg5IBahmIhHCcQgZAngPA1IgOA+QgfCGgVCPIgFABQgOAAgHgag");
	this.shape_1.setTransform(23.5,54);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DEB180").s().p("AhNHrQgIgmAuhRQBMiGgkh0QgJBmgmBcIgJAUQgKAWgMAVIgHAMIgNAUQgrA7gYgRQgQgUAQgsQAvirALhQQAKhXgRiGQg5DVgtAuQgPAOgKADQAViPAfiGIAOg+QAOg1AagnIBGicIAlgrQA/hCB0APQBTAMAGBHIAAHZQgDCIg/B9QgYAzgcAGQA1hhAPhDQAQhCgThSQgLCghKCYIgJARIgDAGIgBADQgdAzgggBQAFghAag0QBVi6gxhaQgBCPhBCEQgUAogdAqQgZAigaAAIgHgBg");
	this.shape_2.setTransform(27.1,49.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(2,1,1).p("AigBVQgIAagJAYQgNAhgOAeQgYA0gqArQgYAZgRAEQgNADgIgKQgSgWAdhFQAehGAQgsQAHgUAGgWQABgEABgEQAKgkAFgmIAAAAQAMhUgIhiQgZknEcgBQCLAoAYBwQAWCoAlAeQBtBEgKA5QhEAqhXhHQgDBSgOBIQgOBJgNBSQgNBSgoBIQgpBIgjgKQgUgGACg5QACgoAMhBQAFgXADgVQANhGACgpQACgdgEgPQgHgWADgsQgFAAgGAAQgsgDgsgJQgugKgrgSQgHgDgIgDQgHgCgGgEAAcjQQhZhXAXhkAigBVQAAgDgBgDQgEgQAAgaQAAgOABgRAhoGEQADgcAIgkQAVhqACg2QABgagEgNQgGgWACgpQABgNABgPAhoGEQgaArgXAMQgNAGgLgDQgkgKAgieQAQhUAFgzQAEgmgEgUABMAlQgUAKgggBABZiWQAyBDAtAlAgHGgQgDAHgEAHQgoBHgjgJQgcgIANhg");
	this.shape_3.setTransform(36.9,60);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C2894C").s().p("AAjg1IAAgFQgCgzgLgXQgIgSgOgMQgLgKgOgEIAAgDIABgcIgBAcIAAADQAAAaAFAQIABAHIgSAxQgMAhgOAeQgYAzgrAsQgYAYgQAEQA3gyAhhTQAOgmAEgeQADgVgBgSQAAgbgLgaQgFgJgFgIQgJgPgMgLIAAAAQAOAJAQAEIAKACQANACANgCIAOAGQArASAuAKIgCAcQgCApAGAWQADANgBAbQgCA0gVBqQgHAkgEAcQgZAsgWALQAwiLgBiPgACMgyIgGgXQgQg/g3gPIACgcQArAKAuACIAKAAQgCAsAGAXQAEAOgBAeQgCAogNBFQgFg0gLgzgAgZiwIAAAAg");
	this.shape_4.setTransform(22.9,81.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DEB180").s().p("AhZHsQgcgIANhgQADgcAIgkQAVhqACg2QABgagEgNQgGgWACgpQA3APARA/IAFAWQALA1AEA0IgIAsQgMBBgCAoQACgoAMhBIAIgsQANhGACgpQACgdgEgPQgHgWADgsIgLAAQgsgDgsgJQgugKgrgSIgPgGIgNgGIANAGQgNACgNgCIgKgBQgQgEgOgJQAMhUgIhiQgZknEcgBQCLAoAYBwQAWCoAlAeQBtBEgKA5QhEAqhXhHQgtglgyhDQAyBDAtAlQgDBSgOBIQgOBJgNBSQgNBSgoBIQgpBIgjgKQgUgGACg5IgHAOQgkA/gfAAIgIgBgAAdAuQAcAAARgIIACgBIgCABQgRAIgcAAIAAAAIAAAAIgCAAIgDAAIADAAIACAAIAAAAIAAAAgAAcjQQhHhFAAhOQAAgTAFgVQgFAVAAATQAABOBHBFgAixG+QgkgKAgieQAQhUAFgzQAEgmgEgUIgBgGQgEgQAAgaQAOADAMALQAOAMAIASQAKAXACAzIAAAEQACCRgyCLQgIAEgIAAIgIgBgAlME7QgSgWAdhFQAehGAQgsQAHgUAGgWIACgIQAKgkAFgmQANALAJANQAFAJAEAJQALAZABAcQABARgDAVQgFAfgNAmQghBTg4AzIgGAAQgJAAgGgHgAizAAIAAAAg");
	this.shape_5.setTransform(36.9,60);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(2,1,1).p("AgXj1IAUg2QAahBgOg0QAkALAVAWQAbAdAbAzQAoBSAHA7IASAXQBUAoAfA+QAeA9gPAyQgNAxghAKQghAKhEiBQgbgvhAggQgOAEgRAJQg1AcgEALQghBZgfCaQgCANgCAMQgbCGgOAnQgPAogOASQgUAZgagKQgLgDgDgDQgCgEgLghQATAFARgYQAUgaANgkQALgeAFgwQAAgBAAgBQABgPAAgVQABgTgBgYQgBgbgCgiIAyimQgGgSgGgWQgGgVgFgYQgFgSgFgRQgBgFgCgFQgTg+gYgfIgCgDAh0n3Qg1AegvBKQgvBJgPApQgQAogCAIQAAAAgBABQgFAQgFAfQgHAggFBOQgCAeARAqQAMAbARAoIABABQAJBFACBrQAEBrARAUIABAAQgDAWAAAQQgDAwAUAHQADABACAAAjBjYQgBABAAABAjDjRQAAAEgBAFQgCAggOA3QgBAEgBAEQgBAJgDAKQgKAmAOAWQAEAHAGAFQAXASANAcQAPhFAJgdQAAAAAAgBQAKgiAMgcAg9A2QgDgEgCgFQgDgFgDgGQgJgSgIgZAioAgQAGAOAFAPQANAsgKAmQgCAGgCAFQgGARgIAKQgDAFgEADQAAABgBAAIABAAIAAgBAi2C/QgSAHgRgIQgUgJgNgxQgPgvgJgYAi2C/IABAAIABgBAi1C/IAAAAIgBAAAjxFsQARAUAOgMQAFgDABgEQAMgLAIgVQAJgUgBgaQAAgKgBgLQgCgPgBgPQgDgXAEgX");
	this.shape_6.setTransform(44.1,56);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C2894C").s().p("AAAENIAAgkIAAgrQgMAEgFAGIgLAWQgCAFgCAIIgDAPIgEAJIgBgVIgDgeQgDgXAEgXIAAgBIAHgIQAHgKAHgRIADgLQALgmgNgsQgFgPgGgOQAPhFAJgdIAAgBQAJgiAMgcIAKAjIALAtIAMAoIgxCmIACA9IgCg9IAximQAIAaAJARIAFALIAGAJIgGgJQAIAEAJACQgTAdgPApQgJAYgQAzIgbBnIAAgCgAhRhyIAEgTIACgIQAOg3ACggIABgJIAAgFIABAAIABgCIACgCIAEgJIACgKIADgEQAAAAAAgBQABAAAAAAQABAAABAAQAAAAABAAIAEABIAEAGIACADQAYAfASA+QgIgBgIACQgPADgMALQgOAKgLAWIgHASQgHASgGAeQgOgWAKgmg");
	this.shape_7.setTransform(30.4,58.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DEB17F").s().p("AjDH2QgLgDgDgDIgNglIAHAAIAAAAIAAAAQAPAAANgSIABAAIAAgBQAUgaANgkQALgeAFgwIAchnQAQgzAJgYQAPgpATgdQgJgCgHgEIgGgLQgJgSgIgZIgMgoIgLgtIgKgjIgDgKIADAKQgMAcgKAiIAAABQgJAdgPBFQAGAOAFAPQANAsgKAmIgEALQgGARgIAKIgHAIIgBABIgBABIAAAAIgBAAIABAAIABgBIABAAQgEAXADAXIADAeIABAVIAAACQAAAZgIATQgIAVgMALQgBAEgFADIgBABQgEADgFAAIAAAAIgBAAQgIAAgKgKIAAAAIgCgCIgBAAQgRgUgEhrQgChrgJhFQAJAYAPAvQANAxAUAJQAKAEAJAAIAAAAIAAAAQAHAAAHgCIABgBIABAAIgBAAIgBABQgHACgHAAIAAAAIAAAAQgJAAgKgEQgUgJgNgxQgPgvgJgYIgBgBIgdhDQgRgqACgeQAFhOAHggQAFgfAFgQIABgBIASgwQAPgpAvhJQAvhKA1geQAUgGAcAPQAcAPAbAaQAbAagFALQAFASAAATQAAAlgRArIgUA2IAUg2QARgrAAglQAAgTgFgSQAkALAVAWQAbAdAbAzQAoBSAHA7IASAXQBUAoAfA+QAeA9gPAyQgNAxghAKQghAKhEiBQgbgvhAggQgOAEgRAJQg1AcgEALQghBZgfCaIgEAZQgbCGgOAnQgPAogOASQgPASgRAAQgHAAgHgDgAjCjVIgBAFIgBAJQgCAggOA3IgCAIIgEATQgKAmAOAWQAEAHAGAFQAXASANAcQgNgcgXgSQgGgFgEgHQAGgeAHgSIAIgSQALgWANgKQAMgLAPgDQAJgCAIABQgTg+gYgfIgCgDIgEgGIgEgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAIgDAEIgCAKIgEAJIgCACQAAAAgBAAQAAAAAAABQAAAAAAAAQAAABAAAAgAjXHLIgHAAIgFgBQgUgHADgwQAAgQADgWIACACIAAAAQAKAKAIAAIABAAIAAAAQAFAAAEgDIABgBQAFgDABgEQAMgLAIgVQAIgTAAgZIAAgCIAEgJIADgPQACgIACgFIALgWQAGgGAMgEIAAArIgBAkIAAACQgFAwgLAeQgNAkgUAaIAAABIgBAAQgNASgPAAIAAAAIAAAAgAh6iAIAAAAgAjCjVIAAAAgAjBjXIgBACIAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAAAgAjBjXIAAAAg");
	this.shape_8.setTransform(44.1,55.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(2,1,1).p("AigBVQgIAagJAYQgNAhgOAeQgYA0gqArQgYAZgRAEQgNADgIgKQgSgWAdhFQAehGAQgsQAHgUAGgWQABgEABgEQAKgkAFgmIAAAAQAMhUgIhiQgZknEcgBQCLAoAYBwQAWCoAlAeQBtBEgKA5QhEAqhXhHQgDBSgOBIQgOBJgNBSQgNBSgoBIQgpBIgjgKQgUgGACg5QACgoAMhBQAFgXADgVQANhGACgpQACgdgEgPQgHgWADgsQgFAAgGAAQgsgDgsgJQgugKgrgSQgHgDgIgDQgHgCgGgEAAcjQQhZhXAXhkAigBVQAAgDgBgDQgEgQAAgaQAAgOABgRAhoGEQADgcAIgkQAVhqACg2QABgagEgNQgGgWACgpQABgNABgPAhoGEQgaArgXAMQgNAGgLgDQgkgKAgieQAQhUAFgzQAEgmgEgUABZiWQAyBDAtAlABMAlQgUAKgggBAgHGgQgDAHgEAHQgoBHgjgJQgcgIANhg");
	this.shape_9.setTransform(36.9,60);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C2894C").s().p("AAjg1IAAgFQgCgzgLgXQgIgSgOgMQgLgKgOgEIAAgDIABgcIgBAcIAAADQAAAaAFAQIABAHIgSAxQgMAhgOAeQgYAzgrAsQgYAYgQAEQA3gyAhhTQAOgmAEgeQADgVgBgSQAAgbgLgaQgFgJgFgIQgJgPgMgLIAAAAQAOAJAQAEIAKACQANACANgCIAOAGQArASAuAKIgCAcQgCApAGAWQADANgBAbQgCA0gVBqQgHAkgEAcQgZAsgWALQAwiLgBiPgACMgyIgGgXQgQg/g3gPIACgcQArAKAuACIAKAAQgCAsAGAXQAEAOgBAeQgCAogNBFQgFg0gLgzgAgZiwIAAAAgABBizIAAAAg");
	this.shape_10.setTransform(22.9,81.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#DEB180").s().p("AhZHsQgcgIANhgQADgcAIgkQAVhqACg2QABgagEgNQgGgWACgpQA3APARA/IAFAWQALA1AEA0IgIAsQgMBBgCAoIgHAOQgkA/gfAAIgIgBgAALHfQgUgGACg5QACgoAMhBIAIgsQANhGACgpQACgdgEgPQgHgWADgsIgLAAQgsgDgsgJQgugKgrgSIgPgGIgNgGIANAGQgNACgNgCIgKgBQgQgEgOgJQAMhUgIhiQgZknEcgBQCLAoAYBwQAWCoAlAeQBtBEgKA5QhEAqhXhHQgtglgyhDQAyBDAtAlQgDBSgOBIQgOBJgNBSQgNBSgoBIQgkA/ggAAIgIgBgAAdAuQAcAAARgIIACgBIgCABQgRAIgcAAIAAAAIAAAAIgCAAIgDAAIADAAIACAAIAAAAIAAAAgAAcjQQhHhFAAhOQAAgTAFgVQgFAVAAATQAABOBHBFgAixG+QgkgKAgieQAQhUAFgzQAEgmgEgUIgBgGQgEgQAAgaQAOADAMALQAOAMAIASQAKAXACAzIAAAEQACCRgyCLQgIAEgIAAIgIgBgAlME7QgSgWAdhFQAehGAQgsQAHgUAGgWIACgIQAKgkAFgmQANALAJANQAFAJAEAJQALAZABAcQABARgDAVQgFAfgNAmQghBTg4AzIgGAAQgJAAgGgHgAAPELIAAAAgAizAAIAAAAgAC4guIAAAAg");
	this.shape_11.setTransform(36.9,60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},7).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},7).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},26).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},6).wait(340));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,53.3,99.4);


(lib.HAND = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AgMnQIglArIhaBmQhEA5gRCLQgRCKgOBsQABAKACAIQAIAeATgFQAKgDAPgOQAtguA5jVQARCGgKBXQgLBQgvCrQgQAsAQAUQAYARArg7QAGgJAHgLQAEgGADgGAAtFdQgUAogdAqQgdAngdgGQgegKAThDQAEgQAHgTQAMgVAKgWQAEgKAFgKQAlhcAKhmAAtFdQghBRAgAFQAgABAdgzQAAgBABgCQACgDABgDQAFgIAEgJAEAmwIAAHZQgDCIg/B9QgYAzgcAGQgKADgKgDABvBKQgBCPhBCEADLAvQgLCghKCY");
	this.shape.setTransform(25.6,51.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C2894C").s().p("Ag0FuIAMgjQALgVAKgWIAJgUQAmhcAKhmQAkB0hNCGQgtBRAHAmQgdgKAShDgABCFIQBCiEABiPQAxBahWC6QgZA0gGAhQgfgFAghRgACMFSQBJiYAMigQASBSgPBCQgQBDg1BhIgJABQgFAAgFgBgAjmB4IgEgSIAgj2QARiLBEg5IBahmIhHCcQgZAngPA1IgOA+QgfCGgVCPIgFABQgOAAgHgag");
	this.shape_1.setTransform(23.5,54);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DEB180").s().p("AhNHrQgIgmAuhRQBMiGgkh0QgJBmgmBcIgJAUQgKAWgMAVIgHAMIgNAUQgrA7gYgRQgQgUAQgsQAvirALhQQAKhXgRiGQg5DVgtAuQgPAOgKADQAViPAfiGIAOg+QAOg1AagnIBGicIAlgrQA/hCB0APQBTAMAGBHIAAHZQgDCIg/B9QgYAzgcAGQA1hhAPhDQAQhCgThSQgLCghKCYIgJARIgDAGIgBADQgdAzgggBQAFghAag0QBVi6gxhaQgBCPhBCEQgUAogdAqQgZAigaAAIgHgBg");
	this.shape_2.setTransform(27.1,49.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(2,1,1).p("AA0nkQBsAqAVBiQAWCoAlAdQBtBFgKA5QhEAqhXhHQgDBRgOBJQgOBJgNBSQgNBSgoBIQgpBHgjgJQgUgGACg5QACgoAMhBQAFgYADgUQANhGACgpQACgegEgOQgHgXADgrQgFAAgGgBQgsgCgsgJQgugKgrgSQgHgCgIgEQgHgDgGgDAAcjVQhZhWAXhkAigBRQgIAZgJAYQgNAhgOAeQgYA1gqArQgYAYgRAEQgNAEgIgKQgSgWAdhGQAehFAQgsQAHgUAGgWQABgEABgEQAKgkAFgmIAAgBQAMhTgIhiQgVj2DCgqAigBRQAAgEgBgDQgEgPAAgaQAAgOABgRAhoF/QADgcAIgkQAVhqACg1QABgagEgOQgGgVACgqQABgNABgOAhoF/QgaAsgXALQgNAHgLgEQgkgKAgieQAQhUAFgzQAEgmgEgTABZibQAyBEAtAlABMAhQgUAKgggBAgHGcQgDAHgEAGQgoBIgjgKQgcgHANhh");
	this.shape_3.setTransform(36.9,60.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C2894C").s().p("AAjg1IAAgFQgCgzgLgXQgIgSgOgMQgLgKgOgEIAAgDIABgcQArASAuAKIgCAcQgCApAGAWQADANgBAbQgCA0gVBqQgHAkgEAcQgZAsgWALQAwiLgBiPgAhSgZQAOgmAEgeQADgVgBgSQAAgbgLgaQgFgJgFgIQgJgPgMgLIAAAAQAOAJAQAEIAKACQANACANgCIAOAGIgBAcIAAADQAAAaAFAQIABAHIgSAxQgMAhgOAeQgYAzgrAsQgYAYgQAEQA3gyAhhTgACMgyIgGgXQgQg/g3gPIACgcQArAKAuACIAKAAQgCAsAGAXQAEAOgBAeQgCAogNBFQgFg0gLgzgAgZiwIAAAAgABBizIAAAAg");
	this.shape_4.setTransform(22.9,81.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DEB180").s().p("AhZHsQgcgIANhgQADgcAIgkQAVhqACg2QABgagEgNQgGgWACgpQA3APARA/IAFAWQALA1AEA0IgIAsQgMBBgCAoQACgoAMhBIAIgsQANhGACgpQACgdgEgPQgHgWADgsIgLAAQgsgDgsgJQgugKgrgSIgPgGIgNgGIANAGQgNACgNgCIgKgBQgQgEgOgJQAMhUgIhiQgVj1DCgqQAngJAvAAQASAFAQAHQBsArAVBhQAWCoAlAeQBtBEgKA5QhEAqhXhHQgtglgyhDQAyBDAtAlQgDBSgOBIQgOBJgNBSQgNBSgoBIQgpBIgjgKQgUgGACg5IgHAOQgkA/gfAAIgIgBgAAdAuQAcAAARgIIACgBIgCABQgRAIgcAAIAAAAIAAAAIgCAAIgDAAIADAAIACAAIAAAAIAAAAgAAcjQQhHhFAAhOQAAgTAFgVQgFAVAAATQAABOBHBFgAixG+QgkgKAgieQAQhUAFgzQAEgmgEgUIgBgGQgEgQAAgaQAOADAMALQAOAMAIASQAKAXACAzIAAAEQACCRgyCLQgIAEgIAAIgIgBgAlME7QgSgWAdhFQAehGAQgsQAHgUAGgWIACgIQAKgkAFgmQANALAJANQAFAJAEAJQALAZABAcQABARgDAVQgFAfgNAmQghBTg4AzIgGAAQgJAAgGgHgAC4guIAAAAg");
	this.shape_5.setTransform(36.9,60);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(2,1,1).p("AgXj1IAUg2QAahBgOg0QAkALAVAWQAbAdAbAzQAoBSAHA7IASAXQBUAoAfA+QAeA9gPAyQgNAxghAKQghAKhEiBQgbgvhAggQgOAEgRAJQg1AcgEALQghBZgfCaQgCANgCAMQgbCGgOAnQgPAogOASQgUAZgagKQgLgDgDgDQgCgEgLghQATAFARgYQAUgaANgkQALgeAFgwQAAgBAAgBQABgPAAgVQABgTgBgYQgBgbgCgiIAyimQgGgSgGgWQgGgVgFgYQgFgSgFgRQgBgFgCgFQgTg+gYgfIgCgDAh0n3Qg1AegvBKQgvBJgPApQgQAogCAIQAAAAgBABQgFAQgFAfQgHAggFBOQgCAeARAqQAMAbARAoIABABAjDjRQAAAEgBAFQgCAggOA3QgBAEgBAEQgBAJgDAKQgKAmAOAWQAEAHAGAFQAXASANAcQAPhFAJgdQAAAAAAgBQAKgiAMgcAjBjYQgBABAAABAg9A2QgDgEgCgFQgDgFgDgGQgJgSgIgZAioAgQAGAOAFAPQANAsgKAmQgCAGgCAFQgGARgIAKQgDAFgEADQAAABgBAAIABAAIAAgBAi2C/QgSAHgRgIQgUgJgNgxQgPgvgJgYQAJBFACBrQAEBrARAUIABAAQgDAWAAAQQgDAwAUAHQADABACAAAi1C/IAAAAIgBAAIABAAIABgBAjxFsQARAUAOgMQAFgDABgEQAMgLAIgVQAJgUgBgaQAAgKgBgLQgCgPgBgPQgDgXAEgX");
	this.shape_6.setTransform(44.1,56);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C2894C").s().p("AAAENIAAgkIAAgrQgMAEgFAGIgLAWQgCAFgCAIIgDAPIgEAJIgBgVIgDgeQgDgXAEgXIAAgBIAHgIQAHgKAHgRIADgLQALgmgNgsQgFgPgGgOQAPhFAJgdIAAgBQAJgiAMgcIAKAjIALAtIAMAoIgxCmIACA9IgCg9IAximQAIAaAJARIAFALIAGAJIgGgJQAIAEAJACQgTAdgPApQgJAYgQAzIgbBnIAAgCgAhRhyIAEgTIACgIQAOg3ACggIABgJIAAgFIABAAIABgCIACgCIAEgJIACgKIADgEQAAAAAAgBQABAAAAAAQABAAABAAQAAAAABAAIAEABIAEAGIACADQAYAfASA+QgIgBgIACQgPADgMALQgOAKgLAWIgHASQgHASgGAeQgOgWAKgmg");
	this.shape_7.setTransform(30.4,58.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DEB17F").s().p("AjDH2QgLgDgDgDIgNglIAHAAIAAAAIAAAAQAPAAANgSIABAAIAAgBQAUgaANgkQALgeAFgwIAchnQAQgzAJgYQAPgpATgdQgJgCgHgEIgGgLQgJgSgIgZIgMgoIgLgtIgKgjIgDgKQgTg+gYgfIgCgDIgEgGIgEgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAIgDAEIgCAKIgEAJIgCACQAAAAgBAAQAAAAAAABQAAAAAAAAQAAABAAAAIgBAFIgBAJQgCAggOA3IgCAIIgEATQgKAmAOAWQAEAHAGAFQAXASANAcQgNgcgXgSQgGgFgEgHQAGgeAHgSIAIgSQALgWANgKQAMgLAPgDQAJgCAIABIADAKQgMAcgKAiIAAABQgJAdgPBFQAGAOAFAPQANAsgKAmIgEALQgGARgIAKIgHAIIgBABIABAAQgEAXADAXIADAeIABAVIAAACQAAAZgIATQgIAVgMALQgBAEgFADIgBABQgEADgFAAIAAAAIgBAAQgIAAgKgKIAAAAIgCgCIACACIAAAAQAKAKAIAAIABAAIAAAAQAFAAAEgDIABgBQAFgDABgEQAMgLAIgVQAIgTAAgZIAAgCIAEgJIADgPQACgIACgFIALgWQAGgGAMgEIAAArIgBAkIAAACQgFAwgLAeQgNAkgUAaIAAABIgBAAQgNASgPAAIAAAAIAAAAIgHAAIgFgBQgUgHADgwQAAgQADgWIgBAAQgRgUgEhrQgChrgJhFQAJAYAPAvQANAxAUAJQAKAEAJAAIAAAAIAAAAQAHAAAHgCIABgBIABAAIgBAAIgBABQgHACgHAAIAAAAIAAAAQgJAAgKgEQgUgJgNgxQgPgvgJgYIgBgBIgdhDQgRgqACgeQAFhOAHggQAFgfAFgQIABgBIASgwQAPgpAvhJQAvhKA1geQAUgGAcAPQAcAPAbAaQAbAagFALQAFASAAATQAAAlgRArIgUA2IAUg2QARgrAAglQAAgTgFgSQAkALAVAWQAbAdAbAzQAoBSAHA7IASAXQBUAoAfA+QAeA9gPAyQgNAxghAKQghAKhEiBQgbgvhAggQgOAEgRAJQg1AcgEALQghBZgfCaIgEAZQgbCGgOAnQgPAogOASQgPASgRAAQgHAAgHgDgAi2DAIABAAIABgBIgBABIAAAAIgBAAgAh6iAIAAAAgAjCjVIAAAAgAjBjXIgBACIAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAAAgAjBjXIAAAAgAAJmfIAAAAg");
	this.shape_8.setTransform(44.1,55.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(2,1,1).p("ABRncQBSArASBUQAWCoAlAeQBtBEgKA5QhEAqhXhHQgDBSgOBIQgOBJgNBSQgNBSgoBIQgpBIgjgKQgUgGACg5QACgoAMhBQAFgXADgVQANhGACgpQACgdgEgPQgHgWADgsQgFAAgGAAQgsgDgsgJQgugKgrgRQgHgDgIgDQgHgDgGgEAAcjZQhZhXAXhkAigBMQgIAagJAYQgNAhgOAeQgYA0gqArQgYAZgRAEQgNADgIgKQgSgWAdhFQAehGAQgsQAHgUAGgWQABgEABgEQAKgkAFgmIAAAAQAMhUgIhiQgTjfCeg3AigBMQAAgDgBgDQgEgQAAgaQAAgOABgQAhoF7QADgcAIgkQAVhqACg2QABgagEgNQgGgWACgpQABgNABgPAhoF7QgaArgXAMQgNAGgLgDQgkgKAgieQAQhUAFgzQAEgmgEgUABMAcQgUAKgggBABZifQAyBDAtAlAgHGXQgDAHgEAHQgoBHgjgJQgcgIANhg");
	this.shape_9.setTransform(36.9,60.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C2894C").s().p("AAjg1IAAgFQgCgzgLgXQgIgSgOgMQgLgKgOgEIAAgDIABgcIgBAcIAAADQAAAaAFAQIABAHIgSAxQgMAhgOAeQgYAzgrAsQgYAYgQAEQA3gyAhhTQAOgmAEgeQADgVgBgSQAAgbgLgaQgFgJgFgIQgJgPgMgLIAAAAQAOAJAQAEIAKACQANACANgCIAOAGQArASAuAKIgCAcQgCApAGAWQADANgBAbQgCA0gVBqQgHAkgEAcQgZAsgWALQAwiLgBiPgACMgyIgGgXQgQg/g3gPIACgcQArAKAuACIAKAAQgCAsAGAXQAEAOgBAeQgCAogNBFQgFg0gLgzgAgZiwIAAAAg");
	this.shape_10.setTransform(22.9,81.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#DEB180").s().p("AhZHsQgcgIANhgQADgcAIgkQAVhqACg2QABgagEgNQgGgWACgpQA3APARA/IAFAWQALA1AEA0IgIAsQgMBBgCAoQACgoAMhBIAIgsQANhGACgpQACgdgEgPQgHgWADgsIgLAAQgsgDgsgJQgugKgrgSIgPgGIgNgGIANAGQgNACgNgCIgKgBQgQgEgOgJQAMhUgIhiQgTjfCeg3QAzgRBFgBQAjAKAcAPQBSArASBUQAWCoAlAeQBtBEgKA5QhEAqhXhHQgtglgyhDQAyBDAtAlQgDBSgOBIQgOBJgNBSQgNBSgoBIQgpBIgjgKQgUgGACg5IgHAOQgkA/gfAAIgIgBgAAdAuQAcAAARgIIACgBIgCABQgRAIgcAAIAAAAIAAAAIgCAAIgDAAIADAAIACAAIAAAAIAAAAgAAcjQQhHhFAAhOQAAgTAFgVQgFAVAAATQAABOBHBFgAixG+QgkgKAgieQAQhUAFgzQAEgmgEgUIgBgGQgEgQAAgaQAOADAMALQAOAMAIASQAKAXACAzIAAAEQACCRgyCLQgIAEgIAAIgIgBgAlME7QgSgWAdhFQAehGAQgsQAHgUAGgWIACgIQAKgkAFgmQANALAJANQAFAJAEAJQALAZABAcQABARgDAVQgFAfgNAmQghBTg4AzIgGAAQgJAAgGgHgAizAAIAAAAg");
	this.shape_11.setTransform(36.9,60);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(2,1,1).p("AigBVQgIAagJAYQgNAhgOAeQgYA0gqArQgYAZgRAEQgNADgIgKQgSgWAdhFQAehGAQgsQAHgUAGgWQABgEABgEQAKgkAFgmIAAAAQAMhUgIhiQgZknEcgBQCLAoAYBwQAWCoAlAeQBtBEgKA5QhEAqhXhHQgDBSgOBIQgOBJgNBSQgNBSgoBIQgpBIgjgKQgUgGACg5QACgoAMhBQAFgXADgVQANhGACgpQACgdgEgPQgHgWADgsQgFAAgGAAQgsgDgsgJQgugKgrgSQgHgDgIgDQgHgCgGgEAAcjQQhZhXAXhkAigBVQAAgDgBgDQgEgQAAgaQAAgOABgRAhoGEQADgcAIgkQAVhqACg2QABgagEgNQgGgWACgpQABgNABgPAhoGEQgaArgXAMQgNAGgLgDQgkgKAgieQAQhUAFgzQAEgmgEgUABZiWQAyBDAtAlABMAlQgUAKgggBAgHGgQgDAHgEAHQgoBHgjgJQgcgIANhg");
	this.shape_12.setTransform(36.9,60);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C2894C").s().p("AAjg1IAAgFQgCgzgLgXQgIgSgOgMQgLgKgOgEIAAgDIABgcIgBAcIAAADQAAAaAFAQIABAHIgSAxQgMAhgOAeQgYAzgrAsQgYAYgQAEQA3gyAhhTQAOgmAEgeQADgVgBgSQAAgbgLgaQgFgJgFgIQgJgPgMgLIAAAAQAOAJAQAEIAKACQANACANgCIAOAGQArASAuAKIgCAcQgCApAGAWQADANgBAbQgCA0gVBqQgHAkgEAcQgZAsgWALQAwiLgBiPgACMgyIgGgXQgQg/g3gPIACgcQArAKAuACIAKAAQgCAsAGAXQAEAOgBAeQgCAogNBFQgFg0gLgzgAgZiwIAAAAgABBizIAAAAg");
	this.shape_13.setTransform(22.9,81.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#DEB180").s().p("AhZHsQgcgIANhgQADgcAIgkQAVhqACg2QABgagEgNQgGgWACgpQA3APARA/IAFAWQALA1AEA0IgIAsQgMBBgCAoIgHAOQgkA/gfAAIgIgBgAALHfQgUgGACg5QACgoAMhBIAIgsQANhGACgpQACgdgEgPQgHgWADgsIgLAAQgsgDgsgJQgugKgrgSIgPgGIgNgGIANAGQgNACgNgCIgKgBQgQgEgOgJQAMhUgIhiQgZknEcgBQCLAoAYBwQAWCoAlAeQBtBEgKA5QhEAqhXhHQgtglgyhDQAyBDAtAlQgDBSgOBIQgOBJgNBSQgNBSgoBIQgkA/ggAAIgIgBgAAdAuQAcAAARgIIACgBIgCABQgRAIgcAAIAAAAIAAAAIgCAAIgDAAIADAAIACAAIAAAAIAAAAgAAcjQQhHhFAAhOQAAgTAFgVQgFAVAAATQAABOBHBFgAixG+QgkgKAgieQAQhUAFgzQAEgmgEgUIgBgGQgEgQAAgaQAOADAMALQAOAMAIASQAKAXACAzIAAAEQACCRgyCLQgIAEgIAAIgIgBgAlME7QgSgWAdhFQAehGAQgsQAHgUAGgWIACgIQAKgkAFgmQANALAJANQAFAJAEAJQALAZABAcQABARgDAVQgFAfgNAmQghBTg4AzIgGAAQgJAAgGgHgAAPELIAAAAgAizAAIAAAAgAC4guIAAAAg");
	this.shape_14.setTransform(36.9,60);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(2,1,1).p("AgXj1IAUg2QAahBgOg0QAkALAVAWQAbAdAbAzQAoBSAHA7IASAXQBUAoAfA+QAeA9gPAyQgNAxghAKQghAKhEiBQgbgvhAggQgOAEgRAJQg1AcgEALQghBZgfCaQgCANgCAMQgbCGgOAnQgPAogOASQgUAZgagKQgLgDgDgDQgCgEgLghQATAFARgYQAUgaANgkQALgeAFgwQAAgBAAgBQABgPAAgVQABgTgBgYQgBgbgCgiIAyimQgGgSgGgWQgGgVgFgYQgFgSgFgRQgBgFgCgFQgTg+gYgfIgCgDAh0n3Qg1AegvBKQgvBJgPApQgQAogCAIQAAAAgBABQgFAQgFAfQgHAggFBOQgCAeARAqQAMAbARAoIABABQAJBFACBrQAEBrARAUIABAAQgDAWAAAQQgDAwAUAHQADABACAAAjBjYQgBABAAABAjDjRQAAAEgBAFQgCAggOA3QgBAEgBAEQgBAJgDAKQgKAmAOAWQAEAHAGAFQAXASANAcQAPhFAJgdQAAAAAAgBQAKgiAMgcAg9A2QgDgEgCgFQgDgFgDgGQgJgSgIgZAioAgQAGAOAFAPQANAsgKAmQgCAGgCAFQgGARgIAKQgDAFgEADQAAABgBAAIABAAIAAgBAi2C/QgSAHgRgIQgUgJgNgxQgPgvgJgYAi2C/IABAAIABgBAi1C/IAAAAIgBAAAjxFsQARAUAOgMQAFgDABgEQAMgLAIgVQAJgUgBgaQAAgKgBgLQgCgPgBgPQgDgXAEgX");
	this.shape_15.setTransform(44.1,56);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#DEB17F").s().p("AjDH2QgLgDgDgDIgNglIAHAAIAAAAIAAAAQAPAAANgSIABAAIAAgBQAUgaANgkQALgeAFgwIAchnQAQgzAJgYQAPgpATgdQgJgCgHgEIgGgLQgJgSgIgZIgMgoIgLgtIgKgjIgDgKIADAKQgMAcgKAiIAAABQgJAdgPBFQAGAOAFAPQANAsgKAmIgEALQgGARgIAKIgHAIIgBABIgBABIAAAAIgBAAIABAAIABgBIABAAQgEAXADAXIADAeIABAVIAAACQAAAZgIATQgIAVgMALQgBAEgFADIgBABQgEADgFAAIAAAAIgBAAQgIAAgKgKIAAAAIgCgCIgBAAQgRgUgEhrQgChrgJhFQAJAYAPAvQANAxAUAJQAKAEAJAAIAAAAIAAAAQAHAAAHgCIABgBIABAAIgBAAIgBABQgHACgHAAIAAAAIAAAAQgJAAgKgEQgUgJgNgxQgPgvgJgYIgBgBIgdhDQgRgqACgeQAFhOAHggQAFgfAFgQIABgBIASgwQAPgpAvhJQAvhKA1geQAUgGAcAPQAcAPAbAaQAbAagFALQAFASAAATQAAAlgRArIgUA2IAUg2QARgrAAglQAAgTgFgSQAkALAVAWQAbAdAbAzQAoBSAHA7IASAXQBUAoAfA+QAeA9gPAyQgNAxghAKQghAKhEiBQgbgvhAggQgOAEgRAJQg1AcgEALQghBZgfCaIgEAZQgbCGgOAnQgPAogOASQgPASgRAAQgHAAgHgDgAjCjVIgBAFIgBAJQgCAggOA3IgCAIIgEATQgKAmAOAWQAEAHAGAFQAXASANAcQgNgcgXgSQgGgFgEgHQAGgeAHgSIAIgSQALgWANgKQAMgLAPgDQAJgCAIABQgTg+gYgfIgCgDIgEgGIgEgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAIgDAEIgCAKIgEAJIgCACQAAAAgBAAQAAAAAAABQAAAAAAAAQAAABAAAAgAjXHLIgHAAIgFgBQgUgHADgwQAAgQADgWIACACIAAAAQAKAKAIAAIABAAIAAAAQAFAAAEgDIABgBQAFgDABgEQAMgLAIgVQAIgTAAgZIAAgCIAEgJIADgPQACgIACgFIALgWQAGgGAMgEIAAArIgBAkIAAACQgFAwgLAeQgNAkgUAaIAAABIgBAAQgNASgPAAIAAAAIAAAAgAh6iAIAAAAgAjCjVIAAAAgAjBjXIgBACIAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAAAgAjBjXIAAAAg");
	this.shape_16.setTransform(44.1,55.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},7).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},7).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},26).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},6).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},20).to({state:[{t:this.shape_16},{t:this.shape_7},{t:this.shape_15}]},7).wait(313));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,53.3,99.4);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AgxAAIBjAA");
	this.shape.setTransform(0,43.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4D83AC").s().p("AgxGwIn+jzQIbDpAUg5QAVA6IbjqIn+DzgAuahmIgDgiQgFikAPiCIcnAAQAQCDgGCjQAAASgDAQQirCgrwAdQrvgcirihg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#86B4D6").s().p("AAADkQgUA6objqIjGhdQiRg9gUiJQCrCiLvAcQLwgcCriiQgTCJiSA9IjGBdQmwC8hjAAQgZAAgEgMg");
	this.shape_2.setTransform(0,13.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.7,-43.1,185.5,87.3);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ABzEfQAAAAABAAQAHAHAHAHQBLBICPgFQBGgDAmggQAKgIAIgKAHIBdQhBitichEQg1gNhHhHIhGhKQhChIgqANQgyAQAYA0QAeBCBfA3QAGAFAGAGQAbAbAXAeQAGAJAGAJQAUAngWAZAktABIArAnIB6B0AhWAbQAHAFAHAGIBABBIAcAfQAbBRBEBIAktABQAYgtA7AhIBCAwIADACIB8CaIAvAgIAOAJIBPA1AktABIhVg4Qg9gegaAzIDoCnIAfAHIBKAQIAnAlIAlAJIBSAXAiVAnQATgsAsAgQBzgMA1gaQAMgGAIgHACyDuQgIgFgHgEQgcgTgTgeQgHgLgGgNQgvhngcANQgVALAGAhQADAMAEAMADBDXQA7gYBAgMQATgDASgCQAVgDAVgBACOAwQBRBFB9gC");
	this.shape.setTransform(-0.8,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C2894C").s().p("AgKBnIgtiBIAdAdQAaBRBEBIgABFAyQgIgMgFgNQgvhmgbANQgVALAGAhIAHAXIgdgdIhAhCIgOgLQB0gMA0gbQAMgGAIgHIADAFQABAWAKARQAJAQARANQBRBFB9gCQAVAQg1AlIAkgFIABAKIglAGQhAALg7AYIgbAJIgDAFQgdgTgSgdgAhsBIIhhidIAGgIIADACIB8CZIAwAggAkBAJIgxhiIB7Byg");
	this.shape_1.setTransform(3.9,13.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DEB17F").s().p("AB6EtIgOgOIgBAAQhEhIgbhRIgHgYQgFghAUgLQAcgNAvBnQAGANAHALQATAeAcATIAPAJIgPgJIADgFIAbgJQA7gYBAgMIAlgFIgBgKIgkAFQA1gmgVgQQh9AChRhFQgRgNgJgQQgKgSgBgUIgDgFIAAAAIACgCQAJgIADgKQADgMgDgMQgDgLgHgLIgMgSQgXgegbgbIgMgLQhfg3gehCQgYg0AygQQAqgNBCBIIBGBKQBHBHA1ANQCcBEBBCtIAMAiIAHAYQAeBugfA2QgIAKgKAIQgmAghGADIgSAAQiCAAhGhDgAFZCuIAqgEIgqAEgAAODhIgvggIh8iaQATgsAsAgIAOALIBABBIAsCDgAhpDBIgnglIh6h0IAwBkIgfgHIjoinQAagzA9AeIBVA4IArAnIgrgnQAYgtA7AhIBCAwIgGAIIBiCdg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.1,-37.8,97.4,75.7);


(lib.Tween4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(2,1,1).p("AooBfQgIhfBIgEQChgLDSh3QDQh2BqgRQAmgDAjAGAIqBVQgoBIjPBJQkbBkoNiO");
	this.shape_3.setTransform(-0.5,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DEB17F").s().p("An6C8QgqgYgJhFQgIhfBIgEQChgLDSh3QDQh2BqgRQAmgDAjAGQBzATBaBwQA6BHAcBhQAIAagPAaQgoBIjPBJQh1ApifAAQjgAAk0hTg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.8,-28.1,112.8,56.3);


(lib.Tween1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("ACogqIgRA2QBNALBEAyIAEgWQgkhMhggRgAkoAAQB9gQBdAPIAAhDQiJgUhUBHg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#323232").s().p("ACXAMIARg2QBgARAkBMIgEAWQhEgyhNgLgAkrgRQBUhHCJAUIAABDQhdgPh9AQg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31,-8.3,62,16.6);


(lib.Symbol6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(2,1,1).p("AiFhZIAiAeIAACHIgiAnAiFhZIAAhxIELAAIAABxIgkAeIAACHIAkAnIAABYIkLAAIAAhYgACGhZIAADM");
	this.shape_6.setTransform(28,172.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhVBvIgBAAIgBAAIAAgBIgBAAIgBAAIgCgBIAAAAIgCgBIgBgBIAAgBIAAgBIAAgDIAAAAIAAgCIABAAIAAAAIABgBIABAAIAAgBIACAAIABAAIABAAIABAAIABAAIABAAIABAAICmAAIACAAIAAAAIABABIAAAAIACABIAAAAIAAAAIAAACIABAAIAAADIgBABIAAAAIAAABIAAABIgBAAIgBAAIAAABIgBAAIAAAAIAAAAIgCAAIilABIgBAAIgBABIgBAAgABhA3IAAiHIAkgeIAADNgAiEhuIAhAeIAACHIghAogABFBLIgBAAIiKAAIgBAAIgCAAIgBAAIgCAAIgBAAIAAgBIgBAAIgCgBIAAgBIAAgBIgBgBIAAgCIABgBIAAgBIAAAAIABAAIAAgBIAAgBIABAAIABAAIAAgBIABAAIACAAIAAAAIABAAIACAAIABAAIAAAAIABAAICJAAIABAAIABABIAAAAIACAAIABACIAAAAIAAAAIAAABIABABIAAADIgBABIAAAAIAAABIAAAAIgBAAIAAABIgCAAIAAAAIgBABgAhFAsIgBAAIgBAAIAAAAIgCgBIAAAAIgBAAIgCAAIAAAAIgBgCIgBgBIAAgBIgBgBIAAgCIABAAIAAgCIABAAIAAAAIAAgBIAAAAIABgBIABAAIABgBIABAAIADAAIABAAIAAABIABAAIAAgBIABAAICEAAIABAAIABABIABABIAAAAIABABIAAAAIABAAIAAACIAAAAIAAADIAAABIAAAAIgBABIAAAAIAAAAIgBABIAAABIgBAAIgBAAIAAAAIgBAAIiEAAIgBABIgBAAg");
	this.shape_7.setTransform(28,174.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CCCCCC").s().p("AgtA8IAAh3IBbAAIAAB3g");
	this.shape_8.setTransform(27.9,167.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AiEDLIAAhYIAhgnIAAiHIghgeIAAhxIEJAAIAABxIgkAeIAACHIAkAnIAABYgAheB+IAAAAIAAABIABABIACACIAAAAIACAAIABAAIABAAIAAABIABAAIABAAIABAAIABgBIABAAIClAAIACAAIAAAAIAAgBIABAAIAAAAIABgBIABAAIAAgBIAAAAIAAgBIABAAIAAgDIgBgBIAAgBIAAAAIAAgBIgCgBIAAAAIgBAAIAAgBIgCAAIimAAIgBAAIgBABIgBAAIgBgBIgBAAIgBAAIgCABIAAAAIgBAAIgBABIAAABIgBAAIAAACIAAAAgAhQBXIAAABIgBAAIAAADIABAAIAAACIAAAAIACACIABAAIAAABIABAAIACAAIABAAIACAAIABAAICKAAIABAAIAAAAIABgBIAAAAIACgBIAAAAIABAAIAAgBIAAAAIAAgBIABgBIAAgDIgBAAIAAgBIAAAAIAAgBIgBgBIgCAAIAAgBIgBAAIgBAAIiJAAIgBAAIAAgBIgBAAIgCAAIgBABIAAAAIgCAAIgBAAIAAAAIgBAAIgBABIAAABIAAAAIgBAAIAAABgAhOA3IAAABIgBABIAAACIABABIAAABIABAAIABACIAAAAIACABIABAAIAAAAIACAAIAAAAIABAAIABAAIABAAIABAAICEAAIABAAIAAAAIABgBIABAAIAAAAIABgBIAAAAIAAgBIABAAIAAgBIAAAAIAAgDIAAgBIAAgBIgBAAIAAgBIgBgBIAAAAIgBgBIgBAAIgBAAIiEAAIgBAAIAAAAIgBAAIAAAAIgBAAIgDAAIgBAAIgBAAIgBAAIgBABIAAABIAAAAIAAAAIgBABgAguAPIBbAAIAAh3IhbAAgAhUivIgJAEIgCACIgFAIQAAAAAAAAQABAAAAABQAAAAgBAAQAAAAAAAAIAAACIgBAAIgBAIIABABIACAIIABABIABACIABABIAEADIADADIAHACIAHABQAFgBAFgDIAGgFIAEgHIAAAAIAAgBIAAgBQACgIgCgHIgFgIIgCgBQgFgEgGgCIgFAAIgGABgAgtiXIABABIAAABIAAABIACABIABAAIABABIAAAAIAFAAIABAAIAAAAIABgBIBvAAIABAAIABAAIABAAIABAAIAAgBIABAAIAAAAIAAgBIABgBIAAAAIABgBIAAgDIgBAAIAAgCIgBAAIAAAAIgBgBIAAAAIgBgBIgCAAIgBAAIhvAAIgBAAIgBAAIAAAAIgCAAIgBAAIAAAAIgCAAIAAAAIgBAAIgBABIgBAAIgBABIAAAAIAAAAIAAACIgBAAg");
	this.shape_9.setTransform(28,172.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1F1F1F").s().p("AgINwIgtkIQAHAHALAAQALAAAHgIIAFgGIAgDDIBAnAQABAEADADIABABQAIAHAKAAQALAAAIgIIhKIFgAiGCUIABAAQAHAIALAAQALAAAIgIQAEgEACgEIBJG1QgIgHgKAAQgLAAgIAHIgFAHgACCFKIgEgFIgBAAQgHgHgLAAQgLAAgIAHIAAAAIA/m8IAGgHQAFAFAHACIAGAAQALAAAHgIIAEgDIhDHNIAAgBgAjBjDQAIAIALAAQALAAAHgIQAGgFACgHIA1E/IgBgCQgIgHgLAAQgLAAgIAHIgFAIgADGifIgBgBIgEgEIAAgBQgHgGgJgBIgCAAQgIAAgGAEIAvldQAAAHADAFQABAEADADIABABQAGAFAHABIAFABQAHAAAGgDIABgBIgwFUIgCgFgAjxnbIACgFQAFADAFABIAEABIACAAQAGAAAGgDIAGgFIAFgGIADgGIAAAAIAsEGIgDAAQgHgHgLAAQgLAAgIAHIgFAIgAkwtTIAmgcIBCFsIAAAAIgBgBIgEgFIAAAAQgHgHgJAAIgCAAQgGAAgFACQgEACgEADIgBABIgEAGIAAABIgBABgAEJtnIAoAAIgzFQIgBgBIgBAAQgHgHgJAAIgCAAQgLAAgIAHIAAABIgEAGIgBABIAAAAg");
	this.shape_10.setTransform(25.9,63.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CC3300").s().p("AhCLwIgHgDIgDgCIgEgEIgBgBIgBgCIgBAAIgCgJIgBAAIACgIIAAgBIAAgBQABAAAAgBQAAAAAAAAQAAAAAAAAQAAgBgBAAIAGgHIACgCIAIgFQAFgBAHABQAGACAEADIACACIAFAIQACAHgBAHIgBABIABABIgBABIgEAHIgGAFQgFADgEAAgAgSLeIgBAAIgEAAIgBAAIgBAAIgBAAIgCgCIAAgBIAAgBIgBAAIAAgDIABAAIAAgCIAAAAIAAgBIABgBIABAAIABAAIABgBIABAAIABAAIABABIAAAAIACAAIAAAAIABgBIABAAIBwAAIABAAIABABIABAAIAAAAIABABIAAABIABAAIAAABIABABIAAADIgBAAIAAABIgBAAIAAABIAAAAIgBABIAAAAIgBAAIgBABIAAAAIgBAAIhwAAIgBAAgAg6GYIgBgBQgIgIAAgLQAAgGADgFIAAgBIAFgHQAIgHALAAQAKAAAIAHIAAAAIAEAFQAEAGAAAIIAAAHIgDAGIgFAGQgHAIgLAAQgLAAgHgHgABUCcIgBgBQgDgDgBgEQgDgFAAgHQAAgGACgFIABgBIAEgGIAAgBQAIgHALAAQALAAAHAHIABAAIAEAFIAAABQAEAGAAAHIgBAHIgCAGIgFAGQgIAIgLAAQgKAAgIgHgAiKg7IgBAAQgHgIAAgLQAAgGACgFIAAAAIAFgIQAIgHALAAQALAAAIAHIABACIADADQAEAGAAAIIgBAHIgBAEQgCAEgEAEQgIAIgLAAQgLAAgHgIgACklHQgHgCgFgFIgBgBQgDgDgCgDQgDgGAAgGQAAgHADgFIAAgBIAEgGIABAAQACgDADgBQAGgEAIAAIACAAQAJABAHAGIAAABIAEAEIABABIACAFIABAJIAAAGIgDAGIgBADIgEADQgHAIgLAAIgGAAgAjGmTIAAAAQgIgIAAgLQAAgGADgFIAFgIQAIgHALAAQALAAAHAHIAEAFQAEAGAAAIIAAAHQgCAHgGAFQgHAIgLAAQgLAAgIgIgAjmqrIgEgBQgFgBgFgDIgCgCIgCgCIgEgGQgDgFAAgHQAAgGACgEIABgBIAAgBIAEgGIABgBQAEgDAEgCQAFgCAGAAIACAAQAJAAAHAHIAAAAIAEAFIABABIAAAAQADAGAAAHIAAAFIAAACIgDAGIgFAGIgGAFQgGADgGAAIgCAAgADgq7QgHgBgGgFIgBgBQgDgDgBgEQgDgFAAgHIACgKIAAgBIAAAAIABgBIAEgGIAAgBQAIgHALAAIACAAQAJAAAHAHIABAAIABABIADAEIAAABQAEAGAAAHIgBAHIgCAGIgFAGIgFAEIgBABQgGADgHAAIgFgBg");
	this.shape_11.setTransform(26.4,84.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.6,-24.6,61,218.3);


(lib.LEFTTHIGH_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(2,1,1).p("Ak5r5QhFA5hDBCICgVoQAMBkgDBOQgBAGAAAFQgCAjgFAfQgMBKA8A/QAWAWAgAWAHCydQgcMVg2KNQgTFFATFjQAzA9gjBE");
	this.shape_3.setTransform(45,118.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4D83AC").s().p("AhePfQCMCEEogKQhnAahQAAQi+AAg/iUgAFJPyQgfkBAOkiQA1sugSrjIBngwQgcMVg2KNQgTFFATFjQAzA9gjBDQgIhDgvgjgAkhMVIig1oQBDhCBFg5Qh7CACtURQARCZgiBrQADhOgMhkg");
	this.shape_4.setTransform(45,113.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#86B4D6").s().p("AjDRxQgggVgWgXQg9g/ANhKQAFgeACgjIAAgMQAjhqgSiZQis0SB7h/IAJgIQC0iTDIhcIEOh9QATLjg2MuQgOEiAgEAQAvAkAIBDQg7BKhVAmQhjAphrAAQhqAAhygpgAFNQCQkpAKiLiFQBZDTFbhYg");
	this.shape_5.setTransform(45.9,122.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,92,241.4);


(lib.LEFTSHOULDER_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("AhjtPQESCYAqIOIBTIyQgNAGgNAGAjGHaQDrAhDjhiQAFgCAFgCAElMkQAAgCAAgCQAEgsgDg9IgSkCIgCggAkrjRIA+KlQATADAUADIA/F2");
	this.shape_4.setTransform(31.5,87.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C2894C").s().p("AitB9IhAl1QDtAhDihiIAMAcQizBWjLgIIgDAAQg+AJBfGTQAfBjBKAIIgbABIgIABQh7AAgGi9g");
	this.shape_5.setTransform(35.3,159.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DEB181").s().p("AgzE7QhKgIgfhjQhfmTA+gJIADAAQDLAICzhWIARECQAEA8gEAsIAAAEQgFAygOAdQgoCLjIANIgFAAgAC4k2IAJgEIADAgg");
	this.shape_6.setTransform(39.5,159.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2D2D2D").s().p("ABaB1IgDg9QgjnDj7jiQETCYApIMIBTIzIgbAEg");
	this.shape_7.setTransform(41.5,65.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4A4A4A").s().p("Ai/KfIgngHIg9qkQgglfAki0QAShDAcgqQAog1BtA3QD7DjAjHDIADA9IBTH5IAbgFIgaAMIgJAFQiqBJiuAAQg7AAg8gIg");
	this.shape_8.setTransform(30.7,67.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62.5,191.2);


(lib.LEFTSHOE_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(2,1,1).p("AlEhlQAqBVAIBxQAMCCA+BNQBgB3DYgJQBqgGAxgiQCChbg/iuQhUi6h0iRQhvi5hygFQiPgHhDA1QhAA3AOBoQAGA8AVAug");
	this.shape_3.setTransform(35.5,41.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D8D8D8").s().p("AkICYQgIhygqhUQgVgugGg8QgOhoBAg3QBDg1CPAHQByAFBvC5QB0CRBUC6QhqhEj0BGQiWA6giCHQg+hNgMiCgAizjUIBWDpIDVg3IiFjYQgXgGgXAAQg+AAg6Asg");
	this.shape_4.setTransform(34.5,35.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EDECEC").s().p("AkVD9QAiiHCWg7QD0hFBqBEQA/CuiCBbQgxAihqAFIgeABQjBAAhZhugAkKk+QBQg9BWAXICFDYIjVA4g");
	this.shape_5.setTransform(43.2,46.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,73,84.9);


(lib.LEFTLEG_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(2,1,1).p("AEiIpQBZADgZBwQgKAmgTAfIgHD0QgWgmgZgKQjzhOitCrQgLALgKALIAAArIghgSQguidhJhWQgogjgBhAQAkxxgHpoAg9K3QCeiCDBgMAEmxCQAaMsgeM/");
	this.shape_3.setTransform(36,126);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4D82AC").s().p("Ai1QPQgvidhJhWQgngjgBhAQAjxxgGpoQBBHwgtSuQgEBzBEApQAoAWA8CwIgVAWIAAArgAEhODQAkjdjKgEQCggdA7A6IgHD0QgVgmgZgKgAEzIHQjBAMieCCQCXjXDIBJgAgeuwQB9BRDFAQQg2AMgvAAQiRAAhMhtg");
	this.shape_4.setTransform(34.2,129.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#86B4D6").s().p("AkEOxQhEgqAEhyQAtyuhBnwQAEjhEzgMQEvAMAKCdQAZMsgeM/QBaADgZBwQgKAmgUAeQg7g5igAdQDKADgkDeQjzhOiuCrQg8iwgogWgAhMMsQCeiCDBgMQgygTgwAAQiMAAhxChgAEEq4QjFgQh9hSQBlCRDdgvg");
	this.shape_5.setTransform(37.4,114.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,74,236.1);


(lib.LEFTARM_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(2,1,1).p("ADOsCQAEAOAEARQAAAEABAEQATBpgQDSQgzI8g7G/QgNBSgNBWAjXqXQgaIMAxFiQAbD0gSDtQgCAWgCAV");
	this.shape_53.setTransform(22.5,85.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#C2894C").s().p("Ai/EEQgxlhAaoNQALhNAgguQgdCqAtMIQAVE4gwDhQASjugbj0gABkKHQBYuIASm2IAJABIABAIQAAAIABAHIACAHIAAAEIABABQAEAXgBAbIAAAEQADBogHCCQgzI8g7G/g");
	this.shape_54.setTransform(22.4,81.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#DEB180").s().p("AhUN2Qh9gOAJihIAEgrQAwjhgVk3QgusJAdipQAuhEBagEQC8gHA2BrQAFAJADAKIgIgBQgSG1hZOIIAJACIgaCoQgcCQhnAAIgVgBgADIr/IACAEIAAABIAAACIgCgHg");
	this.shape_55.setTransform(23.8,88.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,47,177.5);


(lib.HAND_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(2,1,1).p("AgMnQIglArIhaBmQhEA5gRCLQgRCKgOBsQABAKACAIQAIAeATgFQAKgDAPgOQAtguA5jVQARCGgKBXQgLBQgvCrQgQAsAQAUQAYARArg7QAGgJAHgLQAEgGADgGAAtFdQgUAogdAqQgdAngdgGQgegKAThDQAEgQAHgTQAMgVAKgWQAEgKAFgKQAlhcAKhmAAtFdQghBRAgAFQAgABAdgzQAAgBABgCQACgDABgDQAFgIAEgJAEAmwIAAHZQgDCIg/B9QgYAzgcAGQgKADgKgDABvBKQgBCPhBCEADLAvQgLCghKCY");
	this.shape_17.setTransform(25.6,51.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C2894C").s().p("Ag0FuIAMgjQALgVAKgWIAJgUQAmhcAKhmQAkB0hNCGQgtBRAHAmQgdgKAShDgABCFIQBCiEABiPQAxBahWC6QgZA0gGAhQgfgFAghRgACMFSQBJiYAMigQASBSgPBCQgQBDg1BhIgJABQgFAAgFgBgAjmB4IgEgSIAgj2QARiLBEg5IBahmIhHCcQgZAngPA1IgOA+QgfCGgVCPIgFABQgOAAgHgag");
	this.shape_18.setTransform(23.5,54);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#DEB180").s().p("AhNHrQgIgmAuhRQBMiGgkh0QgJBmgmBcIgJAUQgKAWgMAVIgHAMIgNAUQgrA7gYgRQgQgUAQgsQAvirALhQQAKhXgRiGQg5DVgtAuQgPAOgKADQAViPAfiGIAOg+QAOg1AagnIBGicIAlgrQA/hCB0APQBTAMAGBHIAAHZQgDCIg/B9QgYAzgcAGQA1hhAPhDQAQhCgThSQgLCghKCYIgJARIgDAGIgBADQgdAzgggBQAFghAag0QBVi6gxhaQgBCPhBCEQgUAogdAqQgZAigaAAIgHgBg");
	this.shape_19.setTransform(27.1,49.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,53.3,99.4);


(lib.BODY = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AHh70QDjCzFDB+QDJBvgjFKQgLBJgSBOQgBAAAAABQgfCMgzCbQgJAghDEqQg8EEAMHpQABBGADBKQAZJVATHaQglAlgzAfIAAAAQkECZqAAAQgKAAgLAAQgKAAgLAAQsAAAjbjdQATnaAZpVQAYpUhEkpQhDkqgJggQhPjyghjNQgjlKDJhvQFDh+DiizQD5iVD1ADQECADDSCPg");
	this.shape.setTransform(120.2,192.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhXATIAAgIIEHAAIAAAIgAh/ARQgIgBgFgIQgOAPgRgLIgCgCQgHgPAQgGQAKgEAHAIIAJAKIAIgIIAHgIIADgDQgBAEgEAFIgHAHIgEAFQADAFAGADQAHADAFgHQAAAJgIAAIgEgBgAikgHQgKAHAHAIQAGAJAKgEQAGgCAEgFIgHgIQgFgGgHAAIgEABgAhFgMIAAgGIDxAAIAAAGg");
	this.shape_1.setTransform(185,106.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgaAbQgLgMAAgPQAAgOALgMQAMgLAOAAQAPAAALALQAMAMAAAOQAAAPgMAMQgLALgPAAQgOAAgMgLgAAYAQQALADAAgLQgEAHgHgDQgHgDgCgFIAEgEIAHgIQAEgFABgEIgEADIgGAIIgIAIIgJgKQgGgIgKAEQgQAGAHAPIACACQARALANgPQAFAIAIABgAgQAHQgGgIAKgHQAJgCAFAHIAHAIQgEAFgFACIgFABQgGAAgFgGg");
	this.shape_2.setTransform(169.8,106.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4A4A4A").s().p("AAneIIgWAAIgUAAQsAAAjbjdQASnaAZpVQAZpUhEkpQhEkqgIggQhQjyghjNQgilKDIhvQFDh+DjizQD5iVD1ADQEBADDTCPQDiCzFDB+QCjDOhVF1QgcB8g4CPIgHAWIAAABQiSHkAUIqIAaU6IADAFQkDCZp8AAIgEAAgAxytyQAgCMAzCbQAIAgBEEqQA7EEgLHpIgFCQQgZJVgSHaQAkAlAzAfIABAAIACgFIAb06QAUoqiSnkIgBgBIgGgWQg4iPgdh8QhVl1CjjOQjIBvAiFKQAMBJARBOIA7gNgAHmt2QgLAMAAAPQAAAQALALQAMALAPAAQAQAAALgLQALgLAAgQQAAgPgLgMQgLgLgQAAQgPAAgMALgAJBtJIEIAAIAAgIIkIAAgAJTtpIDyAAIAAgGIjyAAgARmuAIA7ANIAAABg");
	this.shape_3.setTransform(118.5,192.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2D2D2D").s().p("AOTZZIgCgEIgb06QgUoqCSnkIABgBIAGgWQA4iPAdh9QBUl0ijjPQDJBwgiFJQgMBKgSBOIg6gOIA6APQggCLgzCcQgJAghDEpQg7EGALHoIAFCQQAZJVASHaQgkAlgzAegAuTZZQgzgegkglQATnaAZpVIAEiQQALnog7kGQhEkpgIggQgzicggiLIA7gPQAcB9A4CPIAHAWIAAABQCSHkgUIqIgaU6IgDAEgAymygQgjlJDIhwQijDPBWF0Ig8AOQgRhOgLhKg");
	this.shape_4.setTransform(120.8,207.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,242.4,387.5);


(lib.BODY_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(2,1,1).p("AHh70QDjCzFDB+QDIBvgiFKQgBAHgCAHQgKBCgQBHQgBAAAAABQggCMgzCbQgIAghEEqQg7EEALHpQACBGADBKQAZJVASHaQgkAlgzAfIgBAAQkDCZqAAAQgKAAgLAAQgKAAgLAAQsAAAjbjdQATnaAZpVQAYpUhEkpQhDkqgJggQhPjyghjNQgDghgCgeQgKkSCwhmQADgBACgBQFDh+DiizQD5iVD1ADQEBADDTCPg");
	this.shape_5.setTransform(120.2,192.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhXATIAAgIIEHAAIAAAIgAh/ARQgIgBgFgIQgOAPgRgLIgCgCQgHgPAQgGQAKgEAHAIIAJAKIAIgIIAHgIIADgDQgBAEgEAFIgHAHIgEAFQADAFAGADQAHADAFgHQAAAJgIAAIgEgBgAikgHQgKAHAHAIQAGAJAKgEQAGgCAEgFIgHgIQgFgGgHAAIgEABgAhFgMIAAgGIDxAAIAAAGg");
	this.shape_6.setTransform(185,106.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AgaAbQgLgMAAgPQAAgOALgMQAMgLAOAAQAPAAALALQAMAMAAAOQAAAPgMAMQgLALgPAAQgOAAgMgLgAAYAQQALADAAgLQgEAHgHgDQgHgDgCgFIAEgEIAHgIQAEgFABgEIgEADIgGAIIgIAIIgJgKQgGgIgKAEQgQAGAHAPIACACQARALANgPQAFAIAIABgAgQAHQgGgIAKgHQAJgCAFAHIAHAIQgEAFgFACIgFABQgGAAgFgGg");
	this.shape_7.setTransform(169.8,106.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4A4A4A").s().p("AAVeIIgVAAIgVAAQsAAAjbjdQATnaAZpVQAYpUhEkpQhDkqgJggQhPjyghjNQgDghgCgeQgKkSCwhmIAFgCQFDh+DiizQD5iVD1ADQEBADDTCPQDjCzFDB+QDIBvgiFKIgDAOQgkA6gjBQIAtgBIgBABIgsAAIhjD9IgGAWIgBABQiSHkAUIqIAbU6IACAFQkCCZp8AAIgFAAgAwxpLQAJAgBDEqQA8EEgMHpIgECQQgZJVgTHaQAlAlAzAfIAAAAIADgFIAa06QAUoqiSnkIAAgBIgHgWIhkj9QgphrgihNIADAgQALBJASBOIArABIgrAAQAgCMAzCbgAHVt2QgLAMAAAPQAAAQALALQAMALAPAAQAPAAALgLQAMgLAAgQQAAgPgMgMQgLgLgPAAQgPAAgMALgAIwtJIEIAAIAAgIIkIAAgAJCtpIDyAAIAAgGIjyAAg");
	this.shape_8.setTransform(120.2,192.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2D2D2D").s().p("AOWWNIgDgFIga05QgUoqCSnlIAAgBIAHgVIBij+IAtAAQggCMgzCbQgJAghDEqQg8EFAMHoIAECQQAZJVATHaQgkAlg0AfgAuQWNQgzgfgkglQASnaAZpVIAFiQQALnog7kFQhEkqgIggQgzibggiMIAqAAIBlD+IAGAVIABABQCSHlgUIqIgbU5IgCAFgASo1dQgLBCgQBGIgtABQAkhPAkg6gAxczUgAyHzVQgRhOgMhJIgDggQAiBOApBqg");
	this.shape_9.setTransform(120.5,228.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,242.4,387.5);


(lib.Tween7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DEB180").s().p("AiQCWQg+g8gChXQgBhVA8g+QA8g+BXgCQBVgBA9A8QA+A8ADBWQABBWg8A+Qg7A+hXABIgEABQhTAAg9g7g");
	this.shape_3.setTransform(10.2,-36.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(180));

	// HAND
	this.instance = new lib.HAND("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(6.4,110.6,1,1,0,0,0,39,6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:4},4).to({rotation:-1.5,x:11.7,y:110,startPosition:5},1).to({scaleX:1,scaleY:1,rotation:-6.8,x:19,y:107.9,startPosition:6},1).to({rotation:-15.3,x:30.1,y:96.2,startPosition:7},1).wait(1).to({regX:38,regY:55.2,scaleX:1,scaleY:1,rotation:-27,x:67.7,y:121.7,startPosition:8},0).wait(1).to({regX:39,regY:6.1,scaleX:1,scaleY:1,rotation:-41.1,x:66,y:55.1,startPosition:9},0).to({scaleX:1,scaleY:1,rotation:-56.4,x:75.6,y:30.5,startPosition:10},1).wait(1).to({regX:38,regY:55.2,rotation:-71.6,x:125.3,y:11.9,startPosition:11},0).wait(1).to({regX:39,regY:6.2,scaleX:1,scaleY:1,rotation:-85.2,x:82.3,y:-35.7,startPosition:12},0).to({rotation:-95.8,x:87,y:-52.3,startPosition:13},1).wait(1).to({regX:38,regY:55.2,scaleX:1,scaleY:1,rotation:-102.7,x:129.2,y:-76,startPosition:14},0).wait(1).to({regX:39.1,regY:6,rotation:-105,x:79.2,y:-71.1,startPosition:15},0).to({startPosition:24},9).wait(13).to({startPosition:37},0).to({regY:6.1,rotation:-82.5,x:69.3,y:-15.2,startPosition:40},3).to({regX:39,scaleX:1,scaleY:1,rotation:-67.5,x:67.3,y:23,startPosition:42},2).to({regX:39.1,regY:6.2,rotation:-52.4,x:55.7,y:61.1,startPosition:44},2).to({regX:39,scaleX:1,scaleY:1,rotation:-44.9,x:45.9,y:89.5,startPosition:45},1).to({regX:39.1,scaleX:1,scaleY:1,rotation:-37.4,x:36.2,y:98.6,startPosition:46},1).to({regX:39,regY:6,scaleX:1,scaleY:1,rotation:-22.4,x:6.4,y:110.5,startPosition:48},2).to({rotation:0,y:110.6,startPosition:60},6).wait(6).to({startPosition:60},0).to({regY:8.3,y:111.2,startPosition:64},4).wait(1).to({regX:38,regY:55.2,rotation:-1.7,x:10.1,y:155.5,startPosition:65},0).wait(1).to({regX:39,regY:8.3,rotation:-6.8,x:20,y:100.7,startPosition:66},0).wait(1).to({regX:38,regY:55.2,scaleX:1,scaleY:1,rotation:-15.3,x:43,y:133.9,startPosition:67},0).wait(1).to({regX:39,regY:8.3,scaleX:1,scaleY:1,rotation:-26.8,x:47.4,y:71.9,startPosition:68},0).wait(1).to({regX:38,regY:55.2,rotation:-41,x:87.7,y:87.9,startPosition:69},0).wait(1).to({regX:39,regY:8.3,rotation:-56.4,x:69.3,y:30.1,startPosition:70},0).wait(1).to({regX:38,regY:55.2,scaleX:1,scaleY:1,rotation:-71.7,x:119,y:20.8,startPosition:71},0).wait(1).to({rotation:-85.3,x:126.4,y:-12.3,startPosition:72},0).wait(1).to({scaleX:1,scaleY:1,rotation:-96,x:130.4,y:-38.5,startPosition:73},0).wait(1).to({rotation:-102.7,x:132.1,y:-54.9,startPosition:74},0).wait(1).to({regX:39.1,regY:6,rotation:-105,x:87,y:-49.3,startPosition:75},0).wait(14).to({x:79.2,y:-71.1,startPosition:37},0).to({regY:6.1,rotation:-82.5,x:70.9,y:-13.6,startPosition:40},3).to({regX:39,scaleX:1,scaleY:1,rotation:-67.5,x:61.6,y:17.5,startPosition:42},2).to({regX:39.1,regY:6.2,rotation:-44.9,x:42.3,y:79.8,startPosition:45},3).to({regX:39,rotation:-29.8,x:22,y:100.4,startPosition:47},2).to({regY:6,scaleX:1,scaleY:1,rotation:-22.4,x:6.4,y:110.5,startPosition:48},1).to({rotation:0,y:110.6,mode:"single",startPosition:60},6).wait(74));

	// LEFT ARM
	this.instance_1 = new lib.LEFTARM("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(10.5,-37.5,1,1,0,0,0,22.5,11.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({startPosition:4},4).wait(1).to({regX:21.9,regY:80.1,scaleY:1.02,rotation:-1.4,x:11.6,y:32.6,startPosition:5},0).wait(1).to({regX:22.4,regY:11.7,scaleX:1,scaleY:1.07,rotation:-3.6,x:10.5,y:-37.6,startPosition:6},0).to({regY:11.5,scaleY:1.12,rotation:-6.8,x:10.6,y:-37.7,startPosition:7},1).wait(1).to({regX:21.9,regY:80.1,scaleY:1.09,rotation:-16.7,x:31.5,y:33.8,startPosition:8},0).wait(1).to({scaleX:1,scaleY:1.04,rotation:-27.9,x:43.6,y:26,startPosition:9},0).wait(1).to({regX:22.4,regY:11.7,scaleY:1,rotation:-40,x:10.5,y:-37.5,startPosition:10},0).wait(1).to({regX:21.9,regY:80.1,rotation:-59.6,x:69.2,y:-2.9,startPosition:11},0).wait(1).to({regX:22.5,regY:11.6,rotation:-78.9,x:10.5,y:-38.3,startPosition:12},0).wait(1).to({regX:21.9,regY:80.1,scaleX:1,scaleY:1,rotation:-89.7,x:78.9,y:-37.7,startPosition:13},0).wait(1).to({scaleX:1,scaleY:1,rotation:-98.8,x:78.2,y:-48.6,startPosition:14},0).wait(1).to({regX:22.5,regY:11.7,rotation:-105,x:10.5,y:-39,startPosition:15},0).wait(22).to({startPosition:37},0).to({regY:11.6,scaleX:1,scaleY:1,rotation:-63.9,y:-38.3,startPosition:40},3).to({regX:22.4,regY:11.7,rotation:-43.7,y:-37.5,startPosition:42},2).to({regY:11.4,scaleX:1,scaleY:1.12,rotation:-18,x:10.6,y:-37.8,startPosition:45},3).to({regX:22.5,regY:11.7,scaleX:1,scaleY:1.05,rotation:0,x:10.5,y:-37.5,startPosition:48},3).to({mode:"single",startPosition:59},6).wait(6).to({scaleY:1,mode:"synched",startPosition:60},0).to({regX:22.3,regY:11.6,scaleY:1.05,skewX:0.7,x:10.3,y:-37.6,startPosition:64},4).to({regY:11.5,scaleY:1.09,skewX:0.8,skewY:-1.3,x:10.5,y:-37.8,startPosition:65},1).wait(1).to({regX:21.9,regY:80.1,scaleX:1,scaleY:1.14,skewX:-2.1,skewY:-3.7,x:13.1,y:40.7,startPosition:66},0).wait(1).to({regX:22.4,regY:11.3,scaleY:1.22,skewX:-6,skewY:-6.8,x:10.6,y:-37.9,startPosition:67},0).wait(1).to({regX:21.9,regY:80.1,scaleY:1.16,skewX:-14.9,skewY:-15.4,x:30.5,y:39.2,startPosition:68},0).wait(1).to({scaleX:1,scaleY:1.08,skewX:-24.9,skewY:-25.2,x:41.4,y:29.9,startPosition:69},0).wait(1).to({regX:22.4,regY:11.6,scaleY:1,rotation:-35.7,skewX:0,skewY:0,x:10.4,y:-37.6,startPosition:70},0).to({scaleX:1,scaleY:1,rotation:-51.4,x:10.5,y:-38.1,startPosition:71},1).to({regX:22.5,regY:11.5,scaleX:1,scaleY:1,rotation:-66.7,x:10.4,y:-38.3,startPosition:72},1).wait(1).to({regX:21.9,regY:80.1,scaleX:1,scaleY:1,rotation:-76.4,x:76.9,y:-21.8,startPosition:73},0).wait(1).to({scaleX:1,scaleY:1,rotation:-84.5,x:78.7,y:-31.5,startPosition:74},0).wait(1).to({regX:22.5,regY:11.7,rotation:-90,x:10.5,y:-38.9,startPosition:75},0).wait(14).to({rotation:-105,y:-39,startPosition:37},0).to({regY:11.6,scaleX:1,scaleY:1,rotation:-63.9,y:-38.3,startPosition:40},3).to({regX:22.4,regY:11.7,rotation:-43.7,y:-37.5,startPosition:42},2).to({regY:11.4,scaleX:1,scaleY:1.12,rotation:-18,x:10.6,y:-37.8,startPosition:45},3).to({regX:22.5,regY:11.7,scaleX:1,scaleY:1.05,rotation:0,x:10.5,y:-37.5,startPosition:48},3).to({mode:"single",startPosition:59},6).wait(74));

	// Layer 7
	this.instance_2 = new lib.Symbol3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(9.1,-36.3,0.926,0.902,0,-20,160,75.3,-79.2);
	this.instance_2.alpha = 0.359;

	this.instance_3 = new lib.Symbol3("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(9.2,-36.4,0.966,0.966,0,7.7,-172.3,75.4,-79.5);
	this.instance_3.alpha = 0.359;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},10).to({state:[]},1).to({state:[]},144).wait(25));

	// LEFT SHOULDER
	this.instance_4 = new lib.LEFTSHOULDER("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-7.8,-201.2,1,1,0,0,0,21.4,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({startPosition:0},4).to({scaleY:0.99},11).wait(22).to({startPosition:0},0).to({scaleY:1},11).wait(12).to({startPosition:0},0).to({startPosition:0},4).to({scaleY:0.99},11).wait(14).to({startPosition:0},0).to({scaleY:1},11).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.6,-203.9,67.3,407.9);


(lib.Tween6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DEB180").s().p("AgEDXQhWgCg7hAQg7hBAChYQAChZA9g9QA+g+BVACQBWACA7BAQA8BBgCBYQgCBZg+A9Qg8A8hSAAIgFAAg");
	this.shape_3.setTransform(-10.6,-34.3);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4).to({_off:false},0).wait(150));

	// HAND
	this.instance = new lib.HAND("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-4.2,111.2,1,1,0,0,180,37,6.3);

	this.instance_1 = new lib.HANDcopy("synched",52);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-4.1,111.7,1,1,0,4.2,-175.8,37,6.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},24).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1}]},4).wait(102));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-4.1,y:111.7,startPosition:4},4).wait(1).to({regX:38,regY:55.2,scaleX:1,scaleY:1,skewX:2.1,skewY:182.1,x:-10.3,y:157.7,startPosition:5},0).wait(1).to({scaleX:1,scaleY:1,skewX:8.3,skewY:188.3,x:-26.2,y:148.6,startPosition:6},0).wait(1).to({regX:37,regY:6.4,scaleX:1.01,scaleY:1.01,skewX:18.6,skewY:198.6,x:-35.5,y:85.9,startPosition:7},0).wait(1).to({regX:38,regY:55.2,scaleX:1.02,scaleY:1.02,skewX:32.3,skewY:212.3,x:-76.1,y:100,startPosition:8},0).wait(1).to({regX:37,regY:6.5,scaleX:1.02,scaleY:1.02,skewX:48.4,skewY:228.4,x:-64,y:27.1,startPosition:9},0).wait(1).to({regX:38,regY:55.2,scaleX:1.04,scaleY:1.04,skewX:64.8,skewY:244.8,x:-115.5,y:15.1,startPosition:10},0).wait(1).to({regX:37,regY:6.4,scaleX:1.05,scaleY:1.05,skewX:79.7,skewY:259.7,x:-74.4,y:-35,startPosition:11},0).wait(1).to({regX:38,regY:55.2,scaleX:1.05,scaleY:1.05,skewX:91.3,skewY:271.3,x:-131.5,y:-61.6,startPosition:12},0).wait(1).to({scaleX:1.06,scaleY:1.06,skewX:98.6,skewY:278.6,x:-134.7,y:-83.4,startPosition:13},0).wait(1).to({regX:37.1,regY:6.4,scaleX:1.06,scaleY:1.06,skewX:101,skewY:281,x:-85.1,y:-79.8,startPosition:14},0).wait(24).to({x:-72.7,y:-78.8,startPosition:38},0).to({regX:37,scaleX:1.05,scaleY:1.05,skewX:79.7,skewY:259.7,x:-74.9,y:-32,startPosition:41},3).to({scaleX:1.02,scaleY:1.02,skewX:55.4,skewY:235.4,x:-63.5,y:39.3,startPosition:44},3).to({regY:6.5,scaleX:1.01,scaleY:1.01,skewX:39.1,skewY:219.1,x:-37.6,y:75.5,startPosition:46},2).to({regY:6.4,scaleX:1,scaleY:1,skewX:23,skewY:203,x:-4.1,y:111.7,startPosition:48},2).to({_off:true,skewX:4.2,skewY:184.2,startPosition:52},4).wait(102));

	// LEFT ARM
	this.instance_2 = new lib.LEFTARM("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-10.6,-37.8,1,1,0,0,180,22.6,11.7);

	this.instance_3 = new lib.LEFTARMcopy("synched",52);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-10.6,-37.8,1,1.041,0,0,180,22.6,11.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},24).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},4).wait(102));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({startPosition:4},4).wait(1).to({regX:21.9,regY:80.1,scaleX:1,scaleY:1.02,skewX:1.1,skewY:182.1,x:-11.3,y:32.1,startPosition:5},0).wait(1).to({regX:22.2,regY:11.5,scaleX:1.01,scaleY:1.09,skewX:4.2,skewY:188.2,x:-10.7,y:-37.9,startPosition:6},0).wait(1).to({regX:21.9,regY:80.1,scaleX:1.01,scaleY:1.06,skewX:11.8,skewY:196.7,x:-25.5,y:33.4,startPosition:7},0).wait(1).to({regX:22.2,regY:11.2,scaleX:1.02,scaleY:1.03,skewX:21.3,skewY:207.2,x:-11.1,y:-38.2,startPosition:8},0).wait(1).to({regX:21.9,regY:80.1,scaleX:1.03,scaleY:0.93,skewX:37,skewY:220.2,x:-49.8,y:13.2,startPosition:9},0).wait(1).to({regX:22.5,regY:11.2,scaleX:1.05,scaleY:0.81,skewX:55.1,skewY:235.1,x:-11.8,y:-38.1,startPosition:10},0).wait(1).to({regX:21.9,regY:80.1,scaleX:1.03,scaleY:0.86,skewX:78.1,skewY:254.2,x:-69.3,y:-25.2,startPosition:11},0).wait(1).to({regX:22.7,regY:11.2,scaleX:1.01,scaleY:0.91,skewX:99.1,skewY:271.6,x:-10.8,y:-38,startPosition:12},0).wait(1).to({regX:21.9,regY:80.1,scaleX:1,scaleY:1.06,skewX:108,skewY:286,x:-80.5,y:-59.7,startPosition:13},0).wait(1).to({regX:22.7,regY:11.7,scaleX:1,scaleY:1.12,skewX:111.3,skewY:291.3,x:-10.6,y:-37.9,startPosition:14},0).wait(24).to({regX:22.6,scaleY:1,skewX:113.8,skewY:293.8,startPosition:38},0).to({regX:22.5,scaleX:1.01,scaleY:0.95,skewX:106,skewY:285.1,x:-10.8,startPosition:39},1).to({regX:22.8,regY:11.3,scaleX:1.01,scaleY:0.9,skewX:93.5,skewY:271.6,x:-10.9,y:-38.1,startPosition:40},1).to({regX:22.5,regY:11.2,scaleX:1.05,scaleY:0.81,skewX:59.5,skewY:239.5,x:-11.8,startPosition:42},2).to({regX:22.2,scaleX:1.02,scaleY:0.88,skewX:37.5,skewY:223.4,x:-11.3,y:-38.2,startPosition:44},2).to({regY:11.1,scaleX:1.01,scaleY:0.98,skewX:15.4,skewY:188.2,x:-10.8,y:-38,startPosition:46},2).to({regX:22.6,regY:11.7,scaleX:1,scaleY:1.04,skewX:0,skewY:180,x:-10.6,y:-37.8,startPosition:48},2).to({_off:true,startPosition:52},4).wait(102));

	// LEFT SHOULDER
	this.instance_4 = new lib.LEFTSHOULDER("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(8.3,-201.8,1,1,0,0,180,20.7,4.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({startPosition:0},4).to({startPosition:0},10).wait(24).to({startPosition:0},0).to({startPosition:0},10).wait(106));

	// Layer 7
	this.instance_5 = new lib.Symbol3("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-1.7,-47.8,0.966,0.966,5,0,0,75.4,-79.5);
	this.instance_5.alpha = 0.359;

	this.instance_6 = new lib.Symbol3("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-1.8,-47.7,0.966,0.966,-7.7,0,0,75.4,-79.5);
	this.instance_6.alpha = 0.359;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6},{t:this.instance_5}]},9).to({state:[]},1).wait(144));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.7,-204.2,67.5,408.5);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 7
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ADBg4Qg8A9hHA0Ih5AAQhNgvg4gk");
	this.shape.setTransform(55.6,144.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AARjiIj5BTIgEBpIArg8IDBgQIAOgaIAOAaICwgEIAVA+IAMhhQhuguhugbgAC5DDIAGhlQg4Btg5AOQgmAMgJgrIhEgBQgOAfgQAHQhZAbg3iDIAMBrAgmA7IAOAmIA3ACIAJgqgAg1gdQBDASA1gYAifhNQDGAPCIgj");
	this.shape_1.setTransform(56.3,119.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C2894C").s().p("Ag7gNQBDASA0gYQgGAXgVALQgNAFgMAAQgjAAggghg");
	this.shape_2.setTransform(57,117.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#323232").s().p("AhCEMQhNgug4gmIgMhrQA3CDBagaQAPgHAPgfIBDABQAJArAmgMQA5gOA4htIgFBlQg9A/hHA0gAgYA4IgOgmIBOgCIgKApgAjoi5ID5hSQBuAaBuAvIgMBhIgVg+IixAEIgNgaIgOAaIjCAPIgqA9g");
	this.shape_3.setTransform(56.3,123.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("ABkAMQBEgjAfhZAATjmQh9Ath/AgIgKBmIAog6IDNgIIAOgbIAOAbIC7gNIAbA+IAAhlQh5gXhogmgAhNAYQAlAOAuAAQA2gDAogXAC8DHIAGhlQg5Btg5AOQgmAMgIgsIhEAAQgOAegQAHQhZAbg3iDIALBrAgjBLIANAnIA3ABIAKgqgAiyhZQBQA4BygKQBzgLBEg6AhNAYQBYgnBZAbAhNAYQhNgbghhWQAEAAAFAAQC5ADDAga");
	this.shape_4.setTransform(56.1,119.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EEEAEC").s().p("Ai8gLQC6ACC/gZQhEA5hzAKQgRACgRAAQhdAAhDgug");
	this.shape_5.setTransform(57,112.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D57CB5").s().p("AhYAFQBYgoBZAdQgoAVg1AEQgvAAglgOg");
	this.shape_6.setTransform(57.2,121.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#56293B").s().p("AjBgtIAKAAQBQA3BygKQBzgJBDg7QgeBYhEAlQhZgdhYAoQhNgcgihVg");
	this.shape_7.setTransform(56.6,115.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#323232").s().p("AhAEQQhNgvg4glIgMhrQA4CDBZgbQAQgHAOgfIBDABQAJAsAmgMQA5gOA5huIgGBlQg8A/hHA0gAgVBJIgPgnIBOgCIgJAqgAjqjCQCAggB9gtQBoAmB5AWIAABlIgbg9Ii7AMIgOgaIgPAaIjMAJIgoA5g");
	this.shape_8.setTransform(56.1,124);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1).p("ADOh5QASgEgKAhQgDAMgJAKAi/guQAMAOASARQAEAEAFAEQA/A2BugGQBjgMA3g8QAOgPALgUQABgCABgCAASjpQh9AtiBAdIgUBjIAtg1IDUgHIAOgbIAOAbIC9gRQAVAUARAoQACg2gNgtQh6gThpgmgAC7DKIAGhlQg5Btg5AOQgmAMgIgsIhEAAQgOAegQAHQhZAbg3iDIAMBrAgkBMIAOAnIA2ABIAKgqgAi/guQAAAAAAgBQBvA9B6gPQBZgMBHg5AjFhiQBlAzBygIQBzgJBJg5AjFhiQgRAAAHAZQAHARAJAKAjFhiQDLAJDIgg");
	this.shape_9.setTransform(56.1,120.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EEEAEC").s().p("AicAhIgJgJQgSgRgMgNIAAAAQBvA9B6gQQBZgMBHg5IgCAEQgLAUgOAOQg3A9hjAMIgWABQhfAAg4gxgAjJg6QDLAJDIggQhJA6hzAIIgfABQhhAAhXgsg");
	this.shape_10.setTransform(56.5,116.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#56293B").s().p("AjDANIAAAAQgJgJgGgRQgIgYASgBQBkAzBygJQBzgHBJg6QASgEgJAhQgEAMgJALQhHA4hZAMQgZADgYAAQhgAAhYgxg");
	this.shape_11.setTransform(56.5,114.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#323232").s().p("AhBETQhMgvg4glIgMhrQA3CDBZgbQAQgHAOgeIBEAAQAIAsAmgNQA5gOA5hsIgGBlQg8A+hHA0gAgWBJIgOgmIBOgCIgKAqgAjsjIQCBgdB9gtQBpAmB6ATQANAtgCA2QgRgogVgUIi9AQIgOgaIgOAaIjUAIIgtA1g");
	this.shape_12.setTransform(56.1,124.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(1,1,1).p("ADOh5QASgEgKAhQgDAMgJAKAi/guQAMAOASARQAEAEAFAEQA/A2BugGQBjgMA3g8QAOgPALgUQABgCABgCAASjpQh9AtiBAdIgUBjIAtg1IDUgHIAOgbIAOAbIC9gRQAVAUARAoQACg2gNgtQh6gThpgmgAgkBMIAOAnIA2ABIAKgqgAC7DKIAGhlQg5Btg5AOQgmAMgIgsIhEAAQgOAegQAHQhZAbg3iDIAMBrAjFhiQBlAzBygIQBzgJBJg5Ai/guIAAgBQBvA9B6gPQBZgMBHg5AjFhiQgRAAAHAZQAHARAJAKAjFhiQDLAJDIgg");
	this.shape_13.setTransform(56.1,120.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,1,1).p("ABkAJQBEgjAfhZAATjpQh9Ath/AgIgKBmIAog6IDNgIIAOgbIAOAbIC7gNIAbA+IAAhlQh5gXhogmgAhNAVQAlAOAuAAQA2gDAogXAC8DKIAGhlQg5Btg5AOQgmAMgIgsIhEAAQgOAegQAHQhZAbg3iDIALBrAgjBIIANAnIA3ABIAKgqgAhNAVQBYgnBZAbAiyhcQBQA4BygKQBzgLBEg6AhNAVQhNgbghhWQAEAAAFAAQC5ADDAga");
	this.shape_14.setTransform(56.1,120.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#323232").s().p("AhAETQhNgvg4glIgMhrQA4CDBZgbQAQgHAOgeIBDAAQAJAsAmgNQA5gOA5hsIgGBlQg8A+hHA0gAgVBGIgPgnIBOgCIgJAqgAjqjFQCAggB9gtQBoAmB5AWIAABlIgbg9Ii7AMIgOgaIgPAaIjMAJIgoA5g");
	this.shape_15.setTransform(56.1,124.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,1,1).p("AATjpQh9Ath/AgIgKBmIAog6IDNgIIAOgbIAOAbIC7gNIAbA+IAAhlQh5gXhogmgAgjBcIANAnIA3ABIAKgqgAhNA0QAlASAuAAQA2gFAogbQBEgtAfhvAC8DKIAGhlQg5Btg5AOQgmAMgIgsIhEAAQgOAegQAHQhZAbg3iDIALBrAixhZQBPBFBygMQB0gNBDhJAhNA0QBYgyBZAkAhNA0QhMgjgihqQAFAAAFAAQC4AEDAgh");
	this.shape_16.setTransform(56.1,120.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EEEAEC").s().p("Ai8gOQC6AEC+ghQhDBIhzANQgRACgRAAQhdAAhDg6g");
	this.shape_17.setTransform(57.1,112.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D57CB5").s().p("AhYAGQBYgxBZAkQgoAag1AFQgwAAgkgSg");
	this.shape_18.setTransform(57.2,124.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#323232").s().p("AhAETQhNgvg4glIgMhrQA4CDBZgbQAQgHAOgeIBDAAQAJAsAmgNQA5gOA5hsIgGBlQg8A+hHA0gAgVBZIgPgmIBOgCIgJAqgAjqjFQCAggB9gtQBoAmB5AWIAABlIgbg9Ii7AMIgOgaIgPAaIjMAJIgoA5g");
	this.shape_19.setTransform(56.1,124.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#56293B").s().p("AjBg4IAKABQBPBEBzgNQBzgMBDhIQgfBthDAuQhZgjhYAyQhMgkgjhqg");
	this.shape_20.setTransform(56.6,116.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(1,1,1).p("ACnhqIgEAdIgEAdAATjjIj8BPIgKBoIAqg6IDLgNIAOgaIAOAaIC5gKIAdBDIAAhkQhzgqhugbgACnhqQATgDASgDQgVAlgYAbAibgsQAoAoA7AUQBCAVBHgdQArgRAjgnACjhNQgcANgjAIAgjA8IAOAmIA2ACIAKgqgAC8DEIAGhlQg5Btg5AOQgmAMgIgrIhEgBQgOAfgQAHQhZAbg3iDIAMBrAibgsQgVgVgQgaQAKABALAAIAJAZQAaAMAjAFAiihBIAHAVAirhaQDFAFCNgV");
	this.shape_21.setTransform(56,119.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EEEAEC").s().p("Ag1A5Qg7gVgognIgIgVQAaAMAjAFQgjgFgagMIgJgZQDFAFCOgVIgFAdQgbANgkAIQAkgIAbgNIgDAdQgkAmgqASQgqARgoAAQgbAAgcgJgAClgkg");
	this.shape_22.setTransform(55.8,115.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#56293B").s().p("AjFgMIAUAAIAJAZIAIAVQgWgVgPgZgACeABIAEgcIAlgGQgVAkgYAbg");
	this.shape_23.setTransform(56.6,111.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#323232").s().p("AhAENQhMgvg4gkIgMhrQA3CCBZgbQAQgGAOgfIBEAAQAIAsAmgMQA5gOA5htIgGBlQg8A+hHA1gAgVA5IgOgmIBOgCIgKApgAjpi9ID8hQQBuAcBzAqIAABkIgdhDIi5AKIgOgaIgOAaIjLANIgqA5g");
	this.shape_24.setTransform(56,123.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(1,1,1).p("AARjiIj5BTIgEBpIArg8IDBgQIAOgaIAOAaICwgEIAVA+IAMhhQhuguhugbgAgmA7IAOAmIA3ACIAJgqgAC5DDIAGhlQg4Btg5AOQgmAMgJgrIhEgBQgOAfgQAHQhZAbg3iDIAMBrAg1gdQBDASA1gYAifhNQDGAPCIgj");
	this.shape_25.setTransform(56.3,119.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(2,1,1).p("AC6g4Qg6A9hEA0Ih1AAQhKgvg2gk");
	this.shape_26.setTransform(55.6,146.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(1,1,1).p("Ag6gdQAEADAFAEQA5ApAvgtQACgCABgBAg6gdQgfgagZgIQAlAAA0gbQAlgUAnAVQAaANAjACQgeAVgYAYAAMjqQh0AphqA6IAQBlIAag/QBTgXBRgCIANgaIANAaQBLgCBFATIAgA1IANhYQhXhFhwgZgAgqBNIAOAmIA2ACIAKgqgACvDLIAFhlQg2Btg3AOQglAMgIgrIhCgBQgOAfgPAHQhWAbg1iDIALBrAg6gdQBGgZAuAZAglAUQAxAbAlgh");
	this.shape_27.setTransform(56.7,120.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#56293B").s().p("Ag4AjQgfgZgZgIQAlgBA0gZQAlgUAnAUQAaAOAiABQgdAUgYAYQgugZhGAZg");
	this.shape_28.setTransform(56.5,113.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D57CB5").s().p("AgxAAIgJgGQBHgaAtAaIgCADQgZAXgcAAQgYAAgcgUg");
	this.shape_29.setTransform(56.7,118);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#C2894C").s().p("AgrgSQAxAbAlggQAHAYgdASQgPAFgKAAQgiAAgFgqg");
	this.shape_30.setTransform(57.4,124.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#323232").s().p("AhFEUQhJgvg3glIgLhrQA1CEBWgbQAPgIAOgeIBCABQAIArAlgMQA3gOA2htIgFBlQg6A/hFAzgAgcBKIgOgmIBOgDIgKAqgAjSiwQBqg6B0gqQBwAaBXBFIgNBXIggg0QhFgThLACIgNgaIgNAaQhRAChTAWIgaA/g");
	this.shape_31.setTransform(56.7,124.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(2,1,1).p("AC0g4Qg4A9hCA0IhxAAQhIgvg0gk");
	this.shape_32.setTransform(55.6,145.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(1,1,1).p("AANjoIjpBTQADA3AIA3IAZhBQBegOBYgBIAMgbIANAbQBUgGBSACIALBCQAPgzAGgyQhogvhogbgAAtguQAAAWgLAQQgLAPgQAAQgPAAgLgPQgLgQAAgWQAAgWALgRQALgPAPAAQAQAAALAPQALARAAAWgAgpBOIAOAnIA3ABIAJgqgACqDJIAFhlQg0Btg1AOQgkAMgIgsIg/AAQgOAegOAHQhUAbgziDIALBr");
	this.shape_33.setTransform(56.6,120);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#C2894C").s().p("AgfgNQAjASAcgXQgDAWgLALQgHAFgHAAQgSAAgRghg");
	this.shape_34.setTransform(57.1,123.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#323232").s().p("AhBERQhIgug0glIgLhrQAzCDBUgbQAOgHAOgeIA/AAQAIArAkgMQA1gNA0huIgFBmQg4A+hCA0gAgbBLIgOgmIBOgCIgJAqgAjci+IDphTQBoAbBoAvQgGAygPAzIgLhCQhSgChUAFIgNgaIgMAaQhYABheAPIgZBBQgIg3gDg3g");
	this.shape_35.setTransform(56.6,124.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#56293B").s().p("AgaAmQgLgQAAgWQAAgVALgRQALgPAPAAQAQAAALAPQALARAAAVQAAAWgLAQQgLAQgQAAQgPAAgLgQg");
	this.shape_36.setTransform(57.3,115.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(1,1,1).p("AAMjqQh0AphqA6IAQBlIAag/QBTgXBRgCIANgaIANAaQBLgCBFATIAgA1IANhYQhXhFhwgZgAg6gdQAEADAFAEQA5ApAvgtQACgCABgBAg6gdQgfgagZgIQAlAAA0gbQAlgUAnAVQAaANAjACQgeAVgYAYACvDLIAFhlQg2Btg3AOQglAMgIgrIhCgBQgOAfgPAHQhWAbg1iDIALBrAgqBNIAOAmIA2ACIAKgqgAglAUQAxAbAlghAg6gdQBGgZAuAZ");
	this.shape_37.setTransform(56.7,120.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(1,1,1).p("Ag6gdQgfgagZgIQAlAAA0gbQAlgUAnAVQAaANAjACQgeAVgYAYAAMjqQh0AphqA6IAQBlIAag/QBTgXBRgCIANgaIANAaQBLgCBFATIAgA1IANhYQhXhFhwgZgAg6gdQAEADAFAEQA5ApAvgtQACgCABgBAgqBNIAOAmIA2ACIAKgqgACvDLIAFhlQg2Btg3AOQglAMgIgrIhCgBQgOAfgPAHQhWAbg1iDIALBrAg6gdQBGgZAuAZAglAUQAxAbAlgh");
	this.shape_38.setTransform(56.7,120.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(1,1,1).p("AANjoIjpBTQADA3AIA3IAZhBQBegOBYgBIAMgbIANAbQBUgGBSACIALBCQAPgzAGgyQhogvhogbgAAtguQAAAWgLAQQgLAPgQAAQgPAAgLgPQgLgQAAgWQAAgWALgRQALgPAPAAQAQAAALAPQALARAAAWgACqDJIAFhlQg0Btg1AOQgkAMgIgsIg/AAQgOAegOAHQhUAbgziDIALBrAgpBOIAOAnIA3ABIAJgqg");
	this.shape_39.setTransform(56.6,120);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(1,1,1).p("AAsAhQAMgDAMgEQALgEALgFQAFgCAFgDQBEgkAfhYAATjmQh9Ash/AhIgKBlIAog5IDNgJIAOgaIAOAaIC7gNIAbA+IAAhlQh5gWhogmgAhuAIQAPAJASAHQAcAKAjADQAVgNATgcAgOAlIAAAAQAKABAKAAQAUgCASgDAhuAIQAzARA5g1QAOgPArACQApADg0BHAC8DHIAGhlQg5Btg5AOQgmAMgIgrIhEgBQgOAfgQAHQhZAbg3iDIALBrAgjBGIANAmIA3ACIAKgqgAiyhaQBQA4BygKQBzgKBEg6AhuAIQgzgfgahDQAEAAAFAAQC5ADDAgZ");
	this.shape_40.setTransform(56.1,119.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#D57CB5").s().p("AAEAnIgBAAQAXgMASgdQgSAdgXAMQghgCgdgLQgRgHgPgJQAzARA3g1QAQgPAqADQAqACg0BHQgSAEgUABIgVgBg");
	this.shape_41.setTransform(54.2,119.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#323232").s().p("AhAEQQhNgug4gmIgMhrQA4CEBZgbQAQgIAOgeIBDABQAJArAmgMQA5gOA5htIgGBlQg8A/hHA0gAgVBDIgPgnIBOgCIgJArgAjqjCQCAghB9gtQBoAmB5AXIAABlIgbg+Ii7ANIgOgaIgPAaIjMAIIgoA6g");
	this.shape_42.setTransform(56.1,124);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#56293B").s().p("AAxAAQgqgDgOAOQg5A2gzgRQgzgggbhCIAKABQBQA3BygKQBzgKBDg6QgeBXhEAlIgLAGQgKAFgLADIgYAHQA0hHgqgCg");
	this.shape_43.setTransform(56.6,115.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(1,1,1).p("ACjhNQgcANgjAIAibgsQAoAoA7AUQBCAVBHgdQArgRAjgnACnhqIgEAdIgEAdAATjjIj8BPIgKBoIAqg6IDLgNIAOgaIAOAaIC5gKIAdBDIAAhkQhzgqhugbgACnhqQATgDASgDQgVAlgYAbAC8DEIAGhlQg5Btg5AOQgmAMgIgrIhEgBQgOAfgQAHQhZAbg3iDIAMBrAgjA8IAOAmIA2ACIAKgqgAirhaIAJAZIAHAVQgVgVgQgaQAKABALAAQDFAFCNgVAiihBQAaAMAjAF");
	this.shape_44.setTransform(56,119.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#EEEAEC").s().p("Ag1A5Qg7gVgognIgIgVQAaAMAjAFQgjgFgagMIgJgZQDFAFCOgVIgFAdQgbANgkAIQAkgIAbgNIgDAdQgkAmgqASQgqARgoAAQgbAAgcgJgAiggYIAAAAg");
	this.shape_45.setTransform(55.8,115.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(1,1,1).p("ACnhlQATgDASgDIgpAkIAAgBQglAYgWADQABAAACABQALAEAHAEACnhlIgEAdIAAAAAATjeIj8BPIgKBoIAqg6IDLgNIAOgaIAOAaIC5gKIAdBDIAAhkQhzgqhugbgAhmgnQAIgDAIgDQA7gSArAHQAqgEAuAPAgXggQAEgFAEgDQAOgNARgDAiBgdQANgGAOgEAgjA3IAOAmIA2ACIAKgqgAC8C/IAGhlQg5Btg5AOQgmAMgIgrIhEgBQgOAfgQAHQhZAbg3iDIAMBrAijg/IgdgXQAKABALAAIAIAWQAhAZAcgBAirhVQDFAFCNgV");
	this.shape_46.setTransform(56,119.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#EEEAEC").s().p("AigAHIgJgVQDFAFCOgVIgFAdIAAAAQgkAXgXADQgtgPgqAEQgrgHg7ASIgRAGIgCAAQgbAAgfgYg");
	this.shape_47.setTransform(55.8,112);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#56293B").s().p("AjFAAIAUAAIAJAWgACeANIAAAAIAEgcIAlgGIgpAjg");
	this.shape_48.setTransform(56.6,110.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#323232").s().p("AhAEIQhMgug4gmIgMhqQA3CCBZgbQAQgGAOgfIBEAAQAIAsAmgMQA5gOA5htIgGBlQg8A+hHA1gAgVA0IgOgmIBOgCIgKApgAjpi4ID8hQQBuAcBzAqIAABkIgdhDIi5AKIgOgaIgOAaIjLANIgqA5g");
	this.shape_49.setTransform(56,123.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(1,1,1).p("AAsAhQAMgDAMgEQALgEALgFQAFgCAFgDQBEgkAfhYAATjmQh9Ash/AhIgKBlIAog5IDNgJIAOgaIAOAaIC7gNIAbA+IAAhlQh5gWhogmgAhuAIQAPAJASAHQAcAKAjADQAVgNATgcAgOAlIAAAAQAKABAKAAQAUgCASgDAhuAIQAzARA5g1QAOgPArACQApADg0BHAgjBGIANAmIA3ACIAKgqgAC8DHIAGhlQg5Btg5AOQgmAMgIgrIhEgBQgOAfgQAHQhZAbg3iDIALBrAiyhaQBQA4BygKQBzgKBEg6AhuAIQgzgfgahDQAEAAAFAAQC5ADDAgZ");
	this.shape_50.setTransform(56.1,119.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(1,1,1).p("Ag6gdQAEADAFAEQA5ApAvgtQACgCABgBAAMjqQh0AphqA6IAQBlIAag/QBTgXBRgCIANgaIANAaQBLgCBFATIAgA1IANhYQhXhFhwgZgAg6gdQgfgagZgIQAlAAA0gbQAlgUAnAVQAaANAjACQgeAVgYAYACvDLIAFhlQg2Btg3AOQglAMgIgrIhCgBQgOAfgPAHQhWAbg1iDIALBrAgqBNIAOAmIA2ACIAKgqgAglAUQAxAbAlghAg6gdQBGgZAuAZ");
	this.shape_51.setTransform(56.7,120.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(1,1,1).p("ACjhNIgEAdACnhqQATgDASgDQgVAlgYAbACjhNQgcANgjAIAibgsQAoAoA7AUQBCAVBHgdQArgRAjgnACnhqIgEAdAATjjIj8BPIgKBoIAqg6IDLgNIAOgaIAOAaIC5gKIAdBDIAAhkQhzgqhugbgAgjA8IAOAmIA2ACIAKgqgAC8DEIAGhlQg5Btg5AOQgmAMgIgrIhEgBQgOAfgQAHQhZAbg3iDIAMBrAibgsQgVgVgQgaQAKABALAAIAJAZQAaAMAjAFAiihBIAHAVAirhaQDFAFCNgV");
	this.shape_52.setTransform(56,119.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#EEEAEC").s().p("Ag1A5Qg7gVgognIgIgVQAaAMAjAFQgjgFgagMIgJgZQDFAFCOgVIgFAdQgbANgkAIQAkgIAbgNIgDAdQgkAmgqASQgqARgoAAQgbAAgcgJg");
	this.shape_53.setTransform(55.8,115.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(1,1,1).p("Ag6gdQgfgagZgIQAlAAA0gbQAlgUAnAVQAaANAjACQgeAVgYAYAg6gdQAEADAFAEQA5ApAvgtQACgCABgBAAMjqQh0AphqA6IAQBlIAag/QBTgXBRgCIANgaIANAaQBLgCBFATIAgA1IANhYQhXhFhwgZgAgqBNIAOAmIA2ACIAKgqgACvDLIAFhlQg2Btg3AOQglAMgIgrIhCgBQgOAfgPAHQhWAbg1iDIALBrAg6gdQBGgZAuAZAglAUQAxAbAlgh");
	this.shape_54.setTransform(56.7,120.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(1,1,1).p("AATjjIj8BPIgKBoIAqg6IDLgNIAOgaIAOAaIC5gKIAdBDIAAhkQhzgqhugbgACjhNIgEAdACnhqQATgDASgDQgVAlgYAbACjhNQgcANgjAIAibgsQAoAoA7AUQBCAVBHgdQArgRAjgnACnhqIgEAdAC8DEIAGhlQg5Btg5AOQgmAMgIgrIhEgBQgOAfgQAHQhZAbg3iDIAMBrAgjA8IAOAmIA2ACIAKgqgAirhaIAJAZIAHAVQgVgVgQgaQAKABALAAQDFAFCNgVAiihBQAaAMAjAF");
	this.shape_55.setTransform(56,119.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(1,1,1).p("ACnhqIgEAdIgEAdAibgsQAoAoA7AUQBCAVBHgdQArgRAjgnAATjjIj8BPIgKBoIAqg6IDLgNIAOgaIAOAaIC5gKIAdBDIAAhkQhzgqhugbgACnhqQATgDASgDQgVAlgYAbACjhNQgcANgjAIAgjA8IAOAmIA2ACIAKgqgAC8DEIAGhlQg5Btg5AOQgmAMgIgrIhEgBQgOAfgQAHQhZAbg3iDIAMBrAibgsQgVgVgQgaQAKABALAAIAJAZQAaAMAjAFAiihBIAHAVAirhaQDFAFCNgV");
	this.shape_56.setTransform(56,119.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(1,1,1).p("AATjpQh9Ath/AgIgKBmIAog6IDNgIIAOgbIAOAbIC7gNIAbA+IAAhlQh5gXhogmgAC8DKIAGhlQg5Btg5AOQgmAMgIgsIhEAAQgOAegQAHQhZAbg3iDIALBrAgjBcIANAnIA3ABIAKgqgAhNA0QAlASAuAAQA2gFAogbQBEgtAfhvAhNA0QBYgyBZAkAixhZQBPBFBygMQB0gNBDhJAhNA0QhMgjgihqQAFAAAFAAQC4AEDAgh");
	this.shape_57.setTransform(56.1,120.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(1,1,1).p("ACjhNQgcANgjAIACnhqQATgDASgDQgVAlgYAbACnhqIgEAdIgEAdAibgsQAoAoA7AUQBCAVBHgdQArgRAjgnAATjjIj8BPIgKBoIAqg6IDLgNIAOgaIAOAaIC5gKIAdBDIAAhkQhzgqhugbgAC8DEIAGhlQg5Btg5AOQgmAMgIgrIhEgBQgOAfgQAHQhZAbg3iDIAMBrAgjA8IAOAmIA2ACIAKgqgAirhaIAJAZIAHAVQgVgVgQgaQAKABALAAQDFAFCNgVAiihBQAaAMAjAF");
	this.shape_58.setTransform(56,119.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{y:144.7}}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{y:144.7}}]},5).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape,p:{y:145.4}}]},1).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape,p:{y:146}}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_12},{t:this.shape_13},{t:this.shape,p:{y:146}}]},2).to({state:[{t:this.shape_7},{t:this.shape_5},{t:this.shape_15},{t:this.shape_6},{t:this.shape_14},{t:this.shape,p:{y:146}}]},4).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape,p:{y:146}}]},2).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape,p:{y:144.9}}]},5).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_25},{t:this.shape,p:{y:144.7}}]},4).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]},17).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},2).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_28},{t:this.shape_29},{t:this.shape_37},{t:this.shape_26}]},2).to({state:[{t:this.shape_28},{t:this.shape_31},{t:this.shape_29},{t:this.shape_30},{t:this.shape_38},{t:this.shape_26}]},2).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_39},{t:this.shape_32}]},2).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_5},{t:this.shape_40},{t:this.shape,p:{y:145.5}}]},4).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape,p:{y:146}}]},2).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_13},{t:this.shape,p:{y:146}}]},2).to({state:[{t:this.shape_23},{t:this.shape_45},{t:this.shape_24},{t:this.shape_44},{t:this.shape,p:{y:144.9}}]},2).to({state:[{t:this.shape_31},{t:this.shape_28},{t:this.shape_29},{t:this.shape_30},{t:this.shape_38},{t:this.shape_26}]},3).to({state:[{t:this.shape_11},{t:this.shape_12},{t:this.shape_10},{t:this.shape_13},{t:this.shape,p:{y:146}}]},2).to({state:[{t:this.shape_20},{t:this.shape_17},{t:this.shape_19},{t:this.shape_18},{t:this.shape_16},{t:this.shape,p:{y:146}}]},2).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape,p:{y:143.9}}]},2).to({state:[{t:this.shape_43},{t:this.shape_5},{t:this.shape_42},{t:this.shape_41},{t:this.shape_50},{t:this.shape,p:{y:145.5}}]},5).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape,p:{y:146}}]},2).to({state:[{t:this.shape_31},{t:this.shape_29},{t:this.shape_28},{t:this.shape_30},{t:this.shape_51},{t:this.shape_26}]},2).to({state:[{t:this.shape_41},{t:this.shape_42},{t:this.shape_43},{t:this.shape_5},{t:this.shape_40},{t:this.shape,p:{y:145.5}}]},3).to({state:[{t:this.shape_23},{t:this.shape_24},{t:this.shape_53},{t:this.shape_52},{t:this.shape,p:{y:144.9}}]},5).to({state:[{t:this.shape_20},{t:this.shape_17},{t:this.shape_19},{t:this.shape_18},{t:this.shape_16},{t:this.shape,p:{y:146}}]},2).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_13},{t:this.shape,p:{y:146}}]},2).to({state:[{t:this.shape_20},{t:this.shape_17},{t:this.shape_19},{t:this.shape_18},{t:this.shape_16},{t:this.shape,p:{y:146}}]},3).to({state:[{t:this.shape_31},{t:this.shape_29},{t:this.shape_28},{t:this.shape_30},{t:this.shape_54},{t:this.shape_26}]},3).to({state:[{t:this.shape_23},{t:this.shape_24},{t:this.shape_45},{t:this.shape_55},{t:this.shape,p:{y:144.9}}]},2).to({state:[{t:this.shape_19},{t:this.shape_20},{t:this.shape_17},{t:this.shape_18},{t:this.shape_16},{t:this.shape,p:{y:146}}]},2).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_43},{t:this.shape_5},{t:this.shape_50},{t:this.shape,p:{y:145.5}}]},2).to({state:[{t:this.shape_23},{t:this.shape_24},{t:this.shape_22},{t:this.shape_56},{t:this.shape,p:{y:144.9}}]},3).to({state:[{t:this.shape_17},{t:this.shape_19},{t:this.shape_20},{t:this.shape_18},{t:this.shape_57},{t:this.shape,p:{y:146}}]},3).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_45},{t:this.shape_58},{t:this.shape,p:{y:144.9}}]},3).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_12},{t:this.shape_13},{t:this.shape,p:{y:146}}]},2).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_24},{t:this.shape_56},{t:this.shape,p:{y:144.9}}]},2).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_25},{t:this.shape,p:{y:144.7}}]},4).to({state:[]},12).to({state:[]},27).wait(87));

	// Layer 4
	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(1,1,1).p("ADIBEQAFgGABgBQAOgJAEgQQAEgRgJgPQgJgNgQgDQgQgEgOAKQgOAIgFARQgCARAJAOQAFAJAKAGQghgHgigMQAOhEAxACQBuAHAJBKQgFABgGABIgIABQgUADgVABQgKABgKAAQgBgBgBAAgAjTAkQgEgDgFgEQgMgLgBgRQgCgQALgOQALgMAQgCQASgBAMALQAOAMABARQABAQgLAMQgHAKgKADQABAAABABQgBAAgBAAIAAAAQgFAAgEAAQAEgBAFAAAjTAkQACAAACAAQACAAADABQAAAAABAAQADAAABAAQAFAAAEABAirAmQAmgBAngKQgDhFgzgFQhygHgTBJQAiANAkAEAixAmQABAAACAAQABgBACABQgCAAgDAAQgBAAgCAAACoBBIAbADIAFAAAkRgnQBKgqBXAUAEaACQhBgyhXAJ");
	this.shape_59.setTransform(59.3,68);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#C2894C").s().p("AB/ADQAmgXA1AIQAzAMAJAtQhBgyhWAIgAi6gsQAyABAUAaQhXgVhKApQAfgtA8gCg");
	this.shape_60.setTransform(59.7,63.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#323232").s().p("ADHA4IgbgDIgBAAQgJgGgGgJQgJgOADgRQAEgQAOgJQAOgKARAEQAPADAJAOQAJAOgDARQgEAQgOAJIgHAHgADCA4IgJgBIgCgBIgCAAIgDAAIgGgBIAbADIgBAAIgEAAgACsA1gAjAAZIgEAAIgCAAIgFgBIgDAAIgJgHQgNgLgBgQQgBgRAKgOQALgMARgCQARgBANALQANAMACARQABAQgLAMQgHAKgLADIgIABIgJgBg");
	this.shape_61.setTransform(58.8,69.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("ADKA6IgCAAIAGgHQAPgJADgQQAEgRgJgOQgJgOgQgDQgQgEgOAKQgOAJgEAQQgDARAJAOQAFAJAKAGQghgHghgMQANhEAxACQBuAHAJBKIgLACIgIABQgUADgVABIgSAAIgCABgADGA6IgEAAIABAAIAFAAIgCAAgAiuAcIgCAAIgDgBQAKgDAHgKQALgMgBgQQgBgRgNgMQgNgLgRABQgRACgLAMQgLAOACARQABAQAMALIAKAHQgkgEgjgNQAThJByAHQAzAFADBFQgnAKgmABIgDAAg");
	this.shape_62.setTransform(59.3,69);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(1,1,1).p("ADhAGQApAPARAjQgsAKgsgCAjHAiQgogEgrgPQATgbAegNQAUgIAYgCQAQgCAOACQASAvgjAXAjHAiQABAAACAAQAKAAAKABAjpgZQgIAxAqAKACZgDQgUApAhAXQgjgGgigMQANgpArgFQARgCAXAEQARACAPAFQAFAugjAMACmA9QAOACAPABAifgjQA1AHANAxQgoANgrABAkGgoQBBgkBJATACNgjQBIgEA0An");
	this.shape_63.setTransform(59.4,68.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("ADDAyQAjgMgFguQApAPARAjQglAIgkAAIgPAAgABhAdQANgpArgFQgUApAhAWQgjgFgigMgAifgxQA1AGANAyQgoANgrAAQAjgVgSgwgAkaABQATgcAegNQgIAxAqAKQgogEgrgOg");
	this.shape_64.setTransform(59.4,69.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#323232").s().p("ACrAvQghgWAUgpQARgCAXADQARADAPAFQAFAugjAMIgdgEgAi/AVIgDgBQgqgKAIgxQAUgIAYgCQAQgBAOACQASAwgjAVIgUAAg");
	this.shape_65.setTransform(58.9,69.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#C2894C").s().p("ACLAFQBOgeAvBBQg0gnhJAEgAh9gRQhJgThBAkQA8hEBOAzg");
	this.shape_66.setTransform(59.5,64.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(1,1,1).p("AC7A8QAEAAAEABQAsACAsgKQgbgNgfgHAiYABQAgAFAbAMQgoANgrABQgKgBgKAAQgCAAgBAAQgogEgrgPQACgCABgCQAagGAUgCQALAeAegBQAfgBAJgbgACVAbQgbADgZAKQAiAMAjAGQAHABAHABQADAAADAAIABAAQAgAAAGgbACVAbQADAZAcAIAj+gnQA6gdA5ALAjpAAQAsgDAlAEACVgfQA8gGAvAiACVAbQAngEAlAK");
	this.shape_67.setTransform(59.4,68.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#323232").s().p("ADAAfIgBAAIgGAAQgcgIgDgYQAmgEAlAJQgFAbggAAIAAAAgAjkgcQAsgEAkAFQgJAbgeAAIgCAAQgdAAgKgcg");
	this.shape_68.setTransform(58.9,71.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("ADDAeIgIgBQAgAAAGgbQAfAHAbANQglAJgkAAIgPgBgACmAbQgjgGgigMQAZgJAbgDQADAYAcAIIgOgCgAjEAAIgDAAQgogDgrgPIADgEQAagGAUgCQALAeAegBQAfgBAJgbQAgAFAbAMQgoAMgrABIgUgBg");
	this.shape_69.setTransform(59.4,71.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#C2894C").s().p("ACVAHQBDgiAoA+Qgvghg8AFgAiLgSQg6gLg6AdQAtg5BHAng");
	this.shape_70.setTransform(59.4,64.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(1,1,1).p("AjzguQApgXA1AIAkIAKQBUA0BSgzQhcAbhKgcgAChgkQAzgBAhAXABoAfQBXA6BKgtQhIAYhZglg");
	this.shape_71.setTransform(59.2,69.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#2B2B2B").s().p("ABogFQBZAkBIgYQggAUgjAAQgtAAgxgggAkIgaQBKAbBcgaQgpAZgpAAQgqAAgqgag");
	this.shape_72.setTransform(59.2,73.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#C2894C").s().p("ACgAJQA0gfAgA0QghgWgzABgAiVgQQg2gHgoAXQAggxA+Ahg");
	this.shape_73.setTransform(59.3,65);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(1,1,1).p("AC7A8QAEAAAEABQAsACAsgKQgbgNgfgHAiYABQAgAFAbAMQgoANgrABQgKgBgKAAQgCAAgBAAQgogEgrgPQACgCABgCQAagGAUgCQALAeAegBQAfgBAJgbgACVAbQgbADgZAKQAiAMAjAGQAHABAHABQADAAADAAIABAAQAgAAAGgbACVAbQADAZAcAIAj+gnQA6gdA5ALAjpAAQAsgDAlAEACVAbQAngEAlAKACVgfQA8gGAvAi");
	this.shape_74.setTransform(59.4,68.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(1,1,1).p("ADIBEQAFgGABgBQAOgJAEgQQAEgRgJgPQgJgNgQgDQgQgEgOAKQgOAIgFARQgCARAJAOQAFAJAKAGQghgHgigMQAOhEAxACQBuAHAJBKQgFABgGABIgIABQgUADgVABQgKABgKAAQgBgBgBAAgAjTAkQgEgDgFgEQgMgLgBgRQgCgQALgOQALgMAQgCQASgBAMALQAOAMABARQABAQgLAMQgHAKgKADQABAAABABQgBAAgBAAIAAAAQgFAAgEAAQAEgBAFAAAjTAkQACAAACAAQACAAADABQAAAAABAAQADAAABAAQAFAAAEABAirAmQAmgBAngKQgDhFgzgFQhygHgTBJQAiANAkAEAirAmQgCAAgDAAQgBAAgCAAAixAmQABAAACAAQABgBACABACoBBIAbADIAFAAAkRgnQBKgqBXAUAEaACQhBgyhXAJ");
	this.shape_75.setTransform(59.3,68);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#323232").s().p("ADHA4IgbgDIgBAAQgJgGgGgJQgJgOADgRQAEgQAOgJQAOgKARAEQAPADAJAOQAJAOgDARQgEAQgOAJIgHAHgADCA4IgJgBIgCgBIgCAAIgDAAIgGgBIAbADIgBAAIgEAAgADHA4gACsA1gAjAAZIgEAAIgCAAIgFgBIgDAAIgJgHQgNgLgBgQQgBgRAKgOQALgMARgCQARgBANALQANAMACARQABAQgLAMQgHAKgLADIgIABIgJgBg");
	this.shape_76.setTransform(58.8,69.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(1,1,1).p("ADhAGQApAPARAjQgsAKgsgCAjHAiQgogEgrgPQATgbAegNQgIAxAqAKQABAAACAAQAKAAAKABAjpgZQAUgIAYgCQAQgCAOACQASAvgjAXACZgDQgUApAhAXQgjgGgigMQANgpArgFQARgCAXAEQARACAPAFQAFAugjAMACmA9QAOACAPABAifgjQA1AHANAxQgoANgrABAkGgoQBBgkBJATACNgjQBIgEA0An");
	this.shape_77.setTransform(59.4,68.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(1,1,1).p("AkIAKQBUA0BSgzQhcAbhKgcgAjzguQApgXA1AIABoAfQBXA6BKgtQhIAYhZglgAChgkQAzgBAhAX");
	this.shape_78.setTransform(59.2,69.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59}]}).to({state:[{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63}]},12).to({state:[{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67}]},1).to({state:[{t:this.shape_73},{t:this.shape_72},{t:this.shape_71}]},1).to({state:[{t:this.shape_70},{t:this.shape_68},{t:this.shape_69},{t:this.shape_74}]},2).to({state:[{t:this.shape_65},{t:this.shape_64},{t:this.shape_66},{t:this.shape_63}]},1).to({state:[{t:this.shape_62},{t:this.shape_76},{t:this.shape_60},{t:this.shape_75}]},1).to({state:[{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59}]},9).to({state:[{t:this.shape_65},{t:this.shape_64},{t:this.shape_66},{t:this.shape_77}]},23).to({state:[{t:this.shape_70},{t:this.shape_68},{t:this.shape_69},{t:this.shape_67}]},1).to({state:[{t:this.shape_73},{t:this.shape_72},{t:this.shape_78}]},1).to({state:[{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_74}]},2).to({state:[{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63}]},1).to({state:[{t:this.shape_62},{t:this.shape_76},{t:this.shape_60},{t:this.shape_75}]},1).to({state:[{t:this.shape_76},{t:this.shape_62},{t:this.shape_60},{t:this.shape_59}]},8).to({state:[]},66).wait(114));

	// Layer 3
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(57.7,54.4,1,1,-4.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},12).to({x:57.8,y:55.2},2).to({x:57.7,y:54.2},3).to({y:54.4},4).to({startPosition:0},6).to({startPosition:0},22).to({y:54.2},1).to({x:57.8,y:55.2},3).to({x:57.7,y:54.4},2).to({startPosition:0},8).to({startPosition:0},5).to({rotation:-4.5,x:57.8},1).to({regX:0.1,regY:0.1,rotation:-4.3,x:58,y:54.5},9).to({scaleX:1,scaleY:1,x:58.1,y:55.8},2).to({regY:0.2,y:52.1},9,cjs.Ease.get(1)).to({startPosition:0},9,cjs.Ease.get(1)).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:-4.4,x:57.7,y:54.4},6,cjs.Ease.get(1)).to({startPosition:0},18).to({_off:true},8).wait(114));

	// Layer 1
	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(1,1,1).p("AHnDRQgXgqgDBMQgBAYgBARQgDASgCAMQgDAQgFAGQgbA8AcgQAmqBiQAdAEAfCAIAdlcIgNiyQATgNAUgMQCqheEUAzQCagcB5BRIAQDNIAfEUAnmC5QAJgLAIgHQA4gzABBnQAAAegVAQQggARAtAkQAwAlgiAUADliLQhLAnAABhQAEB1ATBxQgGAQhQAjAAgEMQAJgLAogG");
	this.shape_79.setTransform(48.9,68.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(2,1,1).p("AGVFuIgOBMQgSBBgeAdQgoA5gvAyQg8A+hHA0Ih6AAQhLgvg4glQglgXgcgVQhHg1gLgbIg7iiIgMghQiOAsgfjcQgUiEBugGIgKh9IgTj5QggAPgmArQAblhGVhiQHchoB+EMQAXBJg5BYQBIAxgTBZIghCxIgiCwQA5ATgPBOIgnCPQgLApgtgEgAHKBZIgFAXIgwD+");
	this.shape_80.setTransform(49.2,74.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.lf(["#323232","#DEB17F"],[0.004,1],0,-9.9,3,9.2).s().p("AgnAqIgKh8IBihcIgdFcQgeh/gdgFg");
	this.shape_81.setTransform(10.2,74.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.lf(["#323232","#DEB17F"],[0.004,1],0.3,-6,1.5,7.1).s().p("AghiKIBDBNIghCwIgEAYg");
	this.shape_82.setTransform(95,72.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#C2894C").s().p("AkWGpIg7iiIgijYIAdlcIgOiyQATgNAUgMIAXDVQgFAngEAoQgXEUBSFSQAQBEAhAiQhIg1gLgagAG4CZQAFgGADgQQAPgBgWBDQgGAEgDAAQgNAAAVgwgAnFChQgohgAShPQA4g0ACBmQgBAegVARQggAQAtAkQAwAlghAVQgFABgEAAQgTAAgOghgAHFBmIACgqQAEhLAWApQgIBPgOAAQgDAAgDgDgAAlgNIAQAmQghABgSAeg");
	this.shape_83.setTransform(49.5,87.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#323232").s().p("AnKBXQggAOgmArQAblfGVhjQHchnB+ELQAXBKg5BWQBIAygTBYIghCxIhFhNIgQjNQh6hQiZAcQkUgyiqBdQgUALgTAOIANCxIhjBcg");
	this.shape_84.setTransform(49.2,32.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#DEB17F").s().p("AANJXQhLgvg4glQglgXgcgVQghgjgQhDQhSlSAYkVQADgoAFgmIgWjVQCqheEUAzQCZgcB6BRIAQDNIAeEVIgwD9IAwj9IAFgXQA5ATgPBNIgnCPQgLApgtgEIgOBMQgSBBgeAdQgoA5gvAyQg8A+hHA0gAHMBiQgDAQgFAGQgaA8AcgQQAWhDgQABIAFgeQATATAKhdQgXgqgDBLIgDApIgFAeIAAAAgABhA+QBQgjAGgQQgThwgDh2QAAhhBLgnQhLAnAABhQADB2ATBwQgGAQhQAjgAAnA0QAIgLApgGQgpAGgIALgAAPAWQARgcAigBIgRgngAlQDEQiOAsgfjcQgUiDBugGQAcAEAgB/IAjDXgAnOgwQgSBPAnBhQASApAYgKQAhgUgvglQgtgkAfgRQAWgQAAgeQgBhEgZAAQgNAAgSARgAnfgeQAJgLAIgHQgIAHgJALg");
	this.shape_85.setTransform(48.2,90.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79}]}).to({state:[]},130).wait(114));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.6,-2,107.8,153.5);


(lib.Symbol2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 7
	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(2,1,1).p("ADBg4Qg8A9hHA0Ih5AAQhNgvg4gk");
	this.shape_86.setTransform(55.6,144.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(1,1,1).p("AARjiIj5BTIgEBpIArg8IDBgQIAOgaIAOAaICwgEIAVA+IAMhhQhuguhugbgAgmA7IAOAmIA3ACIAJgqgAC5DDIAGhlQg4Btg5AOQgmAMgJgrIhEgBQgOAfgQAHQhZAbg3iDIAMBrAg1gdQBDASA1gYAifhNQDGAPCIgj");
	this.shape_87.setTransform(56.3,119.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#C2894C").s().p("Ag7gNQBDASA0gYQgGAXgVALQgNAFgMAAQgjAAggghg");
	this.shape_88.setTransform(57,117.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#323232").s().p("AhCEMQhNgug4gmIgMhrQA3CDBagaQAPgHAPgfIBDABQAJArAmgMQA5gOA4htIgFBlQg9A/hHA0gAgYA4IgOgmIBOgCIgKApgAjoi5ID5hSQBuAaBuAvIgMBhIgVg+IixAEIgNgaIgOAaIjCAPIgqA9g");
	this.shape_89.setTransform(56.3,123.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(1,1,1).p("ABkAMQBEgjAfhZAATjmQh9Ath/AgIgKBmIAog6IDNgIIAOgbIAOAbIC7gNIAbA+IAAhlQh5gXhogmgAhNAYQAlAOAuAAQA2gDAogXAgjBLIANAnIA3ABIAKgqgAC8DHIAGhlQg5Btg5AOQgmAMgIgsIhEAAQgOAegQAHQhZAbg3iDIALBrAhNAYQBYgnBZAbAiyhZQBQA4BygKQBzgLBEg6AhNAYQhNgbghhWQAEAAAFAAQC5ADDAga");
	this.shape_90.setTransform(56.1,119.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#EEEAEC").s().p("Ai8gLQC6ACC/gZQhEA5hzAKQgRACgRAAQhdAAhDgug");
	this.shape_91.setTransform(57,112.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#D57CB5").s().p("AhYAFQBYgoBZAdQgoAVg1AEQgvAAglgOg");
	this.shape_92.setTransform(57.2,121.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#56293B").s().p("AjBgtIAKAAQBQA3BygKQBzgJBDg7QgeBYhEAlQhZgdhYAoQhNgcgihVg");
	this.shape_93.setTransform(56.6,115.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#323232").s().p("AhAEQQhNgvg4glIgMhrQA4CDBZgbQAQgHAOgfIBDABQAJAsAmgMQA5gOA5huIgGBlQg8A/hHA0gAgVBJIgPgnIBOgCIgJAqgAjqjCQCAggB9gtQBoAmB5AWIAABlIgbg9Ii7AMIgOgaIgPAaIjMAJIgoA5g");
	this.shape_94.setTransform(56.1,124);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(1,1,1).p("ADOh5QASgEgKAhQgDAMgJAKAi/guQAMAOASARQAEAEAFAEQA/A2BugGQBjgMA3g8QAOgPALgUQABgCABgCAASjpQh9AtiBAdIgUBjIAtg1IDUgHIAOgbIAOAbIC9gRQAVAUARAoQACg2gNgtQh6gThpgmgAgkBMIAOAnIA2ABIAKgqgAC7DKIAGhlQg5Btg5AOQgmAMgIgsIhEAAQgOAegQAHQhZAbg3iDIAMBrAjFhiQBlAzBygIQBzgJBJg5Ai/guQAAAAAAgBQBvA9B6gPQBZgMBHg5AjFhiQgRAAAHAZQAHARAJAKAjFhiQDLAJDIgg");
	this.shape_95.setTransform(56.1,120.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#EEEAEC").s().p("AicAhIgJgJQgSgRgMgNIAAAAQBvA9B6gQQBZgMBHg5IgCAEQgLAUgOAOQg3A9hjAMIgWABQhfAAg4gxgAjJg6QDLAJDIggQhJA6hzAIIgfABQhhAAhXgsg");
	this.shape_96.setTransform(56.5,116.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#56293B").s().p("AjDANIAAAAQgJgJgGgRQgIgYASgBQBkAzBygJQBzgHBJg6QASgEgJAhQgEAMgJALQhHA4hZAMQgZADgYAAQhgAAhYgxg");
	this.shape_97.setTransform(56.5,114.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#323232").s().p("AhBETQhMgvg4glIgMhrQA3CDBZgbQAQgHAOgeIBEAAQAIAsAmgNQA5gOA5hsIgGBlQg8A+hHA0gAgWBJIgOgmIBOgCIgKAqgAjsjIQCBgdB9gtQBpAmB6ATQANAtgCA2QgRgogVgUIi9AQIgOgaIgOAaIjUAIIgtA1g");
	this.shape_98.setTransform(56.1,124.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(1,1,1).p("ADOh5QASgEgKAhQgDAMgJAKAi/guQAMAOASARQAEAEAFAEQA/A2BugGQBjgMA3g8QAOgPALgUQABgCABgCAASjpQh9AtiBAdIgUBjIAtg1IDUgHIAOgbIAOAbIC9gRQAVAUARAoQACg2gNgtQh6gThpgmgAC7DKIAGhlQg5Btg5AOQgmAMgIgsIhEAAQgOAegQAHQhZAbg3iDIAMBrAgkBMIAOAnIA2ABIAKgqgAi/guIAAgBQBvA9B6gPQBZgMBHg5AjFhiQBlAzBygIQBzgJBJg5AjFhiQgRAAAHAZQAHARAJAKAjFhiQDLAJDIgg");
	this.shape_99.setTransform(56.1,120.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(1,1,1).p("ABkAJQBEgjAfhZAATjpQh9Ath/AgIgKBmIAog6IDNgIIAOgbIAOAbIC7gNIAbA+IAAhlQh5gXhogmgAhNAVQAlAOAuAAQA2gDAogXAgjBIIANAnIA3ABIAKgqgAC8DKIAGhlQg5Btg5AOQgmAMgIgsIhEAAQgOAegQAHQhZAbg3iDIALBrAiyhcQBQA4BygKQBzgLBEg6AhNAVQBYgnBZAbAhNAVQhNgbghhWQAEAAAFAAQC5ADDAga");
	this.shape_100.setTransform(56.1,120.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#323232").s().p("AhAETQhNgvg4glIgMhrQA4CDBZgbQAQgHAOgeIBDAAQAJAsAmgNQA5gOA5hsIgGBlQg8A+hHA0gAgVBGIgPgnIBOgCIgJAqgAjqjFQCAggB9gtQBoAmB5AWIAABlIgbg9Ii7AMIgOgaIgPAaIjMAJIgoA5g");
	this.shape_101.setTransform(56.1,124.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(1,1,1).p("AATjpQh9Ath/AgIgKBmIAog6IDNgIIAOgbIAOAbIC7gNIAbA+IAAhlQh5gXhogmgAC8DKIAGhlQg5Btg5AOQgmAMgIgsIhEAAQgOAegQAHQhZAbg3iDIALBrAhNA0QAlASAuAAQA2gFAogbQBEgtAfhvAgjBcIANAnIA3ABIAKgqgAhNA0QBYgyBZAkAixhZQBPBFBygMQB0gNBDhJAhNA0QhMgjgihqQAFAAAFAAQC4AEDAgh");
	this.shape_102.setTransform(56.1,120.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#EEEAEC").s().p("Ai8gOQC6AEC+ghQhDBIhzANQgRACgRAAQhdAAhDg6g");
	this.shape_103.setTransform(57.1,112.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#D57CB5").s().p("AhYAGQBYgxBZAkQgoAag1AFQgwAAgkgSg");
	this.shape_104.setTransform(57.2,124.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#323232").s().p("AhAETQhNgvg4glIgMhrQA4CDBZgbQAQgHAOgeIBDAAQAJAsAmgNQA5gOA5hsIgGBlQg8A+hHA0gAgVBZIgPgmIBOgCIgJAqgAjqjFQCAggB9gtQBoAmB5AWIAABlIgbg9Ii7AMIgOgaIgPAaIjMAJIgoA5g");
	this.shape_105.setTransform(56.1,124.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#56293B").s().p("AjBg4IAKABQBPBEBzgNQBzgMBDhIQgfBthDAuQhZgjhYAyQhMgkgjhqg");
	this.shape_106.setTransform(56.6,116.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(1,1,1).p("ACjhNQgcANgjAIAibgsQAoAoA7AUQBCAVBHgdQArgRAjgnACnhqIgEAdIgEAdAATjjIj8BPIgKBoIAqg6IDLgNIAOgaIAOAaIC5gKIAdBDIAAhkQhzgqhugbgACnhqQATgDASgDQgVAlgYAbAC8DEIAGhlQg5Btg5AOQgmAMgIgrIhEgBQgOAfgQAHQhZAbg3iDIAMBrAgjA8IAOAmIA2ACIAKgqgAirhaIAJAZIAHAVQgVgVgQgaQAKABALAAQDFAFCNgVAiihBQAaAMAjAF");
	this.shape_107.setTransform(56,119.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#EEEAEC").s().p("Ag1A5Qg7gVgognIgIgVQAaAMAjAFQgjgFgagMIgJgZQDFAFCOgVIgFAdQgbANgkAIQAkgIAbgNIgDAdQgkAmgqASQgqARgoAAQgbAAgcgJgAiggYIAAAAg");
	this.shape_108.setTransform(55.8,115.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#56293B").s().p("AjFgMIAUAAIAJAZIAIAVQgWgVgPgZgACeABIAEgcIAlgGQgVAkgYAbg");
	this.shape_109.setTransform(56.6,111.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#323232").s().p("AhAENQhMgvg4gkIgMhrQA3CCBZgbQAQgGAOgfIBEAAQAIAsAmgMQA5gOA5htIgGBlQg8A+hHA1gAgVA5IgOgmIBOgCIgKApgAjpi9ID8hQQBuAcBzAqIAABkIgdhDIi5AKIgOgaIgOAaIjLANIgqA5g");
	this.shape_110.setTransform(56,123.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(1,1,1).p("AARjiIj5BTIgEBpIArg8IDBgQIAOgaIAOAaICwgEIAVA+IAMhhQhuguhugbgAC5DDIAGhlQg4Btg5AOQgmAMgJgrIhEgBQgOAfgQAHQhZAbg3iDIAMBrAgmA7IAOAmIA3ACIAJgqgAg1gdQBDASA1gYAifhNQDGAPCIgj");
	this.shape_111.setTransform(56.3,119.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(2,1,1).p("AC6g4Qg6A9hEA0Ih1AAQhKgvg2gk");
	this.shape_112.setTransform(55.6,146.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(1,1,1).p("AAMjqQh0AphqA6IAQBlIAag/QBTgXBRgCIANgaIANAaQBLgCBFATIAgA1IANhYQhXhFhwgZgAg6gdQAEADAFAEQA5ApAvgtQACgCABgBAg6gdQgfgagZgIQAlAAA0gbQAlgUAnAVQAaANAjACQgeAVgYAYACvDLIAFhlQg2Btg3AOQglAMgIgrIhCgBQgOAfgPAHQhWAbg1iDIALBrAgqBNIAOAmIA2ACIAKgqgAglAUQAxAbAlghAg6gdQBGgZAuAZ");
	this.shape_113.setTransform(56.7,120.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#56293B").s().p("Ag4AjQgfgZgZgIQAlgBA0gZQAlgUAnAUQAaAOAiABQgdAUgYAYQgugZhGAZg");
	this.shape_114.setTransform(56.5,113.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#D57CB5").s().p("AgxAAIgJgGQBHgaAtAaIgCADQgZAXgcAAQgYAAgcgUg");
	this.shape_115.setTransform(56.7,118);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#C2894C").s().p("AgrgSQAxAbAlggQAHAYgdASQgPAFgKAAQgiAAgFgqg");
	this.shape_116.setTransform(57.4,124.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#323232").s().p("AhFEUQhJgvg3glIgLhrQA1CEBWgbQAPgIAOgeIBCABQAIArAlgMQA3gOA2htIgFBlQg6A/hFAzgAgcBKIgOgmIBOgDIgKAqgAjSiwQBqg6B0gqQBwAaBXBFIgNBXIggg0QhFgThLACIgNgaIgNAaQhRAChTAWIgaA/g");
	this.shape_117.setTransform(56.7,124.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(2,1,1).p("AC0g4Qg4A9hCA0IhxAAQhIgvg0gk");
	this.shape_118.setTransform(55.6,145.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(1,1,1).p("AANjoIjpBTQADA3AIA3IAZhBQBegOBYgBIAMgbIANAbQBUgGBSACIALBCQAPgzAGgyQhogvhogbgAAtguQAAAWgLAQQgLAPgQAAQgPAAgLgPQgLgQAAgWQAAgWALgRQALgPAPAAQAQAAALAPQALARAAAWgACqDJIAFhlQg0Btg1AOQgkAMgIgsIg/AAQgOAegOAHQhUAbgziDIALBrAgpBOIAOAnIA3ABIAJgqg");
	this.shape_119.setTransform(56.6,120);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#C2894C").s().p("AgfgNQAjASAcgXQgDAWgLALQgHAFgHAAQgSAAgRghg");
	this.shape_120.setTransform(57.1,123.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#323232").s().p("AhBERQhIgug0glIgLhrQAzCDBUgbQAOgHAOgeIA/AAQAIArAkgMQA1gNA0huIgFBmQg4A+hCA0gAgbBLIgOgmIBOgCIgJAqgAjci+IDphTQBoAbBoAvQgGAygPAzIgLhCQhSgChUAFIgNgaIgMAaQhYABheAPIgZBBQgIg3gDg3g");
	this.shape_121.setTransform(56.6,124.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#56293B").s().p("AgaAmQgLgQAAgWQAAgVALgRQALgPAPAAQAQAAALAPQALARAAAVQAAAWgLAQQgLAQgQAAQgPAAgLgQg");
	this.shape_122.setTransform(57.3,115.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").ss(1,1,1).p("Ag6gdQgfgagZgIQAlAAA0gbQAlgUAnAVQAaANAjACQgeAVgYAYAAMjqQh0AphqA6IAQBlIAag/QBTgXBRgCIANgaIANAaQBLgCBFATIAgA1IANhYQhXhFhwgZgAg6gdQAEADAFAEQA5ApAvgtQACgCABgBAgqBNIAOAmIA2ACIAKgqgACvDLIAFhlQg2Btg3AOQglAMgIgrIhCgBQgOAfgPAHQhWAbg1iDIALBrAg6gdQBGgZAuAZAglAUQAxAbAlgh");
	this.shape_123.setTransform(56.7,120.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(1,1,1).p("Ag6gdQAEADAFAEQA5ApAvgtQACgCABgBAAMjqQh0AphqA6IAQBlIAag/QBTgXBRgCIANgaIANAaQBLgCBFATIAgA1IANhYQhXhFhwgZgAg6gdQgfgagZgIQAlAAA0gbQAlgUAnAVQAaANAjACQgeAVgYAYACvDLIAFhlQg2Btg3AOQglAMgIgrIhCgBQgOAfgPAHQhWAbg1iDIALBrAgqBNIAOAmIA2ACIAKgqgAglAUQAxAbAlghAg6gdQBGgZAuAZ");
	this.shape_124.setTransform(56.7,120.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#000000").ss(1,1,1).p("AANjoIjpBTQADA3AIA3IAZhBQBegOBYgBIAMgbIANAbQBUgGBSACIALBCQAPgzAGgyQhogvhogbgAAtguQAAAWgLAQQgLAPgQAAQgPAAgLgPQgLgQAAgWQAAgWALgRQALgPAPAAQAQAAALAPQALARAAAWgAgpBOIAOAnIA3ABIAJgqgACqDJIAFhlQg0Btg1AOQgkAMgIgsIg/AAQgOAegOAHQhUAbgziDIALBr");
	this.shape_125.setTransform(56.6,120);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").ss(1,1,1).p("AAsAhQAMgDAMgEQALgEALgFQAFgCAFgDQBEgkAfhYAATjmQh9Ash/AhIgKBlIAog5IDNgJIAOgaIAOAaIC7gNIAbA+IAAhlQh5gWhogmgAhuAIQAPAJASAHQAcAKAjADQAVgNATgcAgOAlIAAAAQAKABAKAAQAUgCASgDAhuAIQAzARA5g1QAOgPArACQApADg0BHAgjBGIANAmIA3ACIAKgqgAC8DHIAGhlQg5Btg5AOQgmAMgIgrIhEgBQgOAfgQAHQhZAbg3iDIALBrAiyhaQBQA4BygKQBzgKBEg6AhuAIQgzgfgahDQAEAAAFAAQC5ADDAgZ");
	this.shape_126.setTransform(56.1,119.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#D57CB5").s().p("AAEAnIgBAAQAXgMASgdQgSAdgXAMQghgCgdgLQgRgHgPgJQAzARA3g1QAQgPAqADQAqACg0BHQgSAEgUABIgVgBg");
	this.shape_127.setTransform(54.2,119.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#323232").s().p("AhAEQQhNgug4gmIgMhrQA4CEBZgbQAQgIAOgeIBDABQAJArAmgMQA5gOA5htIgGBlQg8A/hHA0gAgVBDIgPgnIBOgCIgJArgAjqjCQCAghB9gtQBoAmB5AXIAABlIgbg+Ii7ANIgOgaIgPAaIjMAIIgoA6g");
	this.shape_128.setTransform(56.1,124);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#56293B").s().p("AAxAAQgqgDgOAOQg5A2gzgRQgzgggbhCIAKABQBQA3BygKQBzgKBDg6QgeBXhEAlIgLAGQgKAFgLADIgYAHQA0hHgqgCg");
	this.shape_129.setTransform(56.6,115.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#000000").ss(1,1,1).p("ACjhNIgEAdACnhqQATgDASgDQgVAlgYAbACjhNQgcANgjAIAibgsQAoAoA7AUQBCAVBHgdQArgRAjgnACnhqIgEAdAATjjIj8BPIgKBoIAqg6IDLgNIAOgaIAOAaIC5gKIAdBDIAAhkQhzgqhugbgAgjA8IAOAmIA2ACIAKgqgAC8DEIAGhlQg5Btg5AOQgmAMgIgrIhEgBQgOAfgQAHQhZAbg3iDIAMBrAibgsQgVgVgQgaQAKABALAAIAJAZQAaAMAjAFAiihBIAHAVAirhaQDFAFCNgV");
	this.shape_130.setTransform(56,119.6);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#EEEAEC").s().p("Ag1A5Qg7gVgognIgIgVQAaAMAjAFQgjgFgagMIgJgZQDFAFCOgVIgFAdQgbANgkAIQAkgIAbgNIgDAdQgkAmgqASQgqARgoAAQgbAAgcgJg");
	this.shape_131.setTransform(55.8,115.5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").ss(1,1,1).p("ACnhlQATgDASgDIgpAkIAAgBABogtQABAAACABQALAEAHAEACnhlIgEAdIAAAAQglAYgWADAATjeIj8BPIgKBoIAqg6IDLgNIAOgaIAOAaIC5gKIAdBDIAAhkQhzgqhugbgAiBgdQANgGAOgEQAIgDAIgDQA7gSArAHQAqgEAuAPAgXggQAEgFAEgDQAOgNARgDAC8C/IAGhlQg5Btg5AOQgmAMgIgrIhEgBQgOAfgQAHQhZAbg3iDIAMBrAgjA3IAOAmIA2ACIAKgqgAirhVIAIAWIgdgXQAKABALAAQDFAFCNgVAijg/QAhAZAcgB");
	this.shape_132.setTransform(56,119.1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#EEEAEC").s().p("AigAHIgJgVQDFAFCOgVIgFAdIAAAAQgkAXgXADQgtgPgqAEQgrgHg7ASIgRAGIgCAAQgbAAgfgYg");
	this.shape_133.setTransform(55.8,112);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#56293B").s().p("AjFAAIAUAAIAJAWgACeANIAAAAIAEgcIAlgGIgpAjg");
	this.shape_134.setTransform(56.6,110.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#323232").s().p("AhAEIQhMgug4gmIgMhqQA3CCBZgbQAQgGAOgfIBEAAQAIAsAmgMQA5gOA5htIgGBlQg8A+hHA1gAgVA0IgOgmIBOgCIgKApgAjpi4ID8hQQBuAcBzAqIAABkIgdhDIi5AKIgOgaIgOAaIjLANIgqA5g");
	this.shape_135.setTransform(56,123.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#000000").ss(1,1,1).p("AAsAhQAMgDAMgEQALgEALgFQAFgCAFgDQBEgkAfhYAATjmQh9Ash/AhIgKBlIAog5IDNgJIAOgaIAOAaIC7gNIAbA+IAAhlQh5gWhogmgAhuAIQAPAJASAHQAcAKAjADQAVgNATgcAgOAlIAAAAQAKABAKAAQAUgCASgDAhuAIQAzARA5g1QAOgPArACQApADg0BHAC8DHIAGhlQg5Btg5AOQgmAMgIgrIhEgBQgOAfgQAHQhZAbg3iDIALBrAgjBGIANAmIA3ACIAKgqgAiyhaQBQA4BygKQBzgKBEg6AhuAIQgzgfgahDQAEAAAFAAQC5ADDAgZ");
	this.shape_136.setTransform(56.1,119.9);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#000000").ss(1,1,1).p("Ag6gdQgfgagZgIQAlAAA0gbQAlgUAnAVQAaANAjACQgeAVgYAYAg6gdQAEADAFAEQA5ApAvgtQACgCABgBAAMjqQh0AphqA6IAQBlIAag/QBTgXBRgCIANgaIANAaQBLgCBFATIAgA1IANhYQhXhFhwgZgAgqBNIAOAmIA2ACIAKgqgACvDLIAFhlQg2Btg3AOQglAMgIgrIhCgBQgOAfgPAHQhWAbg1iDIALBrAg6gdQBGgZAuAZAglAUQAxAbAlgh");
	this.shape_137.setTransform(56.7,120.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#000000").ss(1,1,1).p("AATjjIj8BPIgKBoIAqg6IDLgNIAOgaIAOAaIC5gKIAdBDIAAhkQhzgqhugbgACjhNIgEAdACnhqQATgDASgDQgVAlgYAbACjhNQgcANgjAIAibgsQAoAoA7AUQBCAVBHgdQArgRAjgnACnhqIgEAdAC8DEIAGhlQg5Btg5AOQgmAMgIgrIhEgBQgOAfgQAHQhZAbg3iDIAMBrAgjA8IAOAmIA2ACIAKgqgAirhaIAJAZIAHAVQgVgVgQgaQAKABALAAQDFAFCNgVAiihBQAaAMAjAF");
	this.shape_138.setTransform(56,119.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#000000").ss(1,1,1).p("AAMjqQh0AphqA6IAQBlIAag/QBTgXBRgCIANgaIANAaQBLgCBFATIAgA1IANhYQhXhFhwgZgAg6gdQgfgagZgIQAlAAA0gbQAlgUAnAVQAaANAjACQgeAVgYAYAg6gdQAEADAFAEQA5ApAvgtQACgCABgBACvDLIAFhlQg2Btg3AOQglAMgIgrIhCgBQgOAfgPAHQhWAbg1iDIALBrAgqBNIAOAmIA2ACIAKgqgAglAUQAxAbAlghAg6gdQBGgZAuAZ");
	this.shape_139.setTransform(56.7,120.3);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#000000").ss(1,1,1).p("ACnhqIgEAdIgEAdAibgsQAoAoA7AUQBCAVBHgdQArgRAjgnAATjjIj8BPIgKBoIAqg6IDLgNIAOgaIAOAaIC5gKIAdBDIAAhkQhzgqhugbgACnhqQATgDASgDQgVAlgYAbACjhNQgcANgjAIAgjA8IAOAmIA2ACIAKgqgAC8DEIAGhlQg5Btg5AOQgmAMgIgrIhEgBQgOAfgQAHQhZAbg3iDIAMBrAibgsQgVgVgQgaQAKABALAAIAJAZQAaAMAjAFAiihBIAHAVAirhaQDFAFCNgV");
	this.shape_140.setTransform(56,119.6);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#EEEAEC").s().p("Ag1A5Qg7gVgognIgIgVQAaAMAjAFQgjgFgagMIgJgZQDFAFCOgVIgFAdQgbANgkAIQAkgIAbgNIgDAdQgkAmgqASQgqARgoAAQgbAAgcgJgAClgkg");
	this.shape_141.setTransform(55.8,115.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#000000").ss(1,1,1).p("ACjhNQgcANgjAIACnhqQATgDASgDQgVAlgYAbACnhqIgEAdIgEAdAibgsQAoAoA7AUQBCAVBHgdQArgRAjgnAATjjIj8BPIgKBoIAqg6IDLgNIAOgaIAOAaIC5gKIAdBDIAAhkQhzgqhugbgAC8DEIAGhlQg5Btg5AOQgmAMgIgrIhEgBQgOAfgQAHQhZAbg3iDIAMBrAgjA8IAOAmIA2ACIAKgqgAirhaIAJAZIAHAVQgVgVgQgaQAKABALAAQDFAFCNgVAiihBQAaAMAjAF");
	this.shape_142.setTransform(56,119.6);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#000000").ss(1,1,1).p("AATjpQh9Ath/AgIgKBmIAog6IDNgIIAOgbIAOAbIC7gNIAbA+IAAhlQh5gXhogmgAhNA0QAlASAuAAQA2gFAogbQBEgtAfhvAgjBcIANAnIA3ABIAKgqgAC8DKIAGhlQg5Btg5AOQgmAMgIgsIhEAAQgOAegQAHQhZAbg3iDIALBrAixhZQBPBFBygMQB0gNBDhJAhNA0QBYgyBZAkAhNA0QhMgjgihqQAFAAAFAAQC4AEDAgh");
	this.shape_143.setTransform(56.1,120.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#000000").ss(1,1,1).p("ACjhNIgEAdAATjjIj8BPIgKBoIAqg6IDLgNIAOgaIAOAaIC5gKIAdBDIAAhkQhzgqhugbgACjhNQgcANgjAIACnhqQATgDASgDQgVAlgYAbACnhqIgEAdAibgsQAoAoA7AUQBCAVBHgdQArgRAjgnAgjA8IAOAmIA2ACIAKgqgAC8DEIAGhlQg5Btg5AOQgmAMgIgrIhEgBQgOAfgQAHQhZAbg3iDIAMBrAibgsQgVgVgQgaQAKABALAAIAJAZQAaAMAjAFAiihBIAHAVAirhaQDFAFCNgV");
	this.shape_144.setTransform(56,119.6);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#000000").ss(1,1,1).p("ADOh5QASgEgKAhQgDAMgJAKAi/guQAMAOASARQAEAEAFAEQA/A2BugGQBjgMA3g8QAOgPALgUQABgCABgCAASjpQh9AtiBAdIgUBjIAtg1IDUgHIAOgbIAOAbIC9gRQAVAUARAoQACg2gNgtQh6gThpgmgAC7DKIAGhlQg5Btg5AOQgmAMgIgsIhEAAQgOAegQAHQhZAbg3iDIAMBrAgkBMIAOAnIA2ABIAKgqgAjFhiQBlAzBygIQBzgJBJg5Ai/guIAAgBQBvA9B6gPQBZgMBHg5AjFhiQgRAAAHAZQAHARAJAKAjFhiQDLAJDIgg");
	this.shape_145.setTransform(56.1,120.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#000000").ss(1,1,1).p("AibgsQAoAoA7AUQBCAVBHgdQArgRAjgnACnhqIgEAdIgEAdAATjjIj8BPIgKBoIAqg6IDLgNIAOgaIAOAaIC5gKIAdBDIAAhkQhzgqhugbgACjhNQgcANgjAIACnhqQATgDASgDQgVAlgYAbAC8DEIAGhlQg5Btg5AOQgmAMgIgrIhEgBQgOAfgQAHQhZAbg3iDIAMBrAgjA8IAOAmIA2ACIAKgqgAirhaIAJAZIAHAVQgVgVgQgaQAKABALAAQDFAFCNgVAiihBQAaAMAjAF");
	this.shape_146.setTransform(56,119.6);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#EEEAEC").s().p("Ag1A5Qg7gVgognIgIgVQAaAMAjAFQgjgFgagMIgJgZQDFAFCOgVIgFAdQgbANgkAIQAkgIAbgNIgDAdQgkAmgqASQgqARgoAAQgbAAgcgJgAiggYIAAAAgAClgkg");
	this.shape_147.setTransform(55.8,115.5);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#000000").ss(1,1,1).p("AATjpQh9Ath/AgIgKBmIAog6IDNgIIAOgbIAOAbIC7gNIAbA+IAAhlQh5gXhogmgAhNA0QAlASAuAAQA2gFAogbQBEgtAfhvAC8DKIAGhlQg5Btg5AOQgmAMgIgsIhEAAQgOAegQAHQhZAbg3iDIALBrAgjBcIANAnIA3ABIAKgqgAixhZQBPBFBygMQB0gNBDhJAhNA0QBYgyBZAkAhNA0QhMgjgihqQAFAAAFAAQC4AEDAgh");
	this.shape_148.setTransform(56.1,120.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86,p:{y:144.7}}]}).to({state:[{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86,p:{y:144.7}}]},1).to({state:[{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_86,p:{y:145.4}}]},1).to({state:[{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_86,p:{y:146}}]},1).to({state:[{t:this.shape_97},{t:this.shape_96},{t:this.shape_98},{t:this.shape_99},{t:this.shape_86,p:{y:146}}]},2).to({state:[{t:this.shape_93},{t:this.shape_91},{t:this.shape_101},{t:this.shape_92},{t:this.shape_100},{t:this.shape_86,p:{y:146}}]},4).to({state:[{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_86,p:{y:146}}]},2).to({state:[{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_86,p:{y:144.9}}]},5).to({state:[{t:this.shape_89},{t:this.shape_88},{t:this.shape_111},{t:this.shape_86,p:{y:144.7}}]},4).to({state:[{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112}]},17).to({state:[{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118}]},2).to({state:[{t:this.shape_117},{t:this.shape_116},{t:this.shape_114},{t:this.shape_115},{t:this.shape_123},{t:this.shape_112}]},2).to({state:[{t:this.shape_114},{t:this.shape_117},{t:this.shape_115},{t:this.shape_116},{t:this.shape_124},{t:this.shape_112}]},2).to({state:[{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_125},{t:this.shape_118}]},2).to({state:[{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_91},{t:this.shape_126},{t:this.shape_86,p:{y:145.5}}]},4).to({state:[{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_86,p:{y:146}}]},2).to({state:[{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_99},{t:this.shape_86,p:{y:146}}]},2).to({state:[{t:this.shape_109},{t:this.shape_131},{t:this.shape_110},{t:this.shape_130},{t:this.shape_86,p:{y:144.9}}]},2).to({state:[{t:this.shape_117},{t:this.shape_114},{t:this.shape_115},{t:this.shape_116},{t:this.shape_124},{t:this.shape_112}]},3).to({state:[{t:this.shape_97},{t:this.shape_98},{t:this.shape_96},{t:this.shape_99},{t:this.shape_86,p:{y:146}}]},2).to({state:[{t:this.shape_106},{t:this.shape_103},{t:this.shape_105},{t:this.shape_104},{t:this.shape_102},{t:this.shape_86,p:{y:146}}]},2).to({state:[{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_86,p:{y:143.9}}]},2).to({state:[{t:this.shape_129},{t:this.shape_91},{t:this.shape_128},{t:this.shape_127},{t:this.shape_136},{t:this.shape_86,p:{y:145.5}}]},5).to({state:[{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_86,p:{y:146}}]},2).to({state:[{t:this.shape_117},{t:this.shape_115},{t:this.shape_114},{t:this.shape_116},{t:this.shape_137},{t:this.shape_112}]},2).to({state:[{t:this.shape_127},{t:this.shape_128},{t:this.shape_129},{t:this.shape_91},{t:this.shape_126},{t:this.shape_86,p:{y:145.5}}]},3).to({state:[{t:this.shape_109},{t:this.shape_110},{t:this.shape_108},{t:this.shape_138},{t:this.shape_86,p:{y:144.9}}]},5).to({state:[{t:this.shape_106},{t:this.shape_103},{t:this.shape_105},{t:this.shape_104},{t:this.shape_102},{t:this.shape_86,p:{y:146}}]},2).to({state:[{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_99},{t:this.shape_86,p:{y:146}}]},2).to({state:[{t:this.shape_106},{t:this.shape_103},{t:this.shape_105},{t:this.shape_104},{t:this.shape_102},{t:this.shape_86,p:{y:146}}]},3).to({state:[{t:this.shape_117},{t:this.shape_115},{t:this.shape_114},{t:this.shape_116},{t:this.shape_139},{t:this.shape_112}]},3).to({state:[{t:this.shape_109},{t:this.shape_110},{t:this.shape_141},{t:this.shape_140},{t:this.shape_86,p:{y:144.9}}]},2).to({state:[{t:this.shape_105},{t:this.shape_106},{t:this.shape_103},{t:this.shape_104},{t:this.shape_102},{t:this.shape_86,p:{y:146}}]},2).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_129},{t:this.shape_91},{t:this.shape_136},{t:this.shape_86,p:{y:145.5}}]},2).to({state:[{t:this.shape_109},{t:this.shape_110},{t:this.shape_108},{t:this.shape_142},{t:this.shape_86,p:{y:144.9}}]},3).to({state:[{t:this.shape_103},{t:this.shape_105},{t:this.shape_106},{t:this.shape_104},{t:this.shape_143},{t:this.shape_86,p:{y:146}}]},3).to({state:[{t:this.shape_110},{t:this.shape_109},{t:this.shape_131},{t:this.shape_144},{t:this.shape_86,p:{y:144.9}}]},3).to({state:[{t:this.shape_97},{t:this.shape_96},{t:this.shape_98},{t:this.shape_99},{t:this.shape_86,p:{y:146}}]},2).to({state:[{t:this.shape_109},{t:this.shape_108},{t:this.shape_110},{t:this.shape_142},{t:this.shape_86,p:{y:144.9}}]},2).to({state:[{t:this.shape_89},{t:this.shape_88},{t:this.shape_111},{t:this.shape_86,p:{y:144.7}}]},4).to({state:[{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_145},{t:this.shape_86,p:{y:146}}]},17).to({state:[{t:this.shape_109},{t:this.shape_147},{t:this.shape_110},{t:this.shape_146},{t:this.shape_86,p:{y:144.9}}]},2).to({state:[{t:this.shape_106},{t:this.shape_103},{t:this.shape_105},{t:this.shape_104},{t:this.shape_102},{t:this.shape_86,p:{y:146}}]},2).to({state:[{t:this.shape_89},{t:this.shape_88},{t:this.shape_111},{t:this.shape_86,p:{y:144.7}}]},2).to({state:[{t:this.shape_128},{t:this.shape_129},{t:this.shape_127},{t:this.shape_91},{t:this.shape_126},{t:this.shape_86,p:{y:145.5}}]},2).to({state:[{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_148},{t:this.shape_86,p:{y:146}}]},2).to({state:[{t:this.shape_117},{t:this.shape_115},{t:this.shape_114},{t:this.shape_116},{t:this.shape_139},{t:this.shape_112}]},2).to({state:[{t:this.shape_114},{t:this.shape_115},{t:this.shape_117},{t:this.shape_116},{t:this.shape_139},{t:this.shape_112}]},2).to({state:[{t:this.shape_89},{t:this.shape_88},{t:this.shape_111},{t:this.shape_86,p:{y:144.7}}]},3).to({state:[]},5).wait(167));

	// Layer 4
	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#000000").ss(1,1,1).p("ADIBEQAFgGABgBQAOgJAEgQQAEgRgJgPQgJgNgQgDQgQgEgOAKQgOAIgFARQgCARAJAOQAFAJAKAGQghgHgigMQAOhEAxACQBuAHAJBKQgFABgGABIgIABQgUADgVABQgKABgKAAQgBgBgBAAgAjTAkQgEgDgFgEQgMgLgBgRQgCgQALgOQALgMAQgCQASgBAMALQAOAMABARQABAQgLAMQgHAKgKADQABAAABABQABAAACAAQABgBACABQAmgBAngKQgDhFgzgFQhygHgTBJQAiANAkAEQACAAACAAQACAAADABQAAAAABAAQADAAABAAQAFAAAEABQAEgBAFAAAizAmIAAAAQgFAAgEAAAirAmQgCAAgDAAQgBAAgCAAAixAmQgBAAgBAAACoBBIAbADIAFAAAkRgnQBKgqBXAUAEaACQhBgyhXAJ");
	this.shape_149.setTransform(59.3,68);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#C2894C").s().p("AB/ADQAmgXA1AIQAzAMAJAtQhBgyhWAIgAi6gsQAyABAUAaQhXgVhKApQAfgtA8gCg");
	this.shape_150.setTransform(59.7,63.6);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#323232").s().p("ADHA4IgbgDIgBAAQgJgGgGgJQgJgOADgRQAEgQAOgJQAOgKARAEQAPADAJAOQAJAOgDARQgEAQgOAJIgHAHgADCA4IgJgBIgCgBIgCAAIgDAAIgGgBIAbADIgBAAIgEAAgACsA1gAjAAZIgEAAIgCAAIgFgBIgDAAIgJgHQgNgLgBgQQgBgRAKgOQALgMARgCQARgBANALQANAMACARQABAQgLAMQgHAKgLADIgIABIgJgBg");
	this.shape_151.setTransform(58.8,69.2);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("ADKA6IgCAAIAGgHQAPgJADgQQAEgRgJgOQgJgOgQgDQgQgEgOAKQgOAJgEAQQgDARAJAOQAFAJAKAGQghgHghgMQANhEAxACQBuAHAJBKIgLACIgIABQgUADgVABIgSAAIgCABgADGA6IgEAAIABAAIAFAAIgCAAgAiuAcIgCAAIgDgBQAKgDAHgKQALgMgBgQQgBgRgNgMQgNgLgRABQgRACgLAMQgLAOACARQABAQAMALIAKAHQgkgEgjgNQAThJByAHQAzAFADBFQgnAKgmABIgDAAg");
	this.shape_152.setTransform(59.3,69);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#000000").ss(1,1,1).p("ADhAGQApAPARAjQgsAKgsgCAjpgZQgIAxAqAKQABAAACAAQAKAAAKABAjpgZQAUgIAYgCQAQgCAOACQA1AHANAxQgoANgrABAjHAiQgogEgrgPQATgbAegNACZgDQARgCAXAEQARACAPAFQAFAugjAMAifgjQASAvgjAXACmA9QAOACAPABACmA9QgjgGgigMQANgpArgFQgUApAhAXgAkGgoQBBgkBJATACNgjQBIgEA0An");
	this.shape_153.setTransform(59.4,68.4);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("ADDAyQAjgMgFguQApAPARAjQglAIgkAAIgPAAgABhAdQANgpArgFQgUApAhAWQgjgFgigMgAifgxQA1AGANAyQgoANgrAAQAjgVgSgwgAkaABQATgcAegNQgIAxAqAKQgogEgrgOg");
	this.shape_154.setTransform(59.4,69.9);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#323232").s().p("ACrAvQghgWAUgpQARgCAXADQARADAPAFQAFAugjAMIgdgEgAi/AVIgDgBQgqgKAIgxQAUgIAYgCQAQgBAOACQASAwgjAVIgUAAg");
	this.shape_155.setTransform(58.9,69.8);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#C2894C").s().p("ACLAFQBOgeAvBBQg0gnhJAEgAh9gRQhJgThBAkQA8hEBOAzg");
	this.shape_156.setTransform(59.5,64.4);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#000000").ss(1,1,1).p("AC7A8QAEAAAEABQAsACAsgKQgbgNgfgHAjpAAQALAeAegBQAfgBAJgbQAgAFAbAMQgoANgrABQgKgBgKAAQgCAAgBAAQgogEgrgPQACgCABgCQAagGAUgCQAsgDAlAEACVAbQgbADgZAKQAiAMAjAGQAHABAHABQADAAADAAIABAAQAgAAAGgbACVAbQADAZAcAIAj+gnQA6gdA5ALACVAbQAngEAlAKACVgfQA8gGAvAi");
	this.shape_157.setTransform(59.4,68.7);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#323232").s().p("ADAAfIgBAAIgGAAQgcgIgDgYQAmgEAlAJQgFAbggAAIAAAAgAjkgcQAsgEAkAFQgJAbgeAAIgCAAQgdAAgKgcg");
	this.shape_158.setTransform(58.9,71.6);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("ADDAeIgIgBQAgAAAGgbQAfAHAbANQglAJgkAAIgPgBgACmAbQgjgGgigMQAZgJAbgDQADAYAcAIIgOgCgAjEAAIgDAAQgogDgrgPIADgEQAagGAUgCQALAeAegBQAfgBAJgbQAgAFAbAMQgoAMgrABIgUgBg");
	this.shape_159.setTransform(59.4,71.8);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#C2894C").s().p("ACVAHQBDgiAoA+Qgvghg8AFgAiLgSQg6gLg6AdQAtg5BHAng");
	this.shape_160.setTransform(59.4,64.8);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#000000").ss(1,1,1).p("AkIAKQBUA0BSgzQhcAbhKgcgAjzguQApgXA1AIABoAfQBXA6BKgtQhIAYhZglgAChgkQAzgBAhAX");
	this.shape_161.setTransform(59.2,69.5);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#2B2B2B").s().p("ABogFQBZAkBIgYQggAUgjAAQgtAAgxgggAkIgaQBKAbBcgaQgpAZgpAAQgqAAgqgag");
	this.shape_162.setTransform(59.2,73.2);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#C2894C").s().p("ACgAJQA0gfAgA0QghgWgzABgAiVgQQg2gHgoAXQAggxA+Ahg");
	this.shape_163.setTransform(59.3,65);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#000000").ss(1,1,1).p("AC7A8QAEAAAEABQAsACAsgKQgbgNgfgHAjpAAQALAeAegBQAfgBAJgbQAgAFAbAMQgoANgrABQgKgBgKAAQgCAAgBAAQgogEgrgPQACgCABgCQAagGAUgCQAsgDAlAEACVAbQgbADgZAKQAiAMAjAGQAHABAHABQADAAADAAIABAAQAgAAAGgbACVAbQADAZAcAIAj+gnQA6gdA5ALACVgfQA8gGAvAiACVAbQAngEAlAK");
	this.shape_164.setTransform(59.4,68.7);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#000000").ss(1,1,1).p("ADIBEQAFgGABgBQAOgJAEgQQAEgRgJgPQgJgNgQgDQgQgEgOAKQgOAIgFARQgCARAJAOQAFAJAKAGQghgHgigMQAOhEAxACQBuAHAJBKQgFABgGABIgIABQgUADgVABQgKABgKAAQgBgBgBAAgAjTAkQgEgDgFgEQgMgLgBgRQgCgQALgOQALgMAQgCQASgBAMALQAOAMABARQABAQgLAMQgHAKgKADQABAAABABQABAAACAAQABgBACABQgCAAgDAAQgBAAgCAAIAAAAQgFAAgEAAQAEgBAFAAAjTAkQACAAACAAQACAAADABQAAAAABAAQADAAABAAQAFAAAEABAirAmQAmgBAngKQgDhFgzgFQhygHgTBJQAiANAkAEAixAmQgBAAgBAAACoBBIAbADIAFAAAkRgnQBKgqBXAUAEaACQhBgyhXAJ");
	this.shape_165.setTransform(59.3,68);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#323232").s().p("ADHA4IgbgDIgBAAQgJgGgGgJQgJgOADgRQAEgQAOgJQAOgKARAEQAPADAJAOQAJAOgDARQgEAQgOAJIgHAHgADCA4IgJgBIgCgBIgCAAIgDAAIgGgBIAbADIgBAAIgEAAgADHA4gACsA1gAjAAZIgEAAIgCAAIgFgBIgDAAIgJgHQgNgLgBgQQgBgRAKgOQALgMARgCQARgBANALQANAMACARQABAQgLAMQgHAKgLADIgIABIgJgBg");
	this.shape_166.setTransform(58.8,69.2);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#000000").ss(1,1,1).p("ADhAGQApAPARAjQgsAKgsgCAjpgZQAUgIAYgCQAQgCAOACQA1AHANAxQgoANgrABAjpgZQgIAxAqAKQABAAACAAQAKAAAKABAjHAiQgogEgrgPQATgbAegNACZgDQARgCAXAEQARACAPAFQAFAugjAMAifgjQASAvgjAXACmA9QAOACAPABACmA9QgjgGgigMQANgpArgFQgUApAhAXgAkGgoQBBgkBJATACNgjQBIgEA0An");
	this.shape_167.setTransform(59.4,68.4);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#000000").ss(1,1,1).p("AjzguQApgXA1AIAkIAKQBUA0BSgzQhcAbhKgcgAChgkQAzgBAhAXABoAfQBXA6BKgtQhIAYhZglg");
	this.shape_168.setTransform(59.2,69.5);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#000000").ss(1,1,1).p("ADIBEQAFgGABgBQAOgJAEgQQAEgRgJgPQgJgNgQgDQgQgEgOAKQgOAIgFARQgCARAJAOQAFAJAKAGQghgHgigMQAOhEAxACQBuAHAJBKQgFABgGABIgIABQgUADgVABQgKABgKAAQgBgBgBAAgAjTAkQgEgDgFgEQgMgLgBgRQgCgQALgOQALgMAQgCQASgBAMALQAOAMABARQABAQgLAMQgHAKgKADQABAAABABQABAAACAAQABgBACABQAmgBAngKQgDhFgzgFQhygHgTBJQAiANAkAEQACAAACAAQACAAADABQAAAAABAAQADAAABAAQAFAAAEABQAEgBAFAAAirAmQgCAAgDAAQgBAAgCAAIAAAAQgFAAgEAAAixAmQgBAAgBAAACoBBIAbADIAFAAAkRgnQBKgqBXAUAEaACQhBgyhXAJ");
	this.shape_169.setTransform(59.3,68);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#000000").ss(1,1,1).p("ADIBEQAFgGABgBQAOgJAEgQQAEgRgJgPQgJgNgQgDQgQgEgOAKQgOAIgFARQgCARAJAOQAFAJAKAGQghgHgigMQAOhEAxACQBuAHAJBKQgFABgGABIgIABQgUADgVABQgKABgKAAQgBgBgBAAgAjTAkQgEgDgFgEQgMgLgBgRQgCgQALgOQALgMAQgCQASgBAMALQAOAMABARQABAQgLAMQgHAKgKADQABAAABABQgBAAgBAAIAAAAQgFAAgEAAQAEgBAFAAAjTAkQACAAACAAQACAAADABQAAAAABAAQADAAABAAQAFAAAEABAirAmQAmgBAngKQgDhFgzgFQhygHgTBJQAiANAkAEAixAmQABAAACAAQABgBACABQgCAAgDAAQgBAAgCAAACoBBIAbADIAFAAAkRgnQBKgqBXAUAEaACQhBgyhXAJ");
	this.shape_170.setTransform(59.3,68);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#000000").ss(1,1,1).p("AC7A8QAEAAAEABQAsACAsgKQgbgNgfgHAj4AWQgQgEgSgGQACgCABgCQAJgCAJgCAkHAAQABACABACQAFAMAIAGQALAIAPgBQADAAADAAAjSgBQAfgBAbADQAgAFAbAMQgoANgrABQgKgBgKAAQgCAAgBAAQgIgBgJgBQAEgBAEgBQATgGAHgUAB4AgQgMAEgLAEQARAGASAFQAHAFALAEQADAAADAAIABAAQAIAAAHgCQABAAABAAQARgGAEgTQglgKgnAEQABADAAACQADAMAJAHACsA6QAEABAEABAj+gnQA6gdA5ALACVgfQA8gGAvAi");
	this.shape_171.setTransform(59.4,68.7);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("ADDAeIgIgBQAgAAAGgbQAfAHAbANQglAIgkAAIgPAAgACsAbIACgBIAGACIgIgBgABhAJIAXgIQADALAJAIQgSgFgRgGgAjEAAIgDAAIgRgCIAIgBQAHACAJAAQAfgCAJgaQAgAEAbANQgoAMgrAAIgUAAgAkagSIADgFIASgDQAFAMAIAGQgQgEgSgGg");
	this.shape_172.setTransform(59.4,71.9);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#323232").s().p("AC/AfIgGAAQgLgEgHgFQgJgHgDgMIgBgEQAmgEAlAJQgEATgQAGIgDAAQgGACgIAAgAjVgGQgJgGgFgMIgBgEQAcgDAZABIAbADQgHAUgTAGIgHABIgGAAIgCAAQgOAAgKgGg");
	this.shape_173.setTransform(55.9,71.6);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#000000").ss(1,1,1).p("ADhAGQApAPARAjQgsAKgsgCAkCgKQAAAaASALQgUgEgWgIQAKgPAOgKgAjwAbQAHAFAKACQABAAACAAQAKAAAKABQAjgXgSgvQgOgCgQACQgYACgUAIQgBAIAAAHAB9AFQACgEACgEQARgCAXAEQARACAPAFQAFAugjAMQgPgBgOgCQgFgDgDgEAB9AFQgKAeATATQgTgEgSgHQAIgaAUgMgAifgjQA1AHANAxQgoANgrABAkGgoQBBgkBJATACNgjQBIgEA0An");
	this.shape_174.setTransform(59.4,68.4);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("ADDAyQAjgMgFguQApAPARAjQglAIgkAAIgPAAgABhAdQAIgaAUgLQgKAdATATQgTgFgSgGgAifgxQA1AGANAyQgoANgrAAQAjgVgSgwgAkaABQAKgPAOgKQAAAZASAMQgUgFgWgHg");
	this.shape_175.setTransform(59.4,69.9);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#323232").s().p("ACrAvIgIgGQgTgTAKgdIAEgJQARgCAXADQARADAPAFQAFAugjAMIgdgEgAi/AVIgDgBQgKgCgHgEQgTgMABgaIABgPQAUgIAYgCQAQgBAOACQASAwgjAVIgUAAg");
	this.shape_176.setTransform(56.5,69.8);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#000000").ss(1,1,1).p("ACwgTQBiAKAIBGQgFABgGABIgIABQgUADgVABQgKABgKAAIgEgBIgEAAIgbgDQghgHgigMQAMg8AogGAj9gYQgVAQgHAbQBGAoB1ggQgDhFgzgFQgagCgVADIAAAAQAFAEACABQAMAMACARQABAQgLAMQgHAKgLADQgEAAgEABQgEgBgEAAQgBAAgBAAQgBAAgBAAQgBAAgBAAQgDgBgCAAQgCAAgBAAQgFgDgFgEQgMgLgCgQQAAgKADgIQAagWAgAAACRA5IAhADQAFgGABgBQAPgJADgQQADgRgIgOQgFgGgFgEQgFgEgGgCQgCgBgCAAQgKgDgKADQgFACgFAEQgOAJgEAQQgEARAKAOQAFAJAKAGADKBFQgBgBgBAAAkRgnQBKgqBXAUAEaACQhBgyhXAJ");
	this.shape_177.setTransform(59.3,68);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#323232").s().p("ACsAyIgBAAQgJgGgGgJQgJgOADgQQAEgQAOgKQAGgEAFgCQAJgDALADIAEABQAGACAFAEQAFAEAEAGQAJAOgDARQgEARgOAIIgHAHgAjAAXIgBgBIgDAAIgCAAIgFAAIgDgBIgJgHQgNgLgBgQQgBgKAEgIQAZgWAhAAIAGAFQANAMACARQABARgLALQgHAKgLAEIgIAAIgJAAg");
	this.shape_178.setTransform(56.6,68.6);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("ADKA6IgCAAIgCAAIgEAAIgbgDQghgHghgMQALg8ApgGQgGACgFAEQgOAJgEAQQgDARAJAOQAFAJAKAGIABAAIAgADIAGgHQAPgJADgQQAEgRgJgOQgEgGgGgEQgEgEgHgCQBiAKAIBGIgLACIgIABQgUADgVABIgSAAIgCABgADGA6IgEAAIAAAAIAEAAgAkZAJQAHgbAVgQQgDAIABAKQABAQAMALIAKAHIADAAIAFABIACAAIACAAIACAAIAIABIAJgBQAKgDAHgKQALgLgBgRQgBgRgNgMIgHgFIAAAAQAVgDAaACQAzAFADBFQgzAOgrAAQg1AAgogWg");
	this.shape_179.setTransform(59.3,69);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#000000").ss(1,1,1).p("ADhAGQApAPARAjQgsAKgsgCAjHAiQgogEgrgPQATgbAegNQgIAxAqAKQABAAACAAQAKAAAKABAjpgZQAUgIAYgCQAQgCAOACQASAvgjAXACZgDQgUApAhAXQgjgGgigMQANgpArgFQARgCAXAEQARACAPAFQAFAugjAMACmA9QAOACAPABAifgjQA1AHANAxQgoANgrABAkGgoQBBgkBJATACNgjQBIgEA0An");
	this.shape_180.setTransform(59.4,68.4);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#000000").ss(1,1,1).p("AC7A8QAEAAAEABQAsACAsgKQgbgNgfgHAiYABQAgAFAbAMQgoANgrABQgKgBgKAAQgCAAgBAAQgogEgrgPQACgCABgCQAagGAUgCQALAeAegBQAfgBAJgbgACVAbQgbADgZAKQAiAMAjAGQAHABAHABQADAAADAAIABAAQAgAAAGgbACVAbQADAZAcAIAj+gnQA6gdA5ALAjpAAQAsgDAlAEACVgfQA8gGAvAiACVAbQAngEAlAK");
	this.shape_181.setTransform(59.4,68.7);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#000000").ss(1,1,1).p("AC7A8QAEAAAEABQAsACAsgKQgbgNgfgHAiYABQAgAFAbAMQgoANgrABQgKgBgKAAQgCAAgBAAQgogEgrgPQACgCABgCQAagGAUgCQALAeAegBQAfgBAJgbgACVAbQgbADgZAKQAiAMAjAGQAHABAHABQADAAADAAIABAAQAgAAAGgbACVAbQADAZAcAIAj+gnQA6gdA5ALAjpAAQAsgDAlAEACVAbQAngEAlAKACVgfQA8gGAvAi");
	this.shape_182.setTransform(59.4,68.7);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#000000").ss(1,1,1).p("ADhAGQApAPARAjQgsAKgsgCAjHAiQgogEgrgPQATgbAegNQAUgIAYgCQAQgCAOACQASAvgjAXAjHAiQABAAACAAQAKAAAKABAjpgZQgIAxAqAKACZgDQgUApAhAXQgjgGgigMQANgpArgFQARgCAXAEQARACAPAFQAFAugjAMACmA9QAOACAPABAifgjQA1AHANAxQgoANgrABAkGgoQBBgkBJATACNgjQBIgEA0An");
	this.shape_183.setTransform(59.4,68.4);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#000000").ss(1,1,1).p("ADIBEQAFgGABgBQAOgJAEgQQAEgRgJgPQgJgNgQgDQgQgEgOAKQgOAIgFARQgCARAJAOQAFAJAKAGQghgHgigMQAOhEAxACQBuAHAJBKQgFABgGABIgIABQgUADgVABQgKABgKAAQgBgBgBAAgAjTAkQgEgDgFgEQgMgLgBgRQgCgQALgOQALgMAQgCQASgBAMALQAOAMABARQABAQgLAMQgHAKgKADQABAAABABQgBAAgBAAIAAAAQgFAAgEAAQAEgBAFAAAjTAkQACAAACAAQACAAADABQAAAAABAAQADAAABAAQAFAAAEABAirAmQAmgBAngKQgDhFgzgFQhygHgTBJQAiANAkAEAirAmQgCAAgDAAQgBAAgCAAAixAmQABAAACAAQABgBACABACoBBIAbADIAFAAAkRgnQBKgqBXAUAEaACQhBgyhXAJ");
	this.shape_184.setTransform(59.3,68);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149}]}).to({state:[{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153}]},8).to({state:[{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157}]},1).to({state:[{t:this.shape_163},{t:this.shape_162},{t:this.shape_161}]},1).to({state:[{t:this.shape_160},{t:this.shape_158},{t:this.shape_159},{t:this.shape_164}]},2).to({state:[{t:this.shape_155},{t:this.shape_154},{t:this.shape_156},{t:this.shape_153}]},1).to({state:[{t:this.shape_152},{t:this.shape_166},{t:this.shape_150},{t:this.shape_165}]},1).to({state:[{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149}]},9).to({state:[{t:this.shape_155},{t:this.shape_154},{t:this.shape_156},{t:this.shape_167}]},23).to({state:[{t:this.shape_160},{t:this.shape_158},{t:this.shape_159},{t:this.shape_157}]},1).to({state:[{t:this.shape_163},{t:this.shape_162},{t:this.shape_168}]},1).to({state:[{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_164}]},2).to({state:[{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153}]},1).to({state:[{t:this.shape_152},{t:this.shape_166},{t:this.shape_150},{t:this.shape_165}]},1).to({state:[{t:this.shape_166},{t:this.shape_152},{t:this.shape_150},{t:this.shape_169}]},8).to({state:[{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_170}]},58).to({state:[{t:this.shape_150},{t:this.shape_151},{t:this.shape_152},{t:this.shape_149}]},7).to({state:[{t:this.shape_150},{t:this.shape_152},{t:this.shape_151},{t:this.shape_149}]},1).to({state:[{t:this.shape_150},{t:this.shape_152},{t:this.shape_151},{t:this.shape_149}]},1).to({state:[{t:this.shape_150},{t:this.shape_151},{t:this.shape_152},{t:this.shape_149}]},2).to({state:[{t:this.shape_151},{t:this.shape_152},{t:this.shape_150},{t:this.shape_149}]},1).to({state:[{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_170}]},1).to({state:[{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153}]},9).to({state:[{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157}]},1).to({state:[{t:this.shape_163},{t:this.shape_162},{t:this.shape_161}]},1).to({state:[{t:this.shape_160},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171}]},2).to({state:[{t:this.shape_176},{t:this.shape_175},{t:this.shape_156},{t:this.shape_174}]},1).to({state:[{t:this.shape_179},{t:this.shape_178},{t:this.shape_150},{t:this.shape_177}]},1).to({state:[{t:this.shape_155},{t:this.shape_154},{t:this.shape_156},{t:this.shape_180}]},24).to({state:[{t:this.shape_160},{t:this.shape_158},{t:this.shape_159},{t:this.shape_181}]},1).to({state:[{t:this.shape_163},{t:this.shape_162},{t:this.shape_161}]},1).to({state:[{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_182}]},2).to({state:[{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_183}]},1).to({state:[{t:this.shape_152},{t:this.shape_166},{t:this.shape_150},{t:this.shape_184}]},1).to({state:[{t:this.shape_166},{t:this.shape_152},{t:this.shape_150},{t:this.shape_170}]},8).to({state:[{t:this.shape_155},{t:this.shape_154},{t:this.shape_156},{t:this.shape_167}]},48).to({state:[{t:this.shape_160},{t:this.shape_158},{t:this.shape_159},{t:this.shape_157}]},1).to({state:[{t:this.shape_163},{t:this.shape_162},{t:this.shape_168}]},1).to({state:[{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_164}]},2).to({state:[{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153}]},1).to({state:[{t:this.shape_152},{t:this.shape_166},{t:this.shape_150},{t:this.shape_165}]},1).to({state:[{t:this.shape_166},{t:this.shape_152},{t:this.shape_150},{t:this.shape_169}]},8).to({state:[]},41).wait(33));

	// Layer 3
	this.instance_1 = new lib.Tween1_1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(57.7,54.4,1,1,-4.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({startPosition:0},8).to({x:57.8,y:55.2},2).to({x:57.7,y:54.2},3).to({y:54.4},4).to({startPosition:0},6).to({startPosition:0},22).to({y:54.2},1).to({x:57.8,y:55.2},3).to({x:57.7,y:54.4},2).to({startPosition:0},8).to({startPosition:0},5).to({rotation:-4.5,x:57.8},1).to({regX:0.1,regY:0.1,rotation:-4.3,x:58,y:54.5},9).to({scaleX:1,scaleY:1,x:58.1,y:55.8},2).to({regY:0.2,y:52.1},9,cjs.Ease.get(1)).to({startPosition:0},9,cjs.Ease.get(1)).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:-4.4,x:57.7,y:54.4},6,cjs.Ease.get(1)).to({startPosition:0},18).to({startPosition:0},8).to({x:57.8,y:55.2},2).to({x:57.7,y:54.2},3).to({y:54.4},4).to({startPosition:0},6).to({regX:0.1,regY:0.1,rotation:-4.3,x:57.8,y:54.9},3).to({x:57.9,y:51.8},5).to({regX:0,regY:0,rotation:-4.4,x:57.7,y:54.2},6).to({startPosition:0},11).to({x:57.8,y:55.2},3).to({x:57.7,y:54.4},2).to({startPosition:0},8).to({startPosition:0},5).to({rotation:-4.5,x:57.8},1).to({_off:true},102).wait(33));

	// Layer 2
	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#000000").ss(1,1,1).p("Ag9AeQBDASA1gZAingRQDGAPCJgj");
	this.shape_185.setTransform(57.1,113.5);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#C2894C").s().p("Ag8gMQBEARA0gYQgGAXgVAMQgNAEgMAAQgjAAghggg");
	this.shape_186.setTransform(56.9,117.8);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#000000").ss(1,1,1).p("Ag1AjQA5AWA2ggAiwgXQC2AGCrgaQhJAqhkAEQhtAHhHghg");
	this.shape_187.setTransform(56.9,113.6);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AiwgDQC2AFCrgZQhJAphkAFIgkABQhVAAg7gbg");
	this.shape_188.setTransform(56.9,111.6);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#000000").ss(1,1,1).p("AiVgFQA3AeBhgBQBMgFBJgsAgnApQArAQAogVAifgdQCdgFCdgLIgDAUQAPgKAPgMQgNABgOABAifgdIAKAYQgSgKgOgOQALAAALAAg");
	this.shape_189.setTransform(56.8,113.8);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#523030").s().p("Ai1gCIAWAAIAKAXQgSgLgOgMgACcgSIAagCQgPALgQAKg");
	this.shape_190.setTransform(56.8,111.1);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AiTAFIgKgYQCdgFCegKIgEATQhIAshNAGIgDAAQheAAg3geg");
	this.shape_191.setTransform(56.6,112.7);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#000000").ss(1,1,1).p("ACigyIgCAMQAAAAgBABQgPANgPAFACigyIgDANIgCALACig3IAAAFACig3IAVgCQgNARgNAOACggmIgDAMAicgRIAEAMIABACQA4AsBbABQBegDBDhBAidgSIAFANAicgRQAOANAXADAidgSQABAAAAABAgTA3QAYAFAXgGAihghIAEAPAihghIAFAQAijgmIgTABQAOATARAPAijgmIFFgRAijgmIACAF");
	this.shape_192.setTransform(56.8,114.6);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#523030").s().p("Ai2gGIATgBIACAFIAEAOIAGANIABACQgSgPgOgSgACggHIACgMIAAgFIAVgCQgMARgOANg");
	this.shape_193.setTransform(56.8,111.5);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AiVADIgBgCIgFgLQAOAMAXADQgXgDgOgMIgFgQIgCgFIFFgRIAAAFIgDANIADgNIgCAMIgBABIABgBIgDAMIACgLQgPANgPAFQAPgFAPgNIgCALQhDBBheADQhbgBg3gtgAicgLIABABIAFALgAibgKIAAAAgAicgLIgEgPIAFAQIgBgBgAiggagAChgfg");
	this.shape_194.setTransform(56.7,113.9);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#000000").ss(1,1,1).p("ACjg9QACAGgFAKIgCARACggtQgOAPgQAHACjg9IAVgBQgOATgMAPAiSgCQA7A3BcgEQBUgDBFhKAiagXQAXASAlADAgNA9QAQAEASgEAiagXIAIAVAiigtIgVABQAQAWAVAUAiigtIFFgQAiigtQgBAMAJAK");
	this.shape_195.setTransform(56.8,115.2);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#523030").s().p("Ai3gLIAVgBQgBAMAJAKIAIAUQgVgUgQgVgAChgMQAEgKgCgFIAVgCQgNATgNAOg");
	this.shape_196.setTransform(56.8,111.9);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFFFF").s().p("AiSADIgJgUQAYARAkADQgkgDgYgRQgIgKABgMIFFgQQACAGgFAKQgOAPgRAHQARgHAOgPIgDARQhEBKhVADIgLABQhUAAg3g1gACggng");
	this.shape_197.setTransform(56.8,114.6);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#C2894C").s().p("AgQgIQAQAEARgEQgFAPgHABIgCABQgKAAgJgRg");
	this.shape_198.setTransform(57.2,122.2);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#000000").ss(1,1,1).p("ACkgeQhDBZhjABQhtAAg0hFQgKgPgJgRIAOAAIAEAXIABAJAikgSQADgBAJAFQAVALAxAFACng7QAFAHgHANQAJgJAJgLQgJAPgKAOACDgUQARgEARgPIgBAJACng7IAQAAAiogpIFPgS");
	this.shape_199.setTransform(56.8,114.9);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#523030").s().p("AgIgPIAMAAIAFAWIABAJQgKgPgIgQg");
	this.shape_200.setTransform(39.5,112.3);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("AijgJIgBgJIAAAAIABAAIAAAAIAAAAIADABIABAAIAEACIACABIABAAIAAAAQAVALAxAFQgxgFgVgLIAAAAIgBAAIgCgBIgEgCIgBAAIgDgBIAAAAIAAAAIgBAAIAAAAIgEgXIFPgSQAFAHgHANQgRAPgRAEQARgEARgPIgBAJQhDBZhjABIgCAAQhsAAgzhFgAClgng");
	this.shape_201.setTransform(56.8,114.9);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#000000").ss(1,1,1).p("ACqgqQgQASgaAFACqgqQgCAKgHAOACqg9QACAIgCALACqg9IATgBQgNAZgPATAifgTIABANQAAACAAADQA+BFBhgFQBhgFA/hMAifgTQAhARAwAEAiegBQgQgSgOgYIAWgBIFQgRAimgsQABANAGAM");
	this.shape_202.setTransform(56.7,115);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#523030").s().p("Ai8gLIAWgBQABAMAGANIABANIAAAEQgQgSgOgXgACqgKQACgLgDgHIAUgBQgOAYgPATQAIgOACgKg");
	this.shape_203.setTransform(56.7,111.7);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFFFFF").s().p("AiggCIAAgEIgBgNQAhARAwAEQgwgEghgRQgGgNgBgNIFQgQQACAHgCALQgQATgaAFQAagFAQgTQgCALgHAOQg/BMhgAEIgNAAQhZAAg6hAg");
	this.shape_204.setTransform(56.9,115);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#000000").ss(1,1,1).p("ACegNQASgWAQgcIgaACQAJAKgNAQgAB+gSQATgFARgMAicgSQAgARAwADAicgSQgIAJAQAVQA8A7BggIQBagFA8hHAiUAMQgYgXgTgjIAbgBIFKgOAikgvQgFAJANAU");
	this.shape_205.setTransform(56.7,115);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#523030").s().p("Ai/gUIAbgCQgFAKANATQgIAIAQAXQgYgYgTgigACigJQANgQgJgKIAagCQgQAcgSAUg");
	this.shape_206.setTransform(56.7,112.5);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFFFFF").s().p("AiWALQgQgVAIgJQgNgUAFgJIFKgOQAJAKgNAQQgRAMgTAFQATgFARgMIgEAWQg8BHhaAFIgVABQhSAAg1g0gAhOABQgwgDgggRQAgARAwADg");
	this.shape_207.setTransform(56.9,115.1);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#000000").ss(1,1,1).p("ACjg9QACAGgFAKIgCARACggtQgOAPgQAHACjg9IAVgBQgOATgMAPAiagXIAIAVQA7A3BcgEQBUgDBFhKAgNA9QAQAEASgEAiagXQAXASAlADAiigtIgVABQAQAWAVAUAiigtIFFgQAiigtQgBAMAJAK");
	this.shape_208.setTransform(56.8,115.2);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#000000").ss(1,1,1).p("ACigyIgDANQgPANgPAFACigyIgCAMQAAAAgBABIgCALACig3IAVgCQgNARgNAOACig3IAAAFACggmIgDAMAicgRIAEAMIABACQA4AsBbABQBegDBDhBAidgSIAFANAicgRQAOANAXADAidgSQABAAAAABAgTA3QAYAFAXgGAihghIAEAPAihghIAFAQAijgmIgTABQAOATARAPAijgmIFFgRAijgmIACAF");
	this.shape_209.setTransform(56.8,114.6);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FFFFFF").s().p("AiVADIgBgCIgFgLQAOAMAXADQgXgDgOgMIgFgQIgCgFIFFgRIAAAFIgDANIADgNIgCAMIgBABIABgBIgDAMIACgLQgPANgPAFQAPgFAPgNIgCALQhDBBheADQhbgBg3gtgAicgLIABABIAFALgAibgKIAAAAgAibgKIAAAAgAicgLIgEgPIAFAQIgBgBgAiggag");
	this.shape_210.setTransform(56.7,113.9);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#000000").ss(1,1,1).p("AifgdQCdgFCdgLAgnApQArAQAogVAiVgFQA3AeBhgBQBMgFBJgsQAPgKAPgMQgNABgOABIgDAUAifgdIAKAYQgSgKgOgOQALAAALAAg");
	this.shape_211.setTransform(56.8,113.8);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#000000").ss(1,1,1).p("AiwgXQC2AGCrgaQhJAqhkAEQhtAHhHghgAg1AjQA5AWA2gg");
	this.shape_212.setTransform(56.9,113.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_186},{t:this.shape_185}]},153).to({state:[{t:this.shape_188},{t:this.shape_187}]},22).to({state:[{t:this.shape_191},{t:this.shape_190},{t:this.shape_189}]},1).to({state:[{t:this.shape_194},{t:this.shape_193},{t:this.shape_192}]},1).to({state:[{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195}]},1).to({state:[{t:this.shape_201},{t:this.shape_200},{t:this.shape_199}]},1).to({state:[{t:this.shape_204},{t:this.shape_203},{t:this.shape_202}]},1).to({state:[{t:this.shape_207},{t:this.shape_206},{t:this.shape_205}]},1).to({state:[{t:this.shape_207},{t:this.shape_206},{t:this.shape_205}]},16).to({state:[{t:this.shape_204},{t:this.shape_203},{t:this.shape_202}]},30).to({state:[{t:this.shape_201},{t:this.shape_200},{t:this.shape_199}]},1).to({state:[{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_208}]},1).to({state:[{t:this.shape_210},{t:this.shape_193},{t:this.shape_209}]},1).to({state:[{t:this.shape_191},{t:this.shape_190},{t:this.shape_211}]},1).to({state:[{t:this.shape_188},{t:this.shape_212}]},1).to({state:[{t:this.shape_186},{t:this.shape_185}]},1).to({state:[]},54).wait(33));

	// Layer 1
	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#000000").ss(1,1,1).p("AmqBiQAdAEAfCAIAdlcIgNiyQATgNAUgMQCqheEUAzQCagcB5BRIAQDNIAfEUAHnDRQgXgqgDBMQgBAYgBARQgDASgCAMQgDAQgFAGQgbA8AcgQAnmC5QAJgLAIgHQA4gzABBnQAAAegVAQQggARAtAkQAwAlgiAUAAgEMQAJgLAogGADliLQhLAnAABhQAEB1ATBxQgGAQhQAj");
	this.shape_213.setTransform(48.9,68.9);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#000000").ss(2,1,1).p("AGVFuIgOBMQgSBBgeAdQgoA5gvAyQg8A+hHA0Ih6AAQhLgvg4glQglgXgcgVQhHg1gLgbIg7iiIgMghQiOAsgfjcQgUiEBugGIgKh9IgTj5QggAPgmArQAblhGVhiQHchoB+EMQAXBJg5BYQBIAxgTBZIghCxIgiCwIgFAXgAHKBZQA5ATgPBOIgnCPQgLApgtgE");
	this.shape_214.setTransform(49.2,74.7);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.lf(["#323232","#DEB17F"],[0.004,1],0,-9.9,3,9.2).s().p("AgnAqIgKh8IBihcIgdFcQgeh/gdgFg");
	this.shape_215.setTransform(10.2,74.5);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.lf(["#323232","#DEB17F"],[0.004,1],0.3,-6,1.5,7.1).s().p("AghiKIBDBNIghCwIgEAYg");
	this.shape_216.setTransform(95,72.1);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#C2894C").s().p("AkWGpIg7iiIgijYIAdlcIgOiyQATgNAUgMIAXDVQgFAngEAoQgXEUBSFSQAQBEAhAiQhIg1gLgagAG4CZQAFgGADgQQAPgBgWBDQgGAEgDAAQgNAAAVgwgAnFChQgohgAShPQA4g0ACBmQgBAegVARQggAQAtAkQAwAlghAVQgFABgEAAQgTAAgOghgAHFBmIACgqQAEhLAWApQgIBPgOAAQgDAAgDgDgAAlgNIAQAmQghABgSAeg");
	this.shape_217.setTransform(49.5,87.2);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#323232").s().p("AnKBXQggAOgmArQAblfGVhjQHchnB+ELQAXBKg5BWQBIAygTBYIghCxIhFhNIgQjNQh6hQiZAcQkUgyiqBdQgUALgTAOIANCxIhjBcg");
	this.shape_218.setTransform(49.2,32.6);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#DEB17F").s().p("AANJXQhLgvg4glQglgXgcgVQghgjgQhDQhSlSAYkVQADgoAFgmIgWjVQCqheEUAzQCZgcB6BRIAQDNIAeEVIgwD9IgOBMQgSBBgeAdQgoA5gvAyQg8A+hHA0gABhA+QBQgjAGgQQgThwgDh2QAAhhBLgnQhLAnAABhQADB2ATBwQgGAQhQAjgAAnA0QAIgLApgGQgpAGgIALgAAPAWQARgcAigBIgRgngAlQDEQiOAsgfjcQgUiDBugGQAcAEAgB/IAjDXgAnOgwQgSBPAnBhQASApAYgKQAhgUgvglQgtgkAfgRQAWgQAAgeQgBhEgZAAQgNAAgSARgAnfgeQAJgLAIgHQgIAHgJALgAGfDQIAwj9IAFgXQA5ATgPBNIgnCPQgKAlgmAAIgIAAgAHMBiQgDAQgFAGQgaA8AcgQQAWhDgQABIAFgeQATATAKhdQgXgqgDBLIgDApIgFAeIAAAAg");
	this.shape_219.setTransform(48.2,90.5);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#000000").ss(1,1,1).p("AHnAiQgXgqgCBLQgCAYgBASQgCARgDAMQgDAQgFAGQgbA8AcgQAmqhNQAdAEAgB/IAdlcIgOiyQATgNAVgMQCqheETAzQCagcB5BRIAQDNIAfEWAnmAJQAJgKAIgHQA4gzABBnQAAAdgWAQQgfARAtAkQAvAlggAVADmk6QhLAmgBBhQADB2AUBxQgGAPhQAkIj5BSIgEBqIAqg9IDBgPIAPgbIANAbICxgEIAVA+IANhhQhvguhugbAAgBcQAIgLApgGAAjGEIABABIANAlIA4ABIAIgjIABgHIgBABIhMABgAEEIPIAFhhIABgFQg5Bug5AOQgmAMgJgsIhEgBQgOAfgQAHQhYAbg4iDIABAFIALBn");
	this.shape_220.setTransform(48.9,86.5);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("#000000").ss(2,1,1).p("AkUIjIg7ihIgMggQiNArgfjcQgViEBvgGIgKh9IgUj5QggAPglArQAblhGVhiQHchnB+ELQAXBKg5BXQBIAygTBYIghCxIgiCwIgFAYIgwD9AHKBYQA5AUgPBNIgnCQQgLAogtgEAkSIjQABADABABQAPAdA3AqQAEAEAFAEQAcAUAkAYQABABAAAAQA3AkBMAuIB6ABQBHg0A8g+IABAAQAugyAog5IAagmQAMgYAJgiIAPhMAFvH3QABgCABgC");
	this.shape_221.setTransform(49.2,74.8);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.lf(["#323232","#DEB17F"],[0.004,1],0,-9.9,3,9.3).s().p("AgnAqIgKh8IBjhcIgdFdQgfiAgdgFg");
	this.shape_222.setTransform(10.2,74.4);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.lf(["#323232","#DEB17F"],[0.004,1],0.3,-6,1.5,7.1).s().p("AgiiKIBFBNIgiCwIgEAYg");
	this.shape_223.setTransform(94.9,72.1);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#C2894C").s().p("AkUGqIACgBIAHgFIgBgCIgJACIgBABIg7ihIgijXIAdldIgOixQAUgOAUgLIAWDVQgFAmgEAoQgXEVBSFRIAEAWQANAuAWAdIAKALQhCgxgPgggAjNHwQg2gqgPgdQAPAdA2AqgAG4CXQAFgGADgQQAQgBgXBDQgGADgDAAQgNAAAVgvgAnFCeQgohgAThPQA4gzABBmQgBAdgVARQggAQAuAlQAvAkghAVQgEACgFAAQgTAAgOgigAHFBjIADgpQADhLAWApQgIBOgOAAQgDAAgDgDgAAlgPIARAmQgiABgRAdg");
	this.shape_224.setTransform(49.4,87.4);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#DEB17F").s().p("Ai3IDIgJgLIAJAHIBAAtIhAgtIgJgHQgXgdgNguIgEgWQhSlRAXkVQAEgoAFgmIgWjVQCqheEUAzQCZgcB5BRIAQDNIAfEVIgwD8IAwj8IAFgXQA5ATgPBNIgnCPQgLApgtgFIgPBNQgJAigMAYIgaAmQgoA5guAxIAFhhIAAAAIAAgEQg5Btg5AOQgmAMgJgsIhEAAQgOAfgQAGQhYAbg3iDIAAAGIAAgCIALBoIABAEQglgYgcgVgAArGIIgBAAIAOAmIA3ACIAKgqIgCAAIACgGIgCAAIhMACIgBAAIAAABIgBAAgAiXC4IgFBpIArg8IDAgPIAPgbIAOAaICwgDIAWA9IAMhhQhvguhugbgAHMCJQgDAQgFAGQgbA8AcgQQAXhCgPAAIgBAAgAHMCJIAFgeIgFAegAHUBCIgDApQASATAKheQgIgPgFAAQgKAAgCAxgABhBlQBQgjAGgQQgThwgDh3QAAhgBLgnQhLAnAABgQADB3ATBwQgGAQhQAjgAAmBbQAJgLApgGQgpAGgJALgAAPA9QARgdAigBIgRgmgAELINQAugxAog5IAagmIgCADIgYAnQgoA5gvAygAjAH4IAAAAgAlRDrQiNAsgfjdQgViDBvgGQAcAFAgB/IAiDXgAnOgJQgTBPAoBgQARAqAZgKQAhgVgvgkQguglAggQQAVgRABgdQgBhEgZAAQgNAAgSARgAngAIQAKgKAIgHQgIAHgKAKg");
	this.shape_225.setTransform(48.2,86.6);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#323232").s().p("AADL1QhMgug3gkIgMhnIAAgFQA3CDBYgbQAQgHAOgfIBEABQAJAsAmgMQA5gOA5huIAAAFIgGBhQg8A+hHA0gAAuIfIgOglIAAgBIABgBIBMgBIACgBIgCAHIgIAjgAihEuID4hSQBuAbBvAuIgMBhIgWg+IiwAEIgOgbIgPAbIjAAPIgrA9gAnLlPQggAPglArQAblhGVhiQHchnB+ELQAXBKg5BXQBIAygTBYIghCxIhGhNIgQjNQh5hRiZAcQkUgziqBeQgUAMgUANIAOCyIhjBbg");
	this.shape_226.setTransform(49.2,74.8);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("#000000").ss(1,1,1).p("AHnAeQgXgpgCBLQgCAXgBASQgCARgDANQgDAQgFAGQgbA8AcgQAmqhRQAdAFAgB/IAdldIgOixQATgOAVgLQCqheETAzQCagcB5BRIAQDNIAfEVAnmAGQAJgKAIgHQA4gzABBmQAAAdgWARQgfAQAtAlQAvAkggAVADmk+QhLAngBBgQADB3AUBwQgGAPhNAjQAAAAgBAAQgCABAAAAIj5BTQgHAyADA3IAkg8IDHgPIAPgbIANAaICxgDIAaA6IAGhgQhtgshugbAAgBZQAIgLAngGAEEISIAGhlQg5Btg5AOQgmAMgJgsIhEAAQgOAfgQAGQhXAbg4iDIALBsAAkGOIAOAmIA3ACIAKgqg");
	this.shape_227.setTransform(48.9,86.8);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#000000").ss(2,1,1).p("AGVFpIgPBNQgIAfgLAXQgBABAAABQgQAfgLAQQgoA5gvAxQg8A/hHAzIh6AAQhLgvg4gkQglgYgbgVQhCgxgPgjQgCgCgBgCIg7iiIgMghQiNAsgfjdQgViEBvgGIgKh8IgUj5QggAPglAqQAblgGVhiQHchoB+EMQAXBJg5BYQBIAxgTBZIghCwIgiCxIgFAXgAHKBVQA5ATgPBOIgnCPQgLApgtgF");
	this.shape_228.setTransform(49.2,75.1);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#C2894C").s().p("AkTGpIgDgFIg7iiIgijXIAdlcIgOiyQAUgNAUgMIAWDVQgFAmgEAoQgUDsA5EYQAKAxAMAyIAHAcQARA4AaAbQhCgxgPgjgAG4CVQAFgGADgQQAQAAgXBCQgGAEgDAAQgNAAAVgwgAnFCdQgohhAThPQA4gzABBnQgBAdgVAQQggARAuAkQAvAlghAVQgEACgFAAQgTAAgOgigAHFBiIADgqQADhLAWAqQgIBOgOAAQgDAAgDgDgAAlgRIARAmQgiACgRAdg");
	this.shape_229.setTransform(49.4,87.6);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#DEB17F").s().p("AiCHFIAMBsQglgYgbgVQgagbgRg4IgHgcQgMgygKgxQg5kYAUjrQAEgoAFgmIgWjVQCqheEUAzQCZgcB5BRIAQDNIAfEVIAFgXQA5ATgPBNIgnCPQgLApgtgFIAwj8IgwD8IgPBNQgIAfgLAXIgBACQgQAfgLAQQgoA5gvAxIAGhlQg5Btg5AOQgmAMgIgsIhFAAQgOAfgQAGQgOAFgOAAQhFAAguhtgAAqGOIAOAmIA4ACIAJgqgAiXC2QgHAyACA3IAkg8IDHgPIAPgbIAOAaICwgDIAaA6IAGhgQhtgshugbgAHMCHQgDAQgFAGQgbA8AcgQQAXhDgQABIAFgeQASATAKheQgWgpgDBLIgDApIgFAeIAAAAgABlBiIgCAAIgCABIACgBIACAAQBMgjAGgPQgThwgDh3QAAhgBLgnQhLAnAABgQADB3ATBwQgGAPhMAjgAAmBZQAJgLAngGQgnAGgJALgAAPA7QARgdAigBIgRgmgAlRDpQiNAsgfjdQgViDBvgGQAcAFAgB/IAiDXgAnOgLQgTBPAoBgQARAqAZgKQAhgVgvgkQguglAggQQAVgRABgdQgBhEgZAAQgNAAgSARgAngAGQAKgKAIgHQgIAHgKAKg");
	this.shape_230.setTransform(48.2,86.8);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#323232").s().p("AADL5QhLgvg4gkIgMhsQA4CDBXgbQAQgGAOgfIBFAAQAIAsAmgMQA5gOA5htIgGBlQg8A/hHAzgAAuIpIgOgmIBPgCIgJAqgAihErID4hTQBuAbBtAsIgGBgIgag6IiwADIgOgaIgPAbIjHAPIgkA8QgCg3AHgygAnLlSQggAPglAqQAblgGVhiQHchoB+EMQAXBJg5BYQBIAxgTBZIghCwIhGhMIgQjNQh5hRiZAcQkUgziqBeQgUALgUAOIAOCxIhjBcg");
	this.shape_231.setTransform(49.2,75.1);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#000000").ss(1,1,1).p("AHnAbQgXgpgCBLQgCAXgBASQgCARgDANQgDAQgFAGQgbA8AcgQAmqhUQAdAFAgB/IAdldIgOixQATgOAVgLQCqheETAzQCagcB5BRIAQDNIAfEVAnmADQAJgKAIgHQA4gzABBmQAAAdgWARQgfAQAtAlQAvAkggAVADmlBQhLAngBBgQADB3AUBwQgGAQhQAjIj6BOQgJAzAHA7QAOgkAUgYIDIgPIAPgbIANAaIC2gFIAXA8IAGhjQhvgphugbAAgBWQAIgLApgGAEFIVIAGhlQg6Btg5AOQgmAMgIgsIhEAAQgOAfgQAGQhYAbg4iDIAMBsAAkGRIAOAmIA4ACIAJgqg");
	this.shape_232.setTransform(48.9,87.1);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#000000").ss(2,1,1).p("AGVFmIgPBNQgFARgFAOQgUA4gQAWQgpA5guAxQg8A/hHAzIh6AAQhMgvg4gkQgkgYgcgVQg/gvgUguQgBgBAAAAIg7iiIgMghQiNAsgfjdQgViEBvgGIgKh8IgUj5QggAPglAqQAblgGVhiQHchoB+EMQAXBJg5BYQBIAxgTBZIghCwIgiCxIgFAXgAHKBSQA5ATgPBOIgnCPQgLApgtgF");
	this.shape_233.setTransform(49.2,75.4);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#C2894C").s().p("AkVGiIgBgBIg7iiIgijXIAdlcIgOiyQAUgNAUgMIAWDVQgFAmgEAoQgXEVBSFSIADAKIAAAAIAAADQARBIAeAgQg/gvgUgvgAkJGxIAAgBIABgBIACgBIgBAAIgDgFIAAAAIgBgCIAAgBIgBgCIgGADIgBgBQAGANAEgCgAG4CSQAFgGADgQQAQAAgXBCQgGAEgDAAQgNAAAVgwgAnFCaQgohhAThPQA4gzABBnQgBAdgVAQQggARAuAkQAvAlghAVQgEACgFAAQgTAAgOgigAHFBfIADgqQADhLAWAqQgIBOgOAAQgDAAgDgDgAAlgUIARAmQgiACgRAdg");
	this.shape_234.setTransform(49.4,87.9);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#DEB17F").s().p("AiBHIIALBsQgkgYgcgVQgegfgRhJIAAgCIAAgBIgDgKQhSlRAXkVQAEgoAFgmIgWjVQCqheEUAzQCZgcB5BRIAQDNIAfEVIAFgXQA5ATgPBNIgnCPQgLApgtgFIAwj8IgwD8IgPBNQgFARgFAOQgUA4gQAWQgpA5guAxIAGhlQg5Btg5AOQgmAMgJgsIhEAAQgOAfgQAGQgOAFgPAAQhEAAguhtgAArGRIAOAmIA3ACIAKgqgAiZCuQgJAzAHA7QAOgkAVgYIDHgPIAPgbIAOAaIC1gFIAXA8IAGhjQhvgphugbgAHMCEQgDAQgFAGQgbA8AcgQQAXhDgQABIAFgeQASATAKheQgWgpgDBLIgDApIgFAeIAAAAgABhBgQBQgjAGgQQgThwgDh3QAAhgBLgnQhLAnAABgQADB3ATBwQgGAQhQAjgAAmBWQAJgLApgGQgpAGgJALgAAPA4QARgdAigBIgRgmgAkHGtIABACIAGgEIABADIAAAAIABADIAAAAIADAEIABABIgCABIgBAAIAAABIgBABQgEAAgFgMgAlRDmQiNAsgfjdQgViDBvgGQAcAFAgB/IAiDXgAnOgOQgTBPAoBgQARAqAZgKQAhgVgvgkQguglAggQQAVgRABgdQgBhEgZAAQgNAAgSARgAngADQAKgKAIgHQgIAHgKAKg");
	this.shape_235.setTransform(48.2,87.1);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#323232").s().p("AAEL8QhMgvg4gkIgLhsQA3CDBYgbQAQgGAOgfIBEAAQAJAsAmgMQA5gOA5htIgGBlQg8A/hHAzgAAvIsIgOgmIBPgCIgKAqgAijEjID6hOQBuAbBvApIgGBjIgXg8Ii1AFIgOgaIgPAbIjHAPQgVAYgOAkQgHg7AJgzgAnLlVQggAPglAqQAblgGVhiQHchoB+EMQAXBJg5BYQBIAxgTBZIghCwIhGhMIgQjNQh5hRiZAcQkUgziqBeQgUALgUAOIAOCxIhjBcg");
	this.shape_236.setTransform(49.2,75.4);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f().s("#000000").ss(1,1,1).p("AHnAYQgXgqgCBLQgCAYgBASQgCARgDAMQgDAQgFAGQgbA8AcgQAmqhXQAdAEAgB/IAdlcIgOiyQATgNAVgMQCqheETAzQCagcB5BRIAQDNIAfEWAnmAAQAJgLAIgHQA4gzABBnQAAAdgWAQQgfARAtAkQAvAlggAVADmlEQhLAmgBBhQADB2AUBxQgGAPhQAkIj+BLQgJAwAKBBQAJgqAZgZIDJgJIAPgbIANAbIC5gJIAWBAQALg6gDgrQhzgnhugbAAgBSQAIgLApgGAEFIZIAGhlQg5Btg5AOQgmAMgJgsIhEAAQgOAfgPAGQhZAbg3iDIALBsAAlGUIAOAmIA3ABIAKgqg");
	this.shape_237.setTransform(48.9,87.5);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#000000").ss(2,1,1).p("AGVFiIgPBNQgBAGgBAFIAAAAQgSBQgaAZQgoA5gvAyQg8A+hHA0Ih6gBQhLgug4glQglgYgbgUQhIg2gQg5Ig4iZIgMghQiNAsgfjdQgViEBvgGIgKh8IgUj5QggAPglAqQAblgGVhiQHchoB+EMQAXBJg5BYQBIAxgTBZIghCwIgiCxIgFAXgAHKBOQA5ATgPBOIgnCPQgLApgtgF");
	this.shape_238.setTransform(49.2,75.8);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#C2894C").s().p("AkZGVIg4iZIgijYIAdlcIgOixQAUgOAUgLIAWDUQgFAmgEAoQgXEWBSFRIABAFQASBWAgAhQhIg1gQg5gAG4CPQAFgGADgRQAQAAgXBDQgGADgDAAQgNAAAVgvgAnFCWQgohhAThPQA4gyABBmQgBAdgVARQggAQAuAlQAvAkghAVQgEACgFAAQgTAAgOgigAHFBbIADgpQADhMAWAqQgIBOgOAAQgDAAgDgDgAAlgYIARAnQgiABgRAdg");
	this.shape_239.setTransform(49.4,88.3);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#DEB17F").s().p("AiBHMIAMBsQglgYgbgVQggghgShWIgBgFQhSlSAXkVQAEgoAFgmIgWjVQCqheEUAzQCZgcB5BRIAQDNIAfEWIAFgYQA5AUgPBMIgnCQQgLAogtgEIAwj8IgwD8IgPBMIgCALIAAABQgSBQgaAZQgoA5gvAxIAGhlQg5Btg5AOQgmAMgIgsIhFAAQgOAfgPAGQgPAFgOAAQhFAAguhtgAArGUIAOAmIA4ABIAJgqgAidCoQgJAwAKBBQAKgqAYgZIDJgJIAPgbIAOAbIC4gJIAWBAQALg6gDgrQhzgnhugbgAHMCAQgDAQgFAGQgbA8AcgQQAXhCgQAAIAFgdQASATAKheQgWgqgDBLIgDAqIgFAdIAAAAgABhBdQBQgkAGgPQgThxgDh2QAAhhBLgmQhLAmAABhQADB2ATBxQgGAPhQAkgAAmBSQAJgLApgGQgpAGgJALgAAPA1QARgdAigCIgRgmgAlRDjQiNArgfjcQgViDBvgGQAcAEAgB/IAiDXgAnOgSQgTBPAoBhQARApAZgJQAhgVgvglQgugkAggRQAVgQABgdQgBhFgZAAQgNAAgSARgAngAAQAKgLAIgHQgIAHgKALg");
	this.shape_240.setTransform(48.2,87.5);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#323232").s().p("AAEL/QhLgug4glIgMhrQA4CDBYgbQAPgHAOgfIBFABQAIAsAmgMQA5gOA5huIgGBmQg8A+hHA0gAAvIuIgOgmIBPgCIgJAqgAinEdID+hMQBuAbBzAoQADAqgLA6IgWhAIi4AJIgOgaIgPAbIjJAIQgYAZgKAqQgKhAAJgwgAnLlZQggAPglAqQAblgGVhiQHchoB+EMQAXBJg5BYQBIAxgTBZIghCwIhGhMIgQjNQh5hRiZAcQkUgziqBeQgUALgUAOIAOCxIhjBcg");
	this.shape_241.setTransform(49.2,75.8);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#000000").ss(1,1,1).p("AHnAYQgXgqgCBLQgCAYgBASQgCARgDAMQgDAQgFAGQgbA8AcgQAmqhXQAdAEAgB/IAdlcIgOiyQATgNAVgMQCqheETAzQCagcB5BRIAQDNIAfEWAnmAAQAJgLAIgHQA4gzABBnQAAAdgWAQQgfARAtAkQAvAlggAVAAgBSQAIgLApgGADmlEQhLAmgBBhQADB2AUBxQgGAPhQAkIj+BLQgJAwAKBBQAJgqAZgZIDJgJIAPgbIANAbIC5gJIAWBAQALg6gDgrQhzgnhugbAAlGUIAOAmIA3ABIAKgqgAEFIZIAGhlQg5Btg5AOQgmAMgJgsIhEAAQgOAfgPAGQhZAbg3iDIALBs");
	this.shape_242.setTransform(48.9,87.5);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f().s("#000000").ss(2,1,1).p("AGVFiIgPBNQgBAGgBAFIAAAAQgSBQgaAZQgoA5gvAyQg8A+hHA0Ih6gBQhLgug4glQglgYgbgUQhIg2gQg5Ig4iZIgMghQiNAsgfjdQgViEBvgGIgKh8IgUj5QggAPglAqQAblgGVhiQHchoB+EMQAXBJg5BYQBIAxgTBZIghCwIgiCxQA5ATgPBOIgnCPQgLApgtgFgAHKBOIgFAXIgwD9");
	this.shape_243.setTransform(49.2,75.8);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#DEB17F").s().p("AiBHMIAMBsQglgYgbgVQggghgShWIgBgFQhSlSAXkVQAEgoAFgmIgWjVQCqheEUAzQCZgcB5BRIAQDNIAfEWIAFgYQA5AUgPBMIgnCQQgLAogtgEIAwj8IgwD8IgPBMIgCALIAAABQgSBQgaAZQgoA5gvAxIAGhlQg5Btg5AOQgmAMgIgsIhFAAQgOAfgPAGQgPAFgOAAQhFAAguhtgAArGUIAOAmIA4ABIAJgqgABhBdIj+BLQgJAwAKBBQAKgqAYgZIDJgJIAPgbIAOAbIC4gJIAWBAQALg6gDgrQhzgnhugbQBQgkAGgPQgThxgDh2QAAhhBLgmQhLAmAABhQADB2ATBxQgGAPhQAkIAAAAgAHMCAQgDAQgFAGQgbA8AcgQQAXhCgQAAIAFgdQASATAKheQgWgqgDBLIgDAqIgFAdIAAAAgAAmBSQAJgLApgGQgpAGgJALgAAPA1QARgdAigCIgRgmgAlRDjQiNArgfjcQgViDBvgGQAcAEAgB/IAiDXgAnOgSQgTBPAoBhQARApAZgJQAhgVgvglQgugkAggRQAVgQABgdQgBhFgZAAQgNAAgSARgAngAAQAKgLAIgHQgIAHgKALg");
	this.shape_244.setTransform(48.2,87.5);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f().s("#000000").ss(1,1,1).p("AHnAbQgXgpgCBLQgCAXgBASQgCARgDANQgDAQgFAGQgbA8AcgQAmqhUQAdAFAgB/IAdldIgOixQATgOAVgLQCqheETAzQCagcB5BRIAQDNIAfEVAnmADQAJgKAIgHQA4gzABBmQAAAdgWARQgfAQAtAlQAvAkggAVAAgBWQAIgLApgGADmlBQhLAngBBgQADB3AUBwQgGAQhQAjIj6BOQgJAzAHA7QAOgkAUgYIDIgPIAPgbIANAaIC2gFIAXA8IAGhjQhvgphugbAAkGRIAOAmIA4ACIAJgqgAEFIVIAGhlQg6Btg5AOQgmAMgIgsIhEAAQgOAfgQAGQhYAbg4iDIAMBs");
	this.shape_245.setTransform(48.9,87.1);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#000000").ss(2,1,1).p("AGVFmIgPBNQgFARgFAOQgUA4gQAWQgpA5guAxQg8A/hHAzIh6AAQhMgvg4gkQgkgYgcgVQg/gvgUguQgBgBAAAAIg7iiIgMghQiNAsgfjdQgViEBvgGIgKh8IgUj5QggAPglAqQAblgGVhiQHchoB+EMQAXBJg5BYQBIAxgTBZIghCwIgiCxQA5ATgPBOIgnCPQgLApgtgFgAHKBSIgFAXIgwD9");
	this.shape_246.setTransform(49.2,75.4);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#DEB17F").s().p("AiBHIIALBsQgkgYgcgVQgegfgRhJIAAgCIAAgBIgDgKQhSlRAXkVQAEgoAFgmIgWjVQCqheEUAzQCZgcB5BRIAQDNIAfEVIAFgXQA5ATgPBNIgnCPQgLApgtgFIAwj8IgwD8IgPBNQgFARgFAOQgUA4gQAWQgpA5guAxIAGhlQg5Btg5AOQgmAMgJgsIhEAAQgOAfgQAGQgOAFgPAAQhEAAguhtgAArGRIAOAmIA3ACIAKgqgABhBgIj6BOQgJAzAHA7QAOgkAVgYIDHgPIAPgbIAOAaIC1gFIAXA8IAGhjQhvgphugbQBQgjAGgQQgThwgDh3QAAhgBLgnQhLAnAABgQADB3ATBwQgGAQhQAjIAAAAgAHMCEQgDAQgFAGQgbA8AcgQQAXhDgQABIAFgeQASATAKheQgWgpgDBLIgDApIgFAeIAAAAgAAmBWQAJgLApgGQgpAGgJALgAAPA4QARgdAigBIgRgmgAkHGtIABACIAGgEIABADIAAAAIABADIAAAAIADAEIABABIgCABIgBAAIAAABIgBABQgEAAgFgMgAlRDmQiNAsgfjdQgViDBvgGQAcAFAgB/IAiDXgAnOgOQgTBPAoBgQARAqAZgKQAhgVgvgkQguglAggQQAVgRABgdQgBhEgZAAQgNAAgSARgAngADQAKgKAIgHQgIAHgKAKg");
	this.shape_247.setTransform(48.2,87.1);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("#000000").ss(1,1,1).p("AHnAeQgXgpgCBLQgCAXgBASQgCARgDANQgDAQgFAGQgbA8AcgQAmqhRQAdAFAgB/IAdldIgOixQATgOAVgLQCqheETAzQCagcB5BRIAQDNIAfEVAnmAGQAJgKAIgHQA4gzABBmQAAAdgWARQgfAQAtAlQAvAkggAVADmk+QhLAngBBgQADB3AUBwQgGAPhNAjQAAAAgBAAQgCABAAAAIj5BTQgHAyADA3IAkg8IDHgPIAPgbIANAaICxgDIAaA6IAGhgQhtgshugbAAgBZQAIgLAngGAAkGOIAOAmIA3ACIAKgqgAEEISIAGhlQg5Btg5AOQgmAMgJgsIhEAAQgOAfgQAGQhXAbg4iDIALBs");
	this.shape_248.setTransform(48.9,86.8);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f().s("#000000").ss(2,1,1).p("AGVFpIgPBNQgIAfgLAXQgBABAAABQgQAfgLAQQgoA5gvAxQg8A/hHAzIh6AAQhLgvg4gkQglgYgbgVQhCgxgPgjQgCgCgBgCIg7iiIgMghQiNAsgfjdQgViEBvgGIgKh8IgUj5QggAPglAqQAblgGVhiQHchoB+EMQAXBJg5BYQBIAxgTBZIghCwIgiCxQA5ATgPBOIgnCPQgLApgtgFgAHKBVIgFAXIgwD9");
	this.shape_249.setTransform(49.2,75.1);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#DEB17F").s().p("AiCHFIAMBsQglgYgbgVQgagbgRg4IgHgcQgMgygKgxQg5kYAUjrQAEgoAFgmIgWjVQCqheEUAzQCZgcB5BRIAQDNIAfEVIAFgXQA5ATgPBNIgnCPQgLApgtgFIAwj8IgwD8IgPBNQgIAfgLAXIgBACQgQAfgLAQQgoA5gvAxIAGhlQg5Btg5AOQgmAMgIgsIhFAAQgOAfgQAGQgOAFgOAAQhFAAguhtgAAqGOIAOAmIA4ACIAJgqgABhBjIj4BTQgHAyACA3IAkg8IDHgPIAPgbIAOAaICwgDIAaA6IAGhgQhtgshugbIACgBIACAAQBMgjAGgPQgThwgDh3QAAhgBLgnQhLAnAABgQADB3ATBwQgGAPhMAjIgCAAIgCABIAAAAgAHMCHQgDAQgFAGQgbA8AcgQQAXhDgQABIAFgeQASATAKheQgWgpgDBLIgDApIgFAeIAAAAgAAmBZQAJgLAngGQgnAGgJALgAAPA7QARgdAigBIgRgmgAlRDpQiNAsgfjdQgViDBvgGQAcAFAgB/IAiDXgAnOgLQgTBPAoBgQARAqAZgKQAhgVgvgkQguglAggQQAVgRABgdQgBhEgZAAQgNAAgSARgAngAGQAKgKAIgHQgIAHgKAKg");
	this.shape_250.setTransform(48.2,86.8);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f().s("#000000").ss(1,1,1).p("AHnAgQgXgqgCBLQgCAYgBASQgCARgDAMQgDAQgFAGQgbA8AcgQAmqhPQAdAEAgB/IAdlcIgOiyQATgNAVgMQCqheETAzQCagcB5BRIAQDNIAfEWAnmAHQAJgKAIgHQA4gzABBnQAAAdgWAQQgfARAtAkQAvAlggAVAAgBaQAIgLApgGADmk8QhLAmgBBhQADB2AUBxQgGAPhQAkIj5BSIgEBqIAqg9IDBgPIAPgbIANAbICxgEIAVA+IANhhQhvguhugbAAjGIIAOAmIA4ABIAJgqIgBABIhMABgAEEIRIAGhmQg5Bug5AOQgmAMgJgsIhEgBQgOAfgQAHQhYAbg4iDIAMBs");
	this.shape_251.setTransform(48.9,86.7);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("#000000").ss(2,1,1).p("AkUIhIg7ihIgMggQiNArgfjcQgViEBvgGIgKh9IgUj5QggAPglArQAblhGVhiQHchnB+ELQAXBKg5BXQBIAygTBYIghCxIgiCwQA5AUgPBNIgnCQQgLAogtgEAHKBWIgFAYIgwD9AkSImQAPAgBCAyQAcAUAlAZQA3AkBMAuIB6ABQBHg0A8g+QAvgyAog5IAYgmQANgaAKgkIAPhM");
	this.shape_252.setTransform(49.2,75);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#C2894C").s().p("AkUGqQAFgCAEgEIgBgCIgKADIg7ihIgijXIAdldIgOixQAUgOAUgLIAWDVQgFAmgEAoQgXEVBSFRIAEAWQAQA4AdAeQhCgxgPgggAG4CXQAFgGADgQQAQgBgXBDQgGADgDAAQgNAAAVgvgAnFCeQgohgAThPQA4gzABBmQgBAdgVARQggAQAuAlQAvAkghAVQgEACgFAAQgTAAgOgigAHFBjIADgpQADhLAWApQgIBOgOAAQgDAAgDgDgAAlgPIARAmQgiABgRAdg");
	this.shape_253.setTransform(49.4,87.4);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#DEB17F").s().p("AiCHEIAMBsQglgZgcgUQgdgfgQg3IgEgWQhSlSAXkVQAEgoAFgmIgWjVQCqheEUAzQCZgcB5BRIAQDNIAfEWIAFgYQA5AUgPBMIgnCQQgLAogtgEIAwj8IgwD8IgPBMQgKAkgNAaIgYAmQgoA5gvAyIAGhmQg5Bug5AOQgmAMgJgsIhEgBQgOAfgQAHQgOAFgOAAQhFAAguhtgAApGDIACAEIgBABIAOAmIA3ABIAKgqIgCABIABgGgAiXC3IgFBqIArg9IDAgPIAPgbIAOAbICwgEIAWA+IAMhhQhvguhugbgAHMCIQgDAQgFAGQgbA8AcgQQAXhCgQAAIAFgdQASATAKheQgWgqgDBLIgDAqIgFAdIAAAAgABhBlQBQgkAGgPQgThxgDh2QAAhhBLgmQhLAmAABhQADB2ATBxQgGAPhQAkgAAmBaQAJgLApgGQgpAGgJALgAAPA9QARgdAigCIgRgmgAlRDrQiNArgfjcQgViDBvgGQAcAEAgB/IAiDXgAnOgKQgTBPAoBhQARApAZgJQAhgVgvglQgugkAggRQAVgQABgdQgBhEgZAAQgNAAgSAQgAngAHQAKgKAIgHQgIAHgKAKg");
	this.shape_254.setTransform(48.2,86.7);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#323232").s().p("AADL3QhMgug3gkIgMhsQA3CDBYgbQAQgHAOgfIBEABQAJAsAmgMQA5gOA5huIgGBmQg8A+hHA0gAAuIjIgOgmIABgBIBMgBIACgBIgKAqgAihEsID4hSQBuAbBvAuIgMBhIgWg+IiwAEIgOgbIgPAbIjAAPIgrA9gAnLlRQggAPglArQAblhGVhiQHchnB+ELQAXBKg5BXQBIAygTBYIghCxIhGhNIgQjNQh5hRiZAcQkUgziqBeQgUAMgUANIAOCyIhjBbg");
	this.shape_255.setTransform(49.2,75);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#000000").ss(1,1,1).p("AHnAjQgXgqgCBLQgCAYgBASQgCARgDAMQgDAQgFAGQgbA8AcgQAmqhMQAdAEAgB/IAdlcIgOiyQATgNAVgMQCqheETAzQCagcB5BRIAQDNIAfEWAnmAKQAJgKAIgHQA4gzABBnQAAAdgWAQQgfARAtAkQAvAlggAVAAgBdQAIgLApgGADmk5QhLAmgBBhQADB2AUBxQgGAPhQAkIj5BSIgEBqIAqg9IDBgPIAPgbIANAbICxgEIAVA+IANhhQhvguhugbAAjGGIAOAmIA3ABIAKgqgAEDIPIAGhmQg4Bug5ANQgnAMgIgsIhFAAQgOAfgQAGQhYAbg3iDIAMBs");
	this.shape_256.setTransform(48.9,86.4);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f().s("#000000").ss(2,1,1).p("AGVFtIgPBNQgSBBgdAdQgpA5guAyQg8A+hHA0Ih7gBQhLgug4gkQgkgZgcgUQhIg2gLgaIg7iiIgMghQiNAsgfjdQgViEBvgGIgKh8IgUj5QggAPglAqQAblgGVhiQHchoB+EMQAXBJg5BYQBIAxgTBZIghCwIgiCxQA5ATgPBOIgnCPQgLApgtgFgAHKBZIgFAXIgwD9");
	this.shape_257.setTransform(49.2,74.7);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#C2894C").s().p("AkWGoIg7ihIgijYIAdlcIgOixQAUgOAUgLIAWDUQgFAmgEAoQgXEWBSFRQAQBEAhAjQhIg2gLgbgAG4CaQAFgGADgRQAQAAgXBDQgGADgDAAQgNAAAVgvgAnFChQgohhAThPQA4gyABBmQgBAdgVARQggAQAuAlQAvAkghAVQgEACgFAAQgTAAgOgigAHFBmIADgpQADhMAWAqQgIBOgOAAQgDAAgDgDgAAlgNIARAnQgiABgRAdg");
	this.shape_258.setTransform(49.4,87.2);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#323232").s().p("AACL0QhLgug4gkIgMhsQA4CDBYgbQAPgGAPggIBEABQAIAsAngMQA5gOA4huIgFBmQg8A+hHA0gAAtIgIgOgmIBPgCIgJAqgAihEvID4hTQBuAbBvAuIgMBhIgWg9IiwADIgOgaIgPAbIjAAPIgrA8gAnLlOQggAPglAqQAblgGVhiQHchoB+EMQAXBJg5BYQBIAxgTBZIghCwIhGhMIgQjNQh5hRiZAcQkUgziqBeQgUALgUAOIAOCxIhjBcg");
	this.shape_259.setTransform(49.2,74.7);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#DEB17F").s().p("AiDHBIAMBsQgkgYgcgVQghgigQhEQhSlSAXkVQAEgoAFgmIgWjVQCqheEUAzQCZgcB5BRIAQDNIAfEWIAFgYQA5AUgPBMIgnCQQgLAogtgEIAwj8IgwD8IgPBMQgSBCgdAdQgpA5guAyIAFhmQg4Bug5ANQgnAMgIgsIhEAAQgPAfgPAGQgOAFgPAAQhFAAguhtgAApGGIAOAmIA4ABIAJgqgABhBoIj4BSIgFBqIArg9IDAgPIAPgbIAOAbICwgEIAWA+IAMhhQhvguhugbQBQgkAGgPQgThxgDh2QAAhhBLgmQhLAmAABhQADB2ATBxQgGAPhQAkIAAAAgAHMCLQgDAQgFAGQgbA8AcgQQAXhCgQAAIAFgdQASATAKheQgWgqgDBLIgDAqIgFAdIAAAAgAAmBdQAJgLApgGQgpAGgJALgAAPBAQARgdAigCIgRgmgAlRDuQiNArgfjcQgViDBvgGQAcAEAgB/IAiDXgAnOgHQgTBPAoBhQARApAZgJQAhgVgvglQgugkAggRQAVgQABgdQgBhFgZAAQgNAAgSARgAngAKQAKgKAIgHQgIAHgKAKg");
	this.shape_260.setTransform(48.2,86.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213}]}).to({state:[{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220}]},153).to({state:[{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_223},{t:this.shape_222},{t:this.shape_228},{t:this.shape_227}]},22).to({state:[{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_223},{t:this.shape_222},{t:this.shape_233},{t:this.shape_232}]},1).to({state:[{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_223},{t:this.shape_222},{t:this.shape_238},{t:this.shape_237}]},1).to({state:[{t:this.shape_241},{t:this.shape_244},{t:this.shape_239},{t:this.shape_223},{t:this.shape_222},{t:this.shape_243},{t:this.shape_242}]},16).to({state:[{t:this.shape_236},{t:this.shape_247},{t:this.shape_234},{t:this.shape_223},{t:this.shape_222},{t:this.shape_246},{t:this.shape_245}]},30).to({state:[{t:this.shape_231},{t:this.shape_250},{t:this.shape_229},{t:this.shape_223},{t:this.shape_222},{t:this.shape_249},{t:this.shape_248}]},1).to({state:[{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_223},{t:this.shape_222},{t:this.shape_252},{t:this.shape_251}]},1).to({state:[{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_223},{t:this.shape_222},{t:this.shape_257},{t:this.shape_256}]},1).to({state:[]},61).wait(33));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.6,-2,107.8,153.5);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("_2Audiomp3copy");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(288));

	// HEAD
	this.instance = new lib.Symbol2_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(899.5,195.7,1,1,0,0,0,54.2,151.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:19},20).to({regX:54.3,rotation:-4.5,x:899.6,startPosition:27},8,cjs.Ease.get(0.99)).to({regX:54.4,rotation:-4.3,x:899.7,startPosition:48},21).to({regX:54.3,rotation:-4.5,x:899.6,startPosition:58},10).to({regX:54.2,rotation:0,x:899.5,startPosition:65},7,cjs.Ease.get(1)).to({startPosition:97},32).to({y:196.1,startPosition:99},2).to({y:193.7,startPosition:104},5,cjs.Ease.get(1)).to({rotation:1.5,x:899.6,y:195.7,startPosition:109},5,cjs.Ease.get(1)).to({startPosition:141},32).to({regX:54.4,rotation:-1.5,x:899.8,startPosition:149},8,cjs.Ease.get(1)).wait(138));

	// Layer 1
	this.instance_1 = new lib.HAND_1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(1004,547.9,1,1,0,0,0,25.6,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(130).to({_off:false},0).to({startPosition:0},4).to({regY:0.1,rotation:0.9,x:1007.6,y:548},8,cjs.Ease.get(1)).to({regX:25.7,regY:0,rotation:0,x:1001.7,y:547.9},9,cjs.Ease.get(1)).to({regX:25.6,rotation:-1.5,x:1004},11,cjs.Ease.get(1)).to({rotation:0},13,cjs.Ease.get(1)).to({startPosition:0},6).to({startPosition:0},4).to({regY:0.1,rotation:0.9,x:1007.6,y:548},8,cjs.Ease.get(1)).to({regX:25.7,regY:0,rotation:0,x:1001.7,y:547.9},9,cjs.Ease.get(1)).to({regX:25.6,rotation:-1.5,x:1004},11,cjs.Ease.get(1)).to({rotation:0},13,cjs.Ease.get(1)).wait(62));

	// Layer 4
	this.instance_2 = new lib.HAND_1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(779.5,597.6,1,1,0,0,180,25.6,49.7);
	this.instance_2._off = true;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AAhF/IAHAVQAoAvAQgvQgIglgIglQgYhogchmIgSjiQgFhEAmAUQAcATArBFIAtCLQAHAKAGAIQAlArAighIg4kgIiLjzAiFAMQALBLAXBYQAUA/AWA9AhDAUQALBPAcBYIA9DEAjAAFIAUB0IA7CyAjfmpQgQDWgDDYQAAADAAADQALA5AOAwQAiBsA2A1IAQAWQAKAUAMALQAMALAOACQAOABABgOQAAgLgHgUIAmBPQALAdASADQATgBAEga");
	this.shape.setTransform(763,596.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C2894C").s().p("AA9DRQgZiPgZhCQhWiQgWh5ICKDzIA5EgIgFAAQgWAAgKg5g");
	this.shape_1.setTransform(777.5,580.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DEB180").s().p("AAoG/IgHgVIg9jEQgchYgLhPQALBPAcBYIA9DEQgEAagTABQgSgDgLgdIgmhPQAHAUAAALQgBAOgOgBQgOgCgMgLQgMgLgKgUIg7iyIgUh0IAUB0IA7CyIgQgWQg2g1gihsQgOgwgLg5IAAgGQADjYAQjWIAGgQQAhhFBlgCQBVAJAuBNQAWB5BWCQQAZBDAZCOQAMA/AZgGQgiAhglgrIgNgSIgtiLQgrhFgcgTQgmgUAFBEIASDiQAcBmAXBoIARBKQgIAXgOAAQgOAAgUgXgAhjDaQAUA/AWA9QgWg9gUg/QgXhYgLhLQALBLAXBYg");
	this.shape_2.setTransform(763,591.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(2,1,1).p("AjTnIQgcEeAVE8QARBzDVDBQAdAXASgPQABgBABgCQAAAAAAAAQAqAiAVgZQAIgJgBgMAAQnJQAlA8gHBAQACAGADAGIBEBVIBiCHQAWAfgVATQgGAGgGAEQgZANgfgWIhkhXQADAQgnCoQgGAVABAWQAAA/AlA8QAWAkAeAqQAcAqgFAYQgBAEgCADQAHAIAGAIQADAEADAFQATAkgZAWAgpndQADACACACQArAlAnBnAgQi4QAXAPAeAUIANAMAhQjaQAVAHArAbQhMBagFDjAgKCnQAPAfAJAPQADAFAEAIQAJAOAMAWQAUAiAaAfQAaAgAEAFAgzCcQAHANAGANQARAgARAeQABABAAAAQAJARALAQQAfAxAjAuQABAAAAABQALAPAMAOQAVAaADAS");
	this.shape_3.setTransform(748,576.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C2894C").s().p("AgDHJQAQgWgaglIgBgBQhLhbg/h5IgGgRQgFgSABgTQAFjjBMhaIA2AjIANAMQADAQgnCoQgFAVAAAWQAAA/AlA8QAVAkAeAqQAcAqgFAYIgDAHIANAQIAGAJQATAkgZAWQgCgSgWgaIgXgdIgBgBQgigugfgxIgVghIgBgBQgRgfgRgfIgNgaIANAaQARAfARAfIABABIAVAhQAfAxAiAuIABABIAXAdQAWAaACASQABAMgIAJQgJAKgNAAQgRAAgXgTgAgyDTIAHANIAVAkQAUAiAZAfIAeAlIgeglQgZgfgUgiIgVgkIgHgNIgZguIAZAugACBhfIimjHIhAi1QAsAlAnBnIAFAMIBDBVIBiCHQAWAfgVATQgGAGgGAEQAGgagSgag");
	this.shape_4.setTransform(754.5,576.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DEB180").s().p("AAXHkQjVjCgRhzQgWk7AdkfQANg/BXgGQBMgCAyBHQAlA8gHA/QgnhmgqglIgFgFIAFAFIA/C0ICnDHQARAagGAaQgYANgggWIhjhWIgOgMIg0gjQgsgcgUgGQAUAGAsAcQhMBagFDiQgCAUAFASIAHAQQA+B6BLBbIABABQAaAlgRAWIAAAAIgCACQgHAGgJAAQgNAAgRgNg");
	this.shape_5.setTransform(746.9,573.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(2,1,1).p("AgalPQifAEgmgbQgmgaAcgiQBUgOB4AAQABgBACABQABgBACAAQB7gCBlA9AgalPIg4BTIiAC/IiCEwQAAAJABAHQAFAjAlgjICrkEIgvClIgaDWQAMAkAjgOQAFgCAHgEIA8jZIA8huIgiCrIgVCrQAUAuAjgoQADgDADgDIAgijIA4iAIgwERQASAiAZgQQAHgEAIgJQAJhXA6ilQABgEABgEQCtjSAOhrQADgTgDgPAiQgfQAMAKANAKQAlAbAnAXQAOAIAPAIQAgARAjANQAOAGAOAFQACAAACABQAOAFAOAEAgalPQBPC/CXhC");
	this.shape_6.setTransform(683.4,526.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C2894C").s().p("AB8BZIAFgOIADgHQCeiKAdjOQASAdADAdQgOBsitDSIgCAHQg5CmgKBWQgIAJgHAFQAJieAuh+gAgTF0IAJitIA/iWIAcAKIAEACIgLAUIg4CAIggCkgAiXFkIAgjSIBGiFIAjAFIgGANIg8BuIg8DZgAlTDeQBghuBjizIAZAUIgHAJIirEFQgSARgLAAQgLAAgCgSgAhFkYIgNgJIA4hTQBPDACXhDQhGA4g9AAQhNAAhBhZg");
	this.shape_7.setTransform(683.4,530.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DEB180").s().p("AhLGZIAVirIAiirIAGgMQAgARAjANIg/CXIgJCtIAFAAIgGAGQgQATgNAAQgPAAgLgZgAAaGHIAwkRIALgVIgEgBIgcgLQgjgNgggRIgdgQQgngXglgbIgZgUQhjC0hgBuIgBgQICCkwICAi/IANAJQB0CeCdh9QiXBChPi/QifAEgmgbQgmgaAcgiQBUgOB4AAIADAAIADgBQB7gCBlA9QB2A9AVBiQADAPgDATQgDgegSgdQgdDPieCKIgDAGIgFAOQguB+gJCeQgIAFgHAAQgPAAgNgXgABxBqIgcgJIAcAJgAjHF6IAajWIAvilIAHgKQAlAbAnAXIAdAQIgjgFIhGCFIggDRIALACIgMAGQgKAEgIAAQgUAAgJgag");
	this.shape_8.setTransform(683.4,526.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(2,1,1).p("AgalPIg2BQIiCDCIiCEwQAAAGAAAFQAEAqAnglICrkEIgvClIgaDWQAMAkAjgOQABAAAAgBIABAAQAEgCAGgDIA8jZIBCh6AgalPQBLC2CNg0QAFgEAGgEAgalPQifAEgmgbQgmgaAcgiQBUgOB4AAQABAAACAAQABgBACAAQB7gCBlA9AFUjXQACANgBAQQgLBrixDXQgBAEgBAEQg6ClgJBXQgHAHgGAEQAAAAAAABQgaATgTgkIAwkRIg4CAIggCjQgCACgBABQAAABgBAAQglArgUgvIAWiyIAniwQA1AfA5ARAiSggQAOAMANAJQAkAaAmAXQAPAIAQAJIAAAA");
	this.shape_9.setTransform(658.4,502);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C2894C").s().p("AgKDBIA7iMIAgAKIgHAMIAAAFIg4CAIggCjIgDADgABWDgQAMhEAVg8IABgBIAAgBIACgHIADgHIAAgBIABgBIAAgBIABgDIAAgBIAAAAIABAAIAEgLQCeiKAdjPQAJAPAGAPIAAABQAFAOACAOQgKBriyDXIgCAIQg5CmgKBWQgGAHgGAEQABhNANhEgAiWFpIgCgDIAhjaIBKiMIAfARIAAAAIhCB6Ig8DZIgKAFgAlUDYQBghtBiixIAbAVIgHAKIirEEQgSARgLAAQgMAAgCgWgAhFkeIgLgHIA2hQQBLC2CNg0Qg+Atg3AAQhNAAhBhYg");
	this.shape_10.setTransform(658.4,505.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#DEB180").s().p("AhLGZIAWiyIAniwQA1AfA5ARQg5gRg1gfIAAAAIgfgRQgmgXgkgaIgbgVQhiCxhgBtIAAgLICCkwICCjCIALAHQBuCXCVhsQiNA0hLi2QifAEgmgbQgmgaAcgiQBUgOB4AAIADAAIADgBQB7gCBlA9QB0A8AXBgIAAADQACANgBAQQgCgOgFgOIgBgBQgFgPgJgPQgdDPieCKIgFALIAAAAIAAAAIAAABIgBADIgBABIAAABIAAABIgDAHIgCAHIgBABIAAABQgVA8gNBEQgMBDgCBOIAAABQgaATgTgkIAwkRIAAgFIAGgMIgfgKIg7CMIgHC1IgBABQgRAVgOAAQgPAAgLgZgAC+jNIALgIIgLAIgAjHF6IAajWIAvilIAHgKQAkAaAmAXIhKCMIghDaIABADIgBABQgKAEgIAAQgUAAgJgag");
	this.shape_11.setTransform(658.4,502);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(2,1,1).p("AAHglQAyhWgpg5QhGg6gxhBQg3hDAmgkQAQgLAPACQAOACANANIB9B8QAUAUAcAPQASAJAVAIQCDA8AXCbIAFAeIAFAfAHKDaQABAFAAAFABvE8IARBIQAgA7BAhAQBvgIBKgzQA0gkgCg8Ah2AxIgGgnQgPiBgzgHQgGgBgFAAQgsACADAvIAVCRIgogxIhriCQhFhEgVA4QCFEGBQAkQACABACABIAnAMIAGAwQAQAvBAgNIAogUAh2AxQApgHAkgmQAKguAmAFQAGABAGACQAkAVgCBDQAAACAAABIgXDYADAEvIgehkQgHgbgNgOQgNgOgTgCQgYgCgGAXQgBAHAAAKIATBQIANA0AAYFkQgGACgGABQhVAQAAhGIAHg8IAGg8IATi1AAbFjQAzgOAhgZAhKD5IAIgEAh2AxIAXCMAjdBDIATB5ACnCCQA8g2A4AK");
	this.shape_12.setTransform(629.6,433.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C2894C").s().p("ABTFpQgniPgcg4QATADAMANQAOAPAHAbIAeBkQAYBJBkgjQB5gigChrIAYAbIAAABQABA8gzAkQhKAzhvAHIgFAAQgdAAgNgmgAhiFKQA6kygigpQAkATgCBFIgBADIgWDYQANAXA2ggIAMA0QgfAYgzAPIgDAAIgKACQgZAAAGgsgAjYDkQgjkpgsgpIAKAAQAzAIAPCAIAHAoIAWCLQAKALAZgPIgGA9IgHADIgDACQgIACgGAAQgbAAgEgpgAlQDBIgEgCIgYiWIAIgHIApAyIASB4gACDBMQAygNAHAnQg3gJg9A2QAQg4ArgPgAADjFQhkhBhXiIQAPABANAOIB9B8QAVAUAbAPQASAJAVAHQCCA9AXCZIAFAfQg0ieifhMg");
	this.shape_13.setTransform(639.1,431.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#DEB180").s().p("ACAGEIgRhIIgNg0Qg2AggOgXIAXjYIAAgDQAChDgkgVQAiApg4EyQgHA0AjgJIgNADQhVAQAAhGIAHg8IAGg8QgZAPgKgLIgXiMQApgHAkgmQAKguAmAFIAMADIgMgDQAyhWgpg5QhGg6gxhBQg3hDAmgkQAQgLAPACQBWCJBlBAQCeBNA1CeIAFAfQBoAjAeBWQAJAYACAVIAAAKIgXgcQABBrh4AiQhkAkgZhKIgehkQgHgbgNgOQgNgOgTgCIgDAAIAAAAIAAAAQgUAAgGASIAAABIAAACIgCANIAAAEIATBQIgThQIAAgEIACgNIAAgCIAAgBQAGgSAUAAIAAAAIAAAAIADAAQAcA3AoCPQAOAqAggDQghAhgZAAQgWAAgQgcgAg8C5IATi1gADiA7QgsAPgPA4QA8g2A4AKQgFgegfAAQgJAAgMADgAjEDsIgGgwIgTh5IgViRQgDgvAsgCQAtAqAjEoQAEA0ApgNIgoAUQgOADgLAAQgqAAgNglgAnKh8QAVg4BFBEIBrCCIgIAGIAYCWQhQgkiFkGg");
	this.shape_14.setTransform(629.6,433.2);

	this.instance_3 = new lib.Tween6("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(657,391.9,1,1,5,0,0,46.8,18.2);
	this.instance_3._off = true;

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(2,1,1).p("AAHglQAyhWgpg5QhGg6gxhBQg3hDAmgkQAQgLAPACQAOACANANIB9B8QAUAUAcAPQASAJAVAIQCDA8AXCbIAFAeIAFAfABvE8IARBIQAgA7BAhAQBvgIBKgzQA0gkgCg8AHKDaQABAFAAAFAh2AxIgGgnQgPiBgzgHQgGgBgFAAQgsACADAvIAVCRIgogxIhriCQhFhEgVA4QCFEGBQAkQACABACABIAnAMIAGAwQAQAvBAgNIAogUAh2AxQApgHAkgmQAKguAmAFQAGABAGACQAkAVgCBDQAAACAAABIgXDYADAEvIgehkQgHgbgNgOQgNgOgTgCQgYgCgGAXQgBAHAAAKIATBQIANA0AAYFkQgGACgGABQhVAQAAhGIAHg8IAGg8IATi1AAbFjQAzgOAhgZAhKD5IAIgEAjdBDIATB5Ah2AxIAXCMACnCCQA8g2A4AK");
	this.shape_15.setTransform(629.6,433.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(2,1,1).p("AgalPQifAEgmgbQgmgaAcgiQBUgOB4AAQABAAACAAQABgBACAAQB7gCBlA9AgalPQBLC2CNg0QAFgEAGgEAgalPIg2BQIiCDCIiCEwQAAAGAAAFQAEAqAnglICrkEIgvClIgaDWQAMAkAjgOQABAAAAgBIABAAQAEgCAGgDIA8jZIBCh6AFUjXQACANgBAQQgLBrixDXQgBAEgBAEQg6ClgJBXQgHAHgGAEQAAAAAAABQgaATgTgkIAwkRIg4CAIggCjQgCACgBABQAAABgBAAQglArgUgvIAWiyIAniwAiSggQAOAMANAJQAkAaAmAXQAPAIAQAJIAAAAQA1AfA5AR");
	this.shape_16.setTransform(658.4,502);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#DEB180").s().p("AhLGZIAWiyIAniwIAAAAIgfgRQgmgXgkgaIgbgVQhiCxhgBtIAAgLICCkwICCjCIALAHQBuCXCVhsQiNA0hLi2QifAEgmgbQgmgaAcgiQBUgOB4AAIADAAIADgBQB7gCBlA9QB0A8AXBgIAAADQACANgBAQQgCgOgFgOIgBgBQgFgPgJgPQgdDPieCKIgFALIAAAAIAAAAIAAABIgBADIgBABIAAABIAAABIgDAHIgCAHIgBABIAAABQgVA8gNBEQgMBDgCBOIAAABQgaATgTgkIAwkRIAAgFIAGgMIgfgKIg7CMIgHC1IgBABQgRAVgOAAQgPAAgLgZgABgBnQg5gRg1gfQA1AfA5ARgAC+jNIALgIIgLAIgAjHF6IAajWIAvilIAHgKQAkAaAmAXIhKCMIghDaIABADIgBABQgKAEgIAAQgUAAgJgag");
	this.shape_17.setTransform(658.4,502);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#DEB180").s().p("AhLGZIAVirIAiirIAGgMIgjgFIhGCFIggDRIALACIgMAGQgjAOgMgkIAajWIAvilIAHgKIgZgUQhjC0hgBuIgBgQICCkwICAi/IANAJQB0CeCdh9QiXBChPi/QifAEgmgbQgmgaAcgiQBUgOB4AAIADAAIADgBQB7gCBlA9QB2A9AVBiQADAPgDATQgDgegSgdQgdDPieCKIgDAGIgFAOQguB+gJCeQgZAQgSgiIAwkRIALgVIAcAJIgcgJIgEgBIgcgLQgjgNgggRIgdgQQgngXglgbQAlAbAnAXIAdAQQAgARAjANIg/CXIgJCtIAFAAIgGAGQgQATgNAAQgPAAgLgZg");
	this.shape_18.setTransform(683.4,526.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(2,1,1).p("AjTnIQgcEeAVE8QARBzDVDBQAdAXASgPQABgBABgCQAAAAAAAAQAqAiAVgZQAIgJgBgMAgpndQADACACACQArAlAnBnQACAGADAGIBEBVIBiCHQAWAfgVATQgGAGgGAEQgZANgfgWIhkhXQADAQgnCoQgGAVABAWQAAA/AlA8QAWAkAeAqQAcAqgFAYQgBAEgCADQAHAIAGAIQADAEADAFQATAkgZAWAAQnJQAlA8gHBAAgQi4QAXAPAeAUIANAMAhQjaQAVAHArAbQhMBagFDjAgKCnQAPAfAJAPQADAFAEAIQAJAOAMAWQAUAiAaAfQAaAgAEAFAgzCcQAHANAGANQARAgARAeQABABAAAAQAJARALAQQAfAxAjAuQABAAAAABQALAPAMAOQAVAaADAS");
	this.shape_19.setTransform(748,576.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C2894C").s().p("AgDHJQAQgWgaglIgBgBQhLhbg/h5IgGgRQgFgSABgTQAFjjBMhaIA2AjIANAMQADAQgnCoQgFAVAAAWQAAA/AlA8QAVAkAeAqQAcAqgFAYIgDAHIgeglQgZgfgUgiIgVgkIgHgNIgZguIAZAuIAHANIAVAkQAUAiAZAfIAeAlIANAQIAGAJQATAkgZAWQgCgSgWgaIgXgdIgBgBQgigugfgxIgVghIgBgBQgRgfgRgfIgNgaIANAaQARAfARAfIABABIAVAhQAfAxAiAuIABABIAXAdQAWAaACASQABAMgIAJQgJAKgNAAQgRAAgXgTgACBhfIimjHIhAi1QAsAlAnBnIAFAMIBDBVIBiCHQAWAfgVATQgGAGgGAEQAGgagSgag");
	this.shape_20.setTransform(754.5,576.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#DEB180").s().p("AAXHkQjVjCgRhzQgWk7AdkfQANg/BXgGQBMgCAyBHQAlA8gHA/QgnhmgqglIA/C0ICnDHQARAagGAaQgYANgggWIhjhWIgOgMIg0gjQgsgcgUgGQAUAGAsAcQhMBagFDiQgCAUAFASIAHAQQA+B6BLBbIABABQAaAlgRAWIAAAAIgCACQgHAGgJAAQgNAAgRgNgAgZm7IgFgFIAFAFgAgFiaIAAAAg");
	this.shape_21.setTransform(746.9,573.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},131).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},9).to({state:[{t:this.instance_3}]},6).to({state:[{t:this.instance_3}]},6).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_15}]},16).to({state:[{t:this.shape_17},{t:this.shape_10},{t:this.shape_16}]},1).to({state:[{t:this.shape_18},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.instance_2}]},14).to({state:[{t:this.instance_2}]},12).wait(74));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(131).to({_off:false},0).wait(1).to({x:774.5,y:597.4},0).to({_off:true},1).wait(47).to({_off:false},0).wait(1).to({x:779.5,y:597.6},0).wait(1).to({x:784},0).to({x:776},6,cjs.Ease.get(0.7)).to({x:784},14,cjs.Ease.get(1)).to({x:781},12,cjs.Ease.get(1)).wait(74));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(138).to({_off:false},0).to({regX:46.9,rotation:-9.7,x:653,y:413.2},9,cjs.Ease.get(0.85)).to({regX:47,regY:18.3,rotation:-20.1,x:654.8,y:415.8},6,cjs.Ease.get(1)).to({regX:47.1,regY:18.4,rotation:-24.4,x:655,y:415.9},6,cjs.Ease.get(1)).to({_off:true},16).wait(113));

	// LEFT HAND
	this.instance_4 = new lib.HAND_1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(785,597.6,1,1,0,0,180,25.6,49.7);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(130).to({_off:false},0).to({_off:true},1).wait(157));

	// Layer 2
	this.instance_5 = new lib.LEFTARM_1("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(1021.5,393.5,1,1,0,0,0,22.5,0);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(130).to({_off:false},0).to({startPosition:0},4).to({regY:0.1,rotation:-1.2,x:1021.6,y:393.6},8,cjs.Ease.get(1)).to({rotation:0.9},9,cjs.Ease.get(1)).to({regY:0,rotation:0,x:1021.5,y:393.5},11,cjs.Ease.get(1)).to({startPosition:0},19).to({startPosition:0},4).to({regY:0.1,rotation:-1.2,x:1021.6,y:393.6},8,cjs.Ease.get(1)).to({rotation:0.9},9,cjs.Ease.get(1)).to({regY:0,rotation:0,x:1021.5,y:393.5},11,cjs.Ease.get(1)).wait(75));

	// LEFT ARM
	this.instance_6 = new lib.LEFTARM_1("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(767.3,482.2,1,1,0,0,180,22.5,88.7);
	this.instance_6._off = true;

	this.instance_7 = new lib.LEFTARM_1("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(1021.5,482.2,1,1,0,0,0,22.5,88.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(2,1,1).p("AgdKJQA9koBykYIAKgXQA9iQAXh7QAThZALhcAhfrYQigE6gOLXIAAGg");
	this.shape_22.setTransform(754.2,463.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#DEB17F").s().p("AkQKjIAAmgQAPrXCfk6QA2hKDHBqQCRBJghDhQgKBcgTBZQgYB7g8CRIgLAWQhyEYg9EoQgcDchegCIgIAAQhpAAgFiKg");
	this.shape_23.setTransform(754.5,468.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(2,1,1).p("AAbpBQirDfg/EnQg/EliOCoAjHJDQH5pJBrlN");
	this.shape_24.setTransform(737.5,447.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#DEB17F").s().p("AllIpQhagpAmhdQCOioA/klQA/knCrjfQA8hICSBIQDaBggmCOQhrFMn6JKQgIABgKAAQgyAAhcgsg");
	this.shape_25.setTransform(737.2,445.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(2,1,1).p("ADJnnQjkCliREIQiREHi4B3AkXHoQJHldDGkf");
	this.shape_26.setTransform(721.3,431.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#DEB17F").s().p("AnnHOQhLhBBAhOQC4h3CRkHQCRkIDkilQBPg0B3BvQC0CbhNB9QjGEfpHFdQgzAbguAAQg+AAg0gwg");
	this.shape_27.setTransform(721,431.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(2,1,1).p("AH+hFIABgCIAAgBQAAAAAAABQgBABAAABQhvDxnHBqIlPA7An+CFQBRgtCGh3QEakECogt");
	this.shape_28.setTransform(714.7,421.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#DEB17F").s().p("An7EMQgvh3A+gOQBRgtCGh3QEZkECpgtQAogLAhACQCvAHA8BwQAtBTACBIIgBACQhuDxnHBqIlPA7QgXAFgTAAQhKAAgShMgAIPhDIABgCIAAAAIgBACgAIQhFIAAAAg");
	this.shape_29.setTransform(712.9,421.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(2,1,1).p("AniitQBJANCwglQF3hVCoAuAHmCqIgDACQjYCZm/iHIkxhv");
	this.shape_30.setTransform(705.3,400);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#DEB17F").s().p("Ai9C+IkxhvQh8goAdhdQATh/BPAIQBJANCwglQF3hVCoAuQAoAKAcASQCUBegEB+QgCBegiBAIgDACQhzBRi0AAQifAAjRg/gAJUCXIAAAAIgBACg");
	this.shape_31.setTransform(706.2,400);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(2,1,1).p("AnoiYQBJAKCugqQF0hhCqApAHqChIgCABQjUCgnFh5Ikzhl");
	this.shape_32.setTransform(705.8,401.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#DEB17F").s().p("Ai6DJIkzhlQh9gkAZheQAPiABQAGQBJAKCvgqQF0hhCpApQApAJAdARQCWBZAAB+QABBeggBCIgCABQh4BbjHAAQiXAAjCg0gAJWCJIAAABIAAACg");
	this.shape_33.setTransform(706.7,401.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(2,1,1).p("AohgdQAJhfBIAHQCgARDihRQDjhQBrABQAmAEAhAMAIiCXQgzA/jZAlQkoAznsjo");
	this.shape_34.setTransform(699.8,400.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#DEB17F").s().p("AoHBGQglgfADhEQAJhfBIAHQCgARDihRQDihQBsABQAlAEAiAMQBuAmBGB+QAsBQALBlQADAagTAYQg0A/jZAlQg1AKg7AAQkPAAmVi/g");
	this.shape_35.setTransform(700.6,400.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(2,1,1).p("AojgGQAFhgBJAGQChALDghXQDfhXBrgCQAmADAiALAIlCNQgyBBjYArQklA8n0jZ");
	this.shape_36.setTransform(700.3,400.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#DEB17F").s().p("AoGBcQgmgeABhEQAGhgBIAGQChALDghXQDfhXBrgCQAmADAiALQBvAjBKB7QAuBPAPBkQAEAbgTAYQgyBBjYArQg/ANhJAAQkJAAmIiqg");
	this.shape_37.setTransform(701.1,400.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(2,1,1).p("AomAVQAChfBJADQChAFDchgQDchfBrgGQAmABAiAJAInB+QgvBDjWA0QkjBHn8jF");
	this.shape_38.setTransform(701,402.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#DEB17F").s().p("AoEB3QgngdgChFQAChfBJADQChAFDchgQDchfBrgGQAmABAiAJQBxAfBPB5QAwBNATBjQAFAbgSAYQgvBDjWA0QhNAThcAAQkAAAl2iRg");
	this.shape_39.setTransform(701.7,402.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(2,1,1).p("AonAvQgBhfBJAAQCggBDahnQDXhnBsgKQAlgBAjAJAIpBxQgtBFjUA7QkhBRoCiz");
	this.shape_40.setTransform(701.1,403.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#DEB17F").s().p("AoBCPQgogbgFhFQgBhfBJAAQChgBDZhnQDYhnBrgKQAmgBAiAJQByAbBTB2QAzBLAWBjQAGAagRAZQgsBFjUA7QhaAZhwAAQj3AAlih7g");
	this.shape_41.setTransform(701.8,403.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(2,1,1).p("AooBEQgEhfBJgCQCggGDXhuQDThtBsgNQAlgCAjAIAIpBlQgqBGjSBCQkfBZoHij");
	this.shape_42.setTransform(701.8,404.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#DEB17F").s().p("An+CjQgpgagHhFQgEhfBJgCQChgGDWhuQDUhtBrgNQAmgCAiAIQBzAXBXBzQA1BKAZBiQAHAagQAaQgrBGjSBCQhmAfiCAAQjuAAlPhpg");
	this.shape_43.setTransform(702.4,404.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(2,1,1).p("AooBQQgGhfBJgDQCggJDVhxQDRhxBsgPQAlgDAjAHAIqBeQgqBGjRBGQkdBeoJiZ");
	this.shape_44.setTransform(701.7,404.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#DEB17F").s().p("An9CvQgpgagIhFQgGhfBJgDQChgJDUhxQDShxBrgPQAmgDAiAHQBzAWBZBxQA3BJAbBiQAHAagQAaQgpBGjRBGQhtAkiPAAQjnAAlEhfg");
	this.shape_45.setTransform(702.2,404.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(2,1,1).p("AooBTQgHhfBJgDQChgJDUhzQDRhyBrgPQAmgDAiAGAIqBcQgpBGjRBHQkcBgoLiX");
	this.shape_46.setTransform(701.1,405.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#DEB17F").s().p("An8CyQgqgagIhFQgGhfBJgDQCggJDUhzQDRhyBsgPQAlgDAjAGQBzAVBZBxQA3BJAcBiQAHAZgQAbQgpBGjQBHQhvAliSAAQjmAAlAhcg");
	this.shape_47.setTransform(701.6,405.1);

	this.instance_8 = new lib.Tween4_1("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(757.8,377.7,1,1,0,0,0,55.9,-27.2);
	this.instance_8._off = true;

	this.instance_9 = new lib.Symbol7("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(721,431.8,1,1,0,0,0,52.8,51);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},130).to({state:[{t:this.instance_7},{t:this.instance_6}]},1).to({state:[{t:this.instance_7},{t:this.instance_6}]},1).to({state:[{t:this.instance_7},{t:this.instance_6}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},6).to({state:[{t:this.shape_29},{t:this.shape_28}]},22).to({state:[{t:this.shape_26},{t:this.instance_9}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.instance_7},{t:this.instance_6}]},1).to({state:[{t:this.instance_7},{t:this.instance_6}]},1).to({state:[{t:this.instance_7},{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},6).to({state:[{t:this.instance_6}]},14).to({state:[{t:this.instance_6}]},12).wait(74));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(130).to({_off:false},0).wait(1).to({regX:22.4,regY:0.1,skewX:1.5,skewY:181.5,x:766.4,y:393.6},0).wait(1).to({regX:22.5,skewX:3.2,skewY:183.2,x:766.3},0).wait(1).to({regY:0,skewX:6.2,skewY:186.2,x:766.4,y:392.5},0).to({_off:true},1).wait(45).to({_off:false},0).wait(1).to({regY:0.1,skewX:3.2,skewY:183.2,x:766.3,y:393.6},0).wait(1).to({regX:22.4,skewX:1.5,skewY:181.5,x:766.4},0).wait(1).to({regX:22.5,regY:0,skewX:0,skewY:180,x:766.3,y:393.5},0).to({regX:22.4,skewX:2.7,skewY:182.7,x:766.4,y:393.6},6,cjs.Ease.get(0.7)).to({regX:22.5,skewX:0,skewY:180,x:766.3,y:393.5},14,cjs.Ease.get(1)).to({regX:22.4,regY:0.1,skewX:1,skewY:181,x:766.4,y:393.6},12,cjs.Ease.get(1)).wait(74));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(147).to({_off:false},0).to({rotation:-2.2},6,cjs.Ease.get(1)).to({_off:true},22).wait(113));

	// Layer 3
	this.instance_10 = new lib.LEFTSHOULDER_1("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(1011.7,332.6,1,1,0,0,0,31.2,95.6);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(130).to({_off:false},0).wait(158));

	// LEFT SHOULDER
	this.instance_11 = new lib.LEFTSHOULDER_1("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(775.6,332.6,1,1,0,0,180,31.2,95.6);
	this.instance_11._off = true;

	this.instance_12 = new lib.LEFTSHOULDER_1("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(1013,332.6,1,1,0,0,0,31.2,95.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_11}]},130).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12},{t:this.instance_11}]},1).to({state:[{t:this.instance_12},{t:this.instance_11}]},1).to({state:[{t:this.instance_12},{t:this.instance_11}]},1).to({state:[{t:this.instance_12},{t:this.instance_11}]},1).to({state:[{t:this.instance_12},{t:this.instance_11}]},1).to({state:[{t:this.instance_12},{t:this.instance_11}]},2).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},28).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).wait(107));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(130).to({_off:false},0).wait(2).to({x:774.6},0).wait(1).to({regX:11.9,regY:0.6,skewX:0.4,skewY:180.4,x:793.9,y:237.6},0).wait(1).to({regX:-4.9,regY:-2.5,skewX:1.5,skewY:181.5,x:810.7,y:234.5},0).wait(1).to({regX:52.6,regY:183.2,skewX:3.7,skewY:183.7,x:744.5,y:417.3},0).wait(1).to({regX:7.8,regY:1.9,skewX:6.2,skewY:186.2,x:804,y:237.2},0).wait(1).to({regX:-0.1,regY:0.1,skewX:9.8,skewY:189.8,x:819.1,y:235.1},0).wait(1).to({skewX:10.8,skewY:190.8},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:-0.2,skewX:11.1,skewY:191.1,x:819.2},0).wait(1).to({regX:-0.3,regY:0.2,skewX:11.5,skewY:191.5,y:235.2},0).wait(1).to({regX:-0.4,skewX:12,skewY:192,x:819.3,y:235.3},0).wait(1).to({startPosition:0},0).wait(2).to({regX:-0.1,regY:0.1,skewX:12.1,skewY:192.1,x:819.1,y:235.1},0).wait(1).to({skewX:12.6,skewY:192.6,x:819.8,y:235.6},0).wait(28).to({skewX:9.8,skewY:189.8,x:819.1,y:235.1},0).wait(1).to({regX:7.8,regY:1.9,skewX:6.2,skewY:186.2,x:804,y:237.2},0).wait(1).to({regX:52.6,regY:183.2,skewX:3.7,skewY:183.7,x:744.5,y:417.3},0).wait(1).to({regX:-4.9,regY:-2.5,skewX:1.5,skewY:181.5,x:810.7,y:234.5},0).wait(1).to({regX:11.9,regY:0.6,skewX:0.4,skewY:180.4,x:793.9,y:237.6},0).wait(1).to({regX:31.2,regY:95.6,skewX:0,skewY:180,x:774.6,y:332.6},0).wait(1).to({startPosition:0},0).wait(107));

	// Layer 5
	this.instance_13 = new lib.Symbol8("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(750.2,400,1,1,-17,0,0,125.9,19.2);
	this.instance_13.alpha = 0.191;

	this.instance_14 = new lib.Symbol8("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(750.2,400.1,1,1,9.7,0,0,125.9,19.2);
	this.instance_14.alpha = 0.27;

	this.instance_15 = new lib.Symbol8("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(750.2,400,1,1,0,0,0,125.9,19.2);
	this.instance_15.alpha = 0.18;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13}]},176).to({state:[]},1).wait(111));

	// COLLAR
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(2,1,1).p("AlQjRQAfg4ADg0QgOAAgMADQgjAIgcAWQg7AvgfByQgHAcgGAfQgRCAAtDdQAKgVAJgUQCMkXCTCTQBEBWBgB8QBZh8BDhXQCWi/AaiBAlQjRQgIgoAEgjACgBvQCPiNCIECQAOAaANAfQAujdgSiAQgFgfgIgcQggh5hBguQgagSgegGQgMgDgHgEQAIA4ATA4QAJgogEgjAigBwQiVjAgbiB");
	this.shape_48.setTransform(893.6,218.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#2D2D2D").s().p("AG3D2QAliggOiAQgOiChAhkQBBAuAgB5QAIAcAFAgQASB/guDdQgNgegOgbgAnugtQAGggAHgcQAfhyA7gvQhyDUA6E9IgTAoQgtjdARh/gAE1kuQAHAEAMADIANAeQAEAigJApQgTg5gIg3gAlUkJIAMgeQAMgDAOgBQgDA0gfA5QgIgpAEgig");
	this.shape_49.setTransform(893.6,216.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#4A4A4A").s().p("AmGj5QAcgWAigHIgLAeQgEAiAIAoQAbCCCVC/QiTiTiMEYQg6k9ByjUgAChCTQCWjAAaiBQAJgogEgiIgNgfQAeAHAaARQBABkAOCBQAOCBglCgQiIkDiPCPg");
	this.shape_50.setTransform(893.5,215.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48}]},130).wait(158));

	// ID
	this.instance_16 = new lib.Symbol6_1("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(892.3,219.7,1,1,0,0,0,25.9,-24.7);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(130).to({_off:false},0).to({startPosition:0},5).to({rotation:1,x:892.4},4).to({regY:-24.6,rotation:-0.5,y:219.8},4).to({regY:-24.7,rotation:0,x:892.3,y:219.7},5).wait(140));

	// PATCH
	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#4A4A4A").s().p("AorkoICGhVIBjg1IA4BhID3FHIC0j0IB/jTIEMDWIotLNg");
	this.shape_51.setTransform(896,252.1);
	this.shape_51._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_51).wait(130).to({_off:false},0).wait(158));

	// NECK
	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(2,1,1).p("AFImfQADATgLAmQgIAxgCAaQgLCGBABtIABAGQABAKABAJQAXDilyFpQljiogfl7QA3hYASh+IAVh+IAUh/QAPhSBPgdQA6gUA3ACQCGABBrAnIAOAFQAMAFALAFADsoCQARAIAOAJQANAJAKAJQAZAYALAfQABAEABAE");
	this.shape_52.setTransform(893.6,207.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#C2894C").s().p("AhSEaIjblSIAVh/QAPhRBMgeIBxgSIBWAGIAjAFQBFAJAzARIAOAEIAXAKIAEACQARAIAOAKQAMAIAKAJQAaAYAKAfIADAIIAAABQAIAfgHAmQgDAigRAdQACgaAJgxQAIgdAAgTIAAgJIAAAJQAAATgIAdQgJAxgCAaIgHANIAShYIjNGBQgnAfgrAAQgoAAgtgfg");
	this.shape_53.setTransform(896.6,181.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#DEB17F").s().p("AlvhRQA3hZASh9IAVh/IACAEIDbFTQAtAfAoAAQArAAAngfIDNmCIgSBYIAIgNQgLCGBABtIABAGIACATQAXDjlyFoQljiogfl6g");
	this.shape_54.setTransform(893.6,218);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52}]},130).wait(158));

	// BODY
	this.instance_17 = new lib.BODY("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(893.6,577.2,1,1,0,0,0,120.2,385.5);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(130).to({_off:false},0).to({startPosition:0},5).to({y:575.6},7).to({y:577.2},10).wait(136));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(840.7,42.6,107.8,153.5);


(lib.Wholeguy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_8 = function() {
		playSound("_2Audiomp3copy");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(8).call(this.frame_8).wait(243));

	// Layer 22
	this.instance = new lib.Symbol9("synched",130);
	this.instance.parent = this;
	this.instance.setTransform(893,581.2,1,1,0,0,0,894.1,582.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(130).to({_off:false},0).to({startPosition:137},7).to({scaleY:0.99,startPosition:141},4).to({regY:582.2,scaleY:1.01,skewX:-1.8,skewY:-1,x:886.6,startPosition:147},6,cjs.Ease.get(1)).to({startPosition:174},27).to({regY:582.3,scaleY:0.99,skewX:0,skewY:0,x:893,startPosition:182},8,cjs.Ease.get(1)).to({scaleY:1,startPosition:191},9).wait(60));

	// Layer 23
	this.instance_1 = new lib.LEFTTHIGH_1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(846.8,801.8,1,1,0,0,180,45,240.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(130).to({_off:false},0).to({startPosition:0},11).to({scaleY:1,skewX:-2.1,x:844.3,y:803.4},6,cjs.Ease.get(1)).to({y:801.8},27).to({scaleY:1,skewX:0,x:846.8},17,cjs.Ease.get(1)).wait(60));

	// LEFT THIGH
	this.instance_2 = new lib.LEFTTHIGH_1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(940.5,801.8,1,1,0,0,0,45,240.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(130).to({_off:false},0).to({startPosition:0},11).to({regX:45.1,scaleY:1,skewX:-1.9,x:940.7,y:800.2},6,cjs.Ease.get(1)).to({y:801.8},27).to({regX:45,scaleY:1,skewX:0,x:940.5},17,cjs.Ease.get(1)).wait(60));

	// Layer 25
	this.instance_3 = new lib.LEFTLEG_1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(949.5,1004.7,1,1,0,0,0,36,235.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(130).to({_off:false},0).wait(121));

	// LEG
	this.instance_4 = new lib.LEFTLEG_1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(837.5,1004.7,1,1,0,0,180,36,235.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(130).to({_off:false},0).to({startPosition:0},11).to({skewX:-1},6,cjs.Ease.get(1)).to({startPosition:0},27).to({skewX:0},17,cjs.Ease.get(1)).wait(60));

	// SHOE
	this.instance_5 = new lib.LEFTSHOE_1("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(859.7,1011.2,1,1,0,0,180,0,41.4);

	this.instance_6 = new lib.LEFTSHOE_1("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(963.2,1011.2,1,1,0,0,0,35.5,41.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6},{t:this.instance_5}]},130).wait(121));

	// PELVIC
	this.instance_7 = new lib.Tween7("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(893,615.6,1,1,0,0,0,0,43.1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(130).to({_off:false},0).to({startPosition:0},11).to({x:883.4},6,cjs.Ease.get(1)).to({startPosition:0},27).to({x:893},17,cjs.Ease.get(1)).wait(60));

	// Symbol 2
	this.instance_8 = new lib.Symbol2("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(899.5,172.8,1,1,0,0,0,54.2,128.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({y:176.8,startPosition:4},4).to({y:174.8,startPosition:11},7).to({regX:54.3,rotation:2.2,x:899.6,y:177.1,startPosition:14},3).to({regX:54.2,rotation:7,x:899.5,y:172.8,startPosition:19},5).to({startPosition:35},16).to({rotation:-7.8,x:900.5,startPosition:41},6).to({rotation:-7.8,x:899.3,y:173.7,startPosition:60},19).to({scaleX:1,scaleY:1,rotation:-8.8,x:893.5,y:176.2,startPosition:64},4).to({regX:54.4,regY:128.3,scaleX:1,scaleY:1,rotation:-10.7,x:881.9,y:171.9,startPosition:72},8).wait(17).to({startPosition:89},0).to({regX:54.3,scaleX:1,scaleY:1,rotation:-10,x:886.1,y:181.6,startPosition:94},5).to({regX:54.4,scaleX:1,scaleY:1,rotation:-9,x:893.8,y:171.8,startPosition:103},9).to({regX:54.2,regY:128.2,rotation:0,x:899.5,y:172.8,startPosition:114},11).to({startPosition:126},12).to({_off:true},4).wait(121));

	// HAND
	this.instance_9 = new lib.Tween6_1("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(785.1,241.1,1,1,0,0,0,6.6,-202);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({rotation:-1.2,y:245.1,startPosition:4},4).to({regX:6.7,regY:-201.9,rotation:1.3,x:785.3,y:243.5,startPosition:12},8).to({regY:-202,rotation:1.9,x:785.2,y:243,startPosition:14},2).to({regX:6.6,regY:-201.9,scaleX:1.01,scaleY:1.01,rotation:5.5,x:787.9,y:238.4,startPosition:24},10).to({startPosition:35},11).to({regX:6.8,rotation:-0.7,x:788.3,y:238.3,startPosition:60},25).to({regX:6.9,regY:-201.8,scaleY:1,rotation:-1.5,x:781.9,y:242.5,startPosition:64},4).to({scaleY:1.01,rotation:-3.6,x:768.9,y:244.9,startPosition:72},8).wait(17).to({startPosition:89},0).to({scaleY:0.99,rotation:0,skewX:-2.9,skewY:-2.7,x:772.4,y:250.3,startPosition:94},5).to({regX:6.8,scaleY:1.01,rotation:-1.9,skewX:0,skewY:0,x:778.6,y:241.4,startPosition:103},9).to({regX:6.6,regY:-202,scaleX:1,scaleY:1,rotation:0,x:785.1,y:241.1,startPosition:114},11).to({_off:true},16).wait(121));

	// HAND
	this.instance_10 = new lib.Tween7_1("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(1002.1,241.4,1,1,0,0,0,-7,-201.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regY:-201.3,rotation:1,x:1002,y:245.5,startPosition:4},4).to({regX:-6.9,rotation:-0.8,y:243.9,startPosition:12},8).to({regX:-7,rotation:-1.5,y:243.4,startPosition:14},2).to({rotation:-7.7,x:999.4,y:239,startPosition:24},10).to({startPosition:35},11).to({regX:-6.9,regY:-201.2,rotation:1.3,x:999.9,y:239.1,startPosition:60},25).to({scaleY:0.99,rotation:-1.3,x:994.2,y:239.4,startPosition:64},4).to({scaleY:1,rotation:-6.6,x:982.7,y:234.1,startPosition:72},8).wait(17).to({startPosition:89},0).to({regX:-6.8,regY:-201.1,scaleX:1,scaleY:0.98,rotation:0,skewX:-5.9,skewY:-5.7,x:986.4,y:242,startPosition:94},5).to({regX:-6.9,regY:-201.2,scaleX:1,scaleY:1,rotation:-4.9,skewX:0,skewY:0,x:992.8,y:236.9,startPosition:103},9).to({regX:-7,regY:-201.4,rotation:0,x:1002.1,y:241.4,startPosition:114},11).to({_off:true},16).wait(121));

	// Layer 10
	this.instance_11 = new lib.Tween2("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(893.6,218.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({y:222.7},4).to({y:218.7},20).to({startPosition:0},11).to({regX:0.1,regY:0.1,x:894,y:218.8},25).to({scaleY:0.99,rotation:-0.8,x:888,y:221.1},4).to({scaleY:1,rotation:-2.9,x:875.9,y:219.3},8).wait(17).to({rotation:-2.9},0).to({regY:0.2,rotation:-2.3,x:879.7,y:225},5).to({regY:0.1,rotation:-1.2,x:886.4,y:218.9},9).to({regX:0,regY:0,rotation:0,x:893.6,y:218.7},11).to({_off:true},16).wait(121));

	// Symbol 6
	this.instance_12 = new lib.Symbol6("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(892.5,200.2,1,1,0,0,0,26.1,-44.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({y:204.2},4).to({y:200.2},20).to({startPosition:0},11).to({regY:-44.1,rotation:-3,x:892.9,y:200.3},25).to({scaleY:0.99,rotation:-3.8,x:886.5,y:202.6},4).to({scaleY:1,rotation:-5.9,x:873.8,y:200.9},8).wait(17).to({startPosition:0},0).to({regY:-44,scaleX:1,scaleY:0.98,rotation:0,skewX:-5.4,skewY:-5.2,x:877.8,y:208.4},5).to({regY:-44.1,scaleX:1,scaleY:1,rotation:-4.2,skewX:0,skewY:0,x:884.9,y:200.4},9).to({regY:-44.2,rotation:0,x:892.5,y:200.2},11).to({_off:true},16).wait(121));

	// Layer 12
	this.instance_13 = new lib.Tween3("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(896,252.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({startPosition:0},4).to({startPosition:0},20).to({startPosition:0},11).to({x:896.3},25).to({regX:0.1,scaleY:0.99,rotation:-0.8,x:891,y:254.1},4).to({regY:0.1,scaleY:1,rotation:-2.9,x:880,y:252.5},8).wait(17).to({rotation:-2.9},0).to({rotation:-2.3,x:883.4,y:252.4},5).to({regY:0,rotation:-1.2,x:889.5,y:252.1},9).to({regX:0,rotation:0,x:896},11).to({_off:true},16).wait(121));

	// Layer 13
	this.instance_14 = new lib.Tween4("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(893.6,207.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({y:211.3},4).to({y:207.3},20).to({startPosition:0},11).to({regX:0.1,regY:0.1,x:894,y:207.4},25).to({scaleY:0.99,rotation:-0.8,x:887.8,y:209.8},4).to({scaleY:1,rotation:-2.9,x:875.3,y:207.9},8).wait(17).to({rotation:-2.9},0).to({regY:0.2,rotation:-2.3,x:879.2,y:213.7},5).to({regY:0.1,rotation:-1.2,x:886.1,y:207.5},9).to({regX:0,regY:0,rotation:0,x:893.6,y:207.3},11).to({_off:true},16).wait(121));

	// BODY
	this.instance_15 = new lib.BODY_1("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(893.6,384.5,1,1,0,0,0,120.2,192.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({regY:193,scaleY:0.99,y:387},4).to({regY:192.8,scaleY:1,y:384.5},20).to({startPosition:0},11).to({x:893.9},25).to({regX:120.4,scaleX:1,scaleY:0.99,rotation:-0.8,x:890.9,y:385.7},4).to({regY:193,scaleX:1.02,scaleY:1,rotation:-2.9,x:884.4,y:384.9},8).wait(17).to({rotation:-2.9},0).to({scaleY:0.98,rotation:0,skewX:-2.3,skewY:-2.2,x:886.4,y:388.6},5).to({regY:192.9,scaleY:1,rotation:-1.2,skewX:0,skewY:0,x:890,y:384.6},9).to({regX:120.2,regY:192.8,scaleX:1,rotation:0,x:893.6,y:384.5},11).to({_off:true},16).wait(121));

	// LEFT THIGH
	this.instance_16 = new lib.LEFTTHIGH("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(846.8,681.1,1,1,0,0,180,45,119.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({startPosition:0},4).to({startPosition:0},20).to({startPosition:0},11).to({startPosition:0},25).to({regX:44.9,scaleY:1,x:845.8,y:680.9},4).to({scaleY:1,skewX:-0.6,x:843.5,y:680.4},8).wait(17).to({startPosition:0},0).to({regY:119.8,scaleY:1,skewX:-0.3,x:844.7,y:680.7},5).to({regX:45,regY:119.7,scaleY:1,skewX:0,x:846.8,y:681.1},9).to({startPosition:0},11).to({_off:true},16).wait(121));

	// LEFT THIGH
	this.instance_17 = new lib.LEFTTHIGH("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(940.5,681.1,1,1,0,0,0,45,119.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({startPosition:0},4).to({startPosition:0},20).to({startPosition:0},11).to({startPosition:0},25).to({scaleY:1.01,skewX:-0.5,skewY:-1.5,x:939.3,y:680.5},4).to({scaleX:1,scaleY:1.03,skewX:-1.8,skewY:-4.7,x:937.1,y:679.2},8).wait(17).to({startPosition:0},0).to({regY:119.8,scaleX:1,scaleY:1.02,skewX:-1,skewY:-3,x:938.3,y:680},5).to({regY:119.7,scaleY:1,skewX:0,skewY:0,x:940.5,y:681.1},9).to({startPosition:0},11).to({_off:true},16).wait(121));

	// LEFT LEG
	this.instance_18 = new lib.LEFTLEG("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(816.5,787,1,1,0,0,180,57,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({startPosition:0},4).to({startPosition:0},20).to({startPosition:0},11).to({startPosition:0},25).to({skewX:-0.1,x:815.7,y:787.1},4).to({skewX:-0.6,x:814.2,y:787},8).wait(17).to({startPosition:0},0).to({skewX:-0.3,x:815,y:787.1},5).to({skewX:0,x:816.5,y:787},9).to({startPosition:0},11).to({_off:true},16).wait(121));

	// LEFT LEG
	this.instance_19 = new lib.LEFTLEG("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(972.5,795,1,1,0,0,0,59,25.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({startPosition:0},4).to({startPosition:0},20).to({startPosition:0},11).to({startPosition:0},25).to({startPosition:0},4).to({startPosition:0},8).wait(17).to({startPosition:0},0).to({startPosition:0},5).to({startPosition:0},9).to({startPosition:0},11).to({_off:true},16).wait(121));

	// LEFT SHOE
	this.instance_20 = new lib.LEFTSHOE("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(859.7,1011.2,1,1,0,0,180,0,41.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({startPosition:0},4).to({startPosition:0},20).to({startPosition:0},11).to({startPosition:0},25).to({startPosition:0},4).to({startPosition:0},8).wait(17).to({startPosition:0},0).to({startPosition:0},5).to({startPosition:0},9).to({startPosition:0},11).to({_off:true},16).wait(121));

	// LEFT SHOE
	this.instance_21 = new lib.LEFTSHOE("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(963.2,1011.2,1,1,0,0,0,35.5,41.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).to({startPosition:0},4).to({startPosition:0},20).to({startPosition:0},11).to({startPosition:0},25).to({startPosition:0},4).to({startPosition:0},8).wait(17).to({startPosition:0},0).to({startPosition:0},5).to({startPosition:0},9).to({startPosition:0},11).to({_off:true},16).wait(121));

	// Layer 21
	this.instance_22 = new lib.Tween5("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(893,572.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).to({startPosition:0},4).to({startPosition:0},20).to({startPosition:0},11).to({startPosition:0},25).to({skewX:-0.3,skewY:-1.3,y:572.2},4).to({scaleX:1,skewX:-1.2,skewY:-4.1,y:571.4},8).wait(17).to({startPosition:0},0).to({regX:0.1,regY:0.1,skewX:-1.1,skewY:-3,y:571.9},5).to({regX:0,regY:0,scaleX:1,rotation:-1.2,skewX:0,skewY:0,x:892.9,y:572.6},9).to({rotation:0,x:893,y:572.5},11).to({_off:true},16).wait(121));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(744.7,42.6,298,1011.1);


// stage content:
(lib._2HistoryFWS = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_8 = function() {
		playSound("_2Audiomp3copy");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(8).call(this.frame_8).wait(191));

	// Layer 30
	this.instance = new lib.Wholeguy("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(260.1,26,0.693,0.693,0,0,0,910.6,70.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(199));

	// Layer 31
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.298)").s().p("ApMD9QiTgegIhhQgFg3AshSQA3hmBJglQBOgpChgCQBkgCAlgGQAbgDCvAAQCnAAA5gnQAZgQASgDQAdgFA8AIIAXADQBoANBnBMQBhBIAKA5QACANAXA0QAVAwADAfQANBjiPAeQh5AbiHgcIgEgBQi6gmiQAAQiUAAjBAwQhXAWhOAAQg4AAgygMg");
	this.shape.setTransform(248.8,682);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(199));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(379.8,363.9,207.1,702);
// library properties:
lib.properties = {
	id: '452A640B95C6434B820697CBDCF0C1BA',
	width: 470,
	height: 715,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"/sounds/history/_2Audiomp3copy.mp3", id:"_2Audiomp3copy"}
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
an.compositions['452A640B95C6434B820697CBDCF0C1BA'] = {
	getStage: function() { return exportRoot.getStage(); },
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



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;