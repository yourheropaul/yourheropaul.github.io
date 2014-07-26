var IndexView        = require('./view/Index'),
    TechView         = require('./view/Tech'),
    ContactView      = require('./view/Contact'),
    BenefactorsView  = require('./view/Benefactors');

module.exports = Backbone.Router.extend({

    first_view: true,

    routes: {
      "":        "index",
      "tech":    "tech",
      "contact": "contact",
      "benefactors": "benefactors"
    },

    changeView: function(view, scroll) {

        if ( null != this.currentView ) {
            this.currentView.undelegateEvents();
        }

        this.currentView = view;
        this.currentView.render();

        if (scroll) {
            $.scrollTo($("#app"),800, {offset: {top: -40}});
        } else {
            $.scrollTo(0,800);
        }

        if (!this.first_view){
            Application.ShowNavigation();
        }

        this.first_view = false;
    },

    index: function() {
        this.changeView(new IndexView({ el:$('#app') }), false);
    },

    tech: function() {
        this.changeView(new TechView({ el:$('#app') }), true);
    },

    contact: function() {
        this.changeView(new ContactView({ el:$('#app') }), true);
    },

    benefactors: function() {
        this.changeView(new BenefactorsView({ el:$('#app') }), true);
    },
});