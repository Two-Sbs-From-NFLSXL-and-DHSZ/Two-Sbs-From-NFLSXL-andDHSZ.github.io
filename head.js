function head ( str )
{
	document.write ( `<title id = "tit"> ${ str } </title>` ) ; 
	document.write ( `<link rel = 'stylesheet' type = 'text/css' href = '${ str.toLowerCase () }.\
		css' >` ) ;
}