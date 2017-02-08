$(document).ready(function(){
	$("#burger-container").on('click', function(){
		$(this).toggleClass("open");
		$("#main-menu").toggleClass("open");
	});

	$(window).scroll(function() {
	    if ($(this).scrollTop() > 200) {   
	    	$('#return-to-top').fadeIn(200); 

	    } else {
	    	$('#return-to-top').fadeOut(200);
	    }
	});

	$('#return-to-top').click(function() {      
	    $('body,html').animate({
	        scrollTop : 0                       
	    },1000);
	});

});


//# sourceMappingURL=main.js.map
