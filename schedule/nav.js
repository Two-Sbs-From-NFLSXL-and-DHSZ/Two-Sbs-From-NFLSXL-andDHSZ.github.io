function nav () 
{
	document.write ( "<div id = 'header' > " ) ;
    document.write ( "<a href = '../main.html'> <img src = '../repository/title.jpg' > </a> " ) ;
    document.write ( "</div>" ) ;

    document.write ( "<nav id = 'Navigation' > " ) ;
    
    document.write ( "<a href = '../search.html' id = 'nav-search' class = 'Navi' > Search </a> " ) ;
    
    document.write ( "<a href = '../prac.html' id = 'nav-prac' class = 'Navi' > Practice </a> " ) ;

	document.write ( "<a href = '../experiment.html' id = 'nav-exp' class = 'Navi' > Experiment </a> " ) ;

	document.write ( "<a href = '../info.html' id = 'nav-info' class = 'Navi' > Information </a> " ) ;

	document.write ( "<a href = '../schedule.html' id = 'nav-sche' class = 'Navi hovered' > Schedule </a> " ) ;

	document.write ( "<a href = '../about.html' id = 'nav-about' class = 'Navi' > About Us </a> " ) ;

    document.write ( "</nav>" ) ; 
}