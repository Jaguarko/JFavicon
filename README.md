## JFavicon - easy counter Favicon
*JFavicon* - free library to dynamically change Favicon

## Documentation
*JFavicon* adds a single object to the global namespace and does not require initialisation.

### Basic Usage
To set a specific number in Favicon (Theme Default):

        JFavicon.draw(6);
        
To add to the current counter value (if no argument is given, then 1 is added):

        JFavicon.add(2);
        
To subtract from the current counter value (if no argument is given, then subtract 1):

        JFavicon.deduct(3);
        
### Options
For a call option corresponds to the function `JFavicon.set()`