;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var IndexView = require('./view/Index'),
    TechView  = require('./view/Tech');

module.exports = Backbone.Router.extend({

    first_view: true,

    routes: {
      "": "index",
      "tech": "tech"
    },

    changeView: function(view, class_name, scroll) {

      if ( null != this.currentView ) {
        this.currentView.undelegateEvents();
      }

      this.currentView = view;
      this.currentView.render();

      if (scroll) {
          $.scrollTo($("#app"),800, {offset: {top: -50}});
      } else {
        $.scrollTo(0,800);
      }

      if (!this.first_view){
          Application.ShowNavigation();
      }

      this.first_view = false;
    },

    index: function() {
        this.changeView(new IndexView({ el:$('#app') }), "landing", false);
    },

    tech: function() {
        this.changeView(new TechView({ el:$('#app') }), "tech", true);
    },
});
},{"./view/Index":4,"./view/Tech":5}],2:[function(require,module,exports){
$(document).on("ready",function(){

	var data_index = "colour-index";
	var header = $('h1');
	var spans = $('span',header);

	var colours = shuffle([
					"#736caf",
					"#3d4188",
					"#2b56a3",
					"#613573",
					"#2a988f",
					"#ffba4f"
				]);

	colours.unshift("#ffffff");

	function getStartIndex(el) {
		return (el.hasClass("not-white")) ? 1 : 0
	}

	function nextColour(el) {

		var index = parseInt(el.data(data_index));

		window.setTimeout( function(){

			el.animate( { color: colours[index] }, 
						2000,
						"swing", 
						function(){

							if (++index >= colours.length)
								index = getStartIndex(el);

							el.data(data_index,index);
							nextColour(el);
						});
			},
			5000);
	};

	spans.each(function(i){

		var el = $(this);
		var index = getStartIndex(el);

		el.animate({ color: colours[index] }, 1,"swing");

		el.data(data_index,index);

		window.setTimeout( function(){
    							nextColour(el);
    			 		   },
        				   i*130);	

        el.mouseover(function(){
        	el.stop();
        	var index = getStartIndex(el);
        	el.data(data_index,index);

        	el.css({color: colours[index]});
        });

        el.mouseover(function(){
        	el.stop();
        	nextColour(el);
        });
	});	

	function shuffle(array) {
	    var counter = array.length, temp, index;

	    // While there are elements in the array
	    while (counter > 0) {
	    	
	        // Pick a random index
	        index = Math.floor(Math.random() * counter);

	        // Decrease counter by 1
	        counter--;

	        // And swap the last element with it
	        temp = array[counter];
	        array[counter] = array[index];
	        array[index] = temp;
	    }

	    return array;
	}

});
},{}],3:[function(require,module,exports){
window.AppRouter = require('./AppRouter');
window.Header    = require('./Header');

$(document).on("ready",function(){

	Router = new AppRouter();
	Backbone.history.start();
	$(document).foundation();
});

window.Application = window.Application || {};

window.Application.ShowNavigation = function() {

	$('#perenial-nav-container').animate( { backgroundColor: "white" }, 250, "swing" );
	$('#perenial-nav-container nav').show();

	$('#perenial-nav-container section li').each(function(i){

		var el = $(this);

		el.css({opacity: 0.0});

		window.setTimeout( function(){
    							el.animate( { opacity: 1.0 }, 400, "swing" );
    			 		   },
        				   i*250);	
	});
}

window.Application.HideNavigation = function() {
	$('nav.main .column').slideUp();
}
},{"./AppRouter":1,"./Header":2}],4:[function(require,module,exports){
module.exports = Backbone.View.extend({

    events: {
    },

    // generate the view
    render: function() {

        this.$el.html(Templates["index"]({}));

        this.renderHexagons();
        this.renderCharts();        

        return this;
    },

    renderHexagons: function() {

        // Fade hexagons in
        $('.hexagons').appear().on('appear', function(event, $all_appeared_elements) {

            $('.hexagon').each(function(){
                var el = $(this);

                window.setTimeout( function(){
                                        el.addClass("animated fadeIn")
                                   },
                                   Math.floor( ((Math.random() * 10)+1) * 100));
                
            });
        });
    },

    renderCharts: function() {

        Pizza.init();

        Pizza.init("#chart-1,#chart-2,#chart-3",{
            donut: true,
            donut_inner_ratio: 0.6, 
            percent_offset: 0,    
            stroke_color: 'transparent',
            stroke_width: 0,
            animation_speed: 50,
            animation_type: 'elastic',
            always_show_text: true
        });
    }
});
},{}],5:[function(require,module,exports){
module.exports = Backbone.View.extend({

    events: {
    },

    // generate the view
    render: function() {

        this.$el.html(Templates["tech"]({}));

        return this;
    }
});
},{}]},{},[3])
;