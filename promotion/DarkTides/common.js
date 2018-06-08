<!--

//home click
function GoHome(){
	setCookie( "DarkTides", "done");
	document.location.href = "/";
}


function setCookie( name, value ){
	var today = new Date();
	today.setTime( today.getTime() );	
	//var expires_date = new Date( today.getTime() + (1000 * 60 * 60) );		// 1 hour
	var expires_date = new Date( today.getTime() + (1000 * 30) );		//30 second
	document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + expires_date.toGMTString() + ";"
}

function getCookie( name ){
  var nameOfCookie = name + "=";
  var x = 0;
        while ( x <= document.cookie.length )
        {
                var y = (x+nameOfCookie.length);
                if ( document.cookie.substring( x, y ) == nameOfCookie ) {
                        if ( (endOfCookie=document.cookie.indexOf( ";", y )) == -1 )
                                endOfCookie = document.cookie.length;
                        return unescape( document.cookie.substring( y, endOfCookie ) );
                }
                x = document.cookie.indexOf( " ", x ) + 1;
                if ( x == 0 )
                        break;
        }
        return "";
}


//-->