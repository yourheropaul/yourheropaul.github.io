var IndexView = require('./view/Index');

module.exports = Backbone.Router.extend({

    first_view: true,

    routes: {
      "": "index",
      "test": "test"
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

    test: function() {
        this.changeView(new IndexView({ el:$('#app') }), "landing", true);
    },
});