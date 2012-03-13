/*!
 * JFavicon - A small library for manipulating the Favicon
 * Str@nnik
 * Copyright (c) 2012 Alex Ivashkin
 * @version 0.1.0
*/

(function() {
	
	var CurrentFavicon = null;
	var OriginalFavicon = null;
	var OriginalTitle = document.title;
	var NumNumber = null;
	var br = function(browser) { return navigator.userAgent.toLowerCase().indexOf(browser) !== -1 };
	var browser = {
		chrome: br('chrome'),
		webkit: br('chrome') || br('safari'),
		safari: br('safari') && !br('chrome'),
		mozilla: br('mozilla') && !br('chrome') && !br('safari')
	};
	
	var isset = {
		r: function (value) {
			if (typeof value == 'undefined') {
				return 0;
			} else {
				return 1;
			}
		},
		p: function (value, func) {
			if (typeof value != 'undefined') {
				func();
			}
		},
		not: function (value, func) {
			if (typeof value == 'undefined') {
				func();
			}
		}
	};
	var jf = {
		version: '0.1.0',
		settings: {
			width: 16,
			height: 16,
			colorBack: '#000000',
			colorText: '#ffffff',
			etitle: 1,
			style: 'main',
			dir: '/',
			currentNum: null
		},
		set: function (value) {
			isset.p(value.width, function () { jf.settings.width = value.width });
			isset.p(value.height, function () { jf.settings.height = value.height });
			isset.p(value.colorBack, function () { jf.settings.colorBack = value.colorBack });
			isset.p(value.etitle, function () { jf.settings.etitle = value.etitle });
			isset.p(value.dir, function () { jf.settings.dir = value.dir });
			isset.p(value.style, function () { jf.settings.style = value.style });
			isset.p(value.colorText, function () { jf.settings.colorText = value.colorText });
			return this;
		},
		style: {
			default: {
				title: 'default',
				prIcon: null,
				maxNum: 99
			},
			main: {
				title: 'main',
				prIcon: 'fv',
				maxNum: 2,
				ext: '.png'
			}
		},
		setStyle: function (value) {
			console.log(this.style[value.title]);
			this.style[value.title] = {};
			this.style[value.title] = {
				title: value.title,
				prIcon: value.prIcon,
				maxNum: value.maxNum,
				ext: value.ext
			};
			return this;
		}
	};
	jf.draw = function (num) {
		if (this.settings.style == 'default') {
			OriginalFavicon = new Image();
			OriginalFavicon.src = document.querySelectorAll( 'link[rel="icon"], link[rel="shortcut icon"]' )[0].href;
			OriginalFavicon.onload = function () {
				var c = document.createElement('canvas');
				c.width = 16;
				c.height = 16;
				co = c.getContext('2d');
				console.log(document.querySelectorAll( 'link[rel="icon"], link[rel="shortcut icon"]' )[0].href);
				
				co.drawImage(OriginalFavicon, 0, 0);
				co.fillStyle = jf.settings.colorBack;
				co.fillRect(0, 6, 16, 10);
				co.fillStyle = jf.settings.colorText;
				co.font = "normal 9px sans-serif";
				co.fillText((num <= 99) ? num : '99+', 1, 14);
				
				document.querySelector( "head" ).removeChild( document.querySelectorAll( 'link[rel="icon"], link[rel="shortcut icon"]' )[0] );
				var newicon = document.createElement( "link" );
				newicon.setAttribute( "rel", "icon" );
				newicon.setAttribute( "href", c.toDataURL() );
				newicon.type = 'image/x-icon';
				document.querySelector( "head" ).appendChild( newicon );
			};
			
		} else {
			document.querySelector( "head" ).removeChild( document.querySelectorAll( 'link[rel="icon"], link[rel="shortcut icon"]' )[0] );
			var newicon = document.createElement( "link" );
			newicon.setAttribute( "rel", "icon" );
			if (num <= this.style[this.settings.style].maxNum) {
				newicon.setAttribute( "href", this.settings.dir+this.style[this.settings.style].title+'/'+this.style[this.settings.style].prIcon+num+this.style[this.settings.style].ext)
			} else {
				newicon.setAttribute( "href", this.settings.dir+this.style[this.settings.style].title+'/'+this.style[this.settings.style].prIcon+'max'+this.style[this.settings.style].ext)
			}
			newicon.type = 'image/x-icon';
			document.querySelector( "head" ).appendChild( newicon );
		}
		jf.settings.currentNum = num;
	};
	jf.add = function (num) {
		if (typeof num != 'undefined') {
			jf.draw(jf.settings.currentNum+num);
		} else {
			jf.draw(jf.settings.currentNum+1);
		}
	};
	jf.deduct = function (num) {
		if (typeof num != 'undefined') {
			jf.draw(jf.settings.currentNum-num);
		} else {
			jf.draw(jf.settings.currentNum-1);
		}
	}
	
	window.JFavicon = jf;
	
}());