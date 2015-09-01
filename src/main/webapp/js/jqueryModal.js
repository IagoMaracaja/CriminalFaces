/*CLOSE MODAL*/
function closeModal(){
	/*HIDE BACKGROUND*/
	$('.bg_modal').fadeTo('fast', 0, function() {
		$(this).remove();
		//$('select').css('visibility', 'visible');
	});
	
	/*HIDE MODAL*/
	$('.view_modal').fadeTo('fast', 0, 
		function(){$(this).remove();}
	);
	
	//$(window).unbind();
	$('.bg_modal').unbind();
	$(window).unbind('click');
}

function openModal(){
	/*CREATE ELEMENTS*/
	$('body').append('<span class="load_modal">Carregando...</span>').append($('<div></div>').addClass('bg_modal')).append($('<div></div>').addClass('view_modal'));
	

	// verificando se o body é menor do que o screen
	var altura = $('html')[0].scrollHeight < $(window).height() ? $(window).height() : $('html')[0].scrollHeight;
	//$('.bg_modal').width($('html')[0].scrollWidth).height(altura);
	$('.bg_modal').width("100%").height(altura);
	
	/*OPACITY*/		
	$('.bg_modal').css('background-color','#000');
	$('.view_modal').css('opacity', 0);
	$('.bg_modal').css('opacity', 0);

	
	// escondendo selects
	//$('select').css('visibility', 'hidden');
	
	/*SHOW BACKGROUND*/
	$('.bg_modal').fadeTo('fast', 0.5, function() {
		$('.view_modal').load("default",{nocacheattr:(new Date()).getTime()}, function() {
		
			/*REMOVE LOAD*/
			$('.load_modal').remove();
			
			GB_getPageScrollTop = function() {
				var yScrolltop;
				if (self.pageYOffset) {
					yScrolltop = self.pageYOffset;
				} else if (document.documentElement && document.documentElement.scrollTop || document.documentElement.scrollLeft) {
					yScrolltop = document.documentElement.scrollTop;
				} else if (document.body) {
					yScrolltop = document.body.scrollTop;
				}
				return yScrolltop;
			};

			/*MODAL HIDE*/
			$('.view_modal').fadeTo('fast', 1);

			return false;
		});
	});	
	return false;
}

(function($) {
	$(document).ready(function(){
		$('a[rel="modal"]').each(function(){
			$(this).unbind('click').modal();	
		});
		
		$(window).resize(function(){
					GB_getPageScrollTop = function() {
						var yScrolltop;
						if (self.pageYOffset) {
							yScrolltop = self.pageYOffset;
						} else if (document.documentElement && document.documentElement.scrollTop || document.documentElement.scrollLeft) {
							yScrolltop = document.documentElement.scrollTop;
						} else if (document.body) {
							yScrolltop = document.body.scrollTop;
						}
						return yScrolltop;
					};
			var altura = $('html')[0].scrollHeight < $(window).height() ? $(window).height() : $('html')[0].scrollHeight;
			$('.view_modal').css({marginTop: parseInt(GB_getPageScrollTop() - ($('.view_modal').height()/2)), marginLeft: -parseInt($('.view_modal').width()/2)});
			$('.bg_modal').width("100%").height(altura);
			
		});
		$(window).scroll(function(){						
			var altura = $('html')[0].scrollHeight < $(window).height() ? $(window).height() : $('html')[0].scrollHeight;
			$('.bg_modal').width("100%").height(altura);			  
		});
	});
})(jQuery);