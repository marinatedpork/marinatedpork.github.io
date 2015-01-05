var snowing    = true;

var toggleSnow = function(id) {
	if (id.match(/soap|about/)) {
		$("body").snowfall("clear");
		snowing = false;
	} else if (snowing === false) { 
		$("body").snowfall({shadow : true, round : true,  minSize: 5, maxSize:8, flakeCount:20});
		snowing = true;
  }
};

$(document).ready(function() {

	var moonTree      = "http://i.imgur.com/IGBHXkQ.jpg",
			moonlightDock	=	"http://i.imgur.com/0JkUpDe.jpg",
			fireLight			= "http://i.imgur.com/iWLCsoY.jpg";
	var cons          = [$("#soap-container"), $("#about-container"), $("#landing-container"),$("#soap-container"), $("#about-container")],
	    navs          = [$("#soap-nav"), $("#about-nav"), $("#landing-nav"), $("#shop-button"), $("#about-button")],
			backgrounds   = [fireLight, moonTree, moonlightDock, fireLight, moonTree];

	$("#tab-container").children().hide();
	$("#landing-container").fadeIn(600);
	$("body").css({"background-color": $("#tab-container").find("div:visible").css("background-color")})
	$("body").snowfall({shadow : true, round : true,  minSize: 5, maxSize:8, flakeCount:20});

	$.each(navs, function(index, obj){
		obj.on("click", function(event){
			event.preventDefault();
			if (!(cons[index].is(":visible"))) {
				var id = cons[index].attr("id");
				toggleSnow(id);
				$("#tab-container").children().hide();
				$("body").css({"background": "url("+backgrounds[index]+") no-repeat center fixed", "background-size": "cover"}).delay(300);
				cons[index].fadeIn(800); 
			}
		});
	});

	$("#cart-nav").on("click", function(event){
		event.preventDefault();
		$("#cart-container").toggle(300);
	});
	
});
