# v0.3.1
## July 10, 2020
* ⬆️ Updated [normalize.css](https://necolas.github.io/normalize.css/) to v8.0.1
* ⬆️ Updated [jQuery](https://jquery.com) to v3.5.1
* 🔧 Changed `var` to `const` or `let`

# v0.3.0
## October 10, 2018
* 🚓 Added `.eslintrc.json` file
* ⬆️ Updated [normalize.css](https://necolas.github.io/normalize.css/) to v8.0.0
* ⬆️ Updated [jQuery](https://jquery.com) to v3.3.1
* ✨ Added [Pesticide CSS](https://github.com/mrmrs/pesticide) v0.1.0 into repo
* ✨ Added `_elements.scss` into repo
* 🔥 Removed [fastclick.js](https://github.com/ftlabs/fastclick)
* 🔥 Removed [Lato](http://www.latofonts.com/lato-free-fonts/) font
* ✏️ Edited `README.md`

# v0.2.0
## March 25, 2015
* Renamed app to "HTML5 Decks App"
* Added code to `deck.js` that sets a disabled class on slides that are not the current one. Mouse events are prevented with CSS during transitions.
* Fixed bug with unloadSlide in `deck.js`
* Added video clean up to unloadSlide in `deck.js`
* Added printData and checkActive functions
* Updated pushSlide, popSlide, and loadSlide functions
* Added support for a "load_reset" argument that empties the deck before adding new slide
* Added a button to print data to console

# v0.1.0
## March 10, 2015
* Initial code commit
* Deck is implemented as a Javascript object
* Slides have options for name, path and new level
* Demo shows a home slide, three subpages with loading and unloading
* Slides fade in and out