$(document).ready(function(){

	$('.brand-title-2').addClass('viewing', 800);
	$('.light-box h1').addClass('viewing', 800);
	
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

	 $("body").on('click', '.hamburger', function(event) {
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

	 setTimeout(function(){
	 	if (!$('#tubular-player').children().length){
			console.log('Video 1 has nothing');
	 	}
	 	if (!$('#tubular-player-2').children().length) {
			console.log('Video 2 has nothing');
	 	}
	 	$('.light-box').fadeOut();
	 }, 8000);

});