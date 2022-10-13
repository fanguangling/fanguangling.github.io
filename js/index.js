
$(window).scroll(function(){
	console.log($(this).scrollTop());
	if($(this).scrollTop() >= 50){
		$('#navbar-example').css('top',0);
	}else{
		$('#navbar-example').css('top',-50);
	};
});
new WOW().init();

$('.nav').singlePageNav();