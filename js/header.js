
/***********************************
 * EVENTOS HEADER  
 ***********************************/

 	/* 
	 * 	Sin identificar
	 */
	function setHeader() {
		if($(window).scrollTop() > 80) {
			header.addClass('scrolled');
		} else {
			header.removeClass('scrolled');
		}
	}

$(document).ready(function() {

	header = $('header');

	/* 
	 * 	Amplia o contrae el header al ver una sección con submenu
	 */
	$('header li').hover(function () {

		if($('.navbar-toggler').is(':hidden')) {
			if($(this).hasClass('dropdown')) {
				$('header nav').addClass('withsubmenu');
				header.find('.dropdown-menu').removeClass('show');
				$(this).find('.dropdown-menu').addClass('show');
			} else {
				$('header nav').removeClass('withsubmenu');
				header.find('.dropdown-menu').removeClass('show');
			}
		}
	});

	/* 
	 * 	Despliega el menu en horizontal en la vista movil
	 */
	$( "#navbarSupportedContent" ).on( "shown.bs.collapse", function() {
		$(this).animate({"right": 0 }, "slow" );
	})
	.on("show.bs.collapse", function() {
	  $(this).css('position', 'fixed');
	  $(this).css('right', 0-$(this).outerWidth(true));
	})
	.on( "hide.bs.collapse", function() {
		$(this).animate({"right":  0-$(this).outerWidth(true) }, "slow" );
	})
	.on( "hidden.bs.collapse", function() {
	  //console.log('terminado');
	});
});
