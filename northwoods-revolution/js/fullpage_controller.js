$(document).ready(function() {
	
	$('#fullPage').fullpage({

		controlArrows: false,
	 	onLeave: function(index, nextIndex, direction){

	    var nextSlide     = $("div.section.fp-section.fp-table.active div.fp-tableCell"),
	        currentSlide  = $("div.section.fp-section.fp-table.active div.fp-tableCell").prev(),
	    		nav 					= $("nav"),
	    		hamburgerMenu = $(".hamburger span");

			switch(index) {
	 			case 1:
	 				$('.brand-title').removeClass('viewing', 300);
	 				$('.down-arrow').removeClass('viewing', 300);
	 				player.pauseVideo();
	 			break;
	 			case 2:
				 	$('#play-reel').show();
	 			break;
	 			case 3:
	 				$(".founder-quotes").removeClass('fade-n-slide');
	 				$('#founder-quote-holder').css('top', '-30px');
	 				$('#about-header').removeClass('viewing', 600);
	 				$(".would-you-like-to-know-more").addClass('viewing', 300);
	 				playerTwo.pauseVideo();
	 			break;
	 			case 4:
	 				$('#portfolio-list').removeClass('viewing');
	 				$('#portfolio-list ul li span').removeClass('viewing', 500);
 					$('#portfolio-header').removeClass('viewing');
 					$('.portfolio-client').removeClass('viewing', 300);
 					$('.portfolio-description').removeClass('viewing', 300);
 					$('.portfolio-title').removeClass('viewing', 300);
	 				$('.portfolio-info-row').removeClass('viewing', 300);
	 				$('#video-frame div').removeClass('viewing', 1000);
	 			break;
	 			default:
	 				$('#contact-us-header').removeClass('viewing', 800);
	 				$('.social-media-container').removeClass('viewing', 300);
	 				$('.business-inquiry-header').removeClass('viewing', 300);
	 				$('.address a').removeClass('viewing', 300);
	 				$('.address-text').removeClass('viewing', 300);
	 				$('.address-header div:not(.i-circle) span').removeClass('viewing', 300);
	 				$('.contact-flavor-text-container').removeClass('viewing', 300);
	 				$('#leave-a-message').removeClass('viewing', 300);
	 				$('.business-inquiry-header span:not(.kyles-name)').removeClass('viewing', 300);
	 				$('.kyles-name').removeClass('viewing', 300);
	 				$('.phone-number .info-holder span').removeClass('viewing', 300);
	 				$('.email-address .info-holder span').removeClass('viewing', 300);
	 				$('#contact-form-container').removeClass('viewing', 300);
	 				$('.address-header').removeClass('viewing', 300);
	 				$('#contact-info-container').removeClass('viewing', 300);
	 				$('#reel-header').removeClass('viewing', 300);
	 		}

	 		switch(nextIndex) {
	 			case 1:
					nav.css({"color": "#262626"});
					hamburgerMenu.css({"color": "#262626", "border": "2px solid #262626"});	 				
		 			setTimeout(function () {
						$('.brand-title').addClass('viewing', 850);
						$('.down-arrow').addClass('viewing', 850);
					}, 200);
		 			setTimeout(function() {
		 				player.playVideo();
		 			}, 1000);
	 			break;
	 			case 2:
					nav.css({"color": "white"});
					hamburgerMenu.css({"color": "white", "border": "2px solid white"});
	 			break;
	 			case 3:
						nav.css({"color": "white"});
						hamburgerMenu.css({"color": "white", "border": "2px solid white"});
		 			setTimeout(function () {
		 				$(".founder-quotes").addClass('fade-n-slide', 300, function(){
							$('#about-header').addClass('viewing', 400);
			 				$(".would-you-like-to-know-more").addClass('viewing', 500);
		 				});
		 				$('#founder-quote-holder').css('top', '0px');
					}, 200);
		 			setTimeout(function() {
		 				playerTwo.playVideo();
		 			}, 1000);
	 			break;
	 			case 4:
					nav.css({"color": "#262626"});
					hamburgerMenu.css({"color": "#262626", "border": "2px solid #262626"});	 				
		 			setTimeout(function () {
		 				$('#portfolio-list').addClass('viewing', 1000);
	 					$('#portfolio-header').addClass('viewing', 800);
		 				$('#portfolio-list ul li span').addClass('viewing', 400, function(){
		 				});
		 				$('.portfolio-client').addClass('viewing', 800);
		 				$('.portfolio-description').addClass('viewing', 800);
		 				$('.portfolio-title').addClass('viewing', 800);
		 				$('.portfolio-info-row').addClass('viewing', 800);
		 				$('#video-frame div').addClass('viewing', 800);
					}, 200);
	 			break;
	 			default:
		 			nav.css({"color": "#262626"});
		 			hamburgerMenu.css({"color": "#262626", "border": "2px solid #262626"});	 				
		 			setTimeout(function () {
		 				var tags = [
			 				$('#contact-us-header'),
			 				$('.social-media-container'),
			 				$('.business-inquiry-header'),
			 				$('.address a'),
			 				$('.kyles-name'),
			 				$('#contact-form-container'),
			 				$('.phone-number .info-holder span'),
			 				$('.email-address .info-holder span'),
			 				$('.business-inquiry-header span:not(.kyles-name)'),
			 				$('.address-text'),
			 				$('.info-line'),
			 				$('#reel-header'),
			 				$('.address-header'),
			 				$('#contact-info-container'),
			 				$('#leave-a-message'),
			 				$('.contact-flavor-text-container'),
			 				$('.address-header div:not(.i-circle) span')
		 				];
		 				tags.each(function(index, el) {
		 					el.addClass('viewing', 800);
		 				});
		 				}, 200);
					nav.css({"color": "#262626"});
					hamburgerMenu.css({"color": "#262626", "border": "2px solid #262626"});	 				
	 		}

	  }

 });

});
