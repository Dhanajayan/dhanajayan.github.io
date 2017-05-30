$(document).ready(function() {

	$('.hamburger-menu').click(function(e) {
		e.preventDefault();

		var isActive = $(this).hasClass('active');
		var display = 'block';
		var height = '100%';
		var marginTop = '0';
		$(this).toggleClass('active');

		if(!isActive)
		{
			$('#menu').css({'display':'block'}).queue(function(){
				$(this).animate({
					height: "100%",
					marginTop: "0"
				},1000,function() {
				});
				$(this).dequeue();
			});
		} else {
			$('#menu').animate({
				height: "0%",
				marginTop: "100%"
			},1000,function() {
				$('#menu').css({'display':'none'});
			});
		}

	});

	jQuery('.arrow').on('click',function() {
		jQuery('html,body').animate({
			scrollTop: jQuery('#first-sec').offset().top
		},1000);
	});

	// function getVisible(elementArray) {    
	// 	var arrayLength = elementArray.length;
	// 	elementArray.each(function(index,element) {
	//      if(index === 0 ) {
	// 		    var $el = $(element),
	// 		        scrollTop = $(this).scrollTop(),
	// 		        scrollBot = scrollTop + $(this).height(),
	// 		        elTop = $el.offset().top,
	// 		        elBottom = elTop + $el.outerHeight(),
	// 		        visibleTop = elTop < scrollTop ? scrollTop : elTop,
	// 		        visibleBottom = elBottom > scrollBot ? scrollBot : elBottom,
	// 		        visiblePosition = visibleBottom - visibleTop;
	//      }

	// 	});
	//     // $('#notification').text(visibleBottom - visibleTop);

	// }
	// var elementArray = ['#home','#first-sec','#second-sec','#footer-sec'];
	// $(window).on('scroll resize', getVisible(elementArray));

	// $('.close-icon').click(function(e) {
	// 	e.preventDefault();
	// 	$('.hamburger-menu').toggleClass('active');
	// 	$('#menu').toggleClass('active');
	// });

	skrollr.init({forceHeight: false});

	// $('#fullpage').fullpage();
});