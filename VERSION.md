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