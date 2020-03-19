var count = 0 ; 

function roll ( n , del )
{
	var id = [] ;

	for ( var i = 0 ; i < n ; i++ )
		id [ i ] = document.getElementById ( "r" + ( i + 1 ).toString () ) 

	id [ count ].style.animation = 'fade-out 1s ' ;
	id [ count ].style.opacity = 0 ;
	document.getElementById ( "i" + ( count + 1 ).toString () ).style.opacity = .5 ;

	if ( del <= 0 )
	{
		if ( del == -1 ) 
			count = ( count + n - 1 ) % n ;
		else
			count = ( count + 1 ) % n ;
	}
	else
		count = del - 1 ;

	id [ count ].style.animation = 'fade-in 1s ' ;
	id [ count ].style.opacity = 1 ;
	document.getElementById ( "i" + ( count + 1 ).toString () ).style.opacity = .75 ;
}