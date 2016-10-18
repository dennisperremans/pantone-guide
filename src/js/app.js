$(function() {

	// set text color
	function isDark( color ) {
    	var match = /rgb\((\d+).*?(\d+).*?(\d+)\)/.exec(color);
	    return ( match[1] & 255 )
	         + ( match[2] & 255 )
	         + ( match[3] & 255 )
	           < 3 * 256 / 2;
	}

	$('.swatch').each(function() {
    	$(this).css("color", isDark($(this).css("background-color")) ? 'white' : 'black');
	});


	// Search color
	$(".search").keyup(function(){
 
        // Retrieve the input field text and reset the count to zero
        var filter = $(this).val(), count = 0;
 
        // Loop through the comment list
        $(".swatch").each(function(){
 
            // If the list item does not contain the text phrase fade it out
            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                $(this).fadeOut();
 
            // Show the list item if the phrase matches and increase the count by 1
            } else {
                $(this).show();
            }
        });
    });

	var swatchOpen = false;

	$('.swatch').click(function(){
		if(!swatchOpen) {
			$(this).addClass('swatch--full-screen');
			$("<i class='fa fa-close swatch__close-icon'></i>").appendTo($(this));

			swatchOpen = true;
		} else {
			$(this).removeClass('swatch--full-screen');
			$(".fa-close").remove();

			swatchOpen = false;
		}
	});


});


