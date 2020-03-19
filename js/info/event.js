window.onscroll = function ()
{
	if ( document.querySelector ( ".footer" ).offsetTop < document.documentElement.scrollTop + 750 )
		document.querySelector ( ".leftnav" ).style.opacity = ( document.querySelector ( ".footer" ).offsetTop - document.documentElement.scrollTop - 650 ) / 100 ;
	else
		document.querySelector ( ".leftnav" ).style.opacity = 1 ;
}

function f ( id )
{
	var dis = document.getElementById ( id ).offsetTop + document.querySelector ( ".intro" ).offsetTop ;
	window.scrollTo ( { top: dis , behavior: "smooth" } ) ;
}