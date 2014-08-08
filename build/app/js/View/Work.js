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
			"septenary"
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