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