var visits = 0;

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

        if (visits > 0)
            Pizza.init();

        visits++;

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