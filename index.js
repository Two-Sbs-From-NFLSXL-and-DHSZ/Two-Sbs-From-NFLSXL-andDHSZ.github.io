function f ()
{
	var pwd = document.getElementById ( "pwd" ).value ;

	if ( pwd == "zymtxdy123" )
	{
		document.cookie = "verified = true; expires = Fri, 31 Dec 9999 23:59:59 GMT "
		window.location.href = "main.html" ;
	}
}

function verify ()
{
	var vc = getCookie ( "verified" ) ;

	if ( vc == "true" ) 
		window.location.href = "main.html" ;
}

verify () ;