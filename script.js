$(document).ready(function() {
	$(".ingredients li").click(function(){
		$(this).toggleClass('strike');
	});

	$(".col2").mouseenter(function(){
		$(".col2 li").fadeTo('fast',0.25);
	});

	$(".col2 li").mouseenter(function(){
		$(this).fadeTo('fast',1)
	});

	$(".col2 li").mouseleave(function(){
		$(this).fadeTo('fast',0.25)
	});

	$(".col2").mouseleave(function(){
		$(".col2 li").fadeTo('fast',1);
	});

	$(".button").click(function(){
		$(".container").fadeToggle('fast');
		$(".jumbotron").toggleClass("jumbotron-click");
	});

});