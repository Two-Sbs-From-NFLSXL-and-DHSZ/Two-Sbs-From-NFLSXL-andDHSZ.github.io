function f ()
{
	var pwd = document.getElementById ( "pwd" ).value ;

	if ( pwd == "zymtxdy123" )
	{
		document.cookie = "verified = true; expires = Fri, 31 Dec 9999 23:59:59 GMT" ;

		if ( getCookie ( "lang" ) == "zh" )
			window.location.href = "zh-cn/main.html" ;
		else if ( getCookie ( "lang" ) == "jyut" )
			window.location.href = "zh-jyut/main.html" ;
		else if ( getCookie ( "lang" ) == "fan" )
			window.location.href = "zh-fan/main.html" ;
		else
			window.location.href = "en/main.html" ;
	}
}

function verify ()
{
	var vc = getCookie ( "verified" ) ;

	if ( vc == "true" ) 
		if ( getCookie ( "lang" ) == "zh" )
			window.location.href = "zh-cn/main.html" ;
		else if ( getCookie ( "lang" ) == "jyut" )
			window.location.href = "zh-jyut/main.html" ;
		else if ( getCookie ( "lang" ) == "fan" )
			window.location.href = "zh-fan/main.html" ;
		else
			window.location.href = "en/main.html" ;
}

verify () ;