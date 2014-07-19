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
},{"./view/Index":6,"./view/Tech":7}],2:[function(require,module,exports){
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
module.exports = {
	
	renderDoughnutChart: function(el, data, margin, top) {

        var margin = (typeof margin == "undefined") ? 50 : margin;

        /// Get context with jQuery - using jQuery's .get() method.
        var ctx = el.get(0).getContext("2d");

        var width = el.parent().width();

        var options = {
            responsive: true,
            pointLabelFontColor : "white",
            pointLabelFontSize : 14,
            scaleLineColor: "white",
            scaleLineWidth: 2,
            scaleShowLabels : false,
            animation: false,
            inGraphDataShow : true,
            datasetFill : true,
            inGraphDataTmpl: "<%=v1%>",
            spaceLeft : margin,
            spaceRight : margin,
            spaceTop : -60,
            spaceBottom : 0,
            inGraphDataFontSize : 15,
            segmentShowStroke: false,
            inGraphDataFontFamily: "'Helvetica'",
            inGraphDataFontSize: 14,
            inGraphDataFontStyle: "normal",
            inGraphDataFontColor: "#fff",
        };

        el.attr("width",width);
        el.attr("height",width);

        function resize() {

            if (el.parent().width() == width)
                return;

            width = el.parent().width();
            el.attr("width",width);
            el.attr("height",width)
            radar = new Chart(ctx).Doughnut(data,options);
        }

        // This will get the first returned node in the jQuery collection.
        var radar = new Chart(ctx).Doughnut(data, options);
        ctx.clearRect(0, 0, width, width);

        $(window).bind('resize', resize);
    },

    renderRadarChart: function(el, data) {

        /// Get context with jQuery - using jQuery's .get() method.
        var ctx = el.get(0).getContext("2d");

        var width = el.parent().width();

        var options = {
            responsive: true,
            angleLineColor : "rgba(255,255,255,1)",
            pointLabelFontColor : "white",
            pointLabelFontSize : 14,
            pointLabelFontFamily : "'Helvetica'",
            pointLabelFontStyle : "bold",
            scaleLineColor: "white",
            scaleLineWidth: 2,
            scaleShowLabels : false,
            animation: false,
        };

        $( window ).resize(function(event){

             if (el.parent().width() == width)
                return;

            width = el.parent().width();
            el.attr("width",width);
            el.attr("height",width)
            radar = new Chart(ctx).Radar(data,options);
        });

        el.attr("width",width);
        el.attr("height",width);
        var radar = new Chart(ctx).Radar(data, options);
    },

    renderAreaChart: function(el, data) {

        /// Get context with jQuery - using jQuery's .get() method.
        var ctx = el.get(0).getContext("2d");

        var width = el.parent().width();

        var options = {
            responsive: true,
            pointLabelFontColor : "white",
            pointLabelFontSize : 14,
            scaleLineColor: "white",
            scaleLineWidth: 2,
            animation: false,
            inGraphDataShow : true,
            datasetFill : true,
            inGraphDataTmpl: "<%=v3%>",
            inGraphDataFontSize : 15,
            segmentShowStroke: false,
            inGraphDataFontFamily: "'Helvetica'",
            inGraphDataFontSize: 14,
            inGraphDataFontStyle: "normal",
            inGraphDataFontColor: "#fff",
            yAxisLabelWidth: 2,
            inGraphDataShow : true,
            scaleLabel: "<%=value%>",
            scaleFontSize : 14,
            scaleOverride : true,
            scaleSteps : 4,
            scaleStepWidth: 5,
            scaleStartValue : 0,
            scaleFontColor: "white",
            legend : true,
            legendFontFamily : "'Helvetica'",
            legendFontSize : 14,
            legendFontStyle : "bold",
            legendFontColor : "white",
            legendBlockSize : 40,
            legendBorders : false,
            legendBordersSpaceBefore: 20,
            spaceTop : 10,
            spaceBottom : 0,
            spaceLeft : 0,
            spaceRight : 0,
            dynamicDisplay : true,
            scaleShowGridLines : false,
        };

        el.attr("width",width);

        if (width <= 640) {
            el.attr("height",width * 0.75);                
        }

        function resize() {

            if (el.parent().width() == width)
                return;

            width = el.parent().width();
            el.attr("width",width);

            if (width <= 640) {
                el.attr("height",width * 0.75);                
            }

            options.dynamicDisplay = false;

            radar = new Chart(ctx).Line(data,options);
        }

        // This will get the first returned node in the jQuery collection.
        var radar = new Chart(ctx).Line(data, options);
        ctx.clearRect(0, 0, width, width);

        $(window).bind('resize', resize);

        resize();
    },
}
},{}],4:[function(require,module,exports){
module.exports = {
	primary: "#f08332",
	secondary: "#613573",
	tertiary: "#ffba4f",
	quaternary: "#2a988f",
	quinary: "#736caf",
	senary: "#3d4188",
	septenary: "#2b56a3",
	octonary: "white"
}

},{}],5:[function(require,module,exports){
window.AppRouter = require('./AppRouter');
window.Header    = require('./Header');
window.Colours   = require("./Helper/Colours");
window.Charts    = require("./Helper/Charts");

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
},{"./AppRouter":1,"./Header":2,"./Helper/Charts":3,"./Helper/Colours":4}],6:[function(require,module,exports){
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

        Charts.renderDoughnutChart( $("#dougnut-life"),
            [
                {
                    value : 36,
                    color: Colours.secondary,
                    title : "Coding"
                },
                {
                    value : 24,
                    color: Colours.tertiary,
                    title : "Sleeping"
                },
                {
                    value : 14,
                    color: Colours.quaternary,
                    title : "Unicycling"
                },
                {
                    value : 29,
                    color: Colours.quinary,
                    title : "Living"
                }
            ],
            25
        );

        Charts.renderDoughnutChart( $("#dougnut-code"),
            [
                {
                    value : 16,
                    color: Colours.secondary,
                    title : "PHP"
                },
                {
                    value : 30,
                    color: Colours.tertiary,
                    title : "Ruby"
                },
                {
                    value : 20,
                    color: Colours.quaternary,
                    title : "Python"
                },
                {
                    value : 15,
                    color: Colours.quinary,
                    title : "C/C++"
                },
                {
                    value : 25,
                    color: Colours.senary,
                    title : "JavaScript"
                },
                {
                    value : 50,
                    color: Colours.septenary,
                    title : "Go"
                }
            ],
            25
        );

        Charts.renderDoughnutChart( $("#dougnut-overall"),
            [
                {
                    value : 59,
                    color: Colours.secondary,
                    title : "Backend"
                },
                {
                    value : 35,
                    color: Colours.quaternary,
                    title : "Documentation"
                },
                {
                    value : 25,
                    color: Colours.tertiary,
                    title : "Frontend"
                },
                {
                    value : 45,
                    color: Colours.quinary,
                    title : "Tests"
                }
            ],
            25
        );
    }
});
},{}],7:[function(require,module,exports){
module.exports = Backbone.View.extend({

    events: {
    },

    // generate the view
    render: function() {

        this.$el.html(Templates["tech"]({}));

        this.renderCharts();

        return this;
    },

     renderCharts: function() {

        Charts.renderAreaChart( $("#deployments-area"),
                                {
                                    labels : ["2008", "2009", "2010", "2011", "2012", "2013", "2014"],
                                    datasets : [
                                        {
                                            fillColor: "rgba(97,53,115,0.85)",
                                            strokeColor: "rgba(97,53,115,1)",
                                            pointColor : "rgba(97,53,115,1)",
                                            pointStrokeColor : "#fff",
                                            data : [3,8,12,18,10,12,7],
                                            title : "Web apps"
                                        },
                                        {
                                            fillColor: "rgba(42,152,143,0.75)",
                                            strokeColor: "rgba(42,152,143,1)",
                                            pointColor : "rgba(42,152,143,1)",
                                            pointStrokeColor : "#fff",
                                            data : [13, 10, 5, 7, 8, 5, 2],
                                            title : "Web sites"
                                        },
                                        {
                                            fillColor: "rgba(61,65,136,0.75)",
                                            strokeColor: "rgba(61,65,136,1)",
                                            pointColor : "rgba(61,65,136,1)",
                                            pointStrokeColor : "#fff",
                                            data : [1,2,1,2,3,3,2],
                                            title : "Creative          "
                                        },
                                    ]
                                });

        Charts.renderRadarChart( $("#language-radar"), 
                                    {
                                        labels: [ "Node.js", "PHP", "C/C++", "Python", "Ruby", "SQL", "Go"],
                                        datasets: [
                                            {
                                                label: "Expertise",
                                                fillColor: "rgba(97,53,115,0.85)",
                                                strokeColor: "rgba(97,53,115,1)",
                                                pointColor: "white",
                                                pointStrokeColor: "rgba(97,53,115,1)",
                                                pointHighlightFill: "#fff",
                                                pointHighlightStroke: "rgba(220,220,220,1)",
                                                data: [75, 99, 75, 85, 78, 90, 100]
                                            },
                                            {
                                                label: "Fondness",
                                                fillColor: "rgba(42,152,143,0.75)",
                                                strokeColor: "rgba(42,152,143,1)",
                                                pointColor: "white",
                                                pointStrokeColor: "rgba(42,152,143,1",
                                                pointHighlightFill: "#fff",
                                                pointHighlightStroke: "rgba(151,187,205,1)",
                                                data: [68, 85, 75, 55, 100, 70, 100]
                                            },
                                        ]
                                    });

        Charts.renderRadarChart( $("#paradigm-radar"), 
                                    {
                                        labels: [ "MVC", "AJAX", "BDD", "Mobile", "Scaling", "REST", "TDD" ],
                                        datasets: [
                                            {
                                                label: "Expertise",
                                                fillColor: "rgba(97,53,115,0.85)",
                                                strokeColor: "rgba(97,53,115,1)",
                                                pointColor: "white",
                                                pointStrokeColor: "rgba(97,53,115,1)",
                                                pointHighlightFill: "#fff",
                                                pointHighlightStroke: "rgba(220,220,220,1)",
                                                data: [ 95, 95, 78, 99, 95, 94, 100]
                                            },
                                            {
                                                label: "Love",
                                                fillColor: "rgba(42,152,143,0.75)",
                                                strokeColor: "rgba(42,152,143,1)",
                                                pointColor: "white",
                                                pointStrokeColor: "rgba(42,152,143,1",
                                                pointHighlightFill: "#fff",
                                                pointHighlightStroke: "rgba(151,187,205,1)",
                                                data: [100, 68, 75, 90, 80, 100, 85, ]
                                            },
                                        ]
                                    });

        Charts.renderDoughnutChart( $("#dougnut-time-investment"),
            [
                {
                    value : 20,
                    color: Colours.quinary,
                    title : "System design"
                },
                {
                    value : 40,
                    color: Colours.tertiary,
                    title : "Front end dev"
                },
                {
                    value : 40,
                    color: Colours.quaternary,
                    title : "Back end dev"
                },
                {
                    value : 10,
                    color: Colours.secondary,
                    title : "SysOps"
                }, 
                {
                    value : 5,
                    color: Colours.senary,
                    title : "Research"
                }
            ]
        );

        Charts.renderDoughnutChart( $("#dougnut-output-transparency"),
            [
                {
                    value : 20,
                    color: Colours.quaternary,
                    title : "Open source"
                },
                {
                    value : 80,
                    color: Colours.secondary,
                    title : "Closed source"
                }, 
                {
                    value : 5,
                    color: Colours.senary,
                    title : "Licensed"
                }
            ]
        );        

        Charts.renderDoughnutChart( $("#dougnut-time-overall"),
            [
                {
                    value : 10,
                    color: Colours.secondary,
                    title : "QA"
                },
                {
                    value : 15,
                    color: Colours.tertiary,
                    title : "Talking"
                },
                {
                    value : 40,
                    color: Colours.quaternary,
                    title : "Programming"
                },
                {
                    value : 15,
                    color: Colours.quinary,
                    title : "Design"
                },
                {
                    value : 10,
                    color: Colours.senary,
                    title : "Research"
                }
            ]
        );

        Charts.renderDoughnutChart( $("#dougnut-time-programming"),
            [
                {
                    value : 45,
                    color: Colours.secondary,
                    title : "Coding"
                },
                {
                    value : 15,
                    color: Colours.quaternary,
                    title : "Refactoring"
                },
                {
                    value : 25,
                    color: Colours.tertiary,
                    title : "Writing tests"
                },
                {
                    value : 10,
                    color: Colours.quinary,
                    title : "Documentation"
                },
                {
                    value : 10,
                    color: Colours.senary,
                    title : "Version control"
                }
            ]
        );

        Charts.renderDoughnutChart( $("#dougnut-time-design"),
            [
                {
                    value : 30,
                    color: Colours.tertiary,
                    title : "Discussion"
                },
                {
                    value : 50,
                    color: Colours.secondary,
                    title : "Documentation"
                },
                {
                    value : 10,
                    color: Colours.quaternary,
                    title : "Diagrams"
                },
                {
                    value : 10,
                    color: Colours.quinary,
                    title : "Physical fights"
                }
            ]
        );

        Charts.renderDoughnutChart( $("#dougnut-time-talking"),
            [
                {
                    value : 40,
                    color: Colours.secondary,
                    title : "Meetings"
                },
                {
                    value : 20,
                    color: Colours.tertiary,
                    title : "Pedantry"
                },
                {
                    value : 20,
                    color: Colours.quaternary,
                    title : "Philosophy"
                },
                {
                    value : 20,
                    color: Colours.quinary,
                    title : "Puns"
                }
            ]
        );
    }
});
},{}]},{},[5])
;