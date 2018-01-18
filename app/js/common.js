$(function(){

	$(".js-main-slider").owlCarousel({
		items: 1,
		loop: true
	});

	$(".js-slider-pa").owlCarousel({
		loop: true,
		margin: 30,
		nav: true,
		navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
			},
			768:{
				items:2
			},
			992:{
				items:3
			},
			1200:{
				items:4,
			}
		}
	});
	
	function eqH() {
		
		var windowWidth = $(window).width();
		if (windowWidth >= 768) {
			$(".js-news-preview-eqh").height('auto').equalHeights();
			$(".foot-cont >ul").height('auto').equalHeights();
			$(".col-head").height('auto').equalHeights();

		} else {
			$(".js-news-preview-eqh").height('auto');
			$(".foot-cont >ul").height('auto');
			$(".col-head").height('auto');
		};

	};
	eqH();

	$(window).resize(function() {
		eqH();
	});


	$('.open-form-callback').magnificPopup({
		type: 'inline',
		mainClass: 'my-mfp-zoom-in',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300
	});

	
});