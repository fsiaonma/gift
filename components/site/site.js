'use strict';

var current = {}

var tick = function() {
	typeof current['tick'] == 'function'? current['tick']() : '';
}

var views = {
	'heart': 'demos/heart'
}

exports.load = function(context) {
	var canvasContainer = document.getElementById('canvasContainer');
	require.async(views[context.params.demo], function(demo) {
		demo.render(canvasContainer);
		current = demo;
	});
}

exports.render = function(dom) {
	var tpl = __inline('site.handlebars');
	dom.innerHTML = tpl();
}

createjs.Ticker.addEventListener('tick', tick);
createjs.Ticker.setFPS(30);