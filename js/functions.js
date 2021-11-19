// necessary for inc: to work
(function(a){a.fn.inc=function(b,c,d,e){return this.length&&b?this.each(function(){e=a(this);a.ajax({url:b,success:function(f,g,h){e.html(a.isFunction(c)?c(f,b):f);a.isFunction(d)&&d(b,g,h)}})}):this};a(function(){a('[class*="inc:"]').each(function(){var b=/inc:(\S+)/.exec(this.className||"");b&&a(this).inc(unescape(b[1]))})})})(jQuery);
// necessary for the awesome nav
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

