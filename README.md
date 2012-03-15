## JFavicon - A small library for manipulating the Favicon
*JFavicon* - free library to dynamically change Favicon

## Documentation
*JFavicon* adds a single object to the global namespace

### Basic Usage
Before the tag `</body>` call the initialization JFavicon: `JFavicon.init()`

To specify a particular value of the counter, use:

	JFavicon.draw(6);
	//You can use any other value
	
### Options
For call options simply pass the argument to init:

	JFavicon.init({
		ct: '#fff', //text Color
		bg: '#000', //The background color
		width: 5, //The width of the bubble
		height: 5 //The height of the bubble
	});
	
For all other properties, see the [documentation] (/Jaguarko/JFavicon/tree/master/Doc)

### Advanced
*You can initialize JFavicon as many times as you want.*