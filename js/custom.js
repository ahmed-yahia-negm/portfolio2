/*glopal $,alert, console*/

$(function (){
	'use strict';
	 //adjust header height

	 var myheader = $('.header'),

	 myslider = $('.bxslider');


	 myheader.height($(window).height());

	 $(window).resize(function() {

	 	myheader.height($(window).height());

	 	myslider.each(function() {

		$(this).css('padding-top', ($(window).height() - $('.bxslider li').height()) / 2);

	});	

	 });


	 //links add active class

	 $('.links li a').click(function(){

	 	$(this).parent().addClass('active').siblings().removeClass('active');

	 });

	 //adjust bxslider list item center

	myslider.each(function() {

		$(this).css('padding-top', ($(window).height() - $('.bxslider li').height()) / 2);

	});

	 //trigger the bx-slider


  myslider.bxSlider({

  	pager:false
  });



//smooth scroll

/*$('.links li a').click(function() {

		$('html, body').animate({

				scrolltop: $('#' + $(this).data('value')).offset().top

		}, 1000);


});*/
$(".links li a").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#" + $(this).data('value')).offset().top
    }, 1300);
});
	
	//our aotu slider code

	(function aotuslider() {

			$('.slider .active').each(function() {

				if (!$(this).is(':last-Child')) {

					$(this).delay(3000).fadeOut(1000, function() {

						$(this).removeClass('active').next().addClass('active').fadeIn();

						aotuslider();

					});
				}  else {

					$(this).delay(3000).fadeOut(1000, function() {

						$(this).removeClass('active');

						$('.slider div').eq(0).addClass('active').fadeIn();

						aotuslider();

					});
				}

			});

	}());

	//trigger mixitup

	var mixer = mixitup('#cont');


	//nice scroll


	$(function() {

		$('body').niceScroll({

			cursorcolor: '#1abc9c',
			cursorwidth: '10px',
			cursorborder: 'none'
		});

	});

	// adjust shuffle links

	//$('.shuffle li').click(function() {

		//$(this)addClass('selected').siblings().removeClass('selected');

	//});

});




$(window).scroll(function(){
	if( $(this).scrollTop() > 200 ) {
		$('.navbar').addClass('sticky');
	}
	if( $(this).scrollTop() < 200 ) {
		$('.navbar').removeClass('sticky');
	}
});