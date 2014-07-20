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