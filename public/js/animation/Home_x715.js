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


(lib.LEFTARM = function(mode,startPosition,loop) {
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


(lib.headturncopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AHSFwIABAAQgXiCAzhQQA2htAehbQA/jFgwh+IAoANQgVhmiohvQolkRlZB7QkxBxDIEaQALAtgIBFQAAANgCAOQgGAaADAXQACAsAXAgQAIARAGAPQANA7gdBQIgpBfQgTAoBHAQIAXAFIgEBTQAJACAKAAQAIANAbAHQghA0AvAfQAXANACATQADBDAWABQAOAbACA+QgDBlBNADQBHgIBSgi");
	this.shape.setTransform(-106.8,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("Aj5ooQAkAIgdDRIEAFFQBCiLBGgOQA5gIAiAWQA2AiAHBhQgBAWgGAVQgCASgGARQgWBEg2AZQgjAQgxgCQAEApgDAlQgBAigHAeQgSBZg+A2QgZATghATQgwAcg8AZQgSAGgSAGIgRh+QggBEgeAWQhAAngiggQgjgogOAHAnui6QgGgBgGgBIAAACQABAjATAhQAJgFALgBQAYgIAagSQgkgXgggMQgFgBgFAAQAYAdAEAhAoukhQABAkAOAOIBlANQgmgshOgTgAj5ooQDFgKDhAnQDrAdCmgcAo9ndQCVhLCvAAADih0QgXgGgRAAQg+ABgFBPQgBAUAZAQQAkARglAnQgRAXASAaQATAfAogZQApgfAJg6QACgSgBgUAoHB0IAaAEQAOADAKgBAn3DJQBdALBFAAQBFAAAmAvQgIg+gbgoQh0ADhUgmQAfgDghgyAnVDdQAtAMBggFAmVGUQAIABAOgNQgJg6gIgBIgeAD");
	this.shape_1.setTransform(-104.9,16.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#DEB17F","#323232"],[0.02,1],155.5,88.9,164.5,61).s().p("AHSIxQhnhFg5hSQAGgRADgSQAFgVABgXQgGhhg3giQgigWg4AIQhGAOhDCLIkAlFQAdjQgkgIIAFAAQAlgCAnAAIAAAAIABAAQCVAACmAbIAaAEQB3APBmAAIAAAAIAAAAQBgAABQgNIAEgBIgEABQhQANhgAAIAAAAIAAAAQhmAAh3gPIgagEQimgbiVAAIgBAAIAAAAQgnAAglACIgFAAQiuAAiWBLQjIkaExhxQFZh7IlERQCoBvAVBmIgogNQAwB+g/DEQgeBcg2BtQgzBQAXCCg");
	this.shape_2.setTransform(-106.8,-18.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DEB17F").s().p("AgfGsQggBEgeAWQg/AngiggQgjgogPAHQgCg+gOgbQAHABAPgNQgKg6gHgBIgeADQgCgTgXgNQgvgfAhg0QgbgHgIgNQBdALBGAAQBEAAAmAvQgIg+gagoQh0ADhVgmQAPgCAAgMQAAgNgRgaQARAaAAANQAAAMgPACQgKABgOgDIgZgEIgXgFQhHgQATgoIApheQAdhQgNg8IgOggQgXgggCgsQgDgXAGgaIACgbQAIhFgLgtQCWhLCuAAQAkAIgdDRIEAFFQBDiLBGgOQA4gIAiAWQA3AiAGBhQgBAWgFAVQgDASgGARQgVBEg2AZQgjAQgygCQAFApgDAlQgBAigHAeQgSBZg+A2QgaATgiATQgwAcg7AZIgjAMgAjkDkIAoAAIAEgBIACAAIADAAIgDAAIgCAAIgEABIgoAAIAAAAIAAAAQg5AAghgIIgBAAIgBAAIAAAAIAAAAIABAAIABAAQAhAIA5AAIAAAAIAAAAgAE/BzQANAAAQgKIACgBQAqgfAIg6QACgNAAgOIAAgLIAAALQAAAOgCANQgIA6gqAfIgCABQgQAKgNAAIAAAAIgBAAQgQAAgKgQIAAgBQgKgOAAgMQAAgMAJgLQASgUAAgOQAAgOgRgIQgZgQAAgSIAAgCQAFhPA+gBQASAAAXAGQgXgGgSAAQg+ABgFBPIAAACQAAASAZAQQARAIAAAOQAAAOgSAUQgJALAAAMQAAAMAKAOIAAABQAKAQAQAAIABAAIAAAAgAlmi7QACAjASAhQAKgFAKgBQAZgIAagSQglgXgfgMIgKgBIgMgCgAmLjwIBlANQglgshPgTQACAkANAOg");
	this.shape_3.setTransform(-119.7,16.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#323232").s().p("AgbFTQAOgGAiAnQAiAgBAgmQAegWAghEIARB+QhRAhhIAIQhLgDADhlgAgsD7QgWgCgDhDIAegDQAIABAJA6QgNANgIAAIgBAAgAATA6QhEABhdgMQgKAAgJgBIADhSIAaADQAOADAKgBQBUAlBzgDQAbApAIA9QgmgvhFAAgAiRlUIAAgBIAMABQAYAeAEAgQgLABgJAGQgTgigBgjgAi2mJQgOgOgBgjQBOASAmAsg");
	this.shape_4.setTransform(-141,31.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgmgeIAKABQAeAMAlAWQgaASgXAIQgEgggYgdg");
	this.shape_5.setTransform(-150.4,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(32));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-171.2,-76,128.8,152.9);


(lib.headturn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AHSFwIABAAQgXiCAzhQQA2htAehbQA/jFgwh+IAoANQgVhmiohvQolkRlZB7QkxBxDIEaQALAtgIBFQAAANgCAOQgGAaADAXQACAsAXAgQAIARAGAPQANA7gdBQIgpBfQgTAoBHAQIAXAFIgEBTQAJACAKAAQAIANAbAHQghA0AvAfQAXANACATQADBDAWABQAOAbACA+QgDBlBNADQBHgIBSgi");
	this.shape.setTransform(-106.8,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AoukhQABAkAOAOIBlANQgmgshOgTgAnSh8QAYgIAagSQgkgXgggMQgFgBgFAAQgGgBgGgBIAAACQABAjATAhQAJgFALgBgAj5ooQAkAIgdDRIEAFFQBCiLBGgOQA5gIAiAWQA2AiAHBhQgBAWgGAVQgCASgGARQgWBEg2AZQgjAQgxgCQAEApgDAlQgBAigHAeQgSBZg+A2QgZATghATQgwAcg8AZQgSAGgSAGIgRh+QggBEgeAWQhAAngiggQgjgogOAHAj5ooQDFgKDhAnQDrAdCmgcAo9ndQCVhLCvAAADih0QgXgGgRAAQg+ABgFBPQgBAUAZAQQAkARglAnQgRAXASAaQATAfAogZQApgfAJg6QACgSgBgUAoHB0IAaAEQAOADAKgBQAfgDghgyAn3DJQBdALBFAAQBFAAAmAvQgIg+gbgoQh0ADhUgmAnVDdQAtAMBggFAmVGUQAIABAOgNQgJg6gIgBIgeADAnui6QAYAdAEAh");
	this.shape_1.setTransform(-104.9,16.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#DEB17F","#323232"],[0.02,1],155.5,88.9,164.5,61).s().p("AHSIxQhnhFg5hSQAGgRADgSQAFgVABgXQgGhhg3giQgigWg4AIQhGAOhDCLIkAlFQAdjQgkgIIAFAAQAlgCAnAAIAAAAIABAAQCVAACmAbIAaAEQB3APBmAAIAAAAIAAAAQBgAABQgNIAEgBIgEABQhQANhgAAIAAAAIAAAAQhmAAh3gPIgagEQimgbiVAAIgBAAIAAAAQgnAAglACIgFAAQiuAAiWBLQjIkaExhxQFZh7IlERQCoBvAVBmIgogNQAwB+g/DEQgeBcg2BtQgzBQAXCCg");
	this.shape_2.setTransform(-106.8,-18.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DEB17F").s().p("AgfGsQggBEgeAWQg/AngiggQgjgogPAHQgCg+gOgbQAHABAPgNQgKg6gHgBIgeADQgCgTgXgNQgvgfAhg0QgbgHgIgNQBdALBGAAQBEAAAmAvQgIg+gagoQh0ADhVgmQAPgCAAgMQAAgNgRgaQARAaAAANQAAAMgPACQgKABgOgDIgZgEIgXgFQhHgQATgoIApheQAdhQgNg8IgOggQgXgggCgsQgDgXAGgaIACgbQAIhFgLgtQCWhLCuAAQAkAIgdDRIEAFFQBDiLBGgOQA4gIAiAWQA3AiAGBhQgBAWgFAVQgDASgGARQgVBEg2AZQgjAQgygCQAFApgDAlQgBAigHAeQgSBZg+A2QgaATgiATQgwAcg7AZIgjAMgAjkDkIAoAAIAEgBIACAAIADAAIgDAAIgCAAIgEABIgoAAIAAAAIAAAAQg5AAghgIIgBAAIgBAAIAAAAIAAAAIABAAIABAAQAhAIA5AAIAAAAIAAAAgAE/BzQANAAAQgKIACgBQAqgfAIg6QACgNAAgOIAAgLIAAALQAAAOgCANQgIA6gqAfIgCABQgQAKgNAAIAAAAIgBAAQgQAAgKgQIAAgBQgKgOAAgMQAAgMAJgLQASgUAAgOQAAgOgRgIQgZgQAAgSIAAgCQAFhPA+gBQASAAAXAGQgXgGgSAAQg+ABgFBPIAAACQAAASAZAQQARAIAAAOQAAAOgSAUQgJALAAAMQAAAMAKAOIAAABQAKAQAQAAIABAAIAAAAgAlmi7QACAjASAhQAKgFAKgBQAZgIAagSQglgXgfgMIgKgBIgMgCgAmLjwIBlANQglgshPgTQACAkANAOg");
	this.shape_3.setTransform(-119.7,16.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#323232").s().p("AgbFTQAOgGAiAnQAiAgBAgmQAegWAghEIARB+QhRAhhIAIQhLgDADhlgAgsD7QgWgCgDhDIAegDQAIABAJA6QgNANgIAAIgBAAgAATA6QhEABhdgMQgKAAgJgBIADhSIAaADQAOADAKgBQBUAlBzgDQAbApAIA9QgmgvhFAAgAiRlUIAAgBIAMABQAYAeAEAgQgLABgJAGQgTgigBgjgAi2mJQgOgOgBgjQBOASAmAsg");
	this.shape_4.setTransform(-141,31.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgmgeIAKABQAeAMAlAWQgaASgXAIQgEgggYgdg");
	this.shape_5.setTransform(-150.4,0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(2,1,1).p("AHfFlQgfh1ArheQArheAgiQQAgiRgKiBIAgAAQgghaiohuQolkRlZB6QjlBwCDESIgJDIQABAUAKAXIAAABQALAZAVAbQACACABACQgCAIgBAHQgCAMABAGQACAMANAaQACAAACAAQgOBdAEBlQgEAIgDAIQAFADAGACQABADAAADQAEAUAGAYQgHADgDACQgDACAAADQgIAqAJA1IAXgWIAOgCQAEALAEALQAhBcA5B9QAEARAGAQQANBhBbAAQBbAAA5glIBQgp");
	this.shape_6.setTransform(-104.3,0.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1,1,1).p("AhtoYQgUAAgTABQivAFi5A8QgwgMgTAKAoqjmQgKAAgJACAn3icQgMgjgngnAodidQARgJAVAKApIkQIAUgCIAKAsAmPkbQgKAhAOAQQBPgJBFAAQACgIgNgRQgxgWhcAHgAlFicQgWgCgZAGQgDAGABAGQABAHAHAHQAFAEAFADQALAGAPAAQAqgFAfgSQgfgTglgBQAGAagLARAl+ilQAmgRAvAMAhtoYQCYgCCPAXQDVAjC6gbAhtoYQBABcgSCVQCRCOAgCcQA8iJA/gPQAzgHAfAWQAxAhAFBiQAAAWgFAVQgDASgFARQgCAFgBAEQAAACgBABQgUA6gsAWQgfARgtgCQgCC5iZBoIhyBBQgIgpgIgzQh4BLgaAJQgrAdglhAQgZgFgmABQACAFAAAIQgCAKgEAEQgFAEgHAAIgLgDAEyhmQgVgGgQAAQg4ABgEBQQgBATAXAQQAgASghAmQgQAXARAaQARAfAkgZQAlgeAHg6QADgTgBgUAnziNQgHgBgGAAQAKAZgIASQAGAAAIABQgBgTgCgSQAAgDAAgDQgCgIgCgHAoLhkQADAAAKABAoAiOQgUAAgKAEAoVBdQAmhfgBhgAmyB/QAUgCAVgGIDXA/QAgAjAIA4IgrgbIjJgOIgNgYIgJAYIhZANAoRByQAtASAygFAoGCkQAYgKA8gbAm6D/QBjAeBugVAmYEvQBIASAqgDAmJB3QAMgDANgFAl2iMIgVAQQAQAAAXAFAlxFqQgCAfARAbIA6AAQAGgYgLghg");
	this.shape_7.setTransform(-104,14.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#DEB17F","#323232"],[0.02,1],156.7,80.6,164.3,52.3).s().p("AFoGoIADgJQAFgRADgSQAFgVAAgXQgFhigxghQgfgWgzAHQg/APg8CKQggidiRiOQASiUhAhcIAYAAIAAAAIABAAQCIAACAAUIAGABIACAAIAEABQB1ATBsAAIAAAAIABAAQBRAABOgLIACAAIAGgBIgGABIgCAAQhOALhRAAIgBAAIAAAAQhsAAh1gTIgEgBIgCAAIgGgBQiAgUiIAAIgBAAIAAAAIgYAAIgnABQivAFi5A8QgwgMgTAKQiDkSDlhwQFZh6IlERQCoBuAgBaIggAAQAKCBggCQQggCRgrBeQgrBeAfB1QhNg6gqhKg");
	this.shape_8.setTransform(-104.3,-19.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#DEB17F").s().p("Ai9HtQgZgFgmABQACAFAAAIQgCAKgEAEQgFAEgHAAIgLgDQgGgQgEgRQg5h9ghhcIgIgWIBZgNIAJgYIANAYIDJAOIArAbQgIg4gggjIjXg/IAZgIIgZAIQgVAGgUACIgCABIgSAAIAAAAIgBAAQgmAAgjgNIgBgBIABABQAjANAmAAIABAAIAAAAIASAAIACgBIhUAlQgGgYgEgUIgBgGIgLgFIAHgQQgEhkAOhdIANABIAOABQgBgTgCgSIAAgGIgEgPQgMgjgngnQAnAnAMAjIAEAPIgNgBQgUAAgKAEQgBgHACgMIADgPIgDgEQgVgbgLgZQAJgCAKAAIgKgsIgUACIAJjIQATgKAwAMQC5g8CvgFIAngBQA/BcgSCVQCSCOAgCcQA8iJA/gPQAzgHAfAWQAxAhAFBiQAAAWgFAVQgDASgFARIgDAJIgBADQgUA6gsAWQgfARgtgCQgCC5iZBoIhzBBIgQhcQh3BLgaAJQgOAJgMAAQgcAAgagsgAj4GkIA6AAQAGgYgLghIhEgBQgCAfARAbgAjKE+IAOAAIgOAAIAAAAIgBAAQgfAAgsgJIgEgBIgBgBIgBAAIgIgCIgDAAIAAgBIgHgBIAHABIAAABIADAAIAIACIABAAIABABIAEABQAsAJAfAAIABAAIAAAAgAjYERQAngBAogGIADgBIACAAIAFgBIgFABIgCAAIgDABQgoAGgnABIAAAAIAAAAQg8gBg5gQIgDgBIADABQA5AQA8ABIAAAAIAAAAgAFqCDQAMgBAPgKIABgBQAlgeAHg6QACgOAAgOIAAgLIAAALQAAAOgCAOQgHA6glAeIgBABQgPAKgMABIgBAAIAAAAQgPgBgJgRQgJgNAAgMQAAgMAIgMQARgTAAgOQAAgOgQgJQgWgPAAgTIAAgBQAEhQA4gBQAQAAAVAGQgVgGgQAAQg4ABgEBQIAAABQAAATAWAPQAQAJAAAOQAAAOgRATQgIAMAAAMQAAAMAJANQAJARAPABIAAAAIABAAgAmrBdQAlhcAAhcIAAgHIAAAHQAABcglBcgAkKiYQgDAGABAGIgVAQQAQAAAXAFQALAGAPAAQAqgFAfgSQgfgTglgBIgKAAQgSAAgTAEgAmNicIgDgBQgJgEgIAAIgBAAIAAAAQgIAAgHADIgCABIACgBQAHgDAIAAIAAAAIABAAQAIAAAJAEIADABgAkUilIABgBIACAAQAUgJAYAAIAAAAIABAAQARAAATAFIAAAAIABAAIgBAAIAAAAQgTgFgRAAIgBAAIAAAAQgYAAgUAJIgCAAIgBABgAklkbQgKAhAOAQQBPgJBFAAQACgIgNgRQglgRg8AAQgVAAgXACg");
	this.shape_9.setTransform(-114.6,14.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#323232").s().p("AhBFgIALADQAGAAAGgDQAEgFACgJQAAgJgCgFQAmAAAYAEQAlBBAqgeQAbgJB4hLIAPBdIhPApQg6AlhbAAQhagBgMhhgAgyDFIBEABQALAhgHAYIg4ABQgRgbABgggACKBSIjIgPIgOgYIgJAZIhYAMIgPACIgWAWQgJg1AHgpQABgEADgCIAKgEIBUgkQAUgDAVgFIDWA9QAgAjAHA4gAjMkIIgDAAQgOgbgBgLQAJgEAUAAQALAYgIASIgOAAgAgkkbIgKgHQgHgHgBgHQgCgHAEgGQAYgFAWABQAGAbgKARQgPAAgLgGgAj9mJQgKgXgCgVIAVgCIAKAsQgKAAgJACgAhQm/QBcgIAxAWQANARgCAIQhFAAhOAJQgOgQAJggg");
	this.shape_10.setTransform(-135.9,31.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ah8AcQAIgSgLgXIAOAAIAAAGQACARAAATIgNgBgAA7gcQAlABAgAUQggARgpAEQALgPgHgbgAgKADIAVgPQABAIAHAGIAKAGQgXgFgQAAg");
	this.shape_11.setTransform(-142.5,1.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(2,1,1).p("AHEFpQABhuA4j4QA3j4gJiDIABAAQAHAFABAAQAFACAGgBQgBgBAAgBQAAgEgBgDQgRhohHhRQjOj1p9BLQigA+gfBJQggBIAKAyQAFAZAaAhQAgApAHANQgWCnAEAvQACAQACANQADAXAEALQAAACADAHQACAIAFAPQAEAQAEAPQACALACAMQAAABAAACQAAABAAABQAAAIACAFQABACAAACQADAQADAUQAAADAAADQgPB0AnCKQgGAiAFApQABAJACALIATgWIADAAQAFAOAGAPQAAAAABABQAIAWAKAVIBhDKIAiBIQAYAZCWgLAhbLsQA8gbAygg");
	this.shape_12.setTransform(-97.8,0.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(1,1,1).p("AoXkQQAZgNAjABQAJAQgDAZQgRgBgnAPAmwimQgYgJghgBQgIAAgNABAmrjXQAJAWAFAXQAEAQACASQAMBmguCLQAfANAjACAkNk0QgDACgBAMQgCANALAYQASgCAVgBQABAAABAAQAtgDA7ACQAIAAAJAAQAAgSgEgIQgHgDgGgDQhHgdhPAOgAoIoDQARgEB7AkQDIhKEZAjQAnBWgwCFQBJBZAnC6QAYh3BugHQBVAOgHB6QAAA7gHArQAAACgBACQgHApgNAbQgTAjgeAHQhEASgihHQAAB9gWA6QhJB8iOBXQgBg7gaguQgSAbgTASQgYAYgYAKQhBAXgagzIhVgDQgBAUgcAKAhEigQgQgFgQgDQgKgCgLgCQgOgCgPgBQgOgCgPAAQgTgBgUABABloKQDTApDBg5QAOADARAJAFphEQgDgRgSgJQgRgJgRAFQgQAEgNAPQgMANgEASQgDALABAMQAAACABACQADAPAJAIQADACALAJQAKAIADAMQADALgEAOQgFANgDAEQgHAHgDAGQgHAQAJARQAIAQARAEQARADAQgKQAIgFAGgGQAGgHAEgIQAGgMADgQQACgRgDgWADMgcQAAABABACQABAFABAFAh+iOQALABAJACQAaAFAKAKQgFABgGABIgIACQgUACgVACIgBAAQAFgHABgLQAAgEgBgEgAiDh0IgGABQgGAAgHABQgBAAgBgBIghAAQgGgBgGAAQgbgDgagEQANgQAhgEQATgDAbABQASABAOACAjMiPQAAABAAABQAAANAHAMAk6B5IDDA1QAgAjAIA4IgrgbIjJgOIgNgYIgJAYIhnAPAndiXQAmAEALAOQgEABgFABIgIACQgRACgTACIAAAAQAEgHABgLQAAgEgBgEgAnhh9IgFABQgGAAgGABQgBAAgBgBQgBgCgBgDAnYCmQAAgDADgCQAQgHBOgiQAHAAAIAAQAVAAAXgEQAAgBABABQAQgEASgFAldEnQAEABADABQAiAIAbADQAMACALAAQAMABALgBAl/D3QAOAEAPAEQAGABAHABQAEABAEABQAZAEAbABQA0ACA3gKAk2FiQgCAfARAbIA6AAQAGgYgLghgAn5iUQAAgDAAgDQAQABAMAC");
	this.shape_13.setTransform(-95.9,15.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#323232","#DEB17F"],[0.004,1],-190.5,38.4,-188.7,58.4).s().p("AgIAAIAQgDIABAGIgJABIgIgEg");
	this.shape_14.setTransform(-41.3,-37.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#DEB17F","#323232"],[0.02,1],159.6,69.4,167.2,41.2).s().p("AG8IqQgXgagNgcQANgbAHgpIABgEQAHgrAAg8QAHh6hVgOQhuAHgYB3Qgni6hJhZQAwiEgnhWIAHABQBVAQBSAAIAAAAIAAAAQByAABrgfIAGgCIADAAQAOADARAJQgRgJgOgDIgDAAIgGACQhrAfhyAAIAAAAIAAAAQhSAAhVgQIgHgBQkZgjjIBKQh7gkgRAEQgHgNghgpQgZghgFgZQgLgyAghIQAghJCgg+QJ9hLDND1QBIBRARBoIgSADIAAAAQAJCEg3D3Qg4D4gCBuIgDAEIgFgFg");
	this.shape_15.setTransform(-97.9,-19);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#DEB17F").s().p("AAiGwQgSAagSATQgYAYgYAJQhBAYgag0IhVgDQgBAVgcAJIgFADIhhjKIgSgrIAAgCIgLgdIBngOIAJgZIANAYIDJAPIArAaQgIg4gggjIjDg1IguAAQAVgBAXgEIABAAIAigIIgiAIIgBAAQgXAEgVABIgPgBQgjgCgfgNQAkhtAAhXQAAgXgCgWQgCgRgEgQQgFgYgJgVQAJAVAFAYQAEAQACARQACAWAAAXQAABXgkBtQAfANAjACIheApQgDACAAAEQgniLAOhzIABgFIgGgkIACAFIACAAIAMgBIAFAAIAAAAIAkgFIAIgBIAJgDQgLgNgmgFQgMgCgQAAIAAAFIgBgEIgEgWIAVgCQAhACAYAJQgYgJghgCIgVACIgIgfIgHgXQAngQARACQADgZgJgQQgjgCgZANIgDgcQgFgvAXinQARgEB7AjQDIhJEZAiQAnBWgwCFQBJBaAnC5QAYh2BugHQBVAOgHB5QAAA7gHAsIgBADQgHAqgNAaQgTAjgeAIQhEARgihGQAAB8gWA6QhJB8iOBYQgCg7gagugAjpGaIA6gBQAGgYgLghIhEgBQgCAgARAbgAi8E0IAHAAIAIgBIgIABIgHAAIAAAAIAAAAIgEAAIgEAAIgXgCQgbgEgigIIgHgCIAHACQAiAIAbAEIAXACIAEAAIAEAAIAAAAIAAAAgAjKEGQAsAAAugJQguAJgsAAIgBAAIAAAAIgIAAIgBAAIgFAAIgCAAQgbgBgZgFIgIgBIgNgDIgdgIIAdAIIANADIAIABQAZAFAbABIACAAIAFAAIABAAIAIAAIAAAAIABAAgAF6CLQAMAAAMgHQAIgFAGgGQAGgHAEgIQAGgMADgRIAAgQIgBgXIABAXIAAAQQgDARgGAMQgEAIgGAHQgGAGgIAFQgMAHgMAAIAAAAIgBAAIgIgBQgRgDgIgRQgFgJAAgJQAAgHADgHQADgGAHgHQADgEAFgOQACgIAAgHIgBgKQgDgLgKgJIgOgKQgJgJgDgOIgBgFIAAgHQAAgIACgIQAEgRAMgOQANgOAQgFIABAAIALgCIAAAAIABAAQAKABAKAFIAAAAIAAAAIABAAQASAKADAQQgDgQgSgKIgBAAIAAAAIAAAAQgKgFgKgBIgBAAIAAAAIgLACIgBAAQgQAFgNAOQgMAOgEARQgCAIAAAIIAAAHIABAFQADAOAJAJIAOAKQAKAJADALIABAKQAAAHgCAIQgFAOgDAEQgHAHgDAGQgDAHAAAHQAAAJAFAJQAIARARADIAIABIABAAIAAAAgAELgbIACAKIgCgKIgBgEIABAEgAiOiRQghAEgNAPIA1AIIAMAAIAhABIACAAIANgBIAGAAIABAAIApgFIAIgBIALgDQgKgKgagFIgUgDQgOgCgSAAIgNAAQgTAAgOACgAh1i0QAPAAAOACIAdAEIAVADQAQAEAQAFQgQgFgQgEIgVgDIgdgEQgOgCgPAAIgGAAIgHAAIAAAAIAAAAIgNAAIgNABIANgBIANAAIAAAAIAAAAIAHAAIAGAAgAjPk3QgDACgBANQgCAMALAZIAngDIACAAQAtgDA7ABIARABQAAgSgEgJIgNgFQgwgUg0AAQgZAAgZAEgAk5B1IAAAAg");
	this.shape_16.setTransform(-102.1,15.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#323232").s().p("AgTG5IgjhHIAFgDQAcgJABgVIBUADQAaA0BBgYQAYgJAYgYQATgTASgaQAaAuACA7Qg0Afg8AbIgDACQgtADgiAAQhNAAgQgRgAgqDRIBDABQALAhgGAYIg5ABQgRgbACgggACRBeIjIgPIgNgYIgJAZIhnAOIgEABIgTAVIgDgUQgEgpAGghQAAgEADgCIBegoIAPABIAuAAIDCA0QAgAjAIA4gABzkDIghgBIgMAAQgHgMAAgOIAAgBQATgDAbABQASAAAOACIABAJQgBAKgFAIIgGAAIgNABIgCAAgAjokMIgCgFIgBgEQgCgGAAgHIAAgDIAAgFQAQAAAMACIABAJQgBAKgEAIIgFAAIgMABIgCAAgAkEl/QgEgKgDgYQAZgNAjACQAJAQgDAZQgRgCgnAQIgDgKgAgFm2QABgNADgCQBOgOBHAeIANAFQAEAJAAASIgRgBQg7gBgtADIgCAAIgnADQgKgZACgMg");
	this.shape_17.setTransform(-122.7,29.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("ACRASQAFgIAAgKIAAgIIAUADQAaAFAKAJIgMADIgIABIgoAFgAAaAKQANgOAhgEIAAABQAAANAGAMIg0gIgAjMAJQAEgIAAgJIAAgJQAlAFAMAMIgJADIgIABIgkAFg");
	this.shape_18.setTransform(-123.5,2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(2,1,1).p("AF6FKQBpApAciPQAEgWADgaQAOiFg+ghQA/i+ABjUQAIABAFAGQAAgEAAgDQAAiniohgQmFjMmYC/QidBEAkCSQAKArAbAyQgHC3ALA/QACAKACAHIAIAWIAfBSQABAEAAAEQAFA5gGAtQgIBZAvB9QAEALAEAKQAEAJADAHAmRF0QAAAKACAIQAEAYAAAKQACgGAEgJQABgCACgDQAAACABACQAGANAHAOIBxD0IANAbQAbA1BjgCQBlACAZgTQAkgUAjgWAmCGUIAAAAQABgDABgCQACgEABgC");
	this.shape_19.setTransform(-92.8,0.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(1,1,1).p("AnRnrQAuAZBLAKQERg/EVBAQAJABAJABQCCAMBpgrQA0giAaAGAnvjqQAQgNAMgLQAmgHApgCIAJAtQgkADgdACQgYAJgPAMAnRnrQgVACgNAIAnRnrQg3gfgQg0AiykcQgNAOAGAkQBqgPBTAdIgDgWQhGg7htARgADOnHQgEgBgDAAQABACABACQA4BggoBMQAvBnAZCeQAchLBDgSQAdgIAlADQANADAKAGAHUgcQgcgSgXgCQgHAAgHACQgHACgGADQgOAIgEAMQgGATAOAXQAKASABACQAGAMABAKQABAQgNAdQgJAbALAIQADADAFABQAEACAGAAQAZABAVgQQAUgPAEgXAkAIrQAYAHASgIQARgIgFgXIBBAAQApA2BEgPQA1gXAmhSQATA4gCA+QB7hOBkhjQBDg+ALiCQABgLABgLAkSCFQADABAEAAQAeAEAhgBQACgBABAAQADAAADAAQADAAAEgBQANAAAMgBAk6EZQAXAIAaADQAEAAAFABQADAAACAAQAIAAAJAAQABAAAAAAQAfAAAkgBQAxgCA1gHAkEFNQANAEANACQAWADAVgBQANgBAOgDQAHgCAHgCAl6EOQASAAATAAQANAAAOAAQAXgBAXgDQANgBAOgCQAFgGADgKQABgHAAgJQAEAVAPALQB8ADBQALQAMAIANANQAMANAPAKQAAhDgMgYQiJg7hfgjAiwhpQAxAaB8gdAlOjZQAUA2AGA4QAKBqguBxQAgAPAmAGQgyAOhJA7QAAADAAACQgCAUABAQQAAAAAAABQAAAAAAAAAnMhtQADABACACQACAAACABQBBAMA4gMAjuGIIBPgCQANAfgIAfQgQAEgSAAQgTABgVgDQADgdgNghg");
	this.shape_20.setTransform(-93.1,12.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#323232","#DEB17F"],[0.004,1],-160.9,-36.8,-166.6,-4.5).s().p("AiYgNQAohMg3hhIAFgDIASACQCCANBogrQA0giAaAGQgBDUg/C+QgLgGgMgCQglgDgdAIQhCARgcBMQgZifgwhlg");
	this.shape_21.setTransform(-56.2,-14.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#323232","#DEB17F"],[0.004,1],-139,55.4,-137.2,75.4).s().p("ADdDUIgSgCQkVg/kRA/QhLgKgugaQg3gegQg0QgkiRCdhEQGYi/GFDMQCoBgAACmIgNAAQgagGg0AiQhRAhhhAAQgcAAgdgDgAobBcQAQA0A3AeQgVADgNAIQgbgygKgrgAobBcIAAAAg");
	this.shape_22.setTransform(-92.8,-54.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#DEB17F").s().p("AA1GfQgnBTg1AXQhEAPgpg2IhAAAQAEAXgRAIQgRAIgYgHIhxj0IgNgbIgCgDIAAgBIACgFIADgGIAmABIAagBIAvgDIAagDQAGgGADgKIABgQQADAVAPALQB9ADBQAKQANAJAMANQAMANAPAJQAAhCgMgYQiJg7hfgjIAGgBIAHAAIAZgCIgZACIgHAAIgGABIgDABQgiABgegEIgHgBQglgGghgPQAmhdAAhYQAAgTgCgUQgFg4gVg2QAVA2AFA4QACAUAAATQAABYgmBdQAhAPAlAGQgxANhKA8IAAAFQgBAUABAQIAAABIgHgRIgIgUQgwh+AJhYQAGgtgFg5QAgAGAeAAQAfAAAcgGQgcAGgfAAQgeAAgggGIgBgIIgfhTQAOgMAYgKIBBgEIgJgtQgpABgmAIIgbAXQgLg+AHi4QAMgIAVgCQAvAZBKAKQESg/EVBAIgIgBIADADQA3BhgoBMQAvBmAaCfQAchLBDgSQAdgIAlADQAMADAKAFQA+AhgOCFQgCAZgEAWQgcCPhpgpIABgWIgBAWQgLCChEA+QhjBjh8BNQADg9gTg5gAj4FfQAMAhgCAdQAVADASgBQATAAAPgEQAIgggMgegAjYEsIAGAAIAEAAIACAAIACgBQAOgBANgCIAPgEIgPAEQgNACgOABIgCABIgCAAIgEAAIgGAAIAAAAIAAAAQgNAAgNgCIgCAAQgOgCgNgEQANAEAOACIACAAQANACANAAIAAAAIAAAAgAjzD8IBDgBQAwgCA2gHQg2AHgwACIhDABIgBAAIgRAAIgFAAIgJgBQgagDgXgIQAXAIAaADIAJABIAFAAIARAAIABAAIAAAAgAGPBsQAUgBARgLIACgBIABAAIABgBIABgBIAAAAQAUgQAEgWQgEAWgUAQIAAAAIgBABIgBABIgBAAIgCABQgRALgUABIAAAAIAAAAIgDAAQgGgBgFgBQgEgCgDgDQgHgEAAgLQAAgIAEgMQANgbAAgPIAAgDQgBgJgGgMIgLgTQgKgRAAgOQAAgHACgFQAEgMANgIQAHgDAGgCQAHgCAHAAQAYACAbASQgbgSgYgCQgHAAgHACQgGACgHADQgNAIgEAMQgCAFAAAHQAAAOAKARIALATQAGAMABAJIAAADQAAAPgNAbQgEAMAAAIQAAALAHAEQADADAEACQAFABAGABIADAAIAAAAIAAAAgAh6iGQApAAA7gOIABAAIABAAIABAAIACgBIABAAIABAAIACgBIgCABIgBAAIgBAAIgCABIgBAAIgBAAIgBAAQg7AOgpAAIgBAAIgBAAQglAAgWgLIgBgBIgCAAIACAAIABABQAWALAlAAIABAAIABAAgAgFkFIgDgXQhHg6htARQgNAOAGAjQAjgEAhAAQBCAAA4ATgAnNiSIAAAAg");
	this.shape_23.setTransform(-92.1,16.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#323232").s().p("ABaHNQhiACgbg1IgNgbQAYAHASgIQAQgIgFgXIBBAAQApA2BEgQQA2gWAmhTQATA5gCA9QgjAWgkAUQgYARhVAAIgSAAgAgUEaQADgdgNghIBOgDQANAfgIAfQgQAEgSABIgKAAQgNAAgQgCgADgB+QgNgOgNgIQhQgKh7gEQgPgKgEgVIgBAQQgDAKgFAFIgbAEIguADIgbABIglgBIgDAGIgCAFIAAAAIgDAFIgGAPQAAgKgEgYQgCgIAAgKIAAgBIAAgBQgBgPACgVIAAgEQBJg7AygNIAHABQAeAEAggCIADAAQBfAjCKA5QAMAYAABDQgPgJgMgNgAkbmGIgEgRIAcgYQAmgHApgBIAJAsIhBAFQgYAJgPANgAAWmXQgGgjANgPQBtgQBHA6IADAXQhUgdhqAOg");
	this.shape_24.setTransform(-113.9,29.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(2,1,1).p("AF7FKQgMCChDA+QhkBjh7BNQgjAWgkAUQgZAThlgCQhjACgbg1IgNgbIhxj0QgJgSgIgSQgCAEgEAGQgEAJgCAGQgBgKgFgYQgEgVADgNIAAgBQg4iLAJhgQAGgtgFg5QAAgEgBgEIgfhSIgIgWQgCgHgCgKQgLg/AHi3QgbgygKgrQgkiSCdhEQGYi/GFDMQCoBgAACnQAAADAAAEAF7FKQBoApAciPQAEgWADgaQAGg6gIgmQgLgzgjgTIAAAAQA/jFABjNAF7FKQABgLAAgM");
	this.shape_25.setTransform(-86,0.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(1,1,1).p("AmanrQhFgHgaARAmanrQhVgigwgxAn1jqQAQgNALgLQAngHAogCIAKAtQgkADgdACQgZAJgOAMAiQkSQgNAOAGAkQBqgPBTAdIgDgWQhGg7htARgADtnDQgHAAgIAAQjgg/joBGQhngShJgdADtnDQAhBqggBFQBBBNAMCpQAAAGAAAFQABgGABgFQAOhgCIASADtnDQCcABA8giQA0giAaAGQAIACAFAFAHOgcQgcgSgXgCQgPAAgMAHQgOAIgEAMQgBACAAADQgDAQAMAVQAKASABACQAGAMABAKQABAQgNAdQgJAbALAIQADADAFABQAEACAGAAQAZABAVgQQAUgPAEgXAkGIrQAIADAJAAQANABAMgFQAQgIAIgXIBFAAQAZA2BEgPQBHgXAchSQALA4gCA+AlUjZQAUAzAIA1QARBrgeBwQAhAPAeAHQAjAIAhgBQAMAAANgBAmbDoQBHgxAvgfQARgMAOgJAj/FNQAeAIAcAAQAdAAAcgIAk8EZQAeAKAiACQAEAAAEAAQAnAAAxgBQAxgCA1gHAmIETQACgEAAgBIAAgBQAlACAlgBQApgCApgFQAMgJAAgXQADAVAPALQBXACBBAGQAcADAYADQANAIANANQAMANAPAKQAAhDgMgYQgJgEgJgEQh/g2haghAiehxQBoAmBUgvAnShtQACABADACQACAAACABQA8AdBDgiAjbGIIBPgCQAQAfgDAfQgeAIgrgGQgCgdgRghg");
	this.shape_26.setTransform(-85.7,12.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#323232","#DEB17F"],[0.004,1],-144.6,12.9,-145.7,32.9).s().p("AE+GpQgMiphBhNQAghFghhqIAJAAIAAAAIAAAAQCQAAA8geIAAAAIAAAAIACgBIABgBIADgBIACgCIAAAAIACgBIAAAAQAjgWAXgCIAAAAIACgBIADAAIAAAAIAIABQgBDMg/DHQiIgSgOBggAmXgjQhVgigvgxQAvAxBVAiQhEgHgbARQgbgygKgrQgkiSCdhEQGYi/GFDMQCoBgAACnIgNAAIgIgBIAAAAIgDAAIgCABIAAAAQgXACgjAWIAAAAIgCABIAAAAIgCACIgDABIgBABIgCABIAAAAIAAAAQg8AeiQAAIAAAAIAAAAIgJAAIgPAAQjhg+jnBFQhngRhJgdgADwAEIAAAAg");
	this.shape_27.setTransform(-86,-33.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#DEB17F").s().p("AA9GgQgcBThIAWQhEAQgZg2IhEAAQgIAXgRAIQgLAFgOgBQgIgBgIgCIhxj0IgSgkIADgGIAAAAQAlABAlgBQApgBApgGQALgJABgWQADAVAPAKQBWADBBAGIA2AFQAMAIANAOQAMANAPAJQAAhDgMgYIgTgIQh/g2hZggQAMAAANgCQgNACgMAAQgiAAgigIQgfgHgggOQAThHAAhFQAAgogGgnQgJg1gUg0QAUA0AJA1QAGAnAAAoQAABFgTBHQAgAOAfAHIgBAEIgeAVIh2BPQg5iLAKhfQAGgtgFg5IABAAQAbANAcAAIABAAIAAAAQAhAAAkgSIABAAIgBAAQgkASghAAIAAAAIgBAAQgcAAgbgNIgBAAIgBgIIgfhTQAOgNAYgJIBBgFIgJgsQgpABgmAHIgbAYQgLg/AHi3QAagRBEAGQBKAeBmASQDphGDgA+IAOABQAiBpghBFQBBBNAMCqIABALIABgLQAPhhCHASIABAAQAjATAKAzQAIAmgGA5QgCAagEAWQgcCPhpgpIACgXIgCAXQgLCChDA+QhkBjh8BNQADg9gLg5gAjfFgQARAhACAdQAqAFAfgIQADgfgQgfgAjJEtQAdAAAcgIQgcAIgdAAQgdAAgdgIQAdAIAdAAIAAAAgAigD7QAwgBA2gHQg2AHgwABIhEACIgUgBIgIAAQgigCgegJQAeAJAiACIAIAAIAUABIBEgCgAGPBsQATAAASgKIAAgBIAAAAIACgBIABgBIABAAIAAAAIABgBQAUgQAEgWQgEAWgUAQIgBABIAAAAIgBAAIgBABIgCABIAAAAIAAABQgSAKgTAAIAAAAIAAAAIgDAAQgGAAgFgBQgEgCgDgDQgHgEAAgLQAAgIAEgMQANgbAAgQIAAgCQgBgJgGgMIgLgTQgKgRAAgPIAAgGIACgGQAEgMANgHQANgHAOAAQAYACAbASQgbgSgYgCQgOAAgNAHQgNAHgEAMIgCAGIAAAGQAAAPAKARIALATQAGAMABAJIAAACQAAAQgNAbQgEAMAAAIQAAALAHAEQADADAEACQAFABAGAAIADAAIAAAAIAAAAgAhJiIQA0AAAtgaIACgBIgCABQgtAag0AAIAAAAIAAAAQgrAAgugSQAuASArAAIAAAAIAAAAgAAij6IgDgXQhGg6htAQQgNAPAGAjQAjgEAhAAQBCAAA3ATg");
	this.shape_28.setTransform(-85.3,16.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#323232").s().p("ABaHIQhiACgbg1IgNgbQAJACAIABQAOABALgFQAQgIAHgXIBFAAQAZA2BEgQQBIgWAchTQALA5gCA9QgjAWgkAUQgYARhVAAIgSAAgAANEVQgBgdgRghIBOgDQARAfgEAfQgSAFgWAAQgQAAgRgCgADwB5QgNgOgNgIIg1gFQhBgGhWgDQgOgKgEgVQAAAWgLAJQgqAGgpABQglABgkgBIAAAAIgDAGIgGAKQgEAJgCAGIgGgiQgEgVADgNIAAgBIB2hOIAfgVIABgEQAiAIAgAAQBaAgCAA1IASAIQAMAYAABDQgPgJgMgNgAkbmLIgEgRIAcgYQAmgHApgBIAJAsIhBAFQgYAJgPANgAA+mSQgGgjANgPQBtgQBHA6IADAXQhUgdhqAOg");
	this.shape_29.setTransform(-107.1,30.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(2,1,1).p("AlyGnQAuBmAoBPQAbA4AXAsQAQAlAVAMQBdASBrgSQAPgKAQgKQAlgZAmgdQBQg7BUhMQBMhBAMiKQBHA1Adi2QAOhagPgsQCTmEhGhPQAAAAABAAIAAAAQAGABAFAGQAAgCABgDQA0kRlHhKQlKhLkICHQkNCKAiC1QAcgVAhgFQgRDrAOAzQATA1ASAzQABAFAAADQAEA5gHAtQgFBiBYC+QACAGAEAG");
	this.shape_30.setTransform(-75.7,0.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(1,1,1).p("AlolLQANAMAAAlQhegFhFAlQAAgLABgLQA1hBBgAGgADZncQgJgBgGAAQjkg/jkBHQhlgThIgdQgugTgpAHADVnmQABACABADQAAACACADQAeBpghBFQBCBOAhDAQAOhnBQAZQAWAKAKAfAgxloQgOAOAGAkQBogPBWAeQgCgMgCgLQhGg6hsAQgADZncQCdgBA+ggQA1giAaAFAGbgXQgQgVgRgEQgJgCgJAFQgLAFgDAMQgFAPAIAaQAEASABACQADANAAAJQgBANgLAdQgIAYAHAKQADAEAIADQAQAEAQgNQAOgMAFgVAFTDAQAAAAAAgBQABgFAAgFAhBiLQBkAnBZgwAiYC/QAFARAMAJQBvACBIAMQANAHAMAPQALALAPALQgEhDgMgYQgHgDgHgDQiGg3hbgiQgBAAgBgBQheAjiJA9QgJAXAEA/QAAABACADIAAABQgCgDAAgCAkxHHQgCgOAAgMQAfBVA2AWQAsAPANg2QAgABAhAAQARA0A/gOQBJgYAthSQgFAzgFAyAikBWQADABADABAikBWQASgCAVgDAm4iDQA8AeBCgjAiYC/QgDARgLAJQhvADhIALQgMAHgKAPQgJAMgMAJAiZC6QAAADABACAjOE0QA5APA5gPAkLEAQAhAKAnABQAmABAygCQAvgCA2gGAklkAQA0CfgyClQA5AXBGgFAjEFuQApABArAAQAAAdABAeQglABgkACQgIgggEgfg");
	this.shape_31.setTransform(-73.6,15);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#323232","#DEB17F"],[0.004,1],-141.4,-18.8,-147.1,13.5).s().p("ADrCoQAihFgfhoQCeAAA9ghIABAAIADgCIACgBIAAgBIABAAIACgBIAAgBQAmgWAXgBIACAAIAAAAIAIABIgIgBIAAAAIgCAAQgXABgmAWIAAABIgCABIgBAAIAAABIgCABIgDACIgBAAQg9AhieAAIgCgFIgBgFIABAFIgNAFQjjg/jlBFQhlgRhHgdQgvgTgpAGQghAFgcAVQgii1ENiKQEIiHFKBLQFHBKg0ERIgMgCIAAAAIgBAAQBGBOiTGFQgKgegWgLQhQgYgOBnQggjAhDhPg");
	this.shape_32.setTransform(-75.7,-32.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#DEB17F").s().p("Ai3IVQg1gXgghUQAAAMACAOQgohPguhmIAAAAQALgKAKgMQAKgOALgHQBIgLBwgDQALgJADgRQAEARANAJQBuACBJAMQAMAHANAOQALAMAPALQgEhEgNgYIgNgFQiGg3hcgiIgCgBIgGgCIAogGIgoAGIgCAAIgBAAIgVAAIAAAAIgBAAQg1AAgvgSIAAAAIgCAAQAZhRAAhPQAAhUgbhRQAbBRAABUQAABPgZBRIACAAIAAAAQAvASA1AAIABAAIAAAAIAVAAIABAAIACAAIAGACQhdAjiKA9QgJAXAFA/IgGgMQhYi+AFhhQAHgtgEg5QAAgDgBgFQgSg0gTg1QgOgzARjrQApgGAvATQBHAdBlASQDkhGDkA/IAPAAQAfBpgiBFQBDBPAgDAQAOhnBQAYQAWALAKAeQAPAsgOBZQgdC2hHg1IAAgBIABgKIgBAKIAAABQgMCKhMBBQhUBMhQA7IAKhlQgtBThJAYQg+AOgRg1IhCAAQgKAqgdAAQgIAAgKgDgAiQGpQAjgCAlAAIAAg8IhVAAQAFAeAIAggAg0EwQgdAIgcAAQgdAAgdgIQAdAIAdAAQAcAAAdgIgAhEEHQAwgCA0gHQg0AHgwACIhEABIgUAAQgmgCghgKQAhAKAmACIAUAAIBEgBgAGUCHQALAAAMgJQANgNAGgUQgGAUgNANQgMAJgLAAIgCAAIAAAAIgHgBQgJgCgCgFQgEgFAAgHQAAgJAFgNQALgcABgNIgDgWQgCgCgEgSQgFgPAAgMQAAgJADgGQADgMALgEQAGgEAGAAIABAAIAAAAIABAAIACAAIABAAIABAAQAQAFARAUQgRgUgQgFIgBAAIgBAAIgCAAIgBAAIAAAAIgBAAQgGAAgGAEQgLAEgDAMQgDAGAAAJQAAAMAFAPQAEASACACIADAWQgBANgLAcQgFANAAAJQAAAHAEAFQACAFAJACIAHABIAAAAIACAAgAlYh5QAgAAAhgQIAEgCIgEACQghAQggAAIAAAAIAAAAQgcAAgbgNIgCAAIACAAQAbANAcAAIAAAAIAAAAgAA+h9QA0AAAwgaIABAAIgBAAQgwAag0AAIAAAAIAAAAQgqAAgrgRIgCgBIACABQArARAqAAIAAAAIAAAAgAnWkTQgBALABALQBEglBeAEQAAglgMgLIgRgBQhVAAgwA8gACskrIgDgXQhHg6hrAQQgOAPAGAkQAigGAiAAQBAAAA5AUgAh3BVIAAAAgAh9BTIAAAAg");
	this.shape_33.setTransform(-77.5,15.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#323232").s().p("AgdHgQgWgMgPglQgXgsgbg4QgCgOAAgMQAfBUA2AXQArAOANg1IBBAAQARA1A/gOQBKgYAthTIgKBlQgnAdglAZIgeAUQg2AJgzAAQgyAAgtgJgAgHDyIBTAAIABA8QglAAgkACQgHgggEgegAEGCAQgMgOgNgHQhJgMhvgCQgMgJgFgRIgBgFIABAFQgDARgLAJQhuADhIALQgMAHgKAOQgJAMgMAKIgCgEQgEg/AJgXQCJg8BdgjIACABQBbAiCHA2IAOAFQAMAYAEBEQgPgLgLgMgAAkBDIAAAAgAlAmMQA1hCBgAHQANALAAAlQhegEhFAlQAAgLABgLgACDmyQgGgkAOgPQBtgQBGA6IAEAXQhWgehpAQg");
	this.shape_34.setTransform(-92.5,27.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(2,1,1).p("AlFFjQh7gPgdilQgWhxBNgUIg8lbIgeAOQgjjdCiiCQBuhaCWgRQC5gYC6AaQDdAfAsDUQAMA4gFA5QgqDTgeDeQBGAqgKBbQgRCshkAIQgEARgEASQgVBOgjBBAFFIWQgdAsghAnQgMARgqA0Qg0A/glANIh4gBQg5gGhMhUQgggcgdgmQhJheg5icIAAAA");
	this.shape_35.setTransform(-76.7,0.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(1,1,1).p("AnEnQQAigUAigPQAAAAABAAQCxhOC4AyQDqg5CyBbIAEGQIAEA6IABAPQgBApgEAqQAJAGAGAFQAgAQgrAlQgDADgIACQgGAvgJAtAkTjBQAEABABgBIABgBQA9gyBQACQAEAAACAEAh4lGIgQg1QhtgEhDBLIAAAXQA9gWA/gLQACAAABAAQAggFAhgDgAjli6QgOAGgLAIQgLAIgHAKQAbAFAcAAQgMgNAAgRQgBgEABgDgAjZiVQAHgBAIAAQABAAACAAQACgBADAAQABAAABAAQABAAACAAQAEgBAFAAQAEgBAEgBQACgBABABQABgBABAAQACAAABAAQgCAAgCABQgCAAgBABAipiaQgBAAgBABIgBAAQgEABgEAAAiajPQgKABgMADQgfAGgWALAiSigQAbgHAcgNQgKgYgegDQgKgBgNABQALAMABAQQAAAKgEAJgAikibQAJgCAJgDAnEnQIgwAcAhrlDQAjACAVAoQAVAnAAArQABB7gVBwQAFAPBNAlIjpBSIAEBpIAlg8IC8gQIAMgaIAQAaICsgEIA7A8IgWhaQgLgFgMgEQhUgjhQgXQgCgBgCAAQAAAAgBAAQgTgGgTgEIgDABACdmHIgBA1QBZgMBbAYIgDgUQhBg5hvAMgAEsjFQgMgKgMgGQg5gfg+AGQgGABgIABAC3jMQgIANACAQQACAKAGAJQgcgFgdgLQAGghAxABQAKAAAMACQAeADAYAIADKiZQACAAADABQABgBABABIABAAQAFAAADAAQgEgBgEAAQgCgBgBABQABAAABABADPiZQgBAAgBAAQgBgBgCABQgJgCgIgBAD9iYQgHAAgGAAQgCAAgBAAQgDAAgCAAQAAAAgCAAQgCAAgCAAQgDAAgFAAAD9iYQAKgPgDgRQAAgDgBgEQANAFALAGQANAIAKAJQgaAIgbADgAH1oKIhvAdAGSgmQgCABgCACAHGACQgFgSgJgHQgEgEgDgDQgSgOgLAFQgBAAgBABIgDASAGshYQAAgDgigCAGKA/QgDAjgEAiABUBMQgBgCgDgBIAAAAQgIgGgVgFQgEgBgFgBAgQEcQBCASA0gXAh7DsQA2AEAxABQBBAAA5gGQA3gGAwgNAD1HmIAJhCQhOBhg3AOQglAMgZgrIhGAAQgCApgbAHQhDAQhJiDIAdBrAAAF1IAPAmIA3ACIAIgqgAm3hYQAMgEAQgBIAAAAQAWCkAvCZAmSA/QgFAGgFAFQgfAQAuAlQADADAEACAnTgFQAIgLAIgHQAbgbAPAPAlWDgIAAAAQAAAAgBAAAmbhdIgplz");
	this.shape_36.setTransform(-74.9,13.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#C2894C").s().p("AhuHoQgRgRgIgJIgEADQhJheg5icIAAAAIAAAAQgviZgWikIgqlzQAjgUAigPIACAEQADgEAEABQgUB1AQB1IAHAwQAqDsA0DkQASBOAPAqQAXBBAjArIAPAUQAJAMADAKgABYE8IgQgDQgEgCgDgEIgJgJIgGgEQgCgCAAgEIAAgHIAAgFQABgBAAgBQAAAAABgBQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIABACQBDASA0gXIAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABAAAAgBQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAABQACABgBAFIgBAHIgCAJQgCAIgDAEIgHAGIgGAEQgEACgHAAQggADgRAAIgOgBgACiAhQgIgDgHgFIgGgEQgEgCgEACIgEADQgCABgDgCQgCgDAAgDQABgGAGgEIALgGQAHgDAEgEIAGgFQAFgCAGAEIAGAIQAGAJADAJQACAHAAAFQAAADgCACQgCABgFAAQgHAAgHgCgAjQjKQgBgCACgEQAKgQAJgLQAIgJAGgFIAcgOQAIgEAMgDIAVgFQALgCAVAAIAKABQANADAIAMQAFAHgDAEQgCAEgHgBQgDgEgDgBQhQgBg+AyIAAABQgBABgEgBIgBABIgDABIgCgCgAF0jOQgLgKgMgGQg5gfg+AGIgPABIAPgBIgCABQgEAEgCABQgGABgBgFIAAgBIADgFQAegZAqAAIAOABQALACATAPIALAKIASAXQAEAEAFACQAIADAAADQABADgDACQgCACgEAAIAAAAgAFtjQIgJgGIgHgIQAMAGALAKQgDAAgEgCgADmj3gAgzj4QgEgCAAgCQADABADAEIgCgBg");
	this.shape_37.setTransform(-82.2,14.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#323232","#DEB17F"],[0.004,1],-151.3,37.1,-149.6,57.1).s().p("AGbGNIgEmPIBvgdIhvAdQixhbjrA5Qi3gyiyBNIAAABQgjAOgiAUIAqFzIAAAAQgQABgNAEIg8lcIAvgcIgvAcIgeAOQgjjcCiiCQBuhaCWgRQC5gYC6AaQDdAfAsDUQAMA4gFA5QgqDSgeDfQgBgDgigCg");
	this.shape_38.setTransform(-76.7,-35.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#DEB17F").s().p("AivGxIAeBrQgggcgdglIAEgEQAIAJARARIAXAVQgDgKgJgMIgPgUQgjgrgXhBQgPgqgShOQg0jkgqjsIgHgwQgQh1AUh1QgEgBgDAEIgCgEIAAAAQCxhOC4AyQDrg5CxBbIAEGQIAEA6IgEg6QAiACABADQBGAqgKBaQgRCshkAIQAJgtAGgvQAIgCAEgDQAYgVAAgPQAAgKgNgHIgPgLQADgqABgpQgBApgDAqQgDAjgFAiQgGAvgJAtIgIAjQgVBOgjBCQAjhCAVhOIgNAyQgQBAgbAeIAAAAQgdAsghAnIAJhCQhOBhg4AOQglAMgZgrIhGAAQgBApgbAHQgIACgHAAQg9AAhBh1gAAFF1IAQAmIA2ACIAIgqgAgPEZQAAAAgBABQAAAAgBAAQAAABAAAAQgBABAAABIAAAFIAAAHQAAAEACACIAGAEIAJAJQACAEAEACIAQADIAOABQARAAAggDQAHAAAEgCIAGgEIAHgGQADgEACgIIACgJIABgHQABgFgCgBQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAQgBABAAAAIAAABQg0AXhCgSIgBgCIgDgBIgBAAgAAmBYIjqBSIAFBpIAkg8IC8gQIAMgaIAQAaICtgEIA7A8IgWhaIgXgJQhVgjhQgXIgEgBIAAAAIgmgKgAgFDxQA4AAAzgFIAFgBQA4gGAvgNQgvANg4AGIgFABQgzAFg4AAIgBAAIAAAAIgEAAIgFAAQgxgBg2gEQA2AEAxABIAFAAIAEAAIAAAAIABAAgAgtAkQAFAPBOAlQhOglgFgPQAUhpAAhzIAAgPQAAgrgVgnQgUgogjgCQAjACAUAoQAVAnAAArIAAAPQAABzgUBpIAAAAgAA5A+QAUAEAJAHIAAAAIAEADIgEgDIAAAAQgJgHgUgEIgKgCIAKACgABKAeIAGAEQAHAFAHADQAIACAHAAQAFAAACgBQACgCAAgDQAAgFgCgHQgDgJgGgKIgGgHQgGgEgFACIgGAEQgEAEgHAEIgLAGQgGAEgBAGQAAADACADQADACACgBIAEgDIAEgBIAEABgAG2geIAIAHQAIAHAFASQgFgSgIgHIgIgHIgCgBIgBgBQgLgIgIAAIgBAAIAAAAIgFABIAAAAIgDABIADgBIAAAAIAFgBIAAAAIABAAQAIAAALAIIABABIACABIAAAAgAGTgjIABAPIADgSIgEADgAiUjPQgLABgLADQgfAGgXALQgOAGgLAIQgKAIgIAKQAcAFAcAAIAOgBIADAAIAFgBIACAAIAEAAIAIgBIAJgBIAAAAIADgBIAFgBIARgFQAbgHAcgNQgKgYgegDIgIgBIgOABgADziYIACAAIAOAAQAbgDAZgIQgKgJgNgIQgLgGgNgFQgXgIgfgDQgMgCgKAAQgxgBgGAhQAdALAcAFIASADIAEABIADAAIAAAAIAIAAIAJAAIAEAAIACAAIACAAIADAAgAiskKIgVAFQgMADgIAEIgcAOQgGAFgIAJQgJALgKAQQgCAEABACQACADADgCIAAgBQAEABACgBIAAgBQA+gyBQACQAAABAEACIACABQAHABACgEQADgEgFgHQgIgMgNgDIgKgBQgVAAgLACgAEZjVIAIAIIAJAGQAEACADAAQAEAAACgCQADgCgBgDQAAgDgIgDQgFgCgEgEIgSgXIgLgKQgTgPgLgCIgOgBQgqAAgeAZIgDAGIAAAAQABAFAGgBQACgBAEgEIACgBIATgBQA0AAAvAagAkzk0IABAXQA8gWA/gLIAEAAQAfgFAhgDIgPg1IgKAAQhnAAhABHgAFVlGIgCgUQhBg5hwAMIgBA1QAdgEAdAAQA9AAA9AQgAlRDgQh7gPgdilQgWhwBNgUQANgEAQgBIAAAAQAWCkAuCZIAAAAgAmIB/IAHAFIgHgFQgbgWAAgPQAAgKAMgGIALgLIgLALQgMAGAAAKQAAAPAbAWgAm+gXQgHAHgJALQAJgLAHgHIACgCIAAAAIACgCQAPgNAKAAIABAAIAAAAQAGAAAGAFIAAAAIAAAAIAAAAIAAAAQgGgFgGAAIAAAAIgBAAQgKAAgPANIgCACIAAAAIgCACgAF5DgIAAAAgAGICEIAAAAgAGQA/IAPALQANAHAAAKQAAAPgYAVQgEADgIACQAFgiADgjg");
	this.shape_39.setTransform(-75.5,13.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#323232").s().p("AgcIAQg5gGhNhUIgehrQBKCDBDgQQAbgHACgpIBGAAQAZArAlgMQA3gOBOhhIgJBCQgMARgqA0Qg0A/glANgAAEElIgPgmIBOgCIgJAqgAjUA0IDphRIADgBIAmAKIAAAAIAFABQBPAWBVAjIAXAJIAWBaIg7g8IitAEIgPgaIgNAaIi8AQIgkA8gAjwkpIAAgHQAWgLAfgGQAMgDAKgBQAKAMABAQQABAKgEAJIgSAFIgDAAIgCABIgDAAIgJACIgIABIgDAAIgCAAIgGABIgCAAIgPABQgMgNAAgRgADdkOIgCAAIgEAAIgJAAIgHgBQgBgBAAAAQgBAAAAAAQAAAAAAABQgBAAAAAAIgDAAIgCAAIgRgDQgHgJgBgKQgCgQAIgNQAJAAAMACQAfADAXAIIABAHQAEARgKAPIgNAAIgDAAIgFAAgAlEmqQBDhLBuAEIAQA1QghACggAGIgEAAQg+ALg9AWgACRnIIABg1QBvgMBBA5IADAUQhbgYhZAMg");
	this.shape_40.setTransform(-73.8,25.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AkgAYQAHgJALgIQALgHAOgHIAAAHQAAAQAMANIgFAAQgZAAgZgFgADzgEIgBgHQAOAEAKAGQAOAHAJAKQgZAIgbACQAKgOgEgQgABvAHQAHggAxABQgIAMACAPQABALAHAIQgcgFgegKgAifAAQgBgQgKgLQAMgCALABQAeADAJAYQgbAMgbAIQAEgJgBgKg");
	this.shape_41.setTransform(-73.3,-4.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(2,1,1).p("Am4AqIg+lTIgjAZQAKj+CYh0QB0haCYgRQC+gYC8AaQDgAfAlDUQAKA4gHA5Qg0DTgnDbQBGAtgOBbQgYCshmAIQgMArgNAqQgSBBgeAdQgfAsgjAnQgNARgtA0Qg3A/gnANIh5gBQg6gGhKhUQgXgVgWgYQgwgzgphBQgshEglhUQhcgLgYisQgRhxBOgUQANgEAQgB");
	this.shape_42.setTransform(-69.8,0.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(1,1,1).p("AnGnRIhAAkAnGnRQAngVAngQQC1hLC2AxQDxg4CfBfAh5lGIgNg2QhwgDhHBKIAAAYQA1gTA3gLQAsgIAsgDgAkXi/QgBgBABgBQAKgIAKgGQA5glBFABQACAAACAAAjiiWQgMgNAAgRQAAgDABgEQgSAIgNAKQgIAHgGAHQAcAGAcgBQAHAAAHgBQACAAABAAQADAAACAAQACAAAAAAQADgBACAAQADAAAFgBQAEgBAEgBQACAAACAAQgCAAgBABIgBAAQgEABgEAAAixibQAAAAABAAQACgBACAAQAJgCAJgCQAbgIAegNQgMgggzAGQALALAAAQQAAALgFAJAisicQgCABgDABQgCAAgBAAAigjPQgLAAgLADQggAHgXAKAhrlEQAjACAUAoQATAogBAqQgEB7gaBwQAFAQBNAkIjxBSIAABqIAog9IDAgPIANgbIAQAbICwgEIA5A8IgThaQgMgFgLgFQhUgihQgXQgWgGgWgGIgDABAEujIQgDgBgCgCQgHgFgHgDQg9gihEAHQgBABgCAAQgDAAgDADAC3jMQAKgBAMACQAfAEAYAIQAOAFAMAHQAMAHAJAJQgbAIgbACQgIAAgGAAQgCABgBAAQgDgBgCABQgBAAgBAAQgCgBgCABQgDAAgFgBADIiaQgJgBgIgCADNiZQACgBABABADIiaQADAAACABQABAAACAAIAAAAQAFABAEgBQgEAAgFgBQgBAAgCABQAAgBgCAAQgBAAgCAAgAD9iZQAKgOgCgRQAAgEgBgDAC3jMQgJAMABAQQACALAGAIQgcgFgegKQAIghAyABgACkmIIgEA1QBdgLBbAYIgCgVQhAg5hyAMgAIHoKIiEAhIAADRIAGC7IACA5IABAPQgDAqgFApQAIAGAHAFQAfARgtAkQgDADgIACQgJAvgLAtAHDACQgFgTgIgHQgEgEgDgCQgSgOgLAEQgCABgBAAIgDASAGthcQgBABgjgCAGPgnQgCABgCACAGEA+QgFAjgFAiABHBMQgHgLgogGAgoEbQAFACAEABQAJACAIABQAzAIArgTAiTDsQCBAKBlgLQA5gHAxgMADcHmIALhCQhTBhg6AOQglAMgYgsIhHAAQgEAqgcAHQhEAPhGiDIAaBrAgZF0IAOAnIA3ABIAJgqgAmrgjIAAg6Igbl0AmnA+QgCgMgCgMIAAhJAmnA+QgFAGgHAFQgfARAtAkQAEADADADAnngGQAJgLAIgHQAdgbAOAQAmRDjQgBgCgFgpQgDgVgEgfQgEgegFgo");
	this.shape_43.setTransform(-68.2,13.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#C2894C").s().p("AidHsIgCACQgvgzgqhBQgrhEgmhUIgGgrIgHg0IgJhGIgDgYIAAhJIAAg6Igbl0QAngVAmgQIACAEQABgBAAAAQABAAAAABQABAAAAAAQABAAAAABQADADgGAHQgOANgEAWQgEAQABAbIAAB3QAAA2ACAqQADAuALBZIACATIAJBLIAPBrQAOBVAaBXIAKAdIAIAVQAIARAQAbIA8BhQgJgDgKgJgABVFCIgLgBIgMgDQgNgFgGgFQgEgDgBgCIgBgFIgDgEQgDgDAAgDIAAgFIABgBIAJADIARADQA0AIArgTIACgCQABgEACgBQACgDADAGQABAFgEAGIgHAJIgEAGIgFAEIgHAFIgHAGIgOAGQgGACgOAAgAAgEaQAAAAAAAAQABgBAAAAQABAAAAAAQAAgBABAAQAAAAABABQABAAAAAAQABAAAAABQAAAAABABIACACIgJgDgAAgEaIAAAAgAjWi7QgCgCAAgDQAAgDADgHQAOggAagOIAUgKIALgGIAMgGQAGgCAJAAQASgBAWABIAMACQAPAGACATQABADgBADQgBAEgFABQgFABgDgEIgBgDIAEgDIAAgBIgEAAQhFgBg5AlIgTAOIgBABIAAABIAAgBIABgBIgBABIAAABQgBAFgCABIgBABIgDgCgAFyjEQgBgCAAgGIAAAAQgCgJgHgIIgFAJQg8gihEAHIgBgCIgDADQgDAAgDADQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBgBQAAgEAEgDQAOgOAVgFQAUgFAVADQAYAEATAKQAKAGAQALQANAJADALIACAKQADAHgBACQgCAEgEAAQgDAAgDgEgAF2jJIgFgDIAFADgADZjrIAAAAgADfjuIgDACIgDABQADgDADAAgADfjug");
	this.shape_44.setTransform(-75.5,13.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#323232","#DEB17F"],[0.004,1],-162,37.1,-160.2,57.1).s().p("An2A+IBAgkIAbFzQgQABgNAEgAGZGNIgGi7IAAjRICEggQg0DSgnDcIgBAAIgigCgAl3kaQB0haCYgRQC+gYC8AaQDgAfAlDUQAKA4gHA5IiEAgQighejxA5Qi2gxi0BKQgnAPgnAWIhAAkIgjAZQAKj9CYh0gAIXgfIAAAAg");
	this.shape_45.setTransform(-69.8,-35.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#DEB17F").s().p("AjDGwIAaBrQgXgUgWgYIACgCQAJAJAJADIg7hhQgQgbgIgRIgJgVIgKgdQgahXgOhVIgOhrIgKhLIgCgTQgLhZgCguQgCgqAAg2IgBh3QAAgbADgQQAFgWANgNQAHgHgDgDQgBgBAAAAQAAAAgBAAQgBAAAAAAQgBAAAAAAIgCgEQC1hLC1AxQDxg4CgBfIAADRIAGC7IAjABQBGAtgOBbQgYCshmAHQALgtAIgvQAIgCAEgDQAagVAAgPQAAgKgNgHIgPgLQAFgpADgqQgDAqgFApIAPALQANAHAAAKQAAAPgaAVQgEADgIACIAKhFIgKBFQgIAvgLAtQgMAsgNApQgSBBgeAdQgfAsgjAoIAMhCQhUBhg5AOQgmAMgXgsIhIAAQgDAqgcAHQgHACgHAAQg+AAg+h2gAgIF0IANAnIA3ABIAKgqgAgXEbIgBABIAAAFQABADACADIADAEIACAFQAAACAEADQAHAFAMAFIALADIALABIAMAAQANAAAHgCIAOgGIAHgGIAGgFIAGgEIAEgGIAHgJQAEgGgCgFQgCgGgDADQgBABgBAEIgDACQgrATg0gIIgQgDIgCgCQAAgBAAAAQgBgBAAAAQgBAAAAAAQgBgBgBAAQAAAAAAABQgBAAAAAAQgBAAAAABQAAAAgBAAgAAjBXIjxBSIAABqIAog9IDAgPIANgbIAPAbICwgEIA6A8IgThaIgYgKQhTgihQgXIgsgMgAgPDwQA4AAAygEIABAAIAEgBIABAAIADAAQA5gHAwgMQgwAMg5AHIgDAAIgBAAIgEABIgBAAQgyAEg4AAIAAAAIAAAAQg3AAg8gEQA8AEA3AAIAAAAIAAAAgAgvAjQAEAQBOAkQhOgkgEgQQAahwADh7IABgFQAAgogTglQgTgogjgCQAjACATAoQATAlAAAoIgBAFQgDB7gaBwIAAAAgABYBMQgHgLgogGQAoAGAHALgAG/geIAIAGQAIAHAEATQgEgTgIgHIgIgGIAAgBQgMgJgJAAIgBAAIgBAAIAAAAIAAAAIgFAAIgBAAIgCABIACgBIABAAIAFAAIAAAAIAAAAIABAAIABAAQAJAAAMAJIAAABgAGcgkIAAAPIAEgSIgEADgAGcgkIgCg5gAiPjPQgLAAgMADQgfAHgYAKQgRAIgNAKQgIAHgHAHQAcAGAdgBIAOgBIADAAIAFAAIACAAIAEgBIAJgBIAIgBIABAAIADAAIAFgCIASgEQAbgIAdgNQgJgbgnAAIgOABgAD9iYIACgBIAOAAQAcgCAagIQgIgJgMgHQgMgHgPgFQgXgIgfgEQgMgCgLABQgxgBgIAhQAdAKAcAFIASADIAFABIACAAIABAAIAIAAIAJABIAEAAIACAAIACAAIADAAgAiqkPQgJAAgHACIgMAGIgLAGIgUAKQgZAOgPAgQgDAHAAADQAAADACACQABABAAAAQABABABAAQAAAAABAAQAAAAABgBQACAAABgGIAAgBIAAgBIAUgOQA5glBFABIAEAAIAAABIgFADIABADQADAEAFgBQAGgBAAgEQACgDgBgDQgCgTgPgGIgMgCIgRAAIgXAAgAE5jLIAAAAQAAAGACACQACAEAEAAQADAAACgEQABgCgCgHIgCgKQgDgLgOgJQgPgLgKgGQgUgKgXgEQgWgDgTAFQgWAFgOAOQgEADABAEQAAABABAAQAAABABAAQAAAAABAAQAAABABAAIADgBIADgCIADgBQBEgHA9AiIANAIIAAAAgAktk1IAAAYQA2gTA3gLQArgIAtgDIgOg2IgJAAQhpAAhFBHgAFolGIgCgVQhAg5hyAMIgDA1QAegDAeAAQA+AAA9AQgAn0AsQgRhwBOgVQANgDAQgBIAAA6IAAgBQgFgFgHAAIAAAAIgBAAQgLABgOAMIgFAEQgIAHgJALQAJgLAIgHIAFgEQAOgMALgBIABAAIAAAAQAHAAAFAFIAAABIAABJIAEAYQgFAGgHAFQgMAHgBAKQAAAPAbAVIAHAGIAGA0IAHArQhcgLgYisgAF3DfIAAAAgAmUB+QgbgVAAgPQABgKAMgHQAHgFAFgGIAJBGIgHgGgAmagjIAAAAgAE5jLIAAAAgAEsjTIAEgJQAIAIABAJIgNgIgACrjwIAAACIgDABg");
	this.shape_46.setTransform(-69.9,13.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#323232").s().p("AhCIAQg6gGhKhUIgbhrQBGCDBFgQQAcgHADgpIBIAAQAXArAmgMQA5gOBThhIgLBCQgNARgtA0Qg3A/gnANgAgYElIgNgmIBOgCIgKAqgAjrA0IDxhRIACgBIAtALQBPAWBUAiIAYAKIATBaIg6g8IiwAEIgQgaIgLAaIjCAQIgnA8gAj7kpIABgHQAXgLAggGQAMgDALgBQAKAMAAAQQAAAKgFAJIgSAFIgDAAIgCABIgDAAIgIACIgJABIgEAAIgCAAIgFABIgDAAIgPABQgLgNgBgRgADakOIgCAAIgDAAIgJAAIgIgBQgBgBAAAAQgBAAAAAAQAAAAAAABQgBAAAAAAIgDAAIgCAAIgSgDQgFgJgCgKQgBgQAIgNQALAAALACQAgADAXAIIABAHQACARgKAPIgOAAIgCAAIgGAAgAlKmqQBIhLBvAEIANA1QgsADgsAJQg2AKg2ATgACUnIIADg1QBygMBAA5IACAUQhbgYhcAMg");
	this.shape_47.setTransform(-67,25.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AkmAYQAGgHAJgHQAMgKASgHIgBAHQABAQALANIgEAAQgaAAgagFgAD5gEIgBgHQAPAFALAGQAMAHAJAJQgbAIgbACQAKgOgCgQgAByAHQAIggAxABQgIAMABAPQACALAFAIQgcgFgdgKgAihAAQAAgQgKgLQAzgGALAgQgdAMgcAIQAFgJAAgKg");
	this.shape_48.setTransform(-67.1,-4.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(2,1,1).p("AGUFuIgOBMQgSBBgeAdQgoA5gvAyQhABQhDAiIh6AAQhIgjg7gxQglgXgnggQgCgCgCgCQgkgegQgZQhChxgWhSQgCgIgCgIQgBgCAAgCQhQAsgtipQgLgpgDgfQgIhjBHgIQgojBgKinQgLABgmArQAblhGVhiQHchoB+EMQAXBJgiBXQAxAygTBZIg+FEQBJATgWBYQgWBYgWBPQgQA/gxgfg");
	this.shape_49.setTransform(-68.9,-0.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(1,1,1).p("Am0hQQAWALAYBxQAAAEABADIABgLIAck9IgRjKQArgYAsgQQABAAABgBQCtg+C9A0QDMgpB6BRIApGxIAFAyIgwD8AjvkpQA4gMAvgGQABAAAAAAQACAAACAAQAxgFAoADQABAAAAAAQACAAABAAQgDgigFghQhvgGhVBNQABAIACAIgAhXjcQgBAAgBAAQgUABgSADQgRAEgOAFQgJAEgIAFAjHjJIAAgCQARgKARgIQABAAABAAQAQgHAQgEQAhgHAhADQAEAAADACAiKiNQgsAEgggQQAMgcAbgRQAEAwAhAJQANgBAPgDQAKgCAMgCQAXgFAbgJQgIg5gpAAQARAggSAnAgqkiQALAMAJANQACADABADQABABABACQASAjgBAsQAAAIAAAHIAAAAQAAABAAAAQAAAEAAAEADIlHQgkAXgUAhQgCADgCAEQgBACgBADQgSAkABAuQAAAMABAMAGAjCQgIgIgFgEQg0glhMAEQgBAAgCAAQgLABgLACQgIABgHABAEkiIQgCAAgDAAQgCgBAAABIgBAAQgUgCgUgBQgEAAgFgBADejQQAKgCALAAQAjABAaAHQABAAABABQA4APAPAsQgGAAgFACQgEAAgFAAQgWACgZACQgEgBgEABQgFAAgFAAADejQQgOApAbAbQgkgEgkgIQAPguAsgKgADnmFQgHAagGAbQBsgIBLAqQABgLABgLQgrhKiBAJgAEyjJQAOAkgcAdAHIg7IgKA0AHkAfQgcgqgEBLQgCAYgCASQgDARgDAMQgDAQgHAHQghA8AjgRABLBqQh8AihaArQgBAAAAAAQAAAAgBAAQgKAFgKAFQgEAkAPA3IAfg2QAIgBAJgBQBHgJBfgDIARgjIAQAiQA3gCBSACIABAAQAXABAaABIAYAtQARg8gIgdQgJgDgJgDQh8gmhkgXQgFgBgFgCQAXgBgBAAQgGACgGACgACKgRIAUBgQgdAShAAGABXBmQgGABgHAAQgFAAgEAAAgPgUIgPBhQAmAZA5ABAAKEnQgBACABAAQBCAQAygWAhkD5QA5AFAyAAQBBABA6gHQA3gGAxgNAD5IKIAGhlQg5Btg5AOQgmAMgIgrIhFgBQgOAfgPAHQhZAbg3iDIAMBrAAZGCIAOAmIA3ACIAKgqgAnjAGQACgFADABQAFgHAEgFQAlg0AGBnQABAdgOARQgWAQAiAlQAfAggNATQgCADgEAG");
	this.shape_50.setTransform(-68.3,12);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#C2894C").s().p("AijH7IgCAAQgkgegPgZQhChxgXhSIgDgQIgYiUIgDgdIgBgLIgBAAIAbk8IgQjLQArgYAsgQIACAAQABADgCAEQgIAYgDAfQgCATAAAmIgDDUIADBMQAGCMAIBXQAMB8AUBlQATBaAdAxQAFAJgDAEQgCACgDAAIgDAAgABdFYQgKgCgHgDIgQgLQgFgGgBgJIAAgFQAAgBABAAQABAAAAgBQABAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQAAABABAAIAAABIAAABIgBgBIABgBIgBABIABABQBCAQAygWIAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABgBQABAAAAAAQABAAAAAAQABAAAAAAQAFABABAGQABAGgCAKQgFAKgEAEQgGAFgHABQgOAFgZAAQgagBgIgCgAlsDVIAGgJIgGAJIgDgBIgEgGIgPgSQgKgNgMggIgMgkQgHgXgDgOIgDgRIgDgOQAAgFAEgOIAAgBQACgFADABIAIgNQAlgyAHBmQABAegOAQQgWARAiAkQAfAggNATQACAFgDADIgEABIgBAAgAGvi0QgDAAgCgDIgEgJIAAgBQg0glhMAEIgDABIgWACIgQADIgEABQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAQABgDAEgCQAQgLAPgGQAfgMAiAGQAhAFAcATQARAMAJAOIAEAKQAEAHgEADIAAAAIgDABIgBAAgAGzi1IgNgMIANAMgAibi7QgDgDACgEIAFgGIAagYQAKgGAOgGIAKgEIAOgDQAcgEAOAEIAbAMIAFADQACADgBADQAAAAgBAAQAAABgBAAQAAAAgBAAQgBABgBAAIgBgBQgDgCgDAAQghgDghAIQgQADgQAHIgCABQgRAHgRAKIgBACIAAACQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAgAgLjeIgDgBQADAAADACIgDgBg");
	this.shape_51.setTransform(-73.4,10.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["#323232","#DEB17F"],[0.004,1],-162.9,30.6,-161.1,50.6).s().p("AmAHJQgXhygXgLQgojCgKilQgLAAgmAqQAblfGVhjQHchnB+ELQAXBKgiBWQAxAzgTBXIg+FGIgPACIgpmwQh6hRjMApQi8g0iuA+IgCABQgsAQgrAYIARDJIgcE+IgBALIgBgHg");
	this.shape_52.setTransform(-68.9,-29.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#DEB17F").s().p("AiZG+IAMBrQgkgYgngfIgFgEIABgBQAFADADgEQAEgEgFgJQgdgxgThbQgVhkgLh9QgIhWgHiMIgDhMIADjVQABgmACgTQADgfAIgXQACgEgBgEQCtg+C8A0QDNgpB5BRIApGxIAGAyIAKg0QBIASgWBXQgWBYgVBQQgRA+gxgfIAxj8IgxD8IgOBNQgSBBgdAdQgpA5guAxIAFhlQg4Btg5AOQgmAMgJgrIhEgBQgPAfgOAHQgPAEgPAAQhFAAguhsgAATGCIAOAmIA4ACIAJgqgAgBEnIgBAEQABAKAFAFIAQALQAHAEAKACQAIABAaABQAZAAAOgEQAHgCAFgEQAFgEAEgLQADgKgBgFQgCgHgEAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABIAAAAQgyAWhCgQIAAgBIAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAAAIgBAAQAAAAgBAAQAAAAAAAAQAAABAAAAQgBAAAAABgAiRC3IgBAAIgVAKQgEAkAQA3IAfg2IARgCQBHgJBfgDIARgjIAPAiQA4gCBSACIAAAAIAyACIAYAtQARg8gIgdIgSgGQh8gmhkgXIAMgEIAAAAIgBAAIAAAAIgCAAIgUABQBAgGAdgSIgUhgIAUBgQgdAShAAGIALADQh8AihbArIAAAAIAAAAgAAKD+QA8AAA2gGQA4gGAxgNQgxANg4AGQg2AGg8AAIgBAAIAAAAIgDAAIgEAAQgzAAg4gFQA4AFAzAAIAEAAIADAAIAAAAIABAAgAGhDNIAJgCIAAAAIACgBIABgBIgBABIgCABIAAAAIgJACIAAAAQgPAAAWgqIAAgBIABgBIABgBIAAgBIABgBQAGgHAEgQIAGgdIADgqIAAgDIABgDQADgqALAAIAAAAIABAAQAGAAAJAMIABACIABABIgBgBIgBgCQgJgMgGAAIgBAAIAAAAQgLAAgDAqIgBADIAAADIgDAqIgGAdQgEAQgGAHIgBABIAAABIgBABIgBABIAAABQgWAqAPAAIAAAAgAgkBNQAnAZA4ABQg4gBgngZIAPhhIgPBhgAEZiIIAGAAIAKAAQAEgBAEABIAvgEIAIAAIALgCQgOgsg5gPIgCgBQgagHgigBQgMAAgKACQgsAKgOAuQAkAIAkAEIAJABQAUABAUACIAAAAIABAAIABAAgAiEjYQgRAEgOAFIgSAJQgaARgMAcQAfAQAtgEQANgBAOgDIAWgEQAXgFAcgJQgJg5goAAIgDAAQgUABgRADgAB0ixIABAYIgBgYIAAgEQAAgsAQgiIADgFIAEgHQATghAlgXQglAXgTAhIgEAHIgDAFQgQAiAAAsIAAAEgAgFiZIAAgIIAAAAIAAgBIAAAAIABgPIAAgEQAAgqgSghIgCgDIgEgGQgIgNgMgMQAMAMAIANIAEAGIACADQASAhAAAqIAAAEIgBAPIAAAAIAAABIAAAAIAAAIgAFtjOIAAAAIAFAKQACACADABQAAAAABAAQAAAAABAAQAAAAABgBQAAAAABAAIAAgBQADgDgDgHIgFgJQgJgPgQgLQgcgUghgFQgigFgfAMQgPAGgQAKQgFADAAACQAAABAAAAQABABAAAAQAAABAAAAQABABAAAAQABAAAAABQAAAAABAAQAAAAABAAQAAAAABAAIAEgCIAQgCIAWgDIADAAIAPAAQBCAAAuAhgAiFkBIgPADIgKAEQgOAGgJAHIgaAYIgFAFQgCAFACADQABAAAAABQAAAAABAAQAAAAABABQAAAAABAAQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBIAAgBIABgCQARgKARgIIACAAQAQgHAQgEQAggHAiADIACABIAEABIABAAQABAAABAAQAAAAABAAQAAAAABgBQAAAAABgBQABgCgCgDIgFgDIgbgNQgHgCgKAAQgLAAgOACgAj4k5IAEAQQA4gMAvgGIABAAIADAAQAygFAoADIABAAIACAAQgDgigFghIgRAAQhkAAhPBHgAGMkuIABgWQgrhKiBAJIgNA1IAigBQBWAABAAjgAnrBjQgLgpgCgfQgJhiBHgJQAXALAXBxIACAHIABgLIABAAIABAKIADAeIAXCUIgBgEQgQAJgPAAQg6AAgkiGgAnoAGIgBABQgDAOAAAEIACAOIAEASQADAOAHAXIAMAjQAMAgAKANIAOASIAFAGIADACQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQAEgDgCgFQANgTgfggQgiglAVgQQAPgRgBgdQgHhnglA0IgIAMIgBAAQgDAAgBAEgABGBqIAAAAgAA7BnIAJAAIAOgBIgMAEIgLgDgAA7BnIAUgBIACAAIAAAAIABAAIAAAAIgOABIgJAAgAA7BnIAAAAgAA7BnIAAAAgAA7BnIAAAAg");
	this.shape_53.setTransform(-67.8,12);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#323232").s().p("AhSIBQhKgjg7gwIgMhrQA3CDBagbQAPgHAOgfIBEABQAJArAmgMQA5gOA4htIgFBlQhBBQhDAjgAgoEtIgOgmIBOgCIgJAqgAjxBGIAUgKIACAAIAAAAQBbgrB8ghQBkAWB7AmIASAGQAJAdgSA8IgXgtIgygCIAAAAQhSgCg4ACIgQgiIgQAjQhfAEhHAIIgRACIggA2QgPg3AEgkgADPkDIgCAAIAAAAQgUgCgVgBIgJgBQgbgbAOgpQAKgCALAAQAjABAaAHIACABQAPAkgcAdIgGAAgAj/lBIARgJQAPgFARgEQARgDAUgBIACAAQARAggSAnIgWAEQgOADgNABQgigJgEgwgAlCm0QBVhNBvAGQAFAhADAiIgCAAIgCAAQgngDgyAFIgEAAIAAAAQgvAGg5AMIgDgQgACKnLIANg1QCBgJArBKIgBAWQhMgqhsAIg");
	this.shape_54.setTransform(-60.3,24.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("ADTAqQAcgdgOgjQA4APAPArIgLACIgJAAIgvAEQgEgBgEABIgKAAgABSAaQAPgtAsgKQgOAoAbAbQgkgEgkgIgAknAZQAMgbAbgRQAEAvAhAJIgRABQgiAAgZgNgAiogpQApAAAIA4QgbAJgXAFQASgmgRggg");
	this.shape_55.setTransform(-60.2,-5.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(2,1,1).p("AldFjQiLApgfjaQgUiEBugGIgdl2QggAPgmArQAblhGVhiQHchoB+EMQAXBJg5BYQBIAxgTBZIhDFhQBJATgTBOIgxCPQgMAkguABIgOBMQgSBBgeAdQgoA5gvAyQghAjglAfQgdAZggAXIh6AAQhLgvg4glQglgXgcgVQgBgBgCgBQhFg0gKgaIhHjDIgBAA");
	this.shape_56.setTransform(-64,-0.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(1,1,1).p("AlxAvIAclUIgNiyQATgNAUgMQAagOAcgLQAAAAAAAAQCfg9DpArQCZgcB6BRIAsHLIACAXIgwD9AjUkqQA5gMAygEQABgBABAAQA7gFAxAEIgFhDQiJgJhPBNgAitjgQAXgNAYgHQAmgLApAEQAPACAQADQACAAAAADAhviUQgEgCgFgFQgNgLgBgRQgBgRAKgNQALgNARgBQARgCANALQANAMACARQABARgLANQgHAJgLAEAhviUQACAAABABQADAAACAAQABAAABAAQACAAACABQAEAAAFAAQAEAAAEAAQACAAABAAQABAAABAAQACAAACAAQgDAAgCABQgCAAgBAAAhNiSQgBAAgBABIgBAAQgEAAgEgBAhHiSQAlgBAngJQgEhGgxgFQgrgDgeAJQgwAOgMAuQAiANAkAEADhk6QhLAnAABhQAAAVACAWQAAAAAAABQAEBhAOBkQgjAZhHAUQgDAAgDgBIjgBRIAABoIAqg9IAggCICRgNIAOgbIAOAbICkgEIAdAAIAVA+IAMhhQgJgEgIgDQhmgoh8gWAD4l4IgNA4QBBAFA8AfQADABACACQAKAFAJAGIACgXQgqhKhggJgAEKh3QgggGgigNQANhEAxABQAfACAXAIQAIACAHADQAtAUAFAvQgFABgFACIgIABQgUADgWABIgGAAQgHAAgGAAQgCAAgBAAQAFgGACgBQAOgJAEgRQADgRgJgPQgJgNgPgEQgRgEgOAKQgOAKgEARQgDAQAJAPQAGAIAJAGIAhAEAF9i2QgUgQgWgKQgIgDgIgDQgrgPgxAFAHrAiQgdgpgEBLQgBAYgCARQgDASgDAMQgEAQgHAGQghA8AjgQAHJgbIgFAXAgfAgIACAFIAAAsQARAPAaAHQABAAAAABQATADAYAAAAQEsQBBASA0gWQACgBgBgCAARBYIAqAAAhaD9QB9AJBmgKQA6gGAygNAAfGFIAOAnIA3ABIAKgqgAD/IOIAGhlQg5Btg5AOQgmAMgIgsIhFAAQgOAegQAHQhYAbg3iDIAMBrAlzAxIABAGIABgGAnqAKQABgBABgBQAIgIAHgHQA4gzABBmQAAAegWAQQgfARAtAkQAsAigaAVQgCABACACAmuhMQAbAEAfB3");
	this.shape_57.setTransform(-63.9,11.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#C2894C").s().p("AiNIAIgDADQhFg0gKgaIhHjDIgBAAIgCABIgBgBIgEgqQgBgTgJg1QgIgtAAgbIABgEIAAACIACAGIAAgGIABgCIAclUIgOiyQATgNAUgMQAbgOAcgLIABACQAGAIgFARQgPA2gHBFQgEApgEBTQgBA0AAAaQABApAFA9QATDrARB1QAKBCALArQAQA7AaAsQACAFgBAFQAAAFgDAAQgFAAgCgFgABjFWQgRgDgKgKQgGgEgCgGQgDgHADgGIACgCQAAAAABAAQAAAAAAAAQABAAAAAAQAAABAAAAQBCASA0gWIAAgCIABgBIABgDQAAAAABgBQAAAAABgBQAAAAABAAQAAAAABABQADAAgBAFQABAJgFAHIgKAKIgMAIIgKAEIgdAEIgQABIgDAAIgLAAgAC6EtIABgCIAAgBIAAABIgBACgAltDSQgNgCgOgQQgNgRgOgpIgSg2QgDgKgBgNIgCgPQgBgJABgFQACgGAEgGIAAgBIABgCQAIgKAIgFQA4gzABBmQAAAegWAQQgfARAsAkQAtAigaAUIAAADIAAABIgBgCIABgCIgBACIABACQgBAFgGAAIgFgBgAlhDOIAAAAgAAXAqIgCgFIACAFIgCgBIAAgDIAAgBQABgFAGgEIADgGIADgJIADgCIABgDIACgFQADgEADgCIADgDIAFgHIAEgCIAEADIAHAJIARALQADACABADIgCADIgDACIgJADIgdAJIgNAGIgFAFIgFABIgBAAgAG0itQgCgBAAgEQgVgPgWgKIgPgGQgrgPgxAFQgBABgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAgBAAAAQAAgBAAgBIAEgDQAUgPApgCQAMgBAJABQAMABATAIQAOAGAJAHQAIAHAKAPIAGAIQACAEABAHQAAACAAADQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABIgCAAIgDgBgAiAjYQgCgCADgFQAOgSASgOQAJgGAJgEQAMgFARgBQAZgCATACQAJABAHADIANAGIAIAFQAFADAHAJIACAFQAAAEgGgBIgEgDIAAAAQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAAAQgQgEgPgBQgogEgmALQgYAHgYANIgCADIgDABIgCgBgAAljvIgBgBIAAgBQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAAAAIAAAAg");
	this.shape_58.setTransform(-69.2,11.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#323232","#DEB17F"],[0.004,1],-167.8,30.6,-166,50.6).s().p("AlyHLIgBgCQgfh4gbgFIgdl1QggAOgmAqQAblfGVhjQHchnB+ELQAXBKg5BXQBIAygTBXIhDFiIgHABIgsnLQh6hRiZAcQjpgqifA9IAAAAQgcALgaAOQgUALgTAOIANCwIgcFVIAAADIgBAFg");
	this.shape_59.setTransform(-64,-29.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#DEB17F").s().p("AiJHBIAMBrQgkgXgcgVIgDgCIACgDQADAFAEAAQAEAAAAgFQABgFgDgFQgZgsgQg7QgLgrgKhCQgRh1gTjrQgGg9AAgpQgBgaACg0QAEhTAEgpQAHhFAOg2QAGgRgGgIIgBgCIAAAAQCeg9DpArQCagcB5BRIAsHLIADAXIAEgXQBKATgTBNIgxCPQgMAkguABIAwj9IgwD9IgPBMQgSBBgdAdQgpA5guAyIAFhlQg4Btg5AOQgmAMgJgsIhEAAQgPAegPAHQgPAFgOAAQhFAAguhtgAAjGFIAOAnIA4ABIAJgqgAAQEtQgDAGACAHQADAGAFAEQALAKARADIANABIARgCIAdgEIAKgEIAMgIIAJgKQAGgHgBgJQAAgFgCAAQgBAAgBgBQAAAAgBABQAAAAgBAAQAAABAAAAIgCADIAAABIgBACQgzAWhCgSQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgBACgAiiC8IAABoIArg9IAggCICQgNIAPgbIAOAbICkgEIAcAAIAWA+IALhhIgQgHQhmgoh9gWIgFgBIgCAAIAAAAIgBAAIAAAAIAAAAQgSAAgOgCIgCAAIAAAAIgCgBIgBAAIgDAAIgCgBQgagHgQgPIAAgsIAAAsQAQAPAaAHIACABIADAAIABAAIACABIAAAAIACAAQAOACASAAIAAAAIAAAAIABAAIAAAAIACAAgAAcEBQA5AAAzgFIAFAAQA7gGAygNQgyANg7AGIgFAAQgzAFg5AAIAAAAIAAAAQg2AAg7gEQA7AEA2AAIAAAAIAAAAgAGyDQIAHgCIABAAIAAAAIABAAIABgBIABAAIgBAAIgBABIgBAAIAAAAIgBAAIgHACIgBAAQgQAAAagvQAGgGAEgQIAGgeIADgpIAAgFIABgBQADgqALgBIABAAIAAAAQAGAAAJAMIAAABIABABIABABIAAAAIAAAAIgBgBIgBgBIAAgBQgJgMgGAAIAAAAIgBAAQgLABgDAqIgBABIAAAFIgDApIgGAeQgEAQgGAGQgaAvAQAAIABAAgABEBsQBHgUAkgZQgOhkgFhhIAAgBIAAAAIgCgrQABhhBLgnQhLAngBBhIACArIAAAAIAAABQAFBhAOBkQgkAZhHAUgABABYIgqAAgAAGgSIgFAHIgCADQgDACgDAFIgCAEIgCADIgCACIgDAJIgEAGQgFAEgCAFIAAABIABADIACABQACABAEgCIAFgFIAMgGIAdgJIAJgDIADgCIABgDQAAgDgDgCIgRgLIgHgJIgEgDIgEACgADNiKQAhANAhAGIAhAEIACAAIANAAIAHAAQAVgBAUgDIAIgBIALgDQgGgvgtgUIgOgFQgXgIgfgCIgCAAQgwAAgMBDgAh0jhQgxAOgMAuQAjANAkAEIADABIAFAAIACAAIAEABIAIAAIAJABIAAAAIADAAIAFgBQAmgBAmgJQgDhGgygFIgUgBQgeAAgWAHgAFHjWIAQAGQAWAKAUAQQABADACABQAAABABAAQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAAAQAAgBAAAAQABgDgBgCQgBgHgCgEIgFgIQgKgPgIgHQgJgHgOgGQgUgIgLgBQgJgBgNABQgpACgTAPIgEADQAAABAAABQAAABAAAAQAAABABAAQAAABABAAQAAAAAAAAQABAAABAAQAAAAABAAQABAAAAgBIAZgBQAkAAAfALgAhgkUQgRABgMAFQgJAEgJAGQgSAOgOASQgEAFADACQAAABABAAQAAAAABAAQABAAAAAAQABAAABgBIACgDQAXgNAZgHQAmgLApAEQAPACAPADIABABIABACIAEACQAFABAAgEIgBgFQgHgJgFgDIgIgFIgNgGQgIgDgJgBIgVgBIgXABgADvlAQBCAFA8AfIAEADIAUALIACgXQgqhKhhgJgAjTk7IAEARQA4gMAygEIADgBQA6gFAxAEIgFhDIgbgBQh2AAhGBFgAGZD5gAoDA9QgViDBugGQAcAEAfB3IgBAEQAAAbAIAtQAJA1ABATIAEAqIAAABQgWAHgTAAQhnAAgZi4gAnVgHQgHAHgIAIIgBACIgBABQgEAGgBAGQgBAFABAJIACAPQABANACAKIASA2QAPApANARQANAQAOACQAKACABgGIABgBIAAgCQAagVgtgiQgtgkAggRQAVgQABgeQgBhEgaAAQgMAAgTARgAA/Brg");
	this.shape_60.setTransform(-64.4,11.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#323232").s().p("AhSIAQhMgvg4glIgMhrQA4CDBYgbQAQgHAPgeIBDAAQAJAsAlgMQA6gOA4htIgGBlQghAjgkAfQgeAZgfAXgAgnEsIgOgnIBOgCIgKAqgAj7A8IDhhQIAGABQB7AVBmAoIARAHIgLBhIgWg+IgdAAIijAEIgOgbIgOAbIiRANIghACIgqA9gAC2j3QgKgGgFgIQgKgPADgQQAFgRANgKQAOgKARAEQAQAEAIANQAKAPgEARQgDARgPAJIgHAHgAi2kSIgDgBIgDAAIgEAAIgDgBIgKgHQgNgLgBgRQgBgRAKgNQAMgNAQgBQARgCANALQANAMACARQABARgLANQgHAJgLAEIgIAAIgJAAgAEYmZIgFgDQg8gfhBgFIANg4QBhAJAqBKIgCAXIgUgLgAksm7QBOhNCKAJIAFBDQgygEg7AFIgCABQgyAFg5ALg");
	this.shape_61.setTransform(-55.4,24.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("ADKA7IgCgBIAGgHQAPgJADgQQAEgRgJgOQgJgOgQgDQgQgEgOAKQgOAJgEAQQgDARAJAOQAFAJAKAGQghgHghgMQANhEAxACQAfACAXAHIAOAFQAtAUAGAvIgLACIgIABQgUADgVABIgHABIgNAAgAiuAcIgCAAIgDgBQAKgDAHgKQALgMgBgQQgBgRgNgMQgNgLgRABQgRACgLAMQgLAOACARQABAQAMALIAKAHQgkgEgjgNQAMguAxgOQAdgJArADQAzAFADBFQgnAKgmABIgDAAg");
	this.shape_62.setTransform(-54,-5.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(2,1,1).p("AGVFuIgOBMQgSBBgeAdQgoA5gvAyQghAjglAfQgdAZggAXIh6AAQhLgvg4glQglgXgcgVQgIgGgHgFQAAAAAAgBQg6gsgJgYIhDi4IgEgLQh3AlgpiVQgIgdgFgjQgDgUAAgSQAAgBAAgBQABhdBcgFIgdl2QggAPgmArQAblhGVhiQHchoB+EMQAXBJg5BYQBIAxgTBZIhDFhIgFAXIgHAnIAAABgAHKBZQA5ATgPBOIgnCPQgLApgtgE");
	this.shape_63.setTransform(-60,-0.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(1,1,1).p("AjPkqQBAgNA4gEQAAgBAAABQABgBABAAQAzgEAsAEIgFhDQiJgJhOBNgAmphMQAbAEAdBvQACAIACAIIAelcIgOiyQATgNAUgMQAKgFAKgFQAIgEAIgDQCjhID3AuQCagcB5BRIAQDNIAfEVAiojgQAWgNAYgGQABAAABgBQAAAAABAAQAQgFARgBQAWgDAXACQAPACAQADQABABAAABAhCiSQAmgBAmgJQgDhGgygFQgVgCgSACQgSABgPAFQgxAOgMAuQAiANAlAEQgFgCgFgFQgMgLgCgRQgBgRALgNQAKgNARgBQASgCAMALQANAMACARQABARgLANQgHAJgKAEAhpiUQABAAACABQACAAADAAQAAAAACAAQABAAACABQAFAAAEAAQAEAAAFAAQABAAABAAQgBAAgBABIAAAAQgFAAgEgBAhCiSQgDAAgCABQgBAAgCAAAhIiSQACAAABAAQABAAACAAADnk6QhLAngBBhIABAgAD9l4IgNA4QBPAGBHAsIACgXQgqhKhhgJgAExhzQAFgGABgBQAPgJADgRQAEgRgJgPQgJgNgQgEQgQgEgOAKQgOAKgEARQgDAQAJAPQAFAIAKAGQghgGghgNQANhEAxABQApADAbAMQAtAUAGAvQgFABgGACIgIABQgUADgVABIgHAAQgGAAgHAAQgBAAgBAAgAGAizQAAgFgCgCQgSgNgTgIQAAgBgBAAQgBAAgBAAQgigPgngCQgMAAgNABQgEAAgEAEAHoAiQgRgggGAjQgCAMgBATQgBAYgBARQgDASgCAMQgDAQgFAGQgHAPgDALQgDAKAAAFQAAALAOgIABcBnIj5BTIgEBqIAqg9IDBgPIAPgbIAOAbICwgEIAWA+IALhhQgIgEgJgDQhlgphlgZQgBgBAAAAgAAiBhQABgGACgCQALgIAfgFQACAAACACACdiGQAFBgAQBaQgGAPhNAjQgBAAgBABQgBAAAAAAAAWEtQA/AQAygTQADgCAFgGAhUD9QB6AJBkgKQA9gGA0gNAEFIOIAFhlQg4Btg5AOQgmAMgJgsIhEAAQgPAegPAHQhYAbg4iDIAMBrAAkGFIAOAnIA4ABIAJgqgAnnAJQACgDADABQAHgIAHgGQA4gzACBmQgBAegVAQQggARAtAkQArAhgXAUQgCACgEACAEQh3IAhAE");
	this.shape_64.setTransform(-60.4,11.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#C2894C").s().p("AiYH4IAAAAIgCACQg5gtgKgXIhDi4IABAAIgDgLIAAgBIgCgNIgWiPQgEgbAAgOIADAQIAdldIgNixQATgOAUgLIAVgKIAPgHIAAAAQgGDRAAB0QgDC0AFCRQADBzAOBFQASBkAyBFQAFAIgEAEIgCABQgDAAgFgFgABMFRQgJgEgCgEQgEgGACgOQAAgEAEgCQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAIACACQA/ARAygUIgBAAQgCgDADgDQADgBACgBIADABQADAAAEADIAEAFIABAIIgBAIIgFAFQgGAHgGACQgDADgHABIgLABIgSADIgJABIgQAAQgfABgQgHgAC5EvQADgBAFgGQgFAGgDABgAlmDTQgMgFgJgJQgRgOgPgkQgGgPgEgLQgDgMAAgKQAAgIABgNIAEgXQAAgGgCgDQgBgDgIgDQgIgEgCgDIgBgGIABgIIADgEQABgBAAgBQABAAAAAAQABAAAAAAQABAAAAAAQAIgJAHgFQA4gzABBmQAAAegVAQQggARAtAkQArAhgXAUIgFAEIAFgEQAEAFgEAEIgDABIgGgBgABJBkQgCgDAAgIQABgFABgCIADgDIAMgLIAIgHQAFgCAEABIAHABIAGAAQAEABAHAHIACABIABACQAGAEgCAFIgDADIgCgBIgCgBIAAAAIABAAIADACIgDgCIgBAAIAAAAQgfAFgLAIQgCACgBAFQABgFACgCIAAAAQABAAAAABQABABAAAAQAAABAAAAQAAABgBAAIgCADIgCAAIgDABQgFgBgDgCgAGyitIAAgCQAAgDgCgCQgSgNgTgIIgBgBIgCgBQgigPgngBIgZAAQgEABgEADQAAABgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBQgBgBAAAAQAAgBAAAAQAAgBABAAQABgFAGgDQAOgHAIgCQAGgCAOgBQAUgBANADIAlANIAPAHQAQAJAFAKIAFARQABAHgDACIgDABQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAgAGwivIAAgFQACACAAADIAAACIgCgCgAEejXIAAAAgAEmjbIgDACIgFACQAEgDAEgBgAh5jZQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQgCgKANgKQAUgRAhgHQAMgCAOgBIAgAAIAMABIAMADIAMAFQAHADADAJIACAFQgBADgDABQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAIgBgCQgQgEgPgBQgWgCgWACQgRACgPAFIgDAAIgCABQgXAGgWANQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAAAAAIgBgBgAEmjbIAAAAg");
	this.shape_65.setTransform(-65.4,11.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.lf(["#323232","#DEB17F"],[0.004,1],-171.8,30.6,-170,50.6).s().p("Al1HBQgehwgagFIgdl1QggAOgmAqQAblfGVhjQHchnB+ELQAXBKg5BXQBIAygTBXIhDFiIgFAYIgekWIgQjMQh6hRiZAcQj4gtijBHIgPAHIgUALQgUALgTAOIANCwIgdFdIgEgPg");
	this.shape_66.setTransform(-60,-29.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#DEB17F").s().p("AiCHBIAMBrQglgXgcgVIgPgLIAAAAIACgCIAAAAQAGAGAEgDQAEgEgFgHQgyhGgThkQgNhFgDhzQgFiQACi0QABh0AGjSIgBAAQCjhID4AuQCZgcB6BRIAQDNIAeEVIgHAmIAAABIgpDWIgOBMQgSBBgeAdQgoA5gvAyIAGhlQg5Btg5AOQgmAMgIgsIhFAAQgOAegQAHQgOAFgOAAQhFAAguhtgAAqGFIAOAnIA3ABIAKgqgAAWEpQgDACAAAEQgDAOAFAGQACAEAIAEQARAHAeAAIARAAIAJgBIARgEIAMgBQAGgBAEgCQAGgDAGgGIAFgGIABgIIgBgIIgEgFQgEgCgEgBIgCAAQgDAAgCABQgDADACADIAAABQgyATg+gQIgCgCIgDgCIgBAAgABhBnIj4BTIgEBqIAqg9IDBgPIAOgbIAOAbICxgEIAVA+IAMhhIgRgHQhmgphkgZIgCgBIACAAIABgBQBNgjAGgPQgPhagGhgQAGBgAPBaQgGAPhNAjIgBABIgCAAIAAAAgAAjEBQA2AAAxgEIACAAIADgBQA9gGA0gNQg0ANg9AGIgDABIgCAAQgxAEg2AAIAAAAIgBAAQgvAAg0gDIgDAAIAAAAIAAAAIgFgBIgBAAIgFAAIAFAAIABAAIAFABIAAAAIAAAAIADAAQA0ADAvAAIABAAIAAAAgAAzA4IgHAGIgNAMIgCADQgBABgBAFQAAAIACADQACACAGABIACAAIACgBIADgCQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAgBgBIAAAAQALgIAfgFIABABIADABIADgCQACgGgGgEIgCgBIgCgCQgGgGgEgBIgGgBIgIgBIgBAAQgDAAgFACgADTiKQAiANAgAGIAhAEIADAAIANAAIAGAAQAWgBAUgDIAIgBIAKgDQgFgvgtgUQgbgMgqgDIgCAAQgvAAgNBDgAhNjnQgSABgOAFQgxAOgMAuQAiANAkAEIADABIAFAAIACAAIAEABIAJAAIAIABIABAAIADAAIAFgBQAlgBAngJQgEhGgxgFIgVgBIgTABgAChiyIABAgIgBggQAAhhBLgnQhLAnAABhIAAAAgAESjhQAnACAjAPIACAAIABABQATAIARANIABAFIABACQADADAEgCQADgCgBgGIgFgRQgGgLgPgIIgPgHIglgOQgOgDgTABQgOABgHACQgHACgOAHQgHADgBAFQAAAAAAABQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAQAAAAABAAQAAAAABAAIAFgCIADgCIARgBIAHAAgAhNkQQgPABgMACQggAHgVARQgMALACAJQAAAAAAABQAAAAAAABQAAAAAAAAQABABAAAAQABAAAAAAQABAAAAAAQABAAAAgBQAAAAABgBQAWgNAXgGIACgBIACAAQAQgFARgBQAWgDAXACQAPACAQADIABACQAAAAABABQAAAAAAABQABAAAAAAQABAAAAAAQACAAABgEIgCgFQgCgIgHgEIgNgFIgLgDIgNgBIgOAAIgSAAgAD2lAQBOAGBHAsIACgXQgqhKhggJgAjNk7IAEARQA/gNA4gEIABAAIACgBQAzgEAsAEIgFhDIgcgBQh2AAhGBFgAGfD5IApjWIALACIgLgDIAHgmIAFgXQA5ATgPBNIgnCPQgKAlgmAAIgIAAgAG/DQIABAAIAAAAIAEgDIACAAIgCAAIgEADIAAAAIgBAAIgDAAIAAAAQgEAAAAgGIAAAAIAAgBQAAgFADgJQADgLAGgPQAFgGADgQIAFgeIADgpQABgTACgMIAAgCIAAgBQADgPAFAAIABAAIAAAAQAFAAAHANIAAAAIABACIABAAIgBAAIgBgCIAAAAQgHgNgFAAIAAAAIgBAAQgFAAgDAPIAAABIAAACQgCAMgBATIgDApIgFAeQgDAQgFAGQgGAPgDALQgDAJAAAFIAAABIAAAAQAAAGAEAAIAAAAIADAAgAlQDtQh3AlgpiVQgIgdgFgjQgDgUAAgRIAAgDQAAhcBdgFQAaAEAeBvQABAOAEAbIAVCPIADAOIAAAAIADALIgBABgAnhAJIgDAEIgCAJIACAFQACAEAIADQAIADABAEQABACAAAHIgDAWQgCANABAJQAAAJADAMQADAMAHAOQAPAkARAPQAJAIAMAFQAGADADgDQAEgEgEgFQAXgUgrghQgtgkAfgRQAWgQAAgeQgBhmg4AzQgHAGgIAIIgBAAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAAAABg");
	this.shape_67.setTransform(-61,11.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#323232").s().p("AhRIAQhNgvg4glIgMhrQA3CDBagbQAPgHAOgeIBEAAQAJAsAmgMQA5gOA4htIgFBlQgiAjglAfQgdAZggAXgAgnEsIgOgnIBOgCIgJAqgAj3A6ID4hSIACABQBlAYBlApIARAHIgMBhIgVg+IixAEIgMgbIgPAbIjBAPIgrA9gAC1j3QgJgGgGgIQgJgPAEgQQAEgRAOgKQANgKARAEQAPAEAKANQAIAPgDARQgDARgPAJIgGAHgAi1kSIgFgBIgBAAIgGAAIgDgBIgJgHQgMgLgCgRQgBgRAKgNQALgNASgBQARgCANALQANAMABARQABARgLANQgHAJgLAEIgIAAIgIAAgACWnAIANg4QBhAJApBKIgCAXQhGgshPgGgAktm7QBPhNCKAJIAFBDQgtgDgzADIgCABIgBAAQg3AEg/ANg");
	this.shape_68.setTransform(-51.4,24.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("ADKA7IgCgBIAGgHQAPgJADgQQAEgRgJgOQgJgOgQgDQgQgEgOAKQgOAJgEAQQgDARAJAOQAFAJAKAGQghgHghgMQANhEAxACQApACAbANQAtATAGAvIgLACIgIABQgUADgVABIgHABIgNAAgAiuAcIgCAAIgDgBQAKgDAHgKQALgMgBgQQgBgRgNgMQgNgLgRABQgRACgLAMQgLAOACARQABAQAMALIAKAHQgkgEgjgNQAMgtAxgPQAPgEASgCQASgBAVABQAzAFADBFQgnAKgmABIgDAAg");
	this.shape_69.setTransform(-50,-5.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]},1).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49}]},1).to({state:[{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63}]},1).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-171.2,-76,128.8,152.9);


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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

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


(lib.Tween3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("AlUA6QgGh6gihfQg0hYg0AQQAWClgWCeICDEoAF9kuIkUEfAlUA6QAngTAkgYQBthJBWh7ICvkuQAygQAOA4IikFeIFikuQA0AFgMBFIgSATQA0ASgMA7Ij4E1QgXApE3htQAjADgRArIkICoQiCCfi6BWQgGADgdAKAlUA6QCNBOgLB4");
	this.shape_1.setTransform(0,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C2894C").s().p("AhFhMQAngTAjgYQBbB3gkB5QALh4iMhNg");
	this.shape_2.setTransform(-27.1,13.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DEB17F").s().p("AjPHpQgrgFhIhFQhIhEApAmIiDkpQAWidgWimQA0gPA0BXQAiBgAGB5QCNBPgLB3QAkh4hbh5QBthJBWh7ICvkuQAygPAOA3IikFeIFikuQA0AGgMBEIgSAUQA0ARgMA7Ij4E1QgXApE3htQAjADgRArIkICoQiCCfi6BWQgGAEgdAKQgSAGgYAAQgOAAgPgCgABpgTIEUkeg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.4,-50.1,99,99.6);


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
	this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("AhjutQESCYAqINIBTIyQgNAGgNAGAjGF8IA/F1QAGDDCCgGQAOAAANgBQADAAACAAQDKgNAniMQAOgcAFgyQAAgCAAgCQAEgtgDg9IgSkBIgCghAjGF8QDrAhDjhiQAFgDAFgCAkrkvIA+KkQATAEAUAD");
	this.shape_4.setTransform(31.5,97);

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
p.nominalBounds = new cjs.Rectangle(0,0,62.5,192.2);


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
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("ADOs4QAEAOAEASQAAADABAEQATBqgQDRQgzI9g7G/QgNA1gHAtQgGAtgJA/QgKA/gQAGAjXrNQgaINAxFhQAbD1gSDtQgCAVAFA7");
	this.shape_2.setTransform(22.5,91.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C2894C").s().p("Ai/EEQgxlhAaoNQALhNAgguQgdCqAtMIQAVE4gwDhQASjugbj0gABkKHQBYuIASm2IAJABIABAIQAAAIABAHIACAHIAAAEIABABQAEAXgBAbIAAAEQADBogHCCQgzI8g7G/g");
	this.shape_3.setTransform(22.4,81.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DEB180").s().p("AhXNRQhngYgFg7QgFg7ACgVQAwjhgVk3QgusJAdipQAuhEBagEQC8gHA2BrQAFAJADAKIACAEIAAABIAAACIgCgHIgIgBQgSG1hZOIIAJACQgNA1gGAtIgQBsQgJA/gRAGIgJABQgaAAhTgUg");
	this.shape_4.setTransform(24,86.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,47,174.8);


(lib.HAND_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(2,1,1).p("AgMnQIglArIhaBmQhEA5gRCLQgRCKgOBsQABAKACAIQAIAeATgFQAKgDAPgOQAtguA5jVQARCGgKBXQgLBQgvCrQgQAsAQAUQAYARArg7QAGgJAHgLQAEgGADgGAAtFdQgUAogdAqQgdAngdgGQgegKAThDQAEgQAHgTQAMgVAKgWQAEgKAFgKQAlhcAKhmAAtFdQghBRAgAFQAgABAdgzQAAgBABgCQACgDABgDQAFgIAEgJAD2nKIAKHzQgDCIg/B9QgYAzgcAGQgKADgKgDABvBKQgBCPhBCEADLAvQgLCghKCY");
	this.shape_3.setTransform(25.6,51.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C2894C").s().p("Ag0FuIAMgjQALgVAKgWIAJgUQAmhcAKhmQAkB0hNCGQgtBRAHAmQgdgKAShDgABCFIQBCiEABiPQAxBahWC6QgZA0gGAhQgfgFAghRgACMFSQBJiYAMigQASBSgPBCQgQBDg1BhIgJABQgFAAgFgBgAjmB4IgEgSIAgj2QARiLBEg5IBahmIhHCcQgZAngPA1IgOA+QgfCGgVCPIgFABQgOAAgHgag");
	this.shape_4.setTransform(23.5,54);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DEB180").s().p("AhNHqQgIgmAuhRQBMiGgkh0QgJBmgmBcIgJAUQgKAWgMAVIgHAMIgNAUQgrA7gYgRQgQgUAQgsQAvirALhQQAKhXgRiGQg5DVgtAuQgPAOgKADQAViPAfiGIAOg+QAOg1AagnIBGicIAlgrQA0hBBLAQQBLAQA4AnIAKHzQgDCIg/B9QgYAzgcAGQA1hhAPhDQAQhCgThSQgLCghKCYIgJARIgDAGIgBADQgdAzgggBQAFghAag0QBVi6gxhaQgBCPhBCEQgUAogdAqQgZAigaAAIgHgBg");
	this.shape_5.setTransform(27.1,49.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0.2,53.3,99.3);


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


(lib.Thalay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Anim-01-Lip Sync-Setup_V2.psd
	this.instance = new lib.Lipy("single",0);
	this.instance.parent = this;
	this.instance.setTransform(1249,197);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({startPosition:31},0).wait(2).to({startPosition:41},0).wait(3).to({startPosition:36},0).wait(1).to({startPosition:5},0).wait(2).to({startPosition:31},0).wait(5).to({startPosition:5},0).wait(8).to({startPosition:0},0).wait(11).to({startPosition:10},0).wait(1).to({startPosition:41},0).wait(2).to({startPosition:36},0).wait(3).to({startPosition:5},0).wait(2).to({startPosition:31},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:31},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:16},0).wait(3).to({startPosition:36},0).wait(4).to({startPosition:0},0).wait(14).to({startPosition:10},0).wait(2).to({startPosition:31},0).wait(2).to({startPosition:36},0).wait(3).to({startPosition:41},0).wait(2).to({startPosition:31},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:5},0).wait(2).to({startPosition:36},0).wait(2).to({startPosition:26},0).wait(2).to({startPosition:41},0).wait(3).to({startPosition:16},0).wait(2).to({startPosition:41},0).wait(2).to({startPosition:36},0).wait(2).to({startPosition:31},0).wait(3).to({startPosition:5},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:31},0).wait(3).to({startPosition:5},0).wait(5).to({startPosition:10},0).wait(2).to({startPosition:36},0).wait(2).to({startPosition:31},0).wait(2).to({startPosition:36},0).wait(2).to({startPosition:10},0).wait(2).to({startPosition:41},0).wait(2).to({startPosition:36},0).wait(2).to({startPosition:5},0).wait(2).to({startPosition:16},0).wait(2).to({startPosition:36},0).wait(2).to({startPosition:21},0).wait(3).to({startPosition:5},0).wait(2).to({startPosition:31},0).wait(2).to({startPosition:36},0).wait(3).to({startPosition:5},0).wait(6).to({startPosition:0},0).wait(11).to({startPosition:36},0).wait(2).to({startPosition:41},0).wait(2).to({startPosition:36},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:5},0).wait(2).to({startPosition:36},0).wait(2).to({startPosition:16},0).wait(3).to({startPosition:36},0).wait(2).to({startPosition:21},0).wait(3).to({startPosition:5},0).wait(2).to({startPosition:21},0).wait(2).to({startPosition:36},0).wait(3).to({startPosition:21},0).wait(2).to({startPosition:31},0).wait(2).to({startPosition:10},0).wait(2).to({startPosition:36},0).wait(2).to({startPosition:5},0).wait(3).to({startPosition:41},0).wait(2).to({startPosition:5},0).wait(3).to({startPosition:16},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:5},0).wait(2).to({startPosition:36},0).wait(2).to({startPosition:31},0).wait(3).to({startPosition:36},0).wait(1).to({startPosition:31},0).wait(2).to({startPosition:36},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:31},0).wait(2).to({startPosition:36},0).wait(2).to({startPosition:21},0).wait(2).to({startPosition:31},0).wait(1).to({startPosition:36},0).wait(3).to({startPosition:41},0).wait(2).to({startPosition:5},0).wait(2).to({startPosition:36},0).wait(3).to({startPosition:21},0).wait(2).to({startPosition:41},0).wait(3).to({startPosition:5},0).wait(3).to({startPosition:10},0).wait(2).to({startPosition:41},0).wait(3).to({startPosition:36},0).wait(3).to({startPosition:5},0).wait(3).to({startPosition:16},0).wait(3).to({startPosition:10},0).wait(3).to({startPosition:5},0).wait(4).to({startPosition:36},0).wait(3).to({startPosition:31},0).wait(3).to({startPosition:0},0).wait(28).to({startPosition:5},0).wait(40).to({startPosition:0},0).to({_off:true},68).wait(37));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1224.3,168.2,49.4,55.7);


(lib.Tween7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DEB180").s().p("AiQCWQg+g8gChXQgBhVA8g+QA8g+BXgCQBVgBA9A8QA+A8ADBWQABBWg8A+Qg7A+hXABIgEABQhTAAg9g7g");
	this.shape_3.setTransform(10.2,-36.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// HAND
	this.instance = new lib.HAND("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(6.4,110.6,1,1,0,0,0,39,6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// LEFT ARM
	this.instance_1 = new lib.LEFTARM("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(10.5,-37.5,1,1,0,0,0,22.5,11.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// LEFT SHOULDER
	this.instance_2 = new lib.LEFTSHOULDER("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-7.8,-201.2,1,1,0,0,0,21.4,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.6,-203.9,67.3,407.9);


(lib.Tween6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// HAND
	this.instance = new lib.HAND("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-4.2,111.2,1,1,0,0,180,37,6.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// LEFT ARM
	this.instance_1 = new lib.LEFTARM("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-10.6,-37.8,1,1,0,0,180,22.6,11.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// LEFT SHOULDER
	this.instance_2 = new lib.LEFTSHOULDER("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(8.3,-201.8,1,1,0,0,180,20.7,4.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.7,-204.2,67.5,408.5);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.instance = new lib.HAND_1("synched",0);
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


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.headturncopy("single",0);
	this.instance.parent = this;
	this.instance.setTransform(1736.4,181.6,0.886,0.886,0,0,0,-88.5,0.4);

	this.instance_1 = new lib.headturn("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(1121.8,158.6,0.886,0.886,0,0,0,-88.5,0.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1661.2,y:180.1},2).to({regY:0.5,x:1621.4,y:173.8},1).to({x:1583.6,y:167.2},1).to({regX:-88.4,x:1513.3,y:149},2).to({x:1445,y:154.9},2).to({x:1340.8,y:168.4},3).to({x:1305.5,y:159.8},1).to({x:1279.1,y:157.1},1).to({x:1226.8,y:148.1},1).to({regX:-88.5,x:1201,y:149.5},1).to({x:1178.6,y:153.3},1).to({regY:0.4,x:1136.9,y:160.6},2).to({_off:true},1).wait(35));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:false},0).to({regX:-88.4,scaleX:0.89,scaleY:0.89,rotation:0.8,x:1102.6,y:156,startPosition:1},1).to({regX:-88.5,scaleX:0.9,scaleY:0.9,rotation:2.6,x:1051.1,y:150.5,startPosition:3},2).to({regX:-88.4,scaleX:0.91,scaleY:0.91,rotation:4.3,x:1009.6,y:151.1,startPosition:5},2).to({scaleX:0.92,scaleY:0.92,rotation:5.4,x:1005.4,y:150.3,startPosition:6},1).to({scaleX:0.92,scaleY:0.92,rotation:4.3,x:976.1,y:148.7,startPosition:7},1).to({regX:-88.7,regY:0.3,scaleX:0.94,scaleY:0.94,rotation:0,x:885.5,y:141.7,startPosition:11},4).to({x:854.4,y:142.6,startPosition:14},3).to({regX:-88.6,scaleX:0.95,scaleY:0.95,x:862.8,y:142.2,startPosition:15},1).to({regX:-88.7,regY:0.4,scaleX:0.95,scaleY:0.95,x:862.7,y:141.9,startPosition:16},1).to({scaleX:0.95,scaleY:0.95,x:876.8,y:141.5,startPosition:17},1).to({regX:-88.6,scaleX:0.96,scaleY:0.96,x:890.1,y:141.1,startPosition:18},1).to({scaleX:0.96,scaleY:0.96,x:892.5,y:138.7,startPosition:20},2).to({_off:true},1).wait(14));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ai0HwQgEgCgCgDQgDgEABgFIAAgEIADgFQAHgIAKAEQAJACACAKIAAABQABAFgEAFIAAAAQgFAGgJAAQgEAAgCgCgAi/EvQgGgFAEgHQACgDADgCIADgBIABAAQAIABABAGQACAIgGADQgDACgDAAQgDAAgDgCgAhuCqIgDgFQgCgIAHgIIAAAAQACgCAFgBQAIgBAGAEQAIAGgBAJIgCAEQgEAJgKAAIgCAAQgHAAgFgHgAh0gJIgFgCQgEgCgDgEIAAgBQgCgFABgEQABgFAEgDIAAAAQAEgDAFgBQAMABADAKQABAFgCAGQgCAEgEACQgDACgDAAIgDAAgAgJhQQgKAAgEgKQgDgJAHgHQAFgEAFAAQAGAAAEAFQAHAHgEAJQgEAJgIAAIgBAAgAgnkHIgDgEIAAgEIACgDIADgDIAFgBIABAAQAHAAACAHQACAIgIAEIgFABQgEAAgCgFgABVk3QgFgCgDgFQgDgDAAgGQAAgFAEgEQAEgEAFgBQAFAAAFADQAEACACAGQACAFgDAFQgCAFgFACQgDACgEAAIgDAAgAC0nTQgFAAgEgEQgEgEgBgFQAAgGACgEQADgEAFgCQAFgCAFACQAEACACADQAGAHgEAJQgBADgDACQgEADgEAAIgCAAg");
	this.shape.setTransform(1686.3,334);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#929292").s().p("AgXDrIAVnVIAaAAIgVHVg");
	this.shape_1.setTransform(1671.2,430.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhFDKIARmfIAmgKIAAAAIALgBIBJgKIgWHVQh7gJAGgYg");
	this.shape_2.setTransform(1663.9,430.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AjyKSQAYiIAZh7QAAAEADAEQACAEADABQADACAEAAQAJAAAEgFIABgBQgZB1gXCAIgUAEIgKABIAAAAgAiFhmIABABQACAFAFACIAFABQAEABAEgCQAEgDADgEQACgFgBgFQgEgLgLAAQgFAAgEADQAkh7AuhsIACAEQAEAGAIgDQAHgEgCgHQgCgIgHAAIgBAAIgFABQBDidBbh8QjzGHhzONQASmxBblHgAjBDLQgDABgCAEQgDAGAGAFQAGAFAGgEQAGgEgCgHQgCgHgIAAIAAAAgAitGBQgJgEgHAJIgDAFQAjipAoiQIACAEQAGAIAJgBQAJAAAEgIIACgFQABgJgHgFQgHgFgHABQgFABgCADQCMn7DIjYIAPAyQj6EiibLLQgBgLgKgCgAgYi+QgHAHAEAJQADAKAKAAQAKABAEgKQAEgJgHgHQgEgFgGAAQgGAAgFAEgABSmpQgFABgEAEQgDAEgBAGQAAAFADAEQADAEAGACQAFABAFgDQAFgCACgFQACgFgCgFQgBgFgFgDQgEgDgEAAIgCAAgACspEQgGACgCAEQgDAFABAFQABAGADADQAEAEAGAAQAFAAAEgDQADgCACgDQAEgJgGgHQgCgDgEgCIgFgBIgFABg");
	this.shape_3.setTransform(1686.7,342.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhFDKIARmfIAmgKIAAAAIALgBIBJgKIgWHVQh8gJAHgYg");
	this.shape_4.setTransform(1611.4,452.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AjkI6QgEgCgCgDQgCgFAAgEIABgEIAAAAIACgFQAHgIAKADQAKADABAKIAAABQABAFgDAFIgBAAQgFAGgJAAQgEAAgCgCgAjvF5QgGgFAEgHQACgDADgCIADgBIABAAQAIAAABAHQACAIgGADQgDACgDAAQgDAAgDgCgAieD0IgCgFQgDgIAHgIIAAAAQACgCAFgBQAIgCAGAFQAIAGgBAIIgCAFQgEAJgKAAIgCAAQgHAAgFgHgAikBAIgFgCQgEgCgDgEIAAgBQgCgFABgEQABgFAEgDIABAAQADgEAFAAQAMAAADALQABAFgCAFQgCAFgEACQgDACgDAAIgDAAgAg5gHQgKAAgEgJQgDgJAHgHQAFgEAFAAQAGAAAFAEQAHAIgEAIQgFAKgIAAIgBgBgAhXi9IgDgEIAAgEIACgDIADgDQACgCADAAIABAAQAHAAACAIQACAIgIADIgFABQgEAAgCgEgAAljuQgFgBgDgFQgDgDAAgGIAAgBQAAgEAEgEIABgBQADgDAFgBQAFgBAFADQAEADACAFQACAFgDAFQgCAGgFACQgDACgEAAIgDgBgACEmKQgFAAgEgDQgEgEgBgFQAAgGACgEQADgEAFgCQAFgCAFACQAEABACADQAGAIgEAIQgBAEgDACQgEADgEAAIgCgBgADjobQgGAAgFgGQgEgGACgGQABgLAKgCQALgEAGAJQADAFgBAHQgBAFgFAFQgEAFgFAAIgCgBg");
	this.shape_5.setTransform(1638.6,348.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AkzL5QAXiIAah8QAAAEACAFQACAEAEABQADACAEAAQAIAAAFgGIABAAQgaB0gWCAIgUAFIgKABIAAAAgAjGAAIABABQACAEAFACIAEACQAFABAEgDQAEgCACgFQACgDgBgGQgDgLgMAAQgFABgDADQAkh7AuhsIACADQAEAHAHgDQAIgEgCgIQgCgHgHgBIgBAAQgDAAgCACQBEidBah9QjzGHhzOOQASmyBblHgAkCExQgDACgCAEQgEAGAGAFQAGAFAGgFQAHgDgCgIQgCgHgIAAIAAAAgAjuHoQgKgEgGAIIgDAFQAjioAoiQIACAEQAGAIAIgBQAKAAAEgJIACgEQABgJgHgGQgHgEgIABQgEABgDACQBGj4BwjlIAAABQAAAGADADQADAFAGACQAFAAAFgCQAFgCACgFQACgGgCgEQgBgGgFgCQgFgDgFAAQgEABgEADQB0joChjSIAWArQmEHviTLSQgBgKgKgCgAhZhXQgHAHAEAJQADAKAKgBQAJABAFgKQAEgIgHgHQgEgFgHAAQgFAAgFAEgABrndQgGACgDAEQgCAFABAFQABAFADAEQAEADAFAAQAGABAEgDQADgCACgDQADgJgFgHQgCgDgEgCIgFgBIgFABgADMpxQgLACgBALQgCAGAFAHQAEAFAHAAQAFABAFgEQAGgGAAgFQABgGgDgGQgEgGgHAAIgFABg");
	this.shape_6.setTransform(1640.8,353.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AjkI6QgEgCgCgDQgCgFAAgEIABgEIAAAAIAAgBIACgEQAHgIAKADQAKADABAKIAAABQABAFgDAFIgBAAQgFAGgJAAQgEAAgCgCgAjvF5QgGgFAEgHQACgDADgCIADgBIABAAQAIAAABAHQACAIgGADQgDACgDAAQgDAAgDgCgAieD0IgCgFQgDgIAHgIIAAAAQACgCAFgBQAIgCAGAFQAIAGgBAIIgCAFQgEAJgKAAIgCAAQgHAAgFgHgAikBAIgFgCQgEgCgDgEIAAgBQgCgFABgEQABgFAEgDIABAAQADgEAFAAQAMAAADALQABAFgCAFQgCAFgEACQgDACgDAAIgDAAgAg5gHQgKAAgEgJQgDgJAHgHQAFgEAFAAQAGAAAFAEQAHAIgEAIQgFAKgIAAIgBgBgAhXi9IgDgEIAAgEIACgDIADgDQACgCADAAIABAAQAHAAACAIQACAIgIADIgFABQgEAAgCgEgAAljuQgFgBgDgFQgDgDAAgGIAAgBQABgFADgDIABgBQADgDAFgBQAFgBAFADQAEADACAFQACAFgDAFQgCAGgFACQgDACgEAAIgDgBgACEmKQgFAAgEgDQgEgEgBgFQAAgGACgEQADgEAFgCQAFgCAFACQAEABACADQAGAIgEAIQgBAEgDACQgEADgEAAIgCgBgADjobQgGAAgFgGQgEgGACgGQABgLAKgCQALgEAGAJQADAFgBAHQgBAFgFAFQgEAFgFAAIgCgBg");
	this.shape_7.setTransform(1599.1,343.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AkzL5QAXiIAah8QAAAEADAFQABAEAEABQADACADAAQAKAAAEgGIABAAQgaB0gWCAIgUAFIgKABIAAAAgAjGAAIAAABQADAEAFACIAEACQAFABAEgDQAEgCACgFQACgDgBgGQgDgLgMAAQgFABgDADQAjh7AvhsIACADQAEAHAHgDQAIgEgCgIQgCgHgHgBIgBAAQgDAAgCACQBEidBah9QjzGHhzOOQASmyBblHgAkCExQgDACgCAEQgDAGAFAFQAHAFAFgFQAHgDgCgIQgCgHgIAAIAAAAgAjuHoQgKgEgGAIIgCAEQAiioAoiPIACAEQAGAIAJgBQAJAAAEgJIACgEQABgJgHgGQgHgEgIABQgFABgCACQBGj3BwjlQAAAGADADQADAFAGACQAFAAAEgCQAFgCADgFQACgGgCgEQgCgGgEgCQgFgDgFAAQgFABgDADQBzjnCijTIAWArQmEHviTLSQgBgKgKgCgAhZhXQgHAHAEAJQADAKAKgBQAJABAFgKQAEgIgHgHQgEgFgHAAQgFAAgFAEgABrndQgGACgDAEQgCAFABAFQABAFADAEQAEADAFAAQAGABAEgDQADgCABgDQAEgJgFgHQgDgDgEgCIgFgBIgEABgADMpxQgLACgBALQgCAGAFAHQAEAFAGAAQAGABAFgEQAGgGAAgFQABgGgDgGQgEgGgHAAIgFABg");
	this.shape_8.setTransform(1601.3,349.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#929292").s().p("AgeDqIAinUIAbABIgiHUg");
	this.shape_9.setTransform(1534.4,436);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhLDHIAdmfIAngJIAAAAIAJgBIBKgIIgjHVQh8gNAIgXg");
	this.shape_10.setTransform(1527.2,436);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("Aj4IyQgEgBgCgEQgCgEAAgEIABgEIABgBIABgDIABgBQAHgJAJAEQAKADABALIAAAAQABAGgDAEIgBABQgFAFgJAAQgEgBgCgCgAj9FyQgGgGAEgGQACgDADgCIADgBIABAAQAIABABAHQACAHgGADQgDACgDAAQgDAAgDgCgAipDvIgBgFQgDgIAHgHIABAAQACgDAEgBQAIgBAGAFQAHAGgBAIIgCAFQgEAJgKgBIgBABQgHAAgGgIgAipA7IgFgCQgEgCgCgEIgBgCQgBgEABgFQABgEAEgDIABAAQADgEAFAAQALABADALQABAFgCAFQgCAEgEADQgDACgCAAIgEgBgAg8gIQgKgBgEgJQgDgJAHgHQAFgEAGAAQAGAAAEAFQAIAIgFAIQgEAJgIAAIgCAAgAhVi/IgCgEIAAgEIABgEQABAAAAAAQAAgBABAAQAAgBABAAQAAAAABgBQACgBADAAIABAAQAHAAABAIQACAIgIADIgEABQgEAAgDgEgAApjtQgFgBgDgFQgDgDAAgGIABgBQAAgFADgDIABgBQAEgDAEgBQAFAAAFADQAFADABAFQACAFgDAFQgCAFgFACQgDACgDAAIgEgBgACNmGQgGAAgEgDQgDgEgBgGQAAgFACgFQADgDAGgCQAFgCAFACQAEACABADQAGAHgEAJQgCADgDACQgDADgEAAIgCgBgADwoUQgGAAgFgGQgDgGABgHQACgKAKgCQALgEAFAKQADAFgBAGQgBAGgFAFQgEAEgFAAIgCgBg");
	this.shape_11.setTransform(1557.7,332.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AkQHtQAAAEACAFQACAEADABQADACAEABQAJAAAEgGIABAAQgcBzgbCAIgUAEIgKABQAbiIAeh7gAjFgFIABACQACADAEACIAFACQAFABAEgCQADgDADgDQACgGgBgEQgDgLgLgBQgFAAgEAEQAnh7AyhrIACAFQADAFAIgCQAIgEgCgHQgBgIgIAAIgBAAQgCAAgCABQBIibBeh6Qj+GAiPOKQAfmxBllEgAkKEqQgEABgCAEQgDAGAGAFQAFAFAHgEQAGgDgCgIQgBgGgJgBIAAAAgAj8HgQgJgEgHAIIgBABQAmilAtiNIABAFQAGAIAIgBQAJABAFgJIACgFQABgJgHgFQgGgFgIABQgFABgCACQBNj2B3jgQAAAFACAEQADAEAGACQAGABAEgCQAFgCACgFQACgFgBgFQgCgFgEgDQgFgDgFAAQgFAAgDAEQB6jlCojMIAVAqQmTHkioLNQgBgKgKgDgAhWhaQgHAHADAJQADAKAKAAQAKABAFgJQAEgIgHgJQgFgEgGAAIgBAAQgFAAgEADgAB5nZQgFABgDAEQgCAEAAAGQAAAFAEAEQAEAEAFAAQAGABAEgDQADgCACgDQAEgJgGgIQgBgDgFgBIgFgBIgFABgADfprQgKADgCAKQgCAHAEAFQAEAHAHAAQAGABAFgEQAFgGABgFQABgHgDgFQgEgGgHAAIgFAAg");
	this.shape_12.setTransform(1559.4,338.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("Aj4IyQgEgBgCgEQgCgEAAgEIABgEIABgBIABgDIAAgBIABAAQAHgJAJAEQAKADABALIAAAAQABAGgDAEIgBABQgFAFgJAAQgEgBgCgCgAj9FyQgGgGAEgGQACgDADgCIADgBIABAAQAIABABAHQACAHgGADQgDACgDAAQgDAAgDgCgAipDvIgBgFQgDgIAHgHIABAAQACgDAEgBQAIgBAGAFQAHAGgBAIIgCAFQgEAJgKgBIgBABQgHAAgGgIgAipA7IgFgCQgEgCgCgEIgBgCQgBgEABgFQABgEAEgDIABAAQADgEAFAAQALABADALQABAFgCAFQgCAEgEADQgDACgCAAIgEgBgAg8gIQgKgBgEgJQgDgJAHgHQAFgEAGAAQAGAAAEAFQAIAIgFAIQgEAJgIAAIgCAAgAhVi/IgCgEIAAgEIABgEQABAAAAAAQAAgBABAAQAAgBABAAQAAAAABgBQACgBADAAIABAAQAHAAABAIQACAIgIADIgEABQgEAAgDgEgAApjtQgFgBgDgFQgDgDAAgGIABgBQAAgFADgDIABgBQAEgDAEgBQAFAAAFADQAFADABAFQACAFgDAFQgCAFgFACQgDACgDAAIgEgBgACNmGQgGAAgEgDQgDgEgBgGQAAgFACgFQADgDAGgCQAFgCAFACQAEACABADQAGAHgEAJQgCADgDACQgDADgEAAIgCgBgADwoUQgGAAgFgGQgDgGABgHQACgKAKgCQALgEAFAKQADAFgBAGQgBAGgFAFQgEAEgFAAIgCgBg");
	this.shape_13.setTransform(1525.2,332.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AkQHtQAAAEACAFQACAEADABQADACAEABQAJAAAEgGIABAAQgcBzgbCAIgTAEIgLABQAbiIAeh7gAjFgFIAAACQADADAEACIAFACQAEABAFgCQAEgDACgDQACgGgBgEQgDgLgLgBQgFAAgEAEQAnh7AyhrIACAFQADAFAIgCQAIgEgCgHQgBgIgIAAIAAAAQgDAAgDABQBJibBeh6Qj+GAiPOKQAemxBmlEgAkKEqQgDABgDAEQgDAGAFAFQAGAFAHgEQAGgDgCgIQgBgGgJgBIAAAAgAj8HgQgJgEgHAIIgBABQAnilAsiNIABAFQAGAIAIgBQAKABAEgJIACgFQABgJgHgFQgHgFgHABQgFABgCACQBNj2B3jgQgBAFADAEQADAEAGACQAGABAEgCQAFgCACgFQADgFgCgFQgCgFgEgDQgFgDgFAAQgEAAgEAEQB7jlCnjMIAVAqQmTHkioLNQgBgKgKgDgAhWhaQgHAHADAJQADAKALAAQAJABAEgJQAFgIgHgJQgFgEgGAAIgBAAQgFAAgEADgAB6nZQgGABgDAEQgDAEABAGQABAFADAEQAEAEAFAAQAGABAEgDQADgCACgDQAEgJgGgIQgCgDgEgBIgFgBIgEABgADfprQgKADgCAKQgCAHAEAFQAEAHAHAAQAGABAFgEQAFgGABgFQABgHgDgFQgEgGgHAAIgFAAg");
	this.shape_14.setTransform(1526.9,338.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhGDKIATmfIAmgKIAAAAIALgCIBJgJIgYHVQh8gJAHgYg");
	this.shape_15.setTransform(1465.7,429.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#929292").s().p("AgYDrIAXnVIAaAAIgXHVg");
	this.shape_16.setTransform(1472.9,429.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AjnI4QgEgBgCgDQgDgFABgEIABgEIABgBIAAgDIAAAAIABgBQAHgJAJAEQAKADACAKIAAABQAAAFgDAFIgBAAQgEAGgJAAQgEgBgCgCgAjxF5QgGgGADgGQACgDADgCIAEgBIAAAAQAIAAACAHQACAIgGADQgDACgDAAQgDAAgDgCgAigD0IgCgFQgDgJAHgHIABAAQACgCAEgBQAIgCAGAFQAHAGAAAIIgCAFQgFAJgJAAIgCAAQgHAAgFgHgAilA/IgFgBQgEgCgDgEIAAgCQgCgEABgFQABgEAEgDIABAAQADgEAFAAQALAAAEALQABAFgCAFQgDAFgDACQgDACgCAAIgEgBgAg6gGQgKgBgEgJQgDgJAHgHQAFgEAFAAQAGAAAFAEQAHAIgEAJQgEAJgJAAIgBAAgAhXi9IgDgEIAAgEIABgDQABgBAAAAQAAAAABgBQAAAAABAAQAAgBABAAQACgCADAAIABAAQAHAAABAIQADAIgIADIgFABQgEAAgCgEgAAljuQgFgBgDgEQgDgEAAgFIABgBQAAgFADgEIABAAQADgEAFgBQAFAAAFADQAEADACAFQACAFgDAFQgCAFgFACQgCACgDAAIgFgBgACFmJQgFAAgFgDQgDgEgBgGQAAgFACgFQADgDAFgDQAFgCAFADQAEABACADQAGAHgEAJIgEAGQgDACgEAAIgDAAgADloaQgHABgEgHQgEgGABgGQACgLAKgCQALgEAFAJQADAFAAAHQgBAFgFAGQgEAEgFAAIgCgBg");
	this.shape_17.setTransform(1493.4,325.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AkEH0QAAAEACAFQACADAEABQADACAEABQAJAAAEgGIABgBQgaB1gXCAIgUAEIgKACQAYiJAah7gAjGAAIABAAQACAFAFACIAFABQAEACAEgDQAEgDACgEQACgEgBgGQgDgKgLgBQgFAAgEAEQAkh7AvhsIACAEQAEAGAHgDQAIgEgCgHQgCgIgHAAIgBAAQgDAAgCACQBFidBbh9Qj1GGh3OOQATmxBdlHgAkDEwQgDACgCAEQgEAGAGAFQAGAEAGgEQAHgCgDgIQgBgHgIgBIgBAAgAjwHmQgJgEgIAJIAAAAQAiilApiOIABAEQAGAJAIgCQAKAAAEgIIACgFQABgJgHgFQgHgFgHACQgFAAgCADQBGj4ByjkQgBAGADADQADAFAGABQAGABAEgCQAFgCACgFQACgFgBgFQgCgFgFgDQgFgDgFAAQgEABgEADQB1joCijRIAWArQmGHuiWLRQgBgKgKgDgAhZhXQgHAHAEAIQADAKAKAAQAKABAEgKQAFgIgIgIQgEgEgGAAIgBAAQgFAAgFAEgAB6nDIAFgFQAEgJgHgHQgBgDgEgCQgFgCgFACQgGACgDAEQgCAFABAFQAAAGAEADQAEAEAGgBQAFACAEgEgADbpUQAFgGABgFQABgHgDgFQgGgJgKAEQgKACgCAKQgBAHADAGQAFAHAGgBQAGABAFgEg");
	this.shape_18.setTransform(1495.4,331.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AkEH0QAAAEACAEQACAEAEABQADACAEABQAJgBAEgFIABgBQgaB1gXCAIgUAEIgKABQAYiIAah7gAjGAAIABABQACAEAFACIAFABQAEABAEgCQAEgCACgFQACgFgBgFQgDgKgLgBQgFAAgEAFQAkh8AvhsIACAEQAEAGAHgDQAIgDgCgIQgCgIgHAAIgBAAQgDAAgCACQBFieBbh7Qj1GFh3ONQATmxBdlGgAkDEwQgDADgCADQgEAGAGAFQAGAFAGgFQAHgDgDgHQgBgHgIgBIgBAAgAjwHmQgJgEgIAJIAAAAQAiikApiQIABAGQAGAHAIgBQAKABAEgJIACgFQABgIgHgGQgHgFgHACQgFABgCACQBGj4ByjkQgBAGADADQADAFAGABQAGACAEgDQAFgCACgFQACgFgBgFQgCgGgFgDQgFgCgFAAQgEABgEADQB1jnCijSIAWArQmGHuiWLRQgBgLgKgCgAhZhXQgHAHAEAJQADAJAKABQAKAAAEgJQAFgJgIgIQgEgEgGAAIgBAAQgFAAgFAEgAB6nDIAFgFQAEgJgHgHQgBgDgEgBQgFgDgFACQgGACgDAEQgCAEABAGQAAAFAEAEQAEAEAGAAQAFABAEgEgADbpVQAFgFABgGQABgGgDgFQgGgJgKADQgKADgCALQgBAGADAGQAFAHAGgBQAGABAFgFg");
	this.shape_19.setTransform(1463.9,328.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AlMMDQAXiIAbh7QAAAEACAEQACAEAEABQADACAEAAQAJAAADgFIABgBQgaB1gXCAIgTAEIgKABIAAAAgAjcALIAAABQADAFAEACIAGABQAEABAEgCQADgDADgFQACgFgBgFQgEgJgKgBQgGAAgDAEQAjh7AwhsIACAEQADAGAIgDQAIgEgDgHQgBgIgHAAIgBAAQgDAAgCABQEenohaDRQkJF6iHOXQATmxBdlHgAkaE8QgDACgBAEQgEAGAGAFQAGAEAGgEQAGgDgCgHQgCgHgHgBIgBAAgAkHHyQgIgEgIAJIgBAAQAjilApiPIABAFQAGAIAIgBQAJAAAFgIIACgFQAAgJgGgFQgHgFgIABQgEABgCADQBGj4BzjkQgBAGADADQADAFAFABQAGABADgCQAGgCABgGQADgFgCgEQgCgGgEgDQgFgDgEABQgFABgDADQBzjoCjjRIBDgXQm0IwiVLRQgCgLgKgCgAhvhMQgHAIAEAIQADAKAKAAQAKABAEgKQAFgIgIgIQgEgFgHABIgBAAQgFAAgEADgABkm3IAEgFQAFgJgHgHQgBgDgFgCQgEgCgGACQgFACgDAEQgCAEAAAGQABAFAEAEQAEAEAGgBQAFABAEgDgADFpJQAFgFABgGQAAgGgDgFQgFgJgLADQgKADgBAKQgCAHAEAGQAEAGAHAAQAGABAFgFg");
	this.shape_20.setTransform(1436.2,324.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ag4DSIgGmgIAlgNIAAABIALgDIBIgOIAFHXQh9gCAGgYg");
	this.shape_21.setTransform(1374.8,426.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#929292").s().p("AgPjqIAagBIAFHWIgaABg");
	this.shape_22.setTransform(1382.3,426.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("Ai/JGQgEgBgCgDQgDgFAAgEIABgEIABgBIAAgDIAAAAIABgBQAHgJAJADQAKACACAKIAAABQABAFgDAFIgBABQgDAFgJABQgEAAgDgCgAjUGHQgHgFADgGIAFgGIADgBIABAAQAIAAACAHQADAHgGAEQgDACgEAAQgCAAgDgCgAiLD+IgCgFQgEgIAHgIIAAAAQACgCAFgBQAHgCAHAEQAHAFAAAIIgCAFQgEAJgJABIgDAAQgGAAgFgGgAibBKIgFgBQgFgCgCgEIgBgBQgCgFABgEQABgFAEgDIAAAAQADgEAFgBQALAAAFAKQABAFgCAFQgCAGgDACQgDACgDAAIgDAAgAhDgLQgEgJAGgHQAFgFAGAAQAGAAAEAEQAIAHgEAJQgEAKgJAAIgBAAQgJAAgEgJgAhdi2IgDgEIgBgEIACgEQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAIABAAQAHAAACAIQADAHgIAEIgFABQgEAAgCgDgAAcjvQgFgBgDgEQgEgDABgGIAAgBQAAgFACgDIABgBQAEgEAEgBQAFgBAFADQAFADACAFQACAEgCAGQgCAFgFADQgCABgEAAIgEAAgABzmQQgFABgFgDQgEgEgBgFQgBgGACgEQADgEAFgDQAFgCAFACQAEABACADQAHAHgEAJIgEAGQgDACgEAAIgCAAgADJomQgGABgFgGQgEgGABgHQABgKAKgDQAKgEAGAIQAEAFAAAHQgBAFgFAGQgEAEgGAAIgBAAg");
	this.shape_23.setTransform(1395.8,321.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("AjaAYIAAACQADAEAFACIAFAAQAEACAEgDQADgDADgFQABgFgBgFQgEgKgLAAQgFAAgDAEQAch8AohvIACAEQAEAGAIgDQAHgEgDgIQgCgIgHABIgBAAQAAAAgBAAQgBAAAAAAQgBABAAAAQgBAAAAABQEAn5hNDWQjyGJhQOeQAQiKATh8QAAAEACAEQACAEAFAAQACACAEAAQAJAAAEgGIABAAQgTB2gPCBIgUAFIgKACQgHmxBKlNgAkGFNIgEAGQgDAGAGAFQAGAEAGgFQAGgDgDgHQgCgHgIAAIAAAAgAjoIBQgJgEgHAKIAAAAQAYimAgiSIACAFQAGAIAIgCQAKAAADgJIACgFQAAgIgHgFQgHgFgHACQgEABgCADQA2j8BljqQAAAFADAEQADAEAGABQAGABAEgDQAFgCABgGQADgFgCgEQgCgGgFgDQgFgCgFABQgFABgDAEQBljvCWjaIBBgcQmRJJhpLZQgCgKgLgCgAhphJQgFAAgFAEQgHAIAEAIQAEAKAKgBQAKAAAEgJQAEgJgIgIQgEgDgFAAIgCAAgABJm8IAFgFQADgKgHgGQgCgDgEgCQgEgCgFADQgFACgDAEQgCAFABAFQABAGADADQAFAEAGgBQAFABADgEgACipUQAEgFABgGQAAgGgDgFQgGgJgLAEQgJADgCALQAAAGAEAGQAEAGAHAAQAGAAAFgFg");
	this.shape_24.setTransform(1400.9,326);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AhADOIAImgIAmgMIAAABIAKgCIBJgMIgLHXQh9gGAHgYg");
	this.shape_25.setTransform(1343.2,427.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#929292").s().p("AgHjrIAaAAIgLHWIgaABg");
	this.shape_26.setTransform(1350.5,427.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF0000").s().p("AjWI+QgEAAgCgEQgCgEAAgEIABgEIAAgBIABgDIAAgBIABAAQAHgKAJAEQAKADACAKIAAAAQABAGgDAFIgBAAQgEAFgJABQgEgBgDgCgAjlF/QgGgFADgGIAFgGIADgBIABAAQAIABACAHQADAHgHADQgDACgDAAQgDAAgDgCgAiXD4IgCgFQgDgIAHgHIAAAAQACgDAFgBQAHgBAHAEQAHAGgBAIIgCAFQgEAIgJABIgCAAQgHAAgFgHgAigBEQgDAAgCgBQgFgCgDgEIAAgCQgCgEABgFQABgEAEgEIABAAQADgEAFAAQALAAAEALQABAFgCAFQgDAFgDACQgCACgDAAIgDAAgAhGgOQgEgJAHgHQAFgFAGABQAGgBAEAEQAIAIgEAJQgFAJgJAAQgKAAgEgJgAhai6QgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIgBgEIABgEQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABgBQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABAAIABAAQAIABABAHQADAIgIAEIgEABQgFAAgCgEgAAhjuQgFgBgDgEQgDgEAAgGIABAAQAAgGACgDIABAAQAEgEAEgBQAFgBAFADQAFADACAFQACAFgDAFQgCAFgFADQgCABgDAAIgFAAgAB+mMQgGABgFgEQgDgEgBgFQgBgGADgEQADgEAFgCQAFgDAEACQAEACACADQAHAHgEAJIgFAGQgCACgDAAIgDAAgADZofQgHAAgEgGQgEgGABgHQACgKAKgDQAKgDAGAIQADAFAAAHQgBAFgFAGQgFAEgFAAIgBAAg");
	this.shape_27.setTransform(1368,322.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("AkMIHQAAAFACAEQACADAEABQADACAEABQAJgBAEgFIABgBQgXB1gUCAIgUAFIgKABQAViJAXh7gAjbARIAAACQADADAFACQACACADgBQAEACAEgDQADgCADgGQACgEgBgGQgEgJgLAAQgFAAgDADQAgh7AshtQAAAAAAABQAAAAAAABQAAAAABABQAAAAABAAQAEAGAHgDQAIgEgDgHQgBgHgIgBIgBAAQAAAAgBAAQgBAAAAABQgBAAAAAAQgBABAAAAQERnvhUDTQkAGAhvOaQAImwBVlKgAkRFEIgFAGQgDAFAGAGQAGAEAGgEQAHgDgDgIQgCgGgIgBIgBAAgAj5H5QgJgEgHAJIgBABQAeimAliQIACAFQAGAHAIgBQAJAAAEgJIACgEQABgJgHgFQgHgFgHACQgFABgCACQA/j5BtjnQAAAFADAFQADADAFABQAHACADgDQAEgCACgGQADgEgCgFQgCgGgEgDQgFgCgFABQgEAAgEAFQBtjsCdjVIBCgZQmkI6iCLVQgCgKgKgCgAhxhJQgHAHAEAJQAEAKAKAAQAJAAAFgJQAEgJgIgIQgEgEgGABIgBgBQgFAAgFAEgABYm5IAFgFQAEgJgHgHQgCgDgEgCQgEgCgFADQgFACgDADQgDAFABAFQABAGADADQAFAFAGgBQAFABADgEgAC2pNQAFgGABgFQAAgHgDgFQgGgJgKAEQgKADgCAKQgBAGAEAHQAEAGAHgBQAGABAFgEg");
	this.shape_28.setTransform(1372.6,327.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#333333").s().p("AkMIHQAAAFACAEQACADAEABQADACAEABQAJgBAEgFIABgBQgXB1gUCAIgUAFIgKABQAViJAXh7gAjbARIAAACQADADAFACQACACADgBQAEACAEgDQADgCADgGQACgEgBgGQgEgJgLAAQgFAAgDADQAgh7AshtQAAAAAAABQAAAAAAABQABAAAAABQAAAAABAAQAEAGAHgDQAIgEgDgHQgBgHgIgBIgBAAQgBAAAAAAQgBAAAAABQgBAAAAAAQgBABAAAAQERnvhUDTQkAGAhvOaQAImwBVlKgAkRFEIgFAGQgDAFAGAGQAGAEAGgEQAHgDgDgIQgCgGgIgBIgBAAgAj5H5QgJgEgHAJIgBABQAeimAliQIACAFQAGAHAIgBQAJAAAEgJIACgEQABgJgHgFQgHgFgHACQgFABgCACQA/j5BtjnQAAAFADAFQADADAFABQAHACADgDQAEgCACgGQADgEgCgFQgCgGgEgDQgFgCgFABQgEAAgEAFQBtjsCdjVIBCgZQmkI6iCLVQgCgKgKgCgAhxhJQgHAHAEAJQAEAKAKAAQAJAAAFgJQAEgJgIgIQgEgEgGABIgBgBQgFAAgFAEgABYm5IAFgFQAEgJgHgHQgCgDgEgCQgEgCgFADQgFACgDADQgDAFABAFQABAGADADQAFAFAGgBQAFABADgEgAC2pNQAFgGABgFQAAgHgDgFQgGgJgKAEQgKADgCAKQgBAGAEAHQAEAGAHgBQAGABAFgEg");
	this.shape_29.setTransform(1335.8,327.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#333333").s().p("Ak4MLQAViJAXh7QAAAFACAEQACADAEABQADACAEABQAJgBAEgFIABgBQgXB1gUCAIgUAFIgKABIAAAAgAjbARIAAACQADADAFACQACACADgBQAEACAEgDQADgCADgGQACgEgBgGQgEgJgLAAQgFAAgDADQAgh7AshtQAAAAAAABQAAAAAAABQAAAAABABQAAAAABAAQAEAGAHgDQAIgEgDgHQgBgHgIgBIgBAAQAAAAgBAAQgBAAAAABQgBAAAAAAQgBABAAAAQERnvhUDTQkAGAhvOaQAImwBVlKgAkRFEIgFAGQgDAFAGAGQAGAEAGgEQAHgDgDgIQgCgGgIgBIgBAAgAj5H5QgJgEgHAJIgBABQAeimAliQIACAFQAGAHAIgBQAJAAAEgJIACgEQABgJgHgFQgHgFgHACQgFABgCACQA/j5BtjnQAAAFADAFQADADAFABQAHACADgDQAEgCACgGQADgEgCgFQgCgGgEgDQgFgCgFABQgEAAgEAFQBtjsCdjVIBCgZQmkI6iCLVQgCgKgKgCgAhxhJQgHAHAEAJQAEAKAKAAQAJAAAFgJQAEgJgIgIQgEgEgGABIgBgBQgFAAgFAEgABYm5IAFgFQAEgJgHgHQgCgDgEgCQgEgCgFADQgFACgDADQgDAFABAFQABAGADADQAFAFAGgBQAFABADgEgAC2pNQAFgGABgFQAAgHgDgFQgGgJgKAEQgKADgCAKQgBAGAEAHQAEAGAHgBQAGABAFgEg");
	this.shape_30.setTransform(1298.3,327.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("Ag3DSIgJmfIAmgNIAAAAIAKgCIBJgPIAHHXQh8gBAFgZg");
	this.shape_31.setTransform(1239,432.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#929292").s().p("AgQjqIAZgBIAIHWIgaABg");
	this.shape_32.setTransform(1246.4,432);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF0000").s().p("Ai8JGQgEAAgCgDQgDgFAAgEIABgEIABgBIAAgDIAAAAIABgBQAHgKAJAEQAKACACAKIAAABQABAFgCAFIgBABQgEAFgJABQgEgBgDgCgAjSGIQgGgFACgFIAFgHIADgBIABAAQAIABACAGQADAHgGAEQgDACgEAAQgCAAgDgCgAiKD/IgCgFQgEgJAHgHIAAAAQACgDAFgBQAHgCAHAFQAHAFAAAIIgCAFQgEAJgJAAIgDAAQgGAAgFgFgAiaBKIgFAAQgFgCgDgEIAAgCQgCgEABgFQAAgEAEgEIABAAQADgEAFAAQAKgBAFALQABAFgBAFQgDAFgDADQgCACgDAAIgDgBgAhDgLQgFgJAHgHQAFgFAFAAQAGAAAFADQAIAIgEAJQgEAJgJABIgBAAQgJAAgEgJgAhei2QgBgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAIgBgEIACgEIADgDQABgCADAAIABAAQAIAAACAIQACAHgHAEIgEABQgEAAgDgDgAAbjvQgGgBgCgEQgEgEAAgFIABgBQAAgFACgDIABgBQADgEAFgBQAFgBAFACQAFADACAGQACAEgCAFQgCAGgFACQgCACgEAAIgEAAgABxmQQgFABgFgEQgDgDgCgGQgBgFACgFQADgEAFgCQAFgDAFACQAEACACADQAHAGgDAKIgFAFQgDADgDAAIgDAAgAC8osQgEgGAAgHQABgKAKgDQALgEAGAIQADAFAAAGQgBAGgEAGQgFAEgGAAIgBAAQgGAAgEgFg");
	this.shape_33.setTransform(1259.5,326.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#333333").s().p("Aj3IRQAAAEADAFQABADAFAAQACACAEABQAJgBAEgFIABgBQgSB2gPCBIgUAFIgKACQAQiKASh8gAjaAZIABACQACAEAFACIAFAAQAFACADgDQADgDADgFQABgFgBgFQgEgLgLABQgFAAgDAEQAbh8AohvQAAAAAAABQAAAAAAABQABAAAAABQABAAAAABQAEAFAIgDQAHgEgDgHQgCgIgHAAIgBAAQgDAAgCACQD/n5hMDWQjxGKhLOeQgImxBHlNgAkEFOIgEAHQgDAFAGAFQAGAEAGgEQAHgEgEgHQgCgGgIgBIAAAAgAjlICQgJgEgHAKIAAABQAXinAfiRIADAFQAFAHAIgCQAKAAADgJIACgFQAAgIgHgFQgHgFgHACQgEABgCADQA1j9BkjqQAAAFADAEQADAEAGABQAGABADgDQAFgCACgGQACgFgBgEQgCgGgGgDQgFgCgFABQgEABgDAEQBjjvCVjbIBBgcQmOJKhlLaQgCgKgLgCgAhphJQgGAAgEAFQgHAHAEAJQAEAJAKAAQAKgBAEgJQADgJgHgIQgFgDgFAAIgBAAgABHm8IAFgFQADgKgHgGQgCgDgEgCQgEgCgFADQgFACgDAEQgCAFABAFQABAGADADQAFAEAGgBQAFABADgEgACRpvQgKADgBAKQgBAHAEAGQAFAGAGgBQAGAAAFgEQAFgGABgGQAAgGgEgFQgEgGgGAAIgGACg");
	this.shape_34.setTransform(1264.5,331);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("Ag+DPIADmgIAmgMIAAABIALgDIBJgMIgHHXQh9gFAHgYg");
	this.shape_35.setTransform(1209.8,430);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#929292").s().p("AgJjrIAZAAIgGHWIgaABg");
	this.shape_36.setTransform(1217.1,430);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF0000").s().p("AjQJAQgEAAgCgDQgDgFABgEIABgEIAAgBIABgDIAAgBIAAAAQAIgKAJAEQAKADACAKIAAAAQAAAGgCAFIgBAAQgEAFgJABQgEgBgDgCgAjhGCQgFgGACgFIAFgGIADgBIABAAQAIAAACAHQADAHgHADQgDACgDAAQgDAAgDgBgAiUD6IgCgFQgEgIAHgIIABAAQACgCAEgBQAHgCAHAFQAHAFAAAIIgCAFQgEAJgKAAIgCAAQgGAAgFgGgAifBFIgFAAQgFgDgCgEIgBgBQgCgFABgEQABgFAEgDIABAAQADgEAFAAQAKgBAEALQABAFgBAFQgDAGgDACQgCACgDAAIgDgBgAhGgOQgEgIAHgIQAFgEAFAAQAHAAAEADQAIAJgEAJQgEAIgKABQgKAAgEgKgAhci6QAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAgBIgBgEIACgDQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQABgCADAAIABAAQAIAAACAIQACAHgHAEIgEABQgFAAgDgEgAAgjvQgGgBgDgEQgDgEAAgFIABgBQAAgFACgDIABgBQAEgEAEgBQAFAAAFACQAFADACAGQACAEgDAFQgCAGgFACQgCACgDAAIgEgBgAB6mNQgFABgFgEQgDgEgBgFQgBgGACgEQADgEAFgDQAFgCAFACQAEACACADQAGAHgDAJIgFAFQgDADgDAAIgDAAgADKonQgEgGAAgGQACgLAKgCQAKgEAGAJQAEAEgBAHQgBAFgEAGQgGAEgGAAIgBAAQgFAAgEgGg");
	this.shape_37.setTransform(1233.5,325.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#333333").s().p("AkHIKQgBAEADAFQACADAEAAQADACAEABQAJgBAEgFIABAAQgWB0gTCBIgUAFIgKABQAUiJAWh7gAjbATIABABQACAEAFADIAFAAQAEACAEgDQADgCADgGQABgFgBgFQgEgKgKABQgFAAgDADQAeh8ArhuQAAABAAAAQABABAAAAQAAABAAAAQABABAAAAQAEAGAIgDQAHgEgCgHQgCgIgIAAIgBAAQgDAAgBACQENnxhSDTQj9GDhmObQAFmwBRlLgAkOFHIgFAGQgCAFAFAGQAGADAGgEQAHgDgDgHQgCgHgIAAIgBAAgAj0H7QgJgEgIAKIAAAAQAcimAkiQIACAFQAFAHAIgBQAKAAAEgJIACgFQAAgIgHgFQgHgFgHACQgEABgCACQA8j7BrjnQAAAFADAEQADAEAGABQAGACADgDQAFgCABgGQADgFgCgEQgCgGgEgDQgFgCgFAAQgEABgEAEQBrjrCcjXIBBgaQmfI+h7LXQgCgKgKgDgAhyhIQgHAIAEAIQAEAKAKAAQAKgBAEgIQAEgJgIgJQgEgDgHAAIgBAAQgFAAgEAEgABUm6IAFgFQADgJgGgHQgCgDgEgCQgFgCgFACQgFADgDAEQgCAEABAGQABAFADAEQAFAEAFgBQAFABAEgEgACjpqQgKACgCALQAAAGAEAGQAEAHAGgBQAGAAAGgEQAEgGABgFQABgHgEgEQgEgGgGAAIgGABg");
	this.shape_38.setTransform(1238.2,329.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AhDDUIANmvIAmgLIAAAAIAKgCIBKgLIgRHnQh9gHAHgZg");
	this.shape_39.setTransform(1154.3,420.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#929292").s().p("AgEjzIAaAAIgRHnIgaAAg");
	this.shape_40.setTransform(1161.5,420.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF0000").s().p("AjfJQQgEAAgBgEQgDgGAAgEIABgDIABgBIAAgDIAAgBIABAAQAIgKAJAEQAJADACAKIAAABQABAFgDAGIgBAAQgEAFgJAAQgEAAgDgCgAjrGKQgGgGADgFIAFgGIADgBIABAAQAIABABAGQADAIgGADQgDACgDAAQgDAAgDgCgAicD/IgCgFQgDgJAHgHIABAAQACgCAEgBQAHgCAHAFQAHAGgBAIIgCAFQgEAJgJAAIgCAAQgHAAgFgHgAijBEIgFAAQgFgDgCgFIAAgBQgCgFABgEQABgFAEgDIABAAQADgEAFAAQAKgBAEAMQABAFgBAFIgHAIQgCACgDAAIgDgBgAhHgQQgEgJAHgHQAEgFAGAAQAGAAAFAEQAHAJgEAJQgEAJgKAAQgKAAgDgKgAhajCQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIAAgFIABgDQABgBAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQACgCADAAIABAAQAHAAACAIQACAIgHAEIgEABQgFAAgDgEgAAjj3QgGgBgCgEQgEgEABgGIAAAAQAAgGADgDIABAAQAEgFAEgBQAFAAAFACQAFAEACAGQABAEgCAGQgCAFgFACQgCACgDAAIgFgBgACBmZQgFABgFgEQgDgEgBgGQgBgFADgFQADgEAFgCQAFgCAEACQAEABACADQAGAIgDAKIgFAFQgDACgDAAIgDAAgADUo2QgEgGABgHQABgLAKgCQALgEAGAJQADAFAAAHQgBAGgFAGQgGAEgGAAIAAAAQgGAAgEgHg");
	this.shape_41.setTransform(1180.5,312.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#333333").s().p("AkTIWQAAAEADAGQABAEAEgBQADACAEABQAJAAAEgFIABAAQgZB4gVCEIgUAEIgLACQAYiNAYiAgAjbAOIAAACQACAFAFACIAFABQAFACADgDIAHgIQABgFgBgFQgEgLgKABQgFAAgDADQAhiAAthxQAAABAAAAQABABAAAAQAAABAAABQABAAAAABQAEAFAIgDQAHgDgCgIQgCgIgHAAIgBAAQgDAAgCACQEZn+hXDaQkGGLh7O5QAPnABZlVgAkVFMIgFAGQgDAFAGAHQAGADAGgDQAGgDgDgIQgBgHgIgBIgBAAgAj/IHQgJgDgIAKIgBAAQAhirAmiVIACAFQAGAIAIgBQAJgBAEgIIACgFQABgIgHgHQgHgEgHABQgEABgCACQBCkCBwjtQgBAGAEAEQACAEAGABQAGACADgDQAFgCACgGQACgFgBgEQgCgGgFgEQgEgDgFABQgEABgEAEQBwjyChjbIBCgZQmtJJiLLuQgCgLgJgDgAhwhMQgHAHAEAJQADAKAKAAQAKAAAEgJQAEgJgHgJQgFgEgGAAIgBAAQgFAAgEAFgABenHIAFgFQADgKgGgIQgCgDgEgBQgEgCgFACQgFACgDAEQgDAFABAFQABAGADAEQAFAEAFgBQAFABAEgDgACwp8QgKACgBALQgBAGAEAGQAEAIAGgBQAGAAAGgDQAFgHABgFQAAgHgDgFQgEgGgGAAIgHABg");
	this.shape_42.setTransform(1184.9,316.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("Ag2DaIgKmvIAlgNIAAABIAKgDIBJgPIAJHnQh+AAAHgag");
	this.shape_43.setTransform(1138,419.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#929292").s().p("AgRjzIAagBIAJHnIgaACg");
	this.shape_44.setTransform(1145.3,419.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FF0000").s().p("Ai6JbQgFAAgBgDQgDgGAAgEIABgEIAAgBIABgDIAAAAIAAAAQAIgLAJADQAJADACAKIABABQAAAFgCAGIgBAAQgEAGgJAAQgEAAgCgCgAjRGWQgGgGACgFIAFgHIADgBIABAAQAIABACAGQADAIgGADQgDACgEAAIgFgBgAiJEHIgDgEQgEgJAIgIIAAAAQACgCAEgCQAHgBAIAEQAGAFAAAJIgBAFQgEAJgJABIgDAAQgGAAgFgHgAiaBNIgFAAQgFgDgCgFIgBgBQgCgEABgFQAAgFAFgDIAAAAQADgEAFgBQAKgBAFAMQABAFgBAFIgGAIQgCACgDAAIgDAAgAhDgLQgEgJAGgIQAEgFAGAAQAGAAAFADQAIAIgDAKQgEAJgKABIgBAAQgJAAgEgJgAhfi9QAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQgBgBAAAAQAAgBAAAAQAAgBAAAAIACgEIACgDQACgCADAAIABAAQAHAAADAIQACAIgHADIgFABQgEAAgDgDgAAcj4QgHgBgCgEQgEgDAAgGIABgBQgBgFADgEIABAAQADgFAFgBQAFgBAFACQAFAEACAGQACAEgCAGQgCAFgFACQgCACgEAAIgDAAgABnmhQgDgEgCgGQgBgFACgFQADgEAFgDQAFgCAFACQAEABACADQAGAIgCAKIgFAFQgEADgFAAIgCAAQgEAAgEgDgAC7pAQgEgGAAgHQABgLAKgCQALgFAGAJQAEAFgBAHQAAAFgFAHQgFAEgGAAIgCAAQgFAAgEgGg");
	this.shape_45.setTransform(1158.2,311);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#333333").s().p("AjaAZIABACQACAEAFADIAFAAQAFACADgDIAGgIQABgGgBgEQgFgMgKABQgFABgDADQAaiAAohzQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAQAFAFAHgDQAHgDgCgJQgDgHgHAAIgBAAQgDAAgCACQD+oLhLDdQjxGZhJO9QgIm/BGlagAkDFaIgFAGQgCAGAGAGQAGADAGgEQAGgEgDgHQgCgHgIAAIgBAAgAkYMyQAQiNASiCQAAAFADAFQABAEAFAAQACABAEABQAJgBAEgFIABgBQgSB6gOCFIgVAFIgKACIAAAAgAjjIUQgJgEgIALIAAAAQAXitAeiWIADAFQAGAIAIgBQAJgCAEgJIABgEQAAgJgGgGQgIgEgHACQgEACgCABQA1kFBjjzQAAAHAEADQACAEAHABQAGABADgDQAFgCACgFQACgHgCgDQgCgGgFgEQgFgCgFABQgFABgDAEQBjj3CVjiIBBgeQmOJehkL1QgCgKgJgDgAh0hHQgGAJAEAIQAEAKAKgBQAKgBAEgIQADgKgIgIQgFgEgGABQgGAAgEAEgAA4nmQgFADgDAEQgCAFABAFQACAGADAEQAFAEAFgCQAFABAEgEIAFgEQACgLgGgHQgCgDgEgCIgEAAIgGABgACPqEQgKACgBALQAAAGAEAGQAEAIAHgBQAGAAAFgEQAFgHAAgGQABgHgEgEQgEgGgGAAQgDAAgEACg");
	this.shape_46.setTransform(1163.3,315.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgtDeIgdmtIAlgPIAAAAIAKgDIBIgSIAeHnIgjAAQhaAAAFgWg");
	this.shape_47.setTransform(1124.1,421);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#929292").s().p("AgbjyIAagCIAdHmIgaADg");
	this.shape_48.setTransform(1131.4,420.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FF0000").s().p("AicJiQgFABgBgDQgDgGAAgEIAAAAIAAgEIABgBIAAgDIAAAAIAAAAQAHgMAKADQAJADADAKIAAAAQABAGgCAGIgBAAQgEAGgJABQgEgBgCgCgAi8GfQgFgGABgFIAFgHIADgBIABAAQAIAAACAGQAEAIgHADQgDADgDAAIgGgBgAh6ENIgCgEQgFgJAHgIIABAAQABgCAFgCQAHgCAHAEQAHAFAAAJIgBAFQgDAJgJABIgDABQgGAAgGgHgAiYBUQgFgDgCgEIgBgCQgCgEABgFQAAgFAEgDIABAAQACgEAFgBQAKgBAFALQACAFgBAFIgGAIQgDAEgFgBIgCAAIgDAAgAg/gIQgFgJAGgIQAEgGAFAAQAHAAAFADQAIAIgDAKQgDAJgKABIgBAAQgJAAgEgIgAhji4QAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAAAIABgEIADgDQAAgBABAAQAAAAAAgBQABAAABAAQAAAAABgBIABAAQAHAAADAIQADAIgHADIgFACQgEAAgDgDgAAVj5QgHAAgDgEQgDgDAAgGIAAgBQgBgFADgEIABgBQADgFAEgBQAFgBAFACQAGAEACAFQACAEgCAGQgCAGgEACQgCADgEAAIgDgBgABYmlQgDgDgCgGQgBgGACgEQADgFAFgDQAEgCAFABQAEACACACQAHAIgCAKIgFAFQgDAEgFgBIgDABQgEAAgEgDgAClpIQgDgGgBgGQABgLAKgDQAKgFAHAIQAEAFAAAHQgBAGgEAGQgFAFgGAAIgCABQgFAAgFgHg");
	this.shape_49.setTransform(1139.1,311.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#333333").s().p("AjaIuQAAAEAEAGQABADAEgBQADACAEAAQAJAAAEgGIABAAQgOB6gICFIgUAHIgKACQAKiOAMiCgAjVAjIABACQADADAFAEIAFAAQAFABADgEIAGgIQAAgGgBgFQgFgKgLABQgFABgCAEQAUiDAkhzQAAABAAAAQAAAAAAABQABAAAAABQAAAAABABQAEAFAHgEQAIgEgDgHQgDgJgIABIgBAAQAAAAgBAAQgBABAAAAQgBAAAAABQAAAAgBABQDmoXhBDiQjfGigfPAQgcm/A3lcgAjvFkIgFAHQgCAFAGAGQAHAEAFgFQAGgEgEgHQgBgGgJgBIAAAAgAjIIdQgJgDgHAMIgBAAQAQiuAYiXIADAEQAGAIAIgCQAJgCAEgIIABgGQgBgIgGgFQgIgEgHABQgEACgCADQApkJBZj2QAAAGAEAEQADAEAGAAQAGABADgDQAFgCACgGQABgGgBgEQgCgFgGgEQgFgCgFABQgFABgCAFQBYj7CLjpIA/ggQlyJvhEL3QgDgKgJgCgAhphHQgGAAgDAFQgHAJAFAIQAFAKAKgBQAJgCAEgIQADgLgIgHQgFgDgGAAIgBAAgAAnnoQgFADgDAEQgCAFABAFQADAHADADQAFADAFgBQAFAAAEgDIAFgFQACgKgHgIQgCgCgEgCIgDAAIgHABgAB3qLQgKAEAAALQAAAGAEAGQAFAIAGgCQAGgBAGgEQAEgHAAgFQAAgHgEgFQgEgFgFAAQgEAAgEABg");
	this.shape_50.setTransform(1144.4,315.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FF0000").s().p("AicJiQgFABgBgDQgDgFAAgEIAAgBIAAgEIABgBIAAgDIAAAAIAAAAQAHgMAKADQAJADADAKIAAAAQABAGgCAGIgBAAQgEAGgJABQgEgBgCgCgAi8GfQgFgGABgFIAFgHIADgBIABAAQAIAAACAGQAEAIgHADQgDADgDAAIgGgBgAh6ENIgCgEQgFgJAHgIIABAAQABgCAFgCQAHgCAHAEQAHAFAAAJIgBAFQgDAJgJABIgDABQgGAAgGgHgAiYBUQgFgDgCgEIgBgCQgCgEABgFQAAgFAEgDIABAAQACgEAFgBQAKgBAFALQACAFgBAFIgGAIQgDAEgFgBIgCAAIgDAAgAg/gIQgFgJAGgIQAEgGAFAAQAHAAAFADQAIAIgDAKQgDAJgKABIgBAAQgJAAgEgIgAhji4QAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAAAIABgEIADgDQAAgBABAAQAAAAAAgBQABAAABAAQAAAAABgBIABAAQAHAAADAIQADAIgHADIgFACQgEAAgDgDgAAVj5QgHAAgDgEQgDgDAAgGIAAgBQgBgFADgEIABgBQADgFAEgBQAFgBAFACQAGAEACAFQACAEgCAGQgCAGgEACQgCADgEAAIgDgBgABYmlQgDgDgCgGQgBgGACgEQADgFAFgDQAEgCAFABQAEACACACQAHAIgCAKIgFAFQgDAEgFgBIgDABQgEAAgEgDgAClpIQgDgGgBgGQABgLAKgDQAKgFAHAIQAEAFAAAHQgBAGgEAGQgFAFgGAAIgCABQgFAAgFgHg");
	this.shape_51.setTransform(1116.6,326.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#333333").s().p("AjaIuQAAAEAEAFQABAEAEgBQADACAEAAQAJgBAEgFIABgBQgOB6gICGIgUAGIgKADQAKiOAMiCgAjVAjIABABQADAFAFACIAFAAQAFACADgEIAGgIQAAgGgBgEQgFgMgLACQgFABgCADQAUiBAkh0QAAAAAAABQAAAAAAABQABAAAAABQAAAAABAAQAEAGAHgEQAIgDgDgJQgDgHgIAAIgBAAQAAAAgBAAQgBABAAAAQgBAAAAABQAAAAgBABQDmoWhBDgQjfGigfPBQgcm/A3lcgAjvFkIgFAIQgCAFAGAGQAHADAFgFQAGgDgEgIQgBgGgJAAIAAAAgAjIIdQgJgDgHALIgBAAQAQitAYiYIADAFQAGAIAIgCQAJgBAEgKIABgEQgBgJgGgGQgIgDgHACQgEABgCACQApkHBZj2QAAAFAEAEQADADAGABQAGABADgDQAFgCACgGQABgGgBgEQgCgFgGgEQgFgCgFABQgFABgCAFQBYj8CLjoIA/ggQlyJvhEL4QgDgLgJgCgAhphHQgGAAgDAGQgHAIAFAJQAFAJAKgBQAJgBAEgJQADgLgIgHQgFgDgGAAIgBAAgAAnnoQgFADgDAFQgCAEABAGQADAFADAEQAFAEAFgCQAFABAEgEIAFgGQACgJgHgIQgCgCgEgCIgDAAIgHABgAB3qKQgKACAAAMQAAAGAEAGQAFAHAGgBQAGgBAGgEQAEgGAAgGQAAgHgEgFQgEgFgFAAQgEAAgEACg");
	this.shape_52.setTransform(1121.9,330.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#333333").s().p("AjaIvQAAAEAEAEQABAEAEgBQADACAEAAQAJgBAEgFIABgBQgOB6gICGIgUAGIgKADQAKiOAMiBgAjVAjIABABQADAFAFACIAFAAQAFACADgEIAGgIQAAgGgBgEQgFgMgLACQgFABgCADQAUiBAkh0QAAAAAAABQAAAAAAABQABAAAAABQAAAAABAAQAEAGAHgEQAIgDgDgJQgDgHgIAAIgBAAQAAAAgBAAQgBABAAAAQgBAAAAABQAAAAgBABQDmoWhBDgQjfGigfPBQgcm/A3lcgAjvFkIgFAIQgCAFAGAGQAHADAFgFQAGgDgEgIQgBgGgJAAIAAAAgAjIIdQgJgDgHALIgBAAQAQitAYiYIADAFQAGAIAIgCQAJgBAEgKIABgEQgBgJgGgGQgIgDgHACQgEABgCACQApkHBZj2QAAAFAEAEQADADAGABQAGABADgDQAFgCACgGQABgGgBgEQgCgFgGgEQgFgCgFABQgFABgCAFQBYj8CLjoIA/ggQlyJvhEL4QgDgLgJgCgAhphHQgGAAgDAGQgHAIAFAJQAFAJAKgBQAJgBAEgJQADgLgIgHQgFgDgGAAIgBAAgAAnnoQgFADgDAFQgCAEABAGQADAFADAEQAFAEAFgCQAFABAEgEIAFgGQACgJgHgIQgCgCgEgCIgDAAIgHABgAB3qKQgKACAAAMQAAAGAEAGQAFAHAGgBQAGgBAGgEQAEgGAAgGQAAgHgEgFQgEgFgFAAQgEAAgEACg");
	this.shape_53.setTransform(1097.9,339.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgtDeIgdmtIAlgPIAAAAIBSgVIAeHnIgjAAQhaAAAFgWg");
	this.shape_54.setTransform(1058.1,445);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FF0000").s().p("Ai8IBQgFgGABgFIAFgHIADgBIABAAQAIAAACAHQAEAHgHAEQgDADgDAAIgGgCgAh6FwIgCgFQgFgIAHgJIABAAQABgCAFgCQAHgBAHADQAHAGAAAIIgBAFQgDAJgJACIgDAAQgGAAgGgGgAiYC2QgFgDgCgEIgBgBQgCgEABgFQAAgFAEgEIABAAQACgDAFgBQAKgCAFALQACAFgBAGIgGAIQgDADgFgBIgCABIgDgBgAg/BZQgFgJAGgIQAEgFAFAAQAHgBAFAEQAIAHgDALQgDAIgKACIgBAAQgJAAgEgJgAhjhWQAAAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAAAAAgBIABgDIADgEQAAAAABgBQAAAAAAAAQABgBABAAQAAAAABAAIABAAQAHgBADAIQADAIgHAEIgFABQgEAAgDgDgAAViWQgHgBgDgDQgDgEAAgGIAAAAQgBgGADgDIABgBQADgFAEgBQAFgBAFACQAGAEACAFQACAEgCAGQgCAGgEACQgCACgEAAIgDAAgABYlCQgDgEgCgGQgBgFACgFQADgEAFgDQAEgCAFABQAEABACADQAHAHgCAKIgFAGQgDADgFAAIgDAAQgEAAgEgCgAClnlQgDgGgBgHQABgLAKgDQAKgFAHAJQAEAFAAAHQgBAFgEAHQgFAEgGABIgCAAQgFAAgFgGg");
	this.shape_55.setTransform(1073.1,325.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#333333").s().p("AjVAjIABABQADAFAFACIAFAAQAFACADgEIAGgIQAAgGgBgEQgFgMgLACQgFABgCADQAUiBAkh0QAAAAAAABQAAAAAAABQABAAAAABQAAAAABAAQAEAGAHgEQAIgDgDgJQgDgHgIAAIgBAAQAAAAgBAAQgBABAAAAQgBAAAAABQAAAAgBABQDmoWhBDgQjfGigfPBQgcm/A3lcgAjvFkIgFAIQgCAFAGAGQAHADAFgFQAGgDgEgIQgBgGgJAAIAAAAgAjIIdQgJgDgHALIgBAAQAQitAYiYIADAFQAGAIAIgCQAJgBAEgKIABgEQgBgJgGgGQgIgDgHACQgEABgCACQApkHBZj2QAAAFAEAEQADADAGABQAGABADgDQAFgCACgGQABgGgBgEQgCgFgGgEQgFgCgFABQgFABgCAFQBYj8CLjoIA/ggQlyJvhEL4QgDgLgJgCgAhphHQgGAAgDAGQgHAIAFAJQAFAJAKgBQAJgBAEgJQADgLgIgHQgFgDgGAAIgBAAgAAnnoQgFADgDAFQgCAEABAGQADAFADAEQAFAEAFgCQAFABAEgEIAFgGQACgJgHgIQgCgCgEgCIgDAAIgHABgAB3qKQgKACAAAMQAAAGAEAGQAFAHAGgBQAGgBAGgEQAEgGAAgGQAAgHgEgFQgEgFgFAAQgEAAgEACg");
	this.shape_56.setTransform(1078.4,339.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#F40202").ss(2,1,1).p("AD8n9QAAAGgFAFQgEAEgHAAQgGAAgFgEQgFgFAAgGQAAgHAFgEQAFgFAGAAQAHAAAEAFQAFAEAAAHgAAmnYQAAAFgEADQgDAEgFAAQgFAAgDgEQgDgDAAgFQAAgFADgDQADgDAFAAQAFAAADADQAEADAAAFgABPkDQAAAGgFAEQgEAFgGAAQgGAAgEgFQgEgEAAgGQAAgGAEgEQAEgEAGAAQAGAAAEAEQAFAEAAAGgAhiieQAAAGgEAEQgFAEgFAAQgFAAgFgEQgDgEAAgGQAAgFADgEQAFgEAFAAQAFAAAFAEQAEAEAAAFgAhSBgQAAAHgFAFQgFAFgHAAQgHAAgFgFQgEgFAAgHQAAgHAEgFQAFgEAHAAQAHAAAFAEQAFAFAAAHgAjjD+QAAAFgDAEQgDADgFAAQgFAAgEgDQgDgEAAgFQAAgFADgDQAEgEAFAAQAFAAADAEQADADAAAFgAjYH9QAAAHgFAFQgEAFgHAAQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgEAHAAQAHAAAEAEQAFAFAAAHg");
	this.shape_57.setTransform(1033.8,321.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FF0000").s().p("Aj4IJQgEgFAAgHQAAgHAEgFQAFgEAHAAQAHAAAFAEQAFAFAAAHQAAAHgFAFQgFAFgHAAQgHAAgFgFgAj6EHQgEgEAAgFQAAgFAEgDQADgEAFAAQAFAAAEAEQADADAAAFQAAAFgDAEQgEADgFAAQgFAAgDgDgAhyBsQgFgFAAgHQAAgHAFgFQAFgEAHAAQAHAAAEAEQAFAFAAAHQAAAHgFAFQgEAFgHAAQgHAAgFgFgAh9iUQgEgEAAgGQAAgFAEgEQAEgEAGAAQAFAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgFAAQgGAAgEgEgADcjyQgLgDgFgKQgEgHAAgHQAAgFABgEQACgNAKgIQAIgJALABIACAAQAKAAAHALQAGAKgDAOQgDANgKAKQgKAHgKAAIgBAAgADxkDQAHADACgJQgEAFgEgDQgFgDgBgEQABgDAEgBIAHgHIAFgHQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBABQgDADgDAEIgHAHIgFgLQgEgHgGADQgNADADAOIAAACQAJALANgLQACAGAGADgAAyj5QgEgEAAgGQAAgGAEgEQAFgEAGAAQAGAAAEAEQAEAEAAAGQAAAGgEAEQgEAFgGAAQgGAAgFgFgADWkPQgDgJAIgEQAHgCADAIIAEAIIgIAFIgEAAQgFAAgCgGgAAOnQQgDgDAAgFQAAgFADgDQAEgDAFAAQAFAAADADQADADAAAFQAAAFgDADQgDAEgFAAQgFAAgEgEgADenyQgFgFAAgGQAAgHAFgEQAEgFAHAAQAGAAAFAFQAEAEAAAHQAAAGgEAFQgFAEgGAAQgHAAgEgEg");
	this.shape_58.setTransform(1034.1,321.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#1F1F1F").s().p("AldMYQDrw8G3mEIAZAwQmIEmkMRtIgBAFgAkIHWQgFAFAAAHQAAAHAFAEQAFAFAHAAQAHAAAEgFQAFgEAAgHQAAgHgFgFQgEgFgHAAQgHAAgFAFgAiDA5QgEAFAAAHQAAAHAEAEQAFAFAHAAQAHAAAFgFQAFgEAAgHQAAgHgFgFQgFgFgHAAQgHAAgFAFgAAikpQgEAFAAAGQAAAGAEAEQAEAEAGAAQAGAAAEgEQAFgEAAgGQAAgGgFgFQgEgEgGAAQgGAAgEAEgADNokQgEAFAAAGQAAAHAEAEQAFAFAGAAQAHAAAEgFQAFgEAAgHQAAgGgFgFQgEgEgHAAQgGAAgFAEgAldMYQAwuDHUq0IATAcQmNJAiKPbgAkLDaQgDAEAAAFQAAAFADADQAEAEAFAAQAFAAADgEQAEgDAAgFQAAgFgEgEQgDgDgFAAQgFAAgEADgAiNjDQgEAEAAAGQAAAFAEAEQAEAEAFAAQAGAAAEgEQAEgEAAgFQAAgGgEgEQgEgEgGAAQgFAAgEAEgAgBn8QgDAEAAAFQAAAFADADQACADAFAAQAFAAADgDQAEgDAAgFQAAgFgEgEQgDgDgFAAQgFAAgCADg");
	this.shape_59.setTransform(1035.8,323.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("An5LTIBamLIAzAKIAmAIIBMAPIhYGagADvrfIACgHIEHAkIgCAKgAEDr6IABgFID2AZIgCAHgADRrkQgGgDgCgGQgNAKgJgKIAAgCQgDgOANgEQAGgCAEAHIAFAKIAHgGQADgFADgDQABAAAAgBQABAAAAAAQABAAAAgBQAAAAABAAIgFAIIgHAGQgEABAAADQABAFAEADQAEADAEgFQgBAGgEAAIgEAAgAC8r9QgJAEADAJQACAIAKgDIAHgEIgEgIQgCgHgFAAIgCABg");
	this.shape_60.setTransform(1037.3,369.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#F40202").ss(2,1,1).p("AgqoBQAAAGgEAEQgEAEgGAAQgGAAgEgEQgEgEAAgGQAAgGAEgEQAEgEAGAAQAGAAAEAEQAEAEAAAGgAEVoiQAAAHgEAEQgFAFgGAAQgHAAgEgFQgFgEAAgHQAAgGAFgFQAEgFAHAAQAGAAAFAFQAEAFAAAGgABnkbQAAAGgFAFQgEAFgHAAQgHAAgFgFQgFgFAAgGQAAgHAFgFQAFgFAHAAQAHAAAEAFQAFAFAAAHgAiWigQAAAGgFAEQgEAFgGAAQgGAAgFgFQgEgEAAgGQAAgHAEgEQAFgEAGAAQAGAAAEAEQAFAEAAAHgAj5EBQAAAFgEAEQgEAEgGAAQgFAAgEgEQgEgEAAgFQAAgGAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAGgAhZB7QAAAIgGAGQgFAGgIAAQgIAAgGgGQgGgGAAgIQAAgIAGgGQAGgFAIAAQAIAAAFAFQAGAGAAAIgAjtIhQAAAHgGAFQgFAGgHAAQgHAAgFgGQgFgFAAgHQAAgHAFgFQAFgFAHAAQAHAAAFAFQAGAFAAAHg");
	this.shape_61.setTransform(1016.5,321.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FF0000").s().p("AkkItQgFgFAAgHQAAgHAFgGQAGgEAHgBQAHABAFAEQAFAGAAAHQAAAHgFAFQgFAGgHgBQgHABgGgGgAkpEKQgEgEAAgGQAAgFAEgEQAEgEAGAAQAFAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgFAAQgGAAgEgEgAiTCIQgFgFAAgIQAAgIAFgGQAGgGAIAAQAIAAAGAGQAGAGAAAIQAAAIgGAFQgGAGgIABQgIgBgGgGgAjIiWQgFgFAAgFQAAgGAFgFQAEgEAGgBQAGABAFAEQAEAFAAAGQAAAFgEAFQgFAFgGAAQgGAAgEgFgAELjVQgLgCgFgKQgEgHAAgIQAAgEABgFQACgNAKgHQAIgJALABIACAAQAKgBAHALQAGALgDAOQgDANgKAJQgKAIgKAAIgBgBgAEgjlQAHADACgJQgEAFgEgDQgFgDgBgEQABgDAEgBIAHgHIAFgIQgBAAAAABQgBAAAAAAQgBAAAAABQAAAAgBAAQgDADgDAFIgHAHIgFgLQgEgHgGACQgNAEADAOIAAACQAJALANgLQACAGAGADgAEFjxQgDgJAIgEQAHgCADAIIAEAIIgIAFIgEAAQgFAAgCgGgAAykQQgEgEAAgIQAAgGAEgFQAFgFAHAAQAHAAAFAFQAFAFAAAGQAAAIgFAEQgFAFgHAAQgHAAgFgFgAhbn3QgEgEAAgGQAAgGAEgEQAEgEAGAAQAGAAAEAEQAEAEAAAGQAAAGgEAEQgEAEgGAAQgGAAgEgEgADioXQgEgFAAgGQAAgGAEgFQAFgFAGAAQAHAAAEAFQAFAFAAAGQAAAGgFAFQgEAEgHABQgGgBgFgEg");
	this.shape_62.setTransform(1018.9,321.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#1F1F1F").s().p("AmFM8IAAgKQC0y2EDm4IAQAkQkSJXhcL9QDes2G/nkIAVAsQm4HXkNQNIAAAKgAkXIIQgFAGAAAHQAAAHAFAFQAFAGAHgBQAHABAFgGQAGgFAAgHQAAgHgGgGQgFgEgHgBQgHABgFAEgAkcDrQgEAEAAAFQAAAGAEAEQAEAEAFAAQAGAAAEgEQAEgEAAgGQAAgFgEgEQgEgEgGAAQgFAAgEAEgAiGBhQgGAGAAAIQAAAIAGAFQAGAGAIABQAIgBAFgGQAGgFAAgIQAAgIgGgGQgFgGgIAAQgIAAgGAGgAi8i3QgEAFAAAGQAAAFAEAFQAFAFAGAAQAGAAAEgFQAFgFAAgFQAAgGgFgFQgEgEgGgBQgGABgFAEgAA/kzQgFAFAAAGQAAAIAFAEQAFAFAHAAQAHAAAEgFQAFgEAAgIQAAgGgFgFQgEgFgHAAQgHAAgFAFgAhOoXQgEAEAAAGQAAAGAEAEQAEAEAGAAQAGAAAEgEQAEgEAAgGQAAgGgEgEQgEgEgGAAQgGAAgEAEgADvo5QgFAFAAAGQAAAGAFAFQAEAEAHABQAGgBAFgEQAEgFAAgGQAAgGgEgFQgFgFgGAAQgHAAgEAFg");
	this.shape_63.setTransform(1017.7,322.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AoaLTIAHmKIBTAAIBGAAIA/AAIAAG6gAEPrfIACgHIEIAkIgDAJgAEkr6IABgFID1AZIgBAGgADyrlQgHgDgBgGQgNALgJgLIAAgCQgDgOANgDQAGgDADAHIAFALIAIgHQACgEAEgDQAAgBABAAQAAgBABAAQAAAAABAAQAAAAAAAAIgEAHIgIAHQgDABgBADQABAEAEADQAEADAFgFQgBAHgFAAIgDgBgADcr+QgJAEAEAJQACAIAJgCIAHgFIgDgIQgDgGgFAAIgCAAg");
	this.shape_64.setTransform(1023.6,372.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#F40202").ss(2,1,1).p("AAcoDQAAAIgGAGQgGAGgJAAQgHAAgGgGQgGgGAAgIQAAgJAGgGQAGgGAHAAQAJAAAGAGQAGAGAAAJgAEOo/QAAAIgFAFQgGAGgIAAQgIAAgFgGQgGgFAAgIQAAgIAGgFQAFgGAIAAQAIAAAGAGQAFAFAAAIgABtkdQAAAIgGAGQgGAGgIAAQgJAAgGgGQgFgGAAgIQAAgIAFgGQAGgGAJAAQAIAAAGAGQAGAGAAAIgAhSibQAAAIgGAHQgGAGgJAAQgIAAgGgGQgGgHAAgIQAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAIgAhOB0QAAAJgGAGQgGAGgJAAQgIAAgGgGQgGgGAAgJQAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAIgAjPE8QAAAFgEAEQgDAEgGAAQgFAAgEgEQgEgEAAgFQAAgGAEgEQAEgDAFAAQAGAAADADQAEAEAAAGgAjjI+QAAAJgHAGQgGAGgIAAQgJAAgGgGQgGgGAAgJQAAgIAGgHQAGgGAJAAQAIAAAGAGQAHAHAAAIg");
	this.shape_65.setTransform(1006.1,320.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(2,1,1).p("AhshfIAZAeIgICLIgeAoAhshfIAHhwIDjgVIgEB6IgjAkIgGCVIAhAvIgDBnIjsgWIAEhdgAB6hqIgIDo");
	this.shape_66.setTransform(976.5,422.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FF0000").s().p("AkyJMQgGgFAAgJQAAgIAGgHQAHgGAIAAQAJAAAGAGQAGAHAAAIQAAAJgGAFQgGAHgJAAQgIAAgHgHgAkQFEQgDgDAAgGQAAgFADgEQAEgEAGABQAFgBAEAEQAEAEAAAFQAAAGgEADQgEAEgFABQgGgBgEgEgAicCDQgGgHAAgIQAAgIAGgHQAGgFAJAAQAIAAAGAFQAGAHAAAIQAAAIgGAHQgGAFgIAAQgJAAgGgFgAigiNQgGgFAAgJQAAgIAGgHQAGgFAJgBQAIABAGAFQAGAHAAAIQAAAJgGAFQgGAHgIAAQgJAAgGgHgAEWilQgLgDgFgKQgEgGAAgIQAAgFABgEQACgNAKgIQAIgJALABIACAAQAKAAAHALQAGAKgDAOQgDANgKAKQgKAHgKAAIgBAAgAEri1QAHADACgKQgEAGgEgEQgFgDgBgEQABgDAEgBIAHgHIAFgHQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBABQgDADgDAFIgHAGIgFgLQgEgGgGACQgNADADAPIAAACQAJAKANgKQACAGAGADgAEQjCQgDgIAIgFQAHgCADAJIAEAIIgIAEIgEABQgFAAgCgHgAAgkPQgGgGAAgIQAAgJAGgFQAGgGAIAAQAJAAAFAGQAGAFAAAJQAAAIgGAGQgFAGgJAAQgIAAgGgGgAgxn1QgGgGAAgIQAAgJAGgGQAGgGAJAAQAIAAAGAGQAGAGAAAJQAAAIgGAGQgGAGgIAAQgJAAgGgGgADDoxQgFgGAAgIQAAgIAFgFQAGgGAIAAQAIAAAFAGQAGAFAAAIQAAAIgGAGQgFAFgIAAQgIAAgGgFg");
	this.shape_67.setTransform(1010.3,320.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#CCCCCC").s().p("Agkg8IBPgEIgGCAIhPABg");
	this.shape_68.setTransform(976.4,417.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#1F1F1F").s().p("AlMLnIAIg2QCIuTEAo/IAfA3QjMIUhzIAQClnmFxo9IAbA6QoDMshxKpIgCAIIgzAEIAIg7gAkiI1QgGAGAAAJQAAAIAGAGQAGAHAJAAQAIAAAGgHQAHgGAAgIQAAgJgHgGQgGgGgIAAQgJAAgGAGgAkAE4QgEAEAAAFQAAAGAEADQAEAEAFAAQAGAAADgEQAEgDAAgGQAAgFgEgEQgDgEgGAAQgFAAgEAEgAiMBrQgGAGAAAJQAAAIAGAGQAGAGAIAAQAJAAAGgGQAGgGAAgIQAAgJgGgGQgGgGgJAAQgIAAgGAGgAiQikQgGAGAAAJQAAAIAGAGQAGAGAIAAQAJAAAGgGQAGgGAAgIQAAgJgGgGQgGgGgJAAQgIAAgGAGgAAvkmQgFAGAAAJQAAAIAFAGQAGAGAJAAQAIAAAGgGQAGgGAAgIQAAgJgGgGQgGgFgIAAQgJAAgGAFgAghoMQgGAGAAAIQAAAJAGAGQAGAGAIAAQAJAAAGgGQAFgGAAgJQAAgIgFgGQgGgGgJAAQgIAAgGAGgADTpHQgGAGAAAIQAAAIAGAFQAFAGAIAAQAIAAAGgGQAFgFAAgIQAAgIgFgGQgGgFgIAAQgIAAgFAFg");
	this.shape_69.setTransform(1008.8,320.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("ABCB8IgCgBIiQgHIgBAAIAAABQgBgBAAAAQAAAAAAAAQgBAAAAAAQAAAAAAABIgBAAIAAgBIgBgBIgCAAIAAAAIgBAAIgBgCIAAgDIgBAAIAAgDIABAAIAAgCIAAAAIAAAAIABgBIABAAIABgBIABAAIACAAIABAAIABAAQgBgBABABIABAAICRAIQAAAAAAgBQABAAAAAAQAAAAAAAAQABABAAAAIACAAIAAAAIAAAAIABACIABAAIAAACIAAABIAAADQgCgCACACIAAABQgBgBAAAAQAAAAAAAAQAAAAAAABQAAAAAAABIAAABIgBAAIAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAABABIgBAAQgBAAAAABgABRA+IAGiVIAjgkIgIDogAhshwIAZAeIgICLIgeAogAA2BUIgBAAIh6gGIgBAAIgCAAIAAABIgBAAIgBgBIAAAAIgDgCIAAgBIAAgCIAAAAIAAgDIAAAAIAAgBIABgBIABAAIAAAAIAAgBIABgBIABABIAAAAIABAAIAAgBIABAAIAAAAIACAAIABAAIAAAAIAAAAIB5AEIABAAIABACIABgBIABACIAAAAIAAAAIAAACIABAAIgBAEQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAIAAABQgBgBAAABIAAABIAAAAIgBABQgBgCABACIAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAABAAAAgAA0AwQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAABAAAAIhzgDQgBgBABACQgBAAAAgBQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAABQAAAAAAgBQAAAAAAAAQgBAAAAAAQAAABAAAAQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAAAAAAAIgBAAIgBAAIgBgBIAAgBIgBgBIAAgBIAAgBIAAgCIABgBIAAgBIAAgBIAAAAIAAgBIAAgBIACAAIAAAAIABAAIADgBIABAAQAAAAAAABIABAAQAAgCABABIAAAAIBzACQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAABQABAAAAAAIABACIAAABIABAAIAAABIAAAAIAAAEQgBgBAAACIAAABIAAAAIgBABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABIgBAAQgCgBACABg");
	this.shape_70.setTransform(976.6,424.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#CC3300").s().p("AhAAYIgGgCIgCgCQAAgBAAAAQgBAAAAgBQgBAAAAgBQAAAAgBgBIgBgDIAAAAIgCgIIgBgBIACgHIABgBIAAgDIAFgHIABgCIAHgGQADgBAHAAIAHAFIACABIAEAIIgBAOIAAABIAAABIAAAAIgEAIIgEAFIgJAEgAgYAEIgBAAQgBgBAAAAQAAAAgBAAQAAAAgBAAQAAAAAAABIgBAAIgBgBIgBAAIgBgBIAAgBIAAgBIAAAAIAAgCIAAAAIAAgCIABAAIAAgBIAAgBIABAAIACgBIAAAAIACgBIAAABIAAAAIACAAIAAAAIABAAIABAAIBhgIIAAAAIADACIAAAAIABABIAAACIABgBIAAADIgBABIAAABQgBAAABAAIAAACIgBAAIAAABQgBgBAAAAQAAAAAAAAQgBAAAAAAQABABAAAAIgBAAIgBgBIgBABIhhAHg");
	this.shape_71.setTransform(976.4,406.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AoRLEIAEhdIAegoIAIiMIgZgeIAHhwIDlgVIgFB6IgjAkIgFCWIAgAvIgDBngAlQKCQgBgBABAAIABAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIAAAAIABAAIAAgBQAAgBAAAAQAAgBAAAAQAAAAAAAAQABAAAAABIAAgBQgBgCABACIAAgDIAAgBIAAgCIgBAAIgBgCIAAAAIAAAAIgCAAQAAAAAAgBQAAAAgBAAQAAAAAAAAQAAABAAAAIiSgIIgCAAQAAgBAAABIgBAAIgBAAIgBAAIgBAAIgBABIgBAAIgBABIAAAAIAAAAIgBACIgBAAIAAADIABAAIAAADIACACIABAAIAAAAIACAAIAAABIAAABIABAAQABgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAABIAAgBIACAAICRAHIACABIAAAAIAAAAgAlcJaQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAABAAIAAAAQgCgCACACIABgBIAAAAIAAgBQgBgBACABIAAgBQgBAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAIAAgEIAAAAIAAgCIAAAAIAAAAIgBgCIgBABIgBgCIgBAAIh6gEIAAAAIAAAAIgBAAIgCAAIAAAAIgBAAIgBABIgBAAIAAAAIgBgBIgBABIAAABIAAAAIgBAAIAAABIAAABIAAAAIAAADIAAAAIAAACIAAABIACACIAAAAIABABIABAAIABgBIACAAIABAAIB6AGIACAAIAAAAIAAAAgAleI2QgCgBACABIACAAQgBgBAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIABgBIAAAAIAAgBQAAgCABABIAAgEIAAAAIAAgBIgBAAIAAgBIgBgCQgBAAAAAAQgBgBAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAIh0gCIAAAAQgBgBAAACIgBAAQABgBgBAAIgBAAIgCABIgBAAIAAAAIgCAAIAAABIgBABIAAAAIAAABIAAABIgBABIAAACIAAABIAAABIABABIABABIABABIABAAIABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABABAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAABAAAAQABgBAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAABAAAAQAAgCAAABIB0ADQAAAAABgBQAAAAAAAAQAAAAAAABQAAAAAAAAIABAAIAAAAgAm5GCIgFB+IBQAAIAFiCgAnVE8IgHAGIgBACIgEAHIAAADIgBABIgDAIIACABIACAIIAAAAIABADQAAABABABQAAAAABABQAAAAAAAAQABABAAAAIACACIAFACIAHAAIAJgEIAEgFIAEgIIAAAAIAAgBIAAgBIABgPIgFgIIgBgBIgIgFIgDAAIgHABgAmvFXIACAAIABAAIBigIIABgBIABABIABAAQgBAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAABIABgBIAAAAIAAgCQAAAAABAAIAAgBIABgBIAAgDIgBABIAAgCIgBgBIgBAAIgCgCIAAAAIhiAIIgBAAIgBAAIAAAAIgCAAIgBAAIAAgBIgBABIgBAAIgBABIgBAAIAAABIAAABIgBAAIAAACIAAAAIAAADIAAAAIAAABIAAABIABABIABAAIAAABIABAAIACgBIABABgAEHq2IACgHIEHAkIgCAJgAEbrRIABgFID2AZIgCAGgADpq8QgGgDgCgGQgNALgJgLIAAgCQgDgOANgDQAGgDAEAHIAFALIAHgHQADgEADgDQABgBAAAAQABgBAAAAQABAAAAAAQAAAAABAAIgFAHIgHAHQgEABAAADQABAEAEADQAEADAEgFQgBAHgEAAIgEgBgADUrVQgJAEADAJQACAIAKgCIAHgFIgEgIQgCgGgFAAIgCAAg");
	this.shape_72.setTransform(1016.9,372.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#F40202").ss(2,1,1).p("AhzodQAAAIgFAGQgGAFgIAAQgIAAgFgFQgGgGAAgIQAAgIAGgFQAFgGAIAAQAIAAAGAGQAFAFAAAIgABslIQAAAHgFAFQgFAFgHAAQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAQAHAAAFAFQAFAFAAAHgAEYpSQAAAHgFAFQgFAFgGAAQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgEAHAAQAGAAAFAEQAFAFAAAHgAi3jnQAAAHgGAFQgFAFgHAAQgHAAgFgFQgFgFAAgHQAAgHAFgGQAFgFAHAAQAHAAAFAFQAGAGAAAHgAhrCDQAAAHgGAFQgFAGgHAAQgHAAgFgGQgFgFAAgHQAAgHAFgFQAFgFAHAAQAHAAAFAFQAGAFAAAHgAjnEaQAAAHgDAFQgCADgCACQgHAHgKAAQgKAAgHgHQgHgHAAgKQAAgKAHgHQAHgHAKAAQAKAAAHAHQADADACADQACAFAAAGgAjjJQQAAAIgFAGQgFAFgIAAQgIAAgGgFQgFgGAAgIQAAgIAFgFQAGgGAIAAQAIAAAFAGQAFAFAAAIg");
	this.shape_73.setTransform(1000.8,325.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(2,1,1).p("AgTjfQgBAEgBAFAiBhcIAEh3IEKAJIgEB3IglAfIgFCNIAiArIgDBcIkJgJIAChcAiBhcIAgAhIgFCNIgjApgACJhTIgIDX");
	this.shape_74.setTransform(972.3,427);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#CCCCCC").s().p("AgvA+IAEh+IBbADIgEB+g");
	this.shape_75.setTransform(972.4,422.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("ABQB3IgCAAIikgFIgBAAIgBABIgCAAIgBAAIAAAAIgBgBIAAAAIgBAAIgBgBIgBAAIgCgBIAAgBIAAgCIgBAAIAAgDIABAAIAAgCIAAAAIAAgBIACgBIABAAIAAAAIABgBIABAAIABAAIABABIACAAIABgBIABAAIClAGIABAAIABABIABAAIAAAAIACABIAAABIABAAIAAABIAAABIAAADIAAAAIAAABIgBABIAAABIgBAAIgBAAIgBABIAAAAIgBAAgABfA/IAFiOIAlgeIgHDWgAiAh2IAgAgIgFCOIgjAogABCBTIgBAAIiKgFIgBAAIgBAAIgBAAIgCAAIgBAAIgBgBIgBAAIgCgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIABAAIAAAAIAAgBIABgBIABAAIABAAIAAgBIACAAIABAAIABAAIAAAAIABAAIABAAIABAAIAAAAICKAFIABAAIABABIAAAAIABAAIABACIAAAAIAAAAIAAACIAAAAIAAADIAAABIAAABIAAAAIAAABIgBAAIAAAAIgBABIgBAAIAAABgABAAxIgBAAIiDgFIgBABIgCAAIgBAAIgBAAIAAAAIgBgBIAAAAIgBAAIgCAAIAAAAIgCgCIgBgBIAAgBIgBgBIABgCIABgBIAAgBIAAgBIABAAIAAAAIABgBIAAgBIACAAIAAAAIABAAIACAAIABAAIABAAIABAAIABAAIABAAICCAEIABABIACAAIABABIAAAAIABABIAAABIABAAIAAABIAAABIAAADIgBABIAAAAIAAABIAAAAIgBAAIAAABIgBABIgBAAIgBAAg");
	this.shape_76.setTransform(972.3,429.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#CC3300").s().p("AhJAYIgHgDIgDgCIgEgEIgBgBIgBgDIgBAAIgCgJIgBgBIACgHIABAAIAAgCQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAIAGgHIACgCIAIgFQAFgBAHABQAGACAEAEIACACIAFAIQACAIgCAHIgBABIABABIgBAAIgEAIIgGAFIgKADgABaALIgBAAIgBAAIgBAAIhvgEIgBABIAAAAIgBAAIgEgBIgBAAIgBAAIgBAAIgCgCIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIABAAIAAAAIABgBIABAAIAAgBIABAAIABAAIACAAIAAAAIABAAIABABIABAAIAAgBIABAAIBwAEIABAAIABAAIABAAIAAAAIABABIAAABIABAAIAAABIABABIAAADIgBAAIgBABIAAAAIAAACIgBAAIAAAAIgBABg");
	this.shape_77.setTransform(971.9,411.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AodLKIADhdIAjgpIAFiOIggggIAEh4IEKAJIgEB4IglAeIgFCPIAjAqIgDBdgAnoJ/ICmAFIABAAIABAAIAAgBIABAAIAAAAIABgBIABAAIAAAAIABgBIAAgBIAAAAIAAgEIAAAAIAAgCIgBAAIAAAAIgBgBIgBAAIAAAAIgBgBIgCAAIimgGIgBAAIgBAAIgBAAIgBAAIgCAAIgBAAIgBAAIAAABIgBAAIgBABIAAAAIgBAAIAAADIAAAAIAAACIAAABIAAABIAAABIACACIABAAIABABIABAAIABAAIAAABIABAAIABAAIABAAIABgBIABAAgAnlJSIAAABIAAACIAAAAIAAACIABABIACABIAAAAIABACIABAAIACAAIABAAIABAAIABAAICLAEIABAAIABAAIAAAAIABAAIABgBIAAAAIABAAIAAgBIAAAAIAAgBIABgBIAAgDIgBgBIAAgBIAAAAIAAgBIgBgBIgBAAIAAAAIgBgBIgBAAIiKgFIgBAAIAAgBIgBAAIgCAAIAAABIgBAAIgBAAIgBAAIgBAAIgBAAIgBABIAAABIAAAAIgBAAIgBAAgAlSI9IABABIABAAIAAgBIABAAIABAAIAAgBIABAAIAAgBIAAAAIAAAAIABgBIAAgDIAAgBIAAgCIgBAAIAAAAIgBgBIAAAAIgBgBIgBAAIgBgBIiEgFIgBAAIgBABIgBAAIAAgBIgBAAIgDAAIgBAAIAAABIgCAAIAAABIgBABIAAAAIAAAAIgBABIAAABIgBABIAAACIABABIAAABIAAABIACACIAAAAIACAAIABAAIAAAAIABABIABAAIABAAIABAAIABAAIABgBICEAEgAm/IHIBcADIAEh+IhcgEgAnfE9IgIAEIgCACIgGAHQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIAAACIgBABIgCAIIABAAIACAJIABABIABACIABABIAEAEIADADIAHACIAHABIAKgDIAGgFIAEgHIABgBIgBgBIABgBQACgIgCgHIgFgJIgCgCQgEgDgGgCIgHgBIgFABgAk6FgIAAAAIABAAIAAgBIABAAIAAgCIAAAAIABgBIABAAIAAgDIgBAAIAAgCIgBAAIAAAAIgBgBIAAAAIgBgBIgBgBIgBAAIhxgDIgBAAIAAAAIgBAAIgBAAIgBAAIAAgBIgCAAIgBAAIgBABIAAAAIgBAAIgBABIAAAAIgBAAIAAACIAAAAIAAAEIAAAAIAAABIAAABIACACIABAAIABAAIABAAIAEABIABAAIAAAAIABgBIBwAEIABAAIABAAIAAAAIABAAgAEIqqIAAgIIEWAeIAAAJgADkqwQgHgCgEgHQgNALgNgLIgCgCQgGgQANgEQAJgEAGAIIAHAMIAIgHIAFgJQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAgBIgEAJIgGAIQgDABgBAEQADAEAFAEQAGAEAEgHQAAAIgGAAIgEgBgADErMQgJAFAHALQAEAIAKgDQAEgCADgDIgFgJQgFgHgGAAIgDAAgAEZrJIAAgFIEAAWIAAAIg");
	this.shape_78.setTransform(1012.4,377.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FF0000").s().p("AkpJeQgGgGAAgIQAAgIAGgFQAFgGAIAAQAIAAAGAGQAFAFAAAIQAAAIgFAGQgGAFgIAAQgIAAgFgFgAk2ErQgHgHAAgKQAAgKAHgHQAHgHAKAAQAKAAAHAHIAEAGQADAFAAAGQAAAHgEAGIgDAEQgHAHgKAAQgKAAgHgHgAiwCPQgFgFAAgHQAAgHAFgFQAGgFAHAAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAGgHAAQgHAAgGgGgAEeicQgNgCgKgLQgKgNABgOQgBgPAKgKQAIgJAMAAIADAAQANABAJAMQAKAMAAAPQAAAPgKAKQgIAJgMAAIgCAAgAEyiuQAKADAAgKQgEAGgGgEQgFgDgDgFQABgEADgBIAGgHIAEgJQAAAAgBAAQAAAAgBABQAAAAAAAAQgBABAAAAIgFAJIgIAHIgHgMQgGgHgJADQgNAEAGAQIACACQANAMANgMQAEAHAHADgAEQi7QgHgLAJgEQAIgCAGAIIAFAJQgDAEgEACIgEAAQgHAAgDgGgAj8jbQgFgFAAgHQAAgHAFgGQAGgFAHAAQAHAAAFAFQAFAGAAAHQAAAHgFAFQgFAFgHAAQgHAAgGgFgAApk8QgFgFAAgHQAAgHAFgFQAFgFAHAAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHAAQgHAAgFgFgAi6oPQgFgGAAgIQAAgIAFgFQAGgGAIAAQAIAAAFAGQAGAFAAAIQAAAIgGAGQgFAFgIAAQgIAAgGgFgADVpGQgEgFAAgHQAAgHAEgFQAFgEAHAAQAHAAAFAEQAFAFAAAHQAAAHgFAFQgFAFgHAAQgHAAgFgFg");
	this.shape_79.setTransform(1004.6,325.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#1F1F1F").s().p("AlKMaIgBgbQgWtYDirAIAkAnQifHfgaImIgEgGQgHgHgKAAQgKAAgHAHQgHAHAAAKQAAAKAHAHQAHAHAKAAQAKAAAHgHIADgEQgDBGAABIQCJpkHLpIIASA4QopK/hEMTIAAADgAktJHQgGAFAAAJQAAAHAGAGQAFAFAIAAQAIAAAGgFQAFgGAAgHQAAgJgFgFQgGgGgIABQgIgBgFAGgAi0B7QgFAFAAAIQAAAHAFAEQAGAGAHAAQAHAAAFgGQAFgEAAgHQAAgIgFgFQgFgFgHAAQgHAAgGAFgAkAjvQgFAFAAAHQAAAHAFAFQAGAGAHgBQAHABAFgGQAFgFAAgHQAAgHgFgFQgFgGgHAAQgHABgGAFgAAllQQgFAFAAAHQAAAHAFAFQAFAFAHAAQAHAAAFgFQAFgFAAgHQAAgHgFgFQgFgFgHAAQgHAAgFAFgAi+omQgFAFAAAJQAAAHAFAGQAGAFAIABQAIgBAFgFQAGgGAAgHQAAgJgGgFQgFgGgIABQgIgBgGAGgADRpZQgEAEAAAHQAAAHAEAFQAFAFAHAAQAHAAAFgFQAFgFAAgHQAAgHgFgEQgFgFgHAAQgHAAgFAFg");
	this.shape_80.setTransform(1005,325.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#F40202").ss(2,1,1).p("AiGpRQAAAGgEAEQgEAEgGAAQgGAAgEgEQgEgEAAgGQAAgGAEgEQAEgEAGAAQAGAAAEAEQAEAEAAAGgABolZQAAAIgFAGQgGAFgIAAQgIAAgGgFQgFgGAAgIQAAgIAFgFQAGgFAIAAQAIAAAGAFQAFAFAAAIgAD8pxQAAAIgGAGQgFAFgIAAQgIAAgFgFQgGgGAAgIQAAgIAGgFQAFgFAIAAQAIAAAFAFQAGAFAAAIgAisjXQAAAIgFAFQgGAGgHAAQgIAAgFgGQgGgFAAgIQAAgHAGgGQAFgFAIAAQAHAAAGAFQAFAGAAAHgAhQCPQAAAIgGAHQgGAFgIAAQgJAAgGgFQgGgHAAgIQAAgJAGgGQAGgFAJAAQAIAAAGAFQAGAGAAAJgAi7JqQAAALgHAIQgIAHgLAAQgLAAgIgHQgHgIAAgLQAAgKAHgIQAIgHALAAQALAAAIAHQAHAIAAAKgAjOE0QAAAJgHAGQgGAHgKAAQgJAAgGgHQgHgGAAgJQAAgKAHgHQAGgGAJAAQAKAAAGAGQAHAHAAAKg");
	this.shape_81.setTransform(992.8,328.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(2,1,1).p("AiBhiIAEh3IBoAEIA7ABIBnAEIgEB3IglAfIgFCNIAiArIgDBcIkJgJIAChcAiBhiIAgAhIgFCNIgjApgACJhZIgIDX");
	this.shape_82.setTransform(967.3,431.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FF0000").s().p("AlKJ9QgHgIAAgKQAAgLAHgIQAIgIALABQALgBAHAIQAIAIAAALQAAAKgIAIQgHAIgLgBQgLABgIgIgAlXFEQgGgHAAgKQAAgJAGgHQAHgGAJAAQAKAAAGAGQAHAHAAAJQAAAKgHAHQgGAGgKAAQgJAAgHgGgAjVCdQgGgFAAgJQAAgIAGgHQAGgFAIgBQAJABAGAFQAGAHAAAIQAAAJgGAFQgGAHgJgBQgIABgGgHgAEdiqQgLgMAAgPQAAgQALgLQAMgLAPAAQAQAAALALQALALAAAQQAAAPgLAMQgLALgQAAQgPAAgMgLgAFQi0QAMACAAgLQgFAHgHgEQgGgCgDgFIAEgFIAHgIQAEgFABgEIgDACIgHAJIgIAIIgJgKQgHgIgKAEQgQAGAHAQIACACQARALAOgOQAFAHAIACgAEoi+QgHgKAKgGQAKgCAGAHIAHAJQgEAEgGACIgGACQgGAAgEgGgAktjKQgGgFAAgHQAAgIAGgGQAFgFAIAAQAHAAAGAFQAFAGAAAIQAAAHgFAFQgGAGgHAAQgIAAgFgGgAgalLQgFgFAAgJQAAgHAFgGQAGgGAIAAQAIAAAEAGQAGAGAAAHQAAAJgGAFQgEAGgIAAQgIAAgGgGgAkApHQgEgEAAgGQAAgGAEgEQAEgEAGAAQAGAAAEAEQAEAEAAAGQAAAGgEAEQgEAEgGAAQgGAAgEgEgAB5pjQgFgFAAgJQAAgHAFgGQAGgFAIgBQAIABAFAFQAGAGAAAHQAAAJgGAFQgFAGgIgBQgIABgGgGg");
	this.shape_83.setTransform(1002.6,328.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("ABQB3IgCAAIikgFIgBAAIgBABIgBAAIgBAAIgBAAIgBgBIgBAAIgBAAIgBgBIAAAAIgCgBIAAgBIAAgCIAAAAIAAgDIAAAAIAAgCIABAAIAAgBIAAgBIABAAIABAAIABgBIABAAIACAAIABABIABAAIABgBIABAAIClAGIACAAIABABIAAAAIABAAIABABIAAABIAAAAIAAABIABABIAAADIgBAAIAAABIAAABIgBABIAAAAIgBAAIAAABIgBAAIAAAAgABfA/IAFiOIAlgeIgIDWgAiBh2IAhAgIgFCOIgjAogABCBTIgBAAIiKgFIgBAAIgCAAIgBAAIgBAAIgBAAIgBgBIAAAAIgDgCIAAgBIAAgBIgBgBIAAgCIABgBIAAgBIABAAIABAAIAAgBIAAgBIABAAIABAAIABgBIAAAAIACAAIAAAAIABAAIABAAIACAAIAAAAIABAAICIAFIABAAIABABIABAAIABAAIABACIgBAAIABAAIAAACIABAAIAAADIgBABIAAABIgBAAIAAABIAAAAIgBAAIgBABIAAAAIgBABgABAAxIgBAAIiEgFIAAABIgBAAIgBAAIgBAAIgBAAIgBgBIgBAAIgBAAIgBAAIgBAAIgBgCIAAgBIAAgBIgBgBIAAgCIABgBIAAgBIABgBIAAAAIAAAAIAAgBIABgBIABAAIABAAIABAAIADAAIABAAIAAAAIABAAIAAAAIABAAICEAEIABABIAAAAIABABIABAAIABABIAAABIAAAAIAAABIABABIgBADIAAABIAAAAIgBABIAAAAIAAAAIgBABIAAABIgBAAIAAAAg");
	this.shape_84.setTransform(967.3,433.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("Ao2LRIADhdIAjgoIAFiPIggggIAEh3IBoADIA8ACIBmAEIgEB3IglAeIgFCPIAjAqIgDBdgAoBKGICmAFIABAAIABAAIAAAAIABAAIAAgBIABAAIABAAIAAgBIABgBIAAgBIAAAAIAAgDIAAgBIAAgBIgBAAIAAgBIgBgBIgBAAIAAAAIgBgBIgCAAIimgGIgBAAIgBABIgBAAIgBgBIgCAAIgBAAIgBABIAAAAIgBAAIgBABIAAABIgBAAIAAACIAAAAIAAADIAAAAIAAACIAAABIACABIABAAIABABIABAAIABAAIAAABIABAAIABAAIABAAIABgBIABAAgAn+JZIAAABIAAACIAAABIAAABIABABIACACIAAAAIABABIABAAIACAAIABAAIABAAIABAAICLAFIABAAIABAAIAAgBIABAAIABgBIAAAAIABAAIAAgBIAAAAIAAgBIABgBIAAgDIgBAAIAAgCIAAAAIAAAAIgBgCIgBAAIAAAAIgBgBIgBAAIiKgFIgBAAIAAAAIgBAAIgCAAIAAAAIgBAAIgBAAIgBAAIgBABIgBAAIgBAAIAAABIAAABIgBAAIgBAAgAlrJFIABAAIABAAIAAAAIABAAIABgBIAAgBIABAAIAAAAIAAgBIAAAAIABgBIAAgDIAAgBIAAgBIgBAAIAAgBIgBgBIAAAAIgBgBIgBAAIgBgBIiEgEIgBAAIgBAAIgBAAIAAAAIgBAAIgDAAIgBAAIAAAAIgCAAIAAABIgBABIAAAAIAAAAIgBABIAAABIgBABIAAACIABABIAAABIAAABIACACIAAAAIACAAIABAAIAAAAIABABIABAAIABAAIABAAIABAAIABgBICEAFgAnYIOIBcADIAEh+IhcgDgAn4FEIgIAEIgCACIgGAIQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIAAACIgBABIgCAIIABAAIACAJIABABIABACIABABIAEAEIADADIAHACIAHACIAKgEIAGgFIAEgHIABgBIgBgBIABgBQACgIgCgHIgFgJIgCgBQgEgEgGgCIgHgBIgFABgAlTFnIAAAAIABAAIAAgBIABAAIAAgBIAAgBIABAAIABgBIAAgDIgBAAIAAgCIgBAAIAAAAIgBgBIAAAAIgBgBIgBgBIgBAAIhxgDIgBAAIAAAAIgBAAIgBAAIgBAAIAAgBIgCAAIgBAAIgBABIAAAAIgBAAIgBABIAAABIgBAAIAAACIAAAAIAAADIAAAAIAAABIAAACIACABIABAAIABABIABAAIAEAAIABAAIAAAAIABAAIBwADIABAAIABAAIAAAAIABAAgAEvqzIAAgIIEIAAIAAAIgAEHq0QgJgCgEgHQgPAOgQgLIgCgCQgHgQAQgGQAKgDAGAHIAJALIAJgJIAGgIIAEgDQgCAEgDAFIgHAIIgFAFQADAFAGADQAIADAEgHQAAAJgHAAIgEAAgADhrOQgKAHAHAJQAGAJALgEQAFgCAEgFIgHgIQgEgGgHAAIgFAAgAFBrTIAAgGIDyAAIAAAGg");
	this.shape_85.setTransform(1009.9,380);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#1F1F1F").s().p("Ak1MvIAAgHIACgJIAAgBIgBAAQAeuuB1qgIAeABQhUJ5gfKOQCirTFmoVIAkAzQmlJiiBN3IgIAuIAAAHgAkJJeQgHAHAAALQAAALAHAIQAIAHALAAQALAAAHgHQAIgIAAgLQAAgLgIgHQgHgIgLAAQgLAAgIAIgAkWEpQgGAHAAAJQAAAKAGAGQAHAHAJAAQAKAAAGgHQAHgGAAgKQAAgJgHgHQgGgGgKAAQgJAAgHAGgAiUCGQgGAGAAAJQAAAIAGAGQAGAGAIAAQAJAAAGgGQAGgGAAgIQAAgJgGgGQgGgGgJAAQgIAAgGAGgAjsjeQgGAGAAAHQAAAIAGAFQAFAGAIAAQAHAAAGgGQAFgFAAgIQAAgHgFgGQgGgFgHAAQgIAAgFAFgAAmlgQgFAFAAAIQAAAIAFAGQAGAFAIAAQAIAAAFgFQAGgGAAgIQAAgIgGgFQgFgGgIAAQgIAAgGAGgAi/pVQgEAEAAAGQAAAGAEAEQAEAEAGAAQAGAAAEgEQAEgEAAgGQAAgGgEgEQgEgEgGAAQgGAAgEAEgAC6p4QgFAFAAAIQAAAIAFAGQAGAFAIAAQAIAAAFgFQAGgGAAgIQAAgIgGgFQgFgGgIAAQgIAAgGAGg");
	this.shape_86.setTransform(996.1,328.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(2,1,1).p("Ah8haQAAg7ACg4QBpgQCNAMQACA8ABA6QgUANgQAQQACBFACBKQARAUAVAWQgBAuABAuQiFgFiEgDQABgsACgtQAChpADhnQAOAPAQAPQgDBDABBHQgQATgRAVAB/hbQAEBrACBr");
	this.shape_87.setTransform(959.4,427.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FF0000").s().p("AgaAbQgLgMAAgPQAAgPALgLQALgLAPAAQAPAAAMALQALALAAAPQAAAPgLAMQgMALgPAAQgPAAgLgLgAAYARQAMACAAgLQgFAHgIgEQgFgCgEgFIAFgEIAHgIQAEgFABgEIgDACIgHAJIgJAHIgJgJQgFgIgKAEQgQAGAHAPIACACQAQALAOgOQAFAHAIACgAgPAHQgIgJAKgGQALgCAEAHIAIAIQgFAEgFACIgFACQgGAAgEgGg");
	this.shape_88.setTransform(1016.3,309);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AhSBvIAAAAIgBABIgCAAIgBAAIgBAAIAAAAQAAgBAAAAQAAAAAAAAQgBAAAAAAQAAAAAAABIgBAAIgBgBIAAAAIgCgCQgBAAAAAAIAAgCIAAAAIAAgDIAAAAIAAgCIABAAIAAgBQgBAAAAAAQAAgBAAAAQABAAAAAAQAAAAABABIABgBQgCgBACABQABgBAAAAQAAgBAAAAQAAAAAAAAQAAABAAAAIABAAIACAAQAAgBAAAAQAAAAABAAQAAAAAAAAQAAABAAABIABAAQAAgBAAAAQAAgBAAAAQABAAAAAAQAAABAAAAIABAAQBQgBBSAFIACgBIABABIAAAAIABAAIABABIAAAAIABABIAAABIAAABIAAADQgCgCACADIAAABQgDgCACACIAAAAIgBABQAAAAAAgBQAAAAAAAAQAAAAAAABQAAAAgBAAIAAABIgBAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAgBAAQhUgDhOAAgABeA6IgFiOQARgRAUgMQAEBrACBrQgVgWgRgVgAh+hwIAeAdQgCBFABBGIgiAnIAFjPgABBBOIgBAAQhFgDhBABIgBAAIgBAAIgBAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAIgBAAIgBAAIgBAAQAAgBAAgBQAAAAgBAAQAAAAAAAAQAAAAgBAAIAAAAIgBgCIAAgBQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAIAAAAIAAgBQgBgCACACIAAAAIAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAQAAAAAAABIABAAQgCgCADABIABAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQgBgDACACIABAAIABAAIAAABIABAAQBAgCBFAEQAAgBAAAAQAAAAABAAQAAAAAAAAQAAAAAAABQAAgBAAAAQAAAAABAAQAAAAAAAAQAAAAAAABIAAABIACAAQAAgBAAAAQAAAAAAAAQAAABAAAAQAAAAABABIAAABIAAAAIAAABIABAAQgBABAAAAQAAABAAAAQAAAAAAABQAAAAABABQgBgBAAAAQgBAAAAABQAAAAAAAAQABAAAAABIAAAAQgCgBACACIAAAAIgBAAQgCgCACACQgDgBACACIgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQABABAAAAgAA+AsQgBAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQhEgCg8ACIgBAAIgBAAIgBAAIgBAAIAAAAQgBAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAABIgBAAIgCgBIAAABIgCgCIAAAAIAAgCIgBgBIAAgCQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAAAAAIAAgBQgBgCABABIABAAIAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQABAAAAAAIABgBIABAAQgBgCACACIABAAQgBAAAAAAQABgBAAAAQAAAAABABQAAAAABAAIABAAIAAAAIABAAQABAAAAAAQAAgBAAAAQAAAAAAABQAAAAABAAQA8gCBCACQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIABABIABABIACABIAAABIAAAAIAAACIABAAIAAADQgCgCACADIAAAAQgCgCABACQgBgBABACIgBAAQAAAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAAAIAAABQgDgCACACg");
	this.shape_89.setTransform(959.5,429.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#CCCCCC").s().p("AgqBAIgBh8QAngDAsAAQAAA/AEBAIhWAAg");
	this.shape_90.setTransform(959,422.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AoCK8IAChaIAignQgBhHAChFIgegdQABg7ACg4QBogQCPAMIADB2QgUAMgRARIAFCPQARAVAUAWQAAAuABAuQiGgFiEgDgAnPJyQBOAABVADQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAIABAAIAAgBQAAAAAAAAQABgBAAAAQAAAAAAAAQAAABAAAAIABgBIAAAAQgCgCACACIAAgBQgBgDACACIAAgDIgBgBIAAgBIAAgBIAAAAIgBgBIgBAAIAAAAIgBgBIgCABQhTgFhQABIgBAAQAAAAgBgBQAAAAAAAAQAAAAAAABQAAAAAAABIgBAAQAAgBAAgBQgBAAAAAAQAAAAAAAAQAAAAAAABIgCAAIgBAAQAAAAAAgBQAAAAAAAAQAAAAgBABQAAAAAAABQgCgBACABIgBABQgBgBAAAAQgBAAAAAAQAAAAAAABQAAAAAAAAIAAABIAAAAIAAACIgBAAIAAADIABAAIAAACQgBAAABAAIACACIABAAIABABIABAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAABIAAAAIABAAIABAAIABAAIABgBgAk6JRQgBAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAIABAAQgCgCACABQgBgCACACIAAAAIAAAAQgBgCACABIAAAAQgBgBAAAAQAAAAAAAAQAAgBAAAAQABAAAAABQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBIgBAAIAAgBIgBAAIAAgBQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBAAAAABIgBAAIAAgBQAAgBAAAAQgBAAAAAAQAAAAAAAAQAAAAAAABQAAgBAAAAQgBAAAAAAQAAAAAAAAQAAAAAAABQhGgEhAACIgBAAIAAgBIgBAAIgCAAQgCgCACADQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAgBAAIgBAAQgCgBACACIgBAAQAAgBAAAAQgBAAAAAAQAAAAAAAAQAAAAAAABQgBAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABIAAAAIAAAAQgCgCABACIAAABIAAAAQgBAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABIAAABIABACIAAAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAABAAABIABAAIABAAIABAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIABAAIACAAIABAAQBBgBBGADIABAAIABAAIAAAAgAk+IvQgCgCACACIABgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAIABAAQgCgCACABQgBgCACACIAAAAQgCgDACACIAAgDIgBAAIAAgCIAAAAIAAgBIgCgBIgBgBIgBgBQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQhDgCg9ACQAAAAAAAAQAAgBAAAAQAAAAgBABQAAAAAAAAIgBAAIAAAAIgBAAQgBAAgBAAQAAgBAAAAQgBAAAAABQAAAAAAAAIgBAAQgCgCACACIgBAAIgCABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABABAAIAAAAIgBAAQgCgBACACIAAABQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAABAAAAIAAACIABABIAAACIAAAAIABACIABgBIABABIABAAQAAgBABAAQAAAAAAAAQAAAAAAAAQAAABAAAAIABAAIABAAIABAAIABAAIABAAQA8gCBEACQAAAAABAAQAAAAAAAAQAAAAAAAAQAAABAAAAIABAAIAAAAgAmtF/IABB9IBXAAQgEhAAAhAIgLAAQgnAAgiADgAnTFlIAGACIAGABQAEgDAFgBQABgEADgCIAFgIIgBAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABAAIgBgOQgEgEgBgEQAAgBAAAAQgBAAAAgBQAAAAAAAAQAAAAgBAAQgEgEgEAAQgHgBgDABIgHAFIgCAEQgDADgBAEQAAgBAAAAQAAAAAAAAQAAABAAAAQAAAAAAABIAAACIgBABQgCAEABAEQAAAAAAAAQAAgBAAAAQAAAAABABQAAAAAAAAQgBADACAGIABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAABAAIABABIADAEIADACgAmjFTQgCgCACACQAwgEA6ABQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABABIABgBIABAAQgCgDACADIABAAIAAgCIAAAAQgBgBABAAQAAAAAAAAQAAgBAAAAQAAAAABAAQAAABAAAAIAAgDQAAgBAAAAQgBgBAAAAQAAAAAAAAQAAABAAAAIAAgBIgBAAIAAgBIgBgCQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAIgBgBIgBAAIgBAAQg5gCgwAEIgBAAQAAAAAAAAQAAgBAAABQAAAAAAAAQgBAAAAABIgCAAIAAAAIgCAAQAAgBgBAAQAAAAAAAAQgBAAAAAAQAAAAABABQgCgCABADIgBAAIAAABIAAAAIgBAAIAAACIAAAAIAAAEIAAAAIAAACIABABIACAAIAAAAIABABIABAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAABIABAAIABAAIAAAAgAD7qdIAAgIIEIAAIAAAIgADTqeQgIgCgFgHQgOAOgRgLIgCgCQgHgQAQgGQAKgEAHAIIAJAKIAIgIIAHgJIADgCQgBAEgEAFIgHAIIgEAFQADAFAGACQAHAEAFgHQAAAJgIAAIgEAAgACuq4QgKAGAHAKQAGAIAKgEQAGgCAEgEIgHgJQgFgGgHAAIgEABgAENq9IAAgGIDyAAIAAAGg");
	this.shape_91.setTransform(997.6,377.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#CC3300").s().p("Ai4LHIgGgCIgDgCIgDgEIgBgBQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAAAABgBIgBAAQgCgGABgDQgBAAAAAAQAAgBAAAAQAAAAAAABQAAAAAAAAQgBgEACgEIABgBIAAgCQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAABQABgEADgDIACgEIAHgFQADgBAHABQAEAAAEAEQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABQABAEAEAEIABAOQgBAAAAAAQAAAAAAAAQAAABAAAAQAAAAABABQgBAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIABAAIgFAIQgDACgBAEQgFABgEADIgGgBgAiPKzIgBAAQAAgBgBAAQAAAAgBAAQAAAAAAAAQgBAAAAABIgBAAIgBgBIAAAAIgCAAIgBgBIAAgCIAAAAIAAgEIAAAAIAAgCIABAAIAAAAIAAgBIABAAQgBgDACACQgBgBAAAAQAAAAAAAAQABAAAAAAQAAAAABABIACAAIAAAAIACAAQAAgBAAAAQAAAAABAAQAAgBAAABQAAAAAAAAIABAAQAwgEA5ACIABAAIABAAIABABQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIABACIAAABIABAAIAAABQAAAAAAgBQAAAAAAAAQAAAAAAABQAAAAABABIAAADQAAAAgBgBQAAAAAAAAQAAAAAAABQAAAAAAAAQgBAAABABIAAAAIAAACIgBAAQgCgDACADIgBAAIgBABIgBgBQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQg6gBgwAEQgCgCACACgAiyFkQAAgCAAACQgHgJABgKQgBgJADgDQgBAAAAAAQAAAAAAAAQAAgBAAAAQABAAAAAAQABgEADgEQAEgJAKgCQAGgCAHAHIAAABIAEAEIADAPQgBABABAGQgCACgBAEQgCAEgBADQgIAIgGACIgCABQgIAAgEgFgAg2BQQgBAAAAAAQAAAAgBAAQAAgBABAAQAAAAAAAAQgDgEgCgEQgDgHABgFQAAgIADgFQgBAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAgBQABgDAFgCQgBgBABABIAAAAQAHgJAOADQAMABAJAJIAAABIAFAGIAAABQAEAFAAAKQgEADADADIgEAGIgGAFQgIAGgNAAQgNgEgHgGgAjdhsIAAAAQgGgIACgIQgBgLADgBIAAAAQABgFADgEQAFgJAJgDQAHgCAGAFIABABQgBAAAAABQAAAAAAAAQABABAAAAQAAAAABAAIACAPQgBABAAAFIgBAEIgFAJQgGAJgHADIgEABQgGAAgDgEgABal1IgHgCQgJgEgHgGQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAABAAIgGgIQgFgHADgEQAAgFAEgFIABAAIAFgEIABAAQACgCAGABQAHgDALAFQAAAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAJACALAJIABABQADACABAEIABABQACAAABAFIABAHQgCABAAAFQgFAAABAEQgDgCABAFQgFgBAAACIgLABQgHAAgIgCgAjrmhIgBgBQgGgEABgLIAEgKIAGgIQAHgJAJgBQAHgDAFAGIADACIAAANQgBADAAABQgCAHgEAHQgGAJgIACIgFABQgHAAgCgEgADfqNIgQgEQgHgCgBgCQgLgEgFgIIgBgBQgEgFgBgDQgFgHABgFIAFgHIgBAAIABgBIAAgBIAAAAIAGgCQAAgBAAAAQgBAAABAAQAAAAAAAAQAAAAABABQALgEAPAHIACABQALACAJANIABABIABABIADAEIABABQAEAHgBAGQgCABACAEQgDAAgCADIgGADIgGADQgBgBAAgBQgBAAAAAAQAAAAAAAAQgBAAABABgAjcqWQgBAAgBAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQgHgCgBgCIgDgBIgBgBQgDgDAAgDQgDgGACgEQAAgIAEgCQAAgBABABIAAgBIAAAAIAAAAIABAAQACgEADgCQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAAAAAQAGgFAEAAQAFgCAFgBIACgBQAFABAGAEIAAAAQAAAAAAAAQABABAAAAQAAABABAAQAAABABAAQgBAAAAAAQAAAAAAAAQAAABAAAAQAAAAABAAIAAABIAAAKIgBAGIAAABQgCABgBAFQgEABgBAFIgGAFIgLAFQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAg");
	this.shape_92.setTransform(969.9,342.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#1F1F1F").s().p("AjUIUQAEAFAJgBQAHgCAIgIQAAgDADgEQAMBjASBmQARjwAojpQABAEAEAEQgBAAAAAAQAAAAAAABQAAAAAAAAQABAAAAAAQAIAGANAEQAMAAAIgGQg1EFgTEWQgdgBgZAEQgXiJgPiFgAkABDIABAAQAEAFAIgCQAHgDAHgJIAEgJQALDTAdDiQgIgHgGACQgKACgEAJQgCAEgBAEQgbjegNjTgAgpDjIgEgGIAAgBQgKgJgLgBQgPgDgGAJIgBAAQAyjtA/i3QADgGAFABQAHAGAJAEIAHACQAPADAKgCQABgCAEABQhGC2g5DzIAAgBgAkOjxQADAFALgCQAIgCAGgJQAFgHACgHQAACJAJCUIgBgBQgGgFgGACQgJADgFAJQgDAEgBAFQgLiTgCiFgABbjeIgBgBQgBgEgEgCIAAgBQgLgJgKgCQAAAAgBgBQAAAAAAAAQgBAAAAAAQgBAAAAAAQgKgFgHADIBfkSQgBAFAEAHQABADAFAFIABABQAFAIAKAEQABACAHACIAQAEQAAgBAAAAQAAAAAAAAQABAAAAAAQABABABABQgwB7gyCIQgBgFgBAAgAkPnlIAEgFQACACAHACQAAAAAAAAQAAAAAAAAQABAAABAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIAMgFIAFgFQACgFADgBQACgFABgBIABgBQgHBvgBByQgBAAAAAAQAAAAAAAAQgBABAAAAQAAAAAAABQgFgGgIADQgJABgHAJIgFAIQgDhtADhtgADHn9IAAgBQgJgNgLgCIgDgBQgOgHgLAEQgBgBAAAAQgBAAAAAAQAAAAAAAAQAAAAABABIgGACIgBAAQAziAAliRQAWAJAVALQgeCRgrB/gAkOoHIAAAAIAAAAgAkGrjIAXgWQATgUAPgLQgOCMgHB/IgBgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAAAAAAAIgBAAQgFgEgGgBIgCABQgFABgFACQgEAAgGAFQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBABAAAAQgDACgBAEIgCAAQAChpAGhzg");
	this.shape_93.setTransform(973.3,325);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(2,1,1).p("AiEhdQgBg6ABg5QBsgGCYAHQAAA6ACA7QgTAOgSAPQABBFACBGQASAWATAVQAAAsAAAvQiFgFiFgEQABgtAAgsQAAhpAAhmQAPAOAQAQQAABEABBFQgQATgQAVACChaQACBoABBr");
	this.shape_94.setTransform(948.5,427.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FF0000").s().p("AgaAbQgLgMAAgPQAAgPALgLQALgLAPAAQAPAAAMALQALALAAAPQAAAPgLAMQgMALgPAAQgPAAgLgLgAAYARQAMACgBgLQgEAHgHgEQgHgCgCgFIAEgEIAHgIQAEgFABgEIgEACIgGAJIgJAHIgJgJQgFgIgKAEQgQAGAHAPIACACQARALANgOQAFAHAIACgAgQAHQgGgJAKgGQAJgCAFAHIAHAIQgDAEgGACIgFACQgGAAgFgGg");
	this.shape_95.setTransform(1001.3,309);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("ABSByQhVgDhQgBIgBAAIgBABIgBAAIgBAAIgBAAIAAgBIgBAAIgBAAIgBgBIgBABIgCgCIAAgBIAAgBIgBAAIAAgDIABAAIgBgCIABAAIAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAIABgBQAAgBABABIABAAIABAAIABAAIABAAIACAAIABAAIABAAIClAEIABAAIABABIABAAIABAAIABABIAAABIAAAAIAAABIABAAIAAADIgBABIAAABQgBAAABABIAAABIgBAAIgBAAQgBAAABABIgBAAQgBgBABABgABgA6QgChFgBhGIAlgdIADDTQgTgVgSgWgAiEhxIAfAeQAABFABBEIggAoIAAjPgABDBOIgBAAIiKgDIgBAAIgCAAIgBAAIgBAAIgBAAIgBgBIgBAAIgCgCIAAgBIgBgBQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAgBABAAIAAAAIAAgBQAAgBABABIAAAAIAAgBIABgBQgBgBABABIABAAQAAgBABAAIABAAIACAAQgBgBABABIACAAIABAAIAAAAIABAAQBCABBGACIACAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAABIAAAAIABAAIABACIABAAIAAAAIAAABIABABIgBADQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABIAAAAQgBAAAAABIAAAAIAAAAQgBAAAAABQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAIAAAAQAAAAgBAAQAAAAAAAAQAAAAAAABQAAAAAAAAgAA/AtIgBAAQhEgCg/AAQgBgBAAABIgBAAIgBAAIgBAAIgBAAIgBAAIAAAAIgBAAIgCgBIAAAAIgBgCIgBAAIAAgBIgBgBIAAgCIABgBIAAgBIABgBIAAAAIAAgBQgBgBABABIABgBIABAAQAAgBABAAIABAAIACAAIABAAIAAABIABAAQAAgBABAAIABAAICDACIABABIABAAIABABIAAAAIABACIAAAAIABAAIAAACIABAAIAAADQgBAAAAABIAAAAQgBAAABABQgBgBAAABIAAAAQAAAAgBAAQAAAAAAABQAAAAAAAAQABAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABIgBAAQgBgBAAABg");
	this.shape_96.setTransform(948.5,429.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#CCCCCC").s().p("AgrA+IgDh7QApgBAwABIAEB8IhagBg");
	this.shape_97.setTransform(947.8,422.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AnuK5IABhZIAggnQgBhFAAhFIgfgfQgBg6ABg4QBsgHCYAIIADB0IglAdQAABHADBGQARAVAUAWIgBBaIkKgJgAm8JxQBQABBVADIADAAQgBgBABAAIABAAQgBgBABABIABgBIAAAAIAAgBQAAgBABABIAAgBIAAgBIAAgDIAAAAIAAgCIgBAAIAAAAIAAgBIgBAAIgBgBIgBAAIgCAAIimgFIAAAAIgBABIgCAAIgBgBIgCAAIgBAAIgBABQAAgBAAABIgBAAQAAAAgBAAQAAAAAAABQAAAAAAAAQAAAAAAABIAAAAIgBAAIABACIgBAAIAAADIABABIAAABIAAABIACABIAAAAIABABIABAAIABAAIABABIABAAIABAAIABAAIABgBIABAAgAklJRQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAABAAIAAABQAAgBAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAgBAAABIABAAIAAgBQAAgBAAABIAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAIAAgDIAAAAIAAgBIgBAAIAAgBIgBgBIgBAAIAAgBQgBAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAABIgCAAQhHgDhDAAIAAAAIgBgBIgBAAIgBAAQgBAAABABIgCAAIgBAAQgCgBABABIgBAAQgBAAAAABIAAABIAAAAIgBAAQAAAAAAABIAAABIgBAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAIAAABIABACIACACIAAAAIACABIABAAIABAAIABAAIABAAIABAAICMADIABAAIAAAAIAAAAgAkpIwQgBgBABAAIACAAQgBAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAQgBAAAAgBQAAAAAAAAQAAAAAAAAQAAgBABAAIAAABQAAgBABAAQgBgBABABIAAgBQgBgBACABIAAgDIgBgBIAAgBIgBAAIAAgBIgBgBIAAAAIgCgBIgBgBIgBAAIiDgDIgCABQgBgBABABIgBAAIgBAAIAAAAIgCAAIgBAAQgBgBAAABIgBAAIgBABQgBAAAAABIABAAIgBAAIAAABIAAACIgBAAIAAACIABABIAAABIAAABIACACIAAAAIACAAIABAAIAAAAIABABIAAAAIABAAIABAAIACAAQgBgBACAAQA+AABFACIABABIABAAIAAAAgAmfGAIAEB8IBbABIgFh9IgfAAIg7AAgAnSFTIACAJIABAAIABACIABABIAEAEIADACIAGACIAGABIAJgDQACgEADgCIADgHQAAgBABAAIgBgBIABgBQABgIgCgHIgFgIIgDgBQgEgEgEgCQgHAAgEABIgHAFIgCACIgEAIQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIAAACQgBgCAAACIgBAJIAAAAIABAAgAmVFVQgBgBABABQA0gCA+ABIABAAIABABIABgBIABAAIABgBQgBgBABABIABAAIAAgBQgBgBABABIAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIAAgDIgBgBIAAgBIgBAAIAAgBIgBgBIgBAAIgBgBIgBgBIgBAAQg/gBgzACIgBAAIgBAAIgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAIAAAAIAAAAIgBAAIgBAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBAAAAABIAAAAIgBABIAAAAIgBAAIAAACIAAABIAAADIABAAIAAABIAAABIADACIAAAAIABAAIABAAIADAAIABAAIABAAIAAAAgADnqbIAAgIIEIAAIAAAIgAC/qdQgIgCgFgHQgOAPgRgLIgCgDQgHgPAQgGQAKgEAGAHIAJALIAJgIIAGgJIAEgDQgBAFgEAFIgHAIIgEAFQACAFAHACQAHAEAEgHQAAAJgHAAIgEgBgACaq2QgKAGAGAKQAHAIAKgEQAGgCADgEIgHgJQgEgGgHAAIgEABgAD5q7IAAgGIDyAAIAAAGg");
	this.shape_98.setTransform(984.6,377.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#CC3300").s().p("Ai0LVIgGgCIgDgDIgDgDIgBgBIgCgCIAAgBIgCgIIgBgBIABgIQgBgCABABIABgBQAAgBAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIAEgHIACgCIAHgFQAEgCAHABQAEACAEAEIACABIAGAIQABAGAAAJIgBABIABABQgBgBAAABIgEAIQgDACgBADIgJAEIgHgBgAiJLDIgBAAIgEgBIAAAAIgBAAIgBAAIgCgBIAAgBIAAgBIgBgBIAAgDIAAAAIAAgCIABAAIAAgBIABgBIAAAAQAAgBABABQAAAAAAgBQAAAAAAAAQAAAAABAAQAAAAAAAAIABAAIACAAIAAABIAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAQAAABAAAAIABAAIABgBIABAAQAzgCA/ACIABAAIABABIABAAIABAAIABACIAAAAIAAAAIABACIABAAIAAADQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAIAAAAQgBAAAAABIAAABIAAAAQgBgBAAABIAAABIgBgBIgBABIgBgBIgBABQg+gCg0ACQgBAAABABgAi1F2IgBgBQgHgIABgLQAAgHACgEIAAgBQABgFADgDQAFgIAKgBQAIgBAIAHIAAABIAEAFQADAEAAAKIAAAHIgCAGIgEAGQgIAIgIACQgKAAgFgGgAgMB1QgOgBgHgIIgCgBQgDgDgBgEQgFgGACgHQABgGACgFIABgBIAGgGIAAAAIAAAAQAJgIAPACQAKABAKAJIAAAAQABADADACIABABQADAHgBAIIgBAHIgDAFQgEACgCAEQgJAFgKAAIgCAAgAjohgIAAgBQgGgGABgLQAAgIADgEIAAAAQABgFADgEQAGgKAIAAQAIgCAEAHIACABQAAABAAAAQAAAAAAABQAAAAABAAQAAABAAAAQACAFAAAJIAAAHIgCAEQgBAFgEAFQgGAIgHADIgCAAQgHAAgEgGgAB+l0IgGgCQgKgEgGgGIgBgBQgEgEgBgDQgFgGACgGQgBgHAFgDQAAAAAAgBQAAAAAAAAQAAAAABAAQAAABAAAAIAFgFQAAAAAAgBQAAAAAAAAQAAAAABAAQAAAAAAAAQADgBAEAAQAIgDAJADIADAAQAKADAJAIIAAABIAFAFIABABQAAACACADIABAIQgCABAAAFIgDAFQgBAAAAAAQAAAAAAABQgBAAAAAAQAAABAAAAIgEACQgIADgIAAIgIAAgAj3mkIAAgBQgFgFABgLQABgGACgFIAEgIQAFgIAIgCQAGgCAFAGIACADQABAEAAAJQgBACAAAEQgBAGgEAGQgFAJgIACIgDABQgFAAgDgEgAjwqjIgCAAQgEAAgCgDQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAABgBIgBgBQgCgCgBgCQgBgGAAgFQABgGACgEIAAgBIABAAIAAgBIAEgGIAAgBQADgEAEgCQACgCAEgBIACAAQAEgCAEAGIABAAQAAABAAAAQAAABAAAAQAAABABAAQAAABABAAIAAABIAAAMQAAAAAAABQAAAAAAABQgBAAABABQAAABAAAAIAAACIAAAAQgCACAAAEQgDADgBAEQgDACgBADQgFADgDABIgCAAgADuqlQgHAAgHgBIgHgDQgHgCgGgHIgBgBIgFgIQgDgFABgGQAAgDADgFIAAAAIABAAIAAgBIAGgEQgBgBABABQALgEAMAEQAAABABAAQAAAAAAAAQAAAAABAAQAAAAAAgBQAKAEAHAHIAAABIABABIADADIABACQADAFgBAGQgBACAAAEIgDAEQgDADgDABIgFADQgBAAAAAAQgBgBAAAAQAAAAAAAAQAAAAAAABg");
	this.shape_99.setTransform(957.7,341.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#1F1F1F").s().p("AjVIeQAFAGAKAAQAIgCAIgIIAEgGQARBjATBlQATjrA0jlQABAEADADIACABQAHAIAOABQANABAJgGQg7EDgaEPIg7ABQgbiJgUiEgAkIBHQAEAHAJgBQAHgDAGgIQAEgFABgFQAODeAkDdQgIgHgIABQgKABgFAIQgDADgBAFQggjcgOjbgAgPD2QgDgCgBgDIAAAAQgKgJgLgBQgPgCgJAIIAAAAQBBjwA/jQIAIgFQAGAGAKAEIAGACQANACALgFIAEgCIiIHIIgBgBgAkXj8QAEAFAHgCQAIgCAFgJQAEgGABgGQAECOAMCeIgCgBQgEgHgIACQgIAAgGAKQgDAEgBAFQgLiagCiLgAB+jrIgBgBIgFgFIAAgBQgJgIgKgDIgDAAQgJgDgIADQApiXAqiKQgBAGADAFIAFAIIABABQAGAHAHACIAHADQAHABAHAAQAAgBAAAAQAAAAAAAAQAAAAABABQAAAAABAAQgoCEgoCTQgCgDAAgCgAkbn5IADgFQACADAEAAIACAAIACAAQADgBAFgDQABgDADgCQABgEADgDQAAgEACgCQgBB1ADB1IgCABQgFgGgGACQgIACgFAIIgEAIQgChwgBhxgAkjr2IAGgJQAQgYAKgTQAICIgBB+QgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIgBAAQgEgGgEACIgCAAQgEABgCACQgEACgDAEIAAABIgEAGIAAABIgBAAQABhqgJhxgADYofIAAgBQgHgHgKgEQAAABAAAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQgMgEgLAEQgBgBABABIgGAEIAAABIgBAAQAkhqA9h5IAcAmQguBpgdBcIgBgBg");
	this.shape_100.setTransform(960.9,324.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#F40202").ss(2,1,1).p("AELowQAAAIgGAFQgGAGgIAAQgIAAgGgGQgFgFAAgIQAAgIAFgGQAGgGAIAAQAIAAAGAGQAGAGAAAIgAjbo0QAAAJgIAHQgGAHgJAAQgKAAgHgHQgDgDgBgEQgCgEAAgFQAAgEABgDQABgFAEgFQAHgGAKAAQAJAAAGAGQAIAHAAAKgAjFklQAAALgHAHQgIAIgKAAQgLAAgHgIQgEgDgBgDQgDgGAAgGQAAgEABgEQACgFAFgFQAHgHALAAQAKAAAIAHQAHAIAAAKgAC8jvQAAAJgGAGQgGAHgJAAQgJAAgHgHQgGgGAAgJQAAgJAGgGQAHgGAJAAQAJAAAGAGQAGAGAAAJgAioBpQAAAKgHAHQgHAHgKAAQgKAAgIgHQgCgCgCgDQgDgFAAgHQAAgFACgEQABgFAEgEQAIgHAKAAQAKAAAHAHQAHAIAAAKgAh4IxQAAALgIAIQgIAIgLAAQgLAAgIgIQgCgCgCgDQgEgGAAgIQAAgFACgEQACgFAEgFQAIgIALAAQALAAAIAIQAIAIAAALgAAtE5QAAAJgGAGQgGAHgJAAQgJAAgHgHQgGgGAAgJQAAgJAGgGQAHgGAJAAQAJAAAGAGQAGAGAAAJg");
	this.shape_101.setTransform(947.1,324.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(2,1,1).p("AiBhiIAEh3IEKAJIgEB3IglAfIgFCNIAiArIgDBcIkJgJIAChcACJhZIgIDXAiBhiIAgAhIgFCNIgjApg");
	this.shape_102.setTransform(934.8,428.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FF0000").s().p("AlDJEIgEgFQgEgGAAgIQAAgFACgEQACgFAEgFQAIgIALAAQALAAAIAIQAIAIAAALQAAALgIAIQgIAIgLAAQgLAAgIgIgAiUFIQgGgGAAgJQAAgJAGgGQAGgGAKAAQAJAAAGAGQAGAGAAAJQAAAJgGAGQgGAHgJAAQgKAAgGgHgAlvB6IgEgFQgDgFAAgHQAAgFABgEQACgFAEgEQAIgHAKAAQAKAAAHAHQAHAIAAAKQAAAKgHAHQgIAHgJAAQgKAAgIgHgAFnh+QgMgLAAgPQAAgQAMgLQALgLAQAAQAPAAALALQAMALAAAQQAAAPgMALQgLAMgPAAQgQAAgLgMgAGZiIQAMADAAgLQgFAHgHgEQgGgCgDgFIAFgFIAGgIQAEgFACgFIgEADIgGAJIgJAIIgJgLQgGgHgLAEQgPAGAGAPIACADQARALAPgPQAEAHAIACgAFxiRQgHgKAKgGQAKgDAGAIIAHAJQgEAEgFACIgHACQgGAAgEgGgAgFjgQgGgGAAgJQAAgJAGgGQAFgGAKAAQAIAAAGAGQAHAGAAAJQAAAJgHAGQgGAHgIAAQgKAAgFgHgAmOkTIgEgGQgDgGAAgGIABgIQACgFAEgFQAIgHAKAAQALAAAHAHQAIAIAAAKQAAALgIAHQgHAIgLAAQgKAAgIgIgABMojQgGgFABgIQgBgIAGgGQAGgGAIAAQAIAAAFAGQAHAGAAAIQAAAIgHAFQgFAGgIAAQgIAAgGgGgAmgokIgEgHQgCgEAAgFIABgHQABgFAEgFQAHgGAJAAQAKAAAGAGQAHAHABAKQgBAJgHAHQgGAHgKAAQgJAAgHgHg");
	this.shape_103.setTransform(962.8,324.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("ABQB3IgCAAIikgFIgBAAIgBABIgBAAIgCAAIAAAAIgBgBIgBAAIgBAAIAAgBIgBAAIgCgBIAAgBIAAgCIAAAAIAAgDIAAAAIAAgCIABAAIAAgBIABgBIABAAIAAAAIABgBIABAAIABAAIACABIABAAIABgBIABAAIClAGIACAAIABABIAAAAIABAAIABABIAAABIABAAIAAABIAAABIAAADIAAAAIAAABIgBABIAAABIgBAAIgBAAIAAABIgBAAIAAAAgABfA/IAFiOIAlgeIgHDWgAiBh2IAhAgIgFCOIgjAogABCBTIgBAAIiKgFIgBAAIgCAAIgBAAIgBAAIgBAAIgBgBIAAAAIgDgCIAAgBIAAgBIgBgBIAAgCIABgBIAAgBIABAAIAAAAIAAgBIABgBIABAAIABAAIABgBIABAAIABAAIAAAAIABAAIABAAIABAAIABAAIABAAICJAFIAAAAIABABIABAAIABAAIABACIgBAAIABAAIAAACIAAAAIAAADIAAABIAAABIgBAAIAAABIAAAAIgBAAIgBABIAAAAIgBABgABAAxIgBAAIiDgFIgBABIgBAAIgBAAIgCAAIAAAAIgBgBIgBAAIgBAAIgBAAIAAAAIgCgCIAAgBIAAgBIgBgBIAAgCIABgBIAAgBIABgBIAAAAIAAAAIABgBIAAgBIABAAIABAAIABAAIADAAIABAAIAAAAIABAAIABAAIAAAAICEAEIABABIABAAIAAABIABAAIABABIAAABIAAAAIAAABIABABIgBADIAAABIAAAAIgBABIAAAAIAAAAIgBABIAAABIgBAAIAAAAg");
	this.shape_104.setTransform(934.8,430.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("Ao2LEIADhcIAjgpIAFiOIggghIAEh3IEKAJIgEB3IglAfIgFCOIAjArIgDBcgAoBJ5ICmAGIABAAIABAAIAAgBIABAAIAAAAIABgBIABAAIAAgBIABgBIAAAAIAAgBIAAgDIAAAAIAAgCIgBAAIAAAAIgBgBIgBAAIAAgBIgBAAIgCAAIimgGIgBAAIgBAAIgBAAIgBAAIgCAAIgBAAIgBAAIAAABIgBAAIgBABIAAAAIgBAAIAAACIAAAAIAAADIAAABIAAABIAAABIACACIABAAIABAAIABAAIABAAIAAABIABAAIABAAIABAAIABgBIABAAgAn+JNIAAAAIAAADIAAAAIAAACIABABIACABIAAAAIABABIABAAIACAAIABAAIABAAIABAAICLAFIABAAIABAAIAAgBIABAAIABAAIAAgBIABAAIAAAAIAAgBIAAAAIABgBIAAgDIgBgBIAAgBIAAAAIAAgBIgBgBIgBAAIAAgBIgBAAIgBAAIiKgFIgBAAIAAgBIgBAAIgCAAIAAABIgBAAIgBAAIgBAAIgBAAIgBAAIgBABIAAABIAAAAIgBAAIgBAAgAlrI4IABABIABAAIAAgBIABAAIABAAIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAgEIAAAAIAAgCIgBAAIAAAAIgBgBIAAAAIgBgBIgBgBIgBAAIiEgFIgBAAIgBABIgBAAIAAgBIgBAAIgDAAIgBAAIAAABIgCAAIAAABIgBAAIAAABIAAAAIgBAAIAAACIgBAAIAAADIABABIAAABIAAAAIACACIAAAAIACABIABAAIAAAAIABAAIABAAIABAAIABAAIABAAIABAAICEAEgAnYICIBcADIAEh/IhcgDgAn4E3IgIAFIgCACIgGAHQAAAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAIAAACIgBAAIgCAIIABABIACAJIABAAIABADIABABIAEAEIADACIAHADIAHABIAKgDIAGgFIAEgIIABAAIgBgBIABgBQACgIgCgIIgFgIIgCgCQgEgEgGgCIgHAAIgFAAgAlTFbIAAAAIABgBIAAAAIABAAIAAgCIAAAAIABgBIABAAIAAgDIgBgBIAAgBIgBAAIAAgBIgBgBIAAAAIgBAAIgBgBIgBAAIhxgEIgBAAIAAABIgBAAIgBgBIgBAAIAAAAIgCAAIgBAAIgBAAIAAABIgBAAIgBABIAAAAIgBAAIAAACIAAAAIAAADIAAABIAAABIAAABIACACIABAAIABAAIABAAIAEABIABAAIAAAAIABgBIBwAEIABAAIABAAIAAgBIABABgAEvqmIAAgIIEIAAIAAAIgAEHqoQgJgCgEgHQgPAPgQgLIgCgDQgHgPAQgGQAKgEAGAHIAJALIAJgIIAGgJIAEgDQgCAFgDAFIgHAIIgFAFQADAFAGACQAIAEAEgHQAAAJgHAAIgEgBgADhrBQgKAGAHAKQAGAIALgEQAFgCAEgEIgHgJQgEgGgHAAIgFABgAFBrGIAAgGIDyAAIAAAGg");
	this.shape_105.setTransform(977.4,378.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#1F1F1F").s().p("AinMuIgBgLIAAAAIgZjrIADAEQAIAJALgBQAMABAHgJQAIgHAAgMQAAgLgIgIQgHgHgMgBQgLABgIAHQgEAFgCAFQgWjagTjZIADAFQAIAHAKAAQAKAAAHgHQAHgHAAgKQAAgKgHgHQgHgIgKABQgKgBgIAIQgDAEgCAFQgQi9gOi9IAFAGQAIAIAKAAQALAAAHgIQAIgHAAgLQAAgKgIgIQgHgHgLAAQgKAAgIAHQgEAFgCAFIgRj+IAFAHQAGAHAKAAQAJAAAHgHQAHgHAAgJQAAgJgHgIQgHgGgJAAQgKAAgGAGQgEAFgCAFIgLi5QAbgrAaAEQAYLQBjL+IGC3bIAlAvImTYkIgBAAIgDANgAgOEiQgHAHAAAJQAAAIAHAGQAGAHAIAAQAJAAAGgHQAGgGABgIQgBgJgGgHQgGgGgJAAQgIAAgGAGgACAkGQgHAHABAIQgBAJAHAHQAGAGAJAAQAJAAAGgGQAHgHAAgJQAAgIgHgHQgGgGgJAAQgJAAgGAGgADSpGQgGAGAAAIQAAAIAGAFQAGAGAHABQAJgBAFgGQAGgFAAgIQAAgIgGgGQgFgGgJAAQgHAAgGAGg");
	this.shape_106.setTransform(949.4,325.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#F40202").ss(1,1,1).p("AjdooQAAAKgIAHQgHAHgKAAQgKAAgHgHQgDgDgCgEQgCgFAAgFQAAgFABgDQACgGAEgEQAHgHAKAAQAKAAAHAHQAIAIAAAKgAEPpBQAAAKgHAHQgGAHgKAAQgJAAgHgHQgHgHAAgKQAAgJAHgHQAHgGAJAAQAKAAAGAGQAHAHAAAJgAC8kHQAAAJgGAHQgHAGgJAAQgJAAgGgGQgHgHAAgJQAAgJAHgGQAGgHAJAAQAJAAAHAHQAGAGAAAJgAjJjcQAAAJgHAHQgGAGgKAAQgJAAgHgGQgDgDgBgEQgCgEAAgFQAAgEABgDQABgFAEgFQAHgGAJAAQAKAAAGAGQAHAHAAAKgAipCNQAAAKgHAHQgHAHgKAAQgKAAgHgHQgCgDgCgDQgDgFAAgGQAAgFACgDQABgFAEgEQAHgHAKAAQAKAAAHAHQAHAHAAAKgAh3I8QAAAMgJAIQgIAJgMAAQgMAAgIgJQgCgCgBgBQgFgHAAgKQAAgGACgGQACgFAEgDQAIgIAMAAQAMAAAIAIQAJAIAAAMgAAmE1QAAAIgHAGQgGAHgIAAQgJAAgGgHQgFgGAAgIQAAgJAFgGQAGgGAJAAQAIAAAGAGQAHAGAAAJg");
	this.shape_107.setTransform(932.9,324.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(2,1,1).p("ACJAWIgIDXIgDBdIkJgJIAChdIAIjXIAEh2IEKAJIgEB2IglAeIgFCPIAiAqAgVhsIgBgMQgMhpgLhoAiBANIAgAgIgFCPIgjAo");
	this.shape_108.setTransform(920.3,416);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FF0000").s().p("Ak+JQIgDgDQgGgHABgKQgBgGADgGQACgFAEgEQAIgHAMAAQAMAAAIAHQAIAJAAAMQAAAMgIAIQgIAJgMAAQgMAAgIgJgAiTFDQgHgGAAgJQAAgIAHgGQAGgHAIAAQAJAAAGAHQAGAGABAIQgBAJgGAGQgGAGgJABQgIgBgGgGgAloCeIgEgGQgDgFAAgGIABgIQACgFAEgEQAHgIAKAAQAKAAAHAIQAHAGAAALQAAAKgHAHQgHAGgKAAQgKAAgHgGgAFlh8QgLgLAAgQQAAgPALgMQALgLAQAAQAPABALAKQALAMAAAPQAAAQgLALQgLAMgPAAQgQAAgLgMgAGYiGQALADAAgMQgEAIgIgEQgGgDgDgEIAFgGIAHgIQADgFABgEIgDADIgHAJIgIAIIgJgLQgHgHgKAEQgPAFAGAQIADADQAQAKAOgOQAFAHAJACgAFviQQgHgJAKgHQAKgCAGAIIAHAJQgEAEgFACIgHABQgGAAgEgGgAmGjNIgFgGQgCgEAAgFIABgGQACgGAEgEQAGgHAKAAQAJAAAHAHQAGAGAAAKQAAAJgGAGQgHAHgJAAQgKAAgGgHgAAAj3QgFgHAAgJQAAgJAFgHQAHgGAJAAQAJAAAHAGQAGAHAAAJQAAAJgGAHQgHAGgJAAQgJAAgHgGgAmeoXIgEgHQgDgFAAgFIACgIQABgGAEgEQAIgHAKAAQAKAAAHAHQAHAIABAKQgBAJgHAIQgHAHgKAAQgKAAgIgHgABRowQgGgHAAgKQAAgJAGgHQAIgHAJAAQAJAAAHAHQAHAHAAAJQAAAKgHAHQgHAGgJABQgJgBgIgGg");
	this.shape_109.setTransform(948,324.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#CC3300").s().p("AhJAYIgHgDIgDgCIgEgEIgBgBIgBgDIgBAAIgCgJIgBgBIACgHIABAAIAAgCQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAgBIAGgHIACgCIAIgFQAFgBAHABQAGACAEAEIACACIAFAIQACAIgCAHIgBABIABABIgBAAIgEAIIgGAFIgKADgABaALIgBAAIgBAAIgBAAIhvgEIgBABIAAAAIgBAAIgEgBIgBAAIgBAAIgBAAIgCgCIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIABAAIAAAAIABgBIABAAIAAgBIABAAIABAAIACAAIAAAAIABAAIABABIABAAIAAgBIABAAIBwAEIABAAIABAAIABAAIAAAAIABABIAAABIABAAIAAABIABABIAAADIgBAAIgBABIAAAAIAAACIgBAAIAAAAIgBABg");
	this.shape_110.setTransform(919.9,410.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#1F1F1F").s().p("AisMvIgBgNIgXjQIADADQAIAJANAAQALAAAJgJQAIgHAAgNQAAgMgIgIQgJgIgLAAQgNAAgIAIQgEAEgCAFQgVjNgTjLIAFAFQAGAHALAAQAJAAAHgHQAHgHAAgKQAAgKgHgHQgHgHgJAAQgLAAgGAHQgFAEgBAFQgQisgNisIAEAHQAHAHAJAAQAKAAAHgHQAGgHAAgJQAAgKgGgGQgHgHgKABQgJgBgHAHQgEAEgBAGQgMiegLidIAFAGQAIAHAKABQAJgBAIgHQAHgHAAgKQAAgKgHgIQgIgGgJgBQgKABgIAGQgEAFgCAFIgLjBIA3gkQAXK9BiL+IGD3bQAdACAUAfImfYyIgBgBIgDAPgAgWErQgGAHAAAIQAAAIAGAHQAGAGAJAAQAHAAAHgGQAGgHAAgIQAAgIgGgHQgHgGgHAAQgJAAgGAGgAB+kRQgGAHgBAIQABAJAGAHQAHAGAJABQAIgBAHgGQAGgHABgJQgBgIgGgHQgHgGgIAAQgJAAgHAGgADPpLQgGAGgBAKQABAJAGAHQAHAHAKAAQAJAAAGgHQAIgHgBgJQABgKgIgGQgGgHgJAAQgKAAgHAHgAiuMiIABAAIABANg");
	this.shape_111.setTransform(935.4,323.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("ABQB3IgCAAIikgFIgBAAIgBABIgCAAIgBAAIAAAAIgBgBIgBAAIgBAAIAAgBIgBAAIgCgBIAAgBIAAgCIAAAAIAAgDIAAAAIAAgCIABAAIAAgBIABgBIABAAIAAAAIABgBIABAAIABAAIABABIACAAIABgBIABAAIClAGIABAAIACABIAAAAIABAAIABABIAAABIABAAIAAABIAAABIAAADIAAAAIAAABIgBABIAAABIgBAAIgBAAIAAABIgBAAIgBAAgABfA/IAFiOIAlgeIgHDWgAiBh2IAhAgIgFCOIgjAogABCBTIgBAAIiKgFIgBAAIgCAAIAAAAIgCAAIgBAAIgBgBIgBAAIgCgCIAAgBIAAgBIgBgBIAAgCIABgBIAAgBIABAAIAAAAIAAgBIABgBIABAAIABAAIABgBIABAAIABAAIAAAAIABAAIABAAIABAAIABAAIAAAAICKAFIABAAIABABIAAAAIABAAIABACIgBAAIABAAIAAACIAAAAIAAADIAAABIAAABIgBAAIAAABIAAAAIgBAAIAAABIgBAAIAAABgABAAxIgBAAIiDgFIgBABIgBAAIgCAAIgBAAIAAAAIgBgBIgBAAIgBAAIgBAAIAAAAIgCgCIAAgBIAAgBIgCgBIABgCIABgBIAAgBIABgBIAAAAIAAAAIABgBIAAgBIABAAIABAAIABAAIACAAIACAAIAAAAIABAAIABAAIABAAICDAEIABABIABAAIABABIAAAAIABABIAAABIAAAAIAAABIABABIgBADIAAABIAAAAIAAABIAAAAIgBAAIAAABIgBABIgBAAIAAAAg");
	this.shape_112.setTransform(920.3,429.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AozK9IADhdIAjgoIAFiPIghggIAEh3IELAJIgEB3IglAeIgFCPIAiAqIgDBdgAn+JyIClAFIACAAIAAAAIABAAIAAAAIABgBIABAAIAAAAIABgBIAAgBIAAgBIABAAIAAgDIgBgBIAAgBIAAAAIAAgBIgCgBIAAAAIgBAAIgBgBIgBAAIimgGIgBAAIgBABIgCAAIgBgBIgBAAIgBAAIgBABIgBAAIgBAAIgBABIAAABIAAAAIAAACIgBAAIAAADIABAAIAAACIAAABIACABIAAAAIABABIABAAIABAAIABABIAAAAIABAAIACAAIABgBIABAAgAn7JFIgBABIAAACIABABIAAABIAAABIACACIABAAIABABIABAAIABAAIABAAIACAAIABAAICLAFIABAAIAAAAIABgBIAAAAIABgBIABAAIAAAAIAAgBIABAAIAAgBIAAgBIAAgDIAAAAIAAgCIgBAAIABAAIgBgCIgBAAIgBAAIgBgBIgBAAIiKgFIAAAAIgBAAIgBAAIgBAAIgBAAIAAAAIgCAAIgBAAIAAABIgBAAIgBAAIgBABIAAABIAAAAIgBAAgAloIxIABAAIAAAAIABAAIABAAIAAgBIABgBIAAAAIAAAAIABgBIAAAAIAAgBIABgDIgBgBIAAgBIAAAAIAAgBIgBgBIgBAAIgBgBIgBAAIgBgBIiEgEIgBAAIAAAAIgBAAIgBAAIgBAAIgCAAIgBAAIgBAAIgBAAIgBABIAAABIAAAAIgBAAIAAABIAAABIgBABIgBACIABABIAAABIABABIABACIABAAIABAAIABAAIABAAIABABIAAAAIABAAIABAAIACAAIAAgBICFAFgAnVH6IBbADIAEh+IhbgDgAn1EwIgJAEIgCACIgGAIQAAAAABAAQAAAAAAABQAAAAAAAAQgBAAAAAAIAAACIAAABIgCAIIABAAIACAJIAAABIACACIABABIADAEIADADIAHACIAIACIAJgEIAGgFIAFgHIAAgBIAAgBIAAgBQACgIgCgHIgFgJIgCgBQgEgEgGgCIgGgBIgFABgAlRFTIABAAIAAAAIABgBIAAAAIAAgBIABgBIAAAAIABgBIAAgDIgBAAIAAgCIAAAAIAAAAIgBgBIgBAAIAAgBIgCgBIgBAAIhwgDIgBAAIgBAAIAAAAIgCAAIAAAAIgBgBIgBAAIgBAAIgBABIgBAAIgBAAIgBABIAAABIAAAAIAAACIgBAAIAAADIABAAIgBABIABACIACABIAAAAIABABIABAAIAEAAIABAAIABAAIAAAAIBxADIABAAIAAAAIAAAAIABAAgAEsqfIAAgIIEIAAIAAAIgAEEqgQgIgCgFgHQgOAOgRgLIgCgCQgHgQAQgGQAKgDAHAHIAJALIAIgJIAHgIIADgDQgBAEgEAFIgHAIIgEAFQADAFAGADQAHADAFgHQAAAJgIAAIgEAAgADfq6QgKAHAHAJQAGAJAKgEQAGgCAEgFIgHgIQgFgGgHAAIgEAAgAE+q/IAAgGIDyAAIAAAGg");
	this.shape_113.setTransform(962.7,378);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(2,1,1).p("ACHhXIglAeIgCCHIAjAoIgBBYIkKgFIABhYIAEjNIAChxIEKAFIgCBxIgEDNAiDhcIAhAfIgDCHIgiAn");
	this.shape_114.setTransform(911.8,425.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FF0000").s().p("AgaAbQgLgMAAgPQAAgPALgLQAMgLAOAAQAPAAAMALQALALAAAPQAAAPgLAMQgMALgPAAQgOAAgMgLgAAYARQAMACAAgLQgFAHgIgEQgGgCgDgFIAFgEIAHgIQADgFACgEIgDACIgHAJIgJAHIgJgJQgFgIgKAEQgQAGAHAPIACACQAQALAOgOQAFAHAIACgAgPAHQgIgJAKgGQAKgCAGAHIAHAIQgEAEgGACIgFACQgGAAgEgGg");
	this.shape_115.setTransform(961.3,309);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#CCCCCC").s().p("AguA8IACh4IBbACIgCB3g");
	this.shape_116.setTransform(911.8,421);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("ABSBwIgBAAIilgCIgBAAIgBABIgCAAIgBAAIAAAAIgBgBIgBAAIgBAAIgBgBIAAAAIgCgCIAAgBIAAgBIgBAAIAAgDIABAAIAAgCIAAAAIAAgBIABgBIABAAIABAAIABgBIABAAIABAAIABABIACAAIABgBIABAAIClAEIACAAIABAAIAAABIABAAIABABIAAAAIABAAIAAACIAAAAIAAADIAAAAIAAABIgBABIAAABIAAAAIgBAAIgBABIgBAAIAAAAgABgA7IADiHIAkgeIgDDMgAiDhvIAhAfIgCCHIgiAngABEBOIgBAAIiLgCIgBAAIgBAAIgBgBIgCAAIgBAAIgBgBIAAAAIgCgCIgBAAIAAgCIAAAAIAAgCIAAgBIAAgBIABAAIAAAAIAAgBIABgBIABgBIABAAIAAAAIABAAIACAAIABAAIABAAIABAAIABAAIAAAAICKADIABAAIABABIAAAAIABAAIABACIAAAAIABAAIAAABIAAAAIAAAEIAAABIAAAAIgBABIAAAAIAAAAIgBABIgBAAIAAAAIgBABgABBAuIgBAAIiEgDIAAABIgCAAIgBAAIgBAAIAAAAIgBgBIgBAAIgBAAIgBgBIgBAAIgBgBIgBgBIAAgBIgBgBIAAgCIABgBIAAgBIABgBIAAAAIAAAAIABgBIAAAAIACAAIAAgBIABABIADAAIABAAIAAAAIABAAIABAAIABAAICDACIABAAIABAAIABABIABAAIABABIAAABIAAAAIAAACIABAAIAAADIgBAAIAAABIAAAAIAAABIgBAAIAAABIgBAAIgBAAIAAABg");
	this.shape_117.setTransform(911.7,427.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AnfKyIABhYIAigmIADiIIghgfIAChxIELAFIgCBxIglAdIgCCIIAjAoIgBBYgAmsJqICmADIACAAIAAAAIABgBIAAAAIABAAIABgBIABAAIAAgBIAAAAIAAgBIABAAIAAgDIgBgBIAAgBIAAAAIAAgBIgCgBIAAAAIgBAAIgBgBIgBAAIingDIgBAAIgBABIgBAAIgBgBIgCAAIgBAAIgBABIAAAAIgBAAIgBABIAAABIgBAAIAAACIAAAAIAAADIAAAAIAAABIABABIABACIABAAIABAAIABAAIABAAIAAABIABAAIABAAIABAAIABgBIABAAgAmpI/IAAABIgBAAIAAADIABAAIAAACIAAAAIACACIABAAIABABIABAAIABAAIABAAIACAAIABAAICLADIABAAIABAAIAAgBIABAAIABgBIAAAAIABAAIAAgBIAAAAIAAgBIABgBIAAgDIgBAAIAAgBIAAAAIAAgBIgBgBIgBAAIgBgBIgBAAIgBAAIiKgDIgBAAIAAAAIgBAAIgCAAIgBAAIgBAAIgBAAIgBAAIgBAAIgBABIAAABIAAAAIgBAAIAAABgAkWIrIABAAIAAAAIABgBIABAAIAAAAIABgBIAAAAIAAgBIABAAIAAgBIAAAAIAAgDIAAgBIAAgBIgBAAIAAgBIgBgBIAAAAIgBgBIgBAAIgBAAIiFgDIgBAAIAAABIgBAAIgBgBIgBAAIgCAAIgBAAIgBAAIgBAAIgBABIAAABIAAAAIgBAAIAAABIAAABIgBABIAAACIABABIAAABIAAAAIACACIAAAAIACABIABAAIAAAAIABABIABAAIABAAIABAAIABAAIABgBICFADgAmFH4IBcACIACh5IhcgBgAmoE4IgJAEIgCACIgFAIQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIAAACIgBAAIgBAIIABAAIABAJIABABIABACIABABIAEADIADADIAHACIAIABQAEAAAFgDIAGgFIAEgHIABgBIAAgBIAAgBQACgHgCgHIgGgIIgCgCQgDgDgGgCIgHgBIgFABgAkFFXIABAAIABAAIABAAIAAAAIABgBIAAAAIABAAIAAgBIAAgBIAAAAIABgBIAAgDIgBAAIAAgCIAAAAIAAAAIgBgBIgBAAIAAgBIgCAAIgBAAIhxgCIgBAAIAAAAIgBAAIgBAAIgBAAIAAAAIgCAAIgBAAIgBAAIAAABIgBAAIgBABIAAAAIgBAAIAAACIAAAAIAAADIAAABIAAABIABABIACABIAAAAIABABIABAAIAEAAIABAAIABAAIAAgBIBxACgADYqQIAAgIIEIAAIAAAIgACwqSQgIgCgFgHQgOAPgRgLIgCgDQgHgPAQgGQAKgEAHAHIAJALIAIgIIAHgJIADgDQgBAFgEAFIgHAIIgEAFQADAFAGACQAHAEAFgHQAAAJgIAAIgEgBgACLqrQgKAGAHAKQAGAIAKgEQAGgCAEgEIgHgJQgFgGgHAAIgEABgADqqwIAAgGIDyAAIAAAGg");
	this.shape_118.setTransform(946.1,376.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#CC3300").s().p("AhdLtIgHgDIgCgCIgEgEIgCgBIgBgCIgBAAIgBgJIgBgBIABgHIABgBIAAgBQAAAAAAgBQABAAAAAAQAAAAgBAAQAAAAAAgBIAGgHIACgCIAIgFQAFgBAHABQAGACADAEIADABIAFAIQACAHgCAIIAAABIAAABIgBAAIgEAHIgGAFQgEADgFAAgABFLeIgBAAIhvgCIgBAAIgBAAIgBAAIgDAAIgBAAIgBAAIgBAAIgCgCIgBgBIAAgBIAAAAIAAgDIAAAAIAAgCIABAAIAAgBIABgBIABAAIABAAIABgBIABAAIABAAIAAABIABAAIABAAIABAAIAAgBIACAAIBvACIABAAIACABIAAAAIABAAIABABIAAABIABAAIAAABIABABIAAADIgBAAIAAABIgBAAIAAABIAAAAIgBABIgBAAIAAAAIgBABgAg9GdQgKAAgIgIIAAgBQgIgHAAgLQAAgHADgFIAAgBIAFgGQAIgHALAAQALAAAHAHIABABIADAEQAEAHAAAIIAAAGIgDAGIgFAGQgIAIgKAAIgBAAgABWCjQgKAAgIgHIgBgBQgCgDgCgEQgDgFAAgHQABgGACgFIABgBIADgGIABAAQAIgIALAAQAKABAIAHIAAAAIAFAFIAAABQADAGAAAHIgBAHIgCAGIgFAGQgIAHgKAAIgBAAgAiEg3QgLAAgHgHIAAgBQgIgIAAgLQAAgGADgFIAAAAIAFgHQAIgIALAAQALABAIAHIABACIACADQAEAGAAAIIAAAHIgCAEQgCAEgEAEQgIAHgKAAIgBAAgACdlFQgHgCgFgFIgBgBQgDgDgBgEQgDgFAAgHQAAgGADgFIAAgBIAEgGIABgBQACgCADgBQAGgEAIAAIACAAQAJABAHAGIAAABIAEAFIAAABIADAFIABAIIgBAHIgDAGIgBADIgDACQgJAIgKAAIgGAAgAjLmYIgBAAQgHgIAAgLQAAgGACgFIAGgIQAIgHALAAQALAAAHAIIAEAFQAEAGAAAIIgBAHQgCAHgFAFQgIAHgLAAQgLAAgHgIgAjnqxIgEAAQgFgBgFgEIgCgCIgBgBIgEgHQgDgFAAgHQAAgGACgEIABgBIAAgBIAFgGIAAAAQAEgEAFgCQAEgCAGAAIACAAQAJABAHAHIAAAAIAFAFIAAABIABAAQACAGAAAHIAAAFIAAACIgDAGIgFAGIgHAFQgFACgHAAIgCAAgADfq4QgGgBgGgGIgBgBQgDgDgCgDQgCgGAAgGIACgKIAAgBIAAgBIABgBIAEgGIABAAQAIgHALAAIACAAQAJAAAGAHIABABIABABIADADIABABQADAGAAAIIAAAGIgDAGIgGAGIgEAEIgCABQgFADgHAAIgGgBg");
	this.shape_119.setTransform(913.1,337.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#1F1F1F").s().p("AgiMRIgpkJQAIAHAKAAQALABAIgIIAFgGIAdDDIBHm+QACAEADADIABABQAHAHAKAAQALAAAIgIIhTIEgAiSAzIAAAAQAHAIALAAQALAAAIgIQAEgDACgFIBBG3QgHgIgLAAQgLAAgIAHIgEAHgAByDtIgEgEIgBgBQgHgHgLAAQgLAAgIAHIAAAAIBHm7IAGgHQAFAFAHACIAGABQALAAAIgIIADgDIhLHLIAAgBgAjHklQAHAIALAAQALAAAIgIQAFgFACgHIAwFAIgBgBQgIgIgLAAQgLAAgIAHIgFAHgAC/j6IgBgBIgEgFIAAAAQgHgHgJAAIgCAAQgIAAgGADIA1lcQAAAHADAFQABAEADADIABABQAGAFAHACIAFAAQAHAAAGgDIABAAIg2FTIgCgFgAjzo+IADgFQAEADAGABIADABIACAAQAHAAAGgDIAGgFIAFgGIADgGIAAAAIAnEHIgDABQgHgIgLAAQgLAAgIAHIgFAHgAkQsCIAKgFQAKgEATgFIAFgBIAcCsIgBgBIAAgBIgEgEIgBgBQgHgGgJgBIgCAAQgGAAgEACQgFACgEADIAAABIgEAFIgBABIAAABgADtsDQAQARAPAMIAFAEIgUBxIgBgBIAAAAQgHgHgJgBIgCAAQgLAAgIAHIgBABIgEAGIAAABIgBABg");
	this.shape_120.setTransform(912.6,326);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(2,1,1).p("ACHhXIglAeIgCCHIAjAoIgBBYIkKgFIABhYAiDhcIAChxIEKAFIgCBxIgEDNAiDhcIAhAfIgDCHIgiAng");
	this.shape_121.setTransform(901.8,424);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#CCCCCC").s().p("AguA7IACh3IBbABIgCB4g");
	this.shape_122.setTransform(901.8,419.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AnTKrIAChYIAignIACiIIghgfIADhxIELAFIgDBxIgkAeIgDCIIAkAoIgCBYgAmfJjICmACIABAAIABAAIAAAAIABAAIABgBIABAAIAAAAIAAgBIABgBIAAAAIAAgBIAAgDIAAAAIAAgCIgBAAIAAAAIgBgBIgBAAIAAgBIgBAAIgCAAIimgDIgBAAIgBAAIgCAAIgBAAIgBAAIgBAAIgBAAIgBABIgBAAIgBABIAAAAIAAAAIAAACIgBAAIAAADIABABIAAABIAAABIACABIAAAAIABABIABAAIABAAIABABIAAAAIABAAIACAAIABgBIABAAgAmdI3IAAABIAAABIAAACIAAABIAAABIABABIACABIAAAAIABABIABAAIACAAIABABIABAAIABAAICMACIABAAIAAAAIABgBIAAAAIABAAIABgBIAAAAIAAAAIABgBIAAAAIAAgBIAAgDIAAgBIAAgBIgBAAIAAAAIgBgCIgBAAIAAAAIgBgBIgBAAIiLgCIAAAAIgBgBIgBAAIgBAAIgBAAIgCAAIgBAAIAAABIgBAAIgBAAIgBABIAAABIAAAAIgBAAgAkKIjIABAAIABAAIAAAAIABAAIABgBIAAgBIABAAIAAAAIAAgBIAAAAIABgBIAAgDIgBAAIAAgCIAAAAIAAAAIgBgBIgBAAIgBgBIgBgBIgBAAIiEgCIgBAAIgBAAIgBAAIAAAAIgBAAIgDAAIgBgBIAAABIgCAAIAAABIgBAAIAAABIAAAAIgBAAIAAACIgBAAIAAACIABABIAAABIABABIABACIABAAIABAAIABABIABAAIABAAIAAAAIABAAIABAAIACAAIAAAAICFACgAl4HxIBbABIACh4IhbgCgAmbEwIgJAFIgCACIgGAHQABABAAAAQAAAAAAAAQAAAAAAAAQAAABgBAAIAAABIAAABIgCAHIABABIACAJIAAAAIACACIABABIAEAEIADACIAHADIAHAAQAFAAAFgDIAFgFIAFgHIABAAIgBgBIABgBQABgIgCgHIgFgIIgCgBQgEgEgGgCIgGgBIgFABgAj4FQIABAAIAAAAIABgBIABAAIAAAAIABgBIAAAAIAAgBIABAAIAAgBIABAAIAAgDIgBgBIAAgBIgBAAIAAgBIgBgBIAAAAIgBAAIgBgBIgBAAIhxgCIgBAAIgBABIAAAAIgCAAIAAAAIgBgBIgBAAIgBAAIgBABIgBAAIgBAAIgBABIAAABIAAAAIAAACIgBAAIAAADIABAAIAAABIAAABIACACIABAAIABAAIABAAIAEAAIABAAIAAAAIABAAIBxACgADMqJIAAgIIEIAAIAAAIgACkqKQgJgCgEgHQgPAOgQgLIgCgCQgHgQAQgGQAKgDAGAHIAJALIAJgJIAGgIIAEgDQgCAEgDAFIgHAIIgFAFQADAFAGADQAIADAEgHQAAAJgHAAIgEAAgAB+qkQgKAHAHAJQAGAJALgEQAFgCAEgFIgHgIQgEgGgHAAIgFAAgADeqpIAAgGIDyAAIAAAGg");
	this.shape_123.setTransform(934.8,375.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("ABSBwIgBAAIilgCIgBAAIgBAAIgCAAIgBAAIAAAAIgBAAIgBAAIgBAAIgBgBIAAAAIgCgBIAAgBIAAgCIgBAAIAAgDIABAAIAAgCIAAAAIAAAAIABgBIABAAIABgBIABAAIABAAIABAAIABAAIACAAIABAAIABAAIClADIACAAIABAAIAAAAIABAAIABABIAAABIABAAIAAABIAAABIAAADIAAABIAAAAIgBABIAAAAIAAAAIgBABIgBAAIgBAAIAAABgABgA6IADiHIAkgdIgDDNgAiDhvIAhAfIgCCHIgiAmgABEBOIgBAAIiLgDIgBAAIgBAAIgBAAIgCAAIgBAAIgBgBIAAAAIgCgBIgBgBIAAgBIAAgBIAAgDIAAAAIAAgBIABgBIAAAAIAAAAIABgBIABAAIABAAIAAgBIABAAIACAAIABAAIABAAIABAAIABABIAAAAICKACIABAAIABAAIAAABIABAAIABABIAAABIABAAIAAABIAAABIAAADIAAABIAAAAIgBAAIAAABIAAAAIgBAAIgBABIAAAAIgBABgABBAuIgBAAIiEgCIAAAAIgCAAIgBAAIgBAAIAAAAIgBAAIgBAAIgBgBIgBgBIgBAAIgBgCIgBAAIAAgBIgBgBIAAgCIABAAIAAgCIABgBIAAAAIAAAAIABgBIAAgBIACAAIAAAAIABAAIADAAIABAAIAAABIABAAIABgBIABAAICDADIABAAIABABIABABIABAAIABABIAAAAIAAAAIAAACIABAAIAAADIgBAAIAAABIAAABIAAAAIgBAAIAAABIgBABIgBAAIAAAAg");
	this.shape_124.setTransform(901.7,425.9);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#1F1F1F").s().p("AgsNDIgpkJQAIAIAKAAQALAAAIgIIAFgGIAdDEIBHm/QACAEADADIABABQAHAHAKAAQALABAIgIIhTIDgAicBlIAAABQAHAHALAAQALABAIgIQAEgEACgEIBBG2QgHgHgLAAQgLAAgIAHIgEAGgABoEgIgEgFIgBAAQgHgHgLgBQgLAAgIAIIAAAAIBHm8IAGgGQAFAFAHACIAGAAQALAAAIgIIADgCIhLHLIAAgBgAjRjzQAHAIALAAQALAAAIgHQAFgFACgHIAwFAIgBgCQgIgHgLgBQgLAAgIAIIgFAHgAC1jHIgBgBIgEgFIAAgBQgHgGgJgBIgCAAQgIAAgGAEIA1lcQAAAGADAGQABADADADIABABQAGAGAHABIAFABQAHAAAGgDIABgBIg2FUIgCgFgAj9oMIADgFQAEAEAGABIADAAIACAAQAHAAAGgCIAGgFIAFgGIADgGIAAAAIAnEHIgDAAQgHgIgLAAQgLAAgIAHIgFAIgAkQqQQAIgIAMgRQALgQAHgJIAYCPIgBAAIAAgBIgEgFIgBAAQgHgHgJgBIgCAAQgGAAgEACQgFACgEAEIAAAAIgEAGIgBABIAAABgADssDQAFADAHADIASAHIAHAHIgeCxIgBgBIAAgBQgHgHgJAAIgCAAQgLAAgIAHIgBAAIgEAGIAAABIgBABgAj8sxIABABIgCABIABgCgAD3tAIAAgDIABADIgBAAg");
	this.shape_125.setTransform(903.6,319.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#CC3300").s().p("AhcLtIgIgDIgCgCIgFgEIgBgBIgBgCIgBAAIgBgJIgBgBIABgHIABgBIAAgBQAAAAAAgBQABAAAAAAQAAAAgBAAQAAAAAAgBIAGgHIACgCIAJgFQAEgBAHABQAGACADAEIACABIAGAIQACAHgCAIIAAABIAAABIgBAAIgEAHIgFAFQgGADgEAAgABFLeIgBAAIhwgCIAAAAIgBAAIgBAAIgDAAIgBAAIgBAAIgBAAIgCgCIgBgBIAAgBIAAAAIAAgDIAAAAIAAgCIABAAIAAgBIABgBIABAAIABAAIABgBIABAAIABAAIABABIAAAAIABAAIABAAIAAgBIABAAIBwACIABAAIACABIAAAAIABAAIABABIAAABIABAAIAAABIABABIAAADIgBAAIAAABIgBAAIAAABIgBAAIAAABIgBAAIAAAAIgBABgAg9GdQgKAAgIgIIgBgBQgHgHAAgLQAAgHADgFIAAgBIAFgGQAIgHALAAQALAAAHAHIABABIADAEQAEAHAAAIIgBAGIgCAGIgFAGQgIAIgKAAIgBAAgABWCjQgKAAgIgHIAAgBQgDgDgCgEQgDgFAAgHQABgGACgFIAAgBIAFgGIAAAAQAIgIALAAQAKABAIAHIAAAAIAFAFIAAABQADAGAAAHIAAAHIgDAGIgFAGQgIAHgKAAIgBAAgAiEg3QgLAAgHgHIAAgBQgIgIAAgLQAAgGADgFIAAAAIAFgHQAIgIALAAQALABAIAHIABACIACADQAEAGAAAIIAAAHIgCAEQgCAEgEAEQgIAHgKAAIgBAAgACdlFQgHgCgFgFIgBgBQgDgDgBgEQgDgFAAgHQAAgGADgFIAAgBIAEgGIAAgBQADgCADgBQAGgEAIAAIACAAQAIABAIAGIAAABIAEAFIAAABIADAFIAAAIIAAAHIgDAGIgBADIgDACQgJAIgLAAIgFAAgAjLmYIgBAAQgHgIAAgLQAAgGACgFIAGgIQAIgHALAAQALAAAHAIIAEAFQAEAGAAAIIgBAHQgCAHgFAFQgIAHgLAAQgLAAgHgIgAjnqxIgEAAQgFgBgFgEIgBgCIgCgBIgEgHQgDgFAAgHQAAgGACgEIABgBIAAgBIAFgGIAAAAQAEgEAFgCQAEgCAGAAIACAAQAJABAHAHIABAAIADAFIABABIABAAQACAGAAAHIAAAFIAAACIgDAGIgFAGIgHAFQgFACgHAAIgCAAgADfq4QgGgBgGgGIgBgBQgDgDgCgDQgCgGAAgGIACgKIAAgBIAAgBIABgBIAEgGIABAAQAIgHALAAIACAAQAJAAAHAHIAAABIABABIADADIAAABQAEAGAAAIIAAAGIgEAGIgEAGIgFAEIgCABQgFADgHAAIgGgBg");
	this.shape_126.setTransform(903.1,336);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AnRKrIABhYIAignIACiIIghgfIADhxIELAFIgDBxIgkAeIgCCIIAjAoIgBBYgAmeJjICmACIABAAIABAAIAAAAIABAAIABgBIABAAIABAAIAAgBIAAgBIAAAAIABgBIAAgDIgBAAIAAgCIAAAAIAAAAIgCgBIgBAAIAAgBIgBAAIgCAAIimgDIgBAAIgBAAIgCAAIgBAAIgBAAIgBAAIgBAAIAAABIgBAAIgCABIAAAAIAAAAIAAACIgBAAIAAADIABABIAAABIAAABIACABIABAAIABABIABAAIAAAAIABABIAAAAIABAAIACAAIABgBIABAAgAmbI3IAAABIgBABIAAACIABABIAAABIAAABIACABIAAAAIABABIABAAIACAAIABABIACAAIABAAICLACIABAAIABAAIAAgBIABAAIABAAIAAgBIAAAAIAAAAIABgBIAAAAIAAgBIAAgDIAAgBIAAgBIgBAAIAAAAIAAgCIgBAAIgBAAIgBgBIgBAAIiLgCIAAAAIAAgBIgBAAIgCAAIgBAAIgCAAIgBAAIAAABIgBAAIgBAAIgBABIAAABIAAAAIAAAAgAkJIjIABAAIABAAIAAAAIACAAIAAgBIABgBIAAAAIAAAAIABgBIAAAAIAAgBIAAgDIAAAAIAAgCIgBAAIAAAAIgBgBIAAAAIgCgBIgBgBIgBAAIiEgCIgBAAIgBAAIgBAAIAAAAIgBAAIgCAAIgBgBIgBABIgCAAIAAABIgBAAIAAABIAAAAIgBAAIAAACIgBAAIAAACIABABIAAABIABABIABACIABAAIACAAIABABIAAAAIABAAIABAAIAAAAIABAAIACAAIAAAAICFACgAl3HxIBbABIACh4IhbgCgAmaEwIgJAFIgCACIgGAHQABABAAAAQAAAAAAAAQAAAAAAAAQAAABgBAAIAAABIAAABIgCAHIABABIACAJIAAAAIACACIABABIAEAEIADACIAHADIAIAAQAEAAAFgDIAGgFIAEgHIABAAIgBgBIABgBQABgIgCgHIgFgIIgCgBQgDgEgHgCIgGgBIgFABgAj3FQIABAAIAAAAIABgBIABAAIABAAIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAgDIgBgBIAAgBIAAAAIAAgBIgBgBIgBAAIgBAAIgBgBIgBAAIhxgCIgBAAIgBABIAAAAIgCAAIAAAAIgBgBIgBAAIgBAAIgBABIAAAAIgBAAIgCABIAAABIAAAAIAAACIgBAAIAAADIABAAIAAABIAAABIADACIAAAAIABAAIABAAIAEAAIABAAIABAAIAAAAIBxACgADKqJIAAgIIEJAAIAAAIgACjqKQgJgCgFgHQgOAOgQgLIgCgCQgIgQARgGQAJgDAHAHIAJALIAIgJIAHgIIAEgDQgCAEgEAFIgHAIIgEAFQADAFAGADQAHADAFgHQAAAJgIAAIgDAAgAB9qkQgKAHAHAJQAGAJAKgEQAGgCAEgFIgHgIQgFgGgGAAIgFAAgADcqpIAAgGIDyAAIAAAGg");
	this.shape_127.setTransform(925,375.8);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#CC3300").s().p("AhcLtIgHgDIgDgCIgFgEIAAgBIgCgCIAAAAIgCgJIgBgBIACgHIAAgBIAAgBQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAgBIAFgHIADgCIAJgFQAEgBAHABQAGACAEAEIABABIAGAIQACAHgBAIIgBABIABABIgBAAIgFAHIgFAFQgGADgEAAgABGLeIgBAAIhxgCIAAAAIAAAAIgBAAIgFAAIgBAAIgBAAIAAAAIgCgCIAAgBIAAgBIgBAAIAAgDIABAAIAAgCIAAAAIAAgBIABgBIABAAIAAAAIABgBIABAAIACAAIABABIAAAAIACAAIAAAAIABgBIAAAAIBxACIABAAIABABIABAAIAAAAIABABIAAABIAAAAIAAABIABABIAAADIgBAAIAAABIAAAAIAAABIgBAAIAAABIAAAAIgBAAIgBABgAg9GdQgLAAgHgIIgBgBQgHgHAAgLQAAgHADgFIABgBIAEgGQAIgHALAAQALAAAHAHIAAABIAFAEQADAHAAAIIgBAGIgCAGIgFAGQgIAIgKAAIgBAAgABWCjQgLAAgGgHIgBgBQgEgDgBgEQgDgFAAgHQAAgGADgFIAAgBIAFgGIAAAAQAIgIALAAQALABAHAHIABAAIADAFIABABQADAGAAAHIAAAHIgDAGIgFAGQgIAHgKAAIgBAAgAiEg3QgLAAgHgHIgBgBQgHgIAAgLQAAgGADgFIAAAAIAFgHQAIgIALAAQALABAHAHIACACIADADQADAGAAAIIgBAHIgBAEQgCAEgEAEQgIAHgKAAIgBAAgACdlFQgHgCgFgFIgBgBQgDgDgBgEQgEgFAAgHQAAgGAEgFIAAgBIAEgGIAAgBQADgCADgBQAGgEAHAAIACAAQAKABAGAGIABABIAEAFIABABIACAFIAAAIIAAAHIgCAGIgCADIgEACQgHAIgMAAIgFAAgAjMmYIAAAAQgIgIABgLQAAgGADgFIAEgIQAJgHALAAQALAAAHAIIAEAFQAEAGAAAIIgBAHQgCAHgGAFQgHAHgLAAQgLAAgIgIgAjnqxIgDAAQgGgBgEgEIgCgCIgCgBIgEgHQgDgFAAgHQAAgGADgEIAAgBIAAgBIAEgGIABAAQAEgEAEgCQAFgCAGAAIACAAQAJABAHAHIABAAIADAFIABABIAAAAQADAGAAAHIAAAFIgBACIgCAGIgFAGIgGAFQgHACgGAAIgCAAgADgq4QgIgBgFgGIgBgBQgDgDgBgDQgDgGAAgGIACgKIAAgBIABgBIAAgBIAEgGIAAAAQAJgHALAAIACAAQAJAAAHAHIAAABIABABIADADIAAABQAEAGAAAIIgBAGIgDAGIgEAGIgFAEIgBABQgHADgGAAIgFgBg");
	this.shape_128.setTransform(893.3,336);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#1F1F1F").s().p("AgtMlIgpkJQAIAHAKAAQALABAIgIIAFgGIAdDDIBHm+QACAEADADIABABQAHAHAKAAQALAAAIgIIhTIEgAidBHIAAAAQAHAIALAAQALAAAIgIQAEgDACgFIBBG3QgHgIgLAAQgLAAgIAHIgEAHgABnEBIgEgEIgBgBQgHgHgLAAQgLAAgIAHIAAAAIBHm7IAGgHQAFAFAHACIAGABQALAAAIgIIADgDIhLHLIAAgBgAjSkRQAHAIALAAQALAAAIgIQAFgFACgHIAwFAIgBgBQgIgIgLAAQgLAAgIAHIgFAHgAC0jmIgBgBIgEgFIAAAAQgHgHgJAAIgCAAQgIAAgGADIA1lcQAAAHADAFQABAEADADIABABQAGAFAHACIAFAAQAHAAAGgDIABAAIg2FTIgCgFgAj+oqIADgFQAEADAGABIADABIACAAQAHAAAGgDIAGgFIAFgGIADgGIAAAAIAnEHIgDABQgHgIgLAAQgLAAgIAHIgFAHgAkRqxQANgMANgNIANgPIAXCIIgBgBIAAgBIgEgEIgBgBQgHgGgJgBIgCAAQgGAAgEACQgFACgEADIAAABIgEAFIgBABIAAABgADrslIAUAJQAIACAMABIghC8IgBgBIAAAAQgHgHgJgBIgCAAQgLAAgIAHIgBABIgEAGIAAABIgBAAg");
	this.shape_129.setTransform(894,322.5);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AnfKrIABhYIAignIADiIIghgfIAChxIELAFIgCBxIglAeIgCCIIAjAoIgBBYgAmsJjICmACIACAAIAAAAIABAAIAAAAIABgBIABAAIABAAIAAgBIAAgBIAAAAIABgBIAAgDIgBAAIAAgCIAAAAIAAAAIgCgBIAAAAIgBgBIgBAAIgBAAIingDIgBAAIgBAAIgBAAIgBAAIgCAAIgBAAIgBAAIAAABIgBAAIgBABIAAAAIgBAAIAAACIAAAAIAAADIAAABIAAABIABABIABABIABAAIABABIABAAIABAAIAAABIABAAIABAAIABAAIABgBIABAAgAmpI3IAAABIgBABIAAACIABABIAAABIAAABIACABIABAAIABABIABAAIABAAIABABIACAAIABAAICLACIABAAIABAAIAAgBIABAAIABAAIAAgBIABAAIAAAAIAAgBIAAAAIABgBIAAgDIgBgBIAAgBIAAAAIAAAAIgBgCIgBAAIgBAAIgBgBIgBAAIiKgCIgBAAIAAgBIgBAAIgCAAIgBAAIgBAAIgBAAIgBABIgBAAIgBAAIAAABIAAABIgBAAIAAAAgAkWIjIABAAIAAAAIABAAIABAAIAAgBIABgBIAAAAIAAAAIABgBIAAAAIAAgBIAAgDIAAAAIAAgCIgBAAIAAAAIgBgBIAAAAIgBgBIgBgBIgBAAIiFgCIgBAAIAAAAIgBAAIgBAAIgBAAIgCAAIgBgBIgBABIgBAAIgBABIAAAAIAAABIgBAAIAAAAIAAACIgBAAIAAACIABABIAAABIAAABIACACIAAAAIACAAIABABIAAAAIABAAIABAAIABAAIABAAIABAAIABAAICFACgAmFHxIBcABIACh4IhcgCgAmoEwIgJAFIgCACIgFAHQAAABAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAIAAABIgBABIgBAHIABABIABAJIABAAIABACIABABIAEAEIADACIAHADIAIAAQAEAAAFgDIAGgFIAEgHIABAAIAAgBIAAgBQACgIgCgHIgGgIIgCgBQgDgEgGgCIgHgBIgFABgAkFFQIABAAIABAAIABgBIAAAAIABAAIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAgDIgBgBIAAgBIAAAAIAAgBIgBgBIgBAAIAAAAIgCgBIgBAAIhxgCIgBAAIAAABIgBAAIgBAAIgBAAIAAgBIgCAAIgBAAIgBABIAAAAIgBAAIgBABIAAABIgBAAIAAACIAAAAIAAADIAAAAIAAABIABABIACACIAAAAIABAAIABAAIAEAAIABAAIABAAIAAAAIBxACgADYqJIAAgIIEIAAIAAAIgACwqKQgIgCgFgHQgOAOgRgLIgCgCQgHgQAQgGQAKgDAHAHIAJALIAIgJIAHgIIADgDQgBAEgEAFIgHAIIgEAFQADAFAGADQAHADAFgHQAAAJgIAAIgEAAgACLqkQgKAHAHAJQAGAJAKgEQAGgCAEgFIgHgIQgFgGgHAAIgEAAgADqqpIAAgGIDyAAIAAAGg");
	this.shape_130.setTransform(918.6,375.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#CC3300").s().p("AhcLtIgHgDIgEgCIgEgEIAAgBIgCgCIAAAAIgCgJIgBgBIACgHIAAgBIAAgBQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAgBIAFgHIACgCIAJgFQAFgBAHABQAGACAEAEIABABIAGAIQACAHgBAIIgBABIABABIgBAAIgFAHIgGAFQgFADgEAAgABGLeIgBAAIhxgCIAAAAIAAAAIgBAAIgFAAIgBAAIgBAAIAAAAIgCgCIAAgBIAAgBIgBAAIAAgDIABAAIAAgCIAAAAIAAgBIABgBIABAAIAAAAIABgBIABAAIACAAIABABIAAAAIACAAIAAAAIABgBIAAAAIBxACIABAAIABABIABAAIAAAAIABABIAAABIAAAAIAAABIABABIAAADIgBAAIAAABIAAAAIAAABIgBAAIAAABIAAAAIgBAAIgBABgAg9GdQgLAAgHgIIAAgBQgIgHAAgLQAAgHADgFIABgBIAEgGQAIgHALAAQAKAAAIAHIAAABIAFAEQADAHAAAIIAAAGIgDAGIgFAGQgIAIgKAAIgBAAgABWCjQgLAAgGgHIgCgBQgCgDgCgEQgDgFAAgHQAAgGADgFIAAgBIAEgGIABAAQAIgIALAAQALABAHAHIABAAIADAFIABABQADAGAAAHIgBAHIgCAGIgFAGQgIAHgKAAIgBAAgAiEg3QgLAAgHgHIgBgBQgHgIAAgLQAAgGADgFIAAAAIAFgHQAIgIALAAQALABAHAHIACACIADADQADAGAAAIIgBAHIgBAEQgCAEgEAEQgIAHgKAAIgBAAgACdlFQgHgCgFgFIgBgBQgDgDgCgEQgDgFAAgHQAAgGADgFIABgBIAEgGIABgBQACgCADgBQAGgEAHAAIACAAQAKABAGAGIABABIAEAFIABABIACAFIABAIIgBAHIgCAGIgCADIgEACQgHAIgMAAIgFAAgAjMmYIAAAAQgIgIABgLQAAgGADgFIAEgIQAJgHALAAQALAAAHAIIAEAFQAEAGAAAIIgBAHQgCAHgGAFQgHAHgLAAQgLAAgIgIgAjnqxIgDAAQgGgBgEgEIgDgCIgBgBIgEgHQgDgFAAgHQAAgGADgEIAAgBIABgBIADgGIABAAQAEgEAEgCQAFgCAGAAIACAAQAJABAHAHIABAAIADAFIABABIAAAAQADAGAAAHIAAAFIgBACIgCAGIgFAGIgGAFQgHACgGAAIgCAAgADgq4QgIgBgFgGIgBgBQgDgDgBgDQgDgGAAgGIACgKIAAgBIABgBIAAgBIAEgGIAAAAQAJgHALAAIACAAQAJAAAGAHIABABIABABIADADIAAABQAEAGAAAIIgBAGIgDAGIgFAGIgEAEIgBABQgHADgGAAIgFgBg");
	this.shape_131.setTransform(885.6,336);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#1F1F1F").s().p("AgiMuIgpkJQAHAHALAAQALABAIgIIAFgGIAdDDIBHm+QABAEADADIABABQAHAHALAAQALAAAIgIIhUIEgAiTBQIABAAQAHAIALAAQALAAAIgIQAEgDACgFIBBG3QgIgIgKAAQgLAAgIAHIgFAHgABxEKIgEgEIAAgBQgIgHgKAAQgLAAgIAHIgBAAIBIm7IAGgHQAFAFAHACIAFABQALAAAIgIIAEgDIhLHLIgBgBgAjIkIQAIAIALAAQALAAAHgIQAGgFACgHIAwFAIgCgBQgHgIgLAAQgLAAgIAHIgFAHgAC+jdIAAgBIgEgFIgBAAQgHgHgJAAIgCAAQgHAAgGADIA1lcQAAAHACAFQACAEADADIABABQAFAFAHACIAGAAQAGAAAGgDIACAAIg2FTIgDgFgAjzohIACgFQAFADAFABIAEABIACAAQAGAAAGgDIAHgFIAFgGIACgGIABAAIAnEHIgDABQgHgIgLAAQgLAAgJAHIgFAHgAkYsbIANgGQAOgFAIgEIAHgEIAlDmIAAgBIgBgBIgEgEIAAgBQgHgGgJgBIgCAAQgGAAgFACQgEACgEADIgBABIgEAFIAAABIgBABgAD1sXIAFAEQAMAMAQALIADACIgcCmIgBgBIgBAAQgGgHgJgBIgCAAQgLAAgJAHIAAABIgEAGIgBABIAAABg");
	this.shape_132.setTransform(885.2,321.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#000000").ss(2,1,1).p("ACFhaIgkAeIABCIIAkAmIAABZIkKABIAAhYAiFhYIAAhyIEKgBIAABxIABDMAiFhYIAiAdIAACHIghAog");
	this.shape_133.setTransform(890,423.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FF0000").s().p("AgaAbQgLgMAAgPQAAgPALgLQAMgLAOAAQAPAAALALQAMALAAAPQAAAPgMAMQgLALgPAAQgOAAgMgLgAAYARQALACAAgLQgEAHgHgEQgHgCgCgFIAEgEIAHgIQADgFACgEIgEACIgGAJIgIAHIgJgJQgGgIgKAEQgQAGAHAPIACACQARALANgOQAFAHAIACgAgQAHQgGgJAKgGQAKgCAFAHIAGAIQgEAEgFACIgFACQgGAAgFgGg");
	this.shape_134.setTransform(935.8,309);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#CCCCCC").s().p("Agtg7IBagBIABB4IhbABg");
	this.shape_135.setTransform(889.9,419.3);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AhVBvIgBAAIAAAAIgBgBIgBAAIgBAAIgBAAIgBAAIgCgCIAAgBIAAgBIAAAAIAAgDIAAAAIAAgCIAAAAIAAgBIABgBIABAAIABAAIABgBIABAAIACAAIABABIABAAIABgBIABAAICmAAIABAAIABAAIAAABIABAAIABABIAAAAIABAAIAAACIAAAAIAAADIAAABIAAAAIgBABIAAABIAAAAIgBAAIgBABIAAAAIAAAAIgBAAIgBAAIimABIgBAAIgBABIgBAAgAiFhtIAhAeIABCHIghAogABhA3IAAiHIAkgeIABDMgAhIBMIgBAAIgBAAIgBAAIgBAAIgBgBIgBAAIgCgCIgBAAIAAgCIAAAAIAAgDIAAAAIAAgBIABgBIAAAAIAAAAIABgBIABgBIABAAIABAAIABAAIABAAIAAAAIABgBIABAAIABAAIABABIABAAICJgBIABAAIABABIAAAAIABAAIABACIAAAAIABAAIAAABIABABIAAADIgBABIAAAAIgBABIAAAAIAAAAIgBABIgBAAIAAAAIgBABIAAAAIgBAAIiLABIgBAAgAhFAsIgBAAIgBAAIgBAAIgBAAIAAAAIgBAAIgBgBIgBAAIgBgCIgBAAIAAgBIgBgBIAAgCIABgBIAAgBIABgBIAAAAIAAAAIABgBIAAgBIACAAIAAAAIABAAIACAAIACAAIAAAAIABAAIABAAIABAAICDgBIABAAIABABIABABIAAAAIABABIAAAAIABAAIAAACIAAAAIAAADIAAABIAAAAIgBABIAAAAIAAAAIgBABIAAABIgBAAIAAAAIgBAAIgBAAIiEABIAAAAIgCAAg");
	this.shape_136.setTransform(890,425.8);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AnKJWIAhgoIAAiIIgigeIAAhxIELgBIAABxIgkAeIABCIIAkAnIAABYIkLACgAmjJgIAAAAIAAABIABABIACACIAAAAIABAAIABAAIABAAIABABIAAAAIABAAIACAAIABgBIABAAICmgBIABAAIABAAIAAAAIABAAIAAgBIABAAIABAAIAAgBIAAgBIAAAAIABgBIAAgDIgBAAIAAgCIAAAAIAAAAIgCgBIAAAAIgBgBIgBAAIgBAAIinAAIgBAAIgBABIgBAAIgBgBIgCAAIgBAAIgBABIAAAAIgBAAIgBABIAAABIgBAAIAAACIAAAAgAmWI5IAAABIgBAAIAAADIABAAIAAACIAAAAIACACIABAAIABABIABAAIABAAIABAAIACAAIABAAICLgBIABAAIABAAIAAgBIABAAIABAAIAAgBIABAAIAAAAIAAgBIAAAAIABgBIAAgDIgBgBIAAgBIAAAAIAAAAIgBgCIgBAAIgBAAIgBgBIgBAAIiKABIgBAAIAAgBIgBAAIgCAAIAAABIgBAAIgBAAIgBAAIgBAAIgBAAIgBABIAAABIAAAAIgBAAIAAABgAmUIZIAAABIgBABIAAACIABABIAAABIABAAIABACIABAAIABABIABAAIABAAIABAAIAAAAIABAAIABAAIACAAIAAAAICFgBIABAAIABAAIAAAAIABAAIABgBIAAgBIABAAIAAAAIAAgBIAAAAIABgBIAAgDIgBAAIAAgCIAAAAIAAAAIgBgBIgBAAIgBgBIgBgBIgBAAIiEABIgBAAIgBAAIgBAAIAAAAIgBAAIgDAAIgBAAIAAAAIgCAAIAAABIgBABIAAAAIAAAAIgBABgAl0F5IABB4IBbAAIAAh5gAmbEyIgIAEIgCACIgGAIQABAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAIAAACIAAAAIgCAIIABABIACAIIABABIABACIABABIAFADIADADIAHACIAHABQAFgBAFgDIAFgFIAEgHIABAAIgBgBIABgBQABgIgCgHIgFgIIgCgBQgEgEgGgCIgFAAIgHABgAl0FKIABABIAAABIAAABIACABIABAAIABABIABAAIAEAAIABAAIAAAAIABgBIBxAAIABAAIAAAAIABgBIABAAIAAAAIABgBIAAAAIAAgBIABAAIAAgBIABAAIAAgDIgBgBIAAgBIgBAAIAAgBIgBgBIAAAAIgBAAIgBgBIgBAAIhxABIgBAAIgBAAIAAAAIgCAAIAAAAIgBAAIgBAAIgBAAIgBAAIgBABIgBAAIgBABIAAAAIAAAAIAAACIgBAAgADEqHIAAgIIEIAAIAAAIgACcqIQgIgCgFgHQgOAOgRgLIgCgCQgHgQAQgGQAKgDAHAHIAJALIAIgJIAHgIIADgDQgBAEgEAFIgHAIIgEAFQADAFAGADQAHADAFgHQAAAJgIAAIgEAAgAB3qiQgKAHAHAJQAGAJAKgEQAGgCAEgFIgHgIQgFgGgHAAIgEAAgADWqnIAAgGIDyAAIAAAGg");
	this.shape_137.setTransform(922.6,375.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#CC3300").s().p("Ag7LwIgHgCIgDgDIgFgDIgBgBIgBgCIgBgBIgCgIIgBgBIACgIIAAAAIAAgCQABAAAAAAQAAAAAAAAQAAgBAAAAQAAAAgBAAIAGgIIACgCIAIgEQAFgCAHABQAGACAEAEIACABIAFAIQACAHgBAIIgBABIABABIgBAAIgEAHIgFAFQgFADgFABgAgMLfIgBAAIgEAAIgBAAIgBgBIgBAAIgCgBIAAgBIAAgBIgBgBIAAgDIABAAIAAgCIAAAAIAAAAIABgBIABAAIABgBIABAAIABAAIABAAIABAAIAAAAIACAAIAAAAIABAAIABAAIBwgBIABAAIABABIABAAIAAAAIABABIAAABIABAAIAAABIABABIAAADIgBAAIAAABIgBAAIAAABIAAAAIgBABIAAAAIgBAAIgBABIAAAAIgBAAIhwAAIgBABgAg1GYIgBgBQgIgHAAgLQAAgHACgFIABgBIAEgGQAIgIALAAQALAAAHAHIABABIAEAEQAEAHAAAIIAAAGIgDAGIgFAGQgHAIgLAAQgLAAgHgHgABYCcIgBgBQgDgDgCgEQgDgFAAgHQAAgGADgFIAAgBIAEgGIABgBQAIgHALAAQAKAAAIAHIAAAAIAEAFIABABQADAGAAAHIAAAHIgDAGIgFAGQgHAIgLAAQgKAAgIgHgAiHg6IgBAAQgHgIgBgLQAAgGADgFIAAAAIAFgIQAIgHALAAQALAAAHAHIACACIACADQAEAGAAAIIAAAHIgBAEQgCAEgEAEQgIAIgLAAQgLAAgHgIgACmlIQgHgBgGgFIgBgBIgEgGQgDgGAAgGQAAgHACgFIABgBIAEgGIAAgBQADgCADgBQAGgEAHAAIACAAQAJAAAHAHIABAAIAEAFIAAABIADAFIABAIIgBAHIgCAGIgCADIgDADQgIAIgLAAIgFgBgAjEmSIgBAAQgHgHAAgLQAAgHACgFIAFgIQAIgHALAAQALAAAHAHIAEAFQAEAGABAIIgBAHQgCAHgFAFQgIAIgLAAQgLAAgHgIgAjmqqIgEAAQgFgBgFgEIgCgCIgCgBIgEgGQgDgGAAgGQAAgGACgFIABgBIAAgBIAEgGIABAAQAEgEAEgCQAFgCAGAAIACAAQAJABAHAGIAAABIAEAEIABABIAAABQADAFAAAHIAAAFIAAACIgDAGIgFAGIgGAFQgGADgGAAIgCAAgADgq7QgHgCgGgFIgBgBQgDgDgBgDQgDgGAAgGIACgKIAAgBIAAgBIABgBIAEgGIAAAAQAIgIALAAIACAAQAJABAHAGIABABIABABIADADIAAABQAEAGAAAIIgBAGIgCAGIgFAGIgFAFIgBAAQgGADgHAAIgFAAg");
	this.shape_138.setTransform(887.7,335.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#1F1F1F").s().p("Ag0IrQAIAHAKAAQALAAAIgIIAFgGIAgDDIA+nAQABADADADIABABQAIAHALAAQALAAAHgIIhIIGIg7AAgAiGBXIAAABQAIAHALAAQALAAAHgIQAEgDACgFIBLG1QgIgHgKAAQgLAAgIAHIgFAHgACCEMIgEgEIgBgBQgHgHgLAAQgLAAgIAIIAAAAIA9m9IAGgHQAFAFAHACIAGAAQALAAAHgIIAEgDIhBHNIAAgBgAjDj/QAIAHALAAQALAAAHgIQAGgFACgHIA2E/IgBgBQgIgIgLAAQgLAAgIAIIgFAHgADEjdIgBgBIgEgEIAAgBQgHgGgJgBIgCAAQgIAAgGAEIAtldQAAAHADAFQACAEADADIABABQAFAFAHABIAGABQAGAAAGgDIACgBIgvFUIgCgFgAj1oXIADgFQAEADAGABIADABIACAAQAHAAAGgDIAGgFIAFgGIACgHIABAAIAtEGIgDABQgIgIgLAAQgLAAgIAIIgFAHgAkYrkIAHgGIAhgcIAlDHIgBAAIAAgBIgEgFIgBAAQgHgHgJAAIgCAAQgGAAgEACQgFACgEADIAAABIgEAGIgBABIAAABgADysyIABABQANAKAZAFIgfDNIgBgBIAAAAQgHgHgJAAIgCAAQgLAAgIAHIgBABIgEAGIAAABIgBABg");
	this.shape_139.setTransform(887.5,320.9);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#000000").ss(2,1,1).p("ACGhYIgkAeIgBCHIAjAnIAABYIkKgCIAAhYAiEhaIABhxIEKACIgBBxIgCDMAiEhaIAhAeIgBCHIgiAng");
	this.shape_140.setTransform(887.9,423.7);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#CCCCCC").s().p("AgtA8IABh4IBaABIgBB4g");
	this.shape_141.setTransform(887.9,419.2);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("ABTBuIgBAAIilAAIgBgBIgBABIgCAAIgBAAIAAAAIgBgBIgBAAIAAAAIgBAAIgBAAIgCgBIgBgBIAAgBIAAgBIAAgDIAAAAIAAgCIABAAIAAAAIABgBIABAAIABgBIABAAIAAAAIACAAIABAAIABAAIACAAIABAAIClABIABAAIABABIABAAIABAAIABABIAAABIABAAIAAABIAAABIAAADIAAABIAAAAIgBABIAAAAIAAAAIgBABIgBAAIgBAAIAAABgABhA5IABiHIAkgeIgBDNgAiEhuIAiAeIgBCHIgjAngABFBMIgBAAIiLgBIgBAAIgBAAIgBAAIgCAAIgBAAIgBgBIgBAAIgCgBIAAgBIAAgBIAAAAIAAgDIAAgBIAAgBIAAAAIABAAIAAgBIAAgBIABAAIABAAIABAAIABAAIACAAIAAAAIABgBIABAAIABAAIAAABIABAAICKAAIABAAIABABIAAAAIABAAIABACIAAAAIAAAAIAAACIABAAIAAADIgBABIAAAAIAAABIAAAAIgBAAIAAABIgBAAIAAAAIgBABgABBAtIgBAAIiEgBIAAAAIgCAAIgBAAIgBAAIAAAAIgBAAIAAAAIgBAAIgCgBIgBAAIgBgCIgBgBIAAgBIgBgBIAAgCIABAAIAAgBIABgBIAAAAIAAAAIABgBIAAgBIACAAIABgBIABAAIACAAIABAAIAAABIABAAIABgBIABAAICDACIABAAIABAAIACABIAAAAIABABIAAABIABAAIAAABIAAAAIAAADIAAABIAAABIgBAAIAAABIAAAAIgBABIAAAAIgCAAIAAABg");
	this.shape_142.setTransform(887.9,425.7);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AnWKrIAAhYIAjgnIABiIIgigeIABhxIELACIgBBxIgkAeIgBCIIAkAoIgBBXgAmjJjICmAAIABAAIABABIAAgBIABAAIABAAIABgBIAAAAIAAgBIABAAIAAAAIAAgBIAAgDIAAgBIAAgBIgBAAIAAgBIgBgBIgBAAIgBAAIgBgBIgBAAIimgBIgBAAIgCAAIgBAAIgBAAIgCAAIAAAAIgBAAIgBABIgBAAIgBABIAAAAIgBAAIAAACIAAAAIAAADIAAABIAAABIABABIACABIABAAIABAAIAAAAIABAAIABABIAAAAIABAAIACAAIABgBIABABgAmhI3IAAABIAAABIAAADIAAAAIAAABIAAABIACABIABAAIABABIABAAIACAAIABAAIABAAIABAAICMABIABAAIAAAAIABgBIAAAAIABAAIAAgBIABAAIAAAAIAAgBIAAAAIABgBIAAgDIgBAAIAAgCIAAAAIAAAAIgBgCIgBAAIAAAAIgBgBIgBAAIiLgBIgBAAIAAAAIgBAAIgBAAIgBAAIAAAAIgCAAIgBAAIgBABIgBAAIgBAAIAAABIAAABIgBAAIAAAAgAkPIiIABAAIABAAIAAgBIACAAIAAAAIABgBIAAAAIAAgBIABAAIAAgBIAAgBIAAgDIAAAAIAAgBIgBAAIAAgBIgBgBIAAAAIgCgBIgBAAIgBAAIiEgCIgBAAIgBABIgBAAIAAgBIgBAAIgCAAIgBAAIgBABIgCAAIAAABIgBABIAAAAIAAAAIgBABIAAABIgBAAIAAACIABABIAAABIABABIABACIABAAIACABIABAAIAAAAIABAAIAAAAIABAAIABAAIACAAIAAAAICFABgAl9HwIBbABIABh5IhcAAgAmiEwIgJAFIgCACIgFAHQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAABIAAABIgBAAIgBAJIABAAIABAJIABAAIABACIABABIAFAEIACACIAHADIAIAAQAEAAAGgDIAFgFIAFgHIAAAAIAAgCIAAgBQACgHgCgHIgGgIIgCgBQgEgEgGgCIgGgBIgFABgAj/FOIABAAIAAAAIABgBIABAAIAAAAIABgBIAAAAIAAgBIABAAIAAAAIABgBIAAgDIgBAAIAAgCIgBAAIAAgBIgBgBIAAAAIgBAAIgBgBIgBAAIhxgBIgBAAIgBABIAAAAIgCAAIAAAAIAAgBIgCAAIgBAAIgBABIgBAAIgBAAIgBABIAAABIAAAAIAAACIgBAAIAAADIABABIAAABIAAAAIACACIABAAIABAAIABAAIAEAAIABAAIAAAAIABAAIBxABgADPqHIAAgIIEIAAIAAAIgACnqIQgIgCgFgHQgOAOgRgKIgCgDQgHgQAQgFQAKgEAHAHIAJALIAIgIIAGgJIAEgDQgCAEgDAFIgHAIIgEAGQACAEAHADQAHADAEgHQAAAJgHAAIgEAAgACCqiQgKAHAGAJQAHAJAKgEQAFgCAEgEIgGgJQgFgGgHAAIgEAAgADhqmIAAgHIDyAAIAAAHg");
	this.shape_143.setTransform(921.5,375.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#CC3300").s().p("AhPLvIgHgEIgDgCIgEgDIgBgBIgBgDIgBAAIgCgJIgBAAIACgIIAAgBIAAgBQAAAAABAAQAAAAAAgBQAAAAAAAAQgBAAAAgBIAGgHIACgCIAIgEQAFgCAHACQAGABAEAEIACABIAFAIQACAIgBAHIgBABIABABIgBAAIgEAIIgGAEQgFAEgEAAgABTLeIgBAAIhwgBIgBAAIAAAAIgBAAIgEAAIgBAAIgBAAIgBAAIgCgCIAAgBIAAgBIgBgBIAAgDIABAAIAAgBIAAAAIAAgBIABgBIABAAIABAAIABgBIABAAIABAAIABABIAAAAIACAAIAAAAIABgBIABAAIBwABIABAAIABABIABAAIAAAAIABABIAAABIABAAIAAABIABAAIAAADIgBABIAAABIgBAAIAAABIAAAAIgBABIAAAAIgBAAIgBABgAhEGXIgBgCQgIgHAAgMQAAgGADgFIAAgBIAFgGQAIgIALAAQALABAHAGIAAABIAEAFQAEAGAAAIIAAAGIgDAHIgFAFQgHAIgLAAQgLAAgHgGgABMCcIgBgBQgDgDgBgEQgDgGAAgGQAAgGADgGIAAgBIAEgGIABAAQAIgIALABQAKAAAIAHIAAAAIAEAFIABABQADAGAAAIIgBAGIgCAGIgFAGQgIAIgLAAQgKgBgIgGgAiQg9IgBgBQgHgHAAgLQAAgHADgEIAAgBIAFgHQAIgIALABQALAAAHAHIACACIACADQAEAHAAAHIgBAHIgBAEQgCAEgEAEQgIAIgLAAQgLAAgHgIgAChlGQgHgCgGgGIgBgBQgDgDgBgDQgDgGAAgGQAAgHADgEIAAgBIAEgGIABgBQACgCADgBQAGgEAIAAIACAAQAJABAHAGIAAABIAEAEIABABIACAFIABAIIgBAHIgCAGIgCADIgDADQgIAIgLAAIgFAAgAi2mOQgLAAgIgIIAAAAQgIgIABgLQAAgGACgFIAFgIQAIgHALAAQALABAIAHIAEAFQAEAGAAAIIgBAHQgCAGgGAFQgHAIgKAAIgBAAgAjnquIgDAAQgGgCgEgEIgDgCIgBgBIgEgGQgDgGAAgGQAAgGACgEIABgBIAAgBIAEgGIABgBQAEgEAEgCQAFgBAGAAIACAAQAJABAHAGIAAABIAEAEIABABIAAABQADAGAAAGIAAAGIAAABIgDAGIgFAGIgGAFQgGADgHAAIgCAAgADfq5QgHgCgFgGIgBAAQgDgDgBgEQgDgGAAgGIACgKIAAgBIAAAAIABgCIAEgFIAAgBQAIgHALAAIACAAQAJAAAHAHIABABIABABIADADIAAABQAEAGAAAIIgBAGIgCAGIgFAGIgFAEIgBABQgHADgGAAIgGAAg");
	this.shape_144.setTransform(887.7,335.6);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#1F1F1F").s().p("AgaM4IgqkIQAHAHALAAQAKAAAIgIIAFgGIAeDEIBDnAQACAEADADIABABQAIAHAKAAQALAAAIgIIhPIFgAiRBbIAAAAQAIAIALAAQALAAAHgIQAFgDABgFIBGG2QgIgHgKAAQgLAAgIAHIgFAHgAB1ETIgEgEIAAgBQgIgHgKAAQgMAAgHAHIgBAAIBDm8IAGgGQAGAFAGACIAGAAQALAAAIgIIADgDIhHHMIAAgBgAjJj8QAHAHALAAQAMABAHgIQAGgFACgHIAzE/IgCgBQgIgIgLAAQgLAAgIAHIgEAIgAC9jVIAAgBIgEgEIAAgBQgIgGgJgBIgBAAQgIAAgGAEIAyldQAAAHACAFQACAEADADIABABQAFAFAHACIAGAAQAGAAAGgDIACAAIgzFTIgDgFgAj3oVIACgFQAFADAFACIAEAAIACAAQAHAAAFgDIAHgFIAEgGIAEgGIAAAAIApEHIgDAAQgHgHgLgBQgLAAgIAIIgFAHgAkar0IAGgCQAKgFAVgMIAFgCIAjDNIgBgBIAAgBIgEgEIAAgBQgIgGgJgBIgBAAQgGAAgFACQgFACgDADIgBABIgEAGIgBABIAAABgAD2s4IADAAQALADAPANIAIAGIgjDWIAAgBIgBgBQgHgGgJgBIgCAAQgLAAgIAHIAAABIgFAGIAAABIgBABg");
	this.shape_145.setTransform(887.8,320.3);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#000000").ss(2,1,1).p("AiBheIAFhxIEJAKIgEBxIgmAdIgFCGIAjApACJhUIgIDMIgEBYIkJgKIADhYAiBheIAgAfIgFCHIgjAmg");
	this.shape_146.setTransform(898.5,426.6);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("ABQByIgCAAIikgGIgBAAIgBABIgCAAIgBAAIAAAAIgBgBIgBAAIgBAAIgBAAIAAAAIgCgDIgBgBIAAgBIAAAAIAAgDIAAAAIAAgCIABAAIAAgBIABgBIABABIABgBIABAAIABAAIABAAIABAAIACAAIABAAIABAAIClAHIABAAIABAAIABAAIAAAAIABABIAAABIABAAIAAABIAAACIAAADIAAAAIAAAAIgBAAIAAABIAAAAIgBABIgBAAIAAAAIgBABgABfA8IAFiGIAlgdIgIDNgAiAhxIAgAfIgFCHIgjAmgABBBPIgBAAIiKgFIgBAAIgBAAIgBAAIgCAAIgBAAIgBgBIAAAAIgCgCIAAgBIAAgBIgBgBIAAgCIABAAIAAgBIAAgBIABAAIAAAAIAAgBIABAAIABAAIABgBIABAAIABAAIABAAIAAgBIACAAIABAAIAAABIABAAICJAFIABAAIABABIAAAAIABAAIABACIAAAAIABAAIAAACIAAAAIAAADIAAABIAAAAIgBABIAAAAIAAAAIgBABIgBAAIgBAAIAAABgABAAwIgBAAIiEgGIAAAAIgCAAIgBAAIgBAAIAAAAIgBAAIgBAAIgBAAIgBgBIgBAAIgBgCIgBAAIAAgBIgBgBIAAgDIABAAIABgBIAAgBIABAAIAAAAIAAgBIABgBIABAAIABAAIABAAIACAAIABAAIABAAIABAAIAAAAIABAAICDAGIABAAIABAAIABABIABAAIABABIAAABIAAAAIAAABIAAAAIAAADIAAABIAAABIgBAAIAAABIAAAAIgBABIAAAAIgBAAIgBABg");
	this.shape_147.setTransform(898.5,428.5);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#CCCCCC").s().p("AgvA6IAFh3IBaAEIgFB3g");
	this.shape_148.setTransform(898.7,422.1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AnJK0IADhYIAjgmIAFiIIgggfIAEhxIELAKIgEBxIgmAdIgFCHIAjApIgEBYgAmUJtIClAGIACAAIAAAAIABgBIAAAAIABAAIABgBIABAAIAAgBIAAAAIAAgBIABAAIAAgDIgBgBIAAgBIAAAAIAAgBIgCgBIAAAAIgBAAIgBgBIgBAAIimgGIgBAAIgBAAIgCAAIgBAAIgBAAIgBAAIgBAAIAAABIgBgBIgCABIAAABIgBAAIAAACIAAAAIAAADIAAAAIAAABIABABIACACIABAAIABABIABAAIABAAIAAABIAAAAIABAAIACAAIABgBIABAAgAmRJBIAAABIAAABIAAACIAAABIAAABIAAABIACACIAAAAIABABIABAAIACAAIABAAIACAAIAAAAICLAFIACAAIAAAAIABgBIAAAAIACAAIAAgBIAAAAIAAAAIABgBIAAAAIAAgBIAAgDIAAgBIAAgBIgBAAIAAAAIAAgCIgBAAIgBAAIgBgBIgBAAIiKgFIgBAAIAAgBIgBAAIgBAAIgBABIAAAAIgCAAIgBAAIgBAAIgBAAIgBAAIAAABIAAABIgBAAIAAAAgAj+IwIABAAIAAAAIABAAIABAAIABgBIAAgBIABAAIAAAAIAAgBIAAAAIABgBIAAgDIgBAAIABgCIgBAAIAAAAIgBgBIAAAAIgBgBIgCgBIgBAAIiDgFIgBAAIgBAAIgBAAIgBAAIgBAAIgCAAIgBAAIAAAAIgCAAIAAABIgBABIAAAAIgBAAIAAABIgBABIgBAAIAAACIABACIAAABIABAAIACACIAAAAIACABIABAAIAAAAIABAAIAAAAIABAAIABAAIACAAIABAAICEAFgAlrH7IBbAEIAFh4IhbgEgAmKE7IgJAEIgCACIgGAHQAAAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAIAAABIAAABIgCAIIABAAIACAJIAAAAIABACIABABIAEAEIADADIAHACIAIABQAEAAAFgDIAFgFIAGgHIAAAAIAAgBIAAgBQACgIgCgHIgFgIIgCgBQgEgEgGgCIgGgBIgFABgAjoFeIABAAIAAAAIABgBIABAAIAAAAIAAgBIABAAIAAgBIAAAAIAAgBIACAAIAAgDIgBgBIAAgBIgBAAIAAgBIgBgBIAAAAIAAAAIgCgBIgBAAIhxgEIgBAAIAAAAIgBAAIgBAAIAAAAIgBAAIgBAAIgCgBIgBABIAAAAIgBAAIgBABIAAABIgBAAIAAACIAAAAIAAAEIAAABIACACIABAAIABAAIABABIAEAAIABAAIAAAAIABgBIBxAFgADCqXIAAgIIEJAAIAAAIgACbqZQgJgCgFgHQgOAPgQgLIgCgDQgIgPARgGQAKgEAGAHIAJALIAIgIIAHgJIAEgDQgCAFgEAFIgHAIIgEAFQADAFAGACQAHAEAFgHQAAAJgIAAIgDgBgAB1qyQgKAGAHAKQAGAIAKgEQAGgCAEgEIgHgJQgFgGgGAAIgFABgADUq3IAAgGIDyAAIAAAGg");
	this.shape_149.setTransform(930.3,377.2);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#1F1F1F").s().p("AhJM4IgjkKQAHAHALABQALAAAHgHQAEgDACgDIAZDFIBPm+QACAEADADIABABQAHAHAKAAQALABAIgHIhcICgAiqBYIAAAAQAHAIALAAQALABAIgIQAEgDACgFIA4G4QgHgIgKAAQgLgBgJAIIgEAGgABWEYIgEgFIgBAAQgHgIgLAAQgLgBgIAIIAAAAIBQm6IAGgHQAFAGAHABIAGABQALAAAIgHIADgDIhUHKIAAgBgAjYkBQAHAIALAAQALAAAIgHQAGgFACgHIApFBIgCgCQgHgHgLgBQgLAAgIAHIgFAHgACsjOIAAgBIgEgFIAAAAQgHgHgJgBIgCAAQgIAAgGADIA8laQAAAGADAGIAEAHIABABQAFAFAHACIAGAAQAGABAGgDIACgBIg9FSIgDgFgAj+obIADgFQAEAEAGABIADABIACAAQAHAAAGgDIAGgFQADgCACgEIADgFIAAAAIAiEHIgDAAQgHgIgLAAQgLAAgIAHIgGAHgAD5s6IARAFQAGADAPAKIgsDlIgBgBIAAgBQgHgHgJgBIgCAAQgLAAgIAHIgBABIgEAFIgBABIAAABgAkesWIAMgHIAegSIAhDuIAAgBIgBgBIgEgEIAAgBQgHgGgJgBIgCAAQgGgBgEACIgJAFIgBABIgEAGIAAABIgBABg");
	this.shape_150.setTransform(903.7,323.2);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#CC3300").s().p("Ah6LrIgHgDIgDgDIgEgDIgBgBIgBgCIgBgBIgCgIIgBgBIACgIIABAAIAAgCQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAIAGgIIACgCIAIgEQAFgBAHABQAGACAEAEIACACIAFAIQACAHgCAHIgBABIABABIgBABIgFAHIgFAFQgFACgFABgAAnLfIgBAAIhvgEIgBAAIAAAAIgBAAIgEAAIgBAAIgBgBIgBAAIgCgBIAAgBIAAgFIAAAAIAAgCIABAAIAAAAIABgBIABAAIAAgBIABAAIABAAIACAAIAAABIABAAIABAAIABAAIAAgBIABAAIBwAFIABAAIABAAIABABIAAAAIABABIAAAAIABAAIAAACIABAAIAAADIgCABIAAAAIAAABIAAABIgBAAIAAAAIgBABIAAAAIgBAAgAhUGbQgKgBgIgHIgBgBQgHgIABgLQAAgGADgFIAAgBIAFgGQAIgIALABQALAAAHAIIAAAAIAEAFQAEAGAAAIIgBAHIgDAGQgCADgDADQgHAHgKAAIgCAAgABECkQgLAAgHgHIgBgBQgDgDgBgEQgDgFAAgHQABgGACgFIABgBIAEgGIABAAQAIgIALABQAKAAAIAIIAAAAIAEAFIAAABQAEAGgBAHIAAAHIgDAGIgFAGQgIAGgKAAIgBAAgAiRg6QgLAAgHgIIgBAAQgHgIAAgLQABgHACgEIAAgBIAFgHQAJgHALAAQALABAHAHIABACIADADQAEAHgBAIIAAAGIgCAEQgCAFgEADQgIAHgKAAIgBAAgACVlDQgHgBgFgGIgBgBQgDgDgCgDQgCgGAAgHQAAgGADgFIAAgBIAFgGIAAAAQADgDADgBQAGgDAHAAIACAAQAJABAHAHIABAAIADAFIABABIACAFQABAEAAAFIgBAGIgDAGIgBADIgEADQgIAHgLAAIgFgBgAi/mUQgLAAgIgIIAAgBQgHgIAAgLQAAgGADgFIAFgHQAJgHALAAQALAAAHAIIAEAFQADAHAAAIIgBAGQgCAHgGAFQgHAHgKAAIgBAAgADkqzIgFAAQgHgCgFgFIgBgBIgFgHQgCgGAAgGIACgKIAAgBIABgBIAAgBIAEgFIABgBQAIgHALAAIACAAQAJABAHAHIABABIAAABIADADIABABQADAGAAAIIgBAGIgDAGIgFAGIgFAEIgBABQgFACgGAAIgCAAgAjnq1IgEgBQgFgBgFgEIgCgCIgCgCIgDgGQgDgFAAgHQAAgGADgEIAAgBIABgBIAEgGIAAgBIAJgFQAFgCAGABIACAAQAJABAGAGIABABIAEAEIAAABIABABQACAGAAAHIAAAFIgBACIgCAFQgCAEgEACIgGAFQgGADgGAAIgCAAg");
	this.shape_151.setTransform(903.1,338.7);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#000000").ss(2,1,1).p("ACHhYIgkAeIgDCHIAkAoIgBBYIkKgEIABhXIACjNIAChxIEKAEIgBBwIgDDNAiEhbIAiAfIgCCGIgiAo");
	this.shape_152.setTransform(916,422.3);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FF0000").s().p("AgaAbQgLgMAAgPQAAgPALgLQALgLAPAAQAPAAAMALQALALAAAPQAAAPgLAMQgMALgPAAQgPAAgLgLgAAYARQAMACAAgLQgFAHgIgEQgFgCgEgFIAFgEIAHgIQADgFACgEIgDACIgHAJIgJAHIgJgJQgFgIgKAEQgQAGAHAPIACACQAQALAOgOQAEAHAJACgAgQAHQgGgJAJgGQALgCAEAHIAIAIQgEAEgGACIgFACQgGAAgFgGg");
	this.shape_153.setTransform(963.3,309);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#CCCCCC").s().p("AguA8IACh4IBaACIgBB3g");
	this.shape_154.setTransform(916,417.8);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("ABTBvIgBAAIilgCIgBAAIgCABIgBAAIgBAAIgBAAIAAgBIgBAAIgBAAIgBAAIAAAAIgCgBIgBgBIAAgBIAAgBIAAgDIAAAAIAAgCIABAAIAAAAIABgBIABAAIAAgBIABAAIABAAIACAAIABAAIABAAIABAAIABAAICmACIABAAIABAAIABABIAAAAIACABIAAAAIAAAAIAAACIABAAIAAAEIgBAAIAAABIAAAAIAAABIgBAAIgBAAIAAABIgBAAIAAAAgABhA5IACiHIAkgdIgDDNgAiDhvIAhAfIgCCHIgiAngABEBNIgBAAIiLgCIgBAAIgBAAIgBAAIgCAAIgBAAIgBgBIAAAAIgCgBIAAgBIAAgBIgBgBIAAgDIABAAIAAgBIAAgBIABAAIAAAAIAAgBIABAAIABAAIABgBIABAAIABAAIABAAIACAAIABAAIAAABIABAAICJABIABAAIABAAIABABIABAAIABABIAAABIAAAAIAAABIABABIAAADIgBAAIAAABIgBAAIAAABIAAAAIgBAAIgBABIAAAAIgBABgABBAtIgBAAIiEgBIAAAAIgCAAIgBAAIgBAAIAAAAIgBAAIgBAAIgBgBIgBAAIgBAAIgBgDIgBAAIAAgBIgBgBIAAgCIABAAIABgCIAAAAIABAAIAAgBIAAgBIABgBIABAAIABAAIABAAIACAAIABAAIABABIABAAIAAgBIABAAICEACIABAAIABABIABABIAAAAIABABIAAAAIABAAIgBABIABABIAAADIgBAAIAAABIAAABIAAAAIgBAAIAAABIgBABIgBAAIAAAAg");
	this.shape_155.setTransform(916,424.2);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AnTKjIABhYIAignIACiIIgigeIABhxIEMADIgCBxIgkAeIgCCIIAjAoIgBBYgAmgJbICmACIABAAIABAAIAAgBIABAAIAAAAIABgBIABAAIAAgBIAAAAIAAgBIABAAIAAgDIgBgBIAAgBIAAAAIAAgBIgCgBIAAAAIgBAAIgBgBIgBAAIingCIgBAAIgBAAIgBAAIgBAAIgBAAIgBAAIgCAAIAAABIgBAAIgBABIAAAAIgBAAIAAACIAAAAIAAADIAAABIAAABIABABIACABIAAAAIACABIABAAIABAAIAAABIAAAAIABAAIABAAIACgBIABAAgAmeIvIAAABIAAABIAAACIAAABIAAABIAAABIACABIABAAIAAABIABAAIACAAIABABIACAAIABAAICLABIABAAIAAAAIABgBIAAAAIACAAIAAgBIABAAIAAAAIABgBIAAAAIAAgBIAAgDIAAgBIAAgBIgBAAIAAAAIgBgCIgBAAIgBAAIgBgBIgBAAIiKgBIAAAAIgBgBIgBAAIgCAAIgBAAIgBAAIgBAAIgBABIAAAAIgBAAIgBABIAAABIAAAAIgBAAgAkLIaIAAAAIABAAIAAAAIABAAIABgBIAAgBIABAAIAAAAIAAgBIAAAAIABgBIAAgDIgBAAIABgCIgBAAIAAAAIgBgBIAAAAIgBgBIgBgBIgBAAIiFgBIgBAAIAAAAIgBAAIAAAAIgBAAIgDAAIgBgBIgBABIgBAAIgBABIAAAAIAAABIgBAAIAAAAIAAACIgBAAIAAACIABABIAAABIAAABIABACIABAAIABAAIABABIABAAIABAAIABAAIABAAIABAAIABAAIAAAAICGABgAl6HoIBcACIABh5IhbgBgAmeEoIgIAFIgDACIgFAHQAAAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAIAAABIgBABIgBAIIABAAIACAJIAAAAIABACIABABIAFAEIADACIAGADIAIAAQAEAAAGgDIAFgFIAFgHIAAAAIAAgBIAAgBQABgIgBgHIgGgIIgCgBQgEgEgFgCIgHgBIgFABgAj7FHIABAAIABAAIAAAAIABAAIAAgBIABAAIAAAAIAAgBIABgBIAAAAIABgBIAAgDIgBAAIAAgCIgBAAIAAAAIgBgBIAAAAIgBgBIgBAAIgBAAIhxgCIgBAAIgBABIAAAAIgBgBIgBAAIAAAAIgCAAIgBAAIgBAAIgBABIgBAAIAAABIAAAAIgBAAIAAACIAAAAIAAADIAAABIAAABIABABIABABIABAAIABABIABAAIAEAAIABAAIAAAAIABAAIBxABgADMqAIAAgIIEJAAIAAAIgAClqBQgJgCgEgHQgPAOgRgLIgBgCQgIgQARgGQAKgDAGAHIAJALIAJgJIAGgIIAEgDQgCAEgEAFIgHAIIgEAFQADAFAGADQAHADAFgHQAAAJgIAAIgDAAgAB/qbQgKAHAHAJQAGAJAKgEQAGgCAEgFIgHgIQgFgGgGAAIgFAAgADeqgIAAgGIDyAAIAAAGg");
	this.shape_156.setTransform(949.3,374.9);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#CC3300").s().p("AhWLuIgGgDIgDgCIgEgEIgBgBIgCgCIAAAAIgCgJIgBAAIABgIIABgBIAAgBQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAIAGgHIACgCIAIgFQAFgBAHABQAGACAEAEIACABIAFAIQACAHgCAIIAAABIAAABIAAAAIgFAHIgFAFQgGADgEAAgABMLeIgBAAIhwgBIAAAAIgBAAIgBAAIgEAAIgBAAIgBgBIAAAAIgCgBIgBgBIAAgBIAAgBIAAgDIAAAAIAAgCIABAAIAAAAIABgBIABAAIAAgBIABAAIABAAIACAAIAAAAIABAAIABABIABAAIAAgBIABAAIBwACIABAAIACAAIAAABIABAAIABABIAAAAIAAAAIAAACIABAAIAAADIgBABIAAAAIAAABIAAABIgBAAIAAAAIgBABIAAAAIgBAAgAhJGWIgBgBQgIgIAAgLQAAgGADgFIAAgBIAFgHQAIgHALAAQALAAAHAHIABABIAEAFQADAGAAAIIAAAHIgDAGQgCADgDACQgIAIgLAAQgKAAgHgHgABICcIgBgBQgDgDgBgEQgDgFAAgHQAAgGADgFIAAgBIAEgGIABgBQAIgHALAAQALAAAHAHIAAABIAEAEIABABQADAGAAAIIAAAGIgDAGIgFAGQgIAIgLAAQgKAAgIgHgAiTg+IgBAAQgHgIAAgLQAAgGADgFIAAAAIAFgIQAIgHALAAQALAAAHAIIACABIACADQAEAHAAAIIgBAHIgBADQgCAFgEADQgIAIgLAAQgLAAgHgIgACflGQgHgCgGgFIgBgBIgEgGQgDgGAAgGQAAgHADgFIAAgBIAEgGIABAAIAGgEQAGgEAHABIACAAQAJAAAHAHIAAAAIAEAFIABABIACAFIABAIIAAAHIgDAGIgBADIgEADQgIAIgLAAIgFgBgAi4mPQgLAAgHgHIgBgBQgHgHAAgLQAAgHADgFIAFgHQAIgIALAAQALABAHAHIAEAFQAEAGAAAIIAAAHQgDAHgFAFQgHAHgKAAIgCAAgAjnqvIgDgBQgGgBgEgDIgDgDIgBgBIgEgGQgDgGAAgGQAAgGACgFIABgBIAAgBIAEgGIABAAIAIgFQAFgCAGAAIACAAQAJAAAHAHIAAAAIAEAFIABABIAAABQADAGAAAHIAAAFIgBABIgCAGIgFAGIgGAFQgGADgHAAIgCAAgADfq5QgHgBgFgFIgBgBQgDgDgBgEQgDgGAAgGIACgKIAAgBIAAAAIABgBIAEgGIAAgBQAJgHALAAIACAAQAJAAAGAHIABABIABABIADADIAAABQAEAGAAAIIgBAGIgCAGIgGAGIgEAFIgCAAQgGADgGAAIgGgBg");
	this.shape_157.setTransform(916.5,334.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#1F1F1F").s().p("AgfNyIgqkKQAHAIALAAQAKAAAJgIQACgCACgEIAfDEIBEm/QACADADADIABABQAHAHALABQALAAAHgIIhRIEgAiUCTIABABQAIAIAKAAQALAAAIgIQAEgEACgEIBEG2QgIgHgKAAQgMAAgHAHIgGAGgABxFNIgDgFIgBAAQgHgHgLAAQgLgBgIAIIAAAAIBFm8IAFgGQAGAFAHABIAFABQALAAAIgIIAEgDIhJHMIgBgBgAjKjEQAHAIALAAQALAAAIgIQAGgFACgHIAxFAIgBgCQgIgHgLAAQgLAAgIAHIgFAHgAC8ibIAAgBIgFgEIAAgBQgGgGgKgBIgCAAQgHAAgGAEIAzldQAAAHADAGQABADADADIABABQAFAFAIACIAFAAQAGAAAHgDIABAAIg1FTIgCgFgAj3ndIADgFQAEAEAGABIADAAIACAAQAHAAAGgDIAGgFIAFgFIACgGIABAAIApEGIgEABQgGgIgMAAQgKAAgJAHIgFAIgAkYq8IAqgRIAiDJIgBAAIAAgBIgFgFIAAgBQgHgGgJgBIgCAAQgGAAgFACIgIAFIgBABIgDAGIgBABIAAABgADxrWIAEgBIAQABIAUABIggDDIgBgBIgBAAQgGgHgJgBIgCAAQgLAAgJAIIAAAAIgEAGIAAABIgBABgAkKtxIABABIgDAAg");
	this.shape_158.setTransform(916.5,313.1);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#000000").ss(2,1,1).p("ACHhXIglAdIgCCHIAjAoIgBBYIkKgEIABhYIAEjMIAChxIEKAEIgCBxIgEDMAiDhbIAhAeIgDCHIgiAn");
	this.shape_159.setTransform(916.7,422.2);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("ABSBwIgBAAIilgDIgBAAIgBABIgCAAIgBAAIAAAAIgBgBIgBAAIgBAAIgBAAIAAgBIgCgBIgBgBIAAgBIAAgBIAAgDIAAAAIAAgCIABAAIAAAAIABgBIABAAIABgBIABAAIACAAIABABIABAAIABgBIABAAICmADIABAAIABABIABAAIAAAAIACABIAAABIAAAAIAAABIABABIAAADIgBAAIAAABIAAAAIAAABIgBAAIgBABIAAAAIgBAAIAAABgABgA6IADiHIAkgdIgDDMgAiDhvIAhAeIgCCHIgiAngABDBNIgBAAIiKgCIgBAAIgCAAIgBAAIgBAAIgBAAIgBgBIgBAAIgCgCIAAAAIAAgCIgBAAIAAgDIABAAIAAgBIABgBIAAAAIAAAAIABgBIABgBIABAAIAAAAIABAAIACAAIAAAAIABgBIABAAIABAAIABABIAAAAICKACIABAAIABABIAAAAIABAAIABACIAAAAIABAAIgBABIABABIAAADIgBABIAAAAIAAABIAAAAIgBAAIAAABIgBAAIgBAAIAAABgABBAtIgBAAIiEgCIgBAAIgBAAIgBAAIgBAAIgBAAIgBAAIAAAAIgBAAIgCgBIAAAAIgCgCIAAAAIAAgBIgBgBIAAgCIABgBIAAgBIABgBIAAAAIAAAAIABgBIAAgBIACAAIAAAAIABAAIADAAIABAAIAAAAIABAAIABAAIABAAICDACIABAAIABABIABABIABAAIABABIAAAAIAAAAIAAACIABAAIgBADIAAABIAAAAIgBABIAAAAIAAAAIgBABIAAABIgBAAIgBAAg");
	this.shape_160.setTransform(916.7,424.1);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#CCCCCC").s().p("AguA7IACh3IBbACIgCB3g");
	this.shape_161.setTransform(916.7,417.7);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AnXKiIAChYIAignIACiIIghgeIAChxIELAFIgCBwIgkAeIgDCIIAkAnIgCBZgAmjJaICmADIABAAIABAAIAAgBIABAAIAAAAIABgBIABAAIAAgBIAAgBIAAAAIABgBIAAgCIgBgBIAAgBIAAAAIAAgBIgCgBIAAAAIgBgBIgBAAIgBAAIingDIgBAAIgBAAIgBAAIgBAAIgCAAIgBAAIgBAAIgBAAIgBABIAAABIgBAAIAAACIAAAAIAAADIAAABIAAAAIABABIACACIAAAAIABABIABAAIABAAIABABIAAAAIABAAIACAAIABgBIABAAgAmhIvIAAABIgBAAIAAADIABAAIAAABIAAABIACABIABAAIABACIABAAIABAAIABAAIACAAIABAAICLACIABAAIABAAIAAgBIABAAIABAAIAAgBIABAAIAAAAIAAgBIAAgBIABgBIAAgCIgBgBIABgBIgBAAIAAAAIgBgCIgBAAIAAAAIgBgBIgBAAIiLgDIAAAAIgBAAIgBAAIgBAAIgBAAIAAAAIgCAAIgBAAIAAABIgBAAIgBAAIgBABIAAABIAAAAIgBABgAkOIaIABAAIAAAAIABgBIABAAIAAAAIABgBIAAAAIAAgBIABAAIAAAAIAAgBIABgDIgBgBIAAgBIAAAAIAAgBIgBgBIgBAAIgBgBIgBAAIgBAAIiEgCIgBAAIgBAAIgBAAIAAAAIgBAAIgDAAIgBAAIAAAAIgCAAIAAABIgBABIAAAAIAAAAIgBAAIAAACIgBAAIAAACIABACIAAABIAAAAIACACIAAAAIACAAIABAAIAAAAIABABIABAAIABAAIABAAIABAAIABgBICFADgAl9HoIBcABIACh4IhcgCgAmgEoIgJAEIgCACIgFAIQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIAAABIgBABIgBAIIABAAIABAJIABAAIABACIABACIAEADIADADIAHADIAIAAQAEgBAFgDIAGgEIAFgHIAAAAIAAgBIAAgBQACgIgCgHIgGgIIgCgCQgDgEgGgCIgFAAIgHABgAj9FHIABAAIABAAIABAAIAAAAIABgBIABAAIAAgBIAAAAIAAgBIABgBIAAgDIgBAAIAAgBIAAAAIAAgBIgBgBIgBAAIAAgBIgCAAIgBAAIhxgDIgBAAIAAABIgBAAIgBAAIgBAAIAAgBIgCAAIgBAAIgBABIAAAAIgBAAIgBACIAAAAIgBAAIAAACIAAAAIAAADIAAAAIAAABIABABIACACIAAAAIABABIABAAIAEAAIABAAIABAAIAAgBIBxACgADQqAIAAgIIEIAAIAAAIgACoqBQgJgCgEgHQgPAOgQgKIgCgDQgHgQAQgFQAKgEAGAHIAJALIAJgIIAGgJIAEgDQgCAEgDAFIgHAIIgFAGQADAEAGADQAIADAEgHQAAAJgHAAIgEAAgACCqbQgKAHAHAJQAGAJALgEQAFgCAEgEIgHgJQgEgGgHAAIgFAAgADiqfIAAgHIDyAAIAAAHg");
	this.shape_162.setTransform(950.2,374.9);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#CC3300").s().p("AhbLtIgHgCIgDgDIgEgEIgBgBIgCgCIAAAAIgBgJIgBAAIABgIIAAgBIAAgBQABAAAAgBQAAAAAAAAQAAAAAAAAQAAAAgBgBIAGgHIACgCIAJgEQAFgCAGABQAGACAEAEIACACIAFAIQACAHgBAHIgBABIABABIgBABIgEAHIgGAEQgFADgEABgABHLeIgBAAIhwgCIgBAAIAAAAIgBAAIgEAAIgBAAIgBAAIAAAAIgDgCIAAgBIAAgBIgBAAIAAgDIABAAIAAgCIAAAAIAAgBIABgBIACAAIAAAAIABgBIABAAIABAAIABABIAAAAIACAAIAAAAIABgBIABAAIBwACIABAAIABABIABAAIAAAAIACACIAAAAIAAAAIAAACIABAAIAAADIgBABIAAAAIAAABIAAABIgCAAIAAAAIgBAAIgBABgAhNGVIgCgBQgHgHABgLQAAgHACgFIABgBIAEgGQAIgIALABQALAAAHAHIABAAIADAFQAEAHABAIIgCAGIgCAGIgFAGQgIAIgKAAQgLgBgHgHgABGCcIgBgBQgDgDgCgEQgDgFAAgHQAAgGADgFIAAgBIAFgGIAAgBQAIgHALAAQAKAAAIAHIAAABIAFAEIAAABQADAHAAAHIAAAHIgDAFIgFAGQgIAIgLAAQgKAAgHgHgAiVg/IgBAAQgIgIABgLQAAgGADgFIAAAAIAFgIQAIgHALAAQALAAAHAIIACACIACADQAEAGAAAIIgBAHIgCAEQgCAEgDAEQgIAHgLAAQgLAAgHgIgACelGQgIgBgFgGIgBgBQgDgDgBgDQgDgGAAgGQAAgHADgFIABgBIADgGIABAAQADgDACgBQAGgDAIAAIACAAQAJAAAHAHIABABIAEAEIAAABIACAFIABAJIgBAGIgCAGIgBADIgEADQgIAIgLAAIgFgBgAjLmYIAAAAQgIgIABgLQgBgGADgFIAFgIQAIgHALAAQALAAAIAIIADAFQAEAGABAIIgBAHQgDAHgFAFQgIAHgKAAQgLAAgIgIgAjmqxIgEAAQgGgBgEgEIgCgCIgCgBIgEgHQgDgFAAgHQAAgGACgEIABgBIAAgBIAFgGIAAAAQAEgEAFgCQAEgCAGAAIACAAQAJABAHAHIABAAIADAFIABABIAAAAQAEAGgBAHIAAAFIAAACIgDAGIgFAGIgGAFQgGACgGAAIgCAAgADfq4QgGgCgGgFIgBgBQgDgDgBgEQgDgFAAgHIACgKIAAgBIAAAAIABgBIAFgGIAAgBQAIgHALAAIACAAQAJABAHAHIABAAIABABIACAEIAAABQAEAGAAAHIAAAHIgDAGIgFAGIgFAEIgCAAQgFADgHAAIgGAAg");
	this.shape_163.setTransform(917.8,334.2);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#1F1F1F").s().p("AglMiIgokJQAHAHALABQAKgBAIgHIAFgHIAdDFIBHm/QACAEADACIABABQAHAIAKAAQALAAAIgIIhTIEgAiWBEIABAAQAHAIALAAQALAAAIgHQADgEACgEIBCG2QgHgIgLABQgLgBgIAIIgEAGgABvD+IgFgEIAAgBQgIgHgKAAQgLgBgIAIIAAAAIBHm8IAFgGQAFAGAIABIAFABQALAAAIgIIAEgDIhLHLIAAgBgAjLkUQAIAIALAAQAKAAAIgIQAFgEADgIIAwFBIgCgCQgHgIgLAAQgLAAgIAHIgFAHgAC7jpIAAgBIgEgEIgBgBQgHgHgJAAIgCAAQgIgBgGAEIA1lcQAAAGADAGQABADADADIABACQAGAFAGABIAGABQAHAAAFgDIACgBIg2FUIgCgFgAj2otIACgFQAEADAGABIAEABIACAAQAGAAAGgCIAGgGIAFgFIADgHIAAAAIAnEHIgCABQgIgIgLAAQgLAAgIAHIgFAHgAkZsSIAYgHIAUgFIAgDKIAAAAIgBgBIgDgFIgBgBQgHgGgJgBIgCAAQgGAAgEACQgFACgEADIAAABIgFAGIAAABIgBAAgADxsiIApADIggC/IgBgBIgBgBQgHgGgJgBIgCAAQgLAAgIAHIAAAAIgFAGIgBABIAAABg");
	this.shape_164.setTransform(917.8,321);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#000000").ss(2,1,1).p("ACGhYIgBDMIgBBYIkKgCIABhYIABjMIABhxIEKACIgBBxIgkAdIgBCHIAkAoAiEhaIAiAeIgBCHIgiAn");
	this.shape_165.setTransform(918.8,422.3);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AhWBvIgBAAIgBAAIAAgBIgBAAIgBAAIgBAAIgBAAIgCgCIAAgBIAAgBIgBgBIAAgCIABAAIAAgCIAAAAIAAgBIABgBIABAAIABgBIABAAIABAAIABAAIABAAIACAAIABAAIABAAIClABIACAAIABAAIAAABIABAAIABABIAAABIABAAIAAABIAAABIAAACIAAABIAAAAIgBABIAAABIAAAAIgBABIgBAAIAAAAIgBABIAAAAIgCAAIilgBIgBAAIgBABIgBAAgABhA5IABiHIAkgeIgBDMgAiEhuIAiAeIgBCIIgiAngABFBNIgBAAIiLgBIgBAAIgBAAIgBAAIgCAAIgBAAIgBgBIAAAAIgCgCIgBgBIAAgBIAAgBIAAgCIAAAAIAAgBIABgBIAAAAIAAAAIABgBIABgBIABAAIAAgBIABAAIACAAIAAAAIABAAIABAAIABAAIABAAIAAAAICKACIABAAIABAAIAAABIABAAIABABIAAABIABAAIAAABIAAAAIAAADIAAABIAAABIgBAAIAAABIAAAAIgBAAIgBABIAAAAIgBABgABCAsIgBAAIiEgBIgBABIgBAAIgBAAIgBAAIgBAAIgBgBIAAAAIgBAAIgCAAIAAAAIgCgCIAAAAIAAgBIgBgBIAAgDIABAAIAAgCIAAAAIABAAIAAgBIAAAAIABgBIABAAIABAAIABAAIACAAIABAAIABAAIABAAIAAAAIABAAICEABIABAAIABAAIABABIAAAAIABABIAAAAIABAAIAAACIAAABIAAADIAAAAIAAAAIgBABIAAAAIAAAAIgBABIAAABIgBAAIgBAAg");
	this.shape_166.setTransform(918.8,424.3);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AnRKlIAAhYIAignIABiJIgigeIABhxIEMACIgBBxIgkAeIgBCIIAjAnIAABZgAmrJXIABABIAAABIAAABIADACIAAAAIABAAIABAAIABAAIAAABIABAAIABAAIABAAIABgBIACAAIClABIACAAIAAAAIABgBIAAAAIABAAIABgBIABAAIAAgBIAAgBIAAAAIABgBIAAgCIgBgBIAAgBIAAAAIAAgBIgCgBIgBAAIAAgBIgBAAIgCAAIimgBIgBAAIgBAAIgCAAIgBAAIgBAAIgBAAIgBAAIAAABIgCAAIgBABIAAABIAAAAIAAACIgBAAgAmcIxIAAABIgBAAIAAACIABABIAAABIAAABIACACIAAAAIABABIABAAIACAAIABAAIACAAIABAAICLABIABAAIABAAIAAgBIABAAIABgBIAAAAIABAAIAAgBIAAAAIAAgBIAAgBIAAgDIAAAAIAAgBIAAAAIAAgBIgBgBIgBAAIgBgBIgBAAIgBAAIiKgCIgBAAIAAAAIgBAAIgCAAIAAAAIgBAAIgCAAIgBAAIAAABIgBAAIgBABIAAABIAAAAIgBAAIAAABgAkKIaIABAAIAAAAIABAAIABAAIAAgBIABgBIABAAIAAAAIAAgBIAAAAIABAAIAAgDIgBgBIAAgCIAAAAIAAAAIgCgBIAAAAIgBgBIgBgBIgBAAIiFAAIgBAAIAAAAIgBAAIAAAAIgBAAIgDAAIgBAAIgBAAIgBAAIgBABIAAAAIAAABIgBAAIAAAAIAAACIgBAAIAAADIABABIAAABIAAAAIACACIAAAAIACAAIABAAIABAAIABABIAAAAIABAAIABAAIABAAIABgBICFABgAl5HpIBcABIAAh4IhbgCgAmeEqIgIAEIgDACIgFAHQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIAAABIgBABIgBAIIABAAIACAJIAAAAIABADIABABIAFADIACACIAIADIAHABQAEgBAGgDIAFgFIAFgHIAAgBIAAAAIAAgBQABgIgBgHIgGgIIgCgCQgEgDgFgCIgGAAIgGABgAj7FHIABAAIABAAIAAAAIABAAIAAgBIABAAIAAAAIAAgBIABgBIAAgBIABAAIAAgDIgBgBIAAgBIgBAAIAAAAIgBgBIAAAAIgBgBIgBAAIgBAAIhxgBIgBAAIgBABIAAAAIgBAAIgBgBIAAgBIgCAAIgBAAIgBABIgBABIgBAAIgBABIAAAAIAAAAIAAACIAAAAIAAADIAAAAIAAABIAAACIACABIABAAIABABIABAAIAEAAIABAAIAAAAIABAAIBxAAgADKqAIAAgIIEJAAIAAAIgACjqBQgJgCgFgHQgOAOgQgKIgCgDQgIgQARgFQAJgEAHAHIAJALIAIgIIAHgJIAEgDQgCAEgEAFIgHAIIgEAGQADAEAGADQAHADAFgHQAAAJgIAAIgDAAgAB9qbQgKAHAHAJQAGAJAKgEQAGgCAEgEIgHgJQgFgGgGAAIgFAAgADcqfIAAgHIDyAAIAAAHg");
	this.shape_167.setTransform(952,374.9);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#CC3300").s().p("AhMLvIgHgDIgDgCIgEgEIgBgBIgCgCIAAAAIgCgJIgBAAIABgIIABgBIAAgBQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAIAGgHIACgCIAIgFQAFgBAHABQAGACAEADIACACIAFAIQACAHgCAHIAAABIAAABIAAABIgFAHIgFAFQgFADgFAAgABVLeIgBAAIhwgBIAAABIgBAAIgBAAIgEgBIgBAAIgBAAIAAAAIgCgCIgBgBIAAgBIAAAAIAAgDIAAAAIAAgCIABAAIAAgBIABgBIABAAIAAAAIABgBIABAAIACAAIAAABIABAAIABAAIABAAIAAAAIABAAIBwAAIABAAIACABIAAAAIABAAIABABIAAABIAAAAIAAABIABABIAAADIgBAAIAAABIAAAAIAAABIgBAAIAAABIgBAAIAAAAIgBABgAhCGXIgBgBQgIgIAAgLQAAgGADgFIAAgBIAFgHQAIgHALAAQALAAAHAHIAAAAIAEAFQAEAHAAAIIAAAGIgDAGQgCAEgDACQgHAIgLAAQgLAAgHgHgABOCcIgBgBQgDgDgBgEQgDgFAAgHQAAgGACgFIABgBIAEgGIAAgBQAIgHALAAQALAAAHAHIABABIAEAEIAAABQAEAGAAAIIgBAGIgCAGIgFAGQgIAIgLAAQgLAAgHgHgAiPg8IAAgBQgIgHAAgLQAAgHADgEIAAgBIAFgHQAIgIALAAQALAAAHAIIACABIACADQAEAHAAAIIAAAGIgCAEQgCAFgEADQgHAIgLAAQgLAAgIgHgACilHQgHgBgGgFIgBgBQgDgDgBgEQgDgFAAgHQAAgGACgFIABgBIAEgGIAAgBQADgCADgBQAGgEAHAAIACAAQAJAAAHAHIABABIAEAEIAAABIADAFIABAJIgBAGIgCAGIgCADIgDADQgIAIgLAAIgFgBgAjImVIAAAAQgIgIAAgLQAAgGADgFIAFgIQAIgHALAAQALAAAHAHIAEAFQAEAHAAAIIAAAGQgCAHgGAFQgHAIgLAAQgLAAgIgIgAjkquIgCAAIgEAAQgFgBgFgEIgCgCIgCgBIgEgGQgDgGAAgGQAAgGACgFIABgBIAAgBIAEgGIABAAQAEgEAEgCQAFgCAGAAIACABQAJAAAHAHIAAAAIAEAFIABABIAAAAQADAGAAAHIAAAFIAAACIgDAGIgFAGIgGAFQgFACgFAAIgCAAgADgq6QgHgBgGgFIgBgBQgDgDgBgEQgDgFAAgHIACgKIAAgBIAAAAIABgBIAEgGIABgBQAIgHALAAIACAAQAJAAAHAHIAAAAIABABIADAEIABABQADAGAAAIIgBAGIgCAGIgFAGIgFAEIgBABQgGADgHAAIgFgBg");
	this.shape_168.setTransform(918.3,334.2);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#1F1F1F").s().p("AgVMuIgrkJQAHAHALAAQALAAAHgIQAEgCACgDIAdDDIBEm/QACADACADIACABQAGAHALAAQALAAAIgHIhOIEgAiNBQIABABQAHAIALgBQALAAAHgIQAEgDADgEIBFG1QgHgHgLAAQgKAAgJAHIgEAHgAB5EJIgEgFIAAgBQgIgHgKAAQgLAAgJAHIAAAAIBDm7IAFgHQAGAFAHACIAFAAQALAAAIgIIAEgCIhHHLIAAAAgAjFkHQAHAIALAAQALAAAIgIQAFgFACgGIAzE+IgCgBQgHgIgLAAQgLAAgIAIIgFAHgADAjfIAAgCIgEgEIgBAAQgHgIgIAAIgDAAQgHAAgGAEIAxlcQAAAGADAFQABAEADADIABABQAGAFAHACIAFAAQAHAAAGgDIACgBIgzFUIgDgEgAj0ogIADgFQAEAEAGABIADAAIACAAQAGABAHgDIAFgFIAGgGIACgGIAAAAIArEGIgDAAQgIgHgLAAQgLAAgIAHIgFAIgAkasNIAKgDIAhgHIAlDRIgBgBIAAgBIgFgFIAAAAQgHgGgJgBIgCgBQgGAAgFACQgEACgEAEIgBAAIgDAHIgBABIAAABgAD0stIALAFQAPAGANADIgfDIIgCgBIAAgBQgHgGgJgBIgCAAQgLAAgIAIIgBAAIgDAGIgBABIgBABg");
	this.shape_169.setTransform(918.1,320);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:1671.2,y:430.6}},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{x:1611.4,y:452.1}},{t:this.shape_1,p:{x:1618.7,y:452.1}}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_4,p:{x:1571.9,y:447.6}},{t:this.shape_1,p:{x:1579.2,y:447.6}}]},1).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{x:1527.2}},{t:this.shape_9,p:{x:1534.4}}]},1).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_10,p:{x:1494.7}},{t:this.shape_9,p:{x:1501.9}}]},1).to({state:[{t:this.shape_18},{t:this.shape_17,p:{x:1493.4,y:325.6}},{t:this.shape_16,p:{x:1472.9,y:429.5}},{t:this.shape_15,p:{x:1465.7,y:429.5}}]},1).to({state:[{t:this.shape_19},{t:this.shape_17,p:{x:1461.9,y:323.1}},{t:this.shape_16,p:{x:1441.4,y:427}},{t:this.shape_15,p:{x:1434.2,y:427}}]},1).to({state:[{t:this.shape_20},{t:this.shape_17,p:{x:1431.9,y:320.6}},{t:this.shape_16,p:{x:1411.4,y:424.5}},{t:this.shape_15,p:{x:1404.2,y:424.5}}]},1).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},1).to({state:[{t:this.shape_28},{t:this.shape_27,p:{x:1368}},{t:this.shape_26,p:{x:1350.5}},{t:this.shape_25,p:{x:1343.2}}]},1).to({state:[{t:this.shape_29},{t:this.shape_27,p:{x:1331.2}},{t:this.shape_26,p:{x:1313.8}},{t:this.shape_25,p:{x:1306.4}}]},1).to({state:[{t:this.shape_27,p:{x:1293.7}},{t:this.shape_30},{t:this.shape_26,p:{x:1276.3}},{t:this.shape_25,p:{x:1268.9}}]},1).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43}]},1).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48,p:{x:1131.4,y:420.9}},{t:this.shape_47,p:{x:1124.1,y:421}}]},1).to({state:[{t:this.shape_52},{t:this.shape_51,p:{x:1116.6,y:326.6}},{t:this.shape_48,p:{x:1108.9,y:435.9}},{t:this.shape_47,p:{x:1101.6,y:436}}]},1).to({state:[{t:this.shape_53},{t:this.shape_51,p:{x:1092.6,y:335.6}},{t:this.shape_48,p:{x:1084.9,y:444.9}},{t:this.shape_47,p:{x:1077.6,y:445}}]},1).to({state:[{t:this.shape_56,p:{x:1078.4}},{t:this.shape_55,p:{x:1073.1}},{t:this.shape_48,p:{x:1065.4,y:444.9}},{t:this.shape_54,p:{x:1058.1}}]},1).to({state:[{t:this.shape_56,p:{x:1055.9}},{t:this.shape_55,p:{x:1050.6}},{t:this.shape_48,p:{x:1042.9,y:444.9}},{t:this.shape_54,p:{x:1035.6}}]},1).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57}]},1).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61}]},1).to({state:[{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65}]},1).to({state:[{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77,p:{x:971.9,y:411.3}},{t:this.shape_76},{t:this.shape_75,p:{x:972.4,y:422.9}},{t:this.shape_74},{t:this.shape_73}]},1).to({state:[{t:this.shape_86},{t:this.shape_77,p:{x:966.9,y:414.8}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_75,p:{x:967.4,y:426.4}},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81}]},1).to({state:[{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88,p:{x:1016.3}},{t:this.shape_87}]},1).to({state:[{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95,p:{x:1001.3}},{t:this.shape_94}]},1).to({state:[{t:this.shape_106},{t:this.shape_105},{t:this.shape_77,p:{x:934.4,y:412.3}},{t:this.shape_104},{t:this.shape_75,p:{x:934.9,y:423.9}},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101}]},1).to({state:[{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_75,p:{x:920.4,y:422.4}},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107}]},1).to({state:[{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115,p:{x:961.3}},{t:this.shape_114}]},1).to({state:[{t:this.shape_126},{t:this.shape_125},{t:this.shape_124,p:{x:901.7}},{t:this.shape_123},{t:this.shape_122,p:{x:901.8}},{t:this.shape_88,p:{x:948.8}},{t:this.shape_121,p:{x:901.8}}]},1).to({state:[{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_124,p:{x:892}},{t:this.shape_122,p:{x:892}},{t:this.shape_115,p:{x:938.8}},{t:this.shape_121,p:{x:892}}]},1).to({state:[{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_124,p:{x:884.2}},{t:this.shape_122,p:{x:884.3}},{t:this.shape_95,p:{x:933.8}},{t:this.shape_121,p:{x:884.3}}]},1).to({state:[{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133}]},1).to({state:[{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141,p:{x:887.9,y:419.2}},{t:this.shape_134},{t:this.shape_140}]},1).to({state:[{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_115,p:{x:943.3}},{t:this.shape_146}]},1).to({state:[{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152}]},1).to({state:[{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_88,p:{x:964.6}},{t:this.shape_159}]},1).to({state:[{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_141,p:{x:918.8,y:417.8}},{t:this.shape_115,p:{x:965.8}},{t:this.shape_165}]},1).to({state:[]},1).wait(14));

	// Layer 3
	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#000000").ss(2,1,1).p("Ak6AJQAUg4AJhEIATh6IAUh6QAOhPBLgdQA4gTA2ACQCAAABoAlIANAFQALAEAMAFADgmvQARAIANAJQAMAIAKAJQAYAXALAeQABAEABADAE5lQQADATgLAlQgHAugCAaQgDAlAEAkIgBAAQABACAAADQAIAzASA0QAIgogEghACbEbQBNhPBMAtQA7AjA5BtQANAZAOAeQAqjWgRh8QgFgdgIgcQgghzg+gsQgZgRgdgGQgMgCgGgEAFDgaQAAAAAAgBAEpiCQAGA2AUAyACbEbQCPi6AZh7AiZEcQBCBTBcB2QBVh3BBhTAk6AJQgGgRgEgRQgJgmAEghAlEgZQAdg2ADgyQgNAAgMAEQghAHgbAVQg5AugdBtQgIAbgEAeQgRB8AtDVQAJgUAJgTQA3huA4gqQBQg9BVBUQh9ihgkhy");
	this.shape_170.setTransform(919.1,218.1);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#4A4A4A").s().p("Al5juQAbgWAhgGIgLAcQgEAiAIAmQAEARAGASQAkByB+CgQhVhUhRA9Qg4Aqg2BuQg6kxBtjNgAE1BrQhNgshNBOQCPi4Aah8IAAgBQAHgogDghIgNgeQAeAHAYARQA/BfAOB9QAOB8gjCbQg6htg6gkg");
	this.shape_171.setTransform(919.1,232.2);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#2D2D2D").s().p("AnbgqQAEgeAIgbQAdhuA5guQhuDOA6EwIgSAnQgtjVARh7gAGoDrQAjiagOh8QgNh+g/hfQA+AsAgB0QAIAcAFAeQARB7gqDVQgOgegNgZgAlJj+IAMgdQAMgDANgBQgDAygdA2QgJgmAEghgAEpkgIgBgFIABAAQAGAEAMACIAMAdQAEAigIAnQgSg0gIgzg");
	this.shape_172.setTransform(919.1,233.9);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#DEB17F").s().p("AidC2Qh9ihgkhxQAUg5AJhEIATh6IADAEIDUFGQAsAcAmAAQApAAAmgdIDDl0IgQBTIAHgLQgDAlAEAkIgBAAIABAFQAGA2AUAyQgZB8iPC5QhBBThVB3IiejJg");
	this.shape_173.setTransform(919.5,228.3);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#C2894C").s().p("AhNEQIjVlFIAUh6QAOhOBJgeIBtgRIBTAEIAhAFQBDAJAxAPIAOAFIAWAJIAEACQAQAIAOAJQALAIAKAJQAZAXALAeIABAHIABABQAIAegHAkQgDAhgPAdQABgaAIguQAIgdAAgSIAAgJIAAAJQAAASgIAdQgIAugBAaIgHALIAQhTIjEFzQglAegpAAQgnAAgrgdgAEOgcIAAAAg");
	this.shape_174.setTransform(921.8,200.1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#000000").ss(2,1,1).p("Ak6AJQAUg4AJhEIATh6IAUh6QAOhPBLgdQA4gTA2ACQCAAABoAlIANAFQALAEAMAFADgmvQARAIANAJQAMAIAKAJQAYAXALAeQABAEABADAE5lQQADATgLAlQgHAugCAaQgDAlAEAkIgBAAQABACAAADQAIAzASA0QAIgogEghAFDgaQAAAAAAgBACbEbQBNhPBMAtQA7AjA5BtQANAZAOAeQAqjWgRh8QgFgdgIgcQgghzg+gsQgZgRgdgGQgMgCgGgEACbEbQCPi6AZh7AEpiCQAGA2AUAyAiZEcQBCBTBcB2QBVh3BBhTAk6AJQgGgRgEgRQgJgmAEghAlEgZQAdg2ADgyQgNAAgMAEQghAHgbAVQg5AugdBtQgIAbgEAeQgRB8AtDVQAJgUAJgTQA3huA4gqQBQg9BVBUQh9ihgkhy");
	this.shape_175.setTransform(919.4,216);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#2D2D2D").s().p("AnbgpQAEgfAIgbQAdhuA5guQhuDOA6EwIgSAnQgtjVARh6gAGoDsQAjicgOh7QgNh+g/hfQA+AsAgB1QAIAbAFAdQARB7gqDWQgOgdgNgZgAlJj+IAMgdQAMgEANAAQgDAygdA2QgJgmAEghgAEpkgIgBgFIABABQAGADAMACIAMAeQAEAggIAoQgSg0gIgzg");
	this.shape_176.setTransform(919.4,231.8);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#4A4A4A").s().p("Al5juQAbgVAhgIIgLAeQgEAgAIAnQAEARAGASQAkByB+CgQhVhVhRA9Qg4Arg2BtQg6kwBtjNgAE1BrQhNgshNBPQCPi5Aah8IAAgCQAHgngDghIgNgeQAeAHAYARQA/BfAOB9QAOB8gjCbQg6htg6gkg");
	this.shape_177.setTransform(919.4,230.1);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#C2894C").s().p("AhNEQIjVlFIAUh6QAOhOBJgeIBtgRIBTAEIAhAFQBDAJAxAPIAOAFIAWAJIAEACQAQAIAOAJQALAIAKAJQAZAXALAeIABAHIABABIAAAJQAAASgIAdIjEFzQglAegpAAQgnAAgrgdgAEXhkQgIAugBAaIgHALgAEOgcQABgaAIguQAIgdAAgSIAAgJQAIAegHAkQgDAhgPAdIAAAAgAEficIAAAAg");
	this.shape_178.setTransform(922.1,198);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#000000").ss(2,1,1).p("Ak6AJQAUg4AJhEIATh6IAUh6QAOhPBLgdQA4gTA2ACQCAAABoAlIANAFQALAEAMAFADgmvQARAIANAJQAMAIAKAJQAYAXALAeQABAEABADAE5lQQADATgLAlQgHAugCAaQgDAlAEAkIgBAAQABACAAADQAGA2AUAyQAAAAAAgBQAIgogEghACbEbQBNhPBMAtQA7AjA5BtQANAZAOAeQAqjWgRh8QgFgdgIgcQgghzg+gsQgZgRgdgGQgMgCgGgEACbEbQCPi6AZh7AEpiCQAIAzASA0AiZEcQBCBTBcB2QBVh3BBhTAlEgZQAdg2ADgyQgNAAgMAEQghAHgbAVQg5AugdBtQgIAbgEAeQgRB8AtDVQAJgUAJgTQA3huA4gqQBQg9BVBUQh9ihgkhyQgGgRgEgRQgJgmAEgh");
	this.shape_179.setTransform(919.7,215.7);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#2D2D2D").s().p("AnbgqQAEgeAIgbQAdhuA5gtQhuDMA6ExIgSAnQgtjUARh8gAGoDrQAjibgOh8QgNh8g/hfQA+ArAgB1QAIAbAFAeQARB6gqDWQgOgdgNgagAlJj+IAMgdQAMgDANgBQgDAygdA3QgJgnAEghgAEpkgIgBgFIABABQAGADAMACIAMAdQAEAigIAnQgSg0gIgzg");
	this.shape_180.setTransform(919.7,231.5);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#4A4A4A").s().p("Al5juQAbgVAhgIIgLAdQgEAiAIAmQAEARAGASQAkByB+CgQhVhUhRA8Qg4Aqg2BuQg6kwBtjNgAE1BsQhNgthNBPQCPi5Aah8IAAgCQAHgngDghIgNgdQAeAGAYARQA/BfAOB9QAOB8gjCbQg6htg6gjg");
	this.shape_181.setTransform(919.7,229.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_174},{t:this.shape_173,p:{x:919.5,y:228.3}},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170}]},37).to({state:[{t:this.shape_178,p:{x:922.1,y:198}},{t:this.shape_173,p:{x:919.8,y:226.2}},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175}]},1).to({state:[{t:this.shape_178,p:{x:922.4,y:197.7}},{t:this.shape_173,p:{x:920.1,y:225.9}},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179}]},1).to({state:[]},1).wait(14));

	// Layer 1
	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#000000").ss(2,1,1).p("EAHQg3kQFBiyDLjzQgRgMgIgJQAiggBEBRQBbBsgbAHQDyC9DsEGQCzC3AwIsQAaEXA7DhQgrAvgvAkQjUCik5gvIBME4QghHiAUM3QAEChAJDxIidCYIgcAbQhRBMASBVIAnCxQAaBaBogjEAPDg+eQhPhNgbh6QgqhVj7CJQjNByBICjQAdA3ANBNQAEAaAAAtEAE4g2wQAeg+CHhjQAAA1gNA4EAFSg2iQBKglA0gdEAFSg2iQA0gPAgDdQHKj7D5krEADjg0ZIA7hhIAag2QgvgKgSAmQAqiIC4h8EAFSg2iQgwBSgoBYIAkiCEAD3g2UQgRAlgDBWQgwBFgtBhQggBTgaBMQgaBKgdBrQgbBrgaB6QgQBPgNBOQgEAugEAwIh9HxQl5HRmLJGImyFDIAADuIDUAAIAAg/EAQ5gxiQilEjC5FUQBZC+A7GNQAaAEAdAGAzmlvIBCAqIA/hVQC1hTA0hpQAhg9AagyQGlkiEwk9AzmlvIgpAAIAag9AyVodQhEBRgNBdAhwj+In7VTQhSBSgHCCQgCAbACAcQAJCpj3HCIoqQ1QgwBGgdAWQhKAwAYBQQAYBNhOBDAo5S0QATALAQANQBWCkA8DhQgCASgEAUAcu/8IAwE+QAWJqjuSxQBHDDA4DXQALAjgaAiQgXAfg9gRQgJAugkAPQglAOgpgMQgHAhgjAUQgoAWgjgWIAAA4QgtBHhCg6Iguh6Ahwj+QHOBKHghfQDpgwC8gEQAAAAABAAQAXgBAVABQAlAAAiACEgBFgk/QgJBtgCBvIgcM/QgFChgaExIhEJDQAwAKAvAHANVw4QAOAEAMADQD3A5BGkGAF3x8QAMgBALgCQDDgmBcjJAHdOeIHgqnQCojpBMiwQAjhQAPhGEgOEA30QAJgNAJgNQJcuCC2qQQA5lACUjlIFwoFQDCHgEIGcQCQCoAJCoQANB4BOA7QBaBkAYEGQgUFfE9FFQgHAKgFALQgKAUgFAXQgNA9AXBTQAHAZAKAaIiQA1QAKALAKALQiJBEiXAwQgvAQgxANQjpgchECNQhFCMC0ApID4AAISSAAIACgXQgLgCgJAAQg5gHg2gKQlthLkMjwQgpgogpgqATHDlQgXisAeh4IBCkIATYHVIA9C0EAVBAiVQDDA3Bai0EAY2A0rQCMCBEVBIQAyAMA1ALAVDMDIFKQOIE6L3QFbMAAGDRQAnEehHEiEggIA0BQAQAJALAMQgBAAAAgBQgNgLgNgJQhghIhcgEQh2gJAFB6QAFCCCvC4QAuAtDICaQDICZHMDGIBRiOQAIASANgEIEImjQAwhNgrgiEgftA0WIAAABQAyAqBHAVQBeAdCFgHQBbBKBVBeQCxDFCKEfEgT9A1PQAMAXALAVQCeEfDEim");
	this.shape_182.setTransform(1670.6,620);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#2C2C2C").s().p("ABSCZQCsgcCRivQg6DWiwAAQgmAAgtgLgAhvijQhcDJjDAlQCVhjCKiLg");
	this.shape_183.setTransform(1750.3,497.2);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#ECECEC").s().p("AURG+Qi0gqBFiMQBEiMDpAcQBDBCgJDkgAYvB7QCXgxCJhEQAoArAqAoIlHB/QgCg9gpgggA+glLQgFh6B2AJQBcAEBgBIQANAJANALIABABIAAAAQBJBVjdD0Qivi4gFiBgA35jRIAahKQBeAcCFgGQBbBKBVBeQlSgyhbhCg");
	this.shape_184.setTransform(1630.1,989.8);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#D8D8D8").s().p("A/OBYQjIiYguguQDdj0hJhVQAyArBHAVIgaBKQBbBCFSAyQCxDDCKEgIhRCOQnMjHjIiZgAQxFiQAJjkhDhCQAxgOAvgPQApAgACA9IFHh+QEMDvFtBKQA2ALA5AGQAJAAALADIgCAXg");
	this.shape_185.setTransform(1677.3,999);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#4D83AC").s().p("A5eP9QCxCUCxgbQhIA9hDAAQhzAAhki2gASjPtQAFgYAKgUQAFgKAHgKQCMCBEVBHIgXABQkOAAiXiJgAPJjoQCYgsCGhRQhFCKiDAAQgoAAgugNgAuOyyQCxCCgfEEQg8jhhWilg");
	this.shape_186.setTransform(1708.2,863);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#86B4D6").s().p("EAeiAiuQg5gGg2gLQlthKkMjwQgqgogogrIgUgWICQg0QgKgbgHgYQgXhTANg+QCdCPEfgGQAxANA2ALQg2gLgxgNQkVhHiMiCQk9lFAUlfQgYkGhahkQhOg7gNh4QgJioiQinQkImcjCngIHgqmQCojpBMixQAjhRAPhGQgPBGgjBRQhMCxioDpIngKmIlvIFQiVDlg5FAQi2KQpcOBIgSAaQixAcixiUIgXgsIAXAsQCeEfDEinQArAjgwBMIkIGjQgNAEgIgRQiKkgixjEQhVhehbhKQBOhEgYhMQgYhRBKgwQAdgWAwhFIIqw2QD3nBgJioQgCgdACgaQAHiDBShSIH71TQHOBKHghgQDpgvC8gFIAAAPIABgPIAsAAIhCEIQgeB5AXCsIgcAcQhRBMASBUIAnCyQAaBZBogiIAuB5IFKQPIE6L2QFbL/AGDSQAnEehHEiQgLgDgJAAgAPvEsQDDA4Bai1QiFBSiYArgArcjxIAGgmQAekDiwiCQBWClA8DgIgGAmgAtoqcQgQgMgTgLQATALAQAMg");
	this.shape_187.setTransform(1704.4,809.6);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#4A4A4A").s().p("AvIdFQgvgIgvgJIBEpEQAakwAFihIAbs+QAChvAJhtIAJheQANhPAPhOQAah6AdhrQAchrAahKQAahNAhhTQAshgAwhGQADhWARgkIAAgBIABgBIABgBIAAgBQAOgbAeAAIAAAAIAAAAQAJAAAKADIgaA2Ig7BgIA7hgIAag2QgKgDgJAAIAAAAIAAAAQgeAAgOAbIAAABIgBABIgBABIAAABQAqiIC4h8QAFAZAAAuQiIBigeA/QAeg/CIhiQAAA0gNA5QFAizDKjyQgQgNgJgIQAjghBEBRQBbBtgbAHQj5EqnKD7IAAgDIAAgBIgCgKIAAgBQgdi+gtgCIgBAAIAAAAIgHABQBKglA1gcQg1AchKAlIAHgBIAAAAIABAAQAtACAdC+IAAABIACAKIAAABIAAADQHKj7D5kqQDyC8DrEGQCzC3AwItQAbEXA6DgQgqAugwAlQjTChk6guIBNE4QghHiAUM2QgjgCgkAAIgtAAIgBAAQi8AFjnAvQkPA2kJAAQjOAAjKgggAAYQRQD2A6BGkGQiQCwisAcgAAYQRIgZgHIAZAHgAnfPHIAWgEIgWAEgAnJPDQDDglBdjKQiLCLiVBkIAAAAgAD1moQBaC+A7GMQAaAEAcAHQgcgHgagEQg7mMhai+QhhizAAimQAAiUBOiJQhOCJAACUQAACmBhCzgApcy1QAohYAvhSQgvBSgoBYIAjiBIgjCBIAAAAgAoF1fIAAAAg");
	this.shape_188.setTransform(1756.2,408.4);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#DEB180").s().p("EARQAm3Igvh5Ig9i0IA9C0QhoAigahZIgmiyQgShUBQhMIAdgcICdiXQgJjygEiiQgUs2AhniIhNk3QE5AuDUihIAKAMIAwE/QAVJojtSyQBGDDA5DXQAKAjgaAiQgXAfg9gRQgJAvgkAOQgkAPgpgMQgHAhgkAUQgoAVgjgWIAAA5QgYAngfAAQgaAAgdgbgA5rWtIAAjtIGylDQGKpGF6nQIB8nxQgJBtgCBvIgbM+QkwE8mlEiIg7BwQg0Boi2BTIg/BVIhBgpQANheBDhRQhDBRgNBeIBBApIAAA/gA4DVFIAqAAIgqAAIAbg9IgbA9gA3ZVFgADq+cQAAgugFgZQgNhNgcg3QhIikDNhxQD7iJApBVQAbB5BPBOQAJAIAQANQjLDylACzQANg5AAg0g");
	this.shape_189.setTransform(1695,448.3);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#000000").ss(2,1,1).p("EADrg3wQEkiKDfjJIgKgnQBHgpBKDaEALkg9qIhAjyQkVA/izD1IAPCyIAAA+Ii3B2QgfAUgGChEAA8g16QgSAhgbBMEADrg44IAABIEAA8g16QAPgbAOgIICShTEAA8g16QAxhBBlDfQGOjREVkMEAL1gt0Qg0DQBpF0QBADCAwEaQAlACAlACIAnEmQgrFNBLNnQAHBZADBSQAAAGAAAGQAAABAAABQAHDxgYC2IhlBPQgOALhIAuQhHAtgEBbQgEBagCAnQgDAmAEATQAHAdARAGQANAGAiABIAAAAIAoAAIAChRAly7lQAnrsDBojQBDiVBWiEEANDgxxQARgNAQgNQFSj/DnErQAAACACACQB4D7AJOwQgWAJgWAHIAAEoQALIZimUZQgEAgAfDrQAIA+AHAvQAVCBg2AUQgQAGgUgDQgTAegsAfQgkAZgigHQgZApgiAPQgiAOg8AFIgSAMIgxAfQg7AXgYg2IgFgSEAWdgxfQh4j/mwlbAly7lQgEAFgRAXQAAAAAAAAQg3BLjBEIQj9FYhIB4QgnBAg0BOQgFAHgEAGQgsA9gyBIIkvEEIgGDrID/BCIA7g/Aly7lQgDAUAAAWQgTD0gLETQgCAegCA3IgDAcQgJBogOBoQAAABABABQAAAAAAAAQADACACADQB6B7EchSQAhgJAjgNA0Jk0IAABTIAAAjIBgAAIAdheIALCIA0Jk0Ig2AfIAAAuIA2AGAy0m9Qg/ApgWBGIAAAaAmxtzQgBAIgBAHQAAABAAAAQgtFShZFeQACAYA7ALQAPABAPABQCSAHEYgjQBogNB+gUQDLgfCdgNQDwgRCmAhQAEAAAHACQAcAEAeAGIBAAQAmxtzQABABABAAAxYi8IBThMIgnh2QgYAcgdAfQgVAUgWATAu7o1QgeBXhTBgAu7o1QASgygLg9AmaxDQkIEpkZDlAxhlDIAqBnIghAgIgpAoAn8iQQhzFYhcEvQgHAYgGAYQhpFfgwDGQgTBKgLA3QglC+gFBDQgCBEgEB4QgFBIiqIBQiYHDhIDAQhIC+gYBZQgdBagaANQgcANgYAcQgQAPAHAlQAAAFACAGQAFAWAKAhQALAegjAWQgKAHgSAGQgsAQAJA9QAFAjAVAwQAHAPAQAUQCUDbG8CKQBLg7gJiSQgEhDBHgsQBHgtgdhuQgdhuE/qlQCDkHApjoQAjiMAYidQANhcAJh8QAHh8DRl1QBJiFCFjLQDylvG1pSQBhhLBBheQgnC5AQEpABaxGQASAAASgBQFxgMDyj1QAJgKAJgKAPgi5QBTAJACgNAPgi5QALgQAKgSAPWipQAFgIAFgIANgLeIAlCAIADiAAPk9QQEIAJEIhZAQUN5QBiF5FMIUQAGAJAFAJQD0F5DnIuQAGAMAGALQBTCgC5CkQCFB2gFD3QBJCpAHEYQABANAAANIgCBxQl+BlsQAlQhTgDhYgGQjHgPgWhVQgTjfEtgNQAGgCAHAAQBVgNAdgIQCtgtByg2QADgBAEgCQABgBABAAACNPBQGNMNDjDUQDiDUEENjQAiBwB8CFQB8CGAXATIAEADQAMAKAOALQABABAAAAIgCAAQAAgBABAAEAYzA2AQAqA1gqAZIgLCrQAHAFAHAFQACABACACEAYzA2AQB6BZFagNEASTA8EQADADAEACEAmRA9iIgBAAQmOAHkuiOQgIgEgJgFQhIgjhBgpEgZoA4BQiAAejAgCQhHgBhQgFQgGgDgHgCQjwhGhSB5QgXCRDhCLQARAKARAKQHaD5LGgoIAbhqEgTQA4NQgEDCDMgd");
	this.shape_190.setTransform(1653.2,616.5);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#2C2C2C").s().p("ApDDJIgFgFIABgBQCrA3DvgHQhxAghXAAQiEAAhKhKgAJJkSQjyD1lwAMQE6hXEoiqg");
	this.shape_191.setTransform(1668.4,508.6);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#ECECEC").s().p("AW9EpQjHgPgWhVQgTjeEtgNIAGAFQBLA5AdEaQhTgDhYgGgA9dA2QjiiKAYiRQBSh5DwBGIANAFQA+CvihCuIgigUgAZ5g9QCtgtBxg2IAIgDIACgBQBBApBIAjQiSBKjjAnQgHhSg1gEgA47imQAUg7gagsQC/ACCBgeQAFAjAVAwQAHAPAQAUQhUAbhtAAQhOAAhcgOg");
	this.shape_192.setTransform(1617.3,1004.8);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#D8D8D8").s().p("AQjgwIAGgHQBVgNAdgIQA2AEAHBSQDignCShKIARAJQEuCNGPgHIAAAAIgCBxQl+BlsQAlQgckahLg5gEgkZAA7QCiiug/ivQBQAFBHABQAbAsgVA7QDcAgCPgtQCUDaG9CKIgcBqQhiAGheAAQpHAAmZjXg");
	this.shape_193.setTransform(1665.1,1006.3);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#4D83AC").s().p("A5rgNQBRCCB3AiQgaAEgXAAQibAAAEiogASYhMQAqgZgqg1QB6BZFagNQhzAuh2AAQh0AAh3gsg");
	this.shape_194.setTransform(1694.3,977.6);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#86B4D6").s().p("A/KcIQgQgUgHgPQgVgwgFgjQgJg9AsgQQASgGAKgHQAjgWgLgeQgKghgFgWQgCgGAAgFQgHglAQgPQAYgcAcgNQAagNAdhaQAYhZBIi+QBIjACYnDQCqoAAFhIIAGi8QAFhDAli+QALg3AThKQAwjGBplfIANgwQBckvBzlZIAeACQCSAHEYgjQBpgNB+gUQDLgfCcgNQDwgRCmAhQAEAAAHACQAcAEAeAGIgVAiIgKAQQgoC6AREpQgPALhHAuQhIAtgDBbIgGCBQgDAmAEATQAHAdARAGQANAGAiABIAAAAIAlCAIAFASQAYA1A7gWIAxgfIAGAJQBiF5FMIUIALASQD0F4DnIuIAMAXQBSCgC6CkQCFB2gFD3QBJCoAHEZIABAaIgBAAQmOAHkuiOIgRgJQhIgjhBgpIgEgDIgOgKIALirQDwBZDkhbQlaANh6hZIgBgBIgbgVIgDgDQgYgUh7iFQh8iFgihwQkEtjjjjUQjijTmMsNQDylvG0pTQBhhLBBheQhBBehhBLQm0JTjyFvQiFDLhKCFQjRF1gHB8QgJB7gNBcQgYCdgjCMQgpDniDEIQk/KlAdBuQAdBuhHAtQhHAsAEBDQAJCShLA7Qm9iLiTjagA2bdDQh3gihRiDQgEDCDMgdg");
	this.shape_195.setTransform(1693.5,806.8);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#4A4A4A").s().p("AvRdwIgegCQg7gLgCgYQBYldAulSIAAgBIAIgJQB6B8EchSQAigKAjgMQgjAMgiAKQjwAHiqg3IgCAAQAOhpAJhnIADgdIAEhVQALkTATj0QAAgWADgTQAnrrDBokQBDiUBXiEQAahMATgiQgTAigaBMQAGihAfgVIC3h1IAABHQEjiJDfjJIgKgnQBHgqBKDaQGwFbB4D/Qh9ihibAAIAAAAIgBAAQiDAAiaB0IgDACIghAaIAhgaIADgCQCah0CDAAIABAAIAAAAQCbAAB9ChQAAACACADQB4D6AJOwQgWAJgWAGQkIBakIgJIhKgEQgwkZhAjCQhGj5AAivQAAhXARhFQgRBFAABXQAACvBGD5QBADCAwEZIBKAEIAnEmQgrFNBLNmQAHBaACBSIg/gQQgegGgcgFQgHgCgEAAQimghjwASQicANjLAeQh+AUhpANQjoAeiMAAIg2gCgAmYO4IAkAAIgkAAgAl0O4QFxgNDwj1IATgTIgTATQknCrk6BXIAAAAgAkgzdQGNjQEVkNQkVENmNDQIgCgCQhMiogugCIgCAAIAAAAQgNAAgLAOQAPgaAOgIICShUIiSBUQgOAIgPAaQALgOANAAIAAAAIACAAQAuACBMCoIACACgAm217IAAAAg");
	this.shape_196.setTransform(1703.1,411.7);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#DEB180").s().p("EANuAnUIgFgSIADiBIABhRIgBBRIgoAAIAAAAQgigBgNgFQgSgHgGgcQgEgTACgnIAGiBQAEhaBIguQBHgtAPgMIBkhOQAZi3gHjxIAAgCIgBgMQgDhSgGhaQhLtmArlNIgnklQEIAJEIhaIAAEpQALIXimUbQgFAgAfDrIAPBtQAWCBg2AUQgQAFgUgDQgUAegrAfQgkAagjgIQgYAqgiAOQgiAPg8AEIgSAMIgyAgQgRAHgOAAQgiAAgRgmgEANpAnCIgliBIAoAAIgDCBgEANEAlBgA3YXMIAHjsIEvkDIBeiFIAIgNQA1hPAng/QBIh4D9lZID3lRIATANQgUDzgLETIgEBVIgCAdQkIEokZDlQALgeAAgjQAAgWgFgYQAFAYAAAWQAAAjgLAeQgfBYhTBgIAnB1IhSBNIAgghIgphmIA0g7Ig0A7IgsAnIAsgnIApBmIggAhIgqAnIgLiHIALCHIg7A/gAzFWlIAcheIgcBeIhgAAIAAgjIAAAjIBgAAgA1cV7IA3AHIAAhTIg3AeIAAAugA0lUVIAAAaIAAgaQAWhGA/gqQg/AqgWBGgAyeXOgA1cV7IAAguIA3geIAABTgAvXQtIAAAAgADP/UIAAg+IgQizQCzj0EVhAIBADzIAKAnQjeDJkkCJg");
	this.shape_197.setTransform(1656,452.9);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#000000").ss(2,1,1).p("EAIWg9EQAAAAAAgBQACgBACgCQAygjAjBVQAPAtgLAzQBLBoCdCKQDACfBDDYQAcBeAHBrIAHPTQgUACgTACQkFAZkMgMIAAFDQg4D3gaSEIAAEuQgJA/i+CHQgsAjgPA7QgHAdAAAiQgBATACAVQACCLBggjIA0C1QA5AmAphIQgnCAAnDYQANBEAUBMQAUBIAyBPQBDBoB4ByQGlF7ENGNQACAFAEAGQBaCMCFB2QFLEiEEFYQgJALgGALEAIWg9EQgBgBAAgBQgphXgCiDQgPjjmaEBQinBiA4B6QAqBPgHB0QAAAEAAAEQgDA8gHBcIEeisQEOiugBgngEgBdg2YIBIgrEgBdg2YQAggKAqDeQIrltBbiFEgC5g0aIARgZIBAhbQAGgIAFgCEAHDgwDQgsDfBMIaQAWCZgEDLQAuAEAtACEAK+gzOQDnhXC5DYEgCyg06IhCAQQAtiLATgKQAIgEAEARQAIAlgSBTQgDAPgEARAq42WQASikANihQBRxOGPnxAq42WImnM2IlFFhIAAEBICiAeIArg5IASAdIBBgiIAAgNIBKg5IglhKQCqhpAFjeIB+iiIg2GWQAYAHAYAIIlxYZQgmCXgGCwQgDB5AMCEQACBNgHBVQgZFLiQHCQh6FQAaD4IAAACQAEAqAJAnAlExNQAUAAAVgCQFBgXEXjBQAPgKAQgMAsCt8Qg4AWAaBCIgSCNAq42WQgbDzgnD2QgEAZgEAYQCYgFCXAwAyEgrIAAhvQAUgJARgLA0FhkIAuBLAz1iuIgQBKAz1iuIgwAcIAABTIAgglAkzScQA/hpBMhkQD+lICmkXAntaLQArgyAFg2QAEgugXgxQBDiYBaiQIEOH6QCTEBIMH6QBmBvC1EnQB9CoDYB4QBvBKAyBgQAYBtA/AhQASAIAWACQBAgIAxgnQAWgSATgYEgNSBBiQgLoDBmkOQD7qggjnTQgIhrAMiPQAJhsATiAQAFgcAFgdQABgLAHgpQh1AthdBvQgVAZgUAdAzfkfIgWBxARj+XIAAEkQgoJYkoSVQBKEigCDPQAEBRhcghQg2BehThEQgtBkhdhJQgBAAgBgBIAAADAEuGvIAqCQAs4jyQI+B5L4hpEgC0g2/QBQhbBZhBEAXiA1/IAAB0IAAA0QBnAcAOgFQGBgVEPlZICHCOQpUJ5lBBhQg3ARgvABQkrAagehgQAEjLDEg4QBNgjARgQQBphbAphMEgVvA30QACANADAMQBFEOFrg2QAKgCALgCEgXaA1kIi3EaEgNSBBiQtEBCmCgnQhvgLhKgUQimg1ALh4QALh1EFgjQALgDALgCQBVgLBTgYQCKgpCDhKQAtAyAyAuQDsDTFMB6QBQAfBYAYg");
	this.shape_198.setTransform(1636.6,614.9);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#2C2C2C").s().p("AEthrQkYDAlAAXg");
	this.shape_199.setTransform(1638.3,493.7);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#ECECEC").s().p("A9GEMQimg1ALh4QALh0EGgjIAMAIQBnBOgwENQhvgLhKgUgAW1CyQAFjKDEg4QCnAPBAEnQg3ARgvABQhBAGg0AAQi9AAgYhMgA4ShgQCJgpCDhKQAuAyAyAuQiHBbitAgQgRg8gngsgAbciDQBohbAqhMQBmAcAPgFQgZBuh7BWQg4g2g7ACg");
	this.shape_200.setTransform(1597.1,1007.1);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#D8D8D8").s().p("EginAHPQAwkNhnhPIAKgNQBVgLBTgYQAnAsARA9QCtghCHhbQDsDTFLB6QBRAfBXAYQoNAqlcAAQjNAAiQgPgARkBTQBMgjASgQQA8gCA3A2QB7hVAZhuQGBgVEOlZICHCOQpUJ4lABhQhAkoingPg");
	this.shape_201.setTransform(1650.9,990.7);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#4D83AC").s().p("A3yNQQC4CaD4A+Qg9AKg0AAQkFAAg6jigAVaLCQASAJAWACQBAgJAxgnQgiBgh3A5gAp1wxIgIA1IgKA5QhYgGhoA1QBdhvB1gug");
	this.shape_202.setTransform(1650.2,889.7);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#86B4D6").s().p("EgUsAh0QlLh6jsjUQgzgugtgyIC3kZIAAgCQgaj5B6lQQCQnCAalLQAGhUgChMQgMiFADh4QAGiwAmiXIFx4aQI+B4L4hpIAAEvQgJBAi9CHQgsAjgPA7QilEXkAFHQhMBkg/BpQhZCQhECZQAXAxgEAtQgFA3grAxQh1AuhdBvQgVAZgUAdQAUgdAVgZQBpg1BXAGQgTCAgJBqQgMCQAJBrQAiHSj6KgQhnEPALICQhYgYhQgegAzsctIAVgDIgVADQj4g+i3iaQBEEPFrg3gA6bZVIgGgYIAGAYgA7/X+QgIgogFgpQAFApAIAogASwZvIAAg0QB3g5AihgQgxAnhAAJQgWgCgSgJQg/ghgXhtQgzhghvhKQjYh4h8ioQi2kmhmhvQoLn5iTkCIkPn6QA/hpBMhkQEAlHClkXQgGAdgBAhQgBATACAVQACCMBfgjIA0C1QA5AlAqhIQgoCBAoDYQANBDATBNQAUBIAyBOQBDBpB4BxQGlF8ENGMIAGALQBaCLCFB2QFLEiEEFZQgIALgHALQkOFYmCAWIgFAAQgXAAhZgYgAVJWiQAWgSAUgYQgUAYgWASgAg15GIAAAAg");
	this.shape_203.setTransform(1667.2,812.4);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#4A4A4A").s().p("AvHcQQgZgIgYgHIA3mWIARiNQgZhCA4gWIACAAIACAAIAcAAIAAAAIAAAAQCIAACHArQiHgriIAAIAAAAIAAAAIgcAAIgCAAIgCAAIAIgxQAmj2AcjzQASikAMihQBRxNGQnxIARgZIgKgHQANg6gBgjQAAgQgCgLQgEgRgIAEQBQhbBZhBQgDA7gHBdIEeisQEOiugBgnIAAgBIADgDQAzgjAjBVQAPAtgLAzQhcCFoqFtIgBgGIgBgGIgBgCIAAgBIgDgPIgCgIIgBgFQgiimgbgDIgBAAIAAAAIgDAAIBIgrIhIArIADAAIAAAAIABAAQAbADAiCmIABAFIACAIIADAPIAAABIABACIABAGIABAGQIqltBciFQBKBoCeCKQC/CfBEDYQAcBeAHBrIAGPSIgnAEQkEAZkMgMQgtgCgvgEIABhEQAAiggSh/QgwlXAAjWQAAh7APhRQgPBRAAB7QAADWAwFXQASB/AACgIgBBEQAuAEAuACIAAFDQg4D3gbSEQliAxk5AAQloAAkyhBgAnUO1IAqgCIgqACgAmqOzQFBgXEXjBIAegWIgeAWIpYDYIAAAAgAPPxKQiEiaibAAQg+AAhCAZIgCAAIACAAQBCgZA+AAQCbAACECaIAAAAgAj32LIhABbIBAhbQAFgIAGgCQgGACgFAIgAlD28IAMANQACALAAAQQABAjgNA6IhCAQQAsiLAUgKgAjs2Vg");
	this.shape_204.setTransform(1651,409.8);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#DEB180").s().p("EAItAm6Ig0i1IgqiQIAqCQQhgAjgCiMQgCgVABgTQAAgiAHgcQAPg7AsgjQC+iHAJhAIAAkvQAayEA4j2IAAlCQEMAMEFgaIACAXIAAEjQgoJYkoSVQBKEigCDQQAEBQhcggQg2BdhThDQgtBjhdhIIgCgBIAAACQgbAvgiAAQgRAAgUgMgEAH5AkFgA0DbHIAAkBIFFlhIGns3QgbD0gnD1IgIAyQg4AWAaBBIgSCOIh+ChQgFDfiqBpIAlBKIhKA4IAAhvQAUgJARgKQgRAKgUAJIAABvIAAAOIhBAiIgSgdIguhLIAQhKIgwAcIAABTIAgglIggAlIAAhTIAwgcIgQBKIAuBLIgrA6gAxUYXIAWhygAw2asgAvjaZgACV+WIAAgIQAHh0gqhOQg4h6CohiQGakCAPDjQACCEApBWIABACQABAnkOCvIkfCrQAHhcADg8g");
	this.shape_205.setTransform(1620.5,441.5);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#000000").ss(2,1,1).p("EgBZg6sQADgkgEgeQgFgfgJggQgKgggKg6QgKg6CxhSQDYhVBBgSQBAgTAGA/QgIBbAYBYQAAAAAAAAQACAGACAHQhIAzhgA2QiSBTjMCBQgtAdg+ArQAtgNAlDqQEkjRCah3QCZh4APgNQAOgNAJgFQCOCvCdChQDpDwhTNGIgiHbQgHgGhIgPIAAApQBbgIgNgKIABgCEAGag+bIAAAAQAcgRAlA8QA1BSgUATEgDTg4JIhXCDIgOAUEgEvg4hQAkBGgjBTEgEvg4hQgOAQAPCJQgEALgHAMQABgBAAAAQAAACgGAJIgJAPQl5I/g5KgQhDMJhnHOQg2DugaCuQgBAGgBAHIACgPQAAABAAABQABATgFAKIAAABQAAAAgBABQgBAHgBAHQgDATgBAVIAHg3IACgNQgBAGgBAGQgDAegDAbQgKBigEA1QgBARAAAMQAdAHAcAGQAdAFAcAEQFfA5HMgmQCLgLB3AXQgFBPgFBUIksGHIAADZIBZAAIgwB8QABAEAAAEQAiF7CNDVQIkHrHiGGIEODNII3FvQgJAjAJAGEgBZg6sQgDAtgMAuEgEvg4hQBjhOBzg9AmDzZQAIAEAJAEQCfBHCKhIQAHgEAGgDAq+vLQAIAGAJAGQDTCREahSQAJgCAIgDAv1n1IAAgEQgBAJgCAJAh6K4IgCAHIluOqQA0A0gGAuQgBAFgCAGQgFAQgOAPQgDAEgEAEIAAADQAAAAAAABQAAACABADIAAAPQAYNqhROMQgFBigwBVQAaAWgRFmAhHHTIALBnIANB+IBuAAIAcgrIGAhaIgho6QASgzARgwIByAAIBIo5QhPD9hrE8AwMBVIgpg7IAoiYIATBtQgKA2gIAwQgGAkgFAhQgGAggEAcQgDALAAANQhkJwg2J7QgQBiAQGGQBQKvisJCQgjBCAqBgQgFAagHAaQgHAcgJAaQghBjg5BXQhpBGiWA6QgzAUhiAQQgRACgPACQj1AWgYCFQgECsEKAUQApABArABQHiAKLRgiIAAgnAvTjvQgJAzgIAtQgMBDgKA7Av+mxIieDhIAAE3ICFAzAwBZSQAXAXAXAUQDyDOD3icAm8bLQAGAIAHAIQDqEoFbFLQFzFBGrEVQETCuDSDJQgICLgwB+QgfBSgwBNQhSCJAJBhQALA/A6ARQCHAdCvjdQGRmtB0o/QAKAAg7gfIiXhMQhRDwi7CqQgWAUgWARQgiAcgmAaQgxAig3AeAD9/TQAAAAABAAQEngZEnAtAC7/GIBCgNIADAfIAnHdQg+CAhWSQAC7/GQADAQBCACANM+WIAAHGQgHDtiuJAEACWgtyIAlOsEgUTA1UICfCoIAZAbEgWJA54QBGAyBFAwQEeC8E4B+QA0AWA3AU");
	this.shape_206.setTransform(1606.9,616.3);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#2C2C2C").s().p("AkxBbQD0AzD4AMQhmAehcAAQikAAiGhdgAAJi2QCaAQCPgRQhFAkhLAAQhKAAhPgjg");
	this.shape_207.setTransform(1568.9,511.2);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#ECECEC").s().p("A5AHPQkLgUAFisQAYiFD0gWQAOADAMAIQBWA3giEbIhUgCgAYSFRQg6gRgLg/QgJhhBRiJQCZhgCZDaQiaDDh7AAQgRAAgPgDgA2EBMQCWg6BohFQBGAyBGAvQh8BMjHA7QgMhNg7gcgAZliHQAvh+AIiLQA3geAygiQADCZhICwQg5gagiAag");
	this.shape_208.setTransform(1581,991.9);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#D8D8D8").s().p("A+DLKQAikbhVg3IAGgPQBigQAzgUQA7AcANBNQDGg7B8hMQEeC8E4B+QA0AWA3AUIAAAnQotAbmeAAQh6AAhugDgAR/EQQAwhMAfhTQAjgaA5AaQBIivgEiZQAlgZAjgdQAWgRAWgUQC7iqBRjwICXBMQA7AfgKAAQh0I/mRGsQiajbiYBhg");
	this.shape_209.setTransform(1621.6,967);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#4D83AC").s().p("AmiOBQAJgbAHgbQAHgaAFgbICfCoQgTADgTAAQhZAAg8hAgAhFvAQD3BfDxgtQhrBDhqAAQiLAAiIh1g");
	this.shape_210.setTransform(1516,878.5);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#86B4D6").s().p("EgOjAhtQk4h+kei8QhGgwhGgyQA6hXAhhjQBIBOBygQIAaAbIgagbIifioQgphgAjhCQCspChRqvQgPmFAPhiQA3p7BkpwQAAgNACgLIAKg9IALhEIAShnIAWh+IAShgIA4AJQFgA5HLgmQCMgLB4AXIgLCjIktGIIAADZIBaAAIgwB8IgDAHIAEABQAhF7CPDVQIiHrHiGFIEPDNII3FvQgJAjAJAGQhRDwi8CqQgVAUgWARQgjAcglAaQgyAig3AeQjRjJkTiuQmskVlxlBQldlLjqknIgNgQIABgKQAAgqgvguIFuuqIluOqQAvAuAAAqIgBAKIgDALQgFAQgNAPIgHAIIAAACIAAABIAAAGIABAPQAYNphSOMQgEBigwBVQAaAWgSFmQg2gUg0gWgArlj3QjxAsj4heQDxDOD4icgAzOkpQgXgUgXgXQAXAXAXAUg");
	this.shape_211.setTransform(1632.1,812.2);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#4A4A4A").s().p("AH6ebQBrk8BPj9IhII5gAt9cfIg5gJIg5gNIABgdQADg2ALhiIAGg4QAFgLgBgTQAaiuA2juQBnnOBDsHQA5qgF5o/IAJgPIAGgLIAOgVIgEgCIACgFQAghQgjhEQBjhNBzg9QgDAsgMAuQgtAdg+AsIhXCCIBXiCQA+gsAtgdQDMiACShTQBgg3BIgzIgEgNQAcgRAlA9QA1BRgUAUQgJAEgOANQgPAOiaB3QiZB3kkDRIgBgDIgEgZQghjAgngBIAAAAIAAAAIgFABIAFgBIAAAAIAAAAQAnABAhDAIAEAZIABADQEkjRCZh3QCah3APgOQAOgNAJgEQCOCuCdCiQDpDwhTNFIgjHaQgGgGhIgOQBIAOAGAGIAAADQAMAKhaAIIAAgpQkngtknAYIgBAAIhCANQACAQBCADIAoHcQg+CAhWSQQh3gXiLAMQi4APimAAQj6AAjTgigAijSEIARgFIgRAFQj5gMj1gzQDUCREahSgAqRRFIgQgMIAQAMgAgsMyIANgHIgNAHQiPARibgQQCgBHCKhIgAlWMzIgQgIIAQAIgADYA+IglurgADYA+IBCgNIACAgQhCgDgCgQgADYA+IAAAAgAkR2DQgPiJAOgQQAjBEggBQIgCAFg");
	this.shape_212.setTransform(1604,411);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#DEB180").s().p("EAB4AmcIgNh+IgLhnIALBnIgNABIhaAAIAAjYIEtmIIALikQBWyQA+iAIgonbIgCggQEogYEmAtIAAApIAAHEQgGDuivJAQhOD9hrE8IgjBiIAhI8ImABZIgdAsgAvzdLIAAk5ICdjgIABABQgKBhgDA2IgBAdIA5ANIgSBgIgWB+IgThtIgoCYIApA7IgLBFgABP/IQADgkgFgfQgEgfgKggQgJgggKg6QgKg6CyhRQDYhVBAgTQBAgSAHA/QgJBbAZBXIAAABIADAMQhIAzhfA3QiTBTjNCAQAMgtAEgtg");
	this.shape_213.setTransform(1590.1,440);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#000000").ss(2,1,1).p("EAH2g+hQgBgHAAgHQAhgUATAqIAeBLQAIAcgJASAGDg5QCFAQChgUQAVgTAXmGQAWmFCGqjQCbqjAloSQAQnXjEkGIk3mQANu/XQAggEAhgFQASi5ALi0QAEhSAEhQQALkCgSjJQgUjKidh4EAASg4rQgSijgyhjIhBiDQAGhnCVhGIDqh1QBFglAVA6QA3CeBTCCEgDKg2ZQACgCACgBQA3gsBeDgQGFjuDylKEAASg4rQh6BShPAgQgLAJgFAOQgBACAAABQgCADAAADQgPA0ArBmQgLAMgLALQlZFrhGOfIhnLpQg6FZi9KDQgJAlAVAHQAUAHBLAbIACAAQABAAAAAAQAUAHATAEQD7BBHFASIg+CPQgMAnjRBmQgyAbgYA4QgMAcgGAhQgDATgCAUQgVCKBkgTEgDKg2ZQg7gXBBDIEAASg4rQC9h/Enj3EAFMgylQhPDEgIH0QgJHqgJAdQAWATA/AGIgcJHQhnEAgTBQQgWBNgwCuQgyCqgjCkQgiCjhRDdAtWjLQgCAEACAHQAAgHACgEAtWjAQgcDDghCQQgjCbgjCSQhDERgdEQQgIBggHBgQgCBNgJATQgIAUAIBBQAHBEBBBEQBCBDBKA9ADXhRQBPATBdAFADXhRIhxC4QAZEqgkDMQgJBQhUgvQhFBUhHhQQg9BbhRhWQg1BAgxguIgXi8AmqFJIARCUAtWjAQgcMfANElQAECfAHB+QAABCACA4QACA+AAAyQACBIggBOQgNAfACAeQAABaAcBGQAOAiAJAVIARAaIC9EeIAcAqAhNVfQAPhXAchVQAfheBDjLQBqlJDZp6EgBUAlAQAAgYAAgWQgEklgCijQgFimgCgRQgJiZAdibQEUDwEKDwQCSCFCMCMQAjAkAiAkQDbBIB1A0QB2A0A/AuQA9AuADAlQABAbAIATQARAaAUABQA6gWAbAzQAHASgBAbANu/XQgBAEAAAFQg+HphHEoQgaBRhRD2QhRD1lVIwAE4/NQDcAZE4gfQARgCARgCEAPKAxsQgeBkgtBUQgOAZgPAXQgOARgNAQQh3CXBABUQBsBlDKidQBchIBIhGQFRlbBVl5Qg/hPhPgbEAPKAxsIgih3Qg3gnjXiDQjYiFoWmGEAPKAxsQAwAFAsgCQEZgMCBkbQBAicAChQEgByBBUIACAAQABgtAChKQAFigAHkiQABgRABgRQAdpCgHi9QgGi1gFkFAtMc1QAJAUAFAHQALAlAJAuQACAVACAZQAAAEAAAFQACAXACAxQADB2ACEOQACGAgLDAQgNDAgSBWQgkCgA2BwQACAPADAPIgaAlQgaAbgxAnQAFAMAGAMQAUAqAgAnQAcAjAmAgQANAMAPAMQAhAaApAYQBMAvBhAnQCdBBDVAwQADAAAYAGEgOIA6pQilBui5BKQg7AYg8ATQj8gQgwCKQg2C9GJASQAbABAcAAQJJAeI/geIAFiC");
	this.shape_214.setTransform(1562.6,605.6);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#ECECEC").s().p("A1kFmQAwiLD8ARQBABFgZEDQmJgSA2i8gAvBDBQC5hLClhuQAUAqAgAoQinB/jEA/QAPhGg2gRgAQ1g/QhAhVB3iXQC9gfBCDSQh7BghYAAQg5AAgqgngASkl8QAthTAehkQAwAFAsgCIhYDBQgYgfg3ASg");
	this.shape_215.setTransform(1533.3,980);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#D8D8D8").s().p("A2YM2Ig3gCQAZkDhAhFQA8gUA6gXQA2ARgOBGQDEg/Cnh/QAcAiAlAgIAcAYQAiAaApAZQBLAuBiAoQCcBADWAwIAbAHIgFCCQkgAPkiAAQkiAAkkgPgAKugrIAbggQAPgYANgZQA3gSAZAfIBYjBQEZgMCBkbQBAidAChQQBOAbBABQQhWF5lQFbQhIBFhcBHQhCjRi9Afg");
	this.shape_216.setTransform(1577.9,954.4);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#4D83AC").s().p("AhEBEQgBgxgCgWIgBgJIgEguQgIgugLglIADgBIC8EdQh6h3gqAsg");
	this.shape_217.setTransform(1489.1,807);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#86B4D6").s().p("EgFHAiQIgbgGQjVgxidhAQhhgohMguQgpgYghgbIgcgXQgmghgcgiQgggngUgrIgLgXQAxgoAZgaIAbglIgFgeQg3hxAlifQAShWANjAQALjAgCmAQgCkOgDh2QApgtB7B4IAcAqIgcgqIi9kdIgRgaIgXg3QgchGAAhaIgBgIQABgbALgaQAehKAAhEIAAgIQAAgygCg+QgCg4AAhCQgHh+gEifQgEhcAAiPQAAk2ATokIADgLQAUAGATAFQD7BBHFASIg+CQQgMAnjRBmQgyAbgYA4QgMAcgGAhQgDATgCAUQgVCKBkgTIAXC8QAxAuA1hAQBRBWA9hbQBHBQBFhUQBVAvAJhQQAkjMgZkqIBwi5QBPATBdAFQjYJ7hqFJIhjEpQgcBVgPBXQEVDwEJDwQCSCECLCMIBGBIQDbBIB1A0QB2A0A/AuQA9AuADAlQABAaAIAUQARAaATABQA7gXAbA0QAHASgBAbQgCBPhACdQiBEbkZAMQgsACgwgFIgih3Qg3gnjXiDQjYiFoWmGIAAguIgGnHQgFimgCgRQgCglAAgmQAAh0AWh1QgWB1AAB0QAAAmACAlQACARAFCmIAGHHIAAAuQAFEFAGC1QAHC9gdJCIgCAiIgMHCIgDB3gAzgnlQhBhEgHhEQgIhBAIgUQAJgTAChNQAHhgAIhgQAdkQBDkRQAjiSAjibQAhiQAcjEQgTIkAAE2QAACPAEBcQAECfAHB+QAABCACA4QACA+AAAyIAAAIQAABEgeBKQgLAagBAbIABAIQhKg9hChDgEgQrgiEIAAAAg");
	this.shape_218.setTransform(1583.9,804.4);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#4A4A4A").s().p("AFNe7QhegFhPgTQFWowBRj1IBrlHQBGkoA+npIABgJIBBgJQASi5ALizIAIiiQAEhjAAhaQAAiSgKh8QgUjKidh4QCdB4AUDKQAKB8AACSQAABagEBjIgICiQgLCzgSC5IhBAJIghAEQk4AfjcgZIgGgBQg6gGgWgSQAJgcAJnqQAJn0BOjEQhODEgJH0QgJHqgJAcQAWASA6AGIAGABIgdJHQhmEAgUBQIhGD7QgxCqgjCkQgjCjhQDdQnGgSj7hBQgTgFgTgGIgBAAIgCAAIhggiQgVgIAJgkQC9qEA7lYIBmrpQBGufFZlqQhBjIA7AXQgEANAAAQQAAAwAhBNIgXAXIAXgXQghhNAAgwQAAgQAEgNIAEgEIgCgCIABgDQAGgOALgJQBOggB8hTQC8h+Emj3IgBgOQAhgVATArIAeBLQAIAbgIATIE2GQQDEEFgPHYQgmIRibKjQiFKigXGGQgXGFgVAUQhaALhRAAQhAAAg6gHgAhnzzQGEjuDzlKQjzFKmEDuIgCgEIgBgCIAAgBIgCgFQhLiugygCIgBAAIAAAAQgJAAgJAGIAAAAIAAAAIAAABIAAAAIgBAAIABAAIAAAAIAAgBIAAAAIAAAAQAJgGAJAAIAAAAIABAAQAyACBLCuIACAFIAAABIABACIACAEIAAAAg");
	this.shape_219.setTransform(1568,401.9);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#DEB180").s().p("EgHcAmhQg1BAgxguIgXi7IgRiVIARCVQhkATAViKQACgVADgSQAHgiALgcQAYg3AygbQDRhmAMgnIA+iRQBRjcAjikQAjijAyiqIBGj7QAThRBmj/IAcpHQDcAZE4geIAhAEQg+HphHEoIhrFHQhRD0lVIwIhwC5QAZEqgkDNQgJBQhVgvQhFBThHhQQgfAvglAAQgiAAgogqgEgJZAj4gEgDyggXIhBiDQAGhnCWhGIDph1QBGglAUA7QA3CdBTCDQknD2i8B/QgTijgyhjg");
	this.shape_220.setTransform(1581.8,423.7);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("#000000").ss(2,1,1).p("ANvjhQAPgOAChTQAIh2A3mEQA2mHAUiNQB8uhAqmNQACgOACgNQAFg7AEgtQAJhlAAgnQgEiDgHhLQgBgBAAgBQgEgvgGgYQgPg6gTg1QgghWgrhKQgagngbgjQg4hIgsg2Qhgh2gngnIhIhAQAhghhChaQgZgmgZAfQhZhpgJiQQgwhVjCCFQjCCDgDA7QgCA4AhA1QAcAygCBZQAAAUgCAUQgBAKgBAJQAAABAAACQgDAUgGA2QDQhrEdkKEALLg2hQhnA+hLBQQiBCLgtC+QhFEthcImQAjALAnAPQBGAaBtAnQBvAlEKA7QAMADANAEQANAEA9AHQAYhVAThTQB6n8A3oIEgAxg01QgvhKA8ijQAKgbC9hyEgAog3MQAHgyAmgWQBFgoBQgpEgAxg01QAAhdAJg6QBNiAALEfQIFlXCljUEgAxg01IhQCiQhHCbhRDPQgdBIgYBaQgtChghDYQglDshPIuQgjD0g6ENQgzDahDDrQgQA5gRA5QgCAJALAIQATAJAUAHQiJGRh4GXQiQHtAaDEQAaDCFfGyQFbGqACgOIgCYnQhegBAUBZANA+8Qh6G3gCA9QgEA9hVC3QhYC1hSCUQivE4jdEtIgaAjIhGBgQA5C7jkEHQgJAJgJAKEAEUghdQgaCbgfCbQgRBSgLA+QjqIaheFbQhWE2hPC+QgJAWgJAUImvGSQgfAhAfA5IBdDOQAXA0BSgNQAKAXA2gFQAIAAAsgVIAIAVQAYAnBcg7AAbkDIDJgeQELgkDbAzIClAxALKkSQgEAOgEAOQCXAqAWgVAjWEfIAAAaIAAAXAmJEBIBIDMQAEAIAEAGAjWE5QBVhFACBEQACBEhLBTQhAA8gmgkQgGgFgFgHAoZDpIBkDxAnpHvQgYM1AmGKQAICBBcCHIACACIAACWAqXDrIBuDyArUmbQDABGDmAnALCj2QjGKFh+JCQhCG3AjKnQAVGkgCJrQgCBIAABKQAACiAACuQAAAyAAA0QAAAZAAAaQAAAIAAAIIAAD4IAMDMQgKABgKAAIgCBnIyZAAIgWAAQmagcAiioQAoijD8AHQBEgQBCgWQBFgXBCgdQBrgvBkg/QAaApAcAlQANAQANAQQEfFfG6gMEAOsAsUQAHgHAIgHQl4nIjkkPEgDRA4kQAJAXAKAWQCLE4EIgWQARgCASgDEAFyAw+QB7BlG/mPEAFwA6GIL7qOQg1hUiKiQ");
	this.shape_221.setTransform(1513.8,605.5);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#ECECEC").s().p("AghEUQmZgcAhioQAoiiD8AHQB6A9gQEigAARhxQBEgXBCgdQBsgvBjg/QAbApAcAlIgyAgQiTBbicAnQgChHgpgHg");
	this.shape_222.setTransform(1433,1012);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#D8D8D8").s().p("AuZLxQAQkjh7g9QBFgRBCgVQAqAHACBHQCbgnCThbIAyghIAaAhQEeFeG6gLIgBBngAEKAcIAAlPQAAhKABhIQB8BlG/mQQCKCRA1BTIr7KNIAAhlg");
	this.shape_223.setTransform(1524.1,964.3);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#4D83AC").s().p("AjJiRQCvC6DkBnIgjACQjvAAiBkjg");
	this.shape_224.setTransform(1514.9,986.5);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#86B4D6").s().p("AkmfCIgaggQgcglgbgpQgThZBdABIAD4nIAAiWIgCgCQhciGgJiBQgXjxAAmRQAAj+AJk/QgJE/AAD+QAAGRAXDxQAJCBBcCGIACACIAACWQgCAOlbmpQlfmygbjCQgajECQntQB4mYCKmRQDABGDmAmIgTArImuGTQgfAhAfA5IBcDOQAYA0BSgNQAKAXA1gFQAIAAAsgVIAJAVQAYAnBcg7QAFAHAFAFQAmAkBAg8QBMhTgChEQgDhFhVBGIAAgbQDlkGg6i8IBHhgIDIgeQEMgkDbAzIgJAcQjFKGh/JCQhBG2AiKnQDlEPF3HIIgOANQnAGQh7hlIABiAQAAoYgUl3QAUF3AAIYIgBCAQgCBIAABKIAAFQIAABmIAAAzIAAAQIAAD4IAMDMIgUABIgcAAQmnAAkVlTgAEgf5IAigEIgiAEQjlhnivi6QCKE4EKgXgAh0bYIgSgtIASAtg");
	this.shape_225.setTransform(1506.4,796.8);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#4A4A4A").s().p("AHidrIAIgcIClAxQgHAHgXAAQgrAAhkgcgAHqdPQjbgzkLAkIjIAeIAagjQDcktCvk4QBSiUBYi1QBVi3AEg9QACg9B6m3IAZAHQANADA9AIQAYhVAThTQB6n7A3oIQg3IIh6H7QgTBTgYBVQg9gIgNgDIgZgHQkKg7hvglQhtgnhGgaQgngOgigLQBbomBFktQAti/CBiKQBLhQBng+QhnA+hLBQQiBCKgtC/QhFEthbImQAiALAnAOQgaCbgeCbQgRBSgLA+QjrIaheFbQhWE2hPC9QjlgmjBhGQgUgHgTgJQgLgIACgJQARg5AQg5QBDjrAzjaQA6kNAjj0QBPouAljrQAhjYAtihQAYhaAdhIQBRjPBHibIBQiiIAAgDQAAhbAJg5IABgBQAYgnARAAQAoAAAHDHQIFlYCkjTQikDToFFYQgHjHgoAAQgRAAgYAnIgBABQgJA5AABbIAAADQguhKA7ijQAKgbC+hzIgJBLQDPhrEdkKQAZgfAZAmQBCBZghAiIBIBAQAnAnBgB2IBkB+QAbAjAaAnQArBJAgBXQATA1APA6QAGAYAEAvIABACQAHBLAECDQAAAngJBlIgJBoIgEAbQgqGNh8OgIhKIUQg3GEgIB2QgCBTgPAOgAja2yQgmAVgIAzQAIgzAmgVQBFgoBQgpQhQAphFAog");
	this.shape_226.setTransform(1536.2,390.9);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#DEB180").s().p("EgHNAlqIgJgUIhkjxIBkDxQgsAUgIAAQg1AGgKgYIhvjyIBvDyQhSAOgYg0IhcjPQgfg4AfgiIGumSIATgrQBOi9BWk2QBelbDrobQALg9ARhTQAfiaAaibQBFAbBuAnQBvAlEKA7Qh6G1gCA9QgFA9hVC4QhXC1hTCUQiuE4jeEtIgYAjIhHBgQA6C7jmEHIgRAUIARgUIAAAbIAAAWIAAgWQBVhGADBEQACBFhMBSQhAA8gmgjQgFgFgFgHIgIgOIhIjNIBIDNIAIAOQg4AjgeAAQgVAAgJgQgEgFZAlXIAAAAgEgHWAlWgACC80IAAgCIADgTQACgVAAgTQAChagdgyQggg0ACg5QACg7DCiDQDCiFAwBVQAJCQBaBqQkeEJjQBrIAJhKg");
	this.shape_227.setTransform(1517.1,413.9);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#000000").ss(2,1,1).p("EAJbhAyQgkgsgXg1Qgcg/gTgWQg4gtjpCMQilBlAWBJQApBxgGC6IiDBlQghAiAQDGQgtBTg3BZQhIB2g7CHQgiBRguC3QgwC3g1JCQgCAUgCATQghFbhXIdQg5EbhqErQiuBjjIAlQgiAYAEA1IAADiQANA+A0gGIAAAmQAXA1BbgmIAHA/QAHASAKAFQAbAMAyg+IANBNQAaAYA2gYIB2hqQAmhagmAXQCOhqBJi7QATgwAOg2QNAuVCXkdIC3nRQAqAMAsAMICqqnQANhFANg+QBBl3hDh6EAJbhAyIATgPQAigdA4BdQAzBTgXAVQDKDZB8CsQB9CqAgDPQAdDNgqEVQgpETguERQgwEOgWCdQgYCdgNFDQgNFBgLFJQgLFHgRAfQhTgaifghEgAag4hQAJgVBUC9QCeiDCwiGQCwiHCjiQEADagh8QD4AxA2APQA3APA5ARIB6AiEALhg29Qj5AfhrGeIjWNxIAzATIiXGLIrdTrQgoAbgpAXEABkg6wIH3mCAF7xVQALATALARQCBDFD1gaQASgBATgEAm9kRQEsAREAhOQD/hRErA9QAeAGAbAHQgCAagDAYQECATgLgKAtnhAIAAC0AnJigQApCrAuFFQAiDyAmDVQAJAvAIAuQAFAaAEAcIAAADQACAKAFAOQAtEDAYDwQAAAHADAIQAGBaAAA/QAAAygJAhQgEAPgCAOQgTBoA0A9QAKANAQALIG9DkAr7BSQA3gaAwgkAnwRuQAcAmgcAgIEmIcAtDPXQByCWDhABAuOSmQDWB4DIhqAu0CmQkeNWAABuQAABtDwHrQDwHrBnC5QBmC4BnD6QAiBYAqBzQAEANANAeQA4Cdg2AvQAPgFAUgFAkqMXIjGFXALNkjQglGrgnDIQgRBYgJB8IAeToQA5SvgTTNQgLAAgLAAAvjiJIAXDZAw+kOIAAEpAiPeNQADAeACAdQAEAkADAjQBMNAgjFLQgdCHAoCAQAgBoBMBjQiah0gZDMQACACACADQABAAAAAAIAAAAQAhAkAgAhQFxF5F0ABIgCBsIyZAAIgWAAQmZgcAhioQAoijD8AHQBFgQBCgWQBFgXBBgdQBsgvBjg/IgBAAIpJAoIiuAMQjjABAIhlQALiUE0ggIBVgkIFHiKQAbAeAiAWQBiA+CegLEgGMA06Qgrg/BYgh");
	this.shape_228.setTransform(1483.7,605.6);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#2C2C2C").s().p("Ai6hWQCrBtDKA9QgcADgaAAQjNAAhyitg");
	this.shape_229.setTransform(1542.5,506.9);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#ECECEC").s().p("ABAHdQmYgcAhioQAoijD8AHQB6A9gREjgABzBXQBEgXBCgdQBsguBjg/IADgDIAAAAQAgAkAhAiIgNAKIgyAgQiTBbicAnQgChHgpgHgAoKh6QALiUE0ggQBMAlgCDnIiuAMIgDAAQjhAAAJhkgAh2lSIFGiKQAbAfAiAVIlaCQQADgxgsgJg");
	this.shape_230.setTransform(1423.2,991.9);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#D8D8D8").s().p("Am8HDQARkjh7g9QBFgQBCgWQApAHACBHQCcgnCThbIAygfIANgLQFwF3F1ABIgCBsgArelIIBVgkQAsAJgDAxIFbiQQBiA+CdgLQAgBoBNBjQiah0gZDMIAAAIIpJAoQADjnhMglg");
	this.shape_231.setTransform(1476.3,994.5);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#4D83AC").s().p("ACtHsIgHhIIgFg7IG9DkQjYhgjZgBgApdl8QFlAYA5hRQAcAmgcAgQheAyhhAAQhuAAhxg/gAoTpMQByCWDiABQhJATg5AAQisAAgmiqg");
	this.shape_232.setTransform(1453.2,762.8);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#86B4D6").s().p("EAOWAkDQl1gBlxl5QghghgggkIgBAAIAAgBIgEgFQAZjLCbBzQhOhigghpQgWhJAAhNQAAg3AMg6QALhnAAiYQAAlQg1o7QA1I7AAFQQAACYgLBnQgMA6AAA3QAABNAWBJQidALhhg+QgigVgbgfQgrg/BXggQA2gvg4ieIgRgqQgph0gjhXQhmj7hni3Qhni6jvnpQjwnrAAhtQAAhvEetWQAaANAyg/IAOBNQAZAZA3gZIB1hpQAnhbgnAXQCPhrBIi7QErASEBhPQEAhREqA9IA5AOIgEAyQgmGsgnDIQgRBXgJB8IAfTpQA4SugSTMIgTABIgDAAgAhfVVQAQgGAUgFQgUAFgQAGgABWgQQALAOAPAJIAGA8IAGBHQDZACDZBfIm+jkQgPgJgLgOQgmgsAAhEQAAgZAFgcQgFAcAAAZQAABEAmAsgAA1i1IAHgdQAJggAAgzQAAg/gHhZQgCgJAAgGQgYjwgtkEQgEgNgCgLIAAgCIgJg3IgRhcIjGFWQjigBhyiWQAzDkEhhNQg5BSlmgZQDXB4DIhrgAhy40QAiDxAnDWQgnjWgijxQgtlFgqisQAqCsAtFFgACwYbIAAAAg");
	this.shape_233.setTransform(1458,798.2);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#4A4A4A").s().p("AqxeaQATgwAOg2QNAuVCXkdIC4nRIh7giQg5gRg2gPQg3gPj2gxIg0gTIDWtwQBrmeD4gfQj4AfhrGeIjWNwIA0ATIiXGLIrfTrQgnAbgpAXQBpkrA6kbQBXodAhlbIAEgnQA0pBAwi3QAui3AjhRQA7iHBIh2QA2hZAuhTQgRjGAigiICDhlIH2mCIAUgPQAhgdA4BdQA0BTgYAVQDKDZB9CsQB8CqAhDPQAcDNgpEVQgqETguEQQgvEOgWCdQgYCdgNFDQgNFBgLFJQgLFHgSAfQhTgaifghQCfAhBTAaQALAKkBgTIAEgyIg5gNQkqg9j/BRQjSBAjvAAQg1AAg3gDgAIUUlIAlgFIglAFQjLg9irhuQCADED2gZgACeR6QgMgRgKgTQAKATAMARgAJVDJICpqmQANhFANg+QAgi4AAh7QAAiAgig+QAiA+AACAQAAB7ggC4QgNA+gNBFIipKmIhWgYIBWAYIAAAAgAivzNQCdiDCviGQCwiHCjiQQijCQiwCHQivCGidCDIgCgCIgEgLIgBgCIgBgBIgBgCIgCgFIgBgDIgDgHQhAiJgNAAIAAAAQAAAAgBAAQAAAAAAAAQgBABAAAAQAAAAAAABIAAAAIAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIAAAAQANAABACJIADAHIABADIACAFIABACIABABIABACIAEALIACACIAAAAgAgYAvg");
	this.shape_234.setTransform(1508,383.6);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#DEB180").s().p("EgKTAjUIgNhNIAAi1IAAC1QgyA/gbgNQgKgFgHgSIgHg+IgXjaIAXDaQhbAmgXg2IAAglQg0AGgNhAIAAjhQgEg1AigZQDIgkCuhkQApgXAogbILdzqICXmLQD4AyA2AOQA3APA5ARIB6AhIi3HSQiXEdtAOVQgOA1gTAwQhJC7iOBrQAmgXgmBbIh2BpQgbANgUAAQgUAAgNgNgEgI0AhmQA1gaAtghIAFgEIgFAEQgtAhg1AagEgN3AgvIAAkqgEgMFAhkgAEI/HQgWhJClhmQDpiMA4AtQATAWAcA/QAXA2AkAsIn3GBQAGi6gphwg");
	this.shape_235.setTransform(1463.8,398.9);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#000000").ss(2,1,1).p("EAJQg69QgDgNgDgMQgYhqgbhKQg0h3DSi2QBnhbBKABQA8gIAUBSQATBCAqA+IAVAkQAUgagFgJEAJQg69QEfjIBjhiQAlglARgXEAPzhBHQAcgIAHAHQABABAAABQAIgTBYCGQARAYgPAkEAGYg2IQAAAKAAAKQAAA1hVCKQlNKiiAXKEAJAg7TQiUBhgQAZQg1BNAPCgIAigcEAHAg5aQgoAfAACzEAHAg5aQAkBKAGCJQFijkC5ikQBdhTAXg1AXAldQA0yGBAp9QAOiPALh3QBPriiglKQgkhDg/hjQhhiZi/jGEAPvg2RQiWBYhrGeQg7DhiWHjQAJANAgAQIh2EVQilC3kEGPIixEWEARIggPIA+ASQB6kfBGjcQBGjfA2jrQAnjJgjhBEASOg3MQC4AeBMByEAHAg5aQBNg0BDgvAj4m7QAYghAJgnQAAgCAIgYQB2hnBqhdQDLieCziqQAjgjAjgiIApgqQAugwAsgwQAJgLAKgLQA1g7Ayg9QAJgMAKgMQABgCABgBIC1jqICsmEAIps/QAbAGAaAEQGaBFEnjCAhMloQBbAcBtAHQDhAPCfgcQCdgfDjgUQDVgUCEAUQAAACAAABQACAeABAYQDqAOgCgfATVmFQAJABAIACQAeAEAdAEQBgAQA/ANAvtldQhJgbAegyIC8jZQAqgqAygGIF1gEIEBmSAvtldQgCAdAbARIBBAfIASAkIA7AiQA6A8A6gKQBhgbADgQQAEgOgOgYIgSgTQCogvCohdIAHgDQACgBACgBQAUgNASgNQAIgLAJgJQBMA0BgAfQA3DACKHvIB8G1IDBKvQAsCKAQDOQACAyBPA4QANAoAGAhQAKAxAIA5QA7GUAPNjQgGBsAmBmQAZBDgzBLQhFgDgNB3QAlAfAkAdQGAExFfAXIAAAAIAACkIyaAAIgWAAQmYgdAhinQAoijD7AHQBFgRBCgWQBEgXBCgcQBsgvBjg/ArcoJQhvBjhaByIASAkAqWmvIifCTQgfAmAOAsAs0pVQhiB5hXB/ArOjpIBEgTAkJmnQgIAWgIAYQhnE3h5GJQjgKSAYHOQAPMBhRO1QhTAfA3BeQALAUARAXQAHAJAIAKQDED3F/BqADxL8Qj8FegSCpQgVChAnGhQApLUiKRiQAFAKhKgMALlb4QATAHATAGQDhBHCEiQATYlMQASF1gVMyQgDIDB8HlQB6HsAKXYQAAAEAAAEQABAJAAAIQAHD8hQBTIAAAAEAJGgi6QDiBoEgBDAI/dtID7DYIAjAeEAORA5HQAeAeAdAaQEMDxD7hQEgMfAzaImJBRIhbAPQkzgoguCOQgeBgF3CCQIZCmJBgzIAAh8");
	this.shape_236.setTransform(1407.8,602.5);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#2C2C2C").s().p("AlfA1QFsgbFThgQjZCNkXAAQhkAAhrgSg");
	this.shape_237.setTransform(1503.6,515);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#ECECEC").s().p("AK4IcQmZgcAhioQAoijD8AHQB7A+gREigALrCWQBEgXBCgdQBsgvBjg+QAlAfAkAdQgrAigZAPQiTBbicAnQgChHgpgHgAyGlWQAuiOEzAoQBBA2hJETQl3iDAehggArKnLIGJhQQALAUARAWIAPATQjIA0jRAhQAOgvgpgTg");
	this.shape_238.setTransform(1360,985.6);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#D8D8D8").s().p("ACxH9QARkih7g9QBFgRBCgWQApAIACBGQCcgmCThcQAZgPAsgiQF/ExFfAXIAAAAIAACjgA1KiSQBJkThBg1IBbgQQApATgOAvQDRghDIgzQDED3F/BpIAAB9QiJAMiGAAQmyAAmZh/g");
	this.shape_239.setTransform(1414.1,988.7);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#4D83AC").s().p("Ag7OHQEfCCDmAGIAAAIIAAARQg+AUhAAAQi/AAjIi1gAmkrXQgIg5gKgxQgGghgNgoID7DYQiuhWgoAxgAj8vyQC2AACthJQhZBhiBAAQhAAAhJgYg");
	this.shape_240.setTransform(1511.1,883.3);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#86B4D6").s().p("EAQ7AkWQlfgXl/kxQglgdglggQANh2BFACQAzhKgZhEQgmhlAGhtQgOtig8mUQAogxCuBVIAjAeIgjgeIj7jYQhPg2gCgzQgQjNgsiLIjAquIh7m2IjDqwIDDKwIB7G2Qj9FegSCoQgVCiAnGgQAqLUiLRiQAGAKhLgNQl/hpjEj4IgPgTQgRgWgLgUQg2hfBSgfQBSu0gQsBQgYnNDgqTQB5mKBok3IAPguIARgUQBMA1BgAeQBcAdBtAGQDgAQCfgdQCdgeDjgUQDVgUCEAUIABADIACA2QASF2gVMxQgCIEB7HkQB7HsAJXXQjlgGkgiBQgegagegfQAeAfAeAaQEMDxD6hQQAHD8hPBTgAG8hTQDhBHCEiRQiuBJi3ABgAG8hTIgmgOIAmAOg");
	this.shape_241.setTransform(1441.3,790.7);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#4A4A4A").s().p("Ao6eAQhtgGhcgdQhggehMg1QAYggAJgoIAIgaIDhjEQDLidCziqIBGhGIApgpQAugwAsgxIATgVQA1g7Axg9IATgZIADgDIC0jpICsmFQkghDjhhoQgfgPgKgMQCWnkA6jhQBrmeCWhXQiWBXhrGeQg6DhiWHkQAKAMAfAPIh2EVQilC3kEGQIiyEVQCA3IFOqiQBViLAAg0IAAgUQAAizAoggQgoAgAACzIgiAbQgOifA0hOQAQgYCUhiIAKgCIAGAZQEejIBjhiQAlglASgXIgWgkQAcgIAHAGIACACQAIgSBYCGQAQAXgPAkQgXA2hdBSQi5CklhDlQgGiJgkhLICQhiIiQBiQAkBLAGCJQFhjlC5ikQBdhSAXg2QC/DHBhCZQA/BjAkBCQCgFKhPLiIgZEFQhAJ9g0SGQg/gNhggPIg7gJIgRgDIARADIA7AJQBgAPA/ANQACAfjqgNIgCg2IgBgEQiEgUjVAVQjiAUidAeQhnATiDAAQhHAAhPgGgAhYWQQGZBFEnjBQlTBhltAbgAhYWQIg1gJIA1AJgAHPDJQB6keBGjdQBGjeA2jsQAVhqAAhEQAAg9gRgfQARAfAAA9QAABEgVBqQg2DshGDeQhGDdh6EeIg+gTIA+ATgALbx1QhMhzi4gdQC4AdBMBzgAFS9cQAQgVgBgKIAAgFIAAAFQABAKgQAVgAhwALIAAAAgAj22UIAAAAg");
	this.shape_242.setTransform(1477.3,377.9);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#DEB180").s().p("EgNZAgKQgEgNAAgNQgBgdAWgbICfiTIifCTQgWAbABAdQAAANAEANIg7giIgSgkIgSgkQBahxBvhkQhvBkhaBxIASAkIhBgfIgZguQBXh+Bih6QhiB6hXB+QhJgbAegyIC8jZQAqgpAygHIF1gEIEBmSICxkWQEEmPCli3IB2kVQDiBoEgBDIisGEIi1DqIgCADIgTAYQgyA9g1A8IgTAVQgsAxguAvIgpAqIhGBFQizCqjKCeIjhDEIgIAaQgJAngYAhIgRAUQgSAOgUAMIgEACIgHAEQioBcioAvIhEATIBEgTIASATQAOAYgEAOQgDAQhhAbIgRABQgxAAgygzgAI34BQgYhpgbhLQg0h3DSi2QBnhaBKAAQA8gIAUBSQATBCAqA+IAVAkQgRAYglAkQhjBjkfDHIgGgZg");
	this.shape_243.setTransform(1409.7,376.4);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("#000000").ss(2,1,1).p("EATHg/OIiOj/QhOh8i1CeQjnDRBEBgQAwA5AJDaQEVilDmjCQAJgIAJgHQA3gXApCgIEGFyQClD6AIFQQAIIIhhMlQgfE0AfHiIAiHPQgxARh0gEQgSAvg1BcQgeAtgCBxQgNG4AuKqQAKCdAlBpQAzgGgJCsQDzG/BINwQArGbATIRIACATQAMBUAIBCQAfD7gYAPQgOgCgOgCIAAC8IyaAAIgWAAQmZgcAhioQAoijD8AHQBFgQBCgWQBEgXBCgdQAJgEAJgEQBigsBcg7QAkAgAlAdQAdAWAdAUQEiDLGCA7EAIyg4PQgcAIgIDMIhaDqQisG9grKjIgiI+QjSDtkQELIn7C3Qi7BzgdBDQgOA8BEACQAhgEAqgfQgNAyAHAoQAIAoA/gNQgGBvBrgXQgIAsAmAZQA9AiBVgsQAegTAUgbQArg6g8ANQC9hxCljZQCIhQB7hNIiQGhIAoAtIg/DCQgrCPglB+IjpNqQgfBwgVASQhqBiBCBhQA0BUgxATQg3AWAPBsQAIB9guBkIiYEVIkRHUQhvCyAKCxEAIyg4PQBPgrBLgtEAIyg4PQAYgMAoDWQJcmIBriHEAUZg2yQj/A2hPGtQg/D8jQHVIAxAjIijE1QihDmjuENEAZqgzMQBtDimVQFQgugKgpgVIkGHDQkPFLpzGJAgFmfQDFD0HriKQILiSEyBHQAVAEATADAoplwQAUgKATgMABxjHICMBwIEQNfIFfO3QgUChCvCBIBDMMQASEyAJFlQADAhA5AzQAKAmABAfQAAAjgKAbQgMAcgZATQglAUAeA9AmfV3QADAOAEAMQA2CiCtgQQANgCANgCEgMHA6UQDclRD3pWIFdvUIGYt/QAlhJAnhJEALtgjbQDhBsEdBrEAShA3YIC9BqIDTBuIBAAhAQHfhIDXC5At5ozIAngREgTNAwAIlKgOIhcgIQkKhzg8BpQg8BpE/C4QG0EKHyCHQADADADADQACgCABgCEgTNAwAQgIAzANAWQC8FDD8EGQAFABAEABEgN2AzGQizlEgJiNIibEL");
	this.shape_244.setTransform(1354.7,604);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#ECECEC").s().p("ARvKrQmZgcAhioQAoijD8AHQB7A+gREigASiElQBFgXBCgdIASgIQBhgsBcg7QAkAgAlAdQgiAbgXAPIgMAIQiTBbicAnQgChHgpgHgA43p4QA8hpEKBzQAyBEh1DTQk/i4A8hpgAyLogQAZgqgjgcIFKAOQgIAzANAWQihgCikgPg");
	this.shape_245.setTransform(1316.1,971.3);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#D8D8D8").s().p("AKQKNQARkjh7g9QBFgQBCgWQApAHACBHQCcgnCThbIAMgIQAXgPAigbQAdAVAdAVQEjDLGBA7IAAC8gA8pl1QB1jTgyhEIBcAHQAjAcgZAqQCkAPChACQC9FED8EFQnziHm0kJg");
	this.shape_246.setTransform(1366.2,974.3);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#4D83AC").s().p("AJWQ6QAKgaAAgjQgBgfgLgnIC+BrIDTBtQlpiMgmA3gAvkyOQBqBhB5AwIgfACQiTAAgxiTg");
	this.shape_247.setTransform(1413.5,863.2);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#86B4D6").s().p("EAYkAjyQmCg7kijLQgegVgcgVQglgegkgfQgfg9AmgUQAZgTAMgdQAmg3FpCMIjThtIi9hrQg6gzgCggQgJlmgSkxIhDsMIDXC4IjXi4QiviBAUihIlfu2IkPtgIiMhwICMBwIEPNgQgnBJglBIImXN/IlePUQj3JVjcFRIgJgBQj8kGi8lEQgNgWAIgyICbkMQAJCNCzFFQizlFgJiNQgKiwBviyIERnUICYkUQAuhkgIh9QgPhsA3gWQAxgTg0hUQhChhBqhjQAVgRAfhxIDptpQAkiAAsiOIA/jCQDGD0HqiKQILiSEyBHQAVAEATADQgTAvg0BbQgeAugCBxQgOG5AvKpQAKCeAlBpQAzgGgJCsQDzG9BINxQAqGbAUIRIACATQAMBTAIBDQAfD7gYAPIgcgEgAT4d7IhAgigAoukzIAagDIgaADQh5gwhqhhQA2CiCtgRgAsRnEIgHgaIAHAag");
	this.shape_248.setTransform(1392.4,791.8);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#4A4A4A").s().p("AtkbTIgogtICRmhQJzmKEOlKIEGnDQApAUAuAKQE/soAAk5QAAhUgXgwQAXAwAABUQAAE5k/MoQgugKgpgUQkdhrjghsIgxgiQDPnVA/j9QBPmsD/g2Qj/A2hPGsQg/D9jPHVIAxAiIijE0QihDnjuEMIAio+QArqhCsm+IBajqQAIjMAcgHQBPgrBLgtQEUilDmjCIASgQQA3gXApChQhrCHpbGHIAAgDIAAAAIgBgDIgCgMIAAgBIgBgCIAAgDIAAAAQgiitgWgFIgCAAIAAAAIgCABIACgBIAAAAIACAAQAWAFAiCtIAAAAIAAADIABACIAAABIACAMIABADIAAAAIAAADQJbmHBriHIEGFyQClD6AIFPQAIIIhhMlQgfEzAfHjIAiHPQgxARh0gFQgTgCgVgFQkyhGoKCSQiyAyiLAAQj1AAh/icg");
	this.shape_249.setTransform(1441,387.7);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#DEB180").s().p("AssfqQgmgZAIgsQhrAXAGhwQg/AOgIgoQgHgoANgyQgqAfghAEQhEgDAOg8QAdhDC7hyIH7i4QEQkKDSjuQDukMChjnICjk1QDhBtEdBrIkGHDQkPFKpyGKQh8BNiIBPQilDai9BxIARAtQgUAbgeATQgwAZgoAAQgfAAgbgPgAqgebIAngWIgnAWgAvwbYIAngSgAIc5uQhEhgDnjSQC1idBOB8ICOD/QjmDCkVClQgJjagwg5g");
	this.shape_250.setTransform(1366.6,372.4);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f().s("#000000").ss(2,1,1).p("EAQRg+kIiYkvQhSgZiPBmQjSCgA3CRIBBEGQD9jHDWiOQAFgDAEgCQA8gaA8BvQAYAmgJAIID3EyQDPD3gCHzQgZJChbSOQAoBCgwISIgQC8EAHig4FQARgMAKDdQFFkiFejPQAAAAABgBEAHig4FQgmAVAKDaQjyFhhYNEIhTL/QgLANgLAOQkAEbjgC4InpCdQhlA6hyBhQgNA2ArAVIBkguIgqBgQAHAhArAGIBBAAQAGBcA5gCIA0AAQAEA9A8gMQAngIAmgTQDtiQCwjpQCAhNB+hPIhqIFQAOAMAPAKQCwCAE+giQDHgYEWhfQEVheDjBKQgFAdgDAcQCFAVANgZEAHig4FQAugmAugkEARxg2oQjgBChzI9QgqDUijFtIA5AaQDvB3EAAZEAWgg0mQCJDWinHLIjNJLIg8gEAVPlfICKA1AWE1uQAaCRBTCjAgntNQGpkLGWkgQA5giEoqkAAp1yQDTj7DSifIC8nCAB5hFQBCDLAzCXQBVEEBtEZQAOAjAOAjQAiBYAlBZQBRDFBcDPIBuEGQAfBvB4BoQB5DCCIMXQAtDfAtELQALAsBPA5QACAWgCAUQgFBIg3AlQgnAhAnAvAGwM6QiRE4j/HjIhnD8Qj2KboGOZQhuFLgmgjQgGgIgGgIAVHkmQgTCPgBCRQgBCtAACNQAGKIDwLlQAoBrBHCEICiFWQCXG+B4ONIA1DmQAfD7gYAPQgOgCgOgCIAACSIyaAqIgWAAQmZgcAhioQAoijD8AHQBFgQBCgWQBFgXBCgdQAJgEAJgEQBOghBshFIBLA5IA7AtQEjDLGBA7Ah0kyQhbFDhcG0IjELAQg5CKgICaQgCCAiSDcQk0HWhUA+QhpBJAKCsQAJDyjJCzQAAABgBABQACAAACABQASAGAXANEAV6A3KIDLB4APFeiQBNBDBwA/QBfAsBVB2EgWcAvEQgCACgBADQARApAjBUQBdDVB7CKQBYCFBYBzIgeAyQoLjfm9mPQhlhahXhVQghhYBZgkQBZglDHBjQAzAZAmAIQCbAiCbAMQABABABAAQALgZAlAKEgSzAuPQAWGHEHBX");
	this.shape_251.setTransform(1334.4,608.3);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#1D1D1D").s().p("AhIAYIAIg4ICJAzQgHAOgrAAQgjAAg8gJg");
	this.shape_252.setTransform(1476.7,576.4);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#4D83AC").s().p("AiNjuQBPEhDNC8QkHhXgVmGg");
	this.shape_253.setTransform(1228.3,928.1);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#ECECEC").s().p("AU8LXQmagdAiinQAnijD9AHQB6A9gQEjgAVuFQQBFgWBCgdIASgIQBOghBthFIBKA4IgHAKIg9AsQiTBbibAnQgChHgqgIgA8BpPQgihYBZglQBZgkDHBjQgaBpiBCEQhlhbhXhUgA1mo2QAhgVgLghQCaAiCbAMIAAAGQAQApAkBTQjygriNhPg");
	this.shape_254.setTransform(1295.6,966.9);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#D8D8D8").s().p("AMVFTQBFgRBCgWQApAIACBGQCcgmCThcIA8gsIAHgJIA8AtQEiDLGCA7IAACSIyaAqQARkih7g9gEggYgHEQCCiFAahoQAzAYAmAJQAMAggiAVQCOBPDxAsQBcDWB8CJQBYCFBYBzIgeAxQoLjem9mOg");
	this.shape_255.setTransform(1342.3,970.6);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#86B4D6").s().p("EAbxAjNQmCg8kijKIg8guIhKg4QgogvAoghQA2gmAGhHQABgUgCgXIDLB4IjLh4QhPg4gKgsQgukLgsjfQiJsXh4jCQBMBCBxBAQBeAsBWB2QhWh2hegsQhxhAhMhCQh5hngehwIhukFQhdjPhQjFIhIixIgbhGQhtkahVkDQgziXhCjMQBCDMAzCXQBVEDBtEaQiRE4j+HjIhoD7Qj3KboFOZQhvFLglgjIgMgQQhYhzhYiFQh8iKhcjWQgkhTgQgpIACgGQAMgZAkAKIAEACIgCgDQDIi0gJjyQgKirBphKQBVg9EznVQCSjdADh/QAIiaA5iKIDDrAQBcm0BclEQCwB/E+giQDHgXEVhfQEVhfDjBLIgIA5QgTCOgBCSQgBCuABCMQAGKJDwLlQAoBqBGCDICiFWQCYG/B4ONIA1DmQAfD7gYAPIgcgEgA0NYdQjOi9hPkhQAVGHEIBXgA62R5QgYgOgSgFQASAFAYAOgAQCZ5gAJOBSIAAAAgAA5wVIAAAAg");
	this.shape_256.setTransform(1371.9,795.5);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#4A4A4A").s().p("AtecMQgOgLgPgMIBqoFQGrkLGUkfQA5giEoqkIA8AEIDNpLQBbj7ABizQAAiSg+hhQA+BhAACSQgBCzhbD7IjNJLIg8gEQkAgYjuh4Ig5gZQCiltAqjUQBzo9DghDQjgBDhzI9QgqDUiiFtIA5AZIi8HCQjSCejTD8IBTr+QBYtFDylhQgKjZAmgWIBchJQD8jHDWiOIAJgGQA8gZA8BuQAYAngJAIIgBABQleDPlEEhIAAgLIAAAAQgJjCgQgEIAAAAIAAAAIgCAAIACAAIAAAAIAAAAQAQAEAJDCIAAAAIAAALQFEkhFejPIABgBID3EyQDQD3gDHyQgZJDhbSMQAoBDgwISIgQC7IiKg0QjjhLkVBfQkVBfjHAXQhDAHg8AAQjkAAiMhkgAMHQDQhTiigaiRQAaCRBTCig");
	this.shape_257.setTransform(1409,397.2);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#DEB180").s().p("AtDerIg0AAQg6ADgFhdIhBAAQgsgFgGghIAqhhIhkAuQgrgUANg3QByhgBlg7IHpicQDfi4EBkcIAWgaQDTj8DSieIC8nDQDuB4EBAYQkpKlg4AiQmWEfmpELQh/BPh/BNQixDpjsCRQgmATgnAHQgLADgIAAQgqAAgDg0gAIJ5aQg4iRDTigQCPhmBSAYICYEwQjXCOj8DHg");
	this.shape_258.setTransform(1333.2,378.4);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f().s("#000000").ss(2,1,1).p("EADpg47QAGgugRg2QgUg5gnhbQgphcAEg0QACg1DChkQBGgjA0gYQBTgjAsgEQArgFAfAsQAUAfARA2QAHAYAGAWQAjBiAtA1QAogcAnCeQBlBlBeB1QAeAlAcAmQCkDeA9DLQA0CsgVD7QgjGlg3ePQhWgjhRgWQgkgKgjgHQkmhEjsBpQkiCAjqAhQjqA0jngpQgGgCgFAAQgRgFgPgEQgJgJAGgNQAUgnAhhpQAehrAQhOQEdjqFAjGQEui+CNjNQA8hNA0iDICjoHQAEAAAEABQAfAEAlAHQBTk2A4i8QA5i7AYioQAWiogUguQgTgugYg0EAMHg99QgkARgjANQiFA0iqB4QhlBGhDAyQh9BegGAYIApCqQBYhEE8j0QCJhoCqhAAlfwmQBpqwAUkkQAenkA7ixQA5iwALgbQBUjTAxhoQAshwgMhQQgBgGgBgHQgQhcAYgHEANDg2RQkPA5h+HKQgUBMg/EpQgjCxgjBZQAwAlAVALQCcBRCbAjQAmAIC9AcAlfwmQBph0B8idQDvkvCHjGIBmmzAg3oBQAdAAAfgEQGUABFtkaQAqgVArgYARSmLQABB8hACQQgvAmAvLZIBgLMIAABmQATAaARAZQE6G+CCGBIBoFUQBJD8CTCYQBAA/AoBDQAZAYAQA0IAbC0QAkB+BBBzQAGALAHAMQA1B0gfAKQgPAPgRANAiEgXQANBZAeBoQAKAjALAjIDDIkIE0K4QAMAgAHAlQAJAyABA9QAAAQAAARQAAAOgBANQgJBPBmBSQANALAQALQCpBVC5CJQAjAaAjAbAB/MUQjVGch6FoIhYFYQiGL6lNJpQhCBzgSCyQgjDNg6gZQgOgEgOgGEAVLA2qQAXAzgDA4QgDArgRAsQgTAbAJAcQALAjA1AmQBBAuCBAyQGTCKDVimEAVLA2qQApA5BuAXQATAEATADAJJdzQA8BMA8BrQBpC9BpEdQCmHuCRD/QBDB2A+BDEAVBA6jQiIBxi5BOQguATgxARQhHgCg2ANQh2AigHBpQACBLA/AiQA4AdBRAOQBSAIBQACQGYAMF0iCQFyiCAwhOIgWhIAlfwmQheBlitCiInEDEIiKDjQgHAeAHAUQARAkAugMIAAAoQABArAuAIQAcgBAMgKQgGAWAGAXQAQAcAngBQAtgCAXgYQAFAWASANQAUAQAxgQIBjg6QAYgogcgEQC1huCIjUAtElkIhjC0Av/noIh6C6AulmpIh9DLAnkjLIAAAAQgxDogvDTIjkOAQg/DmgVEiQgZCdhRDiQgGAQgGAQQgVAoghBJQgGAPgRAqQAUgWASgXQDGj1BokEQASguAQgwAsXjbQAWgLAVgNEgQ/AjBQgEAMgGAOQgyBjhlBaQiYB7AwFVQATB4hDA8IiMBwQAMAvASAqQB6EmGkCXIgbA4QgwA2j9heQi2hCi4gWQkVgviWhhQidhlgQibQAKhuCIAQQB2ALAyAjQAiAEAiADQCnALCtgg");
	this.shape_259.setTransform(1331.7,608);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#2C2C2C").s().p("Al/CMQGKh5F1ieQlrEXmRAAIgDAAg");
	this.shape_260.setTransform(1370.6,542.1);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#ECECEC").s().p("AUcIgQhSgOg3gdQg/gigChLQAHhpB2gjQA2gNBHADQCBAzgPEFQhQgChSgIgAWrDOQC4hOCJhxQALAjA1AlQiTB2ivBDQgGhNg5ALgA8rnJQAKhuCIAQQB1ALAzAjQAyBSi/DeQidhlgQibgA2vmuQAegegcgnQCmALCugfQAMAuASArQhfAOhdAAQhdAAhbgOg");
	this.shape_261.setTransform(1289,981.2);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#D8D8D8").s().p("APHISQAPkFiAgzQAxgSAugTQA5gLAGBOQCvhDCSh2QBCAuCBAzQGSCJDVilIAXBIQgwBNlzCCQlVB3l0AAIhDAAgA1bAGQi3hCi3gVQkWgwiWhhQC/jdgxhSQAhADAiADQAdAngfAeQC2AbC+gbQB7ElGjCYIgaA2QgSAUgtAAQhOAAigg7g");
	this.shape_262.setTransform(1339.2,983.6);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#4D83AC").s().p("ARuNSQApA4BuAYIiDAbQADg4gXgzgA0FnPQAhhKAVgnIAMggQCMiWBvjGQhoEDjGD1gAHkotQg8hrg8hMQCpBUC5CJQjmh4gEBSg");
	this.shape_263.setTransform(1353.8,872.8);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#86B4D6").s().p("EATaAhjQiBgzhBguQg1glgLgjQgJgcATgbQARgtADgqICDgbQhugYgpg4Qg+hDhDh3QiRj/imntQhpkdhpi9QAEhSDmB4Qi5iJiphVIgdgVQhmhSAJhOIABgbIAAghQgBg9gJgzQgHglgMgfIkzq4IjEokIgVhGQgehogNhbQANBbAeBoIAVBGIDEIkQjWGch6FoIhYFXQiGL5lNJqQhCBzgSCyQgjDMg6gYIgcgKQmkiYh6klQgSgrgMguICMhwQBDg8gTh4QgwlWCYh6QBlhaAyhjIAKgaIAmguQDGj1BokCQASgvAQgvQgQAvgSAvQhvDFiMCWQBRjiAZicQAVkiA/jmIDkuAQAvjTAxjpIAAgBQDnAqDqg0QDrghEhiBQDshpEmBEQAjAIAkAKQABB7hACRQgvAlAvLbIBgLMIAABmIAkAyQE6G9CCGCIBoFUQBJD8CTCYQBAA+AoBDQAZAYAQA1IAbCzQAkB/BBByIANAXQA1B1gfAKQgPAPgRANQh0BaitAAQiQAAi3g+gASfcXIgmgGIAmAGgAKIGdIhGg2IBGA2g");
	this.shape_264.setTransform(1367.8,784.9);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#4A4A4A").s().p("AuGdSQgGgCgFAAIgggJQgJgJAGgNQAUgnAhhpQAehrAQhOQEdjqFBjGQEti/CNjMQA8hNA0iDICjoGQi9gcgmgIQibgjibhRQgVgLgwglQAjhZAjixQA+kpAUhMQB+nKEPg5QkPA5h+HKQgUBMg+EpQgjCxgjBZQAwAlAVALIhmGyQiHDGjwEvQh8CdhpB0QBpqwAUkkQAenjA7ixQA5iwALgbQBVjUAxhnQAshwgMhQIgCgNQgQhcAYgHIApCqIGTk4QCJhoCqhAQiqBAiJBoImTE4IgpiqQAGgYB9heQBDgyBlhGQCph4CFg0QAjgNAkgRQAogcAnCeQBlBlBeB1QAeAlAcAmQCkDeA9DLQA0CsgVD7QgjGlg3eOQhWgjhRgWQgkgKgjgHQkmhEjsBpQkhCAjrAhQiCAdiBAAQhnAAhngSgAnZYcQAdgBAggDQggADgdABgAmcYYQGUABFskaIBVgtIhVAtQl0CfmMB6gAImgdQBTk2A4i8QA5i7AYioQAMhYAAg2QAAgygKgWIgrhiIArBiQAKAWAAAyQAAA2gMBYQgYCog5C7Qg4C8hTE2IhEgLIgIgBIAIABIBEALIAAAAgAg/jBIAAAAg");
	this.shape_265.setTransform(1373.5,400.2);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#DEB180").s().p("EgLwAgVIgXgjIBji0IhjC0QgXAYgtACQgnAAgQgbIAAgtQgMAKgcABQgugIgBgrIAAgoQguAMgRgkQgGgUAGgeICKjjIHEjEQCtiiBehlQBph0B7idQDwkvCHjGIBmmyQCcBQCbAjQAmAIC9AbIijIIQg0CDg8BNQiNDMkuC/QlBDGkcDqQiIDUi1BuIAEAsIhjA6QgYAIgSAAQgRAAgKgIgAp3fHIArgYIgrAYgAuCfEIB9jLgAvZd0IB6i6gAF+38QgUg5gnhbQgphcAEg0QACg1DChkQBGgjA0gYQBTgjAsgEQArgFAfAsQAUAfARA2IANAuQAjBiAtA1QgkARgjANQiFA0iqB4QhlBGhDAyQAGgugRg2g");
	this.shape_266.setTransform(1315.7,386.9);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f().s("#000000").ss(2,1,1).p("EAADg5kQAQilhQh8QglhVDziNQDRh6BFCNIBYCxQAHgEAIgDQASgJAlBEQAXAmgLAUIEEFAQDgEXg4KpQgtL3AJN8QgLI6hPAPIhcgZQgdgLgdgJQgQA+g2BzQg1B8gJEEQABIYAaIhQABALABALQAQCLBVBKQGpFkEpIWIErHZQArBBAoApQBjBVAcBLQAPAiAGAkQAMAZAOAZQAyBYBPBKQA/BMgJAkEgCBg3dQgCAEgBAFQAQgRATDDQEqkpGIjqEgCBg3dQABgEgDAGQgGALgPBqQgPBqg+B3QjeHbhQQzIh9QDQjcCJhvBhIiRDXQgWAhAMASQAOAaAYADIAfAAIAQAjQApApA7gpQgKBIBagIQBBAbAmgbQhnHUhIHkQgRBJgkBDQg2BhAREFQADD8itH1Ih2FCQhABiAYDtQAKBZgEAyQAEBQgiADQgwAUAIBGQhFAUAXBCQAWAiAaAhQDID7GwCaQAEACAEAAEgCBg3dQARgpBRhCQASgOAQgOQD6jEECh7EAGLg0oQh/BZgZDHIhLLYQAMAHAMAGQDMBsFFgIQALAAALAAQADAAADAAAoKkUQBChjAxh1QLFq5CDjIQCDjIAHgbQBtkiBDlHQABgCAAgDQABgBAAAAEAMjg03QB9B/gyFpQgnEQgfF9QgeACgdABEADAgkjIg6HBQi9D4iPEeQicE2jzF4Ig7AqAoKkUQDpASG/ifQFHhTEEBOAi0OVQA5CzA7CtIBFEUQAnCiCDBpQDsDiDRFUQB4DZBsCyQBjCcCSCtQASASASASQAUAUATAWQAwAyAqA3QAyBDAoBKQCiAuDHgiQAcgFAegHEAVEA48QA2AkA2AZQDoBuDkhTQCthYBzimEAVEA48QhVB7iLBoQgZATgbASQkFAZgNCbQgOCpGAgBQAQABAQAAQEHABEVjEQEpjDDVkVIguhwACvcUQBAAyBUAmIFtCqEAVEA1iIAABtIAABtAttAAICCiVAi0OVIiyFwQhNCNgEDMQgsJZiNKXQgIAkgIAmQAAABgBABQgYBcggB2IgrCuIgPA6QgLBGALB8QAPCIgxgKAsGAAQCThzBpihAu9hAIB0iiAwxhjIB5ioEgSEAxrQArAuAoAlQDvCIBegsEgXFAy6Qi+A/i8AOQgtADgsAAQgOAAgNAAQjRgShBB0QgkCMECA8QAoAJAsAIQDwAvFoAaIHiAuQBBgGADgiAnXhhQCIIOCbHo");
	this.shape_267.setTransform(1320.8,613.2);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#ECECEC").s().p("AYdHzQmAABAOipQANibEGgZQB2BbAJEBIgBAAIgfAAgAXxByQCLhoBVh6QA2AjA2AaQhxB7iIBrQgWhAg9gBgA5ah5QkCg7AkiMQBBh1DRATIAbAAQAsBmgmDVQgtgJgogJgA2ymmQC8gNC+g/QAWAiAaAgQjNA2jHAgQAQgwgmgcg");
	this.shape_268.setTransform(1281.1,988.9);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#D8D8D8").s().p("AQXHSQgJkCh2hbIA0gkQA8ABAWA/QCIhqBxh8QDpBtDkhSQCshYB0imIAuBwQjWEVkoDCQkUDDkGAAIgDAAgA3ThAQlogajwguQAmjVgshnQAtAAAtgDQAlAcgPAvQDGgfDOg2QDHD7GxCaIAIADQgDAhhBAGg");
	this.shape_269.setTransform(1336,992.3);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#4D83AC").s().p("AQHCIIAAhtQChAuDIgiQhtBijVAAIgngBgA1viIQDwCIBdgsIgOA5QgVALgZAAQhkAAitigg");
	this.shape_270.setTransform(1352.5,953.1);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#86B4D6").s().p("EARHAgEQg2gag2gjIAAhtQDzAJB2hrQjHAjiiguQgohLgyhCQgqg3gwgyQgTgWgUgVIgjgkQiTishjidQhsixh4jaQjRlTjqjiQA/AyBUAmIFsCqIlsiqQhUgmg/gyQiEhqgnigIhGkUQg7itg5izQibnoiIoQQCIIQCbHoIiyFvQhMCNgFDNQgsJXiNKXIgQBKIgBADIg3DSIgsCtQheAtjviJQgoglgrgtQArAtAoAlQDZDLBlg0QgLBFALB9QAPCHgxgJIgIgCQmwibjIj7QgagggWgiQgXhCBFgUQgIhGAwgUQAigDgEhRQAEgxgKhZQgYjtBAhjIB2lCQCtn0gDj8QgRkEA2hhQAkhEARhIQBInkBnnVQCTh0BqigQDoARHAifQFHhSEDBNQgQA/g2BzQg1B7gJEGQABIYAaIgIACAXQAQCKBVBKQGpFjEpIXIErHYQArBCAoAoQBjBVAcBMQAPAiAGAjQAMAaAOAZQAzBYBOBKQA/BMgJAkQhzCmitBYQhiAjhjAAQiDAAiEg+gAVEb4IA6gLIg6ALgAi4CfIAAAAgAodrfIAAAAg");
	this.shape_271.setTransform(1356.9,778.5);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#4A4A4A").s().p("ArFdLQBBhkAyh0QLFq6CCjIQCDjIAHgbQBukiBDlFIABgFIAAgCIgGAAIgWABQlFAHjLhrIgYgOIBKrYQAajGB/hZQh/BZgaDGIhKLYIAYAOIg5G/Qi+D4iPEeQidE3jyF4Ig7ApIB8wCQBRwzDenbQA+h3APhqQAPhqAFgKQABgCAAgBQABgBAAAAQAAAAAAAAQAAAAAAABIgDAJIAAAAIADgBIAAAAIAAAAQANABAQCQIAAADIABAJIAAAEIABACIAAAAIAAAGIABALQEqkpGJjrQmJDrkqEpIgBgLIAAgGIAAAAIgBgCIAAgEIgBgJIAAgDQgQiQgNgBIAAAAIAAAAIgDABIAAAAIADgJQASgpBRhBIAjgcQD4jEECh7IAQgIQARgIAlBEQAYAlgLAUIEEFAQDfEYg4KpQgsL1AJN8QgLI6hPAQIhcgaQgdgLgegJQkDhOlHBTQmTCQjlAAQgZAAgXgCgAKzrwQgoERgeF8Ig8ADIA8gDQAel8AokRQAOhnAAhTQAAjThZhaQBZBaAADTQAABTgOBng");
	this.shape_272.setTransform(1339.5,398.8);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#DEB180").s().p("EgKlAhJICCiWIiCCWQhaAJAKhKIB0ihIh0ChQg7AqgpgqIgQgjIB5inIh5CnIgfAAQgYgCgOgaQgMgSAWgiICRjXQBvhgDciKIA7gpQDzl4Cbk3QCPkdC+j5IA6m/QDLBrFGgHIAaAGQhDFGhtEhQgHAbiDDIQiDDIrFK6QgxB1hCBjQhpCgiTB0QgTAOgaAAQgZAAghgOgACK87QglhVD0iOQDRh5BFCMIBYCyQkCB7j6DEQAQimhRh7g");
	this.shape_273.setTransform(1300.8,401);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("#000000").ss(2,1,1).p("EgB/g47QACiIhehUQgshBDtkXQC5jcB0EuIBbCXEAHEg8TQB6CCAqA0QArA1BvCJQBuCKA5DtQAHAbAPBbQACALACANQASByhPJlQgeDtgdQxQgCBNgEBIQgLE2g4DOQgwhBhcgcQgIgCgIgCEAHEg8TQAZgdhQhUQgJgIgWAGQg/ARiqB7QidBshnBTQh5BggtA8QAEgGAGAAQAfAAAzCtQDDi5DSizgEAEhg1vQjECzgLFDQgLFBghFYQAwAUAzAPQD6BREIgUQAhgEAhgFQAjgEAjgEQANlxACljQAAlkhih8EACJgi9QgNCKgKCZQgJCZgSCMInETJIhkBpIjODZQhLBKgEA2IAADbQAqBEAhgXIAPAoQAiAdA4gdQAeA4BLgfQAwAVAggVQBJhJAJgdQAHg4gagkQB0jDAykRQAeguAegtQI0tdBjkoQA2k/AekqAJPkYQARgrAGgqAJPkYQgaBCgzBEQl2KsgtKfQACAEACADAJPkYQCyAkABgYABfS5QAAAEgBAEQADgBACAAQA4ABABCQQgNBYguBQQgRAdgWAcACcVRQAqAgAoAhQGaFMENFqQC2DzHzGaQDkCUAWB3EAd1AwyQAFgKACgJIhEg/QAEAYgEAXEATaA4PQgnCUg+CLQgXAzgaAyQjKBAAKC6QgGBMDagOQBsgHCdh3QEijaG5pjQAZgjjgi7EATaA4PQBKACBGgPQEwhBDbmPAmjbpQF7FZHaH/QD0EdE2D4QCaB9A4BmIAsDWEASuA05QDsAyEIjwEgElg2fQgSAZAQB4IgmBRQgvBSgcBBQg/CVgjCuQgJAngYDhQgYDfhKMvQgpHRhEE2Qg0DphKCpIAwARIAAAAQCTBEDUhgAlEDaIgaAaIAAgrQAOgVAOgXAqjAmIAAD4Ao6BFIAAEBAnWBjIAFD8As4knQiVMChQLeQgXDpAXC3QADFXibIVIhKDqQgsB9BSCbQBBCEiBDgQi0A6i0AnQg+ANg2AKQkCgWhCCUQgrBqFmBdQAIACAJADQFpBXMthHIgCgoAqUFGQgfF+A3KFQAGDQDTDQQgoKRhVK2QgfD/AKEaQAFCOgRACQgMgCgMgCEgUZA0rQAhA3AnAxQDVEIGjA6EgbsA7sQgBAAAAABAhgmSQFhhHFlBs");
	this.shape_274.setTransform(1301.4,601.5);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#ECECEC").s().p("ATvGRQgLi6DLhAQCagJCDDEQieB2hrAHQgjACgeAAQiZAAAGhAgAXgAyQA+iKAniUQBKACBFgPQgkCUhjCuQgzgrg6AUgA2UgTQlmhdAshqQBBiUEDAWQBDA8g7ENgA0XlvQC1gnC0g6QAgA3AnAxImlBTQAGg0gRgmg");
	this.shape_275.setTransform(1265.1,985.1);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#D8D8D8").s().p("AOgFTQAagyAXgzQA6gUAzArQBjivAkiTQExhBDamOQDhC6gaAjQm4JikiDaQiDjDiaAJgA+RCtIAAgBQA8kNhEg7IBzgXQASAmgHA0IGlhTQDWEHGjA7IACAnQluAgkSAAQlQAAjGgwg");
	this.shape_276.setTransform(1317.8,966.3);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#4D83AC").s().p("AgKhTIBRBBQg7BLhSAbQAuhPAOhYg");
	this.shape_277.setTransform(1318.1,746);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#86B4D6").s().p("EgOKAhBQmjg7jWkIQgngxggg3QCBjfhBiFQhSibAsh9IBKjqQCboVgDlWQgXi3AXjpQBQrdCVsEQCSBEDVhfIjODYQhLBKgFA3IAADbQArBFAggYIAPAoQgKCKAACrQAAExAjGdQAGDQDTDPQgpKRhUK2QggEAALEZQAFCPgRABIgYgDgAOpd6IgsjWIACAAIABABIABAAIACAAIABAAQAlAIAmAAIAAAAIABAAQDBgBDUi7IABgBIACgCIAFgEIAEgEIgEAEIgFAEIgCACIgBABQjUC7jBABIgBAAIAAAAQgmAAglgIIgBAAIgCAAIgBAAIgBgBIgCAAQg5hmiah9Qk2j4jzkdQnbn/l6lZQjTjPgGjQQgjmdAAkxQAAirAKiKQAjAeA3geQAfA4BLgfQAwAWAggWQBJhIAJgeQAHg4gbgkQB1jEAykRIA7haQFjhIFkBsQgGAqgSArQgaBCgyBEQl2KugtKfIAAAHIAFAAQA4ABABCPQgOBYguBQQBTgbA7hMQGYFLEOFqQC2DzHzGaQDkCUAWB3IBEA/QgCAJgGALQjaGOkxBBQg7ANg/AAIgVAAgAYHV6QACgLAAgLQAAgMgCgNQACANAAAMQAAALgCALgAj2hiQAVgcARgdQgRAdgVAcgAvG1Og");
	this.shape_278.setTransform(1331.9,770);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#4A4A4A").s().p("AIgcuQARgsAGgqQllhslhBIQI0teBjknQA2k/AekpQkIATj6hQQgzgQgvgTQAglZALlBQALlCDEizQjECzgLFCQgLFBggFZQAvATAzAQQgNCIgKCZQgJCZgSCNInETJIhkBpQjUBgiThEIAAgBIgwgRQBKipA0jpQBEk2ApnQQBKsvAYjeQAYjhAJgnQAjivA/iUQAchBAvhTIAmhRQgQh4ASgYQAEgGAGAAQAfAAAzCtQDDi5DSi0ID4ivIj4CvQjSC0jDC5QgzitgfAAQgGAAgEAGQAtg8B5hhQBnhSCdhtQCqh6A/gRQAWgHAJAIQBQBVgZAcQB6CCAqA1ICaC+QBuCJA5DuQAHAaAPBcIAEAYQASBxhPJlQgeDtgdQxQgCBMgEBIQgLE2g4DOQgwhAhcgcIgQgFIAQAFQBcAcAwBAQAAAKgeAAQgrAAhqgVgALkhLIhGAJIhCAJIBCgJIBGgJQANlwAClkQAAljhih9QBiB9AAFjQgCFkgNFwg");
	this.shape_279.setTransform(1306.1,389.7);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#DEB180").s().p("EgIIAj4IAAkCIAAECQg4AdgigdIgPgoIAAj5IAAD5QghAXgqhEIAAjbQAEg4BLhKIDOjYIBkhpIHEzJQASiNAJiZQAKiYANiJQD6BQEIgTQgfEpg1E/QhjEno0NeIg8BbQgyEQh0DEIgcAtIAAAqIAagaIgaAaIAAgqIAcgtQAaAkgHA4QgJAehJBJQggAVgwgVIgFj9IAFD9QgbALgVAAQgmAAgTgkgEgGfAkRgAip9lQgshBDskYQC6jcB0EuIBaCYQg+ARiqB6QieBthmBSQACiIhehTg");
	this.shape_280.setTransform(1296.4,404.6);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f().s("#000000").ss(2,1,1).p("EAEgg8jQAggNBHCWQDWDnB6C1QA9BvAyCHQAzCHgYHiQgHCKgNCjQgJBrgGBgQgJCtgNCwQgYFmgnGwQgoGwgjDCIiLgyQiFg3jsAYQAbEChnD4QgYA+gYArIAAAjIAAA4EAJ+gx7QBkEkgGE2QgFDlgPDpQgYACgwAEIjEASQh7AEiugRQgTgCgJAAIAAACIAPJFIjmUPQgkAHgOAEQmyBki5g1QgogLgdgTQgTgNgNgNQALjEAVh9QALhMALhIQAWiMASh8QAnkVAWjEQAilOAQjWQACgPAAgLQAPjpAHgjQAwkeBVjyQBXj0B8jHQgmhzAYgiQA8g5A9g2QhvlLguhTQgnhXEKh0QEJhzAWBiQApBrBMCtEAKAghNIhMJyQg1G4ldMQAITj0QAHBIlFG9QgvBEgqBLQi/E/haIyQBBACgSBWQGKDqHVISQBXBcC9BcQCdBeBUCOQAkA9AXBHEAT2AoJQA/BMBXBTQBaBXBzBeEAOSAxTQAYADAXgBQBoACBbgXQAfgIAegLEAOSAxTIBWBfIBVBfQAKgBAJgBQA8gIA3gRQEXhXB/lCEARQA0PQhGEwg+CLQgXAzgaAyQjKBAAKC6QgGBMDagOQBsgHCdh2QCAhhCeitQG3pKhdhtQhNhOiKh6EgD5Ah+IA3ArQDEC0DjEEQGVHVEYAdEgEzg1SQAUAABJCrQEkkgE5jTEAFrg0xQjsCggnEbQgnElAJEoQACBrACBtQAYADAhAEAhDFpIAACjIAAAWIAAAZAAmFzQAtACgBAzQgBA0hJA6QgaAOgSgCAhDIMQALATAUADAkrFHIAADbAhgj0IkkIFIAQD2QADAXASAPQASAPAigaQAOA8AqgCQAbgCAOgNQAIgHAEgLIAAAgQAKAfBAgFQA/gGARhNAi+FiIAADZAuKZ7QAWAYAaAWIJhHVQgrHLACG8QARHihPBYQgMANgOAFArgZIQAUAIAVAHQGBCKFLiQQALgEALgFAr9i6QitKEg4NfQgbDRBzCBQAZHyh5JMQhSFbBDCnQAPAnAYAdAoYUcQAIAJAKAHQB+BnC3hAQAJgDAJgEAhuVpQh/A0iyBoEgOHA2/QAJAQAKAPQBlCUDLgsQARgEASgFEgRMA2vQAdAuAhAqQDjEdG5BDQAhAVgPk9EgP5Ay7IhTD0QiXBNjWAxQgoAJgrAJQjagMhEBoQhDBmCPAuQCOAtBXANQI/BVJIhXEgC6g3BQDljJD1iZ");
	this.shape_281.setTransform(1280.3,588.3);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#ECECEC").s().p("AQaF5QgLi6DLhAQCagJCDDEQidB2hsAHQgjADgdAAQiaAAAGhBgA2gB/QiOgtBDhlQBDhpDbAMQA+BJgrDgQhXgNiPgtgAULAaQA+iJBGkxQA8gIA3gRQgnE8hjCuQgzgrg6AUgAx6iBQDVgyCYhNQAcAvAhAqQjBBFjMAuQABg/gegOg");
	this.shape_282.setTransform(1248.4,964.3);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#D8D8D8").s().p("AMBGMQAagzAXgzQA7gTAyArQBjiwAnk7QEXhXB/lBQCKB5BNBOQBdBum3JIQieCuiABgQiCjDibAJgA6THFQAsjhg/hIIBTgSQAeAOgBBAQDNgvDBhFQDjEdG5BDQknArkkAAQkfAAkdgqg");
	this.shape_283.setTransform(1295.7,937.5);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#4D83AC").s().p("Ax/QgIEvBoQguAKgpAAQiLAAhNhygAKHKVQAYACAXAAQBoABBbgXQhABQhdAjgAQmDPQgXhHgkg+QA/BNBWBTQg+glgcAKgAvDtmQFwAxFeg3QiqBKi3AAQiwAAi9hEgAl5xUQh/A0izBoQCUiqCeAOgAsSyRQCXAjCeAEQhGAYg9AAQhkAAhOg/g");
	this.shape_284.setTransform(1307,837.7);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#86B4D6").s().p("EgJ4AhAQm6hCjikdQghgqgdgvIBTj0QAPAnAYAdQgYgdgPgnQhDinBSlbQB5pMgZnwQAWAYAaAVIJhHVQgrHLACG7QARHihPBZQgMANgOAEQAOgEAMgNQAOEpgcAAIgEgCgAtLcgIAjgJIgjAJIkvhpQBlCVDKgsgAx6a3QgKgOgJgRQAJARAKAOgALhWLQBdgiBAhQQAfgIAegLQgeALgfAIQhbAXhogCQgXABgYgCQkYgdmUnWQjjkEjFi0Ig3gqIphnVQgagVgWgYQhziCAbjRQA4tfCtqEQC5A1GyhlIAxgLIkjIHIAQD2QADAWASAPQARAPAjgaQAOA9AqgDQAbgCAOgMIAMANQAKAgA/gGQBAgFARhOQASADAbgPQBJg6AAgzQACg0gugCIAAgiQAZgrAYg/QBnj5gbkCQDqgXCFA2QAIBJlEG9QgvBEgqBMQjAE/hbIxQBCACgSBWQiegNiTCpQCyhnB/g1QGKDqHVIRQBXBcC9BcQCdBfBUCNQAkA+AXBGQAdgJA+AlQBaBWBzBeQh/FCkXBXQg3ARg8AIIgTACgAjwjUIAWgKIgWAKQleA3lvgxQGACKFNiQgAu9jOIgqgQIAqAQgAsNn5QB/BnC3hAIASgHIgSAHQifgEiXgjIgSgQIASAQg");
	this.shape_285.setTransform(1306.5,771.4);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#4A4A4A").s().p("AsAcsQgogLgcgTQgUgOgNgNQALjEAWh8IAWiVQAWiLARh9QAnkVAWjEQAjlOAPjVQACgQAAgKQAQjpAGgjQAwkeBVjyQBYj0B8jGQgnh0AYgiQA8g5A+g2QDkjID1iZQAhgNBGCVQDXDnB5C1QA9BvAzCIQAyCHgYHiQgGCJgOCkIgPDKQgJCsgNCxQgYFlgnGwQgnGwgjDCIiMgyQiFg2jrAXQFdsQA1m3IBLpxIBIgHQAQjpAEjlIABgmQgBkihekSQBeESABEiIgBAmQgEDlgQDpIhIAHIjEARQh6AFivgSQgTgCgJABQghgFgYgCIgEjYQgCg4AAg3QABjwAgjuQAnkcDrifQjrCfgnEcQggDugBDwQAAA3ACA4IAEDYQAYACAhAFIAAABIAPJEIjmUPIgyALQkcBCiyAAQhdAAhAgSgAjYzBQEkkfE4jUQk4DUkkEfIgFgLIgFgLIgBgBIAAgCIgCgDIgBgCIAAgBIgEgIIgBgDIgBgDIgBgBIgBgDIgCgFQgyhtgSgHIAAAAIgCgBIAAAAIAAAAIACABIAAAAQASAHAyBtIACAFIABADIABABIABADIABADIAEAIIAAABIABACIACADIAAACIABABIAFALIAFALIAAAAgAB0hjIAAAAg");
	this.shape_286.setTransform(1280.5,386.1);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#DEB180").s().p("EgE7AlVIAAggQgEALgIAHQgOAMgbACQgqADgPg8IAAjbIAADbIgzALQgSgPgDgXIgQj2IEjoGIDm0PIgOpEIAbAAQCvARB6gEIDEgSIhLJxQg1G3ldMRQAbEChmD5QgZA+gYArIAAAjIAAA4IAAg4QAuACgCAzQgBAzhJA7QgaAOgTgDQgTgCgMgTIAAijIAACjIAAAVIAfAAQgQBOhAAGIgRAAQgwAAgIgagEgDBAk1IAAgagEgE7Ak1IAAjZgEgHUghlQgohXELh0QEJhzAVBiQAqBrBLCtQj0CZjlDJQhvlLguhTg");
	this.shape_287.setTransform(1292.8,409.7);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f().s("#000000").ss(2,1,1).p("EAI3g61QDpDYB2COQARAWAuBbQAEAGACAHQAbA/AMBgQAFApADAvQAAACAAADQAICkAABUQAABCgCAgQgBAKgBAHEAMng0bQA/AuAqA8QApA9AUBLQAJAnAJAvQAaCIATDQQAAAJACAIEAQaggmQAqgKARgBQgtkugakLAIa/1QB7gUBCgCQBDgDBogLQBpgMAvgBIAxGmQAAG7jGRHQAEEcgRCbQgGA+gDAWEAHBAjiQEkIVBBCXQB6DVBpC1QA1BXgLAPEgAWg3LQAKiygiiQQgZioEIh4QDVhWAaBtQARBqArB/QAKgFAJgFQA/gMgHCOEgCWg1XQBAg9BAg3QEFjgD9iCEgCWg1XQgSAZAZBlQgIAPgIAPQAAABgBABQAAAAAAAAQjoHRhTOdQhGMPgcEIQgGA4gFAhQgEAfgFAgQgIAwgJA3QgJA5gGAgQgIAogIAqQgIAqgJAsQATAGATAFQAZAGAaAFQgSBAgvCXQgJAdgLAhIgOA7IgPA8IgdB4Qg5D9gyE8QgJA5gEBMIg8HIQgRA4AWAxQASAoAPAHQABABAAABIApA4IBLB3QAbAsAgAzQCSDoDvFpQAnA8AqA/QD/G4BIFzQhkBiBsBLQgoBSg7BOQgPAUgQAUQglA8g6A8EgCWg1XIBIC2QE0kmFRjuEAF2gxjQgmCuAaEOQAaEPBXGjIA/AAIBlHCIAASzApio1IhTChQgyAygpA0Ii4DEQAAAGAAAGQAABEANBNQABACAAACQAFAaAGAbQASA2AvgOIBJhGIAjBEIA+grIAZAHAq8iBIAAAAIAhAdIAhAdAq8iBQA4g0AOhOArjgyIAOAqIA5A6AqbhkIANBbAo5keQEaA3FRhgQFrhmDiAtIAADzIiWFXIhGChQgVAjApBUQAKATAMAUQAZAsAmA1QAiAtA6gYIARAWQAgAgBGhBQAzAaA0gyQAWgegSgOQBYAIAChpQACimguAQAsQkuQhOBjgwBuIA0BWArjgyIgOgpQAegRAXgVAuCArIAogyIA1BVIBhAZALqGdIBgCTAiKTbQAVhHAvhfQBfjEDOktQA3hMAwhGICbjoAJaGlICFDPAHpHKIB/C1AiKTbQhNgRhNAGQgjADgkAIAiKTbQAoAkgtAPQgbAmBSBgQEPFkEKHqAtVYGQC/CUDVAuQAaAGAZAEAHNIJQgyGRAQJWIAWLyArjgyIAnhPEAB8AtOQAWARAWAPQEQDEEZhBQAcgHAcgJEgElAllQAfCegrGdQgeDkA6BwEgEwA2dQADgFADgFQAphMgUhTQAKAUANAQEgEwA2dQALgBALAAQBsAOBrCjEgF4A3sQAeArAhAnQBcBrB3BPQgNAOgPAOQi2AqgtByQjkAKi6gWQhcgLhTgTQi2gpAWhnQAziQDxAYQAlgIAjgKQC6gyC0hOQgJhJBRgGEAB7A24QAVACATADQBRAIBOAEQGPAVFihgEgFlA+wQgPAlAAAtQARBSETAAQDIAAC8hHQDzhcDejRQCjibCLjH");
	this.shape_288.setTransform(1206.9,581.6);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#ECECEC").s().p("AAVD6QAAgtAOgmQAthxC3gqQFEgCByD6Qi8BHjIABIgBAAQkSAAgRhSgAooB+Qi2gpAWhmQAyiQDyAYQA8BCgSDjQhcgLhSgTgAF1gtQBwiWBIiIQBQAJBOAEQhBCfh1CQQhIgyhYAUgAlcibQC5gyC0hOQAdAqAhAnQi9BPjKAug");
	this.shape_289.setTransform(1167.5,966.4);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#D8D8D8").s().p("AkEBPIAcgcQA6g7Alg8IAggpQA7hNAohSIAnAEQhHCIhwCVQBYgUBHAyQB1iPBBifQGPAUFjhfQiLDHijCaQjfDRjyBbQhzj6lDACgAuFDfQARjjg8hCIBIgSIAkBOQDKgvC+hOQBcBrB4BPIgcAcQi3AqgsBxQhKAEhGAAQiRAAh9gPgAjoAzIAAAAg");
	this.shape_290.setTransform(1219.9,959.7);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#4D83AC").s().p("ADqNTIIqCDQhHAQhGAAQjRAAjMiTgAqfllIhLh3Igpg4QDACUDUAuQkggxA7B9Ig7hfgAjitKQCTgXBLiEQgvBfgUBHQhOgRhNAGg");
	this.shape_291.setTransform(1200.2,789.1);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#86B4D6").s().p("AmReJQghgngegrQgKhJBSgGIAWgBIgRgJQAphMgThTQAKAUANAQQgNgQgKgUQg7hvAfjlQArmcgfieIBRB6QD5GuBKFsIAEARQgwAvAAAqQABAtA3AnQgnBSg7BOIggAoQglA9g6A8Qh4hQhbhrgAibeYQhsijhrgOQBrAOBsCjgADqcUQhPgEhQgIIgogFQg3gngBgtQAAgqAwgvIgEgRQhKlsj5muIhRh6QjwlqiRjoQg7h7EgAvQjVgti/iUIgCgCQgPgHgSgoQgWgxASg4IA8nIQADhMAKg5QAyk8A5j9IAdh4IAPg8IAOg8IAUg+QAviXAShAQEaA3FShgQFqhmDiAtIAADzIiWFYIibDoIhnCSQjOEthgDEQhLCFiTAWQBOgGBNARQATARAAAMQAAAOgYAIQgHAKAAANQAAAnA+BIQEOFkELHpQEjIVBCCYQB5DVBqC0QA1BXgLAPQkkBPlCAAQhFAAhGgEgAJ5U8QAcgHAcgJQgcAJgcAHIoqiCQEQDDEahBgABPS6IgrghIArAhgAnmAdIgzgKIAzAKgAnDnZQAjgIAjgDQgjADgjAIgAAjcDIAAAAgAltY/IAAAAgAiwkgQg+hIAAgnQAAgNAHgKQAYgIAAgOQAAgMgTgRQAVhHAuhfQBgjEDOktIBniSICbjoIhGChQgWAkAqBUIAVAnQgxGQAQJWIAWLxQkLnpkOlkgAjinZIAAAAgAGR3qg");
	this.shape_292.setTransform(1215.7,753.3);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#4A4A4A").s().p("AsacDIgzgLIgmgLIARhWIAQhSIAPhZIARhnIAJg/IALhZQAckIBGsPQBSucDpnRIAAAAIABgCIAQgeQgZhlASgZQBAg9BAg3QEFjgD9iCIATgKQA/gMgHCOQlRDuk0EmIhIi2IBIC2QE0kmFRjuQDpDYB2COQARAWAuBbIAGANQAbA/AMBgQAFApADAvIAAAFQAICkAABUQAABCgCAgIgCARQgCgIAAgJQgUjQgZiIQgJgvgJgnQgUhLgpg9Qgqg8g/guQA/AuAqA8QApA9AUBLQAJAnAJAvQAZCIAUDQQAAAJACAIQAaELAtEuQgRACgqAJQgvABhpALQhoALhDADQhCACh7AUIg/AAQhXmigakPQgLhuAAheQAAiJAXhnQgXBnAACJQAABeALBuQAaEPBXGiIA/AAIBlHCIAASzQjigtlqBmQjYA9jAAAQhuAAhmgUg");
	this.shape_293.setTransform(1229.4,373.4);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#DEB180").s().p("EAI4AlvIgSgWIh+i1IB+C1Qg5AYgigtQgmg1gagrIgVgnQgphUAVgkIBGihICWlYIAAjzIAAyzIhlnBQB6gTBDgDQBDgDBogLQBpgLAvgCIAxGlQAAG7jGRHQADEdgQCbIgJBUIAJhUQAtgQgBCmQgCBqhYgJIhgiTIBgCTIgEAsQg1AygygaIiFjPICFDPQgvAsgeAAQgPAAgKgLgEAKeAlOgEAMJAkKgAvwdGIgLg1IgBgEQgNhNAAhEIAAgNIC4jEQhPBkgvBtIA0BWIg0hWQAvhtBPhkQApg0AygyIBTihIgPBZIgQBSIgRBWIAmALIAzALQgSBAgvCXIghgdIghgdIgBAAQA4g0APhOQgPBOg4A0QgWAVgeARIAOApIAOAqIA5A7Ig5g7IgOgqIAnhPIAhAdIANBbIgOA8IgPA8IgagGIhggaIg1hWIgoAzIAogzIA1BWIhJBGQgKADgIAAQghAAgOgrgAtmcoIBgAaIg9AqgAtmcogAtmcogEgBvggzQgainEJh5QDVhWAaBtQAQBqAsB/Qj+CCkEDhQAJizghiQg");
	this.shape_294.setTransform(1213.4,406.2);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f().s("#000000").ss(2,1,1).p("EARKgjVIABACIgBAAIAUF+IAOBOQAqFsi0UwQAdD0goDKIAAASEARKgjVIAAACQgTARgYAGIA/FnEAIKg7xQA6A+BrBrQDsD2BTDvQBFDtAPH3IAICqEgBEg3yQAFkSgdhAQhHipCnhbQE5imAmDRQAUBaAtBhQgFgBgVAQQjkC6jqCnQgsAegrAeQgXAPgKAfQgOAuAOBTQkaG/gINqIAAKIQgFBOgHBLIksKMQhGAthIBAQgFAEgEAEQhgBYhcBrQgUAhAUCfQAQBEAfgBIA2gSQALAlAjAJQApAHAygHIAZgdIBEAQQAsgDAOgkIAGgOIAihRIgPhcQgwgkgZAXQAGgwAYghQAphDAPhdEAIKg7xQACgOgJgRIgcgzQgUgsgvANEgC8g2IQAkAUAgCDQETiiD2jjIBwhnQAHgJACgLEAFxgysQhyC0DELrIBCEDIA8gOQD5gyDlhyEALog0GQCrBvB6KYIA9EqALZkNIAHCeIjNGaQgcAtAtBIIAoA3IBKBZQAeAjAugmIgDgEIATATQAYAcBKgqQArARAsgiQAOgIgHgOQA2AgAzh/IgWhDQgZgggVAgIAPAhALRmqIAICdQgdA4hoBwIl9LKQh9DliaEWQgDAFgCAEQhLB+AeB1QgIgGgKgEAommCQDjBCDxguQFfhRE5AGQBMACA/ANEAJBggYIBcGAIA0TuAv9h5IAZg6QAgAbAhgBIgyAgIgoAAIgnAAAwDjMIAfAZApniJQAVhQAVhKIAXhfApdmUQAcAKAbAIAqXjUQBUiagagmAnqy9QgnGuheFvQAUAOgCgCAqXjUQgogUgMAfAuJmlQgHA7AGB3IAMArAsUjWQgCAKAAAKIAABaQgOAHgMAEAuWiYQgFgDgIACAwEgIIBVgfQAjgaACgfQAFgvgRgJQAMgoAMgIAtiAJIApgvIAJg3QgtAOgLgrIgWhOAppiAQABgFABgEQgkhGgMgFAregcIBRgeIAkhGQhZFIhbGdQgXCEgUCFQgYCjgUClQgUBqA2ByQAUAngUBaQgaB5BoBiQBMBYBZFmQBOE+BXIQQAbCiAbC2QgyBqBsBkArsUpQBIAlBJAdQDTCiFKgOAM9FcIBxCkQADAEABADAPXFTQgJAYgRAFALJFmICLDIAJgF/IB/CqAhyVcQASAPANAcQASAqgIAeQAFAXAGAZQASBQAcBcQAJAeAJAiQArCHBEC8QB/GdBfGMQAxDMApDHQBOFGAHCOQADAugFAbAJMHXQg2GEgHEOQgDBwACB0QACBKADBLQAHBiAGBnQACAgACAgQAcH9AKJvQAHGbgCHMQgBAygGAlQgKA7gXAaEgMoA95QiJgrAThaQAPgoAdgcQBLhFCtARQAkgJAkgJQBxgeBvgpQAEgBAEgCQAEAEAFAEQAEAEAFADQgFgDgFABQgFACgEAEQgBABAAAAQATgFAXgCQACAAACAAQA/gFBaASQAGABAGABEgFMA40Qg0A7g6A0QgHAHgHAGQg4Axg9AsQgIAFgIAGEgB9A5BQACgCACgDQAPAEAQADQBnAaCHAzQBRAfBcApQBoAvBTAAEACOA+zIGZAAIAAhJQgfg4hWgIIBKgjEACOA+zIEkiJEgJNA8OQAAAFAAAFQgqAdgtAbQgNADgNACQg8AOguAWQh4A4gaBtQgYBoDOAKQCrAKCjgaQDAgeC2hOIDOhh");
	this.shape_295.setTransform(1188.9,587.8);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#ECECEC").s().p("AjmE1QjOgKAYhoQAZhtB5g4QAugWA7gMQg7AMguAWQiKgqAUhaQAOgoAdgbQBLhGCuARQARATALAiQAMAlAEA4IABAKQgqAdgtAbIgbAGIAZAEQAxAJAoAaQAaARAWAZQBGBLAfCOQh1ASh5AAQgvAAgvgDgAgfhNQA8gsA3gwIAPgOQA4gzAyg4IAEgEQASgFAXgCIAFAAQA/gFBaASIAIAHQgvA6g2A2QhhBfh1BRQg5g8hLgYgAgUjwQBvgeBvgpIAHARIgEAEQgyA4g4AzIgRAFIgjAJIggAHgADRkmg");
	this.shape_296.setTransform(1134.7,980.9);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#D8D8D8").s().p("AncBJQgXgZgagRQgogagxgJIACgJQAtgbAqgeIAQgLIgRABQgEg3gMgmQgLghgRgUIBIgSIAkBPIAggIIAjgJIACAJQg3Axg9ArQBMAYA5A9QB2hRBghgQA2g2Avg6IADgEIAfAHQBnAZCHA0QBRAfBdAoQBnAwBTAAIhKAiQBXAJAfA3IAABJImaAAIEkiJIkkCJIjNBgQi2BPjBAeQgfiOhGhLg");
	this.shape_297.setTransform(1182.5,981.3);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#4D83AC").s().p("AkNhJQDyBeEJALQAOgBAIgGIAKAwIgzABQkmAAjCiTg");
	this.shape_298.setTransform(1155.5,734);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#86B4D6").s().p("EAH/AhRIBKgiQADgSAAgaIgBgdQgHiOhOlGQgpjHgxjMQhfmMh/mdQhEi8griHIgTg/QgchcgShQIgLgwQADgJAAgKQAAgYgMgdQgNgdgSgOQASAOANAdQAMAdAAAYQAAAKgDAJQgHAFgOACQkKgLjyhgQhJgdhIglQBIAlBJAdQDTCiFJgOQASBQAcBcIATA/QArCHBEC8QB/GdBfGMQAxDMApDHQBOFGAHCOIABAdQAAAagDASQhTAAhogvQhcgphRgfQiHg0hngZIgfgHIgMgCQhagSg/AEIgEABQgXACgTAFIABgBQAEgFAFgBQAFgBAFADIgJgIIgJgHQhshlAyhpQgbi2gbiiQhYoRhNk9QhZlmhMhYQhohhAah5QAUhagUgnQg2hyAUhqQAUilAYijQAUiFAXiEQBbmdBZlKIACgIIAqiaIAXhfQDjBCDxguQFfhRE5AGQBMABA/AOIAICdQgdA4hoBwIl9LLQh9DlibEWIgFAJQg0BaAABVQAAAiAIAiQgIgiAAgiQAAhVA0haIAFgJQCbkWB9jlIF9rLQBohwAdg4IAHCeIjNGbQgcAtAtBIIAoA3Qg2GEgHEOQgDBwACB0QACBJADBMIANDJIAEA/QAcH9AKJvQAHGagCHNQgBAygGAkQgKA8gXAaQgfg4hWgJgAgll7QgIgHgKgDQAKADAIAHg");
	this.shape_299.setTransform(1181.2,763);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#4A4A4A").s().p("AsdbeQgcgIgbgKQABACgTgOQBdlwAomtQAHhMAFhNIAAqIQAHtpEbm/QgPhTAPgvQAKgfAWgOIBYg9QDrimDji6QAVgQAFABQAvgNAUAsIAcAzQAJARgDAOQA7A+BrBrQDrD2BTDvQBGDsAOH4IAJCqIg9kqQh6qZishuQCsBuB6KZIA9EqIAAACIAAgCIABACIgBAAIAUF8Ig/llQAYgGATgRQgTARgYAGQjlBwj5AzIg8AOIhDkCQh7nZAAj1QAAiPAphCQgpBCAACPQAAD1B7HZIBDECIA8gOIBcGAIAzTuQg/gOhMgBQk4gGlgBRQhiAThgAAQiLAAiGgngAlvyQQEUiiD1jjIBvhnQAIgJABgLQgBALgIAJIhvBnQj1DjkUCiQggiDgkgVQAkAVAgCDIAAAAgANTh0g");
	this.shape_300.setTransform(1213.6,373.3);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#DEB180").s().p("EALyAliIgTgTIADAEQguAmgegjIhKhZIgog3QgthIAcgtIDNmbIgHieIgIidIg0zuIhcl/QD5gzDlhxIA/FmIAOBOQAqFri0UxQAdD1goDKQgJAYgRAFQARgFAJgYIAAASQAVghAZAhIAWBDQgzB/g2ggIgEgHIhxikIBxCkIAEAHQAHAOgOAIQgsAigrgRIiLjIICLDIQgtAZgaAAQgRAAgKgLgEALfAlPIh/iqgEAPmAisIgPghgEANUAlUgEAPXAh5gAvWdMQgjgJgLgnIBVgeQAjgaACgfIABgUQAAgdgNgHQANAHAAAdIgBAUQgCAfgjAaIhVAeIg2AUQgfABgQhFQgUifAUghQBchrBghYIAJgIQBIhABGgtIEsqMQgnGtheFwQAUAOgCgCQAaAmhUCaIgBAAIAAgBQgPgHgLAAIAAAAIAAAAQgSAAgHATQAHgTASAAIAAAAIAAAAQALAAAPAHIAAABIABAAQAMAEAkBHIgCAIIgkBHIhRAeIAihRIgPhcIAPBcIgiBRIgGAOQgOAkgsAEIhEgQIApgwIAJg3IgBAAQgKADgJAAIAAAAIgBAAQgaAAgJgfIAAgBIgWhOIgMgrQgDg3AAgqQAAgxAEggQgEAgAAAxQAAAqADA3IAMArIAWBOIAAABQAJAfAaAAIABAAIAAAAQAJAAAKgDIABAAIgJA3IgpAwIgZAdQgZADgXAAQgXAAgUgDgAr2X+QgYAggGAxIgCAUIAABaQgOAHgMAEQAMgEAOgHIAAhaIACgUQAGgxAYggQAphDAPhdQgPBdgpBDgAvVasIAyggQghAAgggaIgfgZIAfAZIgZA6IgnAAIAnAAgAuWaNQAMgoAMgIQgMAIgMAoIgBgBIgGgBIgBAAIAAAAIgCAAIAAAAIgCAAIgBABIABgBIACAAIAAAAIACAAIAAAAIABAAIAGABIABABIAAAAgArLZcIgCgBIgDgCIAAgBIgCgBIgBAAIAAAAIAAgBIgCgBQgWgOgRgBIgBAAIAAAAQgNAAgKAJQAKgJANAAIAAAAIABAAQARABAWAOIACABIAAABIAAAAIABAAIACABIAAABIADACIACABgEgBcggeQhHipCnhbQE5inAmDSQAUBaAtBhQgFgBgVAQQjkC6jqCmQAFkRgdhAg");
	this.shape_301.setTransform(1188.9,404.8);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f().s("#000000").ss(2,1,1).p("EAI+g91Qg/hpgUhwQgkiji9CDQkWCuA3BsQA7BsAdDNIG7laQArglBACTQA4A7A5A7QCFCMCDCwQBOBrA7DCQADAIACAJQAsCXAPE6IBvFwIhrAyIB0GoQANEVhTHaQhVHXgJCJQgJA9gGCKQALDagJDzIAAAAQgBAggBAhEgAfg2bQgHALAcBcQgNATgMAUQhGBugvB3QhODLgPHRQAAACgJDUQgJC5gCF8QgSAugRAtIAAAAQjNIZhXDGQglBRgYA2QgGANhEB8IkREyIAAClICJAnQAfgIgLgWIBIAeIAoglIAKgKIgWhpQAKgMAKgNIAAAAQBdhyAvh+EAOOg02QBzBIBNDnQACAFACAGICZG2EgAfg2bICiiAEgAfg2bQAWgHBBCxQFEj+EtkYEADBgi6QAVgJATgKQCXhQAmigQAFgVADgWEAH4gyZQhKDYA4D2ID7LdQACACABABQAWAOBHgdIGuiqAgTqpQAKgRAJgQQE4omHAkZQAVgNAWgNAFNp0QAIgPAIgPQCfkqDpi/QAUgQATgPAhy3TQAQAKAPAJQDbCBEXhFQAVgFAWgHAgQxnQAMgOALgNQCgirDAgvQAQgEAPgDAOhkAIAABJIgLAeIioHNIB1DBQAYAUATABQAUAAAOgVQAjAeA1geQAagPADgUQAlAmAugdQAXgMgHgcQAvAiAMgzQAsixg9gKADEWhQAuiaAuiZQBvmAFmplQBfiWAyiSQAQgxALgwAOhmWIAACWANB/6IBCD+QgsIbAyIUQANCDALCDIAAAxAl8i4QDLATI6jfQD0hEEkAyAkJ6BQAAArAAAwQAAAGAAAHQAADdg0FhQgRB3gXCGQgFAcgGAdQgcCjglC6QAAACAAACQgEAPgXB0QAgAFAwAEQhVKmg9MYQhlB7BLCIQANAWASAYAllreIjBDiQgEB9iTCnIAAA5IBDARQAVAfgrARIhLAAAuKjTIgQBKIBMAZIADAZQApANApgNIASh6AtdkNIAPCdAmyWLQALAXALAVQB5DoDyASQAaACAagBAQ8FBIBMByANHFYIBpCdAPRFRIBUCBADEWhQBCDfAeBnQAHAgAAFTQAAEbg3FHQg4FFAAA3QAAAfAkAzIAWAZIBQBcADEWhQgyCaAJEBQACGGiBHjQgrCng8CyQgHAUgHAUEAOHA8+IAAgnQAagUALgjQAWqqAHn0QAEnzgUmfQgTmggYsGEADgAyKQAJANALAOIgVA4IhFCwIgKAZQhZBCh6A0EgCAA/BQAfAUAEh4QAAgQACgPQAFhZALhyQAEgpAEguEAAcAqlQgcCdgTCcQgmEggKEeEAGOA2NQANAUAOATQCuD0DxAWQAZADAaAAEAOHA8+QlbgnlNlMQgdgcgagcQgNAIgLALEgBbA8+IPiAAEgSmA8XQAGAAAFAAEgNCA51QiDB7jWAlQgEAAgHACQiQAWgrBxQgYBkC7BeQCsBTDfgLQD0gLEvh8ICQg7IAAglAooYJIhQR6QgiHki7IHQgBAFgCAFQALgDALAAQAwgCArAJQA1ANA4AjQA3AhAhAWQACACAEACQBaAuArARQAnAPBoA9ICIBP");
	this.shape_302.setTransform(1151.2,591.3);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#2C2C2C").s().p("AGUGsImJHpQCgkqDpi/gAGmAfQmVFfljHfQE5omG/kYgAAVDMIlfDaQChirC+gvgAmlBnQD+A9D0AAQhgAYhaAAQipAAiPhVgABUuUQgmCgiVBQg");
	this.shape_303.setTransform(1185,433.6);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#ECECEC").s().p("Ap7FCQi7heAYhkQArhxCQgVIALAAQD9AKBvDWQAjBQgnBgIg0ABQi/AAiYhJgAlmgTQBvguBThgQA1ANA4AjQA3AhAgAWQhQBaibA7Qg9hThegbgAH/kBQB7g0BZhCQALgLANgIIA3A4QiMByifA2IAIhXg");
	this.shape_304.setTransform(1093.3,978.3);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#D8D8D8").s().p("AqkC+QhwjVj8gLIAAgCQDVglCDh7QAwgCArAJQhSBghwAuQBeAcA+BSQCag6BRhbIAHAEQBZAuArASQAnAOBoA8ICHBPIAAAlIiPA7QkuB8j1AMQAohggjhRgAAuAFQAFhZALhxQCfg3CMhyQFNFMFbAng");
	this.shape_305.setTransform(1137.4,981.1);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#4D83AC").s().p("ADTN5IGgELQjxgXivj0gAAJKiIAWg4IACgCIBQBcQg+gvgqANgAi4BrQgcCcgUCcQgOgVgqA1QA7ixAtingApyyDQCqCaDCBgQjygRh6jpg");
	this.shape_306.setTransform(1172.5,853.2);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#86B4D6").s().p("EgC5Ai1IiIhPQhog9gngPQgsgRhZguIgHgEQghgWg2ghQg5gjg0gNQgsgJgwACIgTgGQC7oHAinlIBQx5QhKiHBkh8QA9sXBVqoQDLATI7jfQDzhEElAyIAACWQgMAxgQAwQgxCShgCXQllJlhwGAIhbEzIBbkzQBwmAFlplQBgiXAxiSIARAGIioHOIB0DBQAYAUATABQAYMGAUGgQATGegEHzQgHH0gVKqQgLAjgaAUIAAAnQlbgnlOlMIg2g4IgPgGIBFiwQAqgNA9AvIhQhcIgWgZQgkgzAAgfQAAg3A5lFQA2lHAAkbQAAlSgGggIhglGQgzCaAKEAQABGHiAHjQgsCng8CxIgNAoIANgoQAqg1AOAVQgmEhgJEdIgJBXQgLBygEBZQgCAPAAAQQgEBngXAAQgEAAgEgDgANBe1IgCAAIAAAAQgWAAgVgCIgGAAImfkLQCuD0DxAXIAGAAQAVACAWAAIAAAAIACAAgAFvaoIgagnIAaAngAhDhYIAGAAIAHgBIgHABIgGAAIAAAAIgBAAIgjgCIgEAAQjChgipiaQB5DpDyARIAEAAIAjACIABAAIAAAAgApDjUQgSgXgNgXQANAXASAXgAnWlUQgLgVgKgXQAKAXALAVg");
	this.shape_307.setTransform(1157,771.7);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#4A4A4A").s().p("AtDdhQgwgDgfgGQAWhzAFgPIAAgFQAli5AcikIAKg4QAYiGAQh4QA0lhAAjcIAAgOIAAhbQADl7AIi5IAJjWQAPnQBPjLQAuh3BHhvIAZgmQgdhcAHgMICkiAIG5laQArgkBBCTIBxB2QCFCLCCCxQBPBrA7DCIAFAQQAsCYAOE6IiZm2IgEgMQhNjmhzhJQBzBJBNDmIAEAMICZG2IBvFvIhqAzImuCpIgBAAIgBABIgBAAIgDABIgBABIgFABIAAABIAAAAIgCAAIAAAAIgBABQgjAMgUABIgEAAIAAAAQgMAAgHgEIAAAAIAAAAIgDgDIj7rcQgZhrAAhlQAAiEAqh6QgqB6AACEQAABlAZBrID7LcIADADIAAAAIAAAAQAHAEAMAAIAAAAIAEAAQAUgBAjgMIABgBIAAAAIACAAIAAAAIAAgBIAFgBIABgBIADgBIABAAIABgBIABAAIBBD+QgrIbAyIUQANCDALCDIAAAxQklgyjyBDQoPDOjVAAQgTAAgQgCgAh5WmIAQgfIgQAfgAhpWHIGInpQjpC/ifEqgAnZVxIATgiIgTAigAnGVPQFjnfGUlfIArgaIgrAaQm/EYk4ImIAAAAgAnXOyIAYgaIgYAagAEfOeIAngfIgnAfgAm/OYIFgjaIAggHIggAHQi/AvihCrgAgnKWIAqgMIgqAMQj1AAj+g9QDcCCEXhFgAoaJZIgegTIAeATgAkFifQAVgJAUgKQgUAKgVAJgAjciyQCWhQAnigQAFgVADgXQgDAXgFAVIi9DwIAAAAgAmOzWQFEj+EtkYQktEYlED+IgBgEIgDgIIAAAAIgEgKIAAgBIgEgIIgBgEIAAAAIgBgCIgEgKIAAgBIgFgNIgBgBIgDgIIgBgDIgLgaIgCgDIgFgLIAAgBQgQghgLgOIAAAAIgBgBIAAAAIgBgCIAAAAIgBgBIAAAAIgCgCIAAAAIAAAAIgBgBIAAAAIgBAAIAAAAIgBgBIgBAAIgBgBIAAAAIAAAAIAAAAIgDgBIAAAAIgCAAIACAAIAAAAIADABIAAAAIAAAAIAAAAIABABIABAAIABABIAAAAIABAAIAAAAIABABIAAAAIAAAAIACACIAAAAIABABIAAAAIABACIAAAAIABABIAAAAQALAOAQAhIAAABIAFALIACADIALAaIABADIADAIIABABIAFANIAAABIAEAKIABACIAAAAIABAEIAEAIIAAABIAEAKIAAAAIADAIIABAEIAAAAg");
	this.shape_308.setTransform(1196.7,383.8);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#DEB180").s().p("EAKlAlFIh1jCIConNIALgfIAAhIIAAiWIAAgxQgLiDgNiDQgyoUAsobIhCj9IGuiqIB0GnQANEVhTHZQhVHXgJCKQgJA9gGCJQALDbgJD0IAAAAIgCBAIAChAQA9AKgsCxQgMAzgvgiIhMhyIBMByQAHAcgXALQguAeglgmIhUiCIBUCCIgdAjQg1AegjgeIhpieIBpCeIgiAUQgTAAgYgUgEALyAlFgAwJb4QAUAGAVAAQAUAAAVgGIASh7IAWBqIgKAJIgoAmgAymbuIAAilIERkxQBEh8AGgNIA9iHQBXjGDNoZIABAAIAiANQAADcg0FhQgRB4gXCGIjBDiQgEB9iTCnIAAA5IBDAQQAUAggqAQIhLAAIAKgJIgWhqIAUgYIAAAAQBdhyAvh+QgvB+hdByIAAAAIgUAYIgSB7QgVAGgUAAQgVAAgUgGIgDgaIgPidIAPCdIhMgYIAQhLIgQBLIBMAYIADAaQALAWgfAIgAwJb4IAAAAgAwMbegAulZ9gEgCSggEQg4htEWiuQC9iCAkCjQAUBwA/BoIm6FaQgdjMg7hsg");
	this.shape_309.setTransform(1170.2,404.1);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f().s("#000000").ss(2,1,1).p("EAyVgy4IBTCCEgRcg9SQhLh0gmhrQg2hqjBBqQkdCuA3BgQBWCPABDRQgyAugyAvQABA7gPA3QgHAZgMAbQktGwA/TSQAAAFAAACQADA0ACA5QAIEZgPFZEgLxgznQBLAiBZEGQA5CnA/EFQAnCkAsDKQgZAXgaATQjSB8kSAcIByFKQgfE4AaN+IAAALEgQTg8GQADADACAEQBcB6B5BsQD9DuAuFXIA5HBEgRcg9SQAGgDAGgEQAwgLANBeEgasg1bQAjAlAYBVQExkvEtjrQAAgHAAgEEgZTg3DQD0jeEDixEgSUgzCQihD5EgL5IBMDrQAYAAAYACA1EqwQARgFAPgGQC9hIAkjoQACgPABgPA+AieQBGgCBVgaIAPgHQDwhRDjhRQDchPB+gTQB9gTAAAAIAAEBIjIFWIAAC5IAIBIIA3AfIA2AcIAJBGA8VnUQANgcAOgcQE1p1IulEQAZgPAagOEgGughyIA/EfQAnHyjgSiIA/H1QAJBZhVASQAEgSACgYEgnAgAmQgIgchIgsIAAhrIBIhMIAAB+IAgAhIAUgcEgnAgAmQAFALgLAJIiigwIAAjuIEilDIGFtXEgnAgAmIBIAWIA5hPIhVhDIAshCIBdhoQBGheALhvIDyk/QgPE4ghFsQA1AYBDgCIjEYKQhrAyAYBrIAaBSIABACIBcE1IAbA2EgnIgElIAlgnEgh9AZbIAAADQAVBDhADgQhNESjNH+QguB0AUA4QAyDCiJBVQhrBNAPBTQAnCog7A9QgnAjgPBMQh2BXixAUQgNACgPAAQizALgYB4QgIBmDCBnQDCBkC3gCQAHAAAGAAQC8gJGtizIAJgEIAAk4QAWgJALgRQAigxg4h1QgUgrBTg9QAugfBGjaQGIweASoSIBEiuQC3DrglF4QhMJGAcFBQACAWACAVQAPDhCFBiIEUC0EggyAYoQA0D5CtBoAsHIKQBZAQAghFQAAgBAAAAQAKgWAEgfAqAHaQA3ACAUg7Au1GfQAAAPAAAOQAAABAAACQAECOBTgGQA7gHAcg2QAQgfAGgwAt/FHIAAB0AsHIKQgEH3BVG5QBmHvgPd5Av0E4ImlQ4A9iyNQGOhzEVk3EgSfAzIQgnAFgNAXQgOAZASAtIgqAuIgrAuQADAIAEAIQAbBEAkA5QA5BZBOA8QC9CQE7gWIgGAlQrDAflhglQlWglgJhiQgBgOAFgPQAFgUAIgSQAyhvC3gCIA5AAIBrgdIEZhLEgTPA0qQBsCBDEB7IAbAQQALAHAMAHEgrZA5IQApACAuAUQA/AYBwBvIClCSQBcBtCUg5EglFAu/QgEATgDATQgoEFDaBkQATAJAUAHEgoyA0YQDeAoBhDYQAHAPAGAR");
	this.shape_310.setTransform(1301.9,592.8);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#2C2C2C").s().p("AHmmjQoDGhlgIYQE1p0IulFgAE5A2QgjDpi9BHQCRhyBPi+gAC+oVQkVE3mNB0QFei2FEj1g");
	this.shape_311.setTransform(1161.3,486.9);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#ECECEC").s().p("AtKEGQjChmAJhnQAYh3CzgLQAPAAANgCQD0BUBYFgIgHAAQi0AAi/hjgAppgxIDLhvQA/AYBvBvIjpBxQg/hdhRgsgAD6hEQgBgOAFgPQAFgUAIgRQAzhvC3gCIA4AAQBEBkgYDVQlWgkgJhigAKZkUIEZhMIATgIQAbBFAlA5IlZAcQgLAAgIhGg");
	this.shape_312.setTransform(1074.3,976.6);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#D8D8D8").s().p("AuEE/QhXlfj1hVQCygTB1hYQApADAvATIjLBvQBQAsBABdIDphxIClCSQBcBtCUg5QmtCzi8AJIgNAAgACmAYQAYjVhEhkIBrgdQAJBGALAAIFYgcQA5BYBOA8QC9CPE7gUIgGAkQk/AOj4AAQksAAjBgVg");
	this.shape_313.setTransform(1117.9,980.8);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#4D83AC").s().p("AHwMxIAqguQBsCBDEB7QiTgqjHikgAtJLxQDeAoBiDYQiJili3hbgApiG+QA9DZB1CQQjbhkApkFgAm+qlQA/jggUhDIABgBIBcE1QhQigg4CPgAlIv+QBaDHCHCaQithog0j5g");
	this.shape_314.setTransform(1124.9,852.7);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#86B4D6").s().p("EgKSAiEIiliSQhwhvg/gYQgugUgpgCQAPhMAngjQA7g9gnioQgPhTBrhNQCJhVgyjCQgUg4Auh0QDNn+BNkSQA4iOBQCfIAbA2Igbg2Ihck0IgBgCIgahSQgYhrBrgyIDE4LQBGgCBVgaIAPgHQDvhRDjhRQDchPB+gTIB9gTIAAEBIjIFXIAAC5IAIBIIA3AfIAAAdIAAADQAECNBTgFQA7gHAcg2QgEH3BVG5QBmHugPd5Qk7AWi9iQQhPg8g4hZQgkg5gbhEIgHgQIArguQDHCkCTAqQjEh7hsiBQgSgtAOgZQAMgXAogFQiFhigPjhIgEgrQgclBBMpGQAll3i3jrIGlw4ImlQ4IhECuQgSIRmHQeQhGDaguAfQhTA9AUArQA4B0giAyQgMARgVAJIAAE4IgJAEQgzAUgsAAQhUAAg9hIgAMXdDIAXAOIgXgOIgbgQgApXclIANAgIgNggQhijYjdgoQC2BbCJClgAMQaJIkUi0gAnXZrQgUgHgTgJQATAJAUAHgAqwTyQgoEFDaBkQh0iQg+jZIAHgmIgHAmIAAAAgAi1CWQiGiZhbjHQA0D4CtBog");
	this.shape_315.setTransform(1132.7,770.7);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#4A4A4A").s().p("As6dIQAhlsAPk4QAPlZgIkZIgFhtIAAgHQg/zREtmwQAMgbAHgZQAOg3AAg7QAxgvAyguQD1jdECixIAMgIQAwgLANBeIAAALQksDrkxEvQgYhVgjglQAjAlAYBVQExkvEsjrIAAgLIAFAHQBcB6B5BsQD9DuAuFXIA5HBQg/kEg5ioQhZkGhLgiQBLAiBZEGQA5CoA/EEQAnCkAsDKQgZAXgaATQjTB8kRAbQgYgCgYAAIhMjqQi4noAAkVQAAicA5hZQg5BZAACcQAAEVC4HoIBMDqQAYAAAYACIByFKQgfE4AaN+IAAAMIh9ASQh+ATjbBPQjjBRjwBRIgPAHQhVAahGACIgKAAQg9AAgxgWgApXYoIAbg4IgbA4gAo8XwQFgoZICmgIAzgdIgzAdQouFFk0J0IAAAAgAiGVMIAggLIggALgAhmVBQC8hIAkjoIADgeIgDAeQhQC9iQBzIAAAAgAqkNvQGOhzEVk3QlED0lfC2gALooWIAAAAg");
	this.shape_316.setTransform(1180.5,388.3);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#DEB180").s().p("EAIzAjPIAAgDIAAgdIA3AcIAJBGIgJhGIAAh0IAAB0Ig3gcIg2gfIgJhIIAAi5IDJlXIAAkAIAAgMQgat+Aek4IhxlJQERgcDSh7IAHAIIBAEfQAnHxjhSiIA/H2QAJBZhVASQAFgSACgYQgCAYgFASQgTA7g3gCIgPgFIAAgBQALgWAEgfQgEAfgLAWIAAABQgfBFhZgQQAPgfAHgwQgHAwgPAfQgdA2g6AHIgHAAQhNAAgEiIgEAOzAixIAAAAgAvWbpQgJgchIgsIAAhrIBIhMIhIBMIAABrQBIAsAJAcQAEALgLAJIihgwIAAjuIEilDIGEtXQAJEZgPFZIjyE/QgLBvhGBeIheBoIgsBCIBVBDIg4BPgAu+aJIATgcIgTAcIghghIAAh+IAlgnIglAnIAAB+IAhAhgEgDBggTQg3hgEciuQDBhqA3BqQAlBrBMB1QkECxjzDdQgBjRhWiPg");
	this.shape_317.setTransform(1150.5,412);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f().s("#000000").ss(2,1,1).p("EAJkg+AQg5hDgbg/QgkiVjQBlQk1CTAtBWQBbCVA2DDQE7kBCEiOQAFgGAFgFQASgYA2BmQAVAogFAYQCeCwCYCcQDeEPANIDQAAABAAAAQACA6gBA8EAASg17QgBACgCABQgPASAeBxQgBAYgXAgQgCADgCADQgCACgBADQAAAAgBABQkwGLAxRaIgCEOIlSNxIkCElIAADYIB1AbIAMADIBZAAIAHgWIAyioQCUiNgTiFIC5kVIgEIJQAAAlAnAPQBnAlFPhGIGzhaQCmgyBVgmQADBDAGBwIjgF2IgUDgIA0AjQgEAlACAdQAEBrBLAAQA7gDAgg0QAJgPAHgTQAGgTAEgXEAASg17QAsAHA7CZQEHjkFGk+EAASg17QBOg+BFg4EAJOgzKQh+E/CsImIByF7QAYAAAaAAQD4gGDoiDIBBD/QAnIqjrSIIAcH5QACBYhVANQAFgSAEgYEAPXgziQCZCBBZHEIAfB1IBkGFQglAagnAWANj1gIADCFQAAABAAABQAEExATH7AMg/qIBKEMQgKBNADDtQAAAgAAAkAHuq6QFZivAcn3ArWhpIg+gZIA+hnIAACAIAAA3Ap2hIIBrhMIg5hcAkD2+IgHKnAliZeIATAcIDmFqIAyBNAliZeQAIAOAIAPQADAZgLA2QgMA6gbBcQhMEEjIISQgbBPAKChQAFBwhgBLIgZAUQh6BiAYCOIASEIQAyAEAwASQBmAjBaBZQBKBKBBBtQAQAWAYAEQAeAFAsgUIAAkkQCwhRg/jgQgRhRBigWQCDgYE72OQAci1Asi1QACgLACgLQAFAGAFAHQCICyAfCiQAaBTASSRQgJBVBOBgQA9BRh8BpAjnjaQgHLJhXOwQhnAoBKCXAMDEqIgGBZIgCAbIAEBIAPKHsQATgMANgYQAAAAAAgBQAMgVAGgfALGF/IA1AfANuH1QA5APAjgYQA0IKBVGnQEgSlgRSvIACAhIigAAIsBAAQh0AGhbgGQjqgPhLhjQg7hoBig5QBfg5CQAHQBBgEA5gJQCvgdBmhQQAfA4AjAzQDWFAFIADQBMABBSgRALEHBQjPHzh0HrAP4HOQA2AGAYg4EALFAwPQAIAPAIANQCRD4DjgZQAMgBANgCEAL5A1VQAPAUAPATQC3DhDjheEgKFAu4QABAXACAXQAbEvELCtQAQAKARAKEgNqA4tQidBZirANQjaAjAyCvQBPDLEcAlQBSALBPgHQDugWDLiz");
	this.shape_318.setTransform(1106.4,597.2);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#2C2C2C").s().p("AC7lSQgdH1lYCwQESjpBjm8g");
	this.shape_319.setTransform(1174.4,493.4);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#ECECEC").s().p("AqQF+QkcglhPjLQgyiuDagjQEGBZBeFsQgdACgeAAQgyAAg0gGgAqGgrQB7gcBihMQBmAjBaBZIkICGQgohihtg4gAEdg2Qg7hoBig5QBgg5CQAHQA5BOgaD2QjqgPhMhigAKukWQCvgdBmhQQAfA4AjAzQiMBQjLAJg");
	this.shape_320.setTransform(1071.3,977.1);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#D8D8D8").s().p("Ay6h3QCqgNCdhaQAyAFAwARQhiBNh7AcQBtA5AoBhIEIiGQBKBKBCBsQAPAWAYAEQjLCzjuAWQhelskFhZgADrAGQAaj1g5hPQBBgEA6gJIAABYQDKgJCMhRQDWFBFJACIAAAQIsCAAQg6AEgzAAQg0AAgugEg");
	this.shape_321.setTransform(1107.3,982.4);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#4D83AC").s().p("AIAMyQC9B/DdAEQhDAbg/AAQiXAAiBiegAuZGbQByEUC0DJQkMiugakvgAG+HhQCtCaDHBFQgUACgUAAQjIAAiEjhgAqYrpQAbhdAMg6QALg2gDgYIADgBIDmFqQi6jiheBeg");
	this.shape_322.setTransform(1134.3,860.6);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#86B4D6").s().p("EgKGAifQgYgEgQgWQhBhthKhKQhahahmgjQgwgRgygFIgSkIQgYiNB6hiIAZgVQBghLgGhwQgJihAbhPQDHoSBNkDQBeheC6DhIAyBOIgyhOIjnloIgSgdQhKiXBngoQBXuwAHrJQBnAlFQhGIGyhaQCmgzBVgmQADBEAGBvIjgF3IgUDhIA0AjQgEAlACAcQjPH0h0HqIgEAWQgsC1gcC0Qk7WOiDAYQhiAWARBRQA/DhiwBQIAAElQgkAQgaAAIgMgBgApNbQIAhAVIghgVQi0jIhzkUQAbEvEMCtgAt0T0IgCguIACAugEAPTAgQQlIgDjWlBQgjgygfg5QB8hog9hRQhOhgAJhVQgSyRgahTQggihiHizIgKgNQB0nqDPn0QAEBrBLAAQA7gCAgg0QA5APAjgYQA0IJBVGnQEgSkgRSwQhPAQhKAAIgFAAgAPAcNQjdgDi9iAQC3DhDjhegAImaKQgPgSgPgVQAPAVAPASgANYYZIAZgEIgZAEQjHhFiuiaQCSD3DjgYgAHjU6IgPgcIAPAcg");
	this.shape_323.setTransform(1130.5,775);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#4A4A4A").s().p("AsFdUQgngPAAglIAEoJIAHqnIABkOQgxxZEwmLIACgBIAEgFIAEgGQAXggAAgYQgdhxAOgSIAEgDQAsAHA7CZQEHjkFFk+QlFE+kHDkQg7iZgsgHICSh2QE8kBCDiOIAKgLQASgYA2BmQAVAogFAYQCeCwCYCcQDeEPANIDIAAABQACA6gCA8Igeh1QhanEiYiBQCYCBBaHEIAeB1IBkGFQgkAagoAWQjnCCj4AGIgzAAIhxl6Qhik9gBjwQAAixA1iHQg1CHAACxQABDwBiE9IBxF6IAzAAIBKEMQgKBNACDtIABBEQhjG9kRDpQFYivAcn3IACCFIAAACQAFExATH7QhVAminAyImxBaQjcAuh4AAQhAAAgjgNg");
	this.shape_324.setTransform(1160.6,387.7);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#DEB180").s().p("EAHNAjZQgDgdAFglIA0AfIACgbIAHhZIgHBZIg2gEIg1gjIAUjgIDhl3QgHhwgChDQgUn7gEkxIAAgCIgCiFIgBhEQgCjtAJhNIhKkLQD5gGDniDIBCD/QAnIpjsSIIAdH6QACBYhVANQAEgSAEgYQgEAYgEASQgYA4g3gGIgNgHQALgVAHgfQgHAfgLAVIgBABIggAkQgjAYg4gPQAIgPAHgTQAGgTAFgXQgFAXgGATQgHATgIAPQghA0g7ADQhKAAgEhrgEAIIAj+IgFhIgAvOblIAAg3Ig9gZIA9hnIAACAIAAiAIg9BnIA9AZIgMA0Ih0gbIAAjYIEBklIFStxIgGKnIi6EVQAUCFiUCNIA4BcIhrBMIAzioIgzCoIgGAWgEgDiggxQgvhWE1iTQDRhlAkCVQAaA/A6BDQiFCOk6EBQg2jDhaiVg");
	this.shape_325.setTransform(1131.1,415.6);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f().s("#000000").ss(2,1,1).p("EAH1g9rQhHiMgfh/Qgeh9ixB5QkfDJAsBYQA7CCADDoQDejPEMitQBIgcAjB0IEOEmQFaGCh2OxQAAAAAAAAQgQCAgYCKIAADEQAADfgfD9QgNBtgTB1QguFzAEEtQgLAlhvAFEgBmg2AIAABTQl4G5AbX/IgFAsQAAAeACAfIjcLhIkVE0IghEUIDJACIBeAAIAGgzIBlgsIAAg/IhCgHIgYgEIAFg9QA7hABSiCQgEAYgEAYQgHAcAaAWQAYATA7AQQBtAaDdACQE0gJFQg7EgBmg2AQA3g5A6g2EgBmg2AQAwgaBCCOIJUoHEANHgz9QCQCMBTQpEAGTgymQhlD7DBO9IA/ABIAyFfQgqC+gYSkQgCA1gMCXIjzDhIg6DNQgGAiBcAnALBHlQAUADAVgNQBegrhFnrQAji8AhhtAPrwuQg7FOhpF8AsVg6IhAAAIA1iFAsnkEIAHBFIALCFIAGBZAqIiGQBehDAnheAnG0MQAFHRhNGyAneYyQAEAigDAzQgEBJgRBtQgEAWgEAYQgvEXh7HmQhZgvAKGGQACAwADA4QBHgpAXhmQADgMACgMAneYyIEoFSIAsAyAlfXsQAGANAGAMQBeCzCmgkQAPgDAQgFAmwkEQguLmAuMjQh3CvA8BqQAGAKAHAKEgEVA5KQAAgBAAgBQAEgRABgQQAAgVgDgUQgEifA0hnQFJnVBBuUIASlZQAIgyAJgwQCJDCAzDLQA4DsBAKZIARDCQAEAjCXC3QgMAiABAiQABAbAKAcIgqBDQAsAaApAhQBIA7BEBRQCVCeErAGQArABAugCIgbmyQAwh6gyguQhMm9h/lUIk+vWQh6mPgZn1AE5DDIAADUIAABtQAiArAzAAIAtg1QALAJAMAGQAvAVAygyQAvA8BGhNQAMAIANACAHOIOQgKAagJAZQiXGxhaHiAqrgUIALh2AIu/tQEPgYDthDIAACYEAV6A63IhZAAIwAAAIg2AAQjCACg4hdQgjhYBOgrQBMgsBmgGICDgSQCbgcCUg5EgM/A2NQAbgFAcAAQDNgXB/CNQBPA9BYAPEgOfA5EQAfAGAcALQBgAhBkA9QBGAuBKA9QBwBgCAgaIgGjlQAHgSAFgRQACgGABgFQABgEABgDEgLuAwnQi1BzAECkIAAEGQheCSjGB6QgWAJgUAIQiQBEAFB6QANB9EBAYQByAKB4gYQCsglC8hrQCLhZBthZ");
	this.shape_326.setTransform(1102.7,599.5);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#ECECEC").s().p("AsYG4QkBgYgNh8QgFh6CQhEQETAUBaExQhUAQhQAAQgjAAgjgDgArSAyQB4hdBIh6QBgAgBkA9QhmB6iFBmQhChehXgIgAFCifQgjhXBPgsQBMgrBmgHQBEAhAPDwIg2AAIgIAAQi7AAg4hcgAKjllQCbgdCUg4QAsAaApAhQiNA4jHAfQgLgjglgag");
	this.shape_327.setTransform(1068.9,983.1);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#D8D8D8").s().p("A0HBQIAqgRQDHh5BdiSQAfAHAdAKQhJB6h4BdQBYAJBBBeQCFhmBmh6QBHAuBJA8QBwBgCAgaQhtBaiLBYQi7BritAlQhakwkTgVgAEHhZQgPjwhEggICEgSQAkAaALAkQDHgfCOg5QBHA7BEBRQCVCeErAHIAAALg");
	this.shape_328.setTransform(1105.3,985.2);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#4D83AC").s().p("AhRPGQiLh9h/gDQDMgXCACNQBNA9BYAPIgBAHIgDALQgFARgIASQh5gUhdhjgAlGF9QAdBABFhnQgXBmhHApIgEhogAhGsEQARhtAEhJQADgzgEgiIEnFSQkZjlgiCegABYw8QB9BvCHAhQgbAGgaAAQiBAAhOiWg");
	this.shape_329.setTransform(1059.9,862.1);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#86B4D6").s().p("Ar9f/QhKg9hGguQhkg9hgggQgcgLgfgHIAAkGQgEijC1h0QBHgoAXhmQhFBngdhBQgLmFBZAuQB7nlAwkYIAHguQAiicEaDkIkolRQgHgKgGgKQg8hqB3ivQgusjAuroQBtAaDdADQE1gJFPg7QgCA0gMCYIjzDiIg5DMQgGAjBbAmIAABuQAiArAzgBIAtg0QALAJAMAFQAvAWAygzQAvA9BGhNQAMAIANACQAZH1B6GPIE+PUQB/FVBMG9QAyAugwB6IAbGyQguACgrgBQkrgGiVifQhEhRhIg6QgpghgsgaIAqhEQgKgbgBgbQgBgiAMgiQiXi3gEgjIgRjCQhAqag4jrQgzjKiIjCQBZniCYmxIASgzIgSAzQiYGxhZHiIgRBiIgSFYQhBOUlKHVQg0BmAECfQADAUAAAWQgBAQgDAQIgBACQhYgOhPg+Qh/iMjNAXIgFAAIAAAAIAAAAQgYAAgWAEIgEABIAEgBQAWgEAYAAIAAAAIAAAAIAFAAQB/ADCMB8QBeBkB5ATIAGDlQgbAGgbAAQhiAAhYhMgAt9R6IAFgYIgFAYgAl3CYIgsgygAk8iJIAfgIIgfAIQiHggh9hvQBeCzCmgkgApAkYIgMgZIAMAZg");
	this.shape_330.setTransform(1126.4,781.8);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#4A4A4A").s().p("ArbcoQg7gQgYgTQgagWAGgcIAJgwQBMmygEnRQgCgfAAgeIAEgsQga3+F3m5IAAhTQA4g5A6g2QDfjPEKitQBIgcAjB0IEPEmQFZGCh2OxIAAAAQgQCAgYCJIAAiXQhTwpiQiMQCQCMBTQpQjsBDkQAXIg+gBQiAp1ABlEQAAioAihWQgiBWAACoQgBFECAJ1IA+ABIAyFfQgpC+gYSkQlPA7k2AJQjcgChtgagAkezfIJSoHIpSIHIgDgFIgBgCQg2hvgqgCIgBAAIAAAAQgIAAgHAEQAHgEAIAAIAAAAIABAAQAqACA2BvIABACIADAFIAAAAgAK/P+QguFzAFEtQgLAlhwAFQBpl8A7lOgAL+gbIAAAAg");
	this.shape_331.setTransform(1132.6,390.2);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#DEB180").s().p("EAERAlIIAAhtIAAjUIAADUQhcgnAFgiIA6jNIDzjiQANiXACg1QAYykApi+IgyleQEQgYDshDIAACYIAADDQAADfgeD9QgNBtgUB1Qg7FOhpF8QggBtgjC8QBEHsheArIgpAKQgMgCgNgIQhFBNgvg8QgzAygvgVQgLgGgLgJIgtA1IgCAAQgyAAghgrgAs3djIgHhaIgLiFIgGhFIAGBFIg0CFIA/AAIAHBaIjJgCIAhkVIEVk0IDcrhQAEHRhMGyIgJAwQgGAcAaAWQgnBeheBDIgYgEIAEg9QA7hABTiCQhTCCg7BAIgEA9IAYAEIBBAHIAAA/IhkAsIALh2IgLB2IgHA0gAs+cJgAt9cJIA0iFIALCFgAtJaEgEgBbggVQgshYEfjJQCwh5AeB9QAgCABGCLQkLCtjdDPQgEjog7iCg");
	this.shape_332.setTransform(1106.7,413.5);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f().s("#000000").ss(2,1,1).p("EAGbg+hQhEiJgiiIQgYhkkNC+QjYCEAwBVQAgA+AHCHQACAZAAAdQABAXgBAYQAAAUAAAUQAJgHAKgHQDqixENi1QAlgiAcA/QAjBLgRAHIBmBnQFDEuBFEiQABAEABAEQAaBxAIC1QAAABAAAAQAMEHgcGYQAAAAAAABQgWFTgyG4QgHA/gEBEEgDag35QAXgMAJAaQgHASgGAjQgCAMgCAPQgDARgCAVEgCug3+QgGADgGAQEgDag35QAxgwA6gsEgCug3+QARgMAugjEgDHg22IhNBAQAohxASgSEgCug3+QAOANAqDDIJkoEEAG7gz7QiiCWA9KtIAZF6IA9AAQDigOEaghIAALMIAAAwQgFAngGAsEANFgzOQAnAqAZBGQAmBqAGCrQAEBfgHByIAfILIglAAAOUzyQAEgWAFgWAHKgeIAAhKQBOijBEiTQA7AHA/ARAOUzyQgCG2g5HiQhBgahCgSAJcmeQDyodBGk3ApgvtIh1FvIjqFoIAABVIgJAVIAACXICrAzIAag8IBQAAIAHggIBEgmIAAgtIgwgHIAah6QAPAWAuALQB8AaFZhEIAhgIQBlgJDlhRQgRBXgSBaIkNE3IgsClIBPB0ApgvtQgHC7gKC6QgKCjgMCiQgCASALAPAupj6IgWA5ApBjxQgBBIgBBHQgFHwALGZQACEVAzCqQACALACALQANBgg3BBQgXAkAGA0QAGBCA1BdIgDATIgKBOQgPBsgTByQg8FghmGdIACEOQACBIhKBCIg1A0QgtAngHBiIAAE2QgjBkk+C4QgJACgHAEQgIACgJAFQibA/AACFQAECOFgAAQB+gFB6glQBVgaBTgpQDlh0DHisIAWm/QAGiqBMh4QCAkFBKmUQAMg+AKhCQAbixATjKIEZLvQBIDjDMCAQgDATADATQgIAXABAXQABAdAQAbQhBgJAKA0QAjAqAlAjQBLBIBUAyQDnCHEygjEgDLg2bQmYG5AQQoQAHHngUHmAgODpIAACbIgNAeQgBBrCahHIABgEIC3ABQAEAxAGAxQAzGmCjGvQAPAnAQAoQAOAZAOAZQB+DnBhDqQBaDTBlCwQAkA9AlA6IEZHOIAACZQBKDgAHD3QgQACgNACAsDgeIhgg2IBeiqgAoQaMQAFANAEAOAE2HDIiOMaQgBBQgCBNQgCBBgCBAQgHDPgPC8QgCAngEAnAE2HDIBqgNQAugagEg9IAAl9QCxifBbjJEAGsgg+QAED6AnFMQhZHbh/KgAqsg+IAUhaEAKFAzdIkiB7IhVAiQilAJhNBXQhlC4GqATQACAAAFAAQADAAADAAIAGABQADAAADAAIAfABQDVAGD+gRQD5gREgglQAWg5gWglEgDxA9JQjJAXi+iMQhUg+hpggIhPgbEgT1A99QAIABAHAA");
	this.shape_333.setTransform(1095.6,603.1);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#ECECEC").s().p("Aw2FvQAAiGCag/QAJgEAJgCIAPABQF4AjApELQh6Alh/AEQlfAAgEiNgArRCBQCQhXB2iNQBpAhBUA+QhwB2imBfQhRhEhcgMgAGGj+QBNhXCmgJQBDApAPECQmrgUBmi3gALNmBIEjh6QAiApAlAjIk3B9QgCg5gxgWg");
	this.shape_334.setTransform(1059.4,983.2);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#D8D8D8").s().p("A06CUIAAgIQE+i3AjhkIBPAbQh2CMiQBXQBbANBRBEQCnhfBwh3QC+CLDJgXQjHCsjlB0QhTAphVAaQgokLl4gigAFEhDIgfgBIgGAAIgGgBIgGAAIgHAAQgPkBhEgqIBVgiQAwAVADA5IE3h8QBLBIBUAyQDnCHEygjQAWAlgWA5QkgAmj5AQQi9AMinAAIhvgBg");
	this.shape_335.setTransform(1104.1,985);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#86B4D6").s().p("AuHf+QhUg+hpghIhOgaIAAk2QAGhiAugoIA0g0QBKhBgChIIgCkPQBmmdA8lfQAUhzAPhsIAKhNIACgTQg0hdgHhCQgFg0AXgjQA3hCgOhgIgEgWQgyiqgCkVQgMmYAGnyIABiPQB9AaFYhDIAhgJQBngJDlhQIgjCwIkPE4IgrCmIBOB0IgMAeQgBBrCbhHIABgFIC1ACQAFAwAGAxQAyGnCjGvIAfBOIAcAyQB/DmBgDqQBbDTBlCwQAjA+AlA5IEZHPIAACYQBLDhAGD2IgcAFQkzAjjmiIQhVgxhKhJQglgjgjgpQgLg0BCAIQgRgbgBgdQgBgWAJgXQgEgTAEgTQjNiAhHjkIkZruQAFgnACgoQAOi6AHjQIAEiAIADidICNsaIiNMaIgDCdIgECAQgHDQgOC6QgCAogFAnQgSDJgcCxQgKBCgMA/QhKGTiAEFQhMB4gHCqIgWG/QgdADgcAAQirAAijh3gAC78+QBPikBEiSQA6AGBAASQhcDJixCfg");
	this.shape_336.setTransform(1122.7,778.1);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#4A4A4A").s().p("Ar/daQgtgLgQgWQgLgPADgRQAMijAJiiQALi7AHi6QATnngGnmQgRwnGYm5IAFgcIhOBBQAphxASgSIAAgBQAHgDAFAAIAAAAIABAAQALAAAGAPIABAAIAAACIAAgCIgBAAQgGgPgLAAIgBAAIAAAAQgFAAgHADIAAABQAxgwA6gsIgBAoIATgPQDriwEMi2QAlghAdA+QAiBMgQAHIBmBnQFCEuBFEiIACAIQAaBxAJC0IAAACQALEHgbGXIAAACQgXFSgyG4IAArMIAmAAIgfoKQAEhMAAhDIgBhCQgGisgmhqQgahGgmgpQAmApAaBGQAmBqAGCsIABBCQAABDgEBMIAfIKIgmAAQkZAhjjANIg9AAIgYl4QgRi8AAiTQAAmHB1huQh1BuAAGHQAACTARC8IAYF4IA9AAQAED7AnFLIjXR8QjkBQhnAJIghAJQj5AxiGAAQgzAAgjgIgAkzziIJkoDIpkIDQgrjDgNgMIA+gvIg+AvQgHACgGAQQAGgQAHgCQANAMArDDgAmO0pIAFglIgFAlgAmE1qQAGgjAGgSQgGASgGAjgAIZbGQhAgSg6gGQDyodBFk4QgCG2g4HiQhCgahBgRgAlr2xIAAAAg");
	this.shape_337.setTransform(1114.6,390.6);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#DEB180").s().p("EgAKAkcIALgeIAAibIAACbIhNh0IArimIEOk4IAjiwIDXx8QgnlLgEj6QDjgNEZgiIAALMQgGA/gFBDIgJAsQhFE4jyIdQhECShPCkIAABKIAAF9QAFA+guAaIhrANIi2gCIgBAFQg+AcglAAQg3AAABhAgAu3djIAAiWIAJgWIAVg5IgVgcIDploIB2luQgHC6gLC7QgJCigMCjQgDARALAPIgaB7IgUBZIAUhZIAwAGIAAAuIhEAlIgGAhIhRAAIgCjhIheCqIBgA3IgaA9gArzdbgAtTckIBeiqIACDhgAhe7bIAAgwIgCg2QgIiHggg9QgvhVDYiFQENi9AXBjQAjCIBDCJQkNC1jpCxg");
	this.shape_338.setTransform(1094,411.7);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f().s("#000000").ss(2,1,1).p("EAFGg//Qgpg6gbhkQgPhNhtAyIkACEQiLBPAoBjQAMAoAIAmQADAQACAQIAAAAQAOBkgdCIQgDAQgEARQAOgQAPgMQFdjaCmkCQAIhPBMDJQC8C3BZBxQBXBlAwBuQCqFShpPWQgoFfgPE9QgWHzisJQEgDyg3oQAHgLAIgKQAEgFAFgFQAtgvBeDTQGWlXBTjLEgE+g0zQAUhHAZg0QAPghAQgZEgDJg80Qg2AJhkC2IgpBIIiYEBQjEFLgXG8IgbNWQgUGZhqHfQgtCYg+DBQAcAmAkAgQgBABAAABQAAABAAABQiCLhAjNBQACCzCOBbQC7COCUC1EgGMg4tIgSBHQBoi+BEC8EAHTg2FQkcBPAJNbIAAEaIArANQD1BHEMgcEALqg0gQBtBtgsLhIAAAAQgJCRgKC2IgsACAvDm4QAAABABABQACACACABQCoCLDxgNIhMAnIg9DAQAMA0AzAOIhZCTQAEBEBEAHIAlgUIgHAEQgJATALAJQAQAUBQgLQALgCALgFQBVA7BNg/QAzBFB9iYQA5irAYkCQA9hKA6hMQEXhHCzBHIgJAmIlLVnQg5D5gEFDIJvL5QBGBTBgAaQAnATAJA3QAJA0BSA/QASAOAWAPQBKAlAaBPEADrgi0IAAINQiqD3hsFyQiSGsiFD2IjjBnApbC+IAtgZQAGgDAHgFQAVgRAXgfAnqDgQA7gTAyg9ApgDeIAdWGQAAAegBA9AlIDcQAegYAcgsAHxmUQB/AlAOgUAH6m6QA7AYBJAfAopiEIhGB4AAwm6QF7n6D9phIBEp0EAGnAvyQg5BzhDBnQgjAwgjAuQimB+AqCBQApBXDch6QAagPAbgQQHMkSFdniIg3gwQj9DcmCBDQg2AJg5AHgEABZAoYIERD7QBIBYgLCHABpYPQgDClALC6QAHGLgfEfQgcELg5CwQhhC6AhDVQAIAdADAYQAPBlg9ATQhwgihOhDQgOgMgNgOEgMDA5SQArgIAsACQBmAEBZA9QA8AnAuAuQBzBYCFAAEgMDA5SQAyhXgUhXQgnjuBIhEQBEg2AIg9QAuq2AGqKEgBfA4PQABA6AAAuQABDNgegNQgJAAgHADEgMDA5SQh0CgixCCQhvAsglBcQguBxBiA7QAzAcBQAFQCtATDRhZQDnhiEVjn");
	this.shape_339.setTransform(1080.6,607.2);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#ECECEC").s().p("AqqJyQhRgFgygcQhig7AuhxQAlhcBvgsQEvgEByETQisBJiTAAQggAAgfgDgAofDeQB2heBXiKQBnAEBYA8QhJCViUBXQhchThTAPgAHDgtQgpiBClh+QBwAEBOC5Ig0AfQiBBHhDAAQgxAAgRgkgAKFmKQBEhnA5hzQA4gHA3gJQg9CVhiB8QgdgngwAAg");
	this.shape_340.setTransform(1045.9,974.3);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#4D83AC").s().p("AhfhlQBPBCBuAiIACBnQiJhEg2iHg");
	this.shape_341.setTransform(1061.6,967.3);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#D8D8D8").s().p("Ax5HSQCxiDBzifQAsgJArACQhXCMh2BeQBTgQBcBTQCUhXBJiVQA8AnAuAvQB0BXCFAAQkVDnjnBiQhykTkvAFgACTh4IBGheQAwAAAdAoQBih9A9iVQGChDD9jcIA2AwQldHinMESQhOi5hwgEg");
	this.shape_342.setTransform(1088.7,956.3);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#86B4D6").s().p("EgG4Ag1Qgugug8goQhZg8hmgFQgsgCgrAJQAyhXgUhYQgnjtBIhEQBEg3AIg9QAuq1AGqKIABhbIgd2FQAQATBQgLQALgCALgEQBVA7BNg/QAzBEB9iXQA5itAYkBQA9hKA7hNQEWhHCzBHIgJAmIlLVpQg5D4gEFDIJvL4QBGBTBgAaQAnAUAJA3QAJAzBSA/QASAOAWAPQBKAlAaBPQj9DcmCBEQg2AJg5AGQALiHhIhXIkRj7QAajtAAk2IgCiIQgIiWgBiJIABg/IgBA/QABCJAICWIACCIQAAE2gaDtQgcEKg4CxQhiC5AhDWQAIAdAEAYQAPBkg+ATQhvgihPhCIgbgaIAbAaQA2CHCKBFQAADNgegMQgJAAgHACQiFAAhzhXgAvIkwQiOhcgCizQgjtBCCriIAGABQCpCMDwgNIhMAmIg9DBQANAzAyAOIhZCUQAEBEBEAIIAlgUIgHADQgJAUALAJIAdWFIgBBbQiUi0i7iOgAqV3OIAAAAg");
	this.shape_343.setTransform(1085.9,778.2);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#4A4A4A").s().p("AuLbxIgEgDIgCgBQgkghgcglQA+jBAtiZQBrnfATmZIActVQAXm7DElMICYkAIAphJQBki1A1gJIAGAfIAAABQAOBjgdCJIgIAgQAOgQAPgLQFejaCmkCQAIhQBMDJQhTDLmXFYIgCgGIgFgKIAAAAIgBgDIgBgCIgBgCQhEiTgpgDIgCAAIAAAAQgJAAgIAIIgBAAIABAAQAIgIAJAAIAAAAIACAAQApADBECTIABACIABACIABADIAAAAIAFAKIACAGQGXlYBTjLQC8C4BYBxQBYBkAvBvQCrFShqPVQgoFegPE9QgVHzitJRQhIggg8gYQizhHkXBHQF8n6D9pgIBEp0IAsgCIASk9IAAgJIAAgBQANjVAAigQAAmLhOhOQBOBOAAGLQAACggNDVIAAABIAAAJIgSE9IgsACQkMAcj1hHIgsgNIAAkZIAAgyQAAssEThMQkTBMAAMsIAAAyIAAEZIAsANIAAINQiqD2htFzQiRGsiFD2IjjBnIgoABQjXAAiaiAgAjf0JQgYA0gVBHQAVhHAYg0QAPghARgZQgRAZgPAhgAlr1BIACgEIABgBIAAAAQAyhaAqAAIAAAAIAAAAQApAAAhBWIABABIAAABIAAACIABAAIABADIAPgUIAIgLIgIALIgPAUIgBgDIgBAAIAAgCIAAgBIgBgBQghhWgpAAIAAAAIAAAAQgqAAgyBaIAAAAIgBABIgCAEIAShGIgSBGgAIjcQIAJgmQA8AYBIAgQgEAHgTAAQgiAAhUgZgAKwciIAAAAg");
	this.shape_344.setTransform(1075.5,385.9);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#DEB180").s().p("EgH7AjIQA6gTAzg9QgzA9g6ATQgLAFgLACQhRALgPgUIAEggIglAUQhEgHgEhEIBaiUQgzgOgNg0IA9jAIBNgnIDjhnQCFj2CSmsQBslyCqj3IAAoMQD1BHEMgcIhEJzQj9Jhl8H6Qg6BMg9BKQgYECg4CsQh9CYg0hFQAfgYAcgsQgcAsgfAYQgnAhgqAAQgnAAgpgdgEgIyAiEIgNAJIguAZIAugZIANgJQAVgQAXgfQgXAfgVAQgAqAfbIBFh4gAjk5AQAdiIgPhkIAAAAIgFggQgHgmgMgoQgphjCMhPIEAiEQBsgyAQBNQAaBkAqA6QimECleDag");
	this.shape_345.setTransform(1082.3,404.8);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f().s("#000000").ss(2,1,1).p("EAIKg/BQghiEAAh3QgLinlSDqQiiBsATDSQAEAqABAVQAICmgXBnQAAABAAABEAIKg/BQADgKABgJQAbgQAcA6QAhBGAEBCQBpA1BYBLIC1CbQFVE/h7I3IhXJKIglAAIhvJdQgJAPgGAPEgAKg3vQB6hHBYDqQE0kiBui0EgDMg4+QABgBABAAQAlgUAmBIIhlBUQAGh5ASgOgEgBXg2mQAmgxAjgVIABgBIADgCQHtkyAnigEgDKg4/QBXhrB1hSEgCkg0pQAohMAlgxEgIpglnQAhq3AtjFQAfiSCsiYQARgOAzgjEgB/g4LQAUAmAUA/EgIpglnIgJApIhXGsQhtDdisL5QAAABAAAAQgEAQgDAQQgEANgDANIhPFbQiZCJgNA+IALA/IAbCbEgIpglnQgCAUAAAWQgPDmgYDMQgWCygdCeQhIFjiAEwQgPAjgNAhQhQDCgQBMQgGAeADALIAUAWQgWBegUBgQgMA1gLA1QgGAegGAdQgGAggGAfQgGAigGAiQgFAdgFAbQhcIBgnHqQgbDwCbDFQEiGYElH1IALAPQCNEACVC9QgND1gYCYQgQBTguAYQgRALgHAWQi9CHAEBnQALBXC1hBEALWgzrQhzCUg7KbIgnERIAsAOQDwBIEhAOAydh7IAegKQAkAVAVgfQAHgLAGgQIAAgcIAAhjQAuABApgxAyakgIg/DAQAYAtA1AZQAfAPAggPIAmAhEAItgidIhHHOQiuD2hVCmQhVCmg1BgQg0BdluGuIlABxIhIBTIgsAuQggBGAgAwIg2BBQgjBjCLgsQgeBuCOgWQAABiCLg2QAJBcB+haQAUgYASgYQgWDyALDnQAPFIAuGTQAPB0AEBxQAAAHAAAGQAAA5gCA7QgIBUAnBUQAAARAQBdQAPJAgUF8Au4oXQBmBmCBBTAqdkuIhgB0Aw5jGIBAgpAxNgaIA8hbAiei2QAwhZAehVII2oXQFDlACXkRALsmfQA5gCAjAIQAtgcBLwXAiei2QEUAUGljAQB8g9BVAAIiuR2QhCF5ANJcQAUGJgyGYQgqFLhXFXQgEALAAALQAFgBAFgCQDhg7DAiLQALgykxm9AjeW6Ij4k6QgogyA1isQA0ivBnkGAkjAUQBMhlA5hlAjBbWIEED+IAXAWEgFTA6xQAegSAyATQAyAIB9BFQAiAMB3B1QB5B2Cfh2IAEgEQgciXAnjYQgNALgRAHEgExA0ZQgRApAPBPQAJBOAAA+EgFTA6xQAlgwAEhkEAFjA0QQDsiDDeihIgcgwEAFmAyFQgUBIARBDQAJAjASAjQA6B/hMA4EgKbA/GQjABVAHB6QAjBrDWACQCAACCFgeQFKhPFpkXEgKbA/GQARgBAQABEgFTA6xQhyCQi1B4QgRAGgQAH");
	this.shape_346.setTransform(1035.4,599.1);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#ECECEC").s().p("AiGH0QjWgCgjhrQgHh6DAhVIAhAAQDYAMBLEUQh9Adh3AAIgQgBgAgTCKQB3hgBtiFQAyAIB9BFQhlCLioBoQg9hOhJgNgAgVkGQgEhnC8iHQgRApAPBPQAJBOAAA+QhNAcgvAAQg9AAgGgyg");
	this.shape_347.setTransform(988.5,984.5);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#D8D8D8").s().p("ArTF1IAAgNQC1h4ByiQQAegSAyATQhtCGh4BgQBKANA8BOQCphpBliLQAiAMB4B1QB4B2Ceh2QlpEXlJBPQhLkUjZgMgAEMnLIAKgDQDig7DAiLIAcAwQjeChjsCDQgRhDAThIg");
	this.shape_348.setTransform(1044.4,965.6);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#4D83AC").s().p("AhygQQgQhdABgRIEDD9Qirh/hJgQg");
	this.shape_349.setTransform(1029.1,786.8);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#86B4D6").s().p("EAEUAivQh4h2gigLQh8hGgygIQgygSgeARQAlgwAEhkQAAg9gJhPQgPhOARgpQAHgWARgLQAugYAQhTQAXiZANj0QALjaAAkbQAAjSgGj2QBJASCsB+IAXAXIgXgXIkFj9QgfhFAAhGIABgdQACg7AAg4IAAgNQgEhygPhzQgumUgPlHQgEhOAAhPQAAibAPihQBMhnA4hkQEVATGljAQB8g9BVAAIiuR3QhCF6ANJcQAUGIgyGXQgqFMhXFWQBXlWAqlMQExG9gLAzQjACKjhA8IgGgUQgEALAAALQgUBIARBEQAJAjASAjQA6B+hMA5QgNALgRAGQARgGANgLQgnDYAcCWIgEAFQhQA7hGAAQhGAAg8g7gAkJJyIgLgPQkln2kimXQibjEAbjwQAnnqBcoBIAKg5IAMhEIAMg/IAMg8QALg1AMg1QAUhgAWheQBmBnCBBTIgsAuQggBFAgAwIg2BCQgjBiCLgsQgeBwCOgWQAABiCLg3QAJBcB+hZQAUgYASgYQgPChAACbQAABPAEBOQhnEGg0CuQg1CtAoAyID4E6QAAA4gCA7IgBAdQAABGAfBFQAAARAQBcQAGD2AADSQAAEbgLDaQiUi+iNj/gAgPkWg");
	this.shape_350.setTransform(1014.7,773.6);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#4A4A4A").s().p("AkleQQAwhZAfhVII2oXQFDlACWkRQhKQXguAcQgjgIg4ACQhWAAh8A9Ql+CukGAAQgbAAgagCgAw/YvIgTgWQgDgLAGgeQAQhMBPjDIAchDQCBkwBIljQAdieAWiyQAYjLAOjmQAAgWACgUQAhq3AujFQAeiSCtiYQARgPAzgiIABgBIABgBIAAAAIABAAQAHgEAIAAIAAAAIAAAAQAcABAcAxIAAABIACADIAAABIAAAAIABACIgBgCIAAAAIAAgBIgCgDIAAgBQgcgxgcgBIAAAAIAAAAQgIAAgHAEIgBAAIAAAAIgBABQBYhrB2hSQAICmgYBnIgBACIAAAAQgjAWgmAxQAmgxAjgWIAAAAIAEgCQAdgRAbAAQBYAABCC0QE0kiBui0QBpA1BYBLIC1CbQFUE/h6I3IhYJKIgkAAQkhgPjwhHIgtgOIAnkRQA7qbB0iUQh0CUg7KbIgnERIAtAOIhHHNQivD2hVCmQhVCmgzBgQg1BdluGuIlBBxIhIBTQiAhThnhmgAkqziQAohMAlgxQgUg/gUgmIhmBUQAGh5ATgOQgTAOgGB5IBmhUQAUAmAUA/QglAxgoBMgAhY25QgbAAgdARQHtkzAnigQADgJAAgJQAcgQAbA6QAiBGAEBCQhuC0k0EiQhCi0hYAAgAHk7bIAAAAg");
	this.shape_351.setTransform(1048.9,387.2);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#DEB180").s().p("EgGCAiLQiLA2AAhiQiOAWAehvQiLAsAjhjIA2hBQgggwAghGIAsguIBIhTIFAhxQFumuA0hdQA1hgBVimQBVimCuj2IBHnNQDwBIEhANIhvJdQgJAPgGAPQiXERlDFAIo2IXQgeBVgwBZQg5BlhMBmQgSAYgUAYQg+AsgiAAQgiAAgFgugAqveOIBgh0gEgP/AguIA8hbIgMBEIgKA5gEgQ+AguQg1gZgYgtIA/jAIAbCbIgbibIgLg/QANg/CZiIIBPlbIAHgaIAHggIAAgBQCsr5BtjdIBXmrIAHABQgODmgZDLQgVCygeCeQhIFjiAEwIgcBEQhQDCgQBMQgGAeADALIAUAWQgWBegUBgIgDAEQgnAsgrAAIgBAAIAAAAIgBAAIAABjIAAAcQgFAQgIALIAAABIAAAAIgBABQgMAQgRAAIAAAAIgBAAQgLAAgOgHIAAgBIgBAAIgeAKIAegKIABAAIAAABQAOAHALAAIABAAIAAAAQARAAAMgQIABgBIAAAAIAAgBQAIgLAFgQIAAgcIBAgpIgMA7IgMA/Ig8BbQgQAIgQAAQgPAAgQgIgEgP/AgugAvreCgAvrcfIABAAIAAAAIABAAQArAAAngsIADgEQgMA1gLA1IhAApgABA2mQAYhngIimQgBgVgFgqQgTjSCjhsQFSjqALCnQABB3AhCEQgoCgntEyg");
	this.shape_352.setTransform(1027.6,387);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f().s("#000000").ss(2,1,1).p("EAAcg9WIACiVQgHhuDtg9QDbhOAyAkQAACJAuBQQBAABARCZQDJCmEZDRQEaDPhrMdIg7FIIhCAAIiAJJQgPAfgSAhQjpGin/HPIjaDPQg7CfhnCFQFegRE6ikQB/g0BvAHIgEAeQBZAEAGgTICDyREgCYg6sQAmhJBUg9QAFgEA1ggEgCYg6sQhNA0hQA+QglAdgmAgQgDACgDADQgBABgBAAQgEAEgDAFIguAvIgdAqQhiCXg1EXIhRIVQAUArApASQAoARA6gHQgeJ5mASPIAXAeQABADACACIACACQgCACgCALQgEAPgLAjQgyCqgoDAQgLA2gLA4QheHjgtJtQgjDOC5DvQC/FmCkKmQAsDkCcCiIgDFEQhvBZikBKQgwAUhDAYIhcAaQimAuAHBbQAEBcCZAAIC5gEIKNgUQAAALAAALQAlAAAeAGQBQAUBOAwQAhARAjAbQC1B8C3gWEgCYg6sQAjgNAwA7QAuBAAzBuIBliUQBFAFA5ChQEPizCCjcEgCYg6sQgRBIAEBIIBghiEgGAg39IgPAPEAAcg3QIAAmGEAPTg1pQjYB9gnGaIhDKDIAhAIQC4AmE6gBEACBg5kQF/jNA/i2EgFlg2hQiqEQgRLSQAAAagDAaEgKFgmVIgwDVQisD9juUOIjuFUIBNEMICBAAIAAgeIAAgfIg1AAIAAjVIAuCsIA/AAIAAi8QBahGAlhiAxvhzIBdhCEAKygjHIhPHJQjfEdizFqQiwEniwDCQgHAHgGAIIlxB/IiFCZAqjilQhVgWAGg9IBghvAqjilIC5i+AulpeQACADADADQBoCECmBtAmlStQhVBziZBMQgTAJgUAJAqjilQgHBQBrAAQAHBVBogYIAhgYQAJA5BZgWIAugVAMlmXQAwACArANAhhi1QghAsgnAnIh2BAQAlBsAaC1QAEAbAEAdQAhEHAMGQQASJsBXCQQAQAaASALQAJAGAJAHQAAABAAABQABAYAAAaQAAAUABAXQAABggGB/QgBAfgCAhQgCAcgCAeQgaFWhCIPQgPB1gJCmAmlStQA3AmgYBHQBlDBBlDvQBICsBIDEQALAgAMAgAmlStQgQgVAQhlQAgjRCtorAgOb8QAAAAABAAQCkBRC1DcQASAVASAXAMhl5IikT3QgrHrgEFzQgCChAFCJQAFBaACBUQACA/ABA8QAGIJhWEKQgwCdAoBcQAhBHgJC2QgGBxgXCbAmvgwICfhxAo/hVIDAibEgH1AycQAwAGAuANQAVAGAUAHQB1AoBsBQQgGB2AACOQAAANAAANEgH9A+BQiaBTAJCdQAZBTCrAHQCsAHCNgiQE0h1Fbj3EgH9A+BQAJABAJABEgCTA5oQibCOi8CAQgLAFgIAGEgHyAtYQArAtA0Ao");
	this.shape_353.setTransform(1018.6,605.1);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#ECECEC").s().p("ABKIXQirgHgYhTQgJidCYhTIATACQEcAbA9ESQh0AciJAAIg7gBgAC8CoQCbhtBtiAQBQAUBPAwQhWB+i3CBQg8hEhegSgApiilQgGhbCmguIBbgaQBYALAEDwIi5AEQiZAAgFhcgAjzl0QCjhKBvhZQAwAGAuANQiJByisBKQACgfg9gNg");
	this.shape_354.setTransform(965.4,981.5);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#D8D8D8").s().p("AksDTIABgMQC8iBCaiNQAlAAAeAHQhtCAiaBtQBeARA7BFQC3iBBWiAQAhASAjAaQC1B8C3gVQlbD2k1B1Qg8kSkdgbgAq8lEQBDgYAwgTQA9ANgCAeQCthKCJhxIApANQB1AoBrBQQgGB2AACOIAAAZIqMAUQgEjwhXgLg");
	this.shape_355.setTransform(999.5,981);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#4D83AC").s().p("ACXEtIgBgrIgBgyIABgCQClBRC1DcQknjTgyAFgAkBn6QgQBlAQAVQhVBziZBMQCyicA8idg");
	this.shape_356.setTransform(1002.2,763.3);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#86B4D6").s().p("EAFdAhnQgjgbghgRQhPgwhQgUQgfgGglAAIAAgWIAAgaQABiOAGh2QhrhQh1goIgpgNQgugNgwgGIADlEQiciigtjkQikqni/lkQi5jwAjjNQAupuBenjIAWhuQAnjAAyiqIAPgyIAJgHQBoCDCnBuIhgBvQgHA9BVAWQgGBQBrAAQAGBVBpgYIAhgYQAJA5BZgWIAtgVQAmBtAaC1IAHA4IgHg4Qgai1gmhtIB1hAQAognAggsQFfgRE7ikQB+g0BvAHIgDAeIilT4QgqHrgFFyQgCCgAGCKQAEBaADBUIADB7QAGIIhWELQgwCdAnBcQAiBHgKC2QgGBxgWCbQgbADgbAAQicAAiahpgACxI9QgaFVhCIQQgQB1gICmQAIimAQh1QBCoQAalVIAEg6IgEA6gAjJU2QgzgogrgtQArAtAzAogAi7lcQBlDBBjDuQBJCsBIDEIAXBAIADhAQAGiAgBhfQAzgFEnDSIAkAtIgkgtQi2jbilhRIgBAAIgRgNQgSgLgQgaQhYiPgSpsQgLmRghkGQisIqghDSQg7CciyCdIgoASIAogSQCZhNBVhyQA3AlgYBIg");
	this.shape_357.setTransform(998.4,770.6);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#4A4A4A").s().p("Ah8Z1IDZjPQH/nPDpmiIiDSRQgrgNgwgCQAwACArANQgGAThZgEIAEgeQhvgHh/A0Qk6CkleARQBoiFA7ifgAxeX2IgFgGIgCgCIgDgFIgXgeQGAyPAep4Qg6AHgogRQgpgSgUgrIBRoVQA1kXBiiXIAdgqIAugvIAPgQQAmgfAlgdQBQg+BNg0QgOA6AAA5IABAdIBghiQAuBAA0BuIBliUQBEAFA5ChQEPizCCjcQDJCmEZDRQEaDPhrMdIg7FIIhCAAQk6ABi4gmIghgIIBDqDQAnmaDYh9QjYB9gnGaIhDKDIAhAIIhPHIQjfEdizFqQivEnixDCIgNAPIlxB/IiFCZQimhthoiEgArelwQAAAagDAaQADgaAAgaQARrSCqkQQiqEQgRLSgAH0h4gAg84VQF+jNA/i2QBAABARCZQiCDckPCzQg5ihhEgFgAkD4vIhgBiIgBgdQAAg5AOg6IABAAQAGgCAGAAIAAAAIABAAQAbAAAiAnIABABIABABIAEAFIACACIgCgCIgEgFIgBgBIgBgBQgigngbAAIgBAAIAAAAQgGAAgGACIgBAAQAmhJBUg9IA7gkIAAGGQg0huguhAg");
	this.shape_358.setTransform(1037.6,392.4);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#DEB180").s().p("EgFiAg5ICfhxIifBxIghAYQhoAYgHhVIDAibIjACbQhrAAAHhQIC5i+Ii5C+QhVgWAGg9IBghvICFiZIFxh/IANgPQCwjCCwknQCzlqDfkdIBPnIQC4AmE6gBIiAJIIghBAQjpGin/HPIjaDPQg7CfhnCFQghAsgnAnIh2BAIguAVQgZAGgSAAQgwAAgHgpgEgSjAgUIhNkMIDulUQDu0OCsj8IAwjVQAoARA6gHQgeJ4mASPIAXAeIADAFIACACQgCACgCALIgPAyQgyCqgoDAIhdBCIAAgfIg1AAIAAjVIAuCsIA/AAIAAi8QBahGAlhiQglBihaBGIAAC8Ig/AAIguisIAADVIA1AAIAAAfIAAAegABp7tIACiUQgGhvDsg8QDchOAxAkQAACIAuBRQg/C2l/DNIhlCUg");
	this.shape_359.setTransform(1010.9,389.7);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f().s("#000000").ss(2,1,1).p("EAJPhANIgViAQgNgthcAcIjmBSQiQA6AUBaQAHAZAEAcQATB+g4B8Qg5B7AEA9IBnhWQBwhgAngBQBeAwAaCvQDPjhCKjyQDLCoDRCQQEtDcgCFoIgfMLIgkABIhcKaQgqCQiFCqEAJPhANQAkALAWAIQAsASA6BsEAJjg+NIgUiAEAJjg+NQAog2gJgkEAACg8iIBWg7IAigmEgCWg5/IAAAAQA2hGBihdImfEdQhiBCgyBZQheC1h8M7QAeAWAhANQBMAcBagREgCWg5/QAWgGAmAuEgCWg5/QgiAdgSCIQAwhMBAgxIB6CGEAPyg0OQhbBtgJDrIgyK/IAsABQEBAfDqgdEAEeg6IQD5ihBMhkAql06QAqisAgizIAyoxQAAhDADg/EgHYgzjQhBB4gNMfA0TkcIAcBHIAzCBIDCAAIAAg0IhxghIgliHIAYgpIANCwIBMAAIAyjTQAhixgYibQAJhBCsj/QADgGAEgGIAAAAQBXiTA0iTEgLMglXIg1FYQjGFDjhPGIioGjIBLCDAsxp7QgcgjgUglQA2iWAvidQAAgBAAAAQACgHACgGQAsiYAnieAmklcIAJASIhTBxIA3BKIAGAJIApgsIBUBvIACADIAagYIBgA/IAagaIByAcICPiAIAyhgICAj/QJJoDEKknAmklcIgagyICQijIGOh2QDFjpCUkGQC1lkD0kdIAmnfAknnpIh0CfAsxp7QB/ClEOB6Asxp7QhFEdguEaQg7FmgWFgQgnJyAaBiIAuD2QA/FIAPJ2QhzAWBzCvICYCkIAcAgAhjCZQhxHViQImQgaChAaDUIBzSIQAHAqgsBMQgeD9A7ExQAcBVgnASAOfnuQABAJgDApQgSEIiwYvQgRFmA9G0QA/JEiFFqQgsBpAuB8QAnBtg/AdIAAFcACVj3QFHghFmi2QAygZApgHIACAAIBgAAIBpsyAP/nuQAJAmhrAMAhyAYIAPCBICaU+QgaCHBVBrQABAkABAeQAAACAAABQACA5ACA8QANHRgPJZIAAACQADBbgfBDQgTAmgdAfQg+BMgQAyQgYBKBKAJIgKBcIgSChQAmAAAoAEQB4AQBNApQBSAsAlAYQDGBoBpg7AiegzICMiJAmIiyICpi3AkYhYICoiWABybJIDeDLIAsAoEgObAy7QhYBWiJA1QgkAOgoAMQgdAKgaALQjLBTAYCDQAcCaFbg6QAygIAvgJQEUhVCGg5QCFg5C3ghIAAgWEAAOA1jQA9gtBIAtQB1BKD7guEgFpA95QgEACgEADQhQAwgYBFQguCSEGAiQD3AQCohKQASgIARgJQCyhcChh6ICXh4EgEWAsHQgWAnglAyEgOGArPQACA7AAApQABBggIB5QgGBNgJBXQgBAGAAAFQAIgEAJgFQBXgqBhAhQATAGAUAKQBBAeBIBCQCbB2CDANEgFpA95QANgDANgCEgAOA5gQiHCXi8B1QgMAHgMAG");
	this.shape_360.setTransform(998.7,610.4);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#ECECEC").s().p("AFWIFQkGgiAuiSQAZhFBPgxIAJgEIAZgFQDqgmEEEeQiMA+jBAAQgoAAgrgDgAHACZQCFhfBTh3QB4APBOApQhCB2icBmQhKgyh2gMgAtahWQgYiDDMhUQCegeCGFEIhgAQQhfAQhHAAQi9AAgVhvgAojlbQCIg1BYhWIASgJQBXgqBgAgQh/B6jHBhQgqgxg5gMg");
	this.shape_361.setTransform(938.7,985.1);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#D8D8D8").s().p("AglDpIgBgIQC6h1CIiVQAmAAAoADQhTB4iGBeQB3AMBKAzQCchmBBh3QBSAsAlAYQDHBoBog7IiXB4QihB6iyBcIgjARQkEkejpAlgAvUkVQAZgLAdgKQAogLAlgPQA5ANAqAxQDHhiB/h5QATAHAUAJQBBAeBIBCQCbB2CCANIAAAWQi2AiiFA4QiFA6kVBTQiGlCieAeg");
	this.shape_362.setTransform(968.9,982.7);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#4D83AC").s().p("AFiNXQiEhIgWBrIALhcQA9gtBIAtQB1BKD7guQhzBChkAAQhMAAhDglgAq/DuIgChkICXClQhphgg0D4QAJh5gBhggAE9rBIgEh0IAAgEIgChCIDeDMQishTgsBBg");
	this.shape_363.setTransform(979,873.3);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#86B4D6").s().p("EAGzAiNQglgYhSgsQhNgph4gPQgogEgnAAIASihQAWhsCEBIQCdBVDJhxQj7Ath1hJQhIgug9AuQhKgJAXhKQAQgyA/hNQAdgeASgmQAghDgDhcIAAgCQAPpZgNnRQAshBCsBTIAsAoIgsgoIjejLQhVhsAaiGIia09IgPiBIAPCBQhxHViQIlQgaCiAaDTIBzSIQAHApgsBMQgWAoglAyQAlgyAWgoQgeD9A7EyQAcBVgnARQiDgNibh2QhIhBhBgfQgUgJgTgHQhhgghXAqIgQgCQAJhYAFhNQA1j4BoBgIAdAfIgdgfIiXilQhzivBzgWQgPp2g/lGIguj3QgahiAnpyQAWlgA7lnQAukZBFkeQB/CmEOB6IAJARIhTByIA2BJIAHAKIApgtIBUBwIACADIAagYIBgA/IAagaIBxAcICQiBIAyhgQFHggFmi2QAygaApgGIACAAQABAJgDApQgSEHiwYwQgRFlA9G0QA/JFiFFqQgsBoAuB9QAnBtg/AcIAAFdQgmAVgyAAQhYAAh/hDgAjfSzIAAAAg");
	this.shape_364.setTransform(993.2,772.4);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#4A4A4A").s().p("AgUaMQJIoDEKkmIhpMyQAJAmhrALQADgogBgJIBgAAIhgAAIgCAAQgpAGgyAZQlmC2lGAhgAxbYHQgcgjgUglQA2iWAuidIABgBIADgNQAtiXAnifQAqisAgizIAyovQAAhEADg/QhaAShMgdQghgNgegWQB8s6Bei2QAyhZBihBIGfkeIBXg7IAigmQATB+g4B8Qg5B8AEA9IBnhXQBwhgAngBQBdAxAaCuQDPjhCKjyQiKDyjPDhQgaiuhdgxQD4ihBMhkQAog1gJglQAJAlgoA1IgViAQAlALAVAIQAtASA6BsQDLCpDRCPQEtDdgCFnIgfMLIgkABQjqAekBggIgsgBIAyq+QAJjsBbhtQhbBtgJDsIgyK+IAsABIgmHeQj0Eei1FjQiTEGjFDpImPB2IiQCjIAaAyQkOh5h/imgAtQjJQANseBBh5QhBB4gNMfgAkJ1NIh7iGIgDgEIAAAAIgCgCIgBgCIgBgBQgZgcgSgEIgFgBIAAAAIgFABIgBAAQA3hFBiheQhiBeg3BFIABAAQgiAdgSCJQAwhNBAgwgAJehzgAnA38IAFgBIAAAAIAFABQASAEAZAcIABABIABACIACACIAAAAIADAEQhAAwgwBNQASiJAigdgAnA38g");
	this.shape_365.setTransform(1028.5,392.5);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#DEB180").s().p("EgCvAgtICMiKIiMCKIgaAaIhgg/ICoiXIioCXIgcAVIhUhvICpi3IipC3IgwAjIg2hKIBThyIgJgRIgagyICQikIGOh2QDFjpCUkGQC1ljD0keIAmneQEBAgDqgdIhcKZQgqCQiFCqQkKEmpJIDIiAD/IgyBgIiPCBgAmscVIB0ifgEgTVAgMIgziCIgchHIAcBHIgOAGIhLiDIComjQDhvGDGlDIA1lYQBMAdBagSQgDA/AABEIgyIwQggCygqCtQg0CThXCSIAAABIgHALQisD/gJBCQAYCbghCwIgyDUIhMAAIgNixIgYAqIAlCHIBxAhIAAA0gA0IeKgABE4pQA4h7gTh/QgEgcgHgZQgUhaCQg5IDmhSQBcgcANAtIAVB/IAUCAQhMBlj5ChQgnABhwBfIhnBXQgEg9A5h8g");
	this.shape_366.setTransform(1000.4,396);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f().s("#000000").ss(2,1,1).p("EAKgg/jQgDhcAHhhQADgvhDAOEAMMg9oIHcFOQEXDCAIHAIAAKUQgHAHglAFIgYHrQgUFEkcGQIAAAAEAKgg/jIgBAAIABAAQAtgsA/CnEAKlg+JQAkg/gpgbIAAAAEAKlg+JQgEgsgBguEAE+g40QAYgbAcgVQD0i5A/hsEABHg9HQAWgdA6gbQgMAhgLAnQghBvgbCeQgCgHABAZQAEBtA/A7QBAhaB4hqQAVgOAWACQBEAIBTChQD2jsAWjlEACgg+5QgiDwg6CfEAQSgjXQDVgKD0gXEAP2gztIAcQWIAAHNQA0hEAzgYEABHg9HQiVBrjUBbQjjBxhPEXQAAABgBABQgVBLgKBXQgrELh4FhQAeAeAnAYQBRAuB4AJQgJEkgECiQgEChgDAaQgEAugCAsQh2EviHEKQh6DugnBiQgZA9gMAnQgbBWAbBNIAbA6QAJAVgJBwQgJBvgSA1QggAXgmgeQgThPgTgpQgHgRgIgKQgMgSgMgCEgH1gzgQgNILgHFZEgLNgg+QBzAjBEBlA1bjGIgdhiIDCl6QC0waDGlnIBqmQA1bjGIAwAzIB2BfICEhGIAFg7A0rjTIAABAA1bkBIAAA7Ax7i7IAphyAyXi7IAcAAIAcAAAxhlIQgcAqgaBjQgEARgFASAoj6hQg5FqiyK/IA5A+Qh/JMhRWOQgBABAAABQghAzANA8QAEAVAJAVAusY9QABADACADQgBgFgDgDQABABAAABgAAXkgIgHAGIiKB2QAAA3AyARIBIgWQgNBDBUAXIAkgYIBlhCABFlKIgdAbIgRAPArVo6QErEqG2gQQAGAAAFAAIgLgNIgogwICPiXIE0hGQCukDBejnQDpo+B2ioAAMktQANgBAPgBAJEktQAdgFAdgGQABgBACAAIAAAAQDkgxCshSIBUgwIAupNAJEktQAFgOAGgPQAOgmAOgoQFbmVBqiJQBeh7AFgIABrgwIBDAzQAQgDAOgFQA/gXAigmADMgFQBZBOCXifQBahfAuh4ADZaUQgCgLADgJQACgJAGgHQASg9gSibQAAgJgCgLQh+yChEjjIlyWgQgyCbgaPYQgGA9gOAxQgOA2gRAdIhEBiIgjAxEACyA1uQhAhgBNhdQBwh0ALhZQABnHgTmtQgFhtgGhrQgCgkgCg0QAAgUgBgWQgBgLgFgjIg5hUIE4ECIAuAmAFtZmQALAOAKANQCCCjCkhnAQRm8Ih1S9QgeFmAQIfQAFCnAJC4QADBaAABaQgBHQhIG+QgeCOBBCUQAhBTguA3QgNANgPALQgWAQgYAKQgOAFgPADAAAhyIBWgzEABHg9HQhcBzhGEtQA0ihBqAwEACyA1uQAIAMAKAMQArA0BGAzQAMAJANAJEADEA4DQAchSgcgrQgKgMgIgMEADEA52QAjgPAyAHQBDAKBlA5QBIAqBVA/QCWBRB4hnIAAisIAAiFEAC+A4WQACgKAEgHQAAgBAAgBEAC+A4WQACgLAEgIEADEA52QgOg9AIgjEAEUAzxQAEAJADAIQBbDRDzgKQASgBASgCEADEA52QhyCbi3B6QhzAlgNBuQgOBtCsAqQCrArDehIQEahcEQk4EgQCAwAQg/grASixICDznEgQ8AzjIgRhVQgJglAVglQATgiAsgiQALAHANADQAqAIA2gOQACgBADAAQAXgHAYgKEgQ8AzjQA7gFAQAFQBBAGA0AYQBlAsA0AwQBeBpCJAAEgQZA7zQAAAAAAAAQheA2ijgGQjRgHgbhkQgEhiChhNQB0g0C5jyEgHTArzIgJBrIgMDuIgUF6EgQZA7zIAQgFEgQZA7zIAAACQAHgCAJgFQAGgCAHgCQCqhKFWja");
	this.shape_367.setTransform(979,608.4);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#C2894C").s().p("AhHEQIh+jNIhLh4IATh6QANhOBFgeIBngRIBOAEIAfAFQA/AJAvAPIANAFIAUAJIAEACQAQAIANAJIAUARQAJAJAIALQAKAQAGARIACAHIAAABQACATgJAlIi5FzQgjAegnAAQgkAAgpgdg");
	this.shape_368.setTransform(1014.8,199.2);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#ECECEC").s().p("AHbHhQisgqAOhtQANhuBzglQE7gGBtETQiMAth4AAQhGAAhAgQgAJlCJQCEhqBTiEQBDAKBlA5Qg6BniKCMQhWhKhlACgAr3BPQjRgHgbhjQgEhiChhNQETgLA9D0IAAAAQhUAxiLAAIgigBgAqTkHQB/hxBGh4QBBAGA0AYQgyCZidBmQg0gpg3gLg");
	this.shape_369.setTransform(924.3,988);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#D8D8D8").s().p("ACZDPQC4h6BxiaQAkgPAxAHQhSCEiEBqQBlgCBWBKQCJiMA6hnQBIApBWA/QCWBRB4hnQkRE4kZBcQhtkTk7AGgAxqiyQBzg0C6jyQA7gFAQAFQhGB4h/BxQA3ALA0ApQCdhmAyiZQBlAsA0AwQBdBpCKAAQlXDaipBJIgOAEIgPAFQg9j0kTALg");
	this.shape_370.setTransform(953.5,985.6);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#4D83AC").s().p("AONOYQAYgKAWgQQAPgLANgNIAACGQgZhUgxAAgAEvMZIAAAAQArA0BGA0QhagUgXApQAchRgcgsgAGGKVQCnCLCnA8IgXAAQjhAAhWjHgAmnEnIgDgdIgCgiIBEhhIgJBqIgMDuQgfhQgLhogAuXGTQALAHANADQAqAIA2gOQhOAohpAYQATgiAsgigAGEssIgBgqQgBgLgFgjIg5hUIE4ECQiyhphGATgAHtvqQCXBFCPgKQg/Aog7AAQhcAAhQhjg");
	this.shape_371.setTransform(968.3,875.3);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#86B4D6").s().p("EAJ+AiZQhVg/hIgqQhlg5hDgKQgygHgjAPQgOg9AIgjQACgKAEgHIAAgCQAXgpBaATQhGg0grgzIgSgYQhAhgBNhdQBwh0ALhZQABnHgTmtIgLjYIgEhYQBGgTCyBpIAuAmIgugmIk5kCQgBgLADgIQACgJAGgHQASg9gSibQAAgJgCgLQh+yChEjjIlyWgQgyCbgaPXQgHA8gNAyQgOA2gRAdIhEBiIACAhIADAeQALBoAfBQIgUF6QiJAAhehpQg0gwhlgsQg0gYhBgGQgQgFg7AFIgRhVQgJglAVglQBpgZBNgnIAGgCQAWgGAZgKQgZAKgWAGIgGACQg1AOgqgIQgNgDgLgIQg/gqASixICDzmIADAFQgBgEgDgDQgJgWgEgUQgNg8AggzIACgCQBR2OB/pNQErEqG2gQIAEAGIiKB2QgBA3AzARIBHgWQgOBDBWAXIAkgYIBDA0IAegKQBZBPCXifQBZhfAvh4IA5gLIAEgBIAAAAQDkgxCshSIh1S+QgeFmAQIeQAFCmAJC5QADBagBBaQAAHQhIG+QgeCOBBCUQAhBTguA3QgNANgPALQgWAQgZAJQgNAGgPADQAPgDANgGQAyABAZBTIAACsQhDA5hNAAQg8AAhCgjgAFud+IgZgSIAZASgAKJdHIAkgCIgkACQing7iniLQBbDRDzgLgAE7aBIgHgRIAHARgAoaUFIAjgxgALIA8QiPAJiXhFQCCCjCkhngAGiAAIgVgaIAVAag");
	this.shape_372.setTransform(975.8,774.9);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#4A4A4A").s().p("AxMZMIg5g+QCyq/A4lrIAHhZQADgaAEihIANnGQAGlYANoLQgNILgGFYQh4gIhRguQgngYgfgfQB5lhArkKQAKhXAVhLIABgDQBOkWDkhxQDThcCXhrQAWgcA5gbQgLAhgMAmQggBwgbCeQgCgHABAYQAEBuA/A7QA/haB5hrIACgBIAAAAQAQgKARAAIABAAIAAAAIADAAIACAAIACAAQBCAIBUCgQD2jrAWjlIHcFOQEWDBAJHBIAAKUQgHAHglAEQj0AYjVAJIgcwWIAcQWIAAHNQh2CnjqI/QhdDmivEEIkyBGIiQCWIApAwIAAAOIgtABQmZAAkckbgAnT0gIACgEIAAAAIAAgCQAph2BHgBIAAAAIAAAAQAVABAYAKIABAAIgBAAQgYgKgVgBIAAAAIAAAAQhHABgpB2IAAACIAAAAIgCAEQBGktBeh0QheB0hGEtgADYc7IAbhNQFcmVBpiJQBfh7AFgIIguJMIhUAxQisBSjkAxIAAAAIgEAAIg5ALIALgdgAgN25IgCAAIgCAAIgDAAIAAAAIgBAAQgRAAgQAKIAAAAIgCABQAXgaAdgVQDzi5A+hsQAlg/gqgbIAAgBQAugsA/CoQgWDlj2DrQhUighCgIg");
	this.shape_373.setTransform(1016.5,390.2);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#DEB180").s().p("EACbAhSQA/gWAigmQgiAmg/AWIgeAJIhDg0IBlhCIhlBCIgkAYQhUgWANhDIhIAWQgygRAAg3ICLh3IAHgGIARgOIgcABIgpgwICPiWIE0hGQCukEBejmQDpo/B2ioQA0hDAzgYQgzAYg0BDIAAnMQDVgJD0gYIgYHrQgUFDkcGQIAAABQgFAIheB7QhqCJlbGUIgcBOIgLAdQguB4haBfQhlBrhJAAQgkAAgegagAgxfmIBWg0gAgIcpIAcgbgA1cfFIAAhAIAABAIgwg0IAAg6IgdgnIDBl7QC0wZDHloIBqmOQBRAuB4AIIgNHFQhEhkhzgjQBzAjBEBkQgECigDAaIgGBZQh2EviHEKQh6DugnBiQgZA+gMAmQgbBXAbBMIAbA7QAJAVgJBvQgJBwgSA0QggAYgmgeQgThPgTgqQATAqATBPIgFA7IiEBGgAzIecIgJAkIAJgkIAcAAIAcAAIgcAAIgcAAQAahjAcgqQgcAqgaBjIAAAAgAysecIAphyQgIgQgHgLQgMgRgMgDQAMADAMARQAHALAIAQgAzIecgAAS3AQgBgYACAHQA6ifAijwIB+DNQApAdAlAAQAmAAAkgeIC4l0QAKglgCgTIgBgBIgBgHQgGgRgLgPQBEgOgDAuQgHBiACBbIAAAAIAAABQACAuAEAsQg/Brj0C5QgcAWgYAaQh4BrhABZQg/g6gEhug");
	this.shape_374.setTransform(983.9,394.8);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f().s("#000000").ss(2,1,1).p("EAHQhAEQAggnBTCwIIdFFQElCxAaGYIBkK0Ig8AVIAdG0QAUEpk8TQQAGDwgRDvQgYA3hIgLQg/Bihcg/IgyAcQgHJyAjJyQBpIUhcQrQgPB2BPBvQAwBVg9BgQgLAPgNAPEAC/g5fQDPh0A9iDQAjhbgehTEgAug4xQAsBZBkBiIBdjpQBigNB6DNQCIjYAgkEEAPDg0fQhrCtB6OnIA1AAQD3gcDJg9EAHGhA3IAKAzEgBRg/SIAmjEQACgDABgEEgBRg/SQgNBEgDA9QgJCoA8B4EgC+g9UQABgBACgBQA6iDAwAHEgC+g9UQiIBqi0BQQlmCdg4FmQg5GihaE8QAWATAnAUIhKEyQjGDoikUYIhgGeIA3A7IAwCeICQAAIA/hNIBKlFIhZjlQA0jCB2kCQDamwC3o9QAAAGAAAJQgCF5ifKnIiLG2IBIAhQEmByE5A4QIHBeI7hEIh+BtIglCdIAYASIA5ApIgjAVEgC+g9UQhBCVAGDwQCMjCA/BgEgKBg0nQgnH1AEH0QAACWAECXEgPugmSQCIBFDCAPA0FhVIggAsIgYgcIAAjUIA4AlgAg+gkQABAAABABIABADIAJAqIjMLpIhCDwIhkFqIhNEbIgsEBQg0EcAJEkQANCDhwD0QgVAsgYAwAuEoLQgdCNggF7QgHBUgHBhQgHBagHBlQgZFpgbHvQgEDzgOgKQghAWgGDEQgLC4goEkQg5GJgCEeQg7BOAuBRIAAGGQjCDdgmCNQgcBiAyA+QBVBICmgFQCHgLBVhVQA5g5AjhZQAnh8BXhgAzMg2Ig5gfAwDYHQAMCICrg1AvJVnQgICJEigqEAQHgjLIAlGCQgCAHAAAJQAEgGAEgGQAyhLAzgsAQq85QgsEbgWMUIgYEkIizCfALLhvIAABtAKSgrIgdCpIBLBTIBXgsQAuBRA/gjAgyAKIE3VlQARBrgLApQgZBGAcA8QAOAdAbAbQAHAHAIAIIElCqIAmAXAFGbMQAGA8AFA8QADAjADAjQA6KpgQH1QgPBggsBgQgEAKgDAKQgdBeBQAmQALAFANAEIgJBDIgNBYQAfAAAeAHQBIAPBpBDQAYAQA0AwQB/BRChghEAGKA2JQA9g5CCA5QCmBhCNg7EAAlA95QgMABgLABQigBDAEB6QgCBeDvAHQCDAICfgwQD/hQFDjlIALhTIASldEAF0A4kQixDAifCOEgTFA00QA7g4BQgJQBKgLBPAyQAuAcATAQIB6BtEgTFAuuQARAeAjAhEgKrAsgQgVDLAVCWQAWCihRCQ");
	this.shape_375.setTransform(969,609.9);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#C2894C").s().p("AhHEQIjIlFIANhdIAFgdQAOhOBFgeIBmgRIBOAEIAfAFQBAAJAuAPIAMAFIAVAJIAEACQAPAIAOAJIATARQAYAXAKAeIACAHIAAABQADATgLAlIgcA4IicE7QgjAegnAAQgkAAgpgdg");
	this.shape_376.setTransform(990.8,199.2);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#4C82AC").s().p("ADdEuQARhVAGghQAMhCAFg1IALhsQAGhAAXiBIAzkeQACgLAFgDQAGgEANAFQAiAOAwAYIACABIAAAEIAAgEIAFADIgFABQgXADgXgGQgagGgUgQQgHBKgZCAQgbCQgHA7IgNB8QgNB8gdCaQgNBLgjCqIhjFqgAnFkZIAai0QAdjKAYhiQAUhQAEgeQACgRAFgIIAOAMIiJMaIANi/gAEBsfIACgIIAdAFIARACQgIAEgKABIgDAAQgKAAgRgEg");
	this.shape_377.setTransform(916.7,655.9);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#ECECEC").s().p("AIKHVQjwgGACheQgEh6ChhEIAXgBQCggDB5CjIBDBcQiHAphzAAIgogCgAJcBwQCJh8B3iQQBIAPBpBDQhdBtirCdQhUhGhVgKgAvsB2Qgyg9AchhQB2hXCMAYQDCApApCYQhVBViHALIgTAAQiYAAhQhEgAs/jXQA0hvB8iOQBKgLBPAzQg5BOhbCjQhpgthMARg");
	this.shape_378.setTransform(926.3,988.2);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#D8D8D8").s().p("AItFmQh4ikihAEIAAgIQCfiOCxi/QAeAAAfAHQh3COiJB9QBVAKBUBHQCrieBdhsQAYAQA0AvQB+BRCighIgLBTQlDDlj/BQgAu8hUQiLgYh2BXQAmiNDBjdQA8g4BQgJQh9CNg0BwQBNgSBpAtQBbijA5hOQAuAcATAQIB6BtQhXBggnB8QgjBYg5A5QgpiXjDgqg");
	this.shape_379.setTransform(945,986.3);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#4D83AC").s().p("AKtfjQjYhEgRA5IAKhDQA8g5CCA5QCnBhCNg7Qg9BFhYAAQg5AAhFgdgAGVFQIgLh4IEkCrQi7hbheAogAu/ATQBNBQBpADQgvAPgkAAQhaAAgJhigAuGiMQBTBSDIANQhEAKgzAAQipAAAFhpgAjMsFQAciaANh8IANh9QAIg6AbiQQAYiBAHhKQAUAQAaAHQAXAGAWgDIAJAqIjLLpgAt933QAgl7AciNQEnByE4A5IAAAAIAfAFIgBAJQg9gKhZgDQhjgDgygCQhWgFg/gNQhPgRg9ghIgNgLQgGAIgCARQgEAdgUBQQgYBigdDKg");
	this.shape_380.setTransform(962.2,762.3);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#86B4D6").s().p("EAMbAgWQg1gwgYgQQhohDhIgPQgfgGgeAAIAMhYQARg6DYBEQCuBKBlhyQiOA7imhgQiCg5g9A5QgNgEgLgGQhQglAdheIAIgVQArhgAQhgQAPn0g5qqIgGhGQBegnC7BaIkkirIgQgOQgbgagOgdQgcg8AahGQALgqgShrIk41kIgJgrIAFgBIgGgDIgCgBQgvgYghgOQgNgFgGADQgFADgCAMIgzEeQgXCAgGBBIgLBtQgFA1gMBCQgGAhgRBVIh3JSIhOEbIgrEBQg1EbAJEkQANCDhvD1IguBbIAuhbQgWDKAWCXQAWChhRCQIh6htQgUgPgtgcQhPgzhLALQhQAJg7A5IAAmHQguhQA7hPQACkeA5mIQAokkALi4QAGjDAhgWQAOAKAFjzQAanvAZlpICKsbQA9AhBPARQA/AOBWAEQAyADBjACQBZADA8AKQATAEALgBQAKAAAIgEIgRgDIgdgFIgfgFIAAAAQIIBeI7hEIh/BtIglCdIAYARIgcCqIBKBTIBXgrQAuBQA/gjQgGJyAjJyQBoIUhbQqQgPB2BOBvQAwBVg9BgQgLAQgNAPQANgPALgQIgRFdQgvAKgsAAQhsAAhZg6gAwlVHQgighgSgfQASAfAiAhgAL+DnIgngXgArghMQhqgChMhQQALCHCrg1gApCjfQjJgOhShSQgICJEjgpgAiku3IASAEIhCDxQAiiqAOhLgAtU6qIALADIgaCzIAPi2g");
	this.shape_381.setTransform(958.1,780.1);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#4A4A4A").s().p("AoRc6Qk4g4knhyIhIghICLm2QCgqnACl5IAAgPQgFiWAAiWIAAheQAAnFAjnGQgjHGAAHFIAABeQjCgPiHhFQgogUgVgTQBZk8A5miQA5lmFmidQCzhQCJhqIACgCQA7iDAwAHQgNBDgEA+QgJCoA9B4IgBgBQgUgfgdAAIAAAAIgCAAQg3ABhVBxIgBABIgBABIAAABIgBABIgBACIgFAHIgBABIgBACIgBgrQAAjTA8iHQg8CHAADTIABArIABgCIABgBIAFgHIABgCIABgBIAAgBIABgBIABgBQBVhxA3gBIACAAIAAAAQAdAAAUAfIABABQArBZBmBiIBdjpIABgBIAKAAIABAAIAAAAQBXAABsCtIADAFIAEAGIABACIABACIABACIACADQCHjYAhkEQghEEiHDYIgCgDIgBgCIgBgCIgBgCIgEgGIgDgFQhsithXAAIAAAAIgBAAIgKAAIgBABQDOh0A9iDQAjhbgfhTQAhgnBTCwIIdFFQEkCxAaGYIBkK0Ig8AVQjJA9j2AcIg1AAQhBnzAAkaQAAj2AyhRQgyBRAAD2QAAEaBBHzIA1AAIAkGBQgCAHAAAJQgrEbgWMUIgYEkIizCfQjwAdjnAAQk+AAkug3g");
	this.shape_382.setTransform(992.5,389.5);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#DEB180").s().p("EAMlAiFIhXAsIhKhTIAciqIgYgSIAlidIB/htICzifIAYkkQAWsUArkbIAIgMIgGgEIgkmBQD3gbDIg+IAeGzQAUEpk9TQQAHDwgSDwQgYA3hIgLQg/Bihbg/IgzAcQgTALgRAAQgpAAggg5gAK2fzIAjgWIg5gpIA5ApgALZfdIAAhtgARACaQAzhLAygsQgyAsgzBLgA2Nf3IgwifIg2g7IBgmeQCj0YDHjnIBKkyQCHBFDCAPQAACWAFCXQi3I8jbGwQh1ECg1DCIBaDlIhKFFIg5gfIAAifIg5glIAADUIAYAcIAhgsIA5AfIhABOgAy9epgAgf5RQg9h4AKioQADg9ANhEIAmjEIADgHIgOBdIDHFGQApAdAlAAQAnAAAjgeICdk8IAJAzQAfBTgjBbQg9CDjPB0IhdDpQhmhigqhZg");
	this.shape_383.setTransform(967.5,408.3);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f().s("#000000").ss(2,1,1).p("EAF8g+lIACgoEAGBhAaIAHiYQgBhkkugIQj8AQAJBcIANCkQABANAAAMEAHWg7fQE4CZDhB5QERCXBgFuQAyDHAwD6IAAADQAcCjAWCXIAAAIIghAMIA1HbQAYEDAACgQAACfgEC7QgFC6ghGWIAhI4QgNBKg3gLQAKgWgDgeEACUg3vQDoi5gBjpIABgUEACUg3vQBcgiB7D4QBpjTACjzQg4j/giA5EAOjgzsQggD3BvO9QAAAEABAEIAAAAIAOAAEAQCggwIgBAAEAQCggwIAAAAIgBAAAOyleQAxgNArgTIAAgZQgJhLgHhMQg3pGAtrNIAAgBQAHhxAJh1QAAgDgBgCQAAAAAAgBQgBgBAAgBAQ1DgIhCgRIAdk7IDuk9QgLjpgrj7QiEo1ASl5Igzj1QAFgEAFgDEAPzggwIA6gHQAkgEBKgYQBJgXDvhMEgCdg9fQhHDVBpDSQAvBeBRBeICPjzEgR5gi0Ig2geQBzwUDPieQCvh2FpivQASgIASgJQgJAbgGAfQgiCxAqCtQAwk2CNCgEgCdg9fQhiADgyCiEgMhghDQABAMAEAKQAABrAGC5QABAHAAAIQALFOjsQOQAfAPAgANQAeAMAeAKQANAEAMAFQCQAwCXAfQAaAFAbAFQAZAEAZAEQAeAFAfAFQAKABAKABQAKACAKABQABAAAAAAQA0AGA1AFQAkADAkACQBCAEBEABQAFAAAFAAQGvAFHmhzQAGgBAGgCQAfgHAfgIEgMhghDIgDhMQAAATACAwQABAEAAAFgEgR5gi0QCTBRDKA2QghCAgaCRQgCALgCALQgQBYgPBhQggDKg9CvQgjBiiYFsQg1B/gdBTQgBADgBADICDDwIAAE8IhVAYEgNUgxcQgNBeAjGvQAjGwgJAQEgCRg+WQgEAcgIAbAxW9eQBCA0A2AHQA3AEAagGEgR5gi0IgeDeQhkDJgfCAQghB/gYDEQgaDFgUDTQgTDNgRC3Ih6GSIAABQIAhA5IAAARIB/CKIAYAuICZgZIAWiHAz2iiIAqB9IAUA7Au3mCQgLBWgKCWQgHBRgFBPQgEA9gEA8QgBAVgBAUIgnRmQgIDVgrBMQgQAvAiASQAKAFAOACQAtAJBXgQEgIsAtpQAAgBAAAAQAVgrAKgfQAKgeAIgiQAyjOgQk/IAanXQAAhOBXlcIA/j3QABgFABgEQAHgaAIgbQCjpsBHmjIAAAAQABgGAAgFIABAIA0UAkIASAfA0UAkIA0g1IAUgUA0nAGIgJAhA2+AOIA/B6A0nAGIATAeA3+hIIAAA1A0ShDIgVBJEAQcA+EQAIgCAHgCIAAmKQAeg2hBinQgTikAVkrQAppXhsnSQgDgKgCgLQgDgKgCgJQghiVgDi2QgBgcgBgaIAAgVQAAgCAAgBQAAgegBgZIgBgtQAAgHgBgHQgBg7gBgcQgZnbAUm9QATmUAMiNQABgKABgJQABgKABgJIAAgBQABgNABgIAV6ErQBGgLATg3AV6ErQAbgfAAgyAQ1DgIAACTIBjAnIBdhIQAngcAGgkQACgOgEgQAR2DyIAdAhAR1ACIABDwAQ1DgIBBASAT1FSQBeACAngpAFzaDQATAGARAFQEMBMChidAgsALQAcEMCSJ4QBTFqAcDJQAOBhACB8QAAAYAAAYQAAABAAAAQgDBIBCBLQACACABACIABAAQCfB9CCCUQAdAhAbAiAFEdnQAOAUAOBGQAGAdAGAlQAAADAAACQAhDZAbHzQAdEogSDRQgDAagDAZQgFASgEAQQg3AiA3CLQAOBYgYCtIAAAAQAigGAnAEQBUAIBtA2QA1AaA6AlQCBBZCIgkEAGaA7UIAAAAQiZCjiLB8QgMAEgLAFQigBDAFB6QgDBeDvAHQCDAICfgwQD/hQFDjlIAIg9EAHDA1WQETgVCbDQQAEACADADQAIAFAHAGAwSZ7IgjQgQgFB9glBZQgTA1gHArQgPBLAtBaQATAhAkAmQAJAIAIAIEgRbAx2IAAABQADBJgMA9QAAACgBACQgRBLALBpQi2Dag0CRQgjBhAyA+QBIA8CsgCQCOgCBVhVQA5g5AjhZQAihrBFhWEgRrA21QAwgeA1gIQBbgQBhA/QBeA1BABcQALgOANgNQBgiJgBiJQAAgdgDggQgVi0AhjIIg0BeEABfA/8QAMgBALgBAFBbdQEwEnEhgZ");
	this.shape_384.setTransform(960.9,597);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#C2894C").s().p("AhHEQIjBk6IgHgLIAMhUIAGgmQAOhOBFgeIBmgRIBOAEIAfAFQBAAJAuAPIAMAFIAVAJIAEACQAPAIAOAJIATARQAUATAKAYIAEAKIABAHIABABQADATgLAlIgBAEIi3FvQgjAegnAAQgkAAgpgdg");
	this.shape_385.setTransform(972.8,202.2);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#4C82AC").s().p("AO1NpQhbmwAGm5QABg+AFh/QANkvAUktQgxAOg3AMQhWATioAZQh6ASgyAFQhYAIhuACQhGAAh+gDIgBAAQhWgBgxgDIAAAAIgGAAIhDgEIAAAAIgkgEIgBAAIgZgDIhCgLIAAAAIgVgDIg9gMImYhQIgBAAQgUA9gQA/QgiCIgLCKIAAABQgDAugBAuIgBCYQgCBDgNCrIAAABIgBALIgDAmIAAABQgKCDACBRIgMAFIgBgDIAAgBQgHg3AFhLIAGhUIAAgBIADgmIABgLIAAgBQAGhPAEjJIADhuIAAAAIAAgBIADgxIACgrIAAgBQADgrAEgiIgJgBIANihQAKiWALhVIA8AVIAZAJQCPAwCYAfIgDAKIA1ALIABAAIACgLIAyAJIA8AJIAVADIAUACIABAAQA0AHA1AEIBHAFQBDAEBDABIAKAAQGwAFHmhzIAAAAIALgDIA/gPIgDAWIAAAAIgCAUIgHACIAGAQQgNCOgSGUQgUG8AYHbIgMADIAPBVIABAOIABAsIABA3IAAADIAAAVIgEgUgAj/GvICmvLQACgLAFgDQAGgDAMAJIAzAoQAGAFgBAFIgCADIAAgCIgBgIIgCALIgBAAIABABQhHGiijJrIgOA1IAAAAIgCAJIhAD4QAei4AqjvgAO3MCIAAAAgAO2L0IAAAAIABAOIgBgOgAO2L0IAAAAg");
	this.shape_386.setTransform(957.5,647.7);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#ECECEC").s().p("AIRHIQjwgGACheQgFh6CihEIAWgBQChgDB4CjIBEBcQiIAphyAAIgogCgAJjBjQB2hsBqh6QBUAIBtA2QhbBoieCQQhThGhVgKgAvlBpQgyg9AjhhQBvhXCLAYQDCApAqCYQhVBViPACIgKAAQikAAhFg7gAs5jkICUjhQBagRBhBAQg4BMhMCTQhCg6iJANg");
	this.shape_387.setTransform(925.6,989.5);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#D8D8D8").s().p("AIrFYQh4ijihADIAAgIQCLh8CaiiIAAAAQAhgGAnAEQhpB5h3BsQBVALBUBGQCdiRBbhnQA1AaA7AlQCABYCJgkIgIA9QlDDlj/BRgAu+hiQiLgXhvBXQA0iRC1jaQAxgeA1gIIiUDiQCJgNBDA6QBLiTA4hNQBeA1BBBcQhFBWgiBsQgjBXg5A6QgpiYjDgqg");
	this.shape_388.setTransform(945.2,987.7);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#4D83AC").s().p("AIsMwQETgWCcDQQjDiOjsgsgAvxJQIAAAAQASAgAlAmQgRAxgvAPQAMg9gDhJgAHVoiQgGgmgFgdQgOhGgPgTQCfB9CCCTQj9ioAEA0gAGrtIQEQDGFABIQgWABgWAAQkMAAkYkPgAIBuXQDogODFhEQhtBqidAAQhMAAhXgYg");
	this.shape_389.setTransform(950.3,856.9);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#86B4D6").s().p("EAM4AgwQg7glg1gbQhsg1hVgJQgmgDgiAFIAAAAQAXisgNhYQg3iLA3giIAJgiIAFgzQASjRgdkoQgbnzggjaIgBgEQgDg0D8CoQiBiTigh9IAAAAIgDgEQhChLADhHIAAgBIgBgwQgBh8gOhhQgcjKhTlpQiUp4gakNIACgDQABgEgGgGIgzgoQgMgIgGADQgFACgCAMIimPLQgqDwgeC3QhWFbAABPIgaHWQAPE/gyDOQgIAigJAeQgKAfgVArIAAABIg0BeIA0heQgiDIAWC0QACAgAAAdQACCJhhCIIgXAcQhAhdheg0QhhhAhbARQg1AHgwAfQgLhpARhMIABgEQAvgPARgxIARARIgRgRQgkglgTghQguhaAPhMQAIgqATg1QAlhZAFh9IAjwfIADABQAOACATAAIAAAAIABAAQAfAAAqgHIADAAIAGgBIAEgBIACAAIAGgBIgGABIgCAAIgEABIgGABIgDAAQgqAHgfAAIgBAAIAAAAQgTAAgOgCIgDgBQgOgCgKgGQgjgRARgvQArhMAIjWIAnxlIACgpIAHh5IAJAAQgEAjgDArIAAABIgCAqIgDAxIAAABIAAABIgDBuQgEDIgGBRIAAAAIgBALIgDAnIAAAAIgGBVQgFBKAHA4IAAAAIABAEIAMgGQgChRAKiDIAAAAIADgmIABgLIAAgBQANisAChDIABiZQABguADguIAAAAQALiKAiiIQAQg/AUg+IABAAIGYBQIA9AMIAVAEIAAAAIBCAKIAZADIABABIAkADIAAAAIBDAFIAGAAIAAAAQAxACBWACIABAAQB+ADBGgBQBugBBYgJQAygEB6gTQCogZBWgTQA3gLAxgOQgUEtgNEuQgFCAgBA+QgGG6BbGwIAEAUIABA2QAEC2AhCVIAEATIAFAUQBtHSgqJXQgUErATCkQBBCngeA1IAAGKIgPAFQgnAKgnAAQhfAAhcg/gAHnY3QDtAtDCCNIAHAFIAPALIgPgLIgHgFQiNi8jvAAQgZAAgaACgALCGbQgcgigdghQAdAhAcAigAO3DMQlBhHkQjGQEvEmEigZgAG8iQQEMBMChieQjEBEjpAOgAG8iQIgkgLIAkALgAOqqEIAMgDIADBXIgPhUgAkCrPIAAABIgCAIIACgJgAgL8SIABAAIAAAAgEgHkggeIg1gMIADgKIA1ALIgCALgEAPLghRIAHgDIgBASgEAONghrIALgDIgLADg");
	this.shape_390.setTransform(957.2,779.3);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#4A4A4A").s().p("AjPdpIgLgBQhDAAhCgEIhIgGQg1gEg0gHIAAAAIgUgCIgVgDIg9gJIgygJIg1gKQiXgfiQgwIgZgIIg8gWIg+gcQDrwOgLlOIAAgQQgHi4AAhrQgEgKgBgNIgDhLQACgDAAgTQAAhOgdlbQgZk3AAiIQAAg1AEgaQgEAaAAA1QAACIAZE3QAdFbAABOQAAATgCADIACBEIABAHQABANAEAKQjKg2iUhQIg1geQBzwUDPieQCvh3FpiuIAkgRQAyiiBigDQhHDUBpDSQAvBeBSBeICOjyQAMgEAKAAIAAAAIABAAQBSAABoDNIABACIAAABIACAFIAAAAIADAFQBpjUACjyQE4CYDhB6QERCWBgFvQAyDGAwD7IAAACQAcCkAWCWIAAAJQgRgDgRAPIk3BjQhKAWgkAFIg6AHIAOAAIgOAAIA6gHIgKAGQgXgFgKAGIABACIABABIAAAFQgJB1gHBxIAAAAQgtLOA3JFQAHBNAJBKIAAAaQgrASgwANIg/AQIgMACQnSBvmfAAIgkAAgANgAXIAAAAIgBAAIABAAIAAAAIgBAAgANQAOIABAJIAAAAIAAAAIgBgJQhWrlAAk7QAAhbAHg4QgHA4AABbQAAE7BWLlgAnZzaIABgIQAfjFBHAAIAAAAIAAAAQAkAAAvA0IACACIgCgCQgvg0gkAAIAAAAIAAAAQhHAAgfDFIgBAIQgYhhAAhiQAAhNAPhPQAGgfAJgaQgJAagGAfQgPBPAABNQAABiAYBhIAAAAgAOLAQIAAAAgAvDADIAAAAgAvEgEIgChEIADBLIgBgHgAvGhIIAAAAgADJzRIgDgFIAAAAIgCgFIAAgBIgBgCQhojNhSAAIgBAAIAAAAQgKAAgMAEQDoi5gBjpIABgVQAig4A4D/QgCDyhpDUIAAAAgAE06XIAAAAg");
	this.shape_391.setTransform(977.1,385);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#DEB180").s().p("EAQ1Ak1IAAiSIhCgSIAdk8IDuk8QgLjqgsj6QiCo1ARl6Igzj0IAKgGQAkgFBKgXIE3hjIA2HZQAYEEAACfQAACfgFC8QgEC5ghGWIAhI5QgNBLg3gLQAIgRAAgXIgBgNIABANQAAAXgIARQgTA2hGALQAagfAAgyQAAAygaAfQgnAphegCQAngcAFgkIABgLQAAgJgCgJQACAJAAAJIgBALQgFAkgnAcIheBIgEAR2Ai0IAdAhIgdghIgCjwgEAR2Ai0IhBgRgEgV/AhLIhAh6IBAB6Ih/iMIAAgQIghg6IAAhPIB6mSIAkmEQAUjUAajEQAYjFAhh+QAeiBBljHIAdjeQCUBRDKA2QghB/gaCRIgEAWQgQBYgOBgQghDLg9CuQgjBjiZFsQg0B+gdBTIgCAHICDDwIAAE7IhVAZIgUg7Igrh+IArB+IgUAUIg0A2IA0g2IAoAnIgWCHIiZAZgEgUCAgFIgSgegA0nfIIgJAiIAJgiIAVhKgA0UfnIgTgfgA3+evIAAg2gAu1CgQAXAAAOgDIABAAIACgBIgCABIgBAAQgOADgXAAIgBAAIAAAAIgjgBIgEgBQg3gGhCg1QBCA1A3AGIAEABIAjABIAAAAIABAAgAh732QhpjSBHjUQAIgcAEgbIDAE6QApAdAlABQAngBAjgeIC3lwIgCAnIgBAVQABDpjpC5IiODyQhRhdgvhfgEgCNghLIgNilQgJhbD8gQQEuAHABBkIgHCZQgKgZgUgTIgTgRQgOgJgPgIIgEgCIgVgIIgMgFQgugQhAgIIgfgFIhPgFIhlASQhFAegOBNIgGAnIgBgZg");
	this.shape_392.setTransform(960.9,398.3);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f().s("#000000").ss(2,1,1).p("EADQg9cQGjCzEJCvQBwBQAyCpIFBPzQgXAVgtAXEgAGg4vQBMhcCIEAQAfiWgSjnQgDgxgIgjEACBg+tQA6gOAVBfEACBg+tIAAgBEAODghhIgkAAIgnh6QgCAzgCAyQAAAFAAAEQAAAGAAAFQgJDPgLC5QgNCrgJCPQgYGYAADSQAAAuAAApQAADUAABVQgPAGgNAHQgFACgEACIAECbIAoZ7QAICPBVDdQBoE7gYRBQABBJAvA/QBiCHg0ClQgWBBAWBPQAOAYgOBCQABAQgOAJEAODghhQBrgTB2gmQB3gmBAgiIAiC7QAKAaAJAaQCvGqgPQUICdHSQAKA+gpgGIgYBFQgZAtgYgPIgpBIQgcAygdgZIhHBTQgvAngbgMIhChiIgDgEQAPgFASgLQACgBABgBIAEhBIApAaIAAhGEANBgziQAFI1gOHSEABshCFQgvhAieABQj9gTgPBmIgcDJQgeDfBWDAEgHqg8wQAlhlA8gTEgHqg8wQgSAygMBGQggC6AxCPQA2jIBwAuQA4B+BlBNQBqh1BEh8QCGj4ABiGEgHqg8wInZDyQjQBghNDjIAAABQAAABgBABIgGAYQhsFziDKGIAuAWIA1APQCJAhAsAOQAtAOAvAMQAvAMBKAWIhrEEIj8SNQgJB8AQAsICBCcIAPDsIg3AvIgegKIgegKIAAgfIAAggIgPg5EgPVgiIQAAgDABgDQABAAAAAAIgCAGIgUAxQAFAJAPg6gEgPegz8IALRsIAAACIACEtQgGA3gHA0QgcDsgcDYQg1GCg9HwQAXAEAgALQgCCsgMGPQgBAngCAlIAAAAQgECcgDB/IAAABQgGD1AACMQABAWAAAWQAAAAAAABQAABJABBMQABCfAGDJQAAAeABAeQCOgoBeh6QAIgLAIgMA1u/QQBGB0CJgVA3WjDQgUAQAWArIBcCzA1lilIARAqIAogfA1lilQgHAMgKAKA1XjTQgDAagLAUEgWogjRIg3DoQhmGJAaOaQgCBfgGBVQgBACAAADIhaFlIBGCNQAYAwAdgSIAMAYQANAXAzgFQAQAZA/gbQAdAVAoghQAdhGAIhKEgLXA3yIAAAAQCUiDgtjoQgYicAdiZQAEgUAFgTQAKgfAHgfQAKgpAEgqQADgmgBgnQgImqAYniIBupgIDayyIAAgCIADgQIAAgCIABgFQABADAAACQAfCSAhCYQAKAxALAxQAnCtAqCzQBMFIBYFaQANA1AHBDQADAdABAfQgBAdAdAnIBOEmQCDKfADKlQAFA2ghCQQgHA8AQAuQANAlAcAbIAAA9IAAAhQASAUATARICpBNQB4BMC0AIQAuADAegEQAegEAPgKAtDXKQjODXhgBMIgbRLIABARQgOAUgJAVQgfBMAqBhQAdBtgDDRQAAAAAAAAQACAAACAAQAjgGAhgBQADAAATgBQBXgBBZAqQAHAEAIAEQAxAaAtAoQAAAAAAAAQATARASATQADADADADAxlXZQhNANBDDNIgCA6A4oihIBhDOA5jiYIBQCbA1Uh7IARArEAODghhIBdDrQAhFpB3FbQByFoAsE+QghCPhSCnQgQBHAQDrQAKBbBAgWAxRmxQK3DwMAiOQCyghC1g1AU+BoIAAA5AUih3IgNDFEAGEA37QBjgrBWBGQByBwDqgbEAG1BCgQACgBACgBQEohXEWkQIAAgnEAGEA5ZQixDAiPB4QiZBAgUCCQAEBZC3AZQCzANCtgyQACAAABAAEAGyBCgIABABQABgBABAAEgR1A1WQgBABgDAGEgR9A1dQhKBthuCRQgoA0gXAtQhXCpClAzQD+A+CViBQAGgHAFgIQAlg1Amh6QAnhgA/hFEgQfA1VIgHAL");
	this.shape_393.setTransform(964.6,604.7);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#C2894C").s().p("AsORHIDQBfQgVAEgUAAQhrAAg8hjgAG2psIjIlGIASh6QAOhNBFgeIBmgSIBPAFIAfAFQBAAIAuAQIANAFIAVAIIADACIATALIAKAGIAUARQAXAXAKAfIACAHIAAAAQADATgKAlIgmBMIiTEoQgjAegnABQglgBgpgdg");
	this.shape_394.setTransform(903.7,295);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#4C82AC").s().p("AhyjNQALhTgCgwQgEhIghgvQgLgRAFgIQAGgKAVAGQAiALAnAQIACgCQACgEAEgBQAEgBAMABQAUACATgGQATgGAQgNQAHgHAEgBQAGgEAGACQAMAEgCAXQgNC5ACBxQACCkAfCCIAXBdQAJAsAEAtQgqizgmisQgFgygBg0IgQAEQghiYgdiTIgBgFIgBAFIgCAAIABACIgCAQIgFAAIAEABIjZSzgAuYCaQACioADhyIgCAAIAChNQANmPABitQK3DxMBiOQCxghC2g1IADCaIgJgcQgMgjgRgJQgPgIgfAFQjYAgjiAsIhVAQQgwAJgmAEQhVAJiPgFQiigHkngaQh2gKgygJQhqgShkgmQgfBogOCmQgSC/gFEZIgIHbQgBATgDAJQgEAQgJAHg");
	this.shape_395.setTransform(944.1,639);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#ECECEC").s().p("AHzG3Qi4gagEhYQATiDCbg/QDhAKBvDCIAeBDQiKAniOAAQgkAAgkgCgAuFCKQimgzBYipQB2hXCiAwQCIAqBMCHIgLAOQhlBYiVAAQhHAAhSgUgAJ1BIIDUjYICqBOIjgDUQhphPg1AFgAsIjpICCjFIAHgKQBXgCBZArIh/DYQhXg7hjAJg");
	this.shape_396.setTransform(922.9,990.1);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#D8D8D8").s().p("AJTFjQhvjDjhgKQCPh5Cxi+QASAUATARIjUDYQA0gFBpBPIDgjVQB4BKC0AJQAuACAegDQAegEAPgKIAAAnQkWEQkoBXIgEABIgCABIgfhCgAuchmQijgwh2BXQAXgsAog0QBuiRBKhtIAEgBQAjgFAhgBIAPAKIiDDFQBkgJBXA7IB/jZIAPAIQAxAaAtAnIAAABQATARASATIAGAGQg/BEgnBhQgmB4glA2QhLiHiIgqg");
	this.shape_397.setTransform(945.5,988.2);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#4D83AC").s().p("AKeR9Qh5hQg0AtIAAg9QBjgsBVBHQBzBwDpgbQhwAbhTAAQhpAAg7grgAwDsqIEsjpQjODXhfBMgAv6xAQBogCCFhlQhdB7iOAoIgCg8g");
	this.shape_398.setTransform(953.7,857.3);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#86B4D6").s().p("EAPLAg7Qi0gIh4hLIiphOQgTgRgSgUIAAghQA1gsB5BPQBpBND+g9QjqAchyhxQhWhGhjAsQgcgcgNglQgQgtAHg8QAhiRgFg1QgDqmiDqfIhOklQgegnACgcIgEg9QgHhCgNg1QhYlbhNlHQgFgugJgsIgWhcQgeiDgDilQgBhxANi4QACgYgNgDQgFgDgHAEQgDACgIAGQgPAOgUAGQgUAGgUgCQgMgBgDABQgEABgDADIgBADQgngQgjgLQgVgHgGALQgEAIALAQQAhAwADBIQADAwgLBSIiFPYIhuJgQgYHhAIGqQABAngDAmQgEAqgKApQgHAfgKAfIgJAnQgdCZAYCcQAtDoiUCDIgGgGQgSgTgTgRIAAAAQgtgogxgaIgPgHQhZgrhXABIgWABQghABgjAGIAEgHIgEAHIgEAAQADjRgdhsQgqhiAfhMQAJgVAOgUIgBgRIAbxLQBghLDOjWIksDoQhDjNBNgNQCOgoBeh6IAQgWIgQAWQiGBlhnABQgGjJgBieIgBiWIAAgBIgBgsQAAiMAGj1IAAgBIAHkaIAAgBIACAAQgDBygCCpIgEGvQAKgIAEgPQACgKABgTIAInaQAGkaARjAQAPilAehpQBlAnBpASQAzAIB2ALQEnAaCjAGQCNAGBWgKQAlgEAwgIIBVgRQDigsDZgfQAfgGAOAIQARAJANAjIAJAdIAoZ9QAICPBVDcQBoE6gYRBQAABKAwA+QBiCIg0ClQgWBAAWBQQAOAXgOBDQABAPgOAJQgPAKgeAEQgSACgYAAIgigBgAwsZ5IAAAAgAhX4dIAPgEQACA0AEAxIgVhhgAig82IAEgBIAAACgAib9JIACAAIAAACIgCgCg");
	this.shape_399.setTransform(956.9,781.1);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#4A4A4A").s().p("AwVazQgggKgXgFQA9nwA1mCQAcjYAcjrIANhrIgCksIAAgDIgLxsIALRsIgBADIgBAGIgUAwQhKgVgvgMQgvgMgtgOQgsgPiJghIg1gPIgugWQCDqGBslzIAHgYIAAgBIAAgBQBNjjDQhgIHZjyQgSAygMBFQgMBKAABCQAABnAdBWIABgCIAAgCIABgDQAriaBQgBIABAAIAAAAQARAAATAHIAEACQA4B+BlBMQBqh0BDh8QCHj4ABiHQA6gOAVBgQAIAiADAxQAGBWAABLQAAB+gTBfIgCgEQhii4hEgBIAAAAIAAAAQgZAAgUAYIAAABIAAgBQAUgYAZAAIAAAAIAAAAQBEABBiC4IACAEQAThfAAh+QAAhLgGhWQgDgxgIgiQGjCzEJCuQBwBRAyCoIFBP0QgXAVgtAXQhAAhh3AmQh2AnhrARIgkAAIgnh4QAKlNAAmAQAAiZgBihQABChAACZQAAGAgKFNIgDBlIgBAJIAAAJQgJDPgLC6QgNCqgJCQQgYGYAADRIAABXIAAEpIgcANIgJAFQi1A1iyAhQkdA1kTAAQnSAAm1iYgAutAOIAUgwQgNAxgGAAIgBgBgAuZgiIAAAAgAnY3HQAAhCAMhKQAMhFASgyQAlhlA8gUQgeDfBWDBIgEgCQgTgHgRAAIAAAAIgBAAQhQABgrCaIgBADIAAACIgBACQgdhWAAhngAkV2jIAAAAg");
	this.shape_400.setTransform(958.6,389.7);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#DEB180").s().p("EAUyAjmIhChiIAegUIADgCIAEhBIgEBBIgDACQgSALgPAFQhAAWgKhbQgQjsAQhHQBSinAhiPQgsk+hyloQh3lbghlpIhdjqQBrgTB2gmQB3gnBAghIAiC7IATA0QCvGogPQVICdHSQAKA+gpgGIgYBGQgZAtgYgPIgpBIQgcAygdgZIhHBTQgjAegZAAQgIAAgGgDgEAU+AiAIAAg5IAAhGIAABGIgpgaIANjGIgNDGIApAagEAU+AhHgEAUVAgtgEgXHAgMIhhjPIBhDPQgzAFgNgXIgMgYIhQicIBQCcQgdASgYgxIhGiNIBallIABgFQAGhVAChfQgauaBmmIIA3joIA1APQCJAhAsAOQAtAOAvAMQAvAMBKAWIhrEDIj8SNQgJB8AQAsICBCcIAPDsIg3AvIgegKIgegKIAAgfIAAggIgPg5IAPA5IAAAgIAAAfIAeAKQgIBKgdBHQgoAhgdgVIhci0QgLgXAAgPQAAgOAJgHQgJAHAAAOQAAAPALAXIBcC0QghAOgUAAQgSAAgIgMgA1DeOIgRgrgA1lc5IARAqIAogfIgoAfIgRgqQALgUADgaQgDAagLAUQgHAMgKAKQAKgKAHgMIAAAAgAyfBtIjPhfQBGB0CJgVgEgXHAgMgEgV4AgKgA4TfigA0OdtgAvUivIABAAIgCAGIABgGgAlR4qQhWjAAejfIAcjJQAPhnD9AUQCegBAvA/IgSgKIgEgCIgVgJIgMgFQgvgPg+gJIgfgFIhPgEIhnARQhFAegNBOIgTB6IDJFGQApAdAlAAQAmAAAkgeICSkpIAAABQgBCGiGD4QhEB8hqB1QhlhNg4h+g");
	this.shape_401.setTransform(964.6,403.2);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f().s("#000000").ss(2,1,1).p("EABCg8pQBrAkD9ByQD+BzBnBOQBkBPBlEpQBlEpBDDYQBEDZAgBtIhMApEAJ8gneIBIFXQAJAIASABQARABAQgBQCFgSDAhAIBTgaQADAqAnBjQCtF0CWRIQAEAhAEAgIC4HaIg5BnIgrAAIgoBhIg+AAIAAguEAKbgx3QgUFZgLFAQgyTrAyOLQgVAFgUAEEgAjhB4QgCghAAgCQgNgpg9gHQg/gJiugCQivAAgjBVIAADgIAADfQALBIBnB/QAJAMALANEgAcg+rQgBgkgBggQAAAAAAgBEgKlg78InHCxQjdBhhVDvQgOAkgNAsQg/DGhAFQQgCAJAAAJQghCqgYChIgWCYQABABABABQAUAQApAHQgEAlgGAaQgfBrgTBkQgfCmgLCqQgGBlACBiQAECQAFCLQAGCfAPCgQAFApAEAqQgYExgRBiQgUBgAJA7IAEAjQANApAaAWQALAJAHAFQAFgCAHAAIABAIQgBAAgCAAQAlA/BAgUQA4AdA6gXIApAeQAPAHANAAQAdgEAygLQAwgLAJgxQAIgzgVgEIgOAAEgCNg4LQAUgYARgTQAyg9ANgPQAagogGiYQgEg4gDgxQBAArAeBXEgIug+hQhTBAgkBlQgjBjAKCIQgDA5AkBpQBXi3CDA3QANAFAOAIQA1BABVBmQBXiKA6hFQCJg7BMC7QAskNgyiREgToghoQA5gCAYgMIAAAqQAAA2AAA7QAAEygjGPQgRDNgYDlQgUCdgZENQAtAcBBAQQAAAAAAgBQAIADAJADQFqBuHyAIQG8ALGnhMQARgFAUgCEgTFgzbQAnILAJFdQAAAfAAAcQAACDgCA/EgZKgiHQCPAUDTALIgYCNQAdCXhuJnQg9FUgVDUIgDBvQANAwBRBBQBPBCALAnQAIAnADBeQAABcgFAPQgEANgFAyAhD93QAFAWAFAVQBZFvEoDnQAPANARAMAyimSQAIADAJACAyimSQgBACAAACQgeIOAQIbQAEDcAJCkQAGChAJBrQAEAyAFAlQACAUAAASQABA4gPAtQgUA8ANAvQANAuAAABIAGAdQAEAuAJDVIgSPqQgaBeALA3QAAAOAMAWQARB8gYBMQgTBMATARIjPEcQhhBwApBQQAoBRDRAMQC6AIBOhXQAMgOAKgRQAphIAthpQA1h7BNgsQhZgXhyhKQhng8hUAHQgxADgiALIgPAVA1ZjaQgCBTAGAUQACAKACAUQADANACASQATANAYgCQAHAAAHgDQAggGACgJAlghtQABAAABABA6EgXQAHAFADABA54gZIgCAIAlPgCQgGgqgGgrAB8ccQhBhPgchkQgCgKgDgJQgDgPgCgQQgCgCAAgCQgGgsgJgrQgVhIgoiAQAAAAAAAAQgEgMgEgNQh2l7g4k9QgxkPgvk2IjQUPIAAABQACA7gDAxIAAAAQgGBVgUA4QgUA1ghAaAx4ZiQCdh0C4gWA3eh2IA7CWA4rhpQAFAhARBiA6Ch2IAKBdEAPfA8zQAngfgnh0QgXhGgBgsQgOhhAcgjQAcgvAEghQAKhChJhmQgrg+AAiHQgCguAAhEQgFlqg4maQg5magNg9QgdiJgag1QgshTgaiLQAAAAAAgBQgIgugHg0QAAAAAAgBQgai8AAjnQgCjngJqhQgCh6AAhTIAAAAQAAgDAAgEEAMAgh+IA0CXQBQG4DaGwQCFD6A6DkQADANADAMQAEAVAEATQgnCMhQB0IgZEfIB9CQIgXArIA5AzIBjAAIBeg8IAAgvAU7iOIALhFAVzAeIhDhpIALhDgAUYBPIAlArIA2hcAv+9UQCejpDKiQAtU8VQBqkEDKitEAF6A5YQATAYArAaQBGArB/ArQA9AUA/ATQB9ApBpADAB8ccQByGQBPNXQANChgSC6QgLBaA7BHQASAQAABJQiHCliuCMQivBGAVCnQAiB5FggfQA8gIA7gRQE0hgEHkkEAHpA1rQAQAIAQAGQCzBGCThdQAIgFAIgGEgSUAxmQAQAdAkArAo6YHQhBMOAMLtQAxEMhZCBQACBTgeAcAB8ccIDYDI");
	this.shape_402.setTransform(965.2,604.2);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#C2894C").s().p("AhHEQIjIlFIASh6QANhOBFgeIBngRIBOAEIAfAFQBAAJAuAPIAMAFIAWAJIADACQAPAIANAJIAUARIAJAKQARATAIAYIABAHIABABQACATgJAlIgPAcIiqFXQgkAegmAAQgkAAgpgdg");
	this.shape_403.setTransform(937.1,203.4);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#4D83AC").s().p("AK+d1QCkACChgZQhUA1heAAQhHAAhMgegAvUhfIgCAAQAAgSgCgUQgFglgEgyQgJhrgGihQgJikgEjcQgPobAeoPIARABQFrBuHxAIQG8ALGnhMQARgFAUgCIAAAHIAAAAQAABTACB6IALOJQAADnAaC8IgGABIAAABIASBiIAAABIAQBPQgbgegPgwQgKgggJg6QgmjzgZkzQgPi3gUlxIgTlQIABgOIAAAAIAAgEIgQAEQhtATg7AIQldAzlhgSQligRlWhVQABAKgFAIIgEAGQgCAegFAkIgOBqQgGA4gDBwQgJE8gBC/QgDEWAHDlIAFCtQABBhgHBLQgDAggPAJgAmCjBQgDgWABgkQAEi6AhkXIA3nQIALh9QAMibAEiwQABgOAEgFQAGgGAPABQAgACAjAIIAFABIABABQAGACAAAFQAFgFAGgBQA6gLA7gDQAOAAADAGQAGAIgRAPQgWAUgIAkQgFAaABApQAGEIBIFxQAqDSBZGiQAFAbgPADIgIgXIgHgYIgGABQh1l7g4k9QgxkPguk3IgNhVIANBVIjRUQIgDAAIAAABIgEBrQgMgXgEggg");
	this.shape_404.setTransform(947.2,758.2);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#2C2C2C").s().p("AEihpQCwE/DREWQknjohaltgAjFnjIkzGwQBpkEDKisgAk6nrIloF6QCdjqDLiQg");
	this.shape_405.setTransform(930.5,428);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#ECECEC").s().p("AFDFXQgUioCvhFQECAgBeEOQg8ARg8AIQhHAGg6AAQjnAAgbhggAsQClQjRgMgohRQgohQBghvQDag3ClCHQAuAoAcBVQhHBQikAAIgdgBgAJ8A7IDVjPQBHArB+ArIj+DYQg2hGhmgZgAs5jJICZjtQBUgHBnA8IiTDdQhVgzhsAOg");
	this.shape_406.setTransform(924.3,991.3);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#D8D8D8").s().p("AELB5QCuiLCHilQATAZArAZIjVDQQBmAYA2BGID+jYQA+AUA/ATQB8AoBpADQkGEkk0BgQhekOkCgggAslgXQiliIjaA3IDQkcIAPgVQAigLAxgDIiZDuQBrgOBVAyICTjdQBzBKBYAYQhNArg1B7QgtBpgpBHQgJARgNAOQgchUgugog");
	this.shape_407.setTransform(945.4,989.8);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#86B4D6").s().p("EANRAgCQg/gTg+gUQh+grhGgrQgrgZgUgZQABhJgTgQQg6hHAKhaQATi6gNihQhQtXhymQIDYDIIjYjIQhBhOgbhkIgFgTIgFgeQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQgHgsgJgrIg9jIIAAAAIgIgYIAFgCIAIAYIAIAXQAOgDgEgbQhZmigqjRQhJlygGkIQgBgpAGgZQAIglAWgTQAQgQgFgIQgEgFgNgBQg7ADg7ALQgGABgFAFQAAgFgGgCIgBgBIgEgBQgkgIgfgCQgQAAgFAFQgFAFgBAOQgECwgMCcIgKB9Ig3HPQghEXgEC6QgBAlACAVQAEAhANAXIADhsIAAAAIADAAIAAAAQACA7gDAxIAAAAQgFBVgVA4QgTA1giAaQAigaATg1QhAMNAMLtQAxEMhaCBQADBTgfAdQhYgYhzhKQhmg8hUAHQgxADgiALIgPAVQgTgRAThLQAYhNgRh8QAQAdAjAsQgjgsgQgdQgMgWgBgOQgKg3AZheIATvpQgJjVgFgtIgGgdIgMgwQgNgvAUg8QAPgtgBg4IACAAIAAAWQAOgJADggQAIhKgBhiIgFitQgIjkADkXQACi/AIk8QADhwAGg3IAOhrQAFgkACgeIAEgFQAFgJAAgJQFWBUFiARQFhASFdgzQA7gIBsgTIAQgEIAAAEIAAAAIAAAOIASFQQAVFxAPC4QAYEyAmD0QAJA5ALAgQAPAwAaAeIgQhPIAAgBIgRhiIgBgBIAHgBIAAABQAHA0AIAuIAAABQAaCLAsBTQAaA1AcCJQANA9A5GaQA5GaAEFpQAABEACAuQAACIArA9QBKBmgLBCQgDAhgdAwQgbAjANBgQACAsAWBGQAoB0goAfQhogDh9gpgAOnZdIAQgLIgQALQihAZilgCQCzBHCThegAJhZ0IgggNIAgANgAwgiiQCdh0C3gWQi3AWidB0gAw8VhIAAAAgADTAXgAnjj9IAAAAg");
	this.shape_408.setTransform(956.5,783.9);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#4A4A4A").s().p("AhidJQnxgIlrhuIgRgGIAAABQhBgQgtgcQAZkNAUidQAYjlARjNQAjmPAAkyIAAhxIAAgpQgXAMg6ACQjTgLiPgUQgpgHgUgQIgCgCIAWiYQAYihAiiqQAAgJACgJQA/lQA/jGQAOgsANgkQBWjvDchhIHIixQAjhlBUhAIAADfQAKBIBnB/IgGAMQANAFAOAIICJCmQBWiKA6hFIAlgrQAyg9ANgPQAagogGiYIgGhpQBAArAeBXQBrAkD+ByQD9BzBnBOQBkBPBlEpQBlEpBEDYQBDDZAgBtIhLApIhUAaQjABAiFASQgQABgRgBQgSgBgIgIIhIlXQAKlAAUlZQgUFZgKFAQgzTqAzOLIgqAJQgTACgSAFQl0BDmEAAIhrgCgAIbNqIAgAZIgggZQjSkWiwlAQBbFvEnDngAqBFLIE0mwQjKCshqEEgACZEUIgKgrIAKArgAsrEMIFol4QjKCPieDpgAvBjXQAACDgDA/QADg/AAiDIAAg7QgKldgnoLQAnILAKFdIAAA7gAnK0OIACgEIABgBIAAgCIABgBIABgBIAAAAQBBiEBaAAIABAAIAAAAQAcAAAeANQgegNgcAAIAAAAIgBAAQhaAAhBCEIAAAAIgBABIgBABIAAACIgBABIgCAEQghhgAAg4IABgKQgDgfAAgdQAAhiAchNQgcBNAABiQAAAdADAfIgBAKQAAA4AhBgIAAAAgAEc0qQAUh+AAhjQAAhwgbhNQAbBNAABwQAABjgUB+IgDgHIAAAAQg6iHhbAAIAAAAIAAAAQgeAAghAOQAhgOAeAAIAAAAIAAAAQBbAAA6CHIAAAAIADAHIAAAAgA2lgvQgHgIgIgGQAUAQApAHQgngBgHgIg");
	this.shape_409.setTransform(944.1,389.7);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#DEB180").s().p("EAU6AjCIg5gzIAXgrIh9iRIAZkfQBQh0AniMIgIgoIgGgZQg6jkiFj6QjamwhQm4Ig0iWQCFgSDAhAIBTgaQADAqAnBjQCtFzCWRIIAIBBIC4HaIg5BnIgrAAIgoBiIg+AAIAAguIAAAuIAAAvIheA8gEAU9AiPIA2hcIg4itIALhFIgLBFIgLBDIBDBqIg2BcIglgrIAlArgEgV6AhTIgpgeIg7iXIA7CXQg6AXg4gdIgWiEIAWCEQhAAUglhAIADAAIgBgIIgKhdIAKBdQgHAAgFACIgSgOQgagWgNgpIgEgjQgJg7AUhgQARhiAYkxIgJhTQgPiggGifIgJkbQgChiAGhlQALiqAfimQAThkAfhqQAGgaAEglQCPAUDTALIgYCMQAdCXhuJnQg9FUgVDUIgDBvQANAwBRBBQBPBCALAnQAIAnADBeQAABcgFAPQgEANgFAyIgiAPQgHADgHAAIgGAAIAAAAIgBAAQgTAAgQgKIgBgBIgFgfIgEgeQgFgQAAg0IABgjIgBAjQAAA0AFAQIAEAeIAFAfIABABQAQAKATAAIABAAIAAAAIAGAAQAHAAAHgDQAggGACgJIAOAAQAVAEgIAzQgJAygwALQgyALgdAEQgNAAgPgHgAmo3NIgUgZQhnh/gLhIIAAjfIAAjgQAjhVCvAAQCuACA/AJQA9AHANApIACAjIgJgKIgUgRQgNgJgQgIIgDgCIgVgIIgNgFQgugQhAgIIgfgFIhPgFIhmASQhFAegOBNIgSB6IDIFGQApAdAlABQAngBAjgeICrlXIAAABIACBEIAHBpQAGCYgaAoQgNAPgyA9IglArQg6BFhXCKIiKimg");
	this.shape_410.setTransform(965.2,397.3);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f().s("#000000").ss(2,1,1).p("EAJmgnvICLFyIAzgQQDnhCCxhSEABPg9jQADAEAEAEQB+CPEpBOQFZBWCtKHIDtJkIg0AcAUghMIAAA8IA8BKICehCIAyhdQAsgVAlgjQAxgWgliIIiPmvQhivoi3m2IgliZEAJzgyMQgNFVAAFIQAAI+ApIVIBhO5QgRAMgXAKQgXAKgGAAIBUarQAFBKAQBYQAHAhAHAiQADAJACAKIA/CnIAZBDIAeCPQADAQADAQQApDgAdF1QAWDWAED7QgJC3BvBrQA5BGgxCQQAAABAAACQgcBEAAAyQABAzgPBdQgOBegQgkEgHhhDAQgqAlgCBAIAACJIAADGQANB5BaCMQAEAGAEAHQA8BZBWBIQBAhjA/hiQAUgHAUABQBWAFBeCnQA/kcg7jEQgCgGgCgFQgihnhJgYEgKIg9DQhsBnmZC7Qj0ByhbHkIikL6QAaAUAgAKQC7A5EUgGIhAbIQA+AgAgAFIAUKLQAQE8AUELQADAwADAsQAAAAAAABQAHBjAFBKIAAABQAFBEAFAwIAAAAQAAAAAAABQALB4ALBQQAHBFgSBTQgDAOgEAPQgFARgBAVQgCA6A5BbQgJIJAzH0QAYDcgUA5QgUANgBAUQACAVAYAdQAfA1gCAyIAADEQhBB9h6CDQgIAJgHAJQhABNANBGQAUBLBEAgQBaArBqABQCGADBcheQAGgGAFgGQA1g+AehXQAihXCHh/QAFgEAFgFQACgCACgCQAagagZh6QggiegKh9QgTmCAYn3QAil/AYoqQAFhhAEhmQAAgBAAAAQAqoZAXk6IAkk/IBCFYQA7E2BhE3QAiBxAsCiQA2DJBBETQApCqAuDIQAkCdAcCWQBBFZANFUIAdHNQAKBHBXAjQAgALgHCAQAmgVAsgKQBOgTBjAPQASADARAEQCAAdBKBYEgAgg/aIARC/QAJAyhbCMQgWAegWAhEgGqg4FQAGAFAGAGEgGqg4FIAEgCEgINg/SQhWAfglBwQgfBbACCSQALB4ApBsQAJgWAKgTQBai2BaBMEgR5gx4QAEEVALF9IgNFmIiJFsQgFHLhhKlQgPCsA+ApICKBwIAoEdIhkAtIgRgvIgQgtIAAhsIAcBsIgMAtEgZGgizIgyFTIAAAJQhXGQCXQdIghGrIBsCCIBNAAIDIgsIAjABIAmgyIhag7A38g4ICCCLICiAEA4zgVICTCYA2iiKIBSCuICbA0Au4aKQAOAAANAAQDKgCAVi/EAMkgiNIAwB9QBBGeDSFzQCMEvA8EkIhzExIAoD9IA8AyIA8AyIAygtIgYgzIgXgxIAAhaIAXCLAHJT3QAPATAOASQDdEZBZhgQADgEADgEAGeX+QAPARAPAPQEHEcC8hwAxZmTQNDEDPBkzEALmA2PQAJgLAIgKQCFiQCRCTQAIAIAJAKEAOmBBZIAAABQADgDADgDQBXhhAmkZEAI5A6BQgkCGhxCGQgTASgOASQg+BPATBgQAUBKCjATQEeAaB5h9EgOiAwJQAHgFAJgDEgOAA2HQAqgUBHgOQBIgQBnAtQAZALAQAMQB5BXBBgEQAJAAAGgEEgOdAxcQAfAiBCAu");
	this.shape_411.setTransform(939.3,608.3);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#C2894C").s().p("AhHEQIjJlFIATh6QAFgbALgWQAVgnAtgUIBngRIBOAEIAfAFQA/AJAvAPIANAFIAUAJIAEACQAQAIANAJIAUARQAWAXALAeIACAHIAAABQACATgJAlIgxBiIgEAHIiEEKQgkAegmAAQgkAAgpgdg");
	this.shape_412.setTransform(914.9,201.9);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#ECECEC").s().p("AJ8GrQijgSgUhLQgThfA+hPQEyhlDxENIAAAAQhkBojUAAQgtAAgygFgAr0CyQhqgBhagsQhEgfgUhLQgNhGBAhMIARgCQEcgiCpDlIgLANQhZBbiCAAIgHAAgAKsA8QA8hwAQh7QBOgSBjAPIAjAHQgUBxhJCdQhZgphqACgAs7jKQBpiOAwhTQBIgQBnAtQgsBkhlCRQhTgrhkgGg");
	this.shape_413.setTransform(928.4,994.1);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#D8D8D8").s().p("AGNDSQAOgTATgRQBwiGAliFQAlgVAsgLQgQB7g8BwQBqgCBZApQBKidAUhxQB/AdBKBYQgmEYhXBhIgFAFQjykNkxBlgAwvhHIgCgQQB6iDBBh9QApgUBHgOQgwBThoCOQBkAGBSArQBmiRAshkQAZALAQALQB4BYBCgFIAFAGQiIB/giBWQgdBWg1A+QipjlkcAig");
	this.shape_414.setTransform(938.3,989.1);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#4D83AC").s().p("AMeeeQCFiQCQCTQiKg8iLA5gAHiBCQEoC/CDhWIAZBDQg1Afg7ABQiXAAi9jMgAqXgSQgWC+jKACQCIhDBYh9gAIMi/QDFClBqg3IAOBDIgGAIQgXAXgfAAQhbAAimjQgAvVkeQgKg6gFg6QgEg6gCh0IgKABIAAgBIgGhdQgVkKgPk8IgVqMQNEEDPBkzIBTarIgCABIAAAEQgOgugKgxQgLg6gMhmIgSiLQgVimgIhWQgLh4gSlxQgOkygai2QgEAKgOACIAAAAIgHgBIgEABIksBFQhyAahAANQhjAUhQAJQjCAWjlgWQizgRjygxQhAgNgrgNQADAUABAdQAGB8ADEbIAHJmQACCdAEBIQAFCBAOBkIAMBSQAFAugCAkQgchWgQhXgAlHivQgCgSgCghQgEjFAGj2QAFiUAOknIAGiEQAGh1gCg7QgChigThMQgDgKAEgEQADgFALABQASABAIAFIADADIAMABQBgAMBdgiQAPgFAHAEQAIAHgEATQgcB4AHB9QAEBUAWBrQAIAoAlCUQBMFBAxE2QAAAGgDAFQgEAFgDgDIgGABQgsiigkhyQhfk3g7k1IhClZIgkFAQgYE6gqIZIAAAAIgTAAQAABLADAyIADBLQAAAqgIAfQgKgUgDgcgAkl4mIADgCQgCgCgCgDIABAHg");
	this.shape_415.setTransform(935.4,758.4);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#86B4D6").s().p("EAPzAgeQhKhYiAgdIgjgHQhjgPhOASQgsALgmAVQAHiAgggLQhWgjgLhIIgdnMQgNlUhBlaQgciVgkidQgtjIgpiqQhCkSg2jJIAGgCQAEAEADgFQAEgGgBgFQgwk2hNlBQgliUgIgoQgWhrgEhUQgGh9Abh4QAFgTgJgHQgGgEgQAFQhcAihhgMIgLgBIgEgDQgIgFgSgBQgKgBgEAEQgEAFADAKQATBMACBiQACA7gGB1IgGCEQgOEngECUQgHD2AFDFQABAhACARQAEAdAJAUQAIgfAAgqIgDhLQgCgyAAhLIATAAIgIDIQgZIpgiF/QgXH2ASGDQAKB9AgCeQAZB6gZAaIgFAEQgGAEgJgBQhBAEh5hXQgQgLgZgLQhmgthJAQQhHAOgqAUIAAjFQACgxgfg2QAfAjBCAuQhCgugfgjQgYgcgCgVQACgVATgNQAHgEAJgEQgJAEgHAEQAUg4gYjdQgznzAJoKQg5haACg5QABgVAFgRIAHgdQAShTgHhFQgLhRgLh4IAAAAIAAgBIgJh0IAAAAIgNiuIALAAQABB0AEA6QAFA6AKA6QAQBXAcBVQADgjgGguIgLhSQgPhlgFiAQgEhIgCieIgGplQgDkcgHh7QgBgdgCgUQArANA/AMQDyAyCzARQDlAWDCgWQBRgJBigUQBAgNBygaIEshFIAFgBIAGAAIABAAQANgBAEgLQAbC3AOEyQARFxALB4QAIBWAVCmIASCKQAMBnAMA6QAKAwAOAvIAAgEIACgBQAFBKARBZQhqA2jFikQDeEZBYhgIALAKIA/CoQiDBVkni+IgeghIAeAhQEHEaC9hvIAdCPIAGAfQApDhAdF1QAWDWAED7QgJC2BvBsQA5BGgwCQIgBACQgbBFAAAyQAAAygPBeQgKBEgLAAQgFAAgEgKgAPXbAIARATIgRgTQiRiSiECQQBEgcBEAAQBGAABHAegAKwbTIASgVIgSAVgAvYgxIACAAIADAAIgDAAIgCAAIAAAAIgBAAIgJAAIgIgBIgEAAIAEAAIAIABIAJAAIABAAIAAAAgAvTgxQDKgCAVi/QhXB9iIBEIAAAAgAGwmfIgdgmIAdAmgAmC8NQABADADACIgDACIgBgHg");
	this.shape_416.setTransform(944.7,780.8);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#4A4A4A").s().p("AuRbsQgfgEg+ghIA/7HIAOlmQgLl9gEkVQAEEVALF9IgOFmQkTAFi7g4QghgKgagUIClr6QBbnjD0hzQGZi6BrhoQgdBXAACHIABAPQALB5ApBrIATgoIAAgCIABAAIAAAAIABgEIABgBIABgBIABgDIAAAAQA9h2A9AAIAAAAIAAAAQAbAAAaAVIAAABIAAgBQgagVgbAAIAAAAIAAAAQg9AAg9B2IAAAAIgBADIgBABIgBABIgBAEIAAAAIgBAAIAAACIgTAoQgphrgLh5IgBgPQAAiHAdhXQAmhwBWgfIAADGQANB6BZCLIgDACIAMALQA8BaBVBHIB/jEQAWgiAVgeQBbiMgIgyIgRi/IAEgIQBKAZAiBnIADAKQAdBfAAB0QABB7ghCSQhfimhWgGIgBAAIgFAAIAAAAIAAAAQgPAAgNAFIgCAAIAAAAIgEACIAEgCIAAAAIACAAQANgFAPAAIAAAAIAAAAIAFAAIABAAQBWAGBfCmQAhiSgBh7QAAh0gdhfIAEgDQB+CQEpBNQFZBWCtKHIDtJkIg0AcQixBSjnBCIgzAPIiLlxQAAlIANlVQgNFVAAFIQAAI9ApIVIBhO5QgRAMgXAKQgYAKgFAAQoKCnnkAAQmZAAl+h3g");
	this.shape_417.setTransform(919.2,390.7);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#DEB180").s().p("EgWgAiiIiTiZICTCZIhNAAIhsiCIAhmsQiXwcBXmRIAAgJIAylSQC7A5EUgGIiJFrQgFHMhhKkQgPCsA+ApICKBwIAoEdIhkAtIgRguIAMguIgchsIAABsIAQAuIARAuIBaA8IgmAyIibg0IhSivIBSCvICbA0IgjgBIiigEIiCiMICCCMICiAEIjIAsgEAUgAgOIAAg8Ig8gyIgoj9IBzkxQg8kjiMkwQjSlzhBmeIgwh8QDnhCCxhSIAlCZQC3G1BiPoICPGvQAlCIgxAWQglAjgsAVIgyBdIieBDgEAVcAgEIAygtIgYgyIgXiMIAABaIAXAyIAYAyIgyAtIg8gyIA8AygAme3bIgIgNQhaiLgNh6IAAjGIAAiJQAChAAqglQgMAVgEAbIgTB6IDJFGQApAdAlABQAmgBAkgeICDkJIARC/QAJAyhbCMQgWAegWAiIh/DEQhWhHg8hag");
	this.shape_418.setTransform(939.3,400.4);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f().s("#000000").ss(2,1,1).p("EACJg8bQDsCUEmBoQCUBDBABVQA9BRCoHiQClHgASBCQgfANglARQifBEkBBDIBuEpQAyGkEOJJQAwBzAbCRQg1CWhaCPIAcE7IB9A0IAtgnIhLhaIAgh7QAoBdADB4EAKQglgIBIDeQA1gEAagHEAKQglgQgECAAGBtIC1Z8QgjAQgjAPIgCAEQgEAyAABEIAAANQACFgAUFDQARFDAdG5IAPCQEALCgxTQgwG7gCE4EgGxhCRQgtATgBAmQgDArgCAfQgCA0ACAWQAAADAAAvQAAAEABAEQAAANAAAMQACA1ACAmQAAANAEANQAPBgB4CQQANAPANAQEgJWg8EQjRCJj6B4QjJBihKBNQg/BBglCzQgmCzhFFdQhGFdgSA6IBEAlQDCA4BkAMQBkALAngBIBKgDQAIHxiDTDIBhAsQASD/AWGEQAWGCAlDeQAiDJAhEdQAEAfADAhQAAAngTA7QgGAQgDAOQgBABAAABQgBAFgBAFQgEAcAJATQADALAIAMIAaA1IAIAnIACAlIABAlQBUAvDEj+QALgPAMgQEgYXgiUIAAAsIgpFAQhQG0BpPYIg+GfIBmCiIBpAgIA/gMIBQgHIBVAAIAqiCIgkgZIgsAlIgogjEAAmg+jQAAACAAACQAAAGABAHQAABKACAhQAAARgCAaQgCAUgDAaQgEAnhsCUQgGAJgHAJQgwA9g4CSQhHiCgwg5EAAmg+jQgBgQAAgRQAAgJAAgJIAAAAEgJWg8EQgXBUAYB/IBBDzQBUjwBoAuQAPAHAPAMEAAmg+jQBCAtAhBbEgBOg4TQB8hbBvD3QAikPg2iVEgHjg+KQhYAngbBfEgRwgxTQBVG0gCG7QAABVABBGEgRmghGIhUFXIiMUNIDcD2IgWDeIgsAlA0sgQIAMAMIAchaA0ggEIAgAdIAZg9IAAiAA3nAeICQCbA2nAAICgCyA4nAyICRCTAiPg6IAAADIhGSTIgCASAt+anQgjiUFijFEAJ7A6QQgShVg6geQh0gxAIinQgBgMABgNQACgjgDhCQgIiCggj5Qgzl3gnmeQgnmiibohQAAgBAAAAQAAgDgBgCQiZrZhznPAEwVxQAPAWAPAUQD5FREmATAjbS9IgdHiQACMpgECQQgFCQgJCsQgCDCAZC5QASDOhDA9QgHAHgJAEAw2lpQOWEZOemHQACgBABAAEATHgkUIBgEhQCIImBANxIB3HAIgjBnIg4AAIATgwAWkArIAwhXAUqAhIhVAyIAbAqICog8IAMgWIBUgvIATgxANQTzIAAADQA4EfAlDIIAAAAQAyEPAQBsQAaC7AJE/QAHE+AIA9QAJA7ANBIQAGAiALAaQARAnAbAXQAlAjAAA7IgFAdQgHAbgfAtQgUAVAUBRQAZCTg2AKQAWFLgnA+QgGAKgHAIAGoaiQBVDRDagxEAJ7A6QQA4gYA4gMQBegWBvAMQBEAKBVAkEAKHA3fQCPijDXB5EAQvBAhQACAFACAFEAJ7A6QQgLCChPCZQhGDPERAYQDxAHBWhuEgLmAyVQAJAOAKAMQBrCGDYg3QAMgDANgEAtzcYIAkM3QAACiAyBYQAlA+g+BvQgYBLA5AwIAABBIgJCaQgKB7AfgXQhTCShrCIQgJALgHAKQAKgEALgEEgMJA2wQAugOAtgCQBWgGBRAiQA9AaA6AwQA6AtAkgOEgPXA7fQhYB5BmBYQC8B1DPhrQAfgUAagjQAigtAZhGQA4igBghL");
	this.shape_419.setTransform(925.5,604.1);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#C2894C").s().p("AhHEQIjIlFIASh6QAEgYAKgUQAVgrAwgVIBmgRIBOAEIAfAFQBAAJAuAPIANAFIAUAJIAEACQAPAIAOAJIATARQAYAXAKAeIABAHIABABQADATgLAlIgiBEIiWEvQgjAegnAAQgkAAgpgdg");
	this.shape_420.setTransform(906.2,201.9);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#ECECEC").s().p("ALTF5QkRgXBGjQQCjg8CuAzQCYAmAlBZIAEALQhQBnjYAAIgfgBgAviCXQhmhXBXh4IAWgIQB1gpB9AxQCIAvBDBzQgaAjgfAUQhjAzhfAAQhnAAhig9gAKzA/QAjiNgEheQBegVBvALQgDCMgbCCQhfguhvAVgAtDikQBOhfAuh1QBWgGBRAjQgyBthGB3QhMgphfgEg");
	this.shape_421.setTransform(928,990.6);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#D8D8D8").s().p("AMqDCQiugzijA8QBPiZALiBQA3gYA4gMQAFBegkCMQBvgUBgAtQAaiCADiLQBFAKBUAkQAWFKgnA+IgQAHQgmhYiXgmgAsZAAQh8gxh2ApIgEgNQBriIBTiSQAugOAsgCQgtB1hPBeQBfAEBMAqQBHh3AxhuQA+AaA6AwQA5AtAlgOQhhBLg4CfQgYBGgiAtQhDh1iJgug");
	this.shape_422.setTransform(932.8,984.9);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#4D83AC").s().p("AQSexQjOgliYBPQCQijDWB5gAquasQCeA7ClATQg/AQg2AAQiCAAhMhegAHOCeQB7CHCzAZQgpAKglAAQicAAhEiqgAtNEUIgCglQBigEC3imQilDXhVAAQgQAAgNgIgAFzhoQEBDOEeCVQkmgTj5lQgAoZi1QjgCbhgC+QgjiUFjjFgAtpijIgCAAQghkdgijIQgljfgWmCQgVmEgTkAQOWEZOemHIABAEQgEAxAABFIAAAMQACFhAUFDQASFDAcG5IgMACIAWBxIAFAdIABAIIABANIAAADIAAAAQABAKgBAJQgNgYgJgfQgGgUgIgoQidrxAcsAQABgNACgJInOB3Qh6Agg+ANQhmAVhTAGQh/AKiygUQjLgchlgKQhlgLgmgHQhCgPgtgdIAAAAIgEgCIACAGQAGAhACAvIABBQQACA3ANBpQANBsACAzQACAjAABkQABDDAbFCQAhGGAGB9QAAAGgEAGQgCAEgDAAIgDgCgAjVoRQgCgeAAhWQACkzAEiZQAHj/ATjMIABgCIgDgCQgMgHglgKQgggKgQgLQgGgDAAgGQgCgHAIgEQAEgCALABQBQAEBLAJQAIACACADIABADIACgEQADgFAHgDQARgIAmgMICDgqQAIgCAFABQAIAAAAAHQAAAEgHAGIhCAyQgiAdgSAcQAHAgAFAzQAIBIACAPQAGAnARA7IAaBhQAJAmANBMQA8FlAkFfQgMgGgFgYIgBgFIgBAAQibrYhxnRIAFgCIgBgDIgBABQgBADgCABIgBAAQgEACgKAAIAOABIhGSUIgEAAIADATIADAkQAAAZgIASIgEAHQgYhngDhsgAik4bIAAALIAEgOIgEADg");
	this.shape_423.setTransform(921.8,758.1);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#86B4D6").s().p("ANkfTQhvgMheAWQg4AMg4AYQgShVg6geQh0gxAHinIABgZQACgjgEhCQgIiCgfj5Qgzl3gnmeQgnmiibohIAAAAIgBgGIABAAIABAGQAGAXALAGQgjleg7llQgNhMgJgmIgbhhQgQg7gGgnQgDgQgHhHQgFg0gIggQASgcAigcIBDgyQAHgHAAgEQAAgGgIgBQgGgBgHACIiFArQglAMgSAIQgGADgDAFIgCAEIgBgDQgCgEgIgBQhLgKhRgEQgKAAgEACQgIAEABAHQABAFAGAEQAQALAgAJQAkALANAHIACABIAAADQgTDMgHD/QgECZgCEyQAABXABAdQAEBsAXBoIAEgIIgcHhQACMpgECQQgFCQgJCsQgDDCAaC5QARDOhCA9QgHAHgJAEQglAOg5gtQg6gwg9gaQhRgihWAGQgtACguAOQgfAXAKh7IAJiaIAAhBQg5gwAYhLQA9hvgkg+QgyhYAAiiIgks3QBUAvDEj9IAXgfIgXAfQi3CkhiAFIgCglIgIgnQBgi+DfiaQliDFAjCTIgag0QgIgMgDgLQgJgTAEgcIACgKIAAgCQADgOAHgQQATg7AAgnIgHhAIACAAQAEAEAEgGQAEgGgBgGQgFh9gimHQgblBAAjDQAAhlgCgiQgCg0gNhrQgNhpgCg3IgChQQgBgvgGghIgCgHIADADIABAAQAtAdBCAOQAmAIBkALQBmAKDLAcQCyAUB+gKQBUgGBngWQA9gNB5gfIHPh4QgDAKAAANQgcMACdLxQAIAoAGATQAJAgAMAYQABgJAAgKIAAAAIAAgDIAAADIBdHmIAAAAQAyEPAQBsQAaC7AJE/QAHE+AIA9QAJA7ANBIQAGAiALAaQARAnAbAXQAlAjAAA7IgFAdQgHAbgfAtQgUAVAUBRQAZCTg2AKQhVgkhEgKgAIzdQQCYhPDOAlQhcg0hOAAQhqAAhSBegAnkZvIAZgHIgZAHQimgTidg8QBrCGDYg3gAsnYgQgKgMgJgOQAJAOAKAMgAKDCzQizgZh8iHQBVDRDagxgAMZBwQkeiUkBjPQD5FQEmATgAD6jzIgegqIAeAqgAL1nNIgWhxIAMgCIAPCQIgFgdgAktozIADAAIgBATIgCgTgAkd6mIAEgDIgEAOIAAgLgAjx7HQAKAAAEgCIgBADgAjf7OIABgBIABAEIgGACQADgCABgDg");
	this.shape_424.setTransform(933.9,772);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#4A4A4A").s().p("AuObiIhggsQCCzCgHnxIgBiaIAAgVQAAmwhTmqQBTGqAAGwIAAAVIABCaIhKADQgnABhkgLQhkgLjCg5IhFglQATg6BFldQBGldAlizQAmiyA+hCQBLhMDJhjQD5h4DSiIQgLApAAAzQAAA2AMBAIBAD0IACgEIAFgQIABgBQBDi0BQgBIAAAAIAAAAQARAAARAHQgRgHgRAAIAAAAIAAAAQhQABhDC0IgBABIgFAQIgCAEIhAj0QgMhAAAg2QAAgzALgpQAahgBYgnIABAZIAEBcQAAANAEANQAPBgB4CQIgEALQAOAHAQAMQAwA5BHCDQA3iSAvg9IAOgTQBtiTAEgnIAFguQACgaAAgSQgCggAAhLIgBgNIgBgEQBDAtAhBcQDsCTElBoQCVBEBABVQA8BRCoHiQCmHgASBCQgfAMglASQigBDkABEQgaAHg1AEIhIjfQACk4Awm6QgwG6gCE4QgFCBAHBtIC1Z7IhGAeIgDACQocDjoXAAQmBAAmBh2gAFG0rQANhqAAhXQAAiIghhaQAhBaAACIQAABXgNBqIgBgCQhRiyhYAAIAAAAIAAAAQggAAghAXIAAABIgBAAIABAAIAAgBQAhgXAgAAIAAAAIAAAAQBYAABRCyIABACIAAAAg");
	this.shape_425.setTransform(908.7,391.7);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#DEB180").s().p("EgWWAisIiRiTICRCTIhpggIhmijIA+mfQhpvZBQm0IAok+IABgtQDCA5BkALQBkAMAngBIhUFWIiMUNIDcD1IgWDfIgsAlIAkAZIgqCCIhVAAIigixICgCxIhQAIIiQibICQCbIg/AMgEgTYAgjIAsgmIgsAmIgogjIAZg/IAAh/IAAB/IgZA/IgggfIAgAfgA0gfhIAchaIgcBaIgMgLIAMALgEATVAg5IBVgyIAtgoQgDh4gohcIggB6IBLBaIgtAoIh9g0Igck7QBaiPA1iWQgbiRgwhzQkOpKgymkIhuknQEBhECfhDIBgEhQCIIlBANwIB3HAIgjBoIg4AAIATgxIgTAxIgTAxIhUAvIAwhXIgwBXIgMAXIioA8gEgUAAgAgAk64GIgagfQh4iQgPhgQgEgNAAgNIgEhcIAAgZIgBgIIAAgyQgCgVACg1IAFhKQABgmAtgTQgKAUgEAYIgSB6IDIFGQApAdAlAAQAnAAAjgeICWkwIAAABIAAARIABAhIAAAEIABANQAABLACAgQAAASgCAaIgFAuQgEAnhrCTIgOATQgwA9g4CSQhHiDgwg4g");
	this.shape_426.setTransform(925.5,401.9);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f().s("#000000").ss(2,1,1).p("EANNgyjQAYEjglLLIAAAZQAAADAAAEQgBACAAACIAAABQABAAAAAAQADAAACgBQARgCARgCQD6glCshBEAEyg9XQEBDcFdCxQDgCXBWIlQAdDNBgEqIg2AcIA4DWQBvGpA4QMQAAADAAACIACAUQAsDWAAE3IiIB8IAVg2EgFMg+vIAHiFQAHg+ArgkEgG6g8kQkrDajnB4QkJB2hBHMQgtEahuGsQgBACABACQACAWBJAaQCVAuEWASIAzAAQgKIBhqRnQASAYBRA5QA6GvArFXQAAABAAAAQAOB0ARB7QAHAyAIA0QAAABAAAAQARBzAOBkIAAAAQAMBbALBPQAAAAAAABQAfDmAKB1QAEAwABAdQABAfgDAJQgBACgBACQgEAMgDALQAAABAAAAQAAAAgBABQgKAjAAAfQAAAjAWBEQAAACAAACQAAABABAAQAAABAAAAQACAKAEAKQAcBXANFBQAJD+ATDFQAFA1AGAwQATCkACB1QgCCpBDAWQARBogRCLQgRAyARAdQiECwgxBYQgHAGgGAHQAHgDAIgCEgPCgwyQAYFrAcFKQAJBmgDCxIAAABQAAACAAACQAAAFAAAGEABVg3xQBmjAAZimQAFghACghEADJg+wIALBZEADWg/JQA+AQAeBiEABVg3xQCEiFBwC4QASkWgpiDEgC+g3nQADAFAEAGQA+BYBUBiQBFhrA1hkEgFQg9rQgIAeAEAkQARCBCFDBEgFMg+vQg+AWgkBOQgHASgFAVQgmCmCFEnQBjjXA6BHEgFMg+vIgEBEIgEBCEgO7ghWIhBDtQgdBdgEBtQgVEfiNIHQg4EGgRDuIDaDhIAADHIhCA/EgVmgiWIgXDQQiOFyATNGIAeGlIg+GcQgKBABSA/IBRBNQAmACAFgiAzNg1IAnAYIAABNIgPARAyQCHIAPgWIARgPAzHDrIB2gbIABhHIgfgmIgBgBAzhAGIBRCBIAJAOA3HBSIB6CHIAnArQA2AUApgtA17AmIC0DFEgBrA5eQA6ABADhmQAEhaAmgwQBShuhBiHQgphPgEhgQgCgkgBgqQgCgrAAgxQAEiiAEiiQAEiRAEiRQADiRAFiQQAAgPAAgPQABgiABgjQAFiqAGiyQAAgPABgPQADhMADhOQABgnACgnQADhOAEhPQAAgBAAgCQAEhYAEhaQAFhkAEhTIAiq2IC1M7IAzDuIAZBeAqhbeQAHAGAGAFQC5CEDdl3AqmYWQBUBrEPjvQANgMANgMAFXTfIBsGZIB6XSQABAUABATQAeFoDyCgQBLhXA+gYQBaglA/AJQBIANA+AjQAWB+BNBmQA5BpAHBNQAMCikMAyQkMAygei5QgWi5gLjTAIUU8QANAaANAXQDoGoEHhlQAMgEAMgGAuZmdQEtDXNZhOQGJg6EjjGQAqGpAIChQABAGAAAGIAPIqIAZETEANngiVIBYEVQA2GHDsKRIBJD9IiUEOIAAEdIAxApIAAApIBqBwIBLgZIAWg3EAM/giQQgQL4CnNLIg9A5AUuAKIgqhbIAZiWIA8A0IAACMIgrAxIgaAIIAdAAgATHgXIAxApIAcAAAQEQ3QADAeADAcIAAABQALB2ADBjQACA6ACAwQAAARABAQQAAADAAADQACApgFArQAHgGAAAEQBFBLAJBoQABAEAAAEQAAACAAABQAEBAAGAuQABAHABAHQAEAfAFAVQANA5ADEZQACEYANBmQALBnAdEjQBAC0gwAyQgBAGAAAGQgGBTAnBdQAmBtgrAZEATcAzcQgHAHgJAEQkDANh5CLEAJ7ApqQAGAVAGAVQBrFOEiBvQAQAHAQAFEgH1A3MQAbgNA9gRQBLgKA6AZQBaAXBTCKEgH1AyKIFzBiEgD9A9uQAEAHADAIEgK3A7hQhbBbA7BbQBKBcDPgKQCggKAohiQAFgMADgNQAriPBYh3");
	this.shape_427.setTransform(896.8,603.9);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#C2894C").s().p("AhMEQIjUlFIATh6QAGgdANgWQAXgmAugTIBtgRIBSAEIAhAFQBEAJAxAPIANAFIAXAJIADACQARAIANAJQAMAIAKAJQAYAXALAeIACAHIAAABQADATgLAlIgpBPIgNAYIiNEMQgmAegpAAQgmAAgsgdg");
	this.shape_428.setTransform(894.3,201.9);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#ECECEC").s().p("AIaDlQAxiaDxglQC/gPBJCAQAMCikMAyQg5ALgvAAQirAAgXiRgAwtB2Qg6hbBahaIAPgFQBwggB+AlQCDAlA6BnIAHAPQgoBiigALIglAAQixAAhDhTgAKCkWQBaglA/AKQAOBsA0CDQhMgOhmAjQgSh9gXhsgAtoipIB1jJQBLgJA6AYIhpDcQg/gnhSAFg");
	this.shape_429.setTransform(931,991.1);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#D8D8D8").s().p("AHXhfQBMhXA+gZQAXBsASB8QBlgiBMANQgziCgOhsQBHAMA+AjQAWB/BNBkQA6BqAHBMQhKiAi/APQjwAlgyCaQgWi6gLjRgAsxAHQh+gkhxAfIgCgHQAxhYCEiwQAbgMA+gSIh2DJQBTgFA/AnIBpjcQBaAXBSCKQhYB3gqCPIgQAJQg5hoiDglg");
	this.shape_430.setTransform(934.3,984);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#4D83AC").s().p("AJGV2QCsERDgCsQkhhvhrlOgArVHKIgOgKQC7AqDokSQijEViQAAQgyAAgwgjgAHtBPQDXEbEXAoQgyATgxAAQjQAAi7lWgAhZABIAFlkQABjHgEifIgHj6QgDiRAEhoQABgZgGgLQgEgJgLgJIhahVQgIgDAAgEQgBgFAGgCQAFgCAFABQAVAEAfALIAzATQAeAJAdAEIAWAEQACgDAGgCIClhDQAPgFAFAFQAJAJgPARQg3A/geBNIgCAFQAEAoAKAzIAVBcQAtDCAoD3QAXCNArEvQAIA5gFAdIAAABIgRhDQgLgsgKgyQgUhqgUiHIgQADIi0s7IghK2IgJC3IgICyIAAADIgRgBQgCB7gEBvIAAAAIgGCbQgGBqgMA5gArnD4IABgEQADgKgBgeQCGA7DZiTQi7ClhhAAQgsAAgaghgAsEjdIAAAAQgOhTgNhYQgOhngNhwIgLhoIgRADQgRh7gPh0IAAgBQgrlXg5mwQEsDXNZhOQGJg6EjjGQArGpAICiIAAAMIAQIqIgJABIABAGQAGBTAFAqQAHAzAOBcIAIAyQAJBKgBA8QAAAfgEAbIAAABQggiVgWi/QgNhxgTjmIhJtyQgDAFgHAGQgrAjg/AbQgsAShLAVQjxBFjKAfQjvAljUgMQhAgDhRgKIiRgTIkFgjIgEgBIAAAAIAAABICHWxIgWhwg");
	this.shape_431.setTransform(903.3,734.9);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#86B4D6").s().p("AFSYJIgCgmIh63SIhsmZQAEgdgHg4QgrkvgXiOQgnj2gtjCIgVhcQgKgzgEgoIACgFQAehNA2g/QAPgRgJgJQgFgFgOAFIimBCQgGADgCADIgWgFQgdgDgegJIgzgTQgfgMgVgDQgFgBgFACQgGACABAFQAAAEAIADIBaBUQALAKAEAIQAGAMgBAZQgEBoADCRIAHD6QAECegBDHIgFFmIgFFBQAMg5AGhqIAGibIAAAAQAEhwACh8IAQABIgHCeIgDBOIgGCaIgBAeIgLFbIgCBEIgBAeIgIEiIgIEiIgHFEIABBbIADBPQAEBgArBOQBACHhSBvQgmAwgEBaQgEBmg6gCQhTiKhZgXQg7gYhKAKQg+ARgbANQgQgeAQgxQARiLgRhoIF0BhIl0hhQhDgWADipQgDh2gSijIgLhlQgUjGgIj9QgNlBgdhXIAIgKQC4CEDdl1QjoERi7gqIAAgBIAAgBIAAgEQgWhEAAgjQAAgeAKgkIAAgBIAAAAIAIgYQBTBrEPjuQjZCTiGg7QgBgdgEgwQgKh1gfjmIAAgCIgXipIAAgBIgfjWIAAgBIgOhnIARgCIALBoQAMBwAPBnQANBYAOBSIAAAAIAWBxIiH2xIAAgBIAAAAIAEABIEFAjICRATQBRAKBAADQDUAMDwglQDJgfDxhFQBLgWAsgSQA/gaArgkQAHgFACgFIBKNyQATDlANByQAWC+AgCWIAAgBQAEgcAAgfIAGA7IAAAAQALB3AEBjIADBqIABAgIABAGQABApgEAsQAGgHAAAEQBGBLAJBnIAAAJIABACQADBBAGAuIACAOQAEAfAGAVQANA5ACEZQACEYANBmIAoGKQBAC0gwAxQgHAIgJAEIAPABQgGBTAoBdQAlBtgrAZQg+gjhHgNQg/gJhaAlQg+AYhMBXQjyiggelpgAJjcYQB5iLEDgNQkDANh5CLgAMnXqIAgALIgggLQjgisiskSQBrFPEhBvgAGbQsIgNgpIANApgAMwBJIAYgKIgYAKQkXgpjYkZQDoGmEHhkgAowjUIAbgZIgbAZgAFBj5IgZgxIAZAxgAriYjgABAooIg0jtIAQgEQATCIAVBpQAKAzAKArgALyt3QgFgpgGhTIgBgHIAJgBIAYEUQgPhcgGg0g");
	this.shape_432.setTransform(920.4,767.8);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#4A4A4A").s().p("AthbHQhRg5gSgYQBqxoAJoAIABgLIAAgCIAAgBIAAgBIAAhPQAAh6gGhOQgdlLgXlqQAXFqAdFLQAGBOAAB6IAABPIAAABIAAABIAAACIgBALIgyAAQkXgRiUguQhJgagDgWIABgEQBtmsAukaQBBnNEJh1QDnh4ErjaQgJAlAAArQAACXBoDmIADgHIAAAAQBIiYAxgDIACAAIAAAAQAQAAANAQIABABIAAABIAIALQA+BYBTBiQBGhsA1hjIACgCIAAAAQA2g2AzAAIAAAAIAAAAQBGAABABmIAAABIACADIABABQAFhUAAhGQAAikgchbQEBDcFdCxQDgCWBWImQAdDMBgErIg2AcQitBAj5AmIgiAEIgFABIgBAAQgQL3CnNLIg9A5QkkDGmIA6QjmAVi8AAQoIAAjciegAN3gsIAAABIAAgBIAAgEIAAgHIAAALIAAAAgAN4hQIgBAZIABgZQAWmvAAkUQAAi3gJh0QAJB0AAC3QAAEUgWGvgAmL5vQAAgrAJglQAFgVAHgSQAkhOA+gWIgEBEQgIAeAEAkQAQCBCFDBIAAgBIgBgBQgNgQgQAAIAAAAIgCAAQgxADhICYIAAAAIgDAHQhojmAAiXgAGB1ZIgBgBIgCgDIAAgBQhAhmhGAAIAAAAIAAAAQgzAAg2A2IAAAAIgCACQBljAAaimIgLhZIANgZQA+AQAeBiQAcBbAACkQAABGgFBUIAAAAgAEM7yQAFghACghQgCAhgFAhgAFq7yIAAAAg");
	this.shape_433.setTransform(891.2,389);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#DEB180").s().p("EgUmAjKIgngrIh6iHIB6CHIgHAGQgFAigmgCIhRhNQhSg/AKhAIA+mdIgemlQgTtGCOlxIAXjQQCVAuEWASIhBDsQgdBdgEBtQgVEfiNIHQg4EGgRDuIDaDhIAADIIhCA/IgRAPIgPAWIAPgWIASgOIAfAmIgBBHIh2AbIi0jFIC0DFQgcAggjAAQgPAAgRgHgEgSQAhNIAJAOIgJgOIhRiBgAymf2IgPARIAPgRIAAhOIgngYIAnAYgATHfYIAAgqIgxgpIAAkdICUkOIhJj9QjsqRg2mHIhYkUQD6glCshBIA4DWQBvGoA4QMIAAAFIACAUQAsDWAAE3IiIB9IAVg3IgVA3IgWA3IhLAZgAUxfYIgDgIIArgyIAAiMIg8g0IgZCWIAqBcIgaAIIgcAAIgxgqIAxAqIAcAAIAdAAgAi34WIgHgLQiFjBgRiBIAEhCIAEhEIAHiFQAHg+ArgkQgNAWgFAdIgUB6IDVFGQArAdAoAAQAoAAAlgeICNkMIALBZQgZCmhmDAQg1BkhFBrQhUhig+hYg");
	this.shape_434.setTransform(896.8,404.9);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f().s("#000000").ss(2,1,1).p("EAFdg7DQHJDXCPBoQAlAaAlAcQB8BtAlGLQAiENBzGfIgxAGEANgghrQATgGB0gPQB0gPCpgVEANggy1IAARKIBIDEQAbBaADB/QAQEgCYIhQApC0ALDSIi2EgIAADtIBrAoIAfAVIACAvQAOArAmgBQAigIAfgfIAZhBQAbALAhgxIAtg+IAqgcIAZhAIhAl4QAaxEhHlOIhBkOEADmhBYQABgQAAgRQAGhekZAKQj8AGgWCKQAMB1gHCZQAAAFAAAFQgCAkgDAnQgGA9CsC+EgGpg6UIqMFPQhJAagbBRQikHQhgHlQgNA9gIA9QAVAeAdAQQCwBqDsgDQALAAAegCQgCHPgLL+QgCBtgQEIIBcA5QAZGRCAL/QAhDOAqD6QAGAiAFAeQAOBQAJBSIAAAAQAJBSADBTQgyBoBSB8QBABNE3lcEgPDgx/IAIRBQAAADAAADQAAAQAAAQEAD1g9VQBJAdAfB1EABvg3vQCljPgKgfQgMg7gJg9QgGgugEgvEABvg3vQBmgsB+C4QAsjkgih8EgGpg6UQAPg+AeguQAdgwAmALEgGpg6UQghCOBBDQQBakNCXBkQA5BABZCvQA+i6A3hFEgWAgh9IghFYQhlGbAfJLIAfJWIgtGUQAEAVAGAOQAJAUAOAHQBHBDBaAaIAtAkIA6gJIAYAVIA9grIAyAAIBDiQIgSgoIAAAQIhgAbIgDABIgCgSIgrguIAAhjIAcABIAPCQEgPkggWQghCqgsC6QABGciLJFQgsDlALDsIDIDBIAADSA2jCOIAAAeIDXC1A3TCJIAAA7ICgCCA1DCVIDMC2EAABA6YQA3gKgEhwQgDhOAtg7QAwg8gDg+QgIgzgbghQgPgRgLgoIhAypIAWsJIAhyrQCSImBVFKQAAAAAAABQAgB9AbBsQAkCVAaByQAAAAAAABQAAACABACQAEATAEASQAMA6AJAvQABACAAACIAAAAQAHAnANBaQAKBFANBkQAFAoAGAtQAYDBAiEcQABACAAACQAMBtAcD/QAFAqAFAuQACAVACAWQAHA5AFAxQAEAdADAaQAbDdAUBBQAGAXALAbQABACABADQBOC/CVBmQA2hIBQgkQBBgeBdAKQBBAHBJAcQABAKACAKQAAABAAABQAVCKA2BHQA3BHAPA3QAVAlgFBdQgFBci0BKQjCAehSgxQhZgjADhiQgvi1AAjjApsZCQBGCsEpk5QAKgLAKgMAJKVWQARAgARAdQDfF5EUhfEANgghrQgVMDCuO7IhYAsARygpIgagLIAWhAgEAUzAxZQgQgpgMhlQgBgHgBgHQgSjHgPiqQgRi3gLiWQgLiQgGhxQgGhygNhaQgBgGgBgGQgBgGgBgGQgKhfgohXQgDgHgEgIQgDgGgDgGQgCgEgDgFQgGgMgFgLQgBgEAAgFQgGgrgEgpQgDghgDghQgCgPgBgPQgJhMgHhHQgEgogDgmQgCgUgCgUIAAgBQgRjFgEiJQgLkTgrloIhGoaAPcb5QgWBAhPAHQhQADhLhpAt+mdQLRG8ROmgEAT8AxSQAhgEAWALQAuAYgFBeQAAAkgXAxQgUBCAbAvQBACagyAYQgDACgDABEALKAqUQAIAgAJAdQBwFlE/AYQAQABAQAAEAO3A2jQBgixDIAoApMcmQgGB+AMElQANEmBCF2IAXC+QABAaACAgQAEBDAxAjQABABABABQAhAbgMBqQgFAogLA0QgSBLAfAYIi4ESQhXBPAwBsQAkA6CJAXQDpAWBMh4QAYgnAIg2QAkh2BOhaEgGUA4JQAngRAogFQBKgIBNAhQAyAWAzAoQAmAbAkAzEgGmAzFQC7AoC4BJ");
	this.shape_435.setTransform(887.3,597.6);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#C2894C").s().p("AhMEQIjUlFIATh6QAPhOBJgeIBtgRIBSAEIAhAFQBEAJAxAPIANAFIAXAJIADACQARAIANAJQAMAIAJAIIABABQAYAXALAeIACAHIAAABQADATgLAlIgZAwIiqFDQgmAegpAAQgmAAgsgdg");
	this.shape_436.setTransform(885.3,201);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#ECECEC").s().p("AJvFQQhYgjADhiQBOiWDFgTQDFgSA6ArQAWAlgFBdQgGBcizBKQhLALg6AAQhdAAgzgegAt/DHQiIgXglg6QgwhsBYhOQEEhJC2DyQhABmixAAQggAAgkgEgAJwk4QBCgeBdAKQAfCMA8BxQhaAFhcATQg2h2gOiLgAtliuIBoi+QBJgIBNAhIhnDNQhLgrhMADg");
	this.shape_437.setTransform(931.4,991.2);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#D8D8D8").s().p("AHXh7QA2hIBQgkQANCLA3B1QBcgTBagFQg9hxgfiLQBBAHBJAcIADAUIAAACQAVCKA2BGQA3BHAPA3Qg6grjFASQjGAThOCWQgvi1AAjigAwYAMIC4kRQAngRAogFIhoC+QBMgDBMArIBnjNQAyAWAzAoQAlAbAmAzQhPBZgkB2QgIA2gYAnQi2jzkFBJg");
	this.shape_438.setTransform(933.3,983.1);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#4D83AC").s().p("AQvcXQi2AshyBeQBgiyDIAogApXbCQC8AoC4BJQk2grgpA/QANhqgigbgAIrTPQC9EGDyB2Qk/gYhwlkgAIsDXQBxAwCPgRQgWBAhPAHIgFAAQhOAAhIhmgAG8hvQDyD5EBAgQg4ATg1AAQjUAAiyksgAscA/QgDhSgJhSIAMgBIgMABQgJhSgPhQIgKhAIhLnIQiAsAgZmQQLRG8ROmhIBGIbQArFoALETIgRABIAeEYIAFA2QAHBMgBArQAAAIgFAAQgJgOgDggIhcsYIgOhoIgQhWQgGghgOhmIgkkfQgIg/AAgjIhJAaQhDAYgtANQgkAKgtALQkSBEkdAeQhGAIgkAAQhmACiJgeIhdgUQhFgKgjgHQhFgOhfglQhlgrg1gVQAFAOACAXQAMBqAEBEQADAzADARQADAVAKAqQAHAgAIBCQASCZAoGBIAHBJIAJBDIAKAzQAHAfACATIAGA+QAFAzAZCQQAVB7ABBJIAAAqQABAZACARIAIAsIABASQAIAQACAcIACAbIAAAEQB8gBDKiPQjBDJhhAAQg1AAgYg9gAinhzQgSjtgCkqQgCi0AFllIADihQABgtgHgaQgHgZgRgVQgRgVgXgMQgIgEgFgEQgCgDAAgEQgBgEADgDQADgEAKABIB9ANIAGACQALgDAXgJIA+gYIAUgJIAOgKQAIgEAMgEQAIgCADADQAFAEgFAKQgGAKgRASQgPASgFALIgEANIgEAKQgEATAAAXQgBAbAHApQALBHAnCNQBkFrAnCrQBEEsAVDzQAAAHgDABQgDAAgDgDQgJgOgEgVIgCAAIgBgEIAAgBQgahygkiVIg7jpIAAgBQhVlKiRomIghSrIgOAAQAGCDgDBYQgBAPgHACQgGgTgDgmg");
	this.shape_439.setTransform(904.9,751.5);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#86B4D6").s().p("AlreUQgzgogygWQhNgihKAJQgoAEgnASQgfgZAShKQALg0AFgpQApg/E1ArQi3hJi8goIgCgCQgwgjgFhDIgDg5IgXi/QhCl2gNkmQgMklAGh9QAMAOATAAIAAAAIAGgBQAJgBAJgDIAAAAQBOgYChinIADgEIACgCIACgBIAEgFIADgEIABAAIAAAAIADgEIABgBIABgBIABgBIABgBIABgBIABgBIAAAAIAHgIIABAAIAKgLIAGgHIABgBIAJgJIABgCIAIgJIABAAIAAAAIAKgMIADgEIgDAEIgKAMIAAAAIgBAAIgIAJIgBACIgJAJIgBABIgGAHIgKALIgBAAIgHAIIAAAAIgBABIgBABIgBABIgBABIgBABIgBABIgDAEIAAAAIgBAAIgDAEIgEAFIgCABIgCACIgDAEQihCnhOAYIAAAAQgJADgJABIgGABIAAAAQgTAAgMgOQhSh8AyhnQBGCqEpk4QjKCQh8ACIAAgFIgCgbQgCgcgHgQIgCgSIgIgsQgCgSgBgYIAAgrQgBhJgVh6QgZiQgFgzIgGg+QgCgTgHggIgKgzIgJhDIgHhJQgomBgSiZQgIhCgHggQgKgqgDgVQgDgRgDgyQgEhFgMhqQgCgXgFgNQA1AUBlArQBfAmBFANQAjAHBFAKIBdAUQCJAeBmgCQAkAABGgHQEdgfEShDQAtgLAkgLQAtgNBDgYIBJgaQABAjAHA/IAkEfQAOBmAGAhIAQBWIAOBoIBcMYQADAgAJAOQAFAAAAgIQABgrgHhMIgFg2IgekXIARgCQAECKARDFIAAAAIAEAoIAHBOIAQCUIADAeIAGBBIAKBUIABAKIALAWIAFAJIAGANIAHAOQAoBWAKBgIACAMIACALQANBaAGBzQAGBxALCQQALCVARC4IAhFwIACAPQAMBkAQApIgBAAIgBgBQgOgHgUAAIAAAAIAAAAIgTACIATgCIAAAAIAAAAQAUAAAOAHIABABIABAAQAvAYgGBfQAAAjgXAxQgUBCAbAwQBACZgyAZIgJgRQhJgdhBgHQhdgKhBAeQhQAlg2BHQiUhlhPjAIgCgFQgLgagGgXQgUhCgbjcIgHg4IgMhpIgEgsIgKhYIgolsIgBgDQgikcgYjBIgLhVIgXipQgMhagIgmIAAgBIgBgEIgVhpIgIglIACAAQAEAVAJAOQADAEADgBQADgBAAgGQgVj0hEkrQgnishjlrQgniNgMhHQgHgpABgbQAAgXAEgTIAEgKIAEgMQAGgMAPgRQARgTAGgJQAFgKgFgFQgDgDgIACQgMAEgIAFIgPAJIgUAJIg+AZQgXAJgLACIgGgBIh9gOQgKgBgDAEQgDADABAEQAAAEACADQAFAFAIADQAXANARAUQARAVAHAaQAHAZgBAuIgDCgQgFFmACCzQACEqASDtQADAnAGASQAHgCABgPQADhXgGiDIAOAAIgWMHIBASpQAMAoAOASQAbAhAIAzQADA9gwA8QgtA8ADBOQAEBvg3AKQglgzgmgagAKVbtQByhdC2gtQglgHghAAQiTAAhPCRgANoWXIAgACIgggCQjyh2i9kGQBwFkE/AYgAG5QbQgJgegIgfQAIAfAJAegAJVCJQBPgGAWhBQiPARhxgwQBLBqBQgEgAM9gJQkBgfjyj6QDfF3EUhegAofkBIAUgWIgUAWgAFKkiQgRgegRggQARAgARAegAuakZIAMgBIgMABg");
	this.shape_440.setTransform(916.3,769.4);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#4A4A4A").s().p("As/ZqIhcg5QAQkIAChtQALr/ACnOIAAggIAAgDIAAgDIgIxAIAIRAIAAADIAAADIAAAgIgpADQjsADiwhrQgdgPgVgfQAIg9ANg9QBgnkCknRQAbhRBJgaIKMlOQAPg/AegtQAdgxAlALIgEBLQgGA9CsC/QA5A/BYCwQA/i6A3hFIACgBQATgIAUAAIAAAAIAAAAQBSAABgCIIACACIAAAAIAAAAIAHALQAZiCAAhgQAAhJgPg2QHJDYCPBnQAlAaAlAdQB7BsAmGMQAiEMBzGgIgxAGQipAUh0APQh0APgTAHIAAxLIAARLQgVMBCuO7IhYAtQoVDJm8AAQnZAAl1jlgAlK0uIADgJQBBi7BfgBIAAAAIAAAAQAlAAApAcQgpgcglAAIAAAAIAAAAQhfABhBC7IgDAJQgriLAAhtQAAg3ALgvQgLAvAAA3QAABtArCLIAAAAgAGL1mIAAAAIAAAAIgCgCQhgiIhSAAIAAAAIAAAAQgUAAgTAIIgCABQCljPgKgfQgNg8gIg9QBJAdAfB1QAPA2AABJQAABggZCCIgHgLgAGc68IAAAAg");
	this.shape_441.setTransform(881,392);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#DEB180").s().p("EgSqAkOIjXi2IAAgeIAAAeIDXC2Ig6AIIgtgkIigiCIAAg7IAAA7ICgCCQhbgahGhCQgOgHgJgVQgHgOgDgVIAtmVIgfpWQgfpLBlmbIAhlXQCwBqDsgCQgiCogrC6QAAGciKJFQgtDlAMDtIDIDAIAADTIAAARIhgAaIBggaIAAgRIASAoIhDCQIgyAAIjMi1IDMC1Ig9AsgEgSCAgrIArAvIACARIADgBIgFgQIgPiQIgcgBgEgRVAj3gEASaAgfIgCgwIgfgVIhrgoIAAjtIC2kgQgLjTgpizQiYoigQkfQgDiAgbhaIhIjCQATgHB0gPQB0gPCpgUIBBENQBHFOgaRDIBAF5IgZBAIgqAbIgtBAQgiAwgagKIgZBAQgfAfgiAIIgCAAQglAAgNgpgAR6d3IAaALIgEhKgAh24yQisi/AGg9IAEhLIABgKQAHiZgMh1QAWiKD8gFQEZgLgGBeIgBAiQgKgJgLgIQgNgJgRgIIgDgCIgXgIIgNgFQgxgQhEgIIghgFIhSgFIhtASQhJAegPBNIgTB6IDUFGQAsAdAmABQApgBAmgeICqlEQAEAvAGAuQAIA9ANA8QAKAeilDQQg3BFg/C6QhYiwg5g/g");
	this.shape_442.setTransform(883.9,401.1);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f().s("#000000").ss(2,1,1).p("EAO4g0uQAAAEAAADQgCAZgBAaQgZHRACIUIBFAAIAlCUQgcEGBxTFIhFBLIiBCNIgOAOIgQAwEAGtg+AQDDCFE3CDQGTByB2TXIgiAGIAJCnQAXHVhyP4IAqHKQgNA5gWAFIg0AAQgUArhJARQg7AggpggIg2AqEAPjgkPQDDgBDogZEgM3gyBQgBAHABAIIABAWQAAAFABAGQACAZADAbQAEAtAEAxQAYE+gEHNQgDFxgVHNIhLMWQAcAcAhATQAFADAHAEIAMAGQABAAACABQALAFALAEQApKICENTQAPBfgLCeQgKBPAHA9QAGA7AWArQACADABADQAHAPAGAOEgFrg8qQjxB7j9CMQjoCJhkH/IiVJaQAhApAvAUQCyBbDugJQARgBAlgBEADQg6EQBYg9CGDNIAMjBQAHh7gUhQEAE9hALQBTAcAdBvEAE9hALIAABsQgaB4hTCjEAE9hAeIAAATEgBvg5uQBKBfBxCHQBSiZAyhjEgDHg/8Qg3DaCPC0EgFrg8qQgJCwAyCyQByjtBhBHEgDHg/8QiHAUgdC+EgDHg/8IALg8EgNKgiyIgvDPQgRDblJUEICmEWIAADrIhkBoIgcg3IAhhPIgchLIgoBdIA/B0EgTqgkEIgYCxQieHBgUSxIhXFrQgDBJAmAgICWB0IAZAcIBMANIARARIA5AAIASg8A1UgwIAABXIBnBpA2uhJIAABKIBcBmA3ohnIAABaABvPSIAMlXIAbsAID9RYIBeGcQAkC8AOB7IAQEgQADA7AHBLQABACAAADQAeE9A+IMIAqEsQAGAhAJAXQAMAgASALQgbBBC8CYQA4g+BEggQBOgkBdAEQA9ADBDAVQgZhXgDhHQgDgxAIgrQAXhzg2glQgdgUgGg6QgCiwAAi5QAAjggdkEQgNh0gKhcIgckAAonXnQASAyAIAuIAAFYQAEBqAABpQALD8AUC4QAUC5AHC7QgDBPA5A7QALAiAEAkQAEA6gQA/QgEAOgCANQgIAzAZAXQhACMiGCEQgZAZgRAYQhKBmBMBUQB3BVC/gsQBcgUAzguQA1gwAbhHQAmhqB4hiQAigCgGhdQgIhJASghQAJgQAHgQQAvhugkh7Qg9krAPl2QALjzACjJQAAgNAAgMIAFoNIAOmcAsJoaQFQDkKagoQFMAGFchyAPqlwIgKA5IAAABIggCqAOuk2IAyAAEAOegkPQADGOAcHWIBbNGAOii8IAABpIBBA1IA1gpIAlNzIAWIoQACBwAuBTQAlBJgKAtQgHALgJAHAOii8IAWAXAN0mMIgqB2IBYBaAMYV3QESF/BkhXEAMiA04QASADARACQCHAQBihPQAoggAigwQAGgLAHgKEAOSA4CQASAlANB1QAYDrAjA7QBGCDC4gOQChgIBYhbQAogrABgtQACgtgSgwQgahAg/hYQhciNgOheEgGLA1IQASgWA7gMQBEgOByA1QAlARAqAYQBKAtApBEEgGZAwkQBBBDCPAr");
	this.shape_443.setTransform(884.2,612);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#C2894C").s().p("AhMEQIjGkwIgOgVIATh6QAPhOBJgeIBtgRIBSAEIAhAFQBEAJAxAPIANAFIAXAJIADACQARAIANAJQAMAIAKAJQAYAXALAeIACAHIAAABQADATgLAlIgxBdIiSEWQgmAegpAAQgmAAgsgdg");
	this.shape_444.setTransform(892.8,200.1);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#2D2D2D").s().p("ANCWcQgQhwgMjSQgYl2gCi7QgBhQACihIAQxhQACiBAChJQAEhvAKhaQANh/AaheQAEgRAKABIAEACQADACABAFQABAGgCAJIgGAcIADgyIgDAyQgZHRACIUQADGOAcHWIBbNGIiBCMIgEAEIgBgOgAtyVaIgNgGIgLgHIAAAAQghgTgcgbIBLsXQAVnMADlxQAEnMgYk+IAQgCIgVhdQgFgcgDgXIgBgMIgCgWIAAgKIAAgEIAAAHIAAAHIAAgHIAAgHQACgHAFgBQAGAAACAKIAaB0QATBbAFAfQALBGAHBtQAjHVACGJQACHJgoGVQgOCKghEVIgKBfIgDgCgAuI0BIAAAAg");
	this.shape_445.setTransform(892.2,420.1);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#ECECEC").s().p("AI2EUQAhjYDHgiQDIghBgB4QASAwgCAtQgBAtgoArQhYBbihAIIgjACQicAAg/h3gAwvCVQhMhUBJhlQB8hcDGB2QBVAzAxBTQgzAuhcAUQhBAPg4AAQhuAAhPg4gAJYkJQBOgkBdAEQAcB7AnBuQhWADhYAgQglhngbiFgAtyihQBdh5AhhtQBEgOBxA1QgrBahfCQQhOg1hbAKg");
	this.shape_446.setTransform(928,987.8);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#D8D8D8").s().p("AHxAoQgNh0gSglQA5g/BDgfQAcCFAlBlQBYgeBWgEQgohtgbh7QA8ADBDAUQAOBfBcCMQA/BYAaBAQhgh5jHAiQjIAighDYQgig8gZjqgAr6AvQjGh1h7BaQARgXAagZQCFiDBAiMQATgWA7gMQghBtheB5QBcgLBOA1QBfiPArhaQAlARAqAYQBMAtApBDQh6BjglBpQgcBHg1AwQgxhUhVgzg");
	this.shape_447.setTransform(929,982.1);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#4D83AC").s().p("AKOerQBVgZBRgnQBIgiBFguQgiAwgoAgQhSBChrAAQgWAAgWgCgApBbYQgDgkgLgjQBABECPArIgeABQhVAAhOgpgArcBVIgCgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBgBAAAAIgBgHIgEgKIAAgCQgEgPgDgHIgFgMQgEgHgEgQIgEgQIAAgFIgBgEIgCgQIAAgDQgDgPgBgSIgNABQgHg+AKhOQALifgPheQiEtTgpqJQFRDjKZgoQFNAGFchxIgRAvQAAABABAAQAAABAAAAQAAABAAAAQABABAAABQAAAFgHAEIgIAEQhOAYhkAWQg8ANh5AYQhNAPgoADQgfADhlAAIifADQiNABkLgaQhzgMgxgJQhzgWhpgyQAEAEgGAFIgBAAIABANQACAEAAAGIABAXIACAJIABAJQgBAEgBABQAEB1AJB1IAeFEQALBwAJA6IARBWQAMBIASCMQAWCoAEBZQAGCPgXBwIgRBUQgHAwAJAjIAIAZIADARIAHAXIADAHIAIAZIAEAUIABAJQgBAGgEAAIgBAAgAEtiHIgBgBIgDgGIgFgRQgIgggJg8IgKg6QgMhEgPhKIgRAEIj9xYIgbMAIgSgBIgBBFIgBBAQABBpAGBTIAAABIABAWIAAAVIgBAQQgCAOgFALIgEgYIgCgQIgGgrIAAAAQgFgzgBgyIAAhYIAAgBIAAgDIABirQABh1ADg7IAEg9QAHifgOj4QgDgwgIgWIgCgJIgbgUIgSgQIACgDIABgFQACgFAIAAQAEAAAHAEQAPAIAcAEQA4AIA0gHIAagEIAZgGQAbgHAagMQALgEAEABQAFABACADQADAEgCADIgFAGIgjAVIABACQgSARgNAUQgNAVgIAXQgIAWgDAWQgDAaADAaQACAQAIAgIAWBOQAMAtARBKIAVBeIAhCYIAFAWQA2D6ATBfIAMA/IAEAcIAXCPIAAAAIAJA6IAAAAIAQBdIAEATQABAEgCACQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAAAAAIgEgCgAN7oEQgblGgZkHIghlTQAAgHABgBQACgCADAAIAAgDIA2gpIAkN1IgCAAQADA4gDAbQgBANgHABIAAAAIgBAAg");
	this.shape_448.setTransform(902.5,754.7);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#86B4D6").s().p("AGsbyQgRgLgNggQgJgXgGghIgqksQg+oMgek9IgBgFQgHhMgDg6IgQkgQgNh6gli8IhemcIARgEQAPBJANBFIAJA5QAKA9AIAfIAEASIAEAGIABABQAEADACgDQABgCgBgEIgDgTIgQhdIAAgBIgKg6IAAAAIgWiPIgFgbIgMhAQgShfg2j5IgFgWIghiZIgUhdQgRhKgNgtIgVhOQgIgggCgQQgDgaADgaQADgWAIgWQAIgYANgUQANgUARgRIAAgCIAhgWIAGgFQABgEgCgDQgDgEgDgBQgFgBgLAFQgZALgbAHIgZAHIgaAEQg2AHg3gIQgdgFgPgHQgHgEgEgBQgIAAgCAGIAAAEIgCAEIASAPIAaAUIACAKQAIAWADAvQAPD4gICfIgDA9QgDA7gBB2IgCCrIAAADIAAAAIABBYQABAyAFAzIAAABIAFArIADAPIADAZQAFgLACgPIgOGcIgFIMIAAAZQgCDJgLDzQgPF2A9ErQAkB7gvBuQgHAQgJAQQgSAhAIBJQAGBdgiACQgphEhLgtQgqgYglgRQhyg1hEAOQg7AMgSAWQgZgXAIgzQACgNAEgOQARg/gFg6QBbAxBmgJQiPgrhBhDQg5g7ADhPQgHi7gUi5QgUi4gLj8QAAhpgEhqIAAlYQgHgtgTgyIACABQAFABABgHIgBgKIgEgUIgJgYIgDgHIgGgZIgEgQIgHgZQgJgjAHgwIARhUQAXhwgHiPQgDhZgWioQgSiMgNhIIgQhXQgJg5gLhxIgelDQgKh1gEh1QACgCAAgDIgBgJIgBgJIgBgXQgBgHgBgDIgBgNIABgBQAFgEgEgEQBpAxBzAWQAxAKB0ALQEKAbCOgBICggEQBjAAAggCQAogEBMgPQB5gXA8gOQBkgWBPgYIAIgEIgqB3IBYBaIAABpIBBA1IAAADQgDgBgCACQgCACAAAGIAhFUQAaEHAaFFIACAAQAHgBABgMQADgcgDg4IACAAIAWIoQACBvAuBUQAlBIgKAtQgHALgJAHIAAABQgTAPgYAAIAAAAIgCAAQhsgDjdk0QDdE0BsADIACAAIAAAAQAYAAATgPIAAgBIAcEAIAXDQQAdEEAADgQAAC5ACCwQAGA6AdAUQA2AlgXBzQgHArACAxQAEBHAYBXQhDgVg9gDQhdgEhOAkQhEAgg4A+Qi7iYAahBgAKlbHQhQAmhVAZQCHAQBihPQAoghAigvIANgVIgNAVQhFAthJAjgAIAcGIgjgFIAjAFgAuBiAIgDgGQgWgrgGg7IANgBQABASADAQIAAACIACARIABAEIAAAEIAEARQAEAQADAIIAGAMQADAHADAPIABACIgNgdgAjXp6IAAgBQgFhTgBhpIAAhBIABhEIATABIgMFXIgCgWg");
	this.shape_449.setTransform(916.7,771.1);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#4A4A4A").s().p("AtEaYIgWgJIAKhfQAikVANiKQApmVgDnJQgCmJginVQgIhtgLhGQgFgfgThbIgZh0QgDgKgGAAQgFABgBAHIAAAEIAAAKIABAWIABAMIAFAzIAIBfIgIhfIgFgzIgBgMIACAMQACAXAGAcIAUBdIgQACQAYE+gDHMIg3ACQjuAIixhZQgvgVgigpICVpaQBln+DoiKQD9iLDxh7IgCA3QAACUArCXIABgCIADgGIACgFIACgDIACgFQBRihBJgBIABAAIAAAAQAWAAAWAQIAAAAIABABQBKBeByCIQBSiaAyhiQBTikAah4IAAhrQBTAbAdBvQAOA6AABRQAAAfgCAhIgMDCIgCgEIAAAAIgDgEIgBgBIAAgBQhjiThIgCIgCAAIAAAAQgVAAgUAOIAAAAIgBABIABgBIAAAAQAUgOAVAAIAAAAIACAAQBIACBjCTIAAABIABABIADAEIAAAAIACAEIAMjCQACghAAgfQAAhRgOg6QDDCGE2CCQGTByB3TYIgiAGQjoAZjEAAIhEAAQgDoUAanRIAGgcQACgJgCgGQgBgFgDgCIABgHIgBAHIgEgCQgJgBgFARQgZBegOB/QgJBagEBvQgDBJgBCBIgQRhQgCChAABQQACC7AYF2QANDSAPBwIACAOIADgEIgNAPQlcBxlNgGQhjAGhbAAQoOAAkejBgAt1aAIAAAAIAMAHIgMgHgAmn5AIACg3QAci+CHgUQg2DZCOC1IgBgBIAAAAQgWgQgWAAIAAAAIgBAAQhJABhRChIgCAFIgCADIgCAFIgDAGIgBACQgriXAAiUg");
	this.shape_450.setTransform(890.1,389.4);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#DEB180").s().p("EgSjAhtIgSgSIhmhpIAAhXIAABXIBmBpIhLgMIgZgcIhchmIAAhLIAABLIBcBmIiWh1IAAhaIAABaQgmggADhJIBXlrQAUyxCenBIAYiwQCxBaDvgIIgvDPQgRDZlJUFICmEWIAADrIhkBpIgcg3IAhhQIgchLIgoBcIA/B2IgSA8gAPbd4IAAhpIAWAXIgWgXIhYhaIAqh3QAGgEAAgFQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAIARgwIAOgPICBiMIBFhMQhxzFAckEIgliVQDDAADogZIAJCnQAXHUhyP4IAqHKQgOA5gVAFIg0AAQgUArhJARQg7AfgpgfIg2ApIg1AqgAP5c+IAfiqgAQYaUIgxAAgAQYaUIAAAAIAAAAIALg5gAg26iQiPi0A3jaIAKg8IDGExQAsAdAnABQApgBAmgeICSkXIAAAUIAABsQgaB3hTCkQgyBihSCaQhyiIhJheg");
	this.shape_451.setTransform(878.5,412.5);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f().s("#000000").ss(2,1,1).p("EAPAgzOQgCAAAAACQAAACAAACQgCAkgBAoQgDBUgEBnQgCAygCA3IgHCpQgEBigFBuIABAdIASE5IBgafIgtBFIg8BcIgNAUIhhEMIAtAsIARgbIAbBdIA4AMIADABEAPjgiJIgwAAEAG1g8JQC5CNFTB5QFICPBCJnIBpJvQgYAKgYADQi9ATjkgLIBGE8QAAGHA1NoIhLB0EgCGhChQhBAXAAAvQABA5gDA+EAEyhCKQgUghhmgKEgMNgyCQgBAJAAAJQAAACAAADQgNEwAaFuIAIGOQgQKuhKOFQANANAPAMQACABABACIANAKQAXATAZAQQAAABAAAAQgJGGCTQqQAFAhAEAlQALBvgCCUQgBBGgEBOEgFdg7EQiXB/laCPQj5CMglG0QgsEJhqGQQAmAcAqAYQCpBiEQAIIhuGIIkJSGIgiDXICND1Ig0EpIgmAAIgmAAIgOhNIgPhPIg1AcEADVg4RQBVg+CEDlQAniTgLihQgGg+gPgtEAFDg+GQBQAYAiBlEADVg4RQBIiAAeiFQAOg+gGgyQgCgSgCgSEgBkg3yQBGBRBtCRQBHiSA/hvEgFdg7EQAShRAtg2QAmgmAngJQgIBQADBAQAHB7BrB9EgFdg7EQghCQAzDoQBSjcCVA2EgDLg/OQgCApgEArAr3nDQABABAAAAQAMAIAMAIQEgC0IGALQJKANEkiiQAKgGAJgFEgSygipIg2E0QiEF0AETHIhzF8QgPA/AUAjQAFALAJAMQAoAyB7A4IAlgQIAVAOIAggOIAZAQIBThhAyCAXIggARAztB0IAvAnIAAAhAy+CbIArgkA1iAhQghBLAOApQAFAOAKAKICbBoA21A/QgRBJAYAeQADAFAFADICmBnACOBYIADhYIEGRsIBWFzQAiDDATEfIADATQBSQdBaGJQAMAgASALQgbBBC8CZQA4g/BEggQBOgkBMAHQBOABBDAUApgXMQgBAFAAAFQgBBEAuA7QAfApA2AlEAA4A5jQAigCgGhdQgJhIATghQAJgRATgsQATgtgkkgQglp7AHqaIARmuIAxziAPemgQAEgDAEgCAOghRIARAuIBGizgEAWEgiRIAkESQACHihmNZIAAH2IhWB5IgwAAIBOiAAQVBOIArALIARgYIBgAAIANgWAPbBUIABAAIAAAAIAOgSIArAMIAuUeIAEBlARSYgQANA7AdAvQArBMgQAdQgIASgNAJQgIBMAiCaQAnFMAnMKQAPBMAjACQBFAdhGDFQADBIAZBWAN6gYIAmg5APqBCICCjIARRBBIBvirALQXRQFVF6Bdg9EAOQA5/QASAlAGB4QgKCHALBxQAUDFEsgrQDjgjAXi3QgKhlg5hgQhbiZgOheEgGwAxeQAbBCgBBLQgBAXgDAYQgGApgDAwQgEA6AaAXQhACNiGCDQgZAZgSAYQhJBmBMBVQB3BUC/grQBcgVAzgtQA1gxAbhGQAlhrB5hiEgGwAxeQAXAvAcAkQBCBaEDAyAo0ZVQAkCEgSFwQgaLLB/EsQAGAPAHAPEgGNA3EQASgVA7gMQBEgPBxA1QAmASAqAYQBKAtApBDEARyA0lQhnCsjIgX");
	this.shape_452.setTransform(884.4,599.6);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#C2894C").s().p("AhMEQIjSlDIgCgCIADgTIAQhnQALg4AogfQAQgMAVgJIBtgRIBSAEIAhAFQAfAEAaAFQAhAHAbAIIANAFIAXAJIADACIAXAMIAHAFQAMAIAKAJQAYAXALAeIACAHIAAABQADATgLAlIgtBVIiWEeQgmAegpAAQgmAAgsgdg");
	this.shape_453.setTransform(892.8,200.1);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#2D2D2D").s().p("AM8QUQgTkggHiRQgNjxgDjAQgFklAPmXQAUnUAJjpQADhKAGgmIACgOIABhMQAAgHADgGQADgGAFABQAJAAgBARIAAAFIAGgOIgCBMIAChMIADgFIAAgBQAGARgDAYIgIApIgFAiIgGEDIgHCoIgJDRIABAcIgBgcIAJjRIgBA6IgHCzIASE6IBgadIgtBFIgIAGIgOABIABAHIgIAEIgTALgAuGVHIgNgLIABgHIgEAEIgcgYQBKuFAQquIgImNQgaluANkwIAKAAIAAgEQAAgFACgFQAEgHAGADQAVEcAhElQAKBUAEAqQAEBCABBsIAFEoQADClgHBaQgCAngKBNIglFJQgQCHgGBDQgKBwgBBaIABBrQAABAgDAqQgCAhgIA5QgIA/gCAbIgEAyIgNgKgANe2bIAAAAg");
	this.shape_454.setTransform(894,415.8);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#ECECEC").s().p("AIJDpQBCicDQgkQDRgkBXCkQgXC3jjAjQg2AIgtAAQjNAAgQiigAwbCVQhMhVBJhlQB7hbDHB2QBUAyAyBUQgzAthcAVQhBAPg4AAQhuAAhPg4gAJskJQBOglBMAHQAtB5AMBzQg7gChsAjQgRhrgbiEgAteihQBdh5AhhtQBEgOBxA1QgrBZhfCQQhOg1hbALg");
	this.shape_455.setTransform(926,987.9);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#D8D8D8").s().p("AH2BBQgGh4gSglQA4g+BEggQAbCFARBqQBsgkA7ADQgMhzgth4QBOAABDAVQAOBeBbCYQA5BfAKBlQhXikjRAkQjQAkhCCdQgLhyAKiGgAruBEQjGh1h8BbQASgYAZgZQCGiDBAiMQASgWA7gMQghBthdB5QBbgKBOA1QBfiQArhaQAmARAqAYQBLAtApBEQh6BiglBpQgbBHg1AwQgyhThUg0g");
	this.shape_456.setTransform(927.8,979.9);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#4D83AC").s().p("AKGe9QBVgZDah8QhaCYimAAQgXAAgYgDgApTbuQABhLgahCQAXAvAbAkQBCBbEDAxQgiACgfAAQjSAAhLhUgANwhzQgIg/gJh3QgvpngUkuQgKicgCg5QAAgPAEgIIgEgBIgCgJQAFgFAHAGIAAABIAEgBIABAIIABADIAAAAIgBAAIAAAAIABAAIAAAAIANgSIArAMIAvUeIgHAAQAFBAAFAlIADANQAHAmABAJIAAATQgBAQgFAMQgThOgMhlgAsbgnIgCgJIAAAAQAEhPAChGQAFgrABgTQACgrgGhLIgHhPIgFhHIgJABQiTwrAKmGIABAAIAYAQQEgC1IHALQJIAMEliiIATgLIAHgEIANgJIAIgFIg7BcIgSAIIAAAAQgzAWhZAbQiGAqhLATQh1AdhgALQg9AGhLABQgtABhbgCQhUgBgwgDQhJgDg6gJQhLgKiPgjQhngagvgPQg5gSgvgWQgIEoAVFnQAOD7AlGTQANCMABBIQADCMgaC8QgJgXgEgZgAh2jfQgDghgCg7QgFh0AAg5QgCiEAMkQQANkLgDiKQgBgwgCgXQgEgygNhTIAAgHIgFgFQgVgSgQgMQgbgTgGgGQgHgGgFgHQgEgCgCgDQgDgEACgDQADgEAKADQAqANA3AQQAiAKAVABQAZABAdgJQASgGAhgPICXhEQAFgCADAAQAGADgCAHQgBAEgGAFIhsBUIgTAPQgWAuAGBPQAEA0AOBCIAaB0QAgCRAzEdIBmI7QAEAagCALQgLgMgGgbQgRhJgdiZIgLADIkExsIgEBYIACADQACAFAAAFQgBAFgEACIgxTiIAAAAQgCAXgGASQgKgogEgygAhw3VIAAAAIAAAAIAAAAg");
	this.shape_457.setTransform(903.3,752.9);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#86B4D6").s().p("AHMdIQgSgMgMgfQhamJhTweIgCgTQgTkegjjCIhVl0IAKgCQAdCZARBIQAGAbALANQACgLgEgbIhmo6QgzkeggiQIgZh1QgOhCgEgzQgGhQAWgtIATgQIBrhUQAGgFABgDQACgIgGgCQgDgBgFACIiWBEQghAPgTAGQgdAKgZgCQgVAAgigLQg3gPgqgOQgKgDgDAFQgCADADAEQADADADABQAFAHAHAHQAGAGAbATQAQAMAVASIAFAEIAAAIQANBSAEAyQACAYABAwQADCJgNELQgMERACCEQAAA5AFB0QACA6ADAhQAEAyAKAoQAGgRACgXIABAAIgRGtQgIKaAmJ6QAkEhgTAsQgUAtgJAQQgSAhAJBJQAGBdgiACQgphEhMgtQgqgYglgRQhxg1hEAOQg7AMgTAWQgZgYAEg6QADgvAGgpQADgYAAgYQBXBgEHgOQkCgxhDhbQgbgjgXgwIgOgeQh+ksAZrKQATlxgliDQAgAoA2AlQg2glgggoQgtg7ABhEIAAgKIACAKQAFAZAIAYQAai+gDiMQgBhHgNiMQglmTgOj7QgVloAIkoQAvAWA5ATQAvAPBnAZQCPAjBLALQA6AIBJAEQAwACBUACQBbABAuAAQBKgBA9gHQBggKB1geQBLgTCGgqQBZgbAzgWIAAAAIASgIIgNAVIhiELIAtAtIASgbIAbBeIA3ALIAEABQgEAIAAAPQACA5AKCcQAUEuAvJoQAJB3AIA/QAMBkATBPQAGgMAAgQQAOA6AcAuQArBNgPAcQgIASgOAJQgMAJgSAAIAAAAIgGAAIgCgBIAAAAIgDAAIgCAAIAAAAIgBAAQhngRjuj+IgBgCIgCgCIgBgBIAAAAIAAAAIgGgHIgCgBIgDgEIgDgDIgEgEIgCgCIgBgCIAAAAIgFgFIgCgDIgBgBIgCgBIgDgDIAAgBIgBgBIgIgIIgBgCIABACIAIAIIABABIAAABIADADIACABIABABIACADIAFAFIAAAAIABACIACACIAEAEIADADIADAEIACABIAGAHIAAAAIAAAAIABABIACACIABACQDuD+BnARIABAAIAAAAIACAAIADAAIAAAAIACABIAGAAIAAAAQASAAAMgJQgHBNAiCZQAnFNAmMKQAQBMAjABQBFAdhGDGQADBHAYBXQhCgVhPAAQhLgIhOAlQhEAfg5A/Qi7iYAbhBgAIfdcQDJAXBmirQjZB7hWAZgAMZjwIAHgBIAEBlQgGglgFg/gAuHopQgEglgGghIAJgBIAGBHIAGBPQAGBMgCArQAAASgGArQACiTgLhwgAK44IIAAgBIABABgAjX42IAAAAIAAABIAAgBgEgQaggfIAAgBIABABg");
	this.shape_458.setTransform(913.6,762.5);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#4A4A4A").s().p("AgPdJQoHgLkgi0IgYgQIgBgBQgZgQgXgTIANAKIADgyQADgbAIg+QAIg6ACggQADgrAAhAIgBhqQABhaAKhwQAGhEAPiGIAmlKQAJhNADgnQAHhagDimIgFknQgBhsgFhBQgDgqgKhUQgikmgUkcQgGgCgEAGQgCAFgBAGIAAADIgKAAIAAgFIABgSIgBASIAAAFQgMEwAaFuIAHGOQkPgIiphiQgqgYgmgcQBqmQAskJQAkm0D5iMQFbiPCXh/QAShRAsg2QAngmAmgJQgIBQAEBAQAGB7BsB9QBFBRBvCRQBGiSA+hvIABgBQASgMAUgBIAAAAIAAAAQBLABBnCyIABACQAehxAAh7QAAgkgDgkQgGg+gPgtQC5CNFTB5QFICPBDJnIBoJvQgYAKgYADQi9ATjjgLIgwAAIgSk5IAGi0IACg5IAGipIAFhpIAHi7IAHgpQADgYgFgRIAAAAIgDAGIgGANIAAgFQAAgQgIgBQgGAAgDAGQgCAFAAAHIgBBNIgCANQgGAmgDBKQgJDqgUHTQgPGXAEElQAEDBANDxQAHCRATEgIAbGQQkQCWoMAAIhRgBgANlyLIAAgCIAAgCQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQgBAAAAAAQgBAAAAABQAAAAgBAAQAAABAAAAIAAACIAAACgAmk0PIABgDIAAgBIABgBQBCirBrAAIAAAAIAAAAQAaAAAdAKIACAAIgCAAQgdgKgaAAIAAAAIAAAAQhrAAhCCrIgBABIAAABIgBADQgeiNAAhsQAAhGANg5QgNA5AABGQAABsAeCNIAAAAgAN4adIANgBIgNAIIAAgHgAuPZJIAEgFIgBAIIgDgDgANdwdIAGgiIgHC7IgFBpIAGkCgANjw/IAAAAgAFW0tIgBgCQhniyhLgBIAAAAIAAAAQgUABgSAMIgBABQBIiAAfiFQAOg+gHgyQBQAYAiBlQAPAtAGA+QADAkAAAkQAAB7geBxIAAAAgAFc7MIAAAAg");
	this.shape_459.setTransform(893.3,388.7);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#DEB180").s().p("EgStAjdIibhoQgKgKgFgNQgFgNAAgQQABgkAXgzQgXAzgBAkQAAAQAFANQAFANAKAKICbBoIggAOIgWgNIimhnIgHgIQgPgTAAghQAAgWAHgeQgHAeAAAWQAAAhAPATIAHAIICmBnIglAQQh6g5gogyQgKgLgEgMQgVgjAPg+IBzl+QgEzHCEl0IA3kyQCoBiEQAHIhuGHIkJSHIgiDXICOD1Ig1EpIgmAAIglAAIgOhNIAOBNIAlAAIhSBigEgSgAiEIAAghIgwgnIAwAngEgSgAhjIArgkIgQhPIg1AdIA1gdIAQBPgAyFfwIAggQgEgR1Ag/gEAQyAgWIgrgLICCjKIiCDKIgNARIgBgDIgBgIIgEABIAAgBQgHgGgFAFIACAJIg3gLIgbheIgSAbIgtgtIBikLIANgVIA7hcIAthFIBLh0Qg1toABmHIhGk7QDjAMC9gUIAkERQACHihmNZIAAH2IhWB6IgvAAIBNiAIhNCAIgOAWIhfAAIBvisIhvCsIgRAYgAOYewIAlg6IARAuIBHizIhYCFgAhG4pQhsh+gGh7QgEg/AIhRQAEgrADgoIDSFDQArAdAoABQApgBAlgeICXkeIADAjQAGAygNA/QgfCFhIB/Qg/BvhGCSQhuiQhFhRgEgCpgiTQAAguBAgYQgoAggKA3IgRBnQADg+AAg6gEAE5gjOIgEgCIgWgJIgOgEQgbgJgggGQBmAJATAhIgWgMg");
	this.shape_460.setTransform(881.5,400.4);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f().s("#000000").ss(2,1,1).p("EAPrgzDIAAAdIAAKhQAACMACC7QAhAGApADQDfAXCwhIEAIug8gQDXCTEWBoQFDCbA0IXIBjJzIgvAaEgBRhCMQgKAUAAAYIgBAZEgD3g79QjvBgjJB2QlECtg1HkQgqDlh3GVQAxAZAvAQQCzBND7gGEAGvg/LIAACCQhkDDg0BNQB+g/CeDoQAUkDgZiNEAGvg/LQBgACAfCpEgAKg5MICQDjICRjQEgD3g79QgSBMABBNQACBNAVCEQBNiwB4gJQARAAARAAEgBgg+2QAAAuABAwQAAAwACAaQACAaBRCoEgBgg+2QgxAFgiAiQguAngWBrEgLcgwVQABAFAAAEQACANACANQANBPAIBdQAIBZADBkQAHDUgLEJQAAAPAAAPQgqMPhRNWQAWANAjAQQALAFALAFIACABEAGvg/LIgEgnEgBehAGIgCBQArMn2QABAAAAAAQMXFOOGkGIhFBCArhn/QAKAEALAFIAAAAQgGAiADBHIAAAAQAPF5A2IAIAAAAQAFAuAFAvQADAbADAcQADARACASQAUCBAJCBQAFBIACBIQABAYAAAYQABBIAABHQAAALAAAKQgBANAAANQgBALgBAMQAAAKgCALQAAAFgBAFQgDAMAAAOQAAAMABANIAXBiQgBAPgCAOIgGAyIgEE5QAAAZAAAZQAAAMAAALEgK7giOIiIFmQhQJwjjL7ICWEeIgnDbEgRpgjzIhCFRQiAE8gjSpIimFmQAfBqAlgeQANBbA9gdQAcBRAqgJIBeBRIBdAAIBeiQIhZAAIAAh9QhGAAgJBnIAwBGIAfgwACzgRQAAABgBABQAAAAAAABQgrFvgcGAQAAAAAAABQgEAzgDA0QgPDbgKDgQgCA0gCA0QAAAAAAABQgEBfgDBgQAAALAAAKQgDBmgCBmQgBAnAGggQgBA7gBA6QgCCDgCCBQgBDkADDgQABBeACBdQAECrAGCpQABADAAAEQAGFqhRBIEANdA6tQhUhuhajrQgIgUgHgVQgDgYgEgZQgNhpgNhqQAAgCAAgBQgjkqgek1IAAAAQgZkGgVkPQgJh+gJiAQgDgngCgnQgBgQAAgJIAAgJIgiioIhAk+IjjxqEAQ3gi1IA1FfQgFFXAfOnIg7A3IhWBTIgcAaIgHAGAOokZIgwB3IgjBYIBUAlIAXAUIA3AwIADADIAYghIBNAoIAWgdIBSh7AOLlnIg9CeIAqAnAR1AMIA/AlICQirIAcmsQCOrwgNpcIgbl0ARIWcIAHCBQAoBLATA2QAUA+gHAkQgDAKgFAHQgJAOgNAGQADAcADAeQAsGmAhL1QACAhABAhQABAJAAAKQB2gHhRD3QgTBtAeB2AP6AiIBOV3AQSABIBjiMAOpglIBni3EAPtgi+QAQMwBONtEANdA6tQAPhlAzg2QAPgQASgMQA4gpBaAEQAGAAAHACQBIAJBZBGEANdA6tQAhAwAACdQgCAQACBGQAND1E6hJQDvg6g1jdQgNh9hyjGApNe/IAAAOQAAAHAAAHQAJNDBwC/IAZCZQgIBXASCeQgaBQikCmQgfAYgVAcQhLBcALCDQAWBTCkAIQC3AJBvhpQAqgnAeg5QA/h6B7h8EgGxA1rQAhgNAhgFQBegOBYAtQAvAYAuAoQAuAoAtA5");
	this.shape_461.setTransform(889.1,606);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#C2894C").s().p("AhMEQIjNk7IgHgKIAJg3IAKhDIABgCQAOhMBJgeIBtgRIBSAEIAhAFQBEAJAxAPIANAFIAXAJIADACQARAIANAJQAMAIAKAJQAYAXALAeIACAHIAAABQADATgLAlIgoBNIibEmQgmAegpAAQgmAAgsgdg");
	this.shape_462.setTransform(907.8,200.1);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#4D83AC").s().p("AsITQIAAgOIAAgOIAAAAIABgXIgCAAIAAgyIAFk5IAGgyIACgdIgWhiQgCgNAAgMQAAgOAEgMIABgKIACgVIABgXIABgaIAAgVIgBiPIgBgwQgBhIgFhIQgJiCgUh/IgGgjIgGg3IgKhdIAAAAQg1oBgQl5IAAAAQgChHAGgiIAAAAQMYFOOGkGIhFBCIgCAFIgLAAQgJAAgNAEQgNAEgSAHQh0AuicATQhgAMi6AGQhmAEg4AAQhYAAhGgJQgngEhXgQQhRgOgsgEQh3gIg7gHQhagLg7ghQAEAKgBARIAAADIgBASQgBBkAJCbIAXFFQAODFAFCBIANJJQAFDJgBBOQgCDMgVDJQgHBNgLBMIgGAwQgFgXgBgbgAsITMIAAgEIAAgGIAAAOIAAgEgAE8M3IgiioIgBgGIgBgNIgCgfIgDgcIgShzQgFgNgEgTIgDgBIACgDIgCgIIgRhTIgJACIjixqIgBgDIAAACIAAABQgrFwgcGAIgNgBIAAABIgHBmIAAAAIAMABQgODbgKDgIgNgBIAAABIAIBoIAAABIgGC/IgBAVIAAAAQgOh9gFhGQgJhrAAhXQABhpAPimQAUjYADg2QAHhwgBiLQAAhagFiiQgChKgDglQgGg8gMgwIgGgEQAkgEAiAMIAeALQASAGAOgBQALgCAPgHIAagPQAngYAugMQATgFAGAJQAFAKgOAPQg6BBgFBrQgCAqAHAzQAEAfALA+IC7PcIgDgCIANBFIAEAeIABAgIAFAeIAFAgQAIBBgBA9IgBAHQAAABgBAAQAAABgBAAQAAABAAAAQgBAAAAAAgAN+JqQgEgSgFgmQgfj/gRj3IgKiZQgGhagGhAIgOiEQgVjBgMjBQgBgUAFgLIA4AxIADADIBNV2IAAADQgIgRgGgWg");
	this.shape_463.setTransform(907.8,683.9);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#2D2D2D").s().p("ANPWKIAAgMQABhCgEhWIgIiYQgKiygQmwQgWpwABk6QACoJAymeQADgaAJgKQAGAOAAAUIAGAAIAAKhQAACMACC7QAPMvBPNtIhXBTIgbAaIAbgaIAAAAIgbAagANqVwgAtwU9IgBAAIgWgKQgjgRgWgNQBRtWApsOIAAgeQAMkJgHjUIAMAAIAAgBIgkmWQAQAoAJA2QAFAfAHBBIAYDxQAMB8ADA+QADBDAABqQACG1gEDaQgGFtgXEjQgHBbgIA9QgIBBgdCwIgPBiIgEgCg");
	this.shape_464.setTransform(902.9,420.5);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#ECECEC").s().p("AItDfQBojbC1AUQCMALBXBRQA1DdjuA6QhJARg4AAQi9AAgJi9gAt7DeQijgIgWhTQgLiDBKhbQCshBCIB+QA2ApA3BzQhnBhijAAIgdgBgAJuj6QA5gpBZAEQAHAAAGACIA/DCQhVgahXAygAtAjVICBiuIgBgUQBdgOBZAtIiqDGQg5gyhTAPg");
	this.shape_465.setTransform(922.8,988.5);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#D8D8D8").s().p("AIRDmQAAidghgwQAPhkAyg2QAQgQARgMIAzC2QBWgxBWAZIg/jBQBHAIBaBGQBxDGAOB8QhYhRiMgLQi0gThpDaQgChGACgPgArdA+QiHh+itBBQAWgcAegYQCkilAahRQAigMAhgFIABATIiBCvQBTgQA5AzICqjHQAvAYAuApQAuAoAsA4Qh6B8g/B6QgeA5gqAnQg2h0g3gpg");
	this.shape_466.setTransform(925.6,979.2);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#86B4D6").s().p("AGLb5IgQgpIgGgxIgajUIAAgCQgkkqgdk1IAAAAQgZkHgVkOIgTj+IgFhOIAAgYQAAAAABAAQAAAAAAgBQABAAAAgBQABAAAAgBIABgHQABg+gIhAIgFghIgFgdIgBghIgEgdIgNhFIADABIi6vcQgLg+gEgfQgHgzACgqQAFhrA5hBQAOgQgFgJQgGgJgTAFQgtAMgnAYIgaAOQgPAIgMABQgOACgSgGIgegMQgigLgkAEIAGAEQAMAvAGA9QADAlACBKQAFCiAABZQABCLgHBxQgDA2gUDYQgPCngBBoQAABYAJBrQAFBFAOB+IAAAAIgFDLQgBAnAHggIgDB1IgDEEQgCDkADDgIADC7QAECrAHCpIAAAHQAHFqhTBIQgsg5gugoQgugogvgYQhZguhdAPQghAFgiAMQgRidAHhXIgZiZQhvi/gJtDQABAbAFAXIAGgwQALhMAHhOQAVjIACjMQABhNgFjKIgNpKQgFiAgOjFIgXlGQgJibABhjIABgSIAAgDQABgRgEgKQA7AgBaALQA7AIB3AIQAsAEBRAOQBXAQAnAEQBGAIBYAAQA4ABBngEQC5gGBggMQCcgTB0guQASgHANgEQANgEAJAAIALAAIg9CeIApAnIgjBXIBVAmIAWAUQgFALABATQAMDBAVDBIAOCFQAGBAAGBaIAKCaQARD3AfD/QAFAmAEARQAGAXAIARIAICBQAoBJASA3QAVA+gHAkQgEAKgFAHQgJAOgNAGIAGA5QAsGnAiL0IADBDIABATQB1gHhQD3QgUBtAfB2QhahHhIgIQgGgCgHAAQhZgFg5AqQgSAMgPAQQgyA2gPBlQhVhvhZjqgAtyFNIACAAIgBAXIgBgXgAByn+IAJgCIARBTIACAIIgCACIADACQAEATAFANIASBzIADAcIACAfIABANIABAGgAjllWIAAgBIANAAIgFBoIgIhngAjMsSIAAAAIAHhnIAAgBIANABIAAABIgIBngEgPwghRIAAAAIAAAAg");
	this.shape_467.setTransform(918.3,768.7);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#4A4A4A").s().p("AtgaNIgBAAIgWgJIAPhiQAeiwAHhBQAIg9AIhbQAWkjAGltQAEjbgCm0QABhqgEhDQgDg+gMh8IgYjxQgHhBgFgfQgJg2gQgoIAkGWIAAABIgMAAQAHDUgLEJQj7AGizhNQgvgQgygZQB4mWAqjkQA0nkFFitQDJh3DvhfQgRBHAABIIAAAKQACBNAUCEQBOiwB3gJIAiAAICSDjICPjQIAEgCQAZgMAbAAIAAAAIABAAQBmABB5CwIADAFIACABQAJhyAAhcQAAhzgPhPQDXCTEXBoQFCCbA1IXIBjJzIgvAaQiwBIjggXQgogDghgGQgCi7AAiMIAAqhIAAgdIAAAdIgGAAQAAgUgFgOQgKAKgDAaQgyGegCIJQgBE5AWJxQAQGwAKCyIAJCYQADBWgBBCIAAAMIgHAGQmNBzl3AAQneAAm7i7gAtwuIIAEAaQANBPAIBdQAHBYAEBlQgEhlgHhYQgIhdgNhPIgEgaIgBgJIABAJgAGc0NIgDgFQh5iwhmgBIgBAAIAAAAQgbAAgZAMIgEACQA0hNBkjDIAAiCQBhACAeCpQAPBPAABzQAABcgJByIgCgBgAmd3gIAAgKQAAhIARhHQAWhrAugnQAigiAxgFIABBeQAAAwACAaQACAaBQCoIgiAAQh3AJhOCwQgUiEgChNgAGY6cIAAAAg");
	this.shape_468.setTransform(904,388);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#DEB180").s().p("EgS5AisIhehRQgpAJgdhRQg9AdgNhcQglAfgehrICllmQAjypCBk8IBClQQCyBND7gGIAAAeIiHFlQhRJwjjL7ICXEeIgnDcIhaAAIAAh+QhGAAgIBoIAwBGIAegwIBaAAIheCQgEgRXAgcgAR+fsIBTh8IhTB8IgWAdIhMgoIBiiNIhiCNIgbAfIg4gyIgWgUIBni3IhnC3IhVglIAjhXIAwh4IgwB4IgpgoIA9ieIACgFIBFhCIAGgGIAAAAIAcgaIAAAAIBXhSIA6g4QgeunAElXIg1leQDgAYCwhJIAaFzQANJciNLwIgdGsIiQCsgAgB5sQhRingCgaQgBgagBgxIgBheIADhPIDME7QAsAdAnAAQApAAAmgeICakmIAEAmIAACCQhkDDg0BNIiQDQgEgBSgiAQABgYAJgTIAAABIgLBDg");
	this.shape_469.setTransform(888.1,404.4);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f().s("#000000").ss(2,1,1).p("EAQYgxIIgWEVIgeF1QAAAnABAnQAAAkAAAlQAABJABBLQAfAEAeAEQDhAWC5hbEAJrg76QDWB+DgBhQFmChAlI1IA0JhQgRAJgSALEAHpg+fQgGhbgEhrQgTg7kBgKQjZgBgiBTIgSDEEgRggjhIAAABQDOBMDAgVIiCG2QgfBrgNCFQgPCDiKHrQiJHrBVBZIA9BkQAcA3hBC1IgWBsIgpAAEgDog7bQjdByjJBbQk4CZg/HeIjEKMQArAZA+AREgBPg8CQA/CGBVB5QBBBbBNBUQBRhmA6hVQCfjmgOhgQgDgegCgcQgBgIAAgIEAJrg76QgciGhmgfEAKGg1+QACj2gdiGEgDog7bQAhiWCFgjIgNCSEgDog7bQgGAqABBRQABBRATCDEgBWg8RQAEAIADAHEgLCgu6IAAGGIAAGLIAAAJQgGG5glJsQgEBRgGBUQgODegRD0QAFAPAaAQArxniIAHAEQAJAFAKAFQAGACAFACQAPAHASAHQgkIMBTRvQAJB5ALB+QACAbACAaIAAAAQAEA2AFA3QAAABAAABQAAABAAABQABABAAABQAFA+AGBAQAAAEAAAEIAAZbQgYAxBKBFQACACADACQhACEh/B8QgZAZgRAYQhKBmBMBVQB4BVC+gsQBcgUAzguQA1gwAbhHQAmhqB5hiQgphEhLgtQgqgYglgRQhyg1hEAOQg7AMgSAWQgEAHgDAIA3AgoQg2gUAnh6QCLjLgCoFQgCoFCJlbIBfn7AynAyIgThsIg9BFIAjBIIAtghIALA5IAoAAA2zhNQgNAPAAAWQAAAGACAJQACAWAQAZICLCJIANAdIACgBICehQA10gIIBTCnAAiRwIAajoIBruqQABACAAACACogdQAAABABAAQAAADAAACQAkDEAiDGQAgDAAhDBQAHAmAHAmQAFAhAGAgQAXB9AXB7QAAABAAABQAWB0AUB1IAAAAQANBKAMBLQAAABAAABIAAAAQACALABAMQAIAuAHAuQAFAfAFAfQABAOACAOQABANACAOQAAAKABAKQAAABAAAAQABAEAAAFQABAEAAAFQACATABAdQABACAAADIAQHeQADD5AVD2QAAABAAAAQABABAAABIAAABQAAABAAABIAAABQAEAqAEAqQAUDJAgDIQACAJABAJQAEAXgCA5QANAgARALQgaBBC7CYQASAlAGB5QgJCGALB7QALDEEYgZQEDgwgtj6QgIhTgvhtQgvhsgLg9EgBLA5DQAigCgGhdQgIhJASghQAJgQAHgQQACmPgDppQgBi7gCjTQgBhvgBh2QgBgqAAgsQAAAAAAgBIA1nZIAAAAIAJhMEAPmgiTQACCOADCUQACA2ABA2QATJiA9KrIhBAuIg7AqIg+AsIgNAUEAQjgiLIAzE2QgjDsA0RUIgpAdANqlLIg9BeIAjBlIg5BbQAJBJBIgCIATgRQAPAbAbANQABAAABAAQABABABAAIABAAQABABACAAIADABIA9AFQBKAnAygnIAlgWQgRBVB4hVIBkhqIAAm9QCdxLgjkvIgWlSAN7jOIgrBGAqrnCQL2EBMzjNQAigIAigKASOAjIBRhqAONgIIgUARIACAAIASgRIBpiaAQWWxIACAxIABAeIAAAXQADAHACAHQACAGACAGQBNDrg6ADIADA/IBDUrQBsgDhQDUQAEBHATB0APtA5IAoVtAPtA5ICHiyAKcXsQDmFOCzgbEAMMA5eQA4g/AygWQBgguBRAUQBSANA1AZEAQKA05QBAhBAxhvEAKcA2UQASADARACQCHAQBihP");
	this.shape_470.setTransform(897.6,602.8);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#2D2D2D").s().p("ANDMbQgKkAgOoAQgIlCABidQADkLAbjTQAIg6AQhsIAFgfIAYiaQADBigVCcQgcDMgDAxQgDAlgCA9IAAhOIAel1IgeF1IAABOIgBBJIgCCVIAABCQAABLAECUIADBuIAGgCQATJhA9KrIhBAvQgNjzgKj0gAuNTtIgHgEIgGgDQAAj3AQj4QAFhTAHhTIgSgBQAlprAGm5IAAgJIAAmLIATAAIgIi4QgBgzAAguQAAguACgpQABgSAIgFQAZISAFEEQAIG4gcFcIgZEYQgQCsgFBtQgGB4AADKIAABJIgTgKgANBqkIAAAAg");
	this.shape_471.setTransform(913.9,428.8);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#ECECEC").s().p("AImDoQBZi8CcgSQCdgSBoBhQAsD6kDAwQgfADgcAAQjeAAgKiugAv+CKQhMhVBJhlQB7hbDGB2QBVAyAxBUQgzAuhbAUQhBAPg5AAQhuAAhOg4gAJ3kLQBfguBSAUIAxDnQg4gKh/AngAtCisQBeh5AhhtQBEgOBxA1QgrBahfCQQhOg2hcALg");
	this.shape_472.setTransform(923.2,988.9);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#D8D8D8").s().p("AIVA8QgFh4gTglQA5g+AygWIArDpQB/goA4AKIgxjlQBSAMA1AaQALA8AuBtQAvBrAJBTQhohgicARQidAShZC8QgLh6AJiHgArPBAQjGh1h7BaQARgYAagYQB+h8BAiFIAHgPQATgVA7gMQghBtheB4QBcgKBOA1QBfiQArhaQAlASAqAXQBMAtApBEQh6BiglBqQgbBGg2AxQgxhUhVgzg");
	this.shape_473.setTransform(924.7,980.4);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#4D83AC").s().p("AH+etQBWgZCTgnQhSBDhrAAQgVAAgXgDgAHcAAQDlFOCzgbIADA/QgfASgiAAQibAAi/mEgAETCBQgGhAgGg0IgOABIAAgBIgYiUIAAAAQgUh1gWh1IAAgBIguj4IgMhBIgNhMIhCmBQghjGgjjFIgBgFIAAgBIAAgBIgBgEIhrOqIgOgBQgLCBgCBoIAAABIAAABIAAACIgJBLIAAAAIgBABQgEgEgBgMIgBg8IAAgEQAAhbAHhuIADghIAAgBIAVjnIAGg4IAAgBQASjCAQjVQAEhAABgbQACgzgEgoQgCgWgGgLQgHgOgagQIghgUQgHgFgBgEQAAgDACgDQADgCADgBQAEgCAJACICBAeIAIADIACABIAFgEICKhEQAHgDAGAAQAHgBADAGQACAEgFAJQgHAMgaAZIgCACQgYAXgHARQgDAIgCAMQgCALAAAPQgBB5AXB8IANBDQAJAoADAcQADAWAEAvQANCMAhDGIA7FQIAgDjQAOBuAEAoIAAAAIAAACIAAAAQAFA4ACA9IAAABIABAbQgIgHgCgUgAgb4EIgDgDIAAgBIgFAAIgDgBgAsOBpIAAgCIgBgCQgOgwgGg7IgCAAIgEg1IgTj4QhTxvAjoNQL3ECMyjNIBEgSIg9AsIgNAUIgOAVQhkAYhvAUQh9AXheAJQiwATjTgGQicgEjpgVQhagIgxgJQhEgNgzgZQgMDWAAEMQAACcAFFOQAEDZAHBsQAHBcABAfQABAogIC5QgHCKAOBWQAFAagBAPQgBAWgNANIgBgCgANPBBQgCgOgHgSIgNggQgTgxgGhEQgEgnAAhTQgCkcgVkaIgNi2QgGhogBhNIABiMQAAhRgIg5QgBgLAGgDIAAgFIA9AFIApVuIAAALIACAxIgIAAIAJAdIABAWIAFAPIgBALIgBABQgBAFgDABIgCABQgFAAgCgLg");
	this.shape_474.setTransform(916.9,754.5);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#86B4D6").s().p("AFCb7QgSgLgNgfQACg5gDgXIgDgSQghjIgUjKIgIhTIAAgBIAAgCIAAgBIAAgCIAAgBQgWj2gCj6IgRndIAAgFIgEgwIgBgKIAAgIIAAgBIgCgUIgDgbIgDgcIgKg9IgOhdIgEgWIAAAAIAOgCQAGA0AGBAQACAVAIAGIgBgbIAAgBQgCg9gFg3IAAgBIgBgCIAAAAQgDgpgOhuIggjjIg7lQQghjFgNiNQgEgvgDgWQgDgcgIgoIgNhDQgXh8ABh5QAAgPACgLQABgMAEgIQAHgRAXgXIABgCQAagZAIgMQAFgJgCgEQgDgGgHABQgGAAgHADIiKBFIgGADIgBgBIgIgDIiBgeQgJgBgEABQgDABgDADQgCADAAACQABAEAHAFIAhAUQAaAQAHAOQAGALACAWQAEAogCAzQgBAbgEBAQgQDVgSDDIAAABIgGA3IgVDoIAAAAIgDAhQgHBuAABbIAAAEIABA8QABAMAEAEIABAAIAAAAIAAAAIg2HYIAAABIABBWIACDlIADGOQADJpgCGPQgHAQgJAQQgSAhAJBJQAFBcghACQgphDhMgtQgqgYglgRQhxg1hEAOQg8AMgSAWIgLALQhLhFAZgxIAA5bIgBgJIgLh8IAAgCIgBgCIAAgCIgJhtIAAAAIACAAQAGA8AOAwIABACIAAACIABACQANgNABgWQABgOgFgbQgOhWAHiKQAIi6gBgoQgBgfgHhcQgHhsgEjZQgFlNAAidQAAkMAMjWQAzAZBEANQAxAJBaAIQDpAVCcAEQDUAGCvgTQBegJB9gWQBugVBlgYIg9BeIAjBlIg4BbQAIBKBIgCIAUgRQAOAbAcAMIABABIACABIABAAIADABIADABIAAAEQgGADABALQAIA5AABSIgBCLQABBNAGBpIANC1QAVEaACEcQAABTAEAnQAGBEATAyIANAgQAHATACANQADANAGgCQADgCABgFIAAgBIACgLIADAMQBNDqg6ADQizAbjllOQDoHYCzhmIBDUqQBsgChQDUQAEBHAUB0Qg2gZhRgNQhSgUhfAuQgyAWg5A/Qi7iYAbhCgAGVcQQCHAQBihPQiUAmhVAZIgigGIAiAGgALhawQA/hBAxhwQgxBwg/BBgALmimIAIAAIABAeIgJgegAj6sCIAOABIgbDoQAChoALiBgAiP6mIADABIAEAAIABACIADACg");
	this.shape_475.setTransform(927.4,770.2);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#4A4A4A").s().p("As3anIgggOIgLgEIAAhJQAAjKAFh4QAGhtAPisIAakYQAcldgJm3QgEkEgaoSQgHAFgCASQgBAoAAAuQgBAuACA0IAIC4IgTAAIAAmGIAAGGIAAGLIgQAAQjAAVjOhMIAAgBIAIgQIAAgDQAEgRgMAkIAAABIAAgBQg+gRgrgZIDEqMQA/neE4iZQDJhbDchyQAiiWCFgjIgNCSQA/CFBWB6QBABaBNBVQBRhnA6hUQCejmgNhgIgGg6IgBgQQBnAfAbCGQDXB+DgBhQFlChAmI1IA0JhQgSAJgRALQi5BbjhgWIg9gIIgCiUIAAhJQACg9ADglQADgxAbjMQAWicgEhiIgXCaIAWkVIgWEVIgFAfQgRBsgHA6QgbDTgDELQgCCcAJFDQAOIAAKEAQAKD0ANDyIg8AqIhEASQlrBblfAAQm4AAmniPgAH60UIABgmQAAjbgch7QAcB7AADbIgBAmgAl432QABBRASCDQgSiDgBhRIgBgbQAAg+AFgiQgFAiAAA+IABAbgAja6YIgHgPIAHAPgAuiZlQASj0AOjeIAKilIASABQgHBTgFBTQgQD4AAD3QgagQgGgPgANaD4QgEiUAAhLIAAhBIACiVIABhJIAABJIACCUQABCNAECUIADBsIgGABIgDhtgANZkGIAAAAgAN3rJg");
	this.shape_476.setTransform(911.6,387.4);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#DEB180").s().p("EgUdAiXIhTioIBTCoIiMiJQgPgagCgWQgCgJAAgGQAAgWANgPQgNAPAAAWQg3gUAnh6QCMjLgCoFQgCoFCJlbIBen6IABABQDOBMDAgVIiDG1QgfBrgNCFQgPCDiJHrQiKHrBVBZIA9BkQAdA3hCC1IgVBtIgqAAIgnAAIgLg5IALA5IAnAAIieBQgEgT0AgDIAjBIIAughIgUhtgEASSAgbIBQhrIhQBrIglAWQgyAnhLgnICIizIiICzIg9gFIgDgBIgDgBIgBAAIgCgBIgBAAQgbgNgPgbIARgSIBpiaIhpCaIgTASIACAAIgUARQhIACgIhKIA4hbIAshGIgsBGIgjhlIA9heIAOgVIANgUIA9gsIA7gqIBBguIAqgdQg1xUAjjsIgyk1QDhAWC5hbIAWFRQAjEvidRLIAAG9IhlBrQg8ArgZAAQgaAAAJgrgEAN/AgBgABI4LQhVh6g+iFIANiSIARjEQAihUDaACQEAAKAUA7QADBqAGBcIABAQIAGA6QANBgifDmQg6BUhQBnQhOhVhBhag");
	this.shape_477.setTransform(897.3,398.8);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f().s("#000000").ss(2,1,1).p("EAHeg8GQAZAXAuAbQBfA5BwA4IERB+QFCCwAhK3QAPDAAcDHQgSAJgSAJIAaFyQAQENiLR3IAVG/QgZBEghA1QgcAQgcgDIAthfEAO6giuQAOAEANAEQCuAuDshtEAN+gvaIAjMiQAMAFANAFEAFWhBjQgUg7kAgKQjZgCgiBUEgFqg7lQgZAUghAUQjTB+jfBfQkxB1hAJkIhfHtQAVAQAWANQC7BzDngnQANgCAOgDIAfq2IABgREgDYg8AQA/CFBWB6QBBBaBMBVEgM+gi2QAAADgBADQgYMkg8OUIBPAsIAdARQAiAPAlAOQADABACABQADABADABQEqBsIKADQHjgSEZhyQAigPAggPQAMgGALgHQACgBACgBIARgKEgNZgixIhRGPQALFNifPjICbCyIAADZIgeCXQgdAYgcgYQgThAAThFIgciBIgaDDIAnCOIBXBIQAbAng5gBIhAghIg/ggIhFi3EgT7gj9Ig4H0QgkFoBKPHQhNCkg4DBIBcDoIA8AXIAMAbIBJAIICVAbA1Fg5IBLDDAzygpIBNDWEAIdA5xQiShbAXhoQhJjYAAmkIgbwvQgdhqgBh/IgejPIi90iIgBgJIAAABIAAAAIgBAGIgBAFIAAAFIieTtIgqFRQAPBcgeA5IAQZdQACAfgQAjQgOAUgDAsQgBBFg1AYQgCAsgrAgAsnm7QAXOTA2RmQgUAvAPBNIAAZVQgqgBAeBlQAbBcAjBFQAigTAmgIQBbgUBrAvQBaAmA+BSQg5BpgfBqQgQBBggAwQhbCHjaADQjpgGANioQAFg6AjhGQAvhfBohzQAkguAQgYAPNnpQATgMARgOQgythgFtKAOdmQIAAg9AOdmQIgvArIggBEIgDAFIg4B4IAsCMIABADIAHAXQABAAAAAAQABAAACABQAEABAEAAQAUABAIgWQAXgoAAg4QAAgSgDgUIAcgzAOPAsIAKibIAGhbIAbgyIAAD1IgrAzIgUAZIg2gtQgEgDgEgCQgPgGgQASQgVAfAoAkIAJAIIA+A1QAKAEAFACQAtAEAhgpIAQgUIA0hDEAPVgimIBEFgQguGsAuIaIARFvIiNCBARMBoQAeApA6gpIANgSASRAWIhFBSIgcAjQg5AMgSgrAN7BFIgbAgAOHClIgJV8IAAAKIAAAVIAAAEQA1BggcBUIAjWnQgoAMhEBTQgjAthjAeEAO6AyfQBeAFhBDFQgUBQAIBsEAIdA5xQBIg0BLgYQBWgdBZAHQA1AFA3AREAIdA5xQAnB3AQCsQAABEAQAzQAxCdDGABQFEAChFkxQgfiLhwjKEgKdA0lQBmAIBfAxAJIanQBHDADlAP");
	this.shape_478.setTransform(911.3,602.6);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#4C82AC").s().p("AsRQSIABgZIAAAAIgFAAQg1xlgXuVQAhAQAlAOIAGACIAGACIAAAAQEqBsIKACQHjgREZhzQAigOAfgPIAAA9IgvAqIggBFIgCAFIACgFIgCAFIAAAAIAFhRQhzAph6AUQhIAMh6ALQjrAXh3ACQhkACh9gGQhQgEiSgLQh5gJhAgMQhTgOhBgdIgBgBIAAAEQBgPHhSPKQgBAKgFAHQgEAGgFAAIgEgBgAAltgIAAAAIAAgMgAMfPCQgHgbABgvQADifgKiSIgKiQQgHhbgDg2QgDhJgBhvQgDklAJkkIA9A1IAQAHIgJV6IgGAAIAGALIgBAUQgagRgKgngAjDOEQABgXAIhFQASiKANkwQAMkhAWiYQAdioALhUQATiSgOhqQgDgWAMgCQAFgBAHAGIA2AlQAIAHACAGIAAABIAAAGIgBAAIAAAFIgBAEIAAgCQgBgDACgEIgBACQgEAEgDgCIAHAFIieTtIgJgBIgcEHQgKgnADg0gADLMFIgDABIi+0iIAAgEIADgEIBXhnQAEgGAEAAQAFgBADAHQACAFgBAHQgSDDAcEEIA/HFQATCGADBUIACBHQAAAuACAZQABApAIBRIAQCmQgag9gMhTgAMKosIgHgFIAHAFIgHgFIAAAAIACgsIABADIAHAXIABABIACAAIAIACQAUABAJgXQAXgoAAg4IATABIgKCdIgVAZgAAHoUgAMGpagAMFpdIAAAAIABADgAMTtmg");
	this.shape_479.setTransform(917.2,660.8);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#2D2D2D").s().p("AvBTbQA8uUAYskIAAgFIAgq3IAMABQAAgTAKgDQATG7ABEjQACGRgbFLIgUDeQgIB5gPGvQgECEgHBxgANzPBIgao5IgJjAQgDhggCj7IgGq5QgCknAFiTIATG+IAIDdIACCFIAAABIAOAAIAZAKQAFNJAyNiQgSANgSANIgEACIgRALIgEACQgKh8gJi8g");
	this.shape_480.setTransform(916,427.9);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#ECECEC").s().p("AL5FbQjHgBgxidQCskkFLCTQBEEvk+AAIgFAAgAwCBeQAEg6AjhFQEjhbDGD+QhaCHjaADQjpgGANiogAJNkoQBWgdBZAHIBJDZIjAAhgAsdi2IBVieQBbgUBsAvIhbC3QhgglhhgPg");
	this.shape_481.setTransform(921.2,994.4);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#D8D8D8").s().p("AHjCSQgPirgoh3QBJgzBKgZIA4DjIDAggIhJjYQA2AEA3ARQBwDKAfCKQlLiTisEkQgQgzAAhEgAvpAqQAwhdBnh0QAkguAQgYQAjgTAlgIIhVCeQBhAPBgAlIBbi3QBZAmA/BSQg5BpgfBpQgQBBghAwQjHj+kiBag");
	this.shape_482.setTransform(922.6,986.8);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#4D83AC").s().p("AiVhnQCLCECgBLQjkgPhHjAg");
	this.shape_483.setTransform(984.7,783.3);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#86B4D6").s().p("AobedQhsgwhbAUQglAIgjAUQgjhFgahdQgehkApABIAA5VQgOhMATgvIAFAAIAAAAIgBAZQAHADAGgIQAFgHABgKQBSvKhgvIIAAgEIACABQBAAcBTAPQBAAMB5AJQCSALBQAEQB9AGBlgCQB2gCDrgXQB6gLBIgMQB6gVBzgoIgFBRIg4B3IAsCNIgCAsQgQgHgQATQgVAfApAjIAJAIQgJEkADEmQABBvADBJQADA2AHBbIAKCQQAKCSgDCfQgBAvAHAbQAKAnAaARIAAAEQA2BggdBTIAjWoQgnALhEBTQgkAuhiAeQBigeAkguQBEhTAngLQBeAFhBDEQgTBRAIBsQg3gSg2gEQhZgHhWAdQhKAYhJAzQiShbAXhnQhIjZAAmjIgcwvQgchrgCh9IgdjPIADgBQAMBTAaA9IgQimQgIhRgBgpQgCgZAAguIgChHQgDhUgTiGIg/nGQgckEASjDQABgHgCgFQgDgHgFABQgEAAgEAGIhWBnIgDAEIABAEIgCgIIAAAAQgCgGgJgHIg2glQgHgGgFABQgMACADAWQAOBqgTCSQgLBUgdCoQgWCZgMEhQgNEwgSCKQgIBFgBAXQgDA0AKAnIAckHIAKABIgrFRQAPBbgeA4IARZeQACAfgRAjQgNAUgEAsQAABFg2AXQgCAtgqAfQg/hShZglgApVbmQhegwhmgJQBmAJBeAwgAL3D/QighLiMiFQBIDBDkAPgAL8hWIAGAAIAAALIgGgLgAhC5LQAEACAEgEIABgCQgBAEAAADIAAACgAg55PIABAAIgBAFgAgc+SIAAgNIABANgEgNXggTIAGACIAAAAIgGgCg");
	this.shape_484.setTransform(923.8,768.2);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#4A4A4A").s().p("AsLbKIgFgCIgGgCQglgOgigQIgdgQQAHhxAEiEQAPmvAJh5IATjeQAblMgBmQQgCkjgTm7QgKADAAATIgLgBIAAgQIAAAQIggK3IgbAFQjnAmi7hyQgWgOgVgPIBfnuQBApkExh0QDfhfDTh/QAhgUAZgTQAViTCFgYIAFAAIgNCQQA/CFBWB6QBBBaBMBUQBRhmA6hUQCejngNhgQgDgegEgqQBkAcAbB5QAZAXAuAcQBfA5BwA3IERB/QFCCwAhK3QAPC/AcDIIgkARQjsBuiugvIgbgIIgZgKIgjshIAjMhIgOAAIAAgBIgCiFIgIjdIgSm+QgGCTACEnIAGK4QACD8AEBgIAIDAIAaI5QAJC8AKB8IgXANQggAPgiAOQkZBynjASQoKgCkqhsg");
	this.shape_485.setTransform(916.7,387.8);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#DEB180").s().p("AvLTzIhAggIhAghIhFi3IBFC3IBAAhIiVgcIhOjWIBODWIhJgHIgNgbIhLjEIBLDEIg7gXIhdjpQA5jCBMijQhKvGAkloIA5n0QC6ByDngmIhQGPQAKFMiePiICaCyIAADaIgdCXQgdAYgdgYQgThAAThGIgbiBIgbDEIAnCOIBYBJQAZAlgzAAIgEAAgAOMSwIgQgHIg9g1IgJgIQgpgjAVgfQAQgTAQAHIAAAAIAHAEIA2AuIgaAgIAaggIAVgaIArg0IAAj0IgcAyIgbAyQACAUAAATQABA3gXApQgJAWgUgBIgIgBIgDgBIAAAAIgIgXIgBgEIAAABIgriNIA4h3IAAAAIACgFIAghFIAvgrICOiAIgSlvQguoaAumsIhDlgQCtAuDshtIAaFzQAREMiLR2IAUHAQgYBFghA0QgdAQgcgDIAthfIgtBfIgMATQg6AogegoIBFhTIhFBTIgdAiQg5AMgSgqIA1hDIg1BDIgPATQgfAmgoAAIgHAAg");
	this.shape_486.setTransform(910.9,499.2);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f().s("#000000").ss(2,1,1).p("EAEjg8wQBQAAA5BqQBxBLDqBkQCkA+BmBNQDxC/ApHgIBFIUQgVALgVAJIAdF1QAVEuiRRqIARHBIg+CrIiGCCQgyASABgSIB6h6IA9iVEANHgt4IACAaIALCpIAjIlQAWAFAXADIAAABIA+FqQgcHRArIJQANChgFC8IiRCeIAEgzIABgMIACgeQAEgDAEgCQAlgWAhgYQhI0LAvmkEAOkgiIQDRAiDRhfEgELhAwQAQiSDmgLQEpgLAACoEgG7g65Ij1CXIkLB6QkeCGg7IwIhYIGQANAJANAJQDNBsEJgmIAyqiEgEEg83QgLAJAEBMQALCiBuBnICcCzQBchwBDhhQBqicAPh0QAFgkgEgFQgCgCgEAFAtlmKIABAlEgN8giUQgZNvg4NXQAaAWAeATQAFADAGAEIAEACQADACADACQANAHAOAHQFICrMYgjQDogNC1g5QBsgiBagxQADgCAEgCIAKgGEgN8giUIhlF6QAYFhh3PZIChC/QAUA3APB4IAADfQgWAVgjgrIgRh9Ig3h3IgRDAQAYCOAhBfQAhBghRgcEgVSgjaIgdIhQAAFqBbOMIgkG7QADANADAPQAAABABAAQAYBmAvB2QAmA8AdgdIAPAmQAqAzAhgdQA1A7ATgzAywAaQAgCSBDCgAz+AIIBXEIAALCBIAbAAQAYggAegZQABAAAAAAQAGgFAGgFAg/BFQAAABAAABQAmAfAIAbIAbAAIABAAICKPyIA7GwIAABjQgMBeAsBMQANJygNK+QAAEDA9CPQAkCKBWBMQA1hMBUggQA3gWBFgCQAIgBAIAAQAYAAAYACQA3AGA2AUAwqDjQAdBCAIAvIglhxIg5itAtjlRIBDYcIAAGUIAAAUQgXA6ATA3IgHY6QANgGASgBQB5ACB7BLAAKCBIhsNeIgBAIIhSKJQAKBugrBEQgKAPgMAOANolIIgWAZIgSA0IgBAEQgBACAAACQgBABAAACQAAAAAAAAQgJAZgIAZIgXBEIAACuANWA7IAVh8IAzhxIAAEUIhRB5IgzBOIgCACQAAAAAAABQAAAAAAAAQAAAAAAABIgBAAQgEAKABAHQAAAEABADQAGAPAigBIAJgIIAGgFICViQIAwh1AOoFKICGiFIA3iNAOoFKQAGAaAxgaIAkgUAMVBkQABAAAAAAQADACAEABQADABAEABQAhAGARg0ANMFSQAFAZAygBIAlggANMFGQAAAAAAAAQgBAHABAFANNDbIAJigEANKAzfIAA3iQAQhdgng/QgBgUgBgTQgBgTAAgSQgBgdgBgeQgBgPAAgQQgDiyAJipIAZsOEAI0A11QBMgmBThHQBFgxAyAIQAcAEAWAWQAkAvgwCBQgYBNABBpEAGnA7IQAnBqAICdQAGBFAaAzQBMCRD0gJQC0gUAgiJQAMg+grhxQgsh2hmiuEgMCA5dIgzieQg2iGBAgbEgFVA7NQgxB9gkCBQgMAtgVAkQhWCXjlgFQjegOAAiuQABg7AbhBQAohgBghtIA+hMQA1gZA0gJQBQgNBNAcQAMAFAMAGQBWAsA5BLQAAAAAAABgAjWciIAZZwQADBBgjAqQgNA2gxAtQgPA2grA2IAAABAIMdNQBbB9C2gNQiNgmiEhKg");
	this.shape_487.setTransform(918.3,598.8);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#4C82AC").s().p("AscP7IAAAAIAAgCIgIAAIAAmUIhE4cIAAgUIgCglQFJCrMYgjQDngNC1g5QBsgiBbgyIAGgDIALgGIgDAeIABAAIgBAMIAAgMIAAAMIgEAzIgXAYIgRgBIAAA2IAAAAIgBAEIABgEIgBAEIgCAEIgBADIAAAAIgQAyIACg3QACgygDgrQiVBAi4AfQh/AVidAIQhtAFivAAQiuAAhqgJQhmgHhcgSQh8gXh1gtIANByQAYDLAKBtQAQCtAFCMQACBIAABkQABFxgNFlQgEBpgHA7QgJBQgVA/IAAABIgGAQIAAgRgAMeOvQgQgwgIhPQgWjTgBkJQAAijAKk5IAGigIAAAAQAGiHAHhPIAAAAIAAgCIABgMIAEgmIAAAwIABABIAGADIAHACIAAAAQAiAGARg1IgJChIg0BOIgBACIABgCIAAAAIgBACIAAAAIgBABIAAAAIAAABQgEAKAAAHIABAHQAHAPAigBIAIgIIAGAHIgZMNQgJCoAECzIgGAAIAGAfIACA7IACAkQgIgQgHgUgAAHnlIAbAAQAYgfAegZIAAAAIAAAAIANgLIgNALQABgHACgCQADgDAFABIACAAQADACACADQADAEAAANQgHDTAQE1IAdIHQABAKgDAFgAhnGBIABgIIgBAJIAAgBgAhnGBIAHjSQAMl6gEkuQAAgnAUgEIAAAEIAAACQAmAeAIAbIAcAAIhsNeIgBAIIAAAAgAhmF5gANovhg");
	this.shape_488.setTransform(918.7,660.2);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#2D2D2D").s().p("At+ThIgEgDIgLgGQgegUgagVQA4tXAZtvIAyqhIALAAIABgPQAXF4AHC2QAME3gLD3QgFB/gRDbIhKP2IgHgEgANjS0QgGhLgGiJIgKjUQgJjNABh0IAGjEQAGiiABjJQAAh5gCjzIgGr2QAAgTAHgHQADgDAEgBIAECsIgLioIALCoIAjIlIAtAJIAAAAQguGlBIUKQgiAYgkAWIgIAFIgLAGIgHADIgDgtgAuNTYIAAAAIALAGIgLgGg");
	this.shape_489.setTransform(917.5,432.6);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#ECECEC").s().p("AHjDEQC/kqE2BmQAqBxgMA9QggCKi0ATIgcABQjcAAhHiIgAsaEqQjdgNgBivQACg7AbhAQEShZDrD/QhUCSjZAAIgPgBgAIdknQA3gVBEgDIARAAQAYAAAYACIBJC6QhgAJhsAjgAsIitIBbiaQBRgNBNAbIAXAMIhKC6QhfgvhngLg");
	this.shape_490.setTransform(920.2,995.9);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#D8D8D8").s().p("AHFCOQgIicgnhqQA0hMBVghIA5DQQBtgjBfgJIhJi6QA3AGA2AUQBmCuAsB0Qk2hli/EqQgagzgGhFgAvZA1QAohfBfhtIA/hNQA1gYA0gJIhcCbQBnAKBfAvIBLi6QBWAsA5BLIAAABQgxB8gkCBQgMAtgVAkQjqj/kTBZg");
	this.shape_491.setTransform(920,989.3);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#4D83AC").s().p("AiHg4QCEBJCLAnIghABQicAAhShxg");
	this.shape_492.setTransform(984.3,791.3);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#86B4D6").s().p("EgF0AgQQg4hMhXgsIgXgLQhNgbhRANQgzAIg1AZIgzieQg2iGBAgbQANgFARgBQB6ACB6BKQh6hKh6gCQgRABgNAFIAH46QgTg2AXg6IAAgTIAHAAIAAACIAAAAIABARIAGgRIAAAAQAVhAAJhPQAHg7AEhpQANllgBlyQAAhkgChIQgFiMgQitQgKhugYjKIgNhyQB1AsB8AYQBcASBmAHQBqAICuAAQCvABBtgGQCdgHB/gWQC4geCVhBQACArgBAzIgDA2IgWBFIAACuIgEAlIgBANIgBACIAAAAQgGBPgGCGIAAABIgGCgQgKE6AACjQABEIAWDUQAIBOAQAxQAGATAIARIACAoQAoA/gQBbIAAXiIgCAAIAAAAIgNgBIAAAAIAAAAQgtAAg6ApIgBABQhTBHhNAmQBNgmBThHIABgBQA6gpAtAAIAAAAIAAAAIANABIAAAAIACAAQAbAEAXAWQAkAvgxCCQgXBMAABpQg1gUg3gGQgYgCgYAAIgRABQhEADg3AVQhVAgg1BNQhWhNgjiKQg+iOAAkEQAOq9gOpzQgshMANhdIAAhjIg7mwQADgFgBgKIgdoIQgQk1AHjTQAAgNgDgEQgCgEgDgBIgCgBQgFAAgDACQgCACgBAHIAAABIAAgBIAAAAIAAAAQgeAagYAfIgaAAIgBAAIgdAAQgIgbgmgfIAAgBIAAgEQgUADAAAoQAEEtgMF8IgIDRIhSKJQAKBtgrBEQgJAQgNANQANgNAJgQIAaZwQADBBgkAqQgNA3gwAsQgPA3grA2gAL+EAQiNgmiDhKQBaB+C2gOgAMJkBIAFAAIABAgIgGgggAMF5TIgHgCIAHACgAMi/tIARABIgRA0IAAg1g");
	this.shape_493.setTransform(921.3,771.3);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#4A4A4A").s().p("AtnaQIgagPIBKv1QASjbAFiAQAKj3gLk2QgHi2gYl4IgBAPIgLAAIgxKhQkKAmjMhrIgbgSIBYoHQA7owEfiFIEKh7ID2iWQA/hbB4gjQgMAIAFBNQALChBtBnICdCzQBchvBDhiQBqibAPh0QAEglgEgEQBRgBA5BrQBxBKDqBkQCkA/BlBNQDxC/AqHgIBEIUIgpAUQjRBfjSgiIgtgJIgjolIgEisQgDABgDADIgCgbIACAbQgIAHAAATIAGL2QACDyAAB5QAADKgGCiIgGDEQgBB0AJDNIAKDUQAFCJAGBLIAEAtIAGgEIgGAEQhaAyhtAiQi1A4jnAOQiHAFh5AAQpQABkRiOgANItDg");
	this.shape_494.setTransform(918.4,391.3);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#DEB180").s().p("AxIUDQhDigggiSQAgCSBDCgQghAegqgzIgPgmIhXkIIBXEIQgdAdgmg8Qgvh2gYhmIAzgNIg0ALIgGgcIAkm7QhbuMAAlpIAdohQDNBsEJgnIhlF6QAYFih3PYIChC+QAUA4APB3IAADgQgWAWgjgrIgRh/Ig3h3IgRDCQAYCNAhBgQAiBghSgcQgHgvgehDIg5itIA5CtIAlByQgJAXgQAAQgTAAgcgggANRUKQgBgGABgGIAAgBICViQIAwh1IgwB1IiVCQIgGAGIgJAIQgiABgGgQIgBgGQgBgIAEgJIABgBIAAAAIAAgBIAAAAIACgCIAAAAIAzhOIBRh6IAAkVIgzBxIgVB9QgRA1ghgHIgHgCIgHgDIgBAAIAAgwIAAiuIAXhFIARgxIAAgBIABgDIABgDIABgEIAAAAIASg1IAWgYICRifQAFi7gNihQgroIAcnRIg+lrIAAAAQDRAiDRhfIAdF0QAVEuiRRpIARHDIg+CrIiGCBQgyATABgTIB6h5IA9iWIg9CWIh6B5IgkAVQgxAagGgbICGiFIA3iMIg3CMIiGCFIglAgIgFAAQgtAAgFgXgAwAUMgAxIUDIAAAAgAyiTIg");
	this.shape_495.setTransform(917.8,503.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182}]}).to({state:[{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190}]},1).to({state:[{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198}]},1).to({state:[{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206}]},1).to({state:[{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214}]},1).to({state:[{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221}]},1).to({state:[{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228}]},1).to({state:[{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236}]},1).to({state:[{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244}]},1).to({state:[{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251}]},1).to({state:[{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259}]},1).to({state:[{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267}]},1).to({state:[{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274}]},1).to({state:[{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281}]},1).to({state:[{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288}]},1).to({state:[{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295}]},1).to({state:[{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302}]},1).to({state:[{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310}]},1).to({state:[{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318}]},1).to({state:[{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326}]},1).to({state:[{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333}]},1).to({state:[{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339}]},1).to({state:[{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346}]},1).to({state:[{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353}]},1).to({state:[{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360}]},1).to({state:[{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367}]},1).to({state:[{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375}]},1).to({state:[{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384}]},1).to({state:[{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393}]},1).to({state:[{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402}]},1).to({state:[{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411}]},1).to({state:[{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419}]},1).to({state:[{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427}]},1).to({state:[{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435}]},1).to({state:[{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443}]},1).to({state:[{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452}]},1).to({state:[{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461}]},1).to({state:[{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470}]},1).to({state:[{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478}]},1).to({state:[{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487}]},1).to({state:[]},1).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1433.8,113.8,473.7,930.2);


(lib.Symbol2 = function(mode,startPosition,loop) {
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
	this.instance = new lib.HAND("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-4.2,111.2,1,1,0,0,180,37,6.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// LEFT ARM
	this.instance_1 = new lib.LEFTARM("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-10.6,-37.8,1,1,0,0,180,22.6,11.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// LEFT SHOULDER
	this.instance_2 = new lib.LEFTSHOULDER("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(8.3,-201.8,1,1,0,0,180,20.7,4.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.7,-204.2,67.5,408.5);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// HEAD
	this.instance = new lib.Symbol2("synched",150);
	this.instance.parent = this;
	this.instance.setTransform(899.8,195.7,1,1,-1.5,0,0,54.4,151.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(176).to({_off:false},0).to({startPosition:220},44).to({regY:151.2,rotation:-5,x:902.2,y:194.9,startPosition:227},7).to({regY:151.1,rotation:-1.5,x:899.8,y:195.7,startPosition:234},7).to({startPosition:266},32).to({regY:151.2,rotation:-1.3,startPosition:299},33).to({rotation:0.3,y:198.1,startPosition:304},5).to({rotation:3,x:899.7,y:195.8,startPosition:311},7).to({rotation:2.8,x:899.8,startPosition:339},28).to({rotation:-5.2,x:899.7,y:195.7,startPosition:348},9).to({startPosition:359},11).to({_off:true},56).wait(19));

	// Layer 1
	this.instance_1 = new lib.HAND_1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(1004,547.9,1,1,0,0,0,25.6,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(176).to({_off:false},0).to({startPosition:0},51).to({x:1005.3},4).to({regY:0.1,rotation:0.9,x:1007.6,y:548},8,cjs.Ease.get(1)).to({regX:25.7,regY:0,rotation:0,x:1001.7,y:547.9},9,cjs.Ease.get(1)).to({regX:25.6,rotation:-1.5,x:1004},11,cjs.Ease.get(1)).to({regX:25.7,regY:0.1,rotation:-0.3,x:1005.1,y:548},7,cjs.Ease.get(1)).to({rotation:-0.3},33).to({regX:25.8,rotation:-2.8,x:1005.9,y:547.4},5).to({regX:25.7,rotation:-6.4,x:1007,y:546.5},7).to({rotation:-6.3,y:546.6},28).to({rotation:-6.4,y:546.5},9).to({_off:true},67).wait(19));

	// Layer 4
	this.instance_2 = new lib.HAND_1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(785,597.6,1,1,0,0,180,25.6,49.7);
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},176).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},9).to({state:[{t:this.instance_3}]},6).to({state:[{t:this.instance_3}]},6).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_15}]},16).to({state:[{t:this.shape_17},{t:this.shape_10},{t:this.shape_16}]},1).to({state:[{t:this.shape_18},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.instance_2}]},14).to({state:[{t:this.instance_2}]},12).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.instance_2}]},33).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_2}]},7).to({state:[{t:this.instance_2}]},28).to({state:[{t:this.instance_2}]},9).to({state:[]},67).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(176).to({_off:false},0).wait(1).to({x:779.5},0).wait(1).to({x:774.5,y:597.4},0).to({_off:true},1).wait(47).to({_off:false},0).wait(1).to({x:779.5,y:597.6},0).wait(1).to({x:784},0).to({x:776},6,cjs.Ease.get(0.7)).to({x:784},14,cjs.Ease.get(1)).to({x:781},12,cjs.Ease.get(1)).to({startPosition:0},6).to({startPosition:0},33).to({regY:49.8,skewX:1.8,skewY:181.8,x:779.5,y:598.2},5).to({regY:49.7,skewX:4.2,skewY:184.2,x:777.3,y:598.7},7).to({regX:25.5,regY:49.8,skewX:4.1,skewY:184.1,x:777.4,y:598.9},28).to({regX:25.6,regY:49.7,skewX:4.2,skewY:184.2,x:777.3,y:598.7},9).to({_off:true},67).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(184).to({_off:false},0).to({regX:46.9,rotation:-9.7,x:653,y:413.2},9,cjs.Ease.get(0.85)).to({regX:47,regY:18.3,rotation:-20.1,x:654.8,y:415.8},6,cjs.Ease.get(1)).to({regX:47.1,regY:18.4,rotation:-24.4,x:655,y:415.9},6,cjs.Ease.get(1)).to({_off:true},16).wait(213));

	// Layer 2
	this.instance_4 = new lib.LEFTARM_1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(1021.5,393.5,1,1,0,0,0,22.5,0);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(176).to({_off:false},0).to({startPosition:0},55).to({regY:0.1,rotation:-1.2,x:1020.3,y:393.6},8,cjs.Ease.get(1)).to({rotation:0.9},9,cjs.Ease.get(1)).to({regY:0,rotation:0,y:393.5},11,cjs.Ease.get(1)).to({startPosition:0},7).to({startPosition:0},33).to({regY:0.1,rotation:-0.3,x:1020.5,y:393},5).to({rotation:-0.9,x:1020.9,y:392},7).to({regX:22.6,rotation:-0.8,x:1021},28).to({regX:22.5,rotation:-0.9,x:1020.9},9).to({_off:true},67).wait(19));

	// LEFT ARM
	this.instance_5 = new lib.LEFTARM_1("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(767.3,482.2,1,1,0,0,180,22.5,88.7);
	this.instance_5._off = true;

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

	this.instance_6 = new lib.Tween4_1("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(757.8,377.7,1,1,0,0,0,55.9,-27.2);
	this.instance_6._off = true;

	this.instance_7 = new lib.Symbol7("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(721,431.8,1,1,0,0,0,52.8,51);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},176).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},6).to({state:[{t:this.shape_29},{t:this.shape_28}]},22).to({state:[{t:this.shape_26},{t:this.instance_7}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},6).to({state:[{t:this.instance_5}]},14).to({state:[{t:this.instance_5}]},12).to({state:[{t:this.instance_5}]},6).to({state:[{t:this.instance_5}]},33).to({state:[{t:this.instance_5}]},5).to({state:[{t:this.instance_5}]},7).to({state:[{t:this.instance_5}]},28).to({state:[{t:this.instance_5}]},9).to({state:[]},67).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(176).to({_off:false},0).wait(1).to({regX:22.4,regY:0.1,skewX:1.5,skewY:181.5,x:766.4,y:393.6},0).wait(1).to({regX:22.5,skewX:3.2,skewY:183.2,x:766.3},0).wait(1).to({regY:0,skewX:6.2,skewY:186.2,x:766.4,y:392.5},0).to({_off:true},1).wait(45).to({_off:false},0).wait(1).to({regY:0.1,skewX:3.2,skewY:183.2,x:766.3,y:393.6},0).wait(1).to({regX:22.4,skewX:1.5,skewY:181.5,x:766.4},0).wait(1).to({regX:22.5,regY:0,skewX:0,skewY:180,x:766.3,y:393.5},0).to({regX:22.4,skewX:2.7,skewY:182.7,x:766.4,y:393.6},6,cjs.Ease.get(0.7)).to({regX:22.5,skewX:0,skewY:180,x:766.3,y:393.5},14,cjs.Ease.get(1)).to({regX:22.4,regY:0.1,skewX:1,skewY:181,x:766.4,y:393.6},12,cjs.Ease.get(1)).to({startPosition:0},6).to({startPosition:0},33).to({skewX:0.8,skewY:180.8,x:766.5,y:393.7},5).to({skewX:1,skewY:181,x:766.4,y:393.6},7).to({startPosition:0},28).to({startPosition:0},9).to({_off:true},67).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(193).to({_off:false},0).to({rotation:-2.2},6,cjs.Ease.get(1)).to({_off:true},22).wait(213));

	// Layer 3
	this.instance_8 = new lib.LEFTSHOULDER_1("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(999.9,239.5,1,1,0,0,0,19.4,2.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(176).to({_off:false},0).to({startPosition:0},51).to({startPosition:0},39).to({startPosition:0},33).to({regY:2.6,rotation:-0.3,x:999.1,y:239.1},5).to({regY:2.5,rotation:-0.9,x:998,y:238.3},7).to({regX:19.5,rotation:-0.8,x:998.1},28).to({regX:19.4,rotation:-0.9,x:998},9).to({_off:true},67).wait(19));

	// LEFT SHOULDER
	this.instance_9 = new lib.LEFTSHOULDER_1("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(775.6,332.6,1,1,0,0,180,31.2,95.6);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(176).to({_off:false},0).wait(2).to({x:774.6},0).wait(1).to({regX:11.9,regY:0.6,skewX:0.4,skewY:180.4,x:793.9,y:237.6},0).wait(1).to({regX:-4.9,regY:-2.5,skewX:1.5,skewY:181.5,x:810.7,y:234.5},0).wait(1).to({regX:52.6,regY:183.2,skewX:3.7,skewY:183.7,x:744.5,y:417.3},0).wait(1).to({regX:7.8,regY:1.9,skewX:6.2,skewY:186.2,x:804,y:237.2},0).wait(1).to({regX:-0.1,regY:0.1,skewX:9.8,skewY:189.8,x:819.1,y:235.1},0).wait(1).to({skewX:10.8,skewY:190.8},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:-0.2,skewX:11.1,skewY:191.1,x:819.2},0).wait(1).to({regX:-0.3,regY:0.2,skewX:11.5,skewY:191.5,y:235.2},0).wait(1).to({regX:-0.4,skewX:12,skewY:192,x:819.3,y:235.3},0).wait(1).to({startPosition:0},0).wait(2).to({regX:-0.1,regY:0.1,skewX:12.1,skewY:192.1,x:819.1,y:235.1},0).wait(1).to({skewX:12.6,skewY:192.6,x:819.8,y:235.6},0).wait(28).to({skewX:9.8,skewY:189.8,x:819.1,y:235.1},0).wait(1).to({regX:7.8,regY:1.9,skewX:6.2,skewY:186.2,x:804,y:237.2},0).wait(1).to({regX:52.6,regY:183.2,skewX:3.7,skewY:183.7,x:744.5,y:417.3},0).wait(1).to({regX:-4.9,regY:-2.5,skewX:1.5,skewY:181.5,x:810.7,y:234.5},0).wait(1).to({regX:11.9,regY:0.6,skewX:0.4,skewY:180.4,x:793.9,y:237.6},0).wait(1).to({regX:31.2,regY:95.6,skewX:0,skewY:180,x:774.6,y:332.6},0).wait(1).to({regX:20.4,regY:3.5,x:785.4,y:240.5},0).to({startPosition:0},39).to({startPosition:0},33).to({startPosition:0},5).to({startPosition:0},7).to({startPosition:0},28).to({startPosition:0},9).to({_off:true},67).wait(19));

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

	this.instance_10 = new lib.Symbol8("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(750.2,400,1,1,-17,0,0,125.9,19.2);
	this.instance_10.alpha = 0.191;

	this.instance_11 = new lib.Symbol8("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(750.2,400.1,1,1,9.7,0,0,125.9,19.2);
	this.instance_11.alpha = 0.27;

	this.instance_12 = new lib.Symbol8("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(750.2,400,1,1,0,0,0,125.9,19.2);
	this.instance_12.alpha = 0.18;

	this.instance_13 = new lib.Tween16("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(893.6,218.7);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48}]},176).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10}]},46).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.instance_13}]},43).to({state:[{t:this.instance_13}]},33).to({state:[{t:this.instance_13}]},5).to({state:[{t:this.instance_13}]},7).to({state:[{t:this.instance_13}]},28).to({state:[{t:this.instance_13}]},9).to({state:[]},67).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(266).to({_off:false},0).to({startPosition:0},33).to({startPosition:0},5).to({startPosition:0},7).to({startPosition:0},28).to({startPosition:0},9).to({_off:true},67).wait(19));

	// ID
	this.instance_14 = new lib.Symbol6_1("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(892.3,219.7,1,1,0,0,0,25.9,-24.7);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(176).to({_off:false},0).to({startPosition:0},5).to({rotation:1,x:892.4},4).to({regY:-24.6,rotation:-0.5,y:219.8},4).to({regY:-24.7,rotation:0,x:892.3,y:219.7},5).to({startPosition:0},72).to({startPosition:0},33).to({startPosition:0},5).to({startPosition:0},7).to({startPosition:0},28).to({startPosition:0},9).to({_off:true},67).wait(19));

	// PATCH
	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#4A4A4A").s().p("AorkoICGhVIBjg1IA4BhID3FHIC0j0IB/jTIEMDWIotLNg");
	this.shape_51.setTransform(896,252.1);

	this.instance_15 = new lib.Tween18("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(896,252.1);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_51}]},176).to({state:[{t:this.instance_15}]},90).to({state:[{t:this.instance_15}]},33).to({state:[{t:this.instance_15}]},5).to({state:[{t:this.instance_15}]},7).to({state:[{t:this.instance_15}]},28).to({state:[{t:this.instance_15}]},9).to({state:[]},67).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(266).to({_off:false},0).to({startPosition:0},33).to({startPosition:0},5).to({startPosition:0},7).to({startPosition:0},28).to({startPosition:0},9).to({_off:true},67).wait(19));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52}]},176).to({state:[{t:this.instance_16}]},90).to({state:[{t:this.instance_16}]},33).to({state:[{t:this.instance_16}]},5).to({state:[{t:this.instance_16}]},7).to({state:[{t:this.instance_16}]},28).to({state:[{t:this.instance_16}]},9).to({state:[]},67).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(266).to({_off:false},0).to({startPosition:0},33).to({startPosition:0},5).to({startPosition:0},7).to({startPosition:0},28).to({startPosition:0},9).to({_off:true},67).wait(19));

	// BODY
	this.instance_17 = new lib.BODY("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(893.6,577.2,1,1,0,0,0,120.2,385.5);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(176).to({_off:false},0).to({startPosition:0},5).to({y:575.6},7).to({y:577.2},10).to({startPosition:0},68).to({startPosition:0},33).to({startPosition:0},5).to({startPosition:0},7).to({startPosition:0},28).to({startPosition:0},9).to({_off:true},67).wait(19));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(840.7,42.6,107.8,153.5);


(lib.Wholeguy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_8 = function() {
		playSound("_1Audio_V2");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(8).call(this.frame_8).wait(406));

	// Layer 22
	this.instance = new lib.Symbol9("synched",176);
	this.instance.parent = this;
	this.instance.setTransform(893,581.2,1,1,0,0,0,894.1,582.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(175).to({_off:false},0).to({startPosition:183},7).to({scaleY:0.99,startPosition:187},4).to({regY:582.2,scaleY:1.01,skewX:-1.8,skewY:-1,x:886.6,startPosition:193},6,cjs.Ease.get(1)).to({regX:894,y:581.1,startPosition:194},1).to({regX:894.1,y:581.2,startPosition:220},26).to({regY:582.3,scaleY:0.99,skewX:0,skewY:0,x:893,startPosition:228},8,cjs.Ease.get(1)).to({scaleY:1,startPosition:237},9).to({startPosition:255},18).to({startPosition:300},45).to({y:586,startPosition:304},4).to({rotation:-0.3,x:904.4,y:581.3,startPosition:311},7,cjs.Ease.get(1)).to({startPosition:344},33).to({rotation:0,x:893,y:586,startPosition:352},8,cjs.Ease.get(1)).to({y:581.2,startPosition:359},7,cjs.Ease.get(1)).wait(56));

	// Layer 23
	this.instance_1 = new lib.LEFTTHIGH_1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(846.8,801.8,1,1,0,0,180,45,240.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(175).to({_off:false},0).to({startPosition:0},11).to({scaleY:1,skewX:-2.1,x:844.3,y:803.4},6,cjs.Ease.get(1)).to({y:801.8},27).to({scaleY:1,skewX:0,x:846.8},17,cjs.Ease.get(1)).to({startPosition:0},63).to({startPosition:0},4).to({skewX:1.3,x:851.5},7,cjs.Ease.get(1)).to({startPosition:0},33).to({skewX:0,x:846.8},8,cjs.Ease.get(1)).to({startPosition:0},7,cjs.Ease.get(1)).wait(56));

	// LEFT THIGH
	this.instance_2 = new lib.LEFTTHIGH_1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(940.5,801.8,1,1,0,0,0,45,240.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(175).to({_off:false},0).to({startPosition:0},11).to({regX:45.1,scaleY:1,skewX:-1.9,x:940.7,y:800.2},6,cjs.Ease.get(1)).to({y:801.8},27).to({regX:45,scaleY:1,skewX:0,x:940.5},17,cjs.Ease.get(1)).to({startPosition:0},63).to({startPosition:0},4).to({regX:45.1,scaleY:1,skewX:1.9,x:944.7},7,cjs.Ease.get(1)).to({startPosition:0},33).to({regX:45,scaleY:1,skewX:0,x:940.5},8,cjs.Ease.get(1)).to({startPosition:0},7,cjs.Ease.get(1)).wait(56));

	// Layer 25
	this.instance_3 = new lib.LEFTLEG_1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(949.5,1004.7,1,1,0,0,0,36,235.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(175).to({_off:false},0).to({startPosition:0},124).to({startPosition:0},4).to({skewX:1},7,cjs.Ease.get(1)).to({startPosition:0},33).to({skewX:0},8,cjs.Ease.get(1)).to({startPosition:0},7,cjs.Ease.get(1)).wait(56));

	// LEG
	this.instance_4 = new lib.LEFTLEG_1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(837.5,1004.7,1,1,0,0,180,36,235.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(175).to({_off:false},0).to({startPosition:0},11).to({skewX:-1},6,cjs.Ease.get(1)).to({startPosition:0},27).to({skewX:0},17,cjs.Ease.get(1)).to({startPosition:0},63).to({startPosition:0},4).to({regX:35.9,scaleY:1.01,skewX:1.2},7,cjs.Ease.get(1)).to({startPosition:0},33).to({regX:36,scaleY:1,skewX:0},8,cjs.Ease.get(1)).to({startPosition:0},7,cjs.Ease.get(1)).wait(56));

	// PELVIC
	this.instance_5 = new lib.Tween7("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(893,615.6,1,1,0,0,0,0,43.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(175).to({_off:false},0).to({startPosition:0},11).to({x:883.4},6,cjs.Ease.get(1)).to({startPosition:0},27).to({x:893},17,cjs.Ease.get(1)).to({startPosition:0},63).to({startPosition:0},4).to({x:905.5},7,cjs.Ease.get(1)).to({startPosition:0},33).to({x:893},8,cjs.Ease.get(1)).to({startPosition:0},7,cjs.Ease.get(1)).wait(56));

	// SHOE
	this.instance_6 = new lib.LEFTSHOE_1("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(859.7,1011.2,1,1,0,0,180,0,41.4);

	this.instance_7 = new lib.LEFTSHOE_1("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(963.2,1011.2,1,1,0,0,0,35.5,41.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7},{t:this.instance_6}]},175).wait(239));

	// Symbol 2
	this.instance_8 = new lib.Symbol2("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(899.5,172.8,1,1,0,0,0,54.2,128.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({y:176.8,startPosition:4},4).to({y:174.8,startPosition:11},7).to({regX:54.3,rotation:2.2,x:899.6,y:177.1,startPosition:14},3).to({regX:54.2,rotation:7,x:899.5,y:172.8,startPosition:19},5).to({startPosition:35},17).to({rotation:-7.8,x:900.5,startPosition:41},6).to({rotation:-7.8,x:899.3,y:173.7,startPosition:60},19).to({scaleX:1,scaleY:1,rotation:-8.8,x:893.5,y:176.2,startPosition:64},4).to({regX:54.4,regY:128.3,scaleX:1,scaleY:1,rotation:-10.7,x:881.9,y:171.9,startPosition:72},8).wait(17).to({startPosition:89},0).to({regX:54.3,scaleX:1,scaleY:1,rotation:-10,x:886.1,y:181.6,startPosition:94},5).to({regX:54.4,scaleX:1,scaleY:1,rotation:-9,x:893.8,y:171.8,startPosition:103},9).to({regX:54.2,regY:128.2,rotation:0,x:899.5,y:172.8,startPosition:114},11).to({startPosition:126},12).to({startPosition:158},32).to({_off:true},16).wait(239));

	// Layer 8
	this.instance_9 = new lib.Symbol10("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(759.9,544.9,1,1,3.3,0,0,773.6,549.4);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(45).to({_off:false},0).to({regY:549.3,scaleX:1,scaleY:1,rotation:11.5,x:750.1,y:539.7,startPosition:1},1).to({regX:773.7,regY:549.2,scaleX:1,scaleY:1,rotation:36.1,x:723.7,y:533.6,startPosition:4},3).to({regX:773.6,regY:549.4,scaleX:1,scaleY:1,rotation:69,x:697.8,y:523.2,startPosition:8},4).to({startPosition:17},9).to({regY:549.3,scaleX:1,scaleY:1,rotation:56,x:700.2,y:523.1,startPosition:18},1).to({scaleX:1,scaleY:1,rotation:49.4,x:712.7,y:529.1,startPosition:19},1).to({regX:773.7,regY:549.2,scaleX:1,scaleY:1,rotation:36.1,x:725.7,y:533.6,startPosition:21},2).to({regX:773.6,regY:549.3,scaleX:1,scaleY:1,rotation:11.5,x:747.1,y:539.7,startPosition:24},3).to({regY:549.4,scaleX:1,scaleY:1,rotation:3.3,x:761.1,y:544.9,startPosition:26},2).to({_off:true},1).wait(342));

	// HAND
	this.instance_10 = new lib.HAND("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(746.7,552.2,1.01,1.01,0,5.5,-174.5,37,6.4);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(37).to({_off:false},0).to({x:758.7},7).to({_off:true},1).wait(369));

	// LEFT ARM
	this.instance_11 = new lib.LEFTARM("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(754.7,401.7,1.01,1.01,0,5.5,-174.5,22.5,11.7);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(37).to({_off:false},0).to({x:767},7).to({regX:22.4,regY:11.8,scaleX:1.01,scaleY:1.01,skewX:16.5,skewY:-163.5,x:759.9,y:402.2},4).to({scaleX:1.01,scaleY:1.01,skewX:30.3,skewY:-149.7,x:750.7,y:402.7},5).to({startPosition:0},9).to({scaleX:1.01,scaleY:1.01,skewX:16.5,skewY:-163.5,x:756.9,y:402.2},5).to({regX:22.5,regY:11.7,scaleX:1.01,scaleY:1.01,skewX:5.5,skewY:-174.5,x:759,y:401.7},4).to({_off:true},1).wait(342));

	// LEFT SHOULDER
	this.instance_12 = new lib.LEFTSHOULDER("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(789.6,238.6,1.01,1.01,0,5.5,-174.5,20.6,4.2);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(37).to({_off:false},0).to({regX:20.5,regY:4.4,skewX:1,skewY:-179,y:239.8},7).to({regX:20.4,skewX:7.3,skewY:-172.7,x:789.7},9).to({startPosition:0},9).to({skewX:4.8,skewY:-175.2,x:785.6,y:242.2},3).to({regX:20.5,skewX:-0.2,skewY:-180.2,x:777.6,y:243.8},6).to({_off:true},1).wait(342));

	// HAND
	this.instance_13 = new lib.Tween6_1("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(785.1,241.1,1,1,0,0,0,6.6,-202);

	this.instance_14 = new lib.cg4ybn6uj("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(785.1,245.1,1,1,-1.2,0,0,6.6,-202);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({_off:true,rotation:-1.2,y:245.1},4).to({_off:false,regX:6.7,regY:-201.9,rotation:1.3,x:785.3,y:243.5},8).to({regY:-202,rotation:1.9,x:785.2,y:243},2).to({regX:6.6,regY:-201.9,scaleX:1.01,scaleY:1.01,rotation:5.5,x:787.9,y:238.4},10).to({startPosition:0},12).to({_off:true},1).wait(35).to({_off:false,regX:7,regY:-201.8,rotation:0.2,x:776.9,y:241.4},0).to({regX:6.9,rotation:-3.6,x:769.9,y:245.9},18).to({scaleY:0.99,rotation:0,skewX:-2.9,skewY:-2.7,x:772.4,y:250.3},5).to({regX:6.8,scaleY:1.01,rotation:-1.9,skewX:0,skewY:0,x:778.6,y:241.4},9).to({regX:6.6,regY:-202,scaleX:1,scaleY:1,rotation:0,x:785.1,y:241.1},11).to({_off:true},60).wait(239));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({_off:false},4).to({_off:true,regX:6.7,regY:-201.9,rotation:1.3,x:785.3,y:243.5},8).wait(402));

	// Layer 14
	this.instance_15 = new lib.Tween3_1("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(1022.3,335.5,1,1,-28.3,0,0,-29.1,47.5);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(14).to({_off:false},0).to({rotation:-18.6,x:1030.4,y:337.6},3).to({regX:-29,regY:47.6,rotation:-29.2,x:1024.1,y:336.7},4).to({rotation:-15.6,x:1028.2,y:336.2},4).to({startPosition:0},4).to({regX:-29.1,regY:47.5,rotation:-28.3,x:1028.6,y:335.5},3).to({_off:true},1).wait(381));

	// Layer 10
	this.instance_16 = new lib.Tween3_1("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(1021,332.9,1,1,-30,0,0,-29.1,47.5);

	this.instance_17 = new lib.Tween12("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(1036.5,418.6,1,1,2.5,0,0,9.4,47.6);
	this.instance_17._off = true;

	this.instance_18 = new lib.Tween13("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(1040.6,419.5,1,1,12.5,0,0,-7.9,85.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_17},{t:this.instance_16}]},13).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_17}]},4).to({state:[{t:this.instance_17}]},4).to({state:[{t:this.instance_17}]},4).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_18}]},1).to({state:[]},1).wait(380));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(13).to({_off:false},0).wait(1).to({rotation:4.3,x:1035.1,y:421.6},0).to({regX:9.5,rotation:7.2,x:1038.9,y:424.3},3).to({regX:9.4,rotation:3.3,x:1038.4,y:422.5},4).to({regX:9.5,rotation:6.9,x:1037.9,y:422.7},4).to({startPosition:0},4).to({regX:9.4,rotation:4.3,x:1041.4,y:421.6},3).to({_off:true,regX:-7.9,regY:85.5,rotation:12.5,x:1040.6,y:419.5},1).wait(381));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},5).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_19}]},4).to({state:[{t:this.instance_19}]},4).to({state:[{t:this.instance_19}]},4).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[]},1).wait(373));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(13).to({_off:false},0).wait(1).to({regX:-12.1,regY:-63.5,x:998.1,y:241.8},0).to({regX:-12,skewX:-1.8,x:998.2},3).to({y:240.1},4).to({y:239.2},4).to({y:240.1},4).to({x:999.9,y:240.9},3).to({_off:true},1).wait(381));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},5).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},2).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_45},{t:this.shape_44,p:{x:1077.1,y:388.3}},{t:this.shape_43}]},1).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49}]},1).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52}]},1).to({state:[]},1).to({state:[{t:this.instance_20}]},20).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55}]},1).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_62},{t:this.shape_44,p:{x:1078.4,y:386.9}},{t:this.shape_61}]},1).to({state:[{t:this.shape_65},{t:this.shape_64},{t:this.shape_63}]},1).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69}]},1).to({state:[]},1).wait(374));

	// Layer 19
	this.instance_21 = new lib.Symbol10("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(1003.7,544.9,1,1,0,-3.3,176.7,773.6,549.4);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(45).to({_off:false},0).to({regY:549.3,scaleX:1,scaleY:1,skewX:-11.5,skewY:168.5,x:1015,y:539.7,startPosition:1},1).to({regX:773.7,regY:549.2,scaleX:1,scaleY:1,skewX:-36.1,skewY:143.9,x:1047.4,y:538.6,startPosition:4},3).to({regX:773.6,regY:549.3,scaleX:1,scaleY:1,skewX:-44.4,skewY:135.6,x:1062.9,y:531.7,startPosition:5},1).to({regY:549.4,scaleX:1,scaleY:1,skewX:-69,skewY:111,x:1086.2,y:522,startPosition:8},3).to({y:523.2},9).to({regY:549.3,scaleX:1,scaleY:1,skewX:-56,skewY:124,x:1083.9,y:525.6,startPosition:18},1).to({scaleX:1,scaleY:1,skewX:-49.4,skewY:130.6,x:1071.1,y:534.1,startPosition:19},1).to({regX:773.7,regY:549.2,scaleX:1,scaleY:1,skewX:-36.1,skewY:143.9,x:1051.9,y:533.6,startPosition:21},2).to({regX:773.6,regY:549.3,scaleX:1,scaleY:1,skewX:-11.5,skewY:168.5,x:1022.8,y:539.7,startPosition:24},3).to({regY:549.4,scaleX:1,scaleY:1,skewX:-3.3,skewY:176.7,x:1001.1,y:544.9,startPosition:26},2).to({_off:true},1).wait(342));

	// LEFT ARM
	this.instance_22 = new lib.LEFTARM("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(1018.2,402.8,0.999,0.999,-0.5,0,0,22.5,11.7);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(45).to({_off:false},0).to({regY:11.8,rotation:-31.7,x:1031.2,y:404.8},8).to({y:406.1},9).to({regX:22.6,regY:11.7,rotation:-3,x:1008.2,y:402.8},9).to({_off:true},1).wait(342));

	// LEFT SHOULDER
	this.instance_23 = new lib.LEFTSHOULDER("synched",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(998.6,239.4,0.999,0.999,-0.5,0,0,21.6,4.6);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(45).to({_off:false},0).to({regX:21.5,regY:4.5,rotation:-4.8,x:999,y:239.1},8).to({y:240.4},9).to({regX:21.6,regY:4.6,rotation:-0.5,x:988.6,y:236.9},9).to({_off:true},1).wait(342));

	// HAND
	this.instance_24 = new lib.Tween7_1("synched",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(999.6,239,1,1,0.2,0,0,-7,-201.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).to({y:243.1},4).to({_off:true},1).wait(35).to({_off:false,rotation:-5.5,y:239},0).to({regY:-201.2,scaleX:1,scaleY:1,rotation:-0.1,x:999.7,y:239.1},4).to({_off:true},1).wait(27).to({_off:false,regX:-6.9,regY:-201.1,scaleX:1,rotation:-2.1,x:984.2,y:234.8},0).to({regX:-6.7,scaleY:1,rotation:-2.6,x:982.9,y:234.2},1).to({regX:-6.9,rotation:-3.6,x:982.7},17).to({regX:-6.8,scaleX:1,scaleY:0.98,rotation:0,skewX:-5.9,skewY:-5.7,x:986.4,y:242},5).to({regX:-6.9,regY:-201.2,scaleX:1,scaleY:1,rotation:-4.9,skewX:0,skewY:0,x:992.8,y:236.9},9).to({regX:-7,regY:-201.4,rotation:0,x:1002.1,y:241.4},11).to({startPosition:0},15).to({_off:true},45).wait(239));

	// Layer 10
	this.instance_25 = new lib.Tween2("synched",0);
	this.instance_25.parent = this;
	this.instance_25.setTransform(893.6,218.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).to({y:222.7},4).to({y:218.7},20).to({startPosition:0},12).to({regX:0.1,regY:0.1,x:894,y:218.8},25).to({scaleY:0.99,rotation:-0.8,x:888,y:221.1},4).to({scaleY:1,rotation:-2.9,x:875.9,y:219.3},8).wait(17).to({rotation:-2.9},0).to({regY:0.2,rotation:-2.3,x:879.7,y:225},5).to({regY:0.1,rotation:-1.2,x:886.4,y:218.9},9).to({regX:0,regY:0,rotation:0,x:893.6,y:218.7},11).to({startPosition:0},15).to({_off:true},45).wait(239));

	// Symbol 6
	this.instance_26 = new lib.Symbol6("synched",0);
	this.instance_26.parent = this;
	this.instance_26.setTransform(892.5,200.2,1,1,0,0,0,26.1,-44.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_26).to({y:204.2},4).to({y:200.2},20).to({startPosition:0},12).to({regY:-44.1,rotation:-3,x:892.9,y:200.3},25).to({scaleY:0.99,rotation:-3.8,x:886.5,y:202.6},4).to({scaleY:1,rotation:-5.9,x:873.8,y:200.9},8).wait(17).to({startPosition:0},0).to({regY:-44,scaleX:1,scaleY:0.98,rotation:0,skewX:-5.4,skewY:-5.2,x:877.8,y:208.4},5).to({regY:-44.1,scaleX:1,scaleY:1,rotation:-4.2,skewX:0,skewY:0,x:884.9,y:200.4},9).to({regY:-44.2,rotation:0,x:892.5,y:200.2},11).to({startPosition:0},15).to({_off:true},45).wait(239));

	// Layer 12
	this.instance_27 = new lib.Tween3("synched",0);
	this.instance_27.parent = this;
	this.instance_27.setTransform(896,252.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_27).to({startPosition:0},4).to({startPosition:0},20).to({startPosition:0},12).to({x:896.3},25).to({regX:0.1,scaleY:0.99,rotation:-0.8,x:891,y:254.1},4).to({regY:0.1,scaleY:1,rotation:-2.9,x:880,y:252.5},8).wait(17).to({rotation:-2.9},0).to({rotation:-2.3,x:883.4,y:258.2},5).to({regY:0,rotation:-1.2,x:889.5,y:252.1},9).to({regX:0,rotation:0,x:896},11).to({startPosition:0},15).to({_off:true},45).wait(239));

	// Layer 13
	this.instance_28 = new lib.Tween4("synched",0);
	this.instance_28.parent = this;
	this.instance_28.setTransform(893.6,207.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_28).to({y:211.3},4).to({y:207.3},20).to({startPosition:0},12).to({regX:0.1,regY:0.1,x:894,y:207.4},25).to({scaleY:0.99,rotation:-0.8,x:887.8,y:209.8},4).to({scaleY:1,rotation:-2.9,x:875.3,y:207.9},8).wait(17).to({rotation:-2.9},0).to({regY:0.2,rotation:-2.3,x:879.2,y:213.7},5).to({regY:0.1,rotation:-1.2,x:886.1,y:207.5},9).to({regX:0,regY:0,rotation:0,x:893.6,y:207.3},11).to({startPosition:0},15).to({_off:true},45).wait(239));

	// BODY
	this.instance_29 = new lib.BODY_1("synched",0);
	this.instance_29.parent = this;
	this.instance_29.setTransform(893.6,384.5,1,1,0,0,0,120.2,192.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_29).to({regY:193,scaleY:0.99,y:387},4).to({regY:192.8,scaleY:1,y:384.5},20).to({startPosition:0},9).to({startPosition:0},3).to({x:893.7},3).to({x:893.9},22).to({regX:120.4,scaleX:1,scaleY:0.99,rotation:-0.8,x:890.9,y:385.7},4).to({regY:193,scaleX:1.02,scaleY:1,rotation:-2.9,x:884.4,y:384.9},8).wait(17).to({rotation:-2.9},0).to({scaleY:0.98,rotation:0,skewX:-2.3,skewY:-2.2,x:886.4,y:388.6},5).to({regY:192.9,scaleY:1,rotation:-1.2,skewX:0,skewY:0,x:890,y:384.6},9).to({regX:120.2,regY:192.8,scaleX:1,rotation:0,x:893.6,y:384.5},11).to({startPosition:0},15).to({_off:true},45).wait(239));

	// LEFT THIGH
	this.instance_30 = new lib.LEFTTHIGH("synched",0);
	this.instance_30.parent = this;
	this.instance_30.setTransform(846.8,681.1,1,1,0,0,180,45,119.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_30).to({startPosition:0},4).to({startPosition:0},20).to({startPosition:0},12).to({startPosition:0},25).to({regX:44.9,scaleY:1,x:845.8,y:680.9},4).to({scaleY:1,skewX:-0.6,x:843.5,y:680.4},8).wait(17).to({startPosition:0},0).to({regY:119.8,scaleY:1,skewX:-0.3,x:844.7,y:680.7},5).to({regX:45,regY:119.7,scaleY:1,skewX:0,x:846.8,y:681.1},9).to({startPosition:0},11).to({startPosition:0},15).to({_off:true},45).wait(239));

	// LEFT THIGH
	this.instance_31 = new lib.LEFTTHIGH("synched",0);
	this.instance_31.parent = this;
	this.instance_31.setTransform(940.5,681.1,1,1,0,0,0,45,119.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_31).to({startPosition:0},4).to({startPosition:0},20).to({startPosition:0},12).to({startPosition:0},25).to({scaleY:1.01,skewX:-0.5,skewY:-1.5,x:939.3,y:680.5},4).to({scaleX:1,scaleY:1.03,skewX:-1.8,skewY:-4.7,x:937.1,y:679.2},8).wait(17).to({startPosition:0},0).to({regY:119.8,scaleX:1,scaleY:1.02,skewX:-1,skewY:-3,x:938.3,y:680},5).to({regY:119.7,scaleY:1,skewX:0,skewY:0,x:940.5,y:681.1},9).to({startPosition:0},11).to({startPosition:0},15).to({_off:true},45).wait(239));

	// LEFT LEG
	this.instance_32 = new lib.LEFTLEG("synched",0);
	this.instance_32.parent = this;
	this.instance_32.setTransform(816.5,787,1,1,0,0,180,57,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_32).to({startPosition:0},4).to({startPosition:0},20).to({startPosition:0},12).to({startPosition:0},25).to({skewX:-0.1,x:815.7,y:787.1},4).to({skewX:-0.6,x:814.2,y:787},8).wait(17).to({startPosition:0},0).to({skewX:-0.3,x:815,y:787.1},5).to({skewX:0,x:816.5,y:787},9).to({startPosition:0},11).to({startPosition:0},15).to({_off:true},45).wait(239));

	// LEFT LEG
	this.instance_33 = new lib.LEFTLEG("synched",0);
	this.instance_33.parent = this;
	this.instance_33.setTransform(972.5,795,1,1,0,0,0,59,25.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_33).to({startPosition:0},4).to({startPosition:0},20).to({startPosition:0},12).to({startPosition:0},25).to({startPosition:0},4).to({startPosition:0},8).wait(17).to({startPosition:0},0).to({startPosition:0},5).to({startPosition:0},9).to({startPosition:0},11).to({startPosition:0},15).to({_off:true},45).wait(239));

	// LEFT SHOE
	this.instance_34 = new lib.LEFTSHOE("synched",0);
	this.instance_34.parent = this;
	this.instance_34.setTransform(859.7,1011.2,1,1,0,0,180,0,41.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_34).to({startPosition:0},4).to({startPosition:0},20).to({startPosition:0},12).to({startPosition:0},25).to({startPosition:0},4).to({startPosition:0},8).wait(17).to({startPosition:0},0).to({startPosition:0},5).to({startPosition:0},9).to({startPosition:0},11).to({startPosition:0},15).to({_off:true},45).wait(239));

	// LEFT SHOE
	this.instance_35 = new lib.LEFTSHOE("synched",0);
	this.instance_35.parent = this;
	this.instance_35.setTransform(963.2,1011.2,1,1,0,0,0,35.5,41.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_35).to({startPosition:0},4).to({startPosition:0},20).to({startPosition:0},12).to({startPosition:0},25).to({startPosition:0},4).to({startPosition:0},8).wait(17).to({startPosition:0},0).to({startPosition:0},5).to({startPosition:0},9).to({startPosition:0},11).to({startPosition:0},15).to({_off:true},45).wait(239));

	// Layer 21
	this.instance_36 = new lib.Tween5("synched",0);
	this.instance_36.parent = this;
	this.instance_36.setTransform(893,572.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_36).to({startPosition:0},4).to({startPosition:0},20).to({startPosition:0},12).to({startPosition:0},25).to({skewX:-0.3,skewY:-1.3,y:572.2},4).to({scaleX:1,skewX:-1.2,skewY:-4.1,y:571.4},8).wait(17).to({startPosition:0},0).to({regX:0.1,regY:0.1,skewX:-1.1,skewY:-3,y:571.9},5).to({regX:0,regY:0,scaleX:1,rotation:-1.2,skewX:0,skewY:0,x:892.9,y:572.6},9).to({rotation:0,x:893,y:572.5},11).to({startPosition:0},15).to({_off:true},45).wait(239));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(744.7,42.6,294.8,1011.1);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		playSound("_1Audio_V2");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(446));

	// Layer 30
	this.instance = new lib.Wholeguy("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(1150.6,1023.2,0.788,0.788,0,0,0,893.9,1052.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(450));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1032.8,227.2,232.7,805.2);


// stage content:
(lib._1Historyfws_PageAnimation04 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_44 = function() {
		playSound("_1Audio_V2");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(396));

	// Layer 5
	this.instance = new lib.Symbol1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(170.3,492.1,0.499,0.499,0,0,0,920.7,1043.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},40).wait(400));

	// Layer 4
	this.instance_1 = new lib.Symbol11("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(169.2,491,0.604,0.604,0,0,0,1149.9,1032.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40).to({_off:false},0).wait(400));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(619.1,272.9,237.2,465);
// library properties:
lib.properties = {
	id: '7EE7245649824F39817DD1E5D119C899',
	width: 387,
	height: 490,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"/sounds/home/_1Audio_V2.mp3", id:"_1Audio_V2"}
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
an.compositions['7EE7245649824F39817DD1E5D119C899'] = {
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