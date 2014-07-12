var IndexView = require('./view/Index'),
    TechView  = require('./view/Tech');

module.exports = Backbone.Router.extend({

    first_view: true,

    routes: {
      "": "index",
      "tech": "tech"
    },

    changeView: function(view, class_name, scroll) {

      if ( null != this.currentView ) {
        this.currentView.undelegateEvents();
      }

      this.currentView = view;
      this.currentView.render();

      if (scroll) {
          $.scrollTo($("#app"),800, {offset: {top: -50}});
      } else {
        $.scrollTo(0,800);
      }

      if (!this.first_view){
          Application.ShowNavigation();
      }

      this.first_view = false;
    },

    index: function() {
        this.changeView(new IndexView({ el:$('#app') }), "landing", false);
    },

    tech: function() {
        this.changeView(new TechView({ el:$('#app') }), "tech", true);
    },
});