function head ( str )
{
	document.write ( `<title id = "tit"> ${ str } - International Test Assistant </title>` ) ; 
	document.write ( `<div id = "gcs"> <link rel = 'stylesheet' type = 'text/css' href = '${ str.toLowerCase () }.\
		css' > </div>` ) ;
}