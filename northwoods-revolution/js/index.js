$(document).ready(function(){

	$(".slide-nav").hide();
	$(".brand-left").on('click', function(event) {
		event.preventDefault();
		$.fn.fullpage.moveTo(1);
	});

	$(".slide-nav").each(function(index, el) {
		$(this).on('click', function(event) {
			event.preventDefault();
			$.fn.fullpage.moveTo(index + 2);
		});
	});	
	 
	 $(".down-arrow").on('click', function(event) {
	 	event.preventDefault();
	 	$.fn.fullpage.moveSectionDown();
	 });

	 $("body").on('click', '.menu', function(event) {
	 	event.preventDefault();
	 	$(".hamburger").toggleClass('x-menu');
	 	$(".slide-nav").fadeToggle(400);
	 	$("nav").toggleClass('regular-margin', {duration: 800, easing: 'easeOutCubic'});
	 });

	 $("body").on('click', '#play-reel', function(event) {
	 	event.preventDefault();
	 	$("#reel").prop("controls",true);
	 	$("#reel").get(0).play();
	 	$('#play-reel').fadeOut(400);
	 });

});