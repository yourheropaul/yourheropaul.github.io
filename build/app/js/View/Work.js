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
        })        

        return this;
    }
});