function Deck(wrapper_id) {
    this.slides = [];
    this.currentSlide = {};
    this.currentSlideIndex = -1;
    if (wrapper_id === undefined) {
        this.wrapper = "#deck_wrapper";
    } else {
        this.wrapper = "#" + wrapper_id;
    }
};

Deck.prototype = {
    constructor: Deck,
    setCurrentSlide: function(slide) {
        this.currentSlide = slide;
    },
    setCurrentSlideIndex: function(index) {
        this.currentSlideIndex = index;
    },
    getCurrentSlideIndex: function(index) {
        return this.currentSlideIndex;
    },
    pushSlide: function(slide) {
        console.log('pushSlide');
        this.slides.push(slide);
        this.currentSlideIndex++;
        console.log(" - this.slides.length: " + this.slides.length);
        console.log(" - this.currentSlideIndex: " + this.currentSlideIndex);
        this.checkActive();
    },
    popSlide: function() {
        /* Unload newest slide from slide array */
        console.log('popSlide');
        this.slides.pop();
        console.log(" - this.slides.length: " + this.slides.length);
        this.currentSlideIndex--;
        console.log(" - this.currentSlideIndex: " + this.currentSlideIndex);
        this.checkActive();
    },
    loadSlide: function(args) {
        console.log('loadSlide');
        if (args === undefined) {
            args = [];
        }

        /* default values */
        var load_filename = 'home';
        var load_path = 'slides/';
        var load_index = -1;
        var load_level_id = 'slide_level_0';
        var load_new_level = false;

        /* if there are no slides, new_level is automatically set to true */
        if (this.slides.length == 0) {
            args['new_level'] = true;
            load_new_level = true;
        }

        if (args['new_level'] !== undefined) {
            /* new level passed in. load_new_level stays false. */
            if (args['new_level'] == true) {
                load_index = (this.currentSlideIndex + 1);
                load_new_level = true;
            } else {
                load_index = this.currentSlideIndex;
            }
        } else {
            /* new level not passed in. load on current level. */
            load_index = this.currentSlideIndex;
        }

        if (args['name']) {
            load_filename = args['name'];
        }
        if (args['path']) {
            load_path = args['path'];
        }

        load_level_id = 'slide_level_' + load_index;

        var _deck = this;

        var loadDivExists = ($("#" + load_level_id).length == 1);
        if (!loadDivExists) {
            $(this.wrapper).append("<div class='slide' id='" + load_level_id + "'></div>");
        }
        console.log(" - load_index: " + load_index);


        /* load_reset */
        // unload all slides and load in new slide
        if (args['load_reset'] !== undefined) {
            /* load_reset was passed in */
            if (args['load_reset'] === true) {
                /* load_reset was set as true */
                console.log('load_reset');
                args['new_level'] == false;
                for (var i = 1; i < this.slides.length; i++) {
                    console.log(' - unloadSlide: ' + i);

                    /* handle emptying and removing of slide */
                    $("#slide_level_" + i).animate({
                        "top": "1080px"
                    }, 100, "linear", function() {
                        $(this).delay(200).empty().remove();
                    });
                };
                this.slides = [];
                this.currentSlide = args;
                load_index = 0;
                load_level_id = 'slide_level_' + load_index;
            }
        }


        /* empty previous slide first */
        $("#" + load_level_id).empty();
        $("#" + load_level_id).fadeOut(10, function() {
            $(this).show();

            $(".slide").addClass('disabled'); // add disabled class to all slides
            /* Load html into slide */
            $(this).load(load_path + load_filename + ".html", function(response, status, xhr) {
                var load_time = 800;
                if (status === "error") {
                    console.log("error loading " + load_filename + ", " + xhr.status + " " + xhr.statusText);
                    $("#slide_level_0").load("slides/home.html", function() {
                        $(this).animate({
                            top: 0
                        })
                    });
                    var currentSlide = {
                        'name': 'home',
                        'path': 'slides/'
                    };
                    _deck.setCurrentSlide(currentSlide);
                    _deck.pushSlide(currentSlide);
                } else {
                    /* No error loading new slide */
                    $(this).animate({
                        top: 0
                    })
                    console.log(" - load_new_level: " + load_new_level);
                    console.log(" - _deck.currentSlideIndex: " + _deck.currentSlideIndex);
                    if (_deck.slides.length == 0) {
                        /* no slides */
                        console.log('no slides');
                        _deck.currentSlide = args;
                        _deck.setCurrentSlideIndex(-1); // offset the pushSlide index increment
                        _deck.pushSlide(args);
                    } else if (!load_new_level) {
                        /* replacing current slide */
                        console.log('replacing current slide');
                        _deck.popSlide();
                        _deck.pushSlide(args);

                    } else {
                        /* new level slide */
                        console.log('new level slide');
                        _deck.pushSlide(args);
                    }

                    _deck.setCurrentSlide(args);

                }
            });
        });



    },
    unloadSlide: function(index) {
        console.log('unloadSlide');
        var unload_index = -1;
        if (index === undefined) {
            unload_index = this.currentSlideIndex;
        } else {
            unload_index = index;
        }
        if (unload_index == -1) {
            return false; // no slide to unload
        }

        var unload_level_id = "slide_level_" + unload_index;

        /* handle emptying and removing of slide */
        /* Clean up videos */
        $(".slide").children().filter("video").each(function() {
            this.pause(); // can't hurt
            delete(this); // @sparkey reports that this did the trick!
            $(this).remove(); // not sure if this works after null assignment
        });


        $("#" + unload_level_id).animate({
            "top": "1080px"
        }, 100, "linear", function() {
            window.setTimeout(function() {
                $("#" + unload_level_id).empty();
                $("#" + unload_level_id).remove();
            }, 200);
        });

        if (this.currentSlideIndex > 0) {
            this.popSlide();
            this.currentSlide = this.slides[this.currentSlideIndex];
        }

        console.log(' - this.currentSlideIndex: ' + this.currentSlideIndex);
    },
    printData: function() {
        console.log('printData');
        var message = JSON.stringify(this);
        message += "\nthis.currentSlideIndex: " + this.currentSlideIndex;
        console.log(message);
    },
    checkActive: function() {
        console.log('checkActive');
        console.log("this.currentSlideIndex: " + this.currentSlideIndex);
        $(".slide").addClass('disabled');
        $(".slide").removeClass('active');
        $("#slide_level_" + this.currentSlideIndex).removeClass('disabled');
        $("#slide_level_" + this.currentSlideIndex).addClass('active');
    }

}


/*  ===================================
    Helper functions
    ===================================  */
function isInteger(x) {
    return x % 1 === 0;
}
// usage: log('inside coolFunc',this,arguments);
// http://paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function() {
    log.history = log.history || []; // store logs to an array for reference
    log.history.push(arguments);
    if (this.console) {
        console.log(Array.prototype.slice.call(arguments));
    }
};