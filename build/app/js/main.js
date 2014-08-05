// Plugins and extensions
require("./Helper/Handlebars");
require("./Navigation");

// Global-scope help definitions
window.Router 	 = require('./Router');
window.Header    = require('./Header');
window.Colours   = require("./Helper/Colours");
window.Charts    = require("./Helper/Charts");
window.Linkify   = require("./Helper/Links");

// Startup routines
$(document).on("ready",function(){

	Router = new Router();
	Backbone.history.start();
	$(document).foundation();
});
