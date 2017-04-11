$(document).ready(function(){
	$("#mobile-toggle").on('click', function(){
		$(this).toggleClass("mobile-toggle--open");
	});

	$('.mobile-toggle').click(function() {
	    if ($('.nav').hasClass('nav--open')) {
	        $('.nav').removeClass('nav--open');
	    } else {
	        $('.nav').addClass('nav--open');
	    }
	});

	$('.nav li a').click(function() {
	    if ($('.nav').hasClass('nav--open')) {
	        $('.nav').removeClass('nav--open');
	        $('#mobile-toggle').removeClass("mobile-toggle--open");
	    }
	});

	$('nav a').click(function(event) {
	    var id = $(this).attr("href");
	    var target = $(id).offset().top;
		    $('html, body').animate({
		        scrollTop: target
		    }, 500);
		    event.preventDefault();
	});

});