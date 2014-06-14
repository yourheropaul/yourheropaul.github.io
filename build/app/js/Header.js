$(document).on("ready",function(){

	var data_index = "colour-index";
	var header = $('h1');
	var spans = $('span',header);

	var colours = shuffle([
					"#736caf",
					"#3d4188",
					"#2b56a3",
					"#613573",
					"#2a988f",
					"#ffba4f"
				]);

	colours.unshift("#ffffff");

	function getStartIndex(el) {
		return (el.hasClass("not-white")) ? 1 : 0
	}

	function nextColour(el) {

		var index = parseInt(el.data(data_index));

		window.setTimeout( function(){

			el.animate( { color: colours[index] }, 
						2000,
						"swing", 
						function(){

							if (++index >= colours.length)
								index = getStartIndex(el);

							el.data(data_index,index);
							nextColour(el);
						});
			},
			5000);
	};

	spans.each(function(i){

		var el = $(this);
		var index = getStartIndex(el);

		el.animate({ color: colours[index] }, 1,"swing");

		el.data(data_index,index);

		window.setTimeout( function(){
    							nextColour(el);
    			 		   },
        				   i*130);	

        el.mouseover(function(){
        	el.stop();
        	var index = getStartIndex(el);
        	el.data(data_index,index);

        	el.css({color: colours[index]});
        });

        el.mouseover(function(){
        	el.stop();
        	nextColour(el);
        });
	});	

	function shuffle(array) {
	    var counter = array.length, temp, index;

	    // While there are elements in the array
	    while (counter > 0) {
	        // Pick a random index
	        index = Math.floor(Math.random() * counter);

	        // Decrease counter by 1
	        counter--;

	        // And swap the last element with it
	        temp = array[counter];
	        array[counter] = array[index];
	        array[index] = temp;
	    }

	    return array;
	}

});