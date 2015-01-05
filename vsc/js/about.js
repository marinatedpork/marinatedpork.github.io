$(document).ready(function() {
	
	var index   = 1;

	var soapOne = "http://i.imgur.com/WNeGg61.jpg?1",
	    soapTwo = "http://i.imgur.com/W3H7EFQ.jpg?1",
	    table   = "http://i.imgur.com/ZGUy801.jpg?1",
	    oils    = "http://i.imgur.com/8RBPR0T.jpg?1";

	var backgrounds = [oils, soapOne, soapTwo, table];

	var changeBackground = function(element, index) {
		element.css({"background": "url("+backgrounds[index]+") no-repeat center center", "background-size": "cover"});
		return (index < backgrounds.length - 1 ? index + 1 : 0)
	}

  window.setInterval(function(){
  	index = changeBackground($("#about-reel-two"), index);
	}, 2750);

});