$(function(){
	$(window).scroll(function(){
		var element = $("#header-nav");
		if($(this).scrollTop()>=81){
			element.css("top", "0");
			element.css("position", "fixed");
			$("#main").css("margin-top", "61px");
		}
		else{
			element.css("position", "relative");
			$("#main").css("margin-top", "0");
		}
	});
	$(".handle").on("click", function(){
		$("nav ul").toggleClass("showing");
	});
	$("header nav ul li").on("click", function(){
		$("nav ul").toggleClass("showing");
	});
});