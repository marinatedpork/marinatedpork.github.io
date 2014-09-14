
$(document).ready(function(){

$('body').css({'background-color': 'silver'})

var pig = $( '.wiggle' ),
	pre = $( 'pre' );

$( '.block' ).css({
	'display': 'inline-block',
	height: '75',
	width: '90',
	'background-color': 'red',
});

pre.css({
	'display': 'inline-block',
	width: '650px',
	'margin-left': '25%'
})

pig.css({
	height: '75',
	width: 'auto',	
	'margin-left': '6.5px'
})

$('h1').css({
	'z-index': '5000'
})

pig.hover(
	function() {
	$( this ).ClassyWiggle(40);
});

$( 'pre' ).snippet("ruby",{style:"whitengrey"});

}); 

$(function() {
    var BV = new $.BigVideo();
    BV.init();
    BV.show('http://vjs.zencdn.net/v/oceans.mp4',{ambient:true});
});


