( function( $ ) {
$( document ).ready(function() {
// Cache the elements we'll need
var menu = $('#cssmenu');
var menuList = menu.find('ul:first');
var listItems = menu.find('li').not('#responsive-tab');
var path = window.location.pathname;
    path = path.replace(/\/$/, "");
    path = decodeURIComponent(path);

	//alert(path)

    
		


// Create responsive trigger
menuList.prepend('<li id="responsive-tab"><a href="#">Menu</a></li>');


// Toggle menu visibility
menu.on('click', '#responsive-tab', function(){
	listItems.slideToggle('fast');
	listItems.addClass('collapsed');
});

$('#RightMenu > ul > li > ul > li >  a').each(function () {
        var href = $(this).attr('href');

		
        if (path.substring(0, href.length) === href) {
			//alert(path);
			//alert(href);
            $(this).parent().parent().parent().addClass('active');
			$(this).parent().parent().css('display','block');
        }
    });

});
} )( jQuery );


( function( $ ) {
$( document ).ready(function() {
$('#RightMenu > ul > li > a').click(function() {
  $('#RightMenu li').removeClass('active');
  $(this).closest('li').addClass('active');	
  var checkElement = $(this).next();
  if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
    $(this).closest('li').removeClass('active');
    checkElement.slideUp('normal');
  }
  if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
    $('#RightMenu ul ul:visible').slideUp('normal');
    checkElement.slideDown('normal');
  }
  if($(this).closest('li').find('ul').children().length == 0) {
    return true;
  } else {
    return false;	
  }		
});
});
} )( jQuery );


function wiki_link() {
	if (confirm('Following this link will open a new tab for the Seal Online Wikia, a 3rd party site that can be edited by users. Information on this site may be inaccurate.'))
	{
		window.open("http://sealonline.wikia.com/wiki/Main_Page", "_blank");
	}
}



