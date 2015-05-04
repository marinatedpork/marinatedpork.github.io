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
	 			break;
	 			case 2:
				 	$('#play-reel').show();
	 			break;
	 			case 3:
	 				$(".founder-quotes").removeClass('fade-n-slide');
	 				$('#founder-quote-holder').css('top', '-30px');
	 				$('#about-header').removeClass('viewing', 600);
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
					$('.brand-title').addClass('viewing', 1250);
					$('.down-arrow').addClass('viewing', 1250);
	 			break;
	 			case 2:
					nav.css({"color": "white"});
					hamburgerMenu.css({"color": "white", "border": "2px solid white"});
	 			break;
	 			case 3:
	 				$(".founder-quotes").addClass('fade-n-slide', 500, function(){
						$('#about-header').addClass('viewing', 1000);
	 				});
	 				$('#founder-quote-holder').css('top', '0px');
					nav.css({"color": "white"});
					hamburgerMenu.css({"color": "white", "border": "2px solid white"});
	 			break;
	 			case 4:
					nav.css({"color": "#262626"});
					hamburgerMenu.css({"color": "#262626", "border": "2px solid #262626"});	 				
	 				$('#portfolio-list').addClass('viewing', 1500);
 					$('#portfolio-header').addClass('viewing', 1000);
	 				$('#portfolio-list ul li span').addClass('viewing', 400, function(){
	 				});
	 				$('.portfolio-client').addClass('viewing', 1000);
	 				$('.portfolio-description').addClass('viewing', 1000);
	 				$('.portfolio-title').addClass('viewing', 1000);
	 				$('.portfolio-info-row').addClass('viewing', 1000);
	 				$('#video-frame div').addClass('viewing', 1000);
	 			break;
	 			default:
		 			nav.css({"color": "#262626"});
		 			hamburgerMenu.css({"color": "#262626", "border": "2px solid #262626"});	 				
	 				$('#contact-us-header').addClass('viewing', 1000);
	 				$('.social-media-container').addClass('viewing', 1000);
	 				$('.business-inquiry-header').addClass('viewing', 1000);
	 				$('.address a').addClass('viewing', 1000);
	 				$('.kyles-name').addClass('viewing', 1000);
	 				$('#contact-form-container').addClass('viewing', 1000);
	 				$('.phone-number .info-holder span').addClass('viewing', 1000);
	 				$('.email-address .info-holder span').addClass('viewing', 1000);
	 				$('.business-inquiry-header span:not(.kyles-name)').addClass('viewing', 1000);
	 				$('.address-text').addClass('viewing', 1000);
	 				$('.info-line').addClass('viewing', 1000);
	 				$('#reel-header').addClass('viewing', 1000);
	 				$('.address-header').addClass('viewing', 1000);
	 				$('#contact-info-container').addClass('viewing', 1000);
	 				$('#leave-a-message').addClass('viewing', 1000);
	 				$('.contact-flavor-text-container').addClass('viewing', 1000);
	 				$('.address-header div:not(.i-circle) span').addClass('viewing', 1000);
					nav.css({"color": "#262626"});
					hamburgerMenu.css({"color": "#262626", "border": "2px solid #262626"});	 				
	 		}

	  },	

	  onSlideLeave: function(anchorLink, index, slideIndex, direction){

	  	var nav				= $("nav"),
	  	hamburgerMenu = $(".hamburger span");

			switch(index) {
				case 0:

	 			break;

	 			default:

	 		};

			switch(slideIndex) {
				case 0:
					nav.css({"color": "#262626"});
					hamburgerMenu.css({"color": "#262626", "border": "2px solid #262626"});	 				
	 			break;

	 			default:
					nav.css({"color": "white"});
					hamburgerMenu.css({"color": "white", "border": "2px solid white"});
	 		};

	  }

 });

});
