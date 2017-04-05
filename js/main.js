$(document).ready(function() {

	// Nav toggle
	  $('.nav-collapse').on('click', function(){
	    $('nav ul').toggleClass('showing');
	    $('#nav-icon').toggleClass('open');
	  });

	var lastScrollTop = 0;
	
	$(document).scroll(function(event) {

		var st = $(this).scrollTop();
   		if (st > lastScrollTop){
       		// downscroll 
       		$('.up-arrow').css({
       			opacity: '0',
       			bottom: '-4rem'
       		});		
		} else {
      		//upscroll
      		$('.up-arrow').css({
       			opacity: '1',
       			bottom: '1rem'
       		});
   		}
		lastScrollTop = st;
		
		if ($(this).scrollTop() >= 750){
			$('.fixed-menu').css({
				left: '1%',
				opacity: '1'
			});
			$('.fixed-contacts').css({
				right: '1%',
				opacity: '1'
			});
		} else {
			$('.fixed-menu').css({
				left: '-5%',
				opacity: '0'
			});
			$('.fixed-contacts').css({
				right: '-5%',
				opacity: '0'
			});
			$('.up-arrow').css({
       			opacity: '0',
       			bottom: '-4rem'
       		});
		}

		
	});
});