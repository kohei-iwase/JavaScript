$("document").ready(function(){
	$(".theTarget").skippr();
});


$(".theTarget").skippr({
	transition : 'fade',
	speed : 500,
	easing : 'easeOutQuart',
	navType :'block',
	childrenElementType : 'div',
	arrows :true,
	autoPlay :true,
	autoPlayDuration :3000,
	keyboardOnAlways :true,
	hidePrevious : false,
});