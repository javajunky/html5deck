$(document).ready(function() {

	console.log('main.js loaded');

	Gator(document).on('click', '.menu_item', function(e) {
	  const this_id = $(this).attr("id");
		const menu_id = $(this).parent().attr("id");

		if(menu_id === "main_menu") {
			const opts = {
				'path': 'slides/'
			};
			switch (this_id) {
				case 'home':
					opts['load_reset'] = true; // reset slides
					mainDeck.loadSlide(opts);
					break;
				case 'menu_1': {
					opts['name'] = 'page_one';
					mainDeck.loadSlide(opts);
					break;
				}
				case 'menu_2': {
					opts['name'] = 'page_two';
					mainDeck.loadSlide(opts);
					break;
				}
				case 'menu_3': {
					opts['name'] = 'page_three';
					opts['new_level'] = true;
					mainDeck.loadSlide(opts);
					break;
				}
				case 'menu_4': {
					mainDeck.unloadSlide();
					break;
				}
				case 'menu_5': {
					mainDeck.printData();
					break;
				}
				default:
					mainDeck.loadSlide();
					return false;
			}
			return false;
		}

	    return false; // prevent click through

	});
});


let mainDeck = new Deck("deck_wrapper"); // Pass in the div ID of the deck wrapper. If there is no argument, it'll default to 'deck_wrapper'.
const options = {
	'name': 'home', // Name of the slide filename without the extension. Defaults to home (home.html).
	'path': 'slides/', // Path to the slide file. Defaults to 'slides/'.
	'new_level': false // If set to true, the new slide will be created on top of the current slide instead of replacing it. Defaults to false.
};
mainDeck.loadSlide(options);
