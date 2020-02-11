var left = document.getElementById ( "left" ) ;
var right = document.getElementById ( "right" ) ;
var idm = document.getElementById ( "title-month" ) ;
var idy = document.getElementById ( "title-year" ) ;
var context = document.getElementById ( "content" ) ;
var t = new Date () ;
var yy = t.getFullYear () ;
var mm = t.getMonth () ;
var cd = t.getDate () ;
var ccd = cd ;
var cm = t.getMonth () ;
var cy = t.getFullYear () ;

var md = [ 31 , 28 , 31 , 30 , 31 , 30 , 31 , 31 , 30 , 31 , 30 , 31 ] ;

function ctt () 
{
	var t = new Date ( yy , mm , 1 ) ;

	if ( ( mm > cm && yy == cy ) || yy > cy ) cd = 0 ;
	else if ( mm < cm || yy < cy ) cd = 32 ;
	else cd = ccd ;

	if ( yy % 4 == 0 && yy % 100 != 0 || yy % 400 == 0) 
	{
		md [ 1 ] = 29 ;
	}

	str = "<tr id = 'first' > " ;

	week = [ "sun" , "mon" , "tue" , "wed" , "thu" , "fri" , "sat" ] ;

	for ( var i = 0 ; i < 7 ; i++ ) 
		str += `<th> ${ week [ i ] } </th>` ;

	str += "</tr> <tr>" ;

	t.setDate ( 1 ) ;

	for ( var i = 1 ; i <= t.getDay () ; i++ ) 
		str += "<th> </th>" ;

	var count = t.getDay () ;

	for ( var i = 1 ; i <= md [ mm ] ; i++ )
	{
		if ( cd <= i ) str += `<th style = "color: #4169E1" > ${ i } </th>` ;
		else str += `<th style = "color: #B0C4DE" > ${ i } </th>` ;

		count++ ;

		if ( count == 7 ) 
		{
			str += "</tr> <tr>" ;

			count = 0 ;
		}


	}

	t.setDate ( md [ mm ] ) ;

	for ( var i = t.getDay () + 1 ; i < 7 ; i++ ) 
		str += "<th> </th>" ;

	str += "</tr>" ;

	context.innerHTML = str ;
}

function hd ()
{
	var t = new Date ( yy , mm , 1 ) ;

	str = "<h2>" ;

	switch ( mm ) 
	{
		case 0 : 
			str += "January" ;
			break ;
		case 1 : 
			str += "February" ;
			break ;
		case 2 : 
			str += "March" ;
			break ;
		case 3 : 
			str += "April" ;
			break ;
		case 4 : 
			str += "May" ;
			break ;
		case 5 : 
			str += "June" ;
			break ;
		case 6 : 
			str += "July" ;
			break ;
		case 7 : 
			str += "August" ;
			break ;
		case 8 : 
			str += "September" ;
			break ;
		case 9 : 
			str += "October" ;
			break ;
		case 10 : 
			str += "November" ;
			break ;
		case 11 : str += "December" ;
	}

	str += "</h2>" ;

	idm.innerHTML = str ; 

	str = `<h2> ${ t.getFullYear () } </h2>` ;

	idy.innerHTML = str ;
}

left.onclick = function ( e ) 
{
	e.preventDefault () ;

	if ( mm == 0 ) 
	{
		yy-- ;
		mm = 11 ;
	}
	else
		mm-- ;

	hd () ;

	ctt () ;
}

right.onclick = function rightevent ( e ) 
{
	e.preventDefault () ;

	if ( mm == 11 ) 
	{
		yy++ ;
		mm = 0 ;
	}
	else
		mm++ ;

	hd () ;

	ctt () ;
}

hd () ;
ctt () ;