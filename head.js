function head ( str )
{
	document.write ( `<title id = "tit"> ${ str } - International Test Assistant </title>` ) ; 
	document.write ( `<link rel = 'stylesheet' type = 'text/css' href = '${ str.toLowerCase () }.css' > ` ) ;
}