##Creating your own style
To create your own style, you must call `setStyle` to initialize JFavicon.<br>
For example now we'll create a style *main*. We created 17 icons, the first of which - a standard icon without a meter, and the second - an icon that says something like 'max'. And that we have 15 icons of the counter. They are available at: `http://mysite.ru/favicons/main/` and are called `fv1.png`, `fv2.png`, ..., `fv15.png`, `fvmax.png` and `fv.png `. <br>
`fv.png` - default favicon <br>
`fvmax.png` - last count <br>
`fv [1-15]. png` - count value from 1-15, respectively. <br>
Before calling the init write: `JFavicon.setStyle ()` and begin to list all the variables:

	JFavicon.setStyle({
		title: 'main',
		pref: 'fv',
		ext: '.png',
		maxNum: '15'
	});
	
So let's see. `title` - the name of our style. `pref` - prefix our icons (in this case *fv*). `ext` - expand our icons (in this case *.png*). `maxNum` - how much will be the values at the counter.

##Connect the newly created style
So the problem remains the same. Now we must connect our newly created style. What we have at the moment?

	JFavicon.setStyle({
		title: 'main',
		pref: 'fv',
		ext: '.png',
		maxNum: '15'
	});
	
What do we do next? Next, we initialize JFavicon:

	JFavicon.setStyle({
		title: 'main',
		pref: 'fv',
		ext: '.png',
		maxNum: '15'
	});
	
	JFavicon.init({
		extract: 1,
		dir: '/favicons/',
		fav: '/favicons/main/fv.png',
		style: 'main'
	});
	
<b>Notice.</b> *You can initialize JFavicon as many times as you want.*<br><br>

We understand. Since our icons are available from `/favicons/main/`, then call our style and should be a *'main'*. [More...] (/Jaguarko/JFavicon/blob/master/README.md)<br>
Then we just say our style * (main) * and we can freely use this library