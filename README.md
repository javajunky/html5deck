# HTML5 Decks App
This is a basic HTML5 app template designed to emulate a deck of slides.

# Requirements
* [jQuery](http://jquery.com/)

# Utilizes
These are all optional and can be ignored.

* [SCSS](http://sass-lang.com/) styling
* [retina.js](https://github.com/imulus/retinajs)
* [normalize.css](http://necolas.github.io/normalize.css/)
* [gator.js](http://craig.is/riding/gators)
* Eric Meyer's [reset.css](http://meyerweb.com/eric/tools/css/reset/)

# Getting Started
1. Include deck before the closing `</body>` tag
    ``` html
    <script src="/path/to/deck.js"></script>
    ```

2. Include deck CSS file before the closing `</head>` tag
	``` html
	<link rel="stylesheet" href="/path/to/deck.css">
	```

3. Add a wrapper `<div>` to the page with an ID like `#deck_wrapper`
	``` html
	<div id="deck_wrapper"></div>
	```

4. Instantiate a deck object
	``` html
	<script>
		var mainDeck = new Deck("deck_wrapper"); // Pass in the div ID of the deck wrapper. If there is no argument, it'll default to 'deck_wrapper'.
	</script>
	```

5. Load your first slide. Running loadSlide without an options array will load the default values.
	``` html
	<script>
		var options = {
			'name': 'home', // Name of the slide filename without the extension. Defaults to home (home.html).
			'path': 'slides/', // Path to the slide file. Defaults to 'slides/'.
			'new_level': false, // If set to true, the new slide will be created on top of the current slide instead of replacing it. Defaults to false.
			'load_reset': true // If set to true, all slides will be unloaded from the deck before the new slide is loaded. Useful for a 'home' button.
		};
		mainDeck.loadSlide(options);
	</script>
	```