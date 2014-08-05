var supports3DTransforms = false;

$(document).on("ready",function(){
    supports3DTransforms = document.body.style['webkitPerspective'] !== undefined || 
                           document.body.style['MozPerspective'] !== undefined;
});

module.exports = {
    
    Linkify: function(selector) {

        if( supports3DTransforms ) {
            
            var nodes = document.querySelectorAll( selector );

            for( var i = 0, len = nodes.length; i < len; i++ ) {
                var node = nodes[i];

                if( !node.className || !node.className.match( /roll/g ) ) {
                    node.className += ' roll';
                    node.innerHTML = '<span data-title="'+ node.text +'">' + node.innerHTML + '</span>';
                }
            };
        }
    },

    Enable: function(selector) {

        if( supports3DTransforms ) {
            
            var nodes = document.querySelectorAll( selector );

            for ( var i = 0, len = nodes.length; i < len; i++ ) {
                var node = nodes[i];

                if ( !node.className || !node.className.match( /roll/g ) ) {
                    node.className += ' roll';
                }
            }
        }
    }
}