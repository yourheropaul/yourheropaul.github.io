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