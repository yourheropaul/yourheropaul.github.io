module.exports = Backbone.View.extend({

    events: {
    },

    // generate the view
    render: function() {

        this.$el.html(Templates["tech"]({}));

        return this;
    }
});