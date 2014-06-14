module.exports = Backbone.View.extend({

    events: {
    },

    // generate the view
    render: function() {

        this.$el.html(Templates["index"]({}));

        $('.hexagon').each(function(){
        	var el = $(this);

        	window.setTimeout( function(){
        							el.addClass("animated fadeIn")
        			 		   },
        					   Math.floor( ((Math.random() * 10)+1) * 100));
        	
        });

        return this;
    }
});