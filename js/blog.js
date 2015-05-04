$(document).ready(function(){


var pig = $('.pig'),
	pig2 = $('.pig2'),
	pig3 = $('.pig3'),
	pig4 = $('.pig4'),
	pig5 = $('.pig5'),
	pig6 = $('.pig6'),
	pig7 = $('.pig7'),
	pig8 = $('.pig8'),
	pig9 = $('.pig9'),
	pig10 = $('.pig10'),
	pig11 = $('.pig11'),
	pig12 = $('.pig12'),
	pig13 = $('.pig13'),
	pig14 = $('.pig14'),
	pig15 = $('.pig15'),
	pig16 = $('.pig16'),
	blogButton = $('.blogbutton'),
	homeButton = $('.homebutton'),
	aboutButton = $('.aboutbutton'),
	blogContainer = $('.blog'),
	aboutContainer = $('.about'),
	article = $('.article'),
	description = $('.description'),
	descr = $('.1'),
	dscrptPig = $('.description-inpig'),
	things = [pig, pig2, pig3, pig4, pig5, pig6, pig7, pig8, pig9, pig10, pig11, pig12, pig13, pig14, pig15, pig16]

// image fader

// var selfie = $('.portrait'),
// 	reel1 = 'http://i.imgur.com/mXgxnQy.jpg'
// 	reel2 = 'http://i.imgur.com/O0nfqDg.jpg'


// selfie.hover(function(){
// 	selfie.fadeOut('fast', function() { 
//   		$(this).load(function() { $(this).fadeIn(20); }); 
//   		$(this).attr("src", reel2); 
// 	}); },function(){
// 	selfie.fadeOut('fast', function() { 
//   		$(this).load(function() { $(this).fadeIn(20); }); 
//   		$(this).attr("src", reel1); 
// 	}); })

// container toggle

blogContainer.hide()
aboutContainer.hide()
blogButton.click(function(event){
	 event.preventDefault()
	 if (aboutContainer.css('display') != 'none' ){
		aboutContainer.fadeOut(400, 'easeInQuad')}
	blogContainer.fadeToggle(500, 'easeInQuad')
})
aboutButton.click(function(event){
	 event.preventDefault()
	 if (blogContainer.css('display') != 'none' ){
		blogContainer.fadeOut(300, 'easeInQuad')}
	aboutContainer.fadeToggle(500, 'easeInQuad')
})
homeButton.click(function(event){
	event.preventDefault()
	if (blogContainer.css('display') != 'none' ){
		blogContainer.fadeOut(300, 'easeInQuad')}
	else {aboutContainer.fadeOut(300, 'easeInQuad')}
})

// blog div expansion

for (var i = 0; i <= things.length - 1; i++) {
	things[i].hover(function(){
	$(this).animate({
		width: '265px',
		'border-radius': '40px',
	})
	$(this).parent().children(description).appendTo($(this))
	$(this).css({
		'background-position': '10px center'
	})
	$(this).children(description).css({
		'margin-left': '50px',
		'margin-top': '-15px',
	    'padding': '5px',
	})
}, function(){
		$(this).animate({
	    	width: '25px',
		})
		$(this).animate({
	    	'border-radius': '50%'
		}, 400, 'easeOutQuad')   	
})
	};
});


