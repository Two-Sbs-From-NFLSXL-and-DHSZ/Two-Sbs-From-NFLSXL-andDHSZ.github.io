function nav ( ind ) 
{
	document.write ( "<div id = 'header' > " ) ;
    document.write ( "<a href = 'main.html'> <img src = '../repository/title.jpg' > </a> " ) ;
    document.write ( "</div>" ) ;

    document.write ( "<nav id = 'Navigation' > " ) ;
    
    document.write ( "<a href = 'search.html' id = 'nav-search' class = 'Navi " ) ;

    if ( ind == 1 ) 
        document.write ( "hovered' " ) ;
    else 
        document.write ( "'" ) ;

    document.write ( ">" ) ;

    document.write ( "Search" ) ;
    document.write ( "</a>" ) ;
    
    document.write ( "<a href = 'prac.html' id = 'nav-prac' class = 'Navi " ) ;

    if ( ind == 1 ) 
        document.write ( "hovered' " ) ;
    else 
        document.write ( "'" ) ;

    document.write ( ">" ) ;

    document.write ( "Practice" ) ;
    document.write ( "</a>" ) ;

	document.write ( "<a href = 'experiment.html' id = 'nav-exp' class = 'Navi " ) ;

    if ( ind == 2 ) 
        document.write ( "hovered' " ) ;
    else 
        document.write ( "'" ) ;

    document.write ( ">" ) ;

    document.write ( "Experiment" ) ;
    document.write ( "</a>" ) ;

	document.write ( "<a href = 'info.html' id = 'nav-info' class = 'Navi " ) ;

    if ( ind == 3 ) 
        document.write ( "hovered' " ) ;
    else 
        document.write ( "'" ) ;

    document.write ( ">" ) ;

    document.write ( "Information" ) ;
    document.write ( "</a>" ) ;

	document.write ( "<a href = 'schedule.html' id = 'nav-sche' class = 'Navi " ) ;

    if ( ind == 4 ) 
        document.write ( "hovered' " ) ;
    else 
        document.write ( "'" ) ;

    document.write ( ">" ) ;

    document.write ( "Schedule" ) ;
    document.write ( "</a>" ) ;

	document.write ( "<a href = 'about.html' id = 'nav-about' class = 'Navi " ) ;

    if ( ind == 5 ) 
    	document.write ( "hovered' " ) ;
    else 
        document.write ( "'" ) ;

    document.write ( ">" ) ;

    document.write ( "About Us" ) ;
    document.write ( "</a>" ) ;

    document.write ( "</nav>" ) ; 
}