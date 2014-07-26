module.exports = Backbone.View.extend({

    events: {
    },

    // generate the view
    render: function() {

        this.$el.html(Templates["benefactors"]({}));

        Charts.renderTimeline( $('#timeline'), 

                               new vis.DataSet([
                                    {id: 0, content: 'Location', value: 1},
                                    {id: 1, content: 'Benefactor', value: 3},
                                  ]), 

                               new vis.DataSet([
                                    {id: 1, group: 0, content: 'Sydney', 'className': 'secondary-background-colour', start: new Date(2006, 8, 11), end: new Date(2008, 1, 11)},
                                    {id: 2, group: 0, content: 'Singapore', 'className': 'tertiary-background-colour', start: new Date(2008, 1, 12), end: new Date(2008, 11, 28)},
                                    {id: 3, group: 0, content: 'London', 'className': 'quaternary-background-colour', start: new Date(2008, 11, 29), end: new Date(2014, 1, 30)},
                                    {id: 4, group: 0, content: 'Brighton', 'className': 'secondary-background-colour', start: new Date(2014, 0, 0), end: new Date()},
                                    {id: 10, group: 1, content: 'Suede', 'className': 'quinary-background-colour', start: new Date(2006, 8, 11), end: new Date(2008, 1, 20)},
                                    {id: 11, group: 1, content: 'Push', 'className': 'senary-background-colour', start: new Date(2008, 1, 1), end: new Date(2008, 11, 29)},
                                    {id: 12, group: 1, content: 'Airlock', 'className': 'septenary-background-colour', start: new Date(2008, 11, 29), end: new Date(2010, 4, 15)},
                                    {id: 13, group: 1, content: 'HomeMade Digital', 'className': 'quinary-background-colour', start: new Date(2010, 4, 15), end: new Date()},
                                  ]), 

                               {             
                                    editable: false,
                                    min: new Date(2007, 1, 1),         
                                    max: new Date(2015, 0, 1),        
                               } 
                            );

        return this;
    }
});