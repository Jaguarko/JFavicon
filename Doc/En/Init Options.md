##Config options
*To change the main settings JFavicon use the following variables:*

###extract:
To add a global variable scope jf (alias JFavicon) pass function `JFavicon.init ()` argument to extract, not equal to 0. Example:

	JFavicon.init ({extract: 1});
	//Here you can already use a variable jf
	jf.draw (6);
	
###style:
To specify a custom style, pass it as a variable `style`. Example:

	JFavicon.init ({extract: 1, style: 'main'});
	
###directory:
If you set your own style, the favicon image to be taken from the */dir/name_to_style/prefix_num_ext*. To specify your own directory, pass it as a variable `dir`. Example:

	JFavicon.init ({extract: 1, style: 'main', dir: '/favicons/'});
	
<b>Notice.</b> Slash (/) at the end of mandatory!.<br>
*This option is useless if you use a standard style.*

###favicon:
If you for some reason do not want to set a favicon HTML, then pass the address to it in the variable `fav`. Example:

	JFavicon.init ({extract: 1, style: 'main', dir: '/favicons/', fav: '/favicons/favicon_standart.ico'});
	
<b>Notice.</b> The default favicon is taken from */favicon.png*<br>
*This option is useless if you use a standard style.*

##Style options
*To change the style settings JFavicon use the following variables:*

###width:
To set the width of the background count, tell her (in pixels) of the variable `width`. Example:

	JFavicon.init ({extract: 1, width: 16});
	
<b>Notice.</b> You only need to pass a number (unsigned *px*, etc.)<br>
*This option only works in the standard style.*

###height:
To set the height of the background count, tell her (in pixels) of the variable `height`. Example:

	JFavicon.init ({extract: 1, width: 16, height: 16});
	
<b>Notice.</b> You only need to pass a number (unsigned *px*, etc.)<br>
*This option only works in the standard style.*

###background:
To set the background color of the counter, pass it to the variable `bg`. Example:

	JFavicon.init ({extract: 1, width: 16, height: 16, bg: '#000000'});
	
*This option only works in the standard style.*

###text color:
To set the text color on the counter, pass it to the variable `ct`. Example:

	JFavicon.init ({extract: 1, width: 16, height: 16, ct: '#000000'});
	
*This option only works in the standard style.*

###font:
To set the font, pass it to the variable `font`. Example:

	JFavicon.init ({extract: 1, width: 16, height: 16, font: 'normal 8px sans-serif'});
	
*This option only works in the standard style.*