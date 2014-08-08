;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$(document).on("ready",function(){

	var data_index = "colour-index";
	var header = $('h1');
	var spans = $('span',header);

	var colours = shuffle([
					Colours.secondary,
					Colours.tertiary,
					Colours.quaternary,
					Colours.quinary,
					Colours.senary,
					Colours.septenary
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
},{}],2:[function(require,module,exports){
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

    renderRadarChart: function(el, data, fixed) {

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

        if (typeof fixed != "undefined" && fixed) {
            options.scaleOverride = true;
            options.scaleSteps = 4;
            options.scaleStepWidth = 25;
            options.scaleStartValue = 0;
        }

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
            dynamicDisplay : false,
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

        $(window).bind('resize', resize);

        resize();
    },

    renderStackedBarChart: function(el, data, scale_steps, scale_step_width) {

        if (typeof scale_steps == "undefined")
            scale_steps = 14;

        if (typeof scale_step_width == "undefined")
            scale_step_width = 1000;

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
            inGraphDataFontSize : 14,
            segmentShowStroke: false,
            inGraphDataFontFamily: "'Helvetica'",
            inGraphDataFontSize: 14,
            inGraphDataFontStyle: "normal",
            inGraphDataFontColor: "#fff",
            yAxisLabelWidth: 2,
            inGraphDataShow : true,
            scaleLabel: "<%=value%>",
            scaleFontSize : 14,
            scaleStartValue : 0,
            scaleOverride : true,
            scaleSteps : scale_steps,
            scaleStepWidth: scale_step_width,
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
            dynamicDisplay : false,
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

            radar = new Chart(ctx).StackedBar(data,options);
        }

        // This will get the first returned node in the jQuery collection.
        var radar = new Chart(ctx).StackedBar(data, options);

        $(window).bind('resize', resize);
    },

    renderPolarChart: function(el, data, margin, top) {

        var margin = (typeof margin == "undefined") ? 50 : margin;

        /// Get context with jQuery - using jQuery's .get() method.
        var ctx = el.get(0).getContext("2d");

        var width = el.parent().width();

        var options = {
            responsive: true,
            pointLabelFontColor : "white",
            pointLabelFontSize : 14,
            scaleLineColor: "rgba(255,255,255,0.2)",
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
            inGraphDataFontStyle: "bold",
            inGraphDataFontColor: "#fff",
            startAngle : 0,
            logarithmic: true,
            scaleOverride : true,
            scaleSteps : 8,
            scaleStepWidth: 5,
            scaleStartValue : 0,
        };

        el.attr("width",width);
        el.attr("height",width);

        function resize() {

            if (el.parent().width() == width)
                return;

            width = el.parent().width();
            el.attr("width",width);
            el.attr("height",width)
            radar = new Chart(ctx).PolarArea(data,options);
        }

        // This will get the first returned node in the jQuery collection.
        var radar = new Chart(ctx).PolarArea(data, options);
        ctx.clearRect(0, 0, width, width);

        $(window).bind('resize', resize);
    },

    renderTimeline: function(el, groups, items, options ) {

        var container = el[0];
        var timeline = new vis.Timeline(container);

        timeline.setOptions(options);
        timeline.setGroups(groups);
        timeline.setItems(items);
    }
}
},{}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
// Partials hacks
Handlebars.registerHelper('partial', function(templateName,context){
    return new Handlebars.SafeString(Templates[templateName](this));
});

Handlebars.registerHelper('partial_param', function(templateName,context){
    return new Handlebars.SafeString(Templates[templateName](context));
});
},{}],5:[function(require,module,exports){
var supports3DTransforms = false;

$(document).on("ready",function(){
    supports3DTransforms = document.body.style['webkitPerspective'] !== undefined || 
                           document.body.style['MozPerspective'] !== undefined;
});

module.exports = {
    
    Linkify: function(selector) {

        if( supports3DTransforms ) {
            
            var nodes = document.querySelectorAll( selector );

            for( var i = 0, len = nodes.length; i < len; i++ ) {
                var node = nodes[i];

                if( !node.className || !node.className.match( /roll/g ) ) {
                    node.className += ' roll';
                    node.innerHTML = '<span data-title="'+ node.text +'">' + node.innerHTML + '</span>';
                }
            };
        }
    },

    Enable: function(selector) {

        if( supports3DTransforms ) {
            
            var nodes = document.querySelectorAll( selector );

            for ( var i = 0, len = nodes.length; i < len; i++ ) {
                var node = nodes[i];

                if ( !node.className || !node.className.match( /roll/g ) ) {
                    node.className += ' roll';
                }
            }
        }
    }
}
},{}],6:[function(require,module,exports){
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
},{}],7:[function(require,module,exports){
var IndexView        = require('./view/Index'),
    TechView         = require('./view/Tech'),
    ContactView      = require('./view/Contact'),
    WorkView         = require('./view/Work'),
    BenefactorsView  = require('./view/Benefactors');

module.exports = Backbone.Router.extend({

    first_view: true,

    routes: {
      "":            "index",
      "tech":        "tech",
      "contact":     "contact",
      "benefactors": "benefactors",
      "work":        "work",
      "work/:case":  "caseStudy"
    },

    changeView: function(view, scroll) {

        if ( null != this.currentView ) {
            this.currentView.undelegateEvents();
        }

        this.currentView = view;
        this.currentView.render();

        // Add nice links, if available
         Linkify.Linkify('.content a');

        if (scroll) {
            $.scrollTo($("#app"),800, {offset: {top: -40}});
        } else {
            $.scrollTo(0,800);
        }

        if (!this.first_view){
            Application.ShowNavigation();
        }

        this.first_view = false;
    },

    index: function() {
        this.changeView(new IndexView({ el:$('#app') }), false);
    },

    tech: function() {
        this.changeView(new TechView({ el:$('#app') }), true);
    },

    contact: function() {
        this.changeView(new ContactView({ el:$('#app') }), true);
    },

    benefactors: function() {
        this.changeView(new BenefactorsView({ el:$('#app') }), true);
    },
    
    work: function() {
        this.changeView(new WorkView({ el:$('#app') }), true);
    },

    caseStudy: function(name) {
        this.changeView(new WorkView({ el:$('#app'), name: name }), true);
    },
});
},{"./view/Benefactors":9,"./view/Contact":10,"./view/Index":11,"./view/Tech":12,"./view/Work":13}],8:[function(require,module,exports){
// Plugins and extensions
require("./Helper/Handlebars");
require("./Navigation");

// Global-scope help definitions
window.Router 	 = require('./Router');
window.Header    = require('./Header');
window.Colours   = require("./Helper/Colours");
window.Charts    = require("./Helper/Charts");
window.Linkify   = require("./Helper/Links");

// Startup routines
$(document).on("ready",function(){

	Router = new Router();
	Backbone.history.start();
	$(document).foundation();
});

},{"./Header":1,"./Helper/Charts":2,"./Helper/Colours":3,"./Helper/Handlebars":4,"./Helper/Links":5,"./Navigation":6,"./Router":7}],9:[function(require,module,exports){
module.exports = Backbone.View.extend({

    events: {
    },

    // generate the view
    render: function() {

        this.$el.html(Templates["benefactors"]({}));

        Charts.renderTimeline( $('#timeline'), 

                               new vis.DataSet([
                                    {id: 0, content: 'Location', value: 1},
                                    {id: 1, content: 'Benefactor', value: 3},
                                  ]), 

                               new vis.DataSet([
                                    {id: 1, group: 0, content: 'Sydney', 'className': 'secondary-background-colour', start: new Date(2006, 8, 11), end: new Date(2008, 1, 11)},
                                    {id: 2, group: 0, content: 'Singapore', 'className': 'tertiary-background-colour', start: new Date(2008, 1, 12), end: new Date(2008, 11, 28)},
                                    {id: 3, group: 0, content: 'London', 'className': 'quaternary-background-colour', start: new Date(2008, 11, 29), end: new Date(2014, 1, 30)},
                                    {id: 4, group: 0, content: 'Brighton', 'className': 'secondary-background-colour', start: new Date(2014, 0, 0), end: new Date()},
                                    {id: 10, group: 1, content: 'Suede', 'className': 'quinary-background-colour', start: new Date(2006, 8, 11), end: new Date(2008, 1, 20)},
                                    {id: 11, group: 1, content: 'Push', 'className': 'senary-background-colour', start: new Date(2008, 1, 1), end: new Date(2008, 11, 29)},
                                    {id: 12, group: 1, content: 'Airlock', 'className': 'septenary-background-colour', start: new Date(2008, 11, 29), end: new Date(2010, 4, 15)},
                                    {id: 13, group: 1, content: 'HomeMade Digital', 'className': 'quinary-background-colour', start: new Date(2010, 4, 15), end: new Date()},
                                  ]), 

                               {             
                                    editable: false,
                                    min: new Date(2007, 1, 1),         
                                    max: new Date(2015, 0, 1),        
                               } 
                            );

        return this;
    }
});
},{}],10:[function(require,module,exports){
module.exports = Backbone.View.extend({

    events: {
    	"click a.link": "link"
    },

    // generate the view
    render: function() {

        this.$el.html(Templates["contact"]({}));

        this.renderCharts();

        return this;
    },

    renderCharts: function() {

        Charts.renderDoughnutChart( $("#dougnut-split"),
            [
                {
                    value : 40,
                    color: Colours.quinary,
                    title : "Slack"
                },
                {
                    value : 20,
                    color: Colours.tertiary,
                    title : "Google hangouts"
                },
                {
                    value : 10,
                    color: Colours.quaternary,
                    title : "Skype"
                },
                {
                    value : 20,
                    color: Colours.secondary,
                    title : "Email"
                }
            ]
        );

        Charts.renderDoughnutChart( $("#dougnut-new-work"),
            [
                {
                    value : 5,
                    color: Colours.quinary,
                    title : "Slack"
                },
                {
                    value : 15,
                    color: Colours.quaternary,
                    title : "Skype"
                },
                {
                    value : 20,
                    color: Colours.tertiary,
                    title : "Hangouts"
                },
                {
                    value : 50,
                    color: Colours.secondary,
                    title : "Email"
                }
            ]
        );   
    },

    link: function(e) {
    	location.href = $(e.target).data("link");
    	return false;
    }
});
},{}],11:[function(require,module,exports){
module.exports = Backbone.View.extend({

    events: {
    },

    // generate the view
    render: function() {

        this.$el.html(Templates["index"]({}));

        this.renderHexagons();
        this.renderCharts();        

        Linkify.Enable('.call-to-action a');

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
},{}],12:[function(require,module,exports){
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
                    value : 18,
                    color: Colours.quinary,
                    title : "System design"
                },
                {
                    value : 40,
                    color: Colours.tertiary,
                    title : "Frontend dev"
                },
                {
                    value : 40,
                    color: Colours.quaternary,
                    title : "Backend dev"
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

        Charts.renderPolarChart( $("#polar-framework"),
            [
                {
                    value : 30,
                    color: Colours.secondary,
                    title : "Angular"
                },
                {
                    value : 40,
                    color: Colours.tertiary,
                    title : "jQuery"
                },
                {
                    value : 35,
                    color: Colours.quaternary,
                    title : "DART"
                },
                {
                    value : 15,
                    color: Colours.quinary,
                    title : "React"
                },
                {
                    value : 35,
                    color: Colours.senary,
                    title : "Backbone"
                },
                {
                    value : 25,
                    color: Colours.septenary,
                    title : "Ember"
                }
            ]
        );

        Charts.renderRadarChart( $("#radar-markup"), 
                                    {
                                        labels: [ "XSLT", "Handlebars", "Go Tmpl", "Smarty", "ERB", "Django", "Mustache" ],
                                        datasets: [
                                            {
                                                label: "Expertise",
                                                fillColor: "rgba(97,53,115,0.85)",
                                                strokeColor: "rgba(97,53,115,1)",
                                                pointColor: "white",
                                                pointStrokeColor: "rgba(97,53,115,1)",
                                                pointHighlightFill: "#fff",
                                                pointHighlightStroke: "rgba(220,220,220,1)",
                                                data: [ 100, 75, 95, 68, 81, 65, 70]
                                            },
                                            {
                                                label: "Love",
                                                fillColor: "rgba(42,152,143,0.75)",
                                                strokeColor: "rgba(42,152,143,1)",
                                                pointColor: "white",
                                                pointStrokeColor: "rgba(42,152,143,1",
                                                pointHighlightFill: "#fff",
                                                pointHighlightStroke: "rgba(151,187,205,1)",
                                                data: [60, 75, 100, 20, 60, 30, 85, ]
                                            },
                                        ]
                                    }, true);

        Charts.renderStackedBarChart( $("#committed-bar"), 
                                {
                                    labels : ["Feburary", "March", "April", "May", "June", "July"],
                                    datasets : [
                                        {
                                            fillColor: "rgba(97,53,115,0.85)",
                                            strokeColor: "rgba(97,53,115,1)",
                                            pointColor : "rgba(97,53,115,1)",
                                            pointStrokeColor : "#fff",
                                            data : [5812,7222,2893,3412,1948,4610],
                                            title : "Backend"
                                        },
                                        {
                                            fillColor: "rgba(42,152,143,0.75)",
                                            strokeColor: "rgba(42,152,143,1)",
                                            pointColor : "rgba(42,152,143,1)",
                                            pointStrokeColor : "#fff",
                                            data : [1672,2428,3680,4219,5708,3512],
                                            title : "Frontend"
                                        },
                                        {
                                            fillColor: "rgba(61,65,136,0.75)",
                                            strokeColor: "rgba(61,65,136,1)",
                                            pointColor : "rgba(61,65,136,1)",
                                            pointStrokeColor : "#fff",
                                            data : [2601,3896,2081,1082,1552,3032],
                                            title : "Markup        "
                                        },
                                    ]
                                });

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
},{}],13:[function(require,module,exports){
module.exports = Backbone.View.extend({

    events: {
    },

    initialize: function(opts) {

    	this.template = "work";
    	
    	if (typeof opts.name != "undefined") {

    		var tmpl = this.template + "/" + opts.name;

    		if (typeof Templates[tmpl] != "undefined") 
    			this.template = tmpl;
    	}    		
    },

    // generate the view
    render: function() {    

        this.$el.html(Templates[this.template]({}));

        // Rollind links
        Linkify.Enable('.call-to-action a');

        // Link colours
        var colours = [
			"secondary",
			"tertiary",
			"quaternary",
			"quinary",
			"senary",
			"septenary",
			"octonary"
        ];

        $(".random-colour", this.$el).each(function(){
        	$(this).removeClass('random-colour').addClass(colours[Math.round(Math.random() * (colours.length - 1))]+"-background-colour")
        });

        if (this.template == "work") {
            this.renderIndexPageCharts();
        }

        return this;
    },

    renderIndexPageCharts: function() {

        Charts.renderDoughnutChart( $("#dougnut-work-recipients"),
            [
                {
                    value : 18,
                    color: Colours.tertiary,
                    title : "Open source"
                },
                {
                    value : 60,
                    color: Colours.secondary,
                    title : "Non-profit"
                },
                {
                    value : 20,
                    color: Colours.quaternary,
                    title : "For profit"
                }
            ]
        );

        Charts.renderStackedBarChart( $("#bar-impact"), 
        {
            labels : ["2011","2012","2013"],
            datasets : [
                {
                    fillColor: "rgba(97,53,115,0.85)",
                    strokeColor: "rgba(97,53,115,1)",
                    pointColor : "rgba(97,53,115,1)",
                    pointStrokeColor : "#fff",
                    data : [12,17.5,7.8],
                    title : "Non-profit   "
                },
                {
                    fillColor: "rgba(42,152,143,0.75)",
                    strokeColor: "rgba(42,152,143,1)",
                    pointColor : "rgba(42,152,143,1)",
                    pointStrokeColor : "#fff",
                    data : [2.5,1.9,3.2],
                    title : "For profit"
                }
            ]
        }, 4, 5);
    }
});
},{}]},{},[8])
;