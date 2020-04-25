var idlist = [] ;
idlist [ 0 ] = document.querySelector ( ".exp" ) ;
idlist [ 1 ] = document.querySelector ( ".info" ) ;
idlist [ 2 ] = document.querySelector ( ".sche" ) ;

window.onscroll = function ()
{
	if ( window.screen.width > window.screen.height )
	{
		for ( i = 0 ; i < idlist.length ; i++ )
			if ( document.documentElement.scrollTop > ( idlist [ i ].offsetTop + document.querySelector ( ".model").offsetTop - idlist [ i ].offsetHeight ) )
			{
				idlist [ i ].style.animation = "fade-in 0.5s ease-in" ;
				idlist [ i ].style.opacity = 1 ;
			}
	}
}
