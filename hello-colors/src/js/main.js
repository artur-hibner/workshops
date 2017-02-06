$(document).ready(function(){
	$("#burger-container").on('click', function(){
		$(this).toggleClass("open");
		$("#main-menu").toggleClass("open");
	});
});