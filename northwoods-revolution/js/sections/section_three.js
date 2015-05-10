$(document).ready(function(){

	$("div.secret-slide-three").hide();
	$(".section-three-back-button").hide();
	$("div.section-three-slide-two").hide();

	$("body").on("click", '.would-you-like-to-know-more.about', function(event){
		$(".section-three-slide-one div.absolute-center-two").fadeOut(400,function(event){
			$("div.secret-slide-three").fadeIn(400, function(event){
				$(".section-three-back-button").slideDown();
			});
		});
	});

	$("body").on("click", '.would-you-like-to-know-more.info', function(event){
		$(".section-three-slide-one div.absolute-center-two").fadeOut(400,function(event){
			$("div.section-three-slide-two").fadeIn(400, function(event){
				$(".section-three-back-button").slideDown();
			});
		});
	});

	$("body").on("click", ".section-three-back-button", function(event){
		$(".section-three-back-button").slideUp(250, function(event){
			$("div.sub-section:visible").fadeOut(400, function(event){
				$(".section-three-slide-one div.absolute-center-two").fadeIn(400);
			});
		});
	});

});