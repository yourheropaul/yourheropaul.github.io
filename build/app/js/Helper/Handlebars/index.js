// Partials hacks
Handlebars.registerHelper('partial', function(templateName,context){
    return new Handlebars.SafeString(Templates[templateName](this));
});

Handlebars.registerHelper('partial_param', function(templateName,context){
    return new Handlebars.SafeString(Templates[templateName](context));
});