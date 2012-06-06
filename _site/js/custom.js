$(document).ready(function(){
	var menu_ul = $('.accordion > li > ul'),
		menu_a  = $('.accordion > li > a');
		 
	menu_ul.hide();
		 
	menu_a.click(function(e) {
		e.preventDefault();
		if(!$(this).hasClass('active')) {
		    menu_a.removeClass('active').css("border-bottom", "none");
		    menu_ul.filter(':visible').slideUp('normal');
		    $(this).addClass('active').next().stop(true,true).slideDown('normal');
            $(this).css("border-bottom","1px solid #4183C4");
		} else {
		    $(this).removeClass('active').css("border-bottom","none");
		    $(this).next().stop(true,true).slideUp('normal');
		}
	});
});
