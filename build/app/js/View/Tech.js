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

        Pizza.init();

        Pizza.init(".donut-chart",{
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