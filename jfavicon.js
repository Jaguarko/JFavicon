/* 
 * JFavicon - A small library for manipulating the Favicon
 * Str@nnik
 * Copyright (c) 2012 Alex Ivashkin
 * @version 0.2.1
*/

(function() {
	
	var jf = {};
	var undefined = 'undefined';
	jf.m = {};
	jf.init = function (value) {
		jf.m.body = document.getElementsByTagName('body')[0];
		jf.m.head = document.getElementsByTagName('head')[0];
		jf.m.fav = document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]')[0];
		jf.m.title = document.getElementsByTagName('title')[0];
		
		if (typeof value != undefined) {
			if (value.extract) window.jf = jf;
			if (value.fav) jf.sett.favicon = value.fav;
			if (value.style) jf.sett.currStyle = value.style;
			if (value.dir) jf.sett.dir = value.dir;
		}
		
		favicon();
		
		return this;
	}
	
	jf.sett = {
		width: 15,
		height: 9,
		bg: '#000',
		ct: '#fff',
		num: null,
		favicon: '/favicon.png',
		currStyle: 'default',
		dir: '/'
	};
	
	jf.style = {
		'default': {
			title: 'default',
			maxNum: 99
		},
		main: {
			title: 'main',
			maxNum: 2,
			ext: '.png',
			pref: 'fv'
		}
	};
	
	jf.setStyle = function (value) {
		if (typeof value != undefined) {
			if (typeof jf.style[value.title] == undefined) {
				jf.style[value.title] = value;
			}
		}
	};
	
	jf.set = function (value) {
		if (typeof value.width != undefined) jf.sett.width = value.width;
		if (typeof value.height != undefined) jf.sett.height = value.height;
		if (typeof value.bg != undefined) jf.sett.bg = value.bg;
		if (typeof value.ct != undefined) jf.sett.ct = value.ct;
		if (typeof value.num != undefined) jf.sett.num = value.num;
		
		return this;
	};
	
	function favicon () {
		if (!document.querySelectorAll( 'link[rel="icon"], link[rel="shortcut icon"]')[0]) {
			var link = document.createElement('link');
			link.rel = 'shortcut icon';
			link.href = jf.sett.favicon;
			link.type = 'image/x-icon';
			jf.m.head.appendChild(link);
		} else {
			jf.m.fvi = document.querySelectorAll( 'link[rel="icon"], link[rel="shortcut icon"]')[0];
		}
	}
	
	jf.draw = function (num) {
		if (jf.sett.currStyle == 'default') {
			var img = new Image();
			img.src = document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]')[0].href;
			img.onload = function () {
				var canva = document.createElement('canvas');
				canva.width = 16;
				canva.height = 16;
				var c = canva.getContext("2d");
				c.drawImage(img, 0, 0);
				c.fillStyle = jf.sett.bg;
				c.fillRect(1, 15-jf.sett.height, jf.sett.width, jf.sett.height);
				c.fillStyle = jf.sett.ct;
				c.font = "normal 8px sans-serif";
				c.fillText((num <= 99) ? num : '99+', 2, 13);
				jf.m.head.removeChild(document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]')[0]);
				var link = document.createElement('link');
				link.rel = 'shortcut icon';
				link.href = canva.toDataURL();
				link.type = 'image/x-icon';
				jf.m.head.appendChild(link);
				
			}
		} else {
			jf.m.head.removeChild(document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]')[0]);
			var link = document.createElement('link');
			link.rel = 'shortcut icon';
			var currNum = null;
			(num <= jf.style[jf.sett.currStyle].maxNum) ? currNum = num : currNum = 'max';
			link.href = jf.sett.dir + jf.sett.currStyle + '/' + jf.style[jf.sett.currStyle].pref + currNum + jf.style[jf.sett.currStyle].ext;
			link.type = 'image/x-icon';
			jf.m.head.appendChild(link);
		}
		
		return this;
	}
	
	window.JFavicon = jf;
	
}());