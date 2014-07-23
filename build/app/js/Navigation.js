window.Application = window.Application || {};

window.Application.ShowNavigation = function() {

	$('#perenial-nav-container').animate( { backgroundColor: "white" }, 250, "swing" );
	$('#perenial-nav-container nav').show();

	$('#perenial-nav-container section li').each(function(i){

		var el = $(this);

		el.css({opacity: 0.0});

		window.setTimeout( function(){
    							el.animate( { opacity: 1.0 }, 400, "swing" );
    			 		   },
        				   i*250);	
	});
}

window.Application.HideNavigation = function() {
	$('nav.main .column').slideUp();
}