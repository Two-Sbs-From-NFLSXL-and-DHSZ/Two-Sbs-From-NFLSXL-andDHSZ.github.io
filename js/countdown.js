var sat = [ 314 , 606 , 829 , 1003 , 1107 , 1205 ] ;
var act = [ 208 , 404 , 613 , 718 , 912 , 1024 , 1212 ] ;
var ap = 504 ;
var alevel = 511 ;

var dict = [ { id: '' , value: 0 } , { id: '' , value: 0 } , { id: '' , value: 0 } , { id: '' , value: 0 } ] ;

var md = [ 31 , 28 , 31 , 30 , 31 , 30 , 31 , 31 , 30 , 31 , 30 , 31 ] ;

function day ( m1 , d1 , m2 , d2 )
{
	m2 -= 1 ;

	if ( m2 < m1 || ( m1 == m2 && d2 < d1 ) ) return -1 ;

	var count = d2 - d1 ;

	for ( var i = m1 ; i < m2 ; i++ )
		count += md [ i ] ;

	return count ;
}

function countdown ()
{
	var cd = new Date () ;
	var cdm = cd.getMonth () ;
	var cdd = cd.getDate () ;
	var yy = cd.getFullYear () ;

	if ( yy % 4 == 0 && yy % 100 != 0 || yy % 400 == 0) 
	{
		md [ 1 ] = 29 ;
	}

	var i = 0 ; 
	
	dict [ 0 ].id = "A-level" ;
	dict [ 0 ].value = alevel ; 

	while ( day ( cdm , cdd , parseInt ( sat [ i ] / 100 ) , sat [ i ] % 100 ) == -1 ) 
		i++ ;

	dict [ 1 ].id = "SAT" ;
	dict [ 1 ].value = sat [ i ] ; 

	i = 0 ;

	while ( day ( cdm , cdd , parseInt ( act [ i ] / 100 ) , act [ i ] % 100 ) == -1 ) 
		i++ ;

	dict [ 2 ].id = "ACT" ;
	dict [ 2 ].value = act [ i ] ; 

	i = 0 ;

	dict [ 3 ].id = "AP" ;
	dict [ 3 ].value = ap ;

	dict.sort ( function ( a , b ) { return a.value - b.value } ) ;

	for ( var i = 0 ; i < 4 ; i++ ) 
	{
		var d = day ( cdm , cdd , parseInt ( dict [ i ].value / 100 ) , dict [ i ].value % 100 ) ;

		if ( d < 0 ) d = 0 ;

		document.write ( `<a href = 'schedule/${ dict [ i ].id.toLowerCase () }.html' style = 'color: #00DFB9' > <p> <span ` ) ;

		if ( d <= 10 ) 
			document.write ( "class = 'red' > " ) ;
		else 
			document.write ( '> ' ) ;

		document.write ( `${ d } </span> day` ) ;

		if ( d >= 2 ) 
			document.write ( 's' ) ;

		if ( dict [ i ].id == "SAT" || dict [ i ].id == "ACT" ) 
			document.write ( ` before next ${ dict [ i ].id } test </p> </a>` ) ;
		else
			document.write ( ` before ${ yy } ${ dict [ i ].id } test </p> </a>` ) ;
	}
}

countdown () ;