'use strict';

exports.render = function(dom) {
	var tpl = __inline('site.handlebars');

	var data = {
		pic: __uri('assets/pic.png'),
		circle: __uri('assets/circle.png'),
		heart: __uri('assets/heart.png'),
		text: __uri('assets/text.png')
	}

	dom.innerHTML = tpl(data);
}