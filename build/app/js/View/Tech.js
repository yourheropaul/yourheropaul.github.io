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
                                                label: "Love",
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
                                        labels: [ "MVC", "AJAX", "Rich", "Mobile", "Scaling", "REST", "TDD" ],
                                        datasets: [
                                            {
                                                label: "Expertise",
                                                fillColor: "rgba(97,53,115,0.85)",
                                                strokeColor: "rgba(97,53,115,1)",
                                                pointColor: "white",
                                                pointStrokeColor: "rgba(97,53,115,1)",
                                                pointHighlightFill: "#fff",
                                                pointHighlightStroke: "rgba(220,220,220,1)",
                                                data: [ 85, 95, 78, 99, 95, 90, 100]
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