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



(lib.Twefn1y = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ACogqIgRA2QBNALBEAyIAEgWQgkhMhggRgAkoAAQB9gQBdAPIAAhDQiJgUhUBHg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#323232").s().p("ACXAMIARg2QBgARAkBMIgEAWQhEgyhNgLgAkrgRQBUhHCJAUIAABDQhdgPh9AQg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31,-8.3,62,16.6);


(lib.Tween20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AiCqVQEkCOAjInIBgIRQkMB9j5geIhEpJ");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4A4A4A").s().p("AjfKQIhFpJICircQEkCOAjInIBgIRQjZBljLAAQgwAAgwgGg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("AkOlTQBbHbCFCIQA1A4AtAJQBPAeAngpQBEgzAShzQAhjvgokO");
	this.shape_2.setTransform(3.4,85.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DEB17F").s().p("AA0FRQgtgJg1g4QiFiIhbnbIIHgKQAoEOghDvQgSBzhEAzQgWAYgkAAQgaAAgigNg");
	this.shape_3.setTransform(3.4,85.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.3,-67.2,61.8,189);


(lib.Tween18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4A4A4A").s().p("AorkoICGhVIBjg1IA4BhID3FHIC0j0IB/jTIEMDWIotLNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.6,-46.5,111.2,93.1);


(lib.Tween17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AFImfQADATgLAmQgIAxgCAaQgLCGBABtIABAGQABAKABAJQAXDilyFpQljiogfl7QA3hYASh+IAVh+IAUh/QAPhSBPgdQA6gUA3ACQCGABBrAnIAOAFQAMAFALAFADsoCQARAIAOAJQANAJAKAJQAZAYALAfQABAEABAE");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C2894C").s().p("AhSEaIjblSIAVh/QAPhRBMgeIBxgSIBWAGIAjAFQBFAJAzARIAOAEIAXAKIAEACQARAIAOAKQAMAIAKAJQAaAYAKAfIADAIIAAABQAIAfgHAmQgDAigRAdQACgaAJgxQAIgdAAgTIAAgJIAAAJQAAATgIAdQgJAxgCAaIgHANIAShYIjNGBQgnAfgrAAQgoAAgtgfg");
	this.shape_1.setTransform(3,-25.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DEB17F").s().p("AlvhRQA3hZASh9IAVh/IACAEIDbFTQAtAfAoAAQArAAAngfIDNmCIgSBYIAIgNQgLCGBABtIABAGIACATQAXDjlyFoQljiogfl6g");
	this.shape_2.setTransform(0,10.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.7,-58.2,75.6,116.5);


(lib.Tween16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AlQjRQAfg4ADg0QgOAAgMADQgjAIgcAWQg7AvgfByQgHAcgGAfQgRCAAtDdQAKgVAJgUQCMkXCTCTQBEBWBgB8QBZh8BDhXQCWi/AaiBAlQjRQgIgoAEgjACgBvQCPiNCIECQAOAaANAfQAujdgSiAQgFgfgIgcQggh5hBguQgagSgegGQgMgDgHgEQAIA4ATA4QAJgogEgjAigBwQiVjAgbiB");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2D2D2D").s().p("AG3D2QAliggOiAQgOiChAhkQBBAuAgB5QAIAcAFAgQASB/guDdQgNgegOgbgAnugtQAGggAHgcQAfhyA7gvQhyDUA6E9IgTAoQgtjdARh/gAE1kuQAHAEAMADIANAeQAEAigJApQgTg5gIg3gAlUkJIAMgeQAMgDAOgBQgDA0gfA5QgIgpAEgig");
	this.shape_1.setTransform(0,-1.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4A4A4A").s().p("AmGj5QAcgWAigHIgLAeQgEAiAIAoQAbCCCVC/QiTiTiMEYQg6k9ByjUgAChCTQCWjAAaiBQAJgogEgiIgNgfQAeAHAaARQBABkAOCBQAOCBglCgQiIkDiPCPg");
	this.shape_2.setTransform(-0.1,-3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.9,-33.1,101.8,66.4);


(lib.Tween13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AiWAcQBPBzCqgnQARgFAKgIQAVgOAEgYAiWhxIACABQAAAPABAOQASCqDagU");
	this.shape.setTransform(-23.4,3.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("AlUk/QAngTAkgYQBthKBWh7ICvkuQAygQAOA4IikFeIFikuQA0AFgMBFIgSATQA0ASgMA7Ij4E2QgXApE3htQAjADgRArIkICoQhoB9h8BYQgiAYgjALQgnAMgpgDAF9qoIkUEfAlUk/QgGh7gihfQg0hYg0AQQAWClgWCfIBkDGIAAAWIAACNIAAE4QAJB+A7B+AhPBtQAWAfASAgQBsC+gbDhQgRCNhrCKAlUk/QCNBOgLB4");
	this.shape_1.setTransform(0,-1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B2B2B").s().p("AiWANQAHgygEg9QASCqDagUQgKAAgIgFQApADAngMQgEAYgVAOQgKAIgRAFQgrAKgmAAQhtAAg7hWg");
	this.shape_2.setTransform(-23.4,5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C2894C").s().p("AhnGnQg8h9gJh/IAAk2IAAiOIAAgXIACAYIgCgBIACABIABAdQAFA8gIA0QAbCsAYCCQAbCUAoBgQgRBiATBLQgdg8gWhhgABphMQAUgOAEgYIADAIQAWAfASAgQgngPgcgSgAh/oXQAmgTAkgYQBaB4gkB5QALh4iLhOg");
	this.shape_3.setTransform(-21.2,20.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DEB17F").s().p("AkIMOQgThLARhhQgohggbiUQgYiCgbiuQBPB0CrgoQARgFAKgIQAdATAnAPQBsC9gbDhQgRCNhrCKQgmAbghAAQhAAAgvhhgAl9gwIgBgdIgCgYIhkjGQAWiegWimQA0gPA0BXQAiBgAGB6QCNBPgLB3QAkh4hbh5QBthKBWh7ICvkuQAygPAOA3IikFeIFikuQA0AGgMBEIgSAUQA0ARgMA7Ij4E2QgXApE3htQAjADgRArIkICoQhoB9h8BYQgiAYgjAMQgnALgpgDQAIAFAKAAQgXADgVAAQixAAgQiYgABpmXIEUkeg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.4,-88.9,99,176.8);


(lib.Tween12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ABwAaQADAAAIgEIAVgFIAQgEABtAZQAEgCgCADIANgEIAkgKAifgqQBBBeB+gKIBCgMIALgF");
	this.shape.setTransform(-5.6,-29.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("AiSEwQg7h+gJh+IAAk3IAAhAIAAgHQAAgBAAgCIAAAAQAAgIAAgHQAAgBAAgCQAAgSANgMQAJgKAVgBQBVigA6AbQAUAoANAfIAyB3IAcBTQAEANADAIQABACAAABQADAJABABQADAEADAEQAAABAAABQABAAAAAAQABADACACIAAAAQAFAIAFAIQABABAAAAQA7BqAXB3QADAQAEARQALBEgCBFQAAARgBARIgBAGQAAABAAABQgRCNhsCK");
	this.shape_1.setTransform(-0.1,-7.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DEB17F").s().p("AhdG/QgThLARhhQgohggbiUQgYiBgbiuQBBBfB/gKIBBgMIALgEIACAAIANgEIAkgJIAAAAIAAAAIAQgFIgQAFIgQAEIgVAGIgLAEIAHADQBQBdAbB0IAMAxQANAyAKBHIAHAxIgBAHIAAACQgRCNhsCKQgmAbghAAQg/AAgvhhgAi/lDQgFgJgRgOIAAAAIAAgPIAAgDQAAgSANgMQAJgKAVgBQBVihA6AbIAhBIIAyB3IAXBMIgrAHQgoAGgjAAQhxAAgnhAg");
	this.shape_2.setTransform(-0.2,-6.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2B2B2B").s().p("AikgFQADgZABgbQAAgFgEgIIAAgGIAAgDQARAOAFAIQAyBTCxgZIArgHIAJAZIABACIADAEIAEAKIAFAIIABABIABABIgQAHIgRAHIgNAEQAAgBAAAAQABgBgBAAQAAAAgBABQAAAAgCAAIABAAIgMAFIhBAMIgXABQhtAAg7hVgACOA5IgEgDIARgEIAKAQIgBAAIgCABQgHAAgNgKg");
	this.shape_3.setTransform(-5.1,-33.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C2894C").s().p("AiSDyQg7h+gJh9IAAk4IAAhBQAFAIAAAFQgBAbgEAZQAbCuAYCCQAbCTAoBgQgRBhATBLQgdg8gXhggADOCDQgKhHgNgyIgMgwQgbh1hQhdIgHgDIALgFIAVgFIAEADQAQAMAGgDIAAAAIABABQA7BpAXB4IAHAhQALBDgCBFIgBAiIgHgxgAA2j8IAAAAQABgBABAAQAAgBABAAQAAABAAAAQAAAAgBABIgCAAgABWkHIAQgHIADAEIgjAKIAQgHgABYkmIgBgBIgIgbIgYhLIAcBTIAHAUIABAEIgDgEg");
	this.shape_4.setTransform(-0.1,-1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.6,-61.7,45,109.7);


(lib.Tween7copy3 = function(mode,startPosition,loop) {
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


(lib.Tween6copy3 = function(mode,startPosition,loop) {
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


(lib.Tween5copy = function(mode,startPosition,loop) {
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


(lib.Tween4copy4 = function(mode,startPosition,loop) {
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


(lib.Tween4copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AooBfQgIhfBIgEQChgLDSh3QDQh2BqgRQAmgDAjAGAIqBVQgoBIjPBJQkbBkoNiO");
	this.shape.setTransform(-0.5,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DEB17F").s().p("An6C8QgqgYgJhFQgIhfBIgEQChgLDSh3QDQh2BqgRQAmgDAjAGQBzATBaBwQA6BHAcBhQAIAagPAaQgoBIjPBJQh1ApifAAQjgAAk0hTg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.8,-28.1,112.8,56.3);


(lib.Tween3copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4A4A4A").s().p("AorknICGhXIBkg0IA4BhID2FGIC0jzIB+jSIENDUIotLNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.6,-46.5,111.2,93.1);


(lib.Tween3copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AlUA6QgGh6gihfQg0hYg0AQQAWClgWCeICDEoAF9kuIkUEfAlUA6QAngTAkgYQBthJBWh7ICvkuQAygQAOA4IikFeIFikuQA0AFgMBFIgSATQA0ASgMA7Ij4E1QgXApE3htQAjADgRArIkICoQiCCfi6BWQgGADgdAKAlUA6QCNBOgLB4");
	this.shape.setTransform(0,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C2894C").s().p("AhFhMQAngTAjgYQBbB3gkB5QALh4iMhNg");
	this.shape_1.setTransform(-27.1,13.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DEB17F").s().p("AjPHpQgrgFhIhFQhIhEApAmIiDkpQAWidgWimQA0gPA0BXQAiBgAGB5QCNBPgLB3QAkh4hbh5QBthJBWh7ICvkuQAygPAOA3IikFeIFikuQA0AGgMBEIgSAUQA0ARgMA7Ij4E1QgXApE3htQAjADgRArIkICoQiCCfi6BWQgGAEgdAKQgSAGgYAAQgOAAgPgCgABpgTIEUkeg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.4,-50.1,99,99.6);


(lib.Tween2copy = function(mode,startPosition,loop) {
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


(lib.Symbol8copy = function(mode,startPosition,loop) {
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


(lib.Symbol7copy = function(mode,startPosition,loop) {
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


(lib.Symbol6copy4 = function(mode,startPosition,loop) {
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


(lib.Symbol6copy3 = function(mode,startPosition,loop) {
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


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Ak4kKQB1GrDYFDQA6BEAuAFQBRAXAjgsQA/g5AHh1QAUm2jGnn");
	this.shape.setTransform(31.3,54.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DEB17F").s().p("AB9ItQgugFg6hEQjYlDh1mrQCQjXCBgrQCBgsArAFQDGHngUG2QgHB1g/A5QgXAdgrAAQgWAAgcgIg");
	this.shape_1.setTransform(31.3,54.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-2.5,64.6,114.9);


(lib.Lipy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{MPB:0,Cons:5,FV:10,O:16,Ooo:21,W:26,Ah:31,TNL:36,E:41});

	// M,B,P
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ADBg4Qg8A9hHA0Ih5AAQhNgvg4gk");
	this.shape.setTransform(-0.7,20.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AARjiIj5BTIgEBpIAqg8IDCgQIAOgaIAOAaICwgEIAWA+IALhhQhuguhugbgAC6DDIAFhlQg4Btg5AOQgmAMgJgrIhEgBQgOAfgQAHQhZAbg3iDIAMBrAgmA7IAOAmIA3ACIAJgqgAighNQDHAPCJgjAg1gdQBDASA1gY");
	this.shape_1.setTransform(0,-5.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C2894C").s().p("Ag8gNQBEASA0gYQgGAXgVALQgNAEgMAAQgjABghghg");
	this.shape_2.setTransform(0.7,-6.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#323232").s().p("AhDEMQhMgug4gmIgMhqQA4CCBYgbQAQgGAOgfIBEABQAIArAmgMQA5gOA5htIgGBlQg7A+hHA1gAgYA4IgOgmIBOgCIgJApgAjni5ID3hTQBuAbBvAvIgLBhIgWg+IiwAEIgOgaIgOAaIjBAPIgrA9g");
	this.shape_3.setTransform(0,-0.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("ACjhNQgcANgjAIAibgrQAoAnA7AUQBCAVBHgdQArgRAjgnACjhNIgEAdACnhqQATgDASgDQgVAlgYAbACnhqIgEAdAATjjIj8BPIgKBoIAqg6IDLgNIAOgaIAOAaIC5gKIAdBDIAAhkQhzgqhugbgAC8DEIAGhlQg5Btg5AOQgmAMgIgrIhEgBQgOAfgQAHQhZAbg3iDIAMBrAgjA8IAOAmIA2ACIAKgqgAibgrQgVgVgQgbQAKABALAAIAJAZgAiihBQAaAMAjAFAirhaQDFAFCNgV");
	this.shape_4.setTransform(-0.3,-5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EEEAEC").s().p("Ag1A5Qg7gVgogmIgIgWQAaAMAjAFQgjgFgagMIgJgZQDFAFCOgVIgEAdQgcANgkAIQAkgIAcgNIgEAdQgkAmgqASQgqARgoAAQgbAAgcgJgAiggYIAAAAg");
	this.shape_5.setTransform(-0.5,-9.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#56293B").s().p("AjGgMIAWAAIAJAZIAHAVQgWgVgQgZgACeABIAEgcIAkgGQgUAkgYAbg");
	this.shape_6.setTransform(0.3,-12.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#323232").s().p("AhAENQhMgvg4gkIgMhrQA3CCBZgbQAQgGAOgfIBEAAQAIAsAmgMQA5gOA5htIgGBlQg8A+hHA1gAgVA5IgOgnIBOgBIgKAqgAjpi9ID8hQQBuAcBzAqIAABkIgdhDIi5AKIgOgaIgOAaIjLAMIgqA6g");
	this.shape_7.setTransform(-0.3,-0.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("ACnhlQATgDASgDIgpAkQglAXgWADACnhlIgEAdIAAABAATjeIj8BPIgKBoIAqg6IDLgNIAOgaIAOAaIC5gKIAdBDIAAhkQhzgqhugbgAAQg4QAqgEAuAPQABAAACABQALAEAHAEAC8C/IAGhlQg5Btg5AOQgmAMgIgrIhEgBQgOAfgQAHQhZAbg3iDIAMBrAgjA3IAOAmIA2ACIAKgqgAiBgdQANgGAOgEQAIgDAJgDQA6gSArAHAgXggQAEgEAEgEQAOgNARgDAijg/QAhAZAcgBAijg/IgdgXQAKABALAAgAirhVQDFAFCNgV");
	this.shape_8.setTransform(-0.3,-5.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EEEAEC").s().p("AigAHIgJgVQDFAFCOgVIgEAdIAAABQglAWgXADQgtgPgqAEQgrgHg7ASIgRAGIgCAAQgbAAgfgYg");
	this.shape_9.setTransform(-0.5,-12.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#56293B").s().p("AjGAAIAWAAIAIAWgACeANIAEgcIAkgGIgoAjg");
	this.shape_10.setTransform(0.3,-14.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#323232").s().p("AhAEIQhMgvg4gkIgMhrQA3CCBZgbQAQgGAOgfIBEAAQAIAsAmgMQA5gOA5htIgGBlQg8A+hHA1gAgVA0IgOgnIBOgBIgKApgAjpi4ID8hQQBuAcBzAqIAABkIgdhDIi5AKIgOgaIgOAaIjLAMIgqA6g");
	this.shape_11.setTransform(-0.3,-1.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(2,1,1).p("AC0g4Qg4A9hCA0IhxAAQhIgvg0gk");
	this.shape_12.setTransform(-0.6,21.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(1,1,1).p("ABEguQAIAZgZAQQgaAPgYAAQgXAAgdgOQgdgQAMgZQALgZASgRQARgRAXAAQAYAAASARQASARAHAYgAANjoIjpBTQADA3AIA3IAZhBQBegOBYgBIAMgbIANAbQBUgGBSACIALBCQAPgyAGgzQhogvhogbgACqDJIAFhlQg0Btg1AOQgkAMgIgsIg/AAQgOAegOAHQhUAbgziDIALBrAgpBOIAOAnIA3ABIAJgqg");
	this.shape_13.setTransform(0.4,-4.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C2894C").s().p("AgpgKQAtALAmgQQgNAPgMALQgHAFgJAAQgTAAgXgag");
	this.shape_14.setTransform(0.9,0.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#56293B").s().p("AgxAqQgdgQALgZQAMgYARgQQASgRAXAAQAYAAASARQARAQAIAXQAHAZgZARQgZAQgYAAQgXAAgdgQg");
	this.shape_15.setTransform(0.2,-9.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#323232").s().p("AhBESQhIgvg0glIgLhrQAzCDBUgbQAOgHAOgfIA/ABQAIAsAkgMQA1gOA0huIgFBlQg4A/hCA0gAgbBLIgOgmIBOgCIgJAqgAjci+IDphTQBoAbBoAuQgGAzgPAzIgLhDQhSgChUAHIgNgbIgMAbQhYABheAOIgZBBQgIg3gDg3g");
	this.shape_16.setTransform(0.4,-0.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(1,1,1).p("AAtguQAAAWgLAQQgLAPgQAAQgPAAgLgPQgLgQAAgWQAAgWALgRQALgPAPAAQAQAAALAPQALARAAAWgAANjoIjpBTQADA3AIA3IAZhBQBegOBYgBIAMgbIANAbQBUgGBSACIALBCQAPgyAGgzQhogvhogbgACqDJIAFhlQg0Btg1AOQgkAMgIgsIg/AAQgOAegOAHQhUAbgziDIALBrAgpBOIAOAnIA3ABIAJgqg");
	this.shape_17.setTransform(0.4,-4.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C2894C").s().p("AgfgNQAjASAcgYQgDAXgLALQgHAFgHAAQgSAAgRghg");
	this.shape_18.setTransform(0.9,-1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#56293B").s().p("AgaAmQgLgQAAgWQAAgVALgRQALgPAPAAQAQAAALAPQALARAAAVQAAAWgLAQQgLAQgQAAQgPAAgLgQg");
	this.shape_19.setTransform(1.1,-9.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(2,1,1).p("AC6g4Qg6A9hEA0Ih1AAQhKgvg2gk");
	this.shape_20.setTransform(-0.7,21.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(1,1,1).p("AAMjqQh0AphqA6IAQBlIAag/QBTgXBRgCIANgaIANAaQBLgCBFATIAgA1IANhYQhXhFhwgZgAg6gdQgfgagZgIQAlAAA0gbQAlgUAnAVQAaANAjACQgeAVgYAYAg6gdQAEADAFAEQA5AqAvguQACgCABgBACvDLIAFhlQg2Btg3AOQglAMgIgrIhCgBQgOAfgPAHQhWAbg1iDIALBrAgqBNIAOAmIA2ACIAKgqgAg6gdQBGgZAuAZAglAUQAxAbAlgh");
	this.shape_21.setTransform(0.5,-4.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C2894C").s().p("AgrgSQAxAbAlggQAHAYgdASQgPAFgKAAQgiAAgFgqg");
	this.shape_22.setTransform(1.1,-0.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D57CB5").s().p("AgxAAIgJgHQBHgZAtAZIgCADQgZAYgcAAQgYAAgcgUg");
	this.shape_23.setTransform(0.5,-6.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#56293B").s().p("Ag4AjQgfgZgagIQAlAAA0gaQAmgUAnAUQAaAOAiABQgdAUgYAYQgugZhGAZg");
	this.shape_24.setTransform(0.3,-10.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#323232").s().p("AhFEUQhJgug3gmIgLhrQA1CDBWgbQAPgGAOgfIBCABQAIArAlgMQA3gOA2htIgFBlQg6A/hFA0gAgcBKIgOgmIBOgCIgKApgAjSixQBqg6B0gpQBwAZBXBGIgNBXIggg0QhFgThLACIgNgaIgNAaQhRAChTAWIgaA/g");
	this.shape_25.setTransform(0.5,0);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(1,1,1).p("AATjmQh9Ath/AgIgKBmIAog6IDNgIIAOgbIAOAbIC7gNIAbA+IAAhlQh5gXhogmgAiyhZQBPA4BzgKQB0gKBDg7AhOAYQAmAOAuAAQA2gDApgWQBDgkAfhZAC8DHIAGhlQg5Btg5AOQgmAMgIgsIhEAAQgOAegQAHQhZAbg3iDIALBrAgjBLIAOAnIA2ABIAKgqgAhOAYQhMgbgihWQAFAAAFAAQC5ADDAgaAhOAYQBZgnBaAc");
	this.shape_26.setTransform(-0.2,-4.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EEEAEC").s().p("Ai8gLQC6ACC+gZQhDA5hzAKIghACQheAAhDgug");
	this.shape_27.setTransform(0.8,-12.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#56293B").s().p("AjBgtIAKABQBPA2BzgKQBzgJBDg7QgfBYhDAlQhZgdhYApQhMgdgjhVg");
	this.shape_28.setTransform(0.3,-9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D57CB5").s().p("AhYAFQBYgoBZAdQgoAVg1AEQgwAAgkgOg");
	this.shape_29.setTransform(0.9,-2.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#323232").s().p("AhAEPQhNgug4glIgMhrQA4CDBZgbQAQgHAOgfIBDABQAJAsAmgMQA5gPA5htIgGBlQg8A/hHA0gAgVBJIgPgnIBOgCIgJAqgAjqjCQCAggB9gtQBoAmB5AWIAABmIgbg+Ii7AMIgOgaIgPAaIjMAJIgoA6g");
	this.shape_30.setTransform(-0.2,-0.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(1,1,1).p("AhtAIQAyARA5g1QAPgPAqADQAqACg1BHQAMgDAMgEQALgDALgFQAFgDAGgDQBDgkAfhYAiyhZQBPA3BzgKQB0gKBDg6AgOAlIAAAAQAKABAKAAQAUgCASgDAATjmQh9Ash/AhIgKBlIAog5IDNgJIAOgaIAOAaIC7gNIAbA+IAAhlQh5gWhogmgAhtAIQg1gfgahDQAFAAAFABQC5ACDAgZAhtAIQAPAJAQAHQAdAKAjADQAVgNATgcAC8DHIAGhlQg5Btg5AOQgmAMgIgrIhEgBQgOAfgQAHQhZAbg3iDIALBrAgjBGIAOAmIA2ACIAKgqg");
	this.shape_31.setTransform(-0.2,-4.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#56293B").s().p("AAxAAQgqgDgOAOQg5A3gzgSQg0gggahCIAKABQBPA2BzgJQBzgJBDg7QgfBYhDAlIgLAFQgKAFgLADQgMAEgMADQA0hHgqgCg");
	this.shape_32.setTransform(0.3,-8.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D57CB5").s().p("AAEAnIgBAAQAXgNASgcQgSAcgXANQghgDgdgKQgRgHgPgJQAzARA3g1QAQgPAqADQAqACg0BHQgSADgUACIgVgBg");
	this.shape_33.setTransform(-2.1,-4.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#323232").s().p("AhAEQQhNgug4gmIgMhqQA4CCBZgbQAQgGAOgfIBDAAQAJAsAmgMQA5gOA5htIgGBlQg8A+hHA1gAgVBDIgPgmIBOgDIgJAqgAjqjCQCAghB9gtQBoAnB5AWIAABlIgbg+Ii7ANIgOgaIgPAaIjMAJIgoA5g");
	this.shape_34.setTransform(-0.2,-0.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(1,1,1).p("Ai/guQAMAOASARQAEAEAFAEQA/A2BugGQBjgMA3g8QAOgPALgUQABgCABgCAASjpQh9AtiBAdIgUBjIAtg1IDUgHIAOgbIAOAbIC9gRQAVAUARAoQACg2gNgtQh7gThogmgAi/guQBvA8B6gPQBZgMBHg5ADOh5QASgEgKAhQgDAMgJAKAjFhiQBlAzBygIQBzgJBJg5AjFhiQgRAAAHAZQAHARAJAKAC7DKIAGhlQg5Btg5AOQgmAMgIgsIhEAAQgOAegQAHQhZAbg3iDIAMBrAgkBMIAOAnIA2ABIAKgqgAjFhiQDLAJDIgg");
	this.shape_35.setTransform(-0.1,-4.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#EEEAEC").s().p("AicAhIgJgIQgSgSgMgNQBvA9B6gQQBZgMBHg4IgCADQgLAVgOANQg3A9hjAMIgWABQhfAAg4gxgAjJg6QDLAJDIggQhJA6hzAIIggABQhgAAhXgsg");
	this.shape_36.setTransform(0.3,-8.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#323232").s().p("AhBETQhMgvg4glIgMhrQA3CDBZgbQAQgHAOgfIBEABQAIArAmgLQA5gOA5htIgGBkQg8A/hHA0gAgWBJIgOgmIBOgCIgKAqgAjsjIQCBgdB9gtQBoAmB7ASQANAugCA1QgRgngVgUIi9AQIgOgaIgOAaIjUAHIgtA2g");
	this.shape_37.setTransform(-0.1,-0.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#56293B").s().p("AjDANQgJgKgHgQQgHgYARgBQBlAzBygJQBzgHBJg6QASgEgKAhQgDAMgJALQhHA4hZAMQgZADgYAAQhgAAhYgxg");
	this.shape_38.setTransform(0.3,-10.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{y:20.2}}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape,p:{y:20.4}}]},5).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape,p:{y:19.4}}]},5).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},6).to({state:[{t:this.shape_16},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_12}]},5).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},5).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape,p:{y:21}}]},5).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_27},{t:this.shape_31},{t:this.shape,p:{y:21.1}}]},5).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape,p:{y:21.6}}]},5).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.7,-28.8,49.4,55.7);


(lib.LEFTTHIGHcopy4 = function(mode,startPosition,loop) {
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


(lib.LEFTTHIGHcopy3 = function(mode,startPosition,loop) {
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


(lib.LEFTSHOULDERcopy4 = function(mode,startPosition,loop) {
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


(lib.LEFTSHOULDERcopy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AhjutQESCYAqINIBTIyQgNAGgNAGAjGF8IA/F1QAGDDCCgGQAOAAANgBQADAAACAAQDKgNAniMQAOgcAFgyQAAgCAAgCQAEgtgDg9IgSkBIgCghAjGF8QDrAhDjhiQAFgDAFgCAkrkvIA+KkQATAEAUAD");
	this.shape.setTransform(31.5,97);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C2894C").s().p("AitB9IhAl1QDtAhDihiIAMAcQizBWjLgIIgDAAQg+AJBfGTQAfBjBKAIIgbABIgIABQh7AAgGi9g");
	this.shape_1.setTransform(35.3,159.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DEB181").s().p("AgzE7QhKgIgfhjQhfmTA+gJIADAAQDLAICzhWIARECQAEA8gEAsIAAAEQgFAygOAdQgoCLjIANIgFAAgAC4k2IAJgEIADAgg");
	this.shape_2.setTransform(39.5,159.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2D2D2D").s().p("ABaB1IgDg9QgjnDj7jiQETCYApIMIBTIzIgbAEg");
	this.shape_3.setTransform(41.5,65.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4A4A4A").s().p("Ai/KfIgngHIg9qkQgglfAki0QAShDAcgqQAog1BtA3QD7DjAjHDIADA9IBTH5IAbgFIgaAMIgJAFQiqBJiuAAQg7AAg8gIg");
	this.shape_4.setTransform(30.7,67.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62.5,192.2);


(lib.LEFTSHOEcopy4 = function(mode,startPosition,loop) {
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


(lib.LEFTSHOEcopy3 = function(mode,startPosition,loop) {
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


(lib.LEFTLEGcopy4 = function(mode,startPosition,loop) {
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


(lib.LEFTLEGcopy3 = function(mode,startPosition,loop) {
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


(lib.LEFTARMcopy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ADXrzQAPC3gLCLQgXEBg2HHQgyGbgMBCAjUrKQgcIvAuFhQAWCkAJFW");
	this.shape.setTransform(22.3,87.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DEB180").s().p("AijLRQgJlXgWijQguliAcouQDLiBDgBXQAPC3gLCMQgXEAg2HHQgyGbgMBCQgZADgZAAQhtAAhUg2g");
	this.shape_1.setTransform(22.3,85.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,8.4,46.7,155.7);


(lib.LEFTARMcopy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ADOs4QAEAOAEASQAAADABAEQATBqgQDRQgzI9g7G/QgNA1gHAtQgGAtgJA/QgKA/gQAGAjXrNQgaINAxFhQAbD1gSDtQgCAVAFA7");
	this.shape.setTransform(22.5,91.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C2894C").s().p("Ai/EEQgxlhAaoNQALhNAgguQgdCqAtMIQAVE4gwDhQASjugbj0gABkKHQBYuIASm2IAJABIABAIQAAAIABAHIACAHIAAAEIABABQAEAXgBAbIAAAEQADBogHCCQgzI8g7G/g");
	this.shape_1.setTransform(22.4,81.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DEB180").s().p("AhXNRQhngYgFg7QgFg7ACgVQAwjhgVk3QgusJAdipQAuhEBagEQC8gHA2BrQAFAJADAKIACAEIAAABIAAACIgCgHIgIgBQgSG1hZOIIAJACQgNA1gGAtIgQBsQgJA/gRAGIgJABQgaAAhTgUg");
	this.shape_2.setTransform(24,86.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,47,174.8);


(lib.HANDcopy4 = function(mode,startPosition,loop) {
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,53.3,99.4);


(lib.HANDcopy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AgMnQIglArIhaBmQhEA5gRCLQgRCKgOBsQABAKACAIQAIAeATgFQAKgDAPgOQAtguA5jVQARCGgKBXQgLBQgvCrQgQAsAQAUQAYARArg7QAGgJAHgLQAEgGADgGAAtFdQgUAogdAqQgdAngdgGQgegKAThDQAEgQAHgTQAMgVAKgWQAEgKAFgKQAlhcAKhmAAtFdQghBRAgAFQAgABAdgzQAAgBABgCQACgDABgDQAFgIAEgJAD2nKIAKHzQgDCIg/B9QgYAzgcAGQgKADgKgDABvBKQgBCPhBCEADLAvQgLCghKCY");
	this.shape.setTransform(25.6,51.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C2894C").s().p("Ag0FuIAMgjQALgVAKgWIAJgUQAmhcAKhmQAkB0hNCGQgtBRAHAmQgdgKAShDgABCFIQBCiEABiPQAxBahWC6QgZA0gGAhQgfgFAghRgACMFSQBJiYAMigQASBSgPBCQgQBDg1BhIgJABQgFAAgFgBgAjmB4IgEgSIAgj2QARiLBEg5IBahmIhHCcQgZAngPA1IgOA+QgfCGgVCPIgFABQgOAAgHgag");
	this.shape_1.setTransform(23.5,54);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DEB180").s().p("AhNHqQgIgmAuhRQBMiGgkh0QgJBmgmBcIgJAUQgKAWgMAVIgHAMIgNAUQgrA7gYgRQgQgUAQgsQAvirALhQQAKhXgRiGQg5DVgtAuQgPAOgKADQAViPAfiGIAOg+QAOg1AagnIBGicIAlgrQA0hBBLAQQBLAQA4AnIAKHzQgDCIg/B9QgYAzgcAGQA1hhAPhDQAQhCgThSQgLCghKCYIgJARIgDAGIgBADQgdAzgggBQAFghAag0QBVi6gxhaQgBCPhBCEQgUAogdAqQgZAigaAAIgHgBg");
	this.shape_2.setTransform(27.1,49.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0.2,53.3,99.3);


(lib.BODYcopy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AHh70QDjCzFDB+QDIBvgiFKQgBAHgCAHQgKBCgQBHQgBAAAAABQggCMgzCbQgIAghEEqQg7EEALHpQACBGADBKQAZJVASHaQgkAlgzAfIgBAAQkDCZqAAAQgKAAgLAAQgKAAgLAAQsAAAjbjdQATnaAZpVQAYpUhEkpQhDkqgJggQhPjyghjNQgDghgCgeQgKkSCwhmQADgBACgBQFDh+DiizQD5iVD1ADQEBADDTCPg");
	this.shape.setTransform(120.2,192.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhXATIAAgIIEHAAIAAAIgAh/ARQgIgBgFgIQgOAPgRgLIgCgCQgHgPAQgGQAKgEAHAIIAJAKIAIgIIAHgIIADgDQgBAEgEAFIgHAHIgEAFQADAFAGADQAHADAFgHQAAAJgIAAIgEgBgAikgHQgKAHAHAIQAGAJAKgEQAGgCAEgFIgHgIQgFgGgHAAIgEABgAhFgMIAAgGIDxAAIAAAGg");
	this.shape_1.setTransform(185,106.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgaAbQgLgMAAgPQAAgOALgMQAMgLAOAAQAPAAALALQAMAMAAAOQAAAPgMAMQgLALgPAAQgOAAgMgLgAAYAQQALADAAgLQgEAHgHgDQgHgDgCgFIAEgEIAHgIQAEgFABgEIgEADIgGAIIgIAIIgJgKQgGgIgKAEQgQAGAHAPIACACQARALANgPQAFAIAIABgAgQAHQgGgIAKgHQAJgCAFAHIAHAIQgEAFgFACIgFABQgGAAgFgGg");
	this.shape_2.setTransform(169.8,106.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4A4A4A").s().p("AAVeIIgVAAIgVAAQsAAAjbjdQATnaAZpVQAYpUhEkpQhDkqgJggQhPjyghjNQgDghgCgeQgKkSCwhmIAFgCQFDh+DiizQD5iVD1ADQEBADDTCPQDjCzFDB+QDIBvgiFKIgDAOQgkA6gjBQIAtgBIgBABIgsAAIhjD9IgGAWIgBABQiSHkAUIqIAbU6IACAFQkCCZp8AAIgFAAgAwxpLQAJAgBDEqQA8EEgMHpIgECQQgZJVgTHaQAlAlAzAfIAAAAIADgFIAa06QAUoqiSnkIAAgBIgHgWIhkj9QgphrgihNIADAgQALBJASBOIArABIgrAAQAgCMAzCbgAHVt2QgLAMAAAPQAAAQALALQAMALAPAAQAPAAALgLQAMgLAAgQQAAgPgMgMQgLgLgPAAQgPAAgMALgAIwtJIEIAAIAAgIIkIAAgAJCtpIDyAAIAAgGIjyAAg");
	this.shape_3.setTransform(120.2,192.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2D2D2D").s().p("AOWWNIgDgFIga05QgUoqCSnlIAAgBIAHgVIBij+IAtAAQggCMgzCbQgJAghDEqQg8EFAMHoIAECQQAZJVATHaQgkAlg0AfgAuQWNQgzgfgkglQASnaAZpVIAFiQQALnog7kFQhEkqgIggQgzibggiMIAqAAIBlD+IAGAVIABABQCSHlgUIqIgbU5IgCAFgASo1dQgLBCgQBGIgtABQAkhPAkg6gAxczUgAyHzVQgRhOgMhJIgDggQAiBOApBqg");
	this.shape_4.setTransform(120.5,228.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,242.4,387.5);


(lib.BODYcopy3 = function(mode,startPosition,loop) {
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


(lib.Tween7copy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DEB180").s().p("AiQCWQg+g8gChXQgBhVA8g+QA8g+BXgCQBVgBA9A8QA+A8ADBWQABBWg8A+Qg7A+hXABIgEABQhTAAg9g7g");
	this.shape.setTransform(10.2,-36.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// HAND
	this.instance = new lib.HANDcopy4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(6.4,110.6,1,1,0,0,0,39,6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// LEFT ARM
	this.instance_1 = new lib.LEFTARMcopy4("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(10.5,-37.5,1,1,0,0,0,22.5,11.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// LEFT SHOULDER
	this.instance_2 = new lib.LEFTSHOULDERcopy4("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-7.8,-201.2,1,1,0,0,0,21.4,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.6,-203.9,67.3,407.9);


(lib.Tween6copy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// HAND
	this.instance = new lib.HANDcopy4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-4.2,111.2,1,1,0,0,180,37,6.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// LEFT ARM
	this.instance_1 = new lib.LEFTARMcopy4("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-10.6,-37.8,1,1,0,0,180,22.6,11.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// LEFT SHOULDER
	this.instance_2 = new lib.LEFTSHOULDERcopy4("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(8.3,-201.8,1,1,0,0,180,20.7,4.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.7,-204.2,67.5,408.5);


(lib.Thalay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		playSound("_34195397");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(454));

	// Anim-01-Lip Sync-Setup_V2.psd
	this.instance = new lib.Lipy("single",0);
	this.instance.parent = this;
	this.instance.setTransform(1249,197);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({startPosition:26},0).wait(1).to({startPosition:41},0).wait(4).to({startPosition:36},0).wait(2).to({startPosition:0},0).wait(13).to({startPosition:5},0).wait(2).to({startPosition:41},0).wait(2).to({startPosition:36},0).wait(3).to({startPosition:5},0).wait(2).to({startPosition:36},0).wait(3).to({startPosition:41},0).wait(2).to({startPosition:10},0).wait(2).to({startPosition:16},0).wait(3).to({startPosition:36},0).wait(2).to({startPosition:21},0).wait(3).to({startPosition:31},0).wait(2).to({startPosition:36},0).wait(1).to({startPosition:10},0).wait(2).to({startPosition:31},0).wait(2).to({startPosition:5},0).wait(3).to({startPosition:31},0).wait(2).to({startPosition:5},0).wait(2).to({startPosition:31},0).wait(2).to({startPosition:36},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:41},0).wait(2).to({startPosition:36},0).wait(3).to({startPosition:0},0).wait(9).to({startPosition:31},0).wait(2).to({startPosition:41},0).wait(4).to({startPosition:36},0).wait(3).to({startPosition:16},0).wait(7).to({startPosition:0},0).wait(4).to({startPosition:36},0).wait(2).to({startPosition:5},0).wait(2).to({startPosition:41},0).wait(2).to({startPosition:36},0).wait(2).to({startPosition:21},0).wait(5).to({startPosition:5},0).wait(4).to({startPosition:26},0).wait(3).to({startPosition:21},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:5},0).wait(2).to({startPosition:36},0).wait(1).to({startPosition:41},0).wait(1).to({startPosition:5},0).wait(2).to({startPosition:36},0).wait(2).to({startPosition:31},0).wait(2).to({startPosition:36},0).wait(3).to({startPosition:31},0).wait(2).to({startPosition:36},0).wait(2).to({startPosition:10},0).wait(2).to({startPosition:21},0).wait(2).to({startPosition:36},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:41},0).wait(3).to({startPosition:36},0).wait(2).to({startPosition:41},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:31},0).wait(2).to({startPosition:36},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:16},0).wait(3).to({startPosition:36},0).wait(2).to({startPosition:5},0).wait(2).to({startPosition:16},0).wait(2).to({startPosition:31},0).wait(2).to({startPosition:5},0).wait(1).to({startPosition:36},0).wait(3).to({startPosition:41},0).wait(6).to({startPosition:0},0).wait(7).to({scaleX:1.02},0).wait(3).to({scaleX:1,startPosition:31},0).wait(3).to({startPosition:36},0).wait(2).to({startPosition:0},0).wait(9).to({startPosition:5},0).wait(3).to({startPosition:31},0).wait(3).to({startPosition:5},0).wait(2).to({startPosition:26},0).wait(3).to({startPosition:41},0).wait(2).to({startPosition:36},0).wait(2).to({startPosition:0},0).wait(5).to({startPosition:26},0).wait(3).to({startPosition:21},0).wait(2).to({startPosition:10},0).wait(3).to({startPosition:36},0).wait(2).to({startPosition:41},0).wait(3).to({startPosition:36},0).wait(3).to({startPosition:31},0).wait(2).to({startPosition:36},0).wait(2).to({startPosition:41},0).wait(2).to({startPosition:36},0).wait(2).to({startPosition:5},0).wait(2).to({startPosition:36},0).wait(2).to({startPosition:21},0).wait(4).to({startPosition:36},0).wait(3).to({startPosition:5},0).wait(5).to({startPosition:0},0).wait(4).to({startPosition:31},0).wait(2).to({startPosition:36},0).wait(2).to({startPosition:26},0).wait(2).to({startPosition:36},0).wait(2).to({startPosition:5},0).wait(2).to({startPosition:36},0).wait(2).to({startPosition:31},0).wait(2).to({startPosition:36},0).wait(3).to({startPosition:26},0).wait(2).to({startPosition:31},0).wait(2).to({startPosition:16},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:41},0).wait(2).to({startPosition:36},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:36},0).wait(2).to({startPosition:31},0).wait(2).to({startPosition:36},0).wait(2).to({startPosition:10},0).wait(2).to({startPosition:36},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:31},0).wait(2).to({startPosition:0},0).wait(7).to({startPosition:41},0).wait(3).to({startPosition:36},0).wait(2).to({startPosition:21},0).wait(4).to({startPosition:5},0).wait(2).to({startPosition:26},0).wait(1).to({startPosition:31},0).wait(3).to({startPosition:5},0).wait(2).to({startPosition:31},0).wait(3).to({startPosition:0},0).wait(3).to({startPosition:31},0).wait(2).to({startPosition:36},0).wait(2).to({startPosition:41},0).wait(1).to({startPosition:5},0).wait(2).to({startPosition:41},0).wait(3).to({startPosition:36},0).wait(2).to({startPosition:41},0).wait(3).to({startPosition:36},0).wait(2).to({startPosition:16},0).wait(3).to({startPosition:10},0).wait(1).to({startPosition:5},0).wait(2).to({startPosition:31},0).wait(3).to({startPosition:36},0).wait(2).to({startPosition:5},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:31},0).wait(3).to({startPosition:5},0).wait(2).to({startPosition:31},0).wait(2).to({startPosition:36},0).wait(7).to({startPosition:0},0).wait(58));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1224.3,168.2,49.4,55.7);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.instance = new lib.HANDcopy3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(774.5,597.4,1,1,0,0,180,25.6,49.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Aj3nIQgBAFgBAGQgZCCAPEGQgBAaAAAVIgBAiQAAAKABAIQAAABAAABQAAACAAADQABANALA+QANBLAfA9QAeA8AVALQAUALADABAgLnSQAyA7AxA9QARAUAQAWQAHAKAHAKQALARAKARQAPAbANAdQAKAVAHAYQAAACABACQAHAZAGAbQABAGAGAWQAGAWAHAoQAHAnALAmQALAmACAmQgGAwgfgVQgggWgHgPQgIgOgUgoQgVhZgxhiQgegngIBRQAAADAAADQgKBxAVBxQABABAAACQAEAYAGAXQABAEABADQAUBFASBGQACAEABAEQAAABAAABIABAGQgCgIgCgIAgtBHQALBEAOA4QAJApALAiQAbBSARAmQAOAfAMAOAgfGUQADAHAEAHQABABABACQAAAAAAAAQANAZAfAQQAfARARgsAiDA+QAKBxAmBpQAOAlAPAlQAHAUAQAeAB3F7QADAKAAABQACAIAHAWQAGAXgOAJQgOAIgKgEQgKgEgOgMQgCgCgDgDAjSAuQAUBrAeBuQABAFABAFQAMApAQAhQAKAUANARQACAEADADQAQAVAQAEQAKACAdgO");
	this.shape.setTransform(775.3,597.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DEB180").s().p("AAWHaQgfgRgNgYIAAgBIgCgDIgHgOQgQgegHgUIgdhKQgmhpgKhxQAKBxAmBpIAdBKQAHAUAQAeQgdAOgKgCQgQgEgQgUIgFgHQgNgRgKgVQgQghgMgpIgCgJQgehvgUhrQAUBrAeBvIACAJQAMApAQAhQgDAAgUgMQgVgLgfg8Qgeg8gNhLQgLg+gBgOIAAgFIAAgBIgBgTIABgjIABguQgPkGAYiCQBsg3A8APQA9APAKAEQAyA7AxA9QARAUAQAWIAOAUIAVAiQAPAbANAdQAKAVAHAYIABAFQAHAZAGAbIAHAbQAGAWAHAnQAHAoALAmQALAmACAmQgGAxgfgWQgggWgHgOIgcg3QgVhagxhhQgegngIBRIAAAGQgKBxAVBxIABADQAEAYAGAXIACAHQAUBFASBGIAEAQIgBgGIADALIAJAfQAGAWgOAJQgOAIgKgEQgKgDgOgNIgFgFQgMgOgOgfQgRgmgbhSQgLgigJgpQgOg4gLhEQALBEAOA4QAJApALAiQAbBSARAmQAOAfAMAOQgMAggUAAQgIAAgIgEg");
	this.shape_1.setTransform(775.3,596.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("AAkGYIAIAUQArAvASgvQgJglgJgkQgahogfhnIgTjhQgFhEApATQAfATAvBGIAyCLQAHAKAHAIQAoArAmgiIg+kgIjEkkAhJAsQAMBQAeBYIBDDEAh8FDQALAVANALQANALAPACQAQABABgOQAAgLgIgVIAqBQQAMAdAUADQAVgBAEgaAjTAeIAWBzIBBCyAj1mQQgSDVgDDZQAAADAAACQAMA6AQAvQAlBsA8A1IARAWAiSAkQAMBLAaBZQAVA/AYA8");
	this.shape_2.setTransform(776,599);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C2894C").s().p("ABYDqQgbiQgchDQheiPhDiqIDDEjIA+EhIgFABQgYAAgMg5g");
	this.shape_3.setTransform(789.8,582.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DEB180").s().p("AAsG/IgIgVIhDjEQgehYgMhPQAMBPAeBYIBDDEQgEAagVABQgUgDgMgdIgqhPQAIAUAAALQgBAOgQgBQgPgCgNgLQgNgLgLgUIhBiyIgWh0IAWB0IBBCyIgRgWQg8g1glhsQgQgwgMg5IAAgGQADjYASjWIAHgQQAkhFBvgCQBdAJAHAbQBDCrBfCQQAcBDAbCOQANA/AcgGQgmAhgogrIgOgSIgyiLQgvhFgfgTQgpgUAFBEIATDiQAfBmAaBoIASBKQgJAXgPAAQgPAAgWgXgAhsDaQAVA/AYA9QgYg9gVg/QgahYgMhLQAMBLAaBYg");
	this.shape_4.setTransform(776,597.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(2,1,1).p("Aj+mlQgCAKgCAIQgFAZgDASQgEAWgBAMQgCAQAABNQAAAKgGBVQgGBVAAARQAAARAFAuQAEAuAAALQAABCBECOQBDCPAugTAgkm/QACAFACAEQAKATAHAPQAJATAGALQALAXASAlQATAkAeAfQAiAkASAdQAFAIBIBmQAvBEARAcQAQAdgBATQgBATgFAFQgFATgRAEQgRADgOgIQgwgWhxiMQgdgWASAQQg2gngJgDQgWgHgRAZQgnA0gJBzQAABmAoBhQAMAdAQAcQAGAMAIAPQAEAGAEAIQAJATADAVQAAAggVgPQgWgPgDgFQgKgQgIgOQgagpgMgVQgBgBAAgBQgPgZgLgcQgRgsgghCAA3g2QgsgMgjBeQglBfACBtQAAAfAEAZAjUC/QAFAHAZA1QAYAzAYAuQABADACADQAZAxALANQAtAhALga");
	this.shape_5.setTransform(777.2,592);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C2894C").s().p("AhKgFQAJh0Amg0QASgZAVAHQAKADA2AnQgsgMgjBfQglBfACBtQAAAfAEAYQgohhAAhlg");
	this.shape_6.setTransform(775.2,601.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DEB180").s().p("AgOG3QgWgPgDgFIgSgeIgmg+IgBgCQgPgZgLgcQgRgsgghCQAgBCARAsQALAcAPAZIABACIAmA+IASAeQgLAagtghQgLgNgZgxIgDgGQgYgugYgzQgZg1gFgHQAFAHAZA1QAYAzAYAuIADAGQAZAxALANQguAShDiOQhEiOAAhCQAAgLgEguQgFguAAgRQAAgRAGhVIAGhfQAAhNACgQQABgMAEgWIAIgrQCBgfBhgEIARAiIAPAeIAdA8QATAkAeAfQAiAkASAdIBNBuQAvBEARAcQAQAdgBATQgBATgFAFQgFATgRAEQgRADgOgIQgwgWhxiMQgdgWASAQQg2gngJgDQgWgHgRAZQgnA0gJBzQAABlAoBiQAMAcAQAdIAOAbIAIAOQAJATADAVQAAAVgJAAQgFAAgHgEg");
	this.shape_7.setTransform(777.2,592.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(2,1,1).p("AAQnJQAnA8gGBAAgrndQACACADACQAtAlAqBnQACAGACAGIBJBVIBnCHQAYAfgXATQgGAGgHAEQgaANghgWIhphXQADARgqCnQgFAVAAAWQAAA/AoA9QAXAjAgAqQAdAqgFAYQgBAEgCAEQAHAHAGAIQAEAEACAFQAUAkgaAWAgRi4QAYAPAgAUIAOAMAhVjaQAWAHAuAbQhQBagGDjAgLCnQAQAfAJAPQADAFAGAJQAIANANAWQAWAiAbAgQAbAfAFAGAg2CcQAHANAHANQARAgATAeQAAABABAAQAJARALARQAhAwAmAuIAAABQAMAPANAOQAXAaACASAjfnIQgeEeAXE8QASBzDhDBQAeAXATgPQABgBABgBQAAgBAAAAQAtAiAWgZQAIgJgBgM");
	this.shape_8.setTransform(773.6,594.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C2894C").s().p("AgDHJQAQgWgbglIAAgBQhQhbhDh6IgGgQQgGgSACgUQAFjiBRhaIA4AjIAOAMQADAQgpCoQgGAVAAAVQABBAAnA8QAWAjAgAqQAeArgGAXIgDAIIggglQgagfgVgiIgWgkIgIgNIgaguIAaAuIAIANIAWAkQAVAiAaAfIAgAlIAOAPIAGAJQAUAkgbAWQgCgRgWgaIgZgeIAAAAQglgughgxIgWghIAAgBQgTgfgSgfIgNgaIANAaQASAfATAfIAAABIAWAhQAhAxAlAuIAAAAIAZAeQAWAaACARQACANgIAIQgKALgNAAQgTAAgYgTgACIhgIivjHIhEi0QAuAlAqBmIAFANIBHBUIBnCHQAYAggXATQgFAGgHADQAGgagTgag");
	this.shape_9.setTransform(780.4,594.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#DEB180").s().p("AAYHkQjhjCgShzQgXk7AekfQAOg/BcgGQBQgCA2BHQAnA8gHA/QgqhmgtglIgFgFIAFAFIBDC0ICwDHQATAagGAaQgaANgigWIhphWIgOgMIg3gjQgugcgWgGQAWAGAuAcQhRBagFDiQgCAUAGASIAGAQQBDB6BPBbIAAABQAcAlgRAWIgBAAIgCACQgHAGgKAAQgOAAgSgNg");
	this.shape_10.setTransform(772.4,591.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(2,1,1).p("AhNmCQAAAMAJALQAJAMATANQAEACAEACQAZAHAUANQAWAOATAUQAAABABABQAEAFAFAFQAFAHAGAHIAJALIAyBCQALAZAIAaQAFAOADAPAgYiVQAPALARANQAKAHALAJIANANIAqAwQBAgBANgwAiBB9IAwCdIBfDIQAeAZAVgeQAEgFAEgHIhFjdIgJh/IBACmIBOCgQAqAeAJg2QAAgEAAgFIg/ifIgYiOIBvEHQAiAUANgaQADgJACgLQgohRgrivQgCgDAAgFQAIhOgWhYQgBgHgDgGAA3oMQByCngCB0QgCB1gBALQAAAIgDAIAhZi7QAVAIAsAeQgzAygdBiIgVBnQAqADArgBQAPgBARgBQAlgDAkgHQAPgDAPgDQADgBACAAQAOgDAOgEAkGCSQACAMACAOQACAfAMAoQAQA1AkBDQAHAOBFBzIADAFQACADABACQAXAeAXgJQABgBABAAQAAgBARgkQAAAAgFgaQgCgJgCgMQgJgtgvhxQgKgWgKgYIgDgHIAAhTAiFDjIgPgjIAFgMAiBB9IgEATIgHAkAh9BmIgEAXAkGCSQgBAJAAAIQABAEAAAEAiMHGIAFAJAjRm0QgyETgDEz");
	this.shape_11.setTransform(772.4,594.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#DEB180").s().p("AA0IzIgDgFIgEgFQhDhzgIgOQgjhDgRg1QgMgogCgfIgEgaIAEAaIgDgBIgBgIIAAgRQAEkzAykTQAQg1BFgHQDdAWgWDcQAEhHhDALQgVgNgYgHIgJgEQgTgNgJgMQgIgLgBgMQABAMAIALQAJAMATANIAJAEQAYAHAVANIgiAEQAYAyAZAMIADABQAKAGAJAJIACABQCDCMiNgFIgNgNIgVgQIgBAAIgfgYIAfAYIABAAIAVAQIANANIAqAvQBAgBAOgvIADANQgBBKgVBMIACAHIADAQQAfCHBQCOQgMAagjgUIhvkHIgBgYIAcgHIgcAHIgEABIgfAGQgkAHglADIghACIgDAAIgQABIAAAAIgBAAQggAAgggDIAVhoQAchhA0gyQgsgegVgIQAVAIAsAeQg0AygcBhIgVBoIgFAXIgEATIgHAkIgCAAIgGAMIAQAjIACAHIAUAuQAvBxAJAtIAFAVIgGADQAHASAEAFIgSAlIgCABQgFACgGAAQgRAAgRgXgACxIfIhhjIIgwidIAFgXQAgADAgAAIABAAIAAAAIAQgBIADAAIAhgCQAlgDAkgHIAeClIBZCcIAEgDIAAAJQgJA2gqgeIhNigIhCimIgCgPIghAPIAPCZIBZDIIAKgFIgHAMQgMAQgOAAQgMAAgNgLgAAbIMIgGgJQgGALgJgBIgkhlQAIAOBDBzIgSgdgAAlCjIAAAAgAFHgXIAAAAgAFEgkIADgQIAAAdIgDgNgAD2i2IAhAZQAKAUAIAVgACvj9IAAAAgAmkpEIAGgFIgGAGg");
	this.shape_12.setTransform(756.1,588.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C2894C").s().p("AhjH/IAhgBIAAABIghAAgAjjEbIgPiZIAhgPIACAPIAKCAIBFDcIgKAFgAgFHAQA7gQBXgcIAAAAQhaAgg5ANgAhqEOIgeilIAfgGIAEgBIABAZIAYCNIA/CfIgEAEgAg1BnIgDgRIgCgHQAVhLABhLQAWBYgIBOIACAJQAqCvAoBQQgCALgDAJQhPiOgfiGgAFcFZIADgBIgDABgAleDNIAGgMIACAAIAHgjIABBSgAifhTQCNAFiDiMIgCgBQgJgJgKgGIgDgBQgZgMgYgyIAigEQAXAOASAVIACABIAIAKIAMAPIAIAKIgIgKQAWjdjdgWIAZgBQAaABAWAJQBkgGAGgeQBxCmgCB0QgBB1gBALIgDAQQgOAwhAABgAhCikQAKAZAIAaIAJAdIgJgdQgIgagKgZQgIgVgKgTIghgagAh9jwIgMgPIgIgKIgCgBQgSgVgXgOQBDgLgEBIgAi8ktIAAAAg");
	this.shape_13.setTransform(792.5,593.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(2,1,1).p("AiikJIAIBmIAPDqIBVFJQAGAHAEAFQAaAaAJgzIgak+IBBClIBvDAQAhAWASggQADgFADgHIhWjXIgUh+IBPCgIBZCaQAsAaAFg2QAAgEAAgEIhLibIgjiLICDD+QAkARAKgbQADgJAAgMQgthNg5irQgCgDgBgFQAHkUg3hhQgJgRgMgLAiikJQh9BjguABQgvAAACgsQA6g+BghJQABAAABgBQACgBABgBQBhhNB3gKAiikJQC1BtBQiRAhEA4QARABARAAQAtABAtgFQAQgCARgDQAkgFAlgKQAPgEAOgEQACgBADgBQANgEAOgF");
	this.shape_14.setTransform(763.7,599.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C2894C").s().p("AiYGQQAJiVghjQIAiACIgBALIAaE/QgGAhgNAAQgHAAgJgIgAgXDNIgaiYIAfgRIADAOIATB/IBWDWIgJAGgABgC3IgqijIAdgIIAFgBIADAYIAjCLIBLCaIgEADgACIALIgFgOIgCgHQApjShqi7QAiANAUAXQA3BggHEVIADAIQA5CrAtBNQAAAMgDAIQhbiHgpiEgAj3iwIgPABIgIhnQC2BuBQiRQglCXh5AAQglAAgsgOg");
	this.shape_15.setTransform(774.5,601);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#DEB180").s().p("ACPGsIhvjAIhBilIABgLIACAAIANAAIAAAAIAAAAQAkAAAkgEIADAAIAhgFQAkgGAlgKIAqCjIBlCUIAEgDIAAAJQgFA2gsgaIhZiaIhPihIgDgOIgfARIAaCYIBpDAIAJgGIgGANQgLATgQAAQgLAAgNgKgAg0GTIhVlKIgPjpIAPgBQC+A8AwjFQhQCRi1huQh9BkguAAQgvABACgsQA6g+BghJIACgCIADgCQBhhMB3gLQCCgUBOBEQAMALAJARQgUgXgigNQBqC7gpDRIACAHIAFAPQApCEBbCHQgKAbgkgRIiDj9IgDgYIAbgKIgbAKIgFABIgdAIQglAKgkAGIghAFIgDAAQgkAEgkAAIAAAAIAAAAIgNAAIgCAAIgigCQAhDQgJCVIgKgMg");
	this.shape_16.setTransform(763.5,599.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(2,1,1).p("AhNmCQAAAMAJALQAJAMATANQAEACAEACQAZAHAUANQAWAOATAUQAAABABABQAEAFAFAFQAFAHAGAHIAJALIAyBCQALAZAIAaQAFAOADAPAgYiVQAPALARANQAKAHALAJIANANIAqAwQBAgBANgwAA3oMQByCngCB0QgCB1gBALQAAAIgDAIAiBB9IAwCdIBfDIQAeAZAVgeQAEgFAEgHIhFjdIgJh/IBACmIBOCgQAqAeAJg2QAAgEAAgFIg/ifIgYiOIBvEHQAiAUANgaQADgJACgLQgohRgrivQgCgDAAgFQAIhOgWhYQgBgHgDgGAhZi7QAVAIAsAeQgzAygdBiIgVBnQAqADArgBQAPgBARgBQAlgDAkgHQAPgDAPgDQADgBACAAQAOgDAOgEAkGCSQACAMACAOQACAfAMAoQAQA1AkBDQAHAOBFBzIADAFQACADABACQAXAeAXgJQABgBABAAQAAgBARgkQAAAAgFgaQgCgJgCgMQgJgtgvhxQgKgWgKgYIgDgHIAAhTAiFDjIgPgjIAFgMAiBB9IgEATIgHAkAh9BmIgEAXAkGCSQgBAJAAAIQABAEAAAEAiMHGIAFAJAjRm0QgyETgDEz");
	this.shape_17.setTransform(772.4,594.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#DEB180").s().p("AA0IzIgDgFIgEgFQhDhzgIgOQgjhDgRg1QgMgogCgfIgEgaIAEAaIgDgBIgBgIIAAgRQAEkzAykTQAQg1BFgHQDdAWgWDcQAEhHhDALIgiAEQAYAyAZAMIADABQAKAGAJAJIACABQCDCMiNgFIgNgNIgVgQIgBAAIgfgYIAfAYIABAAIAVAQIANANIAqAvQBAgBAOgvIADgQIAAAdIgDgNIADANQgBBKgVBMIACAHIADAQQAfCHBQCOQgMAagjgUIhvkHIgBgYIAcgHIgcAHIgEABIgfAGQgkAHglADIghACIgDAAIgQABIAAAAIgBAAQggAAgggDIAVhoQAchhA0gyQgsgegVgIQAVAIAsAeQg0AygcBhIgVBoQAgADAgAAIABAAIAAAAIAQgBIADAAIAhgCQAlgDAkgHIAeClIBZCcIAEgDIAAAJQgJA2gqgeIhNigIhCimIgCgPIghAPIAPCZIBZDIIAKgFIgHAMQgVAegegZIhhjIIgwidIAFgXIgFAXIgEATIgHAkIgCAAIgGAMIAQAjIACAHIAUAuQAvBxAJAtIAFAVIgGADQAHASAEAFIgSAlIgCABQgFACgGAAQgRAAgRgXgABdkuQAJAMATANIAJAEQAYAHAVANQgVgNgYgHIgJgEQgTgNgJgMQgIgLgBgMQABAMAIALgAAbIMIgGgJQgGALgJgBIgkhlQAIAOBDBzIgSgdgAFHgXIAAAAgACKhYIAAAAgAD2i2IAhAZQAKAUAIAVgAmkpEIAGgFIgGAGg");
	this.shape_18.setTransform(756.1,588.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C2894C").s().p("AhjH/IAhgBIAAABIghAAgAjjEbIgPiZIAhgPIACAPIAKCAIBFDcIgKAFgAgFHAQA7gQBXgcIAAAAQhaAgg5ANgAhqEOIgeilIAfgGIAEgBIABAZIAYCNIA/CfIgEAEgAg1BnIgDgRIgCgHQAVhLABhLQAWBYgIBOIACAJQAqCvAoBQQgCALgDAJQhPiOgfiGgAFcFZIADgBIgDABgAleDNIAGgMIACAAIAHgjIABBSgAifhTQCNAFiDiMIgCgBQgJgJgKgGIgDgBQgZgMgYgyIAigEQAXAOASAVIACABIAIAKIAMAPIAIAKIAzBCQAKAZAIAaIAJAdQgOAwhAABgAgnhUIgJgdQgIgagKgZQgIgVgKgTIghgaIgIgKQAWjdjdgWIAZgBQAaABAWAJQBkgGAGgeQBxCmgCB0QgBB1gBALIgDAQIAAAAgAh9jwIgMgPIgIgKIgCgBQgSgVgXgOQBDgLgEBIgAi8ktIAAAAg");
	this.shape_19.setTransform(792.5,593.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(2,1,1).p("Aj+mlQgCAKgCAIQgFAZgDASQgEAWgBAMQgCAQAABNQAAAKgGBVQgGBVAAARQAAARAFAuQAEAuAAALQAABCBECOQBDCPAugTAgkm/QACAFACAEQAKATAHAPQAJATAGALQALAXASAlQATAkAeAfQAiAkASAdQAFAIBIBmQAvBEARAcQAQAdgBATQgBATgFAFQgFATgRAEQgRADgOgIQgwgWhxiMQgdgWASAQQg2gngJgDQgWgHgRAZQgnA0gJBzQAABmAoBhAA3g2QgsgMgjBeQglBfACBtQAAAfAEAZQAMAdAQAcQAGAMAIAPQAEAGAEAIQAJATADAVQAAAggVgPQgWgPgDgFQgKgQgIgOQgagpgMgVQgBgBAAgBQgPgZgLgcQgRgsgghCAjUC/QAFAHAZA1QAYAzAYAuQABADACADQAZAxALANQAtAhALga");
	this.shape_20.setTransform(777.2,592);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#DEB180").s().p("AgOG3QgWgPgDgFIgSgeIgmg+IgBgCQgPgZgLgcQgRgsgghCQAgBCARAsQALAcAPAZIABACIAmA+IASAeQgLAagtghQgLgNgZgxIgDgGQgYgugYgzQgZg1gFgHQAFAHAZA1QAYAzAYAuIADAGQAZAxALANQguAShDiOQhEiOAAhCQAAgLgEguQgFguAAgRQAAgRAGhVIAGhfQAAhNACgQQABgMAEgWIAIgrQCBgfBhgEIARAiIAPAeIAdA8QATAkAeAfQAiAkASAdIBNBuQAvBEARAcQAQAdgBATQgBATgFAFQgFATgRAEQgRADgOgIQgwgWhxiMQgdgWASAQQg2gngJgDQgWgHgRAZQgnA0gJBzQAABlAoBiQAMAcAQAdIAOAbIAIAOQAJATADAVQAAAVgJAAQgFAAgHgEgAgnGjIAAAAg");
	this.shape_21.setTransform(777.2,592.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(2,1,1).p("AAkGYIAIAUQArAvASgvQgJglgJgkQgahogfhnIgTjhQgFhEApATQAfATAvBGIAyCLQAHAKAHAIQAoArAmgiIg+kgIjEkkAg/FDIAqBQQAMAdAUADQAVgBAEgaAhJAsQAMBQAeBYIBDDEAh8FDQALAVANALQANALAPACQAQABABgOQAAgLgIgVAjTAeIAWBzIBBCyAj1mQQgSDVgDDZQAAADAAACQAMA6AQAvQAlBsA8A1IARAWAiSAkQAMBLAaBZQAVA/AYA8");
	this.shape_22.setTransform(776,599);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#DEB180").s().p("AAsG/IgIgVIhDjEQgehYgMhPQAMBPAeBYIBDDEQgEAagVABQgUgDgMgdIgqhPQAIAUAAALQgBAOgQgBQgPgCgNgLQgNgLgLgUIhBiyIgWh0IAWB0IBBCyIgRgWQg8g1glhsQgQgwgMg5IAAgGQADjYASjWIAHgQQAkhFBvgCQBdAJAHAbQBDCrBfCQQAcBDAbCOQANA/AcgGQgmAhgogrIgOgSIgyiLQgvhFgfgTQgpgUAFBEIATDiQAfBmAaBoIASBKQgJAXgPAAQgPAAgWgXgAhsDaQAVA/AYA9QgYg9gVg/QgahYgMhLQAMBLAaBYgAAkGqg");
	this.shape_23.setTransform(776,597.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(2,1,1).p("Aj3nIQgBAFgBAGQgZCCAPEGQgBAaAAAVIgBAiQAAAKABAIQAAABAAABQAAACAAADQABANALA+QANBLAfA9QAeA8AVALQAUALADABQAKAUANARQACAEADADQAQAVAQAEQAKACAdgOQADAHAEAHQABABABACQAAAAAAAAQANAZAfAQQAfARARgsAgLnSQAyA7AxA9QARAUAQAWQAHAKAHAKQALARAKARQAPAbANAdQAKAVAHAYQAAACABACQAHAZAGAbQABAGAGAWQAGAWAHAoQAHAnALAmQALAmACAmQgGAwgfgVQgggWgHgPQgIgOgUgoQgVhZgxhiQgegngIBRQAAADAAADQgKBxAVBxQABABAAACQAEAYAGAXQABAEABADQAUBFASBGQACAEABAEQAAABAAABIABAGQgCgIgCgIAgtBHQALBEAOA4QAJApALAiQAbBSARAmQAOAfAMAOAiDA+QAKBxAmBpQAOAlAPAlQAHAUAQAeAB3F7QADAKAAABQACAIAHAWQAGAXgOAJQgOAIgKgEQgKgEgOgMQgCgCgDgDAjSAuQAUBrAeBuQABAFABAFQAMApAQAh");
	this.shape_24.setTransform(775.3,597.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},11).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_21},{t:this.shape_6},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_3},{t:this.shape_22}]},1).to({state:[{t:this.shape_1},{t:this.shape_24}]},1).to({state:[{t:this.instance}]},1).wait(154));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(747.9,547.8,53.3,99.3);


(lib.Symbol2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 8
	this.instance = new lib.Thalay("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(52.5,128.9,0.99,0.99,0.7,0,0,1245.4,201.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(414));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ADIBEQAFgGABgBQAOgJAEgQQAEgRgJgPQgJgNgQgDQgQgEgOAKQgOAIgFARQgCARAJAOQAFAJAKAGQghgHgigMQAOhEAxACQBuAHAJBKQgFABgGABIgIABQgUADgVABQgKABgKAAQgBgBgBAAgAjTAkQgEgDgFgEQgMgLgBgRQgCgQALgOQALgMAQgCQASgBAMALQAOAMABARQABAQgLAMQgHAKgKADQABAAABABQgBAAgBAAIAAAAQgFAAgEAAQAEgBAFAAAjTAkQACAAACAAQACAAADABQAAAAABAAQADAAABAAQAFAAAEABAirAmQAmgBAngKQgDhFgzgFQhygHgTBJQAiANAkAEAixAmQABAAACAAQABgBACABQgCAAgDAAQgBAAgCAAACoBBIAbADIAFAAAkRgnQBKgqBXAUAEaACQhBgyhXAJ");
	this.shape.setTransform(59.3,68);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C2894C").s().p("AB/ADQAmgXA1AIQAzAMAJAtQhBgyhWAIgAi6gsQAyABAUAaQhXgVhKApQAfgtA8gCg");
	this.shape_1.setTransform(59.7,63.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#323232").s().p("ADHA4IgbgDIgBAAQgJgGgGgJQgJgOADgRQAEgQAOgJQAOgKARAEQAPADAJAOQAJAOgDARQgEAQgOAJIgHAHgADCA4IgJgBIgCgBIgCAAIgDAAIgGgBIAbADIgBAAIgEAAgACsA1gAjAAZIgEAAIgCAAIgFgBIgDAAIgJgHQgNgLgBgQQgBgRAKgOQALgMARgCQARgBANALQANAMACARQABAQgLAMQgHAKgLADIgIABIgJgBg");
	this.shape_2.setTransform(58.8,69.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ADKA6IgCAAIAGgHQAPgJADgQQAEgRgJgOQgJgOgQgDQgQgEgOAKQgOAJgEAQQgDARAJAOQAFAJAKAGQghgHghgMQANhEAxACQBuAHAJBKIgLACIgIABQgUADgVABIgSAAIgCABgADGA6IgEAAIABAAIAFAAIgCAAgAiuAcIgCAAIgDgBQAKgDAHgKQALgMgBgQQgBgRgNgMQgNgLgRABQgRACgLAMQgLAOACARQABAQAMALIAKAHQgkgEgjgNQAThJByAHQAzAFADBFQgnAKgmABIgDAAg");
	this.shape_3.setTransform(59.3,69);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("ADhAGQApAPARAjQgsAKgsgCAjHAiQgogEgrgPQATgbAegNQAUgIAYgCQAQgCAOACQASAvgjAXAjHAiQABAAACAAQAKAAAKABAjpgZQgIAxAqAKACZgDQgUApAhAXQgjgGgigMQANgpArgFQARgCAXAEQARACAPAFQAFAugjAMACmA9QAOACAPABAifgjQA1AHANAxQgoANgrABAkGgoQBBgkBJATACNgjQBIgEA0An");
	this.shape_4.setTransform(59.4,68.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ADDAyQAjgMgFguQApAPARAjQglAIgkAAIgPAAgABhAdQANgpArgFQgUApAhAWQgjgFgigMgAifgxQA1AGANAyQgoANgrAAQAjgVgSgwgAkaABQATgcAegNQgIAxAqAKQgogEgrgOg");
	this.shape_5.setTransform(59.4,69.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#323232").s().p("ACrAvQghgWAUgpQARgCAXADQARADAPAFQAFAugjAMIgdgEgAi/AVIgDgBQgqgKAIgxQAUgIAYgCQAQgBAOACQASAwgjAVIgUAAg");
	this.shape_6.setTransform(58.9,69.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C2894C").s().p("ACLAFQBOgeAvBBQg0gnhJAEgAh9gRQhJgThBAkQA8hEBOAzg");
	this.shape_7.setTransform(59.5,64.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AC7A8QAEAAAEABQAsACAsgKQgbgNgfgHAiYABQAgAFAbAMQgoANgrABQgKgBgKAAQgCAAgBAAQgogEgrgPQACgCABgCQAagGAUgCQALAeAegBQAfgBAJgbgACVAbQgbADgZAKQAiAMAjAGQAHABAHABQADAAADAAIABAAQAgAAAGgbACVAbQADAZAcAIAj+gnQA6gdA5ALAjpAAQAsgDAlAEACVgfQA8gGAvAiACVAbQAngEAlAK");
	this.shape_8.setTransform(59.4,68.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#323232").s().p("ADAAfIgBAAIgGAAQgcgIgDgYQAmgEAlAJQgFAbggAAIAAAAgAjkgcQAsgEAkAFQgJAbgeAAIgCAAQgdAAgKgcg");
	this.shape_9.setTransform(58.9,71.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ADDAeIgIgBQAgAAAGgbQAfAHAbANQglAJgkAAIgPgBgACmAbQgjgGgigMQAZgJAbgDQADAYAcAIIgOgCgAjEAAIgDAAQgogDgrgPIADgEQAagGAUgCQALAeAegBQAfgBAJgbQAgAFAbAMQgoAMgrABIgUgBg");
	this.shape_10.setTransform(59.4,71.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C2894C").s().p("ACVAHQBDgiAoA+Qgvghg8AFgAiLgSQg6gLg6AdQAtg5BHAng");
	this.shape_11.setTransform(59.4,64.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("AjzguQApgXA1AIAkIAKQBUA0BSgzQhcAbhKgcgAChgkQAzgBAhAXABoAfQBXA6BKgtQhIAYhZglg");
	this.shape_12.setTransform(59.2,69.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2B2B2B").s().p("ABogFQBZAkBIgYQggAUgjAAQgtAAgxgggAkIgaQBKAbBcgaQgpAZgpAAQgqAAgqgag");
	this.shape_13.setTransform(59.2,73.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C2894C").s().p("ACgAJQA0gfAgA0QghgWgzABgAiVgQQg2gHgoAXQAggxA+Ahg");
	this.shape_14.setTransform(59.3,65);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(1,1,1).p("AC7A8QAEAAAEABQAsACAsgKQgbgNgfgHAiYABQAgAFAbAMQgoANgrABQgKgBgKAAQgCAAgBAAQgogEgrgPQACgCABgCQAagGAUgCQALAeAegBQAfgBAJgbgACVAbQgbADgZAKQAiAMAjAGQAHABAHABQADAAADAAIABAAQAgAAAGgbACVAbQADAZAcAIAj+gnQA6gdA5ALAjpAAQAsgDAlAEACVAbQAngEAlAKACVgfQA8gGAvAi");
	this.shape_15.setTransform(59.4,68.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,1,1).p("ADIBEQAFgGABgBQAOgJAEgQQAEgRgJgPQgJgNgQgDQgQgEgOAKQgOAIgFARQgCARAJAOQAFAJAKAGQghgHgigMQAOhEAxACQBuAHAJBKQgFABgGABIgIABQgUADgVABQgKABgKAAQgBgBgBAAgAjTAkQgEgDgFgEQgMgLgBgRQgCgQALgOQALgMAQgCQASgBAMALQAOAMABARQABAQgLAMQgHAKgKADQABAAABABQgBAAgBAAIAAAAQgFAAgEAAQAEgBAFAAAjTAkQACAAACAAQACAAADABQAAAAABAAQADAAABAAQAFAAAEABAirAmQAmgBAngKQgDhFgzgFQhygHgTBJQAiANAkAEAirAmQgCAAgDAAQgBAAgCAAAixAmQABAAACAAQABgBACABACoBBIAbADIAFAAAkRgnQBKgqBXAUAEaACQhBgyhXAJ");
	this.shape_16.setTransform(59.3,68);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#323232").s().p("ADHA4IgbgDIgBAAQgJgGgGgJQgJgOADgRQAEgQAOgJQAOgKARAEQAPADAJAOQAJAOgDARQgEAQgOAJIgHAHgADCA4IgJgBIgCgBIgCAAIgDAAIgGgBIAbADIgBAAIgEAAgADHA4gACsA1gAjAAZIgEAAIgCAAIgFgBIgDAAIgJgHQgNgLgBgQQgBgRAKgOQALgMARgCQARgBANALQANAMACARQABAQgLAMQgHAKgLADIgIABIgJgBg");
	this.shape_17.setTransform(58.8,69.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(1,1,1).p("ADhAGQApAPARAjQgsAKgsgCAjHAiQgogEgrgPQATgbAegNQgIAxAqAKQABAAACAAQAKAAAKABAjpgZQAUgIAYgCQAQgCAOACQASAvgjAXACZgDQgUApAhAXQgjgGgigMQANgpArgFQARgCAXAEQARACAPAFQAFAugjAMACmA9QAOACAPABAifgjQA1AHANAxQgoANgrABAkGgoQBBgkBJATACNgjQBIgEA0An");
	this.shape_18.setTransform(59.4,68.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(1,1,1).p("AkIAKQBUA0BSgzQhcAbhKgcgAjzguQApgXA1AIABoAfQBXA6BKgtQhIAYhZglgAChgkQAzgBAhAX");
	this.shape_19.setTransform(59.2,69.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(1,1,1).p("Aj4AWQgQgEgSgGQAMgGAJgCQAFAMAIAGQALAIAPgBQADAAADAAQAEgBAEgBQARgFAHgaIABAAIAAAAQA/AKAbAMQgoANgrABQgKgBgKAAQgCAAgBAAQgIgBgJgBADMAgQgugJgmAKQADALAJAHQAHAFALAEQADAAADAAIABAAQAIAAAHgCQABAAABAAQARgGANgUgAB4AhIAAgBQgMAEgLAEQARAGASAFAkFAEQAggLAsADIABAAACsA6QAEABAEABQALAAAEABQAsACAsgKQgbgNg0gIAj+gnQA6gdA5ALACVgfQA8gGAvAi");
	this.shape_20.setTransform(59.4,68.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("ADDAhIgPgBIgIgCIACAAQARgGANgUQA0AIAbANQglAIgkAAIgPAAgABhAMIAXgIIAAABQADALAJAHQgSgFgRgGgAjEADIgDAAIgRgCIAIgBQARgFAHgbIABAAIAAAAQA/ALAbAMQgoAMgrABIgUgBgAkagPQAMgGAJgCQAFAMAIAGQgQgEgSgGg");
	this.shape_21.setTransform(59.4,71.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#323232").s().p("AC5AiIgFgBQgLgDgHgGQgKgHgDgLQAmgJAuAIQgNAUgRAGIgCABQgGACgJAAgAjagEQgJgGgFgMQAggLAsACIABAAQgHAbgRAEIgHACIgHAAIgBABQgPAAgJgHgAibgfIgBAAIADgCIgBACg");
	this.shape_22.setTransform(56.5,71.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(1,1,1).p("Ai3ghQgOgBgTAFQgTAGgXAPQAAAZASAMQgUgFgWgHQAKgQAOgKIAAABAjwAdQAHAEAKACQABAAACABQAKAAAKAAQAjgWgSgvQBNAGANAyQgoANhDAAAB9AHIAAAAQAWgLAXABQAYABAKADQACA1gdAGQgVAFgWgJIAAAAAB9AHQgKAeATATQgTgFgSgGQAIgbAUgLgAkGgmQBBglBJATADMABQA+AWARAjQgsAKg+gIACNghQBIgEA0Am");
	this.shape_23.setTransform(59.4,68.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("ACxAuQAbgGAAgsIAAgIIAAAIQAAAsgbAGQAYgHADgzQA+AUARAjQgZAGgfAAQgXAAgbgDgABhAeQAIgaAUgLQgKAdATATQgTgEgSgHgAi3gwQBNAHANAxQgoANhDABQAogWgXgwgAkaACQAKgOAOgLIAAAAQAAAZASAMQgUgFgWgHg");
	this.shape_24.setTransform(59.4,69.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#323232").s().p("ACiAqIAAAAQgUgTALgdIAAAAQAVgLAYAAQAYABAJAFQgCAzgYAHQgHABgHAAQgOAAgPgGgAjAAWIgDAAQgKgDgHgEQgTgMABgZQAWgPAUgFQATgGAOABQASAvgkAXIgTgBg");
	this.shape_25.setTransform(56.6,69.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(1,1,1).p("ACwgTQBiAKAIBGQgFABgGABIgIABQgUADgVABQgKABgKAAIgEgBIgEAAIgbgDQghgHgigMQAMg8AogGAj9gYQgVAQgHAbQBGAoB1ggQgDhFgzgFQgagCgVADIAAAAQAFAEACABQAMAMACARQABAQgLAMQgHAKgLADQgEAAgEABQgEgBgEAAQgBAAgBAAQgBAAgBAAQgBAAgBAAQgDgBgCAAQgCAAgBAAQgFgDgFgEQgMgLgCgQQAAgKADgIQAagWAgAAACRA5IAhADQAFgGABgBQAPgJADgQQADgRgIgOQgFgGgFgEQgFgEgGgCQgCgBgCAAQgKgDgKADQgFACgFAEQgOAJgEAQQgEARAKAOQAFAJAKAGADKBFQgBgBgBAAAkRgnQBKgqBXAUAEaACQhBgyhXAJ");
	this.shape_26.setTransform(59.3,68);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#323232").s().p("ACsAyIgBAAQgJgGgGgJQgJgOADgQQAEgQAOgKQAGgEAFgCQAJgDALADIAEABQAGACAFAEQAFAEAEAGQAJAOgDARQgEARgOAIIgHAHgAjAAXIgBgBIgDAAIgCAAIgFAAIgDgBIgJgHQgNgLgBgQQgBgKAEgIQAZgWAhAAIAGAFQANAMACARQABARgLALQgHAKgLAEIgIAAIgJAAg");
	this.shape_27.setTransform(56.6,68.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("ADKA6IgCAAIgCAAIgEAAIgbgDQghgHghgMQALg8ApgGQgGACgFAEQgOAJgEAQQgDARAJAOQAFAJAKAGIABAAIAgADIAGgHQAPgJADgQQAEgRgJgOQgEgGgGgEQgEgEgHgCQBiAKAIBGIgLACIgIABQgUADgVABIgSAAIgCABgADGA6IgEAAIAAAAIAEAAgAkZAJQAHgbAVgQQgDAIABAKQABAQAMALIAKAHIADAAIAFABIACAAIACAAIACAAIAIABIAJgBQAKgDAHgKQALgLgBgRQgBgRgNgMIgHgFIAAAAQAVgDAaACQAzAFADBFQgzAOgrAAQg1AAgogWg");
	this.shape_28.setTransform(59.3,69);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(1,1,1).p("ADhAGQApAPARAjQgsAKgsgCAjpgZQAUgIAYgCQAQgCAOACQA1AHANAxQgoANgrABAjpgZQgIAxAqAKQABAAACAAQAKAAAKABAjHAiQgogEgrgPQATgbAegNACZgDQARgCAXAEQARACAPAFQAFAugjAMAifgjQASAvgjAXACmA9QAOACAPABACmA9QgjgGgigMQANgpArgFQgUApAhAXgAkGgoQBBgkBJATACNgjQBIgEA0An");
	this.shape_29.setTransform(59.4,68.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(1,1,1).p("AC7A8QAEAAAEABQAsACAsgKQgbgNgfgHAjpAAQALAeAegBQAfgBAJgbQAgAFAbAMQgoANgrABQgKgBgKAAQgCAAgBAAQgogEgrgPQACgCABgCQAagGAUgCQAsgDAlAEACVAbQgbADgZAKQAiAMAjAGQAHABAHABQADAAADAAIABAAQAgAAAGgbACVAbQADAZAcAIAj+gnQA6gdA5ALACVAbQAngEAlAKACVgfQA8gGAvAi");
	this.shape_30.setTransform(59.4,68.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(1,1,1).p("AC7A8QAEAAAEABQAsACAsgKQgbgNgfgHAjpAAQALAeAegBQAfgBAJgbQAgAFAbAMQgoANgrABQgKgBgKAAQgCAAgBAAQgogEgrgPQACgCABgCQAagGAUgCQAsgDAlAEACVAbQgbADgZAKQAiAMAjAGQAHABAHABQADAAADAAIABAAQAgAAAGgbACVAbQADAZAcAIAj+gnQA6gdA5ALACVgfQA8gGAvAiACVAbQAngEAlAK");
	this.shape_31.setTransform(59.4,68.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(1,1,1).p("ADhAGQApAPARAjQgsAKgsgCAjpgZQgIAxAqAKQABAAACAAQAKAAAKABAjpgZQAUgIAYgCQAQgCAOACQA1AHANAxQgoANgrABAjHAiQgogEgrgPQATgbAegNACZgDQARgCAXAEQARACAPAFQAFAugjAMAifgjQASAvgjAXACmA9QAOACAPABACmA9QgjgGgigMQANgpArgFQgUApAhAXgAkGgoQBBgkBJATACNgjQBIgEA0An");
	this.shape_32.setTransform(59.4,68.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(1,1,1).p("ADIBEQAFgGABgBQAOgJAEgQQAEgRgJgPQgJgNgQgDQgQgEgOAKQgOAIgFARQgCARAJAOQAFAJAKAGQghgHgigMQAOhEAxACQBuAHAJBKQgFABgGABIgIABQgUADgVABQgKABgKAAQgBgBgBAAgAjTAkQgEgDgFgEQgMgLgBgRQgCgQALgOQALgMAQgCQASgBAMALQAOAMABARQABAQgLAMQgHAKgKADQABAAABABQABAAACAAQABgBACABQgCAAgDAAQgBAAgCAAIAAAAQgFAAgEAAQAEgBAFAAAjTAkQACAAACAAQACAAADABQAAAAABAAQADAAABAAQAFAAAEABAirAmQAmgBAngKQgDhFgzgFQhygHgTBJQAiANAkAEAixAmQgBAAgBAAACoBBIAbADIAFAAAkRgnQBKgqBXAUAEaACQhBgyhXAJ");
	this.shape_33.setTransform(59.3,68);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(1,1,1).p("ADIBEQAFgGABgBQAOgJAEgQQAEgRgJgPQgJgNgQgDQgQgEgOAKQgOAIgFARQgCARAJAOQAFAJAKAGQghgHgigMQAOhEAxACQBuAHAJBKQgFABgGABIgIABQgUADgVABQgKABgKAAQgBgBgBAAgAjTAkQgEgDgFgEQgMgLgBgRQgCgQALgOQALgMAQgCQASgBAMALQAOAMABARQABAQgLAMQgHAKgKADQABAAABABQABAAACAAQABgBACABQAmgBAngKQgDhFgzgFQhygHgTBJQAiANAkAEQACAAACAAQACAAADABQAAAAABAAQADAAABAAQAFAAAEABQAEgBAFAAAirAmQgCAAgDAAQgBAAgCAAIAAAAQgFAAgEAAAixAmQgBAAgBAAACoBBIAbADIAFAAAkRgnQBKgqBXAUAEaACQhBgyhXAJ");
	this.shape_34.setTransform(59.3,68);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(1,1,1).p("ADIBEQAFgGABgBQAOgJAEgQQAEgRgJgPQgJgNgQgDQgQgEgOAKQgOAIgFARQgCARAJAOQAFAJAKAGQghgHgigMQAOhEAxACQBuAHAJBKQgFABgGABIgIABQgUADgVABQgKABgKAAQgBgBgBAAgAjTAkQgEgDgFgEQgMgLgBgRQgCgQALgOQALgMAQgCQASgBAMALQAOAMABARQABAQgLAMQgHAKgKADQABAAABABQABAAACAAQABgBACABQAmgBAngKQgDhFgzgFQhygHgTBJQAiANAkAEQACAAACAAQACAAADABQAAAAABAAQADAAABAAQAFAAAEABQAEgBAFAAAizAmIAAAAQgFAAgEAAAirAmQgCAAgDAAQgBAAgCAAAixAmQgBAAgBAAACoBBIAbADIAFAAAkRgnQBKgqBXAUAEaACQhBgyhXAJ");
	this.shape_35.setTransform(59.3,68);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},12).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_11},{t:this.shape_9},{t:this.shape_10},{t:this.shape_15}]},2).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_7},{t:this.shape_4}]},1).to({state:[{t:this.shape_3},{t:this.shape_17},{t:this.shape_1},{t:this.shape_16}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},9).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_7},{t:this.shape_18}]},23).to({state:[{t:this.shape_11},{t:this.shape_9},{t:this.shape_10},{t:this.shape_8}]},1).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_19}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_15}]},2).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_3},{t:this.shape_17},{t:this.shape_1},{t:this.shape_16}]},1).to({state:[{t:this.shape_17},{t:this.shape_3},{t:this.shape_1},{t:this.shape}]},8).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},111).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_11},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},2).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_7},{t:this.shape_23}]},1).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_1},{t:this.shape_26}]},1).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_7},{t:this.shape_29}]},24).to({state:[{t:this.shape_11},{t:this.shape_9},{t:this.shape_10},{t:this.shape_30}]},1).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_31}]},2).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_32}]},1).to({state:[{t:this.shape_3},{t:this.shape_17},{t:this.shape_1},{t:this.shape_33}]},1).to({state:[{t:this.shape_17},{t:this.shape_3},{t:this.shape_1},{t:this.shape_34}]},8).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},79).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_7},{t:this.shape_18}]},2).to({state:[{t:this.shape_11},{t:this.shape_9},{t:this.shape_10},{t:this.shape_8}]},1).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_19}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_15}]},2).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_3},{t:this.shape_17},{t:this.shape_1},{t:this.shape_16}]},1).to({state:[{t:this.shape_17},{t:this.shape_3},{t:this.shape_1},{t:this.shape}]},8).to({state:[{t:this.shape_17},{t:this.shape_3},{t:this.shape_1},{t:this.shape}]},40).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape_35}]},1).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_7},{t:this.shape_29}]},2).to({state:[{t:this.shape_11},{t:this.shape_9},{t:this.shape_10},{t:this.shape_30}]},1).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_31}]},2).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_32}]},1).to({state:[{t:this.shape_3},{t:this.shape_17},{t:this.shape_1},{t:this.shape_33}]},1).wait(51));

	// Layer 3
	this.instance_1 = new lib.Twefn1y("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(57.7,54.4,1,1,-4.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({startPosition:0},12).to({x:57.8,y:55.2},2).to({x:57.7,y:54.2},3).to({y:54.4},4).to({startPosition:0},6).to({startPosition:0},22).to({y:54.2},1).to({x:57.8,y:55.2},3).to({x:57.7,y:54.4},2).to({startPosition:0},8).to({startPosition:0},5).to({rotation:-4.5,x:57.8},1).to({regX:0.1,regY:0.1,rotation:-4.3,x:58,y:54.5},9).to({scaleX:1,scaleY:1,x:58.1,y:55.8},2).to({regY:0.2,y:52.1},9,cjs.Ease.get(1)).to({startPosition:0},9,cjs.Ease.get(1)).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:-4.4,x:57.7,y:54.4},6,cjs.Ease.get(1)).to({startPosition:0},18).to({startPosition:0},8).to({x:57.8,y:55.2},2).to({x:57.7,y:54.2},3).to({y:54.4},4).to({startPosition:0},6).to({regX:0.1,regY:0.1,rotation:-4.3,x:57.8,y:54.9},3).to({regX:0,regY:0,rotation:-4.4,x:57.7,y:54.2},11).to({startPosition:0},11).to({x:57.8,y:55.2},3).to({x:57.7,y:54.4},2).to({startPosition:0},8).to({y:51},5).to({startPosition:0},16).to({y:54.4},4).to({startPosition:0},90).to({regX:0.1,regY:0.1,rotation:-4.3,y:56.9},4).to({regX:0,regY:0,rotation:-4.4,y:54.4},6).to({startPosition:0},46).to({startPosition:0},1).to({regX:0.1,regY:0.1,rotation:-4.3,y:56.9},4).to({regX:0,regY:0,rotation:-4.4,y:54.4},6).wait(49));

	// Layer 1
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(1,1,1).p("AHnDRQgXgqgDBMQgBAYgBARQgDASgCAMQgDAQgFAGQgbA8AcgQAmqBiQAdAEAfCAIAdlcIgNiyQATgNAUgMQCqheEUAzQCagcB5BRIAQDNIAfEUAnmC5QAJgLAIgHQA4gzABBnQAAAegVAQQggARAtAkQAwAlgiAUADliLQhLAnAABhQAEB1ATBxQgGAQhQAjAAgEMQAJgLAogG");
	this.shape_36.setTransform(48.9,68.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(2,1,1).p("AGVFuIgOBMQgSBBgeAdQgoA5gvAyQg8A+hHA0Ih6AAQhLgvg4glQglgXgcgVQhHg1gLgbIg7iiIgMghQiOAsgfjcQgUiEBugGIgKh9IgTj5QggAPgmArQAblhGVhiQHchoB+EMQAXBJg5BYQBIAxgTBZIghCxIgiCwIgFAXgAHKBZQA5ATgPBOIgnCPQgLApgtgE");
	this.shape_37.setTransform(49.2,74.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#323232","#DEB17F"],[0.004,1],0,-9.9,3,9.2).s().p("AgnAqIgKh8IBihcIgdFcQgeh/gdgFg");
	this.shape_38.setTransform(10.2,74.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#323232","#DEB17F"],[0.004,1],0.3,-6,1.5,7.1).s().p("AghiKIBDBNIghCwIgEAYg");
	this.shape_39.setTransform(95,72.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#C2894C").s().p("AkWGpIg7iiIgijYIAdlcIgOiyQATgNAUgMIAXDVQgFAngEAoQgXEUBSFSQAQBEAhAiQhIg1gLgagAG4CZQAFgGADgQQAPgBgWBDQgGAEgDAAQgNAAAVgwgAnFChQgohgAShPQA4g0ACBmQgBAegVARQggAQAtAkQAwAlghAVQgFABgEAAQgTAAgOghgAHFBmIACgqQAEhLAWApQgIBPgOAAQgDAAgDgDgAAlgNIAQAmQghABgSAeg");
	this.shape_40.setTransform(49.5,87.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#323232").s().p("AnKBXQggAOgmArQAblfGVhjQHchnB+ELQAXBKg5BWQBIAygTBYIghCxIhFhNIgQjNQh6hQiZAcQkUgyiqBdQgUALgTAOIANCxIhjBcg");
	this.shape_41.setTransform(49.2,32.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#DEB17F").s().p("AANJXQhLgvg4glQglgXgcgVQghgjgQhDQhSlSAYkVQADgoAFgmIgWjVQCqheEUAzQCZgcB6BRIAQDNIAeEVIAFgXQA5ATgPBNIgnCPQgLApgtgEIAwj9IgwD9IgOBMQgSBBgeAdQgoA5gvAyQg8A+hHA0gAHMBiQgDAQgFAGQgaA8AcgQQAWhDgQABIAFgeQATATAKhdQgXgqgDBLIgDApIgFAeIAAAAgABhA+QBQgjAGgQQgThwgDh2QAAhhBLgnQhLAnAABhQADB2ATBwQgGAQhQAjgAAnA0QAIgLApgGQgpAGgIALgAAPAWQARgcAigBIgRgngAlQDEQiOAsgfjcQgUiDBugGQAcAEAgB/IAjDXgAnOgwQgSBPAnBhQASApAYgKQAhgUgvglQgtgkAfgRQAWgQAAgeQgBhEgZAAQgNAAgSARgAnfgeQAJgLAIgHQgIAHgJALg");
	this.shape_42.setTransform(48.2,90.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]}).wait(414));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.6,-2,107.8,153.5);


(lib.cg4ybn6uj = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// HAND
	this.instance = new lib.HANDcopy4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-4.2,111.2,1,1,0,0,180,37,6.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// LEFT ARM
	this.instance_1 = new lib.LEFTARMcopy4("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-10.6,-37.8,1,1,0,0,180,22.6,11.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// LEFT SHOULDER
	this.instance_2 = new lib.LEFTSHOULDERcopy4("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(8.3,-201.8,1,1,0,0,180,20.7,4.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.7,-204.2,67.5,408.5);


(lib.Symbol9copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// HEAD
	this.instance = new lib.Symbol2copy("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(899.5,195.7,1,1,0,0,0,54.2,151.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(172).to({_off:false,regX:54.4,rotation:-1.5,x:899.8,startPosition:150},0).to({startPosition:217},44).to({regY:151.2,rotation:-5,x:902.2,y:194.9,startPosition:224},7).to({regY:151.1,rotation:-1.5,x:899.8,y:195.7,startPosition:231},7).to({startPosition:263},32).to({regY:151.2,rotation:-1.3,startPosition:296},33).to({rotation:0.3,y:198.1,startPosition:301},5).to({rotation:3,x:899.7,y:195.8,startPosition:308},7).to({rotation:2.8,x:899.8,startPosition:336},28).to({rotation:-5.2,x:899.7,y:195.7,startPosition:345},9).to({startPosition:353},8).to({y:202.1,startPosition:359},6).to({rotation:3.2,y:195.8,startPosition:364},5).wait(36).to({startPosition:400},0).to({rotation:-5.2,y:195.7,startPosition:410},10).wait(50));

	// Layer 4
	this.instance_1 = new lib.HANDcopy3("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(785,597.6,1,1,0,0,180,25.6,49.7);
	this.instance_1._off = true;

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

	this.instance_2 = new lib.Tween6copy3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(657,391.9,1,1,5,0,0,46.8,18.2);
	this.instance_2._off = true;

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},173).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},9).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_15}]},16).to({state:[{t:this.shape_17},{t:this.shape_10},{t:this.shape_16}]},1).to({state:[{t:this.shape_18},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance_1}]},14).to({state:[{t:this.instance_1}]},12).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance_1}]},33).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_1}]},28).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance_1}]},11).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]},1).to({state:[{t:this.shape_18},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_17},{t:this.shape_10},{t:this.shape_16}]},1).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_15}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},9).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},16).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(52));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(173).to({_off:false},0).wait(1).to({x:779.5},0).wait(1).to({x:774.5,y:597.4},0).to({_off:true},1).wait(47).to({_off:false},0).wait(1).to({x:779.5,y:597.6},0).wait(1).to({x:784},0).to({x:776},6,cjs.Ease.get(0.7)).to({x:784},14,cjs.Ease.get(1)).to({x:781},12,cjs.Ease.get(1)).to({startPosition:0},6).to({startPosition:0},33).to({regY:49.8,skewX:1.8,skewY:181.8,x:779.5,y:598.2},5).to({regY:49.7,skewX:4.2,skewY:184.2,x:777.3,y:598.7},7).to({regX:25.5,regY:49.8,skewX:4.1,skewY:184.1,x:777.4,y:598.9},28).to({regX:25.6,regY:49.7,skewX:4.2,skewY:184.2,x:777.3,y:598.7},9).wait(11).to({skewX:0,skewY:180,x:785,y:597.6},0).wait(1).to({x:779.5},0).wait(1).to({x:774.5,y:597.4},0).to({_off:true},1).wait(47).to({_off:false},0).wait(1).to({x:779.5,y:597.6},0).wait(1).to({x:784},0).wait(52));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(181).to({_off:false},0).to({regX:46.9,rotation:-9.7,x:653,y:413.2},9,cjs.Ease.get(0.85)).to({regX:47,regY:18.3,rotation:-20.1,x:654.8,y:415.8},6,cjs.Ease.get(1)).to({regX:47.1,regY:18.4,rotation:-24.4,x:655,y:415.9},6,cjs.Ease.get(1)).to({_off:true},16).wait(146).to({_off:false,regX:46.8,regY:18.2,rotation:5,x:657,y:391.9},0).to({regX:46.9,rotation:-9.7,x:653,y:413.2},9,cjs.Ease.get(0.85)).to({regX:47,regY:18.3,rotation:-20.1,x:654.8,y:415.8},6,cjs.Ease.get(1)).to({regX:47.1,regY:18.4,rotation:-24.4,x:655,y:415.9},6,cjs.Ease.get(1)).to({_off:true},16).wait(59));

	// LEFT ARM
	this.instance_3 = new lib.LEFTARMcopy3("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(767.3,482.2,1,1,0,0,180,22.5,88.7);
	this.instance_3._off = true;

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

	this.instance_4 = new lib.Tween4copy3("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(757.8,377.7,1,1,0,0,0,55.9,-27.2);
	this.instance_4._off = true;

	this.instance_5 = new lib.Symbol7copy("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(721,431.8,1,1,0,0,0,52.8,51);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},173).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},6).to({state:[{t:this.instance_4}]},6).to({state:[{t:this.shape_29},{t:this.shape_28}]},16).to({state:[{t:this.shape_26},{t:this.instance_5}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},6).to({state:[{t:this.instance_3}]},14).to({state:[{t:this.instance_3}]},12).to({state:[{t:this.instance_3}]},6).to({state:[{t:this.instance_3}]},33).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_3}]},7).to({state:[{t:this.instance_3}]},28).to({state:[{t:this.instance_3}]},9).to({state:[{t:this.instance_3}]},11).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},6).to({state:[{t:this.instance_4}]},6).to({state:[{t:this.shape_29},{t:this.shape_28}]},16).to({state:[{t:this.shape_26},{t:this.instance_5}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).wait(52));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(173).to({_off:false},0).wait(1).to({regX:22.4,regY:0.1,skewX:1.5,skewY:181.5,x:766.4,y:393.6},0).wait(1).to({regX:22.5,skewX:3.2,skewY:183.2,x:766.3},0).wait(1).to({regY:0,skewX:6.2,skewY:186.2,x:766.4,y:392.5},0).to({_off:true},1).wait(45).to({_off:false},0).wait(1).to({regY:0.1,skewX:3.2,skewY:183.2,x:766.3,y:393.6},0).wait(1).to({regX:22.4,skewX:1.5,skewY:181.5,x:766.4},0).wait(1).to({regX:22.5,regY:0,skewX:0,skewY:180,x:766.3,y:393.5},0).to({regX:22.4,skewX:2.7,skewY:182.7,x:766.4,y:393.6},6,cjs.Ease.get(0.7)).to({regX:22.5,skewX:0,skewY:180,x:766.3,y:393.5},14,cjs.Ease.get(1)).to({regX:22.4,regY:0.1,skewX:1,skewY:181,x:766.4,y:393.6},12,cjs.Ease.get(1)).to({startPosition:0},6).to({startPosition:0},33).to({skewX:0.8,skewY:180.8,x:766.5,y:393.7},5).to({skewX:1,skewY:181,x:766.4,y:393.6},7).to({startPosition:0},28).to({startPosition:0},9).wait(11).to({regX:22.5,regY:88.7,skewX:0,skewY:180,x:767.3,y:482.2},0).wait(1).to({regX:22.4,regY:0.1,skewX:1.5,skewY:181.5,x:766.4,y:393.6},0).wait(1).to({regX:22.5,skewX:3.2,skewY:183.2,x:766.3},0).wait(1).to({regY:0,skewX:6.2,skewY:186.2,x:766.4,y:392.5},0).to({_off:true},1).wait(45).to({_off:false},0).wait(1).to({regY:0.1,skewX:3.2,skewY:183.2,x:766.3,y:393.6},0).wait(1).to({regX:22.4,skewX:1.5,skewY:181.5,x:766.4},0).wait(1).to({regX:22.5,regY:0,skewX:0,skewY:180,x:766.3,y:393.5},0).wait(52));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(190).to({_off:false},0).to({rotation:-2.2},6,cjs.Ease.get(1)).to({startPosition:0},6).to({_off:true},16).wait(155).to({_off:false,rotation:0},0).to({rotation:-2.2},6,cjs.Ease.get(1)).to({startPosition:0},6).to({_off:true},16).wait(59));

	// LEFT SHOULDER
	this.instance_6 = new lib.LEFTSHOULDERcopy3("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(775.6,332.6,1,1,0,0,180,31.2,95.6);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(173).to({_off:false},0).wait(2).to({x:774.6},0).wait(1).to({regX:11.9,regY:0.6,skewX:0.4,skewY:180.4,x:793.9,y:237.6},0).wait(1).to({regX:-4.9,regY:-2.5,skewX:1.5,skewY:181.5,x:810.7,y:234.5},0).wait(1).to({regX:52.6,regY:183.2,skewX:3.7,skewY:183.7,x:744.5,y:417.3},0).wait(1).to({regX:7.8,regY:1.9,skewX:6.2,skewY:186.2,x:804,y:237.2},0).wait(1).to({regX:-0.1,regY:0.1,skewX:9.8,skewY:189.8,x:819.1,y:235.1},0).wait(1).to({skewX:10.8,skewY:190.8},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:-0.2,skewX:11.1,skewY:191.1,x:819.2},0).wait(1).to({regX:-0.3,regY:0.2,skewX:11.5,skewY:191.5,y:235.2},0).wait(1).to({regX:-0.4,skewX:12,skewY:192,x:819.3,y:235.3},0).wait(1).to({startPosition:0},0).wait(2).to({regX:-0.1,regY:0.1,skewX:12.1,skewY:192.1,x:819.1,y:235.1},0).wait(1).to({skewX:12.6,skewY:192.6,x:819.8,y:235.6},0).wait(12).to({startPosition:0},0).wait(16).to({skewX:9.8,skewY:189.8,x:819.1,y:235.1},0).wait(1).to({regX:7.8,regY:1.9,skewX:6.2,skewY:186.2,x:804,y:237.2},0).wait(1).to({regX:52.6,regY:183.2,skewX:3.7,skewY:183.7,x:744.5,y:417.3},0).wait(1).to({regX:-4.9,regY:-2.5,skewX:1.5,skewY:181.5,x:810.7,y:234.5},0).wait(1).to({regX:11.9,regY:0.6,skewX:0.4,skewY:180.4,x:793.9,y:237.6},0).wait(1).to({regX:31.2,regY:95.6,skewX:0,skewY:180,x:774.6,y:332.6},0).wait(1).to({regX:20.4,regY:3.5,x:785.4,y:240.5},0).to({startPosition:0},1).to({startPosition:0},38).to({startPosition:0},33).to({startPosition:0},5).to({startPosition:0},7).to({startPosition:0},28).to({startPosition:0},9).wait(11).to({regX:31.2,regY:95.6,x:775.6,y:332.6},0).wait(2).to({x:774.6},0).wait(1).to({regX:11.9,regY:0.6,skewX:0.4,skewY:180.4,x:793.9,y:237.6},0).wait(1).to({regX:-4.9,regY:-2.5,skewX:1.5,skewY:181.5,x:810.7,y:234.5},0).wait(1).to({regX:52.6,regY:183.2,skewX:3.7,skewY:183.7,x:744.5,y:417.3},0).wait(1).to({regX:7.8,regY:1.9,skewX:6.2,skewY:186.2,x:804,y:237.2},0).wait(1).to({regX:-0.1,regY:0.1,skewX:9.8,skewY:189.8,x:819.1,y:235.1},0).wait(1).to({skewX:10.8,skewY:190.8},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:-0.2,skewX:11.1,skewY:191.1,x:819.2},0).wait(1).to({regX:-0.3,regY:0.2,skewX:11.5,skewY:191.5,y:235.2},0).wait(1).to({regX:-0.4,skewX:12,skewY:192,x:819.3,y:235.3},0).wait(1).to({startPosition:0},0).wait(2).to({regX:-0.1,regY:0.1,skewX:12.1,skewY:192.1,x:819.1,y:235.1},0).wait(1).to({skewX:12.6,skewY:192.6,x:819.8,y:235.6},0).wait(12).to({startPosition:0},0).wait(16).to({skewX:9.8,skewY:189.8,x:819.1,y:235.1},0).wait(1).to({regX:7.8,regY:1.9,skewX:6.2,skewY:186.2,x:804,y:237.2},0).wait(1).to({regX:52.6,regY:183.2,skewX:3.7,skewY:183.7,x:744.5,y:417.3},0).wait(1).to({regX:-4.9,regY:-2.5,skewX:1.5,skewY:181.5,x:810.7,y:234.5},0).wait(1).to({regX:11.9,regY:0.6,skewX:0.4,skewY:180.4,x:793.9,y:237.6},0).wait(1).to({regX:31.2,regY:95.6,skewX:0,skewY:180,x:774.6,y:332.6},0).wait(1).to({regX:20.4,regY:3.5,x:785.4,y:240.5},0).wait(1).to({startPosition:0},0).wait(52));

	// Layer 1
	this.instance_7 = new lib.HANDcopy3("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(1004,547.9,1,1,0,0,0,25.6,0);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(173).to({_off:false},0).to({startPosition:0},51).to({x:1005.3},4).to({regY:0.1,rotation:0.9,x:1007.6,y:548},8,cjs.Ease.get(1)).to({regX:25.7,regY:0,rotation:0,x:1001.7,y:547.9},9,cjs.Ease.get(1)).to({regX:25.6,rotation:-1.5,x:1004},11,cjs.Ease.get(1)).to({regX:25.7,regY:0.1,rotation:-0.3,x:1005.1,y:548},7,cjs.Ease.get(1)).to({rotation:-0.3},33).to({regX:25.8,rotation:-2.8,x:1005.9,y:547.4},5).to({regX:25.7,rotation:-6.4,x:1007,y:546.5},7).to({rotation:-6.3,y:546.6},28).to({rotation:-6.4,y:546.5},9).wait(115));

	// Layer 2
	this.instance_8 = new lib.LEFTARMcopy3("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(1021.5,393.5,1,1,0,0,0,22.5,0);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(173).to({_off:false},0).to({startPosition:0},55).to({regY:0.1,rotation:-1.2,x:1020.3,y:393.6},8,cjs.Ease.get(1)).to({rotation:0.9},9,cjs.Ease.get(1)).to({regY:0,rotation:0,y:393.5},11,cjs.Ease.get(1)).to({startPosition:0},7).to({startPosition:0},33).to({regY:0.1,rotation:-0.3,x:1020.5,y:393},5).to({rotation:-0.9,x:1020.9,y:392},7).to({regX:22.6,rotation:-0.8,x:1021},28).to({regX:22.5,rotation:-0.9,x:1020.9},9).wait(115));

	// Layer 3
	this.instance_9 = new lib.LEFTSHOULDERcopy3("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(999.9,239.5,1,1,0,0,0,19.4,2.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(173).to({_off:false},0).to({startPosition:0},51).to({startPosition:0},1).to({startPosition:0},38).to({startPosition:0},33).to({regY:2.6,rotation:-0.3,x:999.1,y:239.1},5).to({regY:2.5,rotation:-0.9,x:998,y:238.3},7).to({regX:19.5,rotation:-0.8,x:998.1},28).to({regX:19.4,rotation:-0.9,x:998},9).wait(115));

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

	this.instance_10 = new lib.Symbol8copy("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(750.2,400,1,1,-17,0,0,125.9,19.2);
	this.instance_10.alpha = 0.191;

	this.instance_11 = new lib.Symbol8copy("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(750.2,400.1,1,1,9.7,0,0,125.9,19.2);
	this.instance_11.alpha = 0.27;

	this.instance_12 = new lib.Symbol8copy("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(750.2,400,1,1,0,0,0,125.9,19.2);
	this.instance_12.alpha = 0.18;

	this.instance_13 = new lib.Tween16("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(893.6,218.7);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48}]},173).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10}]},46).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.instance_13}]},43).to({state:[{t:this.instance_13}]},33).to({state:[{t:this.instance_13}]},5).to({state:[{t:this.instance_13}]},7).to({state:[{t:this.instance_13}]},28).to({state:[{t:this.instance_13}]},9).wait(115));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(263).to({_off:false},0).to({startPosition:0},33).to({startPosition:0},5).to({startPosition:0},7).to({startPosition:0},28).to({startPosition:0},9).wait(115));

	// ID
	this.instance_14 = new lib.Symbol6copy3("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(892.3,219.7,1,1,0,0,0,25.9,-24.7);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(173).to({_off:false},0).to({startPosition:0},5).to({rotation:1,x:892.4},4).to({regY:-24.6,rotation:-0.5,y:219.8},4).to({regY:-24.7,rotation:0,x:892.3,y:219.7},5).to({startPosition:0},72).to({startPosition:0},33).to({startPosition:0},5).to({startPosition:0},7).to({startPosition:0},28).to({startPosition:0},9).wait(115));

	// PATCH
	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#4A4A4A").s().p("AorkoICGhVIBjg1IA4BhID3FHIC0j0IB/jTIEMDWIotLNg");
	this.shape_51.setTransform(896,252.1);

	this.instance_15 = new lib.Tween18("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(896,252.1);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_51}]},173).to({state:[{t:this.instance_15}]},90).to({state:[{t:this.instance_15}]},33).to({state:[{t:this.instance_15}]},5).to({state:[{t:this.instance_15}]},7).to({state:[{t:this.instance_15}]},28).to({state:[{t:this.instance_15}]},9).wait(115));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(263).to({_off:false},0).to({startPosition:0},33).to({startPosition:0},5).to({startPosition:0},7).to({startPosition:0},28).to({startPosition:0},9).wait(115));

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

	this.instance_16 = new lib.Tween17("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(893.6,207.3);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52}]},173).to({state:[{t:this.instance_16}]},90).to({state:[{t:this.instance_16}]},33).to({state:[{t:this.instance_16}]},5).to({state:[{t:this.instance_16}]},7).to({state:[{t:this.instance_16}]},28).to({state:[{t:this.instance_16}]},9).wait(115));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(263).to({_off:false},0).to({startPosition:0},33).to({startPosition:0},5).to({startPosition:0},7).to({startPosition:0},28).to({startPosition:0},9).wait(115));

	// BODY
	this.instance_17 = new lib.BODYcopy3("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(893.6,577.2,1,1,0,0,0,120.2,385.5);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(173).to({_off:false},0).to({startPosition:0},5).to({y:575.6},7).to({y:577.2},10).to({startPosition:0},68).to({startPosition:0},33).to({startPosition:0},5).to({startPosition:0},7).to({startPosition:0},28).to({startPosition:0},9).wait(115));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(840.7,42.6,107.8,153.5);


(lib.Wholeguycopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		playSound("_34195397");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(459));

	// Layer 22
	this.instance = new lib.Symbol9copy("synched",173);
	this.instance.parent = this;
	this.instance.setTransform(893,581.2,1,1,0,0,0,894.1,582.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(173).to({_off:false},0).to({startPosition:178},5).to({startPosition:180},2).to({scaleY:0.99,startPosition:184},4).to({regY:582.2,scaleY:1.01,skewX:-1.8,skewY:-1,x:886.6,startPosition:190},6,cjs.Ease.get(1)).to({regX:894,y:581.1,startPosition:191},1).to({regX:894.1,y:581.2,startPosition:217},26).to({regY:582.3,scaleY:0.99,skewX:0,skewY:0,x:893,startPosition:225},8,cjs.Ease.get(1)).to({scaleY:1,startPosition:234},9).to({startPosition:252},18).to({startPosition:297},45).to({y:586,startPosition:301},4).to({rotation:-0.3,x:904.4,y:581.3,startPosition:308},7,cjs.Ease.get(1)).to({startPosition:341},33).to({rotation:0,x:893,y:586,startPosition:349},8,cjs.Ease.get(1)).to({y:581.2,startPosition:356},7,cjs.Ease.get(1)).to({rotation:0.5,x:895.4,y:586.1,startPosition:362},6).to({rotation:1.7,x:899.4,y:581.3,startPosition:372},10).to({startPosition:399},27).to({rotation:-0.3,x:904.4,startPosition:409},10).to({_off:true},52).wait(2));

	// Layer 23
	this.instance_1 = new lib.LEFTTHIGHcopy3("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(846.8,801.8,1,1,0,0,180,45,240.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(173).to({_off:false},0).to({startPosition:0},11).to({scaleY:1,skewX:-2.1,x:844.3,y:803.4},6,cjs.Ease.get(1)).to({y:801.8},27).to({scaleY:1,skewX:0,x:846.8},17,cjs.Ease.get(1)).to({startPosition:0},63).to({startPosition:0},4).to({skewX:1.3,x:851.5},7,cjs.Ease.get(1)).to({startPosition:0},33).to({skewX:0,x:846.8},8,cjs.Ease.get(1)).to({startPosition:0},7,cjs.Ease.get(1)).to({scaleY:0.99,skewX:0.5,y:801.9},6).to({scaleY:1,skewX:1.3,y:801.8},10).to({startPosition:0},27).to({x:851.5},10).to({_off:true},52).wait(2));

	// LEFT THIGH
	this.instance_2 = new lib.LEFTTHIGHcopy3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(940.5,801.8,1,1,0,0,0,45,240.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(173).to({_off:false},0).to({startPosition:0},11).to({regX:45.1,scaleY:1,skewX:-1.9,x:940.7,y:800.2},6,cjs.Ease.get(1)).to({y:801.8},27).to({regX:45,scaleY:1,skewX:0,x:940.5},17,cjs.Ease.get(1)).to({startPosition:0},63).to({startPosition:0},4).to({regX:45.1,scaleY:1,skewX:1.9,x:944.7},7,cjs.Ease.get(1)).to({startPosition:0},33).to({regX:45,scaleY:1,skewX:0,x:940.5},8,cjs.Ease.get(1)).to({startPosition:0},7,cjs.Ease.get(1)).to({scaleY:0.99,skewX:0.5,y:801.9},6).to({scaleY:1,skewX:1.3,y:801.8},10).to({startPosition:0},27).to({regX:45.1,scaleY:1,skewX:1.9,x:944.7},10).to({_off:true},52).wait(2));

	// Layer 25
	this.instance_3 = new lib.LEFTLEGcopy3("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(949.5,1004.7,1,1,0,0,0,36,235.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(173).to({_off:false},0).to({startPosition:0},124).to({startPosition:0},4).to({skewX:1},7,cjs.Ease.get(1)).to({startPosition:0},33).to({skewX:0},8,cjs.Ease.get(1)).to({startPosition:0},7,cjs.Ease.get(1)).to({startPosition:0},6).to({startPosition:0},10).to({startPosition:0},27).to({skewX:1},10).to({_off:true},52).wait(2));

	// LEG
	this.instance_4 = new lib.LEFTLEGcopy3("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(837.5,1004.7,1,1,0,0,180,36,235.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(173).to({_off:false},0).to({startPosition:0},11).to({skewX:-1},6,cjs.Ease.get(1)).to({startPosition:0},27).to({skewX:0},17,cjs.Ease.get(1)).to({startPosition:0},63).to({startPosition:0},4).to({regX:35.9,scaleY:1.01,skewX:1.2},7,cjs.Ease.get(1)).to({startPosition:0},33).to({regX:36,scaleY:1,skewX:0},8,cjs.Ease.get(1)).to({startPosition:0},7,cjs.Ease.get(1)).to({startPosition:0},6).to({startPosition:0},10).to({startPosition:0},27).to({regX:35.9,scaleY:1.01,skewX:1.2},10).to({_off:true},52).wait(2));

	// PELVIC
	this.instance_5 = new lib.Tween7copy3("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(893,615.6,1,1,0,0,0,0,43.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(173).to({_off:false},0).to({startPosition:0},11).to({x:883.4},6,cjs.Ease.get(1)).to({startPosition:0},27).to({x:893},17,cjs.Ease.get(1)).to({startPosition:0},63).to({startPosition:0},4).to({x:905.5},7,cjs.Ease.get(1)).to({startPosition:0},33).to({x:893},8,cjs.Ease.get(1)).to({startPosition:0},7,cjs.Ease.get(1)).to({regX:0.1,scaleY:0.99,skewX:0.5,x:894.7,y:619.8},6).to({regX:0,scaleY:1,skewX:1.3,x:897.3,y:615.6},10).to({startPosition:0},27).to({skewX:0,x:905.5},10).to({_off:true},52).wait(2));

	// SHOE
	this.instance_6 = new lib.LEFTSHOEcopy3("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(859.7,1011.2,1,1,0,0,180,0,41.4);

	this.instance_7 = new lib.LEFTSHOEcopy3("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(963.2,1011.2,1,1,0,0,0,35.5,41.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7},{t:this.instance_6}]},173).to({state:[]},288).wait(2));

	// Symbol 2
	this.instance_8 = new lib.Symbol2copy("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(899.5,172.8,1,1,0,0,0,54.2,128.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({y:176.8,startPosition:4},4).to({y:174.8,startPosition:11},7).to({regX:54.3,rotation:2.2,x:899.6,y:177.1,startPosition:14},3).to({regX:54.2,rotation:7,x:899.5,y:172.8,startPosition:19},5).to({startPosition:35},17).to({rotation:-7.8,x:900.5,startPosition:41},6).to({rotation:-7.8,x:899.3,y:173.7,startPosition:60},19).to({scaleX:1,scaleY:1,rotation:-8.8,x:893.5,y:176.2,startPosition:64},4).to({regX:54.4,regY:128.3,scaleX:1,scaleY:1,rotation:-10.7,x:881.9,y:171.9,startPosition:72},8).wait(17).to({startPosition:89},0).to({regX:54.3,scaleX:1,scaleY:1,rotation:-10,x:886.1,y:181.6,startPosition:94},5).to({regX:54.4,scaleX:1,scaleY:1,rotation:-9,x:893.8,y:171.8,startPosition:103},9).to({rotation:-6.5,x:895.4,y:172,startPosition:106},3).to({regX:54.2,regY:128.2,rotation:0,x:899.5,y:172.8,startPosition:114},8).to({startPosition:126},12).to({startPosition:158},32).to({_off:true},14).wait(290));

	// Layer 8
	this.instance_9 = new lib.Symbol10("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(759.9,544.9,1,1,3.3,0,0,773.6,549.4);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(45).to({_off:false},0).to({regY:549.3,scaleX:1,scaleY:1,rotation:11.5,x:750.1,y:539.7,startPosition:1},1).to({regX:773.7,regY:549.2,scaleX:1,scaleY:1,rotation:36.1,x:723.7,y:533.6,startPosition:4},3).to({regX:773.6,regY:549.4,scaleX:1,scaleY:1,rotation:69,x:697.8,y:523.2,startPosition:8},4).to({startPosition:17},9).to({regY:549.3,scaleX:1,scaleY:1,rotation:56,x:700.2,y:523.1,startPosition:18},1).to({scaleX:1,scaleY:1,rotation:49.4,x:712.7,y:529.1,startPosition:19},1).to({regX:773.7,regY:549.2,scaleX:1,scaleY:1,rotation:36.1,x:725.7,y:533.6,startPosition:21},2).to({regX:773.6,regY:549.3,scaleX:1,scaleY:1,rotation:11.5,x:747.1,y:539.7,startPosition:24},3).to({regY:549.4,scaleX:1,scaleY:1,rotation:3.3,x:761.1,y:544.9,startPosition:26},2).to({_off:true},1).wait(391));

	// HAND
	this.instance_10 = new lib.HANDcopy4("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(746.7,552.2,1.01,1.01,0,5.5,-174.5,37,6.4);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(37).to({_off:false},0).to({x:758.7},7).to({_off:true},1).wait(418));

	// LEFT ARM
	this.instance_11 = new lib.LEFTARMcopy4("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(754.7,401.7,1.01,1.01,0,5.5,-174.5,22.5,11.7);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(37).to({_off:false},0).to({x:767},7).to({regX:22.4,regY:11.8,scaleX:1.01,scaleY:1.01,skewX:16.5,skewY:-163.5,x:759.9,y:402.2},4).to({scaleX:1.01,scaleY:1.01,skewX:30.3,skewY:-149.7,x:750.7,y:402.7},5).to({startPosition:0},9).to({scaleX:1.01,scaleY:1.01,skewX:16.5,skewY:-163.5,x:756.9,y:402.2},5).to({regX:22.5,regY:11.7,scaleX:1.01,scaleY:1.01,skewX:5.5,skewY:-174.5,x:759,y:401.7},4).to({_off:true},1).wait(391));

	// LEFT SHOULDER
	this.instance_12 = new lib.LEFTSHOULDERcopy4("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(789.6,238.6,1.01,1.01,0,5.5,-174.5,20.6,4.2);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(37).to({_off:false},0).to({regX:20.5,regY:4.4,skewX:1,skewY:-179,y:239.8},7).to({regX:20.4,skewX:7.3,skewY:-172.7,x:789.7},9).to({startPosition:0},9).to({skewX:4.8,skewY:-175.2,x:785.6,y:242.2},3).to({regX:20.5,skewX:-0.2,skewY:-180.2,x:777.6,y:243.8},6).to({_off:true},1).wait(391));

	// HAND
	this.instance_13 = new lib.Tween6copy4("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(785.1,241.1,1,1,0,0,0,6.6,-202);

	this.instance_14 = new lib.cg4ybn6uj("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(785.1,245.1,1,1,-1.2,0,0,6.6,-202);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({_off:true,rotation:-1.2,y:245.1},4).to({_off:false,regX:6.7,regY:-201.9,rotation:1.3,x:785.3,y:243.5},8).to({regY:-202,rotation:1.9,x:785.2,y:243},2).to({regX:6.6,regY:-201.9,scaleX:1.01,scaleY:1.01,rotation:5.5,x:787.9,y:238.4},10).to({startPosition:0},12).to({_off:true},1).wait(35).to({_off:false,regX:7,regY:-201.8,rotation:0.2,x:776.9,y:241.4},0).to({regX:6.9,rotation:-3.6,x:769.9,y:245.9},18).to({scaleY:0.99,rotation:0,skewX:-2.9,skewY:-2.7,x:772.4,y:250.3},5).to({regX:6.8,scaleY:1.01,rotation:-1.9,skewX:0,skewY:0,x:778.6,y:241.4},9).to({regX:6.6,regY:-202,scaleX:1,scaleY:1,rotation:0,x:785.1,y:241.1},11).to({_off:true},58).wait(290));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({_off:false},4).to({_off:true,regX:6.7,regY:-201.9,rotation:1.3,x:785.3,y:243.5},8).wait(451));

	// Layer 14
	this.instance_15 = new lib.Tween3copy2("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(1022.3,335.5,1,1,-28.3,0,0,-29.1,47.5);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(14).to({_off:false},0).to({rotation:-18.6,x:1030.4,y:337.6},3).to({regX:-29,regY:47.6,rotation:-29.2,x:1024.1,y:336.7},4).to({rotation:-15.6,x:1028.2,y:336.2},4).to({startPosition:0},4).to({regX:-29.1,regY:47.5,rotation:-28.3,x:1028.6,y:335.5},3).to({_off:true},1).wait(430));

	// Layer 10
	this.instance_16 = new lib.Tween3copy2("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(1021,332.9,1,1,-30,0,0,-29.1,47.5);

	this.instance_17 = new lib.Tween12("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(1036.5,418.6,1,1,2.5,0,0,9.4,47.6);
	this.instance_17._off = true;

	this.instance_18 = new lib.Tween13("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(1040.6,419.5,1,1,12.5,0,0,-7.9,85.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_17},{t:this.instance_16}]},13).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_17}]},4).to({state:[{t:this.instance_17}]},4).to({state:[{t:this.instance_17}]},4).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_18}]},1).to({state:[]},1).to({state:[]},427).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(13).to({_off:false},0).wait(1).to({rotation:4.3,x:1035.1,y:421.6},0).to({regX:9.5,rotation:7.2,x:1038.9,y:424.3},3).to({regX:9.4,rotation:3.3,x:1038.4,y:422.5},4).to({regX:9.5,rotation:6.9,x:1037.9,y:422.7},4).to({startPosition:0},4).to({regX:9.4,rotation:4.3,x:1041.4,y:421.6},3).to({_off:true,regX:-7.9,regY:85.5,rotation:12.5,x:1040.6,y:419.5},1).wait(430));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AhjqYQESCYAqIMIBTIzQgNAGgNAGQgFACgFADQjjBijrghQgUgDgTgEIg+qk");
	this.shape.setTransform(1008.2,307.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4A4A4A").s().p("AjGKRIgngHIg+qkIDIp+QESCYAqIMIBTIzIgaAMIgKAFQiqBJiuAAQg7AAg7gIg");
	this.shape_1.setTransform(1008.2,307.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("AhjqWQESCYAqILIBTIzQgOAHgMAFQjsBhjtgcQgSgCgSgDQgclVgklQ");
	this.shape_2.setTransform(1008.2,307.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4A4A4A").s().p("AjHKRIgkgFQgclVgklQIDIp9QESCYAqILIBTIzIgaAMQi3BLi3AAQg1AAg2gGg");
	this.shape_3.setTransform(1008.2,307.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("AhjqVQESCYAqILIBTIzQgOAGgMAGQjrBbjugXQgSgCgSgCQgXlYgplN");
	this.shape_4.setTransform(1008.2,307.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4A4A4A").s().p("AjHKRIgkgEQgXlYgplNIDIp9QESCYAqILIBTIzIgaAMQi8BJi9AAQgwAAgwgFg");
	this.shape_5.setTransform(1008.2,307.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(2,1,1).p("AhjqUQESCYAqILIBTIzQgOAHgMAEQjqBXjwgSQgSgCgSgCQgSlagtlK");
	this.shape_6.setTransform(1008.2,307.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4A4A4A").s().p("AjIKSIgkgEQgSlagtlKIDIp+QESCYAqILIBTIzIgaALQjCBIjFAAQgpAAgqgDg");
	this.shape_7.setTransform(1008.2,307.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(2,1,1).p("AhjqTQESCYAqILIBTIzQgNAGgNAFQjpBRjxgNQgSgBgTgCQgMldgylH");
	this.shape_8.setTransform(1008.2,307.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4A4A4A").s().p("AjIKSIglgDQgMldgylHIDIp+QESCYAqILIBTIzQgNAGgNAFQjJBGjOAAQgiAAghgCg");
	this.shape_9.setTransform(1008.2,307.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(2,1,1).p("AhjqSQESCYAqIMIBTIzQj/BckagRQgHlfg3lF");
	this.shape_10.setTransform(1008.2,307.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4A4A4A").s().p("AjtKQQgHlfg3lFIDIp+QESCYAqIMIBTIzQjZBOjrAAQgqAAgrgDg");
	this.shape_11.setTransform(1008.2,307.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(2,1,1).p("AhZqSQESCYAqIMIA/GpQgRARgNANQhRBWgwBIQisAki6gLQgHlfg3lF");
	this.shape_12.setTransform(1007.2,307.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4A4A4A").s().p("AjjKQQgHlfg3lFIDIp+QESCYAqIMIA/GpIgeAeQhRBWgwBIQiEAciNAAQgqAAgrgDg");
	this.shape_13.setTransform(1007.2,307.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(2,1,1).p("Ah3meQD3iUDylOIAyAuIjKEzIE8kfQAsAoASA+Ij2FFID8jKIAcBfQjGEkkmDbAjeqOQAiA9AhCXQATAOARAOQBtBbAcCWAhxhkIhrjSIhHl6QAjgbAiA9AnTupQCiBPBTDMAhxhkIAQAeQgFACgFADAhxhkIAGAjQgYAOAOAeQAKAHALAGQBsBBB/AEQAeghgfgbAh1gVQgPAigNAhQhODBgnB8Qg5C3AeAhAn4GCQgcgCgcgDIhFpIAkGFrQh7Adh3gGQCJGuDGB6IBOAAQDyi2gMq3AhhhGQBhBHCKAA");
	this.shape_14.setTransform(1043.9,333.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4A4A4A").s().p("AiHKVQgcgBgdgEIhEpJICircQChBPBTDLQgig9gjAcIBHF6IBrDQIAGAjQgZAOAOAeIgcBFQhNDAgnB8QhmAYhjAAIgogBg");
	this.shape_15.setTransform(1007,305.7);

	this.instance_19 = new lib.Tween20("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(1010.2,305.3);
	this.instance_19._off = true;

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(2,1,1).p("AiCqVQEkCOAjInIBgIRQkMB9jXgeQhnllABjk");
	this.shape_16.setTransform(1010.2,303.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#4A4A4A").s().p("Ai+KQQhnllABjkICircQEkCOAjInIBgIRQjZBli1AAQgrAAgqgGg");
	this.shape_17.setTransform(1010.2,303.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(2,1,1).p("Ah5qVQEkCOAjInIBOGvQgSASgOAPQg/BCgrA7Qi5A5iwgWQgzkcgRkt");
	this.shape_18.setTransform(1009.3,303.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#4A4A4A").s().p("AjXKQQgzkcgRktICircQEkCOAjInIBOGvIggAhQg/BCgrA7QiHApiBAAQgxAAgwgGg");
	this.shape_19.setTransform(1009.3,303.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(2,1,1).p("AiCqVQEkCOAjInIBgIRQkNB9j4geQg8kXgIky");
	this.shape_20.setTransform(1010.2,303.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#4A4A4A").s().p("AjgKQQg7kXgJkyICircQEkCOAjInIBgIRQjZBljLAAQgwAAgxgGg");
	this.shape_21.setTransform(1010.2,303.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(2,1,1).p("AiCqVQEkCOAjInIBgIRQkMB9j4geQhGkTABk2");
	this.shape_22.setTransform(1010.2,303.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#4A4A4A").s().p("AjfKQQhGkTABk2ICircQEkCOAjInIBgIRQjZBljLAAQgwAAgwgGg");
	this.shape_23.setTransform(1010.2,303.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(2,1,1).p("AiVqWQEdB+A+IwIBmITQkHCDkAgdQhBkYgPlC");
	this.shape_24.setTransform(1012.1,303.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#4A4A4A").s().p("AjbKRQhBkYgPlCICWrNQEdB+A+IwIBmITQjYBsjSAAQgvAAgugGg");
	this.shape_25.setTransform(1012.1,303.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(2,1,1).p("AioqWQEWBsBZI5IBtIXQkCCHkIgaQg8kdghlP");
	this.shape_26.setTransform(1014.1,303.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#4A4A4A").s().p("AjWKTQg8kdgglPICKq9QEWBsBZI5IBtIXQjYBxjcAAQgrAAgrgEg");
	this.shape_27.setTransform(1014.1,303.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(2,1,1).p("Ai7qXQEPBcB1JCIByIZQj8CNkQgZQg4kigxlb");
	this.shape_28.setTransform(1015.9,303.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#4A4A4A").s().p("AjRKUQg4kigxlbIB/quQEPBcB1JCIByIZQjWB4jlAAQgoAAgpgEg");
	this.shape_29.setTransform(1015.9,303.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(2,1,1).p("AjOqXQEIBKCQJNIB4IaQj3CSkXgXQg1knhAln");
	this.shape_30.setTransform(1017.9,303.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#4A4A4A").s().p("AjNKVIh0qOIBzqeQEIBKCPJNIB5IaQjVB+jsAAQgnAAgngDg");
	this.shape_31.setTransform(1017.9,303.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},5).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_19}]},4).to({state:[{t:this.instance_19}]},4).to({state:[{t:this.instance_19}]},4).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[]},1).to({state:[]},420).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(13).to({_off:false},0).wait(1).to({regX:-12.1,regY:-63.5,x:998.1,y:241.8},0).to({regX:-12,skewX:-1.8,x:998.2},3).to({y:240.1},4).to({y:239.2},4).to({y:240.1},4).to({x:999.9,y:240.9},3).to({_off:true},1).wait(430));

	// Layer 7
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(2,1,1).p("AlE0mQAvE9BPDrQgYGzB3HWQAfB4AWBpQAbCDAOBrQAJBCADA5QgWAsAZAgQAUAJAUAFQBoAWBYhkAAGMhQAAAVgBATIioELIBXDpIBPgeIBCB2IBUhwICshsIhXnYAADLVQB4AqB4h6QAVAagaBCACI2TQAYEFAVEIQBhJYgjOzABFUXIh1h2IAzB+");
	this.shape_32.setTransform(1017,499.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#C2894C").s().p("AAIDEIgzh+IB1B2Ih1h2IAzB+IhPAeIhWjoICnkLIABgoQAVAJAUAFIhRDyIC7EDIhUBwgAAIDEg");
	this.shape_33.setTransform(1016.4,610.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2B2B2B").s().p("AhLBTQgUgFgUgJQgaggAXgrQB2ApB4h5QAWAagaBBQhIBShSAAQgSAAgTgEg");
	this.shape_34.setTransform(1029.2,572.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#DEB17F").s().p("AgiRZIBQjyQBoAVBYhjIBXHYIisBsgAADMNQgDg5gIhDQgOhqgciDQgWhpgfh4Qh3nWAYm0QhPjqgvk9QBIAEBCgFQCzgRCPhbQAYEEAVEJQBiJYgkOzQhaBahYAAQgfAAgfgKg");
	this.shape_35.setTransform(1017,493.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(2,1,1).p("ACdIGQlkrOhtmfQhmmEAdjpIBwhZQCnhHCCBZIA/JWQClHoBsK3QAlAmgZAgACdIGQgLApAlALQAWgNAYgIQAxgRA5AHACdIGQAYgTAagLQBGggBXASAC3I9IiWE1IguDjIA7AAIBNi9IAig3IAAEsIhIDBIBIAAIBFiAIAagwICJi4IAAnD");
	this.shape_36.setTransform(1025.9,484);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#2B2B2B").s().p("AhwAAQAXgSAagMQBGggBXASQAlAngZAfQgVgEgUgCQg5gGgxARQgXAHgWANQglgKALgpg");
	this.shape_37.setTransform(1053,535.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#C2894C").s().p("AgXGTIBIjBIAAkrIgjA4IhMC8Ig8AAIAvjjICWk0QAXgOAZgIIgFKlIhFCAg");
	this.shape_38.setTransform(1036.8,579.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#DEB17F").s().p("ADoJnQAwgRA3AFQAUABAVAEIANADIAAHDIiJC4IgaAwgAk0onQhmmEAdjpIBwhZQCnhHCCBZIA/JWQClHoBsK3QhXgShGAgQgaALgYATQlkrOhtmfg");
	this.shape_39.setTransform(1025.9,477.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(2,1,1).p("AJnHrICbCkIg4C8IhWAAIhWAAAFKIEQAngCgHAtIDMh4IAxA0IANFgAHeJDIAaB8IAmCMAEGLdIBgCiIC4AAIAAg0Ih8g0QgHhlBdANADOK5QADAtA1gJQgBhoBlhGADOK5QAGgkAPgfQAfhCBIgwAlut+IBVJGIJjM8AsBsIQgEFJCoGTQBuEUK9HR");
	this.shape_40.setTransform(1066.1,438.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#2B2B2B").s().p("AhOBHQAGgkAPgfQAghBBHgvQAngCgIAtQhkBFABBoIgQABQglAAgDgmg");
	this.shape_41.setTransform(1094.5,500.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#DEB17F").s().p("AFmOpIhgiiQgBhoBlhGIDMh4IAxA0ICbCkIg4C8IhWAAIgNlgIANFgIhWAAIgmiMIgah8IAaB8QhdgOAHBmIB8A0IAAA0gApdgCQiomTAElJQARhbA6g2QCah9CuCXIBVJHIJjM8QhIAvgfBCQgPAfgGAkQq9nRhukTg");
	this.shape_42.setTransform(1066.1,434.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(2,1,1).p("Am1BtQAvhWC1grQB3gcDAgJQAHgWApARIAAjMIA8jMIBMA4IgwCsIDQjcIAPBOIAtDeIAMBkIg4AAIhojcAkqn9IBZHpACWg+QgDCCBxAlAHNmAIDpCaIAAEHIg+gpIg+gqAJ4gIQjyCLiCgaAq1jsQgKGYDuFBIBUAAQEGBVEhlhQAeglAegoQAogFgKgmABmg5QAUC2BsAX");
	this.shape_43.setTransform(1058.9,384.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#2B2B2B").s().p("AhPhfQAIgXAoASQgDCBBwAmQAKAlgoAFQhqgWgVi2g");
	this.shape_44.setTransform(1077.1,388.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#DEB17F").s().p("Al9HtIhUAAQjulBAKmYIAIgCQAQirA3AXQCYhyCkgJIBZHpQB3gcDAgJQAUC2BsAXQgeAogeAlQjpEdjXAAQg0AAgzgRgAm1BtQAvhWC1grQi1ArgvBWgAEEBpQhxglADiCIAAjMIA8jMIBMA4IgwCsIDQjcIAPBOIAtDeIAMBkIg4AAIhojcIBoDcIA4AAIgMhkIgtjeIDpCaIAAEHIg+gpIg+gqIA+AqQjMB1h9AAQgXAAgUgEg");
	this.shape_45.setTransform(1058.9,384.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(2,1,1).p("AlwEfQA8hUBthVQCRhxDLh/QBGBuBhAqQAwgMgXgkAkWlgQBbC5gMEdADnl6QBmhtBHjXQBmABgjBlIAAAVQBuBhAdAqQAeApgLAgQgIAFgQAaQgPAbgkAvQgjAwgyBHQgyBHhOA2ACmixQgeg1AFjeIgihwQBBhZAbCnIAgBsQA/A9AHBhACmixQBjB8BMAjACVh6Qglg8A2AFAp2gwQgQGSEUFdICSAAQExjeDrnD");
	this.shape_46.setTransform(1052.2,362.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#2B2B2B").s().p("AhbgwQglg8A2AFQBiB6BMAkQAXAkgwANQhggrhGhtg");
	this.shape_47.setTransform(1076.3,355.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#DEB17F").s().p("AlyK/QkUldAQmSIApigQB+jEC5A0QBbC5gMEdQCRhxDLh/QBGBuBhAqQjrHCkxDfgAlwEfQA8hUBthVQhtBVg8BUgACmixQgeg1AFjeIgihwQBBhZAbCnIAgBsQA/A9AHBhQgHhhg/g9QBmhtBHjXQBmABgjBlIAAAVQBuBhAdAqQAeApgLAgQgIAFgQAaQgPAbgkAvQgjAwgyBHQgyBHhOA2QhMgjhjh8g");
	this.shape_48.setTransform(1052.2,362.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(2,1,1).p("ACNnjQCgiHCAjpQA9gGgJCSQBgBfAUDRQhjDLjhCFAE9pPIAAAoIBAAAIAABQIBkCoAliHIQgMiGDOjXQBHhLC6i+QgCglAmAAQA1BWBXAmAj6kNIBaF4AEBgMQAmgOgWgtABhieQBCBeBeA0ACFjDQhhhxAZjXIgsigQBbgsAhD0QBnBRABCLApUBdQAVHrEREMIBsAAIAshQQDQhHDHrJ");
	this.shape_49.setTransform(1049.4,343.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#2B2B2B").s().p("Ahbg1QgCglAmAAQA1BWBWAkQAWAugmANQhdg0hChcg");
	this.shape_50.setTransform(1068.2,333.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#DEB17F").s().p("AkuNUQkRkMgVnrQAcg/A1hpQBijJCmAHIBaF4QjBDKgBCDIABAQIgBgQQABiDDBjKQBHhLC7i+QBCBeBeA0QjILJjPBHIgsBQgACFjDQhhhxAZjXIgsigQBbgsAhD0QCgiHCAjpQA9gGgJCSQBgBfAUDRQhkDLjgCFQhYgmg0hWgAD1kHQgBiLhnhRQBnBRABCLgAF9nXIBkCoIhkioIAAhQIhAAAIAAgoIAAAoIBAAAIAABQg");
	this.shape_51.setTransform(1049.4,343.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(2,1,1).p("AiTmzQD3iUDylNIAyAuIjKEyIE8keIA+BmIj2FEID8jKIAcBgQjGEjkmDdAk/rEQBHg3BBEtQATANARAOQBtBcAdCVAiRgqQgPAjgNAhAh9haQglANARAjQB2BOCKAEQAeghgfgZAj4lLIARAiIABABIBpDOQBhBHCKABAjmkoQAJB6AwDIQjCHdAyA4ApYB0QCZKHD6CaIBOAAQDyi1gMq4");
	this.shape_52.setTransform(1046.7,335.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#2B2B2B").s().p("AiEgQQgRgjAlgOQBhBHCKAAQAfAbgeAgQiKgDh2hOg");
	this.shape_53.setTransform(1045.4,332.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#DEB17F").s().p("AjGOVQj5iaiZqHQCHjgDqi9IABABIgBgBIgRgiIgbg1IgslEQBHg3BBEtQASANASAPQD3iVDxlNIAyAuIjJEyIE8keIA9BmIj2FEID8jKIAcBgQjFEjkmDdQiKgBhihHIhojOQAJB6AvDIIAchEQB3BPCKADQAMK4jzC1gAk+IvQgKgLAAgdQAAhwCal9QiaF9AABwQAAAdAKALgAgKjCQgciVhthbQBtBbAcCVg");
	this.shape_54.setTransform(1046.7,335.3);

	this.instance_20 = new lib.Symbol5("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(985.1,341.6,1,1,0.5,0,0,0.9,30.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(2,1,1).p("AF9onQgdBUBHgOIA6hSACNnjQB+hrBqinIg4B2QgTA/ATAZQAZAaAngaIBChxAF1r1QAdgtAbgxQA9gGgJCSQBgBfAUDRQhjDLjhCFAliHIQgNiGDOjXQBIhLC6i+QgCglAmAAQA0BWBYAmAjniyIBGEdAGnnhQghBKA/gLQAAAAAAAAQgQBkA0ABIA0gxAEBgMQAmgOgWgtABhieQBCBeBeA0ACFjDQhhhxAZjXIgsigQBbgsAhD0QBnBRABCLAHFmiIA6g/ApUBdQBGHSDgElIBsAAIAshQQDQhHDHrJ");
	this.shape_55.setTransform(1050.7,342.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#2B2B2B").s().p("Ahbg1QgCglAmAAQA1BWBWAkQAWAugmAOQhdg1hChcg");
	this.shape_56.setTransform(1069.6,332);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#DEB17F").s().p("AkuNUQjgklhGnSQAcg/AkgwQBzifC6gBIBGEdQjBDKgBCDIABAQIgBgQQABiDDBjKQBHhLC7i+QBCBeBeA0QjILJjPBHIgsBQgACFjDQhhhxAZjXIgsigQBbgsAhD0QB+hrBqinIg4B2QgJAfAAAWQAAAWAJANQAZAaAngaIgBADQgWBFAuAAIAAAAIAAAAIARgBIAAgBIACAAIgCAAIAAABIgRABIAAAAIAAAAQguAAAWhFIABgDQgnAagZgaQgJgNAAgWQAAgWAJgfIA4h2QAdgtAbgxQA9gGgJCSQBgBfAUDRQhkDLjgCFQhYgmg0hWgAD1kHQgBiLhnhRQBnBRABCLgAHpk9IA0gxIg0AxQgngBAAg6QAAgSADgYIAAAAIAAAAIAAAAIgOABIAAAAIgBAAQgrAAAbg+IABgCIgBACQgbA+ArAAIABAAIAAAAIAOgBIAAAAIAAAAIAAAAQgDAYAAASQAAA6AnABgAHFmiIA7g/gAGnnhIA6hSgAF9onIBChxg");
	this.shape_57.setTransform(1050.7,342.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(2,1,1).p("AGVpXQAOgiALgmQAAgBABAAQA4hHAaCJQA/gIAECNQAsgLALBQQgOBkg6BbQhABkh0BZAlGEZQA8hUBthVQCRhwDlhwQAIgjAoALQhXhkAFjeIgihwQAcg8BACKIAgBsQBQhVA0iCQgxCbAoA2QAPAIAPgJQAAgBABAAQAjA6AigJQArgLAph3Aj4mnQBfDbgEE8AHwlXQgKBoBNAaAERmAQA/A9AHBhAFmAYQAwgMgXgkAEJiIQAqBNBMAjADZhwQAsBeBhAqAIBpeQgpC6gtAcAp5hWQAkGAENGPICSAAQExjeDrnD");
	this.shape_58.setTransform(1049.4,361.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#2B2B2B").s().p("AhWg3QAIgjAoAMQApBMBMAjQAXAkgwANQhfgrgtheg");
	this.shape_59.setTransform(1079.7,356.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#DEB17F").s().p("AlJK5QkMmPglmAQAvhzA0gGQByi4CtggQBfDbgFE8QCRhwDmhwQAsBeBhAqQjsHDkwDegAlGEZQA8hUBshVQhsBVg8BUgAEIiIQhWhkAEjeIgihwQAdg8BACKIAfBsQBRhVA0iCQAOgiALgmIABgBQA4hHAaCJQA/gIADCNQAtgLAKBQQgNBkg6BbQhEgXAAhVIABgWQArgLAoh3QgoB3grALIgCAAIgHABIgBAAIAAAAQgdAAgfgyQAugcApi6QgpC6guAcIAAABIgBAAIAAAAIgCABQgGADgHAAIAAAAIAAAAQgHAAgHgDQgSgYAAgtQAAg2AbhWQgbBWAAA2QAAAtASAYQAHADAHAAIAAAAIAAAAQAHAAAGgDIACgBIAAAAIABAAIAAgBQAfAyAdAAIAAAAIABAAIAHgBIACAAIgBAWQAABVBEAXQhABkh1BZQhMgjgqhNgAFWjiQgGhhhAg9QBAA9AGBhg");
	this.shape_60.setTransform(1049.4,361.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(2,1,1).p("AmgBsQAvhWC2grQB3gcC/gJQAIgWAoARIAAjXQA3htgHhyQBBghAXB3IgUCwQBki7BCgFQATAHALAnQAqCAAODCQgcAmgcgmQhBhdgLiPAkBmiIBGGNACrg/QgCCCBwAlAKNgIQgiARgcg8AHjmBIDoCaQAsCWgsBxQgqAWgUg/IAAABQjxCKiDgaAJRjrIAEBlAKZilIACBOArgknQCUHHCQFMIBUAAQEGBVEilhQAdglAegoAB7g6QAVC2BrAXQAogFgKgm");
	this.shape_61.setTransform(1058.1,383.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#DEB17F").s().p("AloHsIhUAAQiQlMiUnHIBBhKQAKheBRARQCMgyC3BOIBGGNQB3gcC/gJQAVC2BrAXQgeAogdAlQjpEdjYAAQg0AAgzgRgAmgBsQAvhWC2grQi2ArgvBWgAEZBoQhwglACiCIAAjXQA3htgHhyQBBghAXB3IgUCwQBki7BCgFQATAHALAnQAqCAAODCQgcAmgcgmQhBhdgLiPQALCPBBBdQAcAmAcgmQgOjCgqiAIDoCaQAsCWgsBxQgqAWgUg/IAAABIgBAAIAAAAQgHAEgHAAIAAAAIgBAAQgXgBgUgnIAAAAIAAgBIgCgEIgBgCIABACIACAEIAAABIAAAAQAUAnAXABIABAAIAAAAQAHAAAHgEIAAAAIABAAQjMB0h9AAQgWAAgVgEgAKbhXIgChOgAJViGIgEhlgAKNgIIAAAAg");
	this.shape_62.setTransform(1058.1,383.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(2,1,1).p("AGeJJQBzh4BLgIQAnAIALAoQBAAGBfCPQABBpgsBPQgnAlgsggQgvAegkgZIh6grQgNhhBbAHIAsCFAFIL2QAfBlBHAyQBWANBbgYIgDgyAKOH5IAhFSAF9IhQAmgEgFAsAEQLWQADgjANgeQAbhCBCgyAEQLWQAFAsAzgMQgHhkBdhJAIQJVIAgB2AstqgQAnF3CxF4QCLDJIHFAQBjA9BwBBAmPuRICOK3IJ+L7");
	this.shape_63.setTransform(1075.1,425.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#2B2B2B").s().p("AhGBJQADgjANgeQAbhBBBgyQAmgEgFAsQhcBIAHBkQgLADgJAAQggAAgEgjg");
	this.shape_64.setTransform(1109.4,490.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#DEB17F").s().p("AGuOOQhHgygfhlQgHhkBdhJQBzh4BLgIQAnAIALAoQBAAGBfCPQABBpgsBPQgnAlgsggIghlSIAhFSQgvAegkgZIADAyQg6APg5AAQgfAAgfgEgAHiMmIB6ArIgsiFIggh2IAgB2IgMAAQhOAAAMBagAKvNMgAA9JZQoHlAiLjJQixl4gnl3QABimBkgpQBkgqDVAIICOK3IJ+L7QhCAygbBCQgNAegDAjQhwhBhjg9g");
	this.shape_65.setTransform(1075.1,425.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(2,1,1).p("ADPI2QgJAqAlAJQAWgPAXgJQBBgaBQAPAntyTQA4EZBYE8QB1GTFvJpQAjA7AlA9QAWgUAZgNQBFgkBXANQAoAmgZAiAgw1YIB4LJQC1HCCNJ9QAIAnAIAnADrJpQhLBogfCRQghCRgQBzQAfAgAigkQAqhCALhxIAdg2QANDjggCRQg7AnAYA5QAfAbAxgjQAngSAShpIAWguQBXhEBLiJQgKiSg7j3");
	this.shape_66.setTransform(1041.6,474.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#2B2B2B").s().p("AhwAEQAWgTAZgNQBEgkBYANQAnAmgYAhQhRgPhAAaQgXAJgVAPQgmgJAJgqg");
	this.shape_67.setTransform(1073.5,530.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#DEB17F").s().p("ACtVNQgZg5A7gnQAhiRgOjjIgdA2QgLBxgpBCQgiAkggggQARhzAhiRQAgiRBKhoQAWgPAWgJQBCgaBQAPQA7D3AKCSQhLCJhYBEIgVAuQgSBpgoASQgbAUgWAAQgRAAgNgMgACGG+Qlupph1mTQhYk8g4kZQBviOAwBXIEeiOIB3LJQC2HCCNJ9IARBOQhYgNhFAkQgZANgXAUIhIh4g");
	this.shape_68.setTransform(1041.6,474.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(2,1,1).p("Alx+TQALAHAKAHAAOtzQBPEsAnFHQABAEABAEQA3DoAmC6QAiCmAnDQQAFAcAGAdQAXB8AWCTQAHAwAIAzQAHAOgDAPQAAAHABAHQAGAqAGArQAvE3gLAUQgFBrgFBGQgOAngSBAQgKAhgJAyQgKAyglAeIgQABIgCgNACEPrQgEACgEAEQgIApAnAIQgfBIgpBnQgIAUgIAVQgnBgADAgQAAAHAOBPQACAcgLCjQABALALAKQAKAKAIgBQAlgDAYhHQAGgYAFgVQAJgqADghQAKAzAGAvQAAAFACAHQABAVAEAsQAEAwgEAsQgEAsACAeQABANAWAMQAPAJANgMQABACAAABQALAoACAFQAGAPAJgBQAVgCAWhOQAAAAAAgBQAGgUAGgZQAthggLhaQADghgBgvAmpriIBnICQBvIOEhJSQAaA2AcA1QAVgRAXgLQAAgBABAAQAPgIgagDQBrgZBKAHQAQANAIANACbQiQABAAABAAQAXgPAZgKQAMgEAMgEQA+gTBLAKQACgDACgCQADgGACgFADedWQAAgBABgBQAEgSAEgQQAsikgDg+QgDhGAAgO");
	this.shape_69.setTransform(1038.5,434.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#2B2B2B").s().p("AheA5QgngIAJgpQADgEAFgCQAUgQAXgLIABgBIgKgLQAQACAAAEQAAACgGADQAGgDAAgCQAAgEgQgCQBqgZBKAHQAQANAHANQAIAOgEAPIgFAKIgEAFQhKgKg+ATIgXAIQgZAKgXAPIgDAAg");
	this.shape_70.setTransform(1063.5,534.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#DEB17F").s().p("ADsV2QgCgFgLgoIgBgDIABgCIAIgiQApiaAAhAIAAgIIgDhUIADBUIAAAIQAABAgpCaIgIAiIgBACIgcADQgWgMgBgNQgCgeAEgsQAEgsgEgwIgFhBIgCgMQgGgvgKgzQgDAhgJAqIgLAtQgYBHglADQgIABgKgKQgLgKgBgLQALijgCgcIgOhWQgDggAnhgIAQgpQAphnAfhIIACAAQAXgPAZgKIAYgIQA+gTBLAKIAEgFIAGADIAMBVQAvE3gLAUQgFBrgFBGQgOAngSBAQgKAhgJAyQgKAyglAeIgQABIgCgNIgEgCQAGgUAGgZQAkhNAAhIQAAgTgCgSQACgZAAggIAAgXIAAAXQAAAggCAZQACASAAATQAABIgkBNQgGAZgGAUIAAABQgWBOgVACIgBAAQgJAAgFgOgABOFwQkhpRhvoPIhnoCIBdgeQAgAJArg6QAqg6DlgIQBPEsAnFHIACAIQA3DoAmC7QAiCmAnDPIALA5QAXB8AWCTIAPBjQgIgNgQgNQhKgHhrAZIALALIgBABQgXALgVARQgcg1gag2g");
	this.shape_71.setTransform(1038.5,487.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},5).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},2).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_45},{t:this.shape_44,p:{x:1077.1,y:388.3}},{t:this.shape_43}]},1).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49}]},1).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52}]},1).to({state:[]},1).to({state:[{t:this.instance_20}]},20).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55}]},1).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_62},{t:this.shape_44,p:{x:1078.4,y:386.9}},{t:this.shape_61}]},1).to({state:[{t:this.shape_65},{t:this.shape_64},{t:this.shape_63}]},1).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69}]},1).to({state:[]},1).to({state:[]},421).wait(2));

	// Layer 19
	this.instance_21 = new lib.Symbol10("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(1003.7,544.9,1,1,0,-3.3,176.7,773.6,549.4);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(45).to({_off:false},0).to({regY:549.3,scaleX:1,scaleY:1,skewX:-11.5,skewY:168.5,x:1015,y:539.7,startPosition:1},1).to({regX:773.7,regY:549.2,scaleX:1,scaleY:1,skewX:-36.1,skewY:143.9,x:1047.4,y:538.6,startPosition:4},3).to({regX:773.6,regY:549.3,scaleX:1,scaleY:1,skewX:-44.4,skewY:135.6,x:1062.9,y:531.7,startPosition:5},1).to({regY:549.4,scaleX:1,scaleY:1,skewX:-69,skewY:111,x:1086.2,y:522,startPosition:8},3).to({y:523.2},9).to({regY:549.3,scaleX:1,scaleY:1,skewX:-56,skewY:124,x:1083.9,y:525.6,startPosition:18},1).to({scaleX:1,scaleY:1,skewX:-49.4,skewY:130.6,x:1071.1,y:534.1,startPosition:19},1).to({regX:773.7,regY:549.2,scaleX:1,scaleY:1,skewX:-36.1,skewY:143.9,x:1051.9,y:533.6,startPosition:21},2).to({regX:773.6,regY:549.3,scaleX:1,scaleY:1,skewX:-11.5,skewY:168.5,x:1022.8,y:539.7,startPosition:24},3).to({regY:549.4,scaleX:1,scaleY:1,skewX:-3.3,skewY:176.7,x:1001.1,y:544.9,startPosition:26},2).to({_off:true},1).wait(391));

	// LEFT ARM
	this.instance_22 = new lib.LEFTARMcopy4("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(1018.2,402.8,0.999,0.999,-0.5,0,0,22.5,11.7);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(45).to({_off:false},0).to({regY:11.8,rotation:-31.7,x:1031.2,y:404.8},8).to({y:406.1},9).to({regX:22.6,regY:11.7,rotation:-3,x:1008.2,y:402.8},9).to({_off:true},1).wait(391));

	// LEFT SHOULDER
	this.instance_23 = new lib.LEFTSHOULDERcopy4("synched",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(998.6,239.4,0.999,0.999,-0.5,0,0,21.6,4.6);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(45).to({_off:false},0).to({regX:21.5,regY:4.5,rotation:-4.8,x:999,y:239.1},8).to({y:240.4},9).to({regX:21.6,regY:4.6,rotation:-0.5,x:988.6,y:236.9},9).to({_off:true},1).wait(391));

	// HAND
	this.instance_24 = new lib.Tween7copy4("synched",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(999.6,239,1,1,0.2,0,0,-7,-201.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).to({y:243.1},4).to({_off:true},1).wait(35).to({_off:false,rotation:-5.5,y:239},0).to({regY:-201.2,scaleX:1,scaleY:1,rotation:-0.1,x:999.7,y:239.1},4).to({_off:true},1).wait(27).to({_off:false,regX:-6.9,regY:-201.1,scaleX:1,rotation:-2.1,x:984.2,y:234.8},0).to({regX:-6.7,scaleY:1,rotation:-2.6,x:982.9,y:234.2},1).to({regX:-6.9,rotation:-3.6,x:982.7},17).to({regX:-6.8,scaleX:1,scaleY:0.98,rotation:0,skewX:-5.9,skewY:-5.7,x:986.4,y:242},5).to({regX:-6.9,regY:-201.2,scaleX:1,scaleY:1,rotation:-4.9,skewX:0,skewY:0,x:992.8,y:236.9},9).to({regX:-7,regY:-201.4,rotation:0,x:1002.1,y:241.4},11).to({startPosition:0},15).to({_off:true},43).wait(290));

	// Layer 10
	this.instance_25 = new lib.Tween2copy("synched",0);
	this.instance_25.parent = this;
	this.instance_25.setTransform(893.6,218.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).to({y:222.7},4).to({y:218.7},20).to({startPosition:0},12).to({regX:0.1,regY:0.1,x:894,y:218.8},25).to({scaleY:0.99,rotation:-0.8,x:888,y:221.1},4).to({scaleY:1,rotation:-2.9,x:875.9,y:219.3},8).wait(17).to({rotation:-2.9},0).to({regY:0.2,rotation:-2.3,x:879.7,y:225},5).to({regY:0.1,rotation:-1.2,x:886.4,y:218.9},9).to({regX:0,regY:0,rotation:0,x:893.6,y:218.7},11).to({startPosition:0},15).to({_off:true},43).wait(290));

	// Symbol 6
	this.instance_26 = new lib.Symbol6copy4("synched",0);
	this.instance_26.parent = this;
	this.instance_26.setTransform(892.5,200.2,1,1,0,0,0,26.1,-44.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_26).to({y:204.2},4).to({y:200.2},20).to({startPosition:0},12).to({regY:-44.1,rotation:-3,x:892.9,y:200.3},25).to({scaleY:0.99,rotation:-3.8,x:886.5,y:202.6},4).to({scaleY:1,rotation:-5.9,x:873.8,y:200.9},8).wait(17).to({startPosition:0},0).to({regY:-44,scaleX:1,scaleY:0.98,rotation:0,skewX:-5.4,skewY:-5.2,x:877.8,y:208.4},5).to({regY:-44.1,scaleX:1,scaleY:1,rotation:-4.2,skewX:0,skewY:0,x:884.9,y:200.4},9).to({regY:-44.2,rotation:0,x:892.5,y:200.2},11).to({startPosition:0},15).to({_off:true},43).wait(290));

	// Layer 12
	this.instance_27 = new lib.Tween3copy3("synched",0);
	this.instance_27.parent = this;
	this.instance_27.setTransform(896,252.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_27).to({startPosition:0},4).to({startPosition:0},20).to({startPosition:0},12).to({x:896.3},25).to({regX:0.1,scaleY:0.99,rotation:-0.8,x:891,y:254.1},4).to({regY:0.1,scaleY:1,rotation:-2.9,x:880,y:252.5},8).wait(17).to({rotation:-2.9},0).to({rotation:-2.3,x:883.4,y:258.2},5).to({regY:0,rotation:-1.2,x:889.5,y:252.1},9).to({regX:0,rotation:0,x:896},11).to({startPosition:0},15).to({_off:true},43).wait(290));

	// Layer 13
	this.instance_28 = new lib.Tween4copy4("synched",0);
	this.instance_28.parent = this;
	this.instance_28.setTransform(893.6,207.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_28).to({y:211.3},4).to({y:207.3},20).to({startPosition:0},12).to({regX:0.1,regY:0.1,x:894,y:207.4},25).to({scaleY:0.99,rotation:-0.8,x:887.8,y:209.8},4).to({scaleY:1,rotation:-2.9,x:875.3,y:207.9},8).wait(17).to({rotation:-2.9},0).to({regY:0.2,rotation:-2.3,x:879.2,y:213.7},5).to({regY:0.1,rotation:-1.2,x:886.1,y:207.5},9).to({regX:0,regY:0,rotation:0,x:893.6,y:207.3},11).to({startPosition:0},15).to({_off:true},43).wait(290));

	// BODY
	this.instance_29 = new lib.BODYcopy4("synched",0);
	this.instance_29.parent = this;
	this.instance_29.setTransform(893.6,384.5,1,1,0,0,0,120.2,192.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_29).to({regY:193,scaleY:0.99,y:387},4).to({regY:192.8,scaleY:1,y:384.5},20).to({startPosition:0},9).to({startPosition:0},3).to({x:893.7},3).to({x:893.9},22).to({regX:120.4,scaleX:1,scaleY:0.99,rotation:-0.8,x:890.9,y:385.7},4).to({regY:193,scaleX:1.02,scaleY:1,rotation:-2.9,x:884.4,y:384.9},8).wait(17).to({rotation:-2.9},0).to({scaleY:0.98,rotation:0,skewX:-2.3,skewY:-2.2,x:886.4,y:388.6},5).to({regY:192.9,scaleY:1,rotation:-1.2,skewX:0,skewY:0,x:890,y:384.6},9).to({regX:120.2,regY:192.8,scaleX:1,rotation:0,x:893.6,y:384.5},11).to({startPosition:0},15).to({_off:true},43).wait(290));

	// LEFT THIGH
	this.instance_30 = new lib.LEFTTHIGHcopy4("synched",0);
	this.instance_30.parent = this;
	this.instance_30.setTransform(846.8,681.1,1,1,0,0,180,45,119.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_30).to({startPosition:0},4).to({startPosition:0},20).to({startPosition:0},12).to({startPosition:0},25).to({regX:44.9,scaleY:1,x:845.8,y:680.9},4).to({scaleY:1,skewX:-0.6,x:843.5,y:680.4},8).wait(17).to({startPosition:0},0).to({regY:119.8,scaleY:1,skewX:-0.3,x:844.7,y:680.7},5).to({regX:45,regY:119.7,scaleY:1,skewX:0,x:846.8,y:681.1},9).to({startPosition:0},11).to({startPosition:0},15).to({_off:true},43).wait(290));

	// LEFT THIGH
	this.instance_31 = new lib.LEFTTHIGHcopy4("synched",0);
	this.instance_31.parent = this;
	this.instance_31.setTransform(940.5,681.1,1,1,0,0,0,45,119.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_31).to({startPosition:0},4).to({startPosition:0},20).to({startPosition:0},12).to({startPosition:0},25).to({scaleY:1.01,skewX:-0.5,skewY:-1.5,x:939.3,y:680.5},4).to({scaleX:1,scaleY:1.03,skewX:-1.8,skewY:-4.7,x:937.1,y:679.2},8).wait(17).to({startPosition:0},0).to({regY:119.8,scaleX:1,scaleY:1.02,skewX:-1,skewY:-3,x:938.3,y:680},5).to({regY:119.7,scaleY:1,skewX:0,skewY:0,x:940.5,y:681.1},9).to({startPosition:0},11).to({startPosition:0},15).to({_off:true},43).wait(290));

	// LEFT LEG
	this.instance_32 = new lib.LEFTLEGcopy4("synched",0);
	this.instance_32.parent = this;
	this.instance_32.setTransform(816.5,787,1,1,0,0,180,57,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_32).to({startPosition:0},4).to({startPosition:0},20).to({startPosition:0},12).to({startPosition:0},25).to({skewX:-0.1,x:815.7,y:787.1},4).to({skewX:-0.6,x:814.2,y:787},8).wait(17).to({startPosition:0},0).to({skewX:-0.3,x:815,y:787.1},5).to({skewX:0,x:816.5,y:787},9).to({startPosition:0},11).to({startPosition:0},15).to({_off:true},43).wait(290));

	// LEFT LEG
	this.instance_33 = new lib.LEFTLEGcopy4("synched",0);
	this.instance_33.parent = this;
	this.instance_33.setTransform(972.5,795,1,1,0,0,0,59,25.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_33).to({startPosition:0},4).to({startPosition:0},20).to({startPosition:0},12).to({startPosition:0},25).to({startPosition:0},4).to({startPosition:0},8).wait(17).to({startPosition:0},0).to({startPosition:0},5).to({startPosition:0},9).to({startPosition:0},11).to({startPosition:0},15).to({_off:true},43).wait(290));

	// LEFT SHOE
	this.instance_34 = new lib.LEFTSHOEcopy4("synched",0);
	this.instance_34.parent = this;
	this.instance_34.setTransform(859.7,1011.2,1,1,0,0,180,0,41.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_34).to({startPosition:0},4).to({startPosition:0},20).to({startPosition:0},12).to({startPosition:0},25).to({startPosition:0},4).to({startPosition:0},8).wait(17).to({startPosition:0},0).to({startPosition:0},5).to({startPosition:0},9).to({startPosition:0},11).to({startPosition:0},15).to({_off:true},43).wait(290));

	// LEFT SHOE
	this.instance_35 = new lib.LEFTSHOEcopy4("synched",0);
	this.instance_35.parent = this;
	this.instance_35.setTransform(963.2,1011.2,1,1,0,0,0,35.5,41.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_35).to({startPosition:0},4).to({startPosition:0},20).to({startPosition:0},12).to({startPosition:0},25).to({startPosition:0},4).to({startPosition:0},8).wait(17).to({startPosition:0},0).to({startPosition:0},5).to({startPosition:0},9).to({startPosition:0},11).to({startPosition:0},15).to({_off:true},43).wait(290));

	// Layer 21
	this.instance_36 = new lib.Tween5copy("synched",0);
	this.instance_36.parent = this;
	this.instance_36.setTransform(893,572.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_36).to({startPosition:0},4).to({startPosition:0},20).to({startPosition:0},12).to({startPosition:0},25).to({skewX:-0.3,skewY:-1.3,y:572.2},4).to({scaleX:1,skewX:-1.2,skewY:-4.1,y:571.4},8).wait(17).to({startPosition:0},0).to({regX:0.1,regY:0.1,skewX:-1.1,skewY:-3,y:571.9},5).to({regX:0,regY:0,scaleX:1,rotation:-1.2,skewX:0,skewY:0,x:892.9,y:572.6},9).to({rotation:0,x:893,y:572.5},11).to({startPosition:0},15).to({_off:true},43).wait(290));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(744.7,42.6,294.8,1011.1);


// stage content:
(lib._05WorkFWS = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		playSound("_34195397");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(403));

	// Layer 32
	this.instance = new lib.Wholeguycopy("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(248.6,706.5,0.693,0.693,0,0,0,893.8,1052.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(407));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(380,364.1,204.8,700.8);
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
		{src:"/sounds/work/_34195397.mp3", id:"_34195397"}
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