function f ()
{
	var pwd = document.getElementById ( "pwd" ).value ;

	if ( pwd == "zymtxdy123" )
	{
		document.cookie = "verified = true; expires = Fri, 31 Dec 9999 23:59:59 GMT "
		window.location.href = "main.html" ;
	}
}

function getCookie(cookie_name) 
{
    var allcookies = document.cookie ;
	
	var cookie_pos = allcookies.indexOf ( cookie_name ) ;

    if ( cookie_pos != -1 ) 
    {
        cookie_pos = cookie_pos + cookie_name.length + 1 ; 
        
        var cookie_end = allcookies.indexOf ( ";" , cookie_pos ) ;
            
        if ( cookie_end == -1 )
            cookie_end = allcookies.length;

        var value = unescape ( allcookies.substring (cookie_pos , cookie_end ) ) ;  
    }
   	
   	return value;
}

function verify ()
{
	var vc = getCookie ( "verified" ) ;

	if ( vc == "true" ) 
		window.location.href = "main.html" ;
}

verify () ;